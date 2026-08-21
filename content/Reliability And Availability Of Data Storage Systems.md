---
publish: true
created: "[[2025-06-26]]"
modified: 2026-01-10T22:53:01.310Z
published: "[[2025-06-26]]"
parent: "[[DevOps Index]]"
state:
  - tree
date: "[[2025-06-26]]"
relates:
  - "[[Rigidity]]"
  - "[[Databases]]"
description:
---

# [[Redundancy]] and [[Replication]]

- Eliminates single points of failure.
- Data replication across multiple Availability Zones or multi region deployments for cloud databases.
- RAID configurations and redundant hardware for on-premises systems.

# [[Backup]] and Recovery Strategies

- Defining clear [[Recovery Time Objective|RTO]] and [[Recovery Point Objective|RPO]] targets
- Automated backups and automated recovery procedures
- Regular testing restore procedures to ensure their efficacy

# [[Monitoring]] and [[Alerting]]

- Monitor key metrics
  - IOPS
  - Latency
  - Storage
  - Conencctions
  - Error Rates
  - CPU
  - Memory
- Setting up alerts for anomalies and threshold breaches allows for proactive intervention before na incident impacts users

# Performance Optimization

- Optimize queries
- Proper schema design
- Correct type of storage for the job

# Security

- Encrypt at rest and in transit.
- RBAC with [[Least Privilege Principle]]
