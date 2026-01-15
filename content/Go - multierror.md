---
publish: true
description: Package that simplifies working with multiple errors
created: "[[2026-01-12]]"
modified: 2026-01-13T08:30:25.248+02:00
published: "[[2026-01-12]]"
cssclasses: ""
parent: "[[Go]]"
state:
  - evergreen
date: "[[2026-01-12]]"
links:
  - https://pkg.go.dev/go.uber.org/multierr
---

# When combining 2 errors

```go
err = multierr.Append(reader.Close(), writer.Close()) 
```

# When combining multiple errors

```go
multierr.Combine(
	reader.Close(),
	writer.Close(),
	conn.Close(),
)
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