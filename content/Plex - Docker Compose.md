---
publish: true
created: "[[2022-07-14]]"
modified: 2026-01-10T16:52:21.372+02:00
published: "[[2022-07-14]]"
cssclasses: ""
parent:
  - "[[HomeLab - K3S Details]]"
state: evergreen
relates:
  - "[[Plex]]"
date: "[[2022-07-14]]"
---

- Without GPU
```yaml
---
version: "2.1"
services:
  plex:
    image: lscr.io/linuxserver/plex:1.40.0
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - VERSION=docker
    volumes:
      - /mnt/media/config:/config
      - videos:/media
    restart: always
volumes:
  videos:
    driver_opts:
      type: "nfs"
      o: "addr=192.168.1.39,nolock,ro,soft,nfsvers=4"
      device: ":/volume1/k3s/media"
```

- With GPU
```yaml
version: '3.8'
services:
  plex:
    container_name: plex
    image: ghcr.io/linuxserver/plex:1.41.3
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=$TZ
      - PUID=$PUID
      - PGID=$PGID
      - VERSION=latest
    volumes:
      - ./config:/config
      - videos:/media
    deploy:
      resources:
        reservations:
          devices:
          - driver: nvidia
            count: all
            capabilities: [gpu]
volumes:
  videos:
    driver_opts:
      type: "nfs"
      o: "addr=192.168.1.39,nolock,ro,soft,nfsvers=4"
      device: ":/volume1/k3s/media"
```
