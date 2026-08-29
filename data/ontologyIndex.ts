// Index of the published ontology work, used by /ontology and by the
// /services/ontology-engineering proof section. Each entry points at a study
// that already lives on this site, so nothing here is a claim without a page
// behind it. Keep `slug` in sync with the routes in App.tsx.

export interface OntologyAsset {
  /** Route on this site. */
  slug: string;
  /** Short display title. Not the SEO title; this reads inside a list. */
  title: string;
  /** One sentence a buyer can understand without opening the study. */
  note: string;
  /** Public repository, where the work ships code and RDF. */
  repo?: string;
}

export interface OntologyGroup {
  id: string;
  title: string;
  blurb: string;
  assets: OntologyAsset[];
}

export const ONTOLOGY_GROUPS: OntologyGroup[] = [
  {
    id: 'register-integrity',
    title: 'Register integrity ontologies',
    blurb:
      'Public registers are the identity layer that finance, government and science all join against. Each of these studies models one register in OWL 2, SKOS and SHACL, then measures where the published record contradicts itself.',
    assets: [
      {
        slug: '/research/register-assurance',
        title: 'Register assurance: why every public register fails at its boundary',
        note: 'The programme note that sets out the method the studies below all share.',
        repo: 'https://github.com/fabio-rovai/register-integrity-index',
      },
      {
        slug: '/research/uk-register-ontology',
        title: 'UK public registers: Companies House, the Charity Commission and the Global LEI System',
        note: 'What the UK register fabric can and cannot verify about a legal entity.',
        repo: 'https://github.com/fabio-rovai/uk-register-ontology',
      },
      {
        slug: '/research/italy-register-ontology',
        title: 'Italian public registers: IPA, ANAC, OpenCUP and ISTAT',
        note: '380 dead municipality codes published as current, delivered upstream as a SHACL package.',
        repo: 'https://github.com/fabio-rovai/italy-register-ontology',
      },
      {
        slug: '/research/bank-register-ontology',
        title: 'US bank registers: the FDIC, the Federal Reserve and the Global LEI System',
        note: 'Three registers of the same banks, and the identifiers that fail to join them.',
        repo: 'https://github.com/fabio-rovai/bank-register-ontology',
      },
      {
        slug: '/research/securities-register-ontology',
        title: 'US securities registers, and the missing CIK to LEI crosswalk',
        note: 'The crosswalk regulators assume exists, built and measured.',
        repo: 'https://github.com/fabio-rovai/securities-register-ontology',
      },
      {
        slug: '/research/insurance-register-ontology',
        title: 'Insurance and reinsurance: the EU register of 3,304 insurers',
        note: 'What EIOPA publishes about who is authorised, and where it is wrong.',
        repo: 'https://github.com/fabio-rovai/insurance-register-ontology',
      },
      {
        slug: '/research/investment-fund-ontology',
        title: 'The US fund register as a governance graph',
        note: 'The largest index fund in the world is missing from the open identifier map.',
        repo: 'https://github.com/fabio-rovai/investment-fund-ontology',
      },
      {
        slug: '/research/land-register-ontology',
        title: 'Land register integrity across all 33 Scottish registration counties',
        note: 'Registers of Scotland publishes an area field that is unpopulated on every parcel.',
        repo: 'https://github.com/fabio-rovai/scotland-land-register-ontology',
      },
      {
        slug: '/research/space-object-register-ontology',
        title: 'Space object catalogues: CelesTrak and the General Catalog of Artificial Space Objects',
        note: 'GCAT marks 22 entries as corresponding to no real object. CelesTrak carries all 22.',
        repo: 'https://github.com/fabio-rovai/space-object-register-ontology',
      },
      {
        slug: '/research/chain-control-ontology',
        title: 'On-chain control across 6,316 contracts on seven EVM chains',
        note: 'Control modelled as a dated assertion with an evidence class, never as a property of a contract.',
        repo: 'https://github.com/fabio-rovai/chain-control-ontology',
      },
      {
        slug: '/research/spectral-library-ontology',
        title: 'Mass spectrometry reference libraries: the register that publishes its own contradiction',
        note: 'GNPS derives structure twice per record, so its disagreement with itself is countable.',
        repo: 'https://github.com/fabio-rovai/spectral-library-ontology',
      },
      {
        slug: '/research/biosurveillance-register-ontology',
        title: 'One Health biosurveillance registers and the missing pathogen crosswalk',
        note: 'Human, animal and environmental pathogen registers that name the same organism differently.',
        repo: 'https://github.com/fabio-rovai/biosurveillance-ontology',
      },
      {
        slug: '/research/scholarly-record-ontology',
        title: 'Retraction registers: how far Crossref, PubMed and Retraction Watch disagree',
        note: 'Science has no Shepard’s citator, and the registers that stand in for one do not agree.',
        repo: 'https://github.com/fabio-rovai/scholarly-record-ontology',
      },
      {
        slug: '/research/learning-standards-ontology',
        title: 'American K-12 academic standards: 67,141 identifiers dereferenced, none resolve',
        note: 'An identifier scheme in national use where every URI is dead.',
        repo: 'https://github.com/fabio-rovai/learning-standards-ontology',
      },
      {
        slug: '/research/media-attention-ontology',
        title: 'The content registry television measurement runs on covers 1.84 per cent of television',
        note: 'What the audience measurement chain can actually identify.',
        repo: 'https://github.com/fabio-rovai/media-attention-ontology',
      },
      {
        slug: '/research/semantic-asset-register',
        title: 'US federal vocabularies: what 13 million triples reveal about their quality',
        note: 'A census of the vocabularies US federal agencies publish for reuse.',
        repo: 'https://github.com/fabio-rovai/semantic-asset-register',
      },
    ],
  },
  {
    id: 'crosswalks',
    title: 'Crosswalks and standards audits',
    blurb:
      'Interoperability projects usually assume a crosswalk between two standards exists and is lossless. These studies build the crosswalk and measure what it loses, which is often the thing the programme depended on.',
    assets: [
      {
        slug: '/research/ies-hqdm-defence-interoperability',
        title: 'IES to HQDM: an open 4D ontology crosswalk for defence data',
        note: 'The two UK defence 4D data standards, aligned and SHACL-validated.',
        repo: 'https://github.com/fabio-rovai/ies-hqdm-crosswalk',
      },
      {
        slug: '/research/pyramid-ies-hqdm-semantic-bridge',
        title: 'Grounding a PYRAMID avionics bridge in IES and HQDM',
        note: 'Def Stan 00-134 has no shared data model. This grounds three components in one referent.',
      },
      {
        slug: '/research/industrial-ontology-crosswalks',
        title: 'Why industrial data crosswalks fail, measured across seven standards',
        note: 'Seven industrial standards, and the information that dies between them.',
        repo: 'https://github.com/fabio-rovai/industrial-ontology-crosswalks',
      },
      {
        slug: '/research/construction-standards-crosswalks',
        title: 'Construction data standards cannot check your AI: IFC, COBie, Uniclass and BOT measured',
        note: 'Four construction standards tested for whether they can reject a wrong classification.',
        repo: 'https://github.com/fabio-rovai/construction-standards-crosswalks',
      },
      {
        slug: '/research/one-record-domain-axioms-korea',
        title: 'Ontology quality in air cargo standards, tested against IATA ONE Record',
        note: 'All 496 properties in the 2022-12 release declare a domain. None of the 534 in 2024-12 do.',
        repo: 'https://github.com/fabio-rovai/cargo-semantics',
      },
      {
        slug: '/research/one-record-domain-axioms-taiwan',
        title: 'Air and ocean freight standards, tested against IATA ONE Record and DCSA',
        note: 'The same audit with a DCSA ocean container contrast, in English and Traditional Chinese.',
        repo: 'https://github.com/fabio-rovai/cargo-semantics',
      },
      {
        slug: '/research/machinery-regulation-readiness-korea',
        title: 'Machinery data standards, tested against MTConnect and the Asset Administration Shell',
        note: 'Whether the machinery standards can carry what the EU Machinery Regulation asks for.',
        repo: 'https://github.com/fabio-rovai/machinery-semantics',
      },
      {
        slug: '/research/machinery-regulation-readiness-taiwan',
        title: 'Machine tool data standards, tested against MTConnect and the Asset Administration Shell',
        note: 'The machine tool variant, written for Taiwan’s sector.',
        repo: 'https://github.com/fabio-rovai/machinery-semantics',
      },
      {
        slug: '/research/skills-england-occupational-maps',
        title: 'The Skills England occupational maps as an ontology',
        note: '51,355 triples covering 1,269 standards, 15 routes, 35 pathways and a 278-code SOC 2020 crosswalk.',
      },
      {
        slug: '/research/skills-england-esco-crosswalk',
        title: 'Where England’s occupational standards meet Europe’s skills vocabulary',
        note: 'An open SKOS crosswalk from 1,269 Skills England standards to ESCO.',
      },
      {
        slug: '/research/waste-reporting-loss',
        title: 'What UK waste reporting throws away, measured in bits',
        note: 'Of 5.907 bits of composition detail, Simpler Recycling retains 38.4 per cent.',
        repo: 'https://github.com/fabio-rovai/waste-vocab-crosswalk',
      },
      {
        slug: '/research/wrap-food-loss-waste-taxonomy',
        title: 'Food loss and waste data taxonomy, commissioned by WRAP',
        note: 'A commissioned taxonomy, delivered and in use.',
      },
      {
        slug: '/research/space-metrics-crosswalk',
        title: 'Space debris metrics that cannot be added up',
        note: 'An open composition checker for metrics that look additive and are not.',
      },
    ],
  },
  {
    id: 'verification',
    title: 'Verification: proving an ontology is right',
    blurb:
      'An ontology that validates is not the same as an ontology that is correct. This is our research line on the gap, and it is why every engagement ships a check that can fail.',
    assets: [
      {
        slug: '/research/ontology-correctness-benchmark',
        title: 'The open-world hole: why SHACL cannot catch a hallucinated ontology term',
        note: 'Open-world SHACL passed all 300 data graphs carrying a fabricated term. A closed-world gate caught all 300.',
        repo: 'https://github.com/fabio-rovai/open-ontologies',
      },
      {
        slug: '/research/shacl-shapes-not-vocabulary',
        title: 'SHACL validates shapes, not vocabulary',
        note: 'The case for a closed-world companion to the standard RDF validator.',
      },
      {
        slug: '/research/semantic-integrity-detection-delta',
        title: 'Semantic-integrity defects evade static analysis and shape validation',
        note: 'A cross-library detection study of the defects no existing tool reports.',
      },
      {
        slug: '/research/foundry-grade-machine-ontologies',
        title: 'Foundry-grade guarantees for machine-authored ontologies',
        note: 'What has to hold before you let a model write your schema.',
        repo: 'https://github.com/fabio-rovai/open-ontologies',
      },
      {
        slug: '/research/symbol-existence-box',
        title: 'Where symbol-existence checking belongs in a neuro-symbolic pipeline',
        note: 'The missing box, and what goes wrong without it.',
      },
      {
        slug: '/research/certified-denotation',
        title: 'Beyond existence: certified denotation, the next gate',
        note: 'Checking a term exists is not checking it means what the sentence needs it to mean.',
      },
      {
        slug: '/research/verifiable-scientific-llm-benchmark',
        title: 'Fluency is saturated, correctness is not',
        note: 'Across nine models fluency sits at 1.00 while verified capability ranges from 0.00 to 1.00.',
      },
      {
        slug: '/research/verifying-extraction-pipeline-rdf',
        title: 'Checking the knowledge graph your pipeline just built',
        note: 'The practical version, for teams already running an extraction pipeline.',
      },
      {
        slug: '/research/machine-validated-open-ontologies',
        title: 'Publishing machine-validated open data structures for the public sector',
        note: 'The publication standard we hold our own releases to.',
      },
    ],
  },
  {
    id: 'llm-grounding',
    title: 'Grounding language models in an ontology',
    blurb:
      'The commercial reason ontologies came back is that agents and retrieval pipelines need something that can tell them they are wrong. These studies fine-tune and constrain models against a published vocabulary, and measure the result.',
    assets: [
      {
        slug: '/research/fine-tuning-llm-government-data-standard',
        title: 'Teaching an open-source LLM a government information standard',
        note: 'On IES4, term confabulation fell from 93.7 per cent to 1.0 per cent and conformance rose from 0 to 88.6 per cent.',
        repo: 'https://github.com/fabio-rovai/open-ontologies',
      },
      {
        slug: '/research/ies4-turtle-language-model',
        title: 'An open language model for IES4 data',
        note: 'The published checkpoint, on Hugging Face.',
        repo: 'https://github.com/fabio-rovai/open-ontologies',
      },
      {
        slug: '/research/biology-ontology-language-model',
        title: 'An open, conformant language model for biomedical knowledge graphs',
        note: 'The same method carried into the OBO Foundry vocabularies.',
        repo: 'https://github.com/fabio-rovai/open-ontologies',
      },
      {
        slug: '/research/ontology-grounded-biomedical-kg',
        title: 'Grounded, not retrieved: an ontology-validated biomedical knowledge graph',
        note: 'What changes when the graph is checked against the ontology instead of trusted.',
      },
      {
        slug: '/research/neurosymbolic-space-kg',
        title: 'Silence is not assent: what catches a wrong AI classification in orbit',
        note: '833,403 triples over 70,122 catalogued space objects, where 351 of 353 ontology classes can never reject anything.',
        repo: 'https://github.com/fabio-rovai/neurosymbolic-space-kg',
      },
      {
        slug: '/research/enterprise-knowledge-ontology',
        title: 'The Corpus Readiness Index: is your knowledge base fit to feed an AI?',
        note: 'The enterprise knowledge case, which is where most buyers first meet this problem.',
        repo: 'https://github.com/fabio-rovai/enterprise-knowledge-ontology',
      },
      {
        slug: '/research/modip-plastics-knowledge-graph',
        title: 'From raw museum records to a knowledge graph',
        note: 'A reproducible pipeline over the Museum of Design in Plastics catalogue of 11,865 objects.',
      },
      {
        slug: '/research/nature-governance-graph',
        title: 'The UK nature-governance landscape, as a graph you can cite',
        note: 'A provenance-first reference graph of UK nature and environment governance.',
      },
    ],
  },
  {
    id: 'catalogues',
    title: 'Metadata and catalogue conformance',
    blurb:
      'Data catalogues are ontologies people forget are ontologies. These studies measure real national and federal catalogues against the profiles they claim to follow.',
    assets: [
      {
        slug: '/research/nordic-health-data-catalogues',
        title: 'Nordic health dataset catalogues measured against HealthDCAT-AP Release 7',
        note: '2,811 Nordic health datasets, and not one conformant to the profile.',
        repo: 'https://github.com/fabio-rovai/health-dataset-catalogue-ontology',
      },
      {
        slug: '/research/open-data-catalog-assurance',
        title: 'Fifty-nine federal agencies are validated against the schema that exempts them',
        note: 'What US federal open data validation actually checks.',
        repo: 'https://github.com/fabio-rovai/open-data-catalog-ontology',
      },
      {
        slug: '/research/dkan-portal-census',
        title: 'We probed every .gov domain for DKAN and found three portals',
        note: 'All three publish the same wrong identity.',
        repo: 'https://github.com/fabio-rovai/dkan-portal-profile',
      },
      {
        slug: '/research/fair-scientific-data',
        title: 'FAIR dataset contracts for scientific data',
        note: '1,738 biomedical datasets: findable and accessible, zero per cent interoperable.',
        repo: 'https://github.com/fabio-rovai/fair-scientific-data',
      },
      {
        slug: '/research/nature-related-security-risk',
        title: 'Nature-related security risk: an open evidence base and systems ontology',
        note: 'An OWL ontology and SKOS taxonomy cross-walked to IPBES, published under CC-BY-4.0.',
      },
    ],
  },
];

export const ONTOLOGY_ASSET_COUNT = ONTOLOGY_GROUPS.reduce(
  (total, group) => total + group.assets.length,
  0,
);

export const ONTOLOGY_REPO_COUNT = new Set(
  ONTOLOGY_GROUPS.flatMap(group => group.assets.map(a => a.repo).filter(Boolean)),
).size;
