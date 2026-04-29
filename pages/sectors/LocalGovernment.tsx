import React, { useEffect } from 'react';

export const LocalGovernment: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/local-government#service',
      name: 'AI and Research Services for UK Local Government and Councils',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public sector consultancy',
      description:
        'AI strategy, ethics review, data science, and research services for UK local authorities, combined authorities, devolved governments, and council arm\'s-length bodies. Aligned to MHCLG digital strategy and the Levelling Up White Paper.',
      url: 'https://gov.tesseract.academy/sectors/local-government',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'Ministry of Housing, Communities and Local Government',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Local Government AI and Research Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Council AI Strategy and Ethics Review' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Land, Property, and Asset Data Modelling' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Public Engagement and Deliberative Research' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Algorithmic Transparency and DPIA Authoring' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Officer and Member AI Literacy Training' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'local-government-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('local-government-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Local Government and Councils
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research & Data Services for Local Government | UK Public Sector
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          UK local authorities collectively spend over £100 billion a year on services, yet
          {' '}<a href="https://www.local.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">the Local Government Association (LGA)</a> reports that fewer than a quarter of councils have a documented AI strategy. Tesseract Academy works with the Ministry of Housing, Communities and Local Government (MHCLG), the Office for Local Government (Oflog), Local Partnerships, COSLA, the Welsh Government, CIPFA, SOLACE, and individual councils to deliver AI strategy, ethics review, and research aligned to the Levelling Up White Paper and the MHCLG digital strategy.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Councils don't fail at AI because the models are wrong — they fail because the governance, the public mandate, and the data foundations weren't built before the procurement was signed."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Local government sits at the most operationally complex layer of the UK public sector. A council typically delivers more than 700 statutory and discretionary services, holds custody of land, property, social care, electoral, and benefits data, and reports into a regulatory landscape that includes <a href="https://www.gov.uk/government/organisations/office-for-local-government" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">the Office for Local Government (Oflog)</a>, the National Audit Office, the Local Government and Social Care Ombudsman, and the Information Commissioner's Office. Successful AI deployment requires the same operational and ethical maturity that the
          {' '}<a href="https://www.gov.uk/government/publications/levelling-up-the-united-kingdom" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Levelling Up White Paper</a> identified as a structural gap in council digital capability.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy partners with central, devolved, and local government bodies including MHCLG, the legacy Department for Levelling Up, Housing and Communities (DLUHC), Local Partnerships, COSLA, the Welsh Government, the National Association of Local Councils (NALC), CIPFA, SOLACE, the Office for National Statistics (ONS), and the Government Digital Service (GDS). Our engagements range from council AI strategy and ethics review through to land valuation modelling, deliberative public engagement, and algorithmic transparency reporting aligned to the
          {' '}<a href="https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-guidance-for-public-sector-bodies" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Algorithmic Transparency Recording Standard</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Where council AI projects move into citizen-facing decisions — benefits, housing allocation, social care eligibility, school admissions — we layer in equity audit, deliberative public engagement methods, and explicit alignment with the Local Government and Social Care Ombudsman's expectations on automated decision making. Tesseract Academy has previously delivered land valuation research for the Welsh Government as part of its Land Value Tax evaluation, with findings cited by Senedd committees and published on GOV.WALES, and our methods build on guidance from the National Audit Office on value-for-money assessment of digital programmes.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise (Kampakis and Co Ltd, company number 10459791, ICO ZB715782) with public liability insurance of £2 million, employers' liability of £10 million, and professional indemnity of £5 million. We hold a position on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200 (Management Consultancy Three)</a>, and councils may also access Tesseract via ESPO and YPO buying organisations. Our PPON is PWJP-6874-MXDJ.
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">Generic Consultancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Council AI strategy and ethics review</td>
                <td className="px-6 py-4 text-gov-dark">Yes — bespoke to Member structure</td>
                <td className="px-6 py-4 text-gov-secondary">Standard playbook</td>
                <td className="px-6 py-4 text-gov-secondary">Generic frameworks</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Algorithmic Transparency Recording Standard</td>
                <td className="px-6 py-4 text-gov-dark">ATRS records authored end-to-end</td>
                <td className="px-6 py-4 text-gov-secondary">Available at premium rates</td>
                <td className="px-6 py-4 text-gov-secondary">Rarely in scope</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Land, property, and asset data modelling</td>
                <td className="px-6 py-4 text-gov-dark">Welsh Government Land Value Tax study</td>
                <td className="px-6 py-4 text-gov-secondary">GIS-led</td>
                <td className="px-6 py-4 text-gov-secondary">Limited</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Deliberative and participatory engagement</td>
                <td className="px-6 py-4 text-gov-dark">Citizens' juries and deliberative panels</td>
                <td className="px-6 py-4 text-gov-secondary">Survey-led</td>
                <td className="px-6 py-4 text-gov-secondary">Rare in-house</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">CCS / ESPO / YPO route availability</td>
                <td className="px-6 py-4 text-gov-dark">CCS RM6200, accessible via ESPO/YPO</td>
                <td className="px-6 py-4 text-gov-secondary">Multiple frameworks</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME pricing for shire and district councils</td>
                <td className="px-6 py-4 text-gov-dark">Yes — micro-enterprise rates</td>
                <td className="px-6 py-4 text-gov-secondary">Premium pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Mid-market pricing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Welsh Government — Land Valuation Research
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Machine Learning for Land Value Tax Methodology
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Commissioned by Welsh Government, Tesseract Academy evaluated five land valuation methodologies for the proposed Land Value Tax, applying machine learning models to Land Registry data across 22 Welsh local authorities and benchmarking against international comparators. Findings were cited in Senedd committee proceedings and published on
            {' '}<a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.WALES</a>. The methodology aligns with MHCLG land data standards and CIPFA expectations on local taxation analysis, and mirrors the value-for-money framing used by the National Audit Office in evaluating local government digital programmes.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">5</p>
              <p className="text-sm text-gov-secondary mt-1">Valuation methodologies evaluated</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">22</p>
              <p className="text-sm text-gov-secondary mt-1">Welsh local authorities covered</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Senedd</p>
              <p className="text-sm text-gov-secondary mt-1">Cited in committee proceedings</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Council — AI Ethics Review
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Council AI Ethics Review and Algorithmic Transparency Programme
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            A typical Tesseract Academy council engagement is a 10 to 12 week AI ethics review covering procurement, deployment, and reporting. The review inventories all in-flight and proposed AI systems against Cabinet Office and
            {' '}<a href="https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-guidance-for-public-sector-bodies" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Algorithmic Transparency Recording Standard</a> requirements, audits DPIAs against ICO expectations, and produces a Member-ready ethics report referencing Local Government and Social Care Ombudsman guidance. Where Tesseract has supported similar council programmes, the most common findings are gaps in officer training, missing ATRS records, and insufficient deliberative engagement on citizen-facing systems — themes echoed by the LGA, SOLACE, and Local Partnerships.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">12wk</p>
              <p className="text-sm text-gov-secondary mt-1">Typical review timeline</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">ATRS</p>
              <p className="text-sm text-gov-secondary mt-1">Records authored to Cabinet Office standard</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Member</p>
              <p className="text-sm text-gov-secondary mt-1">Cabinet-ready ethics report delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Local authorities, combined authorities, devolved governments, and council arm's-length bodies can commission Tesseract Academy through the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for AI strategy, ethics review, and policy-aligned research at council, combined authority, and devolved government level. Further competition required for contracts above £10,000.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">ESPO and YPO buying organisations</p>
              <p className="text-gov-secondary text-sm mt-1">
                Councils may access Tesseract Academy via ESPO and YPO consultancy frameworks for advisory engagements, ethics reviews, and member-led AI strategy work.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Discovery-phase work, ethics scoping, and short advisory engagements below £10,000 may be awarded directly under the Procurement Act 2023 framework rules.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Find a Tender Service (FaTS) — above threshold</p>
              <p className="text-gov-secondary text-sm mt-1">
                Combined authorities and larger council programmes above procurement thresholds run advertised competitions via FaTS under the Procurement Act 2023.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>{' '}
          with a brief description of your council's challenge, the data environment, and indicative timeline.
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Related pages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
          <li><a href="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector</a></li>
          <li><a href="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Services</a></li>
          <li><a href="/case-studies/welsh-government-land-valuation" className="text-gov-blue hover:underline">Case study: Welsh Government land valuation</a></li>
          <li><a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">Case study: National Digital Twin Programme</a></li>
          <li><a href="/insights" className="text-gov-blue hover:underline">Insights and articles</a></li>
          <li><a href="/how-to-buy" className="text-gov-blue hover:underline">How to buy from Tesseract Academy</a></li>
        </ul>
      </section>
    </div>
  );
};
