import{_ as r,c as a,a8 as t,o}from"./chunks/framework.CnRC9NRC.js";const d=JSON.parse('{"title":"MAVLink Implementations","description":"","frontmatter":{},"headers":[],"relativePath":"en/about/implementations.md","filePath":"en/about/implementations.md"}'),n={name:"en/about/implementations.md"};function i(l,e,s,h,p,m){return o(),a("div",null,e[0]||(e[0]=[t('<h1 id="mavlink-implementations" tabindex="-1">MAVLink Implementations <a class="header-anchor" href="#mavlink-implementations" aria-label="Permalink to &quot;MAVLink Implementations&quot;">​</a></h1><p>Many autopilots, ground stations, integration APIs, projects and other software packages use MAVLink. A non-exhaustive list of some users/contributors of this project is given below.</p><h2 id="autopilots" tabindex="-1">Autopilots <a class="header-anchor" href="#autopilots" aria-label="Permalink to &quot;Autopilots&quot;">​</a></h2><p>The following autopilots are known to support MAVLink and are actively being developed (last release less than a year ago).</p><ul><li><a href="http://px4.io/" target="_blank" rel="noreferrer">PX4</a></li><li><a href="http://ardupilot.org/" target="_blank" rel="noreferrer">ArduPilot</a></li><li><a href="http://autoquad.org" target="_blank" rel="noreferrer">AutoQuad 6 AutoPilot</a></li><li><a href="https://github.com/iNavFlight/inav/wiki" target="_blank" rel="noreferrer">iNAV</a></li><li><a href="http://www.sky-drones.com/" target="_blank" rel="noreferrer">SmartAP Autopilot</a></li></ul><h2 id="ground-stations" tabindex="-1">Ground Stations <a class="header-anchor" href="#ground-stations" aria-label="Permalink to &quot;Ground Stations&quot;">​</a></h2><ul><li><a href="http://qgroundcontrol.com/" target="_blank" rel="noreferrer">QGroundControl</a> (original reference implementation) <ul><li>Branded/modified variants include: <a href="http://autoquad.org/software-downloads/?category=2" target="_blank" rel="noreferrer">AutoQuad GCS</a>, <a href="http://sky-drones.com/smartap-gcs" target="_blank" rel="noreferrer">SmartAP GCS</a>, <a href="http://us.yuneec.com/comm-en-datapilot" target="_blank" rel="noreferrer">Yuneec Datapilot</a>, <a href="https://sentera.com/phx-drone/" target="_blank" rel="noreferrer">Sentera Groundstation</a>, <a href="https://wingtra.com/software/" target="_blank" rel="noreferrer">WingtraPilot</a>, <a href="http://ardupilot.org/planner2/index.html" target="_blank" rel="noreferrer">APM Planner 2</a>.</li></ul></li><li><a href="http://ardupilot.org/planner/" target="_blank" rel="noreferrer">Mission Planner</a></li><li><a href="http://ardupilot.github.io/MAVProxy/html/index.html" target="_blank" rel="noreferrer">MAVProxy</a></li><li><a href="https://www.ugcs.com/" target="_blank" rel="noreferrer">UgCS (Universal Ground Control Station)</a></li><li><a href="http://sidepilot.net/" target="_blank" rel="noreferrer">Side Pilot</a></li><li><a href="https://github.com/MishkaRogachev/JAGCS" target="_blank" rel="noreferrer">JAGCS</a></li><li><a href="https://flightzoomer.com/" target="_blank" rel="noreferrer">Flightzoomer</a></li><li><a href="https://www.insitu.com/information-delivery/command-and-control/icomc2" target="_blank" rel="noreferrer">Inexa Control</a></li><li><a href="https://www.textronsystems.com/what-we-do/unmanned-systems/synturian" target="_blank" rel="noreferrer">Synturian Control</a></li><li><a href="https://aerologos.by" target="_blank" rel="noreferrer">LOGOS</a></li></ul><h2 id="mavlink-wrapper-developer-apis" tabindex="-1">MAVLink Wrapper/Developer APIs <a class="header-anchor" href="#mavlink-wrapper-developer-apis" aria-label="Permalink to &quot;MAVLink Wrapper/Developer APIs&quot;">​</a></h2><p>A number of higher level APIs have been written to simplify interacting with MAVLink autopilots, cameras, ground stations, etc. (MAVLink is a relatively low-level API). These wrappers typically provide implementations of the main <a href="./../services/">microservices</a> and simple/specific interfaces for sending commands and accessing vehicle information.</p><p>The list here contains actively maintained implementations:</p><ul><li><a href="https://mavsdk.mavlink.io/develop/en/" target="_blank" rel="noreferrer">MAVSDK</a> - MAVLink API Library (C++, Python, Swift (iOS), Java, JS) that aims to be fully standards-compliant with MAVLink common microservices.</li><li><a href="https://github.com/mavlink/mavlink-camera-manager" target="_blank" rel="noreferrer">MAVLink Camera Manager</a> - Extensible cross-platform MAVLink Camera Server (implements <a href="./../services/camera.html">Camera Protocol</a>) built on top of GStreamer and Rust-MAVLink.</li><li><a href="https://www.youtube.com/watch?v=rBqEQoVGuzQ" target="_blank" rel="noreferrer">Rosetta Drone</a> - MAVLink wrapper around DJI SDK (fly a DJI drone with a Mavlink-based GCS, code: <a href="https://github.com/RosettaDrone/rosettadrone" target="_blank" rel="noreferrer">https://github.com/RosettaDrone/rosettadrone</a>).</li><li><a href="https://github.com/ArduPilot/pymavlink" target="_blank" rel="noreferrer">pymavlink</a> - MAVLink python bindings.</li><li><a href="https://github.com/mavlink/mavros" target="_blank" rel="noreferrer">MAVROS</a> - ROS to MAVLink bridge.</li></ul><p>These projects have some activity but are not as well maintained:</p><ul><li><a href="http://dronekit.io/" target="_blank" rel="noreferrer">DroneKit</a> - MAVLink API Library (Python, Android) and Log analysis tool (optimised for ArduPilot).</li><li><a href="https://camera-manager.dronecode.org/en/" target="_blank" rel="noreferrer">Dronecode Camera Manager</a> - Adds <a href="./../services/camera.html">Camera Protocol</a> interface for cameras connected to Linux computer.</li></ul><h2 id="research-projects" tabindex="-1">Research Projects <a class="header-anchor" href="#research-projects" aria-label="Permalink to &quot;Research Projects&quot;">​</a></h2><ul><li><a href="http://www.idsc.ethz.ch/Research_DAndrea/FMA" target="_blank" rel="noreferrer">ETH Flying Machine Arena</a></li><li><a href="http://www.sensesoar.ethz.ch/doku.php?id=project" target="_blank" rel="noreferrer">ETH SenseSoar Solar Airplane Project</a></li><li><a href="http://www.projectskye.ch/" target="_blank" rel="noreferrer">ETH Skye Blimp Project</a></li><li><a href="http://slugsuav.soe.ucsc.edu/index.html" target="_blank" rel="noreferrer">UC Santa Cruz SLUGS</a> (early days contributor)</li></ul>',15)]))}const f=r(n,[["render",i]]);export{d as __pageData,f as default};