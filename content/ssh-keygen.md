---
{"publish":true,"aliases":["Generate ssh key","ssh - Generate key"],"description":"Generate ssh key","created":"[[2025-03-25]]","modified":"2026-01-11T20:46:58.495+02:00","published":"[[2025-03-25]]","cssclasses":"","parent":"[[ssh]]","state":["evergreen"],"date":"[[2025-03-25]]","links":["https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"]}
---

# Overview
The `ssh-keygen` util is used to generate a new ssh key to be used for authentication. 

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

# Legacy Systems
For legacy systems that do not support ed25519, you can use 

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
