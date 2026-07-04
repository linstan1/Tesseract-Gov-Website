import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudyItem } from '../components/CaseStudyItem';
import { CASE_STUDIES, CATEGORY_LABELS } from '../data/caseStudies';

export const UseCases: React.FC = () => {
  const deliveryItems = CASE_STUDIES.filter(cs => cs.category === 'delivery');

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Use Cases</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Evidence of delivery. Real projects across UK public sector and government-funded programmes.
        </p>
      </div>

      <section className="space-y-6">
        <div className="border-b border-gov-border/30 pb-4">
          <h2 className="text-2xl font-bold text-gov-dark">{CATEGORY_LABELS['delivery']}</h2>
          <p className="text-sm text-gov-secondary mt-1">Contracts commissioned by government and government-funded programmes.</p>
        </div>
        <div className="space-y-6">
          {deliveryItems.map(uc => (
            <CaseStudyItem key={uc.id} data={uc} />
          ))}
        </div>
      </section>

      <section className="bg-gov-blue/5 border border-gov-blue/20 p-8 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gov-dark mb-1">{CATEGORY_LABELS['open-demo']}</h2>
          <p className="text-sm text-gov-secondary max-w-2xl">
            Our self-funded research programme: open standards, evidence bases and reference implementations built on public data, published in full for independent verification and reuse.
          </p>
        </div>
        <Link to="/research" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors flex-shrink-0">
          Explore the research programme <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <aside className="pt-4">
        <p className="text-sm text-gov-secondary">
          See also: <Link to="/research" className="text-gov-blue hover:underline">Research &amp; publications</Link> · <Link to="/insights" className="text-gov-blue hover:underline">Insights</Link> · <Link to="/services/research-policy" className="text-gov-blue hover:underline">Research &amp; policy advisory</Link>
        </p>
      </aside>
    </div>
  );
};
