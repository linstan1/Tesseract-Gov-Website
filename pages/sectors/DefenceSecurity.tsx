import React, { useEffect } from 'react';

export const DefenceSecurity: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/defence-security#service',
      name: 'AI, Research and Data Services for UK Defence and National Security',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Defence and National Security AI Consulting',
      description:
        'AI assurance, adversarial robustness testing, ontology engineering and data science for UK defence, national security and dual-use research customers. Aligned to the MoD Defence AI Strategy and NCSC Secure Development Guidelines.',
      url: 'https://gov.tesseract.academy/sectors/defence-security',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'UK Defence and National Security Community',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Defence and National Security Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adversarial Robustness and Red-Team Testing for Defence AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Assurance Aligned to MoD Ethical AI Principles' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ontology and Knowledge Graph Engineering for Intelligence Data' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dual-Use Research and Capability Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NCSC-Aligned Secure ML Pipeline Design' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sector-defence-security-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sector-defence-security-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Defence and National Security
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research and Data Services for Defence and National Security
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          The <a href="https://www.gov.uk/government/publications/defence-artificial-intelligence-strategy" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">MoD Defence AI Strategy</a> commits to deploying AI "at pace and at scale" across more than 200 capability areas, with a defence digital budget exceeding £6 billion through 2030. Tesseract Academy supports the <a href="https://www.gov.uk/government/organisations/ministry-of-defence" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Ministry of Defence (MoD)</a>, <a href="https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Defence Science and Technology Laboratory (Dstl)</a>, <a href="https://www.gov.uk/government/organisations/defence-equipment-and-support" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Defence Equipment and Support (DE&amp;S)</a>, Defence Digital, and the wider intelligence community with auditable AI assurance and ontology engineering.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Defence AI cannot be a black box — auditable provenance, adversarial robustness, and human-in-the-loop oversight are baseline requirements, not stretch goals."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy provides research-led AI assurance, ontology engineering, adversarial robustness testing, and data science to the UK defence and national security enterprise. Our work aligns with the <a href="https://www.gov.uk/government/publications/ambitious-safe-responsible-our-approach-to-the-delivery-of-ai-enabled-capability-in-defence" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">MoD Ethical AI Principles</a>, the <a href="https://www.gov.uk/government/publications/integrated-review-refresh-2023-responding-to-a-more-contested-and-volatile-world" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Integrated Review Refresh 2023</a>, and the <a href="https://www.ncsc.gov.uk/collection/developers-collection" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NCSC Secure Development Guidelines</a>. Engagements are scoped to dovetail with the <a href="https://www.gov.uk/government/groups/joint-forces-command" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Strategic Command</a> digital backbone and the wider Joint Forces Command operating concept.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Typical engagements span adversarial robustness evaluation against known threat patterns catalogued by <a href="https://www.gchq.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GCHQ</a> and the <a href="https://www.ncsc.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Cyber Security Centre (NCSC)</a>; ontology and knowledge-graph design for intelligence-grade data fusion; and AI evaluation methodologies developed in dialogue with the <a href="https://www.aisi.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">UK AI Safety Institute</a>. Our researchers contribute to discussions hosted under the NATO Science and Technology Organization (NATO STO) and have engaged with the <a href="https://www.gov.uk/government/organisations/defence-and-security-accelerator" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Defence and Security Accelerator (DASA)</a> on dual-use research framing. We also reference geospatial baselines maintained by the UK Hydrographic Office and safety-critical assurance practice developed at the Atomic Weapons Establishment (AWE).
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          AI systems delivered into defence environments are accompanied by Algorithmic Impact Assessments, threat-model documentation, and provenance ledgers consistent with JSP 440 (Defence Manual of Security) information assurance expectations. We integrate with the DE&amp;S Acquisition System Operating Model (ASOM) and align deliverables to the Cabinet Office National Security Secretariat's risk taxonomy, and we coordinate with the Defence Procurement Agency function where call-off contracts span multiple Top Level Budgets. Where DV-cleared expertise is required, a DV-cleared consultant is available through our associate network on a project-specific basis.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise with public liability insurance of £2 million, employers' liability of £10 million, and professional indemnity of £5 million. We are registered on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200</a> and are familiar with MoD-specific frameworks including innovation-led routes operated by DASA and the Defence Innovation Unit. PPON: PWJP-6874-MXDJ. ICO registration: ZB715782.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Capability Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Capability</th>
                <th className="px-6 py-4 font-semibold text-gov-blue">Tesseract Academy</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Large Systems Integrator</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">In-House Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">List X / cleared environment familiarity</td>
                <td className="px-6 py-4 text-gov-dark">Worked with cleared associates; DV-cleared consultant available</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — at premium cost</td>
                <td className="px-6 py-4 text-gov-secondary">Variable across teams</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Bowman / MORPHEUS data handling awareness</td>
                <td className="px-6 py-4 text-gov-dark">Familiar — research-level briefings</td>
                <td className="px-6 py-4 text-gov-secondary">Programme-specific</td>
                <td className="px-6 py-4 text-gov-secondary">Limited outside C4ISR teams</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">ITAR / EAR-aware delivery</td>
                <td className="px-6 py-4 text-gov-dark">Yes — UK-only delivery footprint</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — multi-jurisdictional</td>
                <td className="px-6 py-4 text-gov-secondary">Often unaddressed</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">JSP 440 alignment</td>
                <td className="px-6 py-4 text-gov-dark">Documented in delivery plans</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — programme overhead</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — internal resource</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">DE&amp;S ASOM integration</td>
                <td className="px-6 py-4 text-gov-dark">Capability slice fits ASOM gates</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — full programme scope</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — but slow on AI</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Dual-use research framing</td>
                <td className="px-6 py-4 text-gov-dark">Default — academic provenance</td>
                <td className="px-6 py-4 text-gov-secondary">Limited research culture</td>
                <td className="px-6 py-4 text-gov-secondary">Programme dependent</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Adversarial robustness testing</td>
                <td className="px-6 py-4 text-gov-dark">Red-team aligned to NCSC guidance</td>
                <td className="px-6 py-4 text-gov-secondary">Available — additional cost</td>
                <td className="px-6 py-4 text-gov-secondary">Rarely in-house</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Where Tesseract has supported — Ontology Engineering for Cross-Domain Data
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Knowledge-Graph Tooling Transferable to Defence Intelligence Fusion
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Through our work on the <a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">National Digital Twin Programme</a> (Department for Business and Trade, 2024-2025), we built an open-source AI tool that automates ontology generation and extension across heterogeneous data formats. The same Named Entity Recognition (NER), data-profiling and large-language-model pipeline is directly transferable to defence intelligence-fusion problems where multi-source data — geospatial, signals, and open-source intelligence — must be reconciled into a shared ontology. The tool's open provenance model supports the auditability requirements set out in the MoD Ethical AI Principles.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">AI techniques fused (NER, LLM, profiling)</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Open</p>
              <p className="text-sm text-gov-secondary mt-1">Auditable codebase on GitHub</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">NDTP</p>
              <p className="text-sm text-gov-secondary mt-1">Cross-domain ontology lineage</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Typical engagement — AI Governance and Adversarial Robustness Review
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            AI Assurance Aligned to MoD Ethical AI Principles and NCSC Guidance
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            A typical engagement begins with an AI assurance review of an existing or planned defence ML system. We catalogue model lineage against our open-source AI governance platform's library of 48 governance tools (covering EU AI Act, NIST AI RMF, ISO 42001), run an adversarial-robustness test battery aligned to NCSC Secure Development Guidelines, and produce an Algorithmic Impact Assessment that maps to the MoD's "Ambitious, Safe, Responsible" framework. Outputs feed directly into DE&amp;S ASOM gate reviews and the Defence Digital authority-to-operate process.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">48</p>
              <p className="text-sm text-gov-secondary mt-1">Governance tools catalogued</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">5</p>
              <p className="text-sm text-gov-secondary mt-1">MoD ethical AI principles mapped</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">NCSC</p>
              <p className="text-sm text-gov-secondary mt-1">Secure Development alignment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Defence and national security customers can engage Tesseract Academy through several routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">DASA — Defence and Security Accelerator</p>
              <p className="text-gov-secondary text-sm mt-1">Open and themed competitions for innovation contracts under £350,000. Suitable for adversarial robustness research, dual-use AI assurance, and proof-of-concept work.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">MoD Frameworks (e.g. RM6228 ALPS, Innovation Procurement)</p>
              <p className="text-gov-secondary text-sm mt-1">Subcontracted access via prime suppliers on RM6228 (Artificial Lift, Pumping and Subsea Services where defence-relevant) and other MoD-specific innovation procurement vehicles.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">The primary CCS route for AI assurance, strategy and governance. Used for engagements requiring formal further competition.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">Contracts below £10,000 may be awarded directly under framework rules. Suitable for short-form assurance reviews and DASA scoping support.</p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">fabio@thetesseractacademy.com</a>{' '}
          with a brief description of your requirement, security classification context, and indicative timeline.
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Related pages</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-base">
          <li><a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">Case study — National Digital Twin Programme</a></li>
          <li><a href="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline">Case study — Kalgera financial vulnerability</a></li>
          <li><a href="/services/ai-governance" className="text-gov-blue hover:underline">Service — AI Governance</a></li>
          <li><a href="/services/ai-consulting" className="text-gov-blue hover:underline">Service — AI Consulting</a></li>
          <li><a href="/services/research-policy" className="text-gov-blue hover:underline">Service — Research and Policy</a></li>
          <li><a href="/insights" className="text-gov-blue hover:underline">Insights</a></li>
          <li><a href="/how-to-buy" className="text-gov-blue hover:underline">How to buy</a></li>
        </ul>
      </section>
    </div>
  );
};
