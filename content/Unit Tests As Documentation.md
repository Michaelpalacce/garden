---
{"publish":true,"description":"Writing unit tests with descriptive names and explicit outcomes can serve as documentation for the method.","created":"[[2025-02-21]]","modified":"2026-01-11T00:40:08.906+02:00","published":"[[2025-02-21]]","cssclasses":"","parent":["[[Testing - Unit Tests]]","[[Documentation]]"],"state":["evergreen"],"date":"[[2025-02-21]]","links":["https://www.thecoder.cafe/p/unit-tests-as-documentation"]}
---

> [!warning]+
> **Relying purely on unit tests to document your code is never the way**. However, you should expand the documentation by writing tests and **as a maintainer of a project use unit tests to discern original intent**. 

# Pros

- **Unit tests explain code behavior.** 
	- A unit test usually validates the behavior of a function or method. When a unit test is written correctly, it provides a clear and concise explanation of how a piece of code is supposed to work.
- **Unit tests are always in sync with the code.**
	- One of the biggest challenges with traditional documentation is that they can easily become outdated as the code evolves1. However, unit tests are tightly coupled with the code they test. If the behavior of a code changes, its corresponding unit tests should evolve, too. That makes unit tests always up-to-date 
- **Unit tests cover edge cases.**
	- Documentation is also about covering edge cases, such as unexpected inputs. Good unit tests should also cover these cases, which provides valuable documentation insights that may not be captured elsewhere. 

# Cons

- **It's not viable for non developers**
	- Expectation that everyone will read tets to gain an understanding of the code is just not viable. Note I didn't say that unit tests should be your only documentation, rather an extension
- **Not viable for people who lack basic language understanding**
	- Even for developers, reading tests in an unfamiliar language will prove to be hard. 
- **Takes longer**
	- A targeted document explaining how something works is faster and more straight to the point.
- Not straight to the point
- Not helpful for people using your code as a library 

## Best Practices 

To maximize the effectiveness of unit tests as documentation, it’s important to **follow some best practices**:

**Descriptive test name**: Make sure the test name clearly **conveys what is being tested** and the **expected outcome**.

**Atomic**: Each test should **focus on a single aspect** of the function behavior. This makes the test **easier to read** and ensures it **serves as clear documentation**.

**Keep tests simple**: If possible, **avoid overly complex tests** that require too many steps and can be **hard to follow**. Make sure an **external reader** should be able to **understand the tested behavior**.

**Keep tests independent**: Make sure unit tests do not **depend on each other**. Keeping isolated tests also **helps readers** to **understand our tests**. 
