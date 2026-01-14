---
publish: true
created: "[[2026-01-14]]"
modified: 2026-01-14T20:53:55.880+02:00
published: "[[2026-01-14]]"
cssclasses: ""
parent: "[[Docker Compose]]"
state: evergreen
aliases:
date: "[[2026-01-14]]"
---

This is an example 

docker-compose.yaml file that installs the *arr stack

~~~yaml
version: '3.6'

services:
    sonarr:
        image: linuxserver/sonarr:0.6.1395
        ports:
            - "8989:8989"
        volumes:
            - ./sonarrConfig:/config
            - ./shows:/shows
            - ./downloads:/downloads
        restart: always

    radarr:
        image: linuxserver/radarr:0.0.5553
        ports:
            - "7878:7878"
        volumes:
            - ./radarrConfig:/config
            - ./movies:/movies
            - ./downloads:/downloads
        restart: always

    jackett:
        image: linuxserver/jackett:0.20.93
        ports:
            - "9117:9117"
        volumes:
            - ./jacketConfig:/config
        restart: always

    jellyfin:
        image: linuxserver/jellyfin:2021.12.05
        ports:
            - "8096:8096"
        volumes:
            - ./jellyfinConfig:/config
            - ./movies:/data/movies
            - ./shows:/data/shows
        restart: always

    qbittorrent:
        image: linuxserver/qbittorrent:20.04.1
        environment:
            - WEBUI_PORT=8080
        ports:
            - "6881:6881/tcp"
            - "6881:6881/udp"
            - "8080:8080"
        volumes:
            - ./qbittorrentConfig:/config
            - ./downloads:/downloads
            - ./movies:/data/movies
            - ./shows:/data/shows
        restart: always

~~~
