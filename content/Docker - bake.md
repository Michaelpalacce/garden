---
publish: true
description: An extension of buildx
created: "[[2026-01-26]]"
modified: 2026-01-29T01:50:48.088+02:00
published: "[[2026-01-26]]"
cssclasses: ""
parent: "[[Docker]]"
state:
  - tree
date: "[[2026-01-26]]"
relates:
  - "[[Docker - buildx]]"
links:
  - https://docs.docker.com/build/bake/
---

> [!info]+
> Docker bake allows us to efficiently build multiple images at the same time. 

# Passing Variables

Given a variable:
```hcl
variable "ENV" {
  default = "staging"
}
```

You can change the value of this variable like:

```sh
ENV=production docker bake
```

# Groups 

A group of target that can be targeted instead of individual targets one by one:

```hcl
group "default" { targets = ["frontend", "backend"] }
```

While the `default` group will be called if nothing is passed, you can specify a target with:

```sh
docker bake TARGET
```

# Functions

Example [[Semantic Versioning]] versions:
```hcl
function "get_major_version" {
  params = [version]
  # Wrapping the pattern in () makes it return a list
  result = regex("^([0-9]+)", version)[0]
}

function "get_minor_version" {
  params = [version]
  # Wrapping the pattern in () makes it return a list
  result = regex("^([0-9]+\\.[0-9]+)", version)[0]
}
```

# Example Docker Bake

```hcl
variable "ENV" {
  default = "staging"
}

target "myapp" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["myapp:latest"]
  args = {
    ENV = ENV
  }
  secret = [
    "type=env,id=TOKEN"
  ] 
  no-cache = true
  platforms = ["linux/amd64", "linux/arm64"]
}
```

