// One-off: publish the 93 semantics routes as permanent redirects to
// tesseractsemantics.com, and drop them from this site's sitemap.
//
// Paths are byte identical on both hosts, so every rule is a host-only swap,
// which is the single biggest lever for limiting ranking loss on a partial move.
// The route list is generated, never typed, so a page cannot be missed.
import { readFileSync, writeFileSync } from 'node:fs';

const TARGET = 'https://tesseractsemantics.com';
const LIST = '/Users/fabio/projects/tesseract-semantics/docs/superpowers/specs/migrating-routes.txt';

const routes = readFileSync(LIST, 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean);

const cfg = JSON.parse(readFileSync('vercel.json', 'utf8'));
const existing = new Set((cfg.redirects || []).map((r) => r.source));

const added = routes
  .filter((r) => !existing.has(r))
  .map((r) => ({ source: r, destination: `${TARGET}${r}`, permanent: true }));

cfg.redirects = [...(cfg.redirects || []), ...added];
writeFileSync('vercel.json', `${JSON.stringify(cfg, null, 2)}\n`);
console.log(`redirects ${existing.size} -> ${cfg.redirects.length} (added ${added.length})`);

// Sitemap: a migrated URL must stop being advertised here.
const migrated = new Set(routes);
const xml = readFileSync('public/sitemap.xml', 'utf8');
const before = (xml.match(/<loc>/g) || []).length;

const kept = xml
  .split(/(?=<url>)/)
  .filter((block) => {
    const m = block.match(/<loc>https?:\/\/gov\.tesseract\.academy([^<]*)<\/loc>/);
    if (!m) return true;
    const path = m[1].replace(/\/$/, '') || '/';
    return !migrated.has(path);
  })
  .join('');

writeFileSync('public/sitemap.xml', kept);
console.log(`sitemap ${before} -> ${(kept.match(/<loc>/g) || []).length} URLs`);
