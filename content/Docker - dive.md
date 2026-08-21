---
publish: true
description: Tool used to inspect docker images layers size
created: "[[2026-01-22]]"
modified: 2026-03-13T12:14:19.464Z
published: "[[2026-01-22]]"
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
