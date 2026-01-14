---
publish: true
created: "[[2025-04-16]]"
modified: 2026-01-11T20:41:01.935+02:00
published: "[[2025-04-16]]"
cssclasses: ""
parent: "[[DevOps Index]]"
state:
  - evergreen
date: "[[2025-04-16]]"
relates:
  - "[[Databases]]"
opposes:
links:
description:
aliases:
---

# Map Of Content

- [[File Storage]]
- [[Block Storage]]
- [[Object Storage]]

# Key Differences Summarized:

| Feature           | File Storage                    | Block Storage                        | Object Storage                                            |
| :---------------- | :------------------------------ | :----------------------------------- | :-------------------------------------------------------- |
| **Data Unit**     | Files organized in folders      | Fixed-size blocks                    | Self-contained objects with metadata                      |
| **Structure**     | Hierarchical (tree-like)        | Linear volumes of blocks             | Flat (buckets)                                            |
| **Metadata**      | Limited, within the file system | Minimal, managed by server OS        | Extensive, customizable, per object                       |
| **Access Method** | File paths, NFS, SMB/CIFS       | Block-level protocols (iSCSI, FC)    | HTTP/HTTPS, RESTful APIs                                  |
| **Scalability**   | Can be challenging              | Good, especially in SANs             | Highly scalable                                           |
| **Performance**   | Can be affected by hierarchy    | High performance, low latency        | Good for large reads, higher latency for small random I/O |
| **Cost**          | Varies                          | Generally more expensive             | Often cost-effective for large scale                      |
| **Complexity**    | Relatively simple to manage     | More complex, requires OS formatting | Can be more complex for initial integration               |
| **Best For**      | File sharing, general-purpose   | Databases, VMs, transactional apps   | Unstructured data, backups, cloud storage                 |





