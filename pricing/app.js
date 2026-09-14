/* Eagle — Pricing Calculator (native). Pricing model and copy ported from the
   original standalone estimate tool. */
(function () {
  var BASE_LO = 222, BASE_HI = 472, SERVER_LO = 100, SERVER_HI = 250, FW = 50,
      SW_LO = 25, SW_HI = 40, WAP_LO = 20, WAP_HI = 35, PRINTER = 25,
      WS = 66, MB = 25, M365 = 8, HOURLY = 135;
  var TRAVEL = [
    { small:1,   medium:3,   medlarge:5,   large:7  },
    { small:2.5, medium:3.5, medlarge:5.5, large:8  },
    { small:3,   medium:4,   medlarge:6,   large:9  },
    { small:4,   medium:5,   medlarge:7,   large:10 },
    { small:5,   medium:6,   medlarge:8,   large:12 },
    { small:7.5, medium:9,   medlarge:12,  large:18 }
  ];
  var DIST = ["0 to 10 miles (15 / 30 min)","11 to 20 miles (30 / 60 min)","21 to 40 miles (45 / 90 min)","41 to 60 miles (60 / 120 min)","61 to 75 miles (90 / 180 min)","75 to 100 miles"];
  var money = function (n) { return "$" + Math.round(n).toLocaleString(); };
  var bucket = function (n) { return n <= 10 ? "small" : n <= 24 ? "medium" : n <= 49 ? "medlarge" : "large"; };
  var CHK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

  var s = {
    plan: "complete",
    servers: 1, firewalls: 1, switches: 2, waps: 4, printers: 2,
    workstations: 15, mailboxes: 18, distance: 1, zip: "",
    liteTenant: false, liteRemote: false, liteStarting: false,
    coNet: false, coEndpoint: false, coUsers: false, coRemote: false, coM365: false,
    pop1: false, pop2: false, pop3: false, pop4: false
  };

  var MODES = {
    complete: ["Complete Support Plan.", "All three sections active: network, computers, and users. Adjust the inputs below to see your monthly estimate."],
    lite: ["Lite Plan.", "A modified subset of the Complete Support Plan. Tell us what makes your situation different and we will adjust the estimate accordingly."],
    comanaged: ["Co-Managed IT.", "A partnership. Check the boxes below for the pieces you want us to handle. Travel and on-site support are included by default, so check the Remote Only box if you do not need them."]
  };
  var BADGE = { complete: "Complete Support Plan", lite: "Lite Plan", comanaged: "Co-Managed IT" };

  var WHY = [
    ["Size and Complexity of Your Environment","Number of servers, workstations, and users; the age and health of your network equipment; how many physical locations we need to cover."],
    ["Cybersecurity and Compliance Requirements","CJIS, HIPAA-adjacent, PCI, cyber insurance requirements. What your insurer or regulator asks for shapes the tooling and coverage you need."],
    ["Where Your Data Actually Lives","On-prem servers, cloud (M365, GWS, Salesforce, Dropbox), hybrid. Each one has its own backup, monitoring, and recovery needs."],
    ["Your Team's Working Style","Fully in-office, hybrid, or fully remote. Shared workstations or one-to-one. Mobile-first or desktop-first. All of it affects the tools and support level needed."],
    ["Whether You Have Any IT Resources of Your Own","An internal IT lead, an on-site champion, or nothing at all. This is the biggest driver of whether Complete Support, Lite, or Co-Managed is the right fit."],
    ["Growth and Change on the Horizon","Planned office moves, mergers, ERP or M365 migrations, and hiring spikes all shift the shape of what we should be planning for together."]
  ];

  var PILLARS = [
    ["SECTION 01","Protect and Manage Your Network","Your infrastructure, your vendors, your peace of mind, managed for you.", [
      [0,"<b>Managed network gear</b> firewalls, switches, WAPs, printers"],
      [0,"Server management (physical and virtual)"],
      [0,"Unlimited help desk during business hours"],
      [0,"Ongoing vCIO strategic support"],
      [0,"Annual network assessment scan"],
      [0,"Strategic Business Reviews (quarterly)"],
      [0,"Vendor management (ISP, VOIP, software)"],
      [1,"<b>DNS filtering</b> malicious site blocking, ransomware protection"],
      [0,"Hardware documentation and end-user client portal"],
      [1,"<b>Cysurance 360 Protect 500K</b> warranty"],
      [0,"Travel on-site to approved locations is included"]
    ]],
    ["SECTION 02","Protect and Maintain Your Computers","Every desktop and laptop, monitored, patched, and protected.", [
      [0,"Remote monitoring and maintenance"],
      [0,"Help desk during business hours"],
      [0,"Patch management"],
      [0,"Advanced software management"],
      [1,"EDR antivirus"],
      [1,"DNS filtering (endpoint level)"],
      [1,"<b>Managed SOC and ransomware protection</b> 24/7 monitoring"],
      [1,"<b>Auto-Elevate</b> privileged admin access"],
      [1,"<b>Cisco Duo</b> multi-factor authentication"]
    ]],
    ["SECTION 03","Protect and Support Your Users","Your team's help desk, their security education, and backups of the platforms they live in.", [
      [0,"User help desk during business hours"],
      [1,"<b>Security awareness training</b> monthly videos, testing, phishing simulations"],
      [1,"Dark web monitoring and alerting"],
      [0,"<b>M365 Workspace backup</b> Exchange Online, OneDrive, Teams, and SharePoint Online"],
      [0,"GWS (Google Workspace) backup"],
      [0,"Entra ID backup"],
      [1,"<b>SaaS Alerts</b> 24/7 real-time monitoring"],
      [1,"<b>Advanced email protections</b> anti-phishing, anti-malware, spam filter"]
    ]]
  ];

  var PATHS = [
    ["complete","Recommended","Complete Support Plan","All three sections. Full coverage of your network, computers, and users. Includes travel and on-site work as needed.","Best for organizations without internal IT."],
    ["lite","Modified Coverage","Lite Plan","A subset of the Complete Support Plan for special situations. Example: your Microsoft 365 tenant is managed by a home office or parent company, so some user protections do not apply.","Best for franchisees, dealerships, and subsidiaries."],
    ["comanaged","Partnership","Co-Managed IT","You have IT resources of your own and we augment them. Pick the pieces you want us to handle, including Remote Only, where we manage everything remotely and your designated person handles on-site work.","Best for organizations with internal IT staff seeking modified Complete Support."]
  ];

  var POP1 = [
    [0,"<b>Management of network gear</b> firewall, switching gear, wireless access points, and printers."],
    [0,"<b>Unlimited help desk</b> during our business hours."],
    [0,"<b>Ongoing vCIO support</b> invited into your planning and budget discussions as needed."],
    [0,"<b>Annual network assessment</b> professional scan, report, and light penetration testing, included."],
    [0,"<b>Strategic Business Reviews</b> quarterly (minimum bi-annually), virtual or in person."],
    [0,"<b>Vendor support for IT relationships</b> ISP, software, VOIP."],
    [0,"<b>Travel on-site to approved locations is included</b> buffer built into your monthly fee based on distance and network size."],
    [1,"<b>DNS filtering</b> malicious site blocking, content filtering, ransomware protection."],
    [0,"<b>Hardware documentation</b> on-demand reporting."],
    [0,"<b>End-user client portal</b> tickets, invoices, agreements, payments."],
    [1,"<b>Cysurance 360 Protect 500K warranty.</b>"]
  ];
  var POP2 = [
    [0,"Remote monitoring and maintenance"],
    [0,"Help desk support during our business hours"],
    [0,"Patch management"],
    [0,"Advanced software management"],
    [1,"Endpoint Detection and Response (EDR) antivirus"],
    [1,"DNS filtering (endpoint level)"],
    [1,"<b>Managed SOC and ransomware protection</b> 24/7 team monitoring"],
    [1,"<b>Auto-Elevate</b> privileged admin access"],
    [1,"<b>Cisco Duo</b> security feature"]
  ];
  var POP3 = [
    [0,"Help desk during business hours for user issues"],
    [0,"Entra ID backup"],
    [1,"<b>Security awareness training</b> monthly videos, testing, and random phishing attempts"],
    [1,"Dark web monitoring and alerting"],
    [0,"<b>M365 Workspace backup</b> Exchange Online (emails, attachments, contacts, tasks, group and archive mailboxes, calendars), OneDrive for Business, Teams, and SharePoint Online"],
    [0,"GWS (Google Workspace) backup"],
    [1,"<b>SaaS Alerts</b> 24/7 real-time monitoring across M365, GWS, Salesforce, Slack, and Dropbox"],
    [1,"<b>Advanced email protections</b> anti-phishing, anti-malware, spam filter"]
  ];

  var VALUES = [
    ["01","Customer Experience Is Everything","Transparent pricing you can plan around, because guessing should not be part of your job."],
    ["02","Respect Is Non-Negotiable","No hidden fees. No bait-and-switch. What you see here is what we scope."],
    ["03","Security Is a Mindset, Not a Service","Cybersecurity is woven into every layer. See the items in blue."],
    ["04","First Responder Mindset","Travel and on-site are already included, so we move the moment you need us."],
    ["05","People First. Always.","We serve people, not tools. Every calculation on this page starts with your team."]
  ];

  function compute() {
    var plan = s.plan;
    var servers = s.servers, firewalls = s.firewalls, switches = s.switches,
        waps = s.waps, printers = s.printers, workstations = s.workstations;
    var mb = s.mailboxes;

    if (plan === "lite" && s.liteStarting && workstations < 5) workstations = 5;
    if (plan === "lite" && s.liteRemote) { servers = firewalls = switches = waps = printers = 0; }

    var showS1 = true, showS2 = true, showS3 = true, showM365 = false, includeTravel = true;
    var s3CustomQuote = false, s3Label = "Section 3 &middot; Users";

    if (plan === "lite") {
      includeTravel = false;
      if (s.liteTenant) { s3CustomQuote = true; s3Label = "Section 3 &middot; Users (custom quote)"; }
    } else if (plan === "comanaged") {
      showS1 = s.coNet; showS2 = s.coEndpoint; showS3 = s.coUsers;
      showM365 = s.coM365;
      includeTravel = !s.coRemote && (s.coNet || s.coEndpoint || s.coUsers);
    }

    var endpoints = workstations + servers + firewalls + switches + waps + printers;
    var size = bucket(endpoints);
    var s1lo = BASE_LO + servers*SERVER_LO + firewalls*FW + switches*SW_LO + waps*WAP_LO + printers*PRINTER;
    var s1hi = BASE_HI + servers*SERVER_HI + firewalls*FW + switches*SW_HI + waps*WAP_HI + printers*PRINTER;

    var travelHrs = 0, travelDollars = 0;
    if (includeTravel) {
      travelHrs = TRAVEL[s.distance][size];
      travelDollars = travelHrs * HOURLY;
      if (showS1) { s1lo += travelDollars; s1hi += travelDollars; }
    }

    var s2Total = showS2 ? workstations * WS : 0;
    var s3Total = (showS3 && !s3CustomQuote) ? mb * MB : 0;
    var m365Total = showM365 ? mb * M365 : 0;
    var f1lo = showS1 ? s1lo : 0, f1hi = showS1 ? s1hi : 0;

    if (includeTravel && !showS1) {
      if (showS2) s2Total += travelDollars;
      else if (showS3 && !s3CustomQuote) s3Total += travelDollars;
    }

    var secs = [];
    if (showS1) secs.push("Section 1 (network)");
    if (showS2) secs.push("Section 2 (computers)");
    if (showS3) secs.push("Section 3 (users)");
    if (s.coM365) secs.push("Section 3 (mailbox count for M365 admin)");
    var reminder = secs.length === 0 ? "the sections below"
      : secs.length === 1 ? secs[0]
      : secs.length === 2 ? secs.join(" and ")
      : secs.slice(0, -1).join(", ") + ", and " + secs.slice(-1);

    return {
      showS1: showS1, showS2: showS2, showS3: showS3, showM365: showM365,
      s3CustomQuote: s3CustomQuote, s3Label: s3Label, travelHrs: travelHrs, includeTravel: includeTravel,
      s1lo: f1lo, s1hi: f1hi, s2: s2Total, s3: s3Total, m365: m365Total, reminder: reminder,
      totalLo: f1lo + s2Total + s3Total + m365Total,
      totalHi: f1hi + s2Total + s3Total + m365Total
    };
  }

  function li(arr) {
    return '<ul class="feat-list">' + arr.map(function (r) {
      return '<li class="' + (r[0] ? "cyber" : "") + '">' + r[1] + '</li>';
    }).join("") + '</ul>';
  }
  function rowRange(key, label, max) {
    return '<div class="row brd"><label for="f-'+key+'">'+label+'</label>' +
      '<span class="val" data-out="'+key+'">'+s[key]+'</span>' +
      '<input id="f-'+key+'" type="range" min="0" max="'+max+'" value="'+s[key]+'" data-num="'+key+'"></div>';
  }
  function opt(key, title, desc) {
    return '<label class="opt"><input type="checkbox" data-chk="'+key+'"'+(s[key]?" checked":"")+'>' +
      '<span class="box">'+CHK+'</span><span class="txt"><b>'+title+'</b>'+desc+'</span></label>';
  }
  function popBtn(k) { return '<button type="button" class="pop-btn" data-pop="'+k+'">'+(s[k]?"\u00d7":"?")+'</button>'; }

  function render() {
    var v = compute();

    var whyCards = WHY.map(function (w) {
      return '<div class="glass-card"><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div>';
    }).join("");

    var pillarCards = PILLARS.map(function (p) {
      return '<div class="glass-card"><div class="pill-num">'+p[0]+'</div><h3>'+p[1]+'</h3>' +
        '<p class="blurb">'+p[2]+'</p>'+li(p[3]) +
        '<p class="blue-note">Items in blue are built-in cybersecurity protections.</p></div>';
    }).join("");

    var pathCards = PATHS.map(function (p) {
      return '<button type="button" class="plan-card'+(s.plan===p[0]?" on":"")+'" data-plan="'+p[0]+'">' +
        '<span class="pc-dot"></span><span class="plan-tag">'+p[1]+'</span>' +
        '<h3>'+p[2]+'</h3><p>'+p[3]+'</p><span class="best">'+p[4]+'</span></button>';
    }).join("");

    var liteOpts = s.plan === "lite" ? '<div class="glass-card pc-panel"><h2>Check All That Apply</h2>' +
      '<p class="pc-sub">We will adjust the estimate to reflect your situation.</p>' +
      opt("liteTenant","Our M365 tenant is managed by our home office or parent company","Because your parent company holds the tenant, Section 3 pricing depends on what they already cover for you (awareness training, dark web monitoring, and similar). Section 3 will be quoted separately based on what you actually need us to provide.") +
      opt("liteRemote","We do not have a server or traditional network, we are a remote-only organization","Section 1 device costs are removed (no servers, firewalls, switches, WAPs, or printers to manage). Base services still apply for cybersecurity oversight and strategic support.") +
      opt("liteStarting","We are just starting out with IT support and need to start somewhere","Minimum of 5 computers required. Great for growing organizations who want a foundation to build on.") +
      '<p class="inline-note"><b>Note on travel:</b> With Lite Plans, on-site travel is not included and would be quoted as an extra charge based on your specific needs.</p>' +
    '</div>' : "";

    var coOpts = s.plan === "comanaged" ? '<div class="glass-card pc-panel"><h2>Pick Specific Pieces You Want Us to Handle</h2>' +
      '<p class="pc-sub">Choose all that apply. Your estimate updates based on your selections. Travel and on-site support are included by default, so check the Remote Only box below if you do not need them.</p>' +
      opt("coNet","Network and Cybersecurity Maintenance","We handle infrastructure: network gear management, firmware, security stack, monitoring, vCIO. Covers Section 1 of the Complete Support Plan.") +
      opt("coEndpoint","End Point Protections and Maintenance","We handle workstations: patching, EDR, SOC, Auto-Elevate, Cisco Duo, endpoint help desk. Covers Section 2 of the Complete Support Plan.") +
      opt("coUsers","End User Support and Protection","We handle user help desk, M365 and GWS backup, Entra ID backup, awareness training, dark web monitoring, SaaS Alerts, advanced email protection. Covers Section 3 of the Complete Support Plan.") +
      opt("coM365","Microsoft 365 Tenant Management Only","Unlimited routine tickets: adds, moves, changes, terminations, license adjustments. Larger work (tenant migrations, major security config, Intune deployment) is scoped as a project. $8/mailbox/mo, remote only.") +
      opt("coRemote","We don't need on-site support (Remote Only)","Check this if your designated person handles boots-on-the-ground work. We manage everything remotely.") +
      (s.coNet || s.coEndpoint || s.coUsers || s.coM365
        ? '<p class="inline-note"><b>Almost there.</b> To see your Co-Managed estimate, enter your counts in ' + v.reminder + ' below. The calculator uses those numbers to price your specific environment.</p>'
        : '<p class="inline-note">Check at least one box above to see your Co-Managed estimate.</p>') +
    '</div>' : "";

    var showNet = !(s.plan === "lite" && s.liteRemote) && !(s.plan === "comanaged" && !s.coNet);
    var showComp = !(s.plan === "comanaged" && !s.coEndpoint);
    var showUsers = !(s.plan === "comanaged" && !s.coUsers && !s.coM365);

    var netPanel = showNet ? '<div class="glass-card pc-panel">' +
      '<div class="sec-title"><span class="sec-num">1</span><h3>Protect and Manage Your Network</h3>'+popBtn("pop1")+'</div>' +
      '<p class="pc-sub">Network infrastructure, vCIO support, and warranty coverage for your whole environment.</p>' +
      (s.pop1 ? '<div class="pop"><h4>What\u2019s Included</h4>'+li(POP1) +
        '<p class="blue-note">Items in blue are built-in cybersecurity protections.</p>' +
        '<h4 style="margin-top:16px">About the Cysurance 360 Protect 500K warranty</h4>' +
        '<p style="font-size:13.5px;color:var(--fg-2);line-height:1.6;margin:0 0 10px">Not insurance, a warranty service provided by Cysurance, underwritten by Chubb. Example: if a ransomware attack impacts more than 5 machines, users, or hours in a month, this warranty covers the Special Project costs Eagle would otherwise bill.</p>' +
        li([[0,"$100K ransomware and business email compromise protection"],[0,"$100K compliance and regulatory failure protection (optional)"],[0,"$50K business income loss protection"],[0,"$250K cyber legal liability protection"]]) +
      '</div>' : "") +
      rowRange("servers","Servers (Physical + Virtual)",10) +
      rowRange("firewalls","Firewalls",6) +
      rowRange("switches","Managed Switches",20) +
      rowRange("waps","Wireless Access Points",30) +
      rowRange("printers","Managed Network Printers",20) +
    '</div>' : "";

    var compPanel = showComp ? '<div class="glass-card pc-panel">' +
      '<div class="sec-title"><span class="sec-num">2</span><h3>Protect and Maintain Your Computers</h3>'+popBtn("pop2")+'</div>' +
      '<p class="pc-sub">Priced per workstation. $66/computer includes Auto-Elevate and Cisco Duo.</p>' +
      (s.pop2 ? '<div class="pop"><h4>What\u2019s Included Per Workstation</h4>'+li(POP2)+'</div>' : "") +
      rowRange("workstations","Workstations (Desktops + Laptops)",250) +
    '</div>' : "";

    var userPanel = showUsers ? '<div class="glass-card pc-panel">' +
      '<div class="sec-title"><span class="sec-num">3</span><h3>Protect and Support Your Users</h3>'+popBtn("pop3")+'</div>' +
      '<p class="pc-sub">Priced per active mailbox. Microsoft licensing passed through separately at MSRP.</p>' +
      (s.pop3 ? '<div class="pop"><h4>What\u2019s Included Per User</h4>'+li(POP3)+'</div>' : "") +
      rowRange("mailboxes","Active Email Boxes (Sign-On Enabled)",250) +
    '</div>' : "";

    var travelPanel = v.includeTravel ? '<div class="glass-card pc-panel">' +
      '<div class="sec-title"><span class="sec-num">4</span><h3>Location and Travel</h3>'+popBtn("pop4")+'</div>' +
      '<p class="pc-sub">Travel buffer built into Section 1 based on one-way distance to nearest office and endpoint count.</p>' +
      (s.pop4 ? '<div class="pop"><h4>How Travel Is Calculated</h4><p style="font-size:13.5px;color:var(--fg-2);line-height:1.6;margin:0">We build a monthly on-site buffer based on one-way distance to our nearest office (Bedford, NH or Scarborough, ME) and the size of your environment. Our on-site rate is $135/hour. Smaller and closer means a smaller buffer. Larger and farther means a larger buffer.</p></div>' : "") +
      '<div class="row brd"><label for="f-zip">Your Zip Code</label></div>' +
      '<div class="row"><input id="f-zip" type="text" placeholder="e.g. 03110" value="'+s.zip+'" data-zip="1"></div>' +
      '<div class="row brd"><label for="f-distance">One-Way Distance to Nearest Office</label></div>' +
      '<div class="row"><select id="f-distance" data-num="distance">' +
        DIST.map(function (d, i) { return '<option value="'+i+'"'+(s.distance===i?" selected":"")+'>'+d+'</option>'; }).join("") +
      '</select></div>' +
      (v.travelHrs ? '<div class="row brd"><label>Included monthly travel buffer</label><span class="val">'+v.travelHrs+' hrs</span></div>' : "") +
    '</div>' : "";

    document.getElementById("pc-root").innerHTML =
      '<section class="pc-intro"><div class="container">' +
        '<span class="eyebrow"><span class="tick"></span> Pricing Estimate</span>' +
        '<h1>Right-Sized IT Protection for Your Business.<br>Priced for Real Budgets.</h1>' +
        '<p class="lead">Eagle\u2019s Complete Support Plan protects and manages every part of your technology: the network you rely on, the computers your team uses, and the people who count on them. This page walks you through how our plan works and gives you a rough monthly estimate you can budget around.</p>' +
        '<p class="est-note"><b>Estimate only.</b> The calculator below gives a rough monthly range to help you plan. Firm pricing comes with a site survey that scopes your specific environment, compliance needs, and service preferences.</p>' +
      '</div></section>' +

      '<section class="pc-sec tint"><div class="container">' +
        '<div class="pc-head"><span class="eyebrow"><span class="tick"></span> Why Our Pricing Is Customized</span>' +
        '<h2>No Two Networks Are the Same. Yours Shouldn\u2019t Be Priced Like One.</h2>' +
        '<p>Managed IT is not a shrink-wrapped product. What you actually pay depends on the shape of your environment, the security posture you need to meet, and how much of the technology stack you want us to own on your behalf. The calculator below gives a rough monthly range based on the biggest cost drivers, and firm pricing comes with a site survey because these details vary:</p></div>' +
        '<div class="why-grid">' + whyCards + '</div>' +
      '</div></section>' +

      '<section class="pc-sec"><div class="container">' +
        '<div class="pc-head"><span class="eyebrow"><span class="tick"></span> How Our Complete Support Plan Works</span>' +
        '<h2>Three Pillars. One Partner. Peace of Mind.</h2>' +
        '<p>Every piece of the Complete Support Plan lives in one of three sections. You get all three on the Complete Support Plan, because protecting a business means covering all three layers, not picking one.</p></div>' +
        '<div class="pillar-3">' + pillarCards + '</div>' +
      '</div></section>' +

      '<section class="pc-sec tint"><div class="container"><div class="seedpod">' +
        '<span class="eyebrow"><span class="tick"></span> Underwriter-Vetted Protection</span>' +
        '<h2>Our Stack Speaks Insurance.</h2>' +
        '<p>Every tool in our Complete Support Plan has been vetted by <b>SeedPod Cyber</b> with a panel of insurance underwriters reviewing our stack. Our fully managed clients receive <b>automatic approval for discounted Cyber Insurance programs</b>, a real financial win on top of the protection itself. When we say we take cybersecurity seriously, the people writing the policies agree.</p>' +
        '<a class="more" href="CyberInsuranceReadiness.html">Learn More About Our Cyber Insurance Program &rarr;</a>' +
      '</div></div></section>' +

      '<section class="pc-sec"><div class="container">' +
        '<div class="pc-head"><span class="eyebrow"><span class="tick"></span> Choose Your Path</span>' +
        '<h2>Which Plan Best Fits Your Situation?</h2>' +
        '<p>The Complete Support Plan is our default: everything above, all three sections, on-site when needed. If your situation is different, we have two other paths.</p></div>' +
        '<div class="path-grid">' + pathCards + '</div>' +
        '<div class="mode-line"><strong>' + MODES[s.plan][0] + '</strong> ' + MODES[s.plan][1] + '</div>' +
      '</div></section>' +

      '<section class="pc-sec" style="padding-top:0"><div class="container"><div class="pc-grid">' +
        '<div>' + liteOpts + coOpts + netPanel + compPanel + userPanel + travelPanel +
          '<div class="notlisted"><div><h3>Don\u2019t See It Listed? Let\u2019s Build Your Number.</h3>' +
          '<p>Tell us what you need and we will scope it with you.</p></div>' +
          '<a href="Contact.html">Talk to Us</a></div>' +
        '</div>' +
        '<aside><div class="summary">' +
          '<div class="summary-head">' +
            '<span class="summary-badge">' + BADGE[s.plan] + '</span>' +
            '<div class="lbl">Estimated Monthly Range</div>' +
            '<div class="summary-price">' + money(v.totalLo) + ' &ndash; ' + money(v.totalHi) + '<span class="per">per month</span></div>' +
            (s.plan === "comanaged" && s.coRemote ? '<div class="remote-flag">Remote Only, no travel included</div>' : "") +
          '</div>' +
          '<div class="summary-lines">' +
            '<div class="sline' + (v.showS1?"":" off") + '"><span class="nm">Section 1 &middot; Network' + (s.plan==="lite"?'<small>travel not included, extra charge</small>':"") + '</span><span class="amt">' + (v.showS1 ? money(v.s1lo)+" &ndash; "+money(v.s1hi) : "&mdash;") + '</span></div>' +
            '<div class="sline' + (v.showS2?"":" off") + '"><span class="nm">Section 2 &middot; Computers</span><span class="amt">' + (v.showS2 ? money(v.s2) : "&mdash;") + '</span></div>' +
            '<div class="sline' + (v.showS3?"":" off") + '"><span class="nm">' + v.s3Label + (v.s3CustomQuote?'<small>Your parent company may already cover awareness training and dark web monitoring. If not, we will quote a reduced per-user rate.</small>':"") + '</span><span class="amt">' + (v.s3CustomQuote ? "Ask us" : (v.showS3 ? money(v.s3) : "&mdash;")) + '</span></div>' +
            (v.showM365 ? '<div class="sline"><span class="nm">M365 tenant admin</span><span class="amt">' + money(v.m365) + '</span></div>' : "") +
          '</div>' +
          '<p class="summary-note"><b>Quoted separately based on your specific needs:</b> SIEM services, Compliance Monitoring, Backups (server and workstation), AI as a Service. Microsoft 365 licensing is passed through at MSRP with no markup if we manage your tenant.</p>' +
          '<div class="summary-actions">' +
            '<a class="primary" href="Contact.html">Book a Discovery Call</a>' +
            '<a class="ghost" href="Contact.html">Email Me This Estimate</a>' +
          '</div>' +
        '</div></aside>' +
      '</div></div></section>' +

      '<section class="pc-sec tint"><div class="container">' +
        '<div class="pc-head"><span class="eyebrow"><span class="tick"></span> What Shapes This Page</span>' +
        '<h2>Our Core Values Show Up in How We Price.</h2>' +
        '<p>The estimate above isn\u2019t a marketing exercise. It reflects five commitments we\u2019ve made to ourselves, our team, and every business, non-profit, and municipality we serve.</p></div>' +
        '<div class="values-grid">' + VALUES.map(function (x) {
          return '<div class="glass-card"><div class="vn">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div>';
        }).join("") + '</div>' +
        '<p class="disclaimer">The prices shown are estimates only. Actual pricing is confirmed with a site survey and may vary based on your specific environment, compliance requirements, and service preferences. Microsoft licensing is passed through at MSRP with no markup.</p>' +
      '</div></section>';
  }

  function bind() {
    var root = document.getElementById("pc-root");
    root.addEventListener("click", function (e) {
      var p = e.target.closest("[data-plan]");
      if (p) { s.plan = p.getAttribute("data-plan"); render(); return; }
      var pb = e.target.closest("[data-pop]");
      if (pb) { var k = pb.getAttribute("data-pop"); s[k] = !s[k]; render(); }
    });
    root.addEventListener("input", function (e) {
      var t = e.target;
      if (t.hasAttribute("data-num")) {
        s[t.getAttribute("data-num")] = +t.value;
        var out = root.querySelector('[data-out="' + t.getAttribute("data-num") + '"]');
        if (out) out.textContent = t.value;
        render();
      } else if (t.hasAttribute("data-zip")) { s.zip = t.value; }
    });
    root.addEventListener("change", function (e) {
      var t = e.target;
      if (t.hasAttribute("data-chk")) { s[t.getAttribute("data-chk")] = t.checked; render(); }
    });
  }

  function init() { render(); bind(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
