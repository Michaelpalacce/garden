---
publish: true
aliases:
  - Big Endian
  - Little Endian
description: Order that data is transmitted or addressed
created: "[[2024-10-13]]"
modified: 2026-01-14T14:26:52.687+02:00
published: "[[2024-10-13]]"
cssclasses: ""
parent: "[[Computer Science Index]]"
state:
  - evergreen
date: "[[2024-10-13]]"
relates:
  - "[[Network Protocols]]"
links:
  - https://en.m.wikipedia.org/wiki/Endianness
---

> [!info]+
> Endianness is a **measure** in computing that defines in **what order are bytes** in a word **transmitted** in data protocols and **addressed** in computer memory. 

For example, consider the 4-byte (32-bit) integer 0x12345678:

In **big-endian** format, the bytes would be stored as: 12 34 56 78

In **little-endian** format, the bytes would be stored as: 78 56 34 12


# Big Endian

Big Endian systems store the **most significant byte** of a word in the **smallest memory address** and the **least significant** in the **largest memory address**. 

- [[Networking\|Network Protocols]] usually use Big Endian

## Human Readability

Big Endian had the benefit of being **human readable** as the data is **stored the same way we will read** it. 

For example, the number 123456 in big-endian would be stored as 00 01 E2 40, which aligns with how we represent the number. 

# Little Endian

Little Endian systems store the **most significant byte** of a word in the **largest  memory address** and the **least significant** in the **smallest memory address**. 

- [[Processor\|Processors]] usually use Little Endian

## Performance

The **least significant byte** is **loaded first**, which allows the **processor to start processing the lower-order bits immediately** while it **continues to load the higher-order bytes**. 
