---
publish: true
aliases:
  - 
created: "[[2023-10-24]]"
modified: 2026-08-29T12:09:24.114+03:00
published: "[[2023-10-24]]"
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

## OpenShift

`oc login -u kubeadmin -p 'PASSWORD' https://api.crc.testing:6443`

## K3S

```
mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown "$(id -u):$(id -g)" ~/.kube/config
chmod 600 ~/.kube/config
```
