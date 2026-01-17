---
publish: true
created: "[[2024-01-14]]"
modified: 2026-01-16T01:38:45.297+02:00
published: "[[2024-01-14]]"
cssclasses: ""
parent: "[[Programming Index|Development]]"
state:
  - evergreen
date: "[[2024-01-14]]"
---

# Ideas For Improvement

- [ ] Migrate to main treesitter branch
- [ ] Better handling of big files
- [ ] Better handling of many open [[Neovim - Buffers\|buffers]]
- [ ] Be mindful of errors and try to resolve them better
- [ ] Fugitive better placement? 


# Dotfiles

My dotfiles are [[Linux]] and [[MacOS]] specific. I try to use the same tools for both platforms as well as have a similar feel. I'm going for [[Simplicity]] so that I can easily **switch and adapt** as needed. 

One of the main reasons I want to keep a MacOS setup is because **macs are highly used in corporate environments**. 

```sh
https://github.com/Michaelpalacce/.dotfiles
```

# [[Personal Development Environment]]

While my dotfiles are important to me, to get that similar feel and ease me through platform hopping, my editor, that is the basis of my PDE is what I truly need to do my job. 

[[Neovim]] is my editor of choice and configuration for it resides in a separate repo. 

```sh
https://github.com/Michaelpalacce/nvim
```

I have written automation and have made sure that I can easily set up an environment. More on that [[Development Workflow#Setup\|here]]. 

# Setup

Aiming for a consistent setup, that can be reproduced. 

For ensuring consistent state:
```sh
curl -o- https://raw.githubusercontent.com/Michaelpalacce/.dotfiles/master/setup.sh | bash
```

And for installing and setting up my PDE:
```sh
curl -o- https://raw.githubusercontent.com/Michaelpalacce/nvim/main/setup.sh | bash
```

# Methodology 

- The faster you move around the faster you can make progress 
- Native as you can, so it's easier to transition, [[Learn the Fundamentals]], as you never know when you might need them
- [[Terminal]] focused workflow. Fast, efficient, does what you expect it to do 
- Themed for consistency. Catppuccin Mocha! 
- Ergonomics are prioritized, [[Carpal Tunnel Syndrome]] is no joke. Should need to move far away from the homerow on your keyboard. 
- Automated installation, always. 
- Having in mind different scenarios. Neovim should install and update what it needs, when it needs it. 
	- [[Neovim - LSP]] is automatically configured 