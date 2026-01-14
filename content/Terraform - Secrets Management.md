---
publish: true
aliases:
  - Terraform - Storing Secrets
  - Terraform - Sensitive Variables
created: "[[2025-04-19]]"
modified: 2026-01-14T20:57:02.200+02:00
published: "[[2025-04-19]]"
cssclasses: ""
parent: "[[Terraform]]"
state:
  - tree
date: "[[2025-04-19]]"
relates:
  - "[[Security]]"
links:
  - https://pancho.dev/posts/home-lab-automation-secrets/
---

# Storage

- Environment variables
	- Easy and simple
	- Works only for one environment
	- Easily accessible, as they are present in the os
- Cloud provider secrets manager
	- This in an enterprise environment should be the preferred approach
- Non-sensitive variables can be committed without a problem

# State

- Can be stored locally
- Can be stored remotely with remote_storage

# Best Practices

- Use encryption during rest and during transit for any sensitive information
- Limit access using [[RBAC]] to decrease the attack vector
- Regularly rotate secrets to reduce the attack time windows
- Avoid hardcoded secrets, as those are not safe and leak immediately. 
- Use a dedicated secrets manager. 
- Terraform modules for consistency
- Implement version control

## Sensitive Variables

Terraform has a built-in feature to ensure secrets don’t appear in logs or outputs. By using the sensitive = true setting, you can hide sensitive data like passwords and API keys, adding an extra layer of protection. This helps keep your secrets secure even during execution.

```tf
provider "aws" {
  access_key = var.aws_access_key
  region     = "us-west-2"
}
output "access_key" {
  value       = var.aws_access_key
  sensitive   = true
}
```