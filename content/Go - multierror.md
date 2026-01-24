---
publish: true
description: Package that simplifies working with multiple errors
created: "[[2026-01-12]]"
modified: 2026-01-22T22:40:04.686+02:00
published: "[[2026-01-12]]"
cssclasses: ""
parent: "[[Go]]"
state:
  - evergreen
date: "[[2026-01-12]]"
links:
  - https://github.com/hashicorp/go-multierror
---

# When combining 2 errors

```go
err = multierr.Append(reader.Close(), writer.Close()) 
```

# From deferred scopes

```go
func sendRequest(req Request) (err error) {
	conn, err := openConnection()
	if err != nil {
		return err
	}
	defer func() {
		err = multierr.Append(err, conn.Close())
	}()
	// ...
}
```

> [!warning]+
> If you're modifying an error from inside a defer, you MUST use a named return value for that function.