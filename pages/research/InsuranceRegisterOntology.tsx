import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/insurance-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/insurance-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/insurance-register-ontology',
  headline:
    'One in five of Europe’s insurers has no LEI in the EU’s own register: the EEA insurance fabric as a governance graph | Tesseract Academy',
  description:
    'An open OWL 2 ontology, SKOS registries and SHACL governance layer built against the entire EIOPA Register of Insurance Undertakings (33,924 rows) joined with a same-day GLEIF harvest of all 3,630 LEIs the register files. 643 of 3,304 active domestic (re)insurers (19.5%) carry no LEI at all; 4 filed LEI values are arithmetically impossible, including a letter-O-for-zero transposition; 118 active insurers’ LEIs have lapsed and 42 point at entities GLEIF says have ceased to exist; one LEI is filed for both SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland; 283 cross-border passports outlive the authorization they derive from. 276,683 triples, all findings reproducible. Figures as of the 14 August 2026 build.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-14',
  dateModified: '2026-08-14',
  about: {
    '@type': 'Dataset',
    name: 'Insurance Register Ontology (IRO) and full-EEA register build',
    url: REPO,
  },
  keywords:
    'insurance data, reinsurance data, knowledge graph, ontology, OWL, SHACL, SKOS, LEI, EIOPA, GLEIF, Solvency II, passporting, insurance data governance, ACORD, Core Data Record, FIBO, insurance ontologist, knowledge graph engineer insurance',
};

const MODEL = `graph TD
  U["InsuranceUndertaking<br/><i>Solvency II Art. 13</i>"] --> RG["Registration<br/><i>home NCA authorization,<br/>own start and end dates</i>"]
  RG --> N["SupervisoryAuthority<br/><i>the home NCA</i>"]
  U --> OP["CrossBorderOperation<br/><i>one host country,<br/>one operation mode</i>"]
  OP --> M["OperationMode<br/><i>SKOS: FPS, EEA branch,<br/>3rd-country branch...</i>"]
  L["LEI assertion<br/><b>entity-scoped</b><br/>checksum + GLEIF status"] -.-> U
  C["NCA code assertion<br/><b>authority-scoped</b>"] -.-> U`;

const SOURCES = [
  { s: 'EIOPA Register of Insurance Undertakings, bulk CSV export', gives: 'every EU/EEA-authorised insurance and reinsurance undertaking, every cross-border operation row, registration dates, NCA codes, LEIs', n: '33,924 rows: 4,842 domestic registrations, 28,904 FPS/branch rows, 3,630 distinct LEI values' },
  { s: 'GLEIF lei-records API, harvested same day', gives: 'legal name, entity status, registration status per LEI — the global system the register’s LEIs must agree with', n: '3,626 of 3,630 resolved; the 4 misses are exactly the 4 that fail check-digit arithmetic' },
];

const FINDINGS = [
  { f: 'Active domestic (re)insurance undertakings with no LEI at all in the EU’s own register, despite EIOPA’s Guidelines on the use of the LEI (EIOPA-BoS-14-026). 492 of the 643 are German', n: '643 of 3,304 (19.5%)', sev: 'gap' },
  { f: 'LEI values in the register failing ISO 7064 check digits — values that cannot exist in the global LEI system. One is all zeros; one is a letter O where the real LEI (same undertaking, per GLEIF) has a zero: a hand-keyed transposition in an official register', n: '4, all absent from GLEIF', sev: 'defect' },
  { f: 'Active undertakings whose LEI registration has LAPSED in GLEIF: authorised to write business, not maintaining the global identifier. 63 of 118 are French', n: '118', sev: 'signal' },
  { f: 'Active undertakings whose LEI’s entity status is INACTIVE in GLEIF — the register says authorised, GLEIF says the legal entity has ceased. A cluster of Spanish mutuals dominates', n: '42', sev: 'defect' },
  { f: 'LEIs filed for more than one register key; of which materially different names; of which hard entity collapses on domestic rows only — including one LEI filed for both SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland DAC', n: '227 / 56 / 3', sev: 'signal' },
  { f: 'Open cross-border operation rows for undertakings whose home registration has ended: passports outliving the authorization they derive from', n: '283', sev: 'defect' },
  { f: 'Register names disagreeing with the GLEIF legal name after aggressive normalization — some legal-form spelling variants, some renames one side has not caught up with (MAPFRE MIDDLESEA vs MAPFRE MALTA)', n: '402 of 2,661 (15.1%)', sev: 'signal' },
  { f: 'Across all 3,630 distinct LEIs filed anywhere in the register: ISSUED 2,590, RETIRED 680, LAPSED 351, DUPLICATE 3, ANNULLED 1, not in GLEIF 4', n: '—', sev: 'signal' },
];

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

const DEMAND = [
  { cap: 'Ontology design in OWL 2 / RDF / RDFS', who: 'Munich Re, The Hartford, S&P Global', where: 'iro-core.ttl: undertakings, reified registrations and operations, the identifier fabric' },
  { cap: 'SKOS taxonomies, controlled vocabularies, terminology harmonization', who: 'Munich Re, The Hartford, S&P Global', where: 'operation-modes and identifier-scheme registries, each concept grounded in Directive 2009/138/EC' },
  { cap: 'SPARQL at production scale', who: 'Munich Re, The Hartford, S&P Global', where: 'five committed queries whose counts reproduce the governance report exactly' },
  { cap: 'Ontology governance: versioning, change management, semantic interoperability', who: 'Munich Re, The Hartford, S&P Global', where: 'three-layer SHACL: syntax, structure, six cross-source business rules with graded severities' },
  { cap: 'Data quality, lineage, reference and master data', who: 'The Hartford, Swiss Re, S&P Global, AIG', where: 'every identifier is a reified assertion carrying source system and computed validation state' },
  { cap: 'Reinsurance-domain modelling', who: 'Munich Re (the only ad that names it)', where: 'the register spans insurers and reinsurers; finding 5’s hard collapse is a reinsurance pair (SCOR France / SCOR Ireland)' },
  { cap: 'LLM / RAG / agentic consumption of the knowledge layer', who: 'The Hartford, Swiss Re, AIG × 2', where: 'the graph is MCP-servable via our open-ontologies engine; grounded, checksum-validated context for agents' },
  { cap: 'SHACL validation', who: 'zero carrier ads name it', where: 'the entire governance layer — the white space between what the market hires for and what makes the data trustworthy' },
];

export const InsuranceRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        One in five of Europe&apos;s insurers has no LEI in the EU&apos;s own register
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Insurance entity data is an identifier problem before it is anything else. We built an open ontology and SHACL governance layer for the authorization and passporting fabric of insurance and reinsurance undertakings and ran it against the entire EIOPA register &mdash; every EU/EEA-authorised (re)insurer and every cross-border operation row &mdash; joined with a same-day harvest of every LEI the register files from GLEIF. The graph that comes out holds 276,683 triples, and the two systems disagree about Europe&apos;s insurers in ways that are individually small and collectively damning: a fifth of active domestic undertakings carry no global identifier at all, four filed LEIs are arithmetically impossible, and one LEI is filed for two different SCOR reinsurance companies at once.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Authorization is a lifecycle, not an edge</h2>
      <p className="text-gov-dark leading-relaxed">
        The model is deliberately small. An undertaking&apos;s home registration and each of its cross-border operations are reified nodes with their own start and end dates, because both have lifecycles &mdash; which is what lets &quot;a passport outliving its authorization&quot; be a shape violation rather than a quarterly spreadsheet reconciliation. Identifiers are first-class assertion nodes carrying three things a bare string cannot: the scheme, the asserting source system, and a computed validation state. The SKOS registry declares the LEI entity-scoped and the national NCA code authority-scoped, so a branch legitimately carrying its head office&apos;s LEI under a host regulator&apos;s code is modelled, not special-cased.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The register keys undertakings by home country plus NCA code &mdash; and measurably not consistently: of 298 LEIs appearing on both domestic and branch rows, 171 use a different code on the branch row. Rows that join to no home undertaking by key or unambiguous LEI become explicit RegisteredPresence nodes. The join failure is data, not noise.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two systems that must agree, measured where they do not</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Source system</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">What it contributes</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Volume</th>
            </tr>
          </thead>
          <tbody>
            {SOURCES.map((r, i) => (
              <tr key={r.s} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.s}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.gives}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The register has no stable export URL &mdash; the pipeline replays the SharePoint postback that drives its export button, which is itself a statement about the state of insurance data infrastructure. The GLEIF harvest runs at unauthenticated rate limits in ten minutes. The full build, from CSV to validated graph to generated governance report, takes under a minute; the SHACL gate independently re-finds exactly the four impossible LEIs from the recorded checksum state, which is the point of keeping arithmetic in code and policy in shapes.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Eight findings, all reproducible</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Number</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Class</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((r, i) => (
              <tr key={r.f} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r.f}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{r.n}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures are dated to the 14 August 2026 build. Both sources are living systems fetched as current, so a rerun will not reproduce these exact totals; the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The letter O that severed a Danish insurer from the global identifier system</h2>
      <p className="text-gov-dark leading-relaxed">
        An LEI carries two check digits under ISO 7064 MOD 97-10, so a corrupted one is mechanically detectable by anyone who divides by 97. Four values in the EU&apos;s register fail that division. One is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">00000000000000000000</code> &mdash; twenty zeros filed as a legal entity identifier. The most instructive is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">5493O00MN7XN3BBKCE67</code>, filed for AP Skadesforsikring of Denmark: the fifth character is a letter O where the undertaking&apos;s real LEI, which resolves in GLEIF to the same company, has a zero. Someone typed it. No form divided by 97, and the transposition now sits in the official register of an EU supervisory authority, silently severing that insurer from every LEI-keyed system downstream. None of the four values exists in GLEIF &mdash; the check-digit arithmetic and the global register agree perfectly with each other, and both disagree with the EU&apos;s filing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The deeper cross-source findings are graded honestly. A LAPSED LEI on an active insurer (118 of them) is staleness, not error: the identifier still denotes the right entity; nobody renewed it. But 42 register-active undertakings carry LEIs whose entity GLEIF marks INACTIVE &mdash; the register says authorised to write insurance, the global system says the company has ceased to exist. One of the two is wrong about a live European insurer, and the graph records the disagreement without pretending to know which. And the three hard entity collapses include a reinsurance pair: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300KCPG3666EE4546</code> filed for both SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland DAC, two distinct legal entities in the same group on one identifier &mdash; exactly the treaty-counterparty resolution failure that reinsurance data teams pay to untangle.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the market is hiring for, mapped to what we built</h2>
      <p className="text-gov-dark leading-relaxed">
        We verified the 2026 crop of insurance-semantics job advertisements the way we verify data: by fetching them. Munich Re advertised a Knowledge and Ontology Engineer for Life &amp; Health, modelling &quot;mortality, morbidity, medical conditions, reinsurance contracts, and business processes&quot; in OWL, RDF, RDFS and SKOS &mdash; the only carrier ad on earth that names reinsurance-domain ontology work, and its canonical posting vanished this month. The Hartford is hiring a Knowledge Graph Engineer / Ontologist at $156,000&ndash;$234,000 to make &quot;LLMs and agents consume governed business context&quot;. S&amp;P Global wants a Lead Knowledge Engineer for ontologies, taxonomies and linked metadata. AIG&apos;s GenAI team asks for ontology frameworks and digital-twin entity modelling; Swiss Re&apos;s only &quot;ontology&quot; requisition means Palantir Foundry&apos;s property-graph product, a different discipline wearing the same word. Three readings follow. First, the live population of true W3C-stack insurance ontologist roles is arguably one. Second, every 2026 ad couples the knowledge layer to LLM and agentic consumption &mdash; nobody hires for semantics without an AI-grounding story. Third, not one carrier ad names SHACL: the market is hiring people to build knowledge graphs and not yet hiring anyone to make them trustworthy.
      </p>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Capability the ads name</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Who asks for it</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Where this work demonstrates it</th>
            </tr>
          </thead>
          <tbody>
            {DEMAND.map((r, i) => (
              <tr key={r.cap} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.cap}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.who}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The vacuum where insurance&apos;s open semantic standards should be</h2>
      <p className="text-gov-dark leading-relaxed">
        The demand above lands in a field that is verifiably empty. FIBO, the open financial ontology, contains four insurance-related classes in a guaranty module; the string &quot;reinsur&quot; occurs once in the entire ontology, inside a free-text definition &mdash; no Reinsurer, no Treaty, no Cession. ACORD&apos;s Reference Architecture and its reinsurance messaging standards are membership-gated. Lloyd&apos;s Core Data Record &mdash; extended to treaty reinsurance in v3.3 this May &mdash; is published through interactive portals, not as an open artifact; and Lloyd&apos;s sunset Blueprint Two in March 2026 with an explicit repositioning around &quot;setting standards and organising data&quot;. The one genuinely open standard, Oasis LMF&apos;s CC0 Open Exposure Data, is a flat-file schema for catastrophe-model exposure, not an ontology. The reinsurers hiring ontology engineers build their semantic models privately. An open OWL/SKOS/SHACL artifact for insurance has no incumbent &mdash; so we started where the public data actually is: the register fabric every regulated European insurer already lives in.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for insurance data teams</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>Divide by 97 at the point of entry.</strong> Four impossible LEIs in an official EU register exist because no form validates two check digits. A shape at capture costs nothing and ends the defect class.</li>
          <li><strong>Do not key entities on LEIs.</strong> 19.5% of active domestic undertakings have none, 227 LEIs serve more than one register key, and three are filed for materially different companies. Key on the register&apos;s own scheme, treat the LEI as an assertion to be validated.</li>
          <li><strong>Reconcile against GLEIF continuously, not annually.</strong> 118 lapsed, 42 entity-inactive, 402 name disagreements &mdash; each is a query against this graph, and each was invisible before the two systems were joined.</li>
          <li><strong>Treaty counterparty resolution inherits all of this.</strong> If SCOR France and SCOR Ireland share an LEI in the EU&apos;s register, your cession chain&apos;s entity resolution is only as good as your identifier governance.</li>
          <li><strong>Honest boundary:</strong> the public export does not distinguish direct insurers from pure reinsurers, carries no lines of business, and a LAPSED or INACTIVE status can reflect GLEIF-side staleness rather than register-side error. The build report states every such limit as a finding, not a footnote.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, SKOS registries, three-layer SHACL, the postback-replaying fetcher, the GLEIF harvester, the two-pass entity resolution, the governance report generator and five verified SPARQL queries are public under CC BY 4.0 and MIT. Every figure on this page traces to five pipeline commands against two public sources. This is the second instantiation of a design we first proved on the US fund universe &mdash; identifiers as governed assertions, scope as data, arithmetic in code and policy in shapes &mdash; and the same discipline transfers to any regulated register fabric.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          insurance-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link> applies the same identifier-fabric discipline to the US fund universe, and our <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study measures when an ontology can actually reject a wrong statement. Working on insurance entity data, register reconciliation, Solvency II reporting plumbing or treaty counterparty resolution? Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
      </p>
    </section>
  </article>
);

export default InsuranceRegisterOntology;
