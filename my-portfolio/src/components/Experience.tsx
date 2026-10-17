import { useMemo } from 'react';
import type { Certification, EducationItem, ExperienceItem } from '../data/experience';
import { IconExternal } from './Icons';
import { logosFor } from './logos';
import { TimelineList, type TimelineEntry } from './Section';

const storyModules = import.meta.glob('/src/assets/story/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default?: string }>;
const STORY_FILES: Record<string, string> = {};
for (const [path, mod] of Object.entries(storyModules)) {
  const name = path.split('/').pop() || path;
  if (mod?.default) STORY_FILES[name] = mod.default;
}

function Logo({ keys, org, size = 64 }: { keys?: string[]; org: string; size?: number }) {
  const logos = logosFor(keys);
  if (!logos.length) return null;
  return (
    <span className={`tl-logo${logos.length > 1 ? ' stack' : ''}`} aria-hidden="true" title={org} style={{ width: size, height: size }}>
      {logos.map((l) => (
        <img key={l.key} src={l.src} alt="" />
      ))}
    </span>
  );
}

export function WorkTimeline({ items }: { items: ExperienceItem[] }) {
  const entries = useMemo<TimelineEntry[]>(
    () =>
      items.map((e, i) => {
        const imgs = (e.images || []).map((im) => ({ src: STORY_FILES[im.file], caption: im.caption })).filter((im) => im.src);
        return {
          id: `work-${i}`,
          meta: `${e.start} – ${e.end} · ${e.location}`,
          current: e.end === 'Present',
          logo: <Logo keys={e.logoKeys} org={e.organisation} />,
          title: (
            <>
              {e.role} at {e.organisation}
              {e.client && <span className="tl-client">{e.client}</span>}
            </>
          ),
          body: (
            <>
              <dl className="tl-story">
                <div>
                  <dt>Goal</dt>
                  <dd>{e.goal}</dd>
                </div>
                <div>
                  <dt>Challenge</dt>
                  <dd>{e.challenge}</dd>
                </div>
                <div className="is-outcome">
                  <dt>Outcome</dt>
                  <dd>{e.outcome}</dd>
                </div>
              </dl>
              <ul className="xp-list">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="xp-tools" aria-label="Tools">
                {e.tools.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {e.links && (
                <div className="xp-links">
                  {e.links.map((l) => (
                    <a className="text-link" key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label} <IconExternal />
                    </a>
                  ))}
                </div>
              )}
              {imgs.length > 0 && (
                <div className="chapter-photos">
                  {imgs.map((img) => (
                    <figure key={img.src}>
                      <img src={img.src} alt={img.caption} title={img.caption} loading="lazy" />
                    </figure>
                  ))}
                </div>
              )}
            </>
          ),
        };
      }),
    [items],
  );
  return <TimelineList items={entries} />;
}

export function EducationTimeline({ items }: { items: EducationItem[] }) {
  const entries: TimelineEntry[] = items.map((ed, i) => ({
    id: `edu-${i}`,
    meta: `${ed.period} · ${ed.location}`,
    current: /present|2026/i.test(ed.period) && i === 0,
    logo: <Logo keys={ed.logoKeys} org={ed.institution} />,
    title: (
      <>
        {ed.degree} <span className="tl-at">at {ed.institution}</span>
      </>
    ),
    body: ed.notes ? (
      <ul className="xp-list">
        {ed.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    ) : undefined,
  }));
  return <TimelineList items={entries} />;
}

export function CertificationTimeline({ items }: { items: Certification[] }) {
  const entries: TimelineEntry[] = items.map((c, i) => ({
    id: `cert-${i}`,
    meta: c.date,
    logo: <Logo keys={c.logoKey ? [c.logoKey] : []} org={c.issuer} size={48} />,
    title: (
      <>
        {c.name} <span className="tl-at">· {c.issuer}</span>
      </>
    ),
  }));
  return <TimelineList items={entries} />;
}
