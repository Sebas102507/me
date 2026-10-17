import type { Publication } from '../data/publications';
import { IconExternal } from './Icons';
import { TimelineList, type TimelineEntry } from './Section';

export function PublicationTimeline({ items }: { items: Publication[] }) {
  const entries: TimelineEntry[] = items.map((p, i) => ({
    id: `pub-${i}`,
    meta: `${p.date} · ${p.venue} · ${p.kind === 'report' ? 'Technical report' : 'Article'}`,
    title: (
      <a href={p.url} target="_blank" rel="noopener noreferrer">
        {p.title}
      </a>
    ),
    body: (
      <>
        <p>{p.summary}</p>
        <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">
          Read <IconExternal />
        </a>
      </>
    ),
  }));
  return <TimelineList items={entries} />;
}
