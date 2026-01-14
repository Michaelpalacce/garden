---
publish: true
aliases:
  - Event Replaying
description: Updates to a file are stored as a sequence of events, giving you the ability to replay data
created: "[[2024-06-22]]"
modified: 2026-01-11T15:23:40.464+02:00
published: "[[2024-06-22]]"
cssclasses: ""
parent: "[[Software Architect]]"
state:
  - sapling
date: "[[2024-06-22]]"
relates:
  - "[[Software Architect]]"
  - "[[System Design]]"
  - "[[Redis]]"
  - "[[Valkey]]"
  - "[[MariaDB]]"
---

> [!info]+
> Mechanism for storing data as a sequence of events. Allows for the updates to be replayed at any point. 

- *Redis/ValKey stores updates using this approach.*
- *[[MariaDB]] uses [[MariaDB - Binary Logs\|binlogs]] to store data modifications*

Each event has to follow a predefined structure. It's a good idea for it to be versioned
