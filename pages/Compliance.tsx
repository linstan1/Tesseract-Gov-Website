import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';

const POLICIES = [
  { title: 'Data Protection Policy', version: 'v2.1', date: 'Jan 2024', size: '140KB' },
  { title: 'Information Security Policy (Summary)', version: 'v1.4', date: 'Dec 2023', size: '120KB' },
  { title: 'Modern Slavery Statement', version: 'v1.0', date: 'Jan 2024', size: '80KB' },
  { title: 'Carbon Reduction Plan', version: 'v1.2', date: 'Feb 2024', size: '200KB' },
  { title: 'Accessibility Statement', version: 'Live', date: 'Mar 2024', size: 'HTML' },
];

export const Compliance: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Compliance & Policies</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We operate with transparency and strict adherence to UK public sector standards.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Policy Library</h2>
        <div className="bg-white border border-gov-border rounded-lg divide-y divide-gov-border shadow-soft overflow-hidden">
          {POLICIES.map((p) => (
            <div key={p.title} className="p-6 flex items-center justify-between hover:bg-gov-bg transition-colors duration-200 group">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-md bg-gov-blue/8 flex items-center justify-center group-hover:bg-gov-blue/12 transition-colors">
                   <FileText className="w-5 h-5 text-gov-blue" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-gov-text mb-1">{p.title}</h4>
                   <p className="text-xs text-gov-secondary">Updated: {p.date} • {p.version} • {p.size}</p>
                 </div>
              </div>
              <Button variant="outline" className="text-sm py-2 px-4 hover:scale-100">Download</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gov-dark mb-6">Security & Vulnerability Disclosure</h2>
          <div className="bg-gov-bg p-8 border-l-2 border-gov-text rounded-lg shadow-subtle">
            <p className="text-sm text-gov-text mb-6 leading-relaxed">
              We take the security of our systems seriously. If you identify a vulnerability, please report it responsibly.
            </p>
            <p className="text-sm font-semibold mb-3">Contact:</p>
            <a href="mailto:security@tesseract.academy" className="text-gov-blue hover:text-gov-blue-dark transition-colors font-medium block mb-6">security@tesseract.academy</a>
            <p className="text-xs text-gov-secondary leading-relaxed">
              We aim to acknowledge reports within 48 hours and will provide a timeline for remediation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gov-dark mb-6">Accessibility Commitment</h2>
          <p className="text-base text-gov-dark/90 mb-6 leading-relaxed">
            We are committed to making this website accessible to everyone, regardless of ability or technology. We aim for WCAG 2.1 AA compliance.
          </p>
          <ul className="space-y-3 text-base text-gov-dark/90">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>Semantic HTML for screen readers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>Keyboard navigation support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>High contrast ratios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>No flashing content</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
