import { PROFILE } from "../data/profile";

/**
 * Draft LinkedIn banner. LinkedIn renders the cover at 1584 × 396 px (4:1).
 * The card below is the design at that aspect ratio; everything inside scales with the width
 * so a screenshot at 1584 px wide is the finished asset.
 */
const TAGS = [
  "Data Engineer",
  "Machine Learning",
  "Generative AI",
  "Business Value",
];

export function LinkedInBanner() {
  return (
    <section
      className="section banner-section"
      id="banner"
      aria-labelledby="banner-h"
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Draft · LinkedIn banner</span>
          <h2 id="banner-h">Cover image, 1584 × 396.</h2>
          <p>
            Temporary preview. The dashed zone bottom-left is where LinkedIn
            places the profile photo on desktop, so nothing important sits
            there. The standalone page has no guide and is the one to
            screenshot.
          </p>
        </div>

        <div className="banner-wrap">
          <div
            className="banner"
            role="img"
            aria-label={`LinkedIn banner: Value is what matters in life. ${PROFILE.shortName}, data and AI engineer. ${PROFILE.site}`}
          >
            <span className="banner-ghost" aria-hidden="true">
              ENGINEER
            </span>
            <div className="banner-left">
              <span className="banner-kicker">
                <span className="banner-dot" /> Data & AI · Sydney
              </span>
              <h3 className="banner-title">
                <span className="banner-value">Value</span> is what matters in
                life.
              </h3>
              <ul className="banner-tags" aria-hidden="true">
                {TAGS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="banner-right" aria-hidden="true">
              <span className="banner-url">jsebastianv.com</span>
              </div>
            <span className="banner-safe" aria-hidden="true">
              profile photo area
            </span>
          </div>
        </div>

        <div className="banner-actions">
          <a
            className="btn btn-secondary btn-sm"
            href="/banner.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open standalone banner ↗
          </a>
          <span className="banner-hint">
            Export: open the standalone page, set the window to at least 1584 px
            wide, take a full-page screenshot.
          </span>
        </div>
      </div>
    </section>
  );
}
