---
{"publish":true,"description":"A way to recalculate partitions in an event of a node failure.","created":"[[2024-09-06]]","modified":"2026-01-11T15:38:47.324+02:00","published":"[[2024-09-06]]","cssclasses":"","parent":"[[System Design]]","state":["sapling"],"date":"[[2024-09-06]]","relates":["[[Cassandra]]"],"opposes":null,"links":["https://interviewnoodle.com/how-to-use-consistent-hashing-in-a-system-design-interview-b738be3a1ae3","https://highscalability.com/consistent-hashing-algorithm/"],"aliases":null}
---

> [!info]+
> Consistent Hashing is an algorithm of partitioning and storing data in a distributed manner with limited disruption of the service. [[Cassandra]] does this during [[Cassandra - Partitioning\|Partitioning]]. When we say consistent Hashing, we mean an **algorithm where in an event of node failure, we won't recalculate all of the hashes, but just a part**.

Hashes are calculated based on a primary key. Data is distributed in a ring of nodes. In the event of a node failure, we will recalculate only that specific part of the ring.
