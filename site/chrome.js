/* ============================================================
   Eagle Network Solutions — shared site chrome
   Injects the unified header (nav) + footer on every static page,
   plus shared Organization + LocalBusiness JSON-LD.
   Usage: <body data-page="cyber-insurance"> ... <script src="site/chrome.js"></script>
   Mark the active nav with data-page matching a NAV id below.
   ============================================================ */
(function () {
  var ICONS = {
    chevron: '<path d="m6 9 6 6 6-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    linkedin: '<rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12M10 14a4 4 0 0 1 8 0v7"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>'
  };
  function svg(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  var NAV = [
    { id: "home", label: "Home", href: "Homepage.html" },
    { id: "solutions", label: "Solutions", href: "Solutions.html", children: [
      { label: "Managed IT Support", href: "Solutions.html#managed" },
      { label: "Cybersecurity", href: "Solutions.html#cybersecurity" },
      { label: "Strategic IT", href: "Solutions.html#strategic" },
      { label: "Co-Managed IT", href: "CoManagedIT.html" },
      { label: "Remote-Only IT", href: "RemoteOnlyIT.html" },
      { label: "Hardware & Physical Security", href: "Solutions.html#hardware" },
      { label: "Cyber Insurance Readiness", href: "CyberInsuranceReadiness.html" }
    ]},
    { id: "industries", label: "Industries", href: "Industries.html", children: [
      { label: "All Industries", href: "Industries.html" },
      { label: "Municipalities", href: "Municipalities.html" },
      { label: "Manufacturing", href: "Manufacturing.html" },
      { label: "Distribution", href: "Distribution.html" },
      { label: "Professional Services", href: "ProfessionalServices.html" },
      { label: "Property Management", href: "PropertyManagement.html" },
      { label: "Non-Profits", href: "NonProfits.html" }
    ]},
    { id: "pricing", label: "Pricing Calculator", href: "PricingCalculator.html" },
    { id: "about", label: "About", href: "About.html", children: [
      { label: "Who We Are", href: "About.html#who" },
      { label: "Our Team", href: "About.html#team" },
      { label: "Customer Reviews", href: "About.html#reviews" }
    ]},
    { id: "blog", label: "Blog & News", href: "Blog.html" },
    { id: "contact", label: "Contact", href: "Contact.html" }
  ];

  var active = document.body.getAttribute("data-page") || "";

  function navItem(item) {
    var isActive = item.id === active;
    if (!item.children) {
      return '<li><a class="sol-tab' + (isActive ? ' active' : '') + '" href="' + item.href + '">' + item.label + '</a></li>';
    }
    var sub = item.children.map(function (c) {
      return '<li><a href="' + c.href + '">' + c.label + '</a></li>';
    }).join("");
    return '<li class="nav-has-dd">' +
      '<a class="sol-tab' + (isActive ? ' active' : '') + '" href="' + item.href + '">' + item.label + svg("chevron", "nav-caret") + '</a>' +
      '<ul class="nav-dd">' + sub + '</ul>' +
    '</li>';
  }

  var header =
    '<div class="util-bar">' +
      '<div class="container util-bar-inner">' +
        '<div class="util-left">' +
          '<a href="tel:8007046165" class="util-item">' + svg("phone") + '<span>Phone: 800-704-6165</span></a>' +
          '<a href="mailto:ens@eaglemsp.com" class="util-item">' + svg("mail") + '<span>ens@eaglemsp.com</span></a>' +
          '<a href="https://www.facebook.com/eaglenetsolutions" target="_blank" rel="noopener" class="util-item util-icon-only" aria-label="Eagle Network Solutions on Facebook">' + svg("facebook") + '</a>' +
        '</div>' +
        '<div class="util-right">' +
          '<a href="https://eaglemsp.myportallogin.com/" target="_blank" rel="noopener">Client Portal</a>' +
          '<a href="https://cmd-eaglemsp.screenconnect.com/" target="_blank" rel="noopener">Join a Session</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<header class="sol-header">' +
      '<div class="container sol-header-inner">' +
        '<a class="sol-logo" href="Homepage.html" aria-label="Eagle Network Solutions home">' +
          '<img src="assets/eagle-logo.png" alt="Eagle Network Solutions">' +
        '</a>' +
        '<nav class="sol-tabs" aria-label="Primary">' +
          '<ul class="nav-list">' + NAV.map(navItem).join("") + '</ul>' +
        '</nav>' +
        '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</header>';

  // Industry sub-tab strip (mirrors the Solutions sub-tabs), built from the Industries nav list
  var industrySubtabs = "";
  if (active === "industries") {
    var indItem = NAV.filter(function (n) { return n.id === "industries"; })[0];
    var here = (window.location.pathname.split("/").pop() || "").toLowerCase();
    industrySubtabs = '<div class="subtabs"><div class="container subtabs-inner">' +
      indItem.children.map(function (c) {
        var file = c.href.split("#")[0].toLowerCase();
        var isOn = here === file || (here === "" && file === "industries.html");
        return '<a class="subtab' + (isOn ? ' active' : '') + '" href="' + c.href + '">' + c.label + '</a>';
      }).join("") +
    '</div></div>';
  }
  header += industrySubtabs;

  var footer =
    '<footer class="site-footer">' +
      '<div class="container site-footer-grid">' +
        '<div class="sf-brand">' +
          '<img src="assets/eagle-logo.png" alt="Eagle Network Solutions">' +
          '<p class="sf-tag">The Eagle Never Sleeps\u2026 so you can.</p>' +
          '<p class="sf-throughline">Family-owned, founder-led managed IT and cybersecurity for businesses, municipalities, and non-profits across New Hampshire and Maine.</p>' +
          '<div class="sf-social">' +
            '<a href="https://www.facebook.com/eaglenetsolutions" target="_blank" rel="noopener" aria-label="Eagle Network Solutions on Facebook">' + svg("facebook") + '</a>' +
            '<a href="https://www.linkedin.com/company/eagle-network-solutions" target="_blank" rel="noopener" aria-label="Eagle Network Solutions on LinkedIn">' + svg("linkedin") + '</a>' +
            '<a href="https://www.instagram.com/eaglenetsolutions" target="_blank" rel="noopener" aria-label="Eagle Network Solutions on Instagram">' + svg("instagram") + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4>Solutions</h4>' +
          '<a href="Solutions.html#managed">Managed IT Support</a>' +
          '<a href="Solutions.html#cybersecurity">Cybersecurity</a>' +
          '<a href="Solutions.html#strategic">Strategic IT</a>' +
          '<a href="CoManagedIT.html">Co-Managed IT</a>' +
          '<a href="RemoteOnlyIT.html">Remote-Only IT</a>' +
          '<a href="CyberInsuranceReadiness.html">Cyber Insurance Readiness</a>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4>Industries</h4>' +
          '<a href="Municipalities.html">Municipalities</a>' +
          '<a href="Manufacturing.html">Manufacturing</a>' +
          '<a href="Distribution.html">Distribution</a>' +
          '<a href="ProfessionalServices.html">Professional Services</a>' +
          '<a href="PropertyManagement.html">Property Management</a>' +
          '<a href="NonProfits.html">Non-Profits</a>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4>Company</h4>' +
          '<a href="About.html#who">About Us</a>' +
          '<a href="About.html#team">Our Team</a>' +
          '<a href="About.html#reviews">Customer Reviews</a>' +
          '<a href="Blog.html">Blog & News</a>' +
          '<a href="Contact.html">Contact</a>' +
        '</div>' +
        '<div class="sf-cta">' +
          '<div class="sf-cta-row">' + svg("pin") + '<span>Bedford, NH &nbsp;|&nbsp; Scarborough, ME</span></div>' +
          '<div class="sf-cta-row">' + svg("link") + '<a href="Contact.html">eaglemsp.com/contact</a></div>' +
          '<div class="sf-cta-row">' + svg("mail") + '<a href="Contact.html">Send us a message</a></div>' +
          '<a class="btn btn-primary sf-btn" href="Contact.html">Get a Free Assessment</a>' +
        '</div>' +
      '</div>' +
      '<div class="container site-subfooter">' +
        '<p>\u00A9 ' + new Date().getFullYear() + ' Eagle Network Solutions. Eagle Network Solutions LLC is family-owned and operated. Family-owned and operated. BBB A+ rated since 2018.</p>' +
        '<div class="sf-legal">' +
          '<a href="PrivacyPolicy.html">Privacy Policy</a>' +
          '<a href="AccessibilityStatement.html">Accessibility</a>' +
          '<a href="sitemap.xml">Sitemap</a>' +
        '</div>' +
      '</div>' +
    '</footer>';

  // shared Organization + LocalBusiness JSON-LD (identical site-wide)
  var orgLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eaglemsp.com/#organization",
        "name": "Eagle Network Solutions",
        "legalName": "Eagle Network Solutions LLC",
        "url": "https://eaglemsp.com/",
        "logo": "https://eaglemsp.com/wp-content/uploads/2020/01/Eagle-Logo-Gray.png",
        "description": "Family-owned, founder-led managed IT and cybersecurity provider serving small and medium businesses, municipalities, and non-profits across New Hampshire and Maine.",
        "foundingDate": "1999",
        "areaServed": ["New Hampshire", "Maine", "Northern New England"],
        "telephone": "+1-800-704-6165",
        "sameAs": ["https://www.facebook.com/eaglenetsolutions", "https://www.linkedin.com/company/eagle-network-solutions", "https://www.instagram.com/eaglenetsolutions"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eaglemsp.com/#bedford",
        "name": "Eagle Network Solutions \u2013 Bedford, NH",
        "parentOrganization": { "@id": "https://eaglemsp.com/#organization" },
        "image": "https://eaglemsp.com/wp-content/uploads/2020/01/Eagle-Logo-Gray.png",
        "telephone": "+1-603-782-0700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "80 Palomino Lane, Suite 202",
          "addressLocality": "Bedford",
          "addressRegion": "NH",
          "postalCode": "03110",
          "addressCountry": "US"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eaglemsp.com/#scarborough",
        "name": "Eagle Network Solutions \u2013 Scarborough, ME",
        "parentOrganization": { "@id": "https://eaglemsp.com/#organization" },
        "image": "https://eaglemsp.com/wp-content/uploads/2020/01/Eagle-Logo-Gray.png",
        "telephone": "+1-207-613-1144",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Gorham Road, Suite 209",
          "addressLocality": "Scarborough",
          "addressRegion": "ME",
          "postalCode": "04074",
          "addressCountry": "US"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "priceRange": "$$"
      }
    ]
  };

  function mount() {
    var headerSlot = document.getElementById("site-header");
    var footerSlot = document.getElementById("site-footer");
    if (headerSlot) headerSlot.outerHTML = header; else document.body.insertAdjacentHTML("afterbegin", header);
    if (footerSlot) footerSlot.outerHTML = footer; else document.body.insertAdjacentHTML("beforeend", footer);

    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify(orgLd);
    document.head.appendChild(ld);

    // mobile menu toggle
    var toggle = document.querySelector(".nav-toggle");
    var tabs = document.querySelector(".sol-tabs");
    if (toggle && tabs) {
      toggle.addEventListener("click", function () {
        var open = tabs.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
