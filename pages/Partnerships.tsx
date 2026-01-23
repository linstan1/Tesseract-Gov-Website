import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

export const Partnerships: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fadeInUp">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gov-text mb-6 font-serif">Interest Registered</h1>
        <p className="text-xl text-gov-secondary mb-10 leading-relaxed">
          Thank you. Your details have been added to our consortium database. We will contact you if a relevant funding call matches your expertise.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Submit another</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gov-text mb-6 font-serif">Consortium Partnerships</h1>
        <p className="text-xl text-gov-secondary leading-relaxed">
          We collaborate with universities, SMEs, and NGOs on Innovate UK and Horizon Europe bids. Join our network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gov-text mb-6 font-serif">What We Bring</h2>
            <ul className="space-y-3 text-gov-text">
               <li className="flex items-start gap-3">
                 <span className="w-2 h-2 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Technical implementation leadership</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-2 h-2 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Commercialization strategy</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-2 h-2 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Project management & governance</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-2 h-2 bg-gov-blue rounded-full mt-2 flex-shrink-0"></span>
                 <span>Rapid prototyping capability</span>
               </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gov-text mb-6 font-serif">Current Focus Areas</h2>
            <div className="bg-gradient-to-br from-gov-blue/5 to-gov-blue-light/10 border border-gov-blue/20 p-6 rounded-xl">
              <ul className="space-y-3 text-sm font-semibold text-gov-blue">
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

        <Card className="bg-white">
          <h2 className="text-2xl font-bold text-gov-text mb-8 font-serif">Register Interest</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="orgName" className="block text-sm font-bold text-gov-text mb-2">Organisation Name</label>
              <input type="text" id="orgName" required className="w-full border border-gov-border-light rounded-lg p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all" />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-bold text-gov-text mb-2">Organisation Type</label>
              <select id="type" className="w-full border border-gov-border-light rounded-lg p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all">
                <option>University / Research Institute</option>
                <option>SME / Startup</option>
                <option>Large Enterprise</option>
                <option>NGO / Charity</option>
                <option>Public Body</option>
              </select>
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-bold text-gov-text mb-2">Region</label>
              <select id="region" className="w-full border border-gov-border-light rounded-lg p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all">
                <option>UK - London</option>
                <option>UK - Rest of England</option>
                <option>UK - Scotland/Wales/NI</option>
                <option>EU / EEA</option>
                <option>International</option>
              </select>
            </div>

            <div>
               <label htmlFor="expertise" className="block text-sm font-bold text-gov-text mb-2">Core Expertise</label>
               <textarea id="expertise" rows={3} required className="w-full border border-gov-border-light rounded-lg p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all resize-none" placeholder="e.g. Behavioral Science, Quantum Computing..."></textarea>
            </div>

            <div>
              <label htmlFor="upload" className="block text-sm font-bold text-gov-text mb-2">Capability Statement (Optional)</label>
              <input type="file" id="upload" className="w-full text-sm text-gov-secondary file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gov-bg file:text-gov-text hover:file:bg-gray-200 file:transition-colors" />
            </div>

            <div className="pt-2">
              <Button type="submit" fullWidth>Submit Interest</Button>
            </div>
            <p className="text-xs text-gov-secondary text-center leading-relaxed">
              By submitting, you agree to our Privacy Notice. We only use this data for partnership matching.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};