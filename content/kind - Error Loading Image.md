---
publish: true
aliases:
  - kind - ctr content digest not found
created: "[[2026-01-28]]"
modified: 2026-01-28T17:45:09.471+02:00
published: "[[2026-01-28]]"
cssclasses: ""
parent: "[[kind]]"
state:
  - evergreen
date: "[[2026-01-28]]"
links:
  - https://github.com/kubernetes-sigs/kind/issues/3795#issuecomment-3770432762
---



If you see something like: 

```
ctr: content digest sha256:83e82a8dd385e27d95f2118c1332d414684aa665552f7f837f86da33674308c4: not found
```

Then:

1. add following to `/etc/docker/daemon.json`

```ini
{
  "features": {
    "containerd-snapshotter": false
  }
}
```

2. `sudo systemctl restart docker`
3. Re-create kind cluster