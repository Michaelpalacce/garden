---
publish: true
aliases:
  - Style
  - Terraform Style
created: "[[2022-09-13]]"
modified: 2026-01-14T20:57:26.620+02:00
published: "[[2022-09-13]]"
cssclasses: ""
parent: "[[Terraform]]"
state:
  - evergreen
date: "[[2022-09-13]]"
---


1. Indent two spaces
2. Single **meta-arguments** first ( `count=2` )
3. Block meta-arguments go last
	```shell
	lifecycle {
		create_before_destroy = true
	}
	```
4. Group single arguments
5. Add blank lines for clarity
6. Think about readability
7. Line up the equal signs