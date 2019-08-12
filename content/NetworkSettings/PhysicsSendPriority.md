PhysicsSendPriority controls the send priority of physics packets in Roblox's underlying RakNet replication layer.

It can be set to the following values:

| Name | Description |
| --- | --- |
| IMMEDIATE_PRIORITY | The highest possible priority. These packets are sent immediately, and are generally not buffered or aggregated into a single datagram. |
| HIGH_PRIORITY | For every 2 IMMEDIATE_PRIORITY packets, 1 HIGH_PRIORITY packet will be sent. |
| MEDIUM_PRIORITY | For every 2 HIGH_PRIORITY packets, 1 MEDIUM_PRIORITY packet will be sent. |
| LOW_PRIORITY | For every 2 MEDIUM_PRIORITY packets, 1 LOW_PRIORITY packet will be sent. |

The value of this currently defaults to HIGH_PRIORITY. Changing it requires you to use the command bar.

For example, this will set the PhysicsSendPriority to MEDIUM_PRIORITY:

`settings().Network.PhysicsSendPriority = Enum.DataSendPriority.MEDIUM_PRIORITY`
	
PhysicsSendPriority controls the send priority of physics packets in Roblox's underlying RakNet replication layer.

It can be set to the following values:

| Name | Description |
| --- | --- |
| IMMEDIATE_PRIORITY | The highest possible priority. These packets are sent immediately, and are generally not buffered or aggregated into a single datagram. |
| HIGH_PRIORITY | For every 2 IMMEDIATE_PRIORITY packets, 1 HIGH_PRIORITY packet will be sent. |
| MEDIUM_PRIORITY | For every 2 HIGH_PRIORITY packets, 1 MEDIUM_PRIORITY packet will be sent. |
| LOW_PRIORITY | For every 2 MEDIUM_PRIORITY packets, 1 LOW_PRIORITY packet will be sent. |

The value of this currently defaults to HIGH_PRIORITY. Changing it requires you to use the command bar.

For example, this will set the PhysicsSendPriority to MEDIUM_PRIORITY:

`settings().Network.PhysicsSendPriority = Enum.DataSendPriority.MEDIUM_PRIORITY`

Tags: Hidden, NotReplicated