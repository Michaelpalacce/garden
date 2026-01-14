---
publish: true
description: Used to extract keys of hosts
created: "[[2025-10-15]]"
modified: 2026-01-11T20:47:01.683+02:00
published: "[[2025-10-15]]"
cssclasses: ""
parent: "[[ssh]]"
state:
  - evergreen
date: "[[2025-10-15]]"
relates:
  - "[[Security]]"
---

> [!info]+
> A tool that can extract the public keys of target host.
> It can be used also automatically add ssh keys to known hosts.

# Trust Host

```sh
ssh-keyscan -H <host> >> ~/.ssh/known_hosts
```

- The `-H` outputs it in a format that is appropriate for `~/.ssh/known_hosts`
