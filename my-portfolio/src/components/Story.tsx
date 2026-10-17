import { useEffect, useMemo, useState } from 'react';
import { CHAPTERS } from '../data/story';
import { emph } from '../lib/emph';

type Img = { src: string; caption: string; fit: 'cover' | 'contain' };

export function Story() {
  const files = useMemo(() => {
    const modules = import.meta.glob('/src/assets/{story,collage}/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true }) as Record<string, { default?: string }>;
    const map: Record<string, string> = {};
    for (const [path, mod] of Object.entries(modules)) {
      const name = path.split('/').pop() || path;
      if (mod?.default) map[name] = mod.default;
    }
    return map;
  }, []);

  const chapters = useMemo(
    () =>
      CHAPTERS.map((c) => ({
        ...c,
        imgs: (c.images || [])
          .map((i) => ({ src: files[i.file], caption: i.caption, fit: i.fit || 'cover' }))
          .filter((i): i is Img => Boolean(i.src)),
      })),
    [files],
  );
  const all = useMemo(() => chapters.flatMap((c) => c.imgs), [chapters]);
  const feature = useMemo(() => all.find((i) => /Graduation/.test(i.caption)) || all.find((i) => i.fit === 'cover'), [all]);

  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((v) => (v === null ? v : (v + 1) % all.length));
      if (e.key === 'ArrowLeft') setOpen((v) => (v === null ? v : (v - 1 + all.length) % all.length));
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, all.length]);

  return (
    <>
      <div className="story-layout">
        <aside className="story-aside">
          <h3 className="story-aside-title">{emph('Five stops, one *thread*.')}</h3>
          <p className="story-aside-text">
            From a cardboard rover in Bogotá to vision-language models in Sydney. Every stop taught me something I still use: take something hard, make it work, and make it useful for someone.
          </p>
          {feature && (
            <figure className="story-feature">
              <button type="button" onClick={() => setOpen(all.indexOf(feature))} aria-label={feature.caption}>
                <img src={feature.src} alt={feature.caption} loading="lazy" />
              </button>
              <figcaption>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                A model only matters if someone acts on it.
              </figcaption>
            </figure>
          )}
        </aside>

        <ol className="story">
          {chapters.map((c, ci) => (
            <li className="chapter reveal" key={c.id} id={`story-${c.id}`}>
              <div className="chapter-marker" aria-hidden="true">
                <span className={`dot${ci === chapters.length - 1 ? ' is-current' : ''}`} />
              </div>
              <div className="chapter-body">
                <span className="chapter-years">
                  {c.years} · {c.place}
                </span>
                <div className="chapter-title-row">
                  <h3>{c.title}</h3>
                </div>
                {c.text.map((t) => (
                  <p key={t.slice(0, 24)}>{t}</p>
                ))}
                {c.lesson && <p className="chapter-lesson">{emph(`*${c.lesson}*`)}</p>}
                {c.imgs.length > 0 && (
                  <div className="chapter-photos">
                    {c.imgs.map((img) => (
                      <figure key={img.src} className={img.fit === 'contain' ? 'is-badge' : undefined}>
                        <button type="button" onClick={() => setOpen(all.indexOf(img))} aria-label={img.caption} title={img.caption}>
                          <img src={img.src} alt={img.caption} loading="lazy" />
                        </button>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {open !== null && all[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged photo" onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
            ×
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={all[open].src} alt={all[open].caption} />
            <figcaption>{all[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
