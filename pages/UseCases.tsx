import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const USE_CASES = [
  {
    id: 'uc1',
    title: 'AI Governance Framework for Local Authority',
    challenge: 'A large metropolitan council needed to adopt AI tools for planning optimization but lacked a governance framework to ensure ethical compliance and data safety.',
    intervention: 'Conducted a 6-week Discovery phase auditing current data practices. Developed a bespoke "Ethics-First" adoption roadmap aligned with national guidance.',
    assurance: 'Aligned with GDS Service Standards and GDPR.',
    outcome: 'Council successfully procured AI planning software with full stakeholder buy-in and zero compliance flags during audit.',
    reusable: 'Ethical auditing rubric available for reuse.',
  },
  {
    id: 'uc2',
    title: 'Data Literacy Training for Central Dept',
    challenge: 'A central government department faced a skills gap in managing data-driven policy decisions, leading to reliance on external consultants.',
    intervention: 'Designed and delivered a "Train the Trainer" upskilling program. Focused on practical SQL, dashboard interpretation, and statistical bias recognition.',
    assurance: 'Curriculum vetted by departmental Heads of Profession.',
    outcome: 'Trained 150+ civil servants. Reduced external contractor spend by 20% in the following quarter.',
    reusable: 'Modular training curriculum (Open Standard compatible).',
  },
  {
    id: 'uc3',
    title: 'Health Data Platform Discovery',
    challenge: 'An NHS Trust needed to unify patient data from three legacy systems to improve triage times but faced severe interoperability issues.',
    intervention: 'Technical architecture review and user journey mapping for clinicians. Prototyped a middleware solution in Alpha.',
    assurance: 'Clinical safety risk assessment (DCB0129) drafted.',
    outcome: 'Alpha successfully demonstrated 40% reduction in data retrieval time. Project moved to Beta.',
    reusable: 'Interoperability standard definitions.',
  },
];

const UseCaseItem: React.FC<{ data: typeof USE_CASES[0] }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-l-2 border-l-gov-blue hover:border-l-gov-blue-dark transition-colors">
      <div className="flex justify-between items-start cursor-pointer group" onClick={() => setExpanded(!expanded)}>
        <h3 className="text-lg font-semibold text-gov-text font-serif group-hover:text-gov-blue transition-colors">{data.title}</h3>
        <button className="text-gov-blue focus:outline-none hover:scale-105 transition-transform">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

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
    </Card>
  );
};

export const UseCases: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <div>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Use Cases</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Evidence of delivery. Anonymized where required to protect client confidentiality.
        </p>
      </div>

      <div className="space-y-6">
        {USE_CASES.map(uc => (
          <UseCaseItem key={uc.id} data={uc} />
        ))}
      </div>
    </div>
  );
};
