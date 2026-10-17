import { useState, type CSSProperties } from 'react';
import type { Project, ProjectGroup, ProjectLink } from '../data/projects';
import { IconDoc, IconExternal, IconOrg, IconPackage, IconPlay, IconRepo } from './Icons';

function LinkIcon({ kind }: { kind?: ProjectLink['kind'] }) {
  switch (kind) {
    case 'live':
      return <IconExternal />;
    case 'video':
      return <IconPlay />;
    case 'doc':
      return <IconDoc />;
    case 'package':
      return <IconPackage />;
    case 'org':
      return <IconOrg />;
    default:
      return <IconRepo />;
  }
}

function Links({ links }: { links: ProjectLink[] }) {
  return (
    <div className="proj-links">
      {links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
          <LinkIcon kind={l.kind} />
          {l.label}
        </a>
      ))}
    </div>
  );
}

/** Plain card for the long tail of projects. */
function Card({ project }: { project: Project }) {
  const primary = project.links[0];
  return (
    <article className="proj" id={`project-${project.id}`}>
      <div className="proj-top">
        <span className="proj-kind">{project.topic ?? 'Project'}</span>
        <span className="proj-year">{project.year}</span>
      </div>
      <h4>
        {primary ? (
          <a href={primary.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h4>
      <p className="proj-venue">{project.venue}</p>
      <p className="proj-summary">{project.summary}</p>
      <div className="proj-foot">
        <div className="chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <Links links={project.links} />
      </div>
    </article>
  );
}

/** Branded card: background, text and accent colours come from the project itself. */
function BrandCard({ project }: { project: Project }) {
  const b = project.brand!;
  const style = {
    '--pb': b.bg,
    '--pf': b.fg,
    '--pa': b.accent,
    '--pa2': b.accent2 ?? b.accent,
    '--pm': b.muted,
    '--pl': b.onAccent ?? '#ffffff',
  } as CSSProperties;
  const hasMedia = Boolean(b.image);
  return (
    <article className={`brand-card${hasMedia ? ' has-media' : ''}`} id={`project-${project.id}`} style={style}>
      <div className="brand-body">
        <div className="brand-top">
          <div className="brand-id">
            {b.logo && <img className="brand-logo" src={b.logo} alt="" style={{ height: b.logoHeight ?? 32 }} />}
            {b.wordmark && <span className="brand-wordmark">{b.wordmark}</span>}
          </div>
          <div className="brand-meta">
            {project.topic && <span className="brand-flag">{project.topic}</span>}
            <span className="brand-year">{project.year}</span>
          </div>
        </div>

        <h4 className="brand-title">{project.title}</h4>
        <p className="brand-venue">{project.venue}</p>
        <p className="brand-summary">{project.summary}</p>

        {project.contributions && (
          <ul className="brand-contrib">
            {project.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}

        <div className="chips brand-chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <Links links={project.links} />

        {project.components && (
          <details className="brand-repos">
            <summary>{project.components.length} repositories</summary>
            <div className="repo-list">
              {project.components.map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
                  <span className="name">{c.name}</span>
                  <span className="desc">{c.description}</span>
                </a>
              ))}
            </div>
          </details>
        )}
      </div>

      {hasMedia && (
        <div className={`brand-media fit-${b.imageFit ?? 'cover'}`}>
          <img src={b.image} alt={b.imageAlt ?? ''} loading="lazy" />
        </div>
      )}
    </article>
  );
}

export function ProjectGroups({ groups }: { groups: ProjectGroup[] }) {
  const [tab, setTab] = useState(groups[0].heading);
  const active = groups.find((g) => g.heading === tab) ?? groups[0];
  const isTop = active === groups[0];

  return (
    <>
      <div className="filters" role="tablist" aria-label="Project groups">
        {groups.map((g) => (
          <button
            key={g.heading}
            type="button"
            role="tab"
            aria-selected={tab === g.heading}
            className={`filter${tab === g.heading ? ' is-active' : ''}`}
            onClick={() => setTab(g.heading)}
          >
            {g.heading} <span className="count">{g.items.length}</span>
          </button>
        ))}
      </div>

      {active.blurb && <p className="sub-intro">{active.blurb}</p>}

      {isTop ? (
        <div className="brand-grid">
          {active.items.map((p) => (p.brand ? <BrandCard key={p.id} project={p} /> : <Card key={p.id} project={p} />))}
        </div>
      ) : (
        <div className="proj-grid">
          {active.items.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      )}
    </>
  );
}
