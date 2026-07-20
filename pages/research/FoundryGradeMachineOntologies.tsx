import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/onto-correctness-bench/demo.ipynb';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/foundry-grade-machine-ontologies#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/foundry-grade-machine-ontologies',
  headline: 'Foundry-grade guarantees for machine-authored ontologies | Tesseract Academy',
  description:
    'The OBO Foundry spent two decades insisting biomedical terms mean one thing and are declared in one place. A machine that authors against those ontologies should be held to the same closed-world standard. Measured on the Foundry ontologies PATO and RO, open-world SHACL admits every fabricated term; a closed-world gate catches all of them.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  keywords: 'OBO Foundry, biomedical ontology, PATO, Relation Ontology, GO-CAM, closed-world, knowledge graph, LLM, curation, provenance',
};

export const FoundryGradeMachineOntologies: React.FC = () => {
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
          Foundry-grade guarantees for machine-authored ontologies
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The OBO Foundry has spent two decades enforcing a discipline that most of computing never adopted: a biomedical term means one thing, is declared in one place, and is identified by a stable opaque id. Now machines are authoring data against those ontologies. If a human curator is held to that standard, a language model should be too, and the tooling to hold it there cannot be the open-world validator we currently trust.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Foundry's discipline, and why it matters more now</h2>
          <p className="text-gov-dark leading-relaxed">
            The principles that Barry Smith, Chris Mungall and the wider <a href="https://obofoundry.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">OBO Foundry</a> community built the biomedical ontology ecosystem on, orthogonal coverage, shared upper-level structure, unique persistent identifiers, are a defence against exactly one thing: terms that look right but are not the term you meant. A curator who writes <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">GO:0006915</code> for apoptosis is making a checkable, closed-world claim about a real class in a real ontology. That rigour is what makes cross-database integration possible. It is also what a language model quietly discards when it emits a well-formed but nonexistent <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">GO:</code> id, or writes <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:hasParticipant</code> for <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:isParticipantIn</code>. The failure is invisible to a reader and, as we measured, invisible to SHACL.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Measured on the Foundry's own ontologies</h2>
          <p className="text-gov-dark leading-relaxed">
            We ran the test on real Foundry material: PATO, the Phenotype and Trait Ontology, and RO, the Relation Ontology, 270,126 triples and 2,889 declared classes between them, with instances typed as PATO qualities linked by RO relations, which is how OBO instance data is actually shaped. Then we injected fabricated but well-formed ids in the Foundry's own prefixes, the "LLM cites a real-looking but wrong id" failure mode, and validated. Open-world SHACL reported conformance on 100% of the graphs carrying a fabricated id. A closed-world vocabulary gate, asking only "is this id declared in the loaded ontology?", caught 100% of them, with zero false positives on the clean graphs. The Foundry's discipline is enforceable on machine output. It is just not enforceable by the validator most pipelines rely on.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The same gate, upstream of curation</h2>
          <p className="text-gov-dark leading-relaxed">
            This is not a proposal to slow curation down. It is a gate to put in front of it. A closed-world vocabulary check on machine-generated triples is fast, deterministic, and precise: it rejects the fabricated term before it reaches a curator's queue or a public graph, and it stays silent on everything legitimate. It composes naturally with the Foundry stack, GO-CAM for mechanism, the Biolink Model for cross-ontology categories, OBO ids for entities, and it is the same principle behind our <Link to="/research/biology-ontology-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">biology-ontology language model</Link>, which was trained and validated to hold term conformance at 100% against Biolink and GO-CAM. The model drafts against the vocabulary; the gate guarantees the draft used only real terms. Curation then spends its scarce human attention on meaning, not on catching invented identifiers a machine should never have been allowed to commit.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The Foundry made biomedical knowledge integrable by insisting every term is real and declared. Let a machine author against those ontologies with only open-world validation and you quietly give that discipline back. A closed-world gate keeps it."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed">
          The full method and the PATO and RO results are in the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">benchmark write-up</Link>, released reproducible so any Foundry maintainer can run it against their own ontology.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Run it against your ontology</p>
          <p className="text-sm text-gov-secondary mt-1">The vocabulary gate and the PATO and RO benchmark are open source.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            open-ontologies on GitHub <ExternalLink className="w-4 h-4" />
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
