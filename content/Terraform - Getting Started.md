---
publish: true
description: How to get started with terraform
created: "[[2025-04-25]]"
modified: 2026-01-14T20:57:17.336+02:00
published: "[[2025-04-25]]"
cssclasses: ""
parent: "[[Terraform]]"
state:
  - evergreen
date: "[[2025-04-25]]"
---

# Init first

To get started with terraform you need to prepare your working directory for other commands.

```sh
terraform init
```

# Create your `main.tf` file 

Your `main.tf` should only specify terraform configuration as well as [[Terraform - Providers\|provider]] configurations.

## Example

```hcl
terraform {
  required_providers {
    proxmox = {
      source  = "bpg/proxmox"
      version = "0.82.1"
    }
  }
}

provider "proxmox" {
  endpoint  = var.proxmox_endpoint
  api_token = var.proxmox_api_token

  insecure = false
  tmp_dir  = "/var/tmp"

  ssh {
    agent    = true
    username = var.proxmox_ssh_username
    password = var.proxmox_ssh_password
  }
}
```
