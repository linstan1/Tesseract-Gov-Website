import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/scholarly-record-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/scholarly-record-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/scholarly-record-ontology',
  headline:
    'Science has no Shepard&apos;s: measuring how far the registers of retraction disagree | Tesseract Academy',
  description:
    'An open ontology and dataset for the integrity status of the scholarly record, measured across four registers. Crossref and Retraction Watch, both published by Crossref, agree on only 72.42 per cent of retracted DOIs. OpenAlex flags 94.5 per cent of retraction notices as retracted research. Crossref update-type carries 19 uncontrolled values including two misspellings of retraction and a bare integer. Only 19.24 per cent of the retracted record is agreed by all four registers. Reproducible from public data.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Scholarly Record Ontology (SRO)',
    url: REPO,
  },
  keywords:
    'retraction, retraction watch, crossref, openalex, europe pmc, research integrity, scholarly knowledge graph, citation integrity, citator, Shepard&apos;s Citations, OWL ontology, SHACL, SKOS, scholarly metadata, post-retraction citation, paper mills, RELX, Elsevier, LexisNexis, bibliometrics, science of science',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/scholarly-record-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do retraction databases agree with each other?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and the disagreement is large. Measured on 15 and 16 August 2026 from complete harvests, Retraction Watch asserts 60,247 retracted DOIs and Crossref update-to assertions cover 78,907. They agree on 58,449 of a combined 80,705, which is 72.42 per cent. 1,798 papers Retraction Watch calls retracted carry no Crossref retraction assertion, and 20,458 papers Crossref marks retracted are absent from Retraction Watch. Both datasets are published by Crossref, which acquired the Retraction Watch database in September 2023. Adding OpenAlex and Europe PMC, only 19.24 per cent of a 137,243 DOI union is asserted by all four registers, and 43.09 per cent rests on a single register.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does OpenAlex correctly flag retracted papers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It rarely misses a retracted paper it holds, but it systematically flags the wrong objects. A retraction notice is the document announcing a withdrawal, not withdrawn research. OpenAlex flags 94.5 per cent of Retraction Watch notice DOIs as is_retracted, and 95.95 per cent of the notice DOIs Europe PMC independently identifies through its MEDLINE publication types. Crossref does this for 0.91 per cent of the same notices, Retraction Watch for 0.35 per cent and Europe PMC for 0.32 per cent. The clearest single case is the Nature retraction note for the near-ambient superconductivity claim, DOI 10.1038/s41586-023-06774-2, which OpenAlex records as retracted. In the opposite direction the failure is rare: of 20,779 Retraction Watch DOIs probed and found in OpenAlex, only 22, or 0.11 per cent, were present but unflagged.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a citator, and why does science not have one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A citator tells you whether an authority still stands. Frank Shepard began printing gummed Adhesive Annotations in 1873, listing later cases that cited an earlier one with letter codes for overruled, criticised, modified or applied. Legal research has relied on that signal ever since, because citing overturned authority is malpractice. Science has registers of retraction but no equivalent propagation layer: nothing tells a reader that the paper in front of them rests on withdrawn evidence. Reed Elsevier, now RELX, acquired Shepard&apos;s in 1996 and took full ownership in 1998, and also owns Elsevier and Scopus, so one corporate group operates the most rigorous citation-integrity system built for law alongside a scientific record that has no assurance layer at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often are retracted papers still cited after retraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frequently. Across the whole corpus, 291,177 citations to retracted works fall in years after the retraction date, spread over 35,261 distinct works, and that is a lower bound. Examined closely for the 400 most-cited retracted works using OpenCitations, 43,683 of 176,623 citations post-date the retraction, which is 29.28 per cent of all dated citations, across 42,784 distinct citing works. The Wakefield paper in the Lancet, DOI 10.1016/S0140-6736(97)11096-0, retracted in February 2010 for falsification of data, has been cited 1,171 times since its retraction, and none of those citations carries a machine-readable warning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do existing scholarly ontologies model retraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only partially, and they cannot model disagreement. Verified by fetching and searching the published Turtle in August 2026: CiTO defines cito:retracts and cito:isRetractedBy, FaBiO defines fabio:Retraction, fabio:RetractionNotice and fabio:hasRetractionDate, and PSO defines pso:retracted-from-publication. Across CiTO, FaBiO, PSO, PRO, SCoRO and DEO the strings for expression of concern, reinstatement, partial retraction, removal and propagation do not occur at all. More fundamentally these vocabularies model retraction as a property of a work, so a graph can hold only one answer and cannot express that two registers conflict.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Crossref update-type vocabulary controlled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not in practice. A complete harvest of 420,657 corrective records on 15 August 2026 found 19 distinct update-type values. These include retration and retracion, two different misspellings of retraction; Retraction as a case variant distinct from retraction; expression-of-concern hyphenated alongside expression_of_concern; err alongside erratum, corrigendum and corrected; and 68818, a bare integer. The misspelling retration belongs to DOI 10.1016/j.cie.2010.04.003, published by Elsevier, whose title begins with the word RETRACTED, so a human reader knows while a machine filtering on update-type:retraction does not.',
      },
    },
  ],
};

const MODEL = `graph TD
  W["ScholarlyWork<br/>the paper"]
  N["CorrectiveNotice<br/>the announcement"]
  A1["IntegrityAssertion<br/>Crossref, retracted, 2021-03-01"]
  A2["IntegrityAssertion<br/>OpenAlex, retracted, no date"]
  A3["IntegrityAssertion<br/>Retraction Watch, expression of concern"]
  D["RegisterDisagreement<br/>silent omission / status conflict"]
  S["PropagationSignal<br/>severe or caution"]
  C["CitationEvent<br/>dated, post-dates assertion?"]
  A1 --> W
  A2 --> W
  A3 --> W
  A1 -.evidencedByNotice.-> N
  D --> W
  A1 --> D
  C --> W
  C --> S
  S -.signalDerivedFrom.-> A1`;

export const ScholarlyRecordOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Science has no Shepard&apos;s: what happens when the registers of retraction disagree
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Legal research has known since 1873 whether an authority still stands. Scientific research does not. We built an open ontology for the integrity status of the scholarly record and measured it against four public registers of retraction. They disagree with each other about 80 per cent of the time, one of them systematically records the announcement of a retraction as retracted research, and the field&apos;s central metadata vocabulary contains two different misspellings of the word retraction. Every number below is computed from public data and regenerable.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The artefact:</strong> an open OWL ontology, a SKOS status vocabulary and a three-layer SHACL suite for the integrity status of scholarly works, plus a 3.19 million triple instance graph across four registers. CC BY 4.0 and MIT.</li>
          <li><strong>One organisation, two datasets, 27.6 per cent disagreement:</strong> Crossref acquired Retraction Watch in September 2023 and publishes both. They agree on 72.42 per cent of the retracted DOIs between them.</li>
          <li><strong>The category error:</strong> OpenAlex flags 94.5 per cent of retraction notices as retracted research, confirmed independently at 95.95 per cent against Europe PMC. Crossref does this for 0.91 per cent of the same notices, Europe PMC for 0.32 per cent. It is a fixable design defect, not an inherent difficulty.</li>
          <li><strong>Four registers, 19.24 per cent agreement:</strong> of 137,243 DOIs asserted retracted by at least one register, only 26,407 are asserted by all four, and 43.09 per cent rest on a single register&apos;s say-so.</li>
          <li><strong>Nothing propagates:</strong> 43,683 citations to the 400 most-cited retracted works post-date their retraction. The Wakefield paper alone has 1,171, none carrying a machine-readable warning.</li>
          <li><strong>A null result we report rather than bury:</strong> OpenAlex almost never holds a retracted paper unflagged, 22 cases in 20,779 probed. The failure is over-flagging, not under-flagging.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The problem legal publishing solved in 1873</h2>
      <p className="text-gov-dark leading-relaxed">
        In 1873 a salesman for a Chicago legal publisher named Frank Shepard began printing gummed labels. Each listed the later cases that had cited an earlier one, annotated with single-letter codes: this decision overruled, that one criticised, another modified, another simply applied. Lawyers pasted them into the margins of their case reports. The product was called Shepard&apos;s Adhesive Annotations, and it solved a problem that had been quietly poisoning legal practice. You could read a case, find it persuasive, cite it, and never learn that a higher court had gutted it three years earlier.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That idea became the citator. A lawyer today runs a citation through Shepard&apos;s and gets a status signal before reading a word of the opinion. Citing overturned authority is not merely embarrassing, it is malpractice, and the tooling exists precisely so that it cannot happen by accident.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Science has no citator. It has registers instead, and the registers do not agree with each other. We measured how much, using only open sources, and published the ontology, pipeline and data. What follows is not an argument that the scholarly record is in poor shape. It is a set of counts.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">One organisation, two datasets, 27.6 per cent disagreement</h2>
      <p className="text-gov-dark leading-relaxed">
        In September 2023 Crossref acquired the Retraction Watch database from the Center for Scientific Integrity, paying an initial fee of 175,000 US dollars plus 120,000 a year, and made it openly available. Crossref also operates its own mechanism for recording corrections: publishers register an update-to assertion against a DOI, stating that this record retracts, corrects or raises concern about that one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So Crossref now publishes two authoritative statements about which papers have been retracted. They are the same organisation&apos;s data. Here is how far they overlap.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <tbody className="divide-y divide-gov-border">
            <tr><td className="p-3">Asserted retracted by Retraction Watch</td><td className="p-3 text-right font-semibold">60,247</td></tr>
            <tr><td className="p-3">Asserted retracted by Crossref update-to</td><td className="p-3 text-right font-semibold">78,907</td></tr>
            <tr><td className="p-3">Asserted by both</td><td className="p-3 text-right font-semibold">58,449</td></tr>
            <tr><td className="p-3">Asserted by at least one</td><td className="p-3 text-right font-semibold">80,705</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3 font-semibold">Agreement</td><td className="p-3 text-right font-bold">72.42%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Just under 28 per cent of the retracted record is asserted by only one of the two. In one direction, 1,798 papers that Retraction Watch records as retracted carry no retraction assertion in Crossref metadata. In the other, 20,458 papers that Crossref metadata marks as retracted are absent from Retraction Watch entirely.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Neither register is wrong, exactly. They were built for different purposes, one by curators reading notices, the other by publishers depositing metadata. But nothing reconciles them, and nothing in the data model of either can express the sentence &quot;the other register disagrees with me&quot;.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The corrective apparatus recorded as corrupted literature</h2>
      <p className="text-gov-dark leading-relaxed">
        A retraction notice is the document that announces a paper has been withdrawn. It is a valid, standing, citable part of the scholarly record. It is the immune response, not the infection.
      </p>
      <p className="text-gov-dark leading-relaxed">
        OpenAlex, the open scholarly graph that increasingly substitutes for Scopus and Web of Science in research tooling, flags 94.5 per cent of Retraction Watch notice DOIs as retracted. Of the DOIs OpenAlex uniquely considers retracted, 74.5 per cent are notice DOIs. In total 40,430 documents whose only role is to announce a retraction, and which were never themselves retracted papers, are recorded as retracted research.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The clearest example is one of the most scrutinised papers of the decade. In 2023 Nature retracted the claim of near-ambient superconductivity in a nitrogen-doped lutetium hydride. The retraction note is DOI 10.1038/s41586-023-06774-2. OpenAlex records that retraction note as retracted.
      </p>
      <p className="text-gov-dark leading-relaxed">
        It would be unfair to rest that on Retraction Watch&apos;s own notice column, so we added a fourth register that identifies notices independently. Europe PMC carries two distinct MEDLINE publication types: &quot;Retracted Publication&quot; for the withdrawn paper, and &quot;Retraction of Publication&quot; for the notice announcing it. Taking Europe PMC&apos;s 19,803 notice DOIs and asking each register what it says about them:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/40"><tr><th className="p-3 text-left">Register</th><th className="p-3 text-right">Notices it treats as retracted research</th></tr></thead>
          <tbody className="divide-y divide-gov-border">
            <tr className="bg-red-50/50"><td className="p-3 font-semibold">OpenAlex</td><td className="p-3 text-right font-bold">19,001 (95.95%)</td></tr>
            <tr><td className="p-3">Crossref</td><td className="p-3 text-right">181 (0.91%)</td></tr>
            <tr><td className="p-3">Retraction Watch</td><td className="p-3 text-right">70 (0.35%)</td></tr>
            <tr><td className="p-3">Europe PMC itself</td><td className="p-3 text-right">64 (0.32%)</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Two independent measurements, one against Retraction Watch&apos;s notice column at 94.5 per cent and one against Europe PMC&apos;s publication types at 95.95 per cent, agree. This is not a partial defect at the margins. OpenAlex flags essentially every retraction notice it holds as retracted research, which is the signature of a join performed on the wrong key.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three registers keep the categories apart and one does not. That settles the question of whether this is hard. It is not hard. It is a design defect, and a fixable one. The consequence is not academic: anything filtering on the retracted flag, whether an integrity dashboard, a bibliometric study or a language model retrieving evidence, receives the corrective apparatus of science mixed into the corrupted literature with no way to separate them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We should also report a hypothesis that failed. We expected the opposite problem, that OpenAlex would frequently hold a retracted paper without flagging it. It does not. Of 20,779 Retraction Watch DOIs probed and found in OpenAlex, only 22 were unflagged, a rate of 0.11 per cent. Where OpenAlex has the paper it almost always knows. The failure runs the other way.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Adding Europe PMC makes the overall disagreement worse rather than better. Across all four registers, 137,243 DOIs are asserted retracted by at least one. Only 19.24 per cent are asserted by all four, and 43.09 per cent rest on a single register&apos;s say-so.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The vocabulary itself is uncontrolled</h2>
      <p className="text-gov-dark leading-relaxed">
        Crossref&apos;s update-type field is how the scholarly record states what kind of correction has occurred. Across a complete harvest of 420,657 corrective records it takes 19 distinct values. Among them: <code>retration</code>, a misspelling of retraction; <code>retracion</code>, a different misspelling; <code>Retraction</code>, a case variant treated as distinct; <code>expression-of-concern</code> hyphenated alongside <code>expression_of_concern</code>; <code>err</code> alongside <code>erratum</code>, <code>corrigendum</code> and <code>corrected</code>; and <code>68818</code>, which is a bare integer.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Each is checkable in about ten seconds. The misspelling <code>retration</code> belongs to DOI 10.1016/j.cie.2010.04.003, published by Elsevier, and the title of that paper literally begins with the word RETRACTED. A human reading the title knows. A machine filtering on update-type retraction does not, because the status string is misspelled. The bare integer belongs to DOI 10.3892/etm.2024.12720, published by Spandidos.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the same class of defect we have found in every register examined in this series: a letter O typed in place of a zero inside a Legal Entity Identifier in the <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">European insurance register</Link>, checksum-invalid identifiers filed with the SEC in the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">United States fund universe</Link>. Registers are written by people, validation is optional, and what is not validated is eventually wrong.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A related structural defect: in 25.73 per cent of Crossref&apos;s retractive assertions the notice is registered against the same DOI as the paper it retracts. The notice therefore has no independent identity. It cannot be cited, linked to, counted or pointed at. The record contains the fact of a retraction but not a retraction document. If you wanted to build a citator for science, this is a layer you would need and largely do not have.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What a citator would actually flag</h2>
      <p className="text-gov-dark leading-relaxed">
        Everything above concerns whether the record knows a paper is retracted. The citator question is different: does anything warn the people who cite it?
      </p>
      <p className="text-gov-dark leading-relaxed">
        Using citation edges from OpenCitations we populated the propagation layer for the 400 most-cited retracted works and graded every citation against the retraction date. A citation that post-dates the retraction is graded severe. One that pre-dates it is graded caution, because the citing author could not have known, but the reader still cannot tell that the foundation has been withdrawn.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Of 176,623 citations across 391 works, 43,683 post-date the retraction. That is 29.28 per cent of all dated citations, spread across 42,784 distinct citing works, every one of which would carry a warning in any system built the way Shepard&apos;s is built. The works generating the most severe signals are not marginal.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/40"><tr><th className="p-3 text-left">Retracted work</th><th className="p-3 text-left">Retracted</th><th className="p-3 text-right">Citations after</th></tr></thead>
          <tbody className="divide-y divide-gov-border">
            <tr><td className="p-3">PREDIMED Mediterranean diet trial, NEJM</td><td className="p-3">2018</td><td className="p-3 text-right">1,251</td></tr>
            <tr className="bg-gov-bg/30"><td className="p-3 font-semibold">Wakefield, Lancet, retracted for falsification of data</td><td className="p-3">2010</td><td className="p-3 text-right font-bold">1,171</td></tr>
            <tr><td className="p-3">Visfatin, Science</td><td className="p-3">2007</td><td className="p-3 text-right">1,120</td></tr>
            <tr><td className="p-3">Surgisphere COVID-19 paper, NEJM</td><td className="p-3">2020</td><td className="p-3 text-right">833</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The second row is the paper that launched the modern anti-vaccination movement, retracted in February 2010 for falsification of data. It has been cited 1,171 times since, and not one of those citations carries a machine-readable warning, because no layer of the open scholarly record emits one. This is a sample of the most-cited works rather than a census, and the sampling is biased in ways documented in the repository: the largest citation lists were also the ones most likely to fail to download, so the true figure is higher.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why the existing ontologies will not do</h2>
      <p className="text-gov-dark leading-relaxed">
        The natural objection is that this is a data quality problem rather than a modelling problem. We disagree, and the reason is visible in the vocabularies themselves.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The SPAR ontologies are the serious prior art, built largely by Silvio Peroni and colleagues at Bologna. We fetched them and searched them rather than assuming. They do model retraction: CiTO defines cito:retracts and cito:isRetractedBy, FaBiO defines fabio:Retraction, fabio:RetractionNotice and fabio:hasRetractionDate, and PSO defines pso:retracted-from-publication. A practical trap for implementers: CiTO declares its prefix with a hash but defines its terms with a slash, so IRIs built from the prefix declaration do not exist.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What none of them has, verified by searching CiTO, FaBiO, PSO, PRO, SCoRO and DEO, is any of the following: expression of concern, which does not occur as a string in any of the six files; reinstatement, so retraction is modelled as terminal even though registers record works being cleared; partial retraction; removal as distinct from retraction; any way to say that two registers disagree; any way to say that a register holds the record and stays silent; and any notion of a signal propagating to citing works.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The deepest of these is the disagreement gap, and it is structural rather than an oversight. These vocabularies model retraction status as a property of a work. Once you write it that way a graph can hold only one answer, and the fact that sources conflict becomes unrepresentable. You are forced to pick a winner before you have modelled the evidence.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the ontology models</h2>
      <p className="text-gov-dark leading-relaxed">
        The Scholarly Record Ontology starts from a different commitment. <strong>Retraction status is not a property of a work. It is a dated claim, made by a named register, retaining that register&apos;s own words.</strong>
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        <strong>Every claim is reified and attributed.</strong> An IntegrityAssertion names exactly one Register, one work, one status and, where available, one date. Two assertions about the same work may carry different statuses without contradiction at the data layer, because each is attributed to its own source. An unattributed integrity claim is not usable evidence, and the SHACL layer enforces that.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>The register&apos;s own words are kept verbatim.</strong> The raw status string is stored alongside the normalised one. Normalising <code>retration</code> into <code>retracted</code> and discarding the original destroys the evidence that the vocabulary is broken. This is the difference between a graph that cleans data and a graph that can be used to audit the sources it was built from.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Disagreement is first-class.</strong> RegisterDisagreement carries a kind, an asserting register and, critically, a silent register. Silence is a position: a graph that does not flag a retracted work will be queried as though the work were sound. Nothing in the existing scholarly vocabularies can express that.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Notices are distinguished from the works they correct.</strong> CorrectiveNotice is a distinct class, and where a publisher registers a correction against the original DOI the assertion is marked self-referential rather than silently collapsed. This is precisely the distinction whose absence produces the OpenAlex defect measured above.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Signals propagate, and carry provenance.</strong> A PropagationSignal grades a citing work by the status of what it cites and by whether the citation post-dates the assertion, and must name the assertion it derives from. A signal that cannot be traced to a named assertion must not be shown to a reader.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The same discipline was proved first on the United States fund universe in our <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link> and then on European insurers in the <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Insurance Register Ontology</Link>. The scholarly record is its third instantiation, which is itself the finding: reified, source-attributed identifier and status assertions transfer across entirely unrelated register fabrics without redesign.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">A methodological lesson worth stating</h2>
      <p className="text-gov-dark leading-relaxed">
        Partway through harvesting, OpenAlex began returning HTTP 429 with the message &quot;Insufficient budget. This request costs $0.0001 but you only have $0 remaining.&quot; OpenAlex now meters its API at roughly 1,000 requests, or ten cents, per day free. The harvest stopped at 107,200 of 134,094 records and was completed the following day. That is worth knowing on its own, because the argument that OpenAlex is the open replacement for Scopus is weaker when the open replacement is metered.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The interruption produced the most instructive lesson of the exercise. While the data was partial we noted that cursor order follows OpenAlex work ID, which correlates with when records were created, so the subset was not a random sample and its percentages should be treated as indicative. That turned out to matter enormously. The final 26,913 records were 56.6 per cent Retraction Watch notice DOIs and 33.2 per cent Europe PMC notice DOIs, against only 5.1 per cent actual retracted papers. The tail of the harvest was almost entirely notices.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the notice-conflation figure moved from a provisional 64.2 per cent to a complete 94.5 per cent, and the Europe PMC control from 51.15 per cent to 95.95 per cent. Publishing the partial figure without the caveat would have understated the defect by a third. A partial harvest is not a small version of the whole: where the sort key correlates with how records were created, the missing slice can be exactly the slice that matters.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The corporate symmetry</h2>
      <p className="text-gov-dark leading-relaxed">
        There is a fact about the ownership of all this worth stating plainly, because it makes the gap concrete rather than abstract. Reed Elsevier acquired Shepard&apos;s in 1996 and took full ownership in 1998. Reed Elsevier is now RELX, which also owns Elsevier, the largest publisher of scientific literature, and Scopus, one of the two dominant citation databases. Its LexisNexis Risk Solutions division sells entity resolution, the discipline of deciding when two records refer to the same real-world thing, to banks and governments.
      </p>
      <p className="text-gov-dark leading-relaxed">
        RELX has already taken the citator idea further than most people outside legal publishing realise. Its 2024 Annual Report describes Lexis+ AI as using &quot;the LexisNexis proprietary Retrieval Augmented Generation platform, integrated with advanced Shepard&apos;s Knowledge Graph&quot;, so that customers can harness Shepard&apos;s case law relationship information for &quot;authoritative, complete, and final AI-generated responses&quot;.
      </p>
      <p className="text-gov-dark leading-relaxed">
        RELX is more explicit still in its 2025 Annual Report, where a diagram of how the group adds value with generative AI places &quot;Knowledge Graphs&quot; in the grounding layer, along an axis labelled &quot;Decreasing hallucination, irrelevant content, non-attributable content (lack of citations)&quot;. The company&apos;s own published position is that knowledge graphs and linking are the mechanism by which attributability is restored. The same report is the only place where Elsevier&apos;s product language names the technique directly, describing a multi-model approach adapted for specific domains &quot;through hybrid search, knowledge graphs, ontologies, large language model and human expertise-based evaluations&quot;.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Set against that, one absence is striking. The word &quot;retract&quot; does not appear anywhere in the 252 pages of the RELX 2025 Annual Report, nor anywhere in its Form 20-F for the same year. Research integrity is disclosed as a formal risk factor, and the detection tooling is described in some detail, but no retraction count, no paper-mill interception figure and no research-integrity metric is published. For a group whose case for its AI products rests on the trustworthiness of its content, that is a conspicuous gap in the reporting rather than in the work.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Read that with the scholarly record in mind. RELX has concluded that grounding a language model on legal content is not sufficient on its own, and that the model must also be wired into a knowledge graph of citation treatment so that it does not confidently cite authority that has been overturned. That is exactly the architecture the scientific record lacks, built by the same company, and shipped as a product. If citation-treatment grounding is necessary to stop a legal AI relying on overturned authority, it is necessary for the same reason to stop a scientific AI relying on retracted findings. The difference is not technical. It is that one market pays for the assurance and the other has never been asked to.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is not hypocrisy and we are not accusing anyone of it. In law the citator is the product, because clients pay for the assurance that authority still stands. In science the citation database is the product, and the assurance layer has never been the thing anyone was buying. It is also worth recording that on the propagation measure Elsevier performs well: 98.9 per cent of Elsevier-published retracted papers carry a corresponding Crossref assertion. The worst performers in the league table are elsewhere, including publishers with zero per cent coverage across hundreds of retracted papers. The problem is not that any one publisher is negligent. It is that no layer above them reconciles anything, and no vocabulary in use can describe the reconciliation.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Related work</h2>
      <p className="text-gov-dark leading-relaxed">
        Retraction has a real quantitative literature and this study sits alongside it rather than ahead of it. Jonas Oppenlaender&apos;s <em>How Ten Publishers Retract Research</em> (arXiv:2602.19197, February 2026) analyses 46,087 retractions in the Retraction Watch database and reports retraction rates per publisher: Hindawi at 320.02 per 10,000 published, IEEE at 17.70, Springer Nature at 9.06 and Elsevier lowest of the ten at 3.97. That work measures who retracts. This one measures whether the registers agree that a retraction happened at all, and whether anything propagates the result, which is a different question about the same corpus.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One finding of Oppenlaender&apos;s bears directly on the ontology. Of 98 articles reinstated following retraction, 86 were published in Elsevier journals. Reinstatement is therefore a real state that occurs at measurable scale, and Retraction Watch records 160 such cases. It is also a state that no existing scholarly vocabulary can express: the string does not occur in CiTO, FaBiO, PSO, PRO, SCoRO or DEO. A record that models retraction as terminal will continue to carry a warning against work that has been cleared, which is a reputational harm to named authors rather than a modelling inconvenience.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A note on reading Elsevier&apos;s low retraction rate. It is equally consistent with a cleaner corpus and with a more conservative retraction practice, and the pairing with the highest reinstatement share is what makes it interesting rather than settled. Our own propagation measurement is the narrower and more defensible claim: where Elsevier does retract, 98.9 per cent of those papers carry a corresponding Crossref assertion.
      </p>

      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we are not claiming</h2>
      <p className="text-gov-dark leading-relaxed">
        We cannot compare any of this against Scopus or Web of Science, because both are licensed products with no open API for the purpose. That limitation is itself part of the point: the open record is what most downstream tooling actually consumes, and increasingly what language models are trained and grounded on.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The propagation layer is a deliberate sample of the 400 most-cited retracted works, not a census, and its selection is biased. The licence under which the Retraction Watch data is redistributed is not stated on Crossref&apos;s documentation page, so the raw data is not committed to the repository, only the code that fetches it. Every caveat of this kind is written up in the repository&apos;s build report rather than left for a reader to discover.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What would fix it</h2>
      <p className="text-gov-dark leading-relaxed">
        A citator for science is not a research problem. Every component already exists. Retraction Watch curates. Crossref receives publisher assertions. Europe PMC keeps the categories straight. OpenAlex and OpenCitations hold the citation edges. What is missing is a layer that treats these as competing sources rather than as a single truth, records where they conflict, and propagates a graded signal to the works that cite them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That layer needs a vocabulary that can express disagreement. That is what this ontology is for, and it is open, with the pipeline and the graph.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h3 className="text-lg font-bold text-gov-dark font-serif">Work with us on this</h3>
        <p className="text-gov-dark leading-relaxed">
          If you work on research integrity, scholarly infrastructure, publishing metadata or knowledge graphs and want the underlying data, a walkthrough, or this analysis run against your own corpus, we would like to hear from you. If a number here is wrong, tell us with the DOI and we will recheck it against source and credit the correction.
        </p>
        <p className="text-gov-dark leading-relaxed">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark font-medium">The repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
          {' '}contains the ontology, the SHACL shapes, six worked SPARQL queries, the full pipeline and a build report listing every caveat.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Email <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
    </section>
  </article>
);
