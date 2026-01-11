---
{"publish":true,"aliases":["Upstream Registry Cache","Proxy Cache","Caching Registry"],"description":"A caching mechanism where data is pulled by a proxy server and served to clients cached.","created":"[[2025-09-03]]","modified":"2026-01-11T15:42:34.640+02:00","published":"[[2025-09-03]]","cssclasses":"","parent":"[[Cache]]","state":["tree"],"date":"[[2025-09-03]]"}
---

> [!info]+
> A pull-through cache is a registry mirror that acts as an **intermediary between a client and an upstream registry**. By pulling artifacts from the upstream registry, the pull-through cache will cache them and save traffic next time they are requested.

# Using It To Access Artifacts In An [[Air Gapped]] Environment

The pull-through cache can be set up to only access lets say certain upstream registries and nothing else. That way air gapped environments will have access to the upstream registry through the cache while keeping up with security best-practices.

# Examples

- [[Jfrog Artifactory]]
- [[Sonatype Nexus Repository Manager]]
- [[Azure DevOps Artifacts]]
- [[ProGet]]
- [[Harbor]]
