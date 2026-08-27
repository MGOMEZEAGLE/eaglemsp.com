/* About — three tab pages: Who We Are, Our Team, Customer Reviews. */
const ABOUT_CONTACT = window.CONTACT;
const OFFICES_FULL = [
  { name: "New Hampshire Office", addr: "80 Palomino Lane, Suite 202", city: "Bedford, NH 03110", phone: "603-782-0700" },
  { name: "Maine Office", addr: "27 Gorham Road, Suite 209", city: "Scarborough, ME 04074", phone: "207-613-1144" },
];

function WhoWeArePage() {
  const pillars = [
    { icon: "headset", title: "Support", body: "Confidently knowing your systems are under our watchful care, so your team can focus on the work that actually moves your business forward. Remote help desk, on-site support, patching, deployment, network administration, and cloud." },
    { icon: "shield", title: "Protect", body: "Your network and vital infrastructure, protected by solutions and support that meet the standards insurers and regulators actually look for. Next-gen antivirus, dark web monitoring, security awareness training, and SIEM, SOC and MDR." },
    { icon: "trending", title: "Expand", body: "Affordable solutions and guidance to support your long-term objectives, from your next office move to your five-year technology roadmap. IT planning and guidance (vCIO), project management, hardware procurement, and site surveys." },
  ];
  const why = [
    { icon: "pin", title: "Locally owned and operated", body: "We have two offices in Northern New England and a team positioned throughout the region. When you need someone on-site, we're not flying someone in from out of state." },
    { icon: "award", title: "20+ years in business", body: "We've been doing this long enough to have seen every kind of IT problem, and built the processes to handle them before they become your emergency." },
    { icon: "fileshield", title: "Underwriter-vetted cybersecurity", body: "Our security approach is built around CIS controls and validated by SeedPod Cyber, the same standards cyber insurers rely on when evaluating your coverage." },
    { icon: "heart", title: "Founder-led, team-driven", body: "Eagle stays independent and locally owned, with no outside capital and no roll-up. Our leadership team and engineers are invested in the relationships that make Eagle what it is." },
  ];
  const values = [
    { icon: "star", title: "Customer Experience Is Everything", body: "We don't just serve our customers, we represent them, even when they're not in the room. Every decision is filtered through their experience, their outcomes, and their long-term trust in us. We choose loyalty over convenience and lasting partnership over short-term wins." },
    { icon: "handshake", title: "Respect Is Non-Negotiable", body: "We treat teammates and clients with professionalism, honesty, and accountability, especially when conversations get hard. Respect runs both ways. We advocate for our team as fiercely as we advocate for our clients." },
    { icon: "shield", title: "Security Is a Mindset, Not a Service", body: "Security isn't a checkbox. It's how we think, act, and operate at all times. We assume risk exists and stay vigilant, even when no one is watching, because when security fails, everything fails." },
    { icon: "bolt", title: "First Responder Mindset", body: "Our founder spent years in a first-responder environment, and that mindset shapes how we operate. When something goes wrong, we don't wait, we move. We stay calm under pressure, take ownership, and bring leadership to moments that feel chaotic for our clients." },
    { icon: "heart", title: "People First. Always.", body: "We love technology, but we serve people. AI, innovation, and automation matter, but never at the expense of human connection. Trust isn't built by systems. It's built by people." },
  ];
  return (
    <>
      <window.Hero
        eyebrow="Who we are"
        title={<>Family-owned. Locally rooted.<br /><span className="hl">Built for New England businesses.</span></>}
        sub="Eagle Network Solutions has been providing managed IT and cybersecurity services to small and medium businesses and municipalities across New Hampshire and Maine for over 20 years. We're not a national franchise or a faceless help desk. We're your neighbors, and we take that personally."
        cta="Get in Touch"
        heroLabel="Hero image: the Eagle team or NH/ME office"
        heroIcon="building"
        trust={["Family-owned and founder-led", "Offices in Bedford, NH and Scarborough, ME", "Serving Northern New England"]}
      />
      <window.FeatureSplit
        eyebrow="Our story"
        title="Built from the ground up. Still growing."
        paras={[
          "Eagle was founded in 1999 on a simple commitment: give New England businesses access to enterprise-grade IT support. That commitment has grown into a trusted regional MSP with two offices, a dedicated team of engineers and specialists, and a client satisfaction score that speaks for itself.",
          "We're family-owned and independently operated, which means the people making decisions about your IT are the same people who answer when something goes wrong. No layers. No runaround. Just a team that genuinely cares about your business.",
        ]}
        badge={{ icon: "award", text: "Independently owned since 1999" }}
        mediaLabel="The Eagle team at work"
        mediaIcon="users"
        reverse
      />
      <window.FeatureSplit
        eyebrow="Leadership"
        title="A deep bench, not a single name."
        paras={[
          "Eagle is run by a next-generation leadership team that owns day-to-day operations, service delivery, and client relationships. Founder Kaleb Jacob remains involved in vision and long-standing client relationships, but the company no longer runs through any one person.",
          "That is the point. It means the promises we make to you are kept by a full team of engineers and specialists, every day and every night, not by whoever happens to be available.",
        ]}
        badge={{ icon: "users", text: "Organizational depth, not a single point of failure" }}
        mediaLabel="The Eagle leadership team"
        mediaIcon="users"
      />
      <window.Cards eyebrow="Our three pillars" title="Support. Protect. Expand." sub="Every service we offer ladders up to one of these three commitments." items={pillars} cols={3} />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="throughline reveal">
            <span className="tl-eyebrow">Our throughline</span>
            <p className="tl-line">The Eagle Never Sleeps<span className="tl-dots">…</span> <span className="tl-em">so you can.</span></p>
            <p className="tl-sub">Our 24/7 monitoring, response, and protection technologies do not stop when our offices close. Managed SOC and our quarantine and lockout playbooks operate without pause. The Eagle never sleeps, so our clients, our team, and the businesses and municipalities we protect, can rest.</p>
          </div>
        </div>
      </section>
      <window.Cards eyebrow="Our core values" title="The commitments behind the promise." sub="Five values that guide how we hire, how we work, and what our clients can count on, every day and every night." items={values} cols={3} numbered />
      <window.Cards eyebrow="Why Eagle" title="What makes us different isn't a feature. It's how we operate." items={why} cols={2} />
      <window.StatStrip stats={[
        { n: "20+", l: "Years in business" },
        { n: "97%", l: "Client satisfaction score", hl: true },
        { n: "A+", l: "BBB rated since 2018" },
        { n: "2", l: "Offices across Northern New England" },
      ]} />
      <window.OfficeLocations eyebrow="Find us" title="Two offices, one local team." offices={OFFICES_FULL} />
      <window.CtaBar
        title="Want to learn more about how Eagle works?"
        sub="We're happy to walk you through our approach, our team, and what a partnership with Eagle actually looks like."
        cta="Get in Touch"
      />
    </>
  );
}

function TeamPage() {
  const members = [
    // Operations / Business Development
    { name: "Kaleb Jacob", dept: "Operations & Business Development", role: "Principal CEO", bio: "A business owner since 1999 and a Microsoft Certified Systems Engineer since 2000, Kaleb is uniquely qualified to understand the business and network security demands of the modern company. He remains hands-on at Eagle and speaks frequently to organizations across New England on technology and security." },
    { name: "Amy", dept: "Operations & Business Development", role: "Director of Operations", bio: "Amy joined Eagle in 2011 after nearly 20 years in progressive leadership roles with a wireless carrier. She handles all things operations: client quotes, hardware and software orders, payables and receivables, payroll, benefits, and invoices. In short, the team would be lost without her." },
    { name: "Michele", dept: "Operations & Business Development", role: "Operations Assistant", placeholder: true, bio: "[ Bio placeholder: pull Michele's bio from eaglemsp.com/our-team/ ]" },
    // Engineering
    { name: "James", dept: "Engineering", role: "Systems Engineer", placeholder: true, bio: "[ Bio placeholder: pull James's bio from eaglemsp.com/our-team/ ]" },
    { name: "Jacob", dept: "Engineering", role: "Systems Engineer", placeholder: true, bio: "[ Bio placeholder: pull Jacob's bio from eaglemsp.com/our-team/ ]" },
    { name: "Mark", dept: "Engineering", role: "Systems Engineer", placeholder: true, bio: "[ Bio placeholder: pull Mark's bio from eaglemsp.com/our-team/ ]" },
    // Service Delivery & Field Services
    { name: "Luke", dept: "Service Delivery & Field Services", role: "Manager, Help Desk / Field Services", placeholder: true, bio: "[ Bio placeholder: pull Luke's bio from eaglemsp.com/our-team/ ]" },
    { name: "Raegan", dept: "Service Delivery & Field Services", role: "Help Desk Manager / Project Manager", placeholder: true, bio: "[ Bio placeholder: pull Raegan's bio from eaglemsp.com/our-team/ ]" },
    { name: "Josh", dept: "Service Delivery & Field Services", role: "Service Technician II", placeholder: true, bio: "[ Bio placeholder: pull Josh's bio from eaglemsp.com/our-team/ ]" },
    { name: "Philip", dept: "Service Delivery & Field Services", role: "Service Technician I", placeholder: true, bio: "[ Bio placeholder: pull Philip's bio from eaglemsp.com/our-team/ ]" },
    { name: "David", dept: "Service Delivery & Field Services", role: "Service Technician I", placeholder: true, bio: "[ Bio placeholder: pull David's bio from eaglemsp.com/our-team/ ]" },
    { name: "Patrick", dept: "Service Delivery & Field Services", role: "Service Technician I", placeholder: true, bio: "[ Bio placeholder: pull Patrick's bio from eaglemsp.com/our-team/ ]" },
    { name: "Dylan", dept: "Service Delivery & Field Services", role: "Service Technician I", placeholder: true, bio: "[ Bio placeholder: pull Dylan's bio from eaglemsp.com/our-team/ ]" },
    { name: "Zach", dept: "Service Delivery & Field Services", role: "Service Technician I", placeholder: true, bio: "[ Bio placeholder: pull Zach's bio from eaglemsp.com/our-team/ ]" },
    { name: "Grant", dept: "Service Delivery & Field Services", role: "Dispatcher", placeholder: true, bio: "[ Bio placeholder: pull Grant's bio from eaglemsp.com/our-team/ ]" },
  ];
  return (
    <>
      <window.Hero
        eyebrow="Our team"
        title={<>The people<br /><span className="hl">behind the support.</span></>}
        sub="Eagle's team is made up of experienced engineers, technical specialists, and operations professionals positioned throughout New Hampshire and Maine. When you work with Eagle, you work with real people who know your environment and are invested in your success."
        cta="Get in Touch"
        heroLabel="Team group photo"
        heroIcon="users"
        trust={["Engineers across NH and ME", "Real people, real relationships", "Family-owned and founder-led"]}
      />
      <window.TeamGrid eyebrow="Meet the team" title="Experienced, local, and invested in your success." members={members} />
      <window.JoinBand
        eyebrow="We're growing"
        title="Interested in joining the Eagle team?"
        body="We're always looking for talented engineers and IT professionals who want to work with a team that does things the right way. If you're based in New Hampshire or Maine and want to be part of something local, growing, and genuinely good at what it does, we'd love to hear from you."
        cta="View Career Opportunities"
        href="https://eaglemsp.com/career-opportunities/"
      />
      <window.CtaBar
        title="Want to meet the team in person?"
        sub="We're based in Bedford, NH and Scarborough, ME, and we're always happy to connect."
        cta="Get in Touch"
      />
    </>
  );
}

function ReviewsPage() {
  const reviews = Array.from({ length: 6 }).map((_, i) => ({
    quote: "[ Review text placeholder: pull from eaglemsp.com/customer-feedback/ ]",
    name: "[ Client name ]",
    company: "[ Company name ]",
    placeholder: true,
    initials: "\u2605",
  }));
  return (
    <>
      <window.Hero
        eyebrow="Customer reviews"
        title={<>Our 5-star clients<br /><span className="hl">speak for themselves.</span></>}
        sub="We don't just say we're good at what we do. Our clients do. With a client satisfaction score of approximately 97% and an A+ rating from the Better Business Bureau since 2018, the results of our work show up in the feedback we receive every day."
        cta="Get a Free Assessment"
        heroLabel="Happy client photo"
        heroIcon="star"
        trust={["97% client satisfaction", "BBB A+ since 2018", "5-star rated on Google"]}
      />
      <window.StatStrip stats={[
        { n: "97%", l: "Client satisfaction score", hl: true },
        { n: "A+", l: "BBB rated since 2018" },
        { n: "5.0", l: "Star rated on Google" },
        { n: "20+", l: "Years serving NH and ME" },
      ]} />
      <window.ReviewSection eyebrow="What our clients are saying" title="Feedback from the businesses we serve." sub="These cards are ready for real reviews pulled directly from eaglemsp.com/customer-feedback/." reviews={reviews} />
      <window.SourceBadges note="Our reviews are collected directly from clients through Google and the Better Business Bureau, unfiltered and unedited." />
      <window.Callout
        solo
        eyebrow="Our commitment"
        title="We measure our success by yours."
        body="At Eagle, client satisfaction isn't a metric we track once a quarter. It's something we think about every time we pick up the phone, respond to a ticket, or walk into a client's office. A 97% satisfaction score means something to us, but more importantly, it means something to the businesses that trust us with their technology every single day."
      />
      <window.CtaBar
        title="Ready to experience the Eagle difference?"
        sub="Join the businesses across NH and ME who trust Eagle to keep their IT running and their data protected."
        cta="Get a Free Assessment"
      />
    </>
  );
}

Object.assign(window, { WhoWeArePage, TeamPage, ReviewsPage });
