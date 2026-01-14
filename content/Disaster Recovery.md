---
publish: true
description: A process of restoring data and service operations after a disaster (total data loss) ocurrs.
created: "[[2024-09-14]]"
modified: 2026-01-14T20:59:11.556+02:00
published: "[[2024-09-14]]"
cssclasses: ""
parent: "[[DevOps Index]]"
state:
  - evergreen
date: "[[2024-09-14]]"
relates:
  - "[[Resilience]]"
---

# Map Of Content

- [[Recovery Time Objective]]
- [[Recovery Point Objective]]
- [[Service Level Agreement]]
- [[Disaster Recovery Runbooks]] - a must for what needs to happen in case of a critical data crash. When you are tired and stressed, last thing you want is to have no way forward.
- [[Backup]] strategy
	- Follow the [[3-2-1 Backup Rule]] 
- [[Infrastructure As Code]] up enable automatic recovery 
- [[Monitoring]] and [[Alerting]]
- [[Geographic Failover]]
- [[Chaos Engineering]]
- [[Failure Recovery]]

# Notes 

- When thinking about disaster recovery, **think about** which **systems are mission critical** and **focus on first and foremost recovering them**. 
	- Document them! 
	- Relationships between them
		- May cause a [[Cascading Crash]]
- Testing and validation 
	- Regularly test the created run books in a replicated test environment
	- Simulate different disaster states, like data loss, data corruption, etc
- Post recovery steps
	- Include detailed instructions on what to do after a disaster scenario
	- Create automated validation run books 
	- Perform a [[Root Cause Analysis]] on what happened and inform your consumers
