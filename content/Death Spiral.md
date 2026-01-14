---
publish: true
created: "[[2024-09-18]]"
modified: 2026-01-11T15:36:48.288+02:00
published: "[[2024-09-18]]"
cssclasses: ""
parent: "[[Load Balancing]]"
state:
  - sapling
date: "[[2024-09-18]]"
relates:
  - "[[Negative Feedback Loop]]"
---

> [!info]+
> Whenever **new nodes are being replaced**, when **old nodes are in an unhealthy state**.
> You can imagine if the state is based on CPU/RAM, the **nodes would be replaced** when it's too high and **services are not responsive**. This way, **before the new Node is span up**, the **old one would be deleted** and cut off, resulting in the inability of spinning new ones up.