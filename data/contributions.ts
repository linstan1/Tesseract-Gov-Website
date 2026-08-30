// Upstream contributions to standards bodies, public registers and the
// libraries that read them.
//
// This file exists instead of a logo wall. We are not a partner, member or
// licensee of IATA, the W3C, GLEIF, the EDM Council, the GSA or the USDA, and
// displaying their marks would say that we are. What we can show is the work:
// every row below is a public issue or pull request with a date, a thread and
// a maintainer on the other end of it.
//
// Rules for editing:
//   - one row per body, not per issue, so the page stays readable
//   - `finding` is what we found, in one sentence, in plain English
//   - `status` is the strongest thing that is true, never an aspiration
//   - every row carries at least one link to the public thread
//   - no claim about private correspondence, and no named individuals

export type ContributionStatus =
  | 'fixed'         // the body changed the thing itself after we reported it
  | 'merged'        // landed in the upstream repository
  | 'invited'       // the maintainers asked for the contribution
  | 'open'          // filed, thread live
  | 'reported';     // raised outside a public tracker

export interface ContributionRef {
  label: string;
  url: string;
}

export interface Contribution {
  /** The body that publishes the thing we checked. */
  body: string;
  /** What that body is, for a reader who does not already know. */
  context: string;
  /** What we found, in one sentence. */
  finding: string;
  status: ContributionStatus;
  refs: ContributionRef[];
}

export const STATUS_LABEL: Record<ContributionStatus, string> = {
  fixed: 'Fixed upstream',
  merged: 'Merged upstream',
  invited: 'Invited by maintainers',
  open: 'Open',
  reported: 'Reported',
};

export const CONTRIBUTIONS: Contribution[] = [
  {
    body: 'GBIF',
    context: 'the Global Biodiversity Information Facility',
    finding:
      'Both endpoints serving the ZooBank checklist returned 404 and five consecutive crawls had failed since 21 July, with nothing on the dataset page to say so. The registrar rebuilt the archive the day after the issue was filed. It now publishes 527,127 rows against the 478,746 names GBIF is still serving from March 2025, so 48,381 names are waiting on the next crawl.',
    status: 'fixed',
    refs: [
      { label: 'Feedback 6838', url: 'https://github.com/gbif/portal-feedback/issues/6838' },
      { label: 'Biodiversity register ontology', url: '/research/biodiversity-register-ontology' },
    ],
  },
  {
    body: 'Catalogue of Life',
    context: 'ChecklistBank, the infrastructure behind the annual checklist',
    finding:
      'Imports from the ZooBank source have been failing for three years, and the source page carries no staleness signal, so a reader has no way to tell that the copy is old. The rebuilt archive holds 127,801 more names than the copy ChecklistBank serves.',
    status: 'open',
    refs: [
      { label: 'ChecklistBank 1721', url: 'https://github.com/CatalogueOfLife/checklistbank/issues/1721' },
      { label: 'Biodiversity register ontology', url: '/research/biodiversity-register-ontology' },
    ],
  },
  {
    body: 'Defra Digital Waste Tracking',
    context: 'the receipt API for the mandatory waste tracking service',
    finding:
      'Six worked examples in the published specification are rejected by the specification\u2019s own schema. One of them drops the leading zero from a European Waste Catalogue code, which teaches an integrator to submit a code that is invalid and looks correct. Five reference vocabularies are bound only in prose, and nine cross-field rules appear nowhere in the schema.',
    status: 'open',
    refs: [
      { label: 'Issue 278', url: 'https://github.com/DEFRA/waste-tracking-service/issues/278' },
      { label: 'Issue 279', url: 'https://github.com/DEFRA/waste-tracking-service/issues/279' },
      { label: 'Issue 280', url: 'https://github.com/DEFRA/waste-tracking-service/issues/280' },
      { label: 'Our OpenAPI checker', url: 'https://github.com/fabio-rovai/oascheck' },
    ],
  },
  {
    body: 'HDR UK',
    context: 'the Gateway schemas for UK health dataset metadata',
    finding:
      'The DOI pattern leaves the dot unescaped in three schema versions, so 10X1234/abcd validates as a DOI. The linkage identifier slots are typed as free text, and all 59 live values are prose rather than identifiers. The daily dataset extract also stopped in June 2025 and serves 898 records against 1,707 on the live Gateway.',
    status: 'open',
    refs: [
      { label: 'Schemata 135', url: 'https://github.com/HDRUK/schemata/issues/135' },
      { label: 'Schemata 137', url: 'https://github.com/HDRUK/schemata/issues/137' },
      { label: 'Datasets 35', url: 'https://github.com/HDRUK/datasets/issues/35' },
      { label: 'UK health data linkage', url: '/research/uk-health-data-linkage' },
    ],
  },
  {
    body: 'openFDA',
    context: 'the US Food and Drug Administration public drug data service',
    finding:
      'The product National Drug Code appears under more than one Structured Product Label for 1,904 products, and in 1,151 of those the duplicate documents carry the same finished-product flag, so the code does not identify a single product.',
    status: 'open',
    refs: [
      { label: 'Issue 317', url: 'https://github.com/FDA/open.fda.gov/issues/317' },
      { label: 'Medicinal product registers', url: '/research/medicinal-product-registers' },
    ],
  },
  {
    body: 'Avoindata.fi',
    context: 'the Finnish national open data portal',
    finding:
      'The DCAT export publishes each dataset theme as a local group identifier instead of the EU data theme authority that DCAT-AP specifies, so an EU-level theme filter returns no Finnish datasets.',
    status: 'open',
    refs: [
      { label: 'Opendata 3296', url: 'https://github.com/vrk-kpa/opendata/issues/3296' },
    ],
  },
  {
    body: 'IATA ONE Record',
    context: 'the global data standard for air cargo',
    finding:
      'No property in the 2023-12 or 2024-12 data model ontology declares a domain, so nothing in the published standard says which class a property belongs to. The domain information that survives sits in comments, and in 14.3 per cent of cases it contradicts the class axioms beside it.',
    status: 'open',
    refs: [
      { label: 'Issue 433', url: 'https://github.com/IATA-Cargo/ONE-Record/issues/433' },
      { label: 'Issue 435', url: 'https://github.com/IATA-Cargo/ONE-Record/issues/435' },
      { label: 'Our domain extension', url: 'https://github.com/fabio-rovai/onerecord-domain-extension' },
    ],
  },
  {
    body: 'EDM Council FIBO',
    context: 'the Financial Industry Business Ontology',
    finding:
      'The legal entity module cites ISO 17442:2012, which has been withdrawn, and the Legal Entity Identifier carries no syntactic constraint, so FIBO cannot tell a valid LEI from a malformed one.',
    status: 'open',
    refs: [
      { label: 'Issue 2237', url: 'https://github.com/edmcouncil/fibo/issues/2237' },
      { label: 'Issue 2238', url: 'https://github.com/edmcouncil/fibo/issues/2238' },
    ],
  },
  {
    body: 'GLEIF',
    context: 'the Global Legal Entity Identifier Foundation',
    finding:
      'Draft SHACL shapes for Level 1 LEI records, including the ISO 7064 MOD 97-10 check-digit test written as SHACL-SPARQL so a validator can reject a malformed identifier without any code. Contributed after the maintainers asked for the checks on their own open issue.',
    status: 'invited',
    refs: [
      { label: 'Pull request 230', url: 'https://github.com/GLEIF-IT/lei-rdf/pull/230' },
      { label: 'Against issue 218', url: 'https://github.com/GLEIF-IT/lei-rdf/issues/218' },
      { label: 'ISO 17442 package', url: 'https://github.com/fabio-rovai/iso17442' },
    ],
  },
  {
    body: 'W3C',
    context: 'the JSON-LD syntax specification',
    finding:
      'Section 7.2 says escaped content stays escaped, while a major consumer applies one pass of unescaping. Filed with a conformance suite that reproduces the divergence rather than an opinion about it.',
    status: 'open',
    refs: [
      { label: 'Issue 498', url: 'https://github.com/w3c/json-ld-syntax/issues/498' },
      { label: 'Conformance suite', url: 'https://github.com/fabio-rovai/jsonld-escaping-conformance' },
    ],
  },
  {
    body: 'US General Services Administration',
    context: 'DCAT-US, the metadata standard for US federal open data',
    finding:
      'The namespace IRI that every DCAT-US document points at resolves to a host that does not exist, and the status of the SHACL shapes in version 3 is undocumented, so a publisher cannot tell what they are being validated against.',
    status: 'open',
    refs: [
      { label: 'Issue 163', url: 'https://github.com/GSA/dcat-us/issues/163' },
      { label: 'Issue 164', url: 'https://github.com/GSA/dcat-us/issues/164' },
      { label: 'Our DCAT-US binding', url: 'https://github.com/fabio-rovai/dcat-us-binding' },
    ],
  },
  {
    body: 'USDA National Agricultural Library',
    context: 'the NAL Agricultural Thesaurus',
    finding:
      'The SKOS labelling violations in the thesaurus are not spread across it. All 32 sit inside a single 887-concept subscheme and none in the other 75,800 concepts, which makes them one bad load rather than a thesaurus-wide fault. The published linked data has also not changed since July 2024.',
    status: 'reported',
    refs: [
      { label: 'Semantic Asset Register', url: '/research/semantic-asset-register' },
    ],
  },
  {
    body: 'Team Digitale Italia',
    context: 'the Italian national semantic assets repository',
    finding:
      'Concept-level SHACL rules for the territorial classification vocabularies, so the published controlled lists are checked at the concept and not only at the file.',
    status: 'open',
    refs: [
      { label: 'Pull request 317', url: 'https://github.com/italia/dati-semantic-assets/pull/317' },
      { label: 'Italy register ontology', url: '/research/italy-register-ontology' },
    ],
  },
  {
    body: 'OpenSanctions',
    context: 'the open database of sanctioned and politically exposed entities',
    finding:
      'The US Department of Defense Chinese military companies dataset was being read live from a Google Sheet. Moved into versioned CSV in the repository, so the source of a sanctions listing is auditable and cannot silently change.',
    status: 'open',
    refs: [
      { label: 'Pull request 5458', url: 'https://github.com/opensanctions/opensanctions/pull/5458' },
    ],
  },
  {
    body: 'python-stdnum and ewc-onto',
    context: 'the identifier and waste-code libraries the rest of the stack depends on',
    finding:
      'LEI validation upper-cases the input before checking it, so a malformed lower-case identifier passes. Separately, three European Waste Catalogue classes carry their English label tagged as German, leaving those classes with no English label at all, including mixed municipal waste.',
    status: 'open',
    refs: [
      { label: 'python-stdnum 509', url: 'https://github.com/arthurdejong/python-stdnum/issues/509' },
      { label: 'ewc-onto 1', url: 'https://github.com/kschmidt-at-dbfz/ewc-onto/issues/1' },
    ],
  },
  {
    body: 'ethereum-lists and DefiLlama',
    context: 'the registries most crypto tooling reads chain and token facts from',
    finding:
      'Checked the published entries against the chains themselves. Five token entries name an address with no contract behind it, one of them an active account holding a balance, three publish the wrong decimals, and twenty listed RPC endpoints answer with a chain ID other than the one they are filed under.',
    status: 'open',
    refs: [
      { label: 'chains 8635', url: 'https://github.com/ethereum-lists/chains/issues/8635' },
      { label: 'tokens 1047', url: 'https://github.com/ethereum-lists/tokens/issues/1047' },
      { label: 'tokens 1048', url: 'https://github.com/ethereum-lists/tokens/issues/1048' },
      { label: 'DefiLlama 20663', url: 'https://github.com/DefiLlama/DefiLlama-Adapters/issues/20663' },
    ],
  },
  {
    body: 'Semantica',
    context: 'a knowledge graph library with an RDF export path',
    finding:
      'Audited and then repaired the whole export path: seventeen issues filed and ten pull requests merged, covering deterministic identifier minting, a declared vocabulary, JSON-LD payloads that a plain parser can actually read, typed literals, timezone-qualified timestamps, and SHACL shapes that had never once matched the data they were written to validate.',
    status: 'merged',
    refs: [
      { label: 'Merged pull requests', url: 'https://github.com/semantica-agi/semantica/pulls?q=is%3Apr+author%3Afabio-rovai' },
    ],
  },
  {
    body: 'TrustGraph',
    context: 'an open knowledge graph platform',
    finding:
      'The N-Quads importer stringifies terms, so datatype, language tag and the distinction between an IRI and a literal are lost on the way in, and the exporter omits the backslash from its bad-character set, so IRIs containing one are written out invalid.',
    status: 'open',
    refs: [
      { label: 'Issue 1094', url: 'https://github.com/trustgraph-ai/trustgraph/issues/1094' },
      { label: 'Issue 1095', url: 'https://github.com/trustgraph-ai/trustgraph/issues/1095' },
    ],
  },
];
