---
{"publish":true,"created":"[[2025-09-13]]","modified":"2026-01-10T17:19:14.875+02:00","published":"[[2025-09-13]]","cssclasses":"","parent":"[[Velero]]","state":"evergreen","relates":["[[Velero - Backup Schedule]]","[[Backup]]","[[3-2-1 Backup Rule]]"],"opposes":["[[Velero - Restore]]"],"date":"[[2025-09-13]]"}
---

Backing up with Velero is done via the cli, by a CRD or on a [[Velero - Backup Schedule\|schedule]].

It is **important** to know that the `--snapshot-volumes=true` is needed to actually backup the PVC. This can only be done if [[restic]] is enabled for Velero during [[Velero - Installation\|Installation]] ( `--use-restic` argument ).

# [[Restic]] [[Kubernetes - Persistent Volume Claims\|PVC]] Backups

> [!success] ~ How ? ~
> Done by adding `backup.velero.io/backup-volumes: volumeName` to the deployment's [[Kubernetes - Labels, Annotations, Selectors#Annotations\|annotations]].
> Be careful! there should be no spaces if you want to backup multiple volumes.

# Creating backups

## Manual

`velero backup create uptimekuma --include-namespaces uptimekuma --snapshot-volumes=true` Will backup the namespace uptimekuma

## From Schedule

`velero create backup --from-schedule general`
