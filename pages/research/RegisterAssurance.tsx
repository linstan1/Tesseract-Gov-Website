import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const RII_REPO = 'https://github.com/fabio-rovai/register-integrity-index';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/register-assurance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/register-assurance',
  headline:
    'Register assurance: why every public register fails at its boundary | Tesseract Academy',
  description:
    'Public registers increasingly assure their own records: GLEIF runs a monthly data-quality programme scoring 99.99 across 3.39 million LEI records. But assurance stops at the register boundary. Nothing checks conformance when one register embeds another register’s identifiers, nothing verifies that embedded identifiers still resolve, and nothing reconciles what two registers claim about the same entity. Measured across six domains from the same open method: all 2,252 LEIs in the FDIC register are truncated and invalid, 19.5 per cent of active EEA insurers carry no LEI and four carry impossible ones, the largest index fund is missing from the open identifier map, the registers of scientific retraction agree on 72.42 per cent, all 67,141 dereferenced US academic-standards identifiers return 404, and zero of 300 sampled GOV.UK documents carry any maintenance commitment. Four recurring boundary defect classes, six open ontologies, and the Register Integrity Index.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Register Integrity Index',
    url: RII_REPO,
  },
  keywords:
    'register assurance, public register data quality, LEI validation, GLEIF data quality, cross-register reconciliation, identifier resolution, register boundary, FDIC LEI, EIOPA register, retraction registers, ASN identifiers, GOV.UK metadata, register integrity index, OWL ontology registers, SHACL register validation, entity resolution, identifier governance',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/register-assurance#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is register assurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Register assurance is the discipline of verifying public registers at their boundaries rather than only inside them. Registers increasingly assure their own records: GLEIF, the best example, runs a monthly data-quality programme over the Global LEI System. What no register operator currently does is check conformance where registers meet: whether the identifiers a register embeds from another scheme are structurally valid, whether they still resolve, whether two registers agree about the same entity, and whether the register declares who maintains each record and when it was last verified. Register assurance names that gap, defines the four defect classes found at the boundary, and provides an open instrument for measuring them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which public registers publish invalid identifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Measured with the same open method in 2026: the FDIC BankFind register publishes 2,252 LEI values and every one is truncated to 16 of the required 20 characters, so none is valid under ISO 17442. The EIOPA Register of Insurance Undertakings carries four LEI values that fail the ISO 7064 check digits and so cannot exist, and the German BaFin register carries five more, three of them 19 characters long. SEC Form N-CEN filings carry 19 LEIs that fail the same arithmetic. In education, all 67,141 dereferenced Achievement Standards Network identifiers, the identifier layer of US K-12 academic standards, return HTTP 404. Each measurement is reproducible from public data via the linked repositories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GLEIF check the quality of LEI data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it does so well. GLEIF publishes monthly data-quality reports over the Global LEI System, and its July 2026 report gives an average Total Data Quality Score of 99.99 across 3,390,204 records. Checked in full rather than sampled, all 9,119,948 pairs in GLEIF’s open ISIN-to-LEI mapping file pass check-digit validation with zero failures. The limitation is scope, not rigour: GLEIF’s conformance checks apply to what LEI issuers submit into the system. Nothing in the Global LEI System constrains what a downstream register, such as a national banking or insurance regulator, publishes back out, which is exactly where the defects measured across this programme sit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the four boundary defect classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, embedded-scheme non-conformance: a register publishes values under another scheme that violate that scheme’s own rules, such as the FDIC’s 2,252 truncated LEIs or EIOPA’s four arithmetically impossible ones. Second, resolution failure: an embedded identifier refers to nothing, such as the 67,141 dead ASN identifiers or the 16 FDIC values matching no LEI on earth. Third, cross-register disagreement: two registers make incompatible claims about the same entity, such as Crossref and Retraction Watch agreeing on only 72.42 per cent of retracted DOIs, or 42 EEA insurers shown as authorised while GLEIF marks the entity inactive. Fourth, missing governance metadata: the register declares no owner, review cadence or verification date for its records, such as zero of 300 sampled GOV.UK documents carrying any maintenance-commitment field.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Register Integrity Index?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Register Integrity Index is the instrument that generalises these six studies: an open, reproducible scoring framework that measures any public register against the four boundary defect classes, embedded-scheme conformance, resolution, cross-register agreement, and governance metadata, and returns graded findings rather than adjectives. It is being stood up at github.com/fabio-rovai/register-integrity-index, building on the ontologies, SHACL suites and pipelines already published for the banking, insurance, fund, scholarly, learning-standards and enterprise-knowledge domains.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is register assurance different from ordinary data quality management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data quality management operates inside one system’s boundary: completeness, validity and consistency of the records that system owns. Register assurance operates at the seams between systems, where no single operator has authority and therefore nobody measures. The defects it finds are invisible to each register’s own quality programme: the FDIC truncation survived indefinitely because every value still looked like an identifier, GLEIF scores 99.99 because its checks correctly stop at what issuers submit, and both are right by their own scope. The practical differences are that identifiers are treated as assertions to be validated rather than as attributes to be trusted, that disagreement between sources is recorded as data rather than silently resolved, and that the checks are shipped as executable SHACL rather than as a procedures manual.',
      },
    },
  ],
};

const DEFECT_CLASSES = [
  {
    name: '1. Embedded-scheme non-conformance',
    def: 'A register publishes values under another register’s scheme that violate that scheme’s own structural rules, and no check on either side notices.',
    ev: 'All 2,252 FDIC LEIs truncated to 16 characters. Four EIOPA LEI values that fail the ISO 7064 check digits, one of them twenty zeros. 19 SEC N-CEN LEIs failing the same arithmetic. Five BaFin values, three of them 19 characters.',
  },
  {
    name: '2. Resolution failure',
    def: 'An embedded identifier refers to nothing: the register still carries it, the target scheme no longer answers for it, and every consumer stores a dead pointer.',
    ev: 'All 67,141 dereferenced ASN standards identifiers return HTTP 404 while their describing vocabulary still returns 200. 16 FDIC values compatible with no LEI on earth. The Vanguard 500 Index Fund absent from GLEIF’s open ISIN-to-LEI map.',
  },
  {
    name: '3. Cross-register disagreement',
    def: 'Two registers make incompatible claims about the same entity or work, and no system reconciles them, so downstream consumers inherit whichever register they happened to read.',
    ev: 'Crossref and Retraction Watch, both published by Crossref, agree on 72.42 per cent of retracted DOIs. 42 EEA insurers authorised in EIOPA while GLEIF marks the entity inactive. Associated Bank carrying its parent holding company’s LEI, proven wrong by GLEIF’s own consolidation records.',
  },
  {
    name: '4. Missing governance metadata',
    def: 'The register carries no machine-readable statement of who maintains a record, on what cadence, or when it was last verified, so staleness is undetectable by construction.',
    ev: 'Zero of 300 sampled GOV.UK documents, across 133 distinct schema keys, carry any maintenance-commitment field. 27,445 of 47,305 MDRM item codes carry no definition at all. 643 of 3,304 active EEA insurers carry no LEI, twelve years after guidelines asked for one.',
  },
];

const EVIDENCE = [
  {
    domain: 'Banking, United States',
    headline: 'The FDIC publishes 2,252 LEIs and not one is a valid LEI',
    detail:
      'Every LEI value in the FDIC BankFind register is truncated to 16 of the 20 characters ISO 17442 requires, discarding both check digits. Measured against the complete GLEIF golden copy of 3,403,760 records, 16 characters puts 6.37 per cent of the global LEI population into a collision, nine FDIC values are ambiguous across up to six unrelated companies, and two resolve to the wrong legal entity, including Associated Bank carrying the LEI of its parent holding company.',
    route: '/research/bank-register-ontology',
    repo: 'https://github.com/fabio-rovai/bank-register-ontology',
    repoName: 'bank-register-ontology',
  },
  {
    domain: 'Insurance, European Union',
    headline: '643 of 3,304 active EEA insurers carry no LEI, and four carry impossible ones',
    detail:
      'The EIOPA Register of Insurance Undertakings, joined to a same-day GLEIF harvest and cross-checked against the German national register: 19.5 per cent of active insurers have no global identifier, four filed values fail the check-digit arithmetic, 42 name entities GLEIF says no longer exist, one identifier is shared by two distinct SCOR reinsurance companies, and 283 cross-border passports outlive the authorisation they depend on. Where both registers populate the field they agree perfectly, so the problem is coverage, not contradiction.',
    route: '/research/insurance-register-ontology',
    repo: 'https://github.com/fabio-rovai/insurance-register-ontology',
    repoName: 'insurance-register-ontology',
  },
  {
    domain: 'Investment funds, United States',
    headline: 'GLEIF is checksum-clean across 9.1 million pairs; the register boundary is not',
    detail:
      'All 9,119,948 pairs in GLEIF’s open ISIN-to-LEI file pass check-digit validation with zero failures, while hand-keyed SEC N-CEN filings carry 19 LEIs that fail the same arithmetic. Only 12.3 per cent of self-reported ETF fund LEIs have any ISIN in the open mapping, and the Vanguard 500 Index Fund, the largest index fund, is among the missing: it holds a valid ISIN in commercial data that the open file simply does not carry.',
    route: '/research/investment-fund-ontology',
    repo: 'https://github.com/fabio-rovai/investment-fund-ontology',
    repoName: 'investment-fund-ontology',
  },
  {
    domain: 'Scholarly record',
    headline: 'The registers of retraction agree on 72.42 per cent, and both are published by one organisation',
    detail:
      'Crossref and the Retraction Watch database, both published by Crossref since its 2023 acquisition, agree on only 72.42 per cent of the retracted DOIs between them. OpenAlex flags 94.5 per cent of retraction notices as retracted research, a category error confirmed independently against Europe PMC. Only 19.24 per cent of a 137,243 DOI union is agreed by all four registers measured.',
    route: '/research/scholarly-record-ontology',
    repo: 'https://github.com/fabio-rovai/scholarly-record-ontology',
    repoName: 'scholarly-record-ontology',
  },
  {
    domain: 'Academic standards, United States',
    headline: '67,141 identifiers dereferenced, every single one returns 404',
    detail:
      'The Achievement Standards Network was the identifier layer for US K-12 academic standards, embedded in learning-resource metadata across the open education web. Three censuses, two of them complete: every one of 67,141 dereferenced identifiers returns HTTP 404, while the vocabulary describing them still returns 200 from a static object store, so a liveness check on the scheme gets a reassuring and false answer. The successor bodies’ own example packages still ship the dead references.',
    route: '/research/learning-standards-ontology',
    repo: 'https://github.com/fabio-rovai/learning-standards-ontology',
    repoName: 'learning-standards-ontology',
  },
  {
    domain: 'Enterprise knowledge, United Kingdom',
    headline: 'Zero of 300 sampled documents carry any maintenance commitment',
    detail:
      'Across 54,222 GOV.UK guidance documents, a random sample of 300 fetched in full exposes 133 distinct schema keys, and not one field expresses who maintains the content, on what cadence, or when it was last verified. The public sitemap advertises roughly 55,000 withdrawn pages that search correctly excludes but that still serve body text, so a retrieval pipeline that crawls ingests exactly what the curated index was careful to exclude.',
    route: '/research/enterprise-knowledge-ontology',
    repo: 'https://github.com/fabio-rovai/enterprise-knowledge-ontology',
    repoName: 'enterprise-knowledge-ontology',
  },
];

const FAMILY = [
  {
    name: 'Bank Register Ontology (BRO)',
    ns: 'https://gov.tesseract.academy/def/banking#',
    schemes: 'https://gov.tesseract.academy/def/banking/scheme#',
    line: 'The entity fabric and regulatory-reporting concept fabric of US banking: FDIC BankFind, the GLEIF golden copy and the Federal Reserve MDRM, with identifiers as reified, validated assertions.',
    repo: 'https://github.com/fabio-rovai/bank-register-ontology',
  },
  {
    name: 'Securities Entity Register Ontology (SERO)',
    ns: 'https://gov.tesseract.academy/def/securities#',
    schemes: 'https://gov.tesseract.academy/def/securities/scheme#',
    line: 'The US securities entity fabric: the EDGAR entity register, the GLEIF golden copy, the N-PORT and N-CEN structured datasets and the ISIN-LEI mapping, with coverage and reconciliation observations as first-class nodes.',
    repo: 'https://github.com/fabio-rovai/securities-register-ontology',
  },
  {
    name: 'Italian Public Register Ontology',
    ns: 'https://gov.tesseract.academy/def/italy#',
    schemes: 'https://gov.tesseract.academy/def/italy/scheme#',
    line: 'The Italian public register fabric: IPA, ANAC contracts, OpenCUP projects, the ISTAT register of administrative units and the national semantic vocabulary, with vocabulary currency, pair reconciliation and CIG-to-CUP linkage as typed failure modes, and the fix contributed upstream as SHACL.',
    repo: 'https://github.com/fabio-rovai/italy-register-ontology',
  },
  {
    name: 'UK Public Register Ontology (UKRO)',
    ns: 'https://gov.tesseract.academy/def/uk#',
    schemes: 'https://gov.tesseract.academy/def/uk/scheme#',
    line: 'The UK entity fabric: the Companies House bulk and PSC products, the Charity Commission register and the GLEIF golden copy, with placeholders, cross-scheme values, dangling company numbers and name disagreements as typed failure modes.',
    repo: 'https://github.com/fabio-rovai/uk-register-ontology',
  },
  {
    name: 'Insurance Register Ontology (IRO)',
    ns: 'https://gov.tesseract.academy/def/insurance#',
    schemes: 'https://gov.tesseract.academy/def/insurance/scheme#',
    line: 'Insurance and reinsurance undertakings, their authorisations, cross-border passports and identifier fabric, instantiated against the EIOPA register joined with GLEIF.',
    repo: 'https://github.com/fabio-rovai/insurance-register-ontology',
  },
  {
    name: 'Enterprise Knowledge Ontology (EKO)',
    ns: 'https://gov.tesseract.academy/def/knowledge#',
    schemes: 'https://gov.tesseract.academy/def/knowledge/scheme#',
    line: 'The distinction between a working document and a maintained knowledge asset, with the SHACL publish gate and the Corpus Readiness Index that make it testable.',
    repo: 'https://github.com/fabio-rovai/enterprise-knowledge-ontology',
  },
  {
    name: 'Investment Fund Ontology (IFO)',
    ns: 'https://gov.tesseract.academy/def/fund#',
    schemes: 'https://gov.tesseract.academy/def/fund/scheme#',
    line: 'The registered fund product hierarchy, registrant to fund to share class to listing, with a twenty-scheme identifier registry, instantiated against the full public US fund universe.',
    repo: 'https://github.com/fabio-rovai/investment-fund-ontology',
  },
  {
    name: 'Scholarly Record Ontology (SRO)',
    ns: 'https://ontology.tesseract.academy/sro/',
    schemes: null,
    line: 'The integrity status of scholarly works, retractions, corrections and expressions of concern, as claims made by named registers that can and do disagree.',
    repo: 'https://github.com/fabio-rovai/scholarly-record-ontology',
  },
  {
    name: 'Learning Standards Ontology (LSO)',
    ns: 'https://learning.tesseract.academy/lso#',
    schemes: 'https://learning.tesseract.academy/lso/scheme/',
    line: 'Academic standards, the identifiers that name them and the alignment claims made about them, built against 1.93 million standard statements and the census of the dead ASN identifier layer.',
    repo: 'https://github.com/fabio-rovai/learning-standards-ontology',
  },
];

export const RegisterAssurance: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Research programme, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Register assurance: why every public register fails at its boundary
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Public registers are the reference layer of the modern economy: who is a bank, who may write insurance, which paper stands retracted, which standard a curriculum aligns to, which guidance is current. The operators of the best registers now assure their own records seriously, and GLEIF is the standing proof that it can be done. But assurance stops at the register boundary. Nothing checks conformance when one register embeds another register&apos;s identifiers, nothing verifies that the embedded identifiers still resolve, and nothing reconciles what two registers claim about the same entity. We measured that boundary with one open method across six domains, and it fails in the same four ways every time. This page names the discipline, states the four defect classes, presents the evidence, and announces the instrument.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The thesis: assurance stops at the boundary</h2>
      <p className="text-gov-dark leading-relaxed">
        Start with the positive example, because it defines the standard. GLEIF, the Global Legal Entity Identifier Foundation, runs a genuine data-quality programme over the Global LEI System: monthly public reports, defined quality criteria, per-issuer scoring. Its July 2026 report gives an average Total Data Quality Score of 99.99 across 3,390,204 records, and when we validated its open ISIN-to-LEI mapping file in full rather than sampling it, all 9,119,948 pairs passed check-digit arithmetic with zero failures. Inside its boundary, the Global LEI System is the best-governed identifier register we have measured anywhere.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Now look one step past the boundary. The FDIC embeds LEIs in its register of insured banks: all 2,252 of them are truncated and invalid. EIOPA embeds LEIs in its register of insurers: four are arithmetically impossible and 42 point at entities GLEIF says have ceased to exist. The SEC receives LEIs in structured filings: 19 fail the same one-line arithmetic that GLEIF passes nine million times in a row. None of this is GLEIF&apos;s fault, and that is precisely the point. GLEIF&apos;s conformance checks are scoped, correctly, to what LEI issuers submit into the system. No check anywhere in the world measures what a register publishes back out when it embeds somebody else&apos;s scheme.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Each register assures its own records. No one assures the seams. The seams are where registers cite each other, embed each other&apos;s identifiers, and make overlapping claims about the same entities, and the seams are exactly where automated systems, retrieval pipelines and AI agents now read. A defect inside a register gets caught by its operator eventually. A defect at the boundary has no operator, so it survives indefinitely, producing values that still look like identifiers and claims that still look like facts.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The four boundary defect classes</h2>
      <p className="text-gov-dark leading-relaxed">
        Six domains, measured with the same method, produce the same taxonomy. Every boundary defect we have found falls into one of four classes, and every class appeared in more than one domain, which is what justifies stating them as classes rather than anecdotes.
      </p>
      <div className="space-y-4">
        {DEFECT_CLASSES.map((d) => (
          <div key={d.name} className="border-l-2 border-l-gov-blue pl-6">
            <h3 className="font-semibold text-gov-dark mb-1">{d.name}</h3>
            <p className="text-gov-dark leading-relaxed">{d.def}</p>
            <p className="text-sm text-gov-secondary/90 leading-relaxed mt-1"><strong>Measured instances:</strong> {d.ev}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The evidence, one domain at a time</h2>
      <p className="text-gov-dark leading-relaxed">
        Each study below is an open OWL 2 ontology with SKOS registries and a SHACL governance layer, built against the complete public register fabric of its domain, with every headline computed twice by independent implementations and a build report that records what could not be obtained. Each links its full write-up and its repository.
      </p>
      <div className="space-y-6">
        {EVIDENCE.map((e) => (
          <div key={e.domain} className="rounded-lg border border-gov-border p-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">{e.domain}</p>
            <h3 className="text-lg font-bold text-gov-dark font-serif">{e.headline}</h3>
            <p className="text-gov-dark leading-relaxed">{e.detail}</p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Link to={e.route} className="text-sm font-medium text-gov-blue underline hover:text-gov-blue-dark">Read the full study</Link>
              <a href={e.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gov-blue underline hover:text-gov-blue-dark">
                {e.repoName} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Credit where it is due, and what is actually new here</h2>
      <p className="text-gov-dark leading-relaxed">
        Three attributions need making plainly, because a category is only worth naming if its parts are honestly sourced.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>GLEIF</strong> owns the positive example. Its data-quality programme is the existence proof that a register operator can assure its records rigorously and publicly, and everything on this page treats it as the standard the rest of the fabric should be held to, not as a target.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Jodi Schneider and colleagues</strong> own the result that the registers of scientific retraction disagree. Salami, McCumber and Schneider (2026) compare eleven sources across a union of 83,317 items and find that 92.64 per cent carry some disagreement. Our 72.42 per cent Crossref against Retraction Watch figure is a two-source special case of their programme, and anyone citing our scholarly study should cite theirs.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>K-AI</strong>, a document knowledge platform, named corpus readiness first, in a May 2026 piece arguing that AI readiness frameworks omit unstructured documents. Our enterprise knowledge study credits them as such; what we added is the scoring method, the implementation and the measured study.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What is ours is the cross-domain generalisation, the boundary framing, and the instrument. Individual defects in individual registers have been reported before, and prior ontologies exist in several of these domains, credited in each study. What we have not found anywhere is the observation that the same four defect classes recur at the boundary of every public register fabric measured, banking, insurance, funds, scholarship, education and government knowledge alike, nor a method that makes the boundary checkable: identifiers as reified assertions carrying scheme, source and computed validation state, disagreement recorded as data rather than resolved silently, and every check shipped as executable SHACL.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-blue/30 bg-gov-blue/5 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Announcing the Register Integrity Index</h2>
        <p className="text-gov-dark leading-relaxed">
          The six studies were built one register fabric at a time. The Register Integrity Index generalises them into a single open instrument: a reproducible scoring framework that measures any public register against the four boundary defect classes, embedded-scheme conformance, resolution, cross-register agreement, and governance metadata, and returns graded findings with the queries attached. It is being stood up now, building directly on the ontologies, SHACL suites and pipelines already published, and it will be developed in the open like everything else in this programme.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={RII_REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
            register-integrity-index on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The ontology family: one program, seven instruments</h2>
      <p className="text-gov-dark leading-relaxed">
        The seven ontologies are one program, not seven projects. They share a design stance: identifiers are reified assertions rather than string attributes, scope is declared as data, lifecycles are nodes, disagreement is recorded rather than adjudicated, and arithmetic is computed in code while policy is enforced in shapes. Five publish their terms under the <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">https://gov.tesseract.academy/def/</code> namespace root, and two publish under sibling Tesseract Academy hosts as recorded in their repositories. Each namespace below is taken from the repository&apos;s own Turtle source, not from documentation.
      </p>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Ontology</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Namespace</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">What it models</th>
            </tr>
          </thead>
          <tbody>
            {FAMILY.map((f, i) => (
              <tr key={f.name} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark font-medium whitespace-nowrap">
                  <a href={f.repo} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">{f.name}</a>
                </td>
                <td className="px-4 py-3 text-gov-dark">
                  <code className="text-xs bg-gov-bg px-1.5 py-0.5 rounded break-all">{f.ns}</code>
                  {f.schemes && (
                    <>
                      <br />
                      <code className="text-xs bg-gov-bg px-1.5 py-0.5 rounded break-all">{f.schemes}</code>
                    </>
                  )}
                </td>
                <td className="px-4 py-3 text-gov-secondary">{f.line}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All seven are open: ontologies and shapes under CC BY 4.0, code under MIT or equivalent, every headline reproducible from public data via the pipelines in each repository.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Common questions</h2>
      <div className="space-y-5">
        {FAQ_SCHEMA.mainEntity.map((q) => (
          <div key={q.name}>
            <h3 className="font-semibold text-gov-dark mb-1">{q.name}</h3>
            <p className="text-gov-dark leading-relaxed">{q.acceptedAnswer.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          Everything on this page is a worked example you can run today. Each of the seven repositories contains the ontology, the shapes, the harvesting pipeline and the queries that produced its headlines, and each study page walks through the method in enough detail to apply it without us. If you operate a register, the constructive reading of this page is that the boundary checks are cheap: check-digit validation is one modulo operation, resolution is a lookup, and a SHACL shape enforcing your embedded schemes runs on every ingest.
        </p>
        <p className="text-gov-dark leading-relaxed">
          If you run entity data, reference data, or a corpus that embeds identifiers from registers you do not control, a typical first engagement is bounded and diagnostic: we build the identifier fabric over your data as it is, run the four defect classes against it, and return a graded findings report with the queries attached so your team can re-run it. That report is useful whether or not the work continues. Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with a description of the registers your systems depend on, and we will tell you which of the four defect classes we would expect to find, before any commitment.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the methodological foundations are in our <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated open ontologies</Link> study and the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">open-world hole benchmark</Link>, which measure when an ontology can actually reject a wrong statement.
      </p>
    </section>
  </article>
);

export default RegisterAssurance;
