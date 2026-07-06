import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/zero-emission-flight-ecosystem#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/zero-emission-flight-ecosystem',
  headline: 'Mapping the UK Zero-Emission Flight Ecosystem: an Open, Validated Reference Graph',
  description:
    'An open, SHACL-validated knowledge graph of the UK hydrogen and electric aviation ecosystem: 42 real entities (organisations, airports, programmes, projects, funders, technologies) and 55 relationships, validated at zero SHACL violations with enforced referential integrity. Open source via Open Ontologies.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-06',
  dateModified: '2026-07-06',
  about: { '@type': 'Thing', name: 'UK zero-emission flight ecosystem data modelling' },
  keywords:
    'zero-emission flight, hydrogen aviation, Jet Zero, ZEFI, ATI FlyZero, Project NAPKIN, ZeroAvia, knowledge graph, ontology, SHACL, linked data, technology readiness, ecosystem mapping',
};

const ENFORCED = [
  {
    id: '1',
    name: 'Every entity is labelled and typed',
    description:
      'All 42 entities carry a human-readable label and one of eight ecosystem types (organisation, airport, programme, project, funder, body, alliance, technology).',
  },
  {
    id: '2',
    name: 'Maturity is controlled and sourced',
    description:
      'Every technology carries a maturity from a fixed vocabulary (Research, Development, Demonstration, Pilot, Commercial) and a provenance string. Maturity is never unsourced.',
  },
  {
    id: '3',
    name: 'Referential integrity on every relationship',
    description:
      'The object of every relationship must be a declared entity of the correct type. Only stated links are represented; none are inferred. A negative test injects a dangling edge and confirms the validator catches it.',
  },
];

const TYPES = [
  ['Organisations', '15', 'ZeroAvia, Cranfield Aerospace, GKN, Rolls-Royce, Airbus, easyJet, Loganair and more'],
  ['Projects', '6', 'Project NAPKIN, HyFlyer II, H2GEAR, H2FlyGHT, Project Fresson, Project Acorn'],
  ['Programmes', '3', 'ZEFI, ATI FlyZero, the Jet Zero Strategy'],
  ['Funders', '3', 'Department for Transport, Aerospace Technology Institute, UKRI Future Flight Challenge'],
  ['Airports', '4', 'Heathrow, London City, Bristol, Glasgow'],
  ['Technologies', '7', 'Electrolysis, liquefaction, LH2 storage, fuel-cell powertrain, hydrogen combustion, refuelling'],
];

export const ZeroEmissionAviation: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open-data capability demonstration &middot; Zero-Emission Aviation
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Mapping the UK Zero-Emission Flight Ecosystem
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The UK zero-emission-flight sector has strong policy signals and funding, but the data on who is
          building what, who funds whom, and which technologies gate which pathway sits scattered across
          press releases, programme pages and reports. This is a worked, fully open demonstration of the
          data engineering that turns that fragmentation into a single, queryable, validated view, built
          on real named entities across the hydrogen and electric aviation ecosystem.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Entities</p>
          <p className="text-3xl font-extrabold text-gov-dark">42</p>
          <p className="text-sm text-gov-secondary mt-1">real, sourced organisations, projects and technologies</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Relationships</p>
          <p className="text-3xl font-extrabold text-gov-dark">55</p>
          <p className="text-sm text-gov-secondary mt-1">funds, develops, partners, uses-technology and more</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Validation</p>
          <p className="text-3xl font-extrabold text-gov-dark">0</p>
          <p className="text-sm text-gov-secondary mt-1">SHACL violations, with referential integrity enforced</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The UK is decarbonising aviation through the <strong>Jet Zero Strategy</strong> and significant
            public and private investment, from <strong>ATI FlyZero</strong> and the DfT-funded, CPC-led{' '}
            <strong>Zero Emission Flight Infrastructure (ZEFI)</strong> programme to demonstrators by
            ZeroAvia, Cranfield Aerospace Solutions, GKN Aerospace and Rolls-Royce. Yet the ecosystem
            remains fragmented across data sources, stakeholders and infrastructure, which limits the
            ability to see cross-sector relationships, track innovation and funding, and identify the
            end-to-end hydrogen pathways to zero-emission flight.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            That fragmentation is exactly the problem a coordination tool has to solve. Here we show the
            underlying data engineering done in the open: a typed entity model, a controlled vocabulary,
            and machine-readable validation so that <strong>only stated relationships are represented and
            none are inferred</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The ecosystem, as one validated graph</h2>
        <p className="text-gov-secondary leading-relaxed">
          Every node below is a real, sourced entity, and every edge a stated relationship: a funder
          funding a programme, a company developing a technology, a partner on a project, an aircraft
          demonstrating at an airport. The result is a single view that a policy maker, investor or
          airport planner can interrogate, the ecosystem-mapping primitive behind any &ldquo;single view&rdquo;
          coordination platform.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img
            src="/case-studies/zef-ecosystem-graph.png"
            alt="Network graph of the UK zero-emission flight ecosystem: 42 entities coloured by type (organisations, airports, programmes, projects, funders, bodies, alliances, technologies) connected by 55 relationships, from the Department for Transport and ATI down through Project NAPKIN, ZeroAvia, GKN and the hydrogen production-to-propulsion chain."
            className="w-full"
          />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            The UK zero-emission flight ecosystem as an open, SHACL-validated reference graph: 42 entities,
            55 relationships, coloured by type. An interactive version is in the open-source repository.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What the validation enforces</h2>
        <p className="text-gov-secondary leading-relaxed">
          A graph is only a coordination tool if it can be trusted. The SHACL shapes make three guarantees,
          the same discipline a real coordination platform needs so its links are provided and validated,
          never guessed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Rule</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it guarantees</th>
              </tr>
            </thead>
            <tbody>
              {ENFORCED.map((c, i) => (
                <tr key={c.id} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 text-gov-blue font-bold">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{c.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What the graph contains</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Count</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Examples</th>
              </tr>
            </thead>
            <tbody>
              {TYPES.map((r, i) => (
                <tr key={r[0]} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r[0]}</td>
                  <td className="px-4 py-3 text-gov-blue font-bold">{r[1]}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-secondary leading-relaxed">
          The technology entities are linked by a <strong>feeds-into</strong> chain that models the physical
          hydrogen pathway, from green electrolysis through liquefaction, distribution, cryogenic on-airport
          storage and refuelling to the fuel-cell powertrain and hydrogen combustion, each carrying an
          indicative, dated maturity. That is the pathways-and-dependencies primitive, in miniature.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why it matters</h2>
          <p className="text-gov-dark leading-relaxed">
            The three primitives shown here, a typed stakeholder graph, a controlled-vocabulary technology
            model with sourced maturity, and referential-integrity validation, are the data spine of any
            &ldquo;single view&rdquo; coordination tool for a fragmented sector. Building them in the open, on real
            named entities, is how we demonstrate the capability rather than assert it. This is an
            independent open reference dataset, not a deliverable for any organisation named within it, and
            it is fully reproducible.
          </p>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark">Open source and reproducible</h2>
        <p className="text-sm text-gov-secondary">
          The dataset, ontology, SHACL shapes, build-and-validate pipeline and interactive graph are
          published open source (CC BY 4.0) via Open Ontologies. Indicative maturity values are compiled
          from public roadmaps and statements, each dated, and are not an authoritative assessment.
        </p>
        <a
          href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/zero-emission-aviation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline"
        >
          View the code and data on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>
    </article>
  );
};
