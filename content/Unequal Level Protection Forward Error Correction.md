---
{"publish":true,"description":"Forward error correction with the help of XOR","created":"[[2024-06-14]]","modified":"2026-01-10T23:40:18.510+02:00","published":"[[2024-06-14]]","cssclasses":"","parent":"[[Error Resiliency]]","state":["tree"],"date":"[[2024-06-14]]","relates":["[[Forward Error Correction]]","[[Error Resiliency]]"],"links":["https://bloggeek.me/webrtcglossary/ulpfec/","https://datatracker.ietf.org/doc/html/rfc5109"]}
---

> [!info]
> **Unequal Level Protection Forward Error Correction** is a method used in [[WebRTC]] to protect packets from loss. It is used to recover lost packets by [[XOR\|XORing]] the packets with a special value.

The redundant information about the previous packets are stored in the following packets to help recover the lost packets.
