import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LineChart, Zap, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gov-text mb-6">Capabilities</h1>
        <p className="text-xl text-gov-secondary">
          We deliver value through rigorous research and agile execution. Our services are designed to de-risk complex public sector projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="h-full flex flex-col">
          <div className="p-3 bg-teal-100 w-fit rounded-sm mb-4">
            <BookOpen className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-3">Policy-Aligned Advisory</h3>
          <p className="text-gov-secondary mb-6 flex-grow">
            Ensuring technical initiatives align with broader policy goals. We provide feasibility studies, ethics frameworks, and technical assurance for high-stakes programs.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center hover:underline mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Card>

        <Card className="h-full flex flex-col">
          <div className="p-3 bg-teal-100 w-fit rounded-sm mb-4">
            <Zap className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-3">Rapid Delivery</h3>
          <p className="text-gov-secondary mb-6 flex-grow">
            From Discovery to Live. We deploy multidisciplinary teams to build Alpha prototypes and scale Beta services using GDS-aligned agile standards.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center hover:underline mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Card>

        <Card className="h-full flex flex-col">
          <div className="p-3 bg-teal-100 w-fit rounded-sm mb-4">
            <LineChart className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-3">Data & AI Upskilling</h3>
          <p className="text-gov-secondary mb-6 flex-grow">
             Building internal capability. We train civil servants and public sector leaders on data literacy, AI ethics, and strategic implementation of emerging tech.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center hover:underline mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Card>
      </div>

      <section className="bg-gov-bg p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-gov-text mb-8">How We Deliver</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="relative pl-8 sm:pl-0 sm:pt-8 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border">
            <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-4 h-4 bg-gov-secondary rounded-full"></div>
            <h4 className="font-bold text-lg">Discovery</h4>
            <p className="text-sm text-gov-secondary mt-2">Understanding user needs and technical feasibility.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-8 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-4 h-4 bg-gov-secondary rounded-full"></div>
            <h4 className="font-bold text-lg">Alpha</h4>
            <p className="text-sm text-gov-secondary mt-2">Prototyping solutions and testing hypotheses.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-8 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-blue">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-4 h-4 bg-gov-blue rounded-full"></div>
            <h4 className="font-bold text-lg text-gov-blue">Beta</h4>
            <p className="text-sm text-gov-secondary mt-2">Building working services for public trial.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-8 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-4 h-4 bg-gov-secondary rounded-full"></div>
            <h4 className="font-bold text-lg">Live</h4>
            <p className="text-sm text-gov-secondary mt-2">Continuous improvement and ongoing assurance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};