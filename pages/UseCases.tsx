import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const USE_CASES = [
  {
    id: 'uc1',
    title: 'Welsh Government — Land Valuation Research',
    challenge: 'The Welsh Government needed independent research to assess the feasibility of a new land value tax model, requiring statistical analysis of land registry data across Wales and evidence synthesis from international comparators.',
    intervention: 'Delivered a mixed-methods research programme combining quantitative land registry analysis with qualitative stakeholder interviews across Welsh local authorities. Produced an evidence report with policy recommendations presented to Welsh Government officials in Swansea.',
    assurance: 'Aligned with HM Treasury Green Book appraisal methodology. Peer-reviewed by Welsh Government economists.',
    outcome: 'Research findings directly informed Welsh Government tax policy deliberations. Evidence report cited in Senedd committee proceedings.',
    reusable: 'Land valuation statistical framework and international comparator methodology.',
  },
  {
    id: 'uc2',
    title: 'National Digital Twin Programme — Ontology Development',
    challenge: 'The National Digital Twin Programme (NDTP), part of the Centre for Digital Built Britain, needed a robust ontology framework to enable interoperability across digital twin systems in the built environment sector.',
    intervention: 'Led ontology architecture and development workstreams, designing semantic data models that enable cross-domain data sharing between infrastructure digital twins. Collaborated with academic and industry partners to ensure alignment with existing standards.',
    assurance: 'Developed in line with ISO 23247 and IEC 63278 digital twin standards. Validated through cross-sector interoperability testing.',
    outcome: 'Ontology framework adopted as foundational layer for NDTP Information Management Framework, enabling consistent data exchange across UK infrastructure digital twins.',
    reusable: 'Open ontology patterns and semantic interoperability toolkit.',
  },
  {
    id: 'uc3',
    title: 'BridgeAI — Skills Hub & Sector Adoption',
    challenge: 'BridgeAI (Innovate UK-funded programme) needed to accelerate AI adoption across underserved UK sectors including construction, creative industries, and transport, with a focus on practical skills development and knowledge transfer.',
    intervention: 'Designed and delivered the BridgeAI Skills Hub, providing AI literacy and implementation training. Organised sector-specific workshops and the Skills Hub launch event at Ona Studios, London. Created reusable training materials tailored to non-technical sector professionals.',
    assurance: 'Programme aligned with Innovate UK reporting requirements and UKRI impact framework.',
    outcome: 'Successfully launched Skills Hub serving multiple UK sectors. Training materials adopted by sector bodies for ongoing AI upskilling across their networks.',
    reusable: 'Modular AI skills curriculum adaptable across sectors.',
  },
  {
    id: 'uc4',
    title: 'Kalgera & Fintech Scotland — Financial Vulnerability Research',
    challenge: 'Kalgera (AI-powered financial vulnerability detection fintech) and Fintech Scotland needed rigorous research into how AI can better identify and protect financially vulnerable customers, particularly elderly and cognitively impaired individuals.',
    intervention: 'Conducted applied research combining behavioural data analysis with ethical AI assessment frameworks. Evaluated Kalgera\'s vulnerability detection algorithms against real-world outcomes and regulatory expectations (FCA Consumer Duty).',
    assurance: 'Research aligned with FCA Consumer Duty requirements and ICO AI auditing guidance. Ethical review conducted against UK AI regulatory framework.',
    outcome: 'Research findings contributed to Kalgera\'s product refinement and informed Fintech Scotland\'s policy recommendations on AI-driven consumer protection in financial services.',
    reusable: 'Financial vulnerability AI assessment framework and ethical evaluation methodology.',
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
          Evidence of delivery. Real projects across UK public sector and government-funded programmes.
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
