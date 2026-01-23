import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LineChart, Zap, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gov-text mb-6 font-serif">Capabilities</h1>
        <p className="text-xl text-gov-secondary leading-relaxed">
          We deliver value through rigorous research and agile execution. Our services are designed to de-risk complex public sector projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="h-full flex flex-col group">
          <div className="p-4 bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 w-fit rounded-xl mb-6 group-hover:shadow-glow transition-all duration-300">
            <BookOpen className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-4 font-serif">Policy-Aligned Advisory</h3>
          <p className="text-gov-secondary mb-6 flex-grow leading-relaxed">
            Ensuring technical initiatives align with broader policy goals. We provide feasibility studies, ethics frameworks, and technical assurance for high-stakes programs.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center group-hover:gap-2 transition-all duration-200 mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-4 bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 w-fit rounded-xl mb-6 group-hover:shadow-glow transition-all duration-300">
            <Zap className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-4 font-serif">Rapid Delivery</h3>
          <p className="text-gov-secondary mb-6 flex-grow leading-relaxed">
            From Discovery to Live. We deploy multidisciplinary teams to build Alpha prototypes and scale Beta services using GDS-aligned agile standards.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center group-hover:gap-2 transition-all duration-200 mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Card>

        <Card className="h-full flex flex-col group">
          <div className="p-4 bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 w-fit rounded-xl mb-6 group-hover:shadow-glow transition-all duration-300">
            <LineChart className="w-8 h-8 text-gov-blue" />
          </div>
          <h3 className="text-xl font-bold text-gov-text mb-4 font-serif">Data & AI Upskilling</h3>
          <p className="text-gov-secondary mb-6 flex-grow leading-relaxed">
             Building internal capability. We train civil servants and public sector leaders on data literacy, AI ethics, and strategic implementation of emerging tech.
          </p>
          <Link to="/use-cases" className="text-gov-blue font-bold flex items-center group-hover:gap-2 transition-all duration-200 mt-auto">
            See Evidence <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Card>
      </div>

      <section className="bg-gradient-to-br from-gov-bg to-white p-10 rounded-2xl shadow-soft border border-gov-border-light">
        <h2 className="text-3xl font-bold text-gov-text mb-10 font-serif">How We Deliver</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="relative pl-8 sm:pl-0 sm:pt-10 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border-light rounded-sm">
            <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-5 h-5 bg-gov-secondary rounded-full ring-4 ring-white shadow-sm"></div>
            <h4 className="font-bold text-lg mb-2 font-serif">Discovery</h4>
            <p className="text-sm text-gov-secondary leading-relaxed">Understanding user needs and technical feasibility.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-10 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border-light rounded-sm">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-5 h-5 bg-gov-secondary rounded-full ring-4 ring-white shadow-sm"></div>
            <h4 className="font-bold text-lg mb-2 font-serif">Alpha</h4>
            <p className="text-sm text-gov-secondary leading-relaxed">Prototyping solutions and testing hypotheses.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-10 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-blue rounded-sm">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-5 h-5 bg-gov-blue rounded-full ring-4 ring-white shadow-glow"></div>
            <h4 className="font-bold text-lg text-gov-blue mb-2 font-serif">Beta</h4>
            <p className="text-sm text-gov-secondary leading-relaxed">Building working services for public trial.</p>
          </div>
          <div className="relative pl-8 sm:pl-0 sm:pt-10 border-l-4 sm:border-l-0 sm:border-t-4 border-gov-border-light rounded-sm">
             <div className="absolute left-[-10px] top-0 sm:top-[-10px] sm:left-0 w-5 h-5 bg-gov-secondary rounded-full ring-4 ring-white shadow-sm"></div>
            <h4 className="font-bold text-lg mb-2 font-serif">Live</h4>
            <p className="text-sm text-gov-secondary leading-relaxed">Continuous improvement and ongoing assurance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};