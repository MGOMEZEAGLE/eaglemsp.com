/* ============================================================
   Eagle Network Solutions — page builder for static service /
   industry pages. Renders from a window.PAGE_DATA object into
   #page-root, and emits Service + FAQPage JSON-LD.
   Light white/blue system. Load AFTER chrome.js.
   ============================================================ */
(function () {
  var I = {
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    remote: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 21v-4h6v4"/>',
    factory: '<path d="M2 20h20V8l-6 4V8l-6 4V4H4a2 2 0 0 0-2 2Z"/><path d="M6 16h.01M10 16h.01M14 16h.01"/>',
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l3 3v5h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    home: '<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 22V12h6v10"/>',
    heart: '<path d="M12 20s-7-4.3-9.2-8.4C1.3 8.7 2.7 5.5 6 5.5c1.8 0 3 .9 3.9 2.1C10.9 6.4 12.2 5.5 14 5.5c3.3 0 4.7 3.2 3.2 6.1C19 15.7 12 20 12 20Z"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><rect x="10" y="10" width="4" height="4" rx="1"/>',
    firewall: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14.5h18M8 4v5M16 9v5.5M11 14.5V20"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    headset: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 16a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z"/><path d="M3 16a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z"/>',
    google: '<path d="M21 12.2c0-.7-.06-1.3-.18-1.9H12v3.6h5.06a4.3 4.3 0 0 1-1.87 2.8v2.3h3.02C19.96 17.4 21 15 21 12.2Z"/><path d="M12 21c2.43 0 4.47-.8 5.96-2.18l-3.02-2.3c-.84.56-1.9.9-2.94.9-2.26 0-4.18-1.52-4.86-3.58H4.02v2.34A9 9 0 0 0 12 21Z"/><path d="M7.14 13.84a5.4 5.4 0 0 1 0-3.44V8.06H4.02a9 9 0 0 0 0 8.12z"/><path d="M12 6.98c1.32 0 2.5.46 3.44 1.35l2.58-2.58A9 9 0 0 0 4.02 8.06l3.12 2.34C7.82 8.34 9.74 6.98 12 6.98Z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    money: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a2 2 0 0 0 0-2.8L13 7.5"/><path d="m6 11 4-4 3 3"/><path d="m3 13 3 3M21 13l-3-3"/>',
    gauge: '<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M13.4 12.6 19 7"/><path d="M3.3 17a9 9 0 1 1 17.4 0Z"/>',
    trending: '<path d="M3 17l6-6 4 4 7-7"/><path d="M17 8h4v4"/>'
  };
  function svg(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[name] || I.check) + '</svg>';
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  var d = window.PAGE_DATA || {};
  var CONTACT = "Contact.html";

  function hero(h) {
    return '<section class="hero"><div class="container hero-grid">' +
      '<div class="hero-copy reveal">' +
        '<span class="eyebrow"><span class="tick"></span> ' + esc(h.eyebrow) + '</span>' +
        '<h1>' + h.title + '</h1>' +
        '<p class="hero-sub">' + esc(h.sub) + '</p>' +
        '<div class="hero-actions">' +
          '<a class="btn btn-primary" href="' + CONTACT + '">' + esc(h.cta || "Get a Free Assessment") + svg("arrow") + '</a>' +
          (h.cta2 ? '<a class="btn btn-glass" href="' + (h.cta2href || CONTACT) + '">' + esc(h.cta2) + '</a>' : '') +
        '</div>' +
        (h.trust ? '<div class="hero-trust">' + h.trust.map(function (t) { return '<span>' + svg("check") + ' ' + esc(t) + '</span>'; }).join("") + '</div>' : '') +
      '</div>' +
      '<div class="reveal" style="transition-delay:.08s">' + imgph(h.img, h.imgIcon || "image", "tall", h.imgSrc) + '</div>' +
    '</div></section>';
  }

  function imgph(label, icon, cls, src) {
    if (src) {
      return '<figure class="imgph has-photo ' + (cls || '') + '">' +
        '<img src="' + src + '" alt="' + esc(label) + '" loading="lazy">' +
      '</figure>';
    }
    return '<figure class="imgph ' + (cls || '') + '" role="img" aria-label="' + esc(label) + '"><div class="ph-inner">' +
      '<div class="ph-ico">' + svg(icon) + '</div>' +
      '<figcaption class="ph-label">' + esc(label) + '</figcaption>' +
    '</div></figure>';
  }

  function secHead(s, center) {
    return '<div class="sec-head' + (center ? ' center' : '') + ' reveal">' +
      (s.eyebrow ? '<span class="eyebrow"><span class="tick"></span> ' + esc(s.eyebrow) + '</span>' : '') +
      '<h2>' + esc(s.title) + '</h2>' +
      (s.sub ? '<p>' + esc(s.sub) + '</p>' : '') +
    '</div>';
  }

  function cards(s) {
    var cols = s.cols || 3;
    var items = s.items.map(function (it, i) {
      return '<article class="svc-card reveal" style="transition-delay:' + ((i % cols) * 0.06) + 's">' +
        (s.numbered ? '<span class="svc-num">' + String(i + 1).padStart(2, "0") + '</span>' : '') +
        '<div class="svc-ico">' + svg(it.icon) + '</div>' +
        '<h3>' + esc(it.title) + '</h3>' +
        '<p>' + esc(it.body) + '</p>' +
      '</article>';
    }).join("");
    return '<section class="section' + (s.subtle ? ' subtle' : '') + '"><div class="container">' +
      secHead(s) + '<div class="cards c' + cols + '">' + items + '</div></div></section>';
  }

  function checklist(s) {
    var items = s.items.map(function (t) {
      return '<div class="check-item"><span class="ck">' + svg("check") + '</span><span>' + esc(t) + '</span></div>';
    }).join("");
    return '<section class="section"><div class="container split' + (s.reverse ? ' rev' : '') + '">' +
      '<div class="feature-body reveal">' +
        (s.eyebrow ? '<span class="eyebrow"><span class="tick"></span> ' + esc(s.eyebrow) + '</span>' : '') +
        '<h2>' + esc(s.title) + '</h2>' +
        (s.intro ? '<p>' + esc(s.intro) + '</p>' : '') +
        '<div class="checklist" style="margin-top:24px">' + items + '</div>' +
      '</div>' +
      '<div class="split-media reveal" style="transition-delay:.08s">' + imgph(s.mediaLabel, s.mediaIcon || "image", "tall", s.mediaSrc) + '</div>' +
    '</div></section>';
  }

  function feature(s) {
    var paras = s.paras.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    return '<section class="section"><div class="container split' + (s.reverse ? ' rev' : '') + '">' +
      '<div class="feature-body reveal">' +
        (s.eyebrow ? '<span class="eyebrow"><span class="tick"></span> ' + esc(s.eyebrow) + '</span>' : '') +
        '<h2>' + esc(s.title) + '</h2>' + paras +
        (s.badge ? '<div class="badge-row"><div class="svc-ico" style="margin-bottom:0;width:46px;height:46px">' + svg(s.badge.icon) + '</div><span style="font-family:var(--display);color:var(--eagle-navy-900);font-weight:600">' + esc(s.badge.text) + '</span></div>' : '') +
      '</div>' +
      '<div class="split-media reveal" style="transition-delay:.08s">' + imgph(s.mediaLabel, s.mediaIcon || "image", "tall", s.mediaSrc) + '</div>' +
    '</div></section>';
  }

  function stats(s) {
    var items = s.items.map(function (st, i) {
      return '<div class="stat reveal' + (st.hl ? ' hl' : '') + '" style="transition-delay:' + (i * 0.07) + 's"><div class="n">' + esc(st.n) + '</div><div class="l">' + esc(st.l) + '</div></div>';
    }).join("");
    return '<section class="section"><div class="container">' + (s.title ? secHead(s, true) : '') +
      '<div class="stat-strip' + (s.items.length === 3 ? ' s3' : '') + '">' + items + '</div></div></section>';
  }

  function callout(s) {
    return '<section class="section"><div class="container"><div class="callout reveal' + (s.solo ? ' solo' : '') + '">' +
      '<div>' +
        (s.eyebrow ? '<span class="eyebrow"><span class="tick"></span> ' + esc(s.eyebrow) + '</span>' : '') +
        '<h2 style="margin-top:' + (s.eyebrow ? '16px' : '0') + '">' + esc(s.title) + '</h2>' +
        '<p>' + esc(s.body) + '</p>' +
        (s.badge ? '<div class="badge-row"><div class="svc-ico" style="margin-bottom:0;width:44px;height:44px">' + svg(s.badge.icon) + '</div><span style="font-family:var(--display);color:var(--eagle-navy-900);font-weight:600">' + esc(s.badge.text) + '</span></div>' : '') +
      '</div>' +
      (s.solo ? '' : imgph(s.mediaLabel || "Supporting image", s.mediaIcon || "image", "tall", s.mediaSrc)) +
    '</div></div></section>';
  }

  function cjis(s) {
    return '<section class="section" style="padding-top:0"><div class="container"><div class="cjis-badge reveal">' +
      '<div class="cjis-seal">' + svg("shield") + '</div>' +
      '<div><h4>' + esc(s.title) + '</h4><p>' + esc(s.body) + '</p></div>' +
    '</div></div></section>';
  }

  function schedule(s) {
    var url = s.url || "https://eaglemsp.timezest.com/";
    return '<section class="section"><div class="container">' + (s.title ? secHead(s, true) : '') +
      '<div class="schedule-embed reveal" style="max-width:840px;margin:0 auto">' +
        '<div class="se-head"><div class="se-ico">' + svg("calendar") + '</div>' +
        '<h3>' + esc(s.heading || "Book time with an Eagle strategist") + '</h3></div>' +
        '<iframe class="tz-frame" src="' + url + '" title="Schedule with Eagle Network Solutions" loading="lazy"></iframe>' +
        '<p class="tz-note"><span class="launch-flag">CONFIRM TIMEZEST URL</span> Live TimeZest widget. Replace the embed src with your account booking link before launch.</p>' +
      '</div></div></section>';
  }

  function related(s) {
    var items = s.items.map(function (it) {
      return '<a class="related-card" href="' + it.href + '"><div class="rc-ico">' + svg(it.icon) + '</div>' +
        '<div><div class="rc-label">' + esc(it.label) + '</div><div class="rc-sub">' + esc(it.sub || '') + '</div></div></a>';
    }).join("");
    return '<section class="section" style="padding-top:0"><div class="container">' + secHead(s) +
      '<div class="related-row">' + items + '</div></div></section>';
  }

  function faq(s) {
    var items = s.items.map(function (f) {
      var body = '<p>' + esc(f.a) + '</p>';
      if (f.points && f.points.length) {
        body += '<ul class="faq-list">' + f.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>';
      }
      if (f.a2) { body += '<p>' + esc(f.a2) + '</p>'; }
      return '<div class="faq-item"><button class="faq-q" aria-expanded="false">' + esc(f.q) + '<span class="faq-ico"></span></button>' +
        '<div class="faq-a"><div class="faq-a-inner">' + body + '</div></div></div>';
    }).join("");
    return '<section class="section"><div class="container">' +
      secHead({ eyebrow: "FAQ", title: s.title || "Questions we hear a lot." }, true) +
      '<div class="faq-section">' + items + '</div></div></section>';
  }

  function ctabar(s) {
    return '<section class="section" style="padding-top:24px"><div class="container"><div class="ctabar reveal">' +
      '<div class="ctabar-copy"><h2>' + esc(s.title) + '</h2><p>' + esc(s.sub) + '</p></div>' +
      '<a class="btn" href="' + CONTACT + '">' + esc(s.cta || "Get a Free Assessment") + svg("arrow") + '</a>' +
    '</div></div></section>';
  }

  var BUILDERS = { cards: cards, checklist: checklist, feature: feature, stats: stats, callout: callout, cjis: cjis, schedule: schedule, related: related, faq: faq, ctabar: ctabar };

  function build() {
    var root = document.getElementById("page-root");
    if (!root) return;
    var html = "";
    if (d.hero) html += hero(d.hero);
    (d.sections || []).forEach(function (s) {
      var fn = BUILDERS[s.type];
      if (fn) html += fn(s);
    });
    if (d.cta) html += ctabar(d.cta);
    root.innerHTML = html;

    // FAQ accordion
    root.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    // reveal on scroll
    var els = [].slice.call(root.querySelectorAll(".reveal"));
    els.forEach(function (el) { if (el.getBoundingClientRect().top < window.innerHeight * 0.96) el.classList.add("in"); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
      els.forEach(function (el) { if (!el.classList.contains("in")) io.observe(el); });
    }
    setTimeout(function () { root.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); }); }, 1400);

    // emit Service + FAQPage JSON-LD
    var graph = [];
    if (d.service) {
      graph.push({
        "@context": "https://schema.org", "@type": "Service",
        "serviceType": d.service.type, "name": d.service.name,
        "description": d.service.description,
        "provider": { "@type": "Organization", "name": "Eagle Network Solutions", "url": "https://eaglemsp.com/" },
        "areaServed": ["New Hampshire", "Maine"],
        "url": d.canonical || ""
      });
    }
    var faqSec = (d.sections || []).filter(function (s) { return s.type === "faq"; })[0];
    if (faqSec) {
      graph.push({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqSec.items.map(function (f) {
          var txt = f.a;
          if (f.points && f.points.length) { txt += " " + f.points.join(". ") + "."; }
          if (f.a2) { txt += " " + f.a2; }
          return { "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": txt } };
        })
      });
    }
    graph.forEach(function (obj) {
      var sc = document.createElement("script");
      sc.type = "application/ld+json";
      sc.textContent = JSON.stringify(obj);
      document.head.appendChild(sc);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
