/* Blog & News page — featured hero, category filter, post grid, newsletter. */
const BIc = window.SIcon;

const CATS = ["All", "Cybersecurity", "IT Tips", "Company News", "Industry News"];
const catClass = (c) => "cat-" + (c || "placeholder").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");

const FEATURED = {
  category: "Cybersecurity",
  title: "The Hacker Is Standing in Your Lobby",
  excerpt: "The Silent Ransom Group doesn't need to break through your firewall. They show up in person, dressed as IT vendors, confident, and convincing. This is what their attacks look like, and what your team needs to know to stop them.",
  date: "June 1, 2026",
  read: "5 min read",
  link: "https://eaglemsp.com/blog-silent-ransom-group-in-person-attacks/",
  img: "Blog hero image: office lobby or security themed",
  imgIcon: "building",
};

const POSTS = [
  {
    category: "Cybersecurity",
    title: "The Hacker Is Standing in Your Lobby",
    excerpt: "The Silent Ransom Group doesn't need to break your defenses. They walk right through your front door.",
    date: "June 1, 2026", read: "5 min read",
    link: "https://eaglemsp.com/blog-silent-ransom-group-in-person-attacks/",
    img: "Blog image: person in lobby or impersonation themed", imgIcon: "user",
  },
  {
    category: "Cybersecurity",
    title: "Reasons Why Roughly 40% of Cyber Insurance Claims Get Denied",
    excerpt: "Your policy won't save you if you didn't meet the requirements you agreed to. Here's what most businesses miss.",
    date: "May 1, 2026", read: "6 min read",
    link: "https://eaglemsp.com/blog-cyber-insurance-claim-denied/",
    img: "Blog image: insurance document or denied stamp", imgIcon: "fileshield",
  },
];

function Featured() {
  return (
    <section className="feat-wrap">
      <div className="container">
        <div className={`feat reveal ${catClass(FEATURED.category)}`}>
          <div className="feat-body">
            <span className="feat-label"><span className="pulse" /> Latest Post</span>
            <div className="feat-meta">
              <span className="badge">{FEATURED.category}</span>
              <span className="meta-dot"><BIc name="calendar" /> {FEATURED.date}</span>
              <span className="meta-dot"><BIc name="clock" /> {FEATURED.read}</span>
            </div>
            <h2>{FEATURED.title}</h2>
            <p className="excerpt">{FEATURED.excerpt}</p>
            <div>
              <a className="btn-submit" style={{ width: 'auto', display: 'inline-flex' }} href={FEATURED.link} target="_blank" rel="noopener">
                Read the Full Post <BIc name="arrow" />
              </a>
            </div>
          </div>
          <div className="feat-media">
            <window.ImagePlaceholder label={FEATURED.img} icon={FEATURED.imgIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({ p }) {
  if (p.placeholder) {
    return (
      <div className="post-card is-placeholder cat-placeholder">
        <window.ImagePlaceholder label="Blog image placeholder" icon="image" />
        <div className="pc-body">
          <span className="badge soft">[ Category ]</span>
          <h3>[ Post title placeholder ]</h3>
          <p className="pc-excerpt">[ 1 to 2 sentence excerpt placeholder ]</p>
          <div className="pc-foot">
            <div className="pc-meta"><span className="d">[ Date ]</span><span className="r">[ Read time ]</span></div>
            <span className="read-more">Read More <BIc name="arrow" /></span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a className={`post-card ${catClass(p.category)}`} href={p.link} target="_blank" rel="noopener">
      <window.ImagePlaceholder label={p.img} icon={p.imgIcon} />
      <div className="pc-body">
        <span className="badge">{p.category}</span>
        <h3>{p.title}</h3>
        <p className="pc-excerpt">{p.excerpt}</p>
        <div className="pc-foot">
          <div className="pc-meta"><span className="d">{p.date}</span><span className="r">{p.read}</span></div>
          <span className="read-more">Read More <BIc name="arrow" /></span>
        </div>
      </div>
    </a>
  );
}

function Grid() {
  const [cat, setCat] = React.useState("All");
  const shown = POSTS.filter((p) => {
    if (cat === "All") return true;
    return !p.placeholder && p.category === cat;
  });
  return (
    <>
      <section className="filter-bar-wrap">
        <div className="container filter-bar">
          <span className="fb-label">Browse by topic</span>
          <div className="filter-pills">
            {CATS.map((c) => (
              <button key={c} className={`fpill${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-grid-wrap">
        <div className="container">
          <div className="blog-grid">
            {shown.length ? shown.map((p, i) => <PostCard key={i} p={p} />)
              : <p className="empty-note">No posts in this category yet. Check back soon, or browse All.</p>}
          </div>
        </div>
      </section>
    </>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <h2>Stay One Step Ahead.</h2>
        <p>Get cybersecurity tips, IT news, and Eagle updates delivered straight to your inbox. No spam, just the stuff that actually matters to your business.</p>
        {done ? (
          <div className="nl-success"><BIc name="check" /> You're subscribed. Watch your inbox.</div>
        ) : (
          <>
            <form className="nl-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <input type="email" required placeholder="Your work email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className="nl-btn">Subscribe</button>
            </form>
            <p className="nl-privacy">We respect your privacy. You can unsubscribe at any time.</p>
          </>
        )}
      </div>
    </section>
  );
}

function BlogApp() {
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
        <section className="blog-intro">
          <div className="container">
            <span className="eyebrow"><span className="tick" /> Insights from Eagle</span>
            <h1>Blog &amp; News</h1>
            <p>Insights, updates, and real stories from the frontlines of IT and cybersecurity in New England.</p>
          </div>
        </section>
        <Featured />
        <Grid />
        <Newsletter />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("blog-root")).render(<BlogApp />);
