import { useEffect, useMemo, useRef, useState } from 'react'
// IMPORTANT: For the new design, please use a profile image with a transparent background (PNG format).
import meImg from './assets/other/compound_interest.png'
import signatureImg from './assets/me/signature.png'
import profileImg from './assets/me/profile_picture.png'

const CONTACT = {
  email: 'jvargas100d@gmail.com',
  linkedin: 'https://linkedin.com/in/sebastián-vargas-t-9b4a15189',
  github: 'https://github.com/Sebas102507',
}

// =================================================================================
// 1. TYPES & HOOKS (Data Fetching Logic)
// =================================================================================

// Removed GitHub Repo fetching – only static/featured projects are shown

type StaticProject = {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  html_url: string;
  links?: { label: string; url: string }[];
  image?: string;
};

// Note: GitHub dynamic repo loading removed

// =================================================================================
// 2. STATIC DATA
// =================================================================================

// Removed fallback placeholder projects; only user-provided links are shown

// Featured projects (always shown)
const featuredProjects: StaticProject[] = [
  {
    id: 'f1',
    name: 'Brainy Noise (Thesis)',
    description: 'End-to-end deep learning platform for environmental sound recognition and analysis.',
    tags: ['Deep Learning', 'Audio', 'CNN', 'Research'],
    html_url: 'https://github.com/Proyecto-de-Grado-Brainy-Noise',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'f0',
    name: 'Chest X-Ray Denoising Autoencoder',
    description: 'Autoencoder-based denoising for chest X-rays (Gaussian noise), with web app and ML backend.',
    tags: ['Autoencoders', 'Denoising', 'Medical Imaging', 'CNN'],
    html_url: 'https://github.com/Sebas102507/chest_xray_autoencoders_denoising',
    image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'f2',
    name: 'Carvi (Frontend & Backend)',
    description: 'Driver-assistance project: mobile frontend and deep learning backend for perception.',
    tags: ['Mobile', 'Computer Vision', 'CNN'],
    html_url: 'https://github.com/Sebas102507/carvi_app',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=60',
    links: [
      { label: 'Frontend', url: 'https://github.com/Sebas102507/carvi_app' },
      { label: 'Backend', url: 'https://github.com/Sebas102507/Carvi_Deep_Learning_Mobile_App' },
    ],
  },
  {
    id: 'f4',
    name: 'Music Classifier (NN)',
    description: 'Neural network classifier for music categories with a simple app UI.',
    tags: ['Neural Networks', 'Audio', 'Classification'],
    html_url: 'https://github.com/Sebas102507/music_gender_app_classifier_with_NN',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'f5',
    name: 'Sign Language Classifier',
    description: 'Computer vision model to classify sign language gestures.',
    tags: ['Computer Vision', 'CNN', 'AI'],
    html_url: 'https://github.com/Sebas102507/SignLanguageAiClassifier',
    image: 'https://images.unsplash.com/photo-1587731631676-8322f95b0d59?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'f6',
    name: 'Simpsons Chapter Generator',
    description: 'RNN-based text generator trained on Simpsons scripts to create new episode-like text.',
    tags: ['RNN', 'NLP', 'Text Generation'],
    html_url: 'https://github.com/Sebas102507/RNNSimpsonsChapterGenerator',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=60',
  },
];

// Medium reports data
const mediumReports = [
  {
    title: 'AI System to handle and query Patient’s Medical history using Mixtral 8x7b, Langchain and AWS',
    date: 'Medium · Mar 6, 2024',
    summary:
      'This article introduces a solution that leverages Mixtral 8x7b, Langchain, and AWS to streamline how healthcare providers handle and query patient medical histories.',
    url: 'https://medium.com/@libros123bmw/ai-system-to-handle-and-query-patients-medical-history-using-mixtral-8x7b-langchain-and-aws-e4615381e222',
  },
  {
    title: 'Deploy a LLM Model on AWS using Langchain and Docker.',
    date: 'Medium · Nov 13, 2023',
    summary:
      'A step-by-step guide to deploying a powerful language model on AWS using Langchain and Docker with Lambda, ECR, and GPT-3.5 Turbo.',
    url: 'https://medium.com/@libros123bmw/deploy-a-llm-on-aws-using-langchain-and-docker-ff9ba7a9e7e0',
  },
];

// Experience items (work and education)
type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  type?: 'Work' | 'Education';
  details?: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'UTS',
    role: 'Data Analyst Consultant',
    dates: 'Sep 2025 – Current',
    location: 'Sydney, Australia',
    type: 'Work',
    details: [
      'Redesigned and deployed pipelines for Alumni, Donors, and Student data from NXT CRM.',
      'Built warehouse integration on on‑prem SQL Server.',
      'Used Apache Airflow for orchestration and monitoring.',
    ],
  },
  {
    company: 'Wizeline - Nike',
    role: 'Data Engineer III',
    dates: 'Dec 2024 – Jun 2025',
    location: 'Bogotá, CO',
    type: 'Work',
    details: [
      'Led a pod of three L2 data engineers within a 14‑member team.',
      'Migrated core Airflow DAGs to Databricks Workflows.',
      'Engineered seven global pipelines (locations, employees, leasing, access, IoT headcounts).',
      'Implemented Delta Lake medallion model; governed with Unity Catalog.',
      'Drove 30% monthly cost reduction via Databricks optimization.',
    ],
  },
  {
    company: 'SII Colombia - Amadeus',
    role: 'Ssr. Data Engineer',
    dates: 'Apr 2024 – Dec 2024',
    location: 'Bogotá, CO',
    type: 'Work',
    details: [
      'Led two engineers in migration of legacy on‑prem solution to Azure (10‑person team).',
      'Re‑engineered petabyte‑scale pipelines (airline, reservation, hospitality partners).',
      'Phased migration (parallel run) ensured consistency and zero downtime.',
      'Improved critical processing by >400× (3 days → <10 minutes).',
    ],
  },
  {
    company: 'Grasply AI',
    role: 'Ssr. Machine Learning Engineer (Part Time)',
    dates: 'Oct 2023 – Jun 2025',
    location: 'Fort Lauderdale, FL',
    type: 'Work',
    details: [
      'Co‑created a proprietary “Cognitive Architecture” for adaptive AI teachers.',
      'Built data ingestion, NLP insights engine, and knowledge‑graph feedback loop.',
      'Secured 10 institutional partnerships across US/LATAM; initiated bank pilot.',
    ],
  },
  {
    company: 'Pontificia Universidad Javeriana',
    role: 'Coordinator, Competitive Intelligence Area',
    dates: 'Dec 2022 – Feb 2024',
    location: 'Bogotá, CO',
    type: 'Work',
    details: [
      'Automated ETL with Python (Pandas) and SQL for 30k+ users and the Ministry of Education.',
      'Delivered annual reports (graduates, dropout, success rates, enrollment).',
      'Designed and rolled out a fair honors algorithm across faculties.',
      'Automated ingestion from Scopus and Web of Science.',
    ],
  },
  {
    company: 'Jesuit Refugee Service',
    role: 'Data Analyst',
    dates: 'Jan 2020 – Jul 2022',
    location: 'Bogotá, CO',
    type: 'Work',
    details: [
      'Applied linear programming to optimize donor fund allocation.',
      'Built time‑series forecasts for funding shortfalls.',
      'Automated workflows with Azure Data Factory for resource and environment monitoring.',
    ],
  },
];

// Removed concept ideas section

// =================================================================================
// 3. UI COMPONENTS
// =================================================================================

const IconEmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.11V24h-4V15.6c0-2.01-.04-4.6-2.8-4.6-2.8 0-3.23 2.19-3.23 4.45V24h-4V8z" />
  </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true" {...props}>
    <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.19.69-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.57-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17a11.07 11.07 0 015.83 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.39-5.25 5.67.42.37.79 1.1.79 2.22 0 1.6-.02 2.88-.02 3.27 0 .31.21.68.8.56A11.5 11.5 0 0012 .5z" />
  </svg>
);

const IconView = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true" {...props}>
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [contactNavOpen, setContactNavOpen] = useState(false);
  const contactNavRef = useRef<HTMLDivElement | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleGlobalClick(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (contactNavOpen && contactNavRef.current && target && !contactNavRef.current.contains(target)) {
        setContactNavOpen(false);
      }
      if (navOpen && navRef.current && target && !navRef.current.contains(target)) {
        setNavOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setContactNavOpen(false);
        setNavOpen(false);
      }
    }
    document.addEventListener('mousedown', handleGlobalClick);
    document.addEventListener('touchstart', handleGlobalClick, { passive: true });
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleGlobalClick);
      document.removeEventListener('touchstart', handleGlobalClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [contactNavOpen, navOpen]);
  return (
    <header className="site-header" aria-label="Site header">
      <div className="header-inner" ref={navRef}>
        <div className="brand">
          <button className="brand-button" onClick={() => setOpen(!open)} aria-haspopup="menu" aria-expanded={open} aria-label="Open contact menu">
            <img src={signatureImg} alt="Sebastian Vargas signature" className="brand-logo" />
          </button>
          {open && (
            <div className="brand-menu" role="menu">
              <a role="menuitem" href={`mailto:${CONTACT.email}`}>Email</a>
              <a role="menuitem" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a role="menuitem" href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          )}
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          ☰
        </button>
        <nav className={`nav${navOpen ? ' nav-open' : ''}`} aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Recent Projects</a>
          <a href="#reports">Reports</a>
          <div className="nav-contact" ref={contactNavRef}>
            <button
              className="nav-contact-btn"
              onClick={() => setContactNavOpen(!contactNavOpen)}
              aria-haspopup="menu"
              aria-expanded={contactNavOpen}
            >
              Contact Me
            </button>
            {contactNavOpen && (
              <div className="contact-menu" role="menu">
                <a role="menuitem" href={`mailto:${CONTACT.email}`} className="contact-item" onClick={() => setContactNavOpen(false)}>
                  <IconEmail className="contact-icon" />
                  <span>Email</span>
                </a>
                <a role="menuitem" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item" onClick={() => setContactNavOpen(false)}>
                  <IconLinkedIn className="contact-icon" />
                  <span>LinkedIn</span>
                </a>
                <a role="menuitem" href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-item" onClick={() => setContactNavOpen(false)}>
                  <IconGitHub className="contact-icon" />
                  <span>GitHub</span>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Intro">
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="display">
            Value is what
            <br />
            matters in life.
          </h1>
          <p className="lead">
          As a Data Specialist, I provide end-to-end consulting—from business understanding and data engineering to AI model deployment—transforming complex information into a clear roadmap for the future.
          </p>
          <div className="hero-actions">
              <a href="#projects" className="learn-more">
                LEARN MORE ABOUT MY WORK
                <span className="arrow">↓</span>
              </a>
          </div>
        </div>
      </div>
       <div className="hero-visual">
          <img className="hero-img" src={meImg} alt="Compound interest visualization" />
      </div>
    </section>
  );
};

const TrustedBy = ({ logos }: { logos: { name: string, src: string }[] }) => (
  <section className="trusted full-width-section" aria-label="Trusted by">
    <h3 className="trusted-title">Trusted by</h3>
    <div className="trusted-bar">
      <div className="marquee">
        <div className="marquee-track" style={{'--item-count': logos.length} as React.CSSProperties}>
          {[...logos, ...logos, ...logos, ...logos].map((b, i) => (
            <div className="logo-item" key={`${b.name}-${i}`}>
              <img className="logo-img" src={b.src} alt={`${b.name.split('.')[0]} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// SkeletonCard removed (no dynamic loading)

// ProjectCard (grid) removed in favor of the bubble cloud UI

const ProjectCard = ({ project, onOpen }: { project: StaticProject; onOpen: () => void }) => {
  return (
    <li className={`card`}>
      <button className="card-head" onClick={onOpen} aria-expanded={false}>
        <h3 className="card-title">{project.name}</h3>
        <span className="caret" aria-hidden></span>
      </button>
      <div className="card-body-wrapper">
        <div className="card-body">
          <div className="card-thumb">
            {project.image ? (
              <img className="card-thumb-img" src={project.image} alt={`${project.name} preview`} loading="lazy" />
            ) : (
              <div className="thumb-fallback" aria-hidden="true">
                <span className="thumb-badge">{project.tags?.[0] || 'Project'}</span>
              </div>
            )}
          </div>
          <p className="card-desc">{project.description || 'No description provided.'}</p>
          <div className="card-footer">
            <div className="tags">
              {project.tags?.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links && project.links.length > 0 ? (
                project.links.map((l) => (
                  <a key={l.label} className="project-link" href={l.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    {l.label} →
                  </a>
                ))
              ) : (
                <a className="project-link" href={project.html_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = ({ onOpenProject }: { onOpenProject: (p: StaticProject) => void }) => {
  const allProjects = useMemo<StaticProject[]>(
    () => [...featuredProjects].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <h2 className="section-title">Recent Projects</h2>
      <ul className="project-grid">
        {allProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => onOpenProject(p)} />
        ))}
      </ul>
    </section>
  );
};

const Footer = () => (
    <footer className="footer">
        <div className="footer-actions">
          <a href={`mailto:${CONTACT.email}`} className="contact-btn" aria-label="Email">
            <IconEmail className="contact-icon" />
            <span>Email</span>
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="LinkedIn">
            <IconLinkedIn className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="GitHub">
            <IconGitHub className="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
        <span>© {new Date().getFullYear()} Sebastian Vargas. All rights reserved.</span>
    </footer>
);

// =================================================================================
// 4. CSS STYLES
// =================================================================================

const GlobalStyles = () => (
<style>{`
/* Fonts loaded via index.html:
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
*/

/* 1. Design Tokens & Base Styles */
:root {
  /* Palette */
  --color-light-bg: #ffffff;
  --color-surface: #f2e9e4;
  --color-text-light: #22223b;
  --color-text-muted: #9a8c98;
  --color-border: #9a8c98;
  --color-dark-bg: #22223b;
  --color-text-dark: #f2e9e4;
  --color-accent: #4a4e69;
  --color-primary: #4a4e69;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
  --font-display: 'Archivo Black', system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  /* Spacing & Misc */
  --spacing-xs: 4px; --spacing-sm: 8px; --spacing-md: 16px; --spacing-lg: 24px; --spacing-xl: 32px; --spacing-xxl: 64px;
  --border-radius: 8px; --transition-speed: 0.2s;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background-color: var(--color-light-bg); color: var(--color-text-light); font-family: var(--font-sans); margin: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* 2. Layout & Global Elements */
.container { max-width: 1024px; margin: 0 auto; padding: 0 var(--spacing-lg); }
.full-width-section { width: 100%; }
section { padding: var(--spacing-xl) 0; }
.section-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); font-weight: 400; margin-bottom: var(--spacing-xl); color: var(--color-text-light); text-align: center; }
a { color: var(--color-primary); text-decoration: none; transition: all var(--transition-speed) ease-in-out; }
a:hover { opacity: 0.8; }

/* 3. Header */
.site-header { position: fixed; top: 0; left: 0; right: 0; z-index: 20; padding: var(--spacing-md) 0; background-color: var(--color-dark-bg); border-bottom: 1px solid rgba(255,255,255,0.08); }
.header-inner { max-width: 1024px; margin: 0 auto; padding: 0 var(--spacing-lg); display: flex; justify-content: space-between; align-items: center; }
.brand-logo { height: 88px; display: block; transform: rotate(-6deg); filter: invert(1) brightness(1.5); }
.brand-button { background: transparent; border: none; padding: 0; cursor: pointer; }
.brand { position: relative; display: flex; align-items: center; }
.brand-menu { position: absolute; top: 100%; left: 0; background: var(--color-surface); color: var(--color-text-light); border: 1px solid var(--color-border); border-radius: 8px; padding: 8px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); display: grid; gap: 6px; min-width: 160px; z-index: 20; }
.brand-menu a { color: var(--color-text-light); padding: 8px 10px; border-radius: 6px; }
.brand-menu a:hover { background: rgba(154,140,152,0.25); }
.nav { display: flex; gap: var(--spacing-sm); }
.nav a { padding: var(--spacing-sm) var(--spacing-md); border-radius: 99px; font-weight: 500; color: var(--color-text-dark); }
.nav a:hover { color: var(--color-text-light); background-color: var(--color-surface); }
.nav .nav-contact-btn { 
  padding: var(--spacing-sm) var(--spacing-md); 
  border-radius: 99px; 
  font-weight: 500; 
  color: var(--color-text-dark); 
  background: none; 
  border: none; 
  cursor: pointer; 
  font-family: inherit; 
  font-size: inherit; 
  line-height: 1; 
  display: inline-flex; 
  align-items: center; 
}
.nav .nav-contact-btn:hover { color: var(--color-text-light); background-color: var(--color-surface); }
.nav-contact { position: relative; }
.nav-toggle { display: none; background: none; border: 1px solid var(--color-border); color: var(--color-text-dark); border-radius: 8px; padding: 6px 10px; cursor: pointer; }

main { padding-top: 120px; }

/* 4. Hero Section */
 .hero { 
   background-color: var(--color-dark-bg); 
   color: var(--color-text-dark); 
   height: 80vh; /* Further reduced height */
   display: flex; 
   align-items: center;
   position: relative; 
   overflow: hidden; 
 }
.hero-content { 
  max-width: 1024px; 
  width: 100%; 
  margin: 0 auto; 
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}
.hero-copy { max-width: 55%; }
@media (max-width: 991px) { .hero-copy { max-width: 100%; text-align: center; } }
.hero-copy .display { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 400; color: var(--color-text-dark); margin-bottom: var(--spacing-lg); line-height: 1.1; }
.hero-copy .lead { font-size: 1.15rem; color: var(--color-text-dark); max-width: 45ch; margin-bottom: var(--spacing-xl); opacity: 0.8; }
@media (max-width: 991px) { .hero-copy .lead { margin-left: auto; margin-right: auto; } }

.learn-more { 
  color: var(--color-text-dark); 
  text-decoration: none; 
  font-weight: 700; 
  letter-spacing: 1px; 
  font-size: 0.9rem; 
  border-bottom: 2px solid var(--color-text-dark); 
  padding-bottom: var(--spacing-sm); 
  display: inline-flex;
  align-items: center;
}
.hero-actions { display: flex; gap: var(--spacing-lg); align-items: center; flex-wrap: wrap; }
.contact-btn {
  background-color: var(--color-light-bg);
  color: var(--color-text-light);
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 10px rgba(0,0,0,0.10);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.contact-btn:hover { filter: none; box-shadow: 0 6px 14px rgba(0,0,0,0.12); }
.contact-dropdown { position: relative; }
.contact-menu { position: absolute; top: calc(100% + 8px); right: 0; left: auto; background: var(--color-surface); color: var(--color-text-light); border: 1px solid var(--color-border); border-radius: 8px; padding: 8px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); display: grid; gap: 6px; min-width: 180px; z-index: 20; transform-origin: top right; animation: dropdownIn var(--transition-speed) ease-out; will-change: transform, opacity; }
.contact-menu a { color: var(--color-text-light); text-decoration: none; }
.contact-menu a:hover { opacity: 1; }
.contact-item { display: flex; align-items: center; gap: 10px; color: var(--color-text-light); padding: 8px 10px; border-radius: 6px; font-weight: 600; }
.contact-item:hover { background: var(--color-dark-bg); color: var(--color-text-dark); }
.contact-icon { width: 18px; height: 18px; color: currentColor; }
@keyframes dropdownIn { from { opacity: 0; transform: translateY(-6px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
.learn-more .arrow { display: inline-block; transition: transform var(--transition-speed) ease; margin-left: var(--spacing-sm); }
.learn-more:hover .arrow { transform: translateY(4px); }

.hero-visual {
  position: absolute;
  bottom: 0;
  right: 12%;
  width: 50%;
  height: 95%;
  z-index: 1;
}
@media (max-width: 991px) { .hero-visual { display: none; } }

.hero-img { 
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 92%;
  max-width: 700px; /* Limit max size */
  opacity: 0.8;
  filter: grayscale(50%);
}

/* 5. TrustedBy Marquee (Now separate from Hero) */
.trusted { 
  background-color: transparent;
  padding: 0;
}
.trusted-title { 
  text-align: center; 
  color: var(--color-text-muted);
  font-weight: 500; 
  margin-bottom: var(--spacing-lg); 
  font-size: 1.1rem; 
  letter-spacing: 0.5px; 
  text-transform: uppercase; 
}
.trusted-bar { 
  background: transparent;
  padding: var(--spacing-lg) 0; 
  border-top: none;
  border-bottom: none;
}
.marquee { width: 100%; overflow: hidden; position: relative; }
.marquee::before, .marquee::after { content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none; }
.marquee::before { left: 0; background: none; }
.marquee::after { right: 0; background: none; }
.marquee-track { display: flex; gap: var(--spacing-xxl); width: calc(var(--item-count) * 4 * 200px); animation: marquee 120s linear infinite; }
.logo-item { flex-shrink: 0; width: 200px; display: grid; place-items: center; }
 .logo-img { max-height: 50px; width: auto; max-width: 150px; filter: none; opacity: 1; transition: transform var(--transition-speed) ease; }
 .logo-item:hover .logo-img { transform: scale(1.03); }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-1 * var(--item-count) * 200px * 2)); } }

/* 6. Project Grid & Cards */
.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--spacing-lg); padding: 0; list-style: none; margin: 0; overflow: visible; }
.card { background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--border-radius); transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease; overflow: visible; position: relative; will-change: transform; }
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07); }
.card.static-card { padding: var(--spacing-lg); display: flex; flex-direction: column; }
.card-head { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-lg); width: 100%; background: none; border: none; color: inherit; font: inherit; cursor: pointer; text-align: left; }
.card-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 400; color: var(--color-text-light); }
.card-desc { color: var(--color-text-muted); line-height: 1.6; }
.card-body-wrapper { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.card.expanded .card-body-wrapper { max-height: 0; }
.card.expanded { transform: scale(1.18); z-index: 10; box-shadow: 0 18px 36px rgba(0,0,0,0.12); }
.card-body { padding: 0 var(--spacing-lg) var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-md); }
.card-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-sm); margin-top: auto; padding-top: var(--spacing-md); }
.caret { transition: transform var(--transition-speed) ease; color: var(--color-text-muted); }
.caret::before { content: '▾'; font-size: 1.5rem; }
.card.expanded .caret { transform: rotate(180deg); }
.card.expanded { border-color: rgba(0,0,0,.15); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
.card-thumb { position: relative; width: 100%; height: 180px; border-radius: 10px; overflow: hidden; background: linear-gradient(135deg, rgba(34,34,59,.06), rgba(154,140,152,.12)); border: 1px solid rgba(0,0,0,.04); }
.card-thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.thumb-fallback { width: 100%; height: 100%; display: grid; place-items: center; }
.thumb-badge { background: var(--color-accent); color: var(--color-text-dark); padding: 6px 10px; border-radius: 999px; font-weight: 700; font-size: .8rem; border: 1px solid rgba(0,0,0,.05); box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.card-overlay {
  position: absolute;
  inset: -12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: calc(var(--border-radius) + 6px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.16);
  padding: calc(var(--spacing-lg) + 4px);
  display: grid;
  gap: var(--spacing-md);
  opacity: 0;
  transform: translateZ(0) scale(0.98);
  pointer-events: none;
  transition: opacity var(--transition-speed) ease, transform var(--transition-speed) ease;
}
.card.expanded .card-overlay { opacity: 1; transform: scale(1); pointer-events: auto; }
.overlay-top { display: grid; gap: var(--spacing-sm); }
.overlay-thumb { width: 100%; height: 240px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,0,0,.06); background: #fff; }
.overlay-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.overlay-desc { color: var(--color-text-light); line-height: 1.7; }
.overlay-meta { display: flex; justify-content: space-between; align-items: center; gap: var(--spacing-sm); flex-wrap: wrap; }
.tags { display: flex; flex-wrap: wrap; gap: var(--spacing-sm); }
.tag { 
  background-color: var(--color-accent); 
  color: var(--color-text-dark); 
  font-size: 0.8rem; 
  font-weight: 700;
  font-family: var(--font-sans); 
  padding: 4px 10px; 
  border-radius: 999px; 
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.project-link { font-weight: 600; white-space: nowrap; color: var(--color-primary); }

/* Reports */
.subsection-title { margin: 0 0 var(--spacing-md); color: var(--color-text-light); font-size: 1.1rem; letter-spacing: .3px; text-transform: uppercase; text-align: center; }
.report-card { display: grid; gap: var(--spacing-sm); }
.report-meta { color: var(--color-text-muted); font-size: .9rem; }
.report-title { margin: 0; font-family: var(--font-display); color: var(--color-text-light); font-size: 1.15rem; }
.report-summary { margin: 0; color: var(--color-text-light); line-height: 1.7; }
.report-actions { display: flex; gap: 10px; flex-wrap: wrap; }

/* Experience */
.exp-list { 
  list-style: none; 
  padding: 0; 
  margin: 0; 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg); 
}
.exp-item { display: grid; gap: var(--spacing-sm); }
.exp-head { display: flex; justify-content: space-between; gap: var(--spacing-md); align-items: flex-start; flex-wrap: wrap; }
.exp-logos { display: inline-flex; align-items: center; gap: 12px; margin-bottom: var(--spacing-sm); }
.exp-logo-wrap { width: 64px; height: 64px; border-radius: 5px; background: #fff; border: 1px solid var(--color-border); display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.exp-logo { max-width: 80%; max-height: 80%; width: auto; height: auto; object-fit: contain; image-rendering: auto; }
.exp-title { display: grid; gap: 2px; }
.exp-role { margin: 0; font-size: 1.1rem; color: var(--color-text-light); font-family: var(--font-display); }
.exp-company { color: var(--color-text-muted); }
.exp-meta { color: var(--color-text-muted); font-size: .9rem; display: flex; align-items: center; gap: 6px; }
.exp-details { margin: 0; color: var(--color-text-light); line-height: 1.7; }
.exp-type { width: max-content; }
.exp-details-list { list-style: none; padding-left: 0; margin: 0; display: grid; gap: 6px; }
.exp-details-list li { color: var(--color-text-light); line-height: 1.6; }
.exp-details-list li::before { content: '* '; color: var(--color-text-light); }

/* Bubble cloud styles removed – reverted to square cards */

/* 7. Loading & Error States */
.skeleton { padding: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-md); background-color: var(--color-surface); border: 1px solid var(--color-border); }
.skeleton-bar { background: linear-gradient(90deg, var(--color-border) 25%, var(--color-light-bg) 50%, var(--color-border) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 4px; height: 16px; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.repo-error { display: none; }

/* 8. Footer */
.footer { text-align: center; padding: var(--spacing-xl) 0; color: var(--color-text-muted); border-top: 1px solid var(--color-border); margin-top: var(--spacing-xxl); }
.footer .footer-actions { display: flex; justify-content: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md); }
.footer .contact-btn { 
  background: none; 
  border: none; 
  box-shadow: none; 
  padding: 0; 
  color: var(--color-primary); 
  display: inline-flex; 
  align-items: center; 
  gap: 8px; 
}
.footer .contact-btn:hover { filter: none; text-decoration: underline; }
.footer .contact-icon { width: 18px; height: 18px; }

/* 9. About Section */
.about-grid { display: grid; grid-template-columns: 1fr; gap: var(--spacing-lg); }
.about-left { display: grid; place-items: center; }
.about-avatar { width: 100%; max-width: 260px; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 9999px; border: 3px solid var(--color-text-light); }
.about-avatar { box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
.about-avatar { background: #fff; }
.about-avatar { display: block; }
.about-avatar { image-rendering: auto; }
.about-avatar { height: auto; }
.about-avatar { contain: layout paint; }
.about-avatar { -webkit-user-drag: none; }
.about-avatar { -webkit-tap-highlight-color: transparent; }
.about-avatar { transform: translateZ(0); }
.about-avatar { will-change: transform; }
.about-right { display: grid; gap: var(--spacing-lg); align-content: start; }
.about-quote { margin: 0; color: var(--color-text-light); font-size: 1.05rem; line-height: 1.7; font-style: italic; }
.about-edu { display: grid; gap: var(--spacing-sm); }
.about-edu-title { margin: 0; color: var(--color-text-light); font-size: 1rem; letter-spacing: .3px; text-transform: uppercase; }
.edu-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.edu-item { color: var(--color-text-light); line-height: 1.6; }
.collage-wrap { margin-top: var(--spacing-xl); }
/* Collage: Uniform grid to form a clean rectangle */
.collage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
}
.collage-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  background: #fff;
  transform: translateZ(0);
  transition: transform var(--transition-speed) ease;
  z-index: 0;
}
.collage-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transform: scale(1);
  transition: transform var(--transition-speed) ease, filter var(--transition-speed) ease, opacity var(--transition-speed) ease;
  opacity: 0;
  animation: fadeIn 0.45s ease both;
}
.collage-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: opacity var(--transition-speed) ease;
}
.collage-view {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-weight: 700;
  color: var(--color-dark-bg);
  background: var(--color-text-dark);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}
.collage-view:hover { filter: brightness(0.95); }
.collage-view-icon { width: 18px; height: 18px; }
.collage-item:hover .collage-overlay { opacity: 1; }
/* no size/layout change on hover */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (min-width: 600px) {
  .collage-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1024px) {
  .collage-grid { grid-template-columns: repeat(4, 1fr); }
}

/* 10. Lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;
  z-index: 50;
  animation: fadeIn 0.2s ease both;
}
.lightbox-content {
  position: relative;
  max-width: min(92vw, 1000px);
  max-height: 90vh;
  background: #000;
  border-radius: 12px;
  overflow: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.lightbox-img {
  display: block;
  max-width: 100%;
  max-height: 86vh;
  width: auto;
  height: auto;
  object-fit: contain; /* ensures no trimming/cropping */
  background: #000;
}
.lightbox-close {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff;
  background: rgba(255,255,255,0.08);
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
}

/* 11. Project Modal */
.project-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;
  z-index: 60;
  animation: fadeIn 0.2s ease both;
}
.project-modal {
  width: min(92vw, 220px);
  max-height: 88vh;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 0 28px 80px rgba(0,0,0,0.22);
  overflow: auto;
  padding: calc(var(--spacing-xl) + 4px) var(--spacing-xl);
  position: relative;
}
.project-modal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.15);
  color: var(--color-text-light);
  background: #fff;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
}
.project-modal-title { margin: 0 0 var(--spacing-md); font-family: var(--font-display); color: var(--color-text-light); text-align: center; }
.project-modal-body { display: grid; gap: var(--spacing-lg); }
.project-modal-thumb { width: 100%; height: 280px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,0,0,0.06); background: #fff; }
.project-modal-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.project-modal-desc { color: var(--color-text-light); line-height: 1.8; margin: 0; text-align: center; }
.project-modal-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.project-modal-footer { display: flex; gap: 12px; flex-wrap: wrap; margin-top: var(--spacing-md); justify-content: center; }
.project-modal .project-link { background: none; padding: 0; border: none; color: var(--color-primary); }
@media (min-width: 900px) {
  .project-modal { width: min(88vw, 560px); }
  .project-modal-thumb { height: 340px; }
}
@media (min-width: 900px) {
  .about-grid { grid-template-columns: 320px 1fr; align-items: center; }
}

/* Responsive header nav */
@media (max-width: 800px) {
  .header-inner { position: relative; }
  .nav-toggle { 
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    padding: 10px 14px; 
    font-size: 20px; 
    border-width: 1px; 
    border-radius: 10px; 
    margin-left: -12px; /* nudge slightly left */
  }
  .nav { 
    position: absolute; 
    top: calc(100% + 10px); 
    right: 16px; 
    left: 16px; 
    background: var(--color-surface); 
    border: 1px solid var(--color-border); 
    border-radius: 10px; 
    padding: 10px;
    display: block; 
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px) scale(.98);
    transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease, visibility 0s linear .2s;
    pointer-events: none;
    flex-direction: column;
    gap: 6px; 
    z-index: 25;
  }
  .nav a, .nav .nav-contact-btn { 
    width: 100%; 
    text-align: left; 
    color: var(--color-text-light); /* dark text by default in light box */
    background: transparent;
  }
  .nav a:hover, .nav .nav-contact-btn:hover {
    color: var(--color-text-dark);              /* light text token */
    background: var(--color-dark-bg);          /* dark background on hover */
  }
  .nav.nav-open { 
    opacity: 1; 
    visibility: visible; 
    transform: translateY(0) scale(1); 
    transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease, visibility 0s linear 0s;
    pointer-events: auto; 
    flex-direction: column; 
  }
  .nav-toggle { 
    color: var(--color-text-dark);              /* always light icon */
    background: transparent;
  }
  .nav-toggle:hover {
    color: var(--color-text-dark);              /* keep light on hover */
    background: var(--color-dark-bg);           /* dark bg on hover */
  }
}
`}</style>
);

// =================================================================================
// 5. PAGE COMPONENT
// =================================================================================

function Home() {
  const trustedLogos = useMemo(() => {
    const modules = import.meta.glob('/src/assets/companies/*', { eager: true }) as Record<string, { default?: string }>;
    return Object.entries(modules)
      .map(([path, mod]) => ({ name: path.split('/').pop() || path, src: (mod?.default as string) || '' }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const collageImages = useMemo(() => {
    const modules = import.meta.glob('/src/assets/collage/*.{png,jpg,jpeg,webp,gif,PNG,JPG,JPEG,WEBP,GIF}', { eager: true }) as Record<string, { default?: string }>;
    return Object.entries(modules)
      .map(([path, mod]) => ({ name: path.split('/').pop() || path, src: (mod?.default as string) || '' }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const companyLogoEntries = useMemo(() => {
    return trustedLogos.map((l) => {
      const key = l.name.toLowerCase().replace(/\.(png|jpg|jpeg|webp|gif)$/i, '');
      const base = key.replace(/_?logo.*$/i, '');
      return { key, base, src: l.src };
    });
  }, [trustedLogos]);

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');
  const [projectModal, setProjectModal] = useState<StaticProject | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightboxSrc(null);
        setProjectModal(null);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function openLightbox(src: string, alt: string) {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }
  function closeLightbox() {
    setLightboxSrc(null);
  }
  function getLogosForCompany(companyName: string): string[] {
    const normalized = companyName.toLowerCase();
    const tokens = normalized
      .replace(/[^a-z0-9\s\-]/g, ' ')
      .split(/[\s\-·,]+/)
      .filter(Boolean);
    const aliasMap: Record<string, string> = {
      'jesuit refugee service': 'jrs',
      'jrs': 'jrs',
      'pontificia universidad javeriana': 'javeriana',
      'sii': 'sii',
      'sii colombia': 'sii',
      'amadeus': 'amadeus',
      'wizeline': 'wizeline',
      'nike': 'nike',
      'uts': 'uts',
      'grasply': 'grasply',
      'grasply ai': 'grasply',
    };
    const desiredBases = new Set<string>();
    for (const t of [normalized, ...tokens]) {
      const alias = aliasMap[t];
      if (alias) desiredBases.add(alias);
    }
    const chosen: string[] = [];
    for (const entry of companyLogoEntries) {
      // Prefer alias matches
      if (desiredBases.has(entry.base)) {
        if (!chosen.includes(entry.src)) chosen.push(entry.src);
        continue;
      }
      // Fallback: match if the base token is present in the company string or token list
      if (!entry.base || entry.base.length < 2) continue;
      if (normalized.includes(entry.base) || tokens.includes(entry.base)) {
        if (!chosen.includes(entry.src)) chosen.push(entry.src);
      }
    }
    // Limit to at most 2 to keep layout tight
    return chosen.slice(0, 2);
  }
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <TrustedBy logos={trustedLogos} />

        <div className="container">
          <section id="about" className="about" aria-label="About Me">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-left">
                <img className="about-avatar" src={profileImg} alt="Profile photo of Sebastian Vargas" />
              </div>
              <div className="about-right">
                <p className="about-quote">"I am a data enthusiast with 5 years of experience, eager to explore new opportunities at the intersection of technology, AI, and data-driven solutions. I am open to collaborations and passionate about utilizing my skills to create meaningful impact across diverse domains."</p>
                <div className="about-edu" aria-label="Education">
                  <h3 className="about-edu-title">Education</h3>
                  <ul className="edu-list">
                    <li className="edu-item">Systems Engineering — Pontificia Universidad Javeriana 🇨🇴</li>
                    <li className="edu-item">Master of Data Science and Innovation — University of Technology Sydney 🇦🇺</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collage-wrap" aria-label="Photo Collage">
              <div className="collage-grid">
                {collageImages.map((img) => (
                  <div key={img.name} className="collage-item">
                    <img className="collage-img" src={img.src} alt={img.name} loading="lazy" />
                    <div className="collage-overlay">
                      <button
                        className="collage-view"
                        onClick={() => openLightbox(img.src, img.name)}
                        aria-label={`View ${img.name}`}
                      >
                        <IconView className="collage-view-icon" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="experience" aria-label="Experience">
            <h2 className="section-title">Experience</h2>
            <ul className="exp-list">
              {experiences.map((e) => {
                const logos = getLogosForCompany(e.company);
                return (
                  <li key={`${e.company}-${e.role}-${e.dates}`} className="card static-card exp-item">
                    {logos.length > 0 && (
                      <div className="exp-logos" aria-label={`${e.company} logos`}>
                        {logos.map((src) => (
                          <div key={src} className="exp-logo-wrap">
                            <img className="exp-logo" src={src} alt={`${e.company} logo`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="exp-head">
                      <div className="exp-title">
                        <h3 className="exp-role">{e.role}</h3>
                        <div className="exp-company">{e.company}</div>
                      </div>
                      <div className="exp-meta">
                        <span className="exp-dates">{e.dates}</span>
                        {e.location && <span className="dot"> • </span>}
                        {e.location && <span className="exp-location">{e.location}</span>}
                      </div>
                    </div>
                    {e.details && Array.isArray(e.details) && (
                      <ul className="exp-details-list">
                        {e.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
                    {e.type && <div className="exp-type tag">{e.type}</div>}
                  </li>
                );
              })}
            </ul>
          </section>
          <Projects onOpenProject={setProjectModal} />

          <section id="reports" className="reports" aria-label="Reports">
            <h2 className="section-title">Reports</h2>
            <h3 className="subsection-title">Medium</h3>
            <ul className="project-grid">
              {mediumReports.map((r) => (
                <li key={r.title} className="card static-card">
                  <div className="report-card">
                    <div className="report-meta">{r.date}</div>
                    <h4 className="report-title">{r.title}</h4>
                    <p className="report-summary">{r.summary}</p>
                    <div className="report-actions">
                      <a className="project-link" href={r.url} target="_blank" rel="noopener noreferrer">
                        Read on Medium →
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {/* Concept section removed to keep only the requested project boxes */}
        </div>
      </main>
      
      <Footer />

      {lightboxSrc && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Image lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" aria-label="Close" onClick={closeLightbox}>×</button>
            <img className="lightbox-img" src={lightboxSrc} alt={lightboxAlt} />
          </div>
        </div>
      )}

      {projectModal && (
        <div className="project-modal-backdrop" role="dialog" aria-modal="true" aria-label="Project details" onClick={() => setProjectModal(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" aria-label="Close" onClick={() => setProjectModal(null)}>×</button>
            <div className="project-modal-header">
              <h3 className="project-modal-title">{projectModal.name}</h3>
            </div>
            <div className="project-modal-body">
              {projectModal.image && (
                <div className="project-modal-thumb">
                  <img src={projectModal.image} alt={`${projectModal.name} preview`} />
                </div>
              )}
              <p className="project-modal-desc">{projectModal.description}</p>
              {projectModal.tags && (
                <div className="project-modal-tags">
                  {projectModal.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              )}
            </div>
            <div className="project-modal-footer">
              {projectModal.links && projectModal.links.length > 0 ? (
                projectModal.links.map((l) => (
                  <a key={l.label} className="project-link" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} →
                  </a>
                ))
              ) : (
                <a className="project-link" href={projectModal.html_url} target="_blank" rel="noopener noreferrer">
                  View Repository →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;