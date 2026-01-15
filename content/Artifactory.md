---
publish: true
aliases:
  - Artifactory
created: 2023-04-27T22:31:30.030+03:00
modified: 2026-01-14T20:55:19.784+02:00
published: 2026-01-14T20:55:19.784+02:00
cssclasses: ""
parent:
  - "[[DevOps Index]]"
state: evergreen
---

> [!done] What is it?
> 
> Artifactory is a universal repository manager that integrates with your existing system.

# Map Of Content

- What can you store?
	- [[Docker]] | [[mvn\|Maven]] | [[npm\|Node Modules]]
- Setup
	- [[Artifactory#Setting up Artifactory with Docker Compose]] - setup a local environment with [[Docker Compose]]
	- [[Artifactory#Nginx config]] - Configure [[nginx\|nginx]] for Artifactory
	- [[Artifactory#Fixing hosts]] - Fix your hosts on [[Windows\|Windows]]
- Configuration
	- [[Artifactory#Artifactory repository setup]] - Configure Artifactory with the needed repositories and setup the permissions
- Usage
	- [[Artifactory#Deploying artifacts]] - How to deploy artifacts to your local instance
- [[Artifactory#Troubleshooting]] - Troubleshooting steps

# Setting up Artifactory with [[Docker Compose]]

~~~yaml
version: '3.6'
services:
  # NGINX reverse proxy server
  nginx:
    image: nginx
    container_name: nginx
    restart: always
    ports:
      - 80:80
      - 443:443
    volumes:
      - "./nginx/conf.d:/etc/nginx/conf.d"
      - "./nginx/log:/var/log/nginx"
  server:
      image: gitea/gitea:1.16.0
      container_name: gitea
      environment:
        - USER_UID=1000
        - USER_GID=1000
      restart: always
      volumes:
        - ./gitea:/data
        - /etc/timezone:/etc/timezone:ro
        - /etc/localtime:/etc/localtime:ro
      ports:
        - "3000:3000"
        - "222:22"

  artifactory:
    image: docker.bintray.io/jfrog/artifactory-oss:6.15.1
    user: "${UID}:${GID}"
    ports:
     - 8081:8081
     - 8082:8082
    volumes:
      - ./artifactory:/var/opt/jfrog/artifactory
    environment:
     - EXTRA_JAVA_OPTIONS=-Xmx4g
    restart: always
    ulimits:
      nproc: 65535
      nofile:
        soft: 32000
        hard: 40000
~~~

## Nginx config:
~~~nginx
upstream artifactory_app {
    server artifactory:8081;
}

server {
    listen 80;
    server_name artifactory.corp.local;
    client_max_body_size 0;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;

        proxy_pass http://artifactory_app;
    }
}
~~~

## Fixing hosts
Add these to your hosts:

~~~ini
# vRA IaaC START SECTION
127.0.0.1     artifactory.corp.local
# vRA IaaC END SECTION
~~~

## Artifactory repository setup
1. Go to http://artifactory.corp.local
1. Follow initial steps and setup users
1. Add a new local maven repository called `pscoe`
1. Add a new remote maven repository called `maven` and url `https://repo1.maven.org/maven2`
1. Add a new remote maven repository called `apache` and url `https://repository.apache.org/content/repositories/releases/`
1. Add a new virtual repo called `virtual` with all of the other 3 repos
1. You will have to go to [groups](http://artifactory.corp.local/ui/admin/management/groups) and setup a group add your user to that group.
1. Go to [permissions](http://artifactory.corp.local/ui/admin/management/permissions) and either create a new permission that gives the newly created group permission to Manage Repositories.

## Deploying artifacts

1. Make sure your `settings.xml` is correct
2. Run `jfrog config add`
3. Setup the connection
4. `jfrog rt u --recursive=true --flat=false ./ virtual` ( run this if you actually have artifacts which initially probably you won't )


## Troubleshooting

- Read [this](https://www.jfrog.com/jira/browse/RTFACT-26189?focusedCommentId=217105&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-217105). jFrog latest versions have an issue with the way the /artifactory is delivered ( now it's delivered with a nice and fancy html which is not what we want ). This is solved by adding `arifactory.redirect.native.browser.requests.to.ui=false`
in `artifactory.system.properties`. To get into the container run: `docker-compose exec artifactory bash` find the file: `find / -name artifactory.system.properties` and modify this file manually ( after which restart the container `docker-compose restart artifactory` )
- jCenter used to be de-facto way of retrieving maven artifacts. jCenter is now deprecated and while the official maven repository has A LOT of artifacts, chances are it is missing just as many. One of these for example is ant version 1.8.1 as maven repo has up to 1.7.0 only. You can sort of solve this by searching for a repository that has that version. This applies to other packages.
