---
publish: true
description: With the help of curl
created: "[[2024-11-18]]"
modified: 2026-01-11T20:43:29.955+02:00
published: "[[2024-11-18]]"
cssclasses: ""
parent: "[[Github]]"
state:
  - evergreen
date: "[[2024-11-18]]"
relates:
  - "[[git]]"
  - "[[curl]]"
links:
  - https://github.com/Michaelpalacce/docker-dashy/blob/main/BUILD.sh
aliases:
---

```sh
VERSION=$(curl -s -XGET https://api.github.com/repos/vmware/build-tools-for-vmware-aria/tags | grep name -m 1 | awk '{print $2}' | cut -d'"' -f2)

echo $VERSION
```
