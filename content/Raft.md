---
publish: true
description: A lightweight and easier to understand replacement of PAXOS. A Consensus Algorithm
created: "[[2024-09-17]]"
modified: 2026-02-01T00:06:56.805+02:00
published: "[[2024-09-17]]"
cssclasses: ""
parent:
  - "[[Consensus Algorithm]]"
state:
  - evergreen
date: "[[2024-09-17]]"
relates:
  - "[[PAXOS]]"
opposes:
  - "[[Asynchronous Replication]]"
links:
  - https://qdrant.tech/documentation/guides/distributed_deployment/
  - https://docs.scylladb.com/manual/stable/architecture/raft.html
  - https://raft.github.io/
---

> [!info]+
> RAFT is a [[Consensus Algorithm]] designed as a replacement for [[PAXOS]]. It's more lightweight and easier to implement than PAXOS. 

See the official white paper here: [[raft.pdf]]

# Terminology

- `Leader` is the node elected to handle log replication along other nodes
- `Follower` is a node that follows the designated leader and can handle traffic. 

# Overview

RAFT is a Consensus Algorithm designed as a replacement for PAXOS. 

It is more lightweight, since instead of following a peer to peer mentality and each node having the ability to act as a leader, RAFT only has one leader.

In it's essence it implements a distributed, consistent, replicated log across members (nodes). 

# Process

RAFT implements consensus by first electing a "Leader" from all the followers if a leader is not available. After the leader has been elected, RAFT gives full responsibility to it for managing the replicated log. The leader accepts log entries from clients, replicates them on other nodes and then tells nodes when it's safe to apply log entries to their state machines.

# [[Leader Election]]

Achieved through a [[Heartbeat]] mechanism, where a follower will reman a follower as long as it receives valid heartbeats from a leader or a candidate leader. A leader sends periodic heartbeats to all followers to maintain his leadership.

If a follower does not receive any communication over a period called the [[Leader Election Timeout]], it assumes no viable leader and begins an election to choose a new leader.

Followers first become candidates and submit their vote, then if they get majority of the votes in a cluster, they get elected. Followers will not vote for candidates that have less logs (current term index and current index) than them and will reject such candidates votes, thus ensuring that the new leader has the majority of logs distributed to it.

# Traffic distribution

In traditional sense when a system is using RAFT, all traffic is distributed to the Leader and he is responsible for both read and write requests.

# Node Configuration Changes

In Raft, when a system configuration (the nodes participating in the consensus algorithm) changes, the cluster needs to still be operable. A configuration change may be:

- A server crashed and needs to be replaced
- A server needs to be updated
- A server has been [[Network Partition\|partitioned]]
- Change degree of replication

In order to ensure safety, there mustn't be a point where two leaders are ever elected. This is done via a 2 phase approach.

First phase, Raft switches the cluster to a "Transitional Configuration" called [[Joint Consensus]]. This means:

- Log entries are replicated to all servers in both configurations.  
- Any server from either configuration may serve as leader. 
- Agreement (for elections and entry commitment) requires separate majorities from both the old and new configurations.

# Log [[Compaction]]

While Raft stores logs, those logs if never cleaned up will grow indefinitely. That in normal operation cannot happen. For example, a log may be added that a piece of data has been inserted, then another, that it has been deleted. In sense, we don't need to keep this information at all.

Log compaction in Raft is achieved through snapshots. Each follower performs snapshots of it's own data.

In cases where a new node is added, a leader may send it's snapshot as well as any logs after that to it.

# Performing Updates

An automated process that does:
- Checks if the raft system healthy and in sync? 
	- If you shut down a nice while it's catching up (syncing snapshots), then you may lose quorum, so perform updates only when your your cluster is healthy 
- [[Drain]] the node if the system supports it
- Perform quorum math to ensure that you will have high quorum even during the restart and can afford one more node loss 

# Multi Raft 

Through [[Sharding]], you can achieve this. This way multiple rest leaders exist for different subsets of data. This means that instead of one raft leader eventually becoming the bottleneck, the responsibility is distributed. 

# How is chattiness reduced? 

- **Use of [[gRPC]]** would mean that one single pipe is used between two servers 
- **Range and shard merging** would mean that instead of sending multiple small requests, requests for ranges and shards directed to the same node are merged in one call 
- **Hibernation on no requests**. After a few minutes of no requests, the shard can become dormant. The first write or read would wake the cluster back up. 

# Improvements
## Leases

While not part of the standard Raft algorithm, a lease is a improvement that may be implemented by raft systems:

Think of it like a **contract** signed by the Followers.

1. ​**The Proposal:** The Leader says to the Followers, "I want to be the sole authority for this shard for the next 10 seconds. Do you agree?"
2. ​**The Promise:** The Followers vote 'Yes' via the standard Raft log. Once committed, the Followers promise **not** to elect a new leader or grant a lease to anyone else until that timer expires.
3. ​**Local Reads:** For those 10 seconds, the Leader can answer read requests **immediately** from its local memory without talking to anyone. It _knows_ it is the boss because the Followers are contractually obligated to wait.

## Follower Reads

To allow a follower to answer client request, raft systems usually use [[Read Indexing]] or [[Safe Timestamps]]

### Read Indexing 

When you ask a Follower for data, the Follower:
- Asks the Leader: "What is your current Commit Index?"
- The Leader says: "I've committed up to Log #500."
- The Follower waits until its own local log reaches #500
- ​Only then does it give you the data.
​Result: You get the latest data, but you still had to "chat" with the leader

### Safe Timestamps

This is the most efficient version. The Leader periodically broadcasts a "Closed Timestamp" - essentially a promise saying, _"I have replicated everything that happened before 10:01:00 AM."_

- ​The Follower can now answer any read request for "Data as of 10:00:59 AM" instantly.
- ​**The Trade-off:** You are technically reading data that is a few milliseconds/seconds old, but it is **internally consistent.**

# Raft Visualization

<iframe src="https://raft.github.io/raftscope/index.html" title="raft visualization" aria-hidden="true" style="border: 0px; width: 800px; height: 580px; margin-bottom: 20px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></iframe>