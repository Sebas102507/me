import { useMemo, useState } from 'react';
import type { Project, ProjectGroup, ProjectLink } from '../data/projects';
import { IconDoc, IconExternal, IconOrg, IconPackage, IconRepo } from './Icons';

function LinkIcon({ kind }: { kind?: ProjectLink['kind'] }) {
  switch (kind) {
    case 'live':
      return <IconExternal />;
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

function Card({ project, kind }: { project: Project; kind: string }) {
  const primary = project.links[0];
  return (
    <article className="proj" id={`project-${project.id}`}>
      <div className="proj-top">
        <span className="proj-kind">{kind}</span>
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

function Featured({ project, kind }: { project: Project; kind: string }) {
  return (
    <article className="proj featured" id={`project-${project.id}`}>
      <div style={{ display: 'grid', gap: 14, alignContent: 'start', position: 'relative' }}>
        <div className="proj-top">
          <span className="proj-kind">{kind} · Featured</span>
          <span className="proj-year">{project.year}</span>
        </div>
        <h4>{project.title}</h4>
        <p className="proj-venue">{project.venue}</p>
        <p className="proj-summary">{project.summary}</p>
        {project.contributions && (
          <ul className="proj-contrib">
            {project.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}
        <div className="chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <Links links={project.links} />
      </div>
      {project.components && (
        <div className="featured-side">
          <h5>Repositories</h5>
          <div className="repo-list">
            {project.components.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
                <span className="name">{c.name}</span>
                <span className="desc">{c.description}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

const INITIAL = 6;

export function ProjectGroups({ groups }: { groups: ProjectGroup[] }) {
  const [filter, setFilter] = useState<string>('All');
  const [all, setAll] = useState(false);
  const flat = useMemo(() => groups.flatMap((g) => g.items.map((p) => ({ p, kind: g.heading }))), [groups]);
  const filtered = filter === 'All' ? flat : flat.filter((x) => x.kind === filter);
  const shown = filter === 'All' && !all ? filtered.slice(0, INITIAL) : filtered;
  const hidden = filtered.length - shown.length;

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects">
        {['All', ...groups.map((g) => g.heading)].map((f) => {
          const count = f === 'All' ? flat.length : flat.filter((x) => x.kind === f).length;
          return (
            <button key={f} type="button" role="tab" aria-selected={filter === f} className={`filter${filter === f ? ' is-active' : ''}`} onClick={() => setFilter(f)}>
              {f} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="proj-grid">
        {shown.map(({ p, kind }, i) =>
          i === 0 && p.components ? <Featured key={p.id} project={p} kind={kind} /> : <Card key={p.id} project={p} kind={kind} />,
        )}
      </div>
      {hidden > 0 && (
        <div className="more-row">
          <button type="button" className="btn btn-secondary" onClick={() => setAll(true)}>
            Show {hidden} more projects
          </button>
        </div>
      )}
      {filter === 'All' && all && flat.length > INITIAL && (
        <div className="more-row">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setAll(false)}>
            Show fewer
          </button>
        </div>
      )}
    </>
  );
}
