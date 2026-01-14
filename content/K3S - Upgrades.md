---
publish: true
aliases:
  - Upgrading K3S Version
  - K3S System Upgrader
created: 2023-04-27T22:28:05.902+03:00
modified: 2026-01-12T22:36:17.951+02:00
published: 2026-01-12T22:36:17.951+02:00
cssclasses: ""
parent: "[[K3S]]"
state:
  - evergreen
---

# Description

This page will explain how to start an automated upgrade in k3s

# Steps

1. Install system-upgrader `kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml`
	- This will install the system-upgrader in the namespace `system-upgrade` 
2. Configure Plans
	- It is recommended to configure a separate plan for the Server ( master ) and the agent ( worker ) nodes. Check out [[K3S - Upgrades#Plans]] for more info. 
	- When deciding **what version to use**, check out [K3S Releases](https://github.com/k3s-io/k3s/releases)


# Plans
## Important options:
- `concurency` indicates how many nodes at a time can be upgraded. A good value here is one.
- `prepare` as indicated in the [[K3S - Upgrades#Agent Plan]] will force the Server Plan to go first, before upgrading the agents.
- `version` should be the same for the agent and the server. This is the Kubernetes version that we will be upgrading to. Check out [K3S Releases](https://github.com/k3s-io/k3s/releases)

## Server Plan
```yaml
# Server plan
apiVersion: upgrade.cattle.io/v1
kind: Plan
metadata:
  name: server-plan
  namespace: system-upgrade
spec:
  concurrency: 1
  cordon: true
  nodeSelector:
    matchExpressions:
    - key: node-role.kubernetes.io/master
      operator: In
      values:
      - "true"
  serviceAccountName: system-upgrade
  upgrade:
    image: rancher/k3s-upgrade
  version: v1.23.4+k3s1
```
## Agent Plan
~~~yaml
# Agent plan
apiVersion: upgrade.cattle.io/v1
kind: Plan
metadata:
  name: agent-plan
  namespace: system-upgrade
spec:
  concurrency: 1
  cordon: true
  nodeSelector:
    matchExpressions:
    - key: node-role.kubernetes.io/master
      operator: DoesNotExist
  prepare:
    args:
    - prepare
    - server-plan
    image: rancher/k3s-upgrade
  serviceAccountName: system-upgrade
  upgrade:
    image: rancher/k3s-upgrade
  version: v1.23.4+k3s1
~~~

# Troubleshooting 

## Upgrade for node is stuck

This happens when the workloads for that specific node cannot be terminated on time. 

> [!success] ~ Solution ~
> Restart and uncordon the node. 


---
Links: [HomeLab Example](https://github.com/Michaelpalacce/HomeLab/tree/master/upgrades)
