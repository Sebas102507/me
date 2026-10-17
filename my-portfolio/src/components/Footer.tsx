import { PROFILE } from '../data/profile';
import { IconLinkedIn, IconMail } from './Icons';
import { emph } from '../lib/emph';

export function ContactCta() {
  return (
    <section className="cta container" id="contact" aria-labelledby="contact-h">
      <div className="cta-card">
        <span className="eyebrow">Contact</span>
        <h2 id="contact-h">{emph('Let’s write the *next chapter* together.')}</h2>
        <p>If you are building something in applied machine learning, data platforms or research engineering and want a partner who ships, I would love to hear from you. Email is the fastest way.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            <IconMail /> {PROFILE.email}
          </a>
          <a className="btn btn-secondary" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>
            © {year} {PROFILE.name} · {PROFILE.location}
          </span>
          <div className="footer-links">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
              Medium
            </a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
