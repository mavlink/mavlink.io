import{_ as t,c as a,a8 as i,o as n}from"./chunks/framework.sDsl5pD6.js";const d=JSON.parse('{"title":"Contributing to MAVLink","description":"","frontmatter":{},"headers":[],"relativePath":"ko/contributing/contributing.md","filePath":"ko/contributing/contributing.md"}'),o={name:"ko/contributing/contributing.md"};function s(r,e,l,h,c,u){return n(),a("div",null,e[0]||(e[0]=[i(`<h1 id="contributing-to-mavlink" tabindex="-1">Contributing to MAVLink <a class="header-anchor" href="#contributing-to-mavlink" aria-label="Permalink to &quot;Contributing to MAVLink&quot;">​</a></h1><p>We follow the <a href="https://guides.github.com/introduction/flow/" target="_blank" rel="noreferrer">Github flow</a> development model.</p><p>Contributions are divided into several categories:</p><ul><li>Complicated changes that require significant review should be initiated using an RFC pull request in <a href="https://github.com/mavlink/rfcs" target="_blank" rel="noreferrer">mavlink/rfcs</a>. This is primarily intended for new microservice interface definitions, as these require discussion of both messages and message sequences (state machines) (examples: parameter or mission protocol). Depending on the scope of the change, it may also be required when <em>modifying</em> a microservice.</li><li>Less complex changes should be submitted as a PRs to the <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">mavlink/mavlink</a> repository. This includes message additions/changes that do not affect a state machine.</li><li>Changes to mavgen generator code should be submitted as PRs to the <a href="https://github.com/ArduPilot/pymavlink" target="_blank" rel="noreferrer">ArduPilot/Pymavlink</a> repository.</li></ul><p>The sections below explain how to contribute to each category and how to raise a pull request.</p><h2 id="how-to-contribute-simple-changes" tabindex="-1">How to Contribute Simple Changes <a class="header-anchor" href="#how-to-contribute-simple-changes" aria-label="Permalink to &quot;How to Contribute Simple Changes&quot;">​</a></h2><ul><li>Open a pull request against the specification repository: <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">https://github.com/mavlink/mavlink</a></li><li>Reach out to the community on Slack and the <a href="https://groups.google.com/forum/#!forum/mavlink" target="_blank" rel="noreferrer">mailing list</a> to raise awareness</li><li>Address concerns by pushing more commits to the pull request</li></ul><h2 id="how-to-contribute-complex-changes" tabindex="-1">How to Contribute Complex Changes <a class="header-anchor" href="#how-to-contribute-complex-changes" aria-label="Permalink to &quot;How to Contribute Complex Changes&quot;">​</a></h2><ul><li>Open a pull request against the RFC repository containing a new RFC number <a href="https://github.com/mavlink/rfcs" target="_blank" rel="noreferrer">https://github.com/mavlink/rfcs</a> and use the template in the 0000 RFC.</li><li>Reach out to the community on Slack and the <a href="https://groups.google.com/forum/#!forum/mavlink" target="_blank" rel="noreferrer">mailing list</a> to raise awareness</li><li>Address concerns by pushing more commits to the pull request</li></ul><h2 id="how-to-contribute-to-mavgen" tabindex="-1">How to Contribute to Mavgen <a class="header-anchor" href="#how-to-contribute-to-mavgen" aria-label="Permalink to &quot;How to Contribute to Mavgen&quot;">​</a></h2><p>Changes to the <a href="./../getting_started/generate_libraries.html#mavgen">mavgen</a> generator must be added as pull requests through the <a href="https://github.com/ArduPilot/pymavlink" target="_blank" rel="noreferrer">ArduPilot/pymavlink</a> project.</p><p>Changes to existing generator code (e.g. bug fixes) are automatically tested by continuous integration (github actions). Once you have made against your PR pass, the changes will be reviewed by a project team member.</p><p>More significant changes to the generator, such as the addition of a new programming language, will require:</p><ul><li>Project team should be able to commit to supporting the generator.</li><li><code>common.xml</code> and all official dialect XML files should parse, validate, and be able to encode/decode for all the messages.</li><li>Failures should be handled gracefully (not result in exceptions/segfaults).</li><li>Enum values that are not explicitly defined in XML should be automatically and sequentially allocated.</li><li>Test code to validate the above.</li></ul><p>Ideally:</p><ul><li>Libraries should support both MAVLink 2 and MAVLink 1</li><li>Any message with arbitrary field values can be successfully encoded and decoded.</li><li>Errors/warnings should be reported for invalid payloads - e.g. oversize, duplicate command or message ids, etc.</li><li>Deep dialect inclusion/nesting should be supported (minimum is 5 levels).</li></ul><h2 id="how-to-contribute-stand-alone-generators" tabindex="-1">How to Contribute Stand Alone Generators <a class="header-anchor" href="#how-to-contribute-stand-alone-generators" aria-label="Permalink to &quot;How to Contribute Stand Alone Generators&quot;">​</a></h2><p>We would prefer that new languages are supported via <a href="./../getting_started/generate_libraries.html#mavgen">mavgen</a> rather than &quot;standalone generators&quot;, as this provides a consistent inteface for end users, and ensures that source files are parsed and handled consistently.</p><p>That said will consider moving stand-alone generators into the MAVLink project under the same conditions as for new mavgen generator code (see section above). Primarily this means that the team developing the generator must provide sufficient validation that the generator works and commitment to support it.</p><h2 id="how-to-open-a-pull-request" tabindex="-1">How to Open a Pull Request <a class="header-anchor" href="#how-to-open-a-pull-request" aria-label="Permalink to &quot;How to Open a Pull Request&quot;">​</a></h2><ol><li><p>First <a href="https://help.github.com/articles/fork-a-repo" target="_blank" rel="noreferrer">fork and clone</a> the project project.</p></li><li><p>Create a feature branch off master</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git checkout -b mydescriptivebranchname</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p><em>Always</em> branch off master for new features.</p></div></li><li><p>Commit your changes with a descriptive commit message.</p><ul><li><p>Include context information, what was fixed, and an <a href="https://github.com/mavlink/mavlink" target="_blank" rel="noreferrer">issue number</a> (Github will link these then conveniently)</p></li><li><p><strong>Example:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Change the attitude output spec documentation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Fixes a typo</span></span>
<span class="line"><span>- Clarifies that units are radians</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fixes issue #123</span></span></code></pre></div></li></ul></li><li><p>Test your changes (we may ask you for test results in your PR).</p></li><li><p>Push changes to your repo:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push origin mydescriptivebranchname</span></span></code></pre></div></li><li><p>Send a <a href="https://github.com/mavlink/mavlink/compare/" target="_blank" rel="noreferrer">pull request</a> to merge changes in the branch.</p></li></ol><h2 id="dev_call" tabindex="-1">Dev Call <a class="header-anchor" href="#dev_call" aria-label="Permalink to &quot;Dev Call {#dev_call}&quot;">​</a></h2><p>We have a regular <a href="./../about/support.html#dev_call">dev call</a> that is open to anyone who is interested in contributing to the project!</p>`,23)]))}const m=t(o,[["render",s]]);export{d as __pageData,m as default};