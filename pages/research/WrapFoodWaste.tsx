import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/wrap-food-loss-waste-taxonomy#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/wrap-food-loss-waste-taxonomy',
  headline: 'WRAP Food Loss and Waste Data Taxonomy | Tesseract Academy',
  description:
    'Tesseract Academy has been commissioned by WRAP to develop a Food Loss and Waste data taxonomy for its Food Programme and global Food Pact Network. The engagement is in delivery. This page sets out the measurement problem the work addresses.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-05-01',
  dateModified: '2026-07-31',
  about: {
    '@type': 'Thing',
    name: 'Food loss and waste data standardisation',
  },
  keywords:
    'WRAP, food loss and waste, data taxonomy, UK Food and Drink Pact, data standards, comparable reporting',
};

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
          Engagement: WRAP
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          WRAP Food Loss and Waste Data Taxonomy
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Tesseract Academy has been commissioned by WRAP to develop a Food Loss and Waste data taxonomy for its Food Programme and global Food Pact Network.
        </p>
      </header>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">Status</p>
        <p className="text-gov-dark leading-relaxed">
          This engagement is currently in delivery. The material below describes the measurement problem the work addresses. Design detail, outputs and results are held with the client and are not published here.
        </p>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Problem</h2>
          <p className="text-gov-dark leading-relaxed">
            WRAP's UK Food and Drink Pact (formerly the Courtauld Commitment 2030) asks the UK food industry to halve food waste by 2030, in line with UN Sustainable Development Goal 12.3. It unites organisations across the whole supply chain, from primary production through manufacturing and retail to hospitality and the household.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Signatories, and the wider international network of food pacts, report their food loss and waste using locally divergent definitions, product groupings and destination categories. The same physical tonne of waste can be counted under different labels in different countries, different reporting tools and sometimes different parts of the same business.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Without a shared, coded classification system that data cannot be reliably aggregated or compared. Progress against a headline target then rests on numbers that were never commensurable in the first place, and the failure is silent: the totals still add up, they just do not mean what they appear to mean.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why It Is Hard</h2>
          <p className="text-gov-dark leading-relaxed">
            The international Food Loss and Waste Accounting and Reporting Standard is a conceptual framework. It settles what should be counted and why, but it is not something a reporting tool can execute. Turning a conceptual standard into implementable, machine-readable data infrastructure means resolving the boundary cases the framework deliberately leaves open, doing so consistently across jurisdictions with different waste regimes, and keeping the result platform-agnostic so that no signatory is forced onto a particular system in order to report.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            It also has to survive change. Classifications drift as products, processes and regulations move, so the structure needs version-controlled governance rather than a document that is correct on the day it is signed off.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Unlike consultancies that design taxonomies as static reference documents, we build structured classification systems as working data infrastructure, with machine-readable schemas, validation rules and hierarchical codes that can be implemented directly in reporting tools."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
        <p className="font-semibold text-gov-dark">Related open work</p>
        <p className="text-sm text-gov-secondary mt-1">
          Our published, open-source work on the same problem class is available elsewhere on this site: the{' '}
          <Link to="/research/waste-reporting-loss" className="text-gov-blue underline hover:text-gov-blue-dark">
            information loss in UK waste reporting
          </Link>{' '}
          study, and the{' '}
          <Link to="/research/wastewater-effluent-data-quality" className="text-gov-blue underline hover:text-gov-blue-dark">
            wastewater data-quality
          </Link>{' '}
          demonstration.
        </p>
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
