import React from 'react';

export const Research: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-gov-border-light pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gov-text mb-6 font-serif">Research-Backed Implementation</h1>
        <p className="text-xl text-gov-secondary leading-relaxed">
          We do not just "build". We validate. Our delivery models are rooted in rigorous academic and industrial research methods to ensure efficacy and reduce waste.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-text font-serif">Our Approach</h2>
        <p className="text-gov-text leading-relaxed text-lg">
          "Research-backed implementation" means that every technical decision is preceded by evidence gathering. We apply <span className="font-bold text-gov-blue">mixed-methods research</span> (quantitative data analysis + qualitative user research) to define the problem space before writing a single line of code. This aligns perfectly with the GDS Discovery phase but adds a layer of academic rigour to the validation process.
        </p>
      </section>

      <section className="bg-gradient-to-br from-white to-gov-bg border border-gov-border-light p-10 rounded-2xl shadow-soft">
        <h2 className="text-3xl font-bold text-gov-text mb-8 font-serif">Selected Publications & Talks</h2>
        <ul className="space-y-8">
           <li className="pb-8 border-b border-gov-border-light last:border-0 last:pb-0">
             <h3 className="font-bold text-xl text-gov-blue mb-3 font-serif hover:text-gov-blue-dark transition-colors">"The Ethics of Algorithmic Decision Making in Public Services"</h3>
             <p className="text-sm text-gov-secondary mb-3 font-medium">Published: Journal of Digital Government, 2023</p>
             <p className="text-gov-text leading-relaxed">A peer-reviewed framework for assessing bias in local authority allocation algorithms. Used as the basis for our internal audit tools.</p>
           </li>
           <li className="pb-8 border-b border-gov-border-light last:border-0 last:pb-0">
             <h3 className="font-bold text-xl text-gov-blue mb-3 font-serif hover:text-gov-blue-dark transition-colors">"Fail Fast, Fix Faster: Agile in Bureaucracy"</h3>
             <p className="text-sm text-gov-secondary mb-3 font-medium">Keynote: Public Sector Innovation Summit, London 2024</p>
             <p className="text-gov-text leading-relaxed">Exploring how rigorous Alpha testing phases significantly reduce the Total Cost of Ownership (TCO) for large-scale IT projects.</p>
           </li>
        </ul>
      </section>
    </div>
  );
};
