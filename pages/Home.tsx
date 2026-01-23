import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProcurementShortcuts } from '../components/ProcurementShortcuts';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gov-bg to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-2 px-4 rounded-full bg-gov-blue/10 text-gov-blue text-sm font-semibold mb-8 animate-fadeInUp border border-gov-blue/20">
            Public Sector Delivery Partner
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gov-text tracking-tight mb-6 animate-fadeInUp stagger-1 font-serif leading-tight">
            Research-backed implementation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gov-blue to-gov-blue-dark">public value.</span>
          </h1>
          <p className="text-xl text-gov-secondary mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
            We help public bodies reduce delivery risk through rigorous methods, evidence-based policy alignment, and rapid technical assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-3">
            <Button variant="start" onClick={() => navigate('/how-to-buy')}>
              How to Buy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('/partnerships')}>
              Partner on Funding Bids
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProcurementShortcuts />

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
           <div className="flex flex-col items-center text-center p-8 bg-white border border-gov-border-light rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <Shield className="w-8 h-8 text-gov-blue" />
             </div>
             <h3 className="font-bold text-lg mb-3 font-serif">Compliance First</h3>
             <p className="text-sm text-gov-secondary leading-relaxed">
               Cyber Essentials (In Progress) and ISO27001-aligned controls. Accessibility built-in by default.
             </p>
           </div>
           <div className="flex flex-col items-center text-center p-8 bg-white border border-gov-border-light rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <CheckCircle className="w-8 h-8 text-gov-blue" />
             </div>
             <h3 className="font-bold text-lg mb-3 font-serif">Delivery Track Record</h3>
             <p className="text-sm text-gov-secondary leading-relaxed">
               Evidence-based outcomes across UK & EU public sectors. Discovery to Live implementation support.
             </p>
           </div>
           <div className="flex flex-col items-center text-center p-8 bg-white border border-gov-border-light rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gov-blue/10 to-gov-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               <div className="w-12 h-12 flex items-center justify-center font-bold text-gov-blue text-xl border-2 border-gov-blue rounded-full font-serif">UK</div>
             </div>
             <h3 className="font-bold text-lg mb-3 font-serif">UK & EU Ready</h3>
             <p className="text-sm text-gov-secondary leading-relaxed">
               Eligible for direct award and framework participation. Supporting local authorities and central gov.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
