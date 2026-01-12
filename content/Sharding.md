---
{"publish":true,"description":"Distributing data on multiple servers","created":"[[2024-09-06]]","modified":"2026-01-12T22:47:11.081+02:00","published":"[[2024-09-06]]","cssclasses":"","parent":"[[Databases]]","state":["sapling"],"date":"[[2024-09-06]]","relates":["[[Cassandra]]","[[MongoDB]]","[[CouchDB]]","[[Partitioning]]"]}
---

> [!info]+
> Sharding is a technique for distributing data. Data is split into smaller subsets and is sent to different shards (usually nodes) via the help of some sort of hash generated from a Partition Key of sorts. Data when seeked can be easily retrieved from the correct shard as passing the same partition key will tell the DB where to look for the data.

Most commonly, sharding spans multiple servers, unlike [[Partitioning]], which happens within a single server.

> [!quote]+
> Every shard is a [[Partitioning\|partition]], but not every partition is a shard. ^quote
