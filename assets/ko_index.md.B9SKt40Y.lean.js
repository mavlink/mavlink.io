import{_ as e,a,b as r}from"./chunks/logo_linux_foundation.DuEP9s2o.js";import{_ as l,c as n,a8 as i,o as s}from"./chunks/framework.CnRC9NRC.js";const u=JSON.parse('{"title":"MAVLink 개발자 안내서","description":"","frontmatter":{},"headers":[],"relativePath":"ko/index.md","filePath":"ko/index.md"}'),d={name:"ko/index.md"};function g(o,t,h,f,m,c){return s(),n("div",null,t[0]||(t[0]=[i('<p><span style="float:right;padding:10px;margin-right:20px;"><a href="https://github.com/mavlink/mavlink"><img src="'+e+'" title="MAVLink 로고" width="250px"></a></span></p><h1 id="mavlink-개발자-안내서" tabindex="-1">MAVLink 개발자 안내서 <a class="header-anchor" href="#mavlink-개발자-안내서" aria-label="Permalink to &quot;MAVLink 개발자 안내서&quot;">​</a></h1><p>MAVLink는 매우 가벼운 드론(과 드론 구성 부품간 온보드) 통신용 메시지 프로토콜입니다.</p><p>MAVLink는 임의송신-가입 방식 및 점대점 방식을 혼용한 최신 설계 규칙을 따릅니다. 데이터 스트림은 <strong>토픽</strong>으로 전송하는 방식이며, <a href="./services/mission.html">미션 프로토콜</a> 또는 <a href="./services/parameter.html">매개변수 프로토콜</a>과 같은 설정 하위 프로토콜은 재전송 기능을 지닌 점대점 방식입니다.</p><p>Messages are <a href="./messages/">defined within XML files</a>. 각 XML 파일은 각 MAVLink 시스템에서 &quot;고유 메시지&quot;를 참조하는 식으로 지원하는 메시지 집합을 정의합니다. <em>대부분</em>의 지상 관제 머신과 오토파일럿에서 구현한 참조 메시지 집합은 <a href="./messages/common.html">common.xml</a>에 정의했습니다(대부분의 고유 메시지는 이 정의를 <em>기반으로 구성</em> 합니다).</p><p><a href="./getting_started/generate_libraries.html">Code generators</a> create software libraries for <a href="#supported_languages">specific programming languages</a> from these XML message definitions, which can then be used by drones, ground control stations, and other MAVLink systems to communicate. The generated libraries are typically MIT-licensed, and can therefore be <em>used</em> without limits in any closed-source application without publishing the source code of the closed-source application.</p><div class="note custom-block github-alert"><p class="custom-block-title">The C reference implementation is a header-only library that is highly optimized for resource-constrained systems with limited RAM and flash memory. 현업에서 검증했고 제각기 다른 제조사의 부품들간 상호 운용 인터페이스를 제공하는 많은 제품에 적용했습니다.</p><p></p></div><p>MAVLink는 2009년 초반 Lorenz Meier가 처음으로 출시했으며, 현재는 <a href="https://github.com/mavlink/mavlink/graphs/contributors" target="_blank" rel="noreferrer">두드러지는 규모의 기여자가 있습니다</a>.</p><h2 id="주요-기능" tabindex="-1">주요 기능 <a class="header-anchor" href="#주요-기능" aria-label="Permalink to &quot;주요 기능&quot;">​</a></h2><ul><li>매우 효율적입니다. MAVLink 1은 시작 부호와 패킷 손실 탐지 부분을 포함하여 패킷당 8바이트의 크기를 가집니다. MAVLink 2는 14바이트의 크기를 가집니다(만, 더 안전하고 기능 확장에 용이합니다). MAVLink는 추가 프레이밍이 필요가 없기 때문에 통신 대역폭을 상당히 제한하는 여건에서도 프로그램에 매우 안성맞춤입니다.</li><li>상당히 견고합니다. MAVLink는 여건이 혹독한 다양한 통신 채널(높은 지연율/잡음) 환경에서 다양한 기체, 지상 관제국(및 타 노드)간의 통신 수행 목적으로 2009년부터 사용했습니다. 패킷 손실, 손상, 인증 수단을 제공합니다.</li><li><a href="#supported_languages">Many different programming languages</a> can be used, running on numerous microcontrollers/operating systems (including ARM7, ATMega, dsPic, STM32 and Windows, Linux, MacOS, Android and iOS).</li><li>네트워크에서 최대 255대의 시스템(기체, 지상 관제국)을 동시에 운용할 수 있습니다.</li><li>보드 내외간 통신이 가능합니다(GCS와 드론간의 통신, 드론 오토파일럿과 MAVLink 통신 기능을 갖춘 드론 카메라와의 통신).</li></ul><h2 id="supported_languages" tabindex="-1">Language/Generator List <a class="header-anchor" href="#supported_languages" aria-label="Permalink to &quot;Language/Generator List {#supported_languages}&quot;">​</a></h2><p>The sections below lists MAVLink generators and their associated programming languages.</p><h3 id="mavlink-project-generators-languages" tabindex="-1">MAVLink Project Generators/Languages <a class="header-anchor" href="#mavlink-project-generators-languages" aria-label="Permalink to &quot;MAVLink Project Generators/Languages&quot;">​</a></h3><p>The MAVLink organisation provides (and supports) the <a href="./getting_started/generate_libraries.html#mavgen">mavgen</a>, <a href="./getting_started/generate_libraries.html#mavgenerate">mavgenerate</a> and <a href="https://github.com/mavlink/rust-mavlink" target="_blank" rel="noreferrer">rust-mavlink</a> tools.</p><table tabindex="0"><thead><tr><th style="text-align:left;">언어</th><th style="text-align:left;">제너레이터</th><th style="text-align:center;">MAVLink v1</th><th style="text-align:center;"><a href="./guide/mavlink_2.html">MAVLink 2</a></th><th style="text-align:left;"><a href="./guide/message_signing.html">Signing</a></th><th style="text-align:left;">참고</th></tr></thead><tbody><tr><td style="text-align:left;">C</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">MAVLink 프로젝트 참고 구현입니다. <a href="#prebuilt_libraries">생성 라이브러리</a>는 프로토콜 버전 별로 출시합니다.</td></tr><tr><td style="text-align:left;">C++11</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">파이썬 (2.7+, 3.3+)</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">Python bindings. Library also available on PyPi: <a href="https://pypi.org/project/pymavlink/" target="_blank" rel="noreferrer">pymavlink</a>.</td></tr><tr><td style="text-align:left;">C#</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Objective C</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Java</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;"></td><td style="text-align:left;">Dronefleet offers a more idiomatic generated library</td></tr><tr><td style="text-align:left;">JavaScript (Stable)</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;">Old mavgen JavaScript binding (has known bugs and no test suite).</td></tr><tr><td style="text-align:left;">JavaScript (NextGen)</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">New mavgen JavaScript library. Full test suite, resulting library produces binary compatible output compared to C bindings. Slightly incompatible with previous version, but not hard to migrate.</td></tr><tr><td style="text-align:left;">TypeScript/JavaScript</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;">TypeScript classes which can be used with <a href="https://github.com/ifrunistuttgart/node-mavlink" target="_blank" rel="noreferrer">node-mavlink</a>.</td></tr><tr><td style="text-align:left;">Lua</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;">Lua library. Does not support zero trimming of MAVLink 2 messages.</td></tr><tr><td style="text-align:left;">WLua (Wireshark Lua bindings)</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">NA</td><td style="text-align:left;">Allow MAVLink-aware packet inspection in Wireshark. Generated lua scripts should be copied to the Wireshark plugin directory (e.g. <strong>wireshark/plugins/mavlink.lua</strong>).</td></tr><tr><td style="text-align:left;">Swift</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Rust</td><td style="text-align:left;"><a href="https://github.com/mavlink/rust-mavlink" target="_blank" rel="noreferrer">rust-mavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;"></td><td style="text-align:left;">Rust MAVLink generated code. Has <a href="https://github.com/mavlink/rust-mavlink/tree/master/tests" target="_blank" rel="noreferrer">tests</a> and <a href="https://docs.rs/mavlink/latest/mavlink/" target="_blank" rel="noreferrer">docs</a>.</td></tr><tr><td style="text-align:left;">Ada</td><td style="text-align:left;"><a href="./getting_started/generate_libraries.html#mavgen">mavgen</a></td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="external-generators-languages" tabindex="-1">External Generators/Languages <a class="header-anchor" href="#external-generators-languages" aria-label="Permalink to &quot;External Generators/Languages&quot;">​</a></h3><p>The following generators are delivered by independent projects (and supported by those projects).</p><table tabindex="0"><thead><tr><th style="text-align:left;">언어</th><th style="text-align:left;">제너레이터</th><th style="text-align:center;">MAVLink v1</th><th style="text-align:center;"><a href="./guide/mavlink_2.html">MAVLink 2</a></th><th style="text-align:left;"><a href="./guide/message_signing.html">Signing</a></th><th style="text-align:left;">참고</th></tr></thead><tbody><tr><td style="text-align:left;">C</td><td style="text-align:left;"><a href="https://github.com/olliw42/fastmavlink" target="_blank" rel="noreferrer">fastMavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;">Highly efficient C library with python code generators. Has <a href="https://github.com/olliw42/fastmavlink" target="_blank" rel="noreferrer">docs</a>, <a href="https://github.com/olliw42/fastmavlink/tree/master/examples" target="_blank" rel="noreferrer">examples</a>, <a href="https://github.com/olliw42/fastmavlink/tree/master/tests" target="_blank" rel="noreferrer">test</a>, support for <a href="https://github.com/olliw42/fastmavlink#router" target="_blank" rel="noreferrer">routing</a> and <a href="https://github.com/olliw42/fastmavlink#pymavlink-mavgen-mimicry" target="_blank" rel="noreferrer">mavgen mimicry</a>.</td></tr><tr><td style="text-align:left;">Clojure</td><td style="text-align:left;"><a href="https://github.com/WickedShell/clj-mavlink" target="_blank" rel="noreferrer">clj-mavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">Clojure MAVLink Bindings.</td></tr><tr><td style="text-align:left;">Dart</td><td style="text-align:left;"><a href="https://github.com/nus/dart_mavlink" target="_blank" rel="noreferrer">dart_mavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;">MAVLink library for Dart.</td></tr><tr><td style="text-align:left;">Go</td><td style="text-align:left;"><a href="https://github.com/gswly/gomavlib" target="_blank" rel="noreferrer">gomavlib</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">Go library with support for MAVLink 1, 2 and signing, test suite, and <a href="https://pkg.go.dev/github.com/aler9/gomavlib" target="_blank" rel="noreferrer">documentation</a></td></tr><tr><td style="text-align:left;">Go</td><td style="text-align:left;"><a href="https://github.com/mgr9525/go-mavlink1" target="_blank" rel="noreferrer">go-mavlink1</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✗</td><td style="text-align:left;">✗</td><td style="text-align:left;">Golang MAVLink v1</td></tr><tr><td style="text-align:left;">Haskell</td><td style="text-align:left;"><a href="https://github.com/SweeWarman/HaskMavlink" target="_blank" rel="noreferrer">HaskMavlink</a></td><td style="text-align:center;">✗</td><td style="text-align:center;">✓</td><td style="text-align:left;">✗</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Java</td><td style="text-align:left;"><a href="https://github.com/dronefleet/mavlink" target="_blank" rel="noreferrer">dronefleet/mavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;"><em>Idiomatic</em> Java SDK/API for MAVLink. Provides a gradle plugin for the code generator.</td></tr><tr><td style="text-align:left;">TypeScript/JavaScript/npm</td><td style="text-align:left;"><a href="https://github.com/padcom/node-mavlink#readme" target="_blank" rel="noreferrer">node-mavlink</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">TypeScript code generator for data classes with tools to receive and send messages. <a href="https://github.com/padcom/node-mavlink#getting-started" target="_blank" rel="noreferrer">Getting started</a> guide and inline JSDoc, along with some <a href="https://github.com/padcom/node-mavlink/tree/master/examples" target="_blank" rel="noreferrer">examples</a>.</td></tr><tr><td style="text-align:left;">Kotlin</td><td style="text-align:left;"><a href="https://github.com/divyanshupundir/mavlink-kotlin" target="_blank" rel="noreferrer">mavlink-kotlin</a></td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">Uses codegen instead of reflection for performance with Coroutines, RxJava2 and RxJava3 support. Provides a code generator Gradle plugin.</td></tr></tbody></table><h2 id="prebuilt_libraries" tabindex="-1">미리 빌드한 MAVLink C 라이브러리 <a class="header-anchor" href="#prebuilt_libraries" aria-label="Permalink to &quot;미리 빌드한 MAVLink C 라이브러리 {#prebuilt_libraries}&quot;">​</a></h2><p><em>C</em> MAVLink Source Files (only) are auto-generated for the latest versions of all message <a href="./messages/">specifications/dialects</a> (for both MAVLink 1 and 2):</p><ul><li><a href="https://github.com/mavlink/c_library_v2" target="_blank" rel="noreferrer">c_library_v2</a> (MAVLink 2)</li><li><a href="https://github.com/mavlink/c_library_v1" target="_blank" rel="noreferrer">c_library_v1</a> (MAVLink 1)</li></ul><p><a href="./mavgen_c/">Using C Libraries</a> explains how to use these libraries.</p><h2 id="support" tabindex="-1">지원 <a class="header-anchor" href="#support" aria-label="Permalink to &quot;지원 {#support}&quot;">​</a></h2><p>The <a href="./about/support.html">Support</a> topic contains information about the <a href="https://groups.google.com/forum/#!forum/mavlink" target="_blank" rel="noreferrer">mailing list</a>, reporting bugs/issues, and joining the <a href="./about/support.html#dev_call">dev call</a>.</p><h2 id="기여" tabindex="-1">기여 <a class="header-anchor" href="#기여" aria-label="Permalink to &quot;기여&quot;">​</a></h2><p>The <a href="./contributing/contributing.html">Contributing Guide</a> explains the contribution model and the main areas where you can help.</p><h2 id="라이선스" tabindex="-1">라이선스 <a class="header-anchor" href="#라이선스" aria-label="Permalink to &quot;라이선스&quot;">​</a></h2><p>The message definition XML files and the generated <a href="#prebuilt_libraries">C-language version of MAVLink</a> (a header-only library) are made available under the MIT-licence. MAVLink can therefore be <em>used</em> in any closed-source application without publishing the source code of the closed-source application. See the <a href="https://github.com/mavlink/mavlink/blob/master/COPYING" target="_blank" rel="noreferrer">COPYING</a> file for more information.</p><p>The <a href="https://github.com/mavlink/mavlink/" target="_blank" rel="noreferrer">MAVLink generator toolchain</a> is licensed under the terms of the Lesser General Public License (version 3) of the Free Software Foundation (LGPLv3).</p><p>This documentation is licensed under <em>CC BY 4.0</em> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Human readable overview</a> | <a href="https://github.com/mavlink/mavlink-devguide/blob/master/LICENSE" target="_blank" rel="noreferrer">LICENSE</a>).</p><h2 id="운영" tabindex="-1">운영 <a class="header-anchor" href="#운영" aria-label="Permalink to &quot;운영&quot;">​</a></h2><p>The MAVLink protocol is hosted under the governance of the <a href="https://www.dronecode.org/" target="_blank" rel="noreferrer">Dronecode Project</a>.</p><p><a href="https://www.dronecode.org/" style="padding:20px;"><img src="'+a+'" alt="Dronecode Logo" width="110px"></a><a href="https://www.linuxfoundation.org/projects" style="padding:20px;"><img src="'+r+'" alt="Linux Foundation Logo" width="80px"></a></p><div style="padding:10px;"> </div>',34)]))}const x=l(d,[["render",g]]);export{u as __pageData,x as default};