---
publish: true
created: "[[2024-09-05]]"
modified: 2026-01-11T15:29:02.160+02:00
published: "[[2024-09-05]]"
cssclasses: ""
parent: "[[Go - Best Practices]]"
state:
  - evergreen
date: "[[2024-09-05]]"
relates:
  - "[[Go - 100 Common Go Mistakes]]"
---

> [!info]+
> When working with struct definitions, functions, interfaces and such, always try to work with interfaces, rather than concrete types.
> Accept [[Go - Interface\|Interfaces]], return concrete structs. 

# Example 

```go
package main

import "fmt"

// Define an interface
type Reader interface {
	Read() string
}

// Concrete type that implements Reader
type FileReader struct{}

func (f FileReader) Read() string {
	return "data from file"
}

// A function that ACCEPTS an interface but RETURNS a concrete type
func Process(r Reader) Result {
	data := r.Read()
	return Result{Content: data}
}

// A concrete return type
type Result struct {
	Content string
}

func main() {
	var r Reader = FileReader{}     // assign concrete to interface
	result := Process(r)            // function accepts interface, returns concrete
	fmt.Println(result.Content)     // prints: data from file
}
```