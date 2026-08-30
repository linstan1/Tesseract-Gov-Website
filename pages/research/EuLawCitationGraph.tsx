import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars, Tile } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/regulatory-instrument-register';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/eu-law-citation-graph#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/eu-law-citation-graph',
  headline: 'EU Law Cites More Than Its Own Citation Graph Records | Tesseract Academy',
  description:
    "EUR-Lex publishes a machine-readable citation relation, WORK_CITES_WORK, which is the only structured source of the dependency graph between EU legal instruments. Measured against the instruments actually named in the operative texts of GDPR, NIS2, DORA, MiFID II and the AI Act, it records 63.4 per cent: 78 of 213 citations are absent. The gap is concentrated, with NIS2 at 38.0 per cent and the AI Act at 51.5 per cent against GDPR at 93.8 per cent. NIS2's missing citations sit in Annexes I and II, the scope-defining references that determine which entities the Directive binds. The measurement went through three corrections, each of which produced a more dramatic and wrong answer first.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  about: { '@type': 'Dataset', name: 'Regulatory Instrument Register', url: REPO },
  keywords:
    'EUR-Lex, CELEX, ELI, WORK_CITES_WORK, EU legal citation graph, GDPR, NIS2, DORA, MiFID II, EU AI Act, regulatory dependency graph, legal informatics, compliance tooling, Cellar SPARQL, Commission Decision 2011/833/EU, open data, NIS2 scope, annex references, legal tech, regtech',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/eu-law-citation-graph#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the EU publish a machine-readable citation graph of its legislation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. EUR-Lex embeds a relation called WORK_CITES_WORK inside each instrument’s Common Data Model metadata notice, carrying CELEX, ELI and Official Journal identifiers for each cited work. It is reachable without a key, and the Cellar SPARQL endpoint at publications.europa.eu exposes the same data. It is the only structured source of the dependency graph between EU legal instruments, which means it is what compliance tooling is built on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How complete is the EUR-Lex citation graph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Measured against the instruments actually named in the operative text of five major acts, it records 63.4 per cent. 78 of 213 citations appear in the text and not in the graph. The gap is not evenly spread: GDPR is 93.8 per cent covered, DORA 85.3 per cent and MiFID II 80.9 per cent, while the AI Act sits at 51.5 per cent and NIS2 at 38.0 per cent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the NIS2 gap matter more than the others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because of where it sits. NIS2 defines its own scope through Annexes I and II, which do not describe entities in their own words but point at other legislation, using formulations such as an entity as defined in Article 1, point (2), of Directive 2001/83/EC. Those are the references that determine who the Directive legally binds, and they are the ones concentrated in the missing 62 per cent. A tool that maps regulatory dependencies from the structured metadata rather than the text may not show a company the legislation it needs to read in order to work out whether it is in scope at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you legally reuse EU legislation to build a dataset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, including commercially. EUR-Lex states that its document reuse policy is based on Commission Decision 2011/833/EU and that, unless otherwise specified, legal documents published in EUR-Lex may be re-used for commercial or non-commercial purposes under CC BY 4.0 with attribution. This is fundamentally different from ISO and IEC standards, whose text is sold and which we therefore model by address only. EUR-Lex names one carve-out itself, documents such as the International Accounting Standards, which carry special conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this finding saying that EUR-Lex is wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and the report says so explicitly. The intended scope of WORK_CITES_WORK is not documented publicly in a form this audit could verify, and it may deliberately record only formal citations rather than every instrument named in a text. What is measured is the difference between the two, and the consequence for anyone building tooling on the structured graph holds either way. The graph also contains Treaty provisions, protocols and soft law that the text parser never targets, so the two columns are not counts of comparable objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What errors did this measurement go through before publication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three, each producing a more dramatic and wrong answer than the truth. A year and number swap parsed Regulation (EU) No 1024/2013 as year 1024, minting CELEX identifiers that cannot exist. Footnote titles were counted as citations, because EUR-Lex gives every cited instrument its full official title and those titles name further instruments. And legislative history was counted as citation, since anything named after amending or repealing belongs to another act’s title, which is what the AI Act’s Annex I list is made of. The pre-correction headline was that the graph missed 60 per cent of citations. It misses 36.6 per cent, in two instruments. The corrections are published in full and are covered by regression tests.',
      },
    },
  ],
};

export const EuLawCitationGraph: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        EU Law Cites More Than Its Own Citation Graph Records
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The European Union publishes a machine-readable record of which legal instruments cite which. It is the only structured source of that dependency graph, so it is what compliance tooling is built on. We measured it against what the texts actually say. It records 63 per cent, and the shortfall is concentrated in the one place it hurts most: the annex references that decide who a directive applies to.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>78 of 213 citations are missing</strong> from EUR-Lex's structured <code>WORK_CITES_WORK</code> relation across GDPR, NIS2, DORA, MiFID II and the AI Act.</li>
          <li><strong>The gap is concentrated, not general.</strong> GDPR 93.8 per cent, DORA 85.3 per cent, MiFID II 80.9 per cent, AI Act 51.5 per cent, NIS2 38.0 per cent.</li>
          <li><strong>NIS2's missing references are its scope definitions.</strong> Annexes I and II define who the Directive binds by pointing at other legislation, and those pointers are what is absent.</li>
          <li><strong>EU law is freely reusable, including commercially</strong>, under Commission Decision 2011/833/EU. So unlike our ISO work, this dataset holds the full text rather than addresses.</li>
          <li><strong>We got it wrong three times first.</strong> The pre-correction headline was 60 per cent missing. Read the corrections before quoting the number.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Tile kpi="63.4%" label="of text citations recorded in the structured graph" />
        <Tile kpi="38.0%" label="coverage for NIS2, the worst of the five" />
        <Tile kpi="78" label="citations in the text and not in the graph" />
        <Tile kpi="3" label="corrections before the number was trustworthy" />
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What EUR-Lex publishes, and why it matters</h2>
      <p className="text-gov-dark leading-relaxed">
        Every instrument on EUR-Lex carries a metadata notice in the Common Data Model, and inside it a relation called <code>WORK_CITES_WORK</code>. Each entry gives a cited work with its CELEX number, its European Legislation Identifier and its Official Journal reference. The same data is queryable through the Cellar SPARQL endpoint, openly and without a key.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is genuinely good public infrastructure and it deserves saying so. It is also, as far as we can establish, the only structured source of the dependency graph between EU legal instruments. If you are building a product that tells a company which regulations apply to it and what those regulations depend on, this is what you build on, because writing your own legal text parser is the thing everyone is trying to avoid.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the question is simple and worth asking: does it record what the texts actually cite?
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The result</h2>
      <HBars
        title="Share of instruments named in the text that also appear in the structured citation graph"
        note="Five major EU instruments, measured 30 August 2026. Higher is better."
        max={100}
        rows={[
          { label: 'GDPR', value: 93.8, display: '93.8%, 1 missing', color: CHART.teal },
          { label: 'DORA', value: 85.3, display: '85.3%, 5 missing', color: CHART.teal },
          { label: 'MiFID II', value: 80.9, display: '80.9%, 9 missing', color: CHART.teal },
          { label: 'AI Act', value: 51.5, display: '51.5%, 32 missing', color: CHART.amber },
          { label: 'NIS2', value: 38.0, display: '38.0%, 31 missing', color: CHART.amber },
          { label: 'All five', value: 63.4, display: '63.4%, 78 of 213 missing', color: CHART.ink },
        ]}
        labelWidth="9rem"
      />
      <p className="text-gov-dark leading-relaxed">
        A single aggregate would hide the story here. Three of the five instruments are covered well enough that a tool built on the structured data would behave sensibly. Two are not, and they happen to be the two newest and most commercially urgent.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why the NIS2 gap is the one that matters</h2>
      <p className="text-gov-dark leading-relaxed">
        NIS2 does not describe the organisations it covers. It defines its scope through Annexes I and II by pointing at other legislation, in references of the form <em>an entity as defined in Article 1, point (2), of Directive 2001/83/EC</em>, or <em>as defined in Article 2, points (1), (2) and (3), of Council Directive 91/271/EEC</em>. Following those pointers is how a company determines whether it is an essential entity, an important entity, or out of scope entirely.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Those are precisely the references concentrated in the missing 62 per cent. The consequence is direct and testable. If your compliance tool maps regulatory dependencies from the European Union's structured metadata rather than from the text, it may not show you the legislation you need to read in order to establish whether NIS2 binds you at all.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is a fair question to put to a vendor: did you parse the metadata or the text? The answer is informative either way, and it is the sort of question that is easy to ask and hard to bluff.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three corrections, published because each looked publishable</h2>
      <p className="text-gov-dark leading-relaxed">
        This measurement produced a wrong answer three times, and every wrong answer was more dramatic than the truth. That is the normal direction of error for this kind of work, which is why the corrections are here rather than in a footnote.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>First, a year and number swap.</strong> The pattern matching year-first citations allowed an optional <em>No</em>, so <em>Regulation (EU) No 1024/2013</em> parsed as year 1024, number 2013, minting the identifier <code>31024R2013</code>, which cannot exist. It was caught by taking the supposedly missing identifiers and checking whether they actually resolved on EUR-Lex. They did not.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Second, footnote titles counted as citations.</strong> EUR-Lex gives every cited instrument its full official title in a footnote, and those titles name further instruments. NIS2 does not cite Directive 89/686/EEC. It cites Regulation 1025/2012, whose title happens to mention 89/686/EEC. The first attempt to exclude footnotes used a character class that forbade parentheses and therefore matched almost nothing, because footnote bodies are full of <em>(EU)</em> and <em>(EC)</em>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Third, legislative history counted as citation.</strong> An instrument named after <em>amending</em> or <em>repealing</em> belongs to another act's title, and that is exactly what the AI Act's Annex I list of Union harmonisation legislation is made of. Excluding those fragments moved the AI Act from 35 to 52 per cent while NIS2 did not move at all, which is what established that the NIS2 gap is real and the AI Act's was substantially an artefact of our own parser.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The headline before any correction was that the citation graph missed 60 per cent of citations. It misses 36.6 per cent, in two instruments. The corrections are the reason to believe the second figure, and all three are covered by regression tests in the repository.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we are not saying</h2>
      <p className="text-gov-dark leading-relaxed">
        We are not saying <code>WORK_CITES_WORK</code> is defective. Its intended scope is not documented publicly in a form this audit could verify, and it may deliberately record only formal citations rather than every instrument a text names. What is measured is the difference between the two. The consequence for anyone building on it holds whichever way that question is resolved.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nor are the two columns counts of comparable objects. The structured graph also contains Treaty provisions such as Article 101 of the Treaty on the Functioning of the European Union, protocols, and soft law, between four and thirty entries per instrument, which our parser never targets and which therefore can never match. They do not affect the coverage figure, but they do mean the raw counts should not be compared directly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The licence point, which changes what is possible</h2>
      <p className="text-gov-dark leading-relaxed">
        Our two previous studies in this series, on ISO/IEC 27001 and ISO/IEC 42001, could only model standards by address, never by text, because that text is sold. A SHACL layer proves the resulting graphs contain none of it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        EU law is different. EUR-Lex states that its reuse policy rests on Commission Decision 2011/833/EU and that, unless otherwise specified, legal documents published there may be re-used for commercial or non-commercial purposes under CC BY 4.0 with attribution. So this dataset holds the full text, parses it, and measures it. EUR-Lex names one carve-out itself, documents such as the International Accounting Standards, and those are not harvested here.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The practical upshot is a single graph with two kinds of node under two different rules: legal instruments carrying their text, addressed by CELEX and ELI, and standards carrying only an address. Very few people are building both halves.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository is at <a className="text-gov-blue hover:underline" href={REPO}>github.com/fabio-rovai/regulatory-instrument-register</a>. It contains a resumable harvester keyed by CELEX, the citation audit, the generated report, and offline known-answer tests including regression tests for all three corrections. Adding an instrument is a data edit. Code MIT, report CC BY 4.0, source material CC BY 4.0 under Decision 2011/833/EU.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Companion studies: <a className="text-gov-blue hover:underline" href="https://gov.tesseract.academy/research/iso-42001-assurance-gap">the ISO/IEC 42001 assurance gap</a> and <a className="text-gov-blue hover:underline" href="https://gov.tesseract.academy/research/certification-register-ontology">why nobody can check an ISO 27001 certificate</a>.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark font-serif">Where to start</h2>
        <p className="text-gov-dark leading-relaxed">
          A bounded first engagement is a two week regulatory dependency audit for one instrument that matters to you. We take the text, extract every citation, resolve it, compare against whatever your current tooling believes, and hand back the difference with the method. If the two agree, you have evidence your tooling is sound, which is worth having. If they do not, you have found it before an auditor did.
        </p>
        <p className="text-gov-dark leading-relaxed">
          There is also a free course covering ISO/IEC 42001 alongside the EU AI Act, GDPR, NIS2, DORA and MiFID II on <a className="text-gov-blue hover:underline" href="https://tesseract.academy">tesseract.academy</a>.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Fabio Rovai, <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>. Corrections are published on this page rather than applied silently, as the three above demonstrate.
        </p>
      </div>
    </section>
  </article>
);
