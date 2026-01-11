---
{"publish":true,"created":"[[2024-02-18]]","modified":"2026-01-11T20:46:07.271+02:00","published":"[[2024-02-18]]","cssclasses":"","parent":"[[DHCP]]","state":["evergreen"],"date":"[[2024-02-18]]","relates":["[[EdgeRouter]]"]}
---

# Steps

1. Navigate to the `Services`
2. Click on the `+ Add DHCP Server`
3. Configure it as per [[EdgeRouter - Creating A DHCP Server#Initial Configuration\|this]]
4. Set the first IP in the DHCP server to the [[NIC]]

# Initial Configuration

- `Name` - Doesn't matter, just an identifier
- `Subnet` - This part is important. It will define the size of the subnet.
	- Follow [[Subnet Notation]]
	- **After defining the size of the subnet, this cannot be changed.**
- `Range Start/Stop` - Defines which [[IP\|IPs]] will be given out by the server
- `Router` - This should be set usually to the first available IP in the DHCP server.
	- This should also be set in the nic where you want the DHCP server to operate
- `DNS 1/2` - This should usually be the same as the `Router`, otherwise it should be set to wherever your [[DNS]] server is 
