import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/medicinal-product-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/medicinal-product-registers#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/medicinal-product-registers',
  headline: 'Medicinal product registers, measured for joinability: EMA, openFDA and GLEIF | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology and a reproducible census of whether the public medicinal product registers can be joined by machine, built on 28 August 2026 from the EMA medicines report, the openFDA NDC directory and the GLEIF LEI API. The EMA register publishes no organisation identifier for marketing authorisation holders; joined by exact name, 102 of 392 holders resolve to a GLEIF legal entity and 14 of those land on an LEI that is not in good standing. The EU and US registers of who holds medicines are string-joinable for 8.2 per cent of holders. EMA SPOR, the service that should carry the join, answers 401 to anonymous requests. Every headline computed two independent ways.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  about: { '@type': 'Dataset', name: 'Medicinal Product Register Ontology', url: REPO },
  keywords:
    'ISO IDMP, SPOR, EMA, OMS, RMS, xEVMPD, regulatory information management, RIM, marketing authorisation holder, NDC directory, openFDA, GLEIF, LEI, ATC code, regulatory data standards, master data governance, SHACL, OWL 2 ontology, SKOS, register assurance, medicinal product identification',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/medicinal-product-registers#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can the EMA medicines register be joined to the global legal entity register?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For about a quarter of it. The EMA medicines report publishes marketing authorisation holders as free text with no organisation identifier. Matched conservatively against the GLEIF API, exact legal name or exact after trivial normalisation, 102 of 392 distinct holder names on authorised human medicines resolve and 290 do not. No fuzzy matching contributes to any headline; a separately reported near-miss class isolates the mechanism without inflating the match rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do exact-name joins between medicine registers fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because registers spell the same legal name differently. The clearest case in the study: AbbVie Deutschland GmbH & Co. KG fails the join solely because GLEIF stores the name as "AbbVie Deutschland GmbH And Co. KG", with the ampersand transliterated. Same entity, same jurisdiction, one character class apart. Without a shared organisation identifier in the medicines register, every such spelling difference is a lost join.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the LEIs of marketing authorisation holders in good standing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not all of them. Of the 102 holder names that resolve to a GLEIF record, 11 land on a LAPSED LEI registration, 2 on a DUPLICATE and 1 on a RETIRED one, so 14 of 102 joined identities are not in good standing as of 28 August 2026. AbbVie Limited, the UK entity, is among the lapsed registrations, as is the AbbVie Deutschland record reached through the near miss.',
      },
    },
    {
      '@type': 'Question',
      name: 'How joinable are the EU and US medicinal product registers to each other?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By holder name, barely. 31 of 379 normalised EMA marketing authorisation holder names on authorised human medicines equal an openFDA NDC labeler name, which is 8.2 per cent. The two registers describe overlapping corporate groups through entirely different local subsidiaries and spellings, and neither publishes an organisation identifier the other uses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How clean is the EMA medicines report internally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cleaner than the joins, with a handful of precise defects. Of 2,732 product numbers exactly one violates the scheme, EMEA/H/C005201, which is missing its slash. The ATC column on 1,567 authorised human medicines carries 1,399 full codes, 149 partial-level codes, 17 blanks, four occurrences of the prose string "Not yet assigned", and one truncated code, L01XE3 on Vargatef, where valid codes end with two digits. Every date-sanity check passed: zero end-before-start, zero status contradictions. Nulls are reported as results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What did the study find in the openFDA NDC directory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero scheme violations across 137,521 product NDC values, which is a genuinely clean identifier column. Against that, 1,904 product NDCs appear more than once, each under distinct structured product labeling documents, and 1,151 of those duplicate groups share the same finished flag. The labeler name column holds 9,771 distinct spellings that collapse to 8,343 names after trivial normalisation: 1,103 variant groups inside one register.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why not measure EMA SPOR directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because it has no anonymous read surface. The SPOR organisation and referentials APIs answered HTTP 401 and a login redirect to every unauthenticated request tried on 28 August 2026. The study records this as a blocked source rather than circumventing it, and it is a finding in its own right: the EU\'s IDMP master data services cannot be measured, or consumed, by the public that the registers exist to inform. The measurable public surface is the medicines report XLSX, and that surface carries free text where SPOR carries identifiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I reproduce these numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The repository at github.com/fabio-rovai/medicinal-product-register-ontology holds the pipeline, ontology, SHACL layers, SPARQL queries, tests and a build report stating populations, methods and the errors made during the build. All three sources are open and keyless. Every headline is computed set-based in Python and again by SPARQL over the emitted graph of 81,008 triples, and the dual-check script exits non-zero on any disagreement. On this run seven checks out of seven agree.',
      },
    },
  ],
};

const cd = 'text-sm bg-gov-bg px-1.5 py-0.5 rounded';

export const MedicinalProductRegisters: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:underline">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-gov-dark font-serif leading-tight">
        Medicinal product registers, measured for joinability
      </h1>
      <p className="text-sm text-gov-secondary">28 August 2026</p>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        ISO IDMP exists so that a medicine, its substance and its holder can be identified the same way
        everywhere. The pharmaceutical industry is spending heavily to comply, and regulators run master data
        services built for the purpose. On 28 August 2026 we measured what the public can actually join today,
        across the three open surfaces: the EMA medicines report, the openFDA NDC directory, and the GLEIF legal
        entity register. The EU register publishes its holders as free text. A quarter of them join to GLEIF by
        exact name. Fourteen of the joined identities land on an LEI that is not in good standing. The EU and US
        registers join to each other for one holder in twelve. And SPOR, the service that should carry the join,
        answers 401 to the public. Every number is computed two independent ways, and the pipeline fails its own
        build if they disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>The EMA medicines report publishes no organisation identifier for marketing authorisation holders. 392 distinct free-text names cover the 1,567 authorised human medicines; 13 of them are spelling variants of each other.</li>
          <li>Joined to GLEIF by exact legal name (trivial normalisation allowed, no fuzzy matching), 102 of 392 holders resolve, 26.0 per cent. The mechanism of failure is spelling: <em>AbbVie Deutschland GmbH &amp; Co. KG</em> misses solely because GLEIF stores &quot;GmbH And Co. KG&quot;.</li>
          <li>Of the 102 that join, 11 LEIs are LAPSED (AbbVie Limited among them), 2 DUPLICATE and 1 RETIRED: 14 of 102 joined identities are not in good standing.</li>
          <li>EU to US: 31 of 379 EMA holder names equal an openFDA labeler name after normalisation, 8.2 per cent.</li>
          <li>Register-internal hygiene is high and its defects are precise: one malformed product number in 2,732 (<code className={cd}>EMEA/H/C005201</code>), one truncated ATC code (<code className={cd}>L01XE3</code>), four prose strings in the ATC column, zero date-sanity failures. openFDA: zero NDC scheme violations in 137,521 records, 1,904 NDCs listed more than once, 1,103 labeler-name variant groups.</li>
          <li>EMA SPOR, the IDMP master data service, has no anonymous read surface: 401 and a login redirect on every route tried. The public join has to run on the XLSX shadow, and the shadow is free text.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this register pair, and why now</h2>
      <p className="text-gov-dark leading-relaxed">
        Regulatory affairs departments across the industry are staffing data standards and governance roles whose
        job descriptions name the same list: EMA standards published through SPOR, the FDA Data Standards
        Catalog, WHO ATC codes, ISO IDMP, and ontology services that compare internal dictionaries to external
        standards. AbbVie advertised exactly such a director role in August 2026 with a posted range of 160,500
        to 305,000 dollars. The budgets are real because the obligation is real: EU implementation of IDMP has
        been moving for a decade, xEVMPD submission is mandatory today, and every company holds product master
        data that must reconcile with what the regulators publish.
      </p>
      <p className="text-gov-dark leading-relaxed">
        All of that work rests on an assumption: that the public registers on the other side of the
        reconciliation can be joined to. That assumption is measurable from outside, with no credentials, in a
        day. This study measures it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured, and from where</h2>
      <p className="text-gov-dark leading-relaxed">
        Three public surfaces, all open and keyless, pinned to 28 August 2026. The EMA medicines report, the
        agency&apos;s own XLSX export of centrally authorised products: 2,732 rows, 2,339 human and 393
        veterinary, of which 1,567 are authorised human medicines. The openFDA NDC directory bulk file: 137,521
        product records in the same-day export. And the GLEIF API, queried twice per holder name, once with the
        exact legal-name filter and once fulltext, into a resumable cache.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One surface refused. The SPOR referentials and organisations APIs, the master data services that IDMP
        implementation in Europe runs through, answered HTTP 401 and a login redirect to every anonymous request.
        We record that rather than work around it, and it frames everything else: the join we are about to
        measure is the one actually available to the public, through the XLSX shadow of a database we cannot
        read.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The joins are deliberately conservative. A holder name matches a GLEIF record only if the legal name is
        equal verbatim or after trivial normalisation: whitespace, case, trailing punctuation. No fuzzy matching
        contributes to any headline. A separately reported near-miss class, equal after transliterating an
        ampersand to &quot;and&quot;, isolates one mechanism without inflating the match rate. WHO&apos;s ATC
        index is licensed, so ATC values are validated structurally against the code grammar only, and the index
        is not republished.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the holder join runs on spelling, and loses</h2>
      <p className="text-gov-dark leading-relaxed">
        The EMA register names the organisation holding each marketing authorisation in one free-text column.
        There is no LEI, no SPOR organisation identifier, no company number. For the 392 distinct holder names on
        authorised human medicines, the GLEIF join resolves 102 and fails 290.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">GLEIF join, 392 EMA holder names</th>
              <th className="text-right p-3 font-semibold text-gov-dark border-b border-gov-border">Count</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border">Exact or trivially-normalised legal name match</td><td className="p-3 text-right border-b border-gov-border">102</td></tr>
            <tr><td className="p-3 border-b border-gov-border">Matched LEI in good standing (ISSUED)</td><td className="p-3 text-right border-b border-gov-border">88</td></tr>
            <tr><td className="p-3 border-b border-gov-border">Matched LEI LAPSED / DUPLICATE / RETIRED</td><td className="p-3 text-right border-b border-gov-border">11 / 2 / 1</td></tr>
            <tr><td className="p-3 border-b border-gov-border">No exact match</td><td className="p-3 text-right border-b border-gov-border">290</td></tr>
            <tr><td className="p-3">Of which near miss, ampersand transliteration only</td><td className="p-3 text-right">1</td></tr>
          </tbody>
        </table>
      </div>
      <HBars
        title="392 EMA marketing-authorisation holder names, joined to the Global LEI System"
        note="102 resolve by exact or trivially normalised legal name; 88 of those LEIs are in good standing. 290 names, 74% of the register, do not resolve by exact match at all."
        rows={[
          { label: 'Exact or trivially normalised match', value: 102, display: '102' },
          { label: 'Matched LEI in good standing (ISSUED)', value: 88, display: '88' },
          { label: 'Matched LEI lapsed, duplicate or retired', value: 14, display: '14', color: CHART.amber },
          { label: 'No exact match', value: 290, display: '290', color: CHART.amber },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        The near miss is the mechanism in miniature. AbbVie Deutschland GmbH &amp; Co. KG, as the EMA register
        spells it, has a perfectly good LEI, 549300FI0P3XDOCBXJ78. The join fails because GLEIF stores the legal
        name as &quot;AbbVie Deutschland GmbH And Co. KG&quot;. Same entity, same jurisdiction, one character
        class apart. We nearly filed this as an encoding bug in our own query; verification showed the query was
        fine and the registers genuinely disagree on the spelling of a legal name. Multiply that by every
        umlaut, comma and legal-form abbreviation across 290 misses and you have the state of the join.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The 290 misses are statements about the join, not about the companies. Bayer AG appears in GLEIF as
        Bayer Aktiengesellschaft; the entity exists, the identifier exists, and the free-text bridge between the
        two registers still fails. That distinction is held explicitly in the ontology, where a failed
        observation records no-exact-match-in-register and never asserts that the entity lacks an LEI.
      </p>
      <p className="text-gov-dark leading-relaxed">
        And the joins that succeed are not all safe to build on. Eleven of the 102 matched LEIs are LAPSED,
        including AbbVie Limited, the UK entity; two are DUPLICATE records; one is RETIRED. An organisation
        column that did carry LEIs would surface this immediately. A free-text column hides it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the EU and US registers barely speak</h2>
      <p className="text-gov-dark leading-relaxed">
        The same conservative join between the EMA holder column and the openFDA labeler column resolves 31 of
        379 normalised names, 8.2 per cent. The corporate groups overlap far more than that; the registers
        describe them through different local subsidiaries, different spellings and no shared identifier. A
        regulatory data office reconciling a global product portfolio against both registers is doing, by hand or
        by vendor, exactly the join the public infrastructure does not provide.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: inside each register, precise defects in a clean field</h2>
      <p className="text-gov-dark leading-relaxed">
        Fairness requires saying that both registers are internally disciplined. In 2,732 EMA product numbers
        there is exactly one scheme violation, <code className={cd}>EMEA/H/C005201</code>, missing the slash
        before its six-digit block. Every date-sanity check passed: zero authorisations before decisions, zero
        withdrawals before authorisations, zero status contradictions. Those nulls are results and we report
        them as such.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The ATC column on authorised human medicines: 1,399 full seventh-level codes, 149 partial-level codes,
        17 blanks, four occurrences of the prose string &quot;Not yet assigned&quot; sitting in a code field, and
        one truncated code, <code className={cd}>L01XE3</code> on Vargatef, where valid codes end with two
        digits. Prose in a code slot and a truncated code are exactly the class of defect a scheme-aware shape
        catches at submission time and a spreadsheet column never will.
      </p>
      <p className="text-gov-dark leading-relaxed">
        On the US side, the NDC identifier column is spotless: zero scheme violations in 137,521 records. The
        directory nonetheless lists 1,904 product NDCs more than once, each under distinct structured product
        labeling documents, 1,151 of the duplicate groups sharing the same finished flag, and its labeler column
        holds 1,103 variant groups: 9,771 spellings for 8,343 names. Identifier hygiene and name hygiene are
        different disciplines, and the registers prove it in both directions.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The model: identity as a claim, not a property</h2>
      <p className="text-gov-dark leading-relaxed">
        The Medicinal Product Register Ontology (MPRO) is a small OWL 2 ontology with the same load-bearing
        decision as our other register work: identity and coding are dated, reified assertions by a named
        register. An <code className={cd}>IdentifierAssertion</code> keeps the published value verbatim, prose
        included, with conformance to the scheme&apos;s own declared rules recorded on the assertion. Schemes
        declare their rules as data in a SKOS registry, and a test pins the SHACL shapes to the registry so the
        two cannot drift. A <code className={cd}>CrossRegisterObservation</code> records what two registers say
        about the same entity, and the absence of an exact match is a statement about the join, never about the
        entity.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three SHACL layers turn the validation report into the findings table: zero structural violations, 155
        scheme violations (the one product number plus 154 non-full ATC values), and 1,760 defect-class results
        (4 prose, 2 truncated or malformed, 1,116 name-variant groups, 638 join failures), reconciling exactly
        with the dual-computed counts. The graph is 81,008 triples, emitted as text and parse-verified.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What would move the numbers</h2>
      <p className="text-gov-dark leading-relaxed">
        For EMA, one column: publish an organisation identifier, SPOR ORG-ID or LEI, alongside the holder name
        in the public medicines report. The agency already maintains those identifiers inside OMS; the public
        export simply does not carry them. A second, cheaper change: open an anonymous read surface on RMS and
        OMS, which are reference data services whose entire purpose is to be referenced.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For GLEIF, the ampersand case is worth a data-quality rule: legal names transliterated at registration
        time diverge from the names other registers publish, and the divergence defeats exactly the join the LEI
        exists to enable. For industry data offices, the practical reading is that name-based reconciliation
        against the public registers has a measured ceiling of about a quarter, and any RIM programme assuming
        better is assuming, not measuring.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art, method, and the offer</h2>
      <p className="text-gov-dark leading-relaxed">
        UNICOM, the Horizon 2020 project with 41 partners including 21 medicines agencies, built and piloted
        IDMP infrastructure across Europe and analysed identification data from the inside. EMA and the Heads of
        Medicines Agencies published the Data Quality Framework for EU medicines regulation in December 2023.
        This study claims none of that ground: it is an outside-in measurement of what the public surfaces
        actually join today, reproducible by anyone with a laptop.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Everything is public: the repository at{' '}
        <a href={REPO} className="text-gov-blue hover:underline">github.com/fabio-rovai/medicinal-product-register-ontology</a>{' '}
        holds the pipeline, ontology, shapes, queries, tests and a build report that includes the errors we made,
        one of which became the mechanism finding. The method transfers to any register pair and has run on UK
        health data linkage, EU health dataset catalogues, fund registers, bank registers and the scholarly
        record.
      </p>
      <p className="text-gov-dark leading-relaxed">
        If your organisation maintains regulatory master data against SPOR, IDMP or an internal RIM and wants
        its holder, substance and code columns to survive these shapes, write to{' '}
        <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">fabio@thetesseractacademy.com</a>.
        The first engagement is a fixed-scope review of your dictionaries against external standards, with a
        findings table your data governance board can act on.
      </p>
    </section>
  </div>
);
