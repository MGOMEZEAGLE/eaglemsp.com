/* About — app shell: tabs, hash routing, footer. */
const ATABS = [
  { id: "who", label: "Who We Are", Comp: () => <window.WhoWeArePage /> },
  { id: "team", label: "Our Team", Comp: () => <window.TeamPage /> },
  { id: "reviews", label: "Customer Reviews", Comp: () => <window.ReviewsPage /> },
];
const AppIc = window.SIcon;

function readAboutHash() {
  const h = (window.location.hash || "").replace("#", "");
  return ATABS.some((t) => t.id === h) ? h : "who";
}

function AboutApp() {
  const [tab, setTab] = React.useState(readAboutHash());

  React.useEffect(() => {
    const onHash = () => setTab(readAboutHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => {
    if (id === tab) return;
    window.location.hash = id;
    setTab(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  window.useReveal(tab);

  return (
    <>
      <div className="subtabs">
        <div className="container subtabs-inner">
          {ATABS.map((t) => (
            <button key={t.id} className={`subtab${tab === t.id ? " active" : ""}`} onClick={() => go(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main>
        {ATABS.map((t) => (
          <div key={t.id} className={`page${tab === t.id ? " active" : ""}`}>
            {tab === t.id && <t.Comp />}
          </div>
        ))}
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("about-root")).render(<AboutApp />);
