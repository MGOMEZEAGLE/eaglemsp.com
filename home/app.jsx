/* Eagle Homepage — App shell + Tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2563a8",
  "displayFont": "Raleway",
  "heroLayout": "split",
  "density": "comfortable"
}/*EDITMODE-END*/;

const FONT_STACKS = {
  "Raleway": '"Raleway", "Inter", system-ui, sans-serif',
  "Plus Jakarta Sans": '"Plus Jakarta Sans", system-ui, sans-serif',
  "Georgia": 'Georgia, "Times New Roman", serif',
  "System": 'system-ui, -apple-system, "Segoe UI", sans-serif',
};

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [modal, setModal] = React.useState(false);
  window.useReveal();

  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', t.accent);
    r.setProperty('--display-font', FONT_STACKS[t.displayFont] || FONT_STACKS['Raleway']);
    r.setProperty('--sec-pad', t.density === 'compact' ? '80px' : '112px');
  }, [t.accent, t.displayFont, t.density]);

  const openModal = () => setModal(true);

  return (
    <>
      <window.Hero onCta={openModal} layout={t.heroLayout} />
      <window.TrustRibbon />
      <window.WhoWeAre />
      <window.Smileback />
      <window.Pillars />
      <window.WhyEagle onCta={openModal} />
      <window.SocialProof />
      <window.LocalSupport />
      <window.BlogGrid />
      <window.CtaBand onCta={openModal} />
      <window.ContactModal open={modal} onClose={() => setModal(false)} />

      <window.TweaksPanel>
        <window.TweakSection label="Brand accent" />
        <window.TweakColor label="Accent color" value={t.accent}
          options={["#2563a8", "#1c3c70", "#2f8f5e", "#3a7bc8"]}
          onChange={(v) => setTweak('accent', v)} />
        <window.TweakSection label="Typography" />
        <window.TweakSelect label="Heading font" value={t.displayFont}
          options={["Raleway", "Plus Jakarta Sans", "Georgia", "System"]}
          onChange={(v) => setTweak('displayFont', v)} />
        <window.TweakSection label="Layout" />
        <window.TweakRadio label="Hero" value={t.heroLayout}
          options={["split", "centered"]}
          onChange={(v) => setTweak('heroLayout', v)} />
        <window.TweakRadio label="Density" value={t.density}
          options={["comfortable", "compact"]}
          onChange={(v) => setTweak('density', v)} />
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
