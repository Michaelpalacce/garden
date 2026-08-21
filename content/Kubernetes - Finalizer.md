---
publish: true
created: "[[2024-08-01]]"
modified: 2026-01-12T20:39:11.155Z
published: "[[2024-08-01]]"
parent: "[[Kubernetes]]"
state:
  - sapling
date: "[[2024-08-01]]"
relates:
opposes:
links:
  - https://kubernetes.io/blog/2021/05/14/using-finalizers-to-control-deletion/
description:
aliases:
---

> [!info]+
> `Finalizers` are a way for Kubernetes [[Kubernetes - Operator|Operators]] to attach extra protection for volumes.

For example:

- You are writing a CSI and you want to attach to the `pvc` deletion and before a `pvc` is deleted, to actually clean up the data

# Custom Finalizer

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
  finalizers:
    - broadcom.com/stef
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```
