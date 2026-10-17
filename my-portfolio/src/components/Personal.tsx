import { BOOKS, HOBBIES, VALUE_PILLARS } from '../data/personal';
import { IconExternal } from './Icons';
import { emph } from '../lib/emph';

const coverModules = import.meta.glob('/src/assets/books/*.{jpg,jpeg,png,webp}', { eager: true }) as Record<string, { default?: string }>;
const COVERS: Record<string, string> = {};
for (const [path, mod] of Object.entries(coverModules)) {
  const name = path.split('/').pop() || path;
  if (mod?.default) COVERS[name] = mod.default;
}

export function ValuePillars() {
  return (
    <section className="pillars-wrap" aria-labelledby="pillars-h">
      <div className="container">
        <div className="pillars-head reveal">
          <span className="eyebrow">What I look for</span>
          <h2 id="pillars-h">{emph('Data engineering and AI projects where *value* can be added.')}</h2>
          <p>
            Every role I have taken had the same question underneath: where is the cost, the time, the manual work or the bad data that is holding people back, and what can we
            build to remove it?
          </p>
        </div>
        <ul className="pillars">
          {VALUE_PILLARS.map((p, i) => (
            <li className="pillar reveal" key={p.title}>
              <span className="pillar-num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Hobbies() {
  return (
    <ul className="hobbies">
      {HOBBIES.map((h) => (
        <li className="hobby reveal" key={h.title}>
          <h4>{h.title}</h4>
          <p>{h.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Bookshelf() {
  return (
    <ul className="books">
      {BOOKS.map((b) => (
        <li className="book reveal" key={b.title}>
          <a className="book-cover" href={b.url} target="_blank" rel="noopener noreferrer" aria-label={`${b.title} on Amazon`}>
            {COVERS[b.cover] ? <img src={COVERS[b.cover]} alt={`Cover of ${b.title}`} loading="lazy" /> : <span className="book-fallback">{b.title}</span>}
          </a>
          <div className="book-body">
            <h4>{b.title}</h4>
            <p className="book-author">{b.author}</p>
            <p className="book-why">{b.why}</p>
            <a className="text-link" href={b.url} target="_blank" rel="noopener noreferrer">
              View on Amazon <IconExternal />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
