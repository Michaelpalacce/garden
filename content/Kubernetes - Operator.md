---
publish: true
created: "[[2022-05-12]]"
modified: 2026-01-19T19:42:01.760+02:00
published: "[[2022-05-12]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - evergreen
date: "[[2022-05-12]]"
---

> [!done] What?
> Kubernetes Operators are just like human operators but they are an automated software that you deploy inside of a K8S cluster.

> [!note]
> A Kubernetes Operator is a Stateful application manager. It is responsible for controlling the state, configuration, version, etc. of a service.

They are deployed in case where we cannot rely on the  [[Kubernetes - Control Loop\|Kubernetes control loop]] to do everything for us. For example when we need to update a database. It may be a good idea to update the leader/master first and not take down the whole database cluster, but rather bring up the services one by one. 

Kubernetes Operators rely on [[Kubernetes - CRD\|CRD]]s (**C**ustom **R**esource **D**efinitions) for management.

# Map Of Content

- Getting started
	- [[kubebuilder]]
		- [[kubebuilder - Validation Markers]]
	- [[Kubernetes - Writing Good Operators]]
	- [[Kubernetes - Operator Structure]]
- [[Kubernetes - Controller\|Controllers]]
	- [[Kubernetes - Control Loop]]
- Basics
	- [[Kubernetes - Spec]]
	- [[Kubernetes - Status]]
- Advanced Topics
	- [[Kubernetes - Work Queue]]
	- [[Kubernetes - Cluster Api]]
	- [[Kubernetes - Getting Remote Cluster Credentials]]
	- [[Kubernetes - Get ApiVersion For Resources]]
	- [[Kubernetes - FieldIndexer]]
- Cluster API
	-  [[Kubernetes - Getting Remote Cluster Credentials With Go]]
- Operators
	- [SimpleSecrets](https://github.com/Michaelpalacce/SimpleSecrets)
	- [[go-ddns-controller]]
	- [[cert-manager]]
	- Infrastructure
		- [[Crossplane]]
		- [[tofu-controller]]
	- Databases
		- [[mariadb-operator]]
		- [[cnpg]]