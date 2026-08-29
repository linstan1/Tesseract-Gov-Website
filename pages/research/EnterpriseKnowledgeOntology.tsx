import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/enterprise-knowledge-ontology';

const CHART = { teal: '#00897b', amber: '#b45309', gray: '#5c6670', ink: '#313b45' };

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/enterprise-knowledge-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/enterprise-knowledge-ontology',
  headline: 'The Corpus Readiness Index: is your knowledge base fit to feed an AI? | Tesseract Academy',
  description:
    'An open OWL ontology, ten SKOS schemes, a SHACL publish gate and the Corpus Readiness Index, a seven-dimension score for whether a document estate is fit to feed an AI assistant, measured against 69,306 documents across GOV.UK, Kubernetes and Microsoft’s .NET documentation. GOV.UK guidance scores 78.2. Zero of 300 sampled documents carry any maintenance metadata across 133 distinct schema keys. Roughly 55,000 withdrawn pages are still served to any crawler, median 5.87 years since withdrawal. 4,810 documents are owned only by organisations that no longer exist. On the .NET estate the median document was declared verified 9.38 years ago and last changed 1.94 years ago, and 38.3 per cent look current while stale by their publisher’s own verification date. Reproducible from public data.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-29',
  about: {
    '@type': 'Dataset',
    name: 'Enterprise Knowledge Ontology (EKO) and the Corpus Readiness Index',
    url: REPO,
  },
  keywords:
    'knowledge management, knowledge architecture, corpus readiness, RAG data quality, retrieval augmented generation, AI-ready knowledge base, information governance, records management, content lifecycle, OWL ontology, SHACL, SKOS, ISO 30401, knowledge architect, document governance, content decommissioning, enterprise search, knowledge graph',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/enterprise-knowledge-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a document authoritative rather than a working document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not its quality, length, formatting or location. Authority is a property of a maintenance commitment attached to the content: one named accountable owner, a named maintainer, a declared review cadence, a recorded date of last verification, and a declared scope. An excellent, thorough analysis with nobody committed to maintaining it is a working document. A three-line page that a named person re-verifies every quarter is a knowledge asset. Retrieval systems invert this, because they rank on textual signals, so a well-written draft outranks a maintained page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a retrieval system ingest content that was withdrawn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the curated search index and the crawlable surface are different corpora. Measured on GOV.UK on 16 August 2026, a search filtered to withdrawn documents returns exactly zero results across the whole 708,433 document estate, which is correct behaviour. The withdrawn pages nonetheless remain live at their original addresses, are listed in the public sitemap, are permitted by robots.txt and are served in full by the content API. A random sample of 500 sitemap URLs found 6.41 per cent withdrawn, 95 per cent confidence interval 4.26 to 8.56 per cent, of which 25 of 32 were still serving substantive body text, median 5.87 years since withdrawal. Extrapolated, roughly 55,000 withdrawn pages are offered to any crawler that asks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ISO 30401 already cover this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ISO 30401:2018, with Amendment 1 in 2022 and Amendment 2 in 2024, and currently under revision as ISO/DIS 30401, is a management-system standard on the harmonised clause structure of context, leadership, planning, support, operation, performance evaluation and improvement. It specifies what the management system must do and explicitly does not prescribe how to manage knowledge. It contains no testable property of a corpus: no threshold at which a draft becomes authoritative, no required review cadence, no freshness definition. An organisation can hold the certificate and still fail every dimension of the Corpus Readiness Index.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Corpus Readiness Index?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An open measurement instrument with seven dimensions: commitment coverage, freshness, canonicity, decommission hygiene, redundancy, coherence and retrieval fitness. Each is computed from a corpus own metadata and text, with no access to any vendor index and no cooperation from any vendor. The headline is a geometric mean so that one fatal dimension cannot hide behind six healthy ones. Run against 54,222 GOV.UK guidance documents the corpus scores 78.2, with freshness at 36.5 and retrieval fitness at 64.5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a third of a corpus unusable by a retrieval system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the answer is inside an attachment. 16,131 of 54,222 documents, 29.7 per cent, carry under 500 characters of indexable text. The organisation has documented the answer completely, but the retrieval layer sees a title, a paragraph of preamble and a link to a PDF or spreadsheet it treats as an opaque blob. No amount of embedding model tuning addresses this, because it is a content format problem rather than a retrieval problem.',
      },
    },
  ],
};

type BarRow = { label: string; value: number; display: string; color?: string };

const Tile: React.FC<{ kpi: string; label: string }> = ({ kpi, label }) => (
  <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
    <p className="text-3xl font-extrabold text-gov-dark">{kpi}</p>
    <p className="text-sm text-gov-secondary mt-1">{label}</p>
  </div>
);

const HBars: React.FC<{ title: string; note?: string; max?: number; rows: BarRow[] }> = ({ title, note, max, rows }) => {
  const m = max ?? Math.max(...rows.map((r) => r.value));
  return (
    <figure className="rounded-lg border border-gov-border bg-white p-5">
      <figcaption className="text-sm font-semibold text-gov-dark mb-3">{title}</figcaption>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3" title={`${r.label}: ${r.display}`}>
            <span className="w-44 shrink-0 text-right text-xs text-gov-secondary leading-tight">{r.label}</span>
            <div className="flex-1 h-[18px]">
              <div
                className="h-full rounded-r"
                style={{ width: `${Math.max((r.value / m) * 100, 0.5)}%`, backgroundColor: r.color ?? CHART.teal }}
              />
            </div>
            <span className="w-24 shrink-0 text-xs font-semibold text-gov-dark tabular-nums">{r.display}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-gov-secondary mt-3">{note}</p>}
    </figure>
  );
};

const FUNNEL_ROWS: BarRow[] = [
  { label: 'URLs in the public sitemap', value: 864397, display: '864,397', color: CHART.gray },
  { label: 'Documents in the search index', value: 708433, display: '708,433', color: CHART.teal },
  { label: 'Withdrawn but still served', value: 55000, display: '≈55,000', color: CHART.amber },
];

const CRI_ROWS: BarRow[] = [
  { label: 'Commitment coverage', value: 91.1, display: '91.1' },
  { label: 'Freshness', value: 36.5, display: '36.5', color: CHART.amber },
  { label: 'Canonicity', value: 98.2, display: '98.2' },
  { label: 'Decommission hygiene', value: 93.6, display: '93.6' },
  { label: 'Redundancy', value: 96.9, display: '96.9' },
  { label: 'Coherence', value: 94.0, display: '94.0' },
  { label: 'Retrieval fitness', value: 64.5, display: '64.5', color: CHART.amber },
  { label: 'CRI (geometric mean)', value: 78.2, display: '78.2', color: CHART.ink },
];

const ERA_ROWS: BarRow[] = [
  { label: '2010–2015 coalition', value: 13595, display: '13,595' },
  { label: 'Current administration', value: 7946, display: '7,946' },
  { label: 'Churchill 1940–1945', value: 12, display: '12' },
];

const AGE_ROWS: BarRow[] = [
  { label: 'By declared verification', value: 9.38, display: '9.38 years', color: CHART.amber },
  { label: 'By git modification', value: 1.94, display: '1.94 years', color: CHART.teal },
];

const STALE_ROWS: BarRow[] = [
  { label: 'By declared verification', value: 87.8, display: '87.8%', color: CHART.amber },
  { label: 'By git modification', value: 49.6, display: '49.6%', color: CHART.teal },
];

export const EnterpriseKnowledgeOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The Corpus Readiness Index: is your knowledge base fit to feed an AI?
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        {"We examined 69,306 documents across three public estates: the GOV.UK guidance corpus, the Kubernetes documentation and Microsoft's .NET documentation. None of the 54,222 GOV.UK documents records who is accountable for keeping the content accurate, nor when it was last verified. On the one estate that does publish verification dates, the median document was last verified 9.38 years ago and last edited 1.94 years ago, creating an appearance of currency that does not reflect the underlying status. The instrument behind these figures is open, comprising an ontology of what makes content authoritative, a publish gate that enforces it, and the Corpus Readiness Index, a seven-dimension score computed from a corpus's own metadata and text. Every figure below regenerates from committed code."}
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Tile kpi="69,306" label="documents measured across three public estates" />
      <Tile kpi="0 / 300" label="sampled GOV.UK documents with any maintenance field" />
      <Tile kpi="&#8776;55,000" label="withdrawn pages still served to any crawler" />
      <Tile kpi="38.3%" label=".NET docs that look current but are stale by their own verification date" />
    </div>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The artefact:</strong> an OWL vocabulary defining what makes content authoritative, ten SKOS schemes, a SHACL publish gate that exits non-zero in CI, and the Corpus Readiness Index with a written specification and a runnable scanner. CC BY 4.0 and MIT, 25 passing tests.</li>
          <li><strong>The metadata does not exist:</strong> across 300 randomly sampled GOV.UK documents and 133 distinct JSON schema keys, not one field expresses a review date, an owner, a maintainer, an expiry or a verification date.</li>
          <li><strong>The crawlable surface is not the curated one:</strong> GOV.UK search returns zero withdrawn documents. Its public sitemap advertises roughly 55,000 of them, still serving body text, median 5.87 years since withdrawal.</li>
          <li><strong>Ownership decays silently:</strong> 4,810 documents, 8.9 per cent, are owned only by organisations that no longer exist, lapsed by reorganisation rather than by deletion.</li>
          <li><strong>The corpus is older than it looks:</strong> 63.5 per cent unchanged in over two years, and 13,595 live guidance pages still tagged to the 2010 to 2015 coalition government, more than are tagged to the current one.</li>
          <li><strong>A third has nothing to retrieve:</strong> 29.7 per cent carry under 500 characters of indexable text, because the answer is inside an attachment.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
      <p className="text-gov-dark leading-relaxed">
        {"The repository contains four artefacts, released under CC BY 4.0 and MIT. These include an OWL vocabulary that defines authority as a maintenance commitment with its own lifecycle, ensuring that a lapsed commitment is a state a system can detect rather than an absence nobody sees. It also comprises ten SKOS schemes covering asset status, commitment states, review outcomes and decommissioning routes. A SHACL publish gate runs against a knowledge repository in the same manner a linter runs against a codebase, exiting non-zero in CI when a rule is broken. Finally, the suite includes the Corpus Readiness Index, a written specification with a runnable scanner, which produced the study below. The suite carries 25 passing tests, and a client engagement leaves all four artefacts running inside your estate."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The curated index and the crawlable surface are different corpora</h2>
      <p className="text-gov-dark leading-relaxed">
        {"When a page is withdrawn from GOV.UK, it is removed entirely from the search index. We checked: a query filtered to withdrawn documents across the full 708,433 document estate returns exactly zero results. Despite this, the withdrawn pages remain live at their original addresses, are listed in the public sitemap, are permitted by robots.txt, and are served in full by the content API to any request. We sampled 500 URLs at random from the sitemap and fetched every one through the content API."}
      </p>
      <HBars
        title="GOV.UK: the surface a crawler sees against the surface search curates"
        note="Random sample of 499 sitemap URLs: 6.41% withdrawn (95% CI 4.26 to 8.56), 25 of 32 still serving substantive body text, median 5.87 years since withdrawal."
        rows={FUNNEL_ROWS}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <tbody className="divide-y divide-gov-border">
            <tr><td className="p-3">URLs advertised in the public sitemap</td><td className="p-3 text-right font-semibold">864,397</td></tr>
            <tr><td className="p-3">Documents in the curated search index</td><td className="p-3 text-right font-semibold">708,433</td></tr>
            <tr><td className="p-3">Withdrawn documents returned by search</td><td className="p-3 text-right font-semibold">0</td></tr>
            <tr><td className="p-3">Sampled sitemap URLs successfully probed</td><td className="p-3 text-right font-semibold">499</td></tr>
            <tr className="bg-red-50/50"><td className="p-3 font-semibold">Of those, withdrawn</td><td className="p-3 text-right font-bold">32 (6.41%)</td></tr>
            <tr><td className="p-3">Still serving substantive body text</td><td className="p-3 text-right font-semibold">25</td></tr>
            <tr><td className="p-3">Median time since withdrawal</td><td className="p-3 text-right font-semibold">5.87 years</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3 font-semibold">Extrapolated withdrawn pages in the sitemap</td><td className="p-3 text-right font-bold">~55,000</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        {"The 95 per cent confidence interval for the withdrawal rate is 4.26 to 8.56 per cent, suggesting an extrapolation of between roughly 37,000 and 74,000 pages. The oldest withdrawn page in the sample had been withdrawn 12.35 years earlier yet was still being served. A specific example is the page at /guidance/nhs-test-and-trace-how-it-works, which was withdrawn on 24 February 2022 and does not appear in GOV.UK search, while the content API returns 43,671 characters of authoritative-looking public health guidance for it today."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"Retaining withdrawn material in a public record is a deliberate and defensible practice, ensuring that links in old correspondence continue to resolve and the historical record remains intact. The search index was designed for human users, yet the retrieval pipeline is built in the standard manner: it crawls the sitemap, fetches the content endpoint, chunks the data, embeds it and serves the results. Consequently, this approach ingests precisely the content that the curated index excludes. The curated surface and the crawlable surface constitute different corpora, and few teams verify which one their assistant consumes. A corporate estate typically lacks a specific withdrawal workflow, so its equivalent is a 2019 pricing deck in an archive folder that the connector indexes regardless."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">No field records who is accountable</h2>
      <p className="text-gov-dark leading-relaxed">
        {"We then examined the metadata required for an organisation to manage this process. We fetched a random sample of 300 documents in full, observing 133 distinct JSON keys across the response schemas. None of these keys indicated a review date, next-review date, expiry, verification date, content owner, maintainer, steward or retention rule. Zero documents out of the 300 carried any field of that shape."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"These downstream processes all depend on this missing information. Without a declared cadence, there is no baseline against which to measure freshness. Similarly, a stale page cannot be assigned to an owner who has not been named. Finally, a retrieval system cannot be instructed to prefer the maintained source when the data does not specify which one that is."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What authoritative actually means</h2>
      <p className="text-gov-dark leading-relaxed">
        {"This section presents the definition the field requires, stated so it can be argued with."}
      </p>
      <div className="rounded-lg border-l-4 border-gov-blue bg-gov-bg/40 p-6">
        <p className="text-gov-dark leading-relaxed font-medium">
          Authority is not a property of content. It is a property of a maintenance commitment attached to that content: a named accountable owner, a named maintainer, a declared review cadence, a recorded date of last verification, and a declared scope.
        </p>
      </div>
      <p className="text-gov-dark leading-relaxed">
        {"A thorough, carefully written analysis that lacks a designated owner for maintenance is a working document, whereas a three-line page re-verified quarterly by a named individual is a knowledge asset. Because retrieval systems rank results on textual signals, the well-written working document often outranks the maintained page, leading the assistant to present both with the same confidence."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"Commitments are rarely broken; instead, they are transferred to no one. Within the corpus examined, 4,810 documents, representing 8.9 per cent, are owned solely by organisations that no longer exist, while 127 are held by a body that GOV.UK itself records as having ceased to exist. A 1955 NATO status-of-forces agreement remains attributed to the Foreign and Commonwealth Office, an entity that was merged out of existence in 2020. That is why the ontology models a commitment as an object with its own lifecycle rather than as a field on a document, because a commitment that lapses is invisible unless lapsing is a state that something can occupy."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The Corpus Readiness Index, run on 54,222 documents</h2>
      <p className="text-gov-dark leading-relaxed">
        {"The framework comprises seven dimensions, each calculated using the corpus's own metadata and text, requiring neither access to a vendor's index nor cooperation from any vendor. This process was executed against the GOV.UK guidance corpus on 16 August 2026."}
      </p>
      <HBars
        title="Corpus Readiness Index, GOV.UK guidance corpus, 16 August 2026"
        note="Scores out of 100. Amber marks the two dimensions analysed below; the composite is a geometric mean, so one weak dimension pulls the headline down."
        max={100}
        rows={CRI_ROWS}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/40"><tr><th className="p-3 text-left">Dimension</th><th className="p-3 text-right">Score</th><th className="p-3 text-left">The number that matters</th></tr></thead>
          <tbody className="divide-y divide-gov-border">
            <tr><td className="p-3">Commitment coverage</td><td className="p-3 text-right font-semibold">91.1</td><td className="p-3">0 documents carry a cadence or verification date</td></tr>
            <tr className="bg-red-50/50"><td className="p-3 font-semibold">Freshness</td><td className="p-3 text-right font-bold">36.5</td><td className="p-3">34,444 (63.5%) unchanged in over two years</td></tr>
            <tr><td className="p-3">Canonicity</td><td className="p-3 text-right font-semibold">98.2</td><td className="p-3">935 topics have more than one live document</td></tr>
            <tr><td className="p-3">Decommission hygiene</td><td className="p-3 text-right font-semibold">93.6</td><td className="p-3">~55,000 withdrawn pages in the public sitemap</td></tr>
            <tr><td className="p-3">Redundancy</td><td className="p-3 text-right font-semibold">96.9</td><td className="p-3">largest near-duplicate cluster: 109 documents</td></tr>
            <tr><td className="p-3">Coherence</td><td className="p-3 text-right font-semibold">94.0</td><td className="p-3">181 contradiction candidates across 56 topics</td></tr>
            <tr className="bg-red-50/50"><td className="p-3 font-semibold">Retrieval fitness</td><td className="p-3 text-right font-bold">64.5</td><td className="p-3">16,131 (29.7%) under 500 characters of indexable text</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3 font-bold">Corpus Readiness Index</td><td className="p-3 text-right font-bold">78.2</td><td className="p-3">geometric mean</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        {"The headline metric is a geometric mean, ensuring that one fatal dimension cannot be obscured by six healthy ones. So a corpus that is immaculately owned, perfectly deduplicated and entirely locked inside PDF attachments is not 85 per cent useful, and the score reflects this reality."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"A freshness score of 36.5 remains misleading for the corpus because it measures the time since the last modification rather than the time since the last verification, meaning a simple typo correction resets the metric without any factual review. GOV.UK’s own publishing-era metadata reveals the true age of the content: 13,595 live guidance pages remain tagged to the 2010 to 2015 coalition government, a figure exceeding the 7,946 pages tagged to the current administration, while twelve pages attributed to the 1940 to 1945 Churchill national government continue to be served today."}
      </p>
      <HBars
        title="Live guidance pages by tagged government era"
        note="Publishing-era metadata from GOV.UK itself. Twelve pages tagged to the 1940 to 1945 Churchill national government are still served today."
        rows={ERA_ROWS}
      />
      <p className="text-gov-dark leading-relaxed">
        {"Redundancy at 96.9 appears healthy until the largest cluster is examined, which contains 109 near-identical documents, one for each year of an annual guidance series. While annual series are legitimate, the defect lies in the fact that the year appears in the title and nowhere else. Consequently, a retrieval system asked for the current rules selects from 109 candidates based on textual similarity alone. Adding one machine-readable date-range field per document resolves this ambiguity, representing the cheapest fix in the framework."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"Retrieval fitness at 64.5 identifies the specific failure mode that determines the outcome for most AI programmes. A total of 16,131 documents, representing 29.7 per cent of the corpus, contain fewer than 500 characters of indexable text because the substantive answer resides within an attachment. Although the organisation has documented the answer in full, the retrieval layer processes only a title, a brief preamble and an opaque binary object. Adjusting the embedding model does not resolve this issue, as it stems from a content format constraint rather than a retrieval defect."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The second corpus: declared verification against actual change</h2>
      <p className="text-gov-dark leading-relaxed">
        {"The GOV.UK study left the framework's most important claim as an argument rather than a measurement: that time since last modification flatters a corpus. GOV.UK records no verification date, so the two quantities could not be compared. Docs-as-code estates record both. Microsoft Learn's house style defines the ms.date field as the date an article was last reviewed for accuracy, and git records independently when the file actually changed. So we scanned two further corpora on 16 August 2026: the Kubernetes documentation, comprising 1,672 documents, and the .NET documentation, comprising 13,412 documents."}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/40"><tr><th className="p-3 text-left">Corpus</th><th className="p-3 text-right">Declared verification date</th><th className="p-3 text-right">Named owner</th><th className="p-3 text-right">Strict commitment</th></tr></thead>
          <tbody className="divide-y divide-gov-border">
            <tr><td className="p-3">GOV.UK guidance (54,222)</td><td className="p-3 text-right font-semibold">0%</td><td className="p-3 text-right font-semibold">0%</td><td className="p-3 text-right font-bold">0%</td></tr>
            <tr><td className="p-3">kubernetes/website (1,672)</td><td className="p-3 text-right font-semibold">0%</td><td className="p-3 text-right font-semibold">14.0%</td><td className="p-3 text-right font-bold">0%</td></tr>
            <tr><td className="p-3">dotnet/docs (13,412)</td><td className="p-3 text-right font-semibold">98.9%</td><td className="p-3 text-right font-semibold">9.8%</td><td className="p-3 text-right font-bold">9.8%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        {"Kubernetes names individuals but does not date checks, whereas Microsoft dates nearly every check and rarely names anyone. These two estates fail in opposite directions, and neither achieves both objectives across the majority of their respective corpora."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HBars title="Median .NET document age, two measures" rows={AGE_ROWS} max={10} />
        <HBars title="Share stale beyond two years" rows={STALE_ROWS} max={100} />
      </div>
      <p className="text-xs text-gov-secondary">13,267 .NET documents carry both signals; 5,077 of them (38.3%) look current by modification and are stale by declared verification.</p>
      <p className="text-gov-dark leading-relaxed">
        {"Of the 13,267 .NET documents displaying both signals, the two measures diverge significantly. The median document was last declared verified 9.38 years ago, yet was last changed 1.94 years ago. When assessed by declared verification, 87.8 per cent are stale beyond two years, whereas 49.6 per cent are stale when assessed by modification. That leaves 5,077 documents, representing 38.3 per cent of the corpus, appear current based on modification but remain stale according to their publisher's own verification date."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"A natural objection is that this concerns documentation for closed technologies, so we tested it. When the corpus is split, the frozen legacy subtrees, such as WCF and .NET Framework, show a 37.4 point gap between the two staleness measures. The actively developed half shows 40.0 points, with a median of six months since the last change against nearly four years since the last declared verification. The effect is larger where the work is live, indicating that this is not an artefact of abandoned content."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"Frozen content is a valid state, and documentation for closed technology does not require quarterly re-verification. The defect lies in the corpus’s inability to distinguish these cases. A document last verified in 2017 because the technology is closed, one last verified in 2017 because no one has examined it, and one whose date was stamped once and then abandoned are indistinguishable within the data. A declared review cadence and a scope statement serve to separate these categories, which is why both are mandatory fields in the ontology."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art: ISO 30401 and K-AI</h2>
      <p className="text-gov-dark leading-relaxed">
        {"Two adjacent bodies of work sit next to this one, and the distinction is significant. ISO 30401 is the formal standard for knowledge management systems, currently on its 2018 edition with amendments in 2022 and 2024, and is now under revision as ISO/DIS 30401 at the enquiry stage. It is a management-system standard that uses the harmonised clause structure of context, leadership, planning, support, operation, performance evaluation and improvement. It specifies what the management system must do, but it does not prescribe how to manage knowledge. Consequently, ISO 30401 contains no testable requirements concerning a corpus. No clause defines when a draft becomes authoritative, none requires a specific review cadence, and none defines the criteria for a document to be fit for purpose as a grounded answer. An organisation can therefore hold the certificate while failing every dimension in the table above."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"K-AI, a document knowledge platform based in Versailles, published an article on 25 May 2026 arguing that every major AI readiness framework omits unstructured documents. The piece proposes a Corpus Readiness pillar with six axes: in-document anomalies, cross-document conflicts, divergent duplicates, unmarked obsolescence, traceability in the sense of Article 12 of the EU AI Act, and freshness by segment. K-AI published first, and the overlap with what we built is substantial, having been arrived at independently. Their article does not contain a scoring method, formulas, an implementation or a measured study. This work adds that missing element: a published specification, a runnable instrument, and a real study whose every number regenerates from committed code."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The publish gate, and why the negative rules are in SHACL</h2>
      <p className="text-gov-dark leading-relaxed">
        {"The repository includes a SHACL publish gate that executes against the knowledge repository and returns a non-zero exit status upon detecting a violation. When applied to a worked example containing seven specific defects, the tool reports exactly those seven issues. These include a working document marked eligible for the retrieval index, a withdrawn asset retaining a live canonical designation, a superseded page with no named successor, and a retention period lacking a cited legal basis."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"A design note for those building similar systems is that OWL operates on an open-world assumption, meaning the absence of a maintenance commitment in a graph does not imply that no commitment exists, and no OWL reasoner will classify an item as a working document based on absence. Every relevant rule therefore takes the form of a closed-world question, such as whether an owner is recorded, so the ontology defines the necessary conditions and disjointness, while all negative, corpus-scoped judgements are delegated to SHACL. Misplacing this boundary is the most frequent cause of a knowledge governance ontology appearing rigorous while actually enforcing nothing."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"The same discipline extends to measurement. No language model is included in the counting path, ensuring that every number is deterministic and reproducible. Language models serve to adjudicate the candidates identified by the scanner, while the counts themselves are not derived from them."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Four checks to run on your own estate</h2>
      <p className="text-gov-dark leading-relaxed">
        {"These four checks, presented in sequence, require no additional budget."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Establish which corpus your pipeline consumes.</strong> {"Establish whether the retrieval system reads a curated index or crawls a surface, and, where it crawls, identify how it processes content marked as archived, superseded or withdrawn."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Count your unowned content.</strong> {"Count the items whose assigned owner is a reorganised team, a departed employee or an inactive mailbox, rather than simply those with an empty owner field. It is the least costly number on this list to produce."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Count the live documents on one high-traffic topic.</strong> {"Select one high-traffic topic and count the live documents that answer it. More than one live answer is the mechanism by which an assistant contradicts itself."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Give decommissioning its own number.</strong> {"Removal represents the largest single risk reduction available in most estates, and an unmeasured activity does not happen."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Scope and method</h2>
      <p className="text-gov-dark leading-relaxed">
        {"The Corpus Readiness Index assesses whether a corpus is maintained and measurable, a prerequisite for trusting it as an AI input. These scores are intended for longitudinal application within a single estate, while comparisons between organisations require an examination of the underlying counts and the specific adapter employed."}
      </p>
      <p className="text-gov-dark leading-relaxed">
        {"GOV.UK is close to a best case, supported by a dedicated content profession, published standards, an explicit withdrawal workflow and a search index that correctly excludes withdrawn material. An enterprise estate lacking these disciplines should regard these figures as a minimum baseline. Two of the seven findings rely on random samples of 300 and 500 documents, reported with their confidence intervals. The freshness dimension measures modification because verification dates are not recorded anywhere in the estate, a gap that the ontology's mandatory fields address. The repository's build report details the full method, the caveats and the test suite."}
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where this fits</h2>
      <p className="text-gov-dark leading-relaxed">
        This is the same class of defect we have found in every register and estate examined in this series: a letter O typed in place of a zero inside a Legal Entity Identifier in the <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">European insurance register</Link>, checksum-invalid identifiers filed with the SEC across the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">United States fund universe</Link>, and two different misspellings of the word retraction inside the <Link to="/research/scholarly-record-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">scholarly record</Link>. What is not validated is eventually wrong, and what is never measured is never fixed.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h3 className="text-lg font-bold text-gov-dark font-serif">Work with us on this</h3>
        <p className="text-gov-dark leading-relaxed">
          {"When a document estate becomes an AI input, the most efficient approach is to run the scanner against an export and review the seven numbers. We also deliver this as an engagement, comprising the scan, the publish gate that teams pass in CI, and the federated maintainer model that keeps both processes aligned, all running within your estate rather than in our presentations."}
        </p>
        <p className="text-gov-dark leading-relaxed">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark font-medium">The repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
          {' '}contains the ontology, ten SKOS schemes, the SHACL publish gate, the Corpus Readiness Index specification, the full pipeline and 25 passing tests.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Email <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
    </section>
  </article>
);
