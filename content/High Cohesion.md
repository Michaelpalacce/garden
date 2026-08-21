---
publish: true
created: "[[2025-09-07]]"
modified: 2026-01-11T13:28:58.628Z
published: "[[2025-09-07]]"
parent: "[[Software Design#Software Design Principles]]"
state:
  - sapling
date: "[[2025-09-07]]"
relates:
  - "[[Interface Segregation Principle]]"
opposes:
links:
aliases:
---

> [!info]+
> A [[Software Design|Software Design Principles]] where elements within a module, class or component are strongly related and work together to fulfil a single, well-defined purpose.

# In Development

Employ [[Interface Segregation Principle]]. Don't require concrete types, instead use interfaces and satisfy them.

## In [[Go]]

![[Go - Structs And Funcs Should Accept Interfaces And Return Concrete Types]]
