---
publish: true
created: "[[2025-10-16]]"
modified: 2026-01-11T20:43:05.291+02:00
published: "[[2025-10-16]]"
cssclasses: ""
parent: "[[Github - Actions]]"
state:
  - tree
date: "[[2025-10-16]]"
relates:
  - "[[Self Hosting]]"
  - "[[Security]]"
  - "[[Ownership]]"
---

# On User Permissions

Which user the [[Github - Workflow\|Github Actions Workflow]] will use is dependent on which user the service install was ran as:
```sh
root@op-ghr-01:/home/github_runner# id
uid=0(root) gid=0(root) groups=0(root)
root@op-ghr-01:/home/github_runner# ./svc.sh install 

# The above will start it as root.
```

You can specify the user as a 2 argument. For example:
```sh
./svc.sh install github_runner
# The above command will use the user you've provided
```

## Why Permissions matter?

When using a container inside the self-hosted runner, the file permissions are set based on the container. Thus if there is a miss-match between the runner and the container, permission errors are expected to happen. 

> [!tip]+ So which user should I use?
> A dedicated user with sudo passwordless permissions is advised. While you must give `apt` NOPASS permissions, others are not inherently required and it all depends on what actions you are using. Even making the dedicated user a passwordless sudoer is better than root. 
