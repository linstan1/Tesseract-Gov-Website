import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';
const SPACE = 'https://huggingface.co/spaces/fabsssss/onto-correctness-bench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/symbol-existence-box#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/symbol-existence-box',
  headline: 'The missing box: where symbol-existence checking belongs in a neuro-symbolic pipeline | Tesseract Academy',
  description:
    'Neuro-symbolic systems are assemblies of distinct components. Most LLM-to-knowledge-graph pipelines have generation and they have SHACL, and they assume SHACL is the symbol-grounding box. It is not. A reading through the lens of the boxology of hybrid learning-and-reasoning systems.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  keywords: 'neuro-symbolic, boxology, hybrid AI, symbol grounding, knowledge graph, LLM, closed-world, RDF generation, van Harmelen',
};

export const SymbolExistenceBox: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Foundational Research: Ontology-Native AI
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The missing box: where symbol-existence checking belongs
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          When a large language model writes RDF, it is one component in a hybrid system: a neural generator feeding a symbolic store. The value of thinking about these systems as explicit assemblies of boxes, as Frank van Harmelen and colleagues argue in their boxology of hybrid learning-and-reasoning, is that it makes you name the box you left out. Most LLM-to-knowledge-graph pipelines left out the same one.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Boxes, and the one that is missing</h2>
          <p className="text-gov-dark leading-relaxed">
            The <a href="https://arxiv.org/abs/2102.11965" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">boxology</a> is a design-pattern language for hybrid systems: draw the components (a learned model, a symbolic reasoner, a knowledge base) and the arrows between them, and you can reason about what the whole system does and does not guarantee. Apply it to the common generative-KG pipeline and the picture is short. One box generates candidate triples from text. One box, SHACL, validates structure. An arrow runs from the second into the triple store. The pipeline assumes those two boxes cover the job. But there is a step between them that neither performs: checking that the <em>symbols</em> the neural box emitted actually refer to entities the symbolic world defines. That is symbol grounding, and it is a box of its own. Leave it out and a fabricated term flows from generator to store unchallenged, because the generator does not know it invented anything and the validator is not looking at existence.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why the neural box cannot self-check</h2>
          <p className="text-gov-dark leading-relaxed">
            It is tempting to push grounding back into the generator: fine-tune it hard enough and it will stop inventing terms. This helps, and we have measured how much. Our <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">IES4 language model</Link> cut the hallucinated-term rate from 0.937 to 0.010, and a validate-and-repair loop lifted in-distribution conformance to 100%. But the same experiments showed the ceiling: on scenarios it had not seen, the model kept inventing plausible-but-wrong spellings, and a repair loop that only says "that term is invalid" stalled where the model could not guess the correction. The generator, however good, is a probabilistic box. It cannot offer a guarantee about the closed set of real terms, because guarantees about closed sets are not what neural boxes produce. That is precisely the work a symbolic box exists to do.
          </p>
          <HBars
            title="The IES4 language model cut the hallucinated-term rate from 0.937 to 0.010."
            note="A validate-and-repair loop lifted in-distribution conformance to 100%."
            max={1}
            labelWidth="w-56"
            rows={[
              { label: 'Before fine-tuning', value: 0.937, display: '0.937', color: CHART.amber },
              { label: 'IES4 language model', value: 0.010, display: '0.010' },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What the box actually is</h2>
          <p className="text-gov-dark leading-relaxed">
            The symbol-existence box is small and deterministic. It sits on the arrow from generator to store, and it asks one closed-world question of every triple: is each predicate, and each <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> value, a term the loaded ontology declares? It polices only the namespaces the ontology owns, so it never touches standard vocabulary or your instance data, and its false-positive rate on clean graphs is zero. In our <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">benchmark</Link> this box caught every fabricated term across three real vocabularies, 300 graphs, 418 fakes, where open-world SHACL caught none. The lesson is not that SHACL is wrong; SHACL is a different box doing a different job. The lesson is that a hybrid system with a hole where its grounding box should be will look, from the outside, exactly like a system that works, right up until the fabricated data is load-bearing.
          </p>
          <HBars
            title="The symbol-existence box caught every fabricated term where open-world SHACL caught none."
            note="The benchmark spans three real vocabularies, 300 graphs and 418 fakes. The box's false-positive rate on clean graphs is zero."
            labelWidth="w-56"
            rows={[
              { label: 'Symbol-existence box', value: 418, display: '418 of 418' },
              { label: 'Open-world SHACL', value: 0, display: '0 of 418', color: CHART.amber },
            ]}
          />
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Draw your generative-KG pipeline as boxes and arrows, and the missing component is obvious: nothing checks that the symbols are real. Add that one small, deterministic box and the neural generator is finally safe to trust with a knowledge graph."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed">
          The generator and the grounding box are complementary, and neither is asked to do the other's job: the model removes the blank page, the symbolic gate guarantees the terms exist. That division is the whole architecture. Read the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">measured result</Link>, or see how the same split plays out inside a model in the <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">IES4 study</Link>.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">The grounding box, open source</p>
          <p className="text-sm text-gov-secondary mt-1">The vocabulary gate and the full benchmark are in the open-ontologies engine.</p>
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
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    </article>
  );
};
