import React, { useEffect } from 'react';

export const TransportInfrastructure: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/transport-infrastructure#service',
      name: 'AI, Research and Data Services for UK Transport and Infrastructure',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Transport and Infrastructure AI Consulting',
      description:
        'Digital twin methodology, multi-modal data fusion, transport safety case work and accessibility audit for UK transport and infrastructure customers. Aligned to the National Digital Twin Programme, DfT Future of Mobility, and NIC Infrastructure Assessment.',
      url: 'https://gov.tesseract.academy/sectors/transport-infrastructure',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'UK Transport and Infrastructure Community',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transport and Infrastructure Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Twin Methodology and NDTP-Compatible Ontology' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Modal Transport Data Fusion' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Safety Case and AI Assurance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accessibility Audit (WCAG / PSBAR)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Open Data Publishing Readiness' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sector-transport-infrastructure-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sector-transport-infrastructure-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Transport and Infrastructure
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research and Data Services for Transport and Infrastructure
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          The <a href="https://nic.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Infrastructure Commission (NIC)</a> estimates the UK requires up to £40 billion of additional annual investment in economic infrastructure to meet 2050 commitments. Tesseract Academy supports the <a href="https://www.gov.uk/government/organisations/department-for-transport" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Transport (DfT)</a>, <a href="https://www.networkrail.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Network Rail</a>, <a href="https://tfl.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Transport for London (TfL)</a>, <a href="https://www.gov.uk/government/organisations/high-speed-two-limited" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HS2 Ltd</a>, and <a href="https://nationalhighways.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Highways</a> with digital-twin methodology, multi-modal data fusion, and AI assurance.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Digital twins for transport must reconcile data from operators, regulators, and local authorities — interoperability is the whole game."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy delivers digital-twin methodology, multi-modal data fusion, transport safety-case work, accessibility audit, and open-data publishing for UK transport and infrastructure customers. Our reference programme is the <a href="https://www.gov.uk/government/groups/national-digital-twin-programme" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Digital Twin Programme (NDTP)</a>, where our open-source ontology tooling extends the Information Management Framework (IMF) maintained for cross-sector interoperability. Our work aligns with the <a href="https://www.gov.uk/government/publications/future-of-mobility-urban-strategy" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">DfT Future of Mobility</a> strategy and the <a href="https://nic.org.uk/studies-reports/national-infrastructure-assessment/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NIC Infrastructure Assessment</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Engagements typically span the operator and regulator landscape — including <a href="https://www.caa.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Civil Aviation Authority (CAA)</a>, <a href="https://www.gov.uk/government/organisations/maritime-and-coastguard-agency" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Maritime and Coastguard Agency</a>, <a href="https://www.orr.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office of Rail and Road (ORR)</a>, <a href="https://www.gov.uk/government/organisations/active-travel-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Active Travel England</a>, and Sub-national Transport Bodies (STBs) such as <a href="https://transportforthenorth.com/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Transport for the North</a>. We work alongside the <a href="https://cp.catapult.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Connected Places Catapult</a>, the <a href="https://www.gov.uk/government/organisations/centre-for-connected-and-autonomous-vehicles" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Centre for Connected and Autonomous Vehicles (CCAV)</a>, and benchmark our outputs against the Road Safety Authority and the <a href="https://osr.statisticsauthority.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office for Statistics Regulation</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Every digital-twin engagement produces an NDTP-compatible ontology, a documented data-lineage graph, and an open-data publication plan. Where a deployed system informs safety-of-life decisions — for example in rail signalling, autonomous vehicle trials, or aviation operations — we produce a transport safety case aligned with ORR, CAA and CCAV expectations. Where the system is public-facing, we run accessibility audits to <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">WCAG 2.2</a> AA and the Public Sector Bodies Accessibility Regulations (PSBAR) and provide remediation plans.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise. Public liability insurance is £2 million, employers' liability £10 million, and professional indemnity £5 million. We are registered on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200</a> and have engaged with Network Rail Supply Chain and Connected Places Catapult innovation procurement processes. PPON: PWJP-6874-MXDJ. ICO registration: ZB715782.
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
                <td className="px-6 py-4 text-gov-dark font-medium">Digital twin methodology</td>
                <td className="px-6 py-4 text-gov-dark">NDTP-aligned, ontology-first</td>
                <td className="px-6 py-4 text-gov-secondary">Vendor platform-led</td>
                <td className="px-6 py-4 text-gov-secondary">Often nascent</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Multi-modal data fusion</td>
                <td className="px-6 py-4 text-gov-dark">Rail / road / air / mobility integration</td>
                <td className="px-6 py-4 text-gov-secondary">Mode-specific typically</td>
                <td className="px-6 py-4 text-gov-secondary">Operator-only data</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">NDTP-compatible ontology</td>
                <td className="px-6 py-4 text-gov-dark">Open-source ontology generator</td>
                <td className="px-6 py-4 text-gov-secondary">Proprietary models</td>
                <td className="px-6 py-4 text-gov-secondary">Bespoke / non-portable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Transport safety case experience</td>
                <td className="px-6 py-4 text-gov-dark">Aligned to ORR / CAA / CCAV</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — at scale</td>
                <td className="px-6 py-4 text-gov-secondary">Mode-specific</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Accessibility audit (WCAG / PSBAR)</td>
                <td className="px-6 py-4 text-gov-dark">WCAG 2.2 AA + PSBAR</td>
                <td className="px-6 py-4 text-gov-secondary">Subcontracted</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Open data publishing readiness</td>
                <td className="px-6 py-4 text-gov-dark">Default — open by design</td>
                <td className="px-6 py-4 text-gov-secondary">Rare — IP retention common</td>
                <td className="px-6 py-4 text-gov-secondary">Possible</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME pricing flexibility</td>
                <td className="px-6 py-4 text-gov-dark">Yes — micro-enterprise rates</td>
                <td className="px-6 py-4 text-gov-secondary">Premium enterprise pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Fixed headcount cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Where Tesseract has supported — National Digital Twin Programme
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            AI-Powered Ontology Extension for National Infrastructure Data
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            In collaboration with <a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">NDTP</a> (Department for Business and Trade, 2024-2025), we developed an open-source AI tool that automates ontology generation and extension across heterogeneous infrastructure data formats. The tool combines data profiling, Named Entity Recognition (NER) and large-language-model pipelines to produce ontology entities aligned with the NDTP Information Management Framework. It is directly applicable to transport-mode integration problems facing Network Rail, National Highways, and Sub-national Transport Bodies, and supports cross-operator interoperability that the NIC has identified as a priority.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">AI techniques fused (NER, LLM, profiling)</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Open</p>
              <p className="text-sm text-gov-secondary mt-1">Source — published on GitHub</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">NDTP</p>
              <p className="text-sm text-gov-secondary mt-1">Information Management Framework</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Typical engagement — Multi-Modal Data Fusion for an STB
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Cross-Operator Mobility Data Twin for a Sub-national Transport Body
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            A typical engagement reconciles operator data (rail, bus, active travel, road), regulator open data (ORR, CAA), and local-authority asset data into a single mobility ontology aligned to the NDTP Information Management Framework. Outputs include a digital twin scoped to a defined corridor or city-region, an open-data publication plan, an accessibility audit of any public-facing front-end against WCAG 2.2 AA / PSBAR, and a transport safety case for any AI-driven decisioning component. The engagement aligns with the DfT Future of Mobility strategy and the NIC's recommendations on data-led infrastructure planning.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">4</p>
              <p className="text-sm text-gov-secondary mt-1">Modes fused (rail, bus, active, road)</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">WCAG</p>
              <p className="text-sm text-gov-secondary mt-1">2.2 AA + PSBAR audit</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">IMF</p>
              <p className="text-sm text-gov-secondary mt-1">NDTP-compatible ontology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Transport and infrastructure customers can engage Tesseract Academy through several routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">The primary CCS route for digital-twin strategy, AI assurance and ontology engineering. Suitable for engagements requiring formal further competition.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">Network Rail Supply Chain</p>
              <p className="text-gov-secondary text-sm mt-1">Network Rail's qualified-supplier and innovation routes for analytical, ontology and digital-twin work across the rail estate.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Connected Places Catapult Innovation Procurement</p>
              <p className="text-gov-secondary text-sm mt-1">CP Catapult-led innovation challenges and SBRI-style competitions for connected places, smart mobility, and digital-twin pilots.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">DfT Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">DfT and arm's-length body direct awards under £10,000 for rapid feasibility, ontology scoping, or accessibility audit engagements, subject to framework rules.</p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">fabio@thetesseractacademy.com</a>{' '}
          with a brief description of your transport mode, data environment, and indicative timeline.
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
