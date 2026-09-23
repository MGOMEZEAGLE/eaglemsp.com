/* Contact page — info column + lead-gen form + reach-us cards. */
const CIc = window.SIcon;
const C_CONTACT = "https://eaglemsp.com/contact";

/* Spam-resistant email reveal: the address never appears in the static HTML.
   It is assembled from parts in JS only after a real click. */
function EmailReveal() {
  const [shown, setShown] = React.useState(false);
  const parts = ["ens", "@", "eaglemsp", ".", "com"];
  const addr = parts.join("");
  if (!shown) {
    return (
      <button type="button" className="email-reveal" onClick={() => setShown(true)}>
        <CIc name="mail" /> Show email address
      </button>
    );
  }
  return <a className="email-shown" href={"mail" + "to:" + addr}>{addr}</a>;
}

function InfoColumn() {
  return (
    <div className="info-col reveal">
      <span className="eyebrow"><span className="tick" /> Contact us</span>
      <h1>Let's Talk.</h1>
      <p className="lead">Whether you're ready to get started or just exploring your options, we're happy to connect. No pressure, no jargon, just an honest conversation about how we can help your business.</p>

      <div className="quick-access">
        <a className="qa-btn" href="https://eaglemsp.myportallogin.com" target="_blank" rel="noopener"><CIc name="headset" /> Client Portal</a>
        <a className="qa-btn" href="https://cmd-eaglemsp.screenconnect.com" target="_blank" rel="noopener"><CIc name="screenshare" /> Join a Session</a>
        <a className="qa-btn" href="https://eaglemsp.com/service-ticket/" target="_blank" rel="noopener"><CIc name="mail" /> Submit a Ticket</a>
      </div>

      <div className="office-list">
        <div className="office-card">
          <div className="oc-ico"><CIc name="pin" /></div>
          <div>
            <div className="oc-name">New Hampshire Office</div>
            <div className="oc-line">80 Palomino Lane, Suite 202<br />Bedford, NH 03110</div>
            <a className="oc-phone" href="tel:6037820700"><CIc name="phone" /> 603-782-0700</a>
          </div>
        </div>
        <div className="office-card">
          <div className="oc-ico"><CIc name="pin" /></div>
          <div>
            <div className="oc-name">Maine Office</div>
            <div className="oc-line">27 Gorham Road, Suite 209<br />Scarborough, ME 04074</div>
            <a className="oc-phone" href="tel:2076131144"><CIc name="phone" /> 207-613-1144</a>
          </div>
        </div>
      </div>

      <div className="contact-meta">
        <div className="meta-row"><CIc name="phone" /> Toll-free: <a href="tel:8007046165">800-704-6165</a></div>
        <div className="meta-row"><CIc name="mail" /> Email: <EmailReveal /></div>
        <div className="meta-row"><CIc name="clock" /> Monday to Friday, 8am to 5pm EST</div>
      </div>

      <div className="social-row">
        <a className="soc" href="https://facebook.com/eaglenetsolutions" target="_blank" rel="noopener" aria-label="Eagle on Facebook"><CIc name="facebook" /></a>
        <span className="soc-label">Follow us on Facebook</span>
      </div>

      <div className="trust-badges">
        <span className="trust-badge"><CIc name="bbb" /> BBB A+ Since 2018</span>
        <span className="trust-badge"><CIc name="star" /> 97% CSAT</span>
        <span className="trust-badge"><CIc name="award" /> 20+ Years in Business</span>
      </div>
    </div>
  );
}

const COMPANY_SIZES = ["1 to 10 employees", "11 to 50 employees", "51 to 100 employees", "101 to 250 employees", "250+ employees"];
const INQUIRIES = ["I'm looking for managed IT support", "I need co-managed IT alongside my internal team", "We're fully remote and need IT support", "I'm interested in AI adoption with guardrails", "I need help with cybersecurity", "I want help with cyber insurance readiness", "I'm interested in hardware or physical security", "I need strategic IT guidance", "I'm an existing client with a question", "I'm not sure yet, I just want to talk"];
const INTERESTS = ["Managed IT Support", "Co-Managed Support", "Remote-Only IT", "Secure AI", "Cyber Insurance Readiness", "Cybersecurity", "Hardware & Physical Security", "Strategic IT", "Not sure yet, I just want to talk"];
const SOURCES = ["Google search", "Referral from someone I know", "Social media", "I've known Eagle for a while", "Other"];

function Field({ label, required, optional, children, full }) {
  return (
    <div className={`field${full ? ' full' : ''}`}>
      <label>{label}{required && <span className="req">*</span>}{optional && <span className="opt">(optional)</span>}</label>
      {children}
    </div>
  );
}

function Select({ value, onChange, placeholder, options, required }) {
  return (
    <select className={value ? '' : 'placeholder-selected'} value={value} required={required} onChange={(e) => onChange(e.target.value)}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function LeadForm() {
  const [f, setF] = React.useState({ name: "", company: "", size: "", inquiry: "", role: "", phone: "", email: "", source: "", notes: "", marketing: false });
  const [interests, setInterests] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const set = (k) => (v) => setF((s) => ({ ...s, [k]: v }));
  const toggleInterest = (it) => setInterests((s) => s.includes(it) ? s.filter((x) => x !== it) : [...s, it]);

  if (sent) {
    return (
      <div className="form-card reveal">
        <div className="form-success">
          <div className="fs-ico"><CIc name="check" /></div>
          <h2>Thank you, we've got it.</h2>
          <p>One of our team members will reach out within one business day. If it's urgent, call us toll-free at 800-704-6165.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card reveal">
      <div className="form-head">
        <h2>Tell Us About Your Organization.</h2>
        <p>Fill out the form below and one of our team members will reach out within one business day.</p>
      </div>
      <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <Field label="Your Name" required>
          <input type="text" placeholder="First and last name" required value={f.name} onChange={(e) => set('name')(e.target.value)} />
        </Field>
        <Field label="Organization Name" required>
          <input type="text" placeholder="Your organization's name" required value={f.company} onChange={(e) => set('company')(e.target.value)} />
        </Field>
        <Field label="Organization Size" required>
          <Select value={f.size} onChange={set('size')} placeholder="Select your organization size" options={COMPANY_SIZES} required />
        </Field>
        <Field label="What is your primary need?" required>
          <Select value={f.inquiry} onChange={set('inquiry')} placeholder="The main reason you're reaching out" options={INQUIRIES} required />
        </Field>
        <Field label="Your Role" required>
          <input type="text" placeholder="e.g. Owner, IT Manager, Office Manager" required value={f.role} onChange={(e) => set('role')(e.target.value)} />
        </Field>
        <Field label="Phone Number" required>
          <input type="tel" placeholder="Best number to reach you" required value={f.phone} onChange={(e) => set('phone')(e.target.value)} />
        </Field>
        <Field label="Email Address" required full>
          <input type="email" placeholder="Your work email" required value={f.email} onChange={(e) => set('email')(e.target.value)} />
        </Field>

        <Field label="Anything else on your radar? (select all that apply)" optional full>
          <div className="pill-group">
            {INTERESTS.map((it) => (
              <button type="button" key={it} className={`pill${interests.includes(it) ? ' on' : ''}`} onClick={() => toggleInterest(it)}>
                <CIc name="check" className="pill-check" /> {it}
              </button>
            ))}
          </div>
        </Field>

        <Field label="How did you find us?" optional full>
          <Select value={f.source} onChange={set('source')} placeholder="Select an option" options={SOURCES} />
        </Field>

        <Field label="Additional Notes" optional full>
          <textarea placeholder="Tell us a little about your current IT setup or what's prompting you to reach out. Anything you share helps us come prepared." value={f.notes} onChange={(e) => set('notes')(e.target.value)} />
        </Field>

        <label className="check-field">
          <input type="checkbox" checked={f.marketing} onChange={(e) => set('marketing')(e.target.checked)} />
          <span className="check-box"><CIc name="check" /></span>
          <span className="check-label">Yes, I'd like to receive cybersecurity tips, news, and updates from Eagle Network Solutions. You can unsubscribe at any time.</span>
        </label>

        <div className="submit-row">
          <button type="submit" className="btn-submit">Send My Info to Eagle <CIc name="arrow" /></button>
        </div>
        <p className="privacy-line"><CIc name="shield" /> We respect your privacy. Your information will never be sold or shared with third parties.</p>
      </form>
    </div>
  );
}

function ReachUs() {
  return (
    <section className="reach-section">
      <div className="container">
        <div className="sec-head center reveal">
          <span className="eyebrow"><span className="tick" /> More options</span>
          <h2>Other Ways to Reach Us</h2>
        </div>
        <div className="reach-grid">
          <article className="reach-card reveal">
            <div className="reach-ico"><CIc name="headset" /></div>
            <h3>Already an Eagle client?</h3>
            <p>Access your client portal or submit a support ticket directly.</p>
            <div className="reach-links">
              <a className="reach-link" href="https://eaglemsp.myportallogin.com" target="_blank" rel="noopener">Client Portal <CIc name="arrow" /></a>
              <a className="reach-link" href="https://eaglemsp.com/service-ticket/" target="_blank" rel="noopener">Submit a Ticket <CIc name="arrow" /></a>
            </div>
          </article>
          <article className="reach-card reveal" style={{ transitionDelay: '.06s' }}>
            <div className="reach-ico"><CIc name="screenshare" /></div>
            <h3>Need to start a remote session?</h3>
            <p>If a technician has asked you to join a session, click below to get started.</p>
            <div className="reach-links">
              <a className="reach-link" href="https://cmd-eaglemsp.screenconnect.com" target="_blank" rel="noopener">Join a Session <CIc name="arrow" /></a>
            </div>
          </article>
          <article className="reach-card reveal" style={{ transitionDelay: '.12s' }}>
            <div className="reach-ico"><CIc name="mail" /></div>
            <h3>Just have a quick question?</h3>
            <p>Reach us by phone during business hours and a real person will pick up.</p>
            <a className="reach-phone" href="tel:8007046165"><CIc name="phone" /> 800-704-6165</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactApp() {
  React.useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')];
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.96) el.classList.add('in'); });
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      els.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
    }
    const safety = setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')), 1300);
    return () => { if (io) io.disconnect(); clearTimeout(safety); };
  }, []);
  return (
    <>
      <main>
        <div className="contact-wrap">
          <div className="container contact-grid">
            <InfoColumn />
            <LeadForm />
          </div>
        </div>
        <ReachUs />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("contact-root")).render(<ContactApp />);
