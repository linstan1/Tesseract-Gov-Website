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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-gov-border-light pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gov-text mb-6 font-serif">Compliance & Policies</h1>
        <p className="text-xl text-gov-secondary leading-relaxed">
          We operate with transparency and strict adherence to UK public sector standards.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gov-text mb-8 font-serif">Policy Library</h2>
        <div className="bg-white border border-gov-border-light rounded-xl divide-y divide-gov-border-light shadow-soft overflow-hidden">
          {POLICIES.map((p) => (
            <div key={p.title} className="p-6 flex items-center justify-between hover:bg-gov-bg/50 transition-colors duration-200 group">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-gov-blue/10 flex items-center justify-center group-hover:bg-gov-blue/20 transition-colors">
                   <FileText className="w-5 h-5 text-gov-blue" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gov-text mb-1">{p.title}</h4>
                   <p className="text-xs text-gov-secondary">Updated: {p.date} • {p.version} • {p.size}</p>
                 </div>
              </div>
              <Button variant="outline" className="text-sm py-2 px-4 hover:scale-100">Download</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gov-text mb-6 font-serif">Security & Vulnerability Disclosure</h2>
          <div className="bg-gradient-to-br from-gov-bg to-white p-8 border-l-4 border-gov-text rounded-r-xl shadow-soft">
            <p className="text-sm text-gov-text mb-6 leading-relaxed">
              We take the security of our systems seriously. If you identify a vulnerability, please report it responsibly.
            </p>
            <p className="text-sm font-bold mb-3">Contact:</p>
            <a href="mailto:security@tesseract.academy" className="text-gov-blue hover:text-gov-blue-dark transition-colors font-medium block mb-6">security@tesseract.academy</a>
            <p className="text-xs text-gov-secondary leading-relaxed">
              We aim to acknowledge reports within 48 hours and will provide a timeline for remediation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gov-text mb-6 font-serif">Accessibility Commitment</h2>
          <p className="text-gov-text mb-6 leading-relaxed">
            We are committed to making this website accessible to everyone, regardless of ability or technology. We aim for WCAG 2.1 AA compliance.
          </p>
          <ul className="space-y-3 text-sm text-gov-text">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>Semantic HTML for screen readers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>Keyboard navigation support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>High contrast ratios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <span>No flashing content</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
