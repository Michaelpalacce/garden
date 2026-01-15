---
publish: true
description: The control loop is a non-terminating loop that regulates the state of the system.
created: "[[2024-08-15]]"
modified: 2026-01-15T02:43:44.277+02:00
published: "[[2024-08-15]]"
cssclasses: ""
parent: "[[Kubernetes - Operator]]"
state:
  - evergreen
date: "[[2024-08-15]]"
relates:
  - "[[Control Loop]]"
links:
  - https://kubernetes.io/docs/concepts/architecture/controller/
aliases:
---

> [!info]+
> A control loop is a **non-terminating loop** that **aims to bring the state of the system closer to the desired state**.

The control loop is implemented by [[Kubernetes - Controller]], which are the building blocks of the [[Kubernetes - Control Plane]].

# Desired ([[Kubernetes - Spec\|Spec]]) VS Current ([[Kubernetes - Status\|Status]]) State

A Kubernetes controller **reads both the Status and the Spec stanza**, of the [[Custom Resource Definition]] and **pushes the Status closer to the Spec**, one step at a time. 

## Idempotency 

The [[Idempotent]] nature of the controller is required in an environment such as [[Kubernetes]], as **many actors** act potentially on your resource and the **high [[Volatile\|Volatility]] of the environment**.

## [[Robustness]]

# Handling Errors 

As a general rule, when an **error occurs** during the control loop, the **err is immediately returned** and **no further actions are taken**. The controller **schedules a retry** of the reconciliation of the [[Custom Resource Definition]], following an [[Exponential Backoff]] mechanism.
