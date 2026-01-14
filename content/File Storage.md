---
publish: true
created: "[[2025-04-16]]"
modified: 2026-01-14T19:35:29.768+02:00
published: "[[2025-04-16]]"
cssclasses: ""
parent: "[[Storage]]"
state:
  - evergreen
date: "[[2025-04-16]]"
relates:
  - "[[Block Storage]]"
  - "[[Object Storage]]"
---

# Map Of Content

- [[NFS]]
# Concept

File storage organizes **data into a hierarchical structure** of **files and folders (directories)**. This is the most traditional and familiar storage method, similar to how you organize files on your personal computer.

# Structure

Data is **stored as individual files**, which are **grouped into folders**, and these folders are further organized under a directory tree. To access a file, the system needs to know the specific path (e.g., `/home/user/documents/report.docx`).

# Metadata

Limited metadata (like **filename, file type, timestamps, and permissions**) is associated with each file and is typically stored within the file system.

# Access 

Data is accessed through file paths and standard file system protocols like NFS (Network File System) for Linux/Unix and SMB/CIFS (Server Message Block/Common Internet File System) for Windows.

# Scalability

Scaling file storage can be challenging. As the amount of data grows, managing the hierarchical structure and maintaining performance can become complex. Scaling often involves adding more storage systems (scale-out).

# Performance

Performance can be affected by the depth and complexity of the directory structure. Navigating deep hierarchies to find files can introduce latency.

# Use Cases

- General-purpose file sharing among users.
- Storing documents, images, videos, and other user-generated content.
- Network-attached storage (NAS) devices.
- Backup and archival.
- Applications that require a traditional file system interface.