import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';
const SPACE = 'https://huggingface.co/spaces/fabsssss/onto-correctness-bench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/shacl-shapes-not-vocabulary#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/shacl-shapes-not-vocabulary',
  headline: 'SHACL validates shapes, not vocabulary: the case for a closed-world companion | Tesseract Academy',
  description:
    'SHACL Core is open-world by design: it constrains the nodes a shape targets and is silent about everything else, including terms that do not exist in the ontology. A reading of why sh:closed does not close the gap, and where a closed-world vocabulary check belongs in a generative RDF pipeline.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  keywords: 'SHACL, sh:closed, open-world assumption, RDF validation, W3C, knowledge graph, vocabulary check, closed-world',
};

export const ShaclShapesNotVocabulary: React.FC = () => {
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
          SHACL validates shapes, not vocabulary
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          A companion to <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">our benchmark</Link>, for the people who build with SHACL. The 100% false-pass rate we measured is not a defect in any validator. It is the open-world semantics of SHACL Core doing exactly what the specification says. Understanding why is the difference between trusting SHACL for something it was never meant to do and putting the right check in the right place.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What SHACL was designed to do</h2>
          <p className="text-gov-dark leading-relaxed">
            SHACL, the <a href="https://www.w3.org/TR/shacl/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">W3C Shapes Constraint Language</a> edited by Holger Knublauch and Dimitris Kontokostas, validates an RDF data graph against a shapes graph. A shape declares a target (a class, a specific node, the subjects of a property) and a set of constraints on those targets: cardinality, datatype, value range, node kind. The validator visits the targeted nodes, checks the declared constraints, and reports the violations. This is a precise and useful contract. It is also, deliberately, a <em>local</em> one. SHACL never asserts that the shapes graph is complete, and it never claims authority over triples no shape mentions. That is the open-world assumption, and it is a feature: RDF graphs are meant to be mergeable and extensible, so a validator that failed every graph carrying an unforeseen predicate would be useless in practice.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why a fabricated term is invisible</h2>
          <p className="text-gov-dark leading-relaxed">
            Now feed that validator a graph an LLM wrote. It types a node as a real class, satisfies the real constraints, and adds a predicate that does not exist: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:priceBracket</code> where the vocabulary only defines <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema:priceRange</code>. No shape targets <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">priceBracket</code>, because you cannot write a shape for a term you did not know would be invented. So SHACL never looks at it, and a graph with no violations is a conformant graph. The fabricated term is not passed despite scrutiny; it is passed because it was never in scope. Across 300 hallucinated graphs on three real vocabularies, that happened every single time.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">"But sh:closed"</h2>
          <p className="text-gov-dark leading-relaxed">
            SHACL does provide <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sh:closed</code>, which flags any property on a targeted node that is not in an explicitly permitted list. It is the nearest thing in the language to a vocabulary check, and it genuinely helps. But it is not the guarantee it looks like. Closing a shape means enumerating, by hand, every property that node is ever allowed to carry, and keeping that list current as the model evolves. It operates per shape, so a node with no shape is still unchecked. It does not constrain the <em>values</em> of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> against the vocabulary, so a fabricated class slips through even on a closed shape. And it breaks the moment a record legitimately uses a term from an imported ontology you did not list, which for anything built on the OBO Foundry (PATO imports RO imports BFO) is the normal case, not the exception. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sh:closed</code> is per-shape bookkeeping that trades away the extensibility SHACL was designed to protect. It is not a statement about the vocabulary.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The right check in the right place</h2>
          <p className="text-gov-dark leading-relaxed">
            The question SHACL answers is "do the terms I was told to check satisfy their constraints?". The question generated data forces is a different one: "does every term in this graph denote something the ontology actually defines?". That is a closed-world membership test, and it belongs beside SHACL, not inside it. Run it as its own pass: collect every predicate and every <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:type</code> value, and flag any whose IRI sits in a namespace the ontology owns but that the ontology never declares. It leaves SHACL to do the structural job it is good at, and it leaves the extensibility intact, because it polices only the namespaces you name and never the standard <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdfs</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">owl</code> vocabulary or your own instance IRIs. On 300 clean graphs it raised zero false alarms. This is the <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">onto_vocab_check</code> tool in our <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> engine: not a replacement for SHACL, a companion constraint SHACL Core cannot express.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"SHACL is not failing when it passes a hallucinated term. It is answering the question it was asked. The mistake is asking it the wrong question and calling the answer trust."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed">
          The full method, the three vocabularies, and every number are in the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">benchmark write-up</Link> and reproducible from the repository. If you build with SHACL and you also let a model author RDF, this is the gap you are carrying.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">The closed-world companion</p>
          <p className="text-sm text-gov-secondary mt-1">Reproduce the benchmark, or run the vocabulary gate on your own ontology.</p>
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
