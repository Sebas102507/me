import { useState } from 'react';
import type { Package } from '../data/packages';
import { IconExternal, IconPackage } from './Icons';

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'fail'>('idle');
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState('done');
    } catch {
      setState('fail');
    }
    window.setTimeout(() => setState('idle'), 1600);
  }
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {state === 'done' ? 'Copied' : state === 'fail' ? 'Select' : 'Copy'}
    </button>
  );
}

export function PackageList({ items }: { items: Package[] }) {
  return (
    <div className="pkg-grid">
      {items.map((p) => (
        <article className="pkg" key={p.name}>
          <div className="pkg-head">
            <span className="pkg-name">
              <IconPackage /> {p.name}
            </span>
            <span className="pkg-ver">
              v{p.version} · {p.index}
            </span>
          </div>
          <p className="pkg-summary">{p.summary}</p>
          {p.authors && <p className="pkg-authors">{p.authors}</p>}
          <div className="pkg-install">
            <code>{p.install}</code>
            <CopyButton text={p.install} />
          </div>
          <div className="pkg-links">
            {p.links.map((l) => (
              <a className="text-link" key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label} <IconExternal />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
