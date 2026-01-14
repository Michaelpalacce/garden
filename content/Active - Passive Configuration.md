---
publish: true
description: Failover strategy where one of the systems is on standby.
created: "[[2024-09-06]]"
modified: 2026-01-11T15:37:58.692+02:00
published: "[[2024-09-06]]"
cssclasses: ""
parent: "[[Failover]]"
state:
  - evergreen
date: "[[2024-09-06]]"
relates:
  - "[[Active - Active Configuration]]"
  - "[[Load Balancing|Load Balancer]]"
links:
  - https://www.designgurus.io/course-play/grokking-system-design-fundamentals/doc/high-availability-and-fault-tolerance
---

> [!info]+
> A setup of **two or more systems**, where **one is actively handling some sort of workload**, while **another identical copy** is standing **on standby**, usually [[Cold Start\|turned off]]. 

# Pros And Cons

- Pros
	- Cheaper if using a [[Pay As You Go]] model
	- Easier to configure, as no complicated [[Replication]] or [[High Availability]] setup is needed
	- Viable solution for non critical internal tools 
- Cons
	- Not a viable choice for mission critical components
	- No [[High Availability]], so downtime is expected
