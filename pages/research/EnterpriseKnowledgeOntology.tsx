import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/enterprise-knowledge-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/enterprise-knowledge-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/enterprise-knowledge-ontology',
  headline:
    'Your search index and your AI pipeline are reading different corpora | Tesseract Academy',
  description:
    'An open ontology, a SHACL publish gate and the Corpus Readiness Index, measured against 54,222 GOV.UK guidance documents. Zero of 300 sampled documents carry any field expressing who maintains them or when it was last checked, across 133 distinct schema keys. The search index returns zero withdrawn documents while the public sitemap advertises roughly 55,000 of them, still serving body text, median 5.87 years since withdrawal. 4,810 documents are owned only by organisations that no longer exist. Reproducible from public data.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
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
        Your search index and your AI pipeline are reading different corpora
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Every organisation is wiring its documents into an AI assistant, and almost none can answer the question an engineer should ask first: is the knowledge any good? The market answers with adjectives. We built an open ontology, a publish gate that enforces it and a measurement instrument that does not, then ran the instrument against 54,222 real documents. Every number below is computed from public data and regenerable from committed code.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The artefact:</strong> an OWL vocabulary defining what makes content authoritative, ten SKOS schemes, a SHACL publish gate that exits non-zero in CI, and the Corpus Readiness Index with a written specification and a runnable scanner. CC BY 4.0 and MIT.</li>
          <li><strong>The metadata does not exist:</strong> across 300 randomly sampled documents and 133 distinct JSON schema keys, not one field expresses a review date, an owner, a maintainer, an expiry or a verification date. Zero out of 300.</li>
          <li><strong>The crawlable surface is not the curated one:</strong> GOV.UK search returns zero withdrawn documents. Its public sitemap advertises roughly 55,000 of them, still serving body text, median 5.87 years since withdrawal.</li>
          <li><strong>Ownership decays silently:</strong> 4,810 documents, 8.9 per cent, are owned only by organisations that no longer exist. Nobody deleted the owner. The department was reorganised.</li>
          <li><strong>The corpus is older than it looks:</strong> 63.5 per cent unchanged in over two years. 13,595 live guidance pages are still tagged to the 2010 to 2015 coalition government, more than are tagged to the current one.</li>
          <li><strong>A third has nothing to retrieve:</strong> 29.7 per cent carry under 500 characters of indexable text, because the answer is inside an attachment.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">GOV.UK does withdrawal properly, and it does not help</h2>
      <p className="text-gov-dark leading-relaxed">
        When a page is withdrawn from GOV.UK it comes out of the search index completely. We checked: a query filtered to withdrawn documents across the entire 708,433 document estate returns exactly zero results. That is better content discipline than almost any organisation manages on its own intranet.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The withdrawn pages are still there. They sit at their original addresses. They are listed in the public sitemap. The robots.txt file explicitly permits crawling them. And the content API serves them in full, body text intact, to anyone who asks.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We sampled 500 URLs at random from GOV.UK&apos;s own sitemap and fetched every one through the content API.
      </p>
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
        The 95 per cent confidence interval on the withdrawal rate is 4.26 to 8.56 per cent, which puts the extrapolation between roughly 37,000 and 74,000 pages. The oldest withdrawn page in the sample had been withdrawn 12.35 years ago and was still being served.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One concrete case. The page at <code>/guidance/nhs-test-and-trace-how-it-works</code> was withdrawn on 24 February 2022. It does not appear in GOV.UK search. The content API returns 43,671 characters of authoritative-looking public health guidance for it today.
      </p>
      <p className="text-gov-dark leading-relaxed">
        None of this is a criticism of GOV.UK. Keeping withdrawn material addressable is deliberate and defensible for a public record: links in old correspondence still resolve, and the historical record stays intact. The problem appears when a second consumer arrives. The search index was designed for people. A retrieval pipeline is not people. It is built the obvious way, which is to crawl the sitemap, fetch the content endpoint, chunk, embed and serve. Built that way it ingests precisely the content the curated index was careful to exclude.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the defect is not in the content governance, which is working. The defect is that the curated surface and the crawlable surface are different corpora, and nobody checks which one the AI is eating. If that is true here, consider a corporate estate with no withdrawal workflow at all, where the equivalent of a withdrawn page is a 2019 pricing deck that somebody moved to an archive folder the connector indexes anyway.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Nobody records who is on the hook</h2>
      <p className="text-gov-dark leading-relaxed">
        We went looking for the metadata that would let an organisation manage this properly. We sampled 300 documents at random and fetched each one in full. Across all of them we observed 133 distinct JSON keys in the response schemas.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Not one of those keys expresses a review date, a next-review date, an expiry, a verification date, a content owner, a maintainer, a steward, or a retention rule. Zero documents out of 300 carried any field of that shape.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the finding underneath all the others. The most sophisticated public content platform in the country has no way to record who is accountable for a page being true, or when anyone last checked that it was. Neither does Confluence, SharePoint or Notion out of the box.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Everything downstream follows. You cannot measure freshness against a cadence that was never declared. You cannot route a stale page to an owner who was never named. You cannot tell a retrieval system to prefer the maintained source when nothing in the data says which one that is.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What authoritative actually means</h2>
      <p className="text-gov-dark leading-relaxed">
        Here is the definition we think the field needs, stated so it can be argued with.
      </p>
      <div className="rounded-lg border-l-4 border-gov-blue bg-gov-bg/40 p-6">
        <p className="text-gov-dark leading-relaxed font-medium">
          Authority is not a property of content. It is a property of a maintenance commitment attached to that content: a named accountable owner, a named maintainer, a declared review cadence, a recorded date of last verification, and a declared scope.
        </p>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The consequences are uncomfortable and that is the point. An excellent, thorough, carefully written analysis with nobody committed to maintaining it is a working document. A three-line page that a named person re-verifies every quarter is a knowledge asset. Quality does not decide it. Length does not decide it. Where the file lives does not decide it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Retrieval systems get this exactly backwards. They rank on textual signals, so the well-written working document outranks the maintained stub every single time. Your best analyst&apos;s draft beats your maintained policy page, and the assistant presents it with the same confidence.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Note what this makes visible. Commitments do not usually get broken, they get transferred to nobody. In the corpus we studied, 4,810 documents, 8.9 per cent, are owned only by organisations that no longer exist. A 1955 NATO status-of-forces agreement is still attributed to the Foreign and Commonwealth Office, which was merged out of existence in 2020. A further 127 documents are owned by a body GOV.UK itself records as having ceased to exist.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is why the ontology models a commitment as an object with its own lifecycle rather than as a field on a document. A commitment that lapses is invisible unless lapsing is a state that something can be in.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The Corpus Readiness Index, run on 54,222 documents</h2>
      <p className="text-gov-dark leading-relaxed">
        Seven dimensions, each computed from a corpus&apos;s own metadata and text, with no access to any vendor&apos;s index and no cooperation from any vendor required. Run against the GOV.UK guidance corpus on 16 August 2026.
      </p>
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
        The headline is a geometric mean, deliberately, so that one fatal dimension cannot hide behind six healthy ones. A corpus that is immaculately owned, perfectly deduplicated and entirely locked inside PDF attachments is not 85 per cent useful. It is unusable, and the number should say so.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Freshness of 36.5</strong> is the honest number and it still flatters the corpus, because it measures time since last modification rather than time since last verification. A typo fix resets it without anyone checking a fact. The vivid version comes from GOV.UK&apos;s own publishing-era metadata: 13,595 live guidance pages are still tagged to the 2010 to 2015 coalition government, which is more than the 7,946 tagged to the current administration. Twelve are attributed to the 1940 to 1945 Churchill national government and are still served today.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Redundancy</strong> looks healthy at 96.9 until you look at the largest cluster, which contains 109 near-identical documents, one per year of an annual guidance series. Annual series are legitimate. The problem is that the year is in the title and nowhere else, so a retrieval system asked what the current rules are picks from 109 candidates on textual similarity alone. One machine-readable date-range field per document collapses that entire ambiguity, and it is the cheapest fix in the whole framework.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Retrieval fitness of 64.5</strong> is where most AI programmes actually die. Nearly a third of the corpus has under 500 characters of indexable text because the answer is inside an attachment. The organisation has documented the answer completely. The retrieval layer sees an opaque blob. No amount of embedding model tuning touches it, because it is a content format problem wearing an AI costume.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">A second corpus, and the claim we could not previously prove</h2>
      <p className="text-gov-dark leading-relaxed">
        Everything above rests on an estate that publishes no verification date, which left the most important claim in the framework as an argument rather than a measurement. We said that time since last modification flatters a corpus, because a typo fix resets it without anyone checking a fact. We could not show it, because GOV.UK does not record the other quantity.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Docs-as-code estates do. Microsoft Learn&apos;s house style defines the <code>ms.date</code> field as the date an article was last reviewed for accuracy, and git records independently when the file actually changed. So we scanned two more corpora on 16 August 2026: the Kubernetes documentation, 1,672 documents, and the .NET documentation, 13,412 documents.
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
        Kubernetes names people and never dates a check. Microsoft dates almost every check and rarely names anyone. The two estates fail in opposite directions, and neither manages both across most of its corpus.
      </p>
      <p className="text-gov-dark leading-relaxed">
        On the 13,267 .NET documents carrying both signals, they diverge sharply. The median document was last declared verified <strong>9.38 years ago</strong> and last changed <strong>1.94 years ago</strong>. Measured by declared verification, 87.8 per cent are stale beyond two years. Measured by modification, 49.6 per cent are. <strong>5,077 documents, 38.3 per cent of the corpus, look current by modification and are stale by their publisher&apos;s own verification date.</strong>
      </p>
      <p className="text-gov-dark leading-relaxed">
        The obvious objection is that this is just documentation for closed technologies, and it deserved testing rather than dismissing. Splitting the corpus, the frozen legacy subtrees such as WCF and .NET Framework show a 37.4 point gap between the two measures. The actively developed half shows <strong>40.0 points</strong>: a median of six months since last change against nearly four years since last declared verification. The effect is larger where the work is live, so it is not an artefact of abandoned content.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What this actually indicts is not Microsoft. Frozen content is a legitimate state, and documentation for a closed technology does not need re-verifying every quarter. The defect is that the corpus cannot say so. A document last verified in 2017 because the technology is closed, one last verified in 2017 because nobody has looked, and one whose date was stamped once and abandoned are indistinguishable in the data. All three present as the same stale date. A declared review cadence and a scope statement are what separate them, which is why both are mandatory fields in the ontology rather than optional ones.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What already exists, and what was missing</h2>
      <p className="text-gov-dark leading-relaxed">
        We should be clear about what is and is not new here, because two bodies of work sit right next to this one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>ISO 30401</strong> is the formal standard for knowledge management systems, on its 2018 edition with amendments in 2022 and 2024, and currently under revision as ISO/DIS 30401 at the enquiry stage with ISO members. It is a management-system standard with the familiar structure of context, leadership, planning, support, operation, performance evaluation and improvement. It tells you what your management system must do, and it explicitly does not prescribe how to manage knowledge. That is a defensible choice with a consequence worth stating plainly: ISO 30401 says nothing testable about a corpus. No clause defines when a draft becomes authoritative. None requires a review cadence. None defines what makes a document fit to be served as a grounded answer. An organisation can hold the certificate and still fail every dimension in the table above.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>K-AI</strong>, a document knowledge platform based in Versailles, published a piece on 25 May 2026 arguing that every major AI readiness framework omits unstructured documents, and proposing a Corpus Readiness pillar with six axes: in-document anomalies, cross-document conflicts, divergent duplicates, unmarked obsolescence, traceability in the sense of Article 12 of the EU AI Act, and freshness by segment.
      </p>
      <p className="text-gov-dark leading-relaxed">
        They are right, they published first, and the overlap with what we built is substantial and was arrived at independently. K-AI named the pillar. What their article does not contain is a scoring method, any formulas, an implementation or a measured study, and the axes exist to support a commercial audit rather than something you can run yourself.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the claim we are making is narrow. The observation that corpus quality is the missing pillar is not ours. What was missing is the part that lets you check it without hiring anyone: a published specification, a runnable instrument, and a real study whose every number regenerates from committed code.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Enforcing it, and why the negative rules are in SHACL</h2>
      <p className="text-gov-dark leading-relaxed">
        A standard that is not enforced is a preference. The repository ships a SHACL publish gate that runs against a knowledge repository the way a linter runs against a codebase, with a non-zero exit status when a violation is found. Against a worked example seeded with seven specific defects it reports exactly those seven, including a working document marked eligible for the retrieval index, a withdrawn asset still holding a live canonical designation, a superseded page naming no successor, and a retention period with no cited legal basis.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One design note for anyone building something similar. OWL is open-world, so the absence of a maintenance commitment in a graph does not entail that no commitment exists, and no OWL reasoner will ever classify something as a working document by absence. Every rule that matters here is of the form &quot;is there no owner recorded?&quot;, which is a closed-world question. The ontology therefore states the necessary condition and the disjointness, and every negative, corpus-scoped judgement is delegated to SHACL. Getting that boundary wrong is the most common way a knowledge governance ontology ends up looking rigorous and enforcing nothing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The same discipline applies to the measurement. There is no language model anywhere in the counting path. Every number here is deterministic and reproducible. Language models are useful for adjudicating the candidates the scanner surfaces, and they have no business producing the counts.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What to do on Monday</h2>
      <p className="text-gov-dark leading-relaxed">
        Four things, in order, none of which require a budget.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Find out which corpus your pipeline is actually eating.</strong> Ask whoever built your retrieval system whether it consumes a curated index or crawls a surface. If it crawls, ask what it does with content marked archived, superseded or withdrawn. In our experience nobody has asked before.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Count your unowned content.</strong> Not content with an empty owner field, but content whose owner is a team that has been reorganised, a person who has left, or a mailbox nobody reads. That number is always larger than anyone expects and it is the cheapest one to produce.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Pick one high-traffic topic and count how many live documents answer it.</strong> If the answer is more than one, you have found the mechanism by which your assistant will contradict itself, and you have found it before a customer did.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Stop treating decommissioning as housekeeping.</strong> It is the largest single risk reduction available, it is unglamorous, and that is exactly why nobody does it. Give removal its own count on the dashboard or it will not happen.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we are not claiming</h2>
      <p className="text-gov-dark leading-relaxed">
        A high Corpus Readiness Index does not mean a good corpus. It means the corpus is measurable and maintained, which is a precondition rather than a guarantee. Scores should not be compared between organisations without comparing the underlying counts and the adapter used; the instrument is designed for longitudinal use on one estate, and for argument, not for a league table.
      </p>
      <p className="text-gov-dark leading-relaxed">
        GOV.UK is close to a best case. It has a dedicated content profession, published standards, an explicit withdrawal workflow and a search index that correctly excludes withdrawn material. These findings are a floor for a typical enterprise estate, not a representative sample of one, and nothing here licenses a claim about what any specific private corpus scores.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The instrument has so far been run against one corpus, which makes it a hypothesis with good production values rather than a settled measurement. Two of the seven findings rest on samples of 300 and 500 documents and are reported with their confidence intervals rather than as corpus facts. The freshness dimension measures the wrong thing and has to, because the right thing is not recorded anywhere. The repository&apos;s build report lists every one of these caveats, along with four defects we found in our own code while building it, including a regular expression that silently matched no percentages at all and would have quietly understated a finding had a unit test not caught it. A build report with no mistakes in it is not a build report.
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
          If your document estate has just become an AI input and nobody can say whether it is fit to be one, the fastest route is to run the scanner against an export yourself and send us the seven numbers. We also run this as an engagement, including the publish gate your teams will actually pass and the federated maintainer model that keeps it honest.
        </p>
        <p className="text-gov-dark leading-relaxed">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark font-medium">The repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
          {' '}contains the ontology, ten SKOS schemes, the SHACL publish gate, the Corpus Readiness Index specification, the full pipeline, 18 tests and a build report listing every caveat.
        </p>
        <p className="text-gov-dark leading-relaxed">
          We would particularly like to be contradicted on two things. Whether any existing standard already defines the working document and knowledge asset distinction in enforceable terms, because we have looked and not found one. And whether the seven dimensions mis-score a corpus you know well, because an instrument that has only ever been run against one estate is a hypothesis, not a measurement.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Email <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
    </section>
  </article>
);
