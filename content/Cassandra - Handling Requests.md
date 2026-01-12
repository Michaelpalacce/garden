---
{"publish":true,"created":"[[2023-03-04]]","modified":"2026-01-12T22:45:05.309+02:00","published":"[[2023-03-04]]","cssclasses":"","parent":"[[Cassandra]]","state":["evergreen"],"date":"[[2023-03-04]]"}
---

# Process
1. Request is received by a [[Cassandra - Coordinator Node\|Coordinator Node]]. This can be any node.
2. The [[Cassandra Partitioning - Partition Token\|Partition Token]] is then generated and the correct nodes that will be used for CRUD operations are found based on the [[Cassandra - Partitioning#Process\|Partitioning Process]]
3. The request is then forwarded to the nodes that contain the data.
