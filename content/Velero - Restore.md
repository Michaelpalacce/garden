---
publish: true
created: "[[2022-05-03]]"
modified: 2026-01-10T17:19:05.324+02:00
published: "[[2022-05-03]]"
cssclasses: ""
parent: "[[Velero]]"
state: evergreen
opposes: "[[Velero - Backup]]"
relates:
  - "[[Kubernetes]]"
  - "[[Backup]]"
  - "[[3-2-1 Backup Rule]]"
date: "[[2022-05-03]]"
---

# Restoring backups:

**NOTE:** When restoring backups Velero **will not restore objects** that are **already existing**, so whatever you need to restore must be **deleted first**.

If you are restoring [[Kubernetes - Pod\|pods]] from a [[Kubernetes - Deployment\|deployment]]/[[Kubernetes - Statefulset\|statefulset]]/[[Kubernetes - Daemonset\|daemonsets]]/etc make sure to delete them too. Velero will not delete them automatically and will hang.

## Manual:

1. Clear up any resources you wish to restore
2. Run `velero restore create uptimekuma1 --from-backup uptimekuma --restore-volumes=true`

## From Schedule:

1. Clear up any resources you wish to restore
2. Run: `velero restore create --from-schedule general --restore-volumes=true`. Optionally add: `--include-namespaces postgresql`

# Troubleshooting

## Velero Restore has hanged

Make sure that it is really hanged up, by checking the `--details`, there is a chance it is just working.

If it is really hanged, follow these steps:
1. RUN: `kubectl rollout restart -n velero deploy velero` - See if it continues now, if not continue.
2. RUN: `kubectl rollout restart -n velero daemonset restic` - See if it continues now, if not continue.
3. Delete the restore with `velero delete restore RESTORE_NAME` and confirm the prompt. 
	1. After this, delete all the resources that you were trying to restore
	2. Create a new restore.
