import React from 'react';

export const Research: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Research-Backed Implementation</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We do not just "build". We validate. Our delivery models are rooted in rigorous academic and industrial research methods to ensure efficacy and reduce waste.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Our Approach</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          "Research-backed implementation" means that every technical decision is preceded by evidence gathering. We apply <span className="font-semibold text-gov-blue">mixed-methods research</span> (quantitative data analysis + qualitative user research) to define the problem space before writing a single line of code. This aligns perfectly with the GDS Discovery phase but adds a layer of academic rigour to the validation process.
        </p>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gov-dark mb-8">Selected Publications & Talks</h2>
        <ul className="space-y-8">
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark transition-colors">"The Ethics of Algorithmic Decision Making in Public Services"</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Published: Journal of Digital Government, 2023</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A peer-reviewed framework for assessing bias in local authority allocation algorithms. Used as the basis for our internal audit tools.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark transition-colors">"Fail Fast, Fix Faster: Agile in Bureaucracy"</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Keynote: Public Sector Innovation Summit, London 2024</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Exploring how rigorous Alpha testing phases significantly reduce the Total Cost of Ownership (TCO) for large-scale IT projects.</p>
           </li>
        </ul>
      </section>
    </div>
  );
};
