/**
 * Post-build pre-rendering script.
 * For each known route, creates dist/{route}/index.html with injected per-route
 * meta tags (title, description, OG, canonical). React still hydrates client-side.
 * Vercel serves the static HTML before the SPA fallback rewrite fires.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = 'https://gov.tesseract.academy';

const PAGE_META = {
  '/': {
    title: 'Tesseract Government Gateway - Research, AI & Public Sector Delivery Partner',
    description: 'Tesseract Academy delivers research-backed AI, data science, public engagement, survey design, and policy advisory services for UK and EU public sector organisations. Crown Commercial Service appointed supplier on RM6200, RM6094, RM6126.',
  },
  '/how-to-buy': {
    title: 'How to Buy - Procurement Routes | Tesseract Government Gateway',
    description: 'Commission Tesseract Academy through Crown Commercial Service frameworks RM6200 (AI DPS), RM6094 (Spark DPS), or RM6126 (Research & Insights DPS). Direct award available under Procurement Act 2023 threshold.',
  },
  '/capabilities': {
    title: 'Capabilities - AI, Research, Education & Survey Services | Tesseract Government Gateway',
    description: 'Six public sector service areas: AI consulting, research and policy advisory, public engagement, education and upskilling, survey design, AI ethics and governance. Case studies: Welsh Government, BridgeAI, NDTP, Skills England.',
  },
  '/use-cases': {
    title: 'Use Cases - Public Sector Project Evidence | Tesseract Government Gateway',
    description: 'Evidence of delivery: Welsh Government land valuation (1,916 LSOAs), National Digital Twin Programme AI ontology tool, BridgeAI (1,100 registrations, 4.6/5 satisfaction), Kalgera financial vulnerability research.',
  },
  '/research': {
    title: 'Research & Publications | Tesseract Government Gateway',
    description: 'Government-commissioned research and academic publications. Cited by Skills England alongside The Alan Turing Institute. Welsh Government land valuation report published on GOV.WALES March 2026.',
  },
  '/partnerships': {
    title: 'Consortium Partnerships - Innovate UK & Horizon Europe | Tesseract Government Gateway',
    description: 'Partner with Tesseract Academy on Innovate UK and Horizon Europe bids. Horizon Europe PIC: 880269472. Focus areas: trustworthy AI, digital twins, HealthTech, sustainable technology.',
  },
  '/compliance': {
    title: 'Compliance & Policies | Tesseract Government Gateway',
    description: 'Cyber Essentials certified, ISO 27001 aligned. PL £2M, EL £10M, PI £5M insurance. ICO ZB715782. DUNS 222180245. PPON PWJP-6874-MXDJ. Download all policy documents.',
  },
  '/testimonials': {
    title: 'Testimonials & Executive Training | Tesseract Government Gateway',
    description: 'Client reviews and executive AI training case studies. Workshops for US Navy (40+ participants), Vodafone, Philips leadership. 2,300 civil servants upskilled in 2024. Verified Clutch reviews.',
  },
  '/about': {
    title: 'About Tesseract Academy - Team & Credentials | Tesseract Government Gateway',
    description: 'Dr Stylianos Kampakis (PhD UCL, CStat, FRSS, 40+ publications) and Fabio Rovai MSc (UAL, NeurIPS reviewer). DV-cleared consultant available. Incorporated 2016. CCS frameworks RM6200, RM6094, RM6126.',
  },
  '/glossary': {
    title: 'AI & Procurement Glossary | Tesseract Government Gateway',
    description: '60+ definitions of AI, data science, and procurement terms used in UK public sector contracting. From Algorithmic Impact Assessment to Zero-Shot Learning.',
  },
  '/case-studies/welsh-government-land-valuation': {
    title: 'Welsh Government Land Valuation Research | Tesseract Government Gateway',
    description: 'Five land valuation methodologies tested across 1,916 Welsh LSOAs (99% of Welsh geography). Published March 2026 on GOV.WALES. Informs Welsh Government local government finance policy.',
  },
  '/case-studies/national-digital-twin-programme': {
    title: 'AI Ontology Extension Generator — NDTP | Tesseract Government Gateway',
    description: 'Open-source AI ontology tool for the National Digital Twin Programme (Dept for Business and Trade). Four-step wizard, NER + LLMs, CSV/JSON/RDF support. Apache 2.0. Published on GitHub.',
  },
  '/case-studies/bridgeai-creative-industries': {
    title: 'BridgeAI: AI for UK Creative Industries | Tesseract Government Gateway',
    description: 'Innovate UK BridgeAI programme delivery. 1,100 registrations vs 200 target. Satisfaction 4.6/5. Skills Hub launch at Ona Studios, London. Co-delivered with PwC. Contract GSS24646.',
  },
  '/case-studies/kalgera-financial-vulnerability': {
    title: 'Financial Vulnerability Research — Kalgera | Tesseract Government Gateway',
    description: 'Qualitative research validating AI-driven financial vulnerability signals for Kalgera/Fintech Scotland. Ethical framework under Adult Support and Protection (Scotland) Act 2007. Signal validation and intervention acceptability reports delivered.',
  },
  '/services/ai-consulting': {
    title: 'AI Consulting for UK Public Sector | Tesseract Government Gateway',
    description: 'Custom AI model development, NLP pipelines, and predictive analytics for UK government. CCS RM6200 appointed supplier. GDS aligned. Welsh Government ML land valuation and NDTP ontology case studies.',
  },
  '/services/research-policy': {
    title: 'Research & Policy Advisory | Tesseract Government Gateway',
    description: 'Evidence-based research design, systematic literature reviews, policy analysis for UK government. Published on GOV.WALES. Cited by Skills England alongside The Alan Turing Institute.',
  },
  '/services/public-engagement': {
    title: 'Public Engagement & Participatory Research | Tesseract Government Gateway',
    description: 'Deliberative workshops, citizen panels, inclusive co-design, and participatory research. Ethical framework. Adult Support and Protection (Scotland) Act 2007 compliant. CCS RM6126.',
  },
  '/services/survey-design': {
    title: 'Survey Design & Delivery | Tesseract Government Gateway',
    description: 'End-to-end survey methodology, questionnaire design, mixed-mode collection, and statistical analysis. Qualifications Wales 3-year contract (2026-2029). CCS RM6126 appointed supplier.',
  },
  '/services/education-upskilling': {
    title: 'AI Education & Upskilling | Tesseract Government Gateway',
    description: '2,300 civil servants upskilled in 2024. Completion rate 68% → 91%. Engagement 3.4 → 4.6/5. US Navy executive workshop (40+ participants). UK Government Business Academy partner.',
  },
  '/services/ai-governance': {
    title: 'AI Ethics & Governance | Tesseract Government Gateway',
    description: 'EU AI Act, NIST AI RMF, ISO 42001 compliance. Bias auditing, algorithmic impact assessments. Open-source governance platform (48 tools). Cyber Essentials certified. FCA stablecoin consultation.',
  },
  '/insights': {
    title: 'UK Public Sector AI Insights — Research Findings | Tesseract Government Gateway',
    description: 'Original research from Tesseract Academy: civil service AI upskilling achieves 91% completion, land valuation ML analysis across 1,916 Welsh LSOAs, BridgeAI 450% oversubscription. Evidence from UK government AI delivery 2022-2026.',
  },
};

function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMeta(html, route) {
  const meta = PAGE_META[route] || PAGE_META['/'];
  const canonical = `${BASE}${route === '/' ? '' : route}`;
  const title = escapeHtmlAttr(meta.title);
  const desc = escapeHtmlAttr(meta.description);

  return html
    .replace(/(<title>)[^<]*(< \/title>|<\/title>)/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${desc}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${desc}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonical}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${canonical}"`);
}

async function run() {
  const template = readFileSync(resolve(ROOT, 'dist/index.html'), 'utf-8');
  const routes = Object.keys(PAGE_META);
  let count = 0;

  for (const route of routes) {
    const html = injectMeta(template, route);

    if (route === '/') {
      writeFileSync(resolve(ROOT, 'dist/index.html'), html);
    } else {
      const dir = resolve(ROOT, `dist${route}`);
      mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, 'index.html'), html);
    }
    count++;
    console.log(`  ✓ ${route}`);
  }

  console.log(`\nPre-rendered ${count} routes.`);
}

run().catch(err => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
