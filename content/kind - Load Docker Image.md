---
publish: true
description: How to load a docker image in the kind cluster
created: "[[2026-01-28]]"
modified: 2026-01-28T17:45:09.471+02:00
published: "[[2026-01-28]]"
cssclasses: ""
parent: "[[kind]]"
state:
  - tree
date: "[[2026-01-28]]"
relates:
  - "[[Docker]]"
  - "[[ContainerD]]"
---


```sh
kind load docker-image IMAGENAME --name KIND_CLUSTER_NAME
```

(you can omit `name` if you are using the default cluster)

# `kind_load`

Is a script: https://github.com/Michaelpalacce/.dotfiles/blob/master/zsh/.zsh-config/kind that enables you to pull from docker and load the image.

```sh
kind_load alpine myClusterNameOrEmpty
```
