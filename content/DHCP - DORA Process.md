---
{"publish":true,"aliases":["Discover Offer Request Acknowledge Process"],"description":"The DORA process is a four-step exchange that DHCP uses.","created":"[[2025-10-04]]","modified":"2026-01-11T20:45:54.783+02:00","published":"[[2025-10-04]]","cssclasses":"","parent":"[[DHCP]]","state":["evergreen"],"date":"[[2025-10-04]]","links":["https://www.geeksforgeeks.org/computer-networks/how-dora-works/"],"research":false}
---

# Discover

The **DHCP client sends out a DHCP discover message**.

```
Source IP address: 0.0.0.0  
Destination IP address: 255.255.255.255
Source MAC address: MAC address of DHCP clients
Destination MAC address: FF:FF:FF:FF:FF:FF
```

As the client doesn't have an [[IP]] address yet, the `Source IP address` is `0.0.0.0`.
Also, since the client doesn't know the DHCP server, the `Destination IP address` is `255.255.255.255`.

# Offer

The DHCP server receives the discover message and it replays the DHCP client with the DHCP offer request.

```
Source IP address: IP Address of DHCP Server
Destination IP address: 255.255.255.255
Source MAC address: MAC address of DHCP Server
Destination MAC address: MAC address of DHCP clients
```

Here destination IP address will be 255.255.255.255 as the DHCP client still does not have its IP address. But this DHCP offer message is broadcast in the network layer and unicast in the data link layer.

# Request

DHCP clients send the request message to the server when it receives a DHCP offer message from the server.

```
Source IP address: 0.0.0.0
Destination IP address: 255.255.255.255
Source MAC address: MAC address of DHCP clients
Destination MAC address: MAC address of DHCP server
```

This message tells the server that it accepts the IP address given by the server. Here destination address will be 255.255.255.255 means it's again broadcast. The reason for this is there might be many DHCP servers in the network so the client may receive multiple offer messages and it will accept the request that reaches him first and send a broadcast message to eliminate other DHCP servers. Here source IP address will be 0.0.0.0 as the DHCP server hasn't yet assigned an IP address to the client. DHCP Request Message is also a broadcast message.

# Acknowledge

The DHCP server sends Acknowledge Message to the client when it receives the request message from the DHCP client.

```
Source IP address: IP Address of DHCP Server
Destination IP address: 255.255.255.255
Source MAC address: MAC address of DHCP server
Destination MAC address: MAC address of DHCP clients
```

This message will contain the IP address and subnet mask that the server assigns to the client. Source IP address will be the IP address of the server. This will be again broadcast message as the destination IP address is 255.255.255.255. But it is unicast in the case of the data link layer. 
