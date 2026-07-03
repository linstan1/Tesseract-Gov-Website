import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/welsh-government-land-valuation#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/welsh-government-land-valuation',
  headline: 'Welsh Government Land Valuation Research: Tesseract Academy',
  description:
    'Tesseract Academy tested five land valuation methodologies across 1,912 Welsh LSOAs for Welsh Government, informing local government finance policy. Published on GOV.WALES, March 2026.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-03-01',
  dateModified: '2026-04-29',
  about: {
    '@type': 'GovernmentService',
    name: 'Welsh Government Local Government Finance Policy',
    serviceOperator: {
      '@type': 'GovernmentOrganization',
      name: 'Welsh Government',
      url: 'https://www.gov.wales',
    },
  },
  keywords:
    'land valuation, machine learning, Welsh Government, local government finance, LSOA, AI policy',
};

const METHODOLOGIES = [
  {
    id: '1',
    name: 'Market-Based Statistical Valuation',
    description:
      'Regression and hedonic pricing models anchored to observed market transactions.',
  },
  {
    id: '2',
    name: 'Advanced Algorithmic and Machine-Learning Applications',
    description:
      'Gradient boosting, random forests, and neural network models trained on land-use and transaction data.',
  },
  {
    id: '3',
    name: 'Formula-Based Valuation by Land Area',
    description:
      'Rule-based per-hectare and per-unit formulae applied uniformly across geography.',
  },
  {
    id: '4',
    name: 'Conventional Valuation Approaches',
    description:
      'Professional surveyor methodologies consistent with RICS Red Book standards.',
  },
  {
    id: '5',
    name: 'Innovative Experimental Approaches',
    description:
      'Novel hybrid methods combining spatial econometrics with satellite-derived land-cover data.',
  },
];

export const WelshGovernment: React.FC = () => {
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
          Case Study: Welsh Government
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Welsh Government Land Valuation Research
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Published <time dateTime="2026-03">March 2026</time>. Findings directly inform Welsh Government local government finance policy and are cited in a Welsh Government Ministerial Written Statement.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Coverage</p>
          <p className="text-3xl font-extrabold text-gov-dark">1,912</p>
          <p className="text-sm text-gov-secondary mt-1">Lower Super Output Areas</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Geography</p>
          <p className="text-3xl font-extrabold text-gov-dark">99%</p>
          <p className="text-sm text-gov-secondary mt-1">of Welsh LSOAs covered</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Methodologies Tested</p>
          <p className="text-3xl font-extrabold text-gov-dark">5</p>
          <p className="text-sm text-gov-secondary mt-1">distinct valuation approaches</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Welsh Government needed to evaluate different approaches for assessing land values to support local government finance policy, specifically to inform potential reform of the council tax and non-domestic rates system in Wales. Existing methods lacked a systematic comparison across the full Welsh geography. The <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">project was commissioned under Welsh Government procurement standards</a> and published on <a href="https://www.gov.wales" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">GOV.WALES</a>.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The core question: could AI-driven methodologies outperform traditional approaches, and which method would best support equitable, evidence-based finance policy? The work aligned with priorities set by the <strong>Office for National Statistics</strong> (ONS) on subnational economic statistics and the <strong>Office for Statistics Regulation</strong> (OSR) framework for assured public statistics. The <strong>Department for Science Innovation and Technology</strong> (DSIT) national AI strategy also identifies geospatial and property data as a priority AI application domain.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Five Methodologies Tested</h2>
        <p className="text-gov-secondary leading-relaxed">
          The analysis spans 1,912 <strong>Lower Super Output Areas</strong> (LSOAs) with land transactions, the small-area geographic unit defined and maintained by the <strong>Office for National Statistics</strong>, which is around 99% of all Welsh LSOAs, enabling direct, like-for-like comparison consistent with UK-wide subnational data standards.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Methodology</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Approach</th>
              </tr>
            </thead>
            <tbody>
              {METHODOLOGIES.map((m, i) => (
                <tr
                  key={m.id}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{m.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{m.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{m.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Assurance</h2>
          <ul className="space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">•</span>
              <span>Delivered under Welsh Government procurement standards.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">•</span>
              <span>Full summary and comprehensive report published on GOV.WALES.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">•</span>
              <span>Cited in a Welsh Government Ministerial Written Statement (17 March 2026).</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            Published March 2026. The comparative analysis across all five methodologies directly informs Welsh Government local government finance policy. Of the five methodologies tested, the machine-learning method (Gradient Boosting / CatBoost) delivered the best overall predictive performance, though the report is candid that all five remain below the accuracy required for statutory valuation. Findings align with <strong>HM Treasury</strong> Green Book guidance on appraisal and evaluation.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Findings are cited in a <a href="https://www.gov.wales/written-statement-testing-land-valuation-methodologies-publication-findings" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Welsh Government Ministerial Written Statement</a> (17 March 2026). The full report is publicly available on <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">GOV.WALES</a> and as a downloadable PDF.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The Welsh Government land valuation research demonstrates exactly what mixed-methods AI analysis can achieve. Combining machine learning models with conventional valuation techniques across 1,912 lower super output areas gave Welsh Government a genuinely comparative evidence base for local finance policy reform."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Access the full report</p>
          <p className="text-sm text-gov-secondary mt-1">Published on GOV.WALES. Also available as a PDF download.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.gov.wales/testing-land-valuation-methods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            View on GOV.WALES
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="/papers/testing-land-valuation-methods-tesseract-academy-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            Download PDF
            <ExternalLink className="w-4 h-4" />
          </a>
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
