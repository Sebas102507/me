import fallbackPortrait from '../assets/me/me_profile_web.jpg';
import { PROFILE, SKILLS } from '../data/profile';
import { IconGitHub, IconLinkedIn, IconMail, IconMedium } from './Icons';
import { LOGOS, LOGO_NAMES } from './logos';

// Drop your LinkedIn photo at src/assets/me/profile.jpg (or .png/.jpeg/.webp) and it replaces the fallback automatically.
const portraitModules = import.meta.glob('/src/assets/me/profile.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', { eager: true }) as Record<string, { default?: string }>;
const portrait = Object.values(portraitModules)[0]?.default || fallbackPortrait;

const YEARS = new Date().getFullYear() - 2020;

const HERO_TAGS_LEFT = ['Data Engineer', 'Machine Learning', 'Generative AI'];
const HERO_TAGS_RIGHT = ['Business Value', 'Quant Research', 'Outsider'];

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-head">
          <h1 className="hero-title">
            <span className="hero-value">Value</span> is what matters in life.
          </h1>
        </div>

        <div className="hero-stage">
          <span className="hero-ghost" aria-hidden="true">
            ENGINEER
          </span>
          <ul className="hero-tags left" aria-label="Focus areas">
            {HERO_TAGS_LEFT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="hero-photo">
            <img src={portrait} alt={`Portrait of ${PROFILE.shortName}`} width={800} height={800} fetchPriority="high" />
          </div>
          <ul className="hero-tags right" aria-label="Tools">
            {HERO_TAGS_RIGHT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="hero-bubble a" aria-hidden="true">
            Hello, my name is
          </span>
          <span className="hero-bubble b" aria-hidden="true">
            Let’s work together!
          </span>
          <div className="hero-name" aria-hidden="true">
            Juan Vargas
          </div>
        </div>

        <div className="hero-below">
          <p className="hero-sub">{PROFILE.tagline.replace('{years}', String(YEARS))}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#story">
              Read my story <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-ghost" href={`mailto:${PROFILE.email}`}>
              <IconMail /> Email me
            </a>
          </div>
          <div className="hero-social">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn /> LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              <IconGitHub /> GitHub
            </a>
            <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
              <IconMedium /> Medium
            </a>
            <span className="hero-scroll">Scroll down ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGO_ORDER = ['nike', 'uts', 'amadeus', 'uoc', 'sii', 'snowflake', 'british_council', 'jrs', 'javeriana', 'wizeline', 'boston_college', 'fluppy', 'grasply'];

export function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Organisations">
      <div className="container">
        <p>Worked with and studied at</p>
        <div className="logo-row">
          {LOGO_ORDER.map((k) => LOGOS.find((l) => l.key === k))
            .filter((l): l is (typeof LOGOS)[number] => Boolean(l))
            .map((l) => (
              <img key={l.key} src={l.src} alt={LOGO_NAMES[l.key] || l.key} title={LOGO_NAMES[l.key] || l.key} />
            ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <div className="skills compact">
      {SKILLS.map((s) => (
        <div className="skill" key={s.area}>
          <h4>{s.area}</h4>
          <div className="chips">
            {s.items.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
