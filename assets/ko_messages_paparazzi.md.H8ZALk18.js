import{_ as e,c as a,a8 as d,o as i}from"./chunks/framework.sDsl5pD6.js";const p=JSON.parse('{"title":"Dialect: paparazzi","description":"","frontmatter":{},"headers":[],"relativePath":"ko/messages/paparazzi.md","filePath":"ko/messages/paparazzi.md"}'),o={name:"ko/messages/paparazzi.md"};function r(s,t,n,h,l,m){return i(),a("div",null,t[0]||(t[0]=[d('<h1 id="dialect-paparazzi" tabindex="-1">Dialect: paparazzi <a class="header-anchor" href="#dialect-paparazzi" aria-label="Permalink to &quot;Dialect: paparazzi&quot;">​</a></h1><blockquote><p><strong>Warning</strong> This topic documents the version of the dialect file in the <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">mavlink/mavlink</a> Github repository, which may not be up to date with the file in the source repository (it is up to the dialect owner to push changes when needed). The source repo should be listed in the comments at the top of the XML definition file listed below (but may not be).</p></blockquote><p>This topic is a human-readable form of the XML definition file: <a href="https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/paparazzi.xml" target="_blank" rel="noreferrer">paparazzi.xml</a>.</p><p><span id="mav2_extension_field"></span></p><blockquote><p><strong>Note</strong></p><ul><li>MAVLink 2 <a href="./../guide/define_xml_element.html#message_extensions">extension fields</a> are displayed in blue.</li><li>Entities from dialects are displayed only as headings (with link to original)</li></ul></blockquote><p><strong>Protocol version:</strong> 3</p><h2 id="mavlink-include-files" tabindex="-1">MAVLink Include Files <a class="header-anchor" href="#mavlink-include-files" aria-label="Permalink to &quot;MAVLink Include Files&quot;">​</a></h2><ul><li><a href="./../messages/common.html">common.xml</a></li></ul><h2 id="목차" tabindex="-1">목차 <a class="header-anchor" href="#목차" aria-label="Permalink to &quot;목차&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Defined</th><th>Included</th></tr></thead><tbody><tr><td><a href="#messages">Messages</a></td><td>5</td><td>226</td></tr><tr><td><a href="#enumerated-types">Enums</a></td><td>0</td><td>144</td></tr><tr><td><a href="#mav_commands">Commands</a></td><td>164</td><td>0</td></tr></tbody></table><p>The following sections list all entities in the dialect (both included and defined in this file).</p><h2 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h2><h3 id="SCRIPT_ITEM" tabindex="-1">SCRIPT_ITEM (180) <a class="header-anchor" href="#SCRIPT_ITEM" aria-label="Permalink to &quot;SCRIPT_ITEM (180) {#SCRIPT_ITEM}&quot;">​</a></h3><p>Message encoding a mission script item. This message is emitted upon a request for the next script item.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>target_system</td><td><code>uint8_t</code></td><td>System ID</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td>Component ID</td></tr><tr><td>seq</td><td><code>uint16_t</code></td><td>Sequence</td></tr><tr><td>name</td><td><code>char[50]</code></td><td>The name of the mission script, NULL terminated.</td></tr></tbody></table><h3 id="SCRIPT_REQUEST" tabindex="-1">SCRIPT_REQUEST (181) <a class="header-anchor" href="#SCRIPT_REQUEST" aria-label="Permalink to &quot;SCRIPT_REQUEST (181) {#SCRIPT_REQUEST}&quot;">​</a></h3><p>Request script item with the sequence number seq. The response of the system to this message should be a <a href="#SCRIPT_ITEM">SCRIPT_ITEM</a> message.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>target_system</td><td><code>uint8_t</code></td><td>System ID</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td>Component ID</td></tr><tr><td>seq</td><td><code>uint16_t</code></td><td>Sequence</td></tr></tbody></table><h3 id="SCRIPT_REQUEST_LIST" tabindex="-1">SCRIPT_REQUEST_LIST (182) <a class="header-anchor" href="#SCRIPT_REQUEST_LIST" aria-label="Permalink to &quot;SCRIPT_REQUEST_LIST (182) {#SCRIPT_REQUEST_LIST}&quot;">​</a></h3><p>Request the overall list of mission items from the system/component.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>target_system</td><td><code>uint8_t</code></td><td>System ID</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td>Component ID</td></tr></tbody></table><h3 id="SCRIPT_COUNT" tabindex="-1">SCRIPT_COUNT (183) <a class="header-anchor" href="#SCRIPT_COUNT" aria-label="Permalink to &quot;SCRIPT_COUNT (183) {#SCRIPT_COUNT}&quot;">​</a></h3><p>This message is emitted as response to <a href="#SCRIPT_REQUEST_LIST">SCRIPT_REQUEST_LIST</a> by the MAV to get the number of mission scripts.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>target_system</td><td><code>uint8_t</code></td><td>System ID</td></tr><tr><td>target_component</td><td><code>uint8_t</code></td><td>Component ID</td></tr><tr><td>count</td><td><code>uint16_t</code></td><td>Number of script items in the sequence</td></tr></tbody></table><h3 id="SCRIPT_CURRENT" tabindex="-1">SCRIPT_CURRENT (184) <a class="header-anchor" href="#SCRIPT_CURRENT" aria-label="Permalink to &quot;SCRIPT_CURRENT (184) {#SCRIPT_CURRENT}&quot;">​</a></h3><p>This message informs about the currently active SCRIPT.</p><table tabindex="0"><thead><tr><th>Field Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>seq</td><td><code>uint16_t</code></td><td>Active Sequence</td></tr></tbody></table><h2 id="enumerated-types" tabindex="-1">Enumerated Types <a class="header-anchor" href="#enumerated-types" aria-label="Permalink to &quot;Enumerated Types&quot;">​</a></h2><h2 id="mav_commands" tabindex="-1">Commands (MAV_CMD) <a class="header-anchor" href="#mav_commands" aria-label="Permalink to &quot;Commands (MAV_CMD) {#mav_commands}&quot;">​</a></h2>',29)]))}const u=e(o,[["render",r]]);export{p as __pageData,u as default};