import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';

const POLICIES = [
  { title: 'Data Protection Policy', version: 'v2.1', date: 'Jan 2025', size: '11KB', href: '/policies/data-protection-policy.pdf' },
  { title: 'Information Security Policy (Summary)', version: 'v1.4', date: 'Dec 2024', size: '11KB', href: '/policies/information-security-policy.pdf' },
  { title: 'Modern Slavery Statement', version: 'v1.0', date: 'Jan 2025', size: '8KB', href: '/policies/modern-slavery-statement.pdf' },
  { title: 'Carbon Reduction Plan', version: 'v1.2', date: 'Feb 2025', size: '10KB', href: '/policies/carbon-reduction-plan.pdf' },
  { title: 'Accessibility Statement', version: 'v1.0', date: 'Mar 2025', size: '9KB', href: '/policies/accessibility-statement.pdf' },
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
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-sm py-2 px-4 hover:scale-100">Download</Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
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

      {/* Vision Ability CIC */}
      <section className="bg-gov-bg border border-gov-border/50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Accessibility Partner — Vision Ability CIC</h2>
        <div className="flex items-center gap-6 mb-6">
          <img src="/logos/visiona-ability.jpg" alt="Vision Ability CIC" className="h-16 object-contain rounded-lg" />
          <p className="text-base text-gov-dark/90 leading-relaxed">
            We work with <a href="https://www.visionability.org.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Vision Ability CIC</a> to audit and maintain the accessibility of our digital services, ensuring ongoing WCAG 2.1 AA compliance.
          </p>
        </div>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          This partnership ensures that all deliverables — from websites to data dashboards — meet the accessibility standards required by the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018.
        </p>
      </section>
    </div>
  );
};
