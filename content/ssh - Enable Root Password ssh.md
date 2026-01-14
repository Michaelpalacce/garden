---
publish: true
description: How to enable root ssh with password
created: "[[2025-03-24]]"
modified: 2026-01-11T20:46:55.303+02:00
published: "[[2025-03-24]]"
cssclasses: ""
parent: "[[ssh]]"
state:
  - evergreen
date: "[[2025-03-24]]"
relates:
  - "[[Security]]"
links:
  - https://linuxconfig.org/allow-ssh-root-login-on-ubuntu-20-04-focal-fossa-linux
---

# Steps

1. Open `/etc/ssh/sshd_config`
	1. `#PermitRootLogin prohibit-password` should be changed to `PermitRootLogin yes`
2. Run `sudo systemctl restart ssh`
3. By default the root’s password is not set on Ubuntu 20.04 and the error message `Permission denied, please try again` will appear when attempting to SSH login as a root user. From this reason we need to set root’s password. When prompted enter your current user password followed by new root password
	1. Run `sudo passwd`
