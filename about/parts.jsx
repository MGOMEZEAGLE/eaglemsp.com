/* About — extra components: TeamGrid, ReviewSection, JoinBand, OfficeLocations. */
const AIc = window.SIcon;

function Stars({ n = 5 }) {
  return <div className="stars">{Array.from({ length: n }).map((_, i) => <AIc key={i} name="star" />)}</div>;
}

function TeamGrid({ eyebrow, title, sub, members }) {
  // group members by department, preserving first-seen order
  const groups = [];
  members.forEach((m) => {
    const key = m.dept || "Team";
    let g = groups.find((x) => x.dept === key);
    if (!g) { g = { dept: key, items: [] }; groups.push(g); }
    g.items.push(m);
  });
  let gi = 0;
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head reveal">
          {eyebrow && <window.Eyebrow>{eyebrow}</window.Eyebrow>}
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        {groups.map((g) => (
          <div className="team-dept" key={g.dept}>
            <h3 className="team-dept-label reveal">{g.dept}</h3>
            <div className="team-grid">
              {g.items.map((m, i) => {
                gi += 1;
                return (
                  <article className="team-card reveal" key={m.name} style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
                    <div className="team-photo">{m.photo ? <img src={m.photo} alt={m.name} /> : <AIc name="user" />}</div>
                    <h3>{m.name}</h3>
                    <div className="role">{m.role}</div>
                    <p className={`bio${m.placeholder ? ' placeholder-bio' : ''}`}>{m.bio}</p>
                    <a className="li" href={m.linkedin || '#'} aria-label={`${m.name} on LinkedIn`} onClick={(e) => { if (!m.linkedin) e.preventDefault(); }} target={m.linkedin ? '_blank' : undefined} rel="noopener">
                      <AIc name="linkedin" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewSection({ eyebrow, title, sub, reviews }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head reveal">
          {eyebrow && <window.Eyebrow>{eyebrow}</window.Eyebrow>}
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <figure className="review-card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
              <Stars n={5} />
              <blockquote className={r.placeholder ? 'placeholder-quote' : ''}>{r.placeholder ? r.quote : `\u201C${r.quote}\u201D`}</blockquote>
              <figcaption className="review-author">
                <span className="avatar">{r.initials || '\u2605'}</span>
                <span>
                  <span className="nm">{r.name}</span><br />
                  <span className="co">{r.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourceBadges({ note }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="source-badges">
            <div className="source-badge">
              <div className="sb-ico"><AIc name="google" /></div>
              <div><b>Google Reviews</b><span>[ Google Reviews badge ]</span></div>
            </div>
            <div className="source-badge">
              <div className="sb-ico"><AIc name="bbb" /></div>
              <div><b>BBB A+ Rated</b><span>Accredited since 2018</span></div>
            </div>
          </div>
          {note && <p style={{ fontSize: 15, color: 'var(--fg-3)', maxWidth: 620, margin: '0 auto' }}>{note}</p>}
        </div>
      </div>
    </section>
  );
}

function OfficeLocations({ eyebrow, title, offices }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head center reveal">
          {eyebrow && <window.Eyebrow>{eyebrow}</window.Eyebrow>}
          <h2>{title}</h2>
        </div>
        <div className="cards c2">
          {offices.map((o, i) => (
            <article className="svc-card reveal" key={o.name} style={{ transitionDelay: `${i * 0.06}s`, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '22px', alignItems: 'start' }}>
              <div className="svc-ico" style={{ marginBottom: 0 }}><AIc name="pin" /></div>
              <div>
                <h3 style={{ marginBottom: 8 }}>{o.name}</h3>
                <p style={{ marginBottom: 4 }}>{o.addr}</p>
                <p style={{ marginBottom: 14 }}>{o.city}</p>
                <a className="link-phone" href={`tel:${o.phone.replace(/[^0-9]/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--display)', fontWeight: 600, color: 'var(--accent)' }}>
                  <AIc name="phone" /> {o.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinBand({ eyebrow, title, body, cta, href }) {
  return (
    <section className="section">
      <div className="container">
        <div className="join-band reveal">
          {eyebrow && <window.Eyebrow>{eyebrow}</window.Eyebrow>}
          <h2>{title}</h2>
          <p>{body}</p>
          <a className="btn btn-primary" href={href} target="_blank" rel="noopener">{cta} <AIc name="arrow" /></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Stars, TeamGrid, ReviewSection, SourceBadges, OfficeLocations, JoinBand });
