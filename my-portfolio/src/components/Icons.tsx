import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconLinkedIn = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.11V24h-4V15.6c0-2.01-.04-4.6-2.8-4.6-2.8 0-3.23 2.19-3.23 4.45V24h-4V8z" />
  </svg>
);

export const IconGitHub = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.19.69-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.57-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17a11.07 11.07 0 015.83 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.39-5.25 5.67.42.37.79 1.1.79 2.22 0 1.6-.02 2.88-.02 3.27 0 .31.21.68.8.56A11.5 11.5 0 0012 .5z" />
  </svg>
);

export const IconMedium = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconExternal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4L10 14" />
    <path d="M18 13v6H5V6h6" />
  </svg>
);

export const IconRepo = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3h12a1 1 0 011 1v16l-4-2-4 2-4-2-2 1V4a1 1 0 011-1z" />
  </svg>
);

export const IconPackage = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
    <path d="M3 8l9 5 9-5" />
    <path d="M12 13v8" />
  </svg>
);

export const IconDoc = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5" />
    <path d="M10 13h6M10 17h6" />
  </svg>
);

export const IconOrg = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="7" r="3" />
    <circle cx="5" cy="17" r="2.5" />
    <circle cx="19" cy="17" r="2.5" />
    <path d="M12 10v3M12 13l-5 2M12 13l5 2" />
  </svg>
);

export const IconSun = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const IconMoon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
