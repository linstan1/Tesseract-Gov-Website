import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { CASE_STUDIES, CATEGORY_LABELS, type CaseStudy, type CaseStudyCategory } from '../data/caseStudies';

const CATEGORY_ORDER: CaseStudyCategory[] = ['delivery', 'open-demo'];

const CATEGORY_BLURB: Record<CaseStudyCategory, string> = {
  'delivery': 'Contracts commissioned by government and government-funded programmes.',
  'open-demo': 'Self-initiated, fully reproducible open demonstrations and standards, built on public data.',
};

const UseCaseItem: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-l-2 border-l-gov-blue hover:border-l-gov-blue-dark transition-colors">
      <button className="flex justify-between items-start w-full text-left group" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${data.title}`}>
        <h3 className="text-lg font-semibold text-gov-text font-serif group-hover:text-gov-blue transition-colors">{data.title}</h3>
        <span className="text-gov-blue hover:scale-105 transition-transform flex-shrink-0 ml-2">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
           <h4 className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">The Challenge</h4>
           <p className="text-gov-text leading-relaxed text-sm">{data.challenge}</p>
        </div>
        <div>
           <h4 className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">The Outcome</h4>
           <p className="text-gov-text font-medium leading-relaxed text-sm">{data.outcome}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-gov-border grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Intervention</h4>
            <p className="text-sm text-gov-text leading-relaxed">{data.intervention}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Assurance & Ethics</h4>
            <p className="text-sm text-gov-text leading-relaxed">{data.assurance}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Reusable Assets</h4>
            <p className="text-sm text-gov-text leading-relaxed">{data.reusable}</p>
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gov-border">
        <Link to={data.slug} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          Read the full case study <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
};

export const UseCases: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Use Cases</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Evidence of delivery. Real projects across UK public sector and government-funded programmes, plus self-initiated open demonstrations built on public data.
        </p>
      </div>

      {CATEGORY_ORDER.map(category => {
        const items = CASE_STUDIES.filter(cs => cs.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="space-y-6">
            <div className="border-b border-gov-border/30 pb-4">
              <h2 className="text-2xl font-bold text-gov-dark">{CATEGORY_LABELS[category]}</h2>
              <p className="text-sm text-gov-secondary mt-1">{CATEGORY_BLURB[category]}</p>
            </div>
            <div className="space-y-6">
              {items.map(uc => (
                <UseCaseItem key={uc.id} data={uc} />
              ))}
            </div>
          </section>
        );
      })}

      <aside className="pt-4">
        <p className="text-sm text-gov-secondary">
          See also: <Link to="/research" className="text-gov-blue hover:underline">Research &amp; publications</Link> · <Link to="/insights" className="text-gov-blue hover:underline">Insights</Link> · <Link to="/services/research-policy" className="text-gov-blue hover:underline">Research &amp; policy advisory</Link>
        </p>
      </aside>
    </div>
  );
};
