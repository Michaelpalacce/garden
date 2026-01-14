---
publish: true
description: Data gets eventually replicated
created: "[[2025-09-07]]"
modified: 2026-01-11T15:30:24.348+02:00
published: "[[2025-09-07]]"
cssclasses: ""
parent: "[[Consistency]]"
state:
  - tree
date: "[[2025-09-07]]"
relates:
  - "[[Cassandra]]"
  - "[[Replication]]"
opposes:
  - "[[Immediate Consistency]]"
---

> [!info]+
> Property of [[Distributed Systems]] where **data consistency is not immediately ensured**, but it is **ensured that data will**, at dome point, **be [[Replication\|replicated]]**. 

# Pitfalls 

- Eventual consistency **should not be used when data must immediately be replicated**, *obviously*
	- **Bank transactions** need to be [[Immediate Consistency\|immediately consistent]].
	- **User registration** needs to be immediately consistent
- "Sleep Syncs" start appearing, those need to be avoided. **Never read data you just upserted**!
	- Instead of sleeping to fetch the data you just upserted, build the data object yourself. 
	- In some cases, if you know that uppity are expecting, you can do polling instead 
