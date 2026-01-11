---
{"publish":true,"aliases":["EDP","Event Driven Programming"],"description":"A paradigm where components communicate through production and consumption of events.","created":"[[2025-09-07]]","modified":"2026-01-11T16:20:23.766+02:00","published":"[[2025-09-07]]","cssclasses":"","parent":"[[Software Design]]","state":["evergreen"],"date":"[[2025-09-07]]","relates":["[[Message Broker]]","[[Pub Sub]]","[[CQRS]]"]}
---

> [!info]+
> A [[Software Design\|Software Design Paradigm]] where components of (usually) a distributed systems [[Asynchronous Communication\|communicate asynchronously]] through the production, reaction and consumption of events.

# Map Of Content

- [[Event Driven Archtiecture#Key Components]]
- [[Event Driven Archtiecture#Benefits]]
- [[Event Driven Archtiecture#Challenges]]
- Common Tools
	- [[Kafka]]
	- [[RabbitMQ]]
	- [[Amazon SNS]]
	- [[NATS]]
- Event-Driven Models
	- [[Simple Event Processing]]
	- [[Event Streaming Processing]]
	- [[Complex Event Processing]]

> [!warning] **🧩 When to Use EDA?**
> - Microservices architectures
> - Systems requiring real-time processing
> - Applications with asynchronous workflows
> - IoT systems
> - Highly scalable, decoupled environments

# Key Components

- [[Event Producer]] is the component that produces an event.
- [[Event Consumer]] is the component that consumes and reacts to the event that was produced.
- [[Message Broker\|Event Broker]] is the component that stores the event and allows for producing and consumption of events.
- Event is the actual message that is being produced and consumed.

# Benefits

- [[Loose Coupling]]
- [[Scalability]]. Consumers can scale independently based on workload
- [[Flexibility]]. Easy to add or modify consumers without it affecting the producer.

# Challenges

- [[Debugging]] is complicated and the flow of logic is hard to trace
- [[Eventual Consistency#Pitfalls\|Pitfalls of Eventual Consistency]]
- [[Event Duplication]]. Consumers must handle this with [[Idempotent\|Idempotency]].
- [[Schema Evolution]]. Managing changes to the structure of events can be tricky
