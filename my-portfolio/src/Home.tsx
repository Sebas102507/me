import { useEffect, useState } from 'react';
import { CERTIFICATIONS, EDUCATION, WORK } from './data/experience';
import { PACKAGES } from './data/packages';
import { PROJECT_GROUPS } from './data/projects';
import { PUBLICATIONS } from './data/publications';
import { CertificationTimeline, EducationTimeline, WorkTimeline } from './components/Experience';
import { ContactCta, Footer } from './components/Footer';
import { Nav, type NavItem } from './components/Masthead';
import { PackageList } from './components/Packages';
import { Bookshelf, Hobbies, ValuePillars } from './components/Personal';
import { ProjectGroups } from './components/Projects';
import { PublicationTimeline } from './components/Publications';
import { Section, SubHead, TwoCol } from './components/Section';
import { emph } from './lib/emph';
import { Story } from './components/Story';
import { Hero, LogoStrip, Skills } from './components/TitleBlock';

const NAV: NavItem[] = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'books', label: 'Books' },
  { id: 'contact', label: 'Contact' },
];
const NAV_IDS = NAV.map((n) => n.id);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length || !('IntersectionObserver' in window)) return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) visible.set(en.target.id, en.boundingClientRect.top);
          else visible.delete(en.target.id);
        }
        if (visible.size) setActive([...visible.entries()].sort((a, b) => a[1] - b[1])[0][0]);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export default function Home() {
  const active = useActiveSection(NAV_IDS);
  useReveal();

  return (
    <>
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <Nav items={NAV} activeId={active} />

      <main id="main">
        <Hero />
        <LogoStrip />
        <ValuePillars />

        <Section
          id="story"
          eyebrow="The story"
          title="A *journey* from Bogotá to Sydney, in five chapters."
          intro="Where I come from, what I built along the way, and what each stop taught me."
        >
          <Story />
        </Section>

        <Section
          id="experience"
          eyebrow="Work experience"
          title="Every role, told as a *story*: the goal, the challenge, the outcome."
          intro="And the tools I used to get there."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Six years of making data *useful*.')}</h3>
                <p className="story-aside-text">
                  Humanitarian analytics in Bogotá, petabyte-scale platforms for travel and retail, adaptive AI tutors, and now a fundraising data estate in Sydney. Different
                  industries, the same job: find where value is leaking and build the thing that stops it.
                </p>
              </>
            }
          >
            <WorkTimeline items={WORK} />
          </TwoCol>
          <SubHead title="The toolbox: what I *reach for*" />
          <Skills />
        </Section>

        <Section
          id="projects"
          eyebrow="Projects and packages"
          title="Things I *built*, with the code to prove it."
          intro="Filter by what you care about. Every entry links to a public repository and, where it exists, a live deployment."
        >
          <ProjectGroups groups={PROJECT_GROUPS} />
          <SubHead title="Packages other people can *install*" count={PACKAGES.length} />
          <p className="sub-intro">Published on TestPyPI, the staging index, so pass the index URL when installing.</p>
          <PackageList items={PACKAGES} />
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="What I *studied*: degrees, courses and certifications."
          intro="From a Systems Engineering degree in Bogotá to a master's in Sydney, with the courses and certificates in between."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Always *learning* something.')}</h3>
                <p className="story-aside-text">
                  A bachelor's in Systems Engineering with honours for the thesis, a master's in Data Science and Innovation in progress, and a habit of adding a course,
                  a language or a certificate whenever a gap shows up.
                </p>
              </>
            }
          >
            <EducationTimeline items={EDUCATION} />
            <SubHead title="Certifications" count={CERTIFICATIONS.length} />
            <CertificationTimeline items={CERTIFICATIONS} />
          </TwoCol>
        </Section>

        <Section id="publications" eyebrow="Publications" title="Notes from *building* in public." intro="Articles and technical reports.">
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Writing it *down*.')}</h3>
                <p className="story-aside-text">When a build teaches me something worth keeping, I write it up so the next person can skip the dead ends.</p>
              </>
            }
          >
            <PublicationTimeline items={PUBLICATIONS} />
          </TwoCol>
        </Section>

        <Section id="books" eyebrow="Off the clock" title="What I do when I am *not* shipping." intro="Competitive programming, business books and building things for fun.">
          <Hobbies />
          <SubHead title="Books that changed how I *think*" />
          <Bookshelf />
        </Section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
