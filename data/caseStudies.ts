// Single source of truth for case studies.
// 'delivery' entries render on /use-cases; 'open-demo' entries render as the
// Tesseract Foundational Research section on /research. Each entry's detail
// page lives at its `slug` (/research/<slug>).

export type CaseStudyCategory = 'delivery' | 'open-demo';

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: CaseStudyCategory;
  challenge: string;
  intervention: string;
  assurance: string;
  outcome: string;
  reusable: string;
}

export const CATEGORY_LABELS: Record<CaseStudyCategory, string> = {
  'delivery': 'Commissioned delivery',
  'open-demo': 'Tesseract Foundational Research',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'uc1',
    slug: '/research/welsh-government-land-valuation',
    title: 'Testing Land Valuation Methods: Welsh Government',
    category: 'delivery',
    challenge: 'The Welsh Government needed to evaluate different approaches for assessing land values to support local government finance policy development, comparing traditional and AI-driven methodologies.',
    intervention: 'Commissioned by Welsh Government to test five distinct valuation methodologies: market-based statistical valuation, advanced algorithmic and machine-learning applications, formula-based valuation by land area, conventional valuation approaches, and innovative experimental approaches.',
    assurance: 'Delivered under Welsh Government procurement standards. Full summary and comprehensive report published on GOV.WALES.',
    outcome: 'Produced a comprehensive comparative analysis across all five methodologies, published March 2026. Findings directly inform Welsh Government local government finance policy.',
    reusable: 'Valuation methodology comparison framework. Published reports available on GOV.WALES.',
  },
  {
    id: 'uc2',
    slug: '/research/national-digital-twin-programme',
    title: 'AI Ontology Extension Generator: National Digital Twin Programme',
    category: 'delivery',
    challenge: 'The National Digital Twin Programme (NDTP), a UK Government initiative under the Department for Business and Trade, needed to automate ontology development to accelerate the creation of digital twins across UK infrastructure.',
    intervention: 'Contributed to the development of an open-source AI-powered tool that automates ontology generation and extension through a web interface. The tool combines data profiling, Named Entity Recognition, and large language models to extract and generate ontology entities from multiple data formats (CSV, JSON, RDF/Turtle).',
    assurance: 'Open-source under Apache License 2.0 (code) and Open Government Licence v3.0 (documentation). Maintained by NDTP.',
    outcome: 'Delivered a production-ready Streamlit web application with a four-step wizard workflow, built-in validation and visualisation tools, and iterative refinement capabilities. Published on GitHub under National-Digital-Twin organisation.',
    reusable: 'Open-source tool available on GitHub (National-Digital-Twin/ndtp-ai-ontology-extension).',
  },
  {
    id: 'uc3',
    slug: '/research/bridgeai-creative-industries',
    title: 'BridgeAI Programme: AI for UK Creatives',
    category: 'delivery',
    challenge: 'Innovate UK\'s BridgeAI programme needed to support the UK creative industries in adopting AI technologies, bridging the gap between cutting-edge AI research and practical implementation for creative sector SMEs.',
    intervention: 'Delivered a programme delivery report for the BridgeAI initiative, providing research-backed guidance on AI adoption for UK creatives. Led by Fabio Rovai and Dr Stylianos Kampakis, the work covered AI readiness assessment, implementation strategies, and practical tooling recommendations.',
    assurance: 'Funded by Innovate UK BridgeAI Programme. Aligned with UK industrial strategy for creative industries.',
    outcome: 'Programme delivery report completed, supporting AI adoption pathways for creative sector organisations across the UK.',
    reusable: 'AI adoption framework and readiness assessment methodology for creative industries.',
  },
  {
    id: 'uc4',
    slug: '/research/kalgera-financial-vulnerability',
    title: 'Financial Vulnerability Research: Kalgera / Fintech Scotland',
    category: 'delivery',
    challenge: 'Kalgera, a fintech specialising in protecting financially vulnerable customers, needed primary qualitative research to validate their AI-driven early warning signal architecture. The research had to capture lived experiences of financial vulnerability in Scotland, including scam victims, people experiencing cognitive decline, and carers managing money on behalf of others.',
    intervention: 'Designed and delivered an end-to-end user research programme: paid Facebook/Instagram recruitment campaign targeting financially vulnerable adults across Scotland (50+ primary, 35–49 secondary), a screening survey collecting quantitative and qualitative data, and in-depth 1:1 interviews (60 minutes each). The interview protocol was mapped directly to Kalgera\'s signal categories: spending pattern changes, income depletion, credit reliance, new payees, cash patterns, bill changes, account access, and scam indicators.',
    assurance: 'Full ethical framework aligned with the Adult Support and Protection (Scotland) Act 2007. Distress protocol in place with trained facilitators. All data encrypted, UK-hosted, anonymised within 7 days. Verbal and written consent obtained for participation, recording, and data use.',
    outcome: 'Delivered three outputs: a signal validation report confirming which behavioural markers are observable in transaction data, an intervention acceptability framework documenting what vulnerable people consider helpful versus intrusive, and a summary findings report for the Finance & Health Lab. Direct participant quotes used to ground Kalgera\'s product decisions in lived experience.',
    reusable: 'Recruitment pipeline (Facebook ad → screening survey → qualification → interview). Thematic analysis framework mapped to financial signal categories. Intervention acceptability spectrum methodology.',
  },
  {
    id: 'uc6',
    slug: '/research/wrap-food-loss-waste-taxonomy',
    title: 'Food Loss and Waste Data Taxonomy: WRAP',
    category: 'delivery',
    challenge: 'WRAP\'s Courtauld Commitment 2030 asks the UK food industry to halve food waste by 2030 (UN SDG 12.3). More than 400 organisations across an international Food Pact Network report their data using locally divergent definitions, so it cannot be reliably aggregated or compared, undermining measurement of collective progress.',
    intervention: 'Commissioned by WRAP (PRC228) to translate the international Food Loss and Waste Standard into structured, machine-readable data infrastructure: five coded dimensions (product category, supply chain stage, waste destination, intervention type, food and drink material hierarchy) with controlled vocabularies and unique codes, 84 coded entities expressed in SKOS and JSON-LD, grounded in the WRAP Data Capture Sheet and Codex GSFA, with FoodOn product-category alignment. SHACL validation shapes and FoodEx2 mappings are scaffolded for Phase 2. Delivered through iterative co-design with WRAP subject-matter experts.',
    assurance: 'Built as working data infrastructure with version-controlled change governance and 100% structural coverage of the WRAP Data Capture Sheet controlled vocabularies at Level 1 (680 validated RDF triples).',
    outcome: 'A publishable, machine-readable taxonomy that lets the Food Pact Network classify and compare food waste data on a like-for-like basis for the first time, and feeds the developing international data standard.',
    reusable: 'The taxonomy-plus-schema-plus-validation-rules pattern transfers to any multi-organisation reporting domain requiring consistent, comparable data.',
  },
  {
    id: 'uc-skills-england',
    slug: '/research/skills-england-occupational-maps',
    title: 'The Skills England occupational maps, as an ontology',
    category: 'open-demo',
    challenge: 'Skills England publishes the national occupational maps (1,269 occupational standards with their routes, pathways and clusters, SOC classifications, apprenticeship and technical education products, green-jobs themes and progression pathways) through a public API. The data is relational but delivered as documents, has no published schema for the connected object, and buries the SOC crosswalk (the bridge to official labour-market statistics) inside each record. Consumed the usual way, a flattened slice ends up in a spreadsheet and the relationships that make it valuable are lost.',
    intervention: 'Harvested a complete static snapshot of the Skills England Occupational Maps Public API and modelled it as an ontology (SEOM): the Route to Pathway to Cluster hierarchy as a SKOS concept scheme, the ONS SOC 2010 and 2020 codes as a first-class crosswalk, and occupations, products and progression as typed instances. Published as Turtle and JSON-LD. A searchable explorer on the site reads the same open snapshot.',
    assurance: 'Registered API access granted by Skills England. Data used under the Open Government Licence v3.0, with the mandatory Skills England logo and attribution statement displayed. The graph conforms to a formal SHACL schema with zero violations across 51,000+ triples, plus SPARQL referential-integrity checks.',
    outcome: 'An open, machine-readable ontology of the entire national occupational map (51,355 triples: 1,269 standards, 15 routes, 35 pathways, 172 clusters, a 278-code SOC 2020 crosswalk, 1,313 products and 2,717 progression edges), with a live explorer on the Tesseract Academy for the Public Sector. It is the operational companion to our open PIAAC research on skills and social mobility: PIAAC measures what adults can do, the occupational maps show where those skills lead, and SOC is the join.',
    reusable: 'The SEOM vocabulary, the full instance graph (Turtle and JSON-LD), the SOC 2010/2020 crosswalk as standalone SKOS schemes, the SHACL shapes, and the reproducible build and validation scripts, all open source via Open Ontologies.',
  },
  {
    id: 'uc5',
    slug: '/research/wastewater-effluent-data-quality',
    title: 'Wastewater Effluent Data Quality',
    category: 'open-demo',
    challenge: 'The UK is rolling out continuous water-quality monitoring on wastewater assets under the Environment Act 2021, and the Environment Agency is exploring whether that data can serve as a regulatory tool. The binding question is data quality: calibration drift, fouled probes, telemetry gaps and transcription errors all masquerade as real signals.',
    intervention: 'Analysed a full-scale wastewater treatment works dataset of 1,382 daily records carrying the regulated effluent suite (ammonia, BOD, COD, total nitrogen, inflow, outflow). Applied a two-layer method: a statistical QA battery (completeness, flatline, robust MAD outliers, drift) and a declarative ISO 19156 / SOSA effluent ontology with SHACL data-quality rules, including the domain-aware COD ≥ BOD physical invariant.',
    assurance: 'Fully reproducible and published open source as a case study in Open Ontologies. Source data under CC BY-SA 4.0. No model training: every quality rule is a declarative constraint with a named failure reason.',
    outcome: 'The data is complete and internally consistent (COD ≥ BOD holds on every one of 1,382 rows), yet the battery still surfaces multi-year baseline drift and dozens of statistical outliers per determinand. The SHACL rules reject every physically impossible record and pass every clean one, making the trust verdict auditable.',
    reusable: 'The QA battery, effluent observation ontology, and SHACL data-quality shapes are open source and re-pointable to any continuous-monitoring stream.',
  },
  {
    id: 'uc-aerial',
    slug: '/research/computation-ready-aerial-heritage',
    title: 'Computation-Ready Aerial Photography Heritage',
    category: 'open-demo',
    challenge: 'Most of the UK\'s heritage is digitised but not computable. Aerial photography collections holding tens of millions of frames are scanned, catalogued and mapped, yet a researcher cannot query them at scale by space and time or cross-reference them to other archives. This is the gap the Towards a National Collection programme (AHRC / UKRI) and its N-RICH work set out to close.',
    intervention: 'Built NAPH, an open computation-ready digitisation standard for aerial photography, assembled from existing standards (GeoSPARQL, PROV-O, Dublin Core, IIIF, Records in Contexts) across three incrementally-adoptable tiers. Tested it against a real national archive: harvested 292 real frames from the public NCAP Air Photo Finder catalogue (metadata only, read-only, rate-limited), reprojected footprints from EPSG:3857 to WGS84, and lifted them to the Baseline tier automatically.',
    assurance: 'Fully reproducible and published open source in Open Ontologies (MIT and CC BY 4.0). The real data validated at zero SHACL violations, and testing against real holdings surfaced and fixed a defect in the standard\'s own date-precision shape. Every Records in Contexts term in the crosswalk was verified against the published RiC-O 1.1 ontology, not assumed.',
    outcome: 'Measured finding: the collection is far closer to computation-ready than assumed. 100 percent of records already carry a machine-readable footprint and an ISO-8601 date; the one genuine gap is machine-readable rights. The same standard was then applied unchanged to two further national collections (NAPL Canada and WHAIFinder USA), each lifting to the identical NAPH Baseline at zero SHACL violations, with each collection missing a different Baseline field. The records export cleanly to STAC 1.0, GeoJSON and IIIF, and NAPH publishes the previously unoccupied RiC-O to STAC crosswalk that binds archival provenance to spatiotemporal computability.',
    reusable: 'The ontology, SHACL shapes, live API harvester, STAC and GeoJSON exports, RiC-O crosswalk and an interactive map are open source and adaptable to any aerial or photographic collection.',
  },
  {
    id: 'uc-zef',
    slug: '/research/zero-emission-flight-ecosystem',
    title: 'Mapping the UK Zero-Emission Flight Ecosystem',
    category: 'open-demo',
    challenge: 'The UK zero-emission-flight sector has strong policy signals and funding under the Jet Zero Strategy, ATI FlyZero and the DfT-funded, CPC-led Zero Emission Flight Infrastructure (ZEFI) programme, but the data on who is building what, who funds whom, and which technologies gate which pathway sits scattered across press releases, programme pages and reports. That fragmentation is the problem any coordination tool has to solve.',
    intervention: 'Built an open, computation-ready reference graph of the UK hydrogen and electric aviation ecosystem: 42 real, sourced entities (organisations, airports, programmes, projects, funders, bodies, alliances and technologies) and 55 relationships, including ATI FlyZero, Project NAPKIN, ZeroAvia, Cranfield Aerospace Solutions, GKN Aerospace, Rolls-Royce, Airbus ZEROe and the Hydrogen in Aviation alliance. The seven technologies are linked by a feeds-into chain that models the physical hydrogen pathway from electrolysis to fuel-cell propulsion, each carrying an indicative, dated maturity.',
    assurance: 'Fully reproducible and published open source in Open Ontologies (CC BY 4.0). Validated against SHACL shapes at zero violations, enforcing that every entity is labelled and typed, every technology maturity is drawn from a controlled vocabulary and carries a provenance string, and every relationship satisfies referential integrity. A negative test injects a dangling edge and confirms the validator catches it, so only stated relationships are represented and none are inferred.',
    outcome: '42 entities, 55 relationships and 272 RDF triples validated at zero SHACL violations, with an interactive network view and a machine-readable graph. The three primitives shown, a typed stakeholder graph, a controlled-vocabulary technology model with sourced maturity, and referential-integrity validation, are the data spine of any single-view coordination tool for a fragmented sector.',
    reusable: 'The dataset, ZEF ontology, SHACL shapes, build-and-validate pipeline and interactive graph are open source and re-pointable to any innovation ecosystem that needs a single, validated view of stakeholders, funding and technology readiness.',
  },
  {
    id: 'uc7',
    slug: '/research/agri-environment-heritage-value',
    title: 'The Value of Agri-Environment Heritage Actions',
    category: 'open-demo',
    challenge: 'Agri-environment schemes are the largest source of government funding for the rural historic environment, yet the wider co-benefits of heritage actions, for nature and for people, are real but evidentially fragmented. As nature recovery is delivered faster and under tighter budgets, heritage actions risk being overlooked unless that value can be evidenced.',
    intervention: 'A self-initiated, open demonstration built entirely on public data: a pre-specified scoping-review protocol on Natural England\'s own evidence-review method (NEER001), PRISMA-ScR and the Collaboration for Environmental Evidence guidelines; a charting framework linking each heritage action to its co-benefits, EIP targets and indicative value for money (Green Book, ENCA); and our own spatial analysis of the Historic England Heritage at Risk Register 2024.',
    assurance: 'Fully reproducible and open. The spatial join locates 2,181 of 2,206 Scheduled Monuments at Risk by region; the South West share of 45% matches Historic England\'s published figure, a check the analysis is sound. Not a commissioned contract: a worked demonstration of method.',
    outcome: 'A published, replicable protocol, an evidence-map and gap framework, and a real spatial analysis showing 84% of monuments at risk are on farmland, where heritage actions act. Together they make the case that heritage actions deliver multi-objective value, for nature and for people, in a form that withstands scrutiny.',
    reusable: 'The scoping-review protocol, charting framework and value-for-money method transfer to any evidence-baseline question on the wider benefits of land-management or environmental actions.',
  },
  {
    id: 'uc8',
    slug: '/research/ies-hqdm-defence-interoperability',
    title: 'IES to HQDM: an Open 4D Ontology Crosswalk for Defence Data',
    category: 'open-demo',
    challenge: 'The UK Defence Investment Plan (June 2026) commits over £5bn to autonomous systems and £7.5bn to a Digital Backbone and Digital Targeting Web, all of which depend on heterogeneous systems and allies sharing data a machine can reason over. On the UK side that vocabulary is the Information Exchange Standard (IES); the built environment runs on HQDM and the National Digital Twin. Both are 4D and share a common heritage, yet no machine-readable crosswalk between them had ever been published.',
    intervention: 'A self-initiated, open artifact built on Tesseract\'s open-ontologies engine: the first public crosswalk between IES and HQDM. Seventeen backbone correspondences in SSSOM and RDF (with PROV-O provenance), a curated record of six divergences (the pairs that look like they map and do not), SHACL validation shapes, a reference alignment pipeline, and a worked SAPIENT (BSI Flex 335) safety case grounding one autonomous sensor node in IES-typed world states via our CIVeX agent-verification research.',
    assurance: 'Open and reproducible: data and documentation under CC-BY-4.0, upstream ontologies referenced by IRI (IES under the Open Government Licence, HQDM under Apache-2.0). Validated against the live published ontologies: all 17 correspondences resolve and the SHACL shapes conform. Candidate-for-review and open to correction.',
    outcome: 'A shared starting point the field lacked, released so suppliers building across defence and built-environment data can start from something concrete. The divergences record names the traps, including the ies:Event to hqdm:event false friend, that a naive label-based mapping would fall into.',
    reusable: 'The crosswalk, divergences record, SHACL shapes and reference pipeline transfer to any 4D upper-ontology alignment; the safety-case pattern transfers to any autonomous node that must be assured against a shared world model.',
  },
  {
    id: 'uc9',
    slug: '/research/pyramid-ies-hqdm-semantic-bridge',
    title: 'Grounding a PYRAMID Avionics Bridge in IES and HQDM',
    category: 'open-demo',
    challenge: 'PYRAMID (UK Defence Standard 00-134) is the MOD open reference architecture for avionics and mission systems. By design it has no shared data model: its Technical Standard states that components "do not share interface definitions", so a deployment "will use bridges to close the semantic gap", and the accompanying MOD assessment confirms "the PRA does not define a data architecture". The meaning of data across components is left to bridges that are, today, hand-built per deployment.',
    intervention: 'A self-initiated, open worked example that supplies the reference semantics for one such bridge, built entirely on the Open Government Licence Technical Standard. Entities from three PRA components (Geography, Tactical Objects, Data Fusion) are grounded in IES and HQDM terms using our IES-to-HQDM crosswalk, so the same object, e.g. a building that is both a Geographical_Feature and a Tactical_Object, resolves to one referent (ies:Entity, and hqdm:physical_object through the crosswalk). An executable proof, SHACL enforcement shapes and a negative fixture are included.',
    assurance: 'Open and reproducible under CC-BY-4.0. The bridge conforms to the crosswalk\'s own SHACL shapes; a co-reference is valid only when both sides denote the same referent, which makes the "Capability" false friend (a distinct entity in all three components) fail validation rather than ship silently. Not affiliated with or endorsed by the MOD PYRAMID programme.',
    outcome: 'A shared meaning layer beneath an open avionics architecture, demonstrated on the public standard. No published work grounds PYRAMID, or the related FACE Shared Data Model, in any upper ontology; this occupies that gap with ontologies the UK government already owns.',
    reusable: 'The grounding pattern transfers to any PYRAMID or FACE inter-component bridge, and to any MOSA reference architecture that leaves cross-component data meaning to a bridge layer.',
  },
  {
    id: 'uc-ies-llm',
    slug: '/research/ies4-turtle-language-model',
    title: 'An Open Language Model for IES4 Data',
    category: 'open-demo',
    challenge: 'The Information Exchange Standard (IES) is the 4D ontology behind UK defence and security data, but authoring IES-conformant RDF by hand is slow and demands scarce ontology expertise. General-purpose language models cannot help: asked to write IES Turtle, a strong 30B code model invents terms that do not exist in the ontology 94% of the time. That hallucination is worse than useless in a standards context, because invalid data that looks plausible is harder to catch than data that fails outright.',
    intervention: 'A self-initiated, open fine-tune: to our knowledge the first openly published language model trained specifically for IES4. The training data is correct-by-construction, every example graph generated programmatically with the telicent-ies-tool across 14 scenario patterns (employment, events, identifiers, communications, composites and more), then double-validated against the published dstl/IES4 ontology (510 classes, 204 properties) before any training. A LoRA adapter was trained on Qwen3-Coder-30B-A3B on-device (Apple Silicon, MLX), with a held-out out-of-distribution test set drawn from the real published IES sample data.',
    assurance: 'Measured against the untuned base model on held-out prompts: IES4 term conformance rose from 0% to 88.6%, the hallucinated-term rate fell from 0.937 to 0.010, structural conformance (subject and object types satisfying each property domain and range) reached 0.955, and the model follows a caller-supplied namespace 100% of the time. Every metric, including the weaker out-of-distribution results, is reported honestly in the model card. The full evaluation harness and dataset are published for independent reproduction.',
    outcome: 'A working assistant for IES data authoring, released as a research prototype with its dataset and eval code, so the small community that works with IES has a concrete starting point rather than a closed demo. It pairs naturally with the IES-to-HQDM crosswalk and the open-ontologies validation engine: the model drafts, the symbolic layer verifies.',
    reusable: 'The correct-by-construction method (generate valid graphs with a schema-aware tool, then reverse them into natural-language and machine-readable training pairs) transfers to any ontology with a programmatic builder. The term-membership and structural-conformance validators transfer to any IES or RDF quality gate.',
  },
  {
    id: 'uc-fair',
    slug: '/research/fair-scientific-data',
    title: 'FAIR Dataset Contracts for Scientific Data',
    category: 'open-demo',
    challenge: 'Scientific data is widely described as FAIR (Findable, Accessible, Interoperable, Reusable), but the claim is rarely tested at scale against a machine-checkable contract, and "AI-ready" is asserted more often than it is evidenced. Without a measurable baseline, funders and repositories cannot see where the real gap is.',
    intervention: 'A self-initiated, open study of 1,738 real public biomedical datasets across three repositories (EMBL-EBI BioStudies, Dryad, PRIDE), validated against a tiered FAIRSCAPE contract. Paired with an open, open-ontologies-certified OWL ontology that models the AI-ready dataset layer, aligned to schema.org, DCAT, PROV-O, SPDX, Bioschemas and MLCommons Croissant.',
    assurance: 'Fully reproducible and open source. Every result is computed from the live public repositories against a declarative contract, not asserted; the toolkit and analysis are published on GitHub.',
    outcome: 'The datasets are overwhelmingly findable and accessible, but 0% are interoperable or AI-ready: 100% lack a machine-readable schema, checksums and provenance. The finding names the real gap precisely, and the paired ontology models the AI-ready layer that closes it.',
    reusable: 'The FAIRSCAPE contract, the AI-ready OWL ontology and the reproducible analysis pipeline transfer to any repository or discipline that needs to measure, rather than assert, dataset readiness.',
  },
  {
    id: 'uc-connective',
    slug: '/research/connective-product-cyber-incidents',
    title: 'Cyber Incidents Affecting Connective Products',
    category: 'open-demo',
    challenge: 'Policy on the security of connective products (IoT, operational technology, computing devices, networking equipment, and software and firmware) is set against headline incident numbers that cannot be reconciled: no shared denominator, non-additive definitions, and vendor telemetry that is never quantified. The field lacks an honest, machine-readable baseline.',
    intervention: 'A self-initiated, open, machine-readable evidence base built on real public sources: 16 documented incidents (2022 to 2025) across five technology groups, each traced to an authoritative primary source and CVE-referenced where a CVE exists, published with a SKOS taxonomy and a source-quality grading rubric aligned to the six UK Government Data Quality Framework dimensions.',
    assurance: 'Open and reproducible on GitHub. Every incident is traced to an authoritative primary source and graded for source quality; the evidence gaps (no shared denominator, non-additive definitions, unquantified vendor telemetry) are named openly rather than papered over.',
    outcome: 'A shared, honest baseline that maps real incidents to product class, vector and impact, and states its own limits. It gives policy work something concrete to build on instead of irreconcilable headline figures.',
    reusable: 'The SKOS taxonomy, source-quality rubric and CVE-linked dataset transfer to any evidence-baseline exercise that must grade sources and name its gaps.',
  },
  {
    id: 'uc-naturesec',
    slug: '/research/nature-related-security-risk',
    title: 'Nature-Related Security Risk: an Open Evidence Base and Systems Ontology',
    category: 'open-demo',
    challenge: 'In January 2026 the UK Government published its National Security Assessment on global biodiversity loss, ecosystem collapse and national security, assessing with high confidence that six strategic ecosystems are on a pathway to collapse with security consequences. The assessment is a one-off written document: it ships no machine-readable dataset, no shared ontology and no standing monitoring mechanism, so its cascade chains cannot be queried, versioned or stress-tested.',
    intervention: 'A self-initiated, open, machine-readable evidence base and systems ontology that operationalises the assessment. It curates 14 documented nature-to-security cascades (food-price shocks, Lake Chad fragility, Somalia famine, East Africa locusts, Nile water tension, zoonotic spillover, Amazon and AMOC tipping points, Sahel conflict), each traced to authoritative sources and structured as driver to ecosystem-service loss to transmission channel to security outcome. Around it sits the Nature-Related Security Risk Ontology (OWL), a SKOS taxonomy cross-walked to the IPBES conceptual framework, and SHACL shapes, with the four systems constructs the assessment names (tipping points, feedback loops, cascades, compounding shocks) modelled as first-class objects.',
    assurance: 'Open and reproducible on GitHub under CC-BY-4.0 (code MIT). Every cascade is graded with the assessment\'s own High/Moderate/Low analytical confidence ratings; the six contested chains are flagged and cite both sides (the Syria case carries Kelley 2015 and its Selby 2017 rebuttal). The work is deliberately built against the securitisation critique (Tebboth et al. 2026): evidence-graded, civilian and preventive in framing, transparent in method.',
    outcome: 'A first, correctable occupation of a genuine whitespace: the framing is government-endorsed and the science exists (IPBES Nexus 2024), but no open, computation-ready ontology and evidence base of nature-to-security cascades existed. The three government functions map to concrete methods: assess (a nature-security exposure profile binding open indicators to transmission channels), monitor (early-warning statistics including critical slowing down), and mitigate (typed intervention points per cascade, mapped to National Risk Register, IPBES and Kunming-Montreal levers).',
    reusable: 'The ontology, taxonomy, SHACL shapes and cascade evidence base transfer to any strategic-foresight, National Risk Register or early-warning use that must reason over nature-to-security risk; the driver-to-outcome structure re-points to any systemic-risk domain.',
  },
];
