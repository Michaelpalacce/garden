---
publish: true
aliases:
  - k3s memcache.go:265] couldn't get current server API group list the server has asked for the client to provide credentials
created: "[[2023-07-16]]"
modified: 2026-01-23T12:30:26.191+02:00
published: "[[2023-07-16]]"
cssclasses: ""
parent:
  - "[[Kubernetes]]"
state: evergreen
date: "[[2023-07-16]]"
---

# Problem

The certificates have been rotated and you need to fetch the new config.

# Resolution

## K3S

1. Copy `/etc/rancher/k3s/k3s.yaml` 

## oc

```sh
oc login -u username -p 'PASS' https://URL:6443
```
