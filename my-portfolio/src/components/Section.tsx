import type { ReactNode } from 'react';
import { emph } from '../lib/emph';

export function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-h`}>{emph(title)}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SubHead({ title, count }: { title: string; count?: number }) {
  return (
    <div className="sub-head">
      <h3>{emph(title)}</h3>
      {typeof count === 'number' && <span className="count">{count}</span>}
      <span className="line" aria-hidden="true" />
    </div>
  );
}

/** Two-column layout used by every time-based section: sticky aside on the left, timeline on the right. */
export function TwoCol({ aside, children }: { aside: ReactNode; children: ReactNode }) {
  return (
    <div className="story-layout">
      <aside className="story-aside">{aside}</aside>
      <div className="story-main">{children}</div>
    </div>
  );
}

export type TimelineEntry = {
  id: string;
  meta: string;
  title: ReactNode;
  logo?: ReactNode;
  current?: boolean;
  body?: ReactNode;
};

export function TimelineList({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="story">
      {items.map((it) => (
        <li className="chapter reveal" key={it.id} id={it.id}>
          <div className="chapter-marker" aria-hidden="true">
            <span className={`dot${it.current ? ' is-current' : ''}`} />
          </div>
          <div className="chapter-body">
            <span className="chapter-years">{it.meta}</span>
            <div className="chapter-title-row">
              {it.logo}
              <h3>{it.title}</h3>
            </div>
            {it.body}
          </div>
        </li>
      ))}
    </ol>
  );
}
