---
{"publish":true,"created":"[[2025-07-21]]","modified":"2026-01-12T22:36:36.623+02:00","published":"[[2025-07-21]]","cssclasses":"","parent":"[[K3S]]","state":["evergreen"],"date":"[[2025-07-21]]","links":["https://github.com/k3s-io/k3s/issues/802#issuecomment-848076393"]}
---

This happens when you've already added a node with the same name before.

```sh
kubectl -n kube-system delete secrets <agent-node-name>.node-password.k3s
```