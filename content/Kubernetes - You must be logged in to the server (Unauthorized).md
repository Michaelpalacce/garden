---
publish: true
aliases:
  - 
created: "[[2023-10-24]]"
modified: 2026-01-12T22:38:29.431+02:00
published: "[[2023-10-24]]"
cssclasses: ""
parent:
  - "[[Kubernetes]]"
state: evergreen
date: "[[2023-10-24]]"
---

# Reason

- Certificates have been expired.

# Solution

- Run: `kubeadm init phase certs all --apiserver-cert-extra-sans=ALL_IPS_TO_BE_ACCEPTED_BY_THE_CERT --apiserver-advertise-address=ADDRESS`
- Run: `cp /etc/kubernetes/admin.conf ~/.kube/config`
