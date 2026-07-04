import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../data/caseStudies';

export const CaseStudyItem: React.FC<{ data: CaseStudy }> = ({ data }) => {
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
