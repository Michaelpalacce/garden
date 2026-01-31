---
publish: true
description: What are the responsibilities of operators to ensure that distributed systems can be updated correctly.
created: "[[2026-01-31]]"
modified: 2026-02-01T00:00:47.961+02:00
published: "[[2026-01-31]]"
cssclasses: ""
parent: "[[Kubernetes - Operator]]"
state:
  - tree
date: "[[2026-01-31]]"
relates:
  - "[[Distributed Systems]]"
  - "[[Network Partition]]"
  - "[[Partition Tolerance]]"
  - "[[Availability]]"
  - "[[Kubernetes - Update Strategy]]"
opposes:
---

> [!info]+
> In [[Distributed Systems]] running on kubernetes, operators play a vital role in orchestrating a safe and efficient rollout.

# Step 1: Prepare node

- Drain the node of connections
- Remove leadership if [[Leader Election]] was fine before

# Step 2: Partition

If working with [[Kubernetes - Statefulset\|StatefulSets]], use [[Kubernetes - Update Strategy#Partitioned Rolling Updates In Kubernetes - Statefulset StatefulSets\|partitioned]] rolling update. Update one by one and wait for stability before continuing the update. Even taking a minute or so between each update, so the nodes have time to replicate missed data is important. 

# Step 3: Ensure system stability by performing checks

Monitor and wait for the distributed system to report healthy and caught up before continuing updates. 

# Step 4: Continue Partitioning

Repeat steps 1-3 for the next node. 