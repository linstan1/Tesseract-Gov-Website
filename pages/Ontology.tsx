import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ResearchTopicGroup } from '../components/ResearchTopicGroup';
import { ONTOLOGY_GROUPS, ONTOLOGY_ASSET_COUNT, ONTOLOGY_REPO_COUNT } from '../data/ontologyIndex';

const COURSE_URL =
  'https://tesseract.academy/courses/ontology-foundations-to-advanced-modeling-semantic-standards-rdf-owl-shacl/';

const FAQ = [
  {
    q: 'What does safe AI mean in practice, for a public body?',
    a: 'It means the system cannot take an action, or serve an answer, that nothing was able to check. Most deployed AI is unsafe in a boring way rather than a dramatic one: it is fluent, it is wrong, and no component in the pipeline is capable of noticing. Making it safe means adding something that can fail. That can be a closed-world vocabulary gate over what the model asserts, a certificate a small trusted component verifies before an action is permitted, or a measured report card that puts privacy and fairness on the same page instead of auditing them separately. All three are engineering, all three are cheap next to the incident, and all three produce evidence an auditor can read.',
  },
  {
    q: 'Why is guardrail prompting not enough?',
    a: 'A guardrail written in the prompt is checked by the same system that is being guarded, so it fails in exactly the cases where you needed it. A gate is different: it sits outside the model, it is small enough to verify, and it says no. We built a reference proof-carrying-action gatekeeper for a bounded multi-agent system and verified it exhaustively rather than testing it: across 96 reachable states and 1,176 transitions it blocked 672 of 672 unsafe actions and admitted 504 of 504 safe ones, at 0.36 microseconds per check, with a trusted core of 31 lines. Without the gate, 57 per cent of actions violated the safety specification.',
  },
  {
    q: 'How do you stop a language model inventing things?',
    a: 'You cannot stop it, so you catch it. The cheapest place to catch it is at the term level, against a published vocabulary the model does not get to extend. When we fine-tuned an open model on the UK Information Exchange Standard, confabulated terms fell from 93.7 per cent of outputs to 1.0 per cent and conformance rose from zero to 88.6 per cent. The same method on a space object catalogue took hallucinated terms from 13.81 per output to 0.06. The number that matters more than either is the check itself: without a closed-world gate, fluent and wrong is indistinguishable from fluent and right.',
  },
  {
    q: 'Does the EU AI Act or ISO 42001 require this?',
    a: 'They require you to be able to show it. The EU AI Act, the NIST AI Risk Management Framework and ISO/IEC 42001 all demand documented risk classification, monitoring and human oversight, and none of them tells you what a sufficient technical check looks like. That gap is where most programmes fail an audit: the policy exists, the evidence does not. We publish Open Governance, an open-source governance server that discovers AI systems, classifies risk against those three frameworks and produces audit-ready compliance matrices, so the paperwork is generated from the running system rather than written about it. One timing correction worth having: the Digital Omnibus moved the Act’s Annex III high-risk obligations from 2 August 2026 to 2 December 2027, but the Article 50 transparency duties, which cover chatbot disclosure and synthetic-content marking, took effect on 2 August 2026 and are already live.',
  },
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
  name: 'Safe AI: building AI systems that can be checked',
  description:
    'How to make an AI system safe enough to deploy in the public sector: gates that can fail, closed-world checks on what a model asserts, and audit evidence generated from the running system. Plus the complete index of Tesseract Academy ontology work: register integrity ontologies, standards crosswalks, verification research, language model grounding and catalogue conformance, in OWL 2, SKOS and SHACL.',
  url: 'https://gov.tesseract.academy/ontology',
  isPartOf: { '@id': 'https://gov.tesseract.academy/#website' },
  about: [
    { '@type': 'Thing', name: 'AI safety' },
    { '@type': 'Thing', name: 'Safeguarded AI' },
    { '@type': 'Thing', name: 'AI assurance' },
    { '@type': 'Thing', name: 'AI governance' },
    { '@type': 'Thing', name: 'Hallucination (artificial intelligence)' },
    { '@type': 'Thing', name: 'Formal verification' },
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
          Safe AI
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          An AI system is safe enough to deploy when it cannot serve an answer, or take an action, that
          nothing was able to check. That is an engineering property, not a policy one, and it is what we
          build. The evidence sits below: {ONTOLOGY_ASSET_COUNT} open studies across{' '}
          {ONTOLOGY_REPO_COUNT} public repositories, every one reproducible from public data, every headline
          computed at least two independent ways, and the hypotheses that died reported rather than dropped.
          If you are here to commission work rather than read it, the{' '}
          <Link to="/services/ontology-engineering" className="text-gov-blue hover:underline">
            ontology engineering service page
          </Link>{' '}
          and the{' '}
          <Link to="/services/ai-governance" className="text-gov-blue hover:underline">AI governance service page</Link>{' '}
          are the shorter routes.
        </p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">The failure that actually happens</h2>
        <p className="text-gov-dark leading-relaxed text-base">
          The AI failure that reaches a public body is rarely dramatic. It is a fluent system producing a
          confident answer that is wrong, in a pipeline where no component is capable of noticing. Retrieval
          does not notice, because retrieval returns relevant text and relevance is not truth. The model does
          not notice, because the same machinery generates the error and the explanation of it. A human
          reviewer does not notice at volume, because the output reads exactly like the outputs that were
          right. Safety, in the only sense that survives contact with an audit, means putting something in
          the loop that is able to fail.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          There are three places to put it, and we have published a measured reference implementation for
          each. The first is the term level: check what the model asserts against a published vocabulary it
          does not get to extend. The second is the action level: permit an action only if it carries a
          certificate a small trusted component can verify. The third is the system level: generate the
          governance evidence from the running system rather than writing a document about it.
        </p>
        <ul className="space-y-4 text-base text-gov-dark/90 leading-relaxed border-l-2 border-gov-border/50 pl-5">
          <li>
            <Link to="/research/ontology-correctness-benchmark" className="font-semibold text-gov-blue hover:underline">
              The gate most teams think they already have does not exist
            </Link>
            . Open-world SHACL accepted all 300 data graphs we seeded with a fabricated term. A closed-world
            vocabulary gate caught all 300, with no false positives on clean data. If a language model is
            writing your RDF, shape validation is not the check you think it is.
          </li>
          <li>
            <Link to="/research/fine-tuning-llm-government-data-standard" className="font-semibold text-gov-blue hover:underline">
              Grounding a model in a standard moves the numbers
            </Link>
            . On the UK Information Exchange Standard, confabulated terms fell from 93.7 per cent of outputs
            to 1.0 per cent and conformance rose from zero to 88.6 per cent. On a{' '}
            <Link to="/research/neurosymbolic-space-kg" className="text-gov-blue hover:underline">
              space object catalogue
            </Link>
            , hallucinated terms fell from 13.81 per output to 0.06.
          </li>
          <li>
            <Link to="/research/proof-carrying-action-gatekeeper" className="font-semibold text-gov-blue hover:underline">
              An action gate can be verified rather than tested
            </Link>
            . Our reference proof-carrying-action gatekeeper blocks 672 of 672 unsafe actions and admits 504
            of 504 safe ones across 96 reachable states and 1,176 transitions, at 0.36 microseconds per check
            with a 31-line trusted core. Remove it and 57 per cent of actions violate the safety
            specification.
          </li>
          <li>
            <Link to="/research/health-ai-privacy-fairness-assurance" className="font-semibold text-gov-blue hover:underline">
              Auditing one safety property at a time hides the trade
            </Link>
            . On real clinical readmission data, tightening differential privacy cost minority subgroups 2.6
            times more accuracy than the majority while the membership leakage it targeted was already near
            zero. Almost all the equity cost, almost none of the privacy gain, visible only when both planes
            sit on one report card.
          </li>
        </ul>
        <p className="text-gov-dark leading-relaxed text-base">
          The regulatory layer sits on top of this and does not replace it. The EU AI Act, the NIST AI Risk
          Management Framework and ISO/IEC 42001 all require documented risk classification, monitoring and
          oversight, and none of them specifies what a sufficient technical check looks like. That is the gap
          most programmes fail an audit in: the policy exists and the evidence does not. Our{' '}
          <a href="https://github.com/fabio-rovai/open-governance" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">
            Open Governance server
          </a>{' '}
          is the open-source answer to that half, discovering AI systems, classifying risk against all three
          frameworks and emitting audit-ready compliance matrices through 48 governance tools. The{' '}
          <Link to="/services/ai-governance" className="text-gov-blue hover:underline">AI governance service</Link>{' '}
          is how it gets applied.
        </p>
      </section>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">Why the check is usually an ontology</h2>
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
          That capability is the whole reason ontologies came back, and it is what makes them a safety
          component rather than a documentation exercise. An ontology is the cheapest artefact that can tell
          a system it is wrong at the term level, without a human in the loop and without a labelled answer
          key to compare against. Everything above depends on having one: you cannot run a closed-world check
          against a vocabulary nobody wrote down, and you cannot issue a certificate about an action whose
          preconditions were never modelled formally.
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
            The full ontology and verification index, grouped by what each study does. The verification and
            language model grounding groups are where the safe AI evidence lives; the register and crosswalk
            groups are the domains it was measured in. Open a group to see the studies inside it, each with
            its repository where one exists.
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
            Give us the ontology, standard or schema your AI system is meant to be checked against and we
            will tell you what it can and cannot actually reject, at no cost, within five working days. It is
            the fastest way to find out whether your safety story has a gate in it.
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
