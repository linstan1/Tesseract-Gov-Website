import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars, Tile } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/certification-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/certification-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/certification-register-ontology',
  headline:
    'Nobody Can Check an ISO 27001 Certificate, and the Registers Are Built That Way | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology for management system certification, built so that it reproduces no ISO text at all, with a SHACL layer that proves it. Measured: the global IAF CertSearch register cannot be enumerated by operator policy, so certificate absence is unobservable. 0 of 2,921 UKAS-accredited organisations declare a standard in the public register, and ISO/IEC 27001 does not appear in the UKAS standard taxonomy at all. 21.6 per cent of the UKAS scope vocabulary is duplication. NIST has withdrawn its SP 800-53 to ISO/IEC 27001 mapping, which in its last archived form addressed the superseded 2013 edition. 70 of the 93 Annex A controls have a CSF 2.0 informative reference and 23 do not. Contracts Finder silently ignores keyword filters and silently truncates its OCDS cursor.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  about: { '@type': 'Dataset', name: 'Certification Register Ontology (CARO)', url: REPO },
  keywords:
    'ISO 27001 ontology, ISO 27001 copyright, certification register, accreditation, UKAS, IAF CertSearch, certificate verification, supply chain assurance, NIST CSF 2.0, OLIR, SP 800-53 crosswalk, Annex A controls, SHACL, OWL 2, SKOS, register integrity, ISO 42001, ISO 9001, management system standards, Contracts Finder, OCDS, third party assurance, certificate mill, conformity assessment',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/certification-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you build an ISO 27001 ontology without infringing copyright?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you never store the text. The normative text of ISO/IEC 27001 is sold and is protected expression. Its control addresses are not: A.8.23 is a reference the way a page number is a reference, and reference addresses, document structure, counts and publication metadata are facts. So the vocabulary models standards as addresses and attaches meaning by crosswalk to catalogues that are genuinely free to redistribute, principally the NIST CSF 2.0 informative references and SP 800-53, both United States Government works in the public domain. In this repository the commitment is mechanical rather than editorial: a SHACL layer rejects any graph in which a standard element carries a label, definition, note, comment, description or any literal longer than 24 characters. The layer conforms, so the graph is demonstrably free of protected text, and running the shapes is the audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can you not verify whether a supplier holds an ISO 27001 certificate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the global register is not enumerable by design. IAF CertSearch holds roughly two million accredited certificates from about 2,500 certification bodies, and its published FAQ states that no user may download or view a list of certifications issued by a certification body, and that all verification must be of known entities. A certificate can therefore be confirmed if you already hold its number, and can never be discovered. Absence cannot be observed. That inverts the burden of proof onto the supplier, which is exactly the party with the least incentive to be complete, and it means a buyer cannot audit a supply chain for missing certification at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does UKAS publish which certification bodies are accredited for ISO 27001?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not in its open data. UKAS publishes a public, keyless register of 2,921 accredited organisations, 251 of them certification bodies, and separately publishes a taxonomy of standards. It does not publish the link between them. Zero of the 2,921 organisation records carry a standard term and only 16 carry any scope category. ISO/IEC 27001 does not appear in the 35 term standard taxonomy at all, because that taxonomy holds conformity assessment standards such as ISO/IEC 17021-1 and 17025, which govern the assessor rather than the assessed. The only occurrences of 27001 anywhere in the UKAS taxonomies are two scope terms about personnel certification, each classifying a single record.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a public domain crosswalk between NIST SP 800-53 and ISO 27001?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not any more at its published address. The mapping document returns 404 on csrc.nist.gov, and the Wayback Machine holds a 200 capture from 16 March 2023, so it was published and has since been withdrawn. Its content matters as much as its absence: the archived version maps to ISO/IEC 27001:2013, superseded in 2022 when Annex A was restructured from 114 controls in 14 clauses to 93 controls in 4 themes. The maintained public domain route is now the NIST CSF 2.0 informative references, which carry ISO references as identifiers only and cover 70 of the 93 Annex A controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which ISO 27001 Annex A controls have no NIST CSF 2.0 mapping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Twenty three of the ninety three. They are 5.5, 5.6, 5.11, 5.23, 5.30, 5.32, 5.34, 5.37, 7.6, 7.8, 7.9, 7.11, 8.1, 8.10, 8.11, 8.12, 8.23, 8.24, 8.29, 8.30, 8.31, 8.33 and 8.34. By theme the coverage is organizational 29 of 37, people 8 of 8, physical 10 of 14 and technological 23 of 34. This is a coverage measurement rather than an accusation, since some of those controls may have no counterpart worth asserting. The practical point is narrower and still sharp: an organisation using CSF 2.0 as its bridge to ISO/IEC 27001 has no reference path for about a quarter of Annex A, and nothing in the published material tells it which quarter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there errors in the NIST CSF 2.0 crosswalk to ISO 27001?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five, out of 412 accepted mappings across 106 subcategories. Two are substantive: GV.RM-07 references Mandatory Clause 6.11 and ID.RA-06 references Mandatory Clause 6.13, and neither names a clause that exists in ISO/IEC 27001:2022, whose clause 6 contains 6.1 with 6.1.1 to 6.1.3, plus 6.2 and 6.3. Both are almost certainly 6.1.1 and 6.1.3 with a lost separator, which is exactly the class of error a pattern based validator accepts because both are well formed dotted addresses. The other three are a trailing comma, two identifiers on one line, and a reference reading All applicable controls, which names no resolvable element. Five defects in a large and genuinely useful dataset is a good ratio, and they are reported in that spirit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does asserted absence matter in a compliance register?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the register says this supplier has no certificate and the register cannot be asked whether this supplier has a certificate are completely different statements, and almost every compliance tool collapses them. In this vocabulary the second is a first class status, and a SHACL rule refuses to record a not found outcome against any register that cannot be enumerated, because that outcome is not observable there. NIST models the same distinction well: its crosswalk contains 75 explicit no relationship assertions, which are claims rather than silence, and this repository records them with the same weight as positive mappings.',
      },
    },
  ],
};

export const CertificationRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Nobody Can Check an ISO 27001 Certificate, and the Registers Are Built That Way
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        We set out to build an ISO/IEC 27001 ontology that reproduces no ISO text, which turned out to be the easy part. The hard part was discovering that the assurance chain a buyer would use to check a certification claim is broken at every link, and that two of those breaks are deliberate design decisions rather than oversights. This page reports what we measured, publishes the vocabulary and the evidence, and explains the one modelling idea that makes the difference: a register that cannot be asked a question is not the same thing as a register that answers no.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The copyright problem is not where people think it is.</strong> ISO cannot stop you modelling control addresses, because an address is not expression. The licences that actually bite are the ones everyone reaches for first: the Secure Controls Framework is CC BY-ND and explicitly forbids using AI to generate derivative content from its material, and CIS Controls v8.1 is CC BY-NC-ND. We dropped 1,137 reference lines from those sources rather than argue about them.</li>
          <li><strong>The global certificate register cannot be enumerated.</strong> IAF CertSearch states that no user may view or download a list of certificates issued by a certification body and that all verification must be of known entities. You can confirm a certificate you were handed. You can never discover one, and you can never establish that a supplier has none.</li>
          <li><strong>0 of 2,921 UKAS-accredited organisations declare a standard</strong> in the public register. UKAS publishes the organisations, publishes a vocabulary of standards, and does not publish the relation between them. ISO/IEC 27001 is absent from that vocabulary entirely.</li>
          <li><strong>21.6 per cent of the UKAS scope vocabulary is duplication.</strong> 3,336 terms carry 2,617 distinct names. Sampling exists as 15 separate terms, metals as 14, microbiology as 13.</li>
          <li><strong>The public domain crosswalk has been withdrawn.</strong> NIST's SP 800-53 to ISO/IEC 27001 mapping returns 404, and its last archived form addressed the 2013 edition, superseded in 2022.</li>
          <li><strong>70 of the 93 Annex A controls</strong> have a NIST CSF 2.0 informative reference. Twenty three do not, and nothing published says which.</li>
          <li><strong>The artefact</strong> is an OWL 2 vocabulary with a SKOS registry and three SHACL layers, one of which mechanically proves the graph contains no standard text. Code MIT, ontology CC BY 4.0, no API keys required.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Tile kpi="0 / 2,921" label="UKAS-accredited organisations declaring a standard" />
        <Tile kpi="21.6%" label="of the UKAS scope vocabulary is duplicated terms" />
        <Tile kpi="70 / 93" label="Annex A controls with a CSF 2.0 reference" />
        <Tile kpi="404" label="status of the NIST SP 800-53 to ISO 27001 mapping" />
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The question that starts this work</h2>
      <p className="text-gov-dark leading-relaxed">
        A buyer writes ISO/IEC 27001 into a contract. A supplier says it is certified. Some months later somebody in procurement or in a second line assurance function has to decide whether that sentence is true, and whether it covers the service actually being bought. That is a small, ordinary, entirely reasonable question, and there is a whole industry selling software that implies it can be answered continuously and at scale.
      </p>
      <p className="text-gov-dark leading-relaxed">
        It cannot, and the reasons are structural rather than commercial. We went looking for them because we wanted to build the ontology, and an ontology of a domain whose registers do not work is a different artefact from an ontology of a domain whose registers do.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Break one: the register is not enumerable, on purpose</h2>
      <p className="text-gov-dark leading-relaxed">
        IAF CertSearch is the global database of accredited management system certificates, bringing together the International Accreditation Forum, the accreditation bodies and roughly 2,500 certification bodies, and holding on the order of two million certificates. It is the correct place to check a certificate, and for that job it works.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Its published guidance also states, in terms, that no user is able to download or view a list of certifications issued by a certification body, and that all certification verification must be of known entities. Access sits behind an account, with a fair use policy, one free account per organisation, and programmatic access reserved for paid enterprise subscriptions.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is precise. A certificate can be confirmed if you already hold its number. It can never be discovered. Absence cannot be observed at all. This means a buyer cannot audit a supply chain for suppliers who claim certification and do not hold it, because the only party able to produce the identifier needed to run the check is the party whose claim is in question. Every published warning about certificate mills tells buyers to check the IAF database, and that advice is sound for a certificate in hand and useless for the population level question.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We are not arguing this policy is wrong. There are good commercial and data protection reasons for it. We are arguing that any product built on top of it inherits the limit, and that almost none of them say so.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Break two: UKAS publishes who is accredited, but not what for</h2>
      <p className="text-gov-dark leading-relaxed">
        UKAS is the United Kingdom's national accreditation body, and unlike IAF it publishes a genuinely open register. There is a public WordPress REST endpoint, no key and no account, and we harvested every collection to its declared total: 2,921 accredited organisations, of which 251 are certification bodies, alongside 2,986 schedules, 3,024 schedule instances and two taxonomies.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Credit where it is due, because this is far better than most national registers manage, and our first hypothesis, that UKAS published scopes only as PDFs, was simply wrong and died on contact with the data.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What is missing is the link. Zero of the 2,921 organisation records carry a standard term. Sixteen carry any scope category. None carry a populated custom field. The register publishes the organisations, and separately publishes the vocabulary, and does not publish the relation between the two, so the question the register exists to answer cannot be asked of it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        ISO/IEC 27001 is not in the standard taxonomy at all. Its 35 terms are overwhelmingly conformity assessment standards, the ones that govern assessors rather than the assessed: ISO/IEC 17021-1, 17025, 17020, 17024, 17029, 17043, 17065. That distinction is real and correct, since an accreditation body accredits against ISO/IEC 17021-1 and 27006, not against 27001 itself. It is also exactly the distinction that procurement text collapses when it asks for an ISO 27001 accredited supplier. The only occurrences of 27001 anywhere in the UKAS taxonomies are two scope terms, 27001 Lead Auditors and 27001 Lead Implementers, each classifying one record, and both about certifying people rather than management systems.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We had to introduce a status for this, because neither open nor closed describes it. In the vocabulary it is published but unlinked.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Break three: the controlled vocabularies are not controlled</h2>
      <HBars
        title="UKAS standard taxonomy: 35 terms, 26 distinct standards"
        note="Seven standards are entered under more than one term, differing by edition suffix or by case."
        rows={[
          { label: 'ISO 37001', value: 3, display: '3 terms', color: CHART.amber },
          { label: 'ISO 14066', value: 3, display: '3 terms, all lower case', color: CHART.amber },
          { label: 'ISO 14065', value: 2, display: '2 terms', color: CHART.amber },
          { label: 'ISO/IEC 17029', value: 2, display: '2 terms', color: CHART.amber },
          { label: 'ISO/TS 23406', value: 2, display: '2 terms', color: CHART.amber },
          { label: 'ISO 55001', value: 2, display: '2 terms', color: CHART.amber },
          { label: 'PAS 2031', value: 2, display: '2 terms', color: CHART.amber },
        ]}
        labelWidth="12rem"
      />
      <p className="text-gov-dark leading-relaxed">
        ISO 14066 appears three times and is lower case in all three, where every other term is upper case. Four terms classify nothing at all: 9001, EMAS, ISO 22870 and QSI. The bare number 9001 is also the only term written without a publisher prefix.
      </p>
      <HBars
        title="UKAS scope vocabulary: 3,336 terms, 2,617 distinct names"
        note="356 names are carried by more than one term id. 719 term ids are surplus, which is 21.6 per cent of the vocabulary."
        rows={[
          { label: 'sampling', value: 15, display: '15 separate terms', color: CHART.amber },
          { label: 'metals', value: 14, display: '14', color: CHART.amber },
          { label: 'microbiology', value: 13, display: '13', color: CHART.amber },
          { label: 'pesticides', value: 12, display: '12', color: CHART.amber },
          { label: 'chemical analysis', value: 12, display: '12', color: CHART.amber },
          { label: 'polyaromatic hydrocarbons', value: 11, display: '11', color: CHART.amber },
        ]}
        labelWidth="12rem"
      />
      <p className="text-gov-dark leading-relaxed">
        The operational consequence for anyone building on this register is that scope comparison is unreliable in a way that is invisible from the outside. Two certification bodies whose schedules both mention sampling may be classified under two different term ids, so any grouping, filtering or coverage count computed on term identity is wrong by an unknown margin.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Break four: the public domain crosswalk has been withdrawn, and was already stale</h2>
      <p className="text-gov-dark leading-relaxed">
        If you cannot check the certificate, the next best thing is to reason about the controls directly, and for that you need a crosswalk from a control catalogue you are allowed to redistribute. The obvious one is NIST SP 800-53, a United States Government work in the public domain.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The mapping document from SP 800-53 Revision 5 to ISO/IEC 27001 returns 404 at its published address on csrc.nist.gov. The Wayback Machine holds a 200 capture dated 16 March 2023, so it was published and has since been removed. It survives on an unofficial mirror.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Its content matters as much as its absence, and in a way that cuts both ways. The mapping table is identifier only, which is precisely why it would have been usable in a copyright clean build. But it maps to ISO/IEC 27001:2013, superseded in 2022 when Annex A was restructured from 114 controls in 14 clauses to 93 controls in 4 themes. The single most widely cited public domain bridge between the US federal control catalogue and ISO/IEC 27001 is therefore one full revision out of date and no longer served by its publisher.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What is maintained is the NIST CSF 2.0 informative reference catalogue, which does address ISO/IEC 27001:2022 and does so as identifiers only. It is a good dataset and it is the spine of our crosswalk. It also has limits nobody states.
      </p>
      <HBars
        title="ISO/IEC 27001:2022 Annex A coverage by the NIST CSF 2.0 informative references"
        note="70 of 93 controls referenced. 23 have no reference path."
        max={100}
        rows={[
          { label: 'People (6.x)', value: 100, display: '8 of 8, 100%', color: CHART.teal },
          { label: 'Organizational (5.x)', value: 78.4, display: '29 of 37, 78.4%', color: CHART.teal },
          { label: 'Physical (7.x)', value: 71.4, display: '10 of 14, 71.4%', color: CHART.amber },
          { label: 'Technological (8.x)', value: 67.6, display: '23 of 34, 67.6%', color: CHART.amber },
          { label: 'All Annex A', value: 75.3, display: '70 of 93, 75.3%', color: CHART.ink },
        ]}
        labelWidth="12rem"
      />
      <p className="text-gov-dark leading-relaxed">
        The unreferenced controls are 5.5, 5.6, 5.11, 5.23, 5.30, 5.32, 5.34, 5.37, 7.6, 7.8, 7.9, 7.11, 8.1, 8.10, 8.11, 8.12, 8.23, 8.24, 8.29, 8.30, 8.31, 8.33 and 8.34. Some of those may genuinely have no counterpart worth asserting, and we are not claiming the mapping is deficient. The practitioner point is narrower and still sharp: if CSF 2.0 is your bridge to ISO/IEC 27001, you have no reference path for about a quarter of Annex A, and nothing published tells you which quarter.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We also found five identifier defects in the live crosswalk, out of 412 accepted mappings across 106 subcategories. Two are substantive. GV.RM-07 references Mandatory Clause 6.11 and ID.RA-06 references Mandatory Clause 6.13, and neither names a clause that exists in ISO/IEC 27001:2022, whose clause 6 holds 6.1 with 6.1.1 to 6.1.3, plus 6.2 and 6.3. Both look like 6.1.1 and 6.1.3 with a lost separator, which is the class of error a pattern based validator waves through because both are well formed dotted addresses. The other three are a trailing comma, two identifiers on a single line, and a reference reading All applicable controls, which names no resolvable element and so can never be machine checked.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Five defects in a dataset this size is a good ratio and we report them in that spirit. NIST's OLIR programme also does something most crosswalk publishers do not, which is to record 75 explicit no relationship assertions. That is a claim rather than silence, and it is the right way to publish a mapping.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Break five: the search that would find the requirement ignores you</h2>
      <p className="text-gov-dark leading-relaxed">
        We wanted to measure how often UK public buyers require certification and how often they require it to be accredited. Contracts Finder is the right corpus and it is Open Government Licence v3.0, so we harvested it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Its search silently ignores keyword filters. Searching for ISO 27001 returns 694 notices. Searching for UKAS returns 694. Searching for a string of nonsense returns 694. Searching for nothing at all returns 694, because 694 is the unfiltered total. The OCDS API behaves identically: a keyword parameter produces a byte identical result set to no keyword, and the size parameter is discarded in favour of a forced limit. There is no error and no warning.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A silently ignored filter is worse than a rejected one, because the pipeline that trusts it concludes there are no matching notices while looking at an unfiltered feed. That 694 was very nearly a headline in this write up, and the only thing that killed it was running the same query with a deliberately meaningless keyword.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The cursor truncates silently too. Requesting January to August and paging to exhaustion yields 13,271 releases, the earliest dated 20 April, with the cursor chain ending normally. Requesting January alone yields 3,364 releases, all in January, all of them inside the first request's window and absent from its results. A caller who pages the long window loses at least 3,364 records and cannot detect it from the response.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Both of these are reproducible in a browser in under a minute, and both are being reported to the publisher.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The measurement we could not make</h2>
      <p className="text-gov-dark leading-relaxed">
        The number we wanted was the proportion of public buyers requiring ISO 27001 who also require the certificate to be accredited. We did not get it. Of 13,271 harvested releases, exactly two mention ISO 27001 in the notice title or description, a rate of 0.02 per cent, and neither requires accreditation. Certification requirements live in attached tender documents, not in notice text, so this source cannot answer the question. No figure for it appears anywhere in the repository, and the hypothesis is recorded as dead in the build report alongside four others.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We mention it because a null result is a result, and because the alternative was to quietly compute the number on n equals two and present it as a finding.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Building an ISO 27001 ontology that contains no ISO text</h2>
      <p className="text-gov-dark leading-relaxed">
        The copyright analysis is short. The normative text of ISO/IEC 27001 is sold and is protected expression. Its control addresses are not. A.8.23 is a reference in the way a page number is a reference, and reference addresses, document structure, control counts and publication metadata are facts rather than authorship. Case law has moved on standards incorporated into law, and the Court of Justice held in March 2024 that harmonised standards form part of EU law, but none of that currently reaches ISO/IEC 27001, so the safe design is simply not to store the text.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the vocabulary models standards as addresses and never as text. A standard element carries a notation and an edition link. It carries no title, no definition and no paraphrase, because a systematic paraphrase of ninety three controls is an abridgement of the annex whatever you call it. Meaning is attached by crosswalk to catalogues that are genuinely free to redistribute.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The part worth stealing is that the commitment is mechanical. A SHACL layer rejects any graph in which a standard element carries a label, a definition, a note, a comment, a description, or any literal longer than 24 characters. That layer conforms on every build, which means the absence of protected text is demonstrated rather than asserted. Running the shapes is the audit, and anyone can run them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The licences that actually constrained the work belonged to nobody's standards body. The Secure Controls Framework is CC BY-ND 4.0 and its terms explicitly prohibit using artificial intelligence to generate derivative content from SCF material. CIS Controls v8.1 is CC BY-NC-ND 4.0. Both forbid exactly what a crosswalk repository does. We dropped 1,137 reference lines from those sources and from the CSA Cloud Controls Matrix on ingest, and the spine of ISO plus NIST lost nothing.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The modelling idea, which transfers to any register</h2>
      <p className="text-gov-dark leading-relaxed">
        Registers are usually modelled as though they contain facts. They contain claims, made by someone, on a date, through a particular query. So nothing in this vocabulary is a property of a thing. A crosswalk is an assertion with a source, a target, a relationship type drawn from NIST's own vocabulary, an asserter and a date. An accreditation is an assertion. A certification claim is an assertion, and is carefully not the same class as a certificate.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The load bearing class is the register observation: a dated record of what a register did and did not disclose when it was queried, and how it was queried. That is what lets the graph distinguish the register says this supplier has no certificate from the register cannot be asked whether this supplier has a certificate. Almost every compliance tool on the market collapses those two sentences into one, and the difference between them is the entire subject of this page. Here the second is a first class status, and a SHACL rule enforces that you may not record a not found outcome against a register carrying it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The same discipline applies to our own numbers. Every headline figure is computed twice, once set based in Python and once by SPARQL over the emitted graph, by a script that exits non zero if the two disagree. It earned its place immediately: Annex A control 5.2 and mandatory clause 5.2 are different elements of the same edition, our first URI scheme dropped the part and collapsed them, and nine elements vanished. Python said 93 and SPARQL said 84. Nothing else would have caught it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What this means if you are buying, or if you are a register</h2>
      <p className="text-gov-dark leading-relaxed">
        If you write ISO/IEC 27001 into contracts, three things follow directly. Require the certificate number, the certification body and the accreditation body in the response itself, because without those the claim cannot be checked at all and the register will not help you form the query. Require the Statement of Applicability, or at least the list of excluded controls, because a certificate tells you nothing about which of the ninety three controls the holder declared out of scope. Ask whether the certified scope covers the specific service, in writing, because scope statements are free text and two certificates naming the same standard are not comparable.
      </p>
      <p className="text-gov-dark leading-relaxed">
        If you run a register, the finding is more encouraging than it sounds. UKAS already publishes the organisations and the vocabulary openly. Publishing the relation between them is a data change rather than a policy change, and it would make the UK the only jurisdiction where a buyer can determine from open data which bodies are accredited to certify what.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art</h2>
      <p className="text-gov-dark leading-relaxed">
        NIST's OLIR programme defined the relationship vocabulary reused here rather than reinvented, and is the only body publishing a maintained, public domain, identifier only crosswalk to ISO/IEC 27001. NIST also publishes OSCAL, which is the right machine readable format for control catalogues and which this work aligns to rather than competing with. The reification and evidence pattern comes from our own Chain Control Ontology, and the Specification Conformance Ontology asks a closely related question one layer down, about whether a data exchange specification contradicts itself.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository is at <a className="text-gov-blue hover:underline" href={REPO}>github.com/fabio-rovai/certification-register-ontology</a>. It contains the OWL 2 vocabulary, the SKOS identifier registry in which each scheme declares whether its register can be enumerated at all, three SHACL layers including the copyright layer, resumable harvesters for UKAS and Contracts Finder, the dual computation script, 28 offline known answer tests, and a build report that records every source that could not be obtained, five hypotheses that died, and three bugs we found in our own work. Code MIT, ontology and documentation CC BY 4.0. No API keys are needed to reproduce any of it.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark font-serif">Where to start</h2>
        <p className="text-gov-dark leading-relaxed">
          A bounded first engagement is a two week certification claim audit on one supplier population. We take your supplier list, extract every certification claim, classify each one by whether it is checkable at all, run the checks that can be run, and hand back the register observations with the evidence and the method. The deliverable is a defensible statement of what you can and cannot establish about your own supply chain, which is a different and more useful thing than a dashboard that implies you can establish all of it.
        </p>
        <p className="text-gov-dark leading-relaxed">
          If you run one of the registers described here, the specific rows behind any figure above are available and the pipeline is reproducible end to end. Corrections are published on this page rather than applied silently.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Fabio Rovai, <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
    </section>
  </article>
);
