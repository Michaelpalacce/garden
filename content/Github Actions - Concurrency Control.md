---
publish: true
description: How to control the concurrency of a workflow
created: "[[2026-01-15]]"
modified: 2026-01-15T12:54:56.612+02:00
published: "[[2026-01-15]]"
cssclasses: ""
parent: "[[Github - Actions]]"
state:
  - sapling
date: "[[2026-01-15]]"
relates:
  - "[[Concurrency]]"
  - "[[Github - Workflow]]"
links:
  - https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency#example-using-concurrency-and-the-default-behavior
---

# Cancelling previous workflow runs if a newer one is started

```yaml
name: Example CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

#...
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
#...

jobs:
#...
```