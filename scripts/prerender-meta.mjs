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
  '/sectors': {
    title: 'Sector Vertical Landing Pages | Tesseract Government Gateway',
    description: 'AI, research, and data services tailored for every UK government sector — NHS, MHCLG, DfE, MoD, MoJ, DfT, DWP, HMRC, Welsh, Scottish, and Northern Irish governments. Crown Commercial Service appointed supplier.',
  },
  '/sectors/health-nhs': {
    title: 'AI & Research for NHS and UK Health Sector | Tesseract Government Gateway',
    description: 'AI, research, and data services for NHS England, NHS Trusts, NICE, MHRA, and Department of Health and Social Care. Clinical safety, IG Toolkit/DSPT compliance, MHRA SaMD readiness. CCS RM6200 supplier.',
  },
  '/sectors/local-government': {
    title: 'AI & Research for UK Local Government and Councils | Tesseract Government Gateway',
    description: 'AI, research, and survey services for MHCLG, LGA, councils, and Oflog. Welsh Government land valuation experience across 1,916 LSOAs. CCS RM6200 / RM6126 supplier with NAO and ONS-aligned methodologies.',
  },
  '/sectors/education-skills': {
    title: 'AI & Research for DfE, Skills England and Education Sector | Tesseract Government Gateway',
    description: 'AI, research, and education services for DfE, Skills England, OfS, JISC, and UKRI. 2,300 civil servants upskilled, 91% completion rate, BridgeAI Skills Hub delivery (1,100 registrations). CCS RM6126 supplier.',
  },
  '/sectors/defence-security': {
    title: 'AI & Research for UK Defence and National Security | Tesseract Government Gateway',
    description: 'AI assurance, ontology, and research services for MoD, Dstl, DASA, NCSC, and UK AI Safety Institute. NDTP ontology delivery experience. DV-cleared associate available. CCS RM6200 supplier.',
  },
  '/sectors/justice-policing': {
    title: 'AI & Research for UK Justice and Policing | Tesseract Government Gateway',
    description: 'AI assurance, algorithmic transparency, and research services for MoJ, HMCTS, HMPPS, College of Policing, and NPCC. ATRS-ready model documentation. ICO-aligned algorithmic auditing. CCS RM6200 supplier.',
  },
  '/sectors/transport-infrastructure': {
    title: 'AI & Research for UK Transport and Infrastructure | Tesseract Government Gateway',
    description: 'AI, digital twin, and research services for DfT, Network Rail, TfL, HS2, National Highways, CAA, and the National Infrastructure Commission. NDTP-compatible ontology methodology. CCS RM6200 supplier.',
  },
  '/sectors/welfare-revenue': {
    title: 'AI & Research for DWP and HMRC | Tesseract Government Gateway',
    description: 'AI assurance, equality impact assessments, and research services for DWP, HMRC, HM Treasury, and OBR. EHRC-aligned bias auditing for benefits, fraud, and tax decision-support models. CCS RM6200 supplier.',
  },
  '/sectors/devolved-nations': {
    title: 'AI & Research for Welsh, Scottish and NI Devolved Governments | Tesseract Government Gateway',
    description: 'AI, research, and survey services for Welsh Government, Scottish Government, and Northern Ireland Executive. Published on GOV.WALES March 2026 (1,916 LSOAs). Sell2Wales, Public Contracts Scotland, eTendersNI registered.',
  },
  '/resources': {
    title: 'Free UK Public Sector AI Resources & Practitioner Guides | Tesseract Government Gateway',
    description: 'Free practitioner resources for UK government procurement, digital, and policy teams. AI procurement guide, AI readiness checklist, and 60+ term glossary. Cited GOV.UK Service Manual, NIST AI RMF, EU AI Act sources.',
  },
  '/resources/ai-procurement-guide': {
    title: 'How to Commission AI Services from UK Public Sector Suppliers | Tesseract Government Gateway',
    description: 'Definitive guide to commissioning AI and research services in UK government. Covers CCS RM6200, RM6094 Spark, RM6126, Procurement Act 2023, FaTS, DASA, devolved portals. Authored by Dr Stylianos Kampakis.',
  },
  '/resources/ai-readiness-checklist': {
    title: 'AI Readiness Self-Assessment Checklist for UK Public Sector | Tesseract Government Gateway',
    description: 'Free 12-question self-assessment for UK public sector teams considering AI procurement. ICO, CDDO, NIST AI RMF, ATRS, and EHRC-referenced criteria. Authored by Dr Stylianos Kampakis.',
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
