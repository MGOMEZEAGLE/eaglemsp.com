/* Solutions — the four pages. */
const OFFICES = [
  { city: "Bedford, NH", addr: "Northern New England" },
  { city: "Scarborough, ME", addr: "Greater Portland" },
];

function ManagedPage() {
  const cards = [
    { icon: "headset", title: "Remote Help Desk", body: "When something breaks, your team shouldn't have to wait. Our help desk is staffed by real technicians who respond fast, communicate clearly, and actually fix the problem." },
    { icon: "pin", title: "On-Site Support", body: "Some problems need hands on keyboards. Our local engineers are based in New Hampshire and Maine, close enough to be there when you need them." },
    { icon: "refresh", title: "Automated Patching & Maintenance", body: "Outdated software is one of the leading causes of security breaches. We handle patches and maintenance automatically, behind the scenes, with zero disruption to your workday." },
    { icon: "network", title: "Network Design & Administration", body: "A reliable network is the backbone of your business. We design, build, and manage infrastructure that's secure, scalable, and built to grow with you." },
    { icon: "cloud", title: "Cloud Solutions", body: "Microsoft 365, cloud backups, hybrid environments. We move you to the cloud on your timeline, with a plan that fits your team and your budget." },
    { icon: "box", title: "Deployment & Onboarding", body: "New hire? New device? We handle hardware setup and user provisioning so your team is productive from day one." },
  ];
  return (
    <>
      <window.Hero
        eyebrow="Managed IT Support"
        title={<>Your IT, handled.<br /><span className="hl">So you can focus on your business.</span></>}
        sub="From day-to-day help desk requests to full network management, Eagle's team becomes your dedicated IT department, without the overhead of building one in-house."
        cta="Get a Free Assessment"
        heroLabel="Hero image: technician supporting a client"
        heroIcon="headset"
        trust={["20+ years in New England", "Offices in NH and ME", "Real technicians, fast response"]}
      />
      <window.Cards eyebrow="What we handle for you" title="A full IT department, without the headcount." items={cards} cols={3} numbered />
      <window.FeatureSplit
        eyebrow="Why local matters"
        title={<>We're not a national call center. We're your neighbors.</>}
        paras={[
          "Our engineers live and work in the same communities as your business. That means faster on-site response times, easier communication, and a team that genuinely understands the region.",
          "With offices in Bedford, NH and Scarborough, ME, we're positioned to support businesses across Northern New England, and we take that responsibility seriously.",
        ]}
        offices={OFFICES}
        mediaLabel="Technician on-site photo"
        mediaIcon="pin"
        reverse
      />
      <window.Checklist
        eyebrow="Is it time to call us?"
        title="You might be ready for managed IT support if:"
        items={[
          "Hiring and maintaining an in-house IT team is too costly",
          "You've outgrown your current setup and downtime is a real risk",
          "Your team spends too much time troubleshooting instead of working",
          "You need someone you trust to keep things running and keep you protected",
        ]}
        mediaLabel="Business team at work photo"
        mediaIcon="users"
      />
      <window.CtaBar
        title="Not sure what level of support you need?"
        sub="We'll assess your environment and give you an honest recommendation. No pressure, no jargon."
        cta="Get a Free Assessment"
      />
    </>
  );
}

function CyberPage() {
  const cards = [
    { icon: "eye", title: "Dark Web Monitoring", body: "Your credentials could already be circulating on the dark web without your knowledge. We monitor continuously and alert you the moment your data shows up, before it becomes a breach." },
    { icon: "shield", title: "Next-Generation Antivirus", body: "Traditional antivirus catches known threats. Modern attacks don't look like anything seen before. We deploy behavior-based tools that detect and stop threats before they spread." },
    { icon: "grad", title: "Security Awareness Training", body: "Your team is your first line of defense, and your biggest vulnerability. We run simulated phishing campaigns and ongoing training to build a security-first culture." },
    { icon: "clipboard", title: "Network Security Assessments", body: "You can't protect what you don't understand. We evaluate your environment, identify gaps and risks, and give you a clear roadmap to stronger protection." },
    { icon: "radar", title: "Advanced Security (SIEM, SOC, MDR)", body: "For organizations that need 24/7 threat detection and response, we deploy enterprise-level security tools, without the enterprise price tag or a full security team." },
    { icon: "fileshield", title: "Cyber Insurance Readiness", body: "Getting hit with an attack is bad enough. Getting your claim denied is worse. We help you meet the security requirements your insurer actually looks for so your policy pays out." },
  ];
  return (
    <>
      <window.Hero
        eyebrow="Cybersecurity"
        title={<>SMBs are a target.<br /><span className="hl">We make sure you're not an easy one.</span></>}
        sub="Security is a mindset, not a service. Ransomware, phishing, and business email compromise are aimed at businesses just like yours, so we build protection into how your whole organization thinks and operates, with enterprise-grade tools that fit your budget and your team."
        cta="Get a Security Assessment"
        heroLabel="Hero image: security operations dashboard"
        heroIcon="shield"
        trust={["Built on CIS controls", "Validated by SeedPod Cyber", "24/7 monitoring available"]}
      />
      <window.StatStrip stats={[
        { n: "60%", l: "of small businesses close within 6 months of a cyberattack" },
        { n: "43%", l: "of cyberattacks target small businesses" },
        { n: "97%", l: "Eagle client satisfaction score", hl: true },
      ]} />
      <window.Callout
        solo
        eyebrow="Our approach"
        title="Security is a mindset, not a service."
        body="A tool you buy once does not keep you safe. We assume risk exists and stay vigilant at all times, building security into daily habits, decisions, and culture across your organization. We bring a first responder mindset to every alert, moving fast to contain and resolve. That mindset, paired with the right layered tools, is what actually keeps you protected."
      />
      <window.Cards eyebrow="How we protect you" title="Layered protection, sized for your business." items={cards} cols={3} numbered />
      <window.Callout
        eyebrow="Underwriter-vetted protection"
        title="We don't just protect you from attacks. We protect your coverage too."
        body="Eagle's cybersecurity approach is built around CIS controls and validated by SeedPod Cyber, the same standards cyber insurers rely on when evaluating your policy. That means when something happens, you're covered on both fronts."
        badge={{ icon: "fileshield", text: "Validated by SeedPod Cyber", imgLabel: "Security dashboard photo", imgIcon: "radar" }}
      />
      <window.FeatureSplit
        eyebrow="Real threats, right here in New England"
        title="These aren't distant headlines."
        paras={[
          "We hear real stories every day. Ransomware hitting a local municipality. A business email compromise draining a company's account. A phishing attack that took down a week of operations.",
          "They're happening to organizations in your backyard, and the bad actors are not slowing down. The question isn't whether you'll be targeted. It's whether you'll be ready.",
        ]}
        mediaLabel="Northern New England operations photo"
        mediaIcon="map"
        reverse
      />
      <window.CtaBar
        title="Do you know how protected your business really is?"
        sub="We'll assess your current state and give you an honest picture. No sales pitch, just facts."
        cta="Request a Security Assessment"
      />
    </>
  );
}

function HardwarePage() {
  const products = [
    { icon: "camera", title: "Enterprise-Grade Camera Systems", imgLabel: "Security camera at a business entrance", imgIcon: "camera", body: "Cloud-managed enterprise-grade camera systems with remote access, smart motion alerts, and footage you can pull up from anywhere. No on-site server required. These platforms run on manufacturer licenses that you purchase to keep them operating and supported, and we help you choose the right solution for your space." },
    { icon: "video", title: "Smart Video Conferencing", imgLabel: "Conference room video system", imgIcon: "video", body: "Smart conferencing systems that automatically focus on whoever is speaking, making hybrid meetings feel natural for everyone in the room and everyone dialing in. Perfect for teams split across Bedford, Scarborough, and beyond." },
    { icon: "firewall", title: "Network & Security Infrastructure", imgLabel: "Server rack and network gear", imgIcon: "server", body: "Firewalls, switching, and wireless access points sized and configured for your space. The backbone that keeps everything connected, segmented, and secure." },
    { icon: "cpu", title: "Hardware Procurement", imgLabel: "New laptops staged for deployment", imgIcon: "server", body: "We source servers, firewalls, switches, wireless access points, end-user computers, and peripherals at the right price, then handle deployment so your team is never waiting on equipment." },
  ];
  return (
    <>
      <window.Hero
        eyebrow="Hardware & Physical Security"
        title={<>The right tools for your space,<br /><span className="hl">installed and supported by us.</span></>}
        sub="From camera systems to video conferencing to network gear, Eagle sources, deploys, and supports the physical technology your business depends on, so you never have to chase down three different vendors when something goes wrong."
        cta="Talk to Our Team"
        heroLabel="Hero image: installed cameras and conference room"
        heroIcon="camera"
        trust={["Enterprise camera and conferencing systems", "Professional installation", "One vendor, full accountability"]}
      />
      <window.ProductCards eyebrow="Solutions we offer" title="Hardware that works, backed by a team that supports it." items={products} />
      <window.Checklist
        eyebrow="How we work"
        title="One call. One team. No runaround."
        intro="We resell and install the camera solution, and you own it. These systems run on manufacturer licenses that you purchase so the cameras keep operating and stay supported. We do not charge a monthly fee to manage your cameras. Instead, as those licenses come due, we quote you for the renewals you need to keep the system running."
        items={[
          "We resell and install the camera solution, you own it",
          "Cameras run on manufacturer licenses that you purchase",
          "No monthly service fee for managing your cameras",
          "We quote you for license renewals as they come due",
          "Professional installation at your NH or ME location",
          "Support from the same team that installed it",
        ]}
        mediaLabel="A conference room and camera install"
        mediaIcon="building"
        reverse
      />
      <window.CtaBar
        title="Ready to upgrade your physical security or conferencing setup?"
        sub="We'll do a site assessment and recommend the right fit for your space and budget."
        cta="Get Started"
      />
    </>
  );
}

function StrategicPage() {
  const cards = [
    { icon: "compass", title: "vCIO / IT Planning & Guidance", body: "Get seasoned CIO-level thinking without the full-time executive salary. We help you build technology roadmaps, plan capital investments, and make infrastructure decisions that align with where your business is headed, not just where it is today." },
    { icon: "users", title: "Co-Managed IT", body: "Already have an internal IT person or team? We fill the gaps. Whether you need specialized support, backup coverage, or access to tools your internal team doesn't have, we work alongside you, at a fraction of the cost of another full-time hire." },
    { icon: "kanban", title: "Project Management", body: "Office relocation, server migration, major software rollout. IT projects are high-stakes and easy to get wrong. We plan and execute from start to finish, keeping timelines tight and your operations running without disruption." },
    { icon: "map", title: "Site Surveys", body: "Before you build, expand, or relocate, we assess your physical and network environment to make sure your infrastructure plan is solid from the ground up. No surprises after move-in day." },
  ];
  const list = [
    "Technology roadmap aligned to your business goals",
    "Budget planning for IT capital expenses",
    "Vendor management and procurement guidance",
    "Disaster recovery and business continuity planning",
    "Compliance and cyber insurance alignment",
    "Support for mergers, acquisitions, and major growth",
  ];
  const Ic = window.SIcon;
  return (
    <>
      <window.Hero
        eyebrow="Strategic IT"
        title={<>IT guidance that thinks ahead,<br /><span className="hl">not just about today.</span></>}
        sub="Growing businesses need more than a break-fix IT vendor. Eagle serves as your trusted technology advisor, helping you plan smarter, invest wisely, and build infrastructure that keeps pace with your goals."
        cta="Talk to a Strategist"
        heroLabel="Hero image: strategy planning session"
        heroIcon="compass"
        trust={["Founded by Kaleb Jacob", "25+ years of experience", "CIO-level guidance"]}
      />
      <window.Cards eyebrow="What we offer" title="A partner for the decisions that shape your next five years." items={cards} cols={2} />
      <window.FeatureSplit
        eyebrow="25+ years of knowing what works"
        title="Experience you can actually lean on."
        paras={[
          "Eagle was founded by Kaleb Jacob, who has spent over 25 years helping New England businesses navigate technology decisions at every stage of growth.",
          "The strategic guidance we offer isn't theoretical. It's built on real-world experience, with real organizations, real budgets, and real consequences when things go wrong.",
        ]}
        badge={{ icon: "award", text: "Founded by Kaleb Jacob" }}
        mediaLabel="Founder photo: Kaleb Jacob"
        mediaIcon="users"
        reverse
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="glass reveal" style={{ padding: '46px' }}>
            <window.Eyebrow>What this looks like in practice</window.Eyebrow>
            <h2 style={{ fontFamily: 'var(--display)', color: 'var(--txt-1)', fontSize: 'clamp(24px,2.6vw,32px)', fontWeight: 600, letterSpacing: '-0.02em', margin: '16px 0 28px' }}>
              A roadmap for every part of your technology.
            </h2>
            <div className="checklist">
              {list.map((it) => (
                <div className="check-item" key={it}>
                  <span className="ck"><Ic name="check" /></span>
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <window.CtaBar
        title="Not sure where your IT strategy should go next?"
        sub="Let's talk through where you are and where you want to be. No commitment required."
        cta="Schedule a Conversation"
      />
    </>
  );
}

Object.assign(window, { ManagedPage, CyberPage, HardwarePage, StrategicPage });
