import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const MODEL = 'https://huggingface.co/fabsssss/qwen3-coder-30b-a3b-ies4';
const DATASET = 'https://huggingface.co/datasets/fabsssss/ies4-turtle-instruct';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/ies4-turtle-language-model#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/ies4-turtle-language-model',
  headline: 'An open language model for IES4 data | Tesseract Academy',
  description:
    'To our knowledge the first openly published language model fine-tuned for IES4, the UK 4D defence-data ontology. Term conformance rises from 0% to 88.6% and hallucinated terms fall from 0.937 to 0.010 against the untuned base model. Correct-by-construction training data, open dataset and eval harness.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-05',
  dateModified: '2026-07-05',
  about: {
    '@type': 'SoftwareApplication',
    name: 'IES4 Turtle language model',
    url: MODEL,
    applicationCategory: 'Machine learning model',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords:
    'IES, IES4, RDF, Turtle, ontology, language model, LLM, fine-tune, LoRA, knowledge graph, defence data, telicent, MLX, Qwen',
};

const RESULTS = [
  { metric: 'IES4 term conformance', base: '0%', tuned: '88.6%', note: 'terms used that exist in the ontology' },
  { metric: 'Hallucinated-term rate', base: '0.937', tuned: '0.010', note: 'fraction of ies: terms that are invented' },
  { metric: 'Syntactic validity', base: '93.2%', tuned: '95.5%', note: 'output parses as valid Turtle' },
  { metric: 'Structural conformance', base: 'n/a', tuned: '0.955', note: 'subject and object types satisfy domain and range' },
  { metric: 'Namespace fidelity', base: 'n/a', tuned: '100%', note: 'uses the namespace the caller specifies' },
  { metric: 'Ontology-conditioned extraction', base: '75%', tuned: '91.7%', note: 'conforms to a supplied non-IES ontology' },
];

const BUILD = [
  { item: 'Correct-by-construction data', detail: '1,589 IES graphs built programmatically with telicent-ies-tool across 14 scenario patterns, paired with natural-language descriptions.' },
  { item: 'Double validation', detail: 'Every graph passed both the telicent validation and an independent term-membership check built from the published dstl/IES4 ontology.' },
  { item: 'Vocabulary and boundaries', detail: 'Class and property definitions from the ontology, plus refusal examples teaching what IES4 cannot express.' },
  { item: 'Generalisation slice', detail: 'Ontology-conditioned extraction pairs from Text2KGBench, so the model conforms to any ontology it is given, not only IES.' },
  { item: 'Honest evaluation', detail: 'Held-out test split by target graph, plus an out-of-distribution set from the real published IES sample data.' },
  { item: 'Open release', detail: 'Model, LoRA adapter, full dataset and evaluation harness, all published for independent reproduction.' },
];

export const Ies4TurtleLanguageModel: React.FC = () => {
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
          An open language model for IES4 data
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          To our knowledge the first openly published language model fine-tuned for the UK Information Exchange Standard (IES), the 4D ontology behind defence and security data. It turns a plain-English scenario into IES-conformant RDF, and it is released as a research prototype with its dataset and evaluation harness so the field can check the work.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Term conformance</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 &rarr; 88.6%</p>
          <p className="text-sm text-gov-secondary mt-1">vs the untuned base model</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Hallucinated terms</p>
          <p className="text-3xl font-extrabold text-gov-dark">0.937 &rarr; 0.010</p>
          <p className="text-sm text-gov-secondary mt-1">near-eliminated</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Released</p>
          <p className="text-3xl font-extrabold text-gov-dark">Model + data</p>
          <p className="text-sm text-gov-secondary mt-1">and full eval harness</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">Information Exchange Standard (IES)</Link> is the shared 4D vocabulary for UK defence and security data, but authoring IES-conformant RDF by hand is slow and needs scarce ontology expertise. General-purpose models do not fill that gap. Asked to write IES Turtle, even a strong 30B code model invents terms that do not exist in the ontology roughly 94% of the time. In a standards context that is worse than no help at all: invalid data that looks plausible is harder to catch than data that fails outright.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
        <p className="text-gov-dark leading-relaxed">
          The core idea is to never trust the model to invent structure. Instead we generate the structure correctly, then teach the model to reproduce it. Every training graph was built programmatically with the <a href="https://github.com/telicent-oss/ies-tool" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">telicent-ies-tool</a> and validated twice before training.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Component</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it is</th>
              </tr>
            </thead>
            <tbody>
              {BUILD.map((d, i) => (
                <tr key={d.item} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{d.item}</td>
                  <td className="px-4 py-3 text-gov-secondary">{d.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The results</h2>
          <p className="text-gov-dark leading-relaxed">
            Measured on held-out prompts against the untuned base model. The point of the fine-tune is not fluency, which the base model already has, but conformance: using real IES terms, in structurally valid ways.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Metric</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Base model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fine-tuned</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.metric} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.metric}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.base}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.tuned}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          Out-of-distribution performance, on rich scenarios taken from the real published IES sample data rather than our training patterns, is markedly lower (term conformance around 30%). We report that openly in the model card rather than hide it: it is the honest edge of what a small on-device fine-tune achieves today, and the reason the model is released as a prototype to draft from, not an oracle to trust blind.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Does the model earn its place? A neuro-symbolic test</h2>
          <p className="text-gov-dark leading-relaxed">
            The obvious challenge to a fine-tuned model is: why not skip it, and instead wrap a general model in a validate-and-repair loop? Generate the Turtle, check it against the ontology, feed the specific errors back, and ask the model to fix them. We ran that experiment directly. Two models (the untuned base and this fine-tune), each on its own and inside a three-round repair loop, on both the in-distribution and the harder out-of-distribution test sets. The number below is IES4 term conformance.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Setup</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">In-distribution</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Out-of-distribution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white">
                <td className="px-4 py-3 font-medium text-gov-dark">Untuned base, single-shot</td>
                <td className="px-4 py-3 text-gov-secondary">0%</td>
                <td className="px-4 py-3 text-gov-secondary">0%</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40">
                <td className="px-4 py-3 font-medium text-gov-dark">Untuned base, with repair loop</td>
                <td className="px-4 py-3 text-gov-secondary">0%</td>
                <td className="px-4 py-3 text-gov-secondary">0%</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-white">
                <td className="px-4 py-3 font-medium text-gov-dark">Fine-tuned, single-shot</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">95%</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">30%</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40">
                <td className="px-4 py-3 font-medium text-gov-dark">Fine-tuned, with repair loop</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">100%</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <HBars
          title="IES4 term conformance: the repair loop lifts the fine-tuned model but changes nothing on the untuned base."
          note="On the untuned base the repair loop leaves conformance at 0%. On the fine-tuned model it lifts in-distribution conformance to 100% and pushes the out-of-distribution case from 30% to 50%."
          max={100}
          labelWidth="w-64"
          rows={[
            { label: 'Untuned base, single-shot (in-distribution)', value: 0, display: '0%', color: CHART.amber },
            { label: 'Untuned base, repair loop (in-distribution)', value: 0, display: '0%', color: CHART.amber },
            { label: 'Fine-tuned, single-shot (in-distribution)', value: 95, display: '95%' },
            { label: 'Fine-tuned, repair loop (in-distribution)', value: 100, display: '100%' },
            { label: 'Untuned base, single-shot (out-of-distribution)', value: 0, display: '0%', color: CHART.amber },
            { label: 'Untuned base, repair loop (out-of-distribution)', value: 0, display: '0%', color: CHART.amber },
            { label: 'Fine-tuned, single-shot (out-of-distribution)', value: 30, display: '30%' },
            { label: 'Fine-tuned, repair loop (out-of-distribution)', value: 50, display: '50%' },
          ]}
        />
        <div className="border-l-2 border-l-gov-blue pl-6">
          <p className="text-gov-dark leading-relaxed">
            The result is clean, and it refutes two tempting shortcuts at once. First, the repair loop cannot replace the fine-tune: on the untuned base it changes nothing (0% stays 0%), because a model that does not know the vocabulary cannot act on the feedback "that term does not exist", it simply invents a different wrong one. Second, the failure mode of the fine-tuned model is coverage, not capacity: its lower out-of-distribution score reflects IES patterns it has not seen, which a larger model would not fix but broader training data would. What the loop does earn is real: on a model that already holds the knowledge it lifts in-distribution conformance to a perfect 100% and pushes the hard out-of-distribution case from 30% to 50%, halving the hallucination rate along the way.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            So the fine-tune earns its place as the load-bearing component, and the validator earns its place as the layer that cleans up on top. Neither is sufficient alone.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The last mile: what actually breaks the out-of-distribution wall</h2>
          <p className="text-gov-dark leading-relaxed">
            We then tested the obvious fixes, one variable at a time, and the result overturned our own first guess. Out-of-distribution term conformance turned out to be invariant to data volume (a 10x larger training set) and to linguistic diversity: it stayed pinned at 30%. A later model (v1.3) that added the exact missing IES construct families lifted in-distribution conformance to 97.7% and improved out-of-distribution structure by 40%, yet term conformance still held at 30%. Diagnosing every residual failure showed why: the model was not missing constructs, it was inventing plausible-but-wrong term spellings on unfamiliar scenarios (writing <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:hasParticipant</code> for <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:isParticipantIn</code>, or <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:MeasureUnit</code> for <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:measureUnit</code>).
          </p>
          <p className="text-gov-dark leading-relaxed">
            A plain repair loop that only says "that term is invalid" lifts this from 27% to 45%: it fixes the cases where the model can guess the correction, and stalls where it cannot. A <strong>term-suggesting validator</strong> that returns the nearest real IES term ("use <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:isParticipantIn</code>") closes most of the rest.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Pipeline (v1.3, out-of-distribution)</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">IES4 term conformance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 text-gov-dark">single forward pass</td><td className="px-4 py-3 text-gov-secondary">27%</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 text-gov-dark">+ repair loop ("term is invalid")</td><td className="px-4 py-3 text-gov-secondary">45%</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">+ term-suggesting validator ("use <em>X</em>")</td><td className="px-4 py-3 font-semibold text-gov-dark">82%</td></tr>
            </tbody>
          </table>
        </div>
        <HBars
          title="Out-of-distribution IES4 term conformance rises as the validator supplies the correct term (v1.3 pipeline)."
          note='A plain repair loop that only says "that term is invalid" lifts conformance from 27% to 45%. A term-suggesting validator that returns the nearest real IES term reaches 82%.'
          max={100}
          labelWidth="w-64"
          rows={[
            { label: 'Single forward pass', value: 27, display: '27%' },
            { label: '+ repair loop ("term is invalid")', value: 45, display: '45%' },
            { label: '+ term-suggesting validator ("use X")', value: 82, display: '82%' },
          ]}
        />
        <div className="border-l-2 border-l-gov-blue pl-6">
          <p className="text-gov-dark leading-relaxed">
            The lesson is precise and, we think, general: for niche-format generation the binding constraint is not scale or diversity but term-exactness on novel compositions, and the fix is a validator that supplies the correct term, not merely flags the wrong one. The fine-tune drafts; the symbolic layer perfects. This is a small-scale result (tens of held-out prompts, one ontology), reported as a finding to build on.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where it fits</h2>
          <p className="text-gov-dark leading-relaxed">
            The right architecture for standards work is neuro-symbolic: the model drafts, and a symbolic layer verifies. This model pairs directly with our <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">IES-to-HQDM crosswalk</Link> and the <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> validation engine, which check conformance deterministically. The language model removes the blank-page problem; the validators guarantee correctness. Neither is asked to do the other's job.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A general model asked to write a niche standard will confidently make it up. The fix is not a bigger model, it is correct-by-construction data and a validator in the loop. Publish both, with the weak spots named, and the field gets a tool it can actually build on."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          This is an independent, self-initiated demonstration built entirely on published open standards and open tools. It is not affiliated with, or endorsed by, the Ministry of Defence, the IES Working Group, Telicent or Dstl. IES4 is Crown Copyright, MIT-licensed; the model weights are MIT; the generalisation data derived from Text2KGBench is attributed under CC-BY-SA-4.0 in the model card.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Model, dataset and evaluation harness</p>
          <p className="text-sm text-gov-secondary mt-1">
            Weights and LoRA adapter, the full training data, and the code that produced every number above.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={MODEL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            Model on Hugging Face <ExternalLink className="w-4 h-4" />
          </a>
          <a href={DATASET} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Dataset and eval <ExternalLink className="w-4 h-4" />
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
