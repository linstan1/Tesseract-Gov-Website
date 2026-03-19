import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

export const Partnerships: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const orgName = formData.get('orgName') || '';
    const type = formData.get('type') || '';
    const region = formData.get('region') || '';
    const expertise = formData.get('expertise') || '';
    const subject = encodeURIComponent(`Partnership Interest: ${orgName}`);
    const body = encodeURIComponent(`Organisation: ${orgName}\nType: ${type}\nRegion: ${region}\nExpertise: ${expertise}`);
    window.location.href = `mailto:fabio@thetesseractacademy.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-xl bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6">Interest Registered</h1>
        <p className="text-lg text-gov-secondary/90 mb-10 leading-relaxed">
          Thank you. Your details have been added to our consortium database. We will contact you if a relevant funding call matches your expertise.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Submit another</Button>
      </div>
    );
  }

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

        <Card className="bg-white">
          <h2 className="text-xl font-bold text-gov-dark mb-6">Register Interest</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="orgName" className="block text-sm font-semibold text-gov-dark mb-2">Organisation Name</label>
              <input type="text" id="orgName" name="orgName" required className="w-full border border-gov-border rounded-md p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all" />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gov-dark mb-2">Organisation Type</label>
              <select id="type" name="type" className="w-full border border-gov-border rounded-md p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all">
                <option>University / Research Institute</option>
                <option>SME / Startup</option>
                <option>Large Enterprise</option>
                <option>NGO / Charity</option>
                <option>Public Body</option>
              </select>
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-semibold text-gov-dark mb-2">Region</label>
              <select id="region" name="region" className="w-full border border-gov-border rounded-md p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all">
                <option>UK - London</option>
                <option>UK - Rest of England</option>
                <option>UK - Scotland/Wales/NI</option>
                <option>EU / EEA</option>
                <option>International</option>
              </select>
            </div>

            <div>
               <label htmlFor="expertise" className="block text-sm font-semibold text-gov-dark mb-2">Core Expertise</label>
               <textarea id="expertise" name="expertise" rows={3} required className="w-full border border-gov-border rounded-md p-3 focus:ring-2 focus:ring-gov-blue/20 focus:border-gov-blue transition-all resize-none" placeholder="e.g. Behavioral Science, Quantum Computing..."></textarea>
            </div>

            <div className="pt-2">
              <Button type="submit" fullWidth>Send Partnership Enquiry</Button>
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
