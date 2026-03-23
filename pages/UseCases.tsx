import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const USE_CASES = [
  {
    id: 'uc1',
    title: 'Testing Land Valuation Methods: Welsh Government',
    challenge: 'The Welsh Government needed to evaluate different approaches for assessing land values to support local government finance policy development, comparing traditional and AI-driven methodologies.',
    intervention: 'Commissioned by Welsh Government to test five distinct valuation methodologies: market-based statistical valuation, advanced algorithmic and machine-learning applications, formula-based valuation by land area, conventional valuation approaches, and innovative experimental approaches.',
    assurance: 'Delivered under Welsh Government procurement standards. Full summary and comprehensive report published on GOV.WALES.',
    outcome: 'Produced a comprehensive comparative analysis across all five methodologies, published March 2026. Findings directly inform Welsh Government local government finance policy.',
    reusable: 'Valuation methodology comparison framework. Published reports available on GOV.WALES.',
  },
  {
    id: 'uc2',
    title: 'AI Ontology Extension Generator: National Digital Twin Programme',
    challenge: 'The National Digital Twin Programme (NDTP), a UK Government initiative under the Department for Business and Trade, needed to automate ontology development to accelerate the creation of digital twins across UK infrastructure.',
    intervention: 'Contributed to the development of an open-source AI-powered tool that automates ontology generation and extension through a web interface. The tool combines data profiling, Named Entity Recognition, and large language models to extract and generate ontology entities from multiple data formats (CSV, JSON, RDF/Turtle).',
    assurance: 'Open-source under Apache License 2.0 (code) and Open Government Licence v3.0 (documentation). Maintained by NDTP.',
    outcome: 'Delivered a production-ready Streamlit web application with a four-step wizard workflow, built-in validation and visualisation tools, and iterative refinement capabilities. Published on GitHub under National-Digital-Twin organisation.',
    reusable: 'Open-source tool available on GitHub (National-Digital-Twin/ndtp-ai-ontology-extension).',
  },
  {
    id: 'uc3',
    title: 'BridgeAI Programme: AI for UK Creatives',
    challenge: 'Innovate UK\'s BridgeAI programme needed to support the UK creative industries in adopting AI technologies, bridging the gap between cutting-edge AI research and practical implementation for creative sector SMEs.',
    intervention: 'Delivered a programme delivery report for the BridgeAI initiative, providing research-backed guidance on AI adoption for UK creatives. Led by Fabio Rovai and Dr Stylianos Kampakis, the work covered AI readiness assessment, implementation strategies, and practical tooling recommendations.',
    assurance: 'Funded by Innovate UK BridgeAI Programme. Aligned with UK industrial strategy for creative industries.',
    outcome: 'Programme delivery report completed, supporting AI adoption pathways for creative sector organisations across the UK.',
    reusable: 'AI adoption framework and readiness assessment methodology for creative industries.',
  },
  {
    id: 'uc4',
    title: 'Financial Vulnerability Research: Kalgera / Fintech Scotland',
    challenge: 'Kalgera, a fintech specialising in protecting financially vulnerable customers, needed primary qualitative research to validate their AI-driven early warning signal architecture. The research had to capture lived experiences of financial vulnerability in Scotland, including scam victims, people experiencing cognitive decline, and carers managing money on behalf of others.',
    intervention: 'Designed and delivered an end-to-end user research programme: paid Facebook/Instagram recruitment campaign targeting financially vulnerable adults across Scotland (50+ primary, 35–49 secondary), a screening survey collecting quantitative and qualitative data from 80–120 respondents, and 8–10 in-depth 1:1 interviews (60 minutes each). The interview protocol was mapped directly to Kalgera\'s signal categories: spending pattern changes, income depletion, credit reliance, new payees, cash patterns, bill changes, account access, and scam indicators.',
    assurance: 'Full ethical framework aligned with the Adult Support and Protection (Scotland) Act 2007. Distress protocol in place with trained facilitators. All data encrypted, UK-hosted, anonymised within 7 days. Verbal and written consent obtained for participation, recording, and data use.',
    outcome: 'Delivered three outputs: a signal validation report confirming which behavioural markers are observable in transaction data, an intervention acceptability framework documenting what vulnerable people consider helpful versus intrusive, and a summary findings report for the Finance & Health Lab. Direct participant quotes used to ground Kalgera\'s product decisions in lived experience.',
    reusable: 'Recruitment pipeline (Facebook ad → screening survey → qualification → interview). Thematic analysis framework mapped to financial signal categories. Intervention acceptability spectrum methodology.',
  },
];

const UseCaseItem: React.FC<{ data: typeof USE_CASES[0] }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-l-2 border-l-gov-blue hover:border-l-gov-blue-dark transition-colors">
      <button className="flex justify-between items-start w-full text-left group" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${data.title}`}>
        <h2 className="text-lg font-semibold text-gov-text font-serif group-hover:text-gov-blue transition-colors">{data.title}</h2>
        <span className="text-gov-blue hover:scale-105 transition-transform flex-shrink-0 ml-2">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
           <h3 className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">The Challenge</h3>
           <p className="text-gov-text leading-relaxed text-sm">{data.challenge}</p>
        </div>
        <div>
           <h3 className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">The Outcome</h3>
           <p className="text-gov-text font-medium leading-relaxed text-sm">{data.outcome}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-gov-border grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Intervention</h3>
            <p className="text-sm text-gov-text leading-relaxed">{data.intervention}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Assurance & Ethics</h3>
            <p className="text-sm text-gov-text leading-relaxed">{data.assurance}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gov-secondary mb-2">Reusable Assets</h3>
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
