import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const MODEL = 'https://huggingface.co/fabsssss/qwen3-coder-30b-a3b-bio';
const DATASET = 'https://huggingface.co/datasets/fabsssss/bio-ontology-instruct';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/biology-ontology-language-model#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/biology-ontology-language-model',
  headline: 'An open, conformant language model for biomedical knowledge graphs | Tesseract Academy',
  description:
    'To our knowledge the first openly published language model fine-tuned for Biolink-Model and GO-CAM conformance. Term conformance rises from 0% to 100% and the hallucinated-term rate falls from 0.42 to 0.00 against the untuned base model, holding on graph shapes never seen in training. Correct-by-construction data, open dataset and evaluation harness.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-08',
  dateModified: '2026-07-08',
  about: {
    '@type': 'SoftwareApplication',
    name: 'Biology ontology language model',
    url: MODEL,
    applicationCategory: 'Machine learning model',
    license: 'https://www.apache.org/licenses/LICENSE-2.0',
  },
  keywords:
    'Biolink Model, GO-CAM, Gene Ontology, OBO Foundry, MONDO, HP, ChEBI, Cell Ontology, ontology, knowledge graph, FAIR data, language model, LLM, fine-tune, LoRA, bioinformatics, biomedical, MLX, Qwen',
};

const RESULTS = [
  { metric: 'Biolink term conformance', base: '0%', tuned: '100%', note: 'every term used exists in the Biolink Model' },
  { metric: 'Hallucinated-term rate', base: '0.42', tuned: '0.00', note: 'fraction of biolink: terms that are invented' },
  { metric: 'Out-of-distribution conformance', base: '0%', tuned: '89%', note: 'multi-association graphs never seen in training' },
  { metric: 'Structural conformance', base: 'n/a', tuned: '1.000', note: 'subject and object categories satisfy the association ranges' },
  { metric: 'GO-CAM schema validity', base: '0%', tuned: '100%', note: 'output validates against the GO-CAM causal-model schema' },
  { metric: 'OBO grounding accuracy', base: '0%', tuned: '100%', note: 'correct ontology identifier chosen from candidates' },
];

const BUILD = [
  { item: 'Three conformant tasks', detail: 'Biolink knowledge-graph construction, GO-CAM causal activity models, and OBO term grounding (GO, MONDO, HP, ChEBI, Cell Ontology): the structuring, mechanism and normalisation work every biomedical data programme needs.' },
  { item: 'Correct-by-construction data', detail: 'Every training target is generated programmatically from real ontology releases with the Biolink Model Toolkit and the GO-CAM data model, never hand-authored, so the gold standard is valid by construction.' },
  { item: 'Real, verified entities', detail: 'Identifiers drawn from real OBO releases, GO (38,245), MONDO (32,095), HP (19,836), ChEBI (218,253) and Cell Ontology (3,335), and gene/protein IDs verified against mygene.info. No invented CURIEs enter the data.' },
  { item: 'Double validation', detail: 'Each example passes both the official toolkit (bmt category/predicate membership and subject/object range closure; the GO-CAM schema) and an independent membership check before training.' },
  { item: 'Generalisation holdout', detail: '90 multi-association graphs held out entirely, a composition the model never trains on, to test conformance on genuinely unseen structure.' },
  { item: 'Open release', detail: 'Model, LoRA adapter, the full dataset and the generators and validators that produced every number above, published for independent reproduction.' },
];

export const BiologyOntologyLanguageModel: React.FC = () => {
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
          An open, conformant language model for biomedical knowledge graphs
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          To our knowledge the first openly published language model fine-tuned for the Biolink Model and GO-CAM, the open standards that make biomedical knowledge interoperable. It turns a grounded biomedical statement into a schema-conformant knowledge graph, and it is released as a research prototype with its dataset and evaluation harness so the field can check the work.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Term conformance</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 &rarr; 100%</p>
          <p className="text-sm text-gov-secondary mt-1">vs the untuned base model</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Hallucinated terms</p>
          <p className="text-3xl font-extrabold text-gov-dark">0.42 &rarr; 0.00</p>
          <p className="text-sm text-gov-secondary mt-1">eliminated</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Unseen graph shapes</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 &rarr; 89%</p>
          <p className="text-sm text-gov-secondary mt-1">holds out of distribution</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why biology ontology conformance</h2>
          <p className="text-gov-dark leading-relaxed">
            Biomedical knowledge is scattered across hundreds of incompatible databases. The open ontologies, the <a href="https://biolink.github.io/biolink-model/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Biolink Model</a> (the schema behind the Monarch Initiative and the NCATS Biomedical Data Translator), the <a href="https://geneontology.org/docs/gocam-overview/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Gene Ontology and GO-CAM</a>, and the <a href="https://obofoundry.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">OBO Foundry</a>, are the interoperability backbone that makes that knowledge FAIR: findable, accessible, interoperable, reusable.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Language models are becoming the default interface to that knowledge. Off the shelf, they hallucinate ontology terms: asked to write a Biolink graph, a strong 30B code model invents roughly 42% of the terms it uses and produces a fully conformant graph 0% of the time. In a knowledge graph that is worse than no help at all. A single fabricated predicate or non-resolvable identifier silently breaks interoperability, poisons every downstream query, and is indistinguishable from a real edge until something fails.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
        <p className="text-gov-dark leading-relaxed">
          The core idea is to never trust the model to invent structure. Instead we generate the structure correctly from real ontology releases, then teach the model to reproduce it. Every training target was built programmatically with the <a href="https://github.com/biolink/biolink-model-toolkit" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Biolink Model Toolkit</a> and the GO-CAM data model, and validated twice before training.
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
            Measured on held-out prompts against the untuned base model. The point of the fine-tune is not fluency, which the base model already has, but conformance: using real ontology terms, in structurally valid ways, and doing so on graph shapes it never saw in training.
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
          The out-of-distribution number is the honest one to watch: 89% term conformance on multi-association graphs the model never trained on, a composition strictly harder than anything in its training set. We report it, and the model's weaker properties, openly in the model card rather than hide them.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The conformance gate is the validator, not the model</h2>
          <p className="text-gov-dark leading-relaxed">
            The right architecture for standards work is neuro-symbolic: the model drafts, and a symbolic layer verifies. Conformance here is not hoped for, it is enforced by a validator in the loop that rejects 100% of out-of-ontology terms: invalid predicates, non-existent CURIEs, categories that violate the schema. The model proposes; the validator disposes.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The model on its own does not reliably refuse a malformed request: asked to encode a nonsensical relationship, it will still try to structure it. That does not compromise the guarantee, because safety lives in the symbolic validator that catches every invalid term, not in the model's self-restraint. A language model should never be the last line of defence in front of a scientific knowledge graph; the validator is.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where it fits</h2>
          <p className="text-gov-dark leading-relaxed">
            This is the biology counterpart of our <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">open language model for IES4 defence data</Link>: the same correct-by-construction method, pointed at a new family of standards. Both pair a fine-tuned drafter with the <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> validation engine that checks conformance deterministically. The language model removes the blank-page problem; the validators guarantee correctness. Neither is asked to do the other's job.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The practical uses are the unglamorous, load-bearing ones: harmonising heterogeneous multi-omic and clinical data into one FAIR knowledge graph, normalising free-text mentions to the correct ontology identifier, and building the mechanism graphs that large biomedical programmes query at scale. It is a structuring and interoperability tool, not a source of biomedical truth, and every output is designed to be validated before use.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A general model asked to write a niche standard will confidently make it up. The fix is not a bigger model, it is correct-by-construction data and a validator in the loop. Publish both, with the weak spots named, and the field gets a tool it can actually build on."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          This is an independent, self-initiated demonstration built entirely on published open standards and open tools. It is not affiliated with, or endorsed by, the Monarch Initiative, the Gene Ontology Consortium, the OBO Foundry or the Biolink Model project. Model weights and dataset are Apache-2.0; the ontology terms remain under their source licences. Associations in the training data are schema-correct but synthetic, not curated biological assertions.
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
