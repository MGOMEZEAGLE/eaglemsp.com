/* Solutions — app shell: tabs, hash routing, footer. */
const TABS = [
  { id: "managed", label: "Managed IT Support", Comp: () => <window.ManagedPage /> },
  { id: "cybersecurity", label: "Cybersecurity", Comp: () => <window.CyberPage /> },
  { id: "hardware", label: "Hardware & Physical Security", Comp: () => <window.HardwarePage /> },
  { id: "strategic", label: "Strategic IT", Comp: () => <window.StrategicPage /> },
];
const NavIcon = window.SIcon;

function readHash() {
  const h = (window.location.hash || "").replace("#", "");
  return TABS.some((t) => t.id === h) ? h : "managed";
}

function SolutionsApp() {
  const [tab, setTab] = React.useState(readHash());

  React.useEffect(() => {
    const onHash = () => setTab(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => {
    if (id === tab) return;
    window.location.hash = id;
    setTab(id);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  window.useReveal(tab);

  return (
    <>
      <div className="subtabs">
        <div className="container subtabs-inner">
          {TABS.map((t) => (
            <button key={t.id} className={`subtab${tab === t.id ? " active" : ""}`} onClick={() => go(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main>
        {TABS.map((t) => (
          <div key={t.id} className={`page${tab === t.id ? " active" : ""}`}>
            {tab === t.id && <t.Comp />}
          </div>
        ))}
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("sol-root")).render(<SolutionsApp />);
