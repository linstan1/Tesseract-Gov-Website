import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProcurementShortcuts } from '../components/ProcurementShortcuts';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-b border-gov-border">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gov-bg text-gov-secondary text-sm font-semibold mb-6">
            Public Sector Delivery Partner
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gov-text tracking-tight mb-6">
            Research-backed implementation for <span className="text-gov-blue">public value.</span>
          </h1>
          <p className="text-xl text-gov-secondary mb-10 max-w-2xl mx-auto">
            We help public bodies reduce delivery risk through rigorous methods, evidence-based policy alignment, and rapid technical assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="start" onClick={() => navigate('/how-to-buy')}>
              How to Buy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('/partnerships')}>
              Partner on Funding Bids
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcurementShortcuts />
        
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
           <div className="flex flex-col items-center text-center p-6 bg-white border border-gov-border rounded-sm">
             <Shield className="w-10 h-10 text-gov-blue mb-4" />
             <h3 className="font-bold text-lg mb-2">Compliance First</h3>
             <p className="text-sm text-gov-secondary">
               Cyber Essentials (In Progress) and ISO27001-aligned controls. Accessibility built-in by default.
             </p>
           </div>
           <div className="flex flex-col items-center text-center p-6 bg-white border border-gov-border rounded-sm">
             <CheckCircle className="w-10 h-10 text-gov-blue mb-4" />
             <h3 className="font-bold text-lg mb-2">Delivery Track Record</h3>
             <p className="text-sm text-gov-secondary">
               Evidence-based outcomes across UK & EU public sectors. Discovery to Live implementation support.
             </p>
           </div>
           <div className="flex flex-col items-center text-center p-6 bg-white border border-gov-border rounded-sm">
             <div className="w-10 h-10 flex items-center justify-center font-bold text-gov-blue text-xl border-2 border-gov-blue rounded-full mb-4">UK</div>
             <h3 className="font-bold text-lg mb-2">UK & EU Ready</h3>
             <p className="text-sm text-gov-secondary">
               Eligible for direct award and framework participation. Supporting local authorities and central gov.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
