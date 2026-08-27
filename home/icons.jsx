/* Lucide-style stroke icons (MIT-spirit recreations), stroke 1.75, round caps.
   Shared via window.Icon — usage: <Icon name="shield" /> */
(function () {
  const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    headset: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><path d="M21 16a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z" /><path d="M3 16a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></>,
    trending: <><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></>,
    check: <path d="M20 6 9 17l-5-5" />,
    plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    star: <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 4.32a.56.56 0 0 0 .42.3l4.77.7a.56.56 0 0 1 .31.95l-3.45 3.36a.56.56 0 0 0-.16.5l.82 4.74a.56.56 0 0 1-.82.59l-4.27-2.24a.56.56 0 0 0-.52 0L7.5 19.46a.56.56 0 0 1-.82-.59l.82-4.74a.56.56 0 0 0-.16-.5L3.9 10.27a.56.56 0 0 1 .31-.95l4.77-.7a.56.56 0 0 0 .42-.3Z" />,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></>,
    map_pin_house: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="1.5" /><rect x="3" y="14" width="18" height="7" rx="1.5" /><path d="M7 6.5h.01M7 17.5h.01" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.66-1.5A4 4 0 0 0 6 18.5" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
  };
  function Icon({ name, ...rest }) {
    return (
      <svg viewBox="0 0 24 24" {...P} {...rest}>{paths[name] || null}</svg>
    );
  }
  window.Icon = Icon;
})();
