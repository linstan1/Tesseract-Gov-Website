import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';
const SPACE = 'https://huggingface.co/spaces/fabsssss/onto-correctness-bench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/ontology-correctness-benchmark#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/ontology-correctness-benchmark',
  headline: 'The open-world hole: why SHACL cannot catch a hallucinated ontology term | Tesseract Academy',
  description:
    'A reproducible benchmark on three real vocabularies (schema.org, IES4, OBO PATO+RO) showing that open-world SHACL validates as conformant every data graph containing a fabricated ontology term (300 of 300), while a closed-world vocabulary gate catches all 300 with zero false positives. The correctness layer for AI-generated knowledge graphs.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'onto-correctness-bench',
    codeRepository: REPO,
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords:
    'SHACL, closed-world, open-world assumption, RDF, OWL, ontology, knowledge graph, LLM hallucination, vocabulary validation, schema.org, IES4, OBO Foundry, neuro-symbolic, AI assurance',
};

const CHART = { teal: '#00897b', amber: '#b45309', gray: '#5c6670' };

type BarRow = { label: string; value: number; display: string; color?: string };

const HBars: React.FC<{ title: string; note?: string; max?: number; rows: BarRow[] }> = ({ title, note, max, rows }) => {
  const m = max ?? Math.max(...rows.map((r) => r.value));
  return (
    <figure className="rounded-lg border border-gov-border bg-white p-5">
      <figcaption className="text-sm font-semibold text-gov-dark mb-3">{title}</figcaption>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3" title={`${r.label}: ${r.display}`}>
            <span className="w-56 shrink-0 text-right text-xs text-gov-secondary leading-tight">{r.label}</span>
            <div className="flex-1 h-[18px]">
              <div
                className="h-full rounded-r"
                style={{ width: `${Math.max((r.value / m) * 100, 0.5)}%`, backgroundColor: r.color ?? CHART.teal }}
              />
            </div>
            <span className="w-20 shrink-0 text-xs font-semibold text-gov-dark tabular-nums">{r.display}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-gov-secondary mt-3">{note}</p>}
    </figure>
  );
};

const DETECT_ROWS: BarRow[] = [
  { label: 'Hallucinated graphs flagged by open-world SHACL', value: 0, display: '0 / 300', color: CHART.amber },
  { label: 'Hallucinated graphs flagged by the closed-world gate', value: 300, display: '300 / 300' },
  { label: 'False alarms on clean graphs (gate)', value: 0, display: '0 / 300', color: CHART.gray },
];

const SCALE_ROWS: BarRow[] = [
  { label: 'OBO (PATO+RO)', value: 270126, display: '270,126' },
  { label: 'schema.org', value: 17949, display: '17,949' },
  { label: 'IES4', value: 3976, display: '3,976' },
];

const FINETUNE_ROWS: BarRow[] = [
  { label: 'Base model', value: 0.937, display: '0.937', color: CHART.amber },
  { label: 'IES4 fine-tune', value: 0.010, display: '0.010' },
];

const RESULTS = [
  { vocab: 'schema.org', triples: '17,949', decl: '933 / 1,521', fabricated: '136', shacl: '100%', cw: '100%', fp: '0%' },
  { vocab: 'IES4', triples: '3,976', decl: '510 / 204', fabricated: '134', shacl: '100%', cw: '100%', fp: '0%' },
  { vocab: 'OBO (PATO+RO)', triples: '270,126', decl: '2,889 / 759', fabricated: '148', shacl: '100%', cw: '100%', fp: '0%' },
];

export const OntologyCorrectnessBench: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Foundational Research: Ontology-Native AI
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The open-world hole: why SHACL cannot catch a hallucinated ontology term
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Ask a language model to write RDF and it will, some of the time, give you a term that does not exist: a <code className="text-base bg-gov-bg px-1.5 py-0.5 rounded">schema:priceBracket</code> where it meant <code className="text-base bg-gov-bg px-1.5 py-0.5 rounded">schema:priceRange</code>, an OBO id off by a digit. The triple parses, it reads correctly, and it is referentially fake. The reflex is to reach for SHACL. Measured on three real vocabularies, SHACL does not catch this. Not some of the time. None of the time.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">SHACL false-pass</p>
          <p className="text-3xl font-extrabold text-gov-dark">300 / 300</p>
          <p className="text-sm text-gov-secondary mt-1">graphs with a fake term, all pass</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Closed-world catch</p>
          <p className="text-3xl font-extrabold text-gov-dark">300 / 300</p>
          <p className="text-sm text-gov-secondary mt-1">0 false positives on clean data</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Evidence</p>
          <p className="text-3xl font-extrabold text-gov-dark">3 vocabs</p>
          <p className="text-sm text-gov-secondary mt-1">418 fabricated terms, reproducible</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            SHACL is the W3C validation language for RDF, and it is what serious knowledge-graph teams run before they trust generated data. But SHACL is <strong>open-world</strong>. It validates a data graph against <em>shapes</em>: a shape targets some nodes and constrains some of their properties. If a triple uses a predicate no shape mentions, or an <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> no shape targets, SHACL has nothing to say about it, and silence means conformance. It is not asking "does this term exist?". It is asking "do the terms I was told to check satisfy their constraints?". A fabricated term is, by construction, one nobody told it to check. That is the exact failure mode of an LLM authoring RDF, and it falls straight through.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The measurement</h2>
          <p className="text-gov-dark leading-relaxed">
            We took three real, public vocabularies of very different shapes. For each we generated 100 clean record graphs using only declared terms, and 100 hallucinated graphs identical except for one or two extra fabricated terms, each confirmed absent from the vocabulary but named plausibly enough that a model would emit it. Every graph was validated two ways: with ordinary hand-authored SHACL shapes, and with a closed-world vocabulary gate. The run is deterministic and reproducible in one command.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Vocabulary</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Triples</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Classes / props</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fabricated terms</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">SHACL false-pass</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Closed-world catch</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">False positive</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.vocab} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.vocab}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.triples}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.decl}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.fabricated}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.shacl}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.cw}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.fp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          Across 418 fabricated terms in 300 graphs, open-world SHACL reported <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">conforms=true</code> on every single graph that contained a fabricated term. The closed-world gate flagged one in all 300, and raised zero false alarms on the 300 clean graphs.
        </p>
        <HBars
          title="Detection outcome over 300 hallucinated and 300 clean graphs"
          note="The empty first bar is the finding: ordinary SHACL practice flags none of the graphs containing a fabricated term."
          max={300}
          rows={DETECT_ROWS}
        />
        <HBars
          title="Benchmark scale: triples per vocabulary"
          note="418 fabricated terms across the three vocabularies: 136 for schema.org, 134 for IES4, 148 for OBO."
          rows={SCALE_ROWS}
        />
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">See it on one record</h2>
          <p className="text-gov-dark leading-relaxed">
            A valid-looking <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:Offer</code> with two terms that do not exist in schema.org, the class <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:MerchandiseOffer</code> and the predicate <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:priceBracket</code>:
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Validator</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Verdict</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Flags</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white">
                <td className="px-4 py-3 font-medium text-gov-dark">SHACL (open-world)</td>
                <td className="px-4 py-3 text-gov-secondary">conforms = true</td>
                <td className="px-4 py-3 text-gov-secondary">none, both fakes admitted</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40">
                <td className="px-4 py-3 font-medium text-gov-dark">Closed-world gate</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">rejects</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">MerchandiseOffer, priceBracket</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          SHACL conforms because no shape targets those terms, so it never looks at them. This is not a bug in the validator; it is the open-world semantics of SHACL Core working as specified. An LLM that emits a fabricated term therefore sails through the exact tool teams rely on to trust it.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">"Just use sh:closed"</h2>
          <p className="text-gov-dark leading-relaxed">
            The informed objection is that SHACL has <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sh:closed</code>, which rejects predicates not in an allowed list. It helps, but it is not the guarantee people think. Closed shapes catch extra <em>predicates</em> only if you enumerate every permitted predicate on every shape in advance, do not police the values of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> against the vocabulary, and break the moment a record legitimately uses an imported term you did not list, which in the OBO world (where PATO imports RO imports BFO) is constant. It is per-shape bookkeeping. What generated data needs is a vocabulary guarantee: not "did this node stay inside the property list I wrote for it", but "does every term in this graph denote something the ontology actually defines".
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why the gate is precise, not just strict</h2>
          <p className="text-gov-dark leading-relaxed">
            The obvious worry about a stricter checker is false positives. The benchmark answers it directly. The gate polices only IRIs whose namespace belongs to the ontology under test, plus namespaces you explicitly name. Standard <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdfs</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">owl</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">xsd</code> and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sh</code> vocabulary is never flagged, and your own instance identifiers are never flagged, because they are not in a policed namespace. The result is a 0% false-positive rate on 300 clean graphs. It is strict about exactly one thing, whether you used a term the ontology does not define, and silent about everything else. This is the check that ships as a native tool, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">onto_vocab_check</code>, in our <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> engine, and pairs with our <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">IES4 language model</Link>, whose fine-tune cuts hallucinated terms from 0.937 to 0.010 under exactly this kind of closed-world check.
          </p>
        </div>
        <HBars
          title="Hallucinated-term rate under the closed-world check, IES4 language model"
          note="The same gate used as a training signal: fine-tuning against it cuts the rate from 0.937 to 0.010."
          max={1}
          rows={FINETUNE_ROWS}
        />
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What the benchmark establishes</h2>
          <p className="text-gov-dark leading-relaxed">
            {"The purpose of the gate is to identify undeclared terms, making the measurement itself the primary contribution. When applied at scale to three real vocabularies, standard SHACL practice fails to detect any of the fabricated terms, whereas the closed-world gate identifies all 300 instances with zero false alarms across 300 clean graphs. This check verifies existence rather than appropriateness. A model that uses a real term in a semantically impossible location belongs to the next gate, certified denotation against a world model, which is where our current work sits. The corpus for this study is generated by construction, with each fabricated term confirmed to be absent from its specific vocabulary, and the follow-up study will replay harvested LLM output through the same gate."}
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"If you are letting a model write RDF and validating it with SHACL alone, you have an open-world hole, and everything that falls through it looks exactly like clean, conformant data. The fix is one closed-world check, and it costs you nothing on data that was correct to begin with."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          This is an independent, self-initiated study built entirely on published open standards and open tools. schema.org, IES4 (Crown Copyright, MIT-licensed), and the OBO Foundry ontologies PATO and RO are used under their open licences. The benchmark, its data and every number above are released open for independent reproduction. Prepared in response to the Encode AI-for-Science Challengescape, backed by ARIA and Pillar VC UK.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Further reading</h2>
        <ul className="space-y-2 text-gov-dark">
          <li><Link to="/research/shacl-shapes-not-vocabulary" className="text-gov-blue underline hover:text-gov-blue-dark">SHACL validates shapes, not vocabulary</Link>, why the open-world semantics are a feature, and where the companion check belongs.</li>
          <li><Link to="/research/symbol-existence-box" className="text-gov-blue underline hover:text-gov-blue-dark">The missing box</Link>, symbol-existence checking as a named component in a neuro-symbolic pipeline.</li>
          <li><Link to="/research/foundry-grade-machine-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">Foundry-grade guarantees for machine-authored ontologies</Link>, the same test on the OBO Foundry's own PATO and RO.</li>
          <li><Link to="/research/neuro-symbolic-verification-direction" className="text-gov-blue underline hover:text-gov-blue-dark">Neuro-symbolic AI has a direction problem</Link>, symbols should verify the neural output, not only feed it.</li>
          <li><Link to="/research/certified-denotation" className="text-gov-blue underline hover:text-gov-blue-dark">Beyond existence: certified denotation</Link>, the next gate after the vocabulary check.</li>
        </ul>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Reproduce the benchmark</p>
          <p className="text-sm text-gov-secondary mt-1">
            The deterministic script, the three real vocabularies and every number above, in the open-ontologies repository.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            open-ontologies on GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <a href={SPACE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Try it live <ExternalLink className="w-4 h-4" />
          </a>
          <a href={DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Run it now (Colab) <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    </article>
  );
};
