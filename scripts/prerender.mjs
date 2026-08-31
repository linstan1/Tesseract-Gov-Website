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
  '/industries': {
    title: 'Industries - The Sectors We Work In | Tesseract Academy for the Public Sector',
    description: 'The sectors Tesseract Academy works in, with the delivered engagements and the open research that sits under each one. Government, financial services, defence, industry, health, environment and skills.',
  },
  '/industries/government-public-services': {
    title: 'Government and Public Services | Tesseract Academy for the Public Sector',
    description: 'Delivered for the Welsh Government, the National Digital Twin Programme, Qualifications Wales and Imperial War Museums. Appointed on five Crown Commercial Service frameworks. Open research on public registers, consultations and government evaluation.',
  },
  '/industries/financial-services-insurance': {
    title: 'Financial Services and Insurance | Tesseract Academy for the Public Sector',
    description: 'Open ontologies and register-integrity research tested against the FDIC, the Federal Reserve, EIOPA, EDGAR and the Global LEI System. Selected for the IOSCO TechSprint 2026. Financial vulnerability research with Kalgera and Fintech Scotland.',
  },
  '/industries/defence-security-space': {
    title: 'Defence, Security and Space | Tesseract Academy for the Public Sector',
    description: 'Open 4D ontology crosswalks between IES and HQDM, a PYRAMID avionics semantic bridge, and space debris metric composition checking. DV-cleared consultant available. Appointed on RM6235 Space-Enabled and Geospatial Services DPS.',
  },
  '/industries/industry-manufacturing-supply-chain': {
    title: 'Industry, Manufacturing and Supply Chain | Tesseract Academy for the Public Sector',
    description: 'Measured ontology and schema quality defects in IATA ONE Record, machinery and machine tool data standards, IFC, COBie, Uniclass and BOT. Findings verified with two independent reasoners.',
  },
  '/industries/health-life-sciences': {
    title: 'Health and Life Sciences | Tesseract Academy for the Public Sector',
    description: 'Ontology-validated biomedical knowledge graphs, an open conformant biomedical language model, FAIR dataset contracts, and a joint privacy and fairness report card measured on the UCI Diabetes readmission dataset.',
  },
  '/industries/energy-environment-climate': {
    title: 'Energy, Environment and Climate | Tesseract Academy for the Public Sector',
    description: 'Commissioned by WRAP to build a digital Food Loss and Waste data taxonomy for its Food Programme and the global Food Pact Network. Open research on UK waste reporting, wastewater effluent data quality and the UK nature-governance landscape.',
  },
  '/industries/education-skills': {
    title: 'Education and Skills | Tesseract Academy for the Public Sector',
    description: 'Innovate UK BridgeAI creative industries AI training, 1,100 registrations against a 200 capacity target, rated 4.6 out of 5. Cited by Skills England alongside The Alan Turing Institute. Training provider on the UK Government AI Skills Hub.',
  },
  '/': {
    title: 'Tesseract Academy for the Public Sector - Research, AI & Public Sector Delivery Partner',
    description: 'Tesseract Academy delivers research-backed AI, data science, public engagement, survey design, and policy advisory services for UK and EU public sector organisations. Crown Commercial Service appointed supplier on RM6200, RM6094, RM6126.',
  },
  '/how-to-buy': {
    title: 'How to Buy - Procurement Routes | Tesseract Academy for the Public Sector',
    description: 'Commission Tesseract Academy through Crown Commercial Service frameworks RM6200 (AI DPS), RM6094 (Spark DPS), or RM6126 (Research & Insights DPS). Direct award available under Procurement Act 2023 threshold.',
  },
  '/capabilities': {
    title: 'Capabilities: ontology engineering, AI, research, education and survey services | Tesseract Academy for the Public Sector',
    description: 'Six public sector service areas: AI consulting, research and policy advisory, public engagement, education and upskilling, survey design, AI ethics and governance. Case studies: Welsh Government, BridgeAI, NDTP, Skills England.',
  },
  '/use-cases': {
    title: 'Use Cases - Public Sector Project Evidence | Tesseract Academy for the Public Sector',
    description: 'Evidence of delivery: Welsh Government land valuation (1,916 LSOAs), National Digital Twin Programme AI ontology tool, BridgeAI (1,100 registrations, 4.6/5 satisfaction), Kalgera financial vulnerability research.',
  },
  '/research': {
    title: 'Ontology, knowledge graph and AI research publications | Tesseract Academy for the Public Sector',
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
    description: 'Client reviews and executive AI training case studies. Workshops for US Navy (40+ participants), Vodafone, Philips leadership. UK Government Business Academy webinars (2025 and 2026). Verified Clutch reviews.',
  },
  '/about': {
    title: 'About Tesseract Academy - Team & Credentials | Tesseract Academy for the Public Sector',
    description: 'Dr Stylianos Kampakis (PhD UCL, CStat, FRSS, 40+ publications) and Fabio Rovai MSc (UAL, NeurIPS reviewer). DV-cleared consultant available. Incorporated 2016. CCS frameworks RM6200, RM6094, RM6126.',
  },
  '/research/open-source': {
    title: 'Open source contributions: the data standards we file bugs against | Tesseract Academy for the Public Sector',
    description: 'A public ledger of the defects we report and the fixes we land in the standards, registers and libraries other people build on. No property in the IATA ONE Record data model declares a domain, and 14.3 per cent of the domain information left in comments contradicts the class axioms. FIBO cites a withdrawn ISO 17442 and cannot detect a malformed LEI. Draft SHACL shapes for Level 1 LEI records contributed to GLEIF on the maintainers’ invitation, with the ISO 7064 check digit as SHACL-SPARQL. Also the W3C JSON-LD specification, DCAT-US at the GSA, the USDA National Agricultural Library, the Italian semantic assets repository and OpenSanctions. Every row links the public thread, and there is not a logo on the page.',
  },
  '/glossary': {
    title: 'Glossary: ontology, knowledge graph, semantic web and AI procurement terms | Tesseract Academy for the Public Sector',
    description: '60+ definitions of AI, data science, and procurement terms used in UK public sector contracting. From Algorithmic Impact Assessment to Zero-Shot Learning.',
  },
  '/research/welsh-government-land-valuation': {
    title: 'Welsh Government land valuation: five methodologies tested across 1,916 LSOAs | Tesseract Academy for the Public Sector',
    description: 'Five land valuation methodologies tested across 1,916 Welsh LSOAs (99% of Welsh geography). Published March 2026 on GOV.WALES. Informs Welsh Government local government finance policy.',
  },
  '/research/national-digital-twin-programme': {
    title: 'AI ontology extension generator: National Digital Twin Programme case study | Tesseract Academy for the Public Sector',
    description: 'Open-source AI ontology tool for the National Digital Twin Programme (Dept for Business and Trade). Four-step wizard, NER + LLMs, CSV/JSON/RDF support. Apache 2.0. Published on GitHub.',
  },
  '/research/bridgeai-creative-industries': {
    title: 'BridgeAI: AI adoption for the UK creative industries, 1,100 registrations | Tesseract Academy for the Public Sector',
    description: 'Innovate UK BridgeAI programme delivery. 1,100 registrations vs 200 target. Satisfaction 4.6/5. Skills Hub launch at Ona Studios, London. Co-delivered with PwC. Contract GSS24646.',
  },
  '/research/kalgera-financial-vulnerability': {
    title: 'Financial vulnerability research: Kalgera and Fintech Scotland | Tesseract Academy for the Public Sector',
    description: 'Qualitative research validating AI-driven financial vulnerability signals for Kalgera/Fintech Scotland. Ethical framework under Adult Support and Protection (Scotland) Act 2007. Signal validation and intervention acceptability reports delivered.',
  },
  '/research/wastewater-effluent-data-quality': {
    title: 'Wastewater effluent data quality: validating regulatory environmental data | Tesseract Academy for the Public Sector',
    description: 'Open-data demonstration of statistical and rule-based quality assurance for continuous wastewater effluent monitoring: 1,382 days of full-scale works data, SHACL rules including the COD >= BOD physical invariant. Open source via Open Ontologies.',
  },
  '/research/computation-ready-aerial-heritage': {
    title: 'Computation-ready aerial photography heritage: an open metadata and provenance model | Tesseract Academy for the Public Sector',
    description: 'From digitised to computable: an open standard for aerial photography heritage. 292 real NCAP frames harvested from the public catalogue, reprojected to WGS84 and validated at zero SHACL violations, with a published RiC-O to STAC crosswalk. Open source via Open Ontologies.',
  },
  '/research/zero-emission-flight-ecosystem': {
    title: 'UK zero-emission flight ecosystem, mapped as an open graph | Tesseract Academy for the Public Sector',
    description: 'An open, SHACL-validated knowledge graph of the UK hydrogen and electric aviation ecosystem: 42 real entities and 55 relationships across organisations, airports, programmes, projects, funders and technologies, validated at zero SHACL violations with enforced referential integrity. Open source via Open Ontologies.',
  },
  '/research/wrap-food-loss-waste-taxonomy': {
    title: 'Food loss and waste taxonomy: the WRAP data standard, delivered | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy has been commissioned by WRAP to develop a Food Loss and Waste data taxonomy for its Food Programme and global Food Pact Network. The engagement is in delivery; this page sets out the measurement problem the work addresses.',
  },
  '/research/fair-scientific-data': {
    title: 'FAIR data ontology: dataset contracts measured across 1,738 scientific datasets | Tesseract Academy for the Public Sector',
    description: 'An open study of 1,738 real public biomedical datasets across three repositories (EMBL-EBI BioStudies, Dryad, PRIDE): overwhelmingly findable and accessible, but 0% interoperable or AI-ready (100% lack a machine-readable schema, checksums and provenance). Paired with an open, tool-certified OWL ontology that models the AI-ready dataset layer. Open source and reproducible.',
  },
  '/research/ies-hqdm-defence-interoperability': {
    title: 'IES to HQDM ontology crosswalk: open 4D semantic interoperability for defence data | Tesseract Academy for the Public Sector',
    description: 'The first public crosswalk between the UK Information Exchange Standard (IES) and HQDM, two 4D upper ontologies. Open SSSOM and RDF correspondences, a curated divergences record, SHACL validation, and a worked SAPIENT-node safety case grounding autonomy in IES-typed world states. Supports the Defence Investment Plan interoperability and autonomy-assurance agenda.',
  },
  '/research/space-metrics-crosswalk': {
    title: 'Space debris metrics crosswalk: an open composition checker for metrics that cannot be added | Tesseract Academy for the Public Sector',
    description: 'The two premier orbital debris engineering models disagree by a factor of 2.3 to 3.0 at the 1 cm collision-risk threshold, and by almost two orders of magnitude in the sub-millimetre regime, because they partition the same physical population along orthogonal axes: MASTER-8 by generative source, ORDEM 3.1 by material density. Every indicator built on either model silently inherits that partition and never declares it. An open, MIT-licensed composition checker built on QUDT, SOSA/SSN and PROV-O that refuses invalid combinations with a reason and states what may be done instead.',
  },
  '/research/waste-reporting-loss': {
    title: 'Waste vocabulary crosswalk: half the detail dies on the way to the UK return | Tesseract Academy for the Public Sector',
    description: 'AI waste analytics classify material at the belt in over a hundred categories; every UK channel that consumes composition data accepts between 7 and 47. Of 5.907 bits of composition detail, the List of Waste retains 53.8%, pEPR 52.1%, RAM 2027 49.5% and Simpler Recycling 38.4%. The crosswalk cannot be a function in either direction: collapse up to 23 classes per value, 7 classes that fix no regulatory value at all, and 19 to 22 classes the packaging schemes cannot represent. Of ten operational questions two are answerable in every channel and four in none, including the aluminium against steel split that sets the pEPR fee. Open SKOS vocabularies, SSSOM alignments, a SHACL release gate that caught a language-tag defect in the upstream List of Waste ontology, and a reporting engine that emits returns as intervals.',
  },
  '/research/investment-fund-ontology': {
    title: 'Investment fund ontology: the US fund register as a knowledge graph | Tesseract Academy for the Public Sector',
    description: 'An open OWL 2 ontology, SKOS identifier registry and SHACL governance layer built against the whole public US fund universe: 2,316 registrants, 14,841 funds, 43,344 share classes, joined to four quarters of Form N-CEN and all 9,119,948 GLEIF ISIN-LEI pairs. GLEIF is checksum-clean at full scale; SEC filings are not, carrying 19 LEIs that fail ISO 7064 including a padded integer filed as an LEI. Only 12.3% of ETF fund LEIs have any ISIN in the open mapping, the Vanguard 500 Index Fund among the missing. 96.8% of register quotations name no venue, and class-level ISIN resolution is enclosed behind licensed CUSIP data: 259 funds resolve from public data alone by unique pairing. The v0.2 open map, built from SEC N-PORT filings and OpenFIGI with no licensed feed, lifts exact-class resolution to 42.2% of 5,176 fund-ISIN rows and ETF open-ISIN coverage from 12.3% to 35.4%; one quarter of N-PORT attests 235,327 LEI-ISIN pairs of which 185,894 (79%) are absent from GLEIF\'s open file. Twenty identifier schemes across six markets, FIBO alignment with every target IRI verified live.',
  },
  '/research/enterprise-knowledge-ontology': {
    title: 'The Corpus Readiness Index: is your knowledge base fit to feed an AI? | Tesseract Academy for the Public Sector',
    description: 'An open OWL ontology, ten SKOS schemes, a SHACL publish gate and the Corpus Readiness Index, a seven-dimension score for whether a document estate is fit to feed an AI assistant, measured against 69,306 documents across GOV.UK, Kubernetes and Microsoft\'s .NET documentation. GOV.UK guidance scores 78.2. Zero of 300 sampled documents carry any maintenance metadata across 133 distinct schema keys. GOV.UK search returns zero withdrawn documents while the public sitemap advertises roughly 55,000 of them, still serving body text at a median 5.87 years since withdrawal. 4,810 documents are owned only by organisations that no longer exist. On the .NET estate the median document was last declared verified 9.38 years ago and last changed 1.94 years ago, and 38.3 per cent look current while stale by their publisher\'s own verification date. Reproducible from public data.',
  },
  '/research/scholarly-record-ontology': {
    title: 'Retraction register ontology: how far Crossref, PubMed and Retraction Watch disagree | Tesseract Academy for the Public Sector',
    description: 'An open ontology and dataset for the integrity status of the scholarly record, measured across four public registers. Crossref and Retraction Watch, both published by Crossref since its 2023 acquisition, agree on only 72.42 per cent of retracted DOIs. OpenAlex flags 94.5 per cent of retraction notices as retracted research, confirmed independently at 95.95 per cent against Europe PMC, while Crossref does so for 0.91 per cent and Europe PMC for 0.32 per cent, so the distinction is achievable rather than hard. Crossref update-type is a closed 12-value enumeration yet the live index holds 34 values, 22 invalid, including two misspellings of retraction and a bare integer. Only 19.24 per cent of a 137,243 DOI union is agreed by all four registers and 43.09 per cent rests on one. 43,683 citations to the most-cited retracted works post-date their retraction, including 1,171 to the Wakefield paper, none carrying a machine-readable warning.',
  },
  '/research/media-attention-ontology': {
    title: 'Media attention ontology: the content registry TV measurement runs on covers 1.84% of television | Tesseract Academy for the Public Sector',
    description: "EIDR is the audiovisual industry's own content registry and it models the abstraction hierarchy that measurement depends on, yet in the open graph it reaches 53.44 per cent of films and 1.84 per cent of television series. We harvested 224,710 EIDR identifier assertions across 224,182 works and resolved 1,179 of them against EIDR's public registry to learn what each one denotes. 285 of the 522 works carrying more than one EIDR identifier hold identifiers at more than one level of the abstraction hierarchy at once, pairing a title-level record with a specific cut, and 133 identifiers are each claimed by two distinct works. EIDR maps the ISO 7064 MOD 37,36 supplementary value to 0 rather than an asterisk, so a validator built on a stock library rejects 6,252 perfectly valid identifiers, 2.78 per cent, as corrupt; across all 224,577 distinct identifiers zero genuinely fail. IMDb mints no season identifier and covers 0.78 per cent of seasons. The IAB Tech Lab taxonomies contain no RDF, SKOS or OWL of any kind, published here as SKOS for the first time with 2,845 concepts and 10 source defects reported rather than repaired. schema.org has 2,987 labelled terms and none for viewership, impressions, exposure or reach. 2,702,154 triples, reproducible from public data.",
  },
  '/research/learning-standards-ontology': {
    title: 'Learning standards ontology: all 67,141 US K-12 standard identifiers are dead | Tesseract Academy for the Public Sector',
    description: 'The Achievement Standards Network was the identifier layer for United States academic standards, and its identifiers sit inside learning-resource metadata across the open education web. We dereferenced 67,141 of them across three populations, two of them complete censuses: every single one returns HTTP 404, while the vocabulary describing them still returns 200 from a static object store. 1EdTech, the body behind the successor specification CASE, ships a QTI v3 example package whose curriculum references are dead ASN URIs, as do DCMI\'s own LRMI examples. The CEDS Ontology v14 declares zero owl:ObjectProperty and zero rdfs:domain across 2,336 properties, types 965 terms as both an owl:Class and a skos:ConceptScheme, and publishes 19,546 concepts with no broader relations. Given six mis-statements it detects none, five being inexpressible in it, while the abandoned 465-triple ASN schema detects one. 433 identifiers name materially different standards and the most replicated statement text carries 718 distinct identifiers. 1,931,913 standard statements, 771 jurisdictions, 21,404,069 triples, reproducible from public data.',
  },
  '/research/insurance-register-ontology': {
    title: 'Insurance register ontology: the EU register of 3,304 insurers in OWL and SHACL | Tesseract Academy for the Public Sector',
    description: 'The first open OWL 2 ontology, SKOS registry and SHACL governance layer for insurance and reinsurance entity data, built against the complete EIOPA Register of Insurance Undertakings (33,924 rows), joined to GLEIF and cross-checked against the German national register. 643 of 3,304 active EEA insurers carry no LEI. Four filed LEI values are arithmetically impossible, including a letter O where the real identifier carries a zero. 118 have lapsed, 42 name entities GLEIF says no longer exist, one identifier is shared by SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland, and 283 passports outlive the authorisation they depend on. Where both registers populate the field they agree perfectly across 344 undertakings: the problem is coverage, not contradiction. Reproducible from public data with five commands.',
  },
  '/research/surveillance-reporting-identifiers': {
    title: 'Surveillance reporting identifiers: an open census of what UK operational reporting denotes | Tesseract Academy for the Public Sector',
    description: "A complete census of every publication held by the Animal and Plant Health Agency, the UK Health Security Agency and the Centre for Environment, Fisheries and Aquaculture Science on GOV.UK, taken on 18 August 2026 from the open Search and Content APIs: 6,897 publications indexed, 2,704 report pages carrying 12,769 published files. Every page carries a persistent content_id, so these outputs are not unidentified. But 10,582 files, 82.9 per cent, share their only persistent identifier with every other file on the same page, with up to 165 under one identifier. Of 8,758 dated report editions, 5,212 carry no report-level identifier, and 242 recurring series carry none on any edition. The UKHSA weekly national flu and COVID-19 surveillance series shows identifier coverage of 99.2 per cent in 2023 to 2024 and 0.7 per cent in 2025 to 2026, which makes the practice a habit rather than a governed rule. A field named unique_reference is non-unique on 204 values once legitimate format variants are excluded.",
  },
  '/research/biosurveillance-register-ontology': {
    title: 'Biosurveillance ontology: the missing One Health pathogen crosswalk | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and a complete census of the Food Standards Agency's open food alert register, all 1,348 alerts published from 9 January 2018 to 10 August 2026, taken on 18 August 2026 under the Open Government Licence. The register maintains 27 allergen concepts and 5 pathogen concepts, the pathogen scheme last modified on 4 September 2017. Of 234 alerts naming a pathogen, 57 name it in prose with no concept to join on. Pathogen coding was zero across all 188 alerts issued in 2018 and has never exceeded 19.7 per cent in any year, while allergen coding has run between 47.7 and 64.6 per cent every year without exception. Four pathogens named in the register have no concept available to code them: Bacillus cereus, hepatitis A, Cronobacter sakazakii and norovirus. No pathogen concept carries any external alignment, and all five denote at genus or species level while genomic food chain surveillance identifies isolates at serovar and sequence type. The study ships the NCBI Taxonomy crosswalk the register lacks, resolved two independent ways with zero disagreements, and every headline is computed twice with a build that fails if the two paths differ.",
  },
  '/research/securities-register-ontology': {
    title: 'Securities register ontology: the missing CIK-to-LEI crosswalk in OWL and SHACL | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the SEC's EDGAR entity register and the Global LEI System, built from complete downloads of both registers and of every open register that embeds them, all taken on 17 August 2026. The lei field is populated in 773 of 981,355 EDGAR entity records, 0.079 per cent, and only 667 of those are valid LEIs: the rest include telephone numbers, IRS EINs, entity names and 35 literal N/A strings. In one quarter 1,973 fund registrants stated their LEI to the SEC on Forms N-PORT and N-CEN, and the entity register surfaces 12 of them. GLEIF publishes 27,718 records that map LEIs to EDGAR identifiers daily under CC0, while no SEC surface publishes the reverse. Reconciling the two halves of the series crosswalk across 12,604 fund series finds 100 fund series carrying two different LEIs across the register boundary, and 56.6 per cent of all US LEI records are LAPSED. The joint data standards rule under the Financial Data Transparency Act adopts the Legal Entity Identifier as the common entity identifier for nine federal financial agencies, the SEC among them, from 1 October 2026. The artefact comprises 526,098 triples, with every headline computed two independent ways, reproducible from public data.",
  },
  '/research/one-record-domain-axioms-korea': {
    title: 'IATA ONE Record ontology audit: every rdfs:domain axiom disappeared. Korea edition | Tesseract Academy for the Public Sector',
    description: "An independent, dual-engine audit of the IATA ONE Record data model ontology across six releases. Every one of the 496 properties in the 2022-12 release declares an rdfs:domain. None of the 522 properties in 2023-12 do, and none of the 534 in 2024-12 do. Classes with no rdfs:label rose from 1 to 58 over the same span, and total lint issues rose from 2 to 650. Verified two independent ways, with rdflib and with the open-source Open Ontologies engine, which agree exactly. Written for Korean air cargo operators building on ONE Record, in English and Korean, with a reproducible check over the MIT-licensed public repository.",
  },
  '/research/one-record-domain-axioms-taiwan': {
    title: 'IATA ONE Record and DCSA ontology audit: air and ocean freight standards. Taiwan edition | Tesseract Academy for the Public Sector',
    description: "An independent, dual-engine audit of the IATA ONE Record data model ontology across six releases, written for Taiwan's air and ocean freight sector. Every one of the 496 properties in the 2022-12 release declares an rdfs:domain. None of the 522 properties in 2023-12 do, and none of the 534 in 2024-12 do. Classes with no rdfs:label rose from 1 to 58 and lint issues from 2 to 650. Includes a contrast with the DCSA ocean container OpenAPI specifications, 174 files under Apache 2.0. Verified two independent ways with rdflib and the Open Ontologies engine. In English and Traditional Chinese.",
  },
  '/research/machinery-regulation-readiness-korea': {
    title: 'Machinery ontology and schema quality: MTConnect and the Asset Administration Shell, audited for Korea | Tesseract Academy for the Public Sector',
    description: "A readiness assessment for Korean machine tool and equipment exporters against EU Machinery Regulation 2023/1230, which applies from 14 January 2027, verified against the EUR-Lex primary text at Article 54 because several vendor summaries give the wrong date. Audits the two semantic carriers the sector relies on. MTConnect publishes each version as both XSD and JSON Schema, and the JSON AlarmStateEnum admits INSTANT while the XSD AlarmStateType does not, identically in 2.0, 2.1 and 2.2. Includes a retracted finding: an initial count of 111 divergences collapsed to one after 105 proved to be a deliberate design difference and three were our own matching artefact. Also tests and refutes the common claim that AAS submodel compliance requires a paid ECLASS subscription. In English and Korean.",
  },
  '/research/machinery-regulation-readiness-taiwan': {
    title: 'Machine tool ontology and schema quality: MTConnect and the Asset Administration Shell, audited for Taiwan | Tesseract Academy for the Public Sector',
    description: "A readiness assessment for Taiwan's machine tool cluster against EU Machinery Regulation 2023/1230, which applies from 14 January 2027, verified against the EUR-Lex primary text at Article 54. Audits MTConnect and the Asset Administration Shell. The MTConnect JSON Schema AlarmStateEnum admits INSTANT while the XSD AlarmStateType does not, identically across 2.0, 2.1 and 2.2. Includes a retracted finding, an initial 111 divergences reduced to one verified defect. Counts 1,529 IDTA IRI references against 18 ECLASS and 9 IEC CDD, refuting the claim that compliance requires a paid dictionary subscription. In English and Traditional Chinese.",
  },
  '/research/italy-register-ontology': {
    title: 'Italian public register ontology: IPA, ANAC, OpenCUP and ISTAT in OWL, SKOS and SHACL | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of Italy's public register fabric, built from hands-on downloads of the IPA register of 23,735 public administrations, the ANAC contracts register, the OpenCUP register of 11.9 million public investment projects, the ISTAT register of administrative units and the national semantic vocabulary, taken on 17 August 2026. The national cities vocabulary and the ISTAT CSV export both predate the 2026 Sardinian territorial reform: 380 dead municipality codes are published as current and 378 current codes are missing, while the operational IPA register already uses the new codes with zero mismatches across all 23,735 entities. All 23,735 IPA fiscal codes pass their checksum, a clean null result stated as a finding. In a two-month sample of 2025 contracts, 140 well-formed CUPs referenced by 255 contracts are absent from the published OpenCUP open-data exports, and 45 values in the CUP field fail the CUP grammar, including ESENTE and ATT000NON000CUP. The findings are delivered upstream as a contribute-first SHACL package answering the vocabulary maintainers' own request. Every headline computed two independent ways, reproducible from public data.",
  },
  '/research/spectral-library-ontology': {
    title: 'Mass spectrometry library ontology: the register that publishes its own contradiction | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the public mass spectrometry reference libraries, built from keyless downloads of 2,091,754 GNPS2 library spectra across 98 libraries, 20,052 MassIVE datasets and 1,065,831 ReDU sample rows, all retrieved on 21 August 2026. GNPS derives an InChIKey from the depositor's SMILES and a second from the depositor's InChI and publishes both, which makes its own internal disagreement countable: on 1,485,480 records carrying both, they diverge 14,012 times, 13,112 at stereochemistry and 662 at connectivity. Independent recomputation with RDKit cuts the connectivity figure to 229 and reclassifies the other 418 as failures in the register's own derivation. The corpus rate of 0.94 per cent hides a range from 1.41 per cent in MONA to 59.44 per cent in BILELIB19. 164,137 InChI strings lack the mandatory prefix and do not parse, 6,710 CAS numbers fail their own check digit, and not one of the 2,091,754 records carries a valid SPLASH. 145 of the 4,418 ProteomeXchange accessions MassIVE publishes resolve nowhere. ReDU, by contrast, is 100.00 per cent conformant on 977,015 taxonomy values. Every headline computed three independent ways.",
  },
  '/research/trade-remedy-ontology': {
    title: 'UK trade remedy ontology: the TRA case register, the tariff and legislation.gov.uk | Tesseract Academy for the Public Sector',
    description: 'A full census of the UK trade remedy chain, from the Trade Remedies Authority case register to the duty charged at the border, retrieved on 28 August 2026. All 21,008 commodity codes in the UK Trade Tariff visited: 405 carry 9,385 distinct measures citing 49 legal instruments, with 990 additional codes naming exporters. The tariff truncates the legal instrument locator at 200 characters and all thirteen truncated locators return 404, reaching 1,477 measures, 15.7 per cent of the live book; all thirteen are repaired in the repository. The TRA case register drops leading zeros from chapter 3 commodity codes, so twelve published codes resolve to nothing until the zero is restored. Of 982 named exporters, 955 do not resolve to exactly one entity, and both EU regulations still cited as the legal basis of live UK measures are no longer in force in the EU. Every headline computed twice, set-based and by SPARQL, with a gate that fails on disagreement.',
  },
  '/research/space-object-register-ontology': {
    title: 'Space object ontology: CelesTrak and GCAT modelled in OWL, SKOS and SHACL | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the two open catalogues of objects in Earth orbit, built from keyless downloads of CelesTrak's SATCAT (70,292 objects) and Jonathan McDowell's General Catalog of Artificial Space Objects (69,391 numbered objects across four catalogues), both retrieved on 18 August 2026. GCAT marks 22 entries as corresponding to no real object, giving reasons such as radar error and cataloging error, and CelesTrak carries all 22, one of them with no decay date and therefore as a tracked object still in orbit. 1,094 objects GCAT records as no longer tracked carry no data status code in CelesTrak, which maintains that field and applies it to 1,292 others. 20,198 of 34,814 on-orbit objects, 58.0 per cent, have no published radar cross section. CelesTrak's owner code collapses the Soviet Union and the Russian Federation into one value where GCAT separates 16,142 objects from 9,016. Every headline computed two independent ways.",
  },
  '/research/land-carbon-measurement': {
    title: 'Peatland carbon measurement tested against the Scottish cadastre and habitat map | Tesseract Academy for the Public Sector',
    description: "The Land Reform (Scotland) Act 2025 requires land management plans addressing carbon for holdings of 1,000 hectares or more, and three independent defects compound against that calculation. Registers of Scotland publishes no areas: the INSPIRE areavalue attribute carries the literal string UNPOPULATED on all 1,564,345 parcels. Area computed from geometry depends on method, with summation exceeding the geometric union by 1,867,044 hectares or 28.37 per cent. NatureScot's habitat map declares a NoData value of 0 that neither GeoTIFF encodes, so 7,205,895,872 of 8,100,000,000 pixels, 88.96 per cent of the national grid, present as a valid class. All 8.1 billion pixel pairs of the Level 1 and Level 2 EUNIS maps were compared: 98.6761 per cent roll up correctly and 1.3239 per cent, 118,374 hectares, do not, every violation being the same marine and coastal confusion across only four class pairs. The peat class Q1 is clean in both maps. Scotland's raised and blanket bog covers 1,330,616 hectares, 14.88 per cent of classified extent.",
  },
  '/research/land-register-ontology': {
    title: 'Land register ontology: register integrity across all 33 Scottish registration counties | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the Registers of Scotland INSPIRE Cadastral Parcels dataset, built from a complete keyless download of all 33 registration counties, 1,564,345 parcels, retrieved on 21 August 2026 under the Open Government Licence. The Land Reform (Scotland) Act 2025 attaches duties to landholdings of 1,000 hectares or more, and the register publishes no areas: the INSPIRE areavalue attribute carries the literal string UNPOPULATED on all 1,564,345 parcels, as do referencepoint, beginlifespanversion, endlifespanversion, validfrom and validto. Area computed from the published geometry depends on the method chosen: summing parcels gives 6,581,717 hectares, the geometric union of the same polygons gives 4,714,673, a difference of 1,867,044 hectares or 28.37 per cent, ranging from 1.33 per cent in Nairn to 95.40 per cent in West Lothian. Zero identifier format violations across all 1,564,345 parcels, a null result reported as one. Every headline computed two independent ways.",
  },
  '/research/nordic-health-data-catalogues': {
    title: 'Health data catalogue ontology: 2,811 Nordic datasets measured against HealthDCAT-AP | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and a reproducible census of Nordic health dataset descriptions, built on 25 August 2026 from the data.europa.eu SPARQL endpoint and the Findata Aineistokatalogi public API. Across the eleven Nordic national catalogues harvested by data.europa.eu there are 2,811 dataset descriptions carrying the EU health theme, and none satisfies all eight properties HealthDCAT-AP Release 7 makes mandatory on dcat:Dataset; three of the eight are present on exactly zero. Finland contributes 1,146 themed descriptions and not one uses the EU data theme authority vocabulary, so a European health filter returns zero Finnish datasets while avoindata.fi returns 57. Across the endpoint 36 IRIs are in use inside the EU data theme namespace and the authority defines 14, with 1,238 datasets carrying one of the other 22, including 806 on the literal string undefined. The authority host answers HTTP 200 with an empty graph for terms it never defined. Findata holds 89,368 variable descriptions of which 84.74 per cent carry no English label. Every headline computed two independent ways.",
  },
  '/research/biodiversity-register-ontology': {
    title: 'Biodiversity register ontology: BHL, ZooBank and the NHM Data Portal measured | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and a reproducible census of the identifier and rights layer of biodiversity registers, built on 28 August 2026 from complete harvests of the Biodiversity Heritage Library bulk export, the Natural History Museum Data Portal, and ZooBank with its public mirrors, with WoRMS and IPNI as controls. The Official Register of Zoological Nomenclature refuses machine clients that are not on its anti-DDoS whitelist, and refuses them with HTTP 404, the status it also uses for a name that was never registered: the same 50 canonical act URLs returned 404 from an un-whitelisted address and 200 once the registrar whitelisted us. Its publication endpoint was rebuilt on 29 August 2026 and GBIF re-crawled it on 30 August, ending 64 consecutive aborted crawls going back to April 2025, while ChecklistBank still serves a January 2023 copy. In the BHL export, 86.0 per cent of 329,129 distinct digitised items carry no machine-actionable licence, ten titles carry the literal string Array as their DOI, and the item table's primary key is not unique. The NHM Data Portal mints a resolving DOI for every one of its 294 datasets, best in class among measured catalogues, while eight datasets meet a five-property product-readiness bar. Every headline computed two independent ways.",
  },
  '/research/medicinal-product-registers': {
    title: 'Medicinal product registers measured for joinability: EMA, openFDA and GLEIF | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and a reproducible census of whether the public medicinal product registers can be joined by machine, built on 28 August 2026 from the EMA medicines report (2,732 products), the openFDA NDC directory (137,521 records) and the GLEIF LEI API. The EMA register publishes no organisation identifier for marketing authorisation holders: joined by exact name, 102 of 392 holders resolve to a GLEIF legal entity, and 14 of those land on an LEI that is not in good standing, AbbVie Limited among the lapsed. AbbVie Deutschland GmbH & Co. KG fails the join solely because GLEIF stores GmbH And Co. KG. The EU and US registers are string-joinable for 8.2 per cent of holders. EMA internal integrity is high: one malformed product number in 2,732, one truncated ATC code, four prose strings in the ATC column, zero date-sanity failures. EMA SPOR answers 401 to anonymous requests, so the public join runs on the XLSX shadow. Every headline computed two independent ways.",
  },
  '/research/uk-health-data-linkage': {
    title: 'UK health data linkage registers measured: the Gateway, the NHS Data Uses Register and the layer between them | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and a reproducible census of the machine-readable linkage layer of UK health data, built on 28 August 2026 from the HDR UK Gateway API and the NHS England Data Uses Register. The Gateway Data Model field that links a dataset to its data uses is empty on all 1,278 active Gateway datasets, while the Gateway's own relational layer links 1,704 of its 2,565 data use rows to datasets. 101 of 324 published dataset-to-dataset linkage entries resolve to nothing, including 35 descriptors with no identifier, no URL and no title, all of which validate. All 59 pid values inside linkage entries are dataset names rather than identifiers, because the schema types the linkage pid slot as a 150 character string. 133 dataset pids fail the Uuidv4 type the schema declares. The two public registers of UK health data uses share an identifier for 68 of 2,565 rows, so 96.96 per cent of NHS England's 1,942 agreement families have no identifier-joinable Gateway entry, and four agreements are shown active on the Gateway while absent from both current NHS publications. Every headline computed two independent ways.",
  },
  '/research/open-data-catalog-assurance': {
    title: 'Open data catalogue ontology: 59 federal agencies validated against the schema that exempts them | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the US federal open data catalogue estate, built on 21 August 2026 from data.gov's own keyless harvest API. Of 130 DCAT-US harvest sources, 76 covering 59 federal agencies are registered under the dcatus1.1 non-federal validation schema, which drops bureauCode and programCode from required and additionally permits null for both. Zero federal-typed organizations are registered under the federal schema, and the list includes the Office of Management and Budget, which mandates the bureau code, and the General Services Administration, which operates data.gov. The federal schema's bureauCode pattern is published unanchored, so it accepts xx024:01yy, and its own normative example 015:010 contradicts the pattern printed beside it. 997 Department of Energy datasets carry the Department of Education's agency code. 179 of 793 harvest sources completed their most recent job having errored every record. Every headline computed two independent ways.",
  },
  '/research/dkan-portal-census': {
    title: 'DKAN open data portal census: three .gov portals, all publishing the same wrong identity | Tesseract Academy for the Public Sector',
    description: "A complete census of the DKAN open data portal across the US federal estate, taken on 21 August 2026. We probed 20,135 hostnames: all 16,535 registrable .gov domains from CISA dotgov-data, plus 3,600 DNS-resolving open data subdomains. DKAN 2.x answers on exactly three, data.medicaid.gov, data.healthcare.gov and data.sba.gov, and all three publish the catalogue identity http://dkan/data.json, root-caused to line 3 of schema/collections/catalog.json in GetDKAN/dkan. 368 occurrences of dcat:references and 7 of dcat:_update are minted into the W3C DCAT namespace, which defines neither, by the federal context's @vocab fallback. The first census frame returned a false zero and the error is published alongside the result.",
  },
  '/research/uk-register-ontology': {
    title: 'UK public register ontology: Companies House, the Charity Commission and the Global LEI System | Tesseract Academy for the Public Sector',
    description: "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the UK's public registers, built from complete keyless downloads of the Companies House bulk file (5,695,465 live companies, 1 August 2026), the Charity Commission register, the Companies House PSC snapshot and the GLEIF LEI golden copy (all 17 August 2026). 1,268 of 31,612 Registered charitable companies (4.01 per cent) cite a company number that resolves to nothing on the live register, including 32 placeholders (00000000, 01234567, 12345678) that pass the format rule. 1,082 charities disagree with Companies House about their own company's name. Of 117,324 GLEIF records naming UK Companies House as registration authority, 36 live issued LEIs cite in-range company numbers absent from the live register and 2,666 disagree with Companies House on the name. Companies House's own bulk file contains 5,912 live companies whose numbers violate the documented format, and its PSC snapshot misspells its own enum value in 621,705 production records. Every headline computed two independent ways, reproducible from public data.",
  },
  '/research/verifying-extraction-pipeline-rdf': {
    title: 'Knowledge graph validation: checking the RDF your extraction pipeline just built | Tesseract Academy for the Public Sector',
    description: "A document-to-graph pipeline that emits RDF is making a formal claim, and it cannot check its own claim. This study runs that check against Semantica 0.6.5 and 0.6.6, an MIT-licensed Python pipeline with about 9,300 stars, by reading every output back through two independent RDF engines. Seventeen defects were found and reported, four fixes are merged upstream, six pull requests are open as of 21 August 2026. The failures share a shape: the export succeeds, a lenient reader accepts it, and the graph is wrong or largely absent anyway. A two-entity JSON-LD export parsed as 2 triples through a plain graph reader and 21 quads through a dataset reader, with no error on either path. pySHACL reported conformance on data that violated every constraint, because the generated shapes targeted a namespace the generated data never used. Timestamps written without a UTC offset made a timezone-qualified SPARQL filter indeterminate, so Oxigraph silently dropped every affected row from the result. The PROV-O export, the one module serialised through a real RDF library rather than by hand, had nothing wrong with it.",
  },
  '/research/jsonld-escaping-conformance': {
    title: 'JSON-LD parser conformance: HTML unescaping across the Tranco top 10,000 | Tesseract Academy for the Public Sector',
    description: 'In August 2026 Google changed JSON-LD extraction to a single pass of HTML unescaping, saying it brought the parser up to standards. The HTML Standard and JSON-LD 1.1 both put the conformant number at zero. A census of the Tranco top 10,000 finds 199 of 2,969 domains publishing JSON-LD that Googlebot and every conformant parser read differently, against 10 affected by the change Google announced. Dell and Investopedia are visibly broken inside Google today, and two Google properties are in the diverging set.',
  },
  '/research/bank-register-ontology': {
    title: 'Bank register ontology: an OWL and SHACL model of the FDIC, the Federal Reserve and the Global LEI System | Tesseract Academy for the Public Sector',
    description: 'An open OWL 2, SKOS and SHACL ontology for the entity and regulatory-reporting fabric of US banking, measured against the FDIC BankFind register, the Federal Reserve MDRM dictionary, and the complete GLEIF golden copy of 3,403,760 LEI records. The measurement finds every one of the 2,252 LEI values in the FDIC register truncated to 16 of the 20 characters ISO 17442 requires, discarding both check digits. Sixteen characters puts 6.37 per cent of the global LEI population into a collision, nine FDIC values are ambiguous across up to six unrelated companies, and two resolve to the wrong legal entity, including Associated Bank carrying its parent holding company’s identifier. The MDRM dictionary shows the mirror-image defect: one definition per item code across forms with different consolidation bases, and 58 per cent of item codes with no definition at all. The artefact comprises 1,123,634 triples, reproducible from public data.',
  },
  '/research/quantum-collateral-benchmark': {
    title: 'Quantum collateral optimisation: an open ontology-grounded benchmark with every allocation certified twice | Tesseract Academy for the Public Sector',
    description: 'Hybrid quantum optimisation pipelines encode business constraints twice, once as QUBO penalties and once in the classical checker, so both can share a misunderstanding while the check still passes. Qollateral makes the collateral rule book machine readable in OWL 2 and SKOS, declares per rule whether it admits an exact quadratic encoding, and compiles that one source to both a CP-SAT integer model and a QUBO. Every solver run is certified twice, once in Python and once by SHACL shapes over reified allocation assertions. On a seeded grid of 8 instances between 8 and 20 binary variables, CP-SAT proved every optimum within 0.0034 seconds while QAOA at depth 1 to 3 on a noiseless simulator returned a certified feasible sample in 20 of 24 runs and the exact optimum in 11. An agreement battery of 120 cells across two rule books found zero disagreements on the 98 feasible instances.',
  },
  '/research/chain-control-ontology': {
    title: 'Blockchain control ontology: USDC has a different upgrade key on every chain | Tesseract Academy for the Public Sector',
    description: 'An open OWL 2, SKOS and SHACL ontology for on-chain control, measured across 6,316 contracts on seven EVM chains plus Solana. Of 656 upgradeable contracts with a resolvable upgrade authority, 390 report a different account through owner() than the one that can replace their code, and for 556 the proxy admin slot is not the real controller. Walking every path to its end, 132 resolve to a single private key and 335 to a multisig, eight of which have a threshold of one.',
  },
  '/research/certification-register-ontology': {
    title: 'Certification register ontology: nobody can check an ISO 27001 certificate | Tesseract Academy for the Public Sector',
    description: 'An open OWL 2, SKOS and SHACL ontology for management system certification, built so that it reproduces no ISO text at all and with a SHACL layer that mechanically proves it. IAF CertSearch, the global register of roughly two million accredited certificates, states that no user may view or download a list of certificates issued by a certification body, so absence cannot be observed. 0 of 2,921 UKAS-accredited organisations declare a standard in the public register and ISO/IEC 27001 is absent from the UKAS standard taxonomy entirely. 21.6 per cent of the UKAS scope vocabulary is duplication. NIST has withdrawn its SP 800-53 to ISO/IEC 27001 mapping, which last addressed the superseded 2013 edition. 70 of the 93 Annex A controls have a CSF 2.0 informative reference and 23 do not, and five identifier defects survive in the live crosswalk including two clause addresses that name nothing in the standard.',
  },
  '/research/iso-42001-assurance-gap': {
    title: 'ISO 42001 assurance gap: the only public crosswalk names zero of its controls | Tesseract Academy for the Public Sector',
    description: 'A measured audit of what can be established about an ISO/IEC 42001 certificate from public evidence. The NIST AI RMF crosswalk to ISO/IEC 42001 holds 281 pairs across 72 AI RMF subcategories and 66 distinct ISO addresses, of which 202 are Annex B implementation guidance and 79 are mandatory clauses, and zero are Annex A controls, the very things a Statement of Applicability declares. The document is titled ISO/IEC FDIS 42001, targeting the Final Draft rather than the published 42001:2023. ISO/IEC 42001 published December 2023 while ISO/IEC 42006, which makes accreditation possible, published 7 July 2025, leaving roughly nineteen months in which certificates were sold under no published scheme for certifying the certifiers. The UKAS public register contains zero occurrences of 42001 across 9,278 harvested records, nine months after it granted the world first UKAS accreditation for that standard.',
  },
  '/research/eu-law-citation-graph': {
    title: 'EU law cites more than its own citation graph records | Tesseract Academy for the Public Sector',
    description: "EUR-Lex publishes WORK_CITES_WORK, the only structured source of the dependency graph between EU legal instruments, and it is what compliance tooling is built on. Measured against the instruments actually named in the operative texts of GDPR, NIS2, DORA, MiFID II and the AI Act it records 63.4 per cent: 78 of 213 citations are absent. The gap is concentrated, with NIS2 at 38.0 per cent and the AI Act at 51.5 per cent against GDPR at 93.8 per cent. NIS2's missing citations sit in Annexes I and II, the scope-defining references that determine which entities the Directive binds. Three corrections are published in full, because each produced a more dramatic and wrong answer first.",
  },
  '/research/semantic-asset-register': {
    title: 'US federal semantic assets: 13 million triples measured for vocabulary quality | Tesseract Academy for the Public Sector',
    description: 'An open, re-runnable quality assessment of 28 vocabularies and ontologies published by 10 US federal agencies, retrieved and hashed on 16 August 2026. Every check names the authority it derives from and declares whether failing it violates a published specification or departs from a community practice the publisher never agreed to: 10 normative failures against 120 conventional ones. The Library of Congress MADS/RDF ontology does not parse, using rdf:resource on a node element 23 times, and the Thesaurus for Graphic Materials types 7,782 concepts against it. All 507 ISO 639-2 concepts violate SKOS integrity condition S14 because the vocabulary of language codes carries no language tags. Every asset retrieved, HTTPS compliance was complete and nothing was logically inconsistent: the strain is in governance, with 21 of 28 assets declaring no licence. Findings are W3C EARL assertions anchored to dated hashed snapshots, every headline computed twice.',
  },
  '/research/register-assurance': {
    title: 'Register assurance ontologies: why every public register fails at its boundary | Tesseract Academy for the Public Sector',
    description: 'Public registers increasingly assure their own records: GLEIF scores 99.99 across 3.39 million LEI records. But assurance stops at the register boundary: nothing checks conformance when one register embeds another’s identifiers, nothing verifies they still resolve, and nothing reconciles cross-register claims. Measured across six domains with one open method: all 2,252 FDIC LEIs are truncated and invalid, 19.5 per cent of active EEA insurers carry no LEI, the largest index fund is missing from the open identifier map, the registers of retraction agree on 72.42 per cent, all 67,141 dereferenced US academic-standards identifiers return 404, and zero of 300 sampled GOV.UK documents carry any maintenance commitment. Four boundary defect classes, six open ontologies, and the Register Integrity Index.',
  },
  '/research/financial-answer-verification': {
    title: 'Financial answer verification: provenance beats plausibility without a gold key | Tesseract Academy for the Public Sector',
    description: 'FinanceBench ships 2,400 model answers carrying human correctness labels, an unused supervision set for answer verification. A deterministic check that never sees the gold answer recovers 57.4% of labelled errors and lifts the accuracy of served answers from 68.8% to 78.0% at 60.5% coverage, with positive recall in all sixteen model configurations. The same check against the whole filing recovers 3.6%, because a filing carries a median of 1,270 numbers against 69 on the cited page. Excusing answers that are reconstructible by arithmetic is anti-informative. The ground-truth audit finds page numbers are 0-indexed and that the two shipped gold files disagree on 15 of 51 numeric cases, every one by exactly 100x.',
  },
  '/research/neurosymbolic-space-kg': {
    title: 'Neuro-symbolic space knowledge graph: what catches a wrong AI classification in orbit | Tesseract Academy for the Public Sector',
    description: 'A public 833,403-triple knowledge graph of all 70,122 catalogued space objects from a pinned CelesTrak SATCAT snapshot, aligned to the Space Situational Awareness Ontology. The ontology declares one disjointness axiom, so 351 of its 353 classes can never reject a wrong AI classification. LogMap 4.0 on the same pair reports zero repair conflicts while the catalogue refutes nine of its twenty candidates, catches a category error in its final output and rescues one it wrongly discarded. We also publish the first openly released language model for a space ontology: hallucinated ontology terms fall from 13.81 to 0.06 per output. Includes the threshold sweep that caught a circular measurement in our own earlier version.',
  },
  '/research/construction-standards-crosswalks': {
    title: 'Construction data standards crosswalk: IFC, COBie, Uniclass and BOT measured | Tesseract Academy for the Public Sector',
    description: 'Open crosswalks between the standards a building passes through (IFC4, COBie/BS 1192-4, Uniclass 2015, W3C BOT): 49 correspondences and 7 asserted non-mappings, all 96 identifiers machine-verified, every row argued. The classification layer of construction is 0% falsifiable, so no wrong AI mapping into COBie or Uniclass can ever be machine-rejected. BOT reaches 80.95% checkability from 9 axioms; IFC4 reaches 11.45% from 2,443. Axiom placement beats axiom count, measured on a second domain.',
  },
  '/research/parametric-payout-assurance': {
    title: 'Parametric climate insurance assurance: can a payout prove it paid? | Tesseract Academy for the Public Sector',
    description: 'An open vocabulary and twelve machine-checkable rules that audit a parametric climate insurance promise at the three points where it fails: whether the promise is specifiable at all, whether a registered household is payable before a storm, and whether the payout arrived after one. Includes a documented false negative computed from public records: Severe Tropical Storm Nalgae came ashore 8 km/h below a typhoon trigger and destroyed roughly 67,000 tonnes of mostly rice.',
  },
  '/research/industrial-ontology-crosswalks': {
    title: 'Industrial ontology crosswalks: why semantic interoperability fails across seven standards | Tesseract Academy for the Public Sector',
    description: 'Open crosswalks between four pairs of industrial data standards (ISO 15926-14, IFC4, ISA-95, CFIHOS, OPC UA, SAREF, Asset Administration Shell) plus the measurement that explains why they fail. Four of the seven cannot reject any mis-mapping at all, so the usual reasoner check could never have failed. IFC4 has 163 times more disjointness axioms than ISO 15926-14 and is 6.6 times less checkable. Every correspondence passes validation alone while the set collapses 29 classes together.',
  },
  '/research/ies4-turtle-language-model': {
    title: 'IES4 RDF and Turtle language model: an open LLM for a government ontology | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for IES4, the UK 4D defence-data ontology. Against the untuned base model, IES term conformance rises from 0% to 88.6% and the hallucinated-term rate falls from 0.937 to 0.010, on correct-by-construction training data double-validated against the published dstl/IES4 ontology. Model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/ontology-correctness-benchmark': {
    title: 'SHACL cannot catch a hallucinated ontology term: the open-world hole, measured | Tesseract Academy for the Public Sector',
    description: 'A reproducible benchmark on three real vocabularies (schema.org, IES4, OBO PATO+RO) showing that open-world SHACL validates as conformant every data graph containing a fabricated ontology term (300 of 300), while a closed-world vocabulary gate catches all 300 with zero false positives across 418 fabricated terms. The correctness layer for AI-generated knowledge graphs, from the open-ontologies engine.',
  },
  '/research/shacl-shapes-not-vocabulary': {
    title: 'SHACL validates shapes, not vocabulary: the case for a closed-world companion | Tesseract Academy for the Public Sector',
    description: 'SHACL Core is open-world by design: it constrains the nodes a shape targets and is silent about everything else, including terms that do not exist in the ontology. Why sh:closed does not close the gap, and where a closed-world vocabulary check belongs in a generative RDF pipeline.',
  },
  '/research/semantic-integrity-detection-delta': {
    title: 'Semantic integrity defects in RDF evade static analysis and SHACL: a cross-library study | Tesseract Academy for the Public Sector',
    description: 'A controlled study of four real defects in popular open-source knowledge-graph libraries and whether mainstream static analysis and SHACL validation catch them. They do not; a semantic verifier does.',
  },
  '/research/symbol-existence-box': {
    title: 'Symbol-existence checking in a neuro-symbolic pipeline: where the missing box belongs | Tesseract Academy for the Public Sector',
    description: 'Neuro-symbolic systems are assemblies of distinct components. Most LLM-to-knowledge-graph pipelines have generation and SHACL and assume SHACL is the symbol-grounding box. It is not. Read through the boxology of hybrid learning-and-reasoning systems, the missing box is symbol grounding.',
  },
  '/research/foundry-grade-machine-ontologies': {
    title: 'Machine-authored ontologies: foundry-grade guarantees for LLM-generated OWL | Tesseract Academy for the Public Sector',
    description: 'The OBO Foundry spent two decades insisting biomedical terms mean one thing and are declared in one place. Measured on the Foundry ontologies PATO and RO, open-world SHACL admits every fabricated identifier while a closed-world gate catches all of them, so machine output can be held to the same standard as human curation.',
  },
  '/research/neuro-symbolic-verification-direction': {
    title: 'Neuro-symbolic AI verification: the direction problem | Tesseract Academy for the Public Sector',
    description: 'Most neuro-symbolic work feeds symbols into the neural model. The under-built direction is the reverse, symbols verifying what the model produced. On the Kautz taxonomy the closed-world vocabulary gate is the cheapest reliable instance of that reverse arrow, and it catches an error class no amount of knowledge injection prevents.',
  },
  '/research/certified-denotation': {
    title: 'Ontology verification: certified denotation, the gate beyond symbol existence | Tesseract Academy for the Public Sector',
    description: 'The closed-world vocabulary gate proves every term exists; it does not prove the term is used soundly. Certified denotation is the next gate, from ontology domain and range up to a certified world model. An honest roadmap of the correctness ladder, existence then type soundness then world-state soundness.',
  },
  '/research/ontology-grounded-biomedical-kg': {
    title: 'Ontology-validated biomedical knowledge graph: grounded, not retrieved | Tesseract Academy for the Public Sector',
    description: 'A gene-disease knowledge graph from 40 real Open Targets associations, typed with the Biolink Model and validated by a closed-world vocabulary gate. The grounded graph has 0 SHACL and 0 vocabulary violations across 284 triples; an ungrounded variant with one fabricated Biolink predicate passes SHACL but is caught by the gate. Reproducible, with a provenance-carrying hypothesis triage.',
  },
  '/research/copula-coupled-uncertainty-certificates': {
    title: 'Copula-coupled uncertainty certificates: marginal coverage is not joint coverage | Tesseract Academy for the Public Sector',
    description: 'On 1,600 real OQMD materials with a frozen regressor, independent conformal prediction gives 90% per-target coverage but only 79% joint coverage. A coupled max-score certificate restores 90% joint coverage (22% tighter than Bonferroni), and a Gaussian-copula region matches it at 0.43x the size. Calibrated, machine-checkable uncertainty for correlated scientific outputs.',
  },
  '/research/verifiable-scientific-llm-benchmark': {
    title: 'Scientific LLM benchmark: fluency is saturated, verified correctness is not | Tesseract Academy for the Public Sector',
    description: 'verifiabench grades LLM Biolink-RDF output with a closed-world oracle (term existence + structure, no LLM judge) instead of fluency. Across nine models including Claude Opus, Sonnet and Haiku, raw fluency saturates at 1.00 while verified capability ranges 0.00 to 1.00: a local Qwen3-Coder-30B ties Claude Opus at 1.00 while some fluent models invent half their terms. Reproducible against any endpoint.',
  },
  '/research/proof-carrying-action-gatekeeper': {
    title: 'Proof-carrying action gatekeeper for AI agents, exhaustively verified | Tesseract Academy for the Public Sector',
    description: 'A reference ARIA-Safeguarded-AI-style gatekeeper for a bounded multi-agent system. Actions dispatch only if a certificate passes a 31-line trusted core. Verified exhaustively, not sampled: over 96 reachable states and 1,176 transitions it blocks 672/672 unsafe actions and admits 504/504 safe ones at 0.36 microseconds per check. Without the gate, 57% of actions violate the spec.',
  },
  '/research/health-ai-privacy-fairness-assurance': {
    title: 'Health AI assurance: the disparate impact of differential privacy, in one report card | Tesseract Academy for the Public Sector',
    description: 'Privacy and fairness are audited separately, but they interact. On the real UCI Diabetes readmission dataset, one report card runs membership inference and per-subgroup equity on the same model across a differential-privacy sweep. At epsilon 0.25, DP costs minority subgroups 2.6x more accuracy than the majority while the membership leakage it targets is near zero. The trade is only visible with both planes on one card.',
  },
  '/research/biology-ontology-language-model': {
    title: 'Biomedical knowledge graph LLM: an open, ontology-conformant language model | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for the Biolink Model and GO-CAM. Against the untuned base model, term conformance rises from 0% to 100% and the hallucinated-term rate falls from 0.42 to 0.00, holding at 89% on multi-association graphs never seen in training. Correct-by-construction data validated with the Biolink Model Toolkit and the GO-CAM schema; model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/pyramid-ies-hqdm-semantic-bridge': {
    title: 'PYRAMID avionics semantic bridge: grounding Def Stan 00-134 in IES and HQDM | Tesseract Academy for the Public Sector',
    description: 'PYRAMID (Def Stan 00-134) is an open avionics reference architecture with no shared data model; it pushes interoperability into inter-component bridges. A worked, open, SHACL-validated example grounds those bridges in the IES and HQDM 4D ontologies, so three PRA components (Geography, Tactical Objects, Data Fusion) that model the same object resolve to one referent. No prior work grounds PYRAMID in an upper ontology.',
  },
  '/research/agri-environment-heritage-value': {
    title: 'The value of agri-environment heritage actions: an open evidence base | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open-data demonstration of how we evidence the wider value of agri-environment scheme heritage actions for nature and for people: a scoping-review framework on Natural England\'s NEER001 method, with a real spatial analysis of the 2,206 Scheduled Monuments on the Historic England Heritage at Risk Register 2024.',
  },
  '/research/connective-product-cyber-incidents': {
    title: 'Connective product cyber incidents: an open evidence base | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base of cyber incidents affecting connective products (IoT, operational technology, computing devices, networking equipment and software/firmware): 16 documented incidents (2022 to 2025), a SKOS taxonomy and a source-quality rubric aligned to the six Government Data Quality Framework dimensions, published on GitHub under CC-BY-4.0.',
  },
  '/research/nature-related-security-risk': {
    title: 'Nature-related security risk ontology: an open OWL and SKOS evidence base | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base and systems ontology that operationalises the UK National Security Assessment on biodiversity loss and ecosystem collapse (2026): 14 documented nature-to-security cascades graded with the assessment\'s own confidence ratings, an OWL ontology (NSRO), a SKOS taxonomy cross-walked to IPBES and SHACL shapes, published on GitHub under CC-BY-4.0.',
  },
  '/research/skills-england-occupational-maps': {
    title: 'Occupational map ontology: the Skills England maps as 51,355 RDF triples | Tesseract Academy for the Public Sector',
    description: 'An open, machine-readable ontology and explorer of the Skills England occupational maps by Tesseract Academy: 1,269 occupational standards placed in the route, pathway and cluster hierarchy, crosswalked to ONS SOC 2010/2020, linked to apprenticeship and technical education products, green-jobs themes and progression pathways. 51,355 triples, published as Turtle and JSON-LD, validated at zero SHACL violations. Open Government Licence v3.0.',
  },

  '/research/property-market-indicators': {
    title: 'UK local housing market indicators from a year of transactions | Tesseract Academy for the Public Sector',
    description: "An open, reproducible set of residential property-market indicators for all 318 local authorities in England and Wales, derived from HM Land Registry Price Paid Data: median and quartile prices, transaction volume, new-build and leasehold share, and property-type mix, from 760,607 standard 2025 transactions. Built from open data under the Open Government Licence, published on GitHub and Hugging Face.",
  },

  '/research/ixbrl-disclosure-benchmark': {
    title: 'iXBRL disclosure benchmark: how machine-readable are UK company accounts? | Tesseract Academy for the Public Sector',
    description: "An open benchmark parsing a full day of Companies House Inline XBRL accounts filings to measure what fraction expose each core accounting concept as a structured, machine-readable fact. 8,856 filings, 899 concepts; core balance-sheet concepts exposed in 73 to 97 percent of filings, the empirical premise behind claims that structured data beats PDF for AI-driven reporting. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/xbrl-pdf-html-ai-benchmark': {
    title: 'XBRL against PDF and HTML: does structured data help AI read company accounts? | Tesseract Academy for the Public Sector',
    description: "A self-funded controlled pilot comparing how well an open-weights language model reads the same UK annual reports as structured XBRL facts, HTML text and PDF text. Three FY2026 filed reports, 21 tasks, 189 scored model calls. Financial extraction accuracy: XBRL 88.9%, PDF 86.7%, HTML 80.0%; only XBRL ever retrieved a bracketed negative equity figure with the correct sign, at 2.9x the token cost.",
  },

  '/research/nature-governance-graph': {
    title: 'UK nature governance knowledge graph: a provenance-first reference graph you can cite | Tesseract Academy for the Public Sector',
    description: "An open, provenance-first reference graph of the UK nature and environment governance landscape: 47 statutory agencies, NGOs, data bodies, funders, sector bodies, partnerships and international conventions, and 48 sourced relationships. Every relationship reified with a cited source; SHACL enforces that no edge is unsourced. Zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/modip-plastics-knowledge-graph': {
    title: 'Museum knowledge graph: turning 11,865 raw catalogue records into RDF | Tesseract Academy for the Public Sector',
    description: "A reproducible pipeline turning the Museum of Design in Plastics' raw open catalogue (11,865 objects, CC BY 4.0 via the Museum Data Service) into a standards-based knowledge graph: a SKOS materials taxonomy grounded in polymer science, a CIDOC-CRM instance graph, verified Getty AAT alignments and a variant graph recovered from description prose. 99.9% of 35,172 material tags resolved; zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/skills-england-esco-crosswalk': {
    title: "SKOS crosswalk: England's occupational standards mapped to the ESCO skills vocabulary | Tesseract Academy for the Public Sector",
    description: "An open SKOS crosswalk from the 1,269 Skills England occupational standards to the EU ESCO occupation classification, with conservative, labelled confidence: 114 exact, 281 close, 270 related and 604 unmatched. The large unmatched tail quantifies where England's occupational language diverges from ESCO. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/evaluation-evidence-atlas': {
    title: 'UK government evaluation atlas: what government evaluates, and how openly it says so | Tesseract Academy for the Public Sector',
    description: "An open atlas of 1,770 UK government evaluation publications, harvested from the GOV.UK Search API and classified by evaluation type and declared method. Impact evaluations dominate, but only 11 percent declare a recognisable method in their metadata. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/consultation-corpus': {
    title: 'UK government consultation corpus: every consultation that reached an outcome | Tesseract Academy for the Public Sector',
    description: "An open, structured corpus of 6,260 UK government consultations with a published outcome, harvested from the GOV.UK APIs and coded by policy area. 98 percent carry policy-area coding; only 77 percent attach response documents to their outcome. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/fca-warnings-observatory': {
    title: 'FCA scam warnings observatory: reconstructing a live list with no memory | Tesseract Academy for the Public Sector',
    description: "The FCA warning list of unauthorised firms shows only the current set with no history. This open dataset reconstructs it as a monthly time series from 18,224 live warning pages: FCA warnings rose nearly four-fold from around 500 a year in 2019 to roughly 1,900 across 2022 to 2025, 18 percent flagging clone firms. Published on GitHub and Hugging Face.",
  },

  '/research/local-labour-market': {
    title: 'Local labour market data: the most timely signal, tidied for every UK authority | Tesseract Academy for the Public Sector',
    description: "An open dataset of the latest monthly claimant count for all 374 local authorities in Great Britain, from the ONS via NOMIS. Claimant rate ranges from 1.1 to 10.1 percent against a 3.5 percent mean. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/algorithmic-transparency-corpus': {
    title: 'UK algorithmic transparency corpus: the closest thing to a register of government AI | Tesseract Academy for the Public Sector',
    description: "The full set of 136 published UK Algorithmic Transparency Recording Standard records, structured as an open corpus: which of 73 public bodies have disclosed which algorithmic and AI tools. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/small-area-health-profile': {
    title: 'Small area health profile: the baseline a local health survey should be read against | Tesseract Academy for the Public Sector',
    description: "An open small-area health profile for all 331 local authorities in England and Wales, combining Census 2021 self-reported general health, disability and unpaid care. Self-reported bad health ranges from 2.7 to 9.6 percent. Published on GitHub and Hugging Face under the Open Government Licence.",
  },
  '/research/victim-witness-evaluation': {
    title: 'Machine-checkable theory of change: evaluation logic that has to hold up | Tesseract Academy for the Public Sector',
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
    title: 'Survey design and delivery for the public sector | Tesseract Academy for the Public Sector',
    description: 'End-to-end survey methodology, questionnaire design, mixed-mode collection, and statistical analysis. Qualifications Wales 3-year contract (2026-2029). CCS RM6126 appointed supplier.',
  },
  '/services/digital-analytics': {
    title: 'Digital Analytics & Audience Measurement | Tesseract Academy for the Public Sector',
    description: 'GA4 and Google Tag Manager implementation and audit, consent-aware measurement, Power BI and Looker Studio dashboards, KPI frameworks, test-and-learn support, and analytics capability building for UK public sector and cultural organisations. CCS RM6126 appointed supplier.',
  },
  '/research/museum-visits-observatory': {
    title: 'DCMS museum visits observatory: 16 museum groups, 87 months of open data | Tesseract Academy for the Public Sector',
    description: "An interactive observatory of monthly visits to all DCMS-sponsored museums and galleries, January 2019 to March 2026, built from the official DCMS statistical data set: 16 museum groups, site-level detail, pandemic closures marked, and recovery measured against each institution's own 2019 baseline. Open Government Licence v3.0.",
  },
  '/services/education-upskilling': {
    title: 'AI Education & Upskilling | Tesseract Academy for the Public Sector',
    description: 'AI literacy programmes, data science workshops, and executive leadership training. US Navy executive workshop (40+ participants). UK Government Business Academy webinars (2025 and 2026). BridgeAI / Innovate UK delivery.',
  },
  '/services/ai-governance': {
    title: 'AI Ethics & Governance | Tesseract Academy for the Public Sector',
    description: 'EU AI Act, NIST AI RMF, ISO 42001 compliance. Bias auditing, algorithmic impact assessments. Open-source governance platform (48 tools). Cyber Essentials certified. FCA stablecoin consultation.',
  },
  '/services/ontology-engineering': {
    title: 'Ontology engineering consultancy: RDF, OWL 2 and SHACL | Tesseract Academy for the Public Sector',
    description: 'Ontology engineering, knowledge graph design and semantic data assurance for UK government and regulated industry. Domain ontologies in OWL 2, SKOS and SHACL, standards crosswalks, register assurance, and closed-world verification of AI-generated RDF. Delivered the ontology extension tool for the National Digital Twin Programme. Procurable through CCS RM6200, RM6126 and RM6219.',
  },
  '/ontology': {
    title: 'Safe AI: building AI systems that can be checked | Tesseract Academy for the Public Sector',
    description: 'Safe AI is a system that cannot serve an answer or take an action nothing was able to check. Open-world SHACL passed all 300 graphs carrying a fabricated term; a closed-world gate caught all 300. A verified action gatekeeper blocks 672 of 672 unsafe actions. Grounding a model in a government standard cut confabulated terms from 93.7 per cent to 1.0 per cent. Plus the full index of our open ontology research: register integrity, standards crosswalks, verification, language model grounding and catalogue conformance, all reproducible from public data.',
  },
  '/insights': {
    title: 'UK Public Sector AI Insights — Research Findings | Tesseract Academy for the Public Sector',
    description: 'Original research from Tesseract Academy: land valuation ML analysis across 1,916 Welsh LSOAs, BridgeAI 450% oversubscription, NDTP open-source ontology tooling. Evidence from UK government AI delivery 2022-2026.',
  },
  '/research/fine-tuning-llm-government-data-standard': {
    title: 'Fine-tuning an LLM on an ontology: IES4 hallucination from 94% to 1% | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy fine-tuned Qwen3-Coder-30B on IES4, the UK government Information Exchange Standard for defence and national security data sharing. Term confabulation fell from 93.7% to 1.0%, term conformance rose from 0% to 88.6%, every claim machine-verified against the published ontology. Published openly on Hugging Face.',
  },
  '/research/machine-validated-open-ontologies': {
    title: 'Machine-validated open ontologies: publishing RDF the public sector can trust | Tesseract Academy for the Public Sector',
    description: 'Three delivered examples of open, machine-validated data structures: the Skills England occupational maps as a formal ontology (51,355 triples, 0 SHACL violations), the open-ontologies validation toolkit, and a computation-ready heritage aerial-photography archive (292 frames, 0 SHACL violations). Data, rules and checker published together.',
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
