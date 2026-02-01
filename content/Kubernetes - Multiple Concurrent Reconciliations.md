---
publish: true
aliases:
  - Kubernetes Operator - Race Conditions
description: How to scale your operator to handle more requests
created: "[[2026-02-01]]"
modified: 2026-02-01T12:29:30.659+02:00
published: "[[2026-02-01]]"
cssclasses: ""
parent: "[[Kubernetes - Operator]]"
state:
  - sapling
date: "[[2026-02-01]]"
relates:
  - "[[Race Condition]]"
  - "[[Kubernetes - Concurrency Control And Consistency]]"
---

# How? 

If you are using the [[controller-runtime]], it's easy:

```go
func (r *SomeReconciler) SetupWithManager(mgr ctrl.Manager) error {
    return ctrl.NewControllerManagedBy(mgr).
        For(&examplev1.Something{}).
        WithOptions(controller.Options{
            // This allows 10 goroutines to run Reconcile() simultaneously
            MaxConcurrentReconciles: 10, 
        }).
        Complete(r)
}

```

Internally [go work queue](https://pkg.go.dev/k8s.io/client-go/util/workqueue) is used. 

If not, the documentation of the work queue package explains it best what is needed:

```
Package workqueue provides a simple queue that supports the following features:

- Fair: items processed in the order in which they are added.
- Stingy: a single item will not be processed multiple times concurrently, and if an item is added multiple times before it can be processed, it will only be processed once.
- Multiple consumers and producers. In particular, it is allowed for an item to be reenqueued while it is being processed. In this case it will be processed again.
- Shutdown notifications.
```

# Race Conditions

The are multiple stages for preventing [[Race Condition\|race conditions]] from happening. 

1. [[Kubernetes - Work Queue\|Work Queues]] are used internally by the [[controller-runtime]]
2. [[Kubernetes - Concurrency Control And Consistency#resourceVersion\|With the help of resourceVersion]] to prevent updates on stale resources
3. Following an [[Idempotent]] approach to writing operator logic. 