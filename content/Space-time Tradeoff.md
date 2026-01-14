---
publish: true
description: Trading space usage for time and vice versa. Higher space usage, less time, more time, lower space usage.
created: "[[2024-10-10]]"
modified: 2026-01-11T15:42:18.744+02:00
published: "[[2024-10-10]]"
cssclasses: ""
parent: "[[Performance]]"
state:
  - evergreen
date: "[[2024-10-10]]"
relates:
  - "[[Optimization]]"
links:
  - https://en.wikipedia.org/wiki/Space%E2%80%93time_tradeoff
---

> [!info]+
> A **space–time trade-off**, also known as **time–memory trade-off** or **the algorithmic space-time continuum** in computer science is a case where **an algorithm or program trades increased space usage with decreased time**. Here, _space_ refers to the **data storage consumed in performing a given task (RAM, HDD, etc.)**, and _time_ refers to the **time consumed in performing a given task** (computation time or response time).

It's important to examine how this trade-off affects your program. Sometimes, the effect is very positive and a bit of extra space can increase the CPU time 2x or 5x. Sometimes, the trade-off is linear. Sometimes it's way worse.
