---
publish: true
created: "[[2024-09-06]]"
modified: 2026-01-11T15:38:01.560+02:00
published: "[[2024-09-06]]"
cssclasses: ""
parent: "[[Failover]]"
state:
  - evergreen
date: "[[2024-09-06]]"
relates:
  - "[[Active - Passive Configuration]]"
  - "[[High Availability]]"
links:
  - https://www.designgurus.io/course-play/grokking-system-design-fundamentals/doc/high-availability-and-fault-tolerance
---

> [!info]+
> A setup of two or more systems, where they are both configured to serve some sort of workload.

Alternatively, **one can be in standby mode** and only turn on when the first one is down.

# Pros and cons

- Pros
	- [[High Availability]] is achieved 
	- No interruption for clients or users
	- Needed for mission critical systems
- Cons
	- More complex to setup
	- More expensive in a [[Pay As You Go]] model
	- Harder to trace errors