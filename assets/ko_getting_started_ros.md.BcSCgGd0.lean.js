import{_ as i,c as s,a8 as a,o as t}from"./chunks/framework.sDsl5pD6.js";const k=JSON.parse('{"title":"ROS용 소스 코드 파일 생성하기","description":"","frontmatter":{},"headers":[],"relativePath":"ko/getting_started/ros.md","filePath":"ko/getting_started/ros.md"}'),o={name:"ko/getting_started/ros.md"};function n(l,e,r,d,c,h){return t(),s("div",null,e[0]||(e[0]=[a('<h1 id="ros용-소스-코드-파일-생성하기" tabindex="-1">ROS용 소스 코드 파일 생성하기 <a class="header-anchor" href="#ros용-소스-코드-파일-생성하기" aria-label="Permalink to &quot;ROS용 소스 코드 파일 생성하기&quot;">​</a></h1><p>To add MAVlink <a href="./../messages/">messages/dialects</a> while working with ROS:</p><ol><li><p>Follow the <a href="https://github.com/mavlink/mavros/blob/master/mavros/index.md#source-installation" target="_blank" rel="noreferrer">MAVROS source install instructions</a> to install the mavlink-gbp-release which is the MAVlink library released for ROS.</p></li><li><p>Uninstall the MAVlink package for ROS if previously installed.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ros-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">${rosversion -d}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-mavlink</span></span></code></pre></div><p>or source <code>devel/setup.bash</code> of your catkin workspace to override the library directory.</p></li><li><p>In the <code>mavlink-gbp-release</code>, add the new MAVlink message to <code>common.xml</code> or add the new dialect <code>dialect_name.xml</code> in the <code>message definitions</code>. Do not checkout your MAVlink branch because it is not the version synced with ROS.</p></li><li><p>Generate the MAVlink headers <code>catkin build mavlink</code>. You can find the headers in <code>~/catkin_ws/build/mavlink/include/</code>.</p></li></ol>',3)]))}const m=i(o,[["render",n]]);export{k as __pageData,m as default};