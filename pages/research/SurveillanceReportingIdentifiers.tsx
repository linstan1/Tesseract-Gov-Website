import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/biosurveillance-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/surveillance-reporting-identifiers#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/surveillance-reporting-identifiers',
  headline:
    'An open census of UK operational surveillance reporting, and what its identifiers actually denote | Tesseract Academy',
  description:
    "A complete census of every publication held by the Animal and Plant Health Agency, the UK Health Security Agency and the Centre for Environment, Fisheries and Aquaculture Science on GOV.UK, taken on 18 August 2026 from the open Search and Content APIs: 6,897 publications indexed, 2,704 report pages carrying 12,769 published files. Every page carries a persistent content_id, so these outputs are not unidentified. But 10,582 files, 82.9 per cent, share their only persistent identifier with every other file on the same page, with up to 165 under one identifier. Of 8,758 dated report editions, 5,212 carry no report-level identifier, and 242 recurring series carry none on any edition. The UKHSA weekly national flu and COVID-19 surveillance series shows identifier coverage of 99.2 per cent in 2023 to 2024 and 0.7 per cent in 2025 to 2026, which makes the practice a habit rather than a governed rule. A field named unique_reference is non-unique on 204 values once legitimate format variants are excluded.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-18',
  dateModified: '2026-08-18',
  about: { '@type': 'Dataset', name: 'Biosurveillance Register Integrity Ontology, reporting layer', url: REPO },
  keywords:
    'surveillance reporting, GOV.UK content API, persistent identifiers, report level identifiers, APHA, UKHSA, Cefas, citability, register assurance, One Health, national flu surveillance reports, publication versioning, unique_reference, open government data, SHACL, OWL 2 ontology',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/surveillance-reporting-identifiers#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do UK government surveillance reports have persistent identifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pages do. Every one of the 2,704 publication pages censused across APHA, UKHSA and Cefas carries a persistent GOV.UK content_id UUID, and none of the 300 sampled were withdrawn. The reports themselves are a different matter. A report is published as a file attached to a page, and a recurring series accumulates its editions on one page under one unchanging identifier. 10,582 of 12,769 published files, which is 82.9 per cent, share their only persistent identifier with every other file on the same page.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many surveillance reports share a single identifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Up to 165. That is an APHA page on testing protocols for agricultural crops. 253 pages carry more than ten files and 68 carry more than fifty. The UKHSA National flu and COVID-19 surveillance reports publish one page per season, and a single season page carries as many as 154 weekly editions under one content_id.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a report-level identifier on GOV.UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The GOV.UK attachment schema provides a unique_reference field intended to hold a report level identifier, and an isbn field. unique_reference is populated on 4,931 of 12,769 files, which is 38.62 per cent, split APHA 42.4 per cent, UKHSA 38.5 per cent and Cefas 6.3 per cent. isbn is populated on 39 files, which is 0.31 per cent. Where unique_reference is used it is free text, so values such as an OVS note number are typed by hand and carry the field label inside the value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is identifier practice consistent within a single report series?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and this is the most useful finding in the study. The UKHSA National flu and COVID-19 surveillance reports are the weekly national respiratory surveillance output, published as one page per season. Report-level identifier coverage across consecutive seasons runs 50.6 per cent in 2021 to 2022, 93.9 per cent in 2022 to 2023, 99.2 per cent in 2023 to 2024, 73.1 per cent in 2024 to 2025 and 0.7 per cent in 2025 to 2026. Same series, same publishing team, a range of 98.5 percentage points. A practice that varies that much between adjacent periods is an individual habit rather than a governed rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the GOV.UK unique_reference field actually unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. 568 values appear on more than one file. Most of that is legitimate: 362 of those values are format variants, the same report published as a PDF and as a spreadsheet, correctly sharing one reference. Excluding those leaves 129 values that denote different documents on different pages, and 75 that denote different documents on the same page. For example the reference ATIC2796 denotes "Poultry farms with caged systems 2022" on one APHA page and "Poultry statistics 2022" on another.',
      },
    },
  ],
};

export const SurveillanceReportingIdentifiers: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open census of UK operational surveillance reporting, and what its identifiers actually denote
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        A companion study to our census of the Food Standards Agency&apos;s alert register. That one asked whether a hazard could be joined across the One Health boundary. This one asks a prior question, which turns out to be the harder one: whether the report that carries a surveillance finding can be cited at all. On 18 August 2026 we censused every publication held by APHA, UKHSA and Cefas on GOV.UK. Two of our own hypotheses died along the way and both are reported below, because the finding that survived is only credible if the discarded ones are visible.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>6,897 publications indexed; 2,704 report pages fetched carrying <strong>12,769 published files</strong>.</li>
          <li>Every page carries a persistent identifier. These outputs are <em>not</em> unidentified, and our first hypothesis that they were is dead.</li>
          <li>But <strong>10,582 files, 82.9 per cent, share their only persistent identifier with every other file on the same page</strong>. The maximum is 165 under one identifier.</li>
          <li>Of 8,758 dated report editions, <strong>5,212 carry no report-level identifier</strong>. 242 recurring series carry none on any edition, covering 3,271 editions.</li>
          <li>The UKHSA weekly flu and COVID-19 surveillance series ran at <strong>99.2 per cent identifier coverage in 2023 to 2024 and 0.7 per cent in 2025 to 2026</strong>.</li>
          <li>A field named <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">unique_reference</code> is non-unique on 204 values, after excluding 362 legitimate format variants.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two hypotheses we killed before publishing</h2>
      <p className="text-gov-dark leading-relaxed">
        We began expecting to find that UK operational surveillance outputs carry no persistent identifiers, in contrast with the academic literature where every paper has a DOI. That is false. Every one of the 300 publications we sampled across the three organisations carries a persistent GOV.UK <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">content_id</code> UUID, and none had been withdrawn.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We then expected the report-level identifier field to be unused. Also false. GOV.UK provides a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">unique_reference</code> field on attachments and it is populated on 38.62 per cent of files. An early probe of a single page returned zero and pointed the wrong way; the full census corrected it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We report both because a study that only ever confirms its author&apos;s starting position is not evidence of anything. What survived those two deaths is sharper than either would have been.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the identifier resolves, and denotes the container</h2>
      <p className="text-gov-dark leading-relaxed">
        A GOV.UK publication page is a mutable container with a stable identifier. A report is a file attached to that container. A recurring series accumulates its editions on one page, so the page identifier stays constant precisely while the thing it denotes changes.
      </p>
      <p className="text-gov-dark leading-relaxed">
        12,769 published files sit under 2,704 page identifiers. 1,161 pages carry more than one file, 253 carry more than ten, and 68 carry more than fifty. The largest single identifier addresses <strong>165 separate files</strong>. Across the whole corpus, 10,582 files have no identifier that distinguishes them from their siblings.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is that a reference to a specific edition cannot be made durable. You can cite the page that currently carries the March report. You cannot cite the March report.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the recurring series are the least identified</h2>
      <p className="text-gov-dark leading-relaxed">
        8,758 files announce a date or a period in their own title, which is the evidence that they are editions rather than undated annexes. <strong>5,212 of them, 59.5 per cent, carry no report-level identifier</strong>, a worse rate than the corpus as a whole. 242 recurring series carry none on any edition at all.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Organisation</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Published files</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">With a report-level identifier</th>
            </tr>
          </thead>
          <tbody>
            {[['APHA', '3,566', '1,513 (42.4%)'], ['UKHSA', '8,824', '3,394 (38.5%)'], ['Cefas', '379', '24 (6.3%)']].map((r) => (
              <tr key={r[0]} className="border-b border-gov-border/50">{r.map((c, i) => <td key={i} className="p-3 text-gov-dark">{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the practice is a habit, not a rule</h2>
      <p className="text-gov-dark leading-relaxed">
        This is the finding worth acting on, and it is not a technology finding.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The UKHSA National flu and COVID-19 surveillance reports are the weekly national respiratory surveillance output. Each season gets its own page, and the weekly editions accumulate on it. Report-level identifier coverage across consecutive seasons:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Season page</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Weekly editions</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Carrying an identifier</th>
            </tr>
          </thead>
          <tbody>
            {[['2023 to 2024', '126', '125 (99.2%)'], ['2022 to 2023', '147', '138 (93.9%)'], ['2024 to 2025', '130', '95 (73.1%)'], ['2021 to 2022', '154', '78 (50.6%)'], ['2025 to 2026', '151', '1 (0.7%)']].map((r) => (
              <tr key={r[0]} className="border-b border-gov-border/50">
                {r.map((c, i) => <td key={i} className={`p-3 text-gov-dark ${r[0] === '2025 to 2026' ? 'font-semibold' : ''}`}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Same series, same publishing team, adjacent seasons, and a range of 98.5 percentage points. Nothing about the platform changed. A practice that varies this much between consecutive periods of one series is an individual habit rather than a governed rule, and habits leave when the person holding them does.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That reframes the remedy. This is not a case for new infrastructure. The field already exists, the platform already supports it, and the same team was filling it in at 99 per cent two years ago. It is a case for making one existing practice a documented requirement with an owner.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: a field named unique_reference is not unique</h2>
      <p className="text-gov-dark leading-relaxed">
        568 values appear on more than one file. Being fair to the publisher, most of that is legitimate: <strong>362 of those values are format variants</strong>, the same report published as a PDF and as a spreadsheet, correctly sharing one reference. That is good practice, not a defect, and counting it as one would have inflated the finding by nearly three times.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What remains after excluding them is real. <strong>129 values denote different documents on different pages</strong>, and 75 denote different documents on the same page. The reference <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ATIC2796</code> is &quot;Poultry farms with caged systems 2022&quot; on the July 2026 disclosure page and &quot;Poultry statistics 2022&quot; on the June 2026 one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Our own harvest was wrong, and the gate caught it</h2>
      <p className="text-gov-dark leading-relaxed">
        The first pass of this census reported 2,718 pages and 12,798 files. Those numbers were wrong. Paging the Search API by descending publication date overlaps when content is republished during the page-through, and 14 pages came back twice.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We did not notice by reading. We noticed because every headline in this study is computed twice, once set-based in Python and once by SPARQL over the graph, with a build that fails when the two disagree. Python counted 12,798 editions and SPARQL counted 12,769, because the duplicated pages produced colliding identifiers in the graph, which the graph correctly merged. The gap was the bug. Deduplication is by page path, and since no identifier was ever shared between two distinct paths, the duplication was ours and not the publisher&apos;s. Every figure above is post-correction, and the superseded numbers are recorded in the repository so anyone holding them can see why they moved.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We also had to move the SPARQL side of that gate from rdflib to Oxigraph, because rdflib does not finish the reified two-way joins at this scale. And our own validation engine turned out to be unable to run a SPARQL query inside a batch at all, which we filed against ourselves as the second defect this month found by using our own tooling on our own work.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Being fair to the publishers</h2>
      <p className="text-gov-dark leading-relaxed">
        These three organisations publish a very large body of surveillance output openly, without a key, under the Open Government Licence, with a persistent identifier on every page and two machine-readable APIs in front of it. That is better than most comparable bodies anywhere in the world, and none of this study would exist otherwise. Every number here is a measurement of transparency, made possible by transparency.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The defect is not that identifiers are absent. It is that the identifier addresses the page while the citable unit is the edition, and that where a report-level identifier does exist, its application depends on who is doing the publishing that year.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We should also state what we did not do. No attachment was downloaded or parsed. Every finding is computed from publisher metadata alone, so the true rate of report identifiers printed inside documents but absent from metadata is unmeasured and could be higher than what we report. The WOAH animal health API refused our requests, so the cross-tier comparison remains unpopulated on that side.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact and an offer</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, the harvest pipeline, the dual-computation gate and an honest build report listing both dead hypotheses and the harvest correction are published at{' '}
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">
          github.com/fabio-rovai/biosurveillance-ontology<span className="sr-only"> (opens in new tab)</span>
        </a>. Code MIT, ontology and documentation CC BY 4.0, source data Crown copyright under the Open Government Licence.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h3 className="text-lg font-bold text-gov-dark font-serif">If you publish a recurring report series</h3>
        <p className="text-gov-dark leading-relaxed">
          We will run this measurement against your own series and send you the result, at no cost and with no obligation, for the first three organisations that ask. You get the identifier coverage of every edition you have published, period by period, so you can see whether your practice is a rule or a habit, and where it lapsed. It takes us under an hour per series.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Fabio Rovai, The Tesseract Academy.{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark underline">fabio@thetesseractacademy.com</a>
        </p>
      </div>
    </section>
  </article>
);

export default SurveillanceReportingIdentifiers;
