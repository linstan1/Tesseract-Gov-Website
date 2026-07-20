import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';
const SPACE = 'https://huggingface.co/spaces/fabsssss/onto-correctness-bench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/neuro-symbolic-verification-direction#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/neuro-symbolic-verification-direction',
  headline: 'Neuro-symbolic AI has a direction problem: symbols should verify the neural output, not just feed it | Tesseract Academy',
  description:
    'Most neuro-symbolic work runs symbols into the neural model. The underused direction is the reverse: symbols checking what the neural model produced. On the Kautz taxonomy, the closed-world vocabulary gate is the cheapest, most reliable Neuro-then-Symbolic-check pattern there is, and it catches an error class no amount of symbolic knowledge injection prevents.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  keywords: 'neuro-symbolic, Kautz taxonomy, Hitzler, symbolic verification, knowledge graph, LLM, closed-world, ontology, Semantic Web',
};

export const NeuroSymbolicVerificationDirection: React.FC = () => {
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
          Neuro-symbolic AI has a direction problem
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Most work under the neuro-symbolic banner points one way: get symbolic knowledge into the neural model, as embeddings, as constraints, as a knowledge graph to attend over. The direction that gets far less attention is the reverse arrow, symbols checking what the neural model produced. For a language model authoring RDF, that reverse arrow is where the guarantee lives, and the cheapest instance of it catches an error no amount of knowledge injection prevents.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Two arrows, unequal attention</h2>
          <p className="text-gov-dark leading-relaxed">
            The Kautz taxonomy of neuro-symbolic systems, which Pascal Hitzler and others use to organise the field, distinguishes patterns by how the neural and symbolic parts compose: symbolic knowledge feeding the neural network, the neural network invoking symbolic routines, symbolic reasoning over neural outputs, and so on. The research energy has gone overwhelmingly into the feed-forward direction, teaching the network more symbolic structure. That is valuable, and it is where our own <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">IES4 fine-tune</Link> lives. But a fine-tuned model is still a probabilistic device, and the experiments were blunt about the ceiling: on unfamiliar scenarios it kept emitting plausible-but-wrong terms. Injecting more symbols reduces that; it does not close it. Closing it needs the other arrow.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The reverse arrow, at its cheapest</h2>
          <p className="text-gov-dark leading-relaxed">
            Symbolic verification of neural output has a reputation for being heavy: theorem provers, full logical entailment, expensive reasoners. The closed-world vocabulary gate is the opposite. It is the smallest useful instance of the reverse arrow: take the triples the model produced, and check that every predicate and every <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> value is a term the ontology actually declares. No entailment, no reasoner, just set membership against a namespace the ontology owns. In our <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">benchmark</Link> it caught 300 of 300 graphs carrying a fabricated term across three real vocabularies, with zero false positives, in milliseconds. It is the reverse arrow you can afford to run on every output, and it is a clean example of the pattern the taxonomy names but the field under-builds.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why injection cannot substitute for verification</h2>
          <p className="text-gov-dark leading-relaxed">
            The tempting shortcut is to say a well-trained enough model would not need checking. But the two arrows guard against different failures. Knowledge injection shapes the distribution the model samples from; it makes the right term more likely. Verification makes a categorical statement about a specific output; it makes the wrong term impossible to commit. For anything built on a controlled vocabulary, defence data on IES, biomedical data on the <Link to="/research/foundry-grade-machine-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">OBO Foundry</Link>, the second guarantee is the one that matters, because a single fabricated identifier can quietly corrupt an integration that assumed every term was real. A more likely right answer is not the same as a guaranteed real one. This is the same complementarity we drew as boxes in <Link to="/research/symbol-existence-box" className="text-gov-blue underline hover:text-gov-blue-dark">the missing box</Link>: the generator proposes, the symbolic gate disposes.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The neuro-symbolic conversation is mostly about pouring symbols into models. The under-built half is letting symbols check the model back. The cheapest version of that check, does this term exist, is also one of the most useful, and almost nobody runs it."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed">
          The benchmark, the method and the reproducible code are in the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">write-up</Link>. Existence is only the first thing the reverse arrow can check; the harder one, whether a real term is used in a sound place, is the subject of <Link to="/research/certified-denotation" className="text-gov-blue underline hover:text-gov-blue-dark">certified denotation</Link>.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Run the reverse arrow</p>
          <p className="text-sm text-gov-secondary mt-1">Real pyshacl vs the closed-world gate, in your browser or in Colab.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <a href={SPACE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Try it live <ExternalLink className="w-4 h-4" />
          </a>
          <a href={DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Run in Colab <ExternalLink className="w-4 h-4" />
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
