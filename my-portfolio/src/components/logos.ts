const modules = import.meta.glob('/src/assets/companies/*', { eager: true }) as Record<string, { default?: string }>;

export type Logo = { key: string; file: string; src: string };

export const LOGOS: Logo[] = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.split('/').pop() || path;
    const key = file
      .toLowerCase()
      .replace(/\.(png|jpe?g|webp|svg|gif)$/i, '')
      .replace(/_?logo_?$/i, '')
      .replace(/_+$/, '');
    return { key, file, src: mod?.default || '' };
  })
  .filter((l) => l.src)
  .sort((a, b) => a.key.localeCompare(b.key));

export function logosFor(keys: string[] = []): Logo[] {
  return keys.map((k) => LOGOS.find((l) => l.key === k)).filter((l): l is Logo => Boolean(l));
}

export const LOGO_NAMES: Record<string, string> = {
  amadeus: 'Amadeus',
  boston_college: 'Boston College',
  databricks: 'Databricks',
  fluppy: 'Fluppy',
  microsoft: 'Microsoft',
  british_council: 'British Council',
  grasply: 'Grasply AI',
  javeriana: 'Pontificia Universidad Javeriana',
  jrs: 'Jesuit Refugee Service',
  nike: 'Nike',
  sii: 'SII Colombia',
  snowflake: 'Snowflake',
  uoc: 'University of Cincinnati',
  uts: 'University of Technology Sydney',
  wizeline: 'Wizeline',
};
