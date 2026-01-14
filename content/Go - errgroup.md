---
publish: true
description: Replacement for sync.WaitGroups
created: "[[2025-10-06]]"
modified: 2026-01-12T22:27:41.167+02:00
published: "[[2025-10-06]]"
cssclasses: ""
parent: "[[Go]]"
state:
  - evergreen
date: "[[2025-10-06]]"
relates:
  - "[[Go - sync package]]"
links:
  - https://pkg.go.dev/golang.org/x/sync/errgroup
---

The `errgroup` package is a replacement of the standard `sync.WaitGroup` package.

```go
	g := new(errgroup.Group)
	g.SetLimit(int(someVar))

	for i := 0; i < int(someVar); i++ {
		g.Go(func() error {
			// Processing here
			return nil
		})
	}
	
	if err := g.Wait(); err != nil {
		return err;
	}
	
	// Continue
```
