---
publish: true
created: "[[2022-09-12]]"
modified: 2026-01-14T20:56:32.080+02:00
published: "[[2022-09-12]]"
cssclasses: ""
parent: "[[Infrastructure As Code]]"
state:
  - evergreen
date: "[[2022-09-12]]"
relates:
  - "[[Ansible]]"
  - "[[Chef]]"
  - "[[Puppeteer]]"
---

> [!success] ~ What ? ~
> Terraform is a IaC tool that simplifies the way you provision infrastructure. Terraform will handle the correct order of fetching, updating and creating of information for you so you don't need to worry about that.
 
# Map Of Content

- Getting Started
	- How to [[Terraform - Install\|install]] terraform 
	- How to [[Terraform - Style\|style]] your terraform code
	- How to [[Terraform - Naming\|name]] terraform components
	- [[Terraform - Getting Started]]
- Components
	- [[Terraform - Providers\|Providers]] - cloud providers and how to set them up
	- [[Terraform - Resource\|Resources]] what they are and how they are defined
	- [[Terraform - Modules\|Modules]]
	- [[Terraform - Variables\|Variables]] in terraform
- [[Terraform - Meta Arguments]]
- State
	- [[Terraform - Remote Backend]]
- Knowledge
	- [[Terraform - State\|State]] of terraform managed environment
	- [[Terraform - CLI\|CLI]] commands
	- [[Terraform - Use CICD To Deploy Changes To Environments\|Use CICD To Deploy Changes To Environments]]
- Best Practices
	- [[Terraform - Best Practices\|Best Practices]] when working with Terraform
	- [[Terraform - Secrets Management]]
- Tips / Guides / Tricks
	- [[Terraform - Snippets\|Snippets]]
- Troubleshooting
	- [[Terraform - Failed To Open SSH Client]]

# Issues With Terraform

*Terraform is not an ideal tool for creating Virtual Machines. Those are better suited for automation and [[Self Service]] solutions.* 