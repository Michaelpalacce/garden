---
publish: true
aliases:
  - Solution Design
created: "[[2024-02-19]]"
modified: 2026-01-11T15:22:54.052+02:00
published: "[[2024-02-19]]"
cssclasses: ""
parent: "[[Software Architect]]"
state:
  - evergreen
relates:
  - "[[Requirements Gathering|Requirements Design]]"
date: "[[2024-02-19]]"
---

> [!warning]
> Generally when writing any document, consider the flow of information. By reading down you shouldn't need to jump to a section further down to understand what is expected. It is ok not to go into much details.

# Principles

## Why Is This Needed?

- **Understanding the problem**
	- Writing a good solution design document, **forces you to thoroughly analyse the problem**. 
		- Requirements 
		- Constraints
		- User needs
- Architecture Planning
	- Since you have to have a section explaining the architecture of the solution, you ensure the system is [[Scalability\|scaleable]] , [[Maintainability\|maintainable]] and [[Performance\|performant]]
- Risk Planning
	- Understand potential risks and challenges early on, so we can address them during the development process by developing mitigation strategies and contingency plans
- [[Communication]] and [[Collaboration]]
	- The document serves as a communication tool for all stakeholders. 
		- Developers, project managers, clients, qa and the dev team.
	- This will ensure that everyone understand the proposed solution and will give everyone the opportunity to provide feedback.
- Resource Allocation
- [[Scalability]] and [[Maintainability]] 

## Introduction

- Briefly describe the focus and scope of the document
- Clearly define what problem that the solution design aims to solve
- Outline goals and objectives
- Describe who the document is aimed for

## Background 

- The document needs to provide a full picture of what needs to be done. This includes adding context and any other relevant background information
- Explain the current state of affairs.
	- Explain which systems the current solution will interact with if any
	- Explain which systems will be replaced if there are any
	- What is currently in place?

## Scope

- Provide a clear scope of what needs to be done as part of the solution.
- Clearly define boundaries of the solution.
- List features that will be part of this solution.
- Define what will **not** be done as part of this solution.
	- It's a good idea here to outline what is expected the state of those parts to be. 
		- Example if we depend on [[Service Now]] , what is expected SNOW to provide and ideally who is responsible for it.

## Architecture Overview

- Describe the high-level architecture of the software solution.
	- Make sure to create a [[Glossary]] of Names if needed
		- Usually added somewhere to the top of the document to be used for the entire scope of the document
	- Provide current versions that will be a target of the solution
	- Identify the major components/modules of the system and their interactions.
- Use diagrams (e.g., UML diagrams, architectural diagrams) to illustrate the architecture.
	- Write a sequence diagram of how the different systems interact with each other.

## Design Considerations

- Discuss the key design decisions that have been made.
	- Don't go into too much detail for things that will be covered later on, you can link them however.
- Justify these decisions based on factors such as [[Performance]], [[Scalability]], [[Maintainability]], [[Security]]
- Address any trade-offs that were considered during the design process.
	- It's good to outline these, so later on that can be used as reference.
		- *For example lets say you looked into a potential alternative to something and decided that it is not applicable, then during development if a developer stumbles on the same questions, they can verify it against what was documented*

## Technologies Used

- List the technologies, frameworks, and tools that will be used to implement the solution.
	- Versions are a must
- Provide rationale for the selection of each technology.
	- Same as the [[Solution Design Document#Design Considerations]], justify your decisions, outline any trade-offs
- Include any dependencies or external APIs that the solution will rely on.

# [[Security]]

- Outline risks and potential security vulnerabilities
	- Outline how these risks and vulnerabilities will be addressed.
- Authentication/Authorization/etc should be defined in this section as a general overview
	- In-depth details for use cases should be added with the respective use case.
- Other security features in place can be documented here too

## Non Functional Requirements
- ![[Functional And Nonfunctional Requirements#Non-Functional Requirements]]

## Functional Requirements/Use Cases

- Identify the primary actors (users or systems) interacting with the software solution.
- Document detailed use case scenarios that describe how these actors interact with the system to achieve specific goals or tasks.
- Use a structured format for each use case, 
	- Title
	- Brief description
	- Acceptance Criteria(s)
	- Preconditions
	- Main flow of events
	- Alternate flows
	- Postconditions
- Provide clear and concise descriptions of each step in the use case flow
	- Outline which tasks should be performed by which user
- Use diagrams such as UML use case diagrams to visualize the relationships between actors and use cases.

## Assumptions And Dependencies

- Document any external dependencies or assumptions that the software solution relies on.
- Clearly state any assumptions that have been made during the design process.