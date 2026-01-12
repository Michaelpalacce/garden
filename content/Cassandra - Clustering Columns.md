---
{"publish":true,"created":"[[2023-03-04]]","modified":"2026-01-12T22:44:42.261+02:00","published":"[[2023-03-04]]","cssclasses":"","parent":"[[Cassandra]]","state":["evergreen"],"date":"[[2023-03-04]]","links":["https://www.baeldung.com/cassandra-keys"]}
---

> [!success] ~ What ? ~
> In Cassandra, clustering columns are any additional columns needed to form the [[Cassandra - Primary Key\|Primary Key]].
> Clustering Columns can be used to better segment or cluster the data.

# Ordering

Ordering can be either `ASC` or `DESC`. Also if you have more than one clustering column, when ordering they are ordered from left to right. 

Example:

```sql
CREATE TABLE server_logs(
   log_hour timestamp,
   log_level text,
   message text,
   server text,
   PRIMARY KEY ((log_hour, server),log_level)
)WITH CLUSTERING ORDER BY (log_level DESC);
```

With data:

| log_hour | log_level | message       | server |
| -------- | --------- | ------------- | ------ |
| 12       | info1     | Some message1 | Prod-1 |
| 12       | info2     | Some message2 | Prod-1 |
| 12       | info3     | Some message3 | Prod-2 |

Will query: `SELECT * FROM server_logs where log_hour = '12' and server = 'Prod-1'`

Will return:

| log_hour | log_level | message       | server |
| -------- | --------- | ------------- | ------ |
| 12       | info1     | Some message1 | Prod-1 |
| 12       | info2     | Some message2 | Prod-1 |

## Default Behaviour

By default, the Cassandra storage engine sorts the data in ascending order of clustering key columns.

# Examples

## No Columns 
```sql
CREATE TABLE server_logs(
   log_hour timestamp PRIMARYKEY,
   log_level text,
   message text,
   server text
)
```

partition key: **log_hour** 

clustering columns: none

## One clustering column

```sql
CREATE TABLE server_logs(
   log_hour timestamp,
   log_level text,
   message text,
   server text,
   PRIMARY KEY (log_hour, log_level)
)
```

partition key: **log_hour** 

clustering columns: **log_level**

## Complex Partition Key

```sql
CREATE TABLE server_logs(
   log_hour timestamp,
   log_level text,
   message text,
   server text,
   PRIMARY KEY ((log_hour, server))
)
```

partition key: **log_hour,** **server**

clustering columns: none

## Clustering column with order

```sql
CREATE TABLE server_logs(
   log_hour timestamp,
   log_level text,
   message text,
   server text,
   PRIMARY KEY ((log_hour, server),log_level)
)WITH CLUSTERING ORDER BY (log_level DESC);
```

partition key: **log_hour**, **server**

clustering columns: **log_level**