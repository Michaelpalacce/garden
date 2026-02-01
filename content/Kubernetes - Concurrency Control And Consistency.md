---
publish: true
aliases:
  - Kubernetes - resourceVersion
description: How resourceVersion works for race conditions
created: "[[2024-08-12]]"
modified: 2026-02-01T12:22:21.467+02:00
published: "[[2024-08-12]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - tree
date: "[[2024-08-12]]"
relates:
  - "[[Kubernetes - Writing Good Operators]]"
  - "[[Race Condition]]"
links:
  - https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
research: false
---

# resourceVersion

- `resourceVersion` is a sort of **numerical hash** that is **changed each time the resource is changed**.
	- The **kubernetes api server uses that** to **determine if your request should be accepted or not**.
- It's part of the `metadata` stanza
- It is important to note that while the [[Kubernetes - Generation Field\|generation]] is modified only on spec changes, the `resourceVersion` is **modified always**.
