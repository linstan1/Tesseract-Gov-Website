import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/italy-register-ontology';
const PR = 'https://github.com/italia/dati-semantic-assets/pull/317';
const ISSUE = 'https://github.com/italia/dati-semantic-assets/issues/225';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/italy-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/italy-register-ontology',
  headline:
    'An open ontology for Italian public registers, tested against IPA, ANAC, OpenCUP and ISTAT | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and reproducible audit of Italy's public register fabric, built from hands-on downloads of the IPA register of 23,735 public administrations, the ANAC contracts register, the OpenCUP register of 11.9 million public investment projects, the ISTAT register of administrative units and the national semantic vocabulary, taken on 17 August 2026. The national cities vocabulary and the ISTAT CSV export both predate the 2026 Sardinian territorial reform: 380 dead municipality codes are published as current and 378 current codes are missing, while the operational IPA register already uses the new codes with zero mismatches across all 23,735 entities. All 23,735 IPA fiscal codes pass their checksum, a clean null result stated as a finding. In a two-month sample of 2025 contracts, 140 well-formed CUPs referenced by 255 contracts are absent from the published OpenCUP open-data exports, and 45 values in the CUP field fail the CUP grammar, including ESENTE and ATT000NON000CUP. The findings are delivered upstream as a contribute-first SHACL package answering the vocabulary maintainers' own request. Every headline computed two independent ways, reproducible from public data.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
  about: {
    '@type': 'Dataset',
    name: 'Italian Public Register Ontology',
    url: REPO,
  },
  keywords:
    'Italian public registers, codice ISTAT, codici comuni 2026, riforma province Sardegna codici ISTAT, dati-semantic-assets, IPA IndicePA, codice fiscale validation, partita IVA checksum, CIG CUP linkage, OpenCUP, ANAC open data, codice catastale, SHACL, OWL 2 ontology, SKOS, register assurance, vocabolari controllati, Elenco comuni italiani, register integrity',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/italy-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Italian national cities vocabulary up to date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. As of 17 August 2026 the cities vocabulary in italia/dati-semantic-assets, the semantic layer national datasets are supposed to join against, matches the CSV flavour of the ISTAT Elenco comuni exactly, and that CSV is itself stale. Since 1 January 2026 the Sardinian territorial reform recodes 377 comuni, and two 2026 fusions reduce the register to 7,894 comuni. Measured against the current register, the vocabulary carries 380 dead codes as current (the 377 Sardinian recodes plus Lirio, Castegnero and Nanto) and lacks 378 current codes (the 377 new Sardinian codes plus Castegnero Nanto, code 024129). Both numbers were computed two independent ways on each side.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which flavour of the ISTAT Elenco comuni should I use, CSV or XLSX?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The XLSX. The CSV and XLSX flavours of the same ISTAT endpoint diverge: the XLSX is current at 21 February 2026 with 7,894 comuni and the new Sardinian codes, while the CSV still reflects the pre-2026 state with 7,896 comuni and the old codes. Machine consumers overwhelmingly read the CSV and inherit the stale state. The per-municipality suppression ledger also stops at 2024, so the 2026 events exist only in a PDF bulletin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the codici fiscali in the IPA register valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and that clean result is itself a finding. All 23,735 entities in the IPA register carry an 11-digit codice fiscale that passes the partita IVA checksum, verified with two independent implementations of the algorithm; the single exception is one empty value on an entity in liquidation. Zero checksum failures. IPA's own cf_validato validation pipeline works, and IPA also already uses the new 2026 ISTAT codes with zero pair mismatches, so the operational register is ahead of both the statistical CSV export and the national semantic vocabulary.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Italian public contracts link to valid project codes (CUP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mostly, with structured failures at the boundary. In a two-month sample of 2025 contracts (months 01 and 11, drawn with a recorded seed before any data was read; 223,375 distinct CIGs), 36,621 CIGs (16.4 per cent) reference 28,009 distinct CUPs through ANAC's own link table. Of those, 4 values fail even the loose 15-alphanumeric rule (ESENTE, ND, a CIG pasted into the CUP field) and 41 more fail the strict CUP grammar that fits 99.999 per cent of the OpenCUP master itself (placeholders like ATT000NON000CUP and AAAAAAAAAAAAAAA, shifted pastes like CUPB83C22002840). A further 140 well-formed CUPs referenced by 255 contracts are absent from the published OpenCUP open-data exports, computed two independent ways with identical results. Absence from the exports is not proof the CUP was never issued.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the SHACL package contributed to italia/dati-semantic-assets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The maintainers of the national vocabulary asked in issue 225 for concept-level SHACL rules on the controlled vocabularies. The contributed package adds structural shapes in the house style (every concept must carry skos:notation, skos:prefLabel and skos:inScheme; city notations must be six-digit ISTAT codes; every current city concept must expose its cadastral-code identifier; no code may have two simultaneously open validity intervals), a data-driven currency shape generated from the current ISTAT register, a fast hermetic pytest currency check for CI, and a one-triple fix the new rules surfaced (the countries vocabulary ITA concept lacked skos:inScheme). The currency check is exactly the test that would have caught the 2026 drift.',
      },
    },
  ],
};

const MODEL = `graph TD
  R["Register row<br/><i>IPA entity, cities.csv row,<br/>ANAC CUP field</i>"] --> A["IdentifierAssertion<br/><b>reified, dated, by register</b><br/>value as published + conformance<br/>+ currency in the authority"]
  S["SKOS scheme registry<br/><i>codice ISTAT, catastale, CF,<br/>CIG, CUP: rules as data</i>"] --> A
  A --> RO["ReconciliationObservation<br/><b>(ISTAT, catastale) pair<br/>agreement across registers</b>"]
  A --> CO["CoverageObservation<br/><b>current in the authority,<br/>absent downstream</b>"]`;

const FINDINGS = [
  {
    f: 'Codes the national cities vocabulary publishes with an open validity interval although they left the ISTAT register on 1 January 2026: the 377 Sardinian recodes plus Lirio, Castegnero and Nanto',
    n: '380 of 7,896',
    sev: 'defect',
    means: 'Any consumer joining current data against the national semantic layer resolves dead codes as live municipalities.',
  },
  {
    f: 'Current ISTAT codes with no current concept in the vocabulary: the 377 new Sardinian codes plus Castegnero Nanto (024129)',
    n: '378 of 7,894',
    sev: 'defect',
    means: 'Joins between IPA and the vocabulary silently drop every Sardinian municipality today.',
  },
  {
    f: 'The CSV and XLSX flavours of the same ISTAT endpoint diverge: the XLSX is current at 21 February 2026 (7,894 comuni), the CSV predates the reform (7,896 comuni). The suppression ledger stops at 2024',
    n: '2 flavours, 1 truth',
    sev: 'defect',
    means: 'Machine consumers overwhelmingly read the CSV and inherit the stale state; the vocabulary demonstrably did.',
  },
  {
    f: 'IPA entities whose (codice ISTAT, codice catastale) pair disagrees with the current ISTAT mapping. Against the stale CSV baseline the same join shows 939 entities where IPA is ahead of the export, not behind',
    n: '0 of 23,735',
    sev: 'signal',
    means: 'The operational register is current while the statistical export and the semantic layer lag a whole territorial reform. Assurance stops at the register boundary.',
  },
  {
    f: 'IPA 11-digit codici fiscali failing the partita IVA checksum, verified with two independent implementations; one empty value on an entity in liquidation is the only exception',
    n: '0 of 23,735',
    sev: 'signal',
    means: "A clean null result, stated as a finding: IPA's cf_validato pipeline works.",
  },
  {
    f: 'Well-formed CUPs referenced by sampled 2025 ANAC contracts and absent from the published OpenCUP open-data exports, computed two independent ways with identical results',
    n: '140 CUPs, 255 contracts',
    sev: 'defect',
    means: 'The public spending trail breaks between the contracts register and the projects register. Absence from the exports is not proof the CUP was never issued.',
  },
  {
    f: 'Values published in the ANAC CUP field that fail the CUP grammar: 4 fail even the loose 15-alphanumeric rule (ESENTE, ND, a CIG in the CUP field), 41 more fail the strict grammar that fits 99.999 per cent of the OpenCUP master (ATT000NON000CUP, AAAAAAAAAAAAAAA, CUPB83C22002840)',
    n: '45 of 28,009',
    sev: 'defect',
    means: 'A field with a published grammar, published without validation. Six contracts carry only malformed references and cannot be traced to any project at all.',
  },
];

const SEV_STYLE: Record<string, string> = {
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

export const ItalyRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open ontology for Italian public registers, tested against IPA, ANAC, OpenCUP and ISTAT
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        On 1 January 2026 the Sardinian territorial reform recoded 377 Italian municipalities, and two fusions later reduced the register to 7,894 comuni. Seven months on, the operational register of Italian public administrations already uses the new codes everywhere, while the statistical CSV export and the national semantic vocabulary both still publish the old ones. On 17 August 2026 we downloaded Italy&apos;s public register fabric, the IPA register, the ANAC contracts register, the OpenCUP register of 11.9 million public investment projects, both flavours of the ISTAT register of administrative units and the national cities vocabulary, and measured what the public record actually says. This is a case study in register assurance: auditing what a register publishes against the rules its identifiers declare for themselves and against the other registers that carry the same identity. Every headline below is computed two independent ways, and the pipeline fails its own build if the two ever disagree. The findings are also delivered upstream, as the SHACL package the vocabulary&apos;s maintainers themselves asked for.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>The national cities vocabulary (italia/dati-semantic-assets) carries 380 dead ISTAT codes as current and lacks 378 current codes, because it tracks the CSV flavour of the ISTAT elenco and that CSV predates the 2026 Sardinian reform.</li>
          <li>The CSV and XLSX flavours of the same ISTAT endpoint diverge: the XLSX is current at 21 February 2026, the CSV is not. Machine consumers read the CSV.</li>
          <li>The operational IPA register is fully current: 23,735 entities, zero stale codes, zero (codice ISTAT, codice catastale) pair mismatches against the current register. The usual staleness story runs backwards here.</li>
          <li>All 23,735 IPA codici fiscali pass their checksum, with one empty value on an entity in liquidation. A clean null result, stated as a finding.</li>
          <li>In a seeded two-month sample of 2025 contracts, 140 well-formed CUPs referenced by 255 contracts are absent from the published OpenCUP exports, and 45 CUP-field values fail the CUP grammar, including ESENTE and ATT000NON000CUP.</li>
          <li>The artefact is an open OWL 2 ontology, SKOS scheme registry and SHACL governance layer, plus a contribute-first PR to the national vocabulary answering the maintainers&apos; own request in <a href={ISSUE} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">issue #225</a>. Code MIT, ontology and documentation CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured</h2>
      <p className="text-gov-dark leading-relaxed">
        Five register surfaces, all public, all fetched hands-on on the same day. The IPA register (IndicePA, CC BY 4.0) publishes 23,735 public administrations with their codice fiscale, codice ISTAT and codice catastale. ISTAT publishes the register of administrative units in two flavours at the same endpoint, CSV and XLSX, plus a per-municipality suppression ledger and the official bulletin of the 2026 changes. The national semantic vocabulary in italia/dati-semantic-assets publishes the cities controlled vocabulary as cities.csv and cities.ttl, 7,896 current concepts in perfect internal agreement. ANAC publishes the 2025 contracts register (CIG) in monthly exports and a 7,167,369-row CIG-to-CUP link table covering all years. OpenCUP publishes the master register of public investment projects: 11,942,787 CUPs, computed two independent ways over two export surfaces that agree exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the semantic layer lags a whole territorial reform</h2>
      <p className="text-gov-dark leading-relaxed">
        The cities vocabulary&apos;s current concept set matches the CSV flavour of the ISTAT elenco exactly, code for code. The problem is that the CSV is stale. Measured against the current register (the XLSX flavour, sheet &quot;CODICI al 21_02_2026&quot;, 7,894 comuni), the vocabulary carries 380 dead codes with an open validity interval: the 377 Sardinian recodes in force since 1 January 2026, plus Lirio (merged into Montalto Pavese on 31 January), and Castegnero and Nanto (fused into Castegnero Nanto on 21 February). It lacks 378 current codes: the 377 new Sardinian codes with province prefixes 112 to 119, plus Castegnero Nanto, code 024129.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We verified these numbers two independent ways on each side: csv parse against ttl parse on the vocabulary side, direct XLSX read against a stale-CSV-plus-official-mapping reconstruction on the register side, with the reconstruction reproducing the XLSX exactly and zero unexplained residue. The known-answer case, Roma 058091 with cadastral code H501, passes everywhere.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the same endpoint publishes two different registers</h2>
      <p className="text-gov-dark leading-relaxed">
        The staleness has a precise cause. At the ISTAT endpoint for the Elenco comuni italiani, the XLSX flavour is current at 21 February 2026 and the CSV flavour still reflects the pre-2026 state: 7,896 comuni, old Sardinian codes, Lirio, Castegnero and Nanto still present. Machine consumers overwhelmingly read the CSV, and the national vocabulary demonstrably did. The per-municipality suppression ledger compounds this: it stops at 2024, so the 2026 events exist only in a PDF bulletin that no pipeline parses.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the operational register is ahead of the semantic one</h2>
      <p className="text-gov-dark leading-relaxed">
        Here the usual story runs backwards. Joining each IPA entity&apos;s (codice ISTAT, codice catastale) pair against the current ISTAT mapping yields zero stale codes and zero pair mismatches across all 23,735 entities. Against the stale CSV baseline, the same join shows 939 apparently stale entities, and every one of them turns out to be IPA being ahead of the export: entities already carrying new Sardinian codes, and the new comune of Castegnero Nanto itself. The cadastral identifiers in the vocabulary&apos;s TTL provide a third mapping source, with zero disagreements on shared codes.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The codice fiscale census is equally clean: all 23,735 entities carry an 11-digit value that passes the partita IVA checksum, computed with two independent implementations that agreed on every row and on 20,000 random cross-check strings. The single exception is an empty value on an entity in liquidation. We state the null result as a finding because it locates the failure precisely: the defect is not in the operational register, it is in the semantic layer downstream of it. Assurance stops at the register boundary.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the spending trail breaks between two registers</h2>
      <p className="text-gov-dark leading-relaxed">
        Italy&apos;s public spending transparency depends on a join: the contracts register (CIG, at ANAC) links to the investment projects register (CUP, at OpenCUP). We sampled two months of 2025 contracts, drawn with a recorded seed before any data was read: 223,375 distinct CIGs, of which 36,621 (16.4 per cent) reference 28,009 distinct CUPs through ANAC&apos;s own link table.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Four referenced values fail even the loosest possible rule, 15 alphanumeric characters: the literal strings ESENTE and ND, a CIG pasted into the CUP field, and a 16-character value with a trailing dot. A further 41 fail the strict CUP grammar (letter, two digits, letter, eleven digits) that fits 99.999 per cent of the 11.9 million CUPs in the OpenCUP master itself: placeholders like AAAAAAAAAAAAAAA and ATT000NON000CUP, and shifted or truncated pastes like CUPB83C22002840, the word CUP typed into its own field. And 140 well-formed CUPs, referenced by 255 contracts, are absent from the published OpenCUP open-data exports. We computed the OpenCUP master two independent ways, an awk pass over the seven Progetti parts and a python pass over Localizzazione, and both ways return the identical 140 absentees. One caveat is recorded on the assertion class itself: absence from the monthly exports is not proof the CUP was never issued.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The findings, graded</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Number</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Class</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Operational consequence</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((r, i) => (
              <tr key={r.f} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r.f}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{r.n}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
                <td className="px-4 py-3 text-gov-secondary">{r.means}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures are computed from register surfaces fetched hands-on on 17 August 2026. All are living systems, so a later run produces different totals while the method reproduces exactly. The contract sample covers months 01 and 11 of 2025, drawn with seed 20260817 before any data was read.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The fix, contributed where the maintainers asked for it</h2>
      <p className="text-gov-dark leading-relaxed">
        The maintainers of the national vocabulary asked, in <a href={ISSUE} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">italia/dati-semantic-assets#225</a>, for concept-level SHACL rules on the controlled vocabularies. Rather than publish a defect list and walk away, we wrote the package and <a href={PR} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">opened the pull request</a>: structural shapes in the repository&apos;s own style (every concept must carry skos:notation, skos:prefLabel and skos:inScheme; city notations must be six-digit ISTAT codes; every current city concept must expose its cadastral identifier, operationalizing part of issue #296; no code may have two simultaneously open validity intervals), a data-driven currency shape generated from the current ISTAT register, and a hermetic pytest currency check that runs in under three seconds in CI. That test is exactly the one that would have caught the 2026 drift on the day it happened. The new rules also surfaced and fixed a small genuine defect: the countries vocabulary&apos;s ITA concept carried no skos:inScheme.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One measured engineering caveat travelled with the package: pyshacl evaluates sh:in in quadratic time (0.04 seconds at 100 items, 1.4 at 500, 21.8 at 2,000 on a laptop), so a 7,894-item currency shape is valid SHACL that no pre-commit toolchain should run, and the fast pytest check is the CI-shaped equivalent.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, transferable</h2>
      <p className="text-gov-dark leading-relaxed">
        None of this required privileged access. The method is the same one we have now run against US bank, securities, insurance and fund registers, UK public registers, learning standards, scholarly records and enterprise knowledge bases.
      </p>
      <p className="text-gov-dark leading-relaxed">
        First, model identity honestly. An identifier in a register is not a property of an entity; it is a dated claim by a named register. Our OWL model reifies every published value as an IdentifierAssertion carrying the value exactly as published, the scheme the field claims, whether the value conforms to the rules that scheme declares for itself, and whether it is current in the scheme&apos;s own authoritative register.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        Second, make the schemes self-describing. A SKOS registry declares the codice ISTAT, codice catastale, codice fiscale, CIG and CUP rules as data, length, pattern and check-digit algorithm included, so the validator has no hard-coded rules and adding a register means adding data, not code.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Third, make defects first-class. Each defect class is one SHACL shape (StaleCodeShape, MissingCurrentCodeShape, PairDisagreementShape, DanglingCUPShape, MalformedCUPShape), so the validation report is the findings table, and a shape that reports zero violations, as the pair-disagreement shape does here, is a computed clean result, not an assumption.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Fourth, never trust one computation. Every headline is computed set-based in Python and independently from the graph via a single-pass SHACL run, and the build fails if they disagree. This gate has caught a real bug in every register we have audited, including our own pipelines.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What a register operator should do with this</h2>
      <p className="text-gov-dark leading-relaxed">
        If you operate a register or a national vocabulary: regenerate every export flavour together, and treat a divergence between them as an incident; validate identifier fields against their declared grammar at ingestion, because ESENTE in a CUP field should never survive a schema check; and put a currency test against the upstream authority in CI, because a territorial reform should break a build, not a downstream join seven months later. If you consume Italian municipal codes: read the XLSX, not the CSV, until they converge, and treat the vocabulary&apos;s Sardinian rows as stale until the upstream refresh lands.
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
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, reproducible, and free to use</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository, with the ontology, the SKOS scheme registry, the three SHACL layers, the finding pipeline, the contribute-first package and the governance gate, is public: code under MIT, ontology and documentation under CC BY 4.0. The source table lists what could not be obtained as carefully as what could, including the session-bound SITUAS API that was deferred and the aggregate-only variations file. No bulk register data is committed, and ANAC extracts stay out of the repository because ANAC open data is CC BY-SA; everything regenerates from the documented public endpoints.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          italy-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={PR} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-bg transition-colors">
          the upstream PR <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If you want this run against a register you operate or depend on, we run a scoped diagnostic of one register boundary as a one-week engagement: harvest, conformance census, cross-register reconciliation, and a findings ledger your engineers can reproduce. The public version of this study took days against five open sources; the private version is the same method applied to the entity systems inside your organisation that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with the register name.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the same register-boundary discipline measured the SEC&apos;s registers in <Link to="/research/securities-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US securities entity register</Link>, the FDIC&apos;s in <Link to="/research/bank-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US bank register</Link>, and the category it belongs to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>.
      </p>
    </section>
  </article>
);

export default ItalyRegisterOntology;
