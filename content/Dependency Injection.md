---
{"publish":true,"created":"[[2024-03-20]]","modified":"2026-01-10T02:21:45.452+02:00","published":"[[2024-03-20]]","cssclasses":"","parent":"[[Programming Index|Development]]","state":["evergreen"],"relates":["[[Dependency Inversion Principle]]"],"opposes":["[[Tight Coupling]]"],"date":"[[2024-03-20]]"}
---

# Types 

## Constructor Injection 

Most common way of doing Dependency Injection. 

```ts
class UserService {
  constructor(private userRepository: UserRepository) {}

  getUser(id: string) {
    return this.userRepository.getUserById(id);
  }
}

class UserRepository {
  getUserById(id: string) {
    // Retrieve user from the database
  }
}

const userService = new UserService(new UserRepository());
```

## Property Injection 

Dependencies are injected through public properties of a class. 

```ts
class AuthService {
  private _userRepository!: UserRepository;

  set userRepository(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  login(username: string, password: string) {
    // Perform authentication using the injected UserRepository
  }
}

const authService = new AuthService();
authService.userRepository = new UserRepository();
```

While possible, this does make things harder to track. I also dislike objects that are unusable after they have been constructed. 
