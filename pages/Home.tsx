import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block py-1.5 px-3 rounded-full bg-gov-blue/10 text-gov-blue text-sm font-semibold mb-6 uppercase tracking-wide">
            Public Sector Delivery Partner
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gov-dark tracking-tight mb-6 leading-tight max-w-4xl">
            Research-backed implementation for <span className="text-gov-blue">public value</span>
          </h1>
          <p className="text-xl text-gov-secondary/90 mb-10 max-w-3xl leading-relaxed">
            We help public bodies reduce delivery risk through rigorous methods, evidence-based policy alignment, and rapid technical assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="start" onClick={() => navigate('/how-to-buy')}>
              How to Buy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('/partnerships')}>
              Partner on Funding Bids
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <Shield className="w-6 h-6 text-gov-blue" />
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">Compliance First</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               Proudly Cyber Essentials certified and ISO27001-aligned. Accessibility built-in by default.
             </p>
           </div>
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <CheckCircle className="w-6 h-6 text-gov-blue" />
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">Delivery Track Record</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               Evidence-based outcomes across UK & EU public sectors. Discovery to Live implementation support.
             </p>
           </div>
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <div className="w-8 h-8 flex items-center justify-center font-bold text-gov-blue text-sm border-2 border-gov-blue rounded-md">UK</div>
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">UK & EU Ready</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               Eligible for direct award and framework participation. Supporting local authorities and central gov.
             </p>
           </div>
        </div>

        {/* Activities */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Our Work in Action</h3>
          <img src="/collage-activities.jpg" alt="Tesseract Academy delivering workshops, presentations and research across UK public sector contracts" className="w-full rounded-xl shadow-sm" />
          <p className="text-center text-xs text-gov-secondary mt-4">BridgeAI Skills Hub launch at Ona Studios, London &bull; Welsh Government Land Valuation Research presentation, Swansea</p>
        </div>

        {/* Partner Logos */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Trusted by public sector organisations</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="/logos/wag.png" alt="Welsh Government" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo2.jpg" alt="BridgeAI" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo3.jpg" alt="Innovate UK" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/qualifications-wales.png" alt="Qualifications Wales" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo5.jpg" alt="National Digital Twin Programme" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo6.jpg" alt="UK Export Academy" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/dbt.svg" alt="Department for Business and Trade" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/business-gateway.jpg" alt="Business Gateway" className="h-24 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo9.jpg" alt="The Alan Turing Institute" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo10.png" alt="The Growth Company" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/fintech-scotland.png" alt="Fintech Scotland" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/kalgera.png" alt="Kalgera" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>

        {/* Accreditations & Frameworks */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Accreditations & Procurement Frameworks</h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <img src="/logos/cyber-essentials.png" alt="Cyber Essentials Certified" className="h-20 object-contain" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/logos/ccs.svg" alt="Crown Commercial Service Appointed Supplier" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
