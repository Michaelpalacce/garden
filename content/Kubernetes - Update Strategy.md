---
publish: true
description: How to handle updates for resources in kubernetes?
created: "[[2026-01-31]]"
modified: 2026-01-31T23:50:32.533+02:00
published: "[[2026-01-31]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - sapling
date: "[[2026-01-31]]"
relates:
  - "[[Kubernetes - Statefulset]]"
  - "[[Kubernetes - Deployment]]"
links:
  - https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/
---

# Partitioned Rolling Updates In [[Kubernetes - Statefulset\|StatefulSets]]

The RollingUpdate update strategy can be partitioned, by specifying a `.spec.updateStrategy.rollingUpdate.partition`. If a partition is specified, all Pods with an ordinal that is greater than or equal to the partition will be updated when the StatefulSet's `.spec.template` is updated. All Pods with an ordinal that is less than the partition will not be updated, and, even if they are deleted, they will be recreated at the previous version. If a StatefulSet's `.spec.updateStrategy.rollingUpdate.partition` is greater than its `.spec.replicas`, updates to its `.spec.template` will not be propagated to its Pods. In most cases you will not need to use a partition, but they are useful if you want to stage an update, roll out a canary, or perform a phased roll out. 