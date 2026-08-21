---
publish: true
aliases:
  - cnpg - Importing Postgres Databases
description: A simple YAML that can be used to import an external postgres database
created: "[[2026-01-19]]"
modified: 2026-01-26T18:25:11.752Z
published: "[[2026-01-19]]"
parent: "[[cnpg]]"
state:
  - evergreen
date: "[[2026-01-19]]"
links:
  - https://cloudnative-pg.io/docs/1.28/database_import
relates:
  - "[[pg_restore]]"
  - "[[pg_dump]]"
---

Can be done with the `bootstrap` and `externalClusters` properties in spec.

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: cluster-postgres
  annotations:
    backup.velero.io/backup-volumes: pgdata
spec:
  instances: 1

  imageName: ghcr.io/cloudnative-pg/postgresql:18.1
  
  storage:
    size: 10Gi

  bootstrap:
    initdb:
      import:
        type: microservice
        databases:
          - n8n
        source:
          externalCluster: old-cluster
  externalClusters:
    - name: old-cluster
      connectionParameters:
        host: postgres
        user: n8n
        dbname: n8n
      password:
        name: db
        key: POSTGRES_PASSWORD
```

> [!info]+ Support for importing from older versions.
> With the help of `pg_dump`, older postgres versions are supported. For example you can import from Postgres 16 to 18.
