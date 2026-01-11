---
{"publish":true,"description":"What are the intricacies of making this work?","created":"[[2026-01-09]]","modified":"2026-01-11T16:13:27.511+02:00","published":"[[2026-01-09]]","cssclasses":"","parent":"[[index]]","state":["evergreen"],"date":"[[2026-01-09]]","relates":["[[Self Hosting]]","[[Github - Workflow]]","[[Pull Request]]"]}
---

# Hosting

This website is hosted on my [[HomeLab]], running a [[Kubernetes]] cluster, with the help of a [[git - Fork\|forked]] and modified [quartz](https://github.com/Michaelpalacce/quartz). 

The [garden](https://github.com/Michaelpalacce/garden)'s content is delivered separately from quartz using [Image volume mounts](https://kubernetes.io/docs/tasks/configure-pod-container/image-volumes/) , this allows me to update quartz without bumping the garden version too.

For the full manifest, see: https://github.com/Michaelpalacce/HomeLab/tree/master/cluster/homelab/apps/garden

# Customization

The fork contains changes to plug-ins, styles and a few custom components like:

- Showing frontmatter properties that is taken from [this PR](https://github.com/jackyzha0/quartz/pull/1720) until the functionality is merged if it gets merged.
- Using frontmatter prop `parent` for generating breadcrumbs with the help of a new [component](https://github.com/Michaelpalacce/quartz/blob/main/quartz/components/ParentBreadcrumbs.tsx), which I've opened a [PR](https://github.com/jackyzha0/quartz/pull/2272) for.

> [!success]+ You are looking at them!
> These changes are all visible if you are viewing this on https://garden.sgenov.dev!

# Content

The contents are hosted in a [separate repo](https://github.com/Michaelpalacce/garden). It gets updated inside [[KIT/000 Obsidian Index\|Obsidian]] and if I want to publish it I set the frontmatter property `publish` to `true`.

I am using [Quartz Syncer](https://github.com/saberzero1/quartz-syncer) to push changes from any devices.

![[Assets/Screenshot_20260111_161317_Obsidian.jpg]]

Only files that are set to be published will be added and committed. The plugin also allows me to remove files if I ever set them to not be published.

The content of the garden is then packaged in a [[Docker - Image\|docker image]], based on `scratch` as we only care for the static files and nothing else:
```Dockerfile
FROM scratch

COPY ./content .
```

# Releasing a new version

After pushing to [[git]], [I run a Github Workflow](https://github.com/Michaelpalacce/garden/actions/workflows/version.yaml), to release a new version, which automatically triggers [another Github Workflow](https://github.com/Michaelpalacce/garden/actions/workflows/docker.yaml) that will package it and release it to [github packages](https://github.com/Michaelpalacce/garden/pkgs/container/garden).

> [!info] Bonus! 
> Alternatively I don't need to run the workflow anymore. Automatically the latest pushed tag will be used and the current [[Timestamp]] will be added at the end, creating a image that will eventually be promotedtto production.

When docker image gets released, I can simply update the version of the container in my HomeLab's git repo, at which point FluxCD2 will reconcile it and deploy the new version to the world. 

> [!info]+ Bonus!
> I can also just wait a bit and [[Renovate]] will automatically open a [PR](https://github.com/Michaelpalacce/HomeLab/pull/3707) and merge it.

# What does the future hold for this site?

First of all, I plan to slowly expand this garden and try my hand at [[index\|blogging]]. Currently I have around ~3500 notes which require some vetting before they are all published and made public.