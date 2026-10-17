# jsebastianv.com

Personal site of Juan Vargas T.: a single-page portfolio with hero, experience, selected projects, published Python packages, writing, photos and contact.

Built with React 19, TypeScript and Vite. No runtime data fetching: everything on the page comes from the typed data files in `src/data/`, so the site can be updated by editing those files alone.

## Structure

```
src/
  data/
    profile.ts        name, title, abstract, keywords, skills
    experience.ts     industry roles, research work, education
    projects.ts       selected projects grouped by theme, with links
    packages.ts       published Python packages
    publications.ts   articles and technical reports
  components/         nav, hero, collapsible sections, story, experience, projects, books, footer
  styles/global.css   design tokens (light only), layout, components
  assets/
    me/               profile.png is the hero portrait, a cutout with transparent background (replace it to update the photo)
    story/            photos used in the story and experience sections
    books/            book covers
    companies/        organisation logos (file name = logo key)
    collage/          gallery images
```

Logos are matched to experience entries by key: `uts_logo.png` is referenced as `logoKeys: ['uts']`. Images dropped into `assets/collage/` appear in the gallery automatically.

## Palette

| Token | Hex | Use |
|---|---|---|
| ink | `#0a0908` | text, dark cards, CTA band |
| slate | `#22333b` | primary buttons, gradients |
| paper | `#eae0d5` | soft tints and chips |
| tan | `#c6ac8f` | accents, bullets, hero glow |
| umber | `#5e503f` | muted text |

