import type { ReactNode } from 'react';

/** Renders `*word*` in a string as an italic serif emphasis, Novaire-style. */
export function emph(text: string): ReactNode[] {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => (p.startsWith('*') && p.endsWith('*') ? <em className="serif-em" key={i}>{p.slice(1, -1)}</em> : <span key={i}>{p}</span>));
}
