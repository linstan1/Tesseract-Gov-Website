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
             <h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark transition-colors">Welsh Government Land Valuation Research Report</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Commissioned by Welsh Government, 2024</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Independent research into the feasibility of land value tax models for Wales. Combined statistical analysis of land registry data with international comparator evidence and stakeholder interviews across Welsh local authorities. Findings presented to Welsh Government officials and cited in Senedd committee proceedings.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark transition-colors">The Alan Turing Institute — Ontology & Digital Twin Research</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Collaboration with The Alan Turing Institute & NDTP, 2023–2024</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Contributed to semantic interoperability research for the National Digital Twin Programme. Developed ontology frameworks enabling cross-domain data sharing across UK infrastructure digital twins, published through the Centre for Digital Built Britain.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark transition-colors">BridgeAI Skills Hub Launch & PwC Sector Workshop</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Innovate UK / BridgeAI Programme, 2024</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Designed and delivered AI adoption workshops for underserved UK sectors as part of the Innovate UK-funded BridgeAI programme. Led the Skills Hub launch event at Ona Studios, London, and co-delivered sector-specific AI readiness sessions with PwC targeting construction, creative industries, and transport.</p>
           </li>
        </ul>
      </section>
    </div>
  );
};
