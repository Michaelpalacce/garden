---
publish: true
aliases:
  - Brewer's Theorem
  - Consistency Availability Partition Tolerance
description: A theorem of the shortcomings of distributed systems.
created: "[[2024-09-07]]"
modified: 2026-01-31T22:31:58.247+02:00
published: "[[2024-09-07]]"
cssclasses: ""
parent: "[[System Design]]"
state:
  - evergreen
date: "[[2024-09-07]]"
relates:
  - "[[Consistency]]"
  - "[[Availability]]"
  - "[[Partition Tolerance]]"
  - "[[Network Partition]]"
---

> [!info]+
> A highly distributed system can provide 2 of: Consistency, Availability and Partition Tolerance at most.

- Consistency: when reading data, every request receives the _most recent_ data or an error is returned
- Availability: when reading data, every request receives _a non error response_, without the guarantee that it is the _most recent_ data
- Partition Tolerance: when an arbitrary number of network requests between nodes fail, the system continues to operate as expected. 

![[Assets/1-CAP Theorem Example.png|600]]

# Reasoning

The core of the reasoning is as follows. It is impossible to guarantee that a network partition will not occur (see [[The Fallacies of Distributed Computing]]). Therefore in the case of a partition we can either cancel the operation (increasing consistency and decreasing availability) or proceed (increasing availability but decreasing consistency). 
