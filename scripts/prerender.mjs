/**
 * Static Site Generation: per-route HTML.
 * - Imports compiled SSR bundle (dist-ssr/entry-server.js).
 * - For each route: calls render(url) → React tree as HTML string.
 * - Injects into <div id="root">{html}</div> of dist/index.html template.
 * - Also injects per-route <title>, meta description, og:*, canonical.
 * - Writes dist/{route}/index.html.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = 'https://gov.tesseract.academy';

const PAGE_META = {
  '/': {
    title: 'Tesseract Academy for the Public Sector - Research, AI & Public Sector Delivery Partner',
    description: 'Tesseract Academy delivers research-backed AI, data science, public engagement, survey design, and policy advisory services for UK and EU public sector organisations. Crown Commercial Service appointed supplier on RM6200, RM6094, RM6126.',
  },
  '/how-to-buy': {
    title: 'How to Buy - Procurement Routes | Tesseract Academy for the Public Sector',
    description: 'Commission Tesseract Academy through Crown Commercial Service frameworks RM6200 (AI DPS), RM6094 (Spark DPS), or RM6126 (Research & Insights DPS). Direct award available under Procurement Act 2023 threshold.',
  },
  '/capabilities': {
    title: 'Capabilities - AI, Research, Education & Survey Services | Tesseract Academy for the Public Sector',
    description: 'Six public sector service areas: AI consulting, research and policy advisory, public engagement, education and upskilling, survey design, AI ethics and governance. Case studies: Welsh Government, BridgeAI, NDTP, Skills England.',
  },
  '/use-cases': {
    title: 'Use Cases - Public Sector Project Evidence | Tesseract Academy for the Public Sector',
    description: 'Evidence of delivery: Welsh Government land valuation (1,916 LSOAs), National Digital Twin Programme AI ontology tool, BridgeAI (1,100 registrations, 4.6/5 satisfaction), Kalgera financial vulnerability research.',
  },
  '/research': {
    title: 'Research & Publications | Tesseract Academy for the Public Sector',
    description: 'Tesseract Foundational Research programme, government-commissioned research and academic publications. Cited by Skills England alongside The Alan Turing Institute. Welsh Government land valuation report published on GOV.WALES March 2026.',
  },
  '/partnerships': {
    title: 'Consortium Partnerships - Innovate UK & Horizon Europe | Tesseract Academy for the Public Sector',
    description: 'Partner with Tesseract Academy on Innovate UK and Horizon Europe bids. Horizon Europe PIC: 880269472. Focus areas: trustworthy AI, digital twins, HealthTech, sustainable technology.',
  },
  '/compliance': {
    title: 'Compliance & Policies | Tesseract Academy for the Public Sector',
    description: 'Cyber Essentials certified, ISO 27001 aligned. PL £2M, EL £10M, PI £5M insurance. ICO ZB715782. DUNS 222180245. PPON PWJP-6874-MXDJ. Download all policy documents.',
  },
  '/testimonials': {
    title: 'Testimonials & Executive Training | Tesseract Academy for the Public Sector',
    description: 'Client reviews and executive AI training case studies. Workshops for US Navy (40+ participants), Vodafone, Philips leadership. UK Government Business Academy webinars (2025). Verified Clutch reviews.',
  },
  '/about': {
    title: 'About Tesseract Academy - Team & Credentials | Tesseract Academy for the Public Sector',
    description: 'Dr Stylianos Kampakis (PhD UCL, CStat, FRSS, 40+ publications) and Fabio Rovai MSc (UAL, NeurIPS reviewer). DV-cleared consultant available. Incorporated 2016. CCS frameworks RM6200, RM6094, RM6126.',
  },
  '/glossary': {
    title: 'AI & Procurement Glossary | Tesseract Academy for the Public Sector',
    description: '60+ definitions of AI, data science, and procurement terms used in UK public sector contracting. From Algorithmic Impact Assessment to Zero-Shot Learning.',
  },
  '/research/welsh-government-land-valuation': {
    title: 'Welsh Government Land Valuation Research | Tesseract Academy for the Public Sector',
    description: 'Five land valuation methodologies tested across 1,916 Welsh LSOAs (99% of Welsh geography). Published March 2026 on GOV.WALES. Informs Welsh Government local government finance policy.',
  },
  '/research/national-digital-twin-programme': {
    title: 'AI Ontology Extension Generator — NDTP | Tesseract Academy for the Public Sector',
    description: 'Open-source AI ontology tool for the National Digital Twin Programme (Dept for Business and Trade). Four-step wizard, NER + LLMs, CSV/JSON/RDF support. Apache 2.0. Published on GitHub.',
  },
  '/research/bridgeai-creative-industries': {
    title: 'BridgeAI: AI for UK Creative Industries | Tesseract Academy for the Public Sector',
    description: 'Innovate UK BridgeAI programme delivery. 1,100 registrations vs 200 target. Satisfaction 4.6/5. Skills Hub launch at Ona Studios, London. Co-delivered with PwC. Contract GSS24646.',
  },
  '/research/kalgera-financial-vulnerability': {
    title: 'Financial Vulnerability Research — Kalgera | Tesseract Academy for the Public Sector',
    description: 'Qualitative research validating AI-driven financial vulnerability signals for Kalgera/Fintech Scotland. Ethical framework under Adult Support and Protection (Scotland) Act 2007. Signal validation and intervention acceptability reports delivered.',
  },
  '/research/wastewater-effluent-data-quality': {
    title: 'Wastewater Effluent Data Quality | Tesseract Academy for the Public Sector',
    description: 'Open-data demonstration of statistical and rule-based quality assurance for continuous wastewater effluent monitoring: 1,382 days of full-scale works data, SHACL rules including the COD >= BOD physical invariant. Open source via Open Ontologies.',
  },
  '/research/computation-ready-aerial-heritage': {
    title: 'Computation-Ready Aerial Photography Heritage | Tesseract Academy for the Public Sector',
    description: 'From digitised to computable: an open standard for aerial photography heritage. 292 real NCAP frames harvested from the public catalogue, reprojected to WGS84 and validated at zero SHACL violations, with a published RiC-O to STAC crosswalk. Open source via Open Ontologies.',
  },
  '/research/zero-emission-flight-ecosystem': {
    title: 'Mapping the UK Zero-Emission Flight Ecosystem | Tesseract Academy for the Public Sector',
    description: 'An open, SHACL-validated knowledge graph of the UK hydrogen and electric aviation ecosystem: 42 real entities and 55 relationships across organisations, airports, programmes, projects, funders and technologies, validated at zero SHACL violations with enforced referential integrity. Open source via Open Ontologies.',
  },
  '/research/wrap-food-loss-waste-taxonomy': {
    title: 'WRAP Food Loss and Waste Data Taxonomy | Tesseract Academy for the Public Sector',
    description: 'Commissioned by WRAP (PRC228) to build a structured, machine-readable Food Loss and Waste data taxonomy: 5 coded dimensions and 84 entities in SKOS and JSON-LD, grounded in the FLW Standard, the WRAP Data Capture Sheet and Codex GSFA, supporting 400+ Courtauld Commitment 2030 organisations.',
  },
  '/research/fair-scientific-data': {
    title: 'FAIR Dataset Contracts for Scientific Data | Tesseract Academy for the Public Sector',
    description: 'An open study of 1,738 real public biomedical datasets across three repositories (EMBL-EBI BioStudies, Dryad, PRIDE): overwhelmingly findable and accessible, but 0% interoperable or AI-ready (100% lack a machine-readable schema, checksums and provenance). Paired with an open, tool-certified OWL ontology that models the AI-ready dataset layer. Open source and reproducible.',
  },
  '/research/ies-hqdm-defence-interoperability': {
    title: 'IES to HQDM: an open 4D ontology crosswalk for defence data | Tesseract Academy for the Public Sector',
    description: 'The first public crosswalk between the UK Information Exchange Standard (IES) and HQDM, two 4D upper ontologies. Open SSSOM and RDF correspondences, a curated divergences record, SHACL validation, and a worked SAPIENT-node safety case grounding autonomy in IES-typed world states. Supports the Defence Investment Plan interoperability and autonomy-assurance agenda.',
  },
  '/research/ies4-turtle-language-model': {
    title: 'An open language model for IES4 data | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for IES4, the UK 4D defence-data ontology. Against the untuned base model, IES term conformance rises from 0% to 88.6% and the hallucinated-term rate falls from 0.937 to 0.010, on correct-by-construction training data double-validated against the published dstl/IES4 ontology. Model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/biology-ontology-language-model': {
    title: 'An open, conformant language model for biomedical knowledge graphs | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for the Biolink Model and GO-CAM. Against the untuned base model, term conformance rises from 0% to 100% and the hallucinated-term rate falls from 0.42 to 0.00, holding at 89% on multi-association graphs never seen in training. Correct-by-construction data validated with the Biolink Model Toolkit and the GO-CAM schema; model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/pyramid-ies-hqdm-semantic-bridge': {
    title: 'Grounding a PYRAMID avionics bridge in IES and HQDM | Tesseract Academy for the Public Sector',
    description: 'PYRAMID (Def Stan 00-134) is an open avionics reference architecture with no shared data model; it pushes interoperability into inter-component bridges. A worked, open, SHACL-validated example grounds those bridges in the IES and HQDM 4D ontologies, so three PRA components (Geography, Tactical Objects, Data Fusion) that model the same object resolve to one referent. No prior work grounds PYRAMID in an upper ontology.',
  },
  '/research/agri-environment-heritage-value': {
    title: 'The Value of Agri-Environment Heritage Actions | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open-data demonstration of how we evidence the wider value of agri-environment scheme heritage actions for nature and for people: a scoping-review framework on Natural England\'s NEER001 method, with a real spatial analysis of the 2,206 Scheduled Monuments on the Historic England Heritage at Risk Register 2024.',
  },
  '/research/connective-product-cyber-incidents': {
    title: 'Cyber Incidents affecting Connective Products: an open evidence base | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base of cyber incidents affecting connective products (IoT, operational technology, computing devices, networking equipment and software/firmware): 16 documented incidents (2022 to 2025), a SKOS taxonomy and a source-quality rubric aligned to the six Government Data Quality Framework dimensions, published on GitHub under CC-BY-4.0.',
  },
  '/research/nature-related-security-risk': {
    title: 'Nature-Related Security Risk: an open evidence base and systems ontology | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base and systems ontology that operationalises the UK National Security Assessment on biodiversity loss and ecosystem collapse (2026): 14 documented nature-to-security cascades graded with the assessment\'s own confidence ratings, an OWL ontology (NSRO), a SKOS taxonomy cross-walked to IPBES and SHACL shapes, published on GitHub under CC-BY-4.0.',
  },
  '/research/skills-england-occupational-maps': {
    title: 'The Skills England Occupational Maps as an Ontology | Tesseract Academy for the Public Sector',
    description: 'An open, machine-readable ontology and explorer of the Skills England occupational maps by Tesseract Academy: 1,269 occupational standards placed in the route, pathway and cluster hierarchy, crosswalked to ONS SOC 2010/2020, linked to apprenticeship and technical education products, green-jobs themes and progression pathways. 51,355 triples, published as Turtle and JSON-LD, validated at zero SHACL violations. Open Government Licence v3.0.',
  },

  '/research/property-market-indicators': {
    title: "What a year of transactions says about every local housing market | Tesseract Academy for the Public Sector",
    description: "An open, reproducible set of residential property-market indicators for all 318 local authorities in England and Wales, derived from HM Land Registry Price Paid Data: median and quartile prices, transaction volume, new-build and leasehold share, and property-type mix, from 760,607 standard 2025 transactions. Built from open data under the Open Government Licence, published on GitHub and Hugging Face.",
  },

  '/research/ixbrl-disclosure-benchmark': {
    title: "How machine-readable are UK company accounts, really? | Tesseract Academy for the Public Sector",
    description: "An open benchmark parsing a full day of Companies House Inline XBRL accounts filings to measure what fraction expose each core accounting concept as a structured, machine-readable fact. 8,856 filings, 899 concepts; core balance-sheet concepts exposed in 73 to 97 percent of filings, the empirical premise behind claims that structured data beats PDF for AI-driven reporting. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/nature-governance-graph': {
    title: "The UK nature-governance landscape, as a graph you can cite | Tesseract Academy for the Public Sector",
    description: "An open, provenance-first reference graph of the UK nature and environment governance landscape: 47 statutory agencies, NGOs, data bodies, funders, sector bodies, partnerships and international conventions, and 48 sourced relationships. Every relationship reified with a cited source; SHACL enforces that no edge is unsourced. Zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/skills-england-esco-crosswalk': {
    title: "Where England's occupational standards meet Europe's skills vocabulary | Tesseract Academy for the Public Sector",
    description: "An open SKOS crosswalk from the 1,269 Skills England occupational standards to the EU ESCO occupation classification, with conservative, labelled confidence: 114 exact, 281 close, 270 related and 604 unmatched. The large unmatched tail quantifies where England's occupational language diverges from ESCO. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/evaluation-evidence-atlas': {
    title: "What government evaluates, and how openly it says so | Tesseract Academy for the Public Sector",
    description: "An open atlas of 1,770 UK government evaluation publications, harvested from the GOV.UK Search API and classified by evaluation type and declared method. Impact evaluations dominate, but only 11 percent declare a recognisable method in their metadata. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/consultation-corpus': {
    title: "Every government consultation that reached an outcome, as one corpus | Tesseract Academy for the Public Sector",
    description: "An open, structured corpus of 6,260 UK government consultations with a published outcome, harvested from the GOV.UK APIs and coded by policy area. 98 percent carry policy-area coding; only 77 percent attach response documents to their outcome. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/fca-warnings-observatory': {
    title: "A live list with no memory: reconstructing the FCA scam-warning signal | Tesseract Academy for the Public Sector",
    description: "The FCA warning list of unauthorised firms shows only the current set with no history. This open dataset reconstructs it as a monthly time series from 18,224 live warning pages: FCA warnings rose nearly four-fold from around 500 a year in 2019 to roughly 1,900 across 2022 to 2025, 18 percent flagging clone firms. Published on GitHub and Hugging Face.",
  },
  '/research/victim-witness-evaluation': {
    title: 'When a Theory of Change has to hold up: machine-checkable evaluation logic | Tesseract Academy for the Public Sector',
    description: 'A reflection on where government evaluation is heading, the Evaluation Task Force, the Victims and Prisoners Act 2024, outcome-based commissioning, and a self-initiated open method that answers it: building a Theory of Change as a typed, evidence-graded, SHACL-validated graph so its weak links are named, not buried. Worked on victim and witness support, anchored on the Victims\' Funding Strategy outcomes; 7 pathways, zero SHACL violations, two genuine evidence gaps surfaced. Published on GitHub under CC-BY-4.0.',
  },
  '/services/ai-consulting': {
    title: 'AI Consulting for UK Public Sector | Tesseract Academy for the Public Sector',
    description: 'Custom AI model development, NLP pipelines, and predictive analytics for UK government. CCS RM6200 appointed supplier. GDS aligned. Welsh Government ML land valuation and NDTP ontology case studies.',
  },
  '/services/research-policy': {
    title: 'Research & Policy Advisory | Tesseract Academy for the Public Sector',
    description: 'Evidence-based research design, systematic literature reviews, policy analysis for UK government. Published on GOV.WALES. Cited by Skills England alongside The Alan Turing Institute.',
  },
  '/services/public-engagement': {
    title: 'Public Engagement & Participatory Research | Tesseract Academy for the Public Sector',
    description: 'Deliberative workshops, citizen panels, inclusive co-design, and participatory research. Ethical framework. Adult Support and Protection (Scotland) Act 2007 compliant. CCS RM6126.',
  },
  '/services/survey-design': {
    title: 'Survey Design & Delivery | Tesseract Academy for the Public Sector',
    description: 'End-to-end survey methodology, questionnaire design, mixed-mode collection, and statistical analysis. Qualifications Wales 3-year contract (2026-2029). CCS RM6126 appointed supplier.',
  },
  '/services/education-upskilling': {
    title: 'AI Education & Upskilling | Tesseract Academy for the Public Sector',
    description: 'AI literacy programmes, data science workshops, and executive leadership training. US Navy executive workshop (40+ participants). UK Government Business Academy webinars (2025). BridgeAI / Innovate UK delivery.',
  },
  '/services/ai-governance': {
    title: 'AI Ethics & Governance | Tesseract Academy for the Public Sector',
    description: 'EU AI Act, NIST AI RMF, ISO 42001 compliance. Bias auditing, algorithmic impact assessments. Open-source governance platform (48 tools). Cyber Essentials certified. FCA stablecoin consultation.',
  },
  '/insights': {
    title: 'UK Public Sector AI Insights — Research Findings | Tesseract Academy for the Public Sector',
    description: 'Original research from Tesseract Academy: land valuation ML analysis across 1,916 Welsh LSOAs, BridgeAI 450% oversubscription, NDTP open-source ontology tooling. Evidence from UK government AI delivery 2022-2026.',
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
    .replace(/(<title>)[^<]*(<\/title>)/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${desc}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${desc}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonical}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${canonical}"`);
}

function injectBody(html, appHtml) {
  return html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`,
  );
}

async function run() {
  // Import the compiled SSR bundle.
  const ssrEntryUrl = pathToFileURL(resolve(ROOT, 'dist-ssr/entry-server.js')).href;
  const { render } = await import(ssrEntryUrl);

  const template = readFileSync(resolve(ROOT, 'dist/index.html'), 'utf-8');
  const routes = Object.keys(PAGE_META);
  let count = 0;

  for (const route of routes) {
    const appHtml = render(route);
    let html = injectMeta(template, route);
    html = injectBody(html, appHtml);

    if (route === '/') {
      writeFileSync(resolve(ROOT, 'dist/index.html'), html);
    } else {
      const dir = resolve(ROOT, `dist${route}`);
      mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, 'index.html'), html);
    }
    count++;
    console.log(`  ✓ ${route} (${appHtml.length} bytes rendered)`);
  }

  console.log(`\nPre-rendered ${count} routes with full SSG body content.`);
}

run().catch((err) => {
  console.error('SSG failed:', err);
  process.exit(1);
});
