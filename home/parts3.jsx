/* Eagle Homepage — closing sections: Local, Blog, CTA, Footer, ContactModal */
const Icon3 = window.Icon;

function NetLines() {
  return (
    <svg className="net" viewBox="0 0 320 184" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="#6fa3dc" strokeOpacity="0.4" strokeWidth="1" fill="none">
        <path d="M30 40 L110 90 L200 50 L280 120 M110 90 L70 150 L190 150 L280 120" />
      </g>
      <g fill="#cfe1f5" fillOpacity="0.8">
        <circle cx="30" cy="40" r="3" /><circle cx="110" cy="90" r="3.5" /><circle cx="200" cy="50" r="3" />
        <circle cx="280" cy="120" r="3" /><circle cx="70" cy="150" r="3" /><circle cx="190" cy="150" r="2.5" />
      </g>
    </svg>
  );
}

function LocalSupport() {
  return (
    <section className="section subtle" id="local">
      <div className="container">
        <div className="local-grid">
          <div className="local-copy reveal">
            <span className="eyebrow">Local &amp; nearby</span>
            <h2>We live, work and play in the same towns you do.</h2>
            <p>Eagle isn't a faceless national help desk. We're your neighbors in Northern New England, close enough to be on-site when it matters, and invested in the community we share.</p>
            <div className="offices">
              <div className="office">
                <h5><Icon3 name="pin" /> New Hampshire</h5>
                <p>80 Palomino Lane, Suite 202<br />Bedford, NH 03110</p>
                <a href="tel:6037820700"><Icon3 name="phone" /> 603-782-0700</a>
              </div>
              <div className="office">
                <h5><Icon3 name="pin" /> Maine</h5>
                <p>27 Gorham Road, Suite 209<br />Scarborough, ME 04074</p>
                <a href="tel:2076131144"><Icon3 name="phone" /> 207-613-1144</a>
              </div>
            </div>
          </div>
          <div className="local-map reveal">
            <div className="office-maps">
              <figure className="office-map">
                <iframe
                  title="Eagle Network Solutions Bedford, NH office on Google Maps"
                  src="https://maps.google.com/maps?q=80%20Palomino%20Lane%20Suite%20202%2C%20Bedford%2C%20NH%2003110&z=15&output=embed"
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <figcaption>
                  <span><Icon3 name="pin" /> Bedford, NH</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=80%20Palomino%20Lane%20Suite%20202%2C%20Bedford%2C%20NH%2003110" target="_blank" rel="noopener">Open in Google Maps</a>
                </figcaption>
              </figure>
              <figure className="office-map">
                <iframe
                  title="Eagle Network Solutions Scarborough, ME office on Google Maps"
                  src="https://maps.google.com/maps?q=27%20Gorham%20Road%20Suite%20209%2C%20Scarborough%2C%20ME%2004074&z=15&output=embed"
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <figcaption>
                  <span><Icon3 name="pin" /> Scarborough, ME</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=27%20Gorham%20Road%20Suite%20209%2C%20Scarborough%2C%20ME%2004074" target="_blank" rel="noopener">Open in Google Maps</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const posts = [
    { cat: 'Protect', cls: 'protect', title: 'Your cyber insurance claim can be denied — here\u2019s what they don\u2019t tell you', excerpt: 'That\u2019s the part nobody mentions when you sign up for coverage. The fine print can leave you paying out of pocket.', date: 'May 28, 2026', read: '6 min' },
    { cat: 'Support', cls: 'support', title: 'Why \u201cwe\u2019ll just call our guy\u201d is a risk most small businesses underestimate', excerpt: 'One person handling everything feels efficient \u2014 until they\u2019re out sick, on vacation, or gone. Here\u2019s the safer model.', date: 'May 14, 2026', read: '4 min' },
    { cat: 'Expand', cls: 'expand', title: 'Budgeting for IT in 2026: turning surprise bills into one predictable number', excerpt: 'Reactive IT spending is impossible to plan around. A simple shift in model makes next year\u2019s budget far easier.', date: 'Apr 30, 2026', read: '5 min' },
  ];
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="blog-head reveal">
          <div>
            <span className="eyebrow">From the blog</span>
            <h2>Plain-English tech tips</h2>
          </div>
          <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>View all articles <Icon3 name="arrow" /></a>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <article className="blog-card reveal" key={p.title}>
              <div className={`blog-img ${p.cls}`}>
                <NetLines />
                <span className="cat-pill">{p.cat}</span>
              </div>
              <div className="blog-body">
                <h4>{p.title}</h4>
                <p>{p.excerpt}</p>
              </div>
              <div className="blog-meta">
                <span>{p.date} · {p.read} read</span>
                <span className="rm">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ onCta }) {
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <span className="eyebrow">Let's talk</span>
            <h2>Ready to stop worrying about IT?</h2>
            <p>Tell us what's slowing you down. We'll give you a straight answer, a clear plan, and a number you can budget around — no jargon, no pressure.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg" onClick={onCta}><Icon3 name="calendar" /> Let's Talk</button>
            <a href="tel:8007046165" className="btn btn-ghost-light btn-lg"><Icon3 name="phone" /> 800-704-6165</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src={(window.__resources && window.__resources.eagleLogo) || "assets/eagle-logo.png"} className="footer-logo" alt="Eagle Network Solutions" />
          <p className="footer-tag">Comprehensive managed IT support for small-to-medium businesses and municipalities throughout Northern New England.</p>
          <img src={(window.__resources && window.__resources.bbbBadge) || "assets/bbb-badge.svg"} alt="BBB A+ Rated" className="footer-bbb" />
        </div>
        <div>
          <h6>New Hampshire</h6>
          <p>80 Palomino Lane<br />Suite 202<br />Bedford, NH 03110</p>
          <a href="tel:6037820700">603-782-0700</a>
        </div>
        <div>
          <h6>Maine</h6>
          <p>27 Gorham Road<br />Suite 209<br />Scarborough, ME 04074</p>
          <a href="tel:2076131144">207-613-1144</a>
        </div>
        <div>
          <h6>Navigation</h6>
          <ul>
            <li><a href="Solutions.html">Solutions</a></li>
            <li><a href="About.html#reviews">Customer Feedback</a></li>
            <li><a href="About.html#team">Our Team</a></li>
            <li><a href="Blog.html">Blog</a></li>
            <li><a href="Contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 Eagle Network Solutions · Eagle Network Solutions LLC · All Rights Reserved</span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

function ContactModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) { const t = setTimeout(() => setSent(false), 200); return () => clearTimeout(t); }
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close"><Icon3 name="x" /></button>
        {sent ? (
          <div className="modal-success">
            <div className="check"><Icon3 name="check" /></div>
            <h3>Thanks — we'll be in touch.</h3>
            <p>A member of the Eagle team will reach out within one business day to schedule your free assessment.</p>
          </div>
        ) : (
          <>
            <span className="eyebrow">Free network assessment</span>
            <h3>Let's find your gaps — at no cost.</h3>
            <p>Fill this out and we'll reach out to schedule. No pressure, no obligation.</p>
            <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>First name<input required placeholder="Jane" /></label>
              <label>Last name<input required placeholder="Doe" /></label>
              <label className="full">Business name<input required placeholder="Acme Co." /></label>
              <label>Email<input required type="email" placeholder="jane@acme.com" /></label>
              <label>Phone<input type="tel" placeholder="(603) 555-0142" /></label>
              <label className="full">What's slowing you down?<textarea rows="3" placeholder="Tell us a bit about your current setup or biggest IT headache…" /></label>
              <button type="submit" className="btn btn-primary full">Request my assessment <Icon3 name="arrow" /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { LocalSupport, BlogGrid, CtaBand, Footer, ContactModal });
