---
publish: true
aliases:
  - tfctl
description: Terraform managed by kubernetes
created: "[[2026-01-15]]"
modified: 2026-01-15T02:22:42.019+02:00
published: "[[2026-01-15]]"
cssclasses: ""
parent: "[[Kubernetes - Operator]]"
state:
  - evergreen
date: "[[2026-01-15]]"
relates:
  - "[[Infrastructure As Code]]"
links:
  - https://github.com/flux-iac/tofu-controller/tree/main
---

> [!info]+
> `tofu-controller` is a [[Terraform]]/[[open-tofu]] operator that follows [[GitOps]] principles and works together with [[FluxCD2]]. 


# Installing tfctl

If you have [[Homebrew]]:

```sh
brew install flux-iac/tap/tfctl
```

Otherwise, download the necessary binary at:

```
https://github.com/flux-iac/tofu-controller/releases 
```

# Creating a Terraform Resource

```yaml
---
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata:
  name: homelab-iac
  namespace: flux-system
spec:
  interval: 30s
  url: https://github.com/Michaelpalacce/HomeLab-IaC
  ref:
    branch: master
---
apiVersion: infra.contrib.fluxcd.io/v1alpha2
kind: Terraform
metadata:
  name: homelab-iac
  namespace: flux-system
spec:
  interval: 10m
  approvePlan: auto # Automatically apply when drift is detected 
  path: ./
  sourceRef:
    kind: GitRepository
    name: homelab-iac
    namespace: flux-system
  varsFrom:
    - kind: Secret
      name: homelab-iac-secrets # Secret tfvars can go here 
  storeReadablePlan: human # if you want to fetch the plan when working in manual mode `tfctl show plan homelab-iac`
```

# Getting the tfstate

Ref: https://flux-iac.github.io/tofu-controller/use-tf-controller/backup-and-restore-a-Terraform-state/

```sh
WORKSPACE=default
NAME=homelab-iac

kubectl get secret tfstate-${WORKSPACE}-${NAME} \
  -ojsonpath='{.data.tfstate}' \
  | base64 -d | gzip -d > terraform.tfstate
```

# Restoring the tfstate

```sh
gzip terraform.tfstate

WORKSPACE=default
NAME=my-stack

kubectl create secret \
  generic tfstate-${WORKSPACE}-${NAME} \
  --from-file=tfstate=terraform.tfstate.gz \
  --dry-run=client -o=yaml \
  | yq e '.metadata.annotations["encoding"]="gzip"' - \
  > tfstate-${WORKSPACE}-${NAME}.yaml

kubectl apply -f tfstate-${WORKSPACE}-${NAME}.yaml
``` 