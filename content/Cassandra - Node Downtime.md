---
publish: true
aliases:
  - Node Downtime
created: "[[2023-03-04]]"
modified: 2026-01-12T20:45:13.469Z
published: "[[2023-03-04]]"
parent: "[[Cassandra]]"
state: sapling
date: "[[2023-03-04]]"
---

# How Is Data Stored When A Node Is Down And There Is An Insert

The [[Cassandra - Coordinator Node|Coordinator Node]] stores the hit and replicates it to other nodes. When the node that was down comes back up, the misses are then replayed.
