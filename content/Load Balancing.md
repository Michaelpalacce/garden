---
{"publish":true,"aliases":["Load Balancer"],"description":"Balance traffic between systems or clients","created":"[[2024-09-06]]","modified":"2026-01-11T15:36:37.692+02:00","published":"[[2024-09-06]]","cssclasses":"","parent":"[[System Design]]","state":["evergreen"],"date":"[[2024-09-06]]","relates":["[[Fault Tolerance]]"],"links":["https://www.designgurus.io/course-play/grokking-system-design-fundamentals/doc/introduction-to-load-balancing"]}
---

> [!info]+
> Load Balancers are used to increase the [[Performance]] of an endpoint, usually by means of [[Horizontal Scaling]].

# Map Of Content

- [[Death Spiral]]
- [[F5 Big IP]]
- [[AVI]]

# Types Of Load Balancers

- [[Layer 4 Load Balancer]] 
	- Reads information from the TCP packet and sends the request to the correct destination
- [[Layer 7 Load Balancer]] (Application Load Balancers)
	- Http Headers, URLs, etc
- Hardware Load Balancers
	- Physical devices designed specifically to load balance traffic.
- Software Load Balancers
	- Same as hardware, they use specific algorithms to distribute the trafic on user provided hardware.
- DNS Load Balancing
	- 

# Where Load Balancers Are Most Effective?

- Between the client and an API
- Between an [[API]] and an internal system
- Between an internal system and a [[Databases\|database]]

# [[Resilience]]

Usually load balancers will do liveness checks on the targets to verify that they are still up and running. In the event of a target being down, the LB will stop forwarding traffic there.

# Algorithms

- Round Robin
	- One target after another. 1,2,3,4,5,6, etc and then it loops
- Least Connections
	- Targets with least connections
- Weighted Round Robin
	- assigns weights to each server based on their capacity or performance
- Weighted Least Connetions
	- assigns weights to each server based on their capacity or performance
- IP Hash
	- [[Sticky Sessions]]
- Least Response Time
	- Targets that reply with least delay
- Random
	- Random
- Least Bandwidth
	- Targets that are consuming the least amount of network resources. 
	- Perhaps some may be uploading or downloading some data, so send the request elsewhere

# Stateless And Statefull LB

- Stateless is the general way to load balance
- Statefull LBs are what provide things like [[Sticky Sessions]] or Source IP Affinity

# [[Redundancy]] and [[Failover]]

- [[Active - Passive Configuration]]
- [[Active - Active Configuration]]
