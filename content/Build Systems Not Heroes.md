---
{"publish":true,"aliases":["Invest in automation"],"description":"Invest in automation, not in efficient workers.","created":"[[2025-04-13]]","modified":"2026-01-11T00:51:21.506+02:00","published":"[[2025-04-13]]","cssclasses":"","parent":"[[DevOps Index]]","state":["evergreen"],"date":"[[2025-04-13]]","relates":["[[Automation]]","[[Processes]]"],"links":["https://vitonsky.net/blog/2024/10/11/system-approach/"]}
---

**Individual skills skew the actual performance metric of your application**. 

If you have a worker that does really well at a certain task, that wouldn't scale well when you have more clients as the system itself won't scale.

- Improve workflows, not individuals. Make the process the lever to apply effort.
	- Release from a pipeline, not manually
	- Generate documentation automatically, not manually
- Identify problems that occur systematically, introduce processes to resolve them, and prioritize process over people.
	- Quality gates in the pipeline

# Examples 

## Pushing to master

Don't trust that programmers won't push to master, add a policy denying that push. 

## Lint

Add lint rules to linters, enforce linting or fail the build. 

## Efficient Tom

Let's say you have a task that can be automated, but there is this guy, let's call him Tom. Tom does really well at said task and often outperforms the automation, so you decide to use Tom instead of investing in an expensive and lengthy automation platform. You praise the efficiency of this to your stakeholders and the Tom... Leaves! 

## Typical Development Improvements

Here are some examples of typical system solutions in programming:

- Set strict rules for linters to ban most dangerous language features and force programmers to write boring and obvious code.
- Set up extensive testing and analysis jobs in pull request pipelines to detect and reject [[Bad Code]] as frequently as possible.
- Make the code review process mandatory and hold those who approve pull requests accountable for quality, not the author of the changes.
- Require programmers to add tests for any code changes.
- Require programmers to use only immutable values. 
