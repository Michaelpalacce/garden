---
publish: true
description: A backup tool for kubernetes clusters
created: "[[2024-06-09]]"
modified: 2026-01-10T17:17:14.533+02:00
published: "[[2024-06-09]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - evergreen
relates:
  - "[[3-2-1 Backup Rule]]"
date: "[[2024-06-09]]"
links:
  - https://velero.io/
---

> [!info]+ What?
> Velero is a **backup tool for kubernetes** developed by [[VMware Index\|VMware]]. It follows a GitOps approach to things and works and supports multiple cloud providers. 

# Map Of Content 

- Getting Started
	- Some quick [[Velero - Installation\|Installation]] instructions
	- [[Velero - Backup Schedule\|Backup Schedule]]
- Backup And Restore 
	- [[Velero - Backup\|Backup]] - How to do a backup. This can be scheduled or manual
	- [[Velero - Restore\|Restore]] - How to restore from a backup.
- Disaster Recovery

# Broadcom Acquisition

> [!warning]+
> As it's common for companies acquired by [[Broadcom]], software that was consumer focused no longer functions as intended. Currently Velero poses a problem for HomeLabs utilising it.
