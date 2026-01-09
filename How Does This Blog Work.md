---
parent: "[[index]]"
state:
  - tree
date: "[[2026-01-09]]"
relates:
  - "[[Self-Hosting]]"
  - "[[Github - Workflow]]"
  - "[[Pull Request]]"
description: What are the intricacies of making this work?
publish: true
---
# Hosting

This website is hosted on my [[HomeLab]], running a [[Kubernetes]] cluster, with the help of a [[git - Fork|forked]] and modified [quartz](https://github.com/Michaelpalacce/quartz). 

The [garden](https://github.com/Michaelpalacce/garden)'s content is delivered separately from quartz using [Image volume mounts](https://kubernetes.io/docs/tasks/configure-pod-container/image-volumes/) , this allows me to update quartz without bumping the garden version too.

For the full manifest, see: https://github.com/Michaelpalacce/HomeLab/tree/master/cluster/homelab/apps/garden

# Customization

The fork contains changes to plug-ins, styles and a few custom components like:

- Showing frontmatter properties that is taken from [this PR](https://github.com/jackyzha0/quartz/pull/1720) until the functionality is merged if it gets merged.
- Using frontmatter prop `parent` for generating breadcrumbs with the help of a new [component](https://github.com/Michaelpalacce/quartz/blob/main/quartz/components/ParentBreadcrumbs.tsx), which I've opened a [PR](https://github.com/jackyzha0/quartz/pull/2272) for.

> [!success]+ You are looking at them!
> These changes are all visible if you are viewing this on https://garden.sgenov.dev!

# Content

The contents are hosted in a [separate repo](https://github.com/Michaelpalacce/garden). It gets updated inside [[000 Obsidian Index|Obsidian]] and if I want to publish it I set the frontmatter property `publish` to `true`.

I've written a [[git - alias|git alias]] to help me with filtering:
```sh
[alias]
    publish = "!f() { \
        IFS=$'\n'; \
        echo '🛡️  Syncing publication status...'; \
        for file in $(find . -type f -name '*.md' -not -path '*/.*'); do \
            clean_file=\"${file#./}\"; \
            if head -n 20 \"$clean_file\" | grep -q 'publish: true'; then \
                echo \"   ✅ Staging: $clean_file\"; \
                git add -f \"$clean_file\"; \
            else \
                if git ls-files --error-unmatch \"$clean_file\" >/dev/null 2>&1; then \
                    echo \"   🗑️  Removing: $clean_file\"; \
                    git rm --cached \"$clean_file\" -q; \
                fi; \
            fi; \
        done; \
        unset IFS; \
        if [ -n \"$1\" ]; then \
            git commit -m \"$1\"; \
        else \
            git commit -v; \
        fi; \
    }; f"
```

Which allows me to do:
```sh
git publish "New Content"
```

Only files that are set to be published will be added and committed. The hook also allows me to remove files if I ever set them to not be published.

> [!warning]+ Why not using the `Git` plugin?
> Git plugin doesn't work well on mobile and I am a [[Developer]], I can open a terminal and run the commands myself.

By default all files are [[git - gitignore|ignored]] and only files marked `publish: true` will be added:
```
# IGNORE ALL
# This is a precaution. If you want to add something, use `!SomethingName` after this
# 1. Ignore everything
*

# Docker Section
!.gitignore
!.dockerignore
!Dockerfile

# Automation
!.github/
!.github/**

# ASSETS
# Yes, assets need to be added manually.

!/Assets/
!Assets/Pasted image 20230617202817.png
!Assets/Screenshot_20240615_113622_YouTube ReX (drifty).jpg
!Assets/Pasted image 20230619214509.png
```

The content of the garden is then packaged in a [[Docker - Image|docker image]], based on `scratch` as we only care for the static files and nothing else:
```Dockerfile
FROM scratch

COPY . .
```

# Releasing a new version

After pushing to [[git]], [I run a Github Workflow](https://github.com/Michaelpalacce/garden/actions/workflows/version.yaml), to release a new version, which automatically triggers [another Github Workflow](https://github.com/Michaelpalacce/garden/actions/workflows/docker.yaml) that will package it and release it to [github packages](https://github.com/Michaelpalacce/garden/pkgs/container/garden).

When docker image gets released, I can simply update the version of the container in my HomeLab's git repo, at which point [[FluxCD2]] will reconcile it and deploy the new version to the world. 

> [!info]+ Bonus!
> I can also just wait a bit and [[Renovate]] will automatically open a [PR](https://github.com/Michaelpalacce/HomeLab/pull/3707) and merge it.

# What does the future hold for this site?

First of all, I plan to slowly expand this garden and try my hand at [[index|blogging]]. Currently I have around ~3500 notes which require some vetting before they are all published and made public.

>[!error]+ Pain paint
>There is no way for me to automagically update my garden at the moment. It involves me sitting on a computer, syncing, pushing and running workflows. Which... I dislike. In the future I am thinking of exploring ways to run Obsidian Sync in a container and automatically pushing changes in set intervals if they are detected. Thinking of making a fork of https://github.com/sytone/obsidian-remote and maintaining it, potentially setting up automation to release new Obsidian Versions + use alpine as a base image.
