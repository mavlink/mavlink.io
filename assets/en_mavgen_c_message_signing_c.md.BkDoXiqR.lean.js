import{_ as i,c as a,a8 as n,o as e}from"./chunks/framework.CnRC9NRC.js";const c=JSON.parse('{"title":"C Message Signing (mavgen)","description":"","frontmatter":{},"headers":[],"relativePath":"en/mavgen_c/message_signing_c.md","filePath":"en/mavgen_c/message_signing_c.md"}'),t={name:"en/mavgen_c/message_signing_c.md"};function h(l,s,p,k,g,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="c-message-signing-mavgen" tabindex="-1">C Message Signing (mavgen) <a class="header-anchor" href="#c-message-signing-mavgen" aria-label="Permalink to &quot;C Message Signing (mavgen)&quot;">​</a></h1><p>One of the key features of <a href="./../guide/mavlink_2.html">MAVLink 2</a> is support for <a href="./../guide/message_signing.html">Message Signing</a> (authentication).</p><p>The C libraries generated by <em>mavgen</em> provide almost everything needed to support signing in your MAVLink system. You will need to add some code to:</p><ul><li>Handle the <a href="./../messages/common.html#SETUP_SIGNING">SETUP_SIGNING</a> message.</li><li>Setup and teardown signing on a link.</li><li>Save and load the secret key and timestamp in persistent storage</li><li>Implement a callback to define which (if any) unsigned messages will be accepted.</li></ul><h2 id="secret-key-management-setup-signing" tabindex="-1">Secret Key Management (SETUP_SIGNING) <a class="header-anchor" href="#secret-key-management-setup-signing" aria-label="Permalink to &quot;Secret Key Management (SETUP_SIGNING)&quot;">​</a></h2><p>A secret key is 32 bytes of binary data that are used to create message signatures that can be verified by other holders of the key. The general requirements for creating, storing, logging and sharing keys are covered in: <a href="./../guide/message_signing.html#secret_key">Message Signing &gt; Secret Key Management</a>.</p><p>The section <a href="#enabling_signing_channel">Enabling Signing on a Channel</a> below shows how to set the secret key used by each channel.</p><h2 id="handling-timestamps" tabindex="-1">Handling Timestamps <a class="header-anchor" href="#handling-timestamps" aria-label="Permalink to &quot;Handling Timestamps&quot;">​</a></h2><p>The timestamp is a 48 bit number with units of 10 microseconds since 1st January 2015 GMT. The general requirements for managing timestamps are covered in <a href="./../guide/message_signing.html#timestamp">Message Signing &gt; Timestamp Handling</a>.</p><p>The library automatically handles some of the rules:</p><ul><li>timestamps are incremented by one on every message send from a link.</li><li>timestamps are updated to match that of the last accepted incoming message (if it is greater than the current local timestamp).</li><li>messages are rejected if the timestamp of a message on a channel is before the last message received on that channel.</li></ul><p>It is the responsibility of each MAVLink system to store and restore the timestamp into persistent storage (this is critical for the security of the signing system). The section <a href="#enabling_signing_channel">Enabling Signing on a Channel</a> below shows how to set the timestamp.</p><h2 id="enabling_signing_channel" tabindex="-1">Enabling Signing on a Channel <a class="header-anchor" href="#enabling_signing_channel" aria-label="Permalink to &quot;Enabling Signing on a Channel {#enabling_signing_channel}&quot;">​</a></h2><p>To enable signing on a channel you need to fill in two pointers in the <code>status</code> structure for the channel. The two pointers are:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mavlink_signing_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mavlink_signing_streams_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing_streams;</span></span></code></pre></div><p>The <code>signing</code> pointer controls signing for this stream. It is per-stream, and contains the secret key, the timestamp and a set of flags, plus an optional callback function for accepting unsigned packets. Typical setup would be:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mavlink_signing_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> signing;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">signing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(signing));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memcpy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(signing.secret_key, key.secret_key, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing.link_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)chan;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing.timestamp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key.timestamp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing.flags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MAVLINK_SIGNING_FLAG_SIGN_OUTGOING;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing.accept_unsigned_callback </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accept_unsigned_callback;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mavlink_status_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavlink_get_channel_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(chan);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status.signing </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing;</span></span></code></pre></div><p>The <code>signing_streams</code> pointer is a structure used to record the previous timestamp for a <code>(linkId,srcSystem,SrcComponent)</code> tuple. This must point to a structure that is common to all channels in order to prevent inter-channel replay attacks. Typical setup is:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mavlink_status_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavlink_get_channel_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(chan);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status.signing_streams </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signing_streams;</span></span></code></pre></div><p>The maximum number of signing streams supported is given by the <code>MAVLINK_MAX_SIGNING_STREAMS</code> macro. This defaults to 16, but it may be worth raising this for GCS implementations. If the C implementation runs out of signing streams then new streams will be rejected.</p><h2 id="using-accept-unsigned-callback" tabindex="-1">Using accept_unsigned_callback <a class="header-anchor" href="#using-accept-unsigned-callback" aria-label="Permalink to &quot;Using accept_unsigned_callback&quot;">​</a></h2><p><a href="./../guide/message_signing.html#accepting_unsigned_packets">Message Signing &gt; Accepting Unsigned Packets</a> and <a href="./../guide/message_signing.html#accepting_incorrectly_signed_packets">Accepting Incorrectly Signed Packets</a> specify that a message signing implementation should provide mechanisms such that library users can choose to conditionally accept unsigned or incorrectly signed packets.</p><p>The C implementation provides the <code>accept_unsigned_callback()</code> function pointer for this purpose, which may optionally be set in the <a href="#enabling_signing_channel">signing</a> structure. The C prototype for this function is:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> accept_unsigned_callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mavlink_status_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> msgId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>If set then this function will be called on any unsigned packet (including all <em>MAVLink 1</em> packets) or any packet where the signature is incorrect. The function offers a way for the implementation to allow unsigned packets to be accepted (and incorrectly signed packets, which might be accepted under some circumstances).</p><p>The rules for what unsigned packets should be accepted is implementation specific, but it is suggested the following rules be considered:</p><ul><li>have a mechanism for marking a particular communication channel as being secure (such as a USB connection) to allow for signing setup.</li><li>always accept <code>RADIO_STATUS</code> packets for feedback from 3DR radios (which don&#39;t do signing)</li></ul><p>For example:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unsigned_messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	MAVLINK_MSG_ID_RADIO_STATUS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> accept_unsigned_callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mavlink_status_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> message_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Make the assumption that channel 0 is USB and should always be accessible</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavlink_get_channel_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MAVLINK_COMM_0)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unsigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(unsigned_messages) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">unsigned_messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">unsigned_messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message_id) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="handling_link_ids" tabindex="-1">Handling Link IDs <a class="header-anchor" href="#handling_link_ids" aria-label="Permalink to &quot;Handling Link IDs {#handling_link_ids}&quot;">​</a></h2><p>The purpose of the <code>link_id</code> field in the <em>MAVLink 2</em> signing structure is to prevent cross-channel replay attacks. Without the <code>link_id</code> an attacker could record a packet (such as a disarm request) on one channel, then play it back on a different channel.</p><p>The intention with the link IDs is that each channel of communication between an autopilot and a GCS uses a different link ID. There is no requirement that the same link ID be used in both directions however.</p><p>For C implementations the obvious mechanism is to use the MAVLink channel number as the link ID. That works well for an autopilot, but runs into an issue for a GCS implementation. The issue is that a user may launch multiple GCS instances talking to the same autopilot via different communication links (such as two radios, or USB and a radio). These multiple GCS instances will not be aware of each other, and so may choose the same link ID. If that happens then a large number of correctly signed packets will be rejected by the autopilot as they will have timestamps that are older than the timestamp received for the same stream tuple on the other communication link.</p><p>The solution adopted for <em>MAVProxy</em> is shown below:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (msg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_signed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() and</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	self.mav.signing.link_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	msg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_link_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	self.target_system </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_srcSystem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() and</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	self.target_component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_srcComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	# change to link_id from incoming packet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	self.mav.signing.link_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_link_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>What that says is that if the current link ID in use by MAVProxy is zero, and it receives a correctly signed packet with a non-zero link ID then it switches link ID to the one from the incoming packet.</p><p>This has the effect of making the GCS slave its link ID to the link ID of the autopilot.</p>`,37)]))}const o=i(t,[["render",h]]);export{c as __pageData,o as default};