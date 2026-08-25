import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LineChart, Zap, ClipboardList, BarChart3, Network, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Capabilities</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          We deliver value through rigorous research and agile execution, designed to de-risk complex public-sector projects. Every capability below is backed by a delivered contract: the numbers, and a link to the full case study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <Network className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Ontology Engineering & Knowledge Graphs</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
            Domain ontologies in OWL 2, SKOS and SHACL, standards crosswalks, knowledge graph construction, and a closed-world check that rejects ontology terms an AI pipeline invented. <Link to="/services/ontology-engineering" className="text-gov-blue hover:underline">Full service details</Link>, or <Link to="/ontology" className="text-gov-blue hover:underline">browse the published work</Link>.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>IES4, the UK defence information exchange standard</strong>  - fine-tuning an open model against the published ontology cut confabulated terms from <strong>93.7%</strong> to <strong>1.0%</strong> and raised term conformance from <strong>0%</strong> to <strong>88.6%</strong>, verified against the ontology rather than by a judge model.
            </p>
            <Link to="/research/fine-tuning-llm-government-data-standard" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <BookOpen className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Policy-Aligned Advisory</h2>
          <p className="text-gov-secondary mb-5 leading-relaxed">
            Ensuring technical initiatives align with broader policy goals. We provide feasibility studies, ethics frameworks, and technical assurance for high-stakes programmes.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>Welsh Government</strong>  - tested <strong>5</strong> land-valuation methodologies across <strong>1,916</strong> LSOAs (<strong>99%</strong> of Welsh geography); published on GOV.WALES to inform local-government finance policy.
            </p>
            <Link to="/research/welsh-government-land-valuation" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <Zap className="w-7 h-7 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Rapid Delivery</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
            From Discovery to Live. We deploy multidisciplinary teams to build Alpha prototypes and scale Beta services using GDS-aligned agile standards.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>National Digital Twin Programme</strong>  - delivered a production-ready AI ontology tool (a <strong>4</strong>-step wizard ingesting <strong>3</strong> data formats) on time and on budget, open-sourced under Apache 2.0 for the UK National Digital Twin Programme.
            </p>
            <Link to="/research/national-digital-twin-programme" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <LineChart className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Data & AI Upskilling</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
             Building internal capability. We train civil servants and public sector leaders on data literacy, AI ethics, and strategic implementation of emerging tech.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>Innovate UK BridgeAI</strong>  - <strong>1,100</strong> registrations against a <strong>200</strong>-place target, <strong>5.5x</strong> oversubscribed, delivering AI training to UK creative-industries professionals.
            </p>
            <Link to="/research/bridgeai-creative-industries" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <ClipboardList className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Survey Design & Delivery</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
            End-to-end survey services: questionnaire design, stakeholder consultation, data collection, and statistical analysis. Supporting needs assessments, user research, and policy evaluation.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>Kalgera / Fintech Scotland</strong>  - a screening survey plus in-depth interviews mapped to <strong>8</strong> financial-vulnerability signals, under an Adult Support and Protection (Scotland) Act 2007 ethical framework.
            </p>
            <Link to="/research/kalgera-financial-vulnerability" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <BarChart3 className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Digital Analytics & Audience Measurement</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
            Turning web, marketing and audience data into decisions. GA4 and Google Tag Manager, consent-aware measurement, Power BI and Looker Studio dashboards, KPI frameworks, and analytics capability building. <Link to="/services/digital-analytics" className="text-gov-blue hover:underline">Full service details</Link>.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>DCMS Museum Visits Observatory</strong>  - an interactive explorer of the official DCMS visitor statistics: <strong>16</strong> museum groups, <strong>87</strong> months of data, site-level breakdowns, and recovery measured against each institution's own <strong>2019</strong> baseline.
            </p>
            <Link to="/research/museum-visits-observatory" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Explore the live observatory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <LineChart className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Data Quality & Assurance</h2>
          <p className="text-gov-secondary/90 mb-5 leading-relaxed">
            Making data trustworthy enough for regulators to act on. We combine statistical quality analysis with declarative, machine-checkable validation rules that encode domain physics.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Proof</p>
            <p className="text-sm text-gov-secondary leading-relaxed mb-3">
              <strong>WRAP</strong>  - commissioned to translate the Food Loss and Waste Standard into machine-readable data infrastructure, so that reporting across the UK Food and Drink Pact and the international Food Pact Network can be aggregated and compared on a like-for-like basis. In delivery.
            </p>
            <Link to="/research/wrap-food-loss-waste-taxonomy" className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline">
              Read the background <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>
      </div>

      <section className="bg-gov-bg p-10 rounded-xl border border-gov-border/50">
        <h2 className="text-2xl font-bold text-gov-dark mb-10">How We Deliver</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="relative pl-6 sm:pl-0 sm:pt-8 border-l-2 sm:border-l-0 sm:border-t-2 border-gov-blue">
            <div className="absolute left-[-5px] top-0 sm:top-[-5px] sm:left-0 w-2.5 h-2.5 bg-gov-blue rounded-full ring-4 ring-gov-bg"></div>
            <h3 className="font-semibold text-base text-gov-blue mb-2">Discovery</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">Understanding user needs and technical feasibility.</p>
          </div>
          <div className="relative pl-6 sm:pl-0 sm:pt-8 border-l-2 sm:border-l-0 sm:border-t-2 border-gov-blue">
             <div className="absolute left-[-5px] top-0 sm:top-[-5px] sm:left-0 w-2.5 h-2.5 bg-gov-blue rounded-full ring-4 ring-gov-bg"></div>
            <h3 className="font-semibold text-base text-gov-blue mb-2">Alpha</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">Prototyping solutions and testing hypotheses.</p>
          </div>
          <div className="relative pl-6 sm:pl-0 sm:pt-8 border-l-2 sm:border-l-0 sm:border-t-2 border-gov-blue">
             <div className="absolute left-[-5px] top-0 sm:top-[-5px] sm:left-0 w-2.5 h-2.5 bg-gov-blue rounded-full ring-4 ring-gov-bg"></div>
            <h3 className="font-semibold text-base text-gov-blue mb-2">Beta</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">Building working services for public trial.</p>
          </div>
          <div className="relative pl-6 sm:pl-0 sm:pt-8 border-l-2 sm:border-l-0 sm:border-t-2 border-gov-blue">
             <div className="absolute left-[-5px] top-0 sm:top-[-5px] sm:left-0 w-2.5 h-2.5 bg-gov-blue rounded-full ring-4 ring-gov-bg"></div>
            <h3 className="font-semibold text-base text-gov-blue mb-2">Live</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">Continuous improvement and ongoing assurance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};