---
publish: true
created: "[[2025-07-18]]"
modified: 2026-01-14T20:57:10.792+02:00
published: "[[2025-07-18]]"
cssclasses: ""
parent: "[[Terraform]]"
state:
  - tree
date: "[[2025-07-18]]"
relates:
opposes:
links:
  - https://github.com/bpg/terraform-provider-proxmox/issues/619#issuecomment-1760582479
description:
aliases:
---

Verify that the `ssh-agent` is running using `ssh-add -L`

If not running (`Could not open a connection to your authentication agent`):

```sh
eval $(ssh-agent)
```

If there are no keys loaded (`The agent has no identities`)

```
ssh-add
```

It will now work from the same terminal
