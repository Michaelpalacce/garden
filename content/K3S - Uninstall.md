---
publish: true
created: "[[2025-01-19]]"
modified: 2026-01-12T22:36:31.439+02:00
published: "[[2025-01-19]]"
cssclasses: ""
parent: "[[K3S]]"
state:
  - evergreen
date: "[[2025-01-19]]"
links:
  - https://docs.k3s.io/installation/uninstall
---

Process is simple, just run the scripts on the servers. 

# Servers

```sh
/usr/local/bin/k3s-uninstall.sh
```

# Workers

```sh
/usr/local/bin/k3s-agent-uninstall.sh
```