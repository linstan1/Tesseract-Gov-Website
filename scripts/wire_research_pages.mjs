// Idempotent wiring for new /research pages.
// For each spec, inserts: App.tsx lazy import + PAGE_META + <Route>;
// entry-server.tsx sync import + <Route>; prerender.mjs PAGE_META.
// Safe to re-run: every insert checks for the marker first.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Page specs. Add entries here; re-run to wire.
const PAGES = JSON.parse(readFileSync(join(ROOT, 'scripts', 'research_pages.json'), 'utf8'));

function patch(file, edits) {
  let s = readFileSync(file, 'utf8');
  let n = 0;
  for (const [marker, anchor, insert, where] of edits) {
    if (s.includes(marker)) continue; // already wired
    const idx = s.indexOf(anchor);
    if (idx === -1) { console.error(`ANCHOR MISSING in ${file}: ${anchor.slice(0, 60)}`); continue; }
    if (where === 'after') {
      const end = idx + anchor.length;
      s = s.slice(0, end) + insert + s.slice(end);
    } else {
      s = s.slice(0, idx) + insert + s.slice(idx);
    }
    n++;
  }
  writeFileSync(file, s);
  return n;
}

const appFile = join(ROOT, 'App.tsx');
const esFile = join(ROOT, 'entry-server.tsx');
const preFile = join(ROOT, 'scripts', 'prerender.mjs');
const csFile = join(ROOT, 'data', 'caseStudies.ts');

function patchCaseStudies(specs) {
  let s = readFileSync(csFile, 'utf8');
  let n = 0;
  for (const p of specs) {
    if (!p.caseStudy) continue;
    if (s.includes(`id: '${p.caseStudy.id}'`) || s.includes(`id: "${p.caseStudy.id}"`)) continue;
    const c = p.caseStudy;
    const entry = `  {\n    id: ${JSON.stringify(c.id)},\n    slug: ${JSON.stringify(p.slug)},\n    title: ${JSON.stringify(c.title)},\n    category: 'open-demo',\n    challenge: ${JSON.stringify(c.challenge)},\n    intervention: ${JSON.stringify(c.intervention)},\n    assurance: ${JSON.stringify(c.assurance)},\n    outcome: ${JSON.stringify(c.outcome)},\n    reusable: ${JSON.stringify(c.reusable)},\n  },\n`;
    const anchor = '\n];';
    const idx = s.lastIndexOf(anchor);
    s = s.slice(0, idx) + '\n' + entry.replace(/\n$/, '') + s.slice(idx);
    n++;
  }
  writeFileSync(csFile, s);
  return n;
}

// Anchors (stable lines already in the files).
const APP_LAZY_ANCHOR = `const VictimWitnessEvaluation = lazy(() => import('./pages/research/VictimWitnessEvaluation').then(m => ({ default: m.VictimWitnessEvaluation })));`;
const APP_META_ANCHOR = `  '/research/victim-witness-evaluation': {`;
const APP_ROUTE_ANCHOR = `              <Route path="/research/victim-witness-evaluation" element={<VictimWitnessEvaluation />} />`;
const ES_IMPORT_ANCHOR = `import { VictimWitnessEvaluation } from './pages/research/VictimWitnessEvaluation';`;
const ES_ROUTE_ANCHOR = `        <Route path="/research/victim-witness-evaluation" element={<VictimWitnessEvaluation />} />`;
const PRE_META_ANCHOR = `  '/research/victim-witness-evaluation': {`;

let total = 0;
for (const p of PAGES) {
  const { component, importPath, slug, title, description } = p;
  const metaBlock = `\n  '${slug}': {\n    title: ${JSON.stringify(title)},\n    description: ${JSON.stringify(description)},\n  },`;

  total += patch(appFile, [
    [`m.${component} }`, APP_LAZY_ANCHOR, `\nconst ${component} = lazy(() => import('${importPath}').then(m => ({ default: m.${component} })));`, 'after'],
    [`'${slug}':`, APP_META_ANCHOR, metaBlock + '\n', 'before'],
    [`path="${slug}"`, APP_ROUTE_ANCHOR, `\n              <Route path="${slug}" element={<${component} />} />`, 'after'],
  ]);

  total += patch(esFile, [
    [`{ ${component} }`, ES_IMPORT_ANCHOR, `\nimport { ${component} } from '${importPath}';`, 'after'],
    [`path="${slug}"`, ES_ROUTE_ANCHOR, `\n        <Route path="${slug}" element={<${component} />} />`, 'after'],
  ]);

  total += patch(preFile, [
    [`'${slug}':`, PRE_META_ANCHOR, metaBlock + '\n', 'before'],
  ]);
}
total += patchCaseStudies(PAGES);
console.log(`wiring inserts applied: ${total}`);
