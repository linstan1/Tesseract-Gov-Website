// Industry sectors. Each sector page is a buyer-facing entry point into the
// delivered work and the open research that already sits under /research.
// Research routes and titles are derived from the /research corpus.

export interface IndustryLink {
  route: string;
  title: string;
}

export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  lede: string;
  body: string;
  delivered: string[];
  research: IndustryLink[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'government-public-services',
    name: 'Government and public services',
    metaTitle: 'Government and Public Services | Tesseract Academy for the Public Sector',
    metaDesc: 'Delivered for the Welsh Government, the National Digital Twin Programme, Qualifications Wales and Imperial War Museums. Appointed on five Crown Commercial Service frameworks. Open research on public registers, consultations and government evaluation.',
    lede: 'The Welsh Government commissioned us to test five land valuation methods across 1,916 LSOAs, covering 99 per cent of Welsh geography. The report was published on GOV.WALES in March 2026.',
    body: 'Public sector work reaches us when a register, a standard or an evaluation has to survive scrutiny. That means figures that reconcile, methods a reviewer can re-run without asking us for anything, and findings that report the dissenting view instead of a tidied consensus. A public body can commission us through RM6200, RM6094, RM6126, RM6219 or RM6235, or by direct award below the Procurement Act 2023 threshold.',
    delivered: [
      'Welsh Government. Five land valuation methods tested across 1,916 LSOAs, published on GOV.WALES in March 2026.',
      'National Digital Twin Programme and the Department for Business and Trade. An open-source AI ontology extension tool, released under Apache License 2.0 in 2025.',
      'Qualifications Wales. Subject expert services for monitoring reformed national qualifications, 2026 to 2029.',
      'Imperial War Museums. One of three suppliers appointed to the Digital Transformation Support Framework, Lot 1 Data Consultancy, from June 2026.',
      'Durham County Council. Appointed to the Business Durham select list of business support specialists, 2026 to 2028.',
      'A UK government agency, anonymised at their request. All KPIs delivered in half the contract time and within 75 per cent of budget.',
    ],
    research: [
      { route: '/research/welsh-government-land-valuation', title: 'Welsh Government Land Valuation Research' },
      { route: '/research/national-digital-twin-programme', title: 'AI Ontology Extension Generator' },
      { route: '/research/computation-ready-aerial-heritage', title: 'Computation-Ready Aerial Photography Heritage' },
      { route: '/research/italy-register-ontology', title: 'An open ontology for Italian public registers, tested against IPA, ANAC, OpenCUP and ISTAT' },
      { route: '/research/uk-register-ontology', title: 'An open ontology for UK public registers, tested against Companies House, the Charity Commission and the Global LEI System' },
      { route: '/research/semantic-asset-register', title: 'What 13 Million Triples Reveal About the Quality of US Federal Vocabularies' },
      { route: '/research/register-assurance', title: 'Register assurance: why every public register fails at its boundary' },
      { route: '/research/property-market-indicators', title: 'What a year of transactions says about every local housing market' },
      { route: '/research/modip-plastics-knowledge-graph', title: 'From raw museum records to a knowledge graph' },
      { route: '/research/evaluation-evidence-atlas', title: 'What government evaluates, and how openly it says so' },
      { route: '/research/consultation-corpus', title: 'Every government consultation that reached an outcome, as one corpus' },
      { route: '/research/algorithmic-transparency-corpus', title: 'The closest thing to a public register of government AI, as a corpus' },
      { route: '/research/victim-witness-evaluation', title: 'When a Theory of Change has to hold up: machine-checkable evaluation logic' },
      { route: '/research/museum-visits-observatory', title: 'The DCMS Museum Visits Observatory' },
      { route: '/research/fine-tuning-llm-government-data-standard', title: 'Teaching an open-source LLM a government information standard: from 94% hallucination to 1%' },
      { route: '/research/machine-validated-open-ontologies', title: 'Publishing machine-validated open data structures for the public sector' },
    ],
  },
  {
    slug: 'financial-services-insurance',
    name: 'Financial services and insurance',
    metaTitle: 'Financial Services and Insurance | Tesseract Academy for the Public Sector',
    metaDesc: 'Open ontologies and register-integrity research tested against the FDIC, the Federal Reserve, EIOPA, EDGAR and the Global LEI System. Selected for the IOSCO TechSprint 2026. Financial vulnerability research with Kalgera and Fintech Scotland.',
    lede: 'Every one of the 2,252 LEI values in the FDIC\'s BankFind register is truncated to 16 characters, which throws away the ISO 7064 check digits and two characters that identify the entity. We found that by measuring all of them, not by sampling.',
    body: 'Reference data in this sector fails quietly at the boundary between one register and the next, and the failure only shows up when something has to reconcile. We build the identifier fabric, run the validation, and hand back a graded report that separates what is impossible from what is merely missing, with the queries attached so your own team can re-run it.',
    delivered: [
      'Kalgera and Fintech Scotland. Research on identifying financial vulnerability.',
      'Financial Conduct Authority. Represented the British Blockchain Association at an FCA roundtable on stablecoin regulation.',
      'IOSCO TechSprint 2026. Selected cohort participant with Aegis, on AI-enabled investment fraud. Demo Day at the IOSCO C8 Plenary in Madrid on 8 October 2026.',
      '2nd Future Payments Innovation Challenge. Finalist with the Edinburgh Protocol, pitched in Edinburgh in May 2026.',
    ],
    research: [
      { route: '/research/kalgera-financial-vulnerability', title: 'Financial Vulnerability Research' },
      { route: '/research/investment-fund-ontology', title: 'The largest index fund is missing from the open identifier map: the US fund register as a governance graph' },
      { route: '/research/insurance-register-ontology', title: 'An open ontology for insurance and reinsurance: what the EU register says about 3,304 insurers, and what it gets wrong' },
      { route: '/research/bank-register-ontology', title: 'An open ontology for US bank registers, tested against the FDIC, the Federal Reserve, and the Global LEI System' },
      { route: '/research/securities-register-ontology', title: 'The missing CIK-to-LEI crosswalk: an open ontology for US securities entity registers' },
      { route: '/research/financial-answer-verification', title: 'Provenance beats plausibility: catching wrong financial answers without a gold key' },
      { route: '/research/parametric-payout-assurance', title: 'Can a parametric climate insurance product prove it paid?' },
      { route: '/research/ixbrl-disclosure-benchmark', title: 'How machine-readable are UK company accounts, really?' },
      { route: '/research/xbrl-pdf-html-ai-benchmark', title: 'Does structured data actually help AI read company accounts? A controlled pilot' },
      { route: '/research/fca-warnings-observatory', title: 'A live list with no memory: reconstructing the FCA scam-warning signal' },
    ],
  },
  {
    slug: 'defence-security-space',
    name: 'Defence, security and space',
    metaTitle: 'Defence, Security and Space | Tesseract Academy for the Public Sector',
    metaDesc: 'Open 4D ontology crosswalks between IES and HQDM, a PYRAMID avionics semantic bridge, and space debris metric composition checking. DV-cleared consultant available. Appointed on RM6235 Space-Enabled and Geospatial Services DPS.',
    lede: 'IES and HQDM are both 4D ontologies that UK defence data has to move between, and the move is not a rename. We published an open crosswalk that shows where the two disagree and what breaks when the disagreement is ignored.',
    body: 'Work in this sector is published openly wherever classification allows, so you can check the method before you talk to us. A DV-cleared Principal Consultant is available for classified programmes, and we are an appointed supplier on RM6235, the Space-Enabled and Geospatial Services DPS.',
    delivered: [
    ],
    research: [
      { route: '/research/ies-hqdm-defence-interoperability', title: 'IES to HQDM: an open 4D ontology crosswalk for defence data' },
      { route: '/research/space-metrics-crosswalk', title: 'Space debris metrics that cannot be added up: an open composition checker' },
      { route: '/research/neurosymbolic-space-kg', title: 'Silence is not assent: what catches a wrong AI classification in orbit' },
      { route: '/research/pyramid-ies-hqdm-semantic-bridge', title: 'Grounding a PYRAMID avionics bridge in IES and HQDM' },
      { route: '/research/connective-product-cyber-incidents', title: 'Cyber Incidents affecting Connective Products: an open evidence base' },
      { route: '/research/nature-related-security-risk', title: 'Nature-Related Security Risk: an open evidence base and systems ontology' },
    ],
  },
  {
    slug: 'industry-manufacturing-supply-chain',
    name: 'Industry, manufacturing and supply chain',
    metaTitle: 'Industry, Manufacturing and Supply Chain | Tesseract Academy for the Public Sector',
    metaDesc: 'Measured ontology and schema quality defects in IATA ONE Record, machinery and machine tool data standards, IFC, COBie, Uniclass and BOT. Findings verified with two independent reasoners.',
    lede: 'IATA\'s ONE Record dropped rdfs:domain from all 522 of its properties in the December 2023 release, and the December 2024 release has not put it back. Two independent reasoners agree.',
    body: 'Industrial data standards are usually assumed to be correct because they are published by a standards body. We test that assumption against the files themselves and report what an engine actually does with them. None of the work in this sector was commissioned, which means you can read the findings and reproduce them before any conversation about money.',
    delivered: [
    ],
    research: [
      { route: '/research/one-record-domain-axioms-korea', title: 'An overview of ontology quality issues in air cargo data standards, tested against IATA ONE Record' },
      { route: '/research/one-record-domain-axioms-taiwan', title: 'An overview of ontology quality issues in air and ocean freight data standards, tested against IATA ONE Record and DCSA' },
      { route: '/research/machinery-regulation-readiness-korea', title: 'An overview of ontology and schema quality issues in machinery data standards, tested against MTConnect and the Asset Administration Shell' },
      { route: '/research/machinery-regulation-readiness-taiwan', title: 'An overview of ontology and schema quality issues in machine tool data standards, tested against MTConnect and the Asset Administration Shell' },
      { route: '/research/construction-standards-crosswalks', title: 'Construction data standards cannot check your AI: IFC, COBie, Uniclass and BOT measured' },
      { route: '/research/industrial-ontology-crosswalks', title: 'Why industrial data crosswalks fail, measured across seven standards' },
    ],
  },
  {
    slug: 'health-life-sciences',
    name: 'Health and life sciences',
    metaTitle: 'Health and Life Sciences | Tesseract Academy for the Public Sector',
    metaDesc: 'Ontology-validated biomedical knowledge graphs, an open conformant biomedical language model, FAIR dataset contracts, and a joint privacy and fairness report card measured on the UCI Diabetes readmission dataset.',
    lede: 'On the UCI Diabetes readmission dataset, differential privacy at its tightest setting costs minority subgroups 2.6 times more accuracy than the majority, while the membership leakage it was applied to prevent is already close to zero.',
    body: 'Privacy and fairness are usually audited by separate teams on separate timetables, which is how a trade-off between them stays invisible. We put both on one report card for the same model. The same discipline applies to the data underneath, where an ontology decides whether a knowledge graph can be trusted to answer a question it was not built for.',
    delivered: [
    ],
    research: [
      { route: '/research/fair-scientific-data', title: 'FAIR Dataset Contracts for Scientific Data' },
      { route: '/research/ontology-grounded-biomedical-kg', title: 'Grounded, not retrieved: an ontology-validated biomedical knowledge graph' },
      { route: '/research/verifiable-scientific-llm-benchmark', title: 'Fluency is saturated, correctness is not: an un-game-able scientific-LLM benchmark' },
      { route: '/research/health-ai-privacy-fairness-assurance', title: 'One report card for privacy and fairness: the disparate impact of differential privacy' },
      { route: '/research/biology-ontology-language-model', title: 'An open, conformant language model for biomedical knowledge graphs' },
      { route: '/research/small-area-health-profile', title: 'The baseline a local health survey should be read against' },
    ],
  },
  {
    slug: 'energy-environment-climate',
    name: 'Energy, environment and climate',
    metaTitle: 'Energy, Environment and Climate | Tesseract Academy for the Public Sector',
    metaDesc: 'Commissioned by WRAP to build a digital Food Loss and Waste data taxonomy for its Food Programme and the global Food Pact Network. Open research on UK waste reporting, wastewater effluent data quality and the UK nature-governance landscape.',
    lede: 'WRAP commissioned us to build a digital Food Loss and Waste data taxonomy for its Food Programme and the global Food Pact Network, under contract PRC228.',
    body: 'Environmental reporting loses detail every time a figure moves up a chain, and by the time it reaches the return that detail is gone for good. We measure how much is lost and where, then build the vocabulary that stops it happening again.',
    delivered: [
      'WRAP. A digital Food Loss and Waste data taxonomy for the Food Programme and the global Food Pact Network, contract PRC228, 2026.',
    ],
    research: [
      { route: '/research/wastewater-effluent-data-quality', title: 'Wastewater Effluent Data Quality' },
      { route: '/research/zero-emission-flight-ecosystem', title: 'Mapping the UK Zero-Emission Flight Ecosystem' },
      { route: '/research/wrap-food-loss-waste-taxonomy', title: 'WRAP Food Loss and Waste Data Taxonomy' },
      { route: '/research/waste-reporting-loss', title: 'Half the detail dies on the way to the return: what UK waste reporting throws away' },
      { route: '/research/agri-environment-heritage-value', title: 'The Value of Agri-Environment Heritage Actions' },
      { route: '/research/nature-governance-graph', title: 'The UK nature-governance landscape, as a graph you can cite' },
    ],
  },
  {
    slug: 'education-skills',
    name: 'Education and skills',
    metaTitle: 'Education and Skills | Tesseract Academy for the Public Sector',
    metaDesc: 'Innovate UK BridgeAI creative industries AI training, 1,100 registrations against a 200 capacity target, rated 4.6 out of 5. Cited by Skills England alongside The Alan Turing Institute. Training provider on the UK Government AI Skills Hub.',
    lede: 'Innovate UK\'s BridgeAI programme asked for 200 places on our creative-industries AI training. We took 1,100 registrations, and the training was rated 4.6 out of 5.',
    body: 'Training only counts if the people in the room can do something afterwards that they could not do before, which is why we measure attendance against capacity and satisfaction against the cohort rather than against a target we set ourselves. Skills England has cited our work alongside The Alan Turing Institute, and we are a training provider on the UK Government AI Skills Hub.',
    delivered: [
      'Innovate UK BridgeAI. AI training and support for creative industries professionals under contract GSS24646.',
      'Qualifications Wales. Subject expert services for monitoring reformed national qualifications, 2026 to 2029.',
    ],
    research: [
      { route: '/research/bridgeai-creative-industries', title: 'BridgeAI: AI Adoption for UK Creative Industries' },
      { route: '/research/learning-standards-ontology', title: 'Every identifier in American K-12 academic standards is dead: 67,141 dereferenced, none resolve' },
      { route: '/research/skills-england-occupational-maps', title: 'The Skills England Occupational Maps as an Ontology' },
      { route: '/research/skills-england-esco-crosswalk', title: 'Where England\'s occupational standards meet Europe\'s skills vocabulary' },
      { route: '/research/local-labour-market', title: 'The most timely local labour-market signal, tidied for every authority' },
    ],
  },
];

export const INDUSTRY_BY_SLUG: Record<string, Industry> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, i]),
);
