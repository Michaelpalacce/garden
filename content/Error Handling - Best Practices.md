---
{"publish":true,"created":"[[2023-02-01]]","modified":"2026-01-10T23:27:15.490+02:00","published":"[[2023-02-01]]","cssclasses":"","parent":"[[Error Handling]]","state":"evergreen","date":"[[2023-02-01]]","relates":["[[Best Practices]]"],"opposes":"[[Bad Practices]]"}
---

# Best Practices

## Types Of Error

There are a few types of errors that we should know and how to best address them.

### Syntax Errors

> [!info] ~ What ? ~
> Mistakes in the syntax of your code, making it invalid.

These are usually handled by your editor/IDE or compiler/interpreter.

### Runtime Errors

> [!info] ~ What ? ~
> Runtime errors occur while the program is executing. They can be caused by: invalid inputs, division by zero, memory exhaustion or accessing undefined variables/functions.

Runtime errors are solved by implementing some of the techniques further down.
Unit tests play a big role as they force you to think of edge cases and force you to think of multiple paths outside of the happy path through your code.
Integration tests also play a role here, by testing how different systems or components integrate together.

### Logic Errors

> [!info] ~ What ? ~
> Logic errors, or bugs, occur when the program's logic is flawed, leading to unintended or incorrect behavior.

Unit tests play a small role in detecting runtime errors, but not as much as Integration tests do. [[Testing - Integration Tests\|Integration tests]] can prevent regressions, test how components integrate and such.

[[Code Review\|Code reviews]] are a great way to discover logic errors, if the reviewer is careful.

## Handle Errors At An Appropriate Time

> [!note] ~ Note ~
> If you don't know how to handle an error, let the caller decide!

Delegate error handling to the caller when possible. Give ability to handle errors ( without the use of try catch ) to the caller.

Instead of:
```ts
class PersonManager {  
   private people = {  
      "Dave": {data: {age: 21, salary: 50000}}  
   }  
   
   getPerson(name: string) {
      return this.people[name];  
   }
  
   getAge(name: string): number {  
      return this.getPerson(name).data.age;  
   }  
  
   getSalary(name: string): number {
      return this.getPerson(name).data.salary;  
   }  
}

const manager = new PersonManager();
const person = "Dave";
try {
	console.log(manager.getSalary(person));
}
catch(e){
	console.error(`${person} not found`);
}
```

Do:
```ts
class PersonManager {  
   private people = {  
      "Dave": {data: {age: 21, salary: 50000}}  
   }

	// I've given the caller a way to check if the person exists in a safe way
	hasPerson(name: string){ return typeof this.people[name] !== "undefined"; }
  
	getPerson(name: string) {
	// I don't care how this error is handled, the caller assumed I have person with the given name, but I did not.
	// I don't know how to solve this, so I will throw an error.
	if (!this.hasPerson(name)){
		throw new Error(`Could not find a person called "${name}"`);
	}
		return this.people[name];  
	}
  
	getAge(name: string): number {  
		return this.getPerson(name).data.age;  
	}  
  
	getSalary(name: string): number {
		return this.getPerson(name).data.salary;  
	}
}

const manager = new PersonManager();
const person = "Dave";
if ( manager.hasPerson(person)){
	console.log(manager.getSalary(person));
} else {
	console.error(`${person} not found`);
}
```

## Meaningful Error Messages

When writing error messages, make sure they are easily identifiable. 

When you encounter an error the first thing you as a developer would do is look the message up in the code. The faster you can find where the problem originated, the easier your job would be.

Avoid writing error messages that give off little information like:
```ts
throw new Error(`input: ${JSON.stringify(input)}`);
```

Write more meaningful error messages like this:
```ts
throw new Error(`Missing username key, but was required to register user. Input was: ${JSON.stringify(input)}`);
```

## Logging

> [!info]
> During the execution of our code, logs are what we use to debug problems that occurred. Good logging strategy can help us better understand what the problem is.

See: [[Logging - Best Practices]].

## Fatal vs Non-Fatal Errors (warnings)

Not all errors need to stop the execution of the process. Some errors can be caught, or you can check before they occur and can be skipped or ignored.

Imagine you have a "logging" component that sends usage/analytics to an external server. When provisioning a VM, even tho usage/analytics information is important it's not critical. Sometimes it's better to continue with the code execution and log a warning that you can later trigger an alarm based on.

## Try Catch Discussion

> [!note] ~ Note ~
> Just some general best practices when it comes to forming your try catches.

### No Giant Try Catch Statements

Avoid writing complex logic in a try catch, instead if that is needed, move all the logic inside a different method to make the code more readable and maintainable. 

"Giant" try catch statements often lead to developers getting lazy with error handling and "relying" that any errors will be handled by it, which is not a good practice.

Consider the following example:
```ts
class Authenticator {  
   bearerToken = null  
  
   getToken(user:any) {  
      if (!this.bearerToken) {
         try {  
            this.bearerToken = this.authenticate(user);  
         } catch (e) {  
            throw new Error(`Could Not Authenticate User: ${user.username}`)  
         } 
      }
      return this.bearerToken;  
   }  
  
   private authenticate(user: any) {  
      // Complex Logic that throws here
  
      return "MyBearerToken";  
   }  
}
```

### Little To No Logic In Catch Block

When writing a catch statement there are a few possibilities:
1. Log the error and continue for non fatal errors
2. Rethrow with additional information
3. Catch and set a flag for rollback
4. In some cases, for retry purposes.

### No Nested Try Catch Inside The Catch Block

At all cases, avoid having a try catch inside another catch block. This can lead to really unmaintainable code and violates the practice of no logic in the catch block.

### Don't Overuse Try Catch

This goes back to delegation of error handling. Instead of relying on a throw, check first ( when possible ) if the operation you are trying to perform will not fail.

### Don't Try Catch Just To Rethrow/Don't Bury Your Exceptions

If you catch an error and you decide to do something with it and rethrow it, do not discard the original error. Fetch as much information FROM it as possible and even include it as part of the rethrown error.

Instead of:
```ts
function test() {  
   try{  
      // Some complex logic here  
   }  
   catch (e) {  
      throw new Error("There was an error")  
   }  
}
```

Do:
```ts
function test() {

   let machineName = "";

   try{
      // Some complex logic here  
   }  
   catch (e) {  
      throw new Error(`There was an error while commissioning machine: ${machineName}. Original Error: ${e.message} ${e.stack}`)  
   }  
}
```

## Avoiding Errors By Design

How can we design our code better so we can avoid errors, or handle errors more gracefully?

### Idempotency

What is [[Idempotent\|Idempotency]]? In programming this is when you execute an operation and no matter how many times that same operation is executed the results will be the same.

A great example for this is a simple DELETE HTTP request.

Imagine you are trying to delete an element:
1. Element gets deleted and we get a response with "OK" and 200 status code.
2. We try to delete the element again
3. The element does not exist, so we return another response with "OK" and 200 status code.

This way you get more resilient code that you can inject into long and complex pipelines. Examples 
- VM Commissioning workflow, tasks that were already executed, can be re-executed  before, with check if they've already been done
- VM Decommissioning workflow, same as the commissioning one.
- Configuration workflow, when you've configured something, it does not need reconfiguring at a later stage, so we can add a check. ( e.g. Ansible playbooks )

Instead of:
```ts
class Api {  
   private departments = {  
      management: {  
         people: {  
            "Dave": {age: 20, salary: 5000}  
         }
      }
   }

   deleteUser(name: string, department: string){  
      delete this.departments[department].people[name];  
  
      return {statusCode: 200, body: "OK" }  
   }  
}  

const api = new Api();  

api.deleteUser("Dave", "management");
api.deleteUser("Dave", "development");
```

Better example:
```ts
class Api {  
   private departments = {  
      management: {  
         people: {  
            "Dave": {age: 20, salary: 5000}  
         }  
      }  
   }  

   deleteUser(name: string, department: string){  
      const deletedResponse  = {statusCode: 200, body: "OK"};  

      if (!this.departments[department])  
         return deletedResponse  

      delete this.departments[department].people[name];  

      return deletedResponse  
   }  
}  

const api = new Api();  

api.deleteUser("Dave", "management");  
api.deleteUser("Dave", "development");
```

### Exhaustive Error Checking

> [!note] ~ Note ~
> Best way to prevent any errors from happening is to account for them.

Assume anything and everything will fail. Assume that users will input incorrect data and it needs to be verified.

- Before you call a `getter`, check if what you are trying to get already exists
- Before accepting information and working with it, make sure it is in the state you are expecting. ( Check if the structure is valid. )

The main idea of this is to be able to throw a more meaningful error. Errors like: `cannot read key "properties" of undefined` are not as helpful as `Cannot find user with name: Dave` for example.

Instead of:
```ts
class PersonManager {  
   private people = {  
      "Dave": {data: {age: 21, salary: 50000}}  
   }  
   
   getPerson(name: string) {
      return this.people[name];  
   }
  
   getAge(name: string): number {  
      return this.getPerson(name).data.age;  
   }  
  
   getSalary(name: string): number {
      return this.getPerson(name).data.salary;  
   }  
}

const manager = new PersonManager();
const person = "Dave";

console.log(manager.getSalary(person));
```

Do:
```ts
class PersonManager {  
   private people = {  
      "Dave": {data: {age: 21, salary: 50000}}  
   }  

	getPerson(name: string) {  
	// !!! Introducing a safety check
		if (typeof this.people[name] === "undefined"){
			throw new Error(`Could not find a person called "${name}"`);
		}
		return this.people[name];  
	}
  
	getAge(name: string): number {  
		return this.getPerson(name).data.age;  
	}  
	  
	getSalary(name: string): number {
		return this.getPerson(name).data.salary;  
	}  
}

const manager = new PersonManager();
const person = "Dave";

console.log(manager.getSalary(person));
```

### Assume Everything Will Fail Continued ( Retries )

When writing network code, one of the most important things developers need to understand is that there will be drops. Networks are hardly stable and timeouts, errors in resolution and others are very common. Same logic can be applied to essentially ANY third party system whether local or remote.

When possible, attempt retries. If your code is structured in a way where they use a specific class for external communication, then that component can be rewritten to do retries in case of timeouts for example.

### Check For Errors First

Always do validation first. Get everything needed to validate your result. 

This will simplify your code so

instead of:
```ts
const users = {};  
  
function registerUser(user: string) {  
   const parts: string[] = user.split(":");  
  
   if (parts.length == 2) {  
      const userId: number = parseInt(parts[0]);  
  
      if (userId > 0){  
         const username = parts[1];  
  
         if (typeof users[userId] !== "undefined") {  
            // User exists  
            users[userId].name = username;  
         }  
         else {  
            users[userId] = {  
               name: username  
            }  
         }  
      }
      else {  
         throw new Error(`Invalid user Id: ${userId}`);  
      }  
   }  
   else {  
      throw new Error(`Invalid user string: ${user}`);  
   }  
}
```

Do:
```ts
const users = {};  
  
function registerUser(user: string) {  
   const parts: string[] = user.split(":");  
  
   if (parts.length !== 2) {  
      throw new Error(`Invalid user string: ${user}`);  
   }  
  
   const userId: number = parseInt(parts[0]);  
  
   if (userId <= 0){  
      throw new Error(`Invalid user Id: ${userId}`);  
   }  
  
   const username = parts[1];  
  
   if (typeof users[userId] !== "undefined") {  
      // User exists  
      users[userId].name = username;  
   }  
   else {  
      users[userId] = {  
         name: username  
      }  
   }  
}
```

## Rollback During Errors 

When an error occurs, developers need to think if the state was polluted in any way. Was my database affected? Did I insert/update/delete something that should be restored? Did I release an IP? 

- Always clean up any mess you've done where applicable
- Try to use/write Atomic Operations when possible (Transaction SQL statements to name one)
- Write resilient rollbacks. Keep in mind the worst case scenario has happened, there was an error in our code, so we need to salvage as much as possible. We don't want our rollbacks to fail. If there is an error during cleanup, **log the error**, manual intervention may be needed and we need to know how far we got.

