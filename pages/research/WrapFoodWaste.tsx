import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/wrap-food-loss-waste-taxonomy#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/wrap-food-loss-waste-taxonomy',
  headline: 'WRAP Food Loss and Waste Data Taxonomy | Tesseract Academy',
  description:
    'Tesseract Academy was commissioned by WRAP to build a structured, machine-readable Food Loss and Waste data taxonomy (PRC228): five coded dimensions and 84 entities expressed in SKOS and JSON-LD, grounded in the Food Loss and Waste Standard, the WRAP Data Capture Sheet and Codex GSFA, supporting consistent measurement across the UK Food and Drink Pact (formerly the Courtauld Commitment 2030).',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-05-01',
  dateModified: '2026-06-22',
  about: {
    '@type': 'Thing',
    name: 'Food loss and waste data standardisation',
  },
  keywords:
    'WRAP, food loss and waste, data taxonomy, UK Food and Drink Pact, Courtauld Commitment 2030, SKOS, JSON-LD, Codex GSFA, data standards, FoodOn, FoodEx2',
};

const ENTITY_GROUPS = [
  { id: '1', name: 'Product Category', description: 'Hierarchical food product classes (e.g. bakery, dairy, fruit and vegetables) with unique codes.' },
  { id: '2', name: 'Supply Chain Stage', description: 'Primary production, manufacturing, retail, hospitality and household stages.' },
  { id: '3', name: 'Waste Destination', description: 'Aligned to the Food Loss and Waste Standard destination categories.' },
  { id: '4', name: 'Intervention Type', description: 'Coded prevention and redistribution actions for consistent intervention tracking.' },
  { id: '5', name: 'Food Waste Hierarchy', description: 'Prevention through to disposal, ranked for comparable reporting.' },
];

export const WrapFoodWaste: React.FC = () => {
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
          Case Study: WRAP
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          WRAP Food Loss and Waste Data Taxonomy
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Commissioned by WRAP (procurement reference PRC228) to turn the international Food Loss and Waste Standard into structured, machine-readable data infrastructure for its Food Programme and global Food Pact Network.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Entity groups</p>
          <p className="text-3xl font-extrabold text-gov-dark">5</p>
          <p className="text-sm text-gov-secondary mt-1">coded classification dimensions</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Coded entities</p>
          <p className="text-3xl font-extrabold text-gov-dark">84</p>
          <p className="text-sm text-gov-secondary mt-1">SKOS concepts across five dimensions</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Reach</p>
          <p className="text-3xl font-extrabold text-gov-dark">~200</p>
          <p className="text-sm text-gov-secondary mt-1">UK Food and Drink Pact organisations</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            WRAP's <a href="https://www.wrap.ngo/taking-action/food-drink/initiatives/courtauld-commitment" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">UK Food and Drink Pact</a> (formerly the Courtauld Commitment 2030) asks the UK food industry to halve food waste by 2030 (UN Sustainable Development Goal 12.3), uniting nearly 200 organisations across the supply chain. Together with the wider international network of food pacts, signatories report their food loss and waste data using locally divergent definitions, product groupings and destination categories. Without a shared, coded classification system this data cannot be reliably aggregated or compared, quietly undermining the ability to measure collective progress against the headline target.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            WRAP needed the conceptual Food Loss and Waste Accounting and Reporting Standard translated into implementable, machine-readable data infrastructure that could be used consistently across countries and reporting tools while remaining platform-agnostic.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What We Delivered</h2>
        <p className="text-gov-secondary leading-relaxed">
          We built the taxonomy as working data infrastructure, not a static reference document: five entity groups with hierarchical classifications, controlled vocabularies and unique codes (84 coded entities, 680 RDF triples), expressed as a machine-readable SKOS and JSON-LD schema with structural coverage validation and version-controlled change governance. Machine-checkable SHACL validation shapes and FoodEx2 mappings are scaffolded for Phase 2.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Entity group</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {ENTITY_GROUPS.map((g, i) => (
                <tr key={g.id} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 text-gov-blue font-bold">{g.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{g.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{g.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-secondary leading-relaxed">
          The schema is interoperable with the reference food ontologies <strong>FoodOn</strong> and EFSA <strong>FoodEx2</strong>, and the validation rules reject malformed or inconsistent records before they corrupt aggregation. Delivered through iterative co-design with WRAP subject-matter experts.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            A publishable, machine-readable taxonomy that lets the Food Pact Network classify and compare food waste data on a like-for-like basis. It is grounded in the international Food Loss and Waste Accounting and Reporting Standard, the WRAP Data Capture Sheet and Codex GSFA, positioning Tesseract Academy not just as users of data standards but as builders of the infrastructure that implements them.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Unlike consultancies that design taxonomies as static reference documents, we build structured classification systems as working data infrastructure, with machine-readable schemas, validation rules and hierarchical codes that can be implemented directly in reporting tools."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Related open-source work</p>
          <p className="text-sm text-gov-secondary mt-1">See our open wastewater data-quality case study, which re-points the same validation approach onto environmental monitoring data.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.wrap.ngo/taking-action/food-drink/initiatives/courtauld-commitment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            About the Pact
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            to="/research/wastewater-effluent-data-quality"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            Data-quality demonstration
          </Link>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </article>
  );
};
