---
publish: true
aliases:
  - Use CICD To Deploy Changes To Environments
created: "[[2023-03-13]]"
modified: 2026-01-14T20:56:46.408+02:00
published: "[[2023-03-13]]"
cssclasses: ""
parent: "[[Terraform]]"
state:
  - evergreen
date: "[[2023-03-13]]"
links:
  - https://spacelift.io/blog/terraform-in-ci-cd
---

# Initialize Terraform

```hcl
terraform init -input=false
```

The `-input=false` will make the process exit if any inputs are required. 

# Plan

Dump the plan to a file to be applied later. 
```hcl
terraform plan -input=false -compact-warnings -out=plan.file 
```

# Apply

```hcl
terraform apply -input=false -compact-warnings plan.file 
```