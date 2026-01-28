---
publish: true
description: Tool used to inspect docker images layers size
created: "[[2026-01-22]]"
modified: 2026-01-29T01:51:03.092+02:00
published: "[[2026-01-22]]"
cssclasses: ""
parent: "[[Docker]]"
state:
  - sapling
date: "[[2026-01-22]]"
relates:
  - "[[Docker - buildx]]"
links:
  - https://github.com/wagoodman/dive
---

> [!info]+
> Docker `dive` can be used to inspect the the docker image filesystem as well as it's layers and what added to the image size.

# Usage

```sh
docker run --rm -it \
    -v /var/run/docker.sock:/var/run/docker.sock \
    wagoodman/dive:latest IMAGE_NAME
```