import{_ as e,c as t,a8 as o,o as s}from"./chunks/framework.CnRC9NRC.js";const _=JSON.parse('{"title":"Payload Protocols","description":"","frontmatter":{},"headers":[],"relativePath":"zh/services/payload.md","filePath":"zh/services/payload.md"}'),d={name:"zh/services/payload.md"};function r(n,a,i,l,m,c){return s(),t("div",null,a[0]||(a[0]=[o('<h1 id="payload-protocols" tabindex="-1">Payload Protocols <a class="header-anchor" href="#payload-protocols" aria-label="Permalink to &quot;Payload Protocols&quot;">​</a></h1><p>MAVLink defines a number of commands for directly controlling <a href="#payload-specific-commands">particular types of payloads</a> like winches and grippers, and for controlling <a href="#generic-payload-commands">generic payloads</a>. In addition there are commands for <a href="#payload-deployment-commands">payload placement in missions</a>. In addition there are commands for <a href="#payload-deployment-commands">payload placement in missions</a>.</p><div class="note custom-block github-alert"><p class="custom-block-title">[Camera](camera.md) and [Gimbal](gimbal_v2.md) payloads are covered in their own topics.</p><p></p></div><h2 id="payload-specific-commands" tabindex="-1">Payload-Specific Commands <a class="header-anchor" href="#payload-specific-commands" aria-label="Permalink to &quot;Payload-Specific Commands&quot;">​</a></h2><p>MAVLink defines a number of commands for controlling specific <em>types</em> of payload hardware, including: winches, grippers, spotlights, etc. These commands may be used in both <a href="./../services/mission.html">missions</a> and <a href="./services/command.html">commands</a>, if supported by the target system. These commands may be used in both <a href="./../services/mission.html">missions</a> and <a href="./../services/command.html">commands</a>, if supported by the target system.</p><p>They should be used (where supported) in preference to <a href="#generic-payload-commands">generic payload commands</a>, as generally they provide more &quot;tailored&quot; control over the payload, a better GCS user experience, and more informative logs.</p><table tabindex="0"><thead><tr><th>消息</th><th>描述</th></tr></thead><tbody><tr><td><a id="MAV_CMD_DO_GRIPPER"></a><a href="./../messages/common.html#MAV_CMD_DO_GRIPPER">MAV_CMD_DO_GRIPPER</a></td><td>Command to engage and release a gripper.</td></tr><tr><td><a id="MAV_CMD_DO_WINCH"></a><a href="./../messages/common.html#MAV_CMD_DO_WINCH">MAV_CMD_DO_WINCH</a></td><td>Command to operate a specified winch.</td></tr><tr><td><a id="MAV_CMD_ILLUMINATOR_ON_OFF"></a><a href="./../messages/common.html#MAV_CMD_ILLUMINATOR_ON_OFF">MAV_CMD_ILLUMINATOR_ON_OFF</a></td><td>Command to turn illuminators ON/OFF. Command to turn illuminators ON/OFF. An illuminator is a light source that for lighting up dark areas external to the system, such as a headlight or searchlight.</td></tr></tbody></table><h2 id="generic-payload-commands" tabindex="-1">Generic Payload Commands <a class="header-anchor" href="#generic-payload-commands" aria-label="Permalink to &quot;Generic Payload Commands&quot;">​</a></h2><p>MAVLink has a number of commands for setting actuator outputs. These can be used to control arbitrary/generic payloads. These can be used to control arbitrary/generic payloads.</p><div class="tip custom-block github-alert"><p class="custom-block-title">Use the [commands for known payload types](#payload-specific-commands) where possible as they are more intuitive for users, and in logs.</p><p></p></div><table tabindex="0"><thead><tr><th>消息</th><th>描述</th></tr></thead><tbody><tr><td><a id="MAV_CMD_DO_SET_ACTUATOR"></a><a href="./../messages/common.html#MAV_CMD_DO_SET_ACTUATOR">MAV_CMD_DO_SET_ACTUATOR</a></td><td>Sets actuators (e.g. servos) to a desired value. Sets actuators (e.g. servos) to a desired value. The actuator numbers are mapped to specific outputs (e.g. on any MAIN or AUX PWM or UAVCAN) using a flight-stack specific mechanism (for example, parameters).</td></tr><tr><td><a id="MAV_CMD_DO_SET_SERVO"></a><a href="./../messages/common.html#MAV_CMD_DO_SET_SERVO">MAV_CMD_DO_SET_SERVO</a></td><td>Sets a servo, identified by a specified instance number, to a specified PWM value.</td></tr><tr><td><a id="MAV_CMD_DO_SET_RELAY"></a><a href="./../messages/common.html#MAV_CMD_DO_SET_RELAY">MAV_CMD_DO_SET_RELAY</a></td><td>Set a specified relay instance on or off.</td></tr><tr><td><a id="MAV_CMD_DO_REPEAT_RELAY"></a><a href="./../messages/common.html#MAV_CMD_DO_REPEAT_RELAY">MAV_CMD_DO_REPEAT_RELAY</a></td><td>Cycle a relay on and off for a desired number of cycles with a desired period.</td></tr></tbody></table><div class="note custom-block github-alert"><p class="custom-block-title">**Implementations:**</p><p></p><ul><li><code>MAV_CMD_DO_SET_ACTUATOR</code> is more recent than <code>MAV_CMD_DO_SET_SERVO</code>, but has not yet been widely adopted. <ul><li>Only implemented only on PX4 (June 2021). For more information see the <a href="https://docs.px4.io/master/en/payloads/#mission-triggering" target="_blank" rel="noreferrer">PX4 User Guide</a>.</li></ul></li><li><code>MAV_CMD_DO_SET_SERVO</code> is implemented on both ArduPilot and PX4 (Missions only). In both cases instance numbers map to corresponding AUX outputs.</li></ul></div><h2 id="payload-deployment-commands" tabindex="-1">Payload Deployment Commands <a class="header-anchor" href="#payload-deployment-commands" aria-label="Permalink to &quot;Payload Deployment Commands&quot;">​</a></h2><p>These commands can be used to deploy a payload at a specfic location, controlling the approach and land behaviour.</p><table tabindex="0"><thead><tr><th>消息</th><th>描述</th></tr></thead><tbody><tr><td><a id="MAV_CMD_NAV_PAYLOAD_PLACE"></a><a href="./../messages/common.html#MAV_CMD_NAV_PAYLOAD_PLACE">MAV_CMD_NAV_PAYLOAD_PLACE</a></td><td>Move to target location, descend and release payload.</td></tr></tbody></table><div class="note custom-block github-alert"><p class="custom-block-title">**Implementations:**</p><p></p><ul><li><a href="#MAV_CMD_NAV_PAYLOAD_PLACE">MAV_CMD_NAV_PAYLOAD_PLACE</a> is implemented in ArduPilot only, and can be used in missions.</li><li><a href="./../messages/common.html#MAV_CMD_PAYLOAD_PREPARE_DEPLOY">MAV_CMD_PAYLOAD_PREPARE_DEPLOY</a> and <a href="./../messages/common.html#MAV_CMD_PAYLOAD_PREPARE_DEPLOY">MAV_CMD_PAYLOAD_CONTROL_DEPLOY</a> are not supported on any known flight stack. They are deprecated and should not be used.</li></ul></div>',16)]))}const h=e(d,[["render",r]]);export{_ as __pageData,h as default};