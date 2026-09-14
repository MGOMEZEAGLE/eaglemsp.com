/* Solutions — shared components and reveal hook. */
const Ic = window.SIcon;
const CONTACT = "https://eaglemsp.com/contact";

function useReveal(dep) {
  React.useEffect(() => {
    let cancelled = false;
    const els = [...document.querySelectorAll('.page.active .reveal')];
    // reveal anything already in view immediately
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add('in'); });
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      els.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
    }
    // safety net: never leave content hidden if the observer fails or the tab is unfocused
    const safety = setTimeout(() => {
      if (!cancelled) document.querySelectorAll('.page.active .reveal').forEach((el) => el.classList.add('show'));
    }, 1600);
    return () => { cancelled = true; if (io) io.disconnect(); clearTimeout(safety); };
  }, [dep]);
}

function Eyebrow({ children }) {
  return <span className="eyebrow"><span className="tick" /> {children}</span>;
}

function ImagePlaceholder({ label, icon = "image", className = "" }) {
  return (
    <div className={`imgph ${className}`}>
      <div className="ph-inner">
        <div className="ph-ico"><Ic name={icon} /></div>
        <div className="ph-label">{label}</div>
      </div>
    </div>
  );
}

function Hero({ eyebrow, title, sub, cta, heroLabel, heroIcon, trust }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p className="hero-sub">{sub}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={CONTACT} target="_blank" rel="noopener">{cta} <Ic name="arrow" /></a>
          </div>
          {trust && (
            <div className="hero-trust">
              {trust.map((t) => <span key={t}><Ic name="check" /> {t}</span>)}
            </div>
          )}
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}>
          <ImagePlaceholder label={heroLabel} icon={heroIcon || 'image'} className="tall" />
        </div>
      </div>
    </section>
  );
}

function Cards({ eyebrow, title, sub, items, cols = 3, numbered = false }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head reveal">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className={`cards c${cols}`}>
          {items.map((it, i) => (
            <article className="svc-card reveal" key={it.title} style={{ transitionDelay: `${(i % cols) * 0.06}s` }}>
              {numbered && <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>}
              <div className="svc-ico"><Ic name={it.icon} /></div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCards({ eyebrow, title, sub, items }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head reveal">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className="cards c3">
          {items.map((it, i) => (
            <article className="svc-card prod-card reveal" key={it.title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <ImagePlaceholder label={it.imgLabel} icon={it.imgIcon} />
              <div className="prod-body">
                <div className="svc-ico"><Ic name={it.icon} /></div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatStrip({ stats }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={`stat-strip${stats.length === 3 ? ' s3' : ''}`}>
          {stats.map((s, i) => (
            <div className={`stat reveal${s.hl ? ' hl' : ''}`} key={s.l} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Checklist({ eyebrow, title, intro, items, mediaLabel, mediaIcon, reverse }) {
  return (
    <section className="section">
      <div className={`container split${reverse ? ' rev' : ''}`}>
        <div className="feature-body reveal">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
          <div className="checklist" style={{ marginTop: 24 }}>
            {items.map((it) => (
              <div className="check-item" key={it}>
                <span className="ck"><Ic name="check" /></span>
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="split-media reveal" style={{ transitionDelay: '.08s' }}>
          <ImagePlaceholder label={mediaLabel} icon={mediaIcon || 'image'} className="tall" />
        </div>
      </div>
    </section>
  );
}

function FeatureSplit({ eyebrow, title, paras, mediaLabel, mediaIcon, reverse, offices, badge }) {
  return (
    <section className="section">
      <div className={`container split${reverse ? ' rev' : ''}`}>
        <div className="feature-body reveal">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2>{title}</h2>
          {paras.map((p, i) => <p key={i}>{p}</p>)}
          {offices && (
            <div className="offices">
              {offices.map((o) => (
                <div className="office" key={o.city}>
                  <Ic name="pin" />
                  <div><b>{o.city}</b><span>{o.addr}</span></div>
                </div>
              ))}
            </div>
          )}
          {badge && (
            <div className="badge-row">
              <div className="svc-ico" style={{ marginBottom: 0, width: 46, height: 46 }}><Ic name={badge.icon} /></div>
              <span style={{ fontFamily: 'var(--display)', color: 'var(--txt-1)', fontWeight: 600 }}>{badge.text}</span>
            </div>
          )}
        </div>
        <div className="split-media reveal" style={{ transitionDelay: '.08s' }}>
          <ImagePlaceholder label={mediaLabel} icon={mediaIcon || 'image'} className="tall" />
        </div>
      </div>
    </section>
  );
}

function Callout({ eyebrow, title, body, badge, solo }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`callout reveal${solo ? ' solo' : ''}`}>
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 style={{ marginTop: eyebrow ? 16 : 0 }}>{title}</h2>
            <p>{body}</p>
            {badge && (
              <div className="badge-row">
                <div className="svc-ico" style={{ marginBottom: 0, width: 44, height: 44 }}><Ic name={badge.icon} /></div>
                <span style={{ fontFamily: 'var(--display)', color: 'var(--txt-1)', fontWeight: 600 }}>{badge.text}</span>
              </div>
            )}
          </div>
          {!solo && <ImagePlaceholder label={badge ? badge.imgLabel : 'Supporting image'} icon={badge ? badge.imgIcon : 'image'} className="tall" />}
        </div>
      </div>
    </section>
  );
}

function CtaBar({ title, sub, cta }) {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="ctabar reveal">
          <div className="ctabar-copy">
            <h2>{title}</h2>
            <p>{sub}</p>
          </div>
          <a className="btn btn-primary" href={CONTACT} target="_blank" rel="noopener">{cta} <Ic name="arrow" /></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useReveal, Eyebrow, ImagePlaceholder, Hero, Cards, ProductCards, StatStrip, Checklist, FeatureSplit, Callout, CtaBar, CONTACT });
