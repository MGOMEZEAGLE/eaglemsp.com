/* Solutions icon set — Lucide-style stroke, weight 1.7, round caps. window.SIcon */
(function () {
  const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    check: <path d="M20 6 9 17l-5-5" />,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    headset: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><path d="M21 16a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z" /><path d="M3 16a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></>,
    refresh: <><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>,
    network: <><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M12 12H5v4M12 12h7v4" /></>,
    cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.66-1.5A4 4 0 0 0 6 18.5" />,
    box: <><path d="m21 8-9-5-9 5v8l9 5 9-5Z" /><path d="m3 8 9 5 9-5M12 13v8" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    grad: <><path d="M22 9 12 5 2 9l10 4 10-4Z" /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" /></>,
    clipboard: <><rect x="8" y="3" width="8" height="4" rx="1" /><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></>,
    radar: <><path d="M19.07 4.93A10 10 0 1 0 22 12" /><path d="M12 12 17 7" /><circle cx="12" cy="12" r="1.5" /><path d="M12 12a6 6 0 1 0 5.2 3" /></>,
    fileshield: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" /><path d="M14 2v5h5" /><path d="M18 13.5 21 15v3c0 2-3 3.5-3 3.5s-3-1.5-3-3.5v-3Z" /></>,
    camera: <><path d="M5 7h2l1.5-2h7L17 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><circle cx="12" cy="13" r="3.5" /></>,
    video: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><rect x="10" y="10" width="4" height="4" rx="1" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></>,
    trending: <><path d="M3 17l6-6 4 4 7-7" /><path d="M17 8h4v4" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    user: <><path d="M19 21v-2a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v2" /><circle cx="12" cy="7" r="4" /></>,
    kanban: <><path d="M6 5v11M12 5v6M18 5v14" /><circle cx="6" cy="18" r="2" /><circle cx="12" cy="13" r="2" /><circle cx="18" cy="21" r="0" /></>,
    map: <><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />,
    bolt: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="1.5" /><rect x="3" y="14" width="18" height="7" rx="1.5" /><path d="M7 6.5h.01M7 17.5h.01" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
    sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
    award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></>,
    lifebuoy: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="m5 5 4.5 4.5M14.5 14.5 19 19M19 5l-4.5 4.5M9.5 14.5 5 19" /></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 21v-4h6v4" /></>,
    star: <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v6M8 7v.01M12 16v-3.5a2 2 0 0 1 4 0V16" /><path d="M12 16v-6" /></>,
    google: <><path d="M21 12.2c0-.7-.06-1.3-.18-1.9H12v3.6h5.06a4.3 4.3 0 0 1-1.87 2.8v2.3h3.02C19.96 17.4 21 15 21 12.2Z" /><path d="M12 21c2.43 0 4.47-.8 5.96-2.18l-3.02-2.3c-.84.56-1.9.9-2.94.9-2.26 0-4.18-1.52-4.86-3.58H4.02v2.34A9 9 0 0 0 12 21Z" /><path d="M7.14 13.84a5.4 5.4 0 0 1 0-3.44V8.06H4.02a9 9 0 0 0 0 8.12l3.12-2.34Z" /><path d="M12 6.98c1.32 0 2.5.46 3.44 1.35l2.58-2.58A9 9 0 0 0 4.02 8.06l3.12 2.34C7.82 8.34 9.74 6.98 12 6.98Z" /></>,
    bbb: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M9.5 8h2.2a1.6 1.6 0 0 1 0 3.2H9.5zm0 3.2h2.6a1.7 1.7 0 0 1 0 3.4H9.5z" /></>,
    heart: <path d="M12 20s-7-4.3-9.2-8.4C1.3 8.7 2.7 5.5 6 5.5c1.8 0 3 .9 3.9 2.1C10.9 6.4 12.2 5.5 14 5.5c3.3 0 4.7 3.2 3.2 6.1C19 15.7 12 20 12 20Z" />,
    handshake: <><path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a2 2 0 0 0 0-2.8L13 7.5" /><path d="m6 11 4-4 3 3" /><path d="m3 13 3 3M21 13l-3-3" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    screenshare: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="m9 10 3-3 3 3M12 7v6" /></>,
    chevdown: <path d="m6 9 6 6 6-6" />,
  };
  function SIcon({ name, ...rest }) {
    return <svg viewBox="0 0 24 24" {...P} {...rest}>{paths[name] || null}</svg>;
  }
  window.SIcon = SIcon;
})();
