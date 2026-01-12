---
{"publish":true,"created":"[[2024-01-24]]","modified":"2026-01-12T22:28:24.639+02:00","published":"[[2024-01-24]]","cssclasses":"","parent":"[[Go|Golang]]","state":["evergreen"],"relates":["[[Go - Best Practices]]","[[Best Practices]]"],"links":["https://100go.co/"],"aliases":null,"date":"[[2024-01-24]]","opposes":["[[Bad Practices]]"]}
---

# 1. Unintended variable shadowing

> [!info] TL;DR
> Avoid redeclaring variables in inner blocks when possible as it may confuse readers.

- [[Variable Shadowing]]

You want to make sure that the code is as easy as possible. Variable shadowing can prevent that. Strive for your code to be as simple as possible to easy debugging.

```go
func listing() error {
	var client *http.Client
	if tracing {
		client, err := createClientWithTracing()
		if err != nil {
Accept interface	Accept interfaceAccept interface		return err
		}
		log.Println(client)
	} else {
		client, err := createDefaultClient()
		if err != nil {
			return err
		}
		log.Println(client)
	}

	_ = client
	return nil
}
var tracing bool

func createClientWithTracing() (*http.Client, error) {
	return nil, nil
}

func createDefaultClient() (*http.Client, error) {
	return nil, nil
}
```

# 2. Unnecessary nested code

> [!info] TL;DR
> Think if you actually need to nest code. I am a [[Never Nester]]. 

Instead of doing something like this:
```go
if foo() {
    // ...
    return true
} else {
    // ...
}
```

Do this
```go
if foo() {
    // ...
    return true
}
// ...
```

The same can be applied to errors. Try to handle errors first. [[Error Handling - Best Practices#Check For Errors First\|See here]] for more details.

# 3. Misusing init functions

> [!info] TL;DR
> Never use `init` functions, outside of initializing static configuration.

An init function is a `func() {}` that takes no arguments and returns nothing. It is used to initialize the state of some applications.

Init functions will limit error handling and will hinder testing.


# 4. Overusing getters and setters

> [!info] TL;DR
> Getters and setters aren't idiomatic in go. They are a concept introduced from other languages and we should avoid them in Go.

Try to make things as simple as possible.

Getters and setters provide Data encapsulation and in some cases they may be needed. However if such a need arises try to strike a balance and not overuse them too much.

# 5. Interface Pollution

> [!info] TL;DR
> [[Abstractions should be discovered, not created]]. Go doesn't support `implements` syntax but relies on interfaces a lot. Use interfaces only when they are deemed necessary or when you have a vision that they will be absolutely necessary.

Overusing [[Go - Interface\|Interfaces]] will lead to code that is harder to read and understand. Try to keep things simple with Go.

> [!quote] Rob Pike
> Don’t design with interfaces, discover them.

# 6. Interface on the producer side

> [!info]
> Keeping interfaces on the consumer side avoids unnecessary abstractions.

Interfaces are implicitly satisfied, so we don't need to define what our interface is when lets say writing a library. We can give what we have to the consumer and let the client create it's own interface if needed.

> [!warning] Note
> In case when we **know** that an abstraction will be helpful for consumers, we can create the interface.

`store.go` contains the business logic.
```go
package store

type CustomerStorage interface {
	StoreCustomer(customer Customer) error
	GetCustomer(id string) (Customer, error)
	UpdateCustomer(customer Customer) error
	GetAllCustomers() ([]Customer, error)
	GetCustomersWithoutContract() ([]Customer, error)
	GetCustomersWithNegativeBalance() ([]Customer, error)
}

type Customer struct{}
```

`client.go` wants to be able to retrieve something from the `CustomerStorage`, they only need the `GetAllCustomers` method.
```go
package client

import "github.com/teivah/100-go-mistakes/02-code-project-organization/6-interface-producer/store"

type customersGetter interface {
	GetAllCustomers() ([]store.Customer, error)
}
```

# 7. Returning interfaces

> [!info] TL;DR
> A `func` should ideally accept interfaces and return concrete implementations.

This can make our design more complex due to package dependencies and can restrict flexibility because all the clients would have to rely on the same abstraction.

# 8. Don't use `any`

> [!info] TL;DR
> `any` doesn't give you meaningful information and can lead easily to compile time or runtime issues. Use `any` for example when working with `json.Marshal` and such, but nowhere else.


# 11. Not using the functional options pattern

- Take a look: [[Functional Options Pattern]]