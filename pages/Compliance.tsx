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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="border-b border-gov-border pb-8">
        <h1 className="text-3xl font-bold text-gov-text mb-4">Compliance & Policies</h1>
        <p className="text-xl text-gov-secondary">
          We operate with transparency and strict adherence to UK public sector standards.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gov-text mb-6">Policy Library</h2>
        <div className="bg-white border border-gov-border rounded-sm divide-y divide-gov-border">
          {POLICIES.map((p) => (
            <div key={p.title} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                 <FileText className="w-5 h-5 text-gov-secondary" />
                 <div>
                   <h4 className="font-bold text-gov-text">{p.title}</h4>
                   <p className="text-xs text-gov-secondary">Updated: {p.date} • {p.version} • {p.size}</p>
                 </div>
              </div>
              <Button variant="outline" className="text-sm py-1 px-3">Download</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gov-text mb-4">Security & Vulnerability Disclosure</h2>
          <div className="bg-gov-bg p-6 border-l-4 border-gov-text">
            <p className="text-sm text-gov-text mb-4">
              We take the security of our systems seriously. If you identify a vulnerability, please report it responsibly.
            </p>
            <p className="text-sm font-bold mb-2">Contact:</p>
            <a href="mailto:security@tesseract.academy" className="text-gov-blue hover:underline block mb-4">security@tesseract.academy</a>
            <p className="text-xs text-gov-secondary">
              We aim to acknowledge reports within 48 hours and will provide a timeline for remediation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gov-text mb-4">Accessibility Commitment</h2>
          <p className="text-gov-text mb-4 text-sm">
            We are committed to making this website accessible to everyone, regardless of ability or technology. We aim for WCAG 2.1 AA compliance.
          </p>
          <ul className="list-disc list-inside text-sm text-gov-secondary space-y-1">
            <li>Semantic HTML for screen readers</li>
            <li>Keyboard navigation support</li>
            <li>High contrast ratios</li>
            <li>No flashing content</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
