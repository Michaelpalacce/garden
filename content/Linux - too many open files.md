---
publish: true
description: There is a limit of how many open files can exist. This is how to increase it.
created: "[[2024-08-27]]"
modified: 2026-01-13T00:08:52.918+02:00
published: "[[2024-08-27]]"
cssclasses: ""
parent: "[[Linux]]"
state:
  - evergreen
date: "[[2024-08-27]]"
relates:
  - "[[ulimit]]"
links:
  - https://www.howtogeek.com/805629/too-many-open-files-linux/
---

# Fix

```bash
sudo vi /etc/systemd/system.conf
sudo vi /etc/systemd/user.conf
```

Look for the `DefaultLimitNOFILE` and remove the `#`. 
Increase the limit to `DefaultLimitNOFILE=65536:524288`

Also in the `/etc/security/limits.conf`, at the bottom of the file add:

```bash
*         hard    nofile      500000
*         soft    nofile      65536
root      hard    nofile      500000
root      soft    nofile      65536
```

Then you have to relogin

# Checking the current limit

```bash
ulimit -n
```
