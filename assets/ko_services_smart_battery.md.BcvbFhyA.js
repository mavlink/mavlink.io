import{_ as e,c as a,a8 as r,o as s}from"./chunks/framework.sDsl5pD6.js";const c=JSON.parse('{"title":"Smart Battery Protocol (WIP)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/services/smart_battery.md","filePath":"ko/services/smart_battery.md"}'),o={name:"ko/services/smart_battery.md"};function n(i,t,m,T,d,l){return s(),a("div",null,t[0]||(t[0]=[r('<h1 id="smart-battery-protocol-wip" tabindex="-1">Smart Battery Protocol (WIP) <a class="header-anchor" href="#smart-battery-protocol-wip" aria-label="Permalink to &quot;Smart Battery Protocol (WIP)&quot;">​</a></h1><blockquote><p><strong>Note</strong> The Smart Battery messages are tagged in the definition file as &quot;work in progress&quot;. They may still change and should not be used in production environments.</p></blockquote><p>The Smart Battery &quot;protocol&quot; consists of two broadcast messages:</p><ul><li><a href="#SMART_BATTERY_INFO">SMART_BATTERY_INFO</a> contains information about the battery that changes rarely, if ever (e.g. device name). It should be emitted on connection and/or when requested (using <a href="./../messages/common.html#MAV_CMD_REQUEST_MESSAGE">MAV_CMD_REQUEST_MESSAGE</a>).</li><li><a href="#SMART_BATTERY_STATUS">SMART_BATTERY_STATUS</a> contains battery status information that changes frequently (it is equivalent to <a href="./../messages/common.html#BATTERY_STATUS">BATTERY_STATUS</a> for smart batteries). It should be emitted regularly - e.g.: 0.5Hz.</li></ul><p>The messages may be sent from a smart battery to the flight stack and/or GCS. It is also possible that a flight stack may re-emit smart battery information after updating some fields.</p><h2 id="message-enum-summary" tabindex="-1">Message/Enum Summary <a class="header-anchor" href="#message-enum-summary" aria-label="Permalink to &quot;Message/Enum Summary&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><span id="SMART_BATTERY_INFO"></span><a href="./../messages/common.html#SMART_BATTERY_INFO">SMART_BATTERY_INFO</a></td><td>Smart battery message used for invariant or infrequently changing data - e.g. battery name, battery full/empty capacity and voltages etc.</td></tr><tr><td><span id="SMART_BATTERY_STATUS"></span><a href="./../messages/common.html#SMART_BATTERY_STATUS">SMART_BATTERY_STATUS</a></td><td>Smart battery message used for frequent status update - e.g. of current capacity, voltages, faults, etc.</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Enum</th><th>Description</th></tr></thead><tbody><tr><td><span id="MAV_SMART_BATTERY_FAULT"></span><a href="./../messages/common.html#MAV_SMART_BATTERY_FAULT">MAV_SMART_BATTERY_FAULT</a></td><td>Fault/health indications.</td></tr></tbody></table>',8)]))}const _=e(o,[["render",n]]);export{c as __pageData,_ as default};