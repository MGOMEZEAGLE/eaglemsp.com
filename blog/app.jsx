/* Blogs and News page — featured hero, category filter, post grid, newsletter. */
const BIc = window.SIcon;

const CATS = ["All", "Tech Tips", "Client Services", "Service Alert", "Our Services", "Products"];
const TYPES = ["All", "Blog", "News"];
const TYPE_LABELS = { All: "Everything", Blog: "Blogs", News: "News" };
// Service Alert posts are time-sensitive notices; everything else reads as editorial.
const itemType = (p) => p.type || (/Service Alert/.test(p.category) ? "News" : "Blog");
const catList = (p) => p.category.split(",").map((c) => c.trim());
const primaryCat = (p) => catList(p)[0];
const catClass = (c) => "cat-" + (c || "placeholder").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");

const FEATURED = {
  category: "Client Services, Our Services",
  title: "A Quick Heads-Up From Your Neighbors at Eagle: Hardware and Microsoft Pricing Changes You Should Know About",
  excerpt: "",
  date: "Sep 4, 2026",
  read: "",
  link: "https://eaglemsp.com/blog-news/",
  img: "",
  imgIcon: "money",
};

/* Posts pulled from eaglemsp.com/blog-news/.
   Excerpts are written in Eagle's voice from each article's subject, not copied
   from the live site. Replace `read` values with real read times if you track them. */
const POSTS = [
  {
    category: "Client Services, Our Services",
    title: "A Quick Heads-Up From Your Neighbors at Eagle: Hardware and Microsoft Pricing Changes You Should Know About",
    excerpt: "",
    date: "Sep 4, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "money",
  },
  {
    category: "Client Services, Tech Tips",
    title: "AI in Your Business: What to Know, What to Watch and What to Do Next",
    excerpt: "",
    date: "Aug 24, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "gauge",
  },
  {
    category: "Tech Tips",
    title: "The Hacker Is Standing in Your Lobby",
    excerpt: "",
    date: "Jun 1, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "user",
  },
  {
    category: "Tech Tips",
    title: "Reasons Why Roughly 40% of Cyber Insurance Claims Get Denied",
    excerpt: "",
    date: "May 1, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "fileshield",
  },
  {
    category: "Tech Tips",
    title: "Most SMBs Don't Know Their IT Provider Is Advertising Them to Cybercriminals",
    excerpt: "",
    date: "Apr 13, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "eye",
  },
  {
    category: "Client Services, Our Services, Tech Tips",
    title: "10 Reasons Hackers Are Praying You Stay on Windows 10",
    excerpt: "",
    date: "Mar 31, 2026", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "cpu",
  },
  {
    category: "Client Services, Service Alert",
    title: "Why NOT to give a departing employee their company owned computer",
    excerpt: "",
    date: "Jan 27, 2025", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "users",
  },
  {
    category: "Client Services, Service Alert, Tech Tips",
    title: "Cisco Duo Warns Third-Party Data Breach Exposed SMS MFA Logs",
    excerpt: "",
    date: "Apr 18, 2024", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "lock",
  },
  {
    category: "Client Services, Service Alert, Tech Tips",
    title: "Are you an AT&T Customer? You should be aware of a recent breach in 2024",
    excerpt: "",
    date: "Apr 4, 2024", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "alert",
  },
  {
    category: "Client Services, Tech Tips",
    title: "The Shift from Antivirus Protection to EDR and XDR Services",
    excerpt: "",
    date: "Jul 12, 2023", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "shield",
  },
  {
    category: "Client Services, Service Alert, Tech Tips",
    title: "T-Mobile Struggles with Multiple Client Data Breaches",
    excerpt: "",
    date: "May 15, 2023", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "alert",
  },
  {
    category: "Client Services, Service Alert, Tech Tips",
    title: "Microsoft Outlook Vulnerability Notification",
    excerpt: "",
    date: "Mar 17, 2023", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "mail",
  },
  {
    category: "Client Services, Our Services, Tech Tips",
    title: "An important story on a current hacking and scam attempt and how it was resolved",
    excerpt: "",
    date: "Feb 7, 2023", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "video",
  },
  {
    category: "Client Services, Our Services, Products, Tech Tips",
    title: "Why Getting a Laptop from a Big Box Store Won't Save You in the Long Run",
    excerpt: "",
    date: "Jan 26, 2023", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "cpu",
  },
  {
    category: "Client Services, Our Services, Tech Tips",
    title: "MFA / 2FA Authenticator Security",
    excerpt: "",
    date: "Oct 23, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "lock",
  },
  {
    category: "Client Services, Our Services, Products",
    title: "With a Little Planning, Save Money on Hardware Costs",
    excerpt: "",
    date: "Jul 28, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "money",
  },
  {
    category: "Products, Tech Tips",
    title: "ENS Partners with Cisco Systems to Offer Umbrella Security System",
    excerpt: "",
    date: "Jul 27, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "firewall",
  },
  {
    category: "Client Services, Tech Tips",
    title: "Re-using Previous Employee Accounts",
    excerpt: "",
    date: "May 13, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "users",
  },
  {
    category: "Client Services, Tech Tips",
    title: "Complete Support Plans are advancing the level of support offered to our Clients",
    excerpt: "",
    date: "May 12, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "headset",
  },
  {
    category: "Tech Tips",
    title: "Where's my data?",
    excerpt: "",
    date: "May 11, 2022", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "cloud",
  },
  {
    category: "Tech Tips",
    title: "Malware Takes Down a Massachusetts Business for Three Weeks",
    excerpt: "",
    date: "Apr 19, 2021", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "alert",
  },
  {
    category: "Tech Tips",
    title: "How Working from Home Increases Risk to Your Organization",
    excerpt: "",
    date: "Feb 24, 2021", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "remote",
  },
  {
    category: "Tech Tips",
    title: "Phishing 101",
    excerpt: "",
    date: "Dec 18, 2020", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "mail",
  },
  {
    category: "Tech Tips",
    title: "Password Security",
    excerpt: "",
    date: "Nov 24, 2020", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "lock",
  },
  {
    category: "Products, Service Alert",
    title: "Microsoft Windows 10 Patch",
    excerpt: "",
    date: "Jan 15, 2020", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "refresh",
  },
  {
    category: "Products, Service Alert",
    title: "Is Your Video Security System Affected by the Windows 7 End-of-Life?",
    excerpt: "",
    date: "Jan 8, 2020", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "camera",
  },
  {
    category: "Products, Tech Tips",
    title: "Why Verkada is our choice for security camera solutions",
    excerpt: "",
    date: "Dec 5, 2019", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "camera",
  },
  {
    category: "Service Alert",
    title: "The Cloud strikes again….",
    excerpt: "",
    date: "Jul 16, 2019", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "cloud",
  },
  {
    category: "Service Alert, Tech Tips",
    title: "Beware of New Phishing Attempt Stating Your O365 Account Will Be Deleted!",
    excerpt: "",
    date: "May 31, 2019", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "mail",
  },
  {
    category: "Service Alert, Tech Tips",
    title: "Better Safe Than Sorry – Be Vigilant!",
    excerpt: "",
    date: "Oct 2, 2018", read: "",
    link: "https://eaglemsp.com/blog-news/",
    img: "", imgIcon: "shield",
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
              <span className={`type-tag t-${itemType(FEATURED).toLowerCase()}`}>{itemType(FEATURED)}</span>
              <span className="badge">{primaryCat(FEATURED)}</span>
              <span className="meta-dot"><BIc name="calendar" /> {FEATURED.date}</span>
              {FEATURED.read ? <span className="meta-dot"><BIc name="clock" /> {FEATURED.read}</span> : null}
            </div>
            <h2>{FEATURED.title}</h2>
            {FEATURED.excerpt ? <p className="excerpt">{FEATURED.excerpt}</p> : null}
            <div>
              <a className="btn-submit" style={{ width: 'auto', display: 'inline-flex' }} href={FEATURED.link} target="_blank" rel="noopener">
                Read the Full Post <BIc name="arrow" />
              </a>
            </div>
          </div>
          <div className="feat-media">
            <window.ImagePlaceholder label={FEATURED.img || FEATURED.title} icon={FEATURED.imgIcon} />
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
          <span className="pc-tags"><span className="type-tag t-blog">Blog</span><span className="badge soft">[ Category ]</span></span>
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
    <a className={`post-card ${catClass(primaryCat(p))}`} href={p.link} target="_blank" rel="noopener">
      <window.ImagePlaceholder label={p.img || p.title} icon={p.imgIcon} />
      <div className="pc-body">
        <span className="pc-tags"><span className={`type-tag t-${itemType(p).toLowerCase()}`}>{itemType(p)}</span><span className="badge" title={p.category}>{primaryCat(p)}</span></span>
        <h3>{p.title}</h3>
        {p.excerpt ? <p className="pc-excerpt">{p.excerpt}</p> : <p className="pc-excerpt pc-pending">Summary to be added.</p>}
        <div className="pc-foot">
          <div className="pc-meta"><span className="d">{p.date}</span>{p.read ? <span className="r">{p.read}</span> : null}</div>
          <span className="read-more">Read More <BIc name="arrow" /></span>
        </div>
      </div>
    </a>
  );
}

function Grid() {
  const [cat, setCat] = React.useState("All");
  const [type, setType] = React.useState("All");
  const shown = POSTS.filter((p) => {
    if (p.placeholder) return cat === "All" && type === "All";
    if (cat !== "All" && catList(p).indexOf(cat) === -1) return false;
    if (type !== "All" && itemType(p) !== type) return false;
    return true;
  });
  return (
    <>
      <section className="filter-bar-wrap">
        <div className="container filter-bar">
          <span className="fb-label">Show</span>
          <div className="filter-pills">
            {TYPES.map((t) => (
              <button key={t} className={`fpill${type === t ? ' on' : ''}`} onClick={() => setType(t)}>{TYPE_LABELS[t]}</button>
            ))}
          </div>
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
              : <p className="empty-note">Nothing here yet. Check back soon, or browse Everything.</p>}
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
            <h1>Blogs and News</h1>
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
