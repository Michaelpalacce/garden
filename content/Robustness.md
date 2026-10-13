---
publish: true
created: "[[2024-08-05]]"
modified: 2026-01-11T18:37:54.319Z
published: "[[2024-08-05]]"
parent: "[[System Design]]"
state:
  - sapling
date: "[[2024-08-05]]"
relates:
  - "[[Reliability]]"
opposes:
  - "[[Volatile]]"
links:
description:
---

> [!info]+
> A robust application/infra/component is one that can suffer third party system failures with minimal side effects.

# In Programming

Efficient [[Error Handling]] and [[Sensible Defaults]] can help **increase the robustness** of the software.

# In Kubernetes Operator

The [[Kubernetes - Control Loop]] is implemented with [[Idempotent|Idempotency in mind]].
