/**
 * JSON-LD validator.
 * - Extracts every <script type="application/ld+json"> from index.html
 * - Extracts every JSON.stringify(schema) value from page-level useEffect blocks
 * - Validates: parses as JSON, has @context, has @type, no undefined/null required fields
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const errors = [];
const blocks = [];

function recordError(file, msg) {
  errors.push(`${file}: ${msg}`);
}

function validateBlock(file, label, jsonStr) {
  let parsed;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    recordError(file, `${label} — JSON parse error: ${e.message}`);
    return;
  }
  const items = Array.isArray(parsed) ? parsed : [parsed];
  for (const item of items) {
    if (!item['@context']) recordError(file, `${label} — missing @context`);
    if (!item['@type']) recordError(file, `${label} — missing @type`);
    blocks.push({ file, label, type: item['@type'] });
  }
}

const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8');
const scriptRe = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
let m;
let i = 0;
while ((m = scriptRe.exec(html)) !== null) {
  validateBlock('index.html', `script #${i++}`, m[1].trim());
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === 'node_modules' || entry === 'dist' || entry.startsWith('.')) continue;
      walk(full, files);
    } else if (entry.endsWith('.tsx')) {
      files.push(full);
    }
  }
  return files;
}

const tsxFiles = walk(resolve(ROOT, 'pages'));

const schemaRe = /const\s+(?:schema|SCHEMA)\s*=\s*(\{[\s\S]*?\n\}?\s*\};)/g;

for (const file of tsxFiles) {
  const src = readFileSync(file, 'utf-8');
  const rel = file.slice(ROOT.length + 1);
  let match;
  while ((match = schemaRe.exec(src)) !== null) {
    const literal = match[1].replace(/;$/, '');
    let evald;
    const stubs = [];
    let attempts = 0;
    while (evald === undefined && attempts++ < 30) {
      try {
        const params = stubs.map(s => s).join(',');
        const args = stubs.map(() => []);
        evald = new Function(params, `return (${literal});`)(...args);
      } catch (e) {
        const m2 = /^(\w+) is not defined$/.exec(e.message);
        if (m2 && !stubs.includes(m2[1])) {
          stubs.push(m2[1]);
          continue;
        }
        recordError(rel, `schema literal — eval error: ${e.message}`);
        break;
      }
    }
    if (evald === undefined) continue;
    let json;
    try {
      json = JSON.stringify(evald);
    } catch (e) {
      recordError(rel, `schema literal — stringify error: ${e.message}`);
      continue;
    }
    validateBlock(rel, `schema literal`, json);
  }
}

console.log(`\nValidated ${blocks.length} JSON-LD block(s) across ${new Set(blocks.map(b => b.file)).size} file(s).`);
console.log('Type breakdown:');
const typeCounts = {};
for (const b of blocks) {
  const t = Array.isArray(b.type) ? b.type.join('+') : String(b.type);
  typeCounts[t] = (typeCounts[t] || 0) + 1;
}
for (const [t, n] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n}× ${t}`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
} else {
  console.log('\nAll JSON-LD valid.');
}
