import React from 'react';

export const Research: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="border-b border-gov-border pb-8">
        <h1 className="text-3xl font-bold text-gov-text mb-4">Research-Backed Implementation</h1>
        <p className="text-xl text-gov-secondary">
          We do not just "build". We validate. Our delivery models are rooted in rigorous academic and industrial research methods to ensure efficacy and reduce waste.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-text">Our Approach</h2>
        <p className="text-gov-text leading-relaxed">
          "Research-backed implementation" means that every technical decision is preceded by evidence gathering. We apply <span className="font-bold">mixed-methods research</span> (quantitative data analysis + qualitative user research) to define the problem space before writing a single line of code. This aligns perfectly with the GDS Discovery phase but adds a layer of academic rigour to the validation process.
        </p>
      </section>

      <section className="bg-white border border-gov-border p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-gov-text mb-6">Selected Publications & Talks</h2>
        <ul className="space-y-6">
           <li className="pb-6 border-b border-gov-border last:border-0 last:pb-0">
             <h3 className="font-bold text-lg text-gov-blue">"The Ethics of Algorithmic Decision Making in Public Services"</h3>
             <p className="text-sm text-gov-secondary mb-2">Published: Journal of Digital Government, 2023</p>
             <p className="text-gov-text">A peer-reviewed framework for assessing bias in local authority allocation algorithms. Used as the basis for our internal audit tools.</p>
           </li>
           <li className="pb-6 border-b border-gov-border last:border-0 last:pb-0">
             <h3 className="font-bold text-lg text-gov-blue">"Fail Fast, Fix Faster: Agile in Bureaucracy"</h3>
             <p className="text-sm text-gov-secondary mb-2">Keynote: Public Sector Innovation Summit, London 2024</p>
             <p className="text-gov-text">Exploring how rigorous Alpha testing phases significantly reduce the Total Cost of Ownership (TCO) for large-scale IT projects.</p>
           </li>
        </ul>
      </section>
    </div>
  );
};
