import{_ as t,a}from"./chunks/packet_mavlink_v1.UYQuR1pf.js";import{_ as i,c as s,a8 as n,o as d}from"./chunks/framework.sDsl5pD6.js";const g=JSON.parse('{"title":"Packet Serialization","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/serialization.md","filePath":"en/guide/serialization.md"}'),o={name:"en/guide/serialization.md"};function r(l,e,c,h,p,m){return d(),s("div",null,e[0]||(e[0]=[n('<h1 id="packet-serialization" tabindex="-1">Packet Serialization <a class="header-anchor" href="#packet-serialization" aria-label="Permalink to &quot;Packet Serialization&quot;">​</a></h1><p>This topic provides detailed information about about MAVLink packet serialization, including the over-the-wire formats for MAVLink v1 and v2 packets, the ordering of fields in the message payload, and the <code>CRC_EXTRA</code> used for ensuring that the sender and reciever share a compatible message definition.</p><p>It is primarily intended for developers who are creating/maintaining a MAVLink generator</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>MAVLink users do not typically need to understand the serialization format, as encoding/decoding is handled by the MAVLink libraries.</p></div><h2 id="packet_format" tabindex="-1">Packet Format <a class="header-anchor" href="#packet_format" aria-label="Permalink to &quot;Packet Format {#packet_format}&quot;">​</a></h2><p>This section shows the serialized message format of MAVLink packets (the format is inspired by the <a href="https://en.wikipedia.org/wiki/CAN_bus" target="_blank" rel="noreferrer">CAN</a> and SAE AS-4 standards).</p><p>Note that multi-byte fields are serialized in little-endian format, and MAVLink libraries are configured by default to run on little-endian hardware.</p><h3 id="mavlink2_packet_format" tabindex="-1">MAVLink 2 Packet Format <a class="header-anchor" href="#mavlink2_packet_format" aria-label="Permalink to &quot;MAVLink 2 Packet Format {#mavlink2_packet_format}&quot;">​</a></h3><p>Below is the over-the-wire format for a <a href="./../guide/mavlink_2.html">MAVLink 2</a> packet (the in-memory representation might differ).</p><p><img src="'+t+'" alt="MAVLink v2 packet"></p><table tabindex="0"><thead><tr><th>Byte Index</th><th>C version</th><th>Content</th><th>Value</th><th>Explanation</th></tr></thead><tbody><tr><td>0</td><td><code>uint8_t magic</code></td><td>Packet start marker</td><td>0xFD</td><td>Protocol-specific start-of-text (STX) marker used to indicate the beginning of a new packet. Any system that does not understand protocol version will skip the packet.</td></tr><tr><td>1</td><td><code>uint8_t len</code></td><td>Payload length</td><td>0 - 255</td><td>Indicates length of the following <code>payload</code> section. This may be affected by <a href="#payload_truncation">payload truncation</a>.</td></tr><tr><td>2</td><td><code>uint8_t incompat_flags</code></td><td><a href="#incompat_flags">Incompatibility Flags</a></td><td></td><td>Flags that must be understood for MAVLink compatibility (implementation discards packet if it does not understand flag).</td></tr><tr><td>3</td><td><code>uint8_t compat_flags</code></td><td><a href="#compat_flags">Compatibility Flags</a></td><td></td><td>Flags that can be ignored if not understood (implementation can still handle packet even if it does not understand flag).</td></tr><tr><td>4</td><td><code>uint8_t seq</code></td><td>Packet sequence number</td><td>0 - 255</td><td>Used to detect packet loss. Components increment value for each message sent.</td></tr><tr><td>5</td><td><code>uint8_t sysid</code></td><td>System ID (sender)</td><td>1 - 255</td><td>ID of <em>system</em> (vehicle) sending the message. Used to differentiate systems on network. Note that the broadcast address 0 may not be used in this field as it is an invalid <em>source</em> address.</td></tr><tr><td>6</td><td><code>uint8_t compid</code></td><td>Component ID (sender)</td><td>1 - 255</td><td>ID of <em>component</em> sending the message. Used to differentiate <em>components</em> in a <em>system</em> (e.g. autopilot and a camera). Use appropriate values in <a href="./../messages/common.html#MAV_COMPONENT">MAV_COMPONENT</a>. Note that the broadcast address <code>MAV_COMP_ID_ALL</code> may not be used in this field as it is an invalid <em>source</em> address.</td></tr><tr><td><span id="v2_msgid"></span>7 to 9</td><td><code>uint32_t msgid:24</code></td><td>Message ID (low, middle, high bytes)</td><td>0 - 16777215</td><td>ID of <em>message type</em> in payload. Used to decode data back into message object.</td></tr><tr><td><span id="v2_payload"></span>For <em>n</em>-byte payload:<br><code>n=0</code>: NA, <code>n=1</code>: 10, <code>n&gt;=2</code>: 10 to (9+n)</td><td><code>uint8_t payload[max 255]</code></td><td><a href="#payload">Payload</a></td><td></td><td>Message data. Depends on message type (i.e. Message ID) and contents.</td></tr><tr><td>(n+10) to (n+11)</td><td><code>uint16_t checksum</code></td><td><a href="#checksum">Checksum</a> (low byte, high byte)</td><td></td><td>CRC-16/MCRF4XX for message (excluding <code>magic</code> byte). Includes <a href="#crc_extra">CRC_EXTRA</a> byte.</td></tr><tr><td>(n+12) to (n+25)</td><td><code>uint8_t signature[13]</code></td><td><a href="./../guide/message_signing.html">Signature</a></td><td></td><td>(Optional) Signature to ensure the link is tamper-proof.</td></tr></tbody></table><ul><li>The minimum packet length is 12 bytes for acknowledgment packets without payload.</li><li>The maximum packet length is 280 bytes for a signed message that uses the whole payload.</li></ul><h3 id="v1_packet_format" tabindex="-1">MAVLink 1 Packet Format <a class="header-anchor" href="#v1_packet_format" aria-label="Permalink to &quot;MAVLink 1 Packet Format {#v1_packet_format}&quot;">​</a></h3><p>Below is the over-the-wire format for a MAVLink 1 packet (the in-memory representation might differ).</p><p><img src="'+a+`" alt="MAVLink v1 packet"></p><table tabindex="0"><thead><tr><th>Byte Index</th><th>C version</th><th>Content</th><th>Value</th><th>Explanation</th></tr></thead><tbody><tr><td>0</td><td><code>uint8_t magic</code></td><td>Packet start marker</td><td>0xFE</td><td>Protocol-specific start-of-text (STX) marker used to indicate the beginning of a new packet. Any system that does not understand protocol version will skip the packet.</td></tr><tr><td>1</td><td><code>uint8_t len</code></td><td>Payload length</td><td>0 - 255</td><td>Indicates length of the following <code>payload</code> section (fixed for a particular message).</td></tr><tr><td>2</td><td><code>uint8_t seq</code></td><td>Packet sequence number</td><td>0 - 255</td><td>Used to detect packet loss. Components increment value for each message sent.</td></tr><tr><td>3</td><td><code>uint8_t sysid</code></td><td>System ID</td><td>1 - 255</td><td>ID of <em>system</em> (vehicle) sending the message. Used to differentiate systems on network. Note that the broadcast address 0 may not be used in this field as it is an invalid <em>source</em> address.</td></tr><tr><td>4</td><td><code>uint8_t compid</code></td><td>Component ID</td><td>1 - 255</td><td>ID of <em>component</em> sending the message. Used to differentiate components in a <em>system</em> (e.g. autopilot and a camera). Use appropriate values in <a href="./../messages/common.html#MAV_COMPONENT">MAV_COMPONENT</a>. Note that the broadcast address <code>MAV_COMP_ID_ALL</code> may not be used in this field as it is an invalid <em>source</em> address.</td></tr><tr><td><span id="v1_msgid"></span>5</td><td><code>uint8_t msgid</code></td><td>Message ID</td><td>0 - 255</td><td>ID of <em>message type</em> in payload. Used to decode data back into message object.</td></tr><tr><td><span id="v1_payload"></span>For <em>n</em>-byte payload:<br><code>n=0</code>: NA, <code>n=1</code>: 6, <code>n&gt;=2</code>: 6 to (5+n)</td><td><code>uint8_t payload[max 255]</code></td><td>Payload data</td><td></td><td>Message data. Content depends on message type (i.e. Message ID).</td></tr><tr><td>(n+6) to (n+7)</td><td><code>uint16_t checksum</code></td><td><a href="#checksum">Checksum</a> (low byte, high byte)</td><td></td><td>CRC-16/MCRF4XX for message (excluding <code>magic</code> byte). Includes <a href="#crc_extra">CRC_EXTRA</a> byte.</td></tr></tbody></table><ul><li>The minimum packet length is 8 bytes for acknowledgment packets without payload.</li><li>The maximum packet length is 263 bytes for full payload.</li></ul><h2 id="incompat_flags" tabindex="-1">Incompatibility Flags (MAVLink 2) <a class="header-anchor" href="#incompat_flags" aria-label="Permalink to &quot;Incompatibility Flags (MAVLink 2) {#incompat_flags}&quot;">​</a></h2><p>Incompatibility flags are used to indicate features that a MAVLink library must support in order to be able to handle the packet. This includes any feature that affects the packet format/ordering.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>A MAVLink implementation <strong>must discard</strong> a packet if it does not understand any flag in the <code>incompat_flags</code> field.</p></div><p>Supported incompatibility flags include (at time of writing):</p><table tabindex="0"><thead><tr><th>Flag</th><th>C flag</th><th>Feature</th></tr></thead><tbody><tr><td><span id="MAVLINK_IFLAG_SIGNED"></span>0x01</td><td><code>MAVLINK_IFLAG_SIGNED</code></td><td>The packet is <a href="./../guide/message_signing.html">signed</a> (a signature has been appended to the packet).</td></tr></tbody></table><h2 id="compat_flags" tabindex="-1">Compatibility Flags (MAVLink 2) <a class="header-anchor" href="#compat_flags" aria-label="Permalink to &quot;Compatibility Flags (MAVLink 2) {#compat_flags}&quot;">​</a></h2><p>Compatibility flags are used to indicate features won&#39;t prevent a MAVLink library from handling the packet (even if the feature is not understood). This might include, for example, a flag to indicate that a packet should be treated as &quot;high priority&quot; (such a messages could be handled by any MAVLink implementation because packet format and structure is not affected).</p><p>A MAVLink implementation can safely ignore flags it doesn&#39;t understand in the <code>compat_flags</code> field.</p><h2 id="payload" tabindex="-1">Payload Format <a class="header-anchor" href="#payload" aria-label="Permalink to &quot;Payload Format {#payload}&quot;">​</a></h2><p>MAVLink does not include information about the message structure in the payload itself (in order to reduce overhead)! Instead the sender and receiver must share a common understanding of the meaning, order and size of message fields in the over-the-wire format.</p><p>Messages are encoded within the MAVLink packet:</p><ul><li><p>The <code>msgid</code> (message id) field identifies the specific message encoded in the packet.</p></li><li><p>The <code>payload</code> field contains the message data.</p><ul><li>MAVLink <a href="#field_reordering">reorders the message fields</a> in the payload for over-the-wire transmission (from the order in the original <a href="./../messages/">XML Message Definitions</a>).</li><li>MAVLink 2 <a href="./../guide/mavlink_2.html#packet_truncation">truncates</a> any zero-filled bytes at the end of the payload before the message is sent and sets the packet <code>len</code> field appropriately (MAVLink 1 always sends all bytes).</li></ul></li><li><p>The <code>len</code> field contains the length of the payload data.</p></li><li><p>A <a href="#crc_extra">CRC_EXTRA</a> byte is added to the message <a href="#checksum">checksum</a>. A receiver can use this to confirm that it is compatible with the payload message format/definition.</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>A MAVLink library should notify a bad CRC during decoding if a message specification is incompatible (e.g. the C library <a href="./../getting_started/use_libraries.html#receiving">mavlink_parse_char()</a> gives a status <code>MAVLINK_FRAMING_BAD_CRC</code>).</p></div></li></ul><h3 id="field_reordering" tabindex="-1">Field Reordering <a class="header-anchor" href="#field_reordering" aria-label="Permalink to &quot;Field Reordering {#field_reordering}&quot;">​</a></h3><p>Message payload fields are reordered for transmission as follows:</p><ul><li>Fields are sorted according to their native data size: <ul><li><code>(u)int64_t</code>, <code>double</code> (8 bytes)</li><li><code>(u)int32_t</code>, <code>float</code> (4)</li><li><code>(u)int16_t</code> (2)</li><li><code>(u)int8_t</code>, <code>char</code> (1)</li></ul></li><li>If two fields have the same length, their order is preserved as it was present before the data field size ordering</li><li>Arrays are handled based on the data type they use, not based on the total array size</li><li>The over-the-air order is the same as for the <code>struct</code> and thus represents the reordered fields</li><li>The <code>CRC_EXTRA</code> field is calculated <em>after</em> the reordering, to ensure that a mistake during field reordering will be caught by a faulty CRC. The provided Python, C and C# reference implementations are tested to have the correct field reordering, this is only a concern for custom implementations.</li></ul><p>The only exception to the above reordering is for <a href="./../guide/define_xml_element.html#message_extensions">MAVLink 2 extension fields</a>. Extension fields are sent in XML-declaration order and are not included in the <a href="#crc_extra">CRC_EXTRA</a> calculation. This allows new extension fields to be appended to the end of a message without breaking binary compatibility.</p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>This ordering is unique and can be easily implemented in a protocol generator by using a stable sorting algorithm. The alternative to using sorting would be either to use inefficient alignment, which is bad for the target architectures for typical MAVLink applications, or to have function calls in the order of the variable size instead of the application context. This would lead to very confusing function signatures of serialization functions.</p></div><h3 id="payload_truncation" tabindex="-1">Empty-Byte Payload Truncation (MAVLink 2) <a class="header-anchor" href="#payload_truncation" aria-label="Permalink to &quot;Empty-Byte Payload Truncation (MAVLink 2) {#payload_truncation}&quot;">​</a></h3><p><em>MAVLink 2</em> implementations <em>must</em> truncate any empty (zero-filled) bytes at the end of the serialized payload before it is sent. This contrasts with <em>MAVLink 1</em>, where bytes were sent for all fields regardless of content.</p><p>An implementation that receives a (non compliant) MAVLink 2 message with zero-filled trailing bytes must still support decoding of the message (if it is otherwise valid), and provide methods to route/forward the messages. The message may be forwarded either completely unaltered (i.e. with the zeros untrimmed and original CRC) or the forwarding implementation may trim the zeros and recalculate the CRC.</p><p>The actual fields affected/bytes saved depends on the message and its content (MAVLink <a href="./../guide/serialization.html#field_reordering">field reordering</a> means that all we can say is that any truncated fields will typically be those with the smallest data size, or extension fields).</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The first byte of the payload is never truncated, even if the payload consists entirely of zeros.</p></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>The protocol only truncates empty bytes at the end of the serialized message payload; any null bytes/empty fields within the body of the payload are not affected.</p></div><h3 id="crc_extra" tabindex="-1">CRC_EXTRA Calculation <a class="header-anchor" href="#crc_extra" aria-label="Permalink to &quot;CRC_EXTRA Calculation {#crc_extra}&quot;">​</a></h3><p>The <code>CRC_EXTRA</code> CRC is used to verify that the sender and receiver have a shared understanding of the over-the-wire format of a particular message.</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Changes in <a href="./../messages/">message specifications</a> that might make the over-the-wire format incompatible include: new/removed fields, or changes to field name, data type, order, or array length.</p></div><p>When the MAVLink code generator runs, it takes a checksum of the XML structure for each message and creates an array define <code>MAVLINK_MESSAGE_CRCS</code>. This is used to initialise the <code>mavlink_message_crcs[]</code> array in the C/C++ implementation, and is similarly used in the Python (or any other, such as the C# and JavaScript) implementation.</p><p>When the sender calculates the checksum for a message it adds the <code>CRC_EXTRA</code> byte onto the end of the data that the checksum is calculated over. The recipient calculates a checksum for the received message and adds its own <code>CRC_EXTRA</code> for the particular message id. If the <code>CRC_EXTRA</code> for the sender and receiver are different the checksums will not match.</p><p>This approach ensures that only messages where the sender and recipient are using the same message structure will be decoded (or at least it makes a mistake much more unlikely, as for any checksum application).</p><p>If you are doing your own implementation of MAVLink you can get this checksum in one of two ways: you can include the generated headers and use <code>MAVLINK_MESSAGE_CRCS</code> to get the right seed for each message type, or you can re-implement the code that calculates the seed.</p><p>As MAVLink internally reorders the message fields according to their size to prevent word / halfword alignment issues (see <a href="http://en.wikipedia.org/wiki/Data%20structure%20alignment" target="_blank" rel="noreferrer">Data structure alignment</a> (Wikipedia) for further reference), and a wrongly implemented reordering potentially can cause inconsistencies as well, the <code>CRC_EXTRA</code> is calculated based on the over-the-air message layout rather than the XML order.</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p><a href="./../guide/define_xml_element.html#message_extensions">MAVLink 2 extension fields</a> are not included in the <code>CRC_EXTRA</code> calculation.</p></div><p>This is the Python code that calculates the <code>CRC_EXTRA</code> seed:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message_checksum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;calculate a 8-bit checksum of the key fields of a message, so we</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       can detect incompatible XML changes&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .mavcrc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x25crc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    crc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x25crc()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    crc.accumulate_str(msg.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # in order to allow for extensions the crc does not include</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # any field extensions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    crc_end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.base_fields()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(crc_end):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.ordered_fields[i]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        crc.accumulate_str(f.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        crc.accumulate_str(f.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.array_length:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            crc.accumulate([f.array_length])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (crc.crc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FF</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (crc.crc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>This uses the same CRC-16/MCRF4XX checksum that is used at runtime. It calculates a CRC over the message name (such as “RAW_IMU”) followed by the type and name of each field, space separated. The order of the fields is the order they are sent over the wire. For arrays, the array length is also added.</p></div><h2 id="checksum" tabindex="-1">Checksum <a class="header-anchor" href="#checksum" aria-label="Permalink to &quot;Checksum {#checksum}&quot;">​</a></h2><p>The packet format includes a 2-byte CRC-16/MCRF4XX to allow detection of message corruption. See the MAVLink source code for <a href="https://github.com/mavlink/c_library_v2/blob/master/checksum.h" target="_blank" rel="noreferrer">the documented C-implementation</a>.</p><p>The CRC covers the whole message, excluding <code>magic</code> byte and the signature (if present). The CRC includes the <a href="#crc_extra">CRC_EXTRA</a> byte, which is used to ensure that the sending and receiving systems share a common understanding of the message definition.</p>`,55)]))}const f=i(o,[["render",r]]);export{g as __pageData,f as default};