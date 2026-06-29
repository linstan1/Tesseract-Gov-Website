import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const USE_CASES = [
  {
    id: 'uc1',
    slug: '/case-studies/welsh-government-land-valuation',
    title: 'Testing Land Valuation Methods: Welsh Government',
    challenge: 'The Welsh Government needed to evaluate different approaches for assessing land values to support local government finance policy development, comparing traditional and AI-driven methodologies.',
    intervention: 'Commissioned by Welsh Government to test five distinct valuation methodologies: market-based statistical valuation, advanced algorithmic and machine-learning applications, formula-based valuation by land area, conventional valuation approaches, and innovative experimental approaches.',
    assurance: 'Delivered under Welsh Government procurement standards. Full summary and comprehensive report published on GOV.WALES.',
    outcome: 'Produced a comprehensive comparative analysis across all five methodologies, published March 2026. Findings directly inform Welsh Government local government finance policy.',
    reusable: 'Valuation methodology comparison framework. Published reports available on GOV.WALES.',
  },
  {
    id: 'uc2',
    slug: '/case-studies/national-digital-twin-programme',
    title: 'AI Ontology Extension Generator: National Digital Twin Programme',
    challenge: 'The National Digital Twin Programme (NDTP), a UK Government initiative under the Department for Business and Trade, needed to automate ontology development to accelerate the creation of digital twins across UK infrastructure.',
    intervention: 'Contributed to the development of an open-source AI-powered tool that automates ontology generation and extension through a web interface. The tool combines data profiling, Named Entity Recognition, and large language models to extract and generate ontology entities from multiple data formats (CSV, JSON, RDF/Turtle).',
    assurance: 'Open-source under Apache License 2.0 (code) and Open Government Licence v3.0 (documentation). Maintained by NDTP.',
    outcome: 'Delivered a production-ready Streamlit web application with a four-step wizard workflow, built-in validation and visualisation tools, and iterative refinement capabilities. Published on GitHub under National-Digital-Twin organisation.',
    reusable: 'Open-source tool available on GitHub (National-Digital-Twin/ndtp-ai-ontology-extension).',
  },
  {
    id: 'uc3',
    slug: '/case-studies/bridgeai-creative-industries',
    title: 'BridgeAI Programme: AI for UK Creatives',
    challenge: 'Innovate UK\'s BridgeAI programme needed to support the UK creative industries in adopting AI technologies, bridging the gap between cutting-edge AI research and practical implementation for creative sector SMEs.',
    intervention: 'Delivered a programme delivery report for the BridgeAI initiative, providing research-backed guidance on AI adoption for UK creatives. Led by Fabio Rovai and Dr Stylianos Kampakis, the work covered AI readiness assessment, implementation strategies, and practical tooling recommendations.',
    assurance: 'Funded by Innovate UK BridgeAI Programme. Aligned with UK industrial strategy for creative industries.',
    outcome: 'Programme delivery report completed, supporting AI adoption pathways for creative sector organisations across the UK.',
    reusable: 'AI adoption framework and readiness assessment methodology for creative industries.',
  },
  {
    id: 'uc4',
    slug: '/case-studies/kalgera-financial-vulnerability',
    title: 'Financial Vulnerability Research: Kalgera / Fintech Scotland',
    challenge: 'Kalgera, a fintech specialising in protecting financially vulnerable customers, needed primary qualitative research to validate their AI-driven early warning signal architecture. The research had to capture lived experiences of financial vulnerability in Scotland, including scam victims, people experiencing cognitive decline, and carers managing money on behalf of others.',
    intervention: 'Designed and delivered an end-to-end user research programme: paid Facebook/Instagram recruitment campaign targeting financially vulnerable adults across Scotland (50+ primary, 35–49 secondary), a screening survey collecting quantitative and qualitative data from 80–120 respondents, and 8–10 in-depth 1:1 interviews (60 minutes each). The interview protocol was mapped directly to Kalgera\'s signal categories: spending pattern changes, income depletion, credit reliance, new payees, cash patterns, bill changes, account access, and scam indicators.',
    assurance: 'Full ethical framework aligned with the Adult Support and Protection (Scotland) Act 2007. Distress protocol in place with trained facilitators. All data encrypted, UK-hosted, anonymised within 7 days. Verbal and written consent obtained for participation, recording, and data use.',
    outcome: 'Delivered three outputs: a signal validation report confirming which behavioural markers are observable in transaction data, an intervention acceptability framework documenting what vulnerable people consider helpful versus intrusive, and a summary findings report for the Finance & Health Lab. Direct participant quotes used to ground Kalgera\'s product decisions in lived experience.',
    reusable: 'Recruitment pipeline (Facebook ad → screening survey → qualification → interview). Thematic analysis framework mapped to financial signal categories. Intervention acceptability spectrum methodology.',
  },
  {
    id: 'uc5',
    slug: '/case-studies/wastewater-effluent-data-quality',
    title: 'Wastewater Effluent Data Quality (Open-Data Demonstration)',
    challenge: 'The UK is rolling out continuous water-quality monitoring on wastewater assets under the Environment Act 2021, and the Environment Agency is exploring whether that data can serve as a regulatory tool. The binding question is data quality: calibration drift, fouled probes, telemetry gaps and transcription errors all masquerade as real signals.',
    intervention: 'Analysed a full-scale wastewater treatment works dataset of 1,382 daily records carrying the regulated effluent suite (ammonia, BOD, COD, total nitrogen, inflow, outflow). Applied a two-layer method: a statistical QA battery (completeness, flatline, robust MAD outliers, drift) and a declarative ISO 19156 / SOSA effluent ontology with SHACL data-quality rules, including the domain-aware COD ≥ BOD physical invariant.',
    assurance: 'Fully reproducible and published open source as a case study in Open Ontologies. Source data under CC BY-SA 4.0. No model training: every quality rule is a declarative constraint with a named failure reason.',
    outcome: 'The data is complete and internally consistent (COD ≥ BOD holds on every one of 1,382 rows), yet the battery still surfaces multi-year baseline drift and dozens of statistical outliers per determinand. The SHACL rules reject every physically impossible record and pass every clean one, making the trust verdict auditable.',
    reusable: 'The QA battery, effluent observation ontology, and SHACL data-quality shapes are open source and re-pointable to any continuous-monitoring stream.',
  },
  {
    id: 'uc6',
    slug: '/case-studies/wrap-food-loss-waste-taxonomy',
    title: 'Food Loss and Waste Data Taxonomy: WRAP',
    challenge: 'WRAP\'s Courtauld Commitment 2030 asks the UK food industry to halve food waste by 2030 (UN SDG 12.3). More than 400 organisations across an international Food Pact Network report their data using locally divergent definitions, so it cannot be reliably aggregated or compared, undermining measurement of collective progress.',
    intervention: 'Commissioned by WRAP (PRC228) to translate the international Food Loss and Waste Standard into structured, machine-readable data infrastructure: five coded dimensions (product category, supply chain stage, waste destination, intervention type, food and drink material hierarchy) with controlled vocabularies and unique codes, 84 coded entities expressed in SKOS and JSON-LD, grounded in the WRAP Data Capture Sheet and Codex GSFA, with FoodOn product-category alignment. SHACL validation shapes and FoodEx2 mappings are scaffolded for Phase 2. Delivered through iterative co-design with WRAP subject-matter experts.',
    assurance: 'Built as working data infrastructure with version-controlled change governance and 100% structural coverage of the WRAP Data Capture Sheet controlled vocabularies at Level 1 (680 validated RDF triples).',
    outcome: 'A publishable, machine-readable taxonomy that lets the Food Pact Network classify and compare food waste data on a like-for-like basis for the first time, and feeds the developing international data standard.',
    reusable: 'The taxonomy-plus-schema-plus-validation-rules pattern transfers to any multi-organisation reporting domain requiring consistent, comparable data.',
  },
  {
    id: 'uc7',
    slug: '/case-studies/agri-environment-heritage-value',
    title: 'The Value of Agri-Environment Heritage Actions (Open-Data Demonstration)',
    challenge: 'Agri-environment schemes are the largest source of government funding for the rural historic environment, yet the wider co-benefits of heritage actions, for nature and for people, are real but evidentially fragmented. As nature recovery is delivered faster and under tighter budgets, heritage actions risk being overlooked unless that value can be evidenced.',
    intervention: 'A self-initiated, open demonstration built entirely on public data: a pre-registered scoping-review protocol on Natural England\'s own evidence-review method (NEER001), PRISMA-ScR and the Collaboration for Environmental Evidence guidelines; a charting framework linking each heritage action to its co-benefits, EIP targets and indicative value for money (Green Book, ENCA); and our own spatial analysis of the Historic England Heritage at Risk Register 2024.',
    assurance: 'Fully reproducible and open. The spatial join locates 2,181 of 2,206 Scheduled Monuments at Risk by region; the South West share of 45% matches Historic England\'s published figure, a check the analysis is sound. Not a commissioned contract: a worked demonstration of method.',
    outcome: 'A published, replicable protocol, an evidence-map and gap framework, and a real spatial analysis showing 84% of monuments at risk are on farmland, where heritage actions act. Together they make the case that heritage actions deliver multi-objective value, for nature and for people, in a form that withstands scrutiny.',
    reusable: 'The scoping-review protocol, charting framework and value-for-money method transfer to any evidence-baseline question on the wider benefits of land-management or environmental actions.',
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
