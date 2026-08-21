---
publish: true
description: Ability for an application to recover from crashes
created: "[[2024-08-05]]"
modified: 2026-01-11T18:28:58.275Z
published: "[[2024-08-05]]"
parent: "[[System Design]]"
state:
  - sapling
date: "[[2024-08-05]]"
relates:
  - "[[Robustness]]"
opposes:
  - "[[Flakiness]]"
aliases:
---

> [!info]+
> The reliability of an application/infra/component is **determined by it's ability to recover from crashes**.

# Examples

- [[Availability]]: The system should be available 99.9% of the time.
- [[Fault Tolerance]]: The system should continue to operate in the event of hardware or software failures.
- [[Disaster Recovery]]: The system should have a backup and recovery plan in case of catastrophic failures.
