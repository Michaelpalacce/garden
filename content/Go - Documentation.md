---
publish: true
aliases:
  - godoc
created: "[[2024-09-05]]"
modified: 2026-01-11T00:33:50.994+02:00
published: "[[2024-09-05]]"
cssclasses: ""
parent:
  - "[[Go]]"
  - "[[Documentation]]"
state:
  - evergreen
date: "[[2024-09-05]]"
relates:
  - "[[Documentation]]"
links:
  - https://go.dev/doc/comment
---

> [!info]+
> In Go, documentation is just normal code comments. If you want to document a var,struct,const,type,package, then just add a `//` before it and write as much as you need.


# Where to put package documentation

It seems like a common standard is to use a `doc.go` file and add documentation there.

The file generally contains only the package definition and above it in plain markdown details and overview of what it's intended use is.