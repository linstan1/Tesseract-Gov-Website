import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const POLICIES = [
  { title: 'Data Protection Policy', version: 'v2.1', date: 'Jan 2025', size: 'Web page', href: '/policies/data-protection-policy' },
  { title: 'Information Security Policy (Summary)', version: 'v1.5', date: 'Dec 2025', size: 'Web page', href: '/policies/information-security-policy' },
  { title: 'Modern Slavery Statement', version: 'v1.0', date: 'Jan 2025', size: 'Web page', href: '/policies/modern-slavery-statement' },
  { title: 'Carbon Reduction Plan', version: 'v1.2', date: 'Feb 2025', size: 'Web page', href: '/policies/carbon-reduction-plan' },
  { title: 'Business Continuity Plan', version: 'v1.0', date: 'Jun 2026', size: 'Web page', href: '/policies/business-continuity-plan' },
  { title: 'Equal Opportunities and Diversity Policy', version: 'v1.0', date: 'Jun 2026', size: 'Web page', href: '/policies/equal-opportunities-policy' },
  { title: 'Accessibility Statement', version: 'v2.0', date: 'Oct 2026', size: 'Web page', href: '/accessibility' },
];

export const Compliance: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <header className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Compliance & Policies</h1>
        <p className="text-xl text-gov-secondary leading-relaxed max-w-4xl">
          We operate with transparency and strict adherence to UK public sector standards.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Policy Library</h2>
        <div className="bg-white border border-gov-border rounded-lg divide-y divide-gov-border shadow-soft overflow-hidden">
          {POLICIES.map((p) => (
            <div key={p.title} className="p-6 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-gov-bg transition-colors duration-200 group">
              <div className="flex items-center gap-4 min-w-0">
                 <div className="w-10 h-10 flex-shrink-0 rounded-md bg-gov-blue/8 flex items-center justify-center group-hover:bg-gov-blue/12 transition-colors">
                   <FileText className="w-5 h-5 text-gov-blue" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-gov-text mb-1" style={{ fontSize: "1rem", lineHeight: 1.5 }}>{p.title}</h3>
                   <p className="text-xs text-gov-secondary">Updated: {p.date} • {p.version} • {p.size}</p>
                 </div>
              </div>
              <Link to={p.href} className="inline-flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-lg text-gov-dark bg-transparent border border-gov-border hover:bg-gov-bg transition-colors">
                View<span className="sr-only"> {p.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Accessibility */}
        <aside className="bg-gov-bg border border-gov-border/50 p-6 rounded-lg">
          <h3 className="text-sm font-bold text-gov-dark mb-3">Accessibility</h3>
          <p className="text-xs text-gov-dark/80 leading-relaxed mb-3">
            We test our websites and every learning package we produce against WCAG 2.2 level AA. Our accessibility statements say how each website was tested and list anything that does not yet meet the standard:
          </p>
          <ul className="space-y-2 text-xs text-gov-dark/80">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <a href="/accessibility" className="text-gov-blue underline hover:text-gov-blue-dark">gov.tesseract.academy accessibility statement</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 bg-gov-blue rounded-full mt-1.5 flex-shrink-0"></span>
              <a href="https://tesseract.academy/accessibility/" className="text-gov-blue underline hover:text-gov-blue-dark">tesseract.academy accessibility statement</a>
            </li>
          </ul>
        </aside>

        <div className="md:col-span-1"></div>

        {/* Vision Ability CIC */}
        <aside className="bg-gov-bg border border-gov-border/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logos/visiona-ability.png" alt="Vision Ability CIC" width="400" height="400" loading="lazy" decoding="async" className="h-10 object-contain rounded" />
            <h3 className="text-sm font-bold text-gov-dark">Testing partner</h3>
          </div>
          <p className="text-xs text-gov-dark/80 leading-relaxed">
            Our proposed disabled-user testing partner is <a href="https://www.visionability.org.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Vision Ability CIC<span className="sr-only"> (opens in new tab)</span></a>. We have worked together on public events about accessible AI. Vision Ability CIC is a community organisation of visually impaired people, and its members would test our new learning pathways using screen readers and magnification. They test usability; they are not accessibility auditors.
          </p>
        </aside>
      </section>
    </div>
  );
};
