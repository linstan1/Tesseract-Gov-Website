import React from 'react';
import { Card } from '../components/ui/Card';
import { Mail } from 'lucide-react';

export const Partnerships: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Consortium Partnerships</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We collaborate with universities, SMEs, and NGOs on Innovate UK and Horizon Europe bids. Join our network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gov-dark mb-6">What We Bring</h2>
            <ul className="space-y-3 text-gov-text">
               <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Technical implementation leadership</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Commercialization strategy</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Project management & governance</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Rapid prototyping capability</span>
               </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gov-dark mb-6">Current Focus Areas</h2>
            <div className="bg-gov-blue/5 border border-gov-blue/15 p-6 rounded-lg">
              <ul className="space-y-3 text-sm font-medium text-gov-blue">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-blue rounded-full"></span>
                  Trustworthy AI & Safety
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-blue rounded-full"></span>
                  Digital Twins for Urban Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-blue rounded-full"></span>
                  HealthTech Interoperability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gov-blue rounded-full"></span>
                  GreenGov / Sustainable Tech
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Card className="bg-white flex flex-col items-center justify-center text-center p-10">
          <div className="w-16 h-16 rounded-xl bg-gov-blue/8 flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-gov-blue" />
          </div>
          <h2 className="text-xl font-bold text-gov-dark mb-3">Get in Touch</h2>
          <p className="text-gov-secondary mb-6 leading-relaxed max-w-sm">
            Interested in partnering with us? Contact our Head of Procurement & Delivery directly.
          </p>
          <a href="mailto:fabio@thetesseractacademy.com" className="text-lg font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
            fabio@thetesseractacademy.com
          </a>
          <p className="text-sm text-gov-secondary mt-2">Fabio Rovai, Head of Procurement & Delivery</p>
        </Card>
      </div>
    </div>
  );
};
