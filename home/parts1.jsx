/* Eagle Homepage — top sections: Topbar, Header, Hero, TrustRibbon, WhoWeAre */
const { useState, useEffect, useRef } = React;
const Icon = window.Icon;

const NAV = ['Home', 'Solutions', 'Industries', 'About Us', 'Blog & News', 'Contact'];
const SUBMENUS = {
  'Solutions': ['Managed IT Support', 'Cybersecurity', 'Strategic IT', 'Co-Managed IT', 'Remote-Only IT', 'Hardware & Physical Security', 'Cyber Insurance Readiness'],
  'Industries': ['All Industries', 'Municipalities', 'Manufacturing', 'Distribution', 'Professional Services', 'Property Management', 'Non-Profits'],
  'About Us': ['Who We Are', 'Our Team', 'Customer Reviews'],
};
const SUB_HREF = {
  'Managed IT Support': 'Solutions.html#managed',
  'Cybersecurity': 'Solutions.html#cybersecurity',
  'Strategic IT': 'Solutions.html#strategic',
  'Co-Managed IT': 'CoManagedIT.html',
  'Remote-Only IT': 'RemoteOnlyIT.html',
  'Hardware & Physical Security': 'Solutions.html#hardware',
  'Cyber Insurance Readiness': 'CyberInsuranceReadiness.html',
  'All Industries': 'Industries.html',
  'Municipalities': 'Municipalities.html',
  'Manufacturing': 'Manufacturing.html',
  'Distribution': 'Distribution.html',
  'Professional Services': 'ProfessionalServices.html',
  'Property Management': 'PropertyManagement.html',
  'Non-Profits': 'NonProfits.html',
  'Who We Are': 'About.html#who',
  'Our Team': 'About.html#team',
  'Customer Reviews': 'About.html#reviews',
};
const TOP_HREF = {
  'Solutions': 'Solutions.html#managed',
  'Industries': 'Industries.html',
  'About Us': 'About.html#who',
};
const NAV_HREF = {
  'Contact': 'Contact.html',
  'Blog & News': 'Blog.html',
};

function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <a href="tel:8007046165"><Icon name="phone" /> 800-704-6165</a>
          <a href="mailto:help@eaglemsp.com"><Icon name="mail" /> help@eaglemsp.com</a>
        </div>
        <div className="topbar-right">
          <a href="#">Service Ticket</a>
          <span className="sep" />
          <a href="#">Client Portal</a>
          <span className="sep" />
          <a href="#">Join a Session</a>
        </div>
      </div>
    </div>
  );
}

function Header({ onCta }) {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); setActive('Home'); }}>
          <img src={(window.__resources && window.__resources.eagleLogo) || "assets/eagle-logo.png"} alt="Eagle Network Solutions" />
        </a>
        <nav>
          <ul>
            {NAV.map((it) => (
              <li key={it} className={SUBMENUS[it] ? 'has-dropdown' : ''}>
                <a href={SUBMENUS[it] ? TOP_HREF[it] : (NAV_HREF[it] || '#')} className={active === it ? 'active' : ''} onClick={(e) => { if (!SUBMENUS[it] && !NAV_HREF[it]) { e.preventDefault(); setActive(it); } }}>
                  {it}{SUBMENUS[it] && <Icon name="chevron" className="nav-caret" />}
                </a>
                {SUBMENUS[it] && (
                  <ul className="dropdown">
                    {SUBMENUS[it].map((s) => (
                      <li key={s}><a href={SUB_HREF[s] || '#'}>{s}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-cta">
          <a href="tel:8007046165" className="header-phone"><Icon name="phone" /> 800-704-6165</a>
          <button className="btn btn-primary" onClick={onCta}>Free Assessment</button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onCta, layout }) {
  if (layout === 'centered') {
    return (
      <section className="hero hero-centered" data-screen-label="Hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${(window.__resources && window.__resources.heroEagle) || 'assets/hero-eagle.jpg'})` }} />
        <div className="hero-photo-veil" />
        <div className="container hero-c-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow">Managed IT for Northern New England</span>
          </div>
          <h1 className="hero-h1">Your IT, <span className="grad">Protected</span> 24/7.</h1>
          <p className="hero-lead">The Eagle Never Sleeps… <span className="lead-em">so you can.</span></p>
          <p className="hero-mindset">Security is a mindset, not a service. We bring a first responder mindset to every alert.</p>
          <p className="hero-sub">Proactive cybersecurity, fast local support, and a team watching your network around the clock, for businesses, municipalities, and non-profits across New Hampshire and Maine.</p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onCta}>Get a Free Assessment <Icon name="arrow" /></button>
            <a href="#plans" className="btn btn-secondary btn-lg">View Solutions</a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="hero hero-bleed" data-screen-label="Hero">
      <div className="hero-photo" style={{ backgroundImage: `url(${(window.__resources && window.__resources.heroEagle) || 'assets/hero-eagle.jpg'})` }} />
      <div className="hero-veil" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow">Managed IT for Northern New England</span>
          </div>
          <h1 className="hero-h1">Your IT,<br /><span className="grad">Protected</span> 24/7.</h1>
          <p className="hero-lead">The Eagle Never Sleeps… <span className="lead-em">so you can.</span></p>
          <p className="hero-mindset">Security is a mindset, not a service. We bring a first responder mindset to every alert.</p>
          <p className="hero-sub">Proactive cybersecurity, fast local support, and a team watching your network around the clock, for businesses, municipalities, and non-profits across New Hampshire and Maine.</p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onCta}>Get a Free Assessment <Icon name="arrow" /></button>
            <a href="#plans" className="btn btn-secondary btn-lg">View Solutions</a>
          </div>
          <div className="hero-assure">
            <span><Icon name="check" /> No-pressure, no-cost review</span>
            <span><Icon name="check" /> Local team, on-site when it counts</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustRibbon() {
  const stats = [
    { ico: 'award', num: '20+', lbl: 'Years serving the region' },
    { ico: 'shield', num: 'A+', lbl: 'BBB rated since 2018' },
    { ico: 'pin', num: '2', lbl: 'Local offices — NH & ME' },
    { ico: 'star', num: '5.0', lbl: 'Average customer rating' },
  ];
  return (
    <div className="container trust-ribbon">
      <div className="trust-ribbon-inner reveal">
        {stats.map((s) => (
          <div className="trust-stat" key={s.lbl}>
            <div className="trust-ico"><Icon name={s.ico} /></div>
            <div>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhoWeAre() {
  const facts = [
    { ico: 'users', k: 'Family-owned', v: 'Independent and local — not a national call center.' },
    { ico: 'award', k: '20+ years', v: 'Protecting New England businesses since the early 2000s.' },
    { ico: 'pin', k: 'NH & Maine', v: 'Offices in Bedford, NH and Scarborough, ME.' },
  ];
  return (
    <section className="section who" id="about">
      <div className="container who-grid">
        <div className="who-copy reveal">
          <span className="eyebrow">Who we are</span>
          <h2>Your neighbors, watching your back.</h2>
          <p className="who-lead">We're a family-owned IT and cybersecurity company that's been protecting New England businesses since the early 2000s.</p>
          <p>Big enough to run a modern security operation around the clock, small enough that you'll know the people answering your call. We live and work in the same towns you do — and we treat your network like it's our own.</p>
        </div>
        <div className="who-facts reveal">
          {facts.map((f) => (
            <div className="who-fact" key={f.k}>
              <div className="who-ico"><Icon name={f.ico} /></div>
              <div>
                <div className="who-k">{f.k}</div>
                <div className="who-v">{f.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Topbar, Header, Hero, TrustRibbon, WhoWeAre, NAV });
