import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/bank-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/bank-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/bank-register-ontology',
  headline:
    'An open ontology for US bank registers, tested against the FDIC, the Federal Reserve, and the Global LEI System | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology for the entity and regulatory-reporting fabric of US banking, measured against the FDIC BankFind register, the Federal Reserve MDRM dictionary, and the complete GLEIF golden copy of 3,403,760 LEI records. The measurement finds every one of the 2,252 LEI values in the FDIC register truncated to 16 of the 20 characters ISO 17442 requires, discarding both check digits. Sixteen characters puts 6.37 per cent of the global LEI population into a collision, nine FDIC values are ambiguous across up to six unrelated companies, and two resolve to the wrong legal entity, including Associated Bank carrying its parent holding company’s identifier. The MDRM dictionary shows the mirror-image defect: one definition per item code across forms with different consolidation bases, and 58 per cent of item codes with no definition at all. The artefact comprises 1,123,634 triples, reproducible from public data.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Bank Register Ontology (BRO)',
    url: REPO,
  },
  keywords:
    'bank register ontology, FDIC BankFind, LEI validation, ISO 17442, ISO 7064 check digits, GLEIF golden copy, Financial Data Transparency Act, FDTA joint data standards, MDRM, Call Report, FR Y-9C, FFIEC 041, bank entity data, counterparty resolution, holding company hierarchy, SHACL banking, FIBO, FinRegOnt, regulatory reporting data quality, FDIC LEI truncation',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/bank-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the FDIC publish valid Legal Entity Identifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. As of the 16 August 2026 build measured in this study, all 2,252 LEI values in the FDIC BankFind register are exactly 16 characters long, truncated from the 20 characters ISO 17442 requires. The four discarded characters include both ISO 7064 MOD 97-10 check digits, so no value the FDIC publishes can be validated as an LEI, and none matches any record in the Global LEI System as published. JPMorgan Chase Bank appears as 7H6GLXDRUGQFU57R where its actual LEI is 7H6GLXDRUGQFU57RNE97. This is a field-width defect, uniform across the register, and it is repairable by widening the field and re-ingesting the full identifiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a truncated 16-character LEI be recovered by computation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not by arithmetic, and not always by lookup. Two of the four missing characters are entity-identifying, so a 16-character value has 1,296 arithmetically possible completions before the check digits are determined. Measured against the complete GLEIF golden copy of 3,403,760 LEI records, truncating every LEI to 16 characters leaves 33,841 prefixes shared by more than one legal entity, putting 216,965 LEIs, 6.37 per cent of the global population, into a collision. Nine values published by the FDIC fall into exactly that hole: one of them, 894500C8YTS0IB1B, is compatible with a US bank, a Bulgarian agricultural firm, a French property company and three companies in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the FDIC in breach of the Financial Data Transparency Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The FDTA Joint Data Standards final rule (91 FR 38246, effective 1 October 2026) establishes ISO 17442, the LEI, as the legal entity identifier standard for nine federal financial regulators, but its own DATES section states that it changes no reporting requirements without further agency action, and the agency-specific implementing rules expected around mid-2028 have not yet been proposed. Nobody is in breach of anything. This study is a baseline measurement taken before the implementing rules are written, which is exactly when such a measurement is most useful.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an open ontology for US bank registers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bank Register Ontology published at github.com/fabio-rovai/bank-register-ontology is an open OWL 2, SKOS and SHACL artefact for the entity fabric and regulatory-reporting concept fabric of US banking, built against the FDIC BankFind register, the GLEIF golden copy and the Federal Reserve MDRM dictionary. Prior art exists and is credited: FinRegOnt has published the FFIEC 031 Call Report in OWL since 2017, and the Office of Financial Research modelled NIC ownership in OWL 2 in 2018. What none of the prior artefacts do is validate anything: FIBO carries zero SHACL shapes across 295 files and no length or check-digit constraint on its LEI class, so a FIBO graph cannot detect that a 16-character string is not an LEI.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you validate a Legal Entity Identifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An LEI is 20 characters under ISO 17442, ending in two check digits computed under ISO 7064 MOD 97-10. Expand each character to its base-36 numeric value, concatenate, and confirm the resulting integer modulo 97 equals 1. The check is one modulo operation, needs no network call, no licence and no lookup table, and it is the cheapest control in the entire identifier system. Truncating an LEI to 16 characters removes both check digits, so every value the FDIC publishes has had that control amputated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MDRM and what does this study find in it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MDRM is the Federal Reserve’s published dictionary of regulatory reporting items: 87,702 rows, 47,305 item codes, 181 reporting forms, and the element-naming backbone of the FFIEC Call Report XBRL taxonomy. The study finds that its Item Name and Description are pure functions of the four-digit item code, byte for byte identical on every form and period, so the dictionary cannot express that total assets on FR Y-9C (consolidated holding company) has different scope from FFIEC 041 (bank only) or FR Y-14A (projected under stress). 27,445 of 47,305 item codes carry no definition at all, 1,816 are confidential on one form and public on another, and 1,342 identifiers change confidentiality across their own date ranges.',
      },
    },
  ],
};

const MODEL = `graph TD
  I["InsuredInstitution<br/><i>FDIC certificate</i>"] --> A["Identifier assertion<br/><b>reified, not a string</b><br/>recorded value + resolution state"]
  A -.->|resolves to| E["LegalEntity<br/><i>GLEIF record</i>"]
  E --> P["Parent entity<br/><i>GLEIF Level 2<br/>consolidation edge</i>"]
  C["Concept usage<br/><b>form + period scoped</b><br/>confidentiality, item type"] --> M["MDRM concept<br/><i>four-digit item code</i>"]
  C --> F["ReportingForm<br/><i>FR Y-9C, FFIEC 041, ...</i>"]`;

const FINDINGS = [
  {
    f: 'LEI values in the FDIC register truncated to 16 of the 20 characters ISO 17442 requires, discarding both check digits. The length histogram has exactly one bucket',
    n: 'all 2,252 (100%)',
    sev: 'defect',
    means: 'No value the FDIC publishes can be validated in isolation, and none matches the Global LEI System as published. Every downstream join keyed on the LEI fails or guesses.',
  },
  {
    f: 'LEIs across the entire Global LEI System that stop being uniquely recoverable when truncated to 16 characters: 33,841 prefixes shared by more than one legal entity, worst prefix shared by 100',
    n: '216,965 of 3,403,760 (6.37%)',
    sev: 'signal',
    means: 'A census, not a projection. Sixteen characters is demonstrably insufficient as a global entity key, so the FDIC defect is not repairable by arithmetic, only by lookup.',
  },
  {
    f: 'FDIC values that are consequently ambiguous, compatible with more than one real LEI. All were issued under LOU prefix 894500, which allocates sequentially',
    n: '9',
    sev: 'defect',
    means: 'A value published in a US federal banking register denotes up to six unrelated companies across four countries. The community banks that used the cheapest registrar are hit precisely.',
  },
  {
    f: 'Values matching no LEI in the global system at all after case normalisation, and values containing lowercase characters that ISO 17442 forbids',
    n: '16 unresolvable, 12 lowercase',
    sev: 'defect',
    means: 'The 16 refer to nothing. The 12 all resolve once uppercased, which makes them the cheapest fix in this study, and until then any case-sensitive join fails silently.',
  },
  {
    f: 'Institutions whose published identifier resolves to a different legal entity, confirmed against GLEIF’s own Level 2 consolidation records',
    n: '2 confirmed, 15 parent-shaped',
    sev: 'defect',
    means: 'Associated Bank carries the LEI of Associated Banc-Corp, its parent. Consolidated and bank-only reporting then attribute to one legal person whatever trusts the register.',
  },
  {
    f: 'Active insured institutions holding a lapsed, retired or duplicate LEI, including Santander Bank, N.A. GLEIF’s July 2026 report puts 35.0% of all LEIs worldwide in a lapsed state, so 16.5% among FDIC-insured banks is materially better than the global population',
    n: '283',
    sev: 'signal',
    means: 'Lapsed records stop being refreshed, so attributes read from them age silently while the bank trades normally.',
  },
  {
    f: 'MDRM item codes carrying no definition anywhere in the dictionary. Keyed on the eight-character MDRM identifier instead, the figure is 33,281 of 75,264; both denominators are stated because they move the headline',
    n: '27,445 of 47,305 (58.0%)',
    sev: 'gap',
    means: 'More than half the official glossary of US bank regulatory reporting is a label with nothing behind it.',
  },
  {
    f: 'Item codes confidential on one form and public on another; identifiers whose confidentiality changes across their own date ranges',
    n: '1,816 / 1,342',
    sev: 'signal',
    means: 'Disclosure status is scoped by form and period and is not derivable from the item code, which is exactly what a metadata layer keyed on the item code would assume.',
  },
];

const SEV_STYLE: Record<string, string> = {
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

export const BankRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open ontology for US bank registers, tested against the FDIC, the Federal Reserve, and the Global LEI System
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Every figure on this page is from a build of 16 August 2026 and is reproducible from the open repository. We pulled all 27,836 institution records from the FDIC&apos;s BankFind register and measured the length of every LEI in it. The histogram has exactly one bucket: 16 characters, 2,252 times, without a single exception, truncated by four characters from the twenty the standard requires. We then resolved every value against the complete Global LEI System, found nine that denote up to six unrelated companies each, and found two, confirmed by GLEIF&apos;s own consolidation records, that identify the wrong legal entity entirely. This page explains what was measured, why the four missing characters are the four that matter, and what the same census says about the global identifier system itself.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The finding:</strong> all 2,252 LEI values in the FDIC BankFind register are truncated to 16 characters, discarding both ISO 7064 check digits and two entity-identifying characters. JPMorgan Chase Bank appears as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">7H6GLXDRUGQFU57R</code> against a real <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">7H6GLXDRUGQFU57RNE97</code>.</li>
          <li><strong>The census:</strong> truncating all 3,403,760 LEIs in the GLEIF golden copy to 16 characters puts 216,965 of them, 6.37 per cent of the global population, into a collision. Nine FDIC values fall into exactly that hole.</li>
          <li><strong>The case that matters:</strong> Associated Bank, National Association carries an identifier that completes to exactly one real LEI, and that LEI belongs to Associated Banc-Corp, its parent holding company. GLEIF&apos;s Level 2 relationship file confirms the parent-child link independently.</li>
          <li><strong>The mirror image:</strong> the Federal Reserve&apos;s MDRM dictionary attaches one definition to each item code across forms with different consolidation bases, and 58 per cent of item codes carry no definition at all. Scope is never in the identifier, in either fabric.</li>
          <li><strong>The artefact:</strong> an open OWL 2 ontology, SKOS registries and a SHACL governance layer, 1,123,634 triples, code MIT, ontology and shapes CC BY 4.0, reproducible from public data.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this becomes a live problem on 1 October 2026</h2>
      <p className="text-gov-dark leading-relaxed">
        The Financial Data Transparency Act Joint Data Standards final rule (91 FR 38246, published 25 June 2026, effective 1 October 2026) commits nine federal financial regulators, the FDIC and the Federal Reserve among them, to a single answer for how a legal entity is identified. In its codified text, the legal entity identifier is established to be ISO 17442, the LEI.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The LEI is twenty characters. Four identify the issuing operating unit, two are reserved, twelve identify the entity, and the last two are check digits computed under ISO 7064 MOD 97-10. Those last two are the reason the LEI exists in the form it does. They let any system, anywhere, decide whether a value it has just been handed could possibly be real, without asking anyone.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Precision matters about what this is and is not. The FDTA rule binds the agencies, not banks, and its own DATES section says it will not change any reporting requirements without further action by the agencies. The agency-specific rules that will have teeth are due around mid-2028 and, as of today, not one has been proposed. So nobody is in breach of anything. What follows is a baseline measurement taken before the implementing rules are written. That framing matters, because the rule&apos;s preamble expressly preserves the practices that let identifier quality rot: a reporting entity need only report an LEI if it has one, lapsed LEIs may still be reported, and agencies may adopt other standards entirely. Those tolerances are the mechanism by which today&apos;s defects survive into the post-2028 regime unless somebody measures them first.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is also a sharp irony sitting in existing law. Under 12 CFR 1003.4(a)(1)(i), every HMDA Universal Loan Identifier begins with the reporting institution&apos;s LEI and ends with a check digit computed under ISO 7064 MOD 97-10. HMDA cannot function on a truncated LEI. The same federal government requires twenty characters in one collection and publishes sixteen in another.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why the missing four characters are the four that matter</h2>
      <p className="text-gov-dark leading-relaxed">
        Two of the discarded characters are check digits, and two are part of the entity portion. Losing the check digits means the value can no longer be validated in isolation: the cheapest control in the entire identifier system, one modulo operation with no network call, no licence and no lookup table, has been removed from every record. Losing two entity characters means the damage cannot be undone by arithmetic. Given sixteen characters there are thirty-six possibilities for character seventeen and thirty-six for character eighteen, so 1,296 candidates, and only then do the check digits become determined. You cannot repair a truncated LEI by recomputing anything. You can only look it up.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So we looked all of them up, against the entire Global LEI System. We took the GLEIF golden copy published at 08:00 on 16 August 2026, all 3,403,760 LEI records, and truncated every one to sixteen characters to see how often the result still identifies something unique. It collapses 3,403,760 identifiers into 3,220,636 distinct prefixes. 33,841 of those prefixes are shared by more than one legal entity, putting 216,965 LEIs, 6.37 per cent of the entire global population, into a collision. The worst single prefix is shared by one hundred distinct entities. That is a census, not a projection: six per cent of the world&apos;s legal entity identifiers are not uniquely recoverable from sixteen characters.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nine of the FDIC&apos;s own values fall into exactly that hole. Every one was issued under the LOU prefix <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">894500</code>, which allocates sequentially, so consecutive registrations differ only in their final characters. The result is that <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">894500C8YTS0IB1B</code>, as published in a United States federal banking register, denotes any of Waterfall Bank in the United States, a Bulgarian agricultural company, Societe du Passage Agard in France, and three Indian companies. Madison County Bank shares its published identifier with a Canadian bond fund and a Guernsey limited partnership. The community banks that used the cheapest registrar are precisely the ones whose federally published identifier now points at half a dozen unrelated companies.
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
      <HBars
        title="What the FDIC's 16-character LEI field produces, of 2,252 published values"
        note="All 2,252 values are truncated below the 20 characters ISO 17442 requires, so none can be checksum-validated. Nine are compatible with more than one real legal entity; sixteen match nothing in the Global LEI System at all."
        rows={[
          { label: 'Truncated to 16 characters', value: 2252, display: '2,252', color: CHART.amber },
          { label: 'Match nothing after case normalisation', value: 16, display: '16', color: CHART.amber },
          { label: 'Contain forbidden lowercase characters', value: 12, display: '12', color: CHART.amber },
          { label: 'Ambiguous: compatible with several LEIs', value: 9, display: '9', color: CHART.amber },
          { label: 'Resolve to a different legal entity (confirmed)', value: 2, display: '2', color: CHART.amber },
        ]}
      />
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures are computed from the 16 August 2026 FDIC fetch, the GLEIF golden copy published at 08:00 that day, and the MDRM file rebuilt at 04:00 that day. All three are living systems, so a later run produces different totals while the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The one that made us stop</h2>
      <p className="text-gov-dark leading-relaxed">
        Once each value resolves to a real LEI you can ask a better question than whether it is well formed. You can ask whether it identifies the right company. Mostly it does: on 2,173 institutions the resolved name matches the bank. On two, GLEIF&apos;s own consolidation records prove it does not, and one of those two is worth the whole exercise.
      </p>
      <p className="text-gov-dark leading-relaxed">
        FDIC certificate 5296 is <strong>Associated Bank, National Association</strong>, of Green Bay, Wisconsin. Its record carries the LEI value <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300N3CIN473IW</code>, which completes to exactly one real identifier, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300N3CIN473IW5094</code>. That identifier belongs to <strong>Associated Banc-Corp</strong>, of Madison. The holding company. The parent. The bank&apos;s own LEI is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ZF85QS7OXKPBG52R7N18</code>, registered in Green Bay, status ACTIVE. It appears nowhere in the FDIC&apos;s register. GLEIF&apos;s Level 2 relationship file confirms the parent-child link independently, which is how this was detected rather than guessed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Fifteen further institutions resolve to names ending in BANCORP, BANCSHARES or HOLDING, including SoFi Bank resolving to Golden Pacific Bancorp. GLEIF publishes no active consolidation edge for those fifteen, so we do not count them as confirmed. They are the same shape.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is not a clerical curiosity. A bank and its holding company file different reports on different consolidation bases: FR Y-9C is the holding company consolidated, FFIEC 041 is the bank alone. If the identifier meant to distinguish them points at the same entity, then consolidated and unconsolidated positions are attributed to one legal person by any system that trusts the register. The same record shows a second kind of drift. The FDIC reports Associated Bank at $45.5bn with a reporting date of 31 March 2026. Associated Banc-Corp&apos;s acquisition of American National Corporation closed on 1 April 2026, the next day, and the company now reports roughly $52 billion. One record, carrying the parent&apos;s identifier and a balance sheet one acquisition out of date.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One further case needs no name judgement at all. CBI Bank &amp; Trust, an Iowa institution, resolves to Herausgebergemeinschaft Wertpapier-Mitteilungen, a German company. The country code settles it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Fairness requires one more number. 283 active insured institutions hold a lapsed, retired or duplicate LEI, including Santander Bank, N.A. That sounds worse than it is: GLEIF&apos;s July 2026 report puts 35.0 per cent of all LEIs worldwide in a lapsed state, so 16.5 per cent among FDIC-insured banks is materially better than the global population.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where the responsibility actually sits, and where it does not</h2>
      <p className="text-gov-dark leading-relaxed">
        It would be easy and wrong to make this a story about GLEIF failing. GLEIF&apos;s July 2026 data quality report gives an average Total Data Quality Score of 99.99 across 3,390,204 records, and its conformance check on ISO 17442 structure is scoped to what LEI issuers submit. That is the whole point. <strong>GLEIF polices what issuers put in. Nothing in the Global LEI System constrains what a regulator publishes back out.</strong> No check anywhere measures the length of an LEI as republished downstream. That gap is not anyone&apos;s fault in particular, and it is exactly where 2,252 truncated identifiers have been sitting.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Which makes one open GitHub issue worth reading. On 25 January 2022, Pete Rivett filed issue #218 against GLEIF&apos;s own RDF repository, proposing SHACL for constraints rather than OWL restrictions, on the grounds that closed-world constraint execution suits the GLEIF dataset. It has zero comments, four and a half years later. Issue #91, asking for invalid sample data for validation testing, has been open since January 2019. Had either been actioned, a shape enforcing twenty characters and the check digits would have caught this on any ingest.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The same failure, one layer up: the MDRM</h2>
      <p className="text-gov-dark leading-relaxed">
        While the registers were open we pulled the Federal Reserve&apos;s MDRM, the published dictionary of regulatory reporting items: 87,702 rows, 47,305 item codes, 181 reporting forms. It is the closest thing American banking has to an official business glossary, and its mnemonics are the element-naming backbone of the FFIEC Call Report XBRL taxonomy, so whatever is true of it is inherited by every Call Report filed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We expected the classic glossary pathology, one code carrying different definitions on different forms. We were wrong, and the truth is more interesting. <strong>The Item Name and the Description are pure functions of the four-digit item code.</strong> Byte for byte identical, on every form, in every period, with zero divergence across all 47,305 codes. Item code 2170, TOTAL ASSETS, carries one definition across 117 mnemonics and 64 reporting forms.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The dictionary achieves perfect consistency by being unable to represent the difference. Total assets on FR Y-9C is a consolidated holding company figure. On FFIEC 041 it is the bank alone. On FR Y-14A it is a projection under stress. The MDRM says the same sentence for all three, and where it does acknowledge that forms differ it does so in free text inside the definition, under a heading marked COMPARABILITY. 1,278 concepts carry their scope that way, as prose. Meanwhile 27,445 of the 47,305 item codes carry no definition anywhere at all; they are labels. That denominator is the four-digit item code. Keyed instead on the eight-character MDRM identifier, mnemonic plus code, the figure is 33,281 of 75,264, or 44.2 per cent. Both figures are given, because the choice of key moves the headline and a reader is entitled to know which one is in use. Keyed instead on the full eight-character MDRM identifier the figure is 33,281 of 75,264, and both figures are given, because the denominator moves the headline.
      </p>
      <p className="text-gov-dark leading-relaxed">
        And where meaning cannot vary, the facets do. 1,816 item codes are confidential on one form and public on another. More pointedly, 1,342 MDRM identifiers change their confidentiality across their own date ranges. Disclosure status is scoped by form and by period, and is not derivable from the item code, which is exactly what a metadata layer keyed on the item code would assume.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">One problem, twice: what the ontology does about it</h2>
      <p className="text-gov-dark leading-relaxed">
        Put the two halves together and they are the same sentence. In the entity fabric, scope was thrown away when the identifier was truncated, then attached to the wrong level of the corporate hierarchy. In the concept fabric, scope was never encoded, because the dictionary attaches meaning to a code spanning sixty-four forms with different consolidation bases. <strong>Scope is never in the identifier.</strong> Both public registers embody it.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        So the ontology is shaped by that rather than around it. Identifiers are reified assertions, not designators, which is the only way to state that a published value is truncated, ambiguous, or belongs to somebody else. Resolution is data: an assertion records what it resolved to and how many candidates it resolved to. The insured institution and the legal entity are separate classes, which is what makes the Associated Bank case statable rather than merely wrong. On the reporting side, confidentiality and item type hang off a reified usage of a concept on a form in a period, because that is where the source data shows them varying.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The result is 1,123,634 triples gated by SHACL. The shapes are the interesting part: each encodes a defect class found in the sources, so the shape file doubles as the specification of what went wrong. Running pyshacl over the graph rediscovers, from the recorded state alone, all 1,733 truncated values carried by active institutions, 283 lapsed registrations, 9 ambiguities, 3 unresolvable values and 2 wrong-entity assertions. The governance report computes every headline twice, once set-based from source and once through the shipped SPARQL, and refuses to write itself if the two disagree.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art, and the gap</h2>
      <p className="text-gov-dark leading-relaxed">
        {"US bank regulatory data has previously been encoded in OWL. Jürgen Ziemer's FinRegOnt has published the FFIEC 031 Call Report transliterated into OWL, using FIBO namespaces with real filings keyed on FDIC certificate number, since 2017. The Office of Financial Research modelled NIC ownership and control in OWL 2 in 2018 (Fan and Flood, Staff Discussion Paper 18-01), although no artifact was ever released. FIBO itself declares the RSSD identifier, the FDIC certificate number, the bank holding company, the LEI, registry lifecycle states, and the complete 43-code NIC entity-type vocabulary."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        What none of them do is validate anything. Measured against FIBO&apos;s current master: zero SHACL shapes across 295 files, zero <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">xsd:pattern</code> on the LEI class, zero SKOS concept schemes. FIBO asserts ISO 17442 conformance in prose and carries no length or check-digit constraint, so a FIBO graph cannot detect that a sixteen-character string is not an LEI. Neither can FinRegOnt, whose own documentation notes that all joins are simple text label comparisons as in the original source.
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"The specific contributions include the first SHACL validation in this domain, the first SKOS registries carrying scheme rules as data, the first RDF rendering of MDRM and of BankFind, and the first computed disagreement between a US banking register and the Global LEI System. A targeted search of GLEIF's publications, the LEI Regulatory Oversight Committee, FSB progress reports, OFR working papers, arXiv and GitHub reveals no prior report of either the truncation or the collision census."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"Two sources are queued for the next build. The FFIEC's National Information Center bulk download, which holds the Federal Reserve's own view of who owns whom, sits behind a CAPTCHA, and the HMDA panel file, a published crosswalk between LEIs and RSSDs, sits on an edge-blocked host. Both are recorded in the build report."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">None of this is evidence of incompetence</h2>
      <p className="text-gov-dark leading-relaxed">
        A sixteen-character column is an ordinary engineering decision that became wrong when an external standard specified twenty, and it survived because nothing downstream ever failed loudly. That is how identifier defects always survive: they produce values that still look like identifiers. The fixes are correspondingly ordinary. Widen the field to twenty characters. Uppercase on ingest, which repairs twelve records immediately. Validate the check digits at the point of entry, one modulo operation. Record the identifier of the insured institution rather than of whichever entity in the group was to hand.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We are sending these findings to the FDIC&apos;s Chief Data Officer and to GLEIF, because a coverage result about the Global LEI System belongs with the people who run it, and a defect in a federal register belongs with its publisher. The repository, pipeline, shapes and queries are open, so anyone can re-run the census on tomorrow&apos;s golden copy and get tomorrow&apos;s numbers.
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
        The ontology, the SKOS registries, the SHACL suite, the harvesters, the resolution pipeline, the collision census and the query library are public: code under MIT, ontology and shapes under CC BY 4.0. A worked example modelling the Associated Bank case end to end ships in the repository, so you can see exactly how a wrong-entity assertion is stated, validated and queried. The build report lists what could not be obtained as carefully as what could.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          bank-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If your organisation runs on bank entity data, regulatory reporting lineage, counterparty resolution, holding-company hierarchies, or a business glossary that has to reconcile to what the regulator actually publishes, this repository is the open baseline of that discipline. The public version took days against three sources; the private version is the same method applied to the systems inside your firm that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          A typical first engagement is bounded and diagnostic: take your entity and reference data as it is, build the identifier fabric, run the validation layers, and return a graded findings report that separates the impossible from the missing from the merely stale, with the queries attached so your team can re-run it. For the applied version on your own data, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: this is the same register-boundary discipline proved on the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">US fund universe</Link> and on <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">every insurer in Europe</Link>, and the category it belongs to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>.
      </p>
    </section>
  </article>
);

export default BankRegisterOntology;
