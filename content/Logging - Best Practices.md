---
publish: true
created: "[[2023-02-02]]"
modified: 2026-01-11T00:30:33.482+02:00
published: "[[2023-02-02]]"
cssclasses: ""
parent: "[[Logging]]"
state:
  - evergreen
date: "[[2023-02-02]]"
---

# Best Practices

## Understanding Log Levels

Lets look at log levels provided by vRO:

### Debug
Verbose logging. Feel free to log any extra arguments that may be needed later on to debug the execution/failure of a workflow. 

Example:

```ts
logger.debug(`Executing getDnsRecord for vm: ${JSON.stringify(vmSpecObject)}`)
```

### INFO
Progress specific logs that contain some context, so we can trace what happened during a workflow execution.

```ts
logger.info(`Executing getDnsRecord for vm: ${vm.name}`);
```

### WARN 
These are non fatal errors. These can be failure to do non important tasks like analytics and metrics or for example when a task was successfully executed, however we cannot be sure that the end result is as we expected it to be. Don't forget to add context to the warnings as well.

```ts
logger.warn(`Could not release lock: ${lockId}, investigation needed!`);
```

### ERROR
Errors during code execution should be logged here. Error logs are used to provide additional information, for example when you want to rollback, you still want to log the original error that resulted in the rollback.

```ts
logger.error(`Could not getDnsRecord for vm: ${vm.name}, error was: ${errorMessage}`);
```

### Others
In other cases, there may be added levels of logging, however they are vendor specific
- Critical/Fatal - popular log levels which are usually used when an application crash occurs.

## Meaningful Log Messages/Log Messages With Context

### Context
As outlined in the [[Logging - Best Practices#Understanding Log Levels\|Understanding Log Levels]] section, context is crucial. Logs like:

```
Vm Provisioning Done
```

Do not provide enough information as to what happened. When you want to lookup a specific vm provisioning logs and lets say the user gives you a `vmId` how can you easily know find out the workflow logs in a Log Aggregator ( like vRealize Log Insight )?

Instead if we construct our message like this:

```
VM with name: node123 was successfully provisioned.
```

#### Timestamps

As a general best practice, logs are prefixed with a **UTC** timestamp, this way we can track events to a point in time. The easiest way you can implement this is by utilizing a "logging" library or by writing one on your own. This way logs like:

```ts
logger.info("Some Log");
```
Will look like:
```
2023-02-02 16:00:00 Some Log
```

#### Class Names

Another good practice to make your logs more meaningful is to include information as to where they are called.

```ts
function getDnsRecord(vmId: string) {
	logger.info(`getDnsRecord: Getting DNS record for VM: ${vmId}`)
}
```


### Descriptive logs

Doing short messages for logs are not necessarily better. 

Consider that these logs will be read by other people. Also consider the fact that they may not have the same context as you do while writing the code.

Consider the following:

```ts 
logger.info(`${vmId} provisioned successfully in ${vcenterId}`);
```
Looks pretty good right? I mean you have the nice descriptive variables and the surrounding function to give you context.

However when logged it the resulting log will be like:

```
512-f12ab-21 provisioned successfully in 123-f21-213
```

Now that is not very easy to read. 

Rephrase it like so:

```ts
logger.info(`Virtual machine with id: "${vmId}" was provissioned successfully in vCenter: "${vcenterId}"`);
```
Output:

```
Virtual machine with id: "512-f12ab-21" was provissioned successfully in vCenter: "123-f21-213"
```

## Unique Log Messages

Log messages should give you concrete information quickly. That also means positional information. You need to be able to search for the "static" part of messages ( non variables ) and be able to determine where the log message came from. Consider the following:

```ts
class Api {  
   private restHost: RESTHost;  
   executeAuthRequest() {  
      const request = this.restHost.createRequest("POST", "/v1/login", {username: "test", password: "test"})  
  
      const response = request.execute();  
  
      if (response.statusCode !== 200){  
         logger.error("Auth error")  
         return;  
      }  
  
      if (typeof JSON.stringify(response.contentAsString).token !== "string"){  
         logger.error("Auth error")  
         return;  
      }  
   }  
}
```

If in the logs you see a log `Auth error` how do you know what exactly is the issue? Was the problem with the non 200 status code, or perhaps the token was missing in the body?

## Don't Log Too Much/Too Little

When writing logs, write just enough to convey progress information. You don't need to write logs per conditional, however when there is sufficient logic or significance in a condition, it may be needed.

Lets take a look at the following:

```ts
class UserManager{  
   users = {};  
   registerUser(user: string) {  
      logger.info(`Registering new user: ${user}`)  
  
      const parts: string[] = user.split(":");  
  
      if (parts.length !== 2) {  
         throw new Error(`Invalid user string: ${user}`);  
      }  

      const userId: number = parseInt(parts[0]);  

      if (userId <= 0){  
         throw new Error(`Invalid user Id: ${userId}`);  
      }  
  
      const username = parts[1];  

      if (typeof this.users[userId] !== "undefined") {  
         // User exists  
         this.users[userId].name = username;  
         logger.info(`User: ${username} created.`)  
      }  
      else {
	     // User does not exist
         this.users[userId] = {  
            name: username  
         }  
         logger.info(`User: ${username} updated.`)  
      }  
   }  
}
```

We've added logs to important steps of the process, and we have no logs for conditions that are handled otherwise.

Lets look at the same example with too much logging:

```ts
class UserManager{  
   users = {};  
   registerUser(user: string) {  
      logger.info(`Registering new user: ${user}`)  
  
      const parts: string[] = user.split(":");  

      // This gives us no new infromation, it's already logged, we are just polluting the logs
	  logger.debug(`Parts: ${parts}`);
  
      if (parts.length !== 2) {  
         // We can get this info from the error message.
         logger.debug(user);
         throw new Error(`Invalid user string: ${user}`);  
      }  

       // Not needed, we can infer that information easily, as there is no error throw.
       logger.debug("Passed parts check");
  
      const userId: number = parseInt(parts[0]);  
  
      if (userId <= 0){  
         throw new Error(`Invalid user Id: ${userId}`);  
      }  
  
      const username = parts[1];  
  
      if (typeof this.users[userId] !== "undefined") {  
         // User exists  
         this.users[userId].name = username;  
         logger.info(`User: ${username} created.`)  
      }  
      else {
	     // User does not exist
         this.users[userId] = {  
            name: username  
         }  
         logger.info(`User: ${username} updated.`)  
      }  
   }  
}
```

This logging strategy just ends up polluting our logging aggregator. And while it's not bad to be verbose, no need to log duplicate information.


And with too little:
```ts
class UserManager{  
   users = {};  
   registerUser(user: string) {  
      logger.info(`Registering new user: ${user}`)  
  
      const parts: string[] = user.split(":");  
  
      if (parts.length !== 2) {  
         throw new Error(`Invalid user string: ${user}`);  
      }  
  
      const userId: number = parseInt(parts[0]);  
  
      if (userId <= 0){  
         throw new Error(`Invalid user Id: ${userId}`);  
      }  
  
      const username = parts[1];  
  
      if (typeof this.users[userId] !== "undefined") {  
         // User exists  
         this.users[userId].name = username;  
      }  
      else {
	     // User does not exist
         this.users[userId] = {  
            name: username  
         }
      }  
   }  
}
```

We may miss out on important information/metric for example new user registrations.

## Make Sure The Logs Are Machine Readable

We did talk about having descriptive human readable logs, but what about the logging aggregators that are suppose to "aggregate" all the logs in a centralized system?

It is of course beneficial to target them as well. As such you may want to log information in a format that can be easily parsed. For example consider the following:

`2023-02-02 16:00 [UserManager] User with id: ${id} could not be found in the database`

This is a very descriptive message and is of course very easy for people to read, however it would be pretty hard for machines to parse and understand, so they could show it back to you.

Now lets consider it a bit differently. Lets say we had a system that does logs in a JSON format, which is very easy to parse and understand by machines:

```json5
{ 
 "timestamp": 1675423599,
 "class": "UserManager",
 "message": "User with id: ${id} could not be found in the database" 
}
```

This makes it very very easy for a log aggregator to extract the information and parse it. You can at this point also extract certain properties like "class" and filter by them.

This can be extended even further.

```json5
{ 
 "timestamp": 1675423599,
 "class": "UserManager",
 "userId": "${id}",
 "message": "User with id: ${id} could not be found in the database" 
}
```
And so forth. By utilizing a custom logging mechanism like this, you can attach as many properties as needed, so they can later on be parsed.

## Be Mindful Of PII/Sensitive Information

When it comes to deciding what information you should log, you should familiarize yourself with your company's policy and what is classified as PII/Sensitive Information. Do keep in mind that if names, emails, numbers etc are logged in the logging system, that would make it harder for developers to get access to those logs. 

Example of this would be
- Log `userId` instead of `username`.
- Never log passwords, but if needed, log it after hashing using a strong hashing algorithm like `sha256`