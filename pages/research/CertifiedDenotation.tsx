import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';
const SPACE = 'https://huggingface.co/spaces/fabsssss/onto-correctness-bench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/certified-denotation#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/certified-denotation',
  headline: 'Beyond existence: certified denotation, the next gate after the vocabulary check | Tesseract Academy',
  description:
    'The closed-world vocabulary gate proves every term exists. It does not prove the term is used in a sound place: a real property on the wrong class, a relation between the wrong kinds of thing. Certified denotation is the next gate, checking generated triples against the ontology domain and range and, ultimately, a certified world model. An honest roadmap, not a finished result.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  keywords: 'certified denotation, domain and range, ontology reasoning, world model, closed-world, knowledge graph, LLM, semantic correctness, OWL',
};

export const CertifiedDenotation: React.FC = () => {
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
          Beyond existence: certified denotation
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">closed-world vocabulary gate</Link> guarantees one thing: every term a model emits exists in the ontology. That is necessary, and it is not sufficient. A model can use only real terms and still be wrong, by putting a real property on the wrong kind of thing. Catching that is the next gate, and it is harder. This is a roadmap, stated as one: what certified denotation is, why it is more than the existence check, and how far the honest work has and has not gone.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The error the existence gate cannot see</h2>
          <p className="text-gov-dark leading-relaxed">
            Consider a graph that types a document as a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:Person</code> and gives it a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:birthDate</code>. Every term is real; every term is declared. The vocabulary gate passes it, correctly, because nothing is fabricated. And yet the assertion is nonsense: a document does not have a birth date. The model used the right symbols in an unsound arrangement. Existence checking is blind to this by design, because existence is a property of each term in isolation, and the error is in the relationship between them. The failure has moved up a level, from "is this term real?" to "does this term denote something that can stand in this relation?".
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The first rung: domain and range</h2>
          <p className="text-gov-dark leading-relaxed">
            The ontology already carries part of the answer. Most well-built vocabularies declare, for each property, the classes its subject and object are expected to belong to, its domain and range. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:birthDate</code> has a domain that does not include documents. So the first rung of certified denotation is a reasoning check: materialise the types implied by the properties used, and test them against what the data asserts, flagging the contradictions. This is standard description-logic territory, and our <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> engine already exposes the reasoning and structural-conformance primitives it needs. It is more expensive than the vocabulary gate and it is not free of judgement, because open-world ontologies often under-specify domain and range on purpose, but it catches a large, important class of right-symbol-wrong-place errors the existence gate waves through.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The hard rung: a certified world model</h2>
          <p className="text-gov-dark leading-relaxed">
            Domain and range catch type errors. They do not catch a graph that is type-correct but describes a state of affairs that cannot hold: an event whose end precedes its start, a part-whole loop, a participation with no participant. Certifying against that requires more than the ontology's declarations; it requires a model of which world states the ontology can consistently represent, and a check that the generated graph denotes one of them. This is the direction of our <Link to="/research/pyramid-ies-hqdm-semantic-bridge" className="text-gov-blue underline hover:text-gov-blue-dark">4D grounding work</Link> and the broader programme of compiling ontologies into certified world models. It is genuinely open research. We are not claiming a solved gate here, and it would be dishonest to. What we are claiming is the shape of the ladder: existence, then type soundness, then world-state soundness, each a stricter and more expensive guarantee than the last.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Proving a term exists is the floor, not the ceiling. Above it sits type soundness, and above that, whether the graph describes a world the ontology can actually hold. Each rung costs more and buys more. The mistake is stopping at the floor and calling it correctness."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed">
          The floor is built and measured: see the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">vocabulary-gate benchmark</Link> and run it yourself below. The upper rungs are where the work goes next, and we will report them the same way, with the weak spots named.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Start at the floor</p>
          <p className="text-sm text-gov-secondary mt-1">The existence gate, live in your browser or in Colab, with the full benchmark on GitHub.</p>
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
