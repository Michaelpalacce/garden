---
publish: true
description: How to ignore a package that needs an update
created: "[[2026-03-13]]"
modified: 2026-04-19T19:23:59.758+03:00
published: "[[2026-03-13]]"
parent: "[[Arch Linux]]"
state:
  - evergreen
date: "[[2026-03-13]]"
---

```sh
sudo vim /etc/pacman.conf
```

Add under `[options]`:

```
IgnorePkg = go
```
