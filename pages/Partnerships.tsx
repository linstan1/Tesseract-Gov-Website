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
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fadeIn">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gov-text mb-4">Interest Registered</h1>
        <p className="text-xl text-gov-secondary mb-8">
          Thank you. Your details have been added to our consortium database. We will contact you if a relevant funding call matches your expertise.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Submit another</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gov-text mb-4">Consortium Partnerships</h1>
        <p className="text-xl text-gov-secondary">
          We collaborate with universities, SMEs, and NGOs on Innovate UK and Horizon Europe bids. Join our network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-bold text-gov-text mb-4">What We Bring</h2>
          <ul className="list-disc list-inside space-y-2 text-gov-secondary mb-8">
             <li>Technical implementation leadership</li>
             <li>Commercialization strategy</li>
             <li>Project management & governance</li>
             <li>Rapid prototyping capability</li>
          </ul>

          <h2 className="text-xl font-bold text-gov-text mb-4">Current Focus Areas</h2>
          <div className="bg-teal-50 border border-teal-100 p-4 rounded-sm">
            <ul className="space-y-2 text-sm font-medium text-gov-blue">
              <li>• Trustworthy AI & Safety</li>
              <li>• Digital Twins for Urban Planning</li>
              <li>• HealthTech Interoperability</li>
              <li>• GreenGov / Sustainable Tech</li>
            </ul>
          </div>
        </section>

        <Card className="bg-white">
          <h2 className="text-xl font-bold text-gov-text mb-6">Register Interest</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="orgName" className="block text-sm font-bold text-gov-text mb-1">Organisation Name</label>
              <input type="text" id="orgName" required className="w-full border-gov-border rounded-sm p-2 focus:ring-2 focus:ring-gov-focus focus:border-gov-text" />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-bold text-gov-text mb-1">Organisation Type</label>
              <select id="type" className="w-full border-gov-border rounded-sm p-2 focus:ring-2 focus:ring-gov-focus focus:border-gov-text">
                <option>University / Research Institute</option>
                <option>SME / Startup</option>
                <option>Large Enterprise</option>
                <option>NGO / Charity</option>
                <option>Public Body</option>
              </select>
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-bold text-gov-text mb-1">Region</label>
              <select id="region" className="w-full border-gov-border rounded-sm p-2 focus:ring-2 focus:ring-gov-focus focus:border-gov-text">
                <option>UK - London</option>
                <option>UK - Rest of England</option>
                <option>UK - Scotland/Wales/NI</option>
                <option>EU / EEA</option>
                <option>International</option>
              </select>
            </div>

            <div>
               <label htmlFor="expertise" className="block text-sm font-bold text-gov-text mb-1">Core Expertise</label>
               <textarea id="expertise" rows={3} required className="w-full border-gov-border rounded-sm p-2 focus:ring-2 focus:ring-gov-focus focus:border-gov-text" placeholder="e.g. Behavioral Science, Quantum Computing..."></textarea>
            </div>

            <div>
              <label htmlFor="upload" className="block text-sm font-bold text-gov-text mb-1">Capability Statement (Optional)</label>
              <input type="file" id="upload" className="w-full text-sm text-gov-secondary file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-gov-bg file:text-gov-text hover:file:bg-gray-200" />
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth>Submit Interest</Button>
            </div>
            <p className="text-xs text-gov-secondary text-center">
              By submitting, you agree to our Privacy Notice. We only use this data for partnership matching.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};