---
publish: true
created: "[[2022-05-14]]"
modified: 2026-01-10T16:58:04.457+02:00
published: "[[2022-05-14]]"
cssclasses: ""
parent: "[[HomeLab]]"
state:
  - evergreen
relates:
  - "[[K3S]]"
date: "[[2022-05-14]]"
---

# CSI - [[Longhorn\|Longhorn]]

* Longhorn has some speed implications, as it is slowing down all of the servers, but is a pretty reliable 
* Took me a while to get it stable, multipath fix was needed. You can check this: [[Linux - Multipath]] 

# CNI - [[Flannel CNI\|Flannel]]

* Flannel is a tried and tested solution and has not given me any issues so far.
* Comes pre-packaged with k3s

# Reverse proxy - [[Istio]]

- After the recent deprecation of [[Kubernetes - Ingress]] and migration to [[Kubernetes - Gateway API\|Gateway API]]

