/**
 * IndexNow submission for gov.tesseract.academy.
 *
 * Pings api.indexnow.org with every prerendered route + indexed PDF.
 * One ping reaches Bing, Yandex, Seznam, Naver, Yep — and Brave's index,
 * which is what claude.ai's "search the web" tool queries.
 *
 * Run after each deploy:
 *   npm run indexnow
 *
 * Key file MUST be reachable at:
 *   https://gov.tesseract.academy/{KEY}.txt
 * containing the key as plain text. Verified by IndexNow before accepting.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const KEY = '44de60a1075973a36dd1221501074261';
const HOST = 'gov.tesseract.academy';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function extractUrls(sitemapXml) {
  const matches = sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return Array.from(matches, (m) => m[1].trim());
}

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(`Key file unreachable: ${KEY_LOCATION} (HTTP ${res.status}). Deploy must finish before submitting.`);
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`Key file content mismatch at ${KEY_LOCATION}. Expected "${KEY}", got "${body.slice(0, 40)}".`);
  }
  console.log(`✓ Key file verified at ${KEY_LOCATION}`);
}

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

async function run() {
  const sitemapPath = resolve(ROOT, 'public/sitemap.xml');
  const urls = extractUrls(readFileSync(sitemapPath, 'utf-8'));
  if (urls.length === 0) {
    throw new Error(`No <loc> entries found in ${sitemapPath}`);
  }
  console.log(`Submitting ${urls.length} URLs to IndexNow:`);
  urls.forEach((u) => console.log(`  ${u}`));

  await verifyKeyFile();

  const { status, body } = await submit(urls);
  console.log(`\nIndexNow response: HTTP ${status}`);
  if (body) console.log(body);

  // IndexNow status meanings:
  //   200 — accepted, URLs scheduled for crawl
  //   202 — accepted with verification pending
  //   400 — bad request (malformed)
  //   403 — key not valid
  //   422 — host/URL mismatch
  //   429 — too many requests
  if (status === 200 || status === 202) {
    console.log(`\n✓ Submitted to Bing, Yandex, Seznam, Naver, Yep. Indexing typically completes in 1–7 days.`);
  } else {
    console.error(`\n✗ Submission failed.`);
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(`IndexNow submission failed: ${err.message}`);
  process.exit(1);
});
