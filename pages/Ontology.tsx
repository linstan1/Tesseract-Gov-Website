import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ResearchTopicGroup } from '../components/ResearchTopicGroup';
import { ONTOLOGY_GROUPS, ONTOLOGY_ASSET_COUNT, ONTOLOGY_REPO_COUNT } from '../data/ontologyIndex';

const COURSE_URL =
  'https://tesseract.academy/courses/ontology-foundations-to-advanced-modeling-semantic-standards-rdf-owl-shacl/';

const FAQ = [
  {
    q: 'What is an ontology?',
    a: 'An ontology is a formal, machine-readable model of a domain: the kinds of thing that exist in it, the properties those things have, the relationships that can hold between them, and the constraints that must hold. In practice it is written in OWL 2, usually with SKOS for the controlled vocabulary and SHACL for the constraints. The point of writing it formally is that software can then reason over it and reject statements that contradict it, which prose documentation cannot do.',
  },
  {
    q: 'What is the difference between an ontology, a taxonomy and a knowledge graph?',
    a: 'A taxonomy arranges concepts in a hierarchy: broader and narrower, and little else. An ontology adds the relationships and the constraints, so it can express that a bank holding company controls a subsidiary and that control has to be dated and sourced. A knowledge graph is the instance layer: the actual banks, the actual subsidiaries, the actual dates. The ontology says what can be said; the knowledge graph says what is claimed. You can build a graph without an ontology, but then nothing can tell you the graph is wrong.',
  },
  {
    q: 'What is the difference between OWL and SHACL, and do I need both?',
    a: 'OWL 2 describes what is true in the domain and lets a reasoner infer more of it. SHACL checks whether a particular data graph conforms to a set of shapes. They answer different questions, so most real projects use both. The trap is assuming SHACL is a sufficient check. SHACL is open-world: if your data uses a property the shapes say nothing about, SHACL passes it. We measured this across three vocabularies and open-world SHACL accepted every one of 300 graphs carrying a fabricated term. If a language model is writing your RDF, you need a closed-world vocabulary gate as well.',
  },
  {
    q: 'Is the semantic web the same thing as a knowledge graph?',
    a: 'No, though the technologies overlap almost completely. The semantic web is the W3C programme and its stack: RDF for the data model, RDFS and OWL for the schema, SKOS for vocabularies, SHACL for validation, SPARQL for querying, and dereferenceable URIs so that data published by different people can be joined. Linked data is the publishing discipline that goes with it. A knowledge graph is the artefact you get: a graph of entities and relationships, usually stored in a triple store, that a system actually queries. Most enterprise knowledge graphs are built on the semantic web stack precisely because they need identifiers that survive being joined against somebody else’s data.',
  },
  {
    q: 'What is GraphRAG, and does it need an ontology?',
    a: 'GraphRAG retrieves over a knowledge graph rather than over a flat vector index, so the model gets structured neighbours and relationship paths instead of loose passages. It works better than plain retrieval on multi-hop questions. It does not need an ontology to run, and this is where projects go wrong: without a schema and a term-level check, the graph the pipeline builds inherits every entity the extraction step invented, and GraphRAG then retrieves that error confidently. The ontology is what lets you reject the bad node before it enters the graph.',
  },
  {
    q: 'Do AI agents and RAG pipelines actually need an ontology?',
    a: 'They need something that can tell them they are wrong, and an ontology is the cheapest thing that does that job at the term level. Retrieval gives a model relevant text; it does not give it a way to detect that the entity it just asserted does not exist. When we fine-tuned an open model on the UK IES4 standard, confabulated ontology terms fell from 93.7 per cent of outputs to 1.0 per cent, but the number that made that measurable at all was the closed-world check against the published vocabulary. Without it, fluent and wrong looks the same as fluent and right.',
  },
  {
    q: 'How long does an ontology project take, and what does it cost?',
    a: 'A scoped audit of an ontology or knowledge graph you already have takes about two weeks and sits below the £10,000 direct award threshold for public bodies. A domain ontology with a validated instance graph over real source data is typically six to twelve weeks depending on how many source registers have to be reconciled. Public sector buyers can commission through CCS RM6200 for build work or RM6126 for research and audit work.',
  },
  {
    q: 'Who builds ontologies in the UK?',
    a: 'The established UK and European names include Semantic Partners, Ontotext, DNV and the Ontology Engineering Group at Universidad Politécnica de Madrid, alongside in-house teams at large publishers and banks. Tesseract Academy works in the same space with a specific emphasis: everything we publish is reproducible from public data, every headline is computed at least two independent ways, and we report the hypotheses that died. Our work for the National Digital Twin Programme is open source under Apache 2.0.',
  },
];

// Two separate blocks rather than one @graph: the house JSON-LD validator
// requires a top-level @type on every script tag.
const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://gov.tesseract.academy/ontology#page',
  name: 'Ontology engineering: open research, standards audits and knowledge graphs',
  description:
    'The complete index of Tesseract Academy ontology work: register integrity ontologies, standards crosswalks, verification research, language model grounding and catalogue conformance, in OWL 2, SKOS and SHACL.',
  url: 'https://gov.tesseract.academy/ontology',
  isPartOf: { '@id': 'https://gov.tesseract.academy/#website' },
  about: [
    { '@type': 'Thing', name: 'Ontology engineering' },
    { '@type': 'Thing', name: 'Knowledge graph' },
    { '@type': 'Thing', name: 'Semantic web' },
    { '@type': 'Thing', name: 'Linked data' },
    { '@type': 'Thing', name: 'Web Ontology Language' },
    { '@type': 'Thing', name: 'Shapes Constraint Language' },
    { '@type': 'Thing', name: 'Simple Knowledge Organization System' },
    { '@type': 'Thing', name: 'Resource Description Framework' },
    { '@type': 'Thing', name: 'SPARQL' },
    { '@type': 'Thing', name: 'Taxonomy' },
    { '@type': 'Thing', name: 'Triple store' },
    { '@type': 'Thing', name: 'GraphRAG' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/ontology#faq',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export const Ontology: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Ontology engineering
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          {ONTOLOGY_ASSET_COUNT} open studies in OWL 2, SKOS and SHACL, across {ONTOLOGY_REPO_COUNT} public
          repositories. Every one is reproducible from public data, every headline is computed at least two
          independent ways, and the hypotheses that died during the work are reported rather than dropped.
          This page is the index. If you are here to commission work rather than read it, the{' '}
          <Link to="/services/ontology-engineering" className="text-gov-blue hover:underline">service page</Link>{' '}
          is the shorter route.
        </p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What an ontology is, and what it is for</h2>
        <p className="text-gov-dark leading-relaxed text-base">
          An ontology is a formal, machine-readable model of a domain: what kinds of thing exist, what
          properties they have, what relationships can hold between them, and what constraints must hold.
          It is normally written in{' '}
          <a href="https://www.w3.org/TR/owl2-overview/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">OWL 2</a>,
          with <a href="https://www.w3.org/TR/skos-reference/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">SKOS</a>{' '}
          carrying the controlled vocabulary and{' '}
          <a href="https://www.w3.org/TR/shacl/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">SHACL</a>{' '}
          carrying the constraints. Writing it formally buys you one thing that a data dictionary or a
          Confluence page cannot: software can read it and reject a statement that contradicts it.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          That capability is why ontologies came back. A retrieval pipeline can hand a language model
          relevant text, and the model will produce something fluent. Nothing in that loop can tell you the
          entity it just asserted does not exist. An ontology plus a closed-world check can, at the term
          level, cheaply, and without a human in the loop. We published the measurement behind that claim:
          open-world SHACL accepted all 300 data graphs we seeded with fabricated terms, and a closed-world
          vocabulary gate caught all 300 with no false positives on clean data.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          The distinction people most often get wrong is between the three layers. A taxonomy is a
          hierarchy of concepts. An ontology adds the relationships and the constraints. A knowledge graph
          is the instance data underneath: the actual entities and the actual claims about them. The
          ontology says what can be said. The graph says what is being claimed. Our{' '}
          <Link to="/glossary" className="text-gov-blue hover:underline">glossary</Link> covers the rest of
          the vocabulary, and the{' '}
          <a href={COURSE_URL} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">
            free 15-lesson ontology engineering course
          </a>{' '}
          teaches the modelling itself, from RDF through SPARQL, SHACL and GraphRAG.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gov-border/30 pb-4">
          <h2 className="text-3xl font-bold text-gov-dark">The published work</h2>
          <p className="text-sm text-gov-secondary mt-2 max-w-4xl">
            Grouped by what the study does. Open a group to see the studies inside it, each with its
            repository where one exists.
          </p>
        </div>
        <div className="space-y-4">
          {ONTOLOGY_GROUPS.map((group, index) => (
            <ResearchTopicGroup
              key={group.id}
              title={group.title}
              count={group.assets.length}
              defaultOpen={index === 0}
            >
              <div className="pt-6 space-y-6">
                <p className="text-base text-gov-dark/90 leading-relaxed max-w-4xl">{group.blurb}</p>
                <ul className="space-y-5">
                  {group.assets.map(asset => (
                    <li key={asset.slug} className="border-l-2 border-gov-border/50 pl-5">
                      <Link
                        to={asset.slug}
                        className="font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
                      >
                        {asset.title}
                      </Link>
                      <p className="text-base text-gov-dark/90 leading-relaxed mt-1">{asset.note}</p>
                      {asset.repo && (
                        <a
                          href={asset.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline mt-1.5"
                        >
                          {asset.repo.replace('https://github.com/', '')} on GitHub
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </ResearchTopicGroup>
          ))}
        </div>
      </section>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">Questions we get asked</h2>
        <dl className="space-y-8">
          {FAQ.map(item => (
            <div key={item.q}>
              <dt className="text-lg font-bold text-gov-dark mb-2">{item.q}</dt>
              <dd className="text-base text-gov-dark/90 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-gov-blue/5 border border-gov-blue/20 p-8 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gov-dark mb-1">Send us the model you are working against</h2>
          <p className="text-sm text-gov-secondary max-w-2xl">
            Give us the ontology, standard or schema and we will tell you what it can and cannot verify, at
            no cost, within five working days.
          </p>
        </div>
        <Link
          to="/services/ontology-engineering"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors flex-shrink-0"
        >
          Ontology engineering service <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};
