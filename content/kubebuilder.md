---
publish: true
created: "[[2024-08-12]]"
modified: 2026-01-15T02:43:23.349+02:00
published: "[[2024-08-12]]"
cssclasses: ""
parent: "[[Kubernetes - Operator]]"
state:
  - sapling
date: "[[2024-08-12]]"
relates:
opposes:
links:
  - https://book.kubebuilder.io/getting-started
description:
aliases:
---


> [!info]+
> Kubebuilder is a [[Go]] [[SDK]] for [[Kubernetes]].
> 

# Map Of Content

- [[kubebuilder - Validation Markers]]
- [[kubebuilder - RBAC Markers]]

# Creating A New Project

```shell
kubebuilder init --domain=example.com
```

# Adding A New API

```shell
kubebuilder create api --group cache --version v1alpha1 --kind Memcached
```

The command will prompt you:
- If you want to create a [[Kubernetes - CRD\|Resource]]
- If you want to create an [[Kubernetes - Operator\|Operator]]

# Generate Manifests And Install Then

```shell
make manifests && make install
```

# Run Application

```shell
# This will run the application locally using your local kube config
make run
```
