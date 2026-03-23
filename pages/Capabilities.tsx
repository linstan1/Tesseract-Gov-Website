import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LineChart, Zap, ClipboardList, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Capabilities</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          We deliver value through rigorous research and agile execution. Our services are designed to de-risk complex public sector projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full flex flex-col group">
          <div className="p-3.5 bg-gov-blue/8 w-fit rounded-md mb-5 group-hover:bg-gov-blue/12 transition-colors duration-300">
            <BookOpen className="w-6 h-6 text-gov-blue" />
          </div>
          <h2 className="text-lg font-semibold text-gov-dark mb-3">Policy-Aligned Advisory</h2>
          <p className="text-gov-secondary mb-5 leading-relaxed">
            Ensuring technical initiatives align with broader policy goals. We provide feasibility studies, ethics frameworks, and technical assurance for high-stakes programs.
          </p>
          <div className="bg-gov-bg rounded-lg p-4 mt-auto border border-gov-border/30">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Case Study</p>
            <p className="text-sm text-gov-secondary leading-relaxed">
              <strong>FCA Cryptoasset Regulation</strong>  - Represented the British Blockchain Association at an FCA roundtable on stablecoin regulation, providing expert input on the regulatory framework for cryptoassets in the UK.
            </p>
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
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Case Study</p>
            <p className="text-sm text-gov-secondary leading-relaxed">
              <strong>BridgeAI / Innovate UK (GSS24646)</strong>  - Awarded contract to deliver AI training and support for creative industries professionals, bridging the gap between AI technology and creative applications. Fully funded by Innovate UK BridgeAI.
            </p>
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
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Case Study</p>
            <p className="text-sm text-gov-secondary leading-relaxed">
              <strong>US Navy & Vodafone Executive Training</strong>  - Delivered executive AI and data science workshops to senior leadership teams, covering strategic decision-making, AI readiness, and practical frameworks for operational integration.
            </p>
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
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">Case Study</p>
            <p className="text-sm text-gov-secondary leading-relaxed">
              <strong>Welsh Government  - Land Valuation Survey</strong>  - Tested five distinct valuation methodologies  - market-based statistical, machine learning, formula-based, conventional, and experimental approaches  - to inform national land value tax policy in Wales.
            </p>
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