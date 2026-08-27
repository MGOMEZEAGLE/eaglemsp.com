/* Eagle Homepage — middle sections: Pillars, WhyEagle, SocialProof */
const Icon2 = window.Icon;

function useReveal() {
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add('reveal-ready');
    const els = [...document.querySelectorAll('.reveal')];
    const revealInView = () => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('in');
      });
    };
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      els.forEach((el) => io.observe(el));
    }
    revealInView();
    requestAnimationFrame(revealInView);
    const safety = setTimeout(() => root.classList.remove('reveal-ready'), 2600);
    return () => { if (io) io.disconnect(); clearTimeout(safety); };
  }, []);
}

function Pillars() {
  const pillars = [
    {
      key: 'support', icon: 'headset', cls: 'p-support',
      title: 'Support', blurb: 'Help that actually picks up.',
      items: ['Fast remote & on-site help desk', 'Patching & deployment', 'Network administration', 'Cloud & Microsoft 365'],
    },
    {
      key: 'protect', icon: 'shield', cls: 'p-protect',
      title: 'Protect', blurb: 'Layered security that never blinks.',
      items: ['Next-gen anti-virus & EDR', '24/7 SOC + SIEM monitoring', 'Dark web & threat alerts', 'Security awareness training'],
    },
    {
      key: 'expand', icon: 'trending', cls: 'p-expand',
      title: 'Expand', blurb: 'Technology planned around where you\u2019re going.',
      items: ['Virtual CIO (vCIO) roadmapping', 'Project management', 'Hardware procurement', 'Site surveys & rollouts'],
    },
  ];
  return (
    <section className="section subtle" id="plans">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Support. Protect. Expand.</h2>
          <p>Three jobs, one local team. Every Eagle service ladders up to one promise: support the people using your technology, protect what you have, and expand what you can do next.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <article className={`pillar-card reveal ${p.cls}`} key={p.key}>
              <div className="pillar-ico"><Icon2 name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p className="pillar-blurb">{p.blurb}</p>
              <ul className="pillar-list">
                {p.items.map((it) => (<li key={it}><Icon2 name="check" /> {it}</li>))}
              </ul>
              <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>Explore {p.title} <Icon2 name="arrow" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEagle({ onCta }) {
  const cards = [
    {
      icon: 'users', title: 'In-house IT is too costly',
      body: 'Hiring, training, and keeping a full internal IT team is expensive, and one person can\u2019t cover security, support, and strategy. Eagle gives you the whole team for one predictable monthly cost.',
    },
    {
      icon: 'lock', title: 'Cyber threats keep growing',
      body: 'Small and mid-sized businesses are now the favorite target for ransomware and phishing. We run 24/7 monitoring and layered defenses sized for organizations like yours, not enterprise budgets.',
    },
    {
      icon: 'trending', title: 'You\u2019ve outgrown your setup',
      body: 'Aging hardware, ad-hoc fixes, and \u201cthe one person who handles the computers\u201d stop scaling fast. We modernize your environment today and map out what comes next.',
    },
  ];
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow">Why Eagle</span>
          <h2>Sound familiar?</h2>
          <p>If one of these is keeping you up at night, you’re exactly who we’re built for.</p>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <article className="why-card reveal" key={c.title}>
              <div className="why-ico"><Icon2 name={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
        <div className="why-cta reveal">
          <p>Not sure where you stand? A free network assessment gives you a clear, prioritized plan, with no pressure and no obligation.</p>
          <button className="btn btn-primary btn-lg" onClick={onCta}><Icon2 name="calendar" /> Get a Free Assessment</button>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { num: '97%', lbl: 'Customer satisfaction (CSAT)' },
    { num: 'A+', lbl: 'BBB rated since 2018' },
    { num: '5.0', lbl: 'Average review rating' },
  ];
  const reviews = [
    { quote: 'They respond before we even realize there\u2019s a problem. It feels like having an IT department down the hall, not a vendor three states away.', name: 'Karen M.', role: 'Office Manager · Bedford, NH', initials: 'KM' },
    { quote: 'Predictable cost, zero surprises, and real people who pick up the phone. Switching to Eagle was the easiest decision we made all year.', name: 'Dave R.', role: 'Town Administrator · Maine', initials: 'DR' },
  ];
  return (
    <section className="section navy social">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow on-dark">The proof</span>
          <h2>Our results speak for themselves.</h2>
          <p>We don’t make claims about service. We let the people we work with make them for us.</p>
        </div>
        <div className="proof-stats reveal">
          {stats.map((s) => (
            <div className="proof-stat" key={s.lbl}>
              <div className="ps-num">{s.num}</div>
              <div className="ps-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="proof-reviews">
          {reviews.map((r) => (
            <figure className="proof-card reveal" key={r.name}>
              <div className="stars">{[0, 1, 2, 3, 4].map((s) => <Icon2 key={s} name="star" />)}</div>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption className="review-author">
                <span className="review-avatar">{r.initials}</span>
                <span>
                  <span className="nm">{r.name}</span><br />
                  <span className="rl">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars, WhyEagle, SocialProof, Smileback, useReveal });

/* Smileback / CSAT widget section.
   Amy: paste the Smileback embed <script>/<iframe> snippet inside the
   .smileback-embed div below (replacing the fallback block). The fallback
   renders until then. */
function Smileback() {
  const embedRef = React.useRef(null);
  const [hasEmbed, setHasEmbed] = React.useState(false);
  React.useEffect(() => {
    if (embedRef.current && embedRef.current.children.length > 0) setHasEmbed(true);
  }, []);
  return (
    <section className="section subtle smileback-section" id="reviews-widget">
      <div className="container">
        <div className="sec-head center reveal">
          <span className="eyebrow">Client satisfaction</span>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from the New England businesses, municipalities, and non-profits we support, measured after every ticket we close.</p>
        </div>
        <div className="smileback-wrap reveal">
          {/* SMILEBACK EMBED: paste widget snippet inside this div */}
          <div className="smileback-embed" ref={embedRef}></div>
          {!hasEmbed && (
            <div className="smileback-fallback">
              <div className="sb-score">
                <div className="sb-num">97%</div>
                <div className="sb-lbl">Positive CSAT rating</div>
              </div>
              <div className="sb-copy">
                <p>Our satisfaction score is collected directly from clients through SmileBack after real support interactions, not solicited testimonials.</p>
                <a className="btn btn-primary" href="https://eaglemsp.com/customer-feedback/" target="_blank" rel="noopener">Read Client Feedback <Icon2 name="arrow" /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
