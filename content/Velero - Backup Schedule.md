---
{"publish":true,"created":"[[2022-08-29]]","modified":"2026-01-10T17:17:23.317+02:00","published":"[[2022-08-29]]","cssclasses":"","parent":"[[Velero]]","state":"evergreen","links":["https://github.com/Michaelpalacce/HomeLab/blob/master/cluster/homelab/configs/velero/schedule.yaml"],"date":"[[2022-08-29]]","relates":null}
---

> [!success] ~ What ? ~
> Velero uses a **schedule to do automatic backups** of data. The schedule is a simple [[Kubernetes - CRD\|CRD]] that has specifications on **what and how should be backed up**. 

```yaml
apiVersion: velero.io/v1
kind: Schedule
metadata:
    name: general
    namespace: velero
spec:
    schedule: '00 03 * * *' # When should the backup be done
    template:
        hooks: {}
        includedNamespaces: # Which namespaces should be backed up
          - uptimekuma
          - simplesecrets
          - vaultwarden
          - postgresql
          - nodered
          - changedetection
          - storage
          - monitoring
          - mealie
          - media
          - homebox
        snapshotVolumes: true # Should the volumes be snapshotted
        ttl: 72h0m0s # How long will the backup be kept
    useOwnerReferencesInBackup: false 
```

