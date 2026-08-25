import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ONTOLOGY_ASSET_COUNT, ONTOLOGY_REPO_COUNT } from '../../data/ontologyIndex';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://gov.tesseract.academy/services/ontology-engineering#service',
  name: 'Ontology Engineering and Knowledge Graph Consultancy',
  alternateName: [
    'Ontology consultancy',
    'Ontology engineering services',
    'Knowledge graph consultancy',
    'Knowledge graph engineering',
    'Semantic web consultancy',
    'Linked data consultancy',
    'RDF, OWL and SHACL consultancy',
    'Semantic data modelling',
    'Taxonomy and SKOS vocabulary design',
    'SPARQL and triple store engineering',
    'GraphRAG and semantic retrieval',
  ],
  provider: {
    '@type': 'Organization',
    '@id': 'https://gov.tesseract.academy/#organization',
  },
  serviceType: 'Ontology engineering, knowledge graph design and semantic data assurance',
  description:
    'Ontology engineering in RDF, OWL 2, SKOS and SHACL for UK government and regulated industry. Domain ontology design, standards crosswalks, knowledge graph construction, and closed-world verification of AI-generated RDF. Delivered for the National Digital Twin Programme; published across 51 open studies and 29 public repositories.',
  url: 'https://gov.tesseract.academy/services/ontology-engineering',
  areaServed: 'GB',
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ontology engineering engagements',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain ontology design in OWL 2, SKOS and SHACL' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standards crosswalk and interoperability audit' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knowledge graph construction and validation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Verification of AI-generated RDF against a closed-world vocabulary gate' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Register and reference data assurance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ontology engineering training for in-house teams' } },
    ],
  },
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
    <p className="text-2xl font-extrabold text-gov-blue">{value}</p>
    <p className="text-sm text-gov-secondary mt-1">{label}</p>
  </div>
);

export const OntologyEngineering: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <header className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service: ontology engineering and knowledge graphs
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Ontology engineering in RDF, OWL 2 and SHACL
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We design domain ontologies, build knowledge graphs, and prove they are correct rather than
          merely well formed. Semantic web work in the full stack: RDF and linked data, OWL 2 and SKOS
          modelling, SHACL constraints, SPARQL and triple stores, taxonomy design and GraphRAG retrieval.
          We built the ontology extension tool for the UK National Digital Twin Programme, and we have
          published {ONTOLOGY_ASSET_COUNT} open ontology studies across {ONTOLOGY_REPO_COUNT} public
          repositories, every headline computed at least two independent ways. If a hypothesis died
          during the work, the study says so.
        </p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What we deliver</h2>

        <p className="text-gov-dark leading-relaxed text-base">
          Most ontology projects fail in the same place. The model is built, it loads, a validator
          reports zero violations, and the programme concludes the data is trustworthy. It is not.{' '}
          <a href="https://www.w3.org/TR/shacl/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">SHACL</a>,
          the W3C validation language everyone reaches for, operates under the open-world assumption: it
          silently passes any term it has no shape for. We measured this. Across three real vocabularies,
          open-world SHACL validated as conformant every one of 300 data graphs carrying a term that does
          not exist, drawn from 418 fabricated terms. A closed-world vocabulary gate caught all 300 with
          no false positives on clean data. That is not an edge case. It is the exact failure mode of a
          language model asked to author RDF, which is how a growing share of knowledge graphs now get built.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          So our engagements ship a check that can fail. We work in{' '}
          <a href="https://www.w3.org/TR/owl2-overview/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">OWL 2</a>,{' '}
          <a href="https://www.w3.org/TR/skos-reference/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">SKOS</a> and SHACL,
          on top of standard triple stores, and we add a closed-world gate over the vocabulary so a
          hallucinated or drifted term is rejected instead of accepted in silence. The tooling is our own
          open-source engine,{' '}
          <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Open Ontologies</a>,
          a single Rust binary with an in-memory Oxigraph store, a native OWL 2 DL tableaux reasoner,
          SHACL validation and SPARQL. There is no JVM to operate and nothing leaves your network.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          A typical engagement runs in four steps. We read the source standards by hand rather than
          trusting their documentation, because that is where the defects are: we have reported faults in
          the IATA ONE Record data model, in FIBO, in the W3C JSON-LD specification, in DCAT-US at the
          General Services Administration and in the USDA National Agricultural Library thesaurus, and each
          one is a public thread you can read. We then model the domain in OWL 2 with SKOS for the
          controlled vocabulary and SHACL for the constraints that have to hold. We build the instance
          graph from the real source data, not a sample. Finally we compute every headline figure two
          independent ways, using different libraries, and reconcile the difference before anything ships.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We also train teams to do this themselves. Our ontology engineering course covers RDF, RDFS,
          OWL 2 TBox and ABox modelling, SPARQL, SHACL, triple stores, GraphRAG and ontology governance
          across 15 lessons, and it is free. Public sector training is procurable through{' '}
          <a href="https://www.crowncommercial.gov.uk/agreements/RM6219" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">CCS RM6219</a>.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">How this differs from the usual options</h2>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Capability</th>
                <th className="px-6 py-4 font-semibold text-gov-blue">Tesseract Academy</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Semantic web consultancy</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Graph database vendor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Correctness of the finished model</td>
                <td className="px-6 py-4 text-gov-dark">Closed-world vocabulary gate over SHACL, measured on real corpora</td>
                <td className="px-6 py-4 text-gov-secondary">SHACL alone, which passes unknown terms</td>
                <td className="px-6 py-4 text-gov-secondary">Load succeeds, so the data is assumed valid</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Evidence you can check</td>
                <td className="px-6 py-4 text-gov-dark">{ONTOLOGY_ASSET_COUNT} published studies, {ONTOLOGY_REPO_COUNT} open repositories, reproducible from public data</td>
                <td className="px-6 py-4 text-gov-secondary">Client references, work usually under NDA</td>
                <td className="px-6 py-4 text-gov-secondary">Product benchmarks on vendor-chosen data</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Standards defects</td>
                <td className="px-6 py-4 text-gov-dark">Reported upstream to IATA, GLEIF, W3C, GSA and USDA</td>
                <td className="px-6 py-4 text-gov-secondary">Standards taken as given</td>
                <td className="px-6 py-4 text-gov-secondary">Out of scope</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Language model integration</td>
                <td className="px-6 py-4 text-gov-dark">Fine-tuned and constrained against the published vocabulary, with measured conformance</td>
                <td className="px-6 py-4 text-gov-secondary">Increasingly offered, rarely measured</td>
                <td className="px-6 py-4 text-gov-secondary">Retrieval over the graph, no term-level check</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Deployment</td>
                <td className="px-6 py-4 text-gov-dark">Single self-hosted binary, no JVM, data stays in your network</td>
                <td className="px-6 py-4 text-gov-secondary">Varies by engagement</td>
                <td className="px-6 py-4 text-gov-secondary">Licensed platform, often hosted</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Public sector procurement</td>
                <td className="px-6 py-4 text-gov-dark">CCS RM6200, RM6094, RM6126, RM6219 and RM6235</td>
                <td className="px-6 py-4 text-gov-secondary">Varies</td>
                <td className="px-6 py-4 text-gov-secondary">Software licence, not a service route</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">What we build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Domain ontologies</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              OWL 2 class and property models with a SKOS controlled vocabulary and SHACL shapes for the
              constraints that have to hold. Reified assertions where a fact needs a source and a date
              rather than being asserted flat.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Standards crosswalks</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Mappings between two or more published standards, with the loss measured rather than
              assumed. Our waste study quantified it in bits: of 5.907 bits of composition detail, the
              Simpler Recycling channel retains 38.4 per cent.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Knowledge graphs</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Instance graphs built from the whole source, with provenance on every assertion. Our space
              object graph carries 833,403 triples over all 70,122 catalogued objects in Earth orbit.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Verification for AI pipelines</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              A closed-world gate that rejects ontology terms your model invented. This is the layer that
              stops a plausible, fluent, wrong triple from entering the graph, and it is the part almost
              no RAG or agent stack currently has.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Register and reference data assurance</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Auditing the registers your systems join against. We have measured Companies House, the
              Global LEI System, the FDIC, EIOPA, ISTAT, CelesTrak and others, and found identifier
              failures in all of them.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Training and capability transfer</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              A 15-lesson ontology engineering course covering RDF, RDFS, OWL 2, SPARQL, SHACL, triple
              stores, GraphRAG and governance, plus in-house workshops for teams taking over a model we
              built with them.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Proof</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            National Digital Twin Programme, Department for Business and Trade
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            The AI ontology extension generator, open-sourced under Apache 2.0
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            NDTP needed to accelerate ontology development across UK infrastructure. We contributed to an
            open-source tool that automates ontology generation and extension through a web interface,
            combining data profiling, named entity recognition and language models to extract ontology
            entities from CSV, JSON and RDF/Turtle. It shipped as a production Streamlit application with
            a four-step wizard, built-in validation and iterative refinement, published on GitHub under
            the National-Digital-Twin organisation.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Stat value="3" label="Input formats: CSV, JSON, RDF/Turtle" />
            <Stat value="Apache 2.0" label="Code licence, OGL v3.0 for docs" />
            <Stat value="NDTP" label="Maintained by the programme" />
          </div>
          <p className="mt-6">
            <Link to="/research/national-digital-twin-programme" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            IES4, the UK Information Exchange Standard for defence and national security
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Term confabulation from 93.7 per cent to 1.0 per cent
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            An off-the-shelf model asked to write IES4 invents most of the vocabulary it uses. We
            fine-tuned Qwen3-Coder-30B on the standard and measured against the published ontology rather
            than against a judge model. Confabulated terms fell from 93.7 per cent of outputs to 1.0 per
            cent, and term conformance rose from zero to 88.6 per cent. The checkpoint is published openly
            on Hugging Face, so the numbers can be reproduced rather than taken on trust.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Stat value="93.7% to 1.0%" label="Confabulated ontology terms" />
            <Stat value="0% to 88.6%" label="Term conformance" />
            <Stat value="Open" label="Checkpoint published on Hugging Face" />
          </div>
          <p className="mt-6">
            <Link to="/research/fine-tuning-llm-government-data-standard" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the study <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            IATA ONE Record, the air cargo data standard
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Every property lost its domain axiom, and nobody had noticed
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            We audited six releases of the ONE Record data model ontology with two independent engines,
            rdflib and our own, which agree exactly. All 496 properties in the 2022-12 release declare an
            rdfs:domain. None of the 522 properties in 2023-12 do, and none of the 534 in 2024-12 do.
            Classes with no label rose from 1 to 58 over the same span and total lint issues rose from 2
            to 650. The audit is reproducible against the MIT-licensed public repository, and the finding
            went upstream.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Stat value="522 to 0" label="Properties declaring rdfs:domain" />
            <Stat value="2 to 650" label="Lint issues across six releases" />
            <Stat value="Two engines" label="rdflib and Open Ontologies, in agreement" />
          </div>
          <p className="mt-6">
            <Link to="/research/one-record-domain-axioms-korea" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the study <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>

        <div className="bg-gov-blue/5 border border-gov-blue/20 p-8 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gov-dark mb-1">All {ONTOLOGY_ASSET_COUNT} ontology studies</h3>
            <p className="text-sm text-gov-secondary max-w-2xl">
              Register integrity, standards crosswalks, verification research, language model grounding
              and catalogue conformance, each with a full write-up and, where one exists, the repository.
            </p>
          </div>
          <Link to="/ontology" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors flex-shrink-0">
            Browse the ontology work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to commission this service</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200, Artificial Intelligence DPS</p>
              <p className="text-gov-secondary text-sm mt-1">
                The main route for ontology design, knowledge graph delivery and verification work inside
                an AI programme.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6126, Research and Insights DPS</p>
              <p className="text-gov-secondary text-sm mt-1">
                For standards audits, crosswalk studies and register assurance commissioned as research
                rather than as build work.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct award below £10,000</p>
              <p className="text-gov-secondary text-sm mt-1">
                A scoped audit of an existing ontology or knowledge graph, or a crosswalk feasibility
                check, sits comfortably below threshold.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          Send us the ontology, the standard or the schema you are working against and we will tell you
          what it can and cannot verify, at no cost, within five working days. Contact{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>.
        </p>
      </section>
    </div>
  );
};
