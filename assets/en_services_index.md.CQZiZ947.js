import{_ as r,c as a,a8 as i,o as t}from"./chunks/framework.CnRC9NRC.js";const f=JSON.parse('{"title":"Microservices","description":"","frontmatter":{},"headers":[],"relativePath":"en/services/index.md","filePath":"en/services/index.md"}'),o={name:"en/services/index.md"};function l(s,e,n,c,m,h){return t(),a("div",null,e[0]||(e[0]=[i('<h1 id="microservices" tabindex="-1">Microservices <a class="header-anchor" href="#microservices" aria-label="Permalink to &quot;Microservices&quot;">​</a></h1><p>The MAVLink &quot;microservices&quot; define higher-level protocols that MAVLink systems can adopt in order to better inter-operate. For example, <em>QGroundControl</em>, ArduPilot and PX4 autopilots all share a common <a href="./../services/command.html">Command Protocol</a> for sending point-to-point messages that require an acknowledgment.</p><p>The microservices are used to exchange many types of data, including: parameters, missions, trajectories, images, other files. If the data can be far larger than can be fit into a single message, services will define how the data is split and re-assembled, and how to ensure that any lost data is re-transmitted. Other services provide command acknowledgment and/or error reporting.</p><p>Most services use the client-server pattern, such that the GCS (client) initiates a request and the vehicle (server) responds with data.</p><p>The main microservices are shown in the sidebar (most are listed below):</p><ul><li><a href="./../services/heartbeat.html">Heartbeat/Connection Protocol</a></li><li><a href="./../services/mission.html">Mission Protocol</a></li><li><a href="./../services/parameter.html">Parameter Protocol</a></li><li><a href="./../services/parameter_ext.html">Extended Parameter Protocol</a></li><li><a href="./../services/command.html">Command Protocol</a></li><li><a href="./../services/manual_control.html">Manual Control (Joystick) Protocol</a></li><li><a href="./../services/camera.html">Camera Protocol v2</a><ul><li><a href="./../services/camera_def.html">Camera Definition</a></li></ul></li><li><a href="./../services/camera_v1.html">Camera Protocol v1 (Simple Trigger Protocol)</a></li><li><a href="./../services/gimbal_v2.html">Gimbal Protocol v2</a><ul><li><a href="./../services/gimbal.html">Gimbal Protocol v1 (superseded)</a></li></ul></li><li><a href="./../services/arm_authorization.html">Arm Authorization Protocol</a></li><li><a href="./../services/illuminator.html">Illuminator Protocol</a></li><li><a href="./../services/image_transmission.html">Image Transmission Protocol</a></li><li><a href="./../services/offboard_control.html">Offboard Control Protocol</a></li><li><a href="./../services/ftp.html">File Transfer Protocol (FTP)</a></li><li><a href="./../services/landing_target.html">Landing Target Protocol</a></li><li><a href="./../services/ping.html">Ping Protocol</a></li><li><a href="./../services/trajectory.html">Path Planning Protocol</a> (Trajectory Interface)</li><li><a href="./../services/battery.html">Battery Protocol</a></li><li><a href="./../services/terrain.html">Terrain Protocol</a></li><li><a href="./../services/tunnel.html">Tunnel Protocol</a></li><li><a href="./../services/opendroneid.html">Open Drone ID Protocol</a></li><li><a href="./../services/high_latency.html">High Latency Protocol</a></li><li><a href="./../services/component_information.html">Component Metadata Protocol (WIP)</a></li><li><a href="./../services/mavlink_id_assignment.html">MAVLink Id Assignment (sysid, compid)</a></li><li><a href="./../services/payload.html">Payload Protocol</a></li><li><a href="./../services/traffic_management.html">Traffic Management (UTM/ADS-B)</a></li><li><a href="./../services/events.html">Events Interface (WIP)</a></li><li><a href="./../services/standard_modes.html">Standard Flight Modes (WIP)</a></li><li><a href="./../services/timesync.html">Time Synchronization</a></li><li><a href="./../services/illuminator.html">Illuminator Protocol</a></li></ul>',6)]))}const v=r(o,[["render",l]]);export{f as __pageData,v as default};