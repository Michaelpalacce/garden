---
publish: true
created: "[[2024-02-27]]"
modified: 2026-01-10T17:19:53.563+02:00
published: "[[2024-02-27]]"
cssclasses: ""
parent: "[[HomeLab]]"
state:
  - evergreen
  - withered
date: "[[2024-02-27]]"
---

We are using [SWAG](https://docs.linuxserver.io/general/swag/) for reverse proxy
# Docker Compose File 

```yaml
version: "2.1"
services:
  swag:
    image: lscr.io/linuxserver/swag:latest
    container_name: swag
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Sofia
      - URL=stefangenov.site
      - SUBDOMAINS=wildcard
      - VALIDATION=dns
      - DNSPLUGIN=cloudflare
      - EMAIL=sgenov94@gmail.com
      - STAGING=false
    volumes:
      - ./config:/config
    ports:
      - 443:443
        #- 80:80
```
# Crowdsec

https://www.linuxserver.io/blog/blocking-malicious-connections-with-crowdsec-and-swag