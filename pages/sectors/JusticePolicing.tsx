import React, { useEffect } from 'react';

export const JusticePolicing: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/justice-policing#service',
      name: 'AI, Research and Data Services for UK Justice and Policing',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Justice and Policing AI Consulting',
      description:
        'Algorithmic transparency, equalities impact assessment, biometric governance and data science for UK justice and policing customers. Aligned to the College of Policing AI principles, the Algorithmic Transparency Recording Standard (ATRS), and Equality Act 2010 obligations.',
      url: 'https://gov.tesseract.academy/sectors/justice-policing',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'UK Justice and Policing Community',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Justice and Policing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Algorithmic Transparency Recording Standard (ATRS) Documentation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Equalities Impact Assessment for Justice Algorithms' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Biometric and Facial Recognition Governance Reviews' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ICO-Aligned Algorithmic Auditing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criminal Justice Data Science and Evaluation' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sector-justice-policing-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sector-justice-policing-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Justice and Policing
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research and Data Services for Justice and Policing
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Public confidence in justice algorithms hinges on transparency: only 7% of UK adults say they trust public bodies to use AI fairly without independent oversight, according to <a href="https://www.gov.uk/government/organisations/centre-for-data-ethics-and-innovation" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Centre for Data Ethics and Innovation (CDEI)</a> tracker research. Tesseract Academy supports the <a href="https://www.gov.uk/government/organisations/ministry-of-justice" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Ministry of Justice (MoJ)</a>, <a href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HMCTS</a>, <a href="https://www.gov.uk/government/organisations/her-majestys-prison-and-probation-service" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HMPPS</a>, the <a href="https://www.cps.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Prosecution Service (CPS)</a>, and policing customers with auditable, ATRS-ready algorithmic governance.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"When algorithms inform sentencing, bail, or risk scoring, the burden of explainability falls on the procurer — not the supplier. We build that audit trail in from day one."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy delivers algorithmic transparency, equalities impact assessment, biometric governance review, and criminal justice data science to UK justice and policing customers. Our methodology is grounded in the <a href="https://www.college.police.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">College of Policing</a> AI principles, the cross-government <a href="https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Algorithmic Transparency Recording Standard (ATRS)</a>, and obligations under the <a href="https://www.legislation.gov.uk/ukpga/2010/15/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Equality Act 2010</a>. Engagements are scoped against the <a href="https://www.gov.uk/government/publications/ministry-of-justice-data-strategy" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">MoJ data strategy</a> and the National Policing Digital Strategy maintained by the <a href="https://www.npcc.police.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Police Chiefs' Council (NPCC)</a> and <a href="https://www.pds.police.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Police Digital Service</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Typical work covers ATRS-ready model documentation; equalities impact assessment with quantitative disparate-impact testing; review of biometric and facial-recognition systems against <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Information Commissioner's Office (ICO)</a> and <a href="https://www.equalityhumanrights.com/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Equality and Human Rights Commission (EHRC)</a> expectations; and evaluation of risk-scoring tools used across HMPPS and police forces. We also engage with the <a href="https://www.sentencingcouncil.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Sentencing Council</a>, His Majesty's Inspectorate of Constabulary, Fire &amp; Rescue Services (HMICFRS), and the <a href="https://www.policeconduct.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Independent Office for Police Conduct (IOPC)</a> on issues touching algorithmic accountability. In Scotland, our work is sized to the legal frameworks operated by the Crown Office and Procurator Fiscal Service and Police Scotland.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Every engagement produces ICO-aligned documentation: Data Protection Impact Assessments, Legitimate Interests Assessments where relevant, and ATRS-format records mapped to CDEI guidance. Where systems involve police-to-police data flows, we apply the National Police Chiefs' Council Suspect-to-Suspect (S2S) and inter-force data-sharing patterns, and we document data lineage in line with the National Data Sharing Code of Practice. Outputs include a structured audit trail suitable for inspection by HMICFRS, the IOPC, and parliamentary committees.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise. Our public liability insurance is £2 million, employers' liability £10 million, and professional indemnity £5 million. We are registered on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200</a> and are familiar with policing procurement vehicles operated by BlueLight Commercial. PPON: PWJP-6874-MXDJ. ICO registration: ZB715782.
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
                <td className="px-6 py-4 text-gov-dark font-medium">ATRS-ready model documentation</td>
                <td className="px-6 py-4 text-gov-dark">Default deliverable</td>
                <td className="px-6 py-4 text-gov-secondary">Bespoke add-on</td>
                <td className="px-6 py-4 text-gov-secondary">Often missing</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">ICO-aligned algorithmic auditing</td>
                <td className="px-6 py-4 text-gov-dark">Yes — DPIA + bias audit</td>
                <td className="px-6 py-4 text-gov-secondary">Available — premium</td>
                <td className="px-6 py-4 text-gov-secondary">Skill-dependent</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Equalities impact depth</td>
                <td className="px-6 py-4 text-gov-dark">Quantitative disparate-impact testing</td>
                <td className="px-6 py-4 text-gov-secondary">Qualitative typically</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Biometric / FR governance</td>
                <td className="px-6 py-4 text-gov-dark">EHRC + ICO framework alignment</td>
                <td className="px-6 py-4 text-gov-secondary">Vendor-led</td>
                <td className="px-6 py-4 text-gov-secondary">Limited capacity</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Criminal justice S2S data handling</td>
                <td className="px-6 py-4 text-gov-dark">NPCC patterns documented</td>
                <td className="px-6 py-4 text-gov-secondary">Programme-specific</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — internal</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME pricing flexibility</td>
                <td className="px-6 py-4 text-gov-dark">Yes — micro-enterprise rates</td>
                <td className="px-6 py-4 text-gov-secondary">Premium enterprise pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Fixed headcount cost</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Independent oversight credibility</td>
                <td className="px-6 py-4 text-gov-dark">Academic + open-source default</td>
                <td className="px-6 py-4 text-gov-secondary">Conflicts where SI also builds</td>
                <td className="px-6 py-4 text-gov-secondary">Internal — limited independence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Where Tesseract has supported — Vulnerability Detection in Regulated Decisioning
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Ethical AI for Vulnerability — Lessons Transferable to Justice Risk Scoring
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Our work with <a href="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline">Kalgera</a> on AI-driven detection of financial vulnerability produced a peer-reviewed methodology for explainable scoring of high-stakes decisions affecting individuals. The same engineering pattern — explainability layers, bias auditing, and ICO-aligned DPIAs — transfers cleanly to justice risk-scoring contexts such as offender management, court listing prioritisation, and CPS triage. Documentation produced for Kalgera satisfies the audit-trail expectations set out by the FCA, which closely mirror those of the ICO and EHRC for justice algorithms.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Peer</p>
              <p className="text-sm text-gov-secondary mt-1">Reviewed methodology</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">DPIA</p>
              <p className="text-sm text-gov-secondary mt-1">ICO-aligned documentation</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">Explainability layers built</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Typical engagement — ATRS Documentation and Equalities Impact Review
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            ATRS-Ready Audit for a Police or HMPPS Risk-Scoring Algorithm
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            A typical engagement involves taking an existing risk-scoring algorithm — for example, a probation case-prioritisation tool or a custody-decision aid — and producing a complete ATRS Tier 1 and Tier 2 record, an Equalities Impact Assessment with quantitative disparate-impact testing across protected characteristics, and a remediation plan signed off by senior responsible officers. The engagement aligns with College of Policing AI principles, NPCC governance, and HMICFRS inspection criteria, and integrates with the force or directorate's existing data-protection register.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">2</p>
              <p className="text-sm text-gov-secondary mt-1">ATRS tiers documented</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">9</p>
              <p className="text-sm text-gov-secondary mt-1">Protected characteristics tested</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">CoP</p>
              <p className="text-sm text-gov-secondary mt-1">College of Policing aligned</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Justice and policing customers can engage Tesseract Academy through several routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">MoJ Frameworks (e.g. Justice Information Systems)</p>
              <p className="text-gov-secondary text-sm mt-1">Justice-specific call-off vehicles for analytical and assurance work, including the Justice Information Systems framework and successor agreements.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">The primary CCS route for algorithmic assurance, equalities impact and ATRS work. Suitable for engagements requiring formal further competition.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Police Procurement (BlueLight Commercial)</p>
              <p className="text-gov-secondary text-sm mt-1">Policing-specific vehicles operated by BlueLight Commercial and lead-force collaborative procurements. Used for force-level algorithmic audit and biometric governance work.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">Contracts below £10,000 may be awarded directly under framework rules. Suitable for short-form ATRS reviews or rapid equalities scoping.</p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">fabio@thetesseractacademy.com</a>{' '}
          with a brief description of your requirement, the algorithm or data system in scope, and indicative timeline.
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Related pages</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-base">
          <li><a href="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline">Case study — Kalgera financial vulnerability</a></li>
          <li><a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">Case study — National Digital Twin Programme</a></li>
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
