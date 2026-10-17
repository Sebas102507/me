import { useEffect, useState } from 'react';
import { PROFILE } from '../data/profile';
import { IconClose, IconGitHub, IconLinkedIn, IconMenu } from './Icons';

export type NavItem = { id: string; label: string };

export function Nav({ items, activeId }: { items: NavItem[]; activeId: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label={`${PROFILE.shortName}, back to top`}>
          <span className="brand-mark" aria-hidden="true">
            JV
          </span>
          <span>{PROFILE.shortName}</span>
        </a>

        <nav id="primary-nav" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Sections">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} aria-current={activeId === it.id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {it.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <IconGitHub />
          </a>
          <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <IconLinkedIn />
          </a>
          <a className="btn btn-primary btn-sm nav-cta" href={`mailto:${PROFILE.email}`}>
            Contact <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
