---
publish: true
aliases:
  - ssh-copy-id
created: "[[2024-08-23]]"
modified: 2026-01-11T20:46:51.247+02:00
published: "[[2024-08-23]]"
cssclasses: ""
parent: "[[ssh]]"
state:
  - evergreen
date: "[[2024-08-23]]"
links:
  - https://linuxize.com/post/how-to-setup-passwordless-ssh-login/
---

If you already have an SSH key pair, you can skip this step. To generate a new SSH key pair, run the following command in your terminal:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@domain.com"
```

Then:

```bash
ssh-copy-id remote_username@server_ip_address
```

# Copy  A Specific Key

```sh
ssh-copy-id -i ~/.ssh/id_rsa remote_username@server_ip_address
```