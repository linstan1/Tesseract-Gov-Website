import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const HARNESS = 'https://github.com/fabio-rovai/semantica-contrib';
const ENGINE = 'https://github.com/fabio-rovai/open-ontologies';
const SUBJECT = 'https://github.com/semantica-agi/semantica';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/verifying-extraction-pipeline-rdf#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/verifying-extraction-pipeline-rdf',
  headline:
    'Checking the knowledge graph your pipeline just built | Tesseract Academy',
  description:
    'A document-to-graph pipeline that emits RDF is making a formal claim, and it cannot check its own claim. This study runs that check against Semantica 0.6.5 and 0.6.6, an MIT-licensed Python pipeline with about 9,300 stars, using two independent RDF readers to adjudicate every output. Seventeen defects were found and reported, four fixes are merged upstream, and six pull requests are open as of 21 August 2026. The failures share a shape: the export succeeds, a lenient reader accepts it, and the data is wrong or missing anyway. A two-entity JSON-LD export parsed as 2 triples through one reader and 21 quads through another with no error either way. pySHACL reported conformance on data that violated every constraint, because the generated shapes targeted a namespace the generated data never used. Timestamps written without a UTC offset caused a timezone-qualified SPARQL filter to silently drop every affected row.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  keywords:
    'knowledge graph verification, RDF validation, SHACL, pySHACL, vacuous validation, JSON-LD named graph, rdflib, Oxigraph, extraction pipeline, document to graph, LLM knowledge graph, closed-world checking, vocabulary check, PROV-O, OWL-Time, xsd:dateTimeStamp, SPARQL indeterminate comparison, knowledge graph procurement, AI assurance',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/verifying-extraction-pipeline-rdf#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'If the export parses without an error, is the knowledge graph correct?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and parsing is a weaker check than it looks. RDF readers differ in strictness, and the lenient ones repair what they cannot read rather than refusing it. Given a subject written as <Acme Corp>, which contains a space that the IRI grammar forbids, rdflib resolves it against the current working directory and produces file:///home/you/project/Acme%20Corp with a warning. The same file through a strict reader is rejected outright: Invalid IRI code point. The lenient read gives you a graph whose identifiers depend on which directory the process was standing in, and it reports success.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a knowledge graph load successfully and still be missing most of its content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A JSON-LD document with a top-level @id beside a top-level @graph places every member of that graph into a named graph rather than the default graph. rdflib.Graph.parse() keeps the default graph and discards the rest without raising anything. Measured on Semantica 0.6.6, a two-entity, one-relationship export parsed as 2 triples through Graph() and 21 quads through Dataset(). The 19 missing statements were the entire payload. Nothing in that sequence reports a failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a passing SHACL validation prove the data meets its constraints?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if the shapes match the data, and that is a separate thing to check. In the pipeline studied here the SHACL generator minted its targets under a /shapes/ path while the generated data used a /ns# path, so no sh:targetClass ever selected a node. pySHACL returned conforms=True on data that violated every constraint in the shapes file. A test asserting that validation passes would have kept passing indefinitely. The check that catches this is closed-world vocabulary checking, which asks which terms in the graph were never declared, rather than whether the declared constraints were satisfied.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do timezone-naive timestamps matter in a knowledge graph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because they turn a query into a quiet lie. The pipeline wrote 106 timestamps with datetime.now(), which means local time, and 70 with datetime.utcnow(), which means UTC, and once either lands in an RDF literal nothing distinguishes them. A SPARQL filter such as FILTER(?t < "2026-08-19T00:00:00Z"^^xsd:dateTime) compares an offset-bearing bound against an offset-free value, which XSD 1.1 makes indeterminate and SPARQL turns into an error rather than a false. Oxigraph therefore drops every affected row. The query returns results, and the results are missing exactly the records the query was about.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a buyer ask for when procuring a knowledge graph build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask for the graph to be read back by a reader that did not write it, and ask for the count. Require that acceptance tests assert on the parsed graph rather than on the serialised text, that validation reports name the number of focus nodes each shape actually selected, that identifiers are stable across processes and re-runs, and that every timestamp carries an explicit UTC offset. Each of those corresponds to a defect found here that no test in the pipeline’s own suite had caught.',
      },
    },
  ],
};

const FINDINGS = [
  {
    f: 'Defects found and reported against Semantica 0.6.5 and 0.6.6 between 19 and 21 August 2026, all on the public issue tracker',
    n: '17 issues',
    sev: 'signal',
    means:
      'Four fixes are merged upstream and six pull requests are open. The pipeline is actively maintained and the reports were accepted, which is why this reads as a method rather than an audit.',
  },
  {
    f: 'Triples recovered from a two-entity JSON-LD export by a plain graph reader, against the quads the same bytes yield to a dataset reader',
    n: '2 of 21',
    sev: 'defect',
    means:
      'A top-level @id beside a top-level @graph names the whole payload into a graph the default reader discards. No error is raised on either path, so the loss is invisible to anything downstream.',
  },
  {
    f: 'SHACL shapes whose targets were minted in a namespace the data never used, so no shape selected any node',
    n: 'all of them',
    sev: 'defect',
    means:
      'pySHACL reported conforms=True on data that violated every constraint. Validation that matches nothing is indistinguishable from validation that passes, unless the report states how many nodes were selected.',
  },
  {
    f: 'Timezone-naive timestamp call sites, in two idioms that mean different things: datetime.now() means local, datetime.utcnow() means UTC',
    n: '106 and 70',
    sev: 'defect',
    means:
      'A timezone-qualified SPARQL filter over these values hits XSD 1.1 indeterminate comparison, which SPARQL turns into an error, so Oxigraph silently drops every affected row from the result.',
  },
  {
    f: 'Entity IRIs minted from Python’s builtin hash(), which is randomised per process',
    n: 'every unidentified entity',
    sev: 'defect',
    means:
      'The same entity received a different identifier on every run, so exports could not be diffed, deduplicated against an earlier load, or joined to provenance written by an earlier process.',
  },
  {
    f: 'Metadata statements reaching the RDF output before the fix, out of four carried on an entity, across all four serialisation formats',
    n: '0 of 4',
    sev: 'defect',
    means:
      'The dropped fields are the provenance ones. An entity kept its confidence score and lost the source document, page, extractor and reviewer behind it. The JSON exporter kept all four, so the same graph exported two ways disagreed about what the user had supplied.',
  },
  {
    f: 'Undeclared terms in the PROV-O export, measured against the real PROV-O vocabulary',
    n: '0 of 11 predicates, 0 of 5 types',
    sev: 'clean',
    means:
      'The one module that serialises through a real RDF library instead of by hand is also the one module with nothing wrong with it. That is most of the explanation, and it is the cheapest fix available to any pipeline in this position.',
  },
  {
    f: 'OWL or RDFS entailment constructs anywhere in the pipeline’s reasoning module',
    n: 'none',
    sev: 'gap',
    means:
      'It is a rule engine over facts, which is a capability boundary rather than a defect. It is also the clearest statement of what a formal engine adds after extraction ends.',
  },
];

const SEV_STYLE: Record<string, string> = {
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
  clean: 'bg-emerald-50 text-emerald-800',
};

export const VerifyingExtractionPipelineRdf: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Checking the knowledge graph your pipeline just built
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        A pipeline that turns documents into RDF is making a claim in a formal language, and it has no way to check its own claim. We ran that check against{' '}
        <a href={SUBJECT} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">Semantica</a>, an MIT-licensed Python pipeline with about 9,300 stars, at versions 0.6.5 and 0.6.6, by reading every output back through two independent RDF engines and comparing what each one saw. Seventeen defects came out of it. Four of the fixes are merged upstream and six pull requests are open as of 21 August 2026. The failures share a shape worth knowing about before you buy one of these systems: the export succeeds, a lenient reader accepts it, and the graph is wrong or largely absent anyway.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The read that succeeds and returns a fraction:</strong> a two-entity JSON-LD export parsed as <strong>2 triples</strong> through <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Graph()</code> and <strong>21 quads</strong> through <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Dataset()</code>. Neither path raised anything.</li>
          <li><strong>The validator that always passes:</strong> generated SHACL shapes targeted a namespace the generated data never used, so no shape selected a single node and pySHACL reported <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">conforms=True</code> on data that violated every constraint in the file.</li>
          <li><strong>The query that quietly deletes your rows:</strong> timestamps written without a UTC offset make a timezone-qualified SPARQL filter indeterminate, which SPARQL turns into an error, so every affected row disappears from the result and the query still returns.</li>
          <li><strong>The negative result:</strong> the one module that serialises through a real RDF library rather than by hand, the PROV-O export, had nothing wrong with it. Eleven predicates and five types, none undeclared.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">A pipeline cannot check its own output</h2>
      <p className="text-gov-dark leading-relaxed">
        This is the asymmetry the whole exercise rests on. An extraction pipeline proposes entities, relations and types, and then writes them out in a formal notation. Every part of that sentence is the same program. If the program has a wrong idea about what a valid identifier looks like, it will write invalid identifiers and then read them back with the same wrong idea, and its tests will pass.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The way out is to bring in a reader that had no part in writing the file. That is not a new idea in software, but it is unusual in graph pipelines, and it is remarkably productive. Every finding on this page came from the same move: parse the output with a second engine, and compare.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two readers, one file, two different answers</h2>
      <p className="text-gov-dark leading-relaxed">
        The pipeline’s graph builder defaults an entity’s identifier to its surface text and its type to whatever label the extractor produced. On the documented path, that produces Turtle like this:
      </p>
      <pre className="bg-gov-dark text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>{`<Acme Corp> a <ORG> ;
    semantica:text "Acme Corp" ;
    semantica:confidence 0.91 .`}</code></pre>
      <p className="text-gov-dark leading-relaxed">
        A space is not allowed in an IRI. rdflib parses this anyway: it resolves the subject against the current working directory, hands you <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">file:///home/you/project/Acme%20Corp</code>, and logs a warning that nothing in a production pipeline is reading. Oxigraph, through{' '}
        <a href={ENGINE} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">open-ontologies</a>, refuses the file: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Invalid IRI code point &apos; &apos;</code>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Both behaviours are defensible readings of the standard’s tolerance rules. Only one of them tells you that your entity identifiers now depend on which directory the batch job happened to run in. If you have ever wondered why two loads of the same corpus produced graphs that would not join, this is a candidate explanation.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The load that succeeds and gives you a twentieth of the data</h2>
      <p className="text-gov-dark leading-relaxed">
        JSON-LD has a feature that is easy to trigger by accident. A top-level <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">@id</code> sitting beside a top-level <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">@graph</code> does not label the document. It names the graph, which converts every member of that array from a triple in the default graph into a quad in a named one. A plain triple reader keeps the default graph and drops everything else.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Measured on version 0.6.6, a knowledge graph of two entities and one relationship exported to JSON-LD parsed as 2 triples through <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdflib.Graph.parse()</code> and 21 quads through <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Dataset()</code>. The 19 statements in the gap were the content. There is no error, no warning, and no count that looks wrong unless you already know what the right count was.
      </p>
      <HBars
        title="The same two-entity JSON-LD export parsed as 2 triples through Graph() and 21 quads through Dataset()."
        note="The 19 statements in the gap were the content. There is no error and no warning on either path."
        labelWidth="w-56"
        rows={[
          { label: 'Quads through Dataset()', value: 21, display: '21 quads', color: CHART.gray },
          { label: 'Triples through Graph()', value: 2, display: '2 triples', color: CHART.amber },
          { label: 'Statements in the gap', value: 19, display: '19 statements', color: CHART.amber },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        This is the argument for all-or-nothing loading. A partial load that reports success is worse than a refusal, because every dashboard, every query and every downstream model then computes over a fragment and looks entirely healthy doing it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Validation that cannot fail</h2>
      <p className="text-gov-dark leading-relaxed">
        The pipeline generates SHACL shapes from its own ontology, which is a genuinely useful feature. The shapes minted their <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sh:targetClass</code> values under a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">/shapes/</code> path, while the data it generated used a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">/ns#</code> path. The two never met. No shape selected any node, and pySHACL reported conformance on data that broke every constraint in the file.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A vacuous pass and a real pass produce the same verdict, so any acceptance test written as <em>assert the report conforms</em> would have gone on passing for as long as the project lived. The report needs to say how many focus nodes each shape actually selected, and a shape that selected none needs to be an alarm rather than a silence.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is a second check that catches this class of defect from the other direction. Closed-world vocabulary checking asks which terms appear in the graph and are declared nowhere. Open-world SHACL cannot ask that question, because in the open world an undeclared term is merely unknown rather than wrong, which is precisely why an extractor that invents a plausible-sounding property sails through it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The timestamp that deletes rows from your answer</h2>
      <p className="text-gov-dark leading-relaxed">
        Across the codebase there were 106 timestamps written with <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">datetime.now()</code>, spread over 41 files, and 70 written with the deprecated <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">datetime.utcnow()</code> over 23 more. The first means local time. The second means UTC. Once either has been written into an RDF literal, nothing distinguishes them, and eighteen of the first group were in the export module.
      </p>
      <HBars
        title="Timezone-naive timestamp call sites across the codebase, in two idioms that mean different things."
        note="datetime.now() means local time and datetime.utcnow() means UTC. Once either has been written into an RDF literal, nothing distinguishes them."
        labelWidth="w-64"
        rows={[
          { label: 'Written with datetime.now(), local time', value: 106, display: '106 call sites', color: CHART.amber },
          { label: 'Written with datetime.utcnow(), UTC', value: 70, display: '70 call sites', color: CHART.amber },
          { label: 'datetime.now() calls in the export module', value: 18, display: '18 of the 106', color: CHART.amber },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        Now run an audit query with a proper bound:
      </p>
      <pre className="bg-gov-dark text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>{`FILTER(?t < "2026-08-19T00:00:00Z"^^xsd:dateTime)`}</code></pre>
      <p className="text-gov-dark leading-relaxed">
        XSD 1.1 makes the comparison between an offset-bearing value and an offset-free one indeterminate, because the offset-free value could fall on either side of the bound by up to fourteen hours. SPARQL raises that as an error, and an error in a filter is not a false. Oxigraph drops the row. The query returns, the shape of the result looks reasonable, and the records it was asked about are the ones missing from it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The fix upstream tightened the range of the export timestamp to <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">xsd:dateTimeStamp</code>, which requires the offset rather than merely permitting it. That is the version of the type that a schema can enforce.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What was measured</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border rounded-lg overflow-hidden">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark whitespace-nowrap">Count</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it means</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((row) => (
              <tr key={row.f} className="border-t border-gov-border/60 align-top">
                <td className="px-4 py-3 text-gov-dark/90 leading-relaxed">{row.f}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-block rounded px-2 py-1 font-semibold ${SEV_STYLE[row.sev]}`}>{row.n}</span>
                </td>
                <td className="px-4 py-3 text-gov-dark/90 leading-relaxed">{row.means}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Four things to write into the specification</h2>
      <p className="text-gov-dark leading-relaxed">
        If you are commissioning a knowledge graph build, each of these corresponds to a defect above that the pipeline’s own test suite had not caught.
      </p>
      <ol className="list-decimal pl-5 space-y-3 text-gov-dark leading-relaxed">
        <li><strong>Read it back with something that did not write it.</strong> Acceptance runs the output through an independent, strict parser, and a rejection is a failed acceptance rather than a note for the backlog.</li>
        <li><strong>Assert on the parsed graph and on counts, never on the file.</strong> A serialised string that looks correct can mean nothing. State the expected triple count and check it.</li>
        <li><strong>Require validation reports to state their coverage.</strong> How many focus nodes did each shape select? A shape matching zero nodes is the single most likely reason a validation report is clean.</li>
        <li><strong>Require stable identifiers and offset-bearing timestamps.</strong> Re-run the same input in a fresh process and diff the two graphs. If the identifiers moved, nothing built on them will join, and no amount of downstream cleverness will repair it.</li>
      </ol>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Reproducing this</h2>
      <p className="text-gov-dark leading-relaxed">
        The probe scripts, their raw output files, the reports as filed, and a verification adapter that runs the strict engine over an export before it reaches disk are all public at{' '}
        <a href={HARNESS} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">semantica-contrib</a>. Everything goes through the pipeline’s documented public API, because a defect reachable only from a private helper is a curiosity, and a defect on the path a user takes is a defect.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A word about the subject. Semantica was chosen because it is good enough to be worth checking, and its maintainer replied to the first report within about an hour, agreed the modelling calls, and asked for the pull request. Reports that arrive with a reproduction, a fix and a test get treated well there, which is why this exercise produced merged code rather than a list of complaints. The method is the transferable part, and it applies to any pipeline that emits RDF, including ones you may already be running.
      </p>
    </section>
  </article>
);
