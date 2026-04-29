import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const DevolvedNations: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/devolved-nations#service',
      name: 'AI, Research and Public Engagement for the UK Devolved Nations',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public Sector AI and Research Consulting — Devolved Nations',
      description:
        'AI, data science, research and public engagement services for Welsh Government, Scottish Government, Northern Ireland Executive, devolved health systems, devolved revenue authorities, and devolved local-government partners. Welsh-language deliverables available.',
      url: 'https://gov.tesseract.academy/sectors/devolved-nations',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'UK Devolved Administrations and their arm\'s-length bodies',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Devolved Nations Sector Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Devolved-Legislation-Aware AI Strategy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bilingual (Welsh) Research and Engagement Deliverables' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellbeing of Future Generations Act 2015 Aligned Evaluation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Public Engagement and Deliberative Research for Devolved Policy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Learning for Devolved Tax and Revenue Bodies' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sector-devolved-nations-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sector-devolved-nations-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Devolved Nations
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research and Engagement for Wales, Scotland and Northern Ireland
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Across <strong className="text-gov-dark">three devolved governments</strong> with distinct legislatures, distinct evidence standards and distinct procurement portals, Tesseract Academy delivers AI, data science, research and engagement services to <a href="https://www.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Welsh Government</a>, the <a href="https://www.gov.scot/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Scottish Government</a>, the <a href="https://www.northernireland.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Northern Ireland Executive</a>, the <a href="https://senedd.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Senedd Cymru</a>, the <a href="https://www.parliament.scot/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Scottish Parliament</a>, and the <a href="http://www.niassembly.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Northern Ireland Assembly</a>, alongside devolved health, education, audit and revenue bodies. Welsh-language deliverables available.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Devolved policy is not a smaller version of Whitehall — Welsh, Scottish, and Northern Irish governments have distinct legislative frameworks, distinct evidence standards, and distinct political economies. Public sector AI must reflect that."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Devolved governments operate inside legislative frameworks that fundamentally shape what AI in
          government looks like. The <a href="https://www.futuregenerations.wales/about-us/future-generations-act/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Wellbeing of Future Generations (Wales) Act 2015</a>
          requires <a href="https://www.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Welsh Government</a>, <a href="https://www.audit.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Audit Wales</a>, <a href="https://www.estyn.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Estyn</a>, <a href="https://phw.nhs.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Health Wales</a> and the wider <a href="https://www.wlga.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Welsh Local Government Association (WLGA)</a> family to weigh long-term wellbeing against short-term efficiency — a frame that changes how cost-benefit analysis is structured for AI investments. Scotland's <a href="https://www.gov.scot/programme-for-government/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Programme for Government</a> and the strategic priorities co-ordinated through <a href="https://www.cosla.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">COSLA</a> apply a similar long-horizon test through the National Performance Framework. Tesseract has direct experience publishing research on <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.WALES</a> as part of Welsh Government's land valuation work for the proposed Land Value Tax.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Devolved health, education and revenue bodies are first-class clients in this sector. <a href="https://www.wales.nhs.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NHS Wales</a>, <a href="https://www.scot.nhs.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NHS Scotland</a>, <a href="https://www.health-ni.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Health and Social Care Northern Ireland</a>, <a href="https://education.gov.scot/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Education Scotland</a>, the Northern Ireland <a href="https://www.etini.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Education and Training Inspectorate</a>, the <a href="https://www.publichealthscotland.scot/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Health Scotland</a> agency, and the audit landscape covering <a href="https://www.audit-scotland.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Audit Scotland</a> and the <a href="https://www.niauditoffice.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Northern Ireland Audit Office (NIAO)</a> all sit under devolved accountability rules that shape evaluation methodology. Tesseract's research and engagement methods are calibrated for these distinct evidence standards and for the council-level interface with the <a href="https://www.nilga.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Northern Ireland Local Government Association (NILGA)</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Devolved revenue is a small but growing field of AI work. The <a href="https://www.gov.wales/welsh-revenue-authority" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Welsh Revenue Authority</a> administers Land Transaction Tax and Landfill Disposals Tax, while <a href="https://www.revenue.scot/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Revenue Scotland</a> administers Land and Buildings Transaction Tax and Scottish Landfill Tax — both are agile, modern bodies with appetite for AI assurance, model-risk management and equality-grounded analytics. Northern Ireland's commitment to digital public services through the latest <a href="https://www.northernireland.gov.uk/articles/programme-government" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NI Programme for Government</a> creates analogous opportunities. Our work plugs into the devolved research ecosystem alongside academic partners and is published through devolved government channels in line with each administration's open-government commitments.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise (PPON: PWJP-6874-MXDJ; ICO: ZB715782; DUNS: 222180245) carrying £2 million public liability, £10 million employers' liability and £5 million professional indemnity cover. We are SME-accredited under <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service RM6200</a> — which Welsh Government, Scottish Government and the Northern Ireland Executive are all eligible to call off — and we register on <a href="https://www.sell2wales.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Sell2Wales</a>, <a href="https://www.publiccontractsscotland.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Contracts Scotland</a>, and <a href="https://e-tendersni.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">eTendersNI</a>.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Sector Capability Comparison</h2>
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
                <td className="px-6 py-4 text-gov-dark font-medium">Bilingual (Welsh) deliverables</td>
                <td className="px-6 py-4 text-gov-dark">Yes — bilingual report capacity</td>
                <td className="px-6 py-4 text-gov-secondary">Subcontracted, slow turnaround</td>
                <td className="px-6 py-4 text-gov-secondary">Often outsourced separately</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Devolved legislative awareness</td>
                <td className="px-6 py-4 text-gov-dark">WBFGA, PfG, NI PfG fluent</td>
                <td className="px-6 py-4 text-gov-secondary">Whitehall-default framing</td>
                <td className="px-6 py-4 text-gov-secondary">Strong locally; varies on cross-nation work</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Devolved research-body partnerships</td>
                <td className="px-6 py-4 text-gov-dark">Active Welsh Government collaboration</td>
                <td className="px-6 py-4 text-gov-secondary">Limited devolved presence</td>
                <td className="px-6 py-4 text-gov-secondary">Department-bound</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">GOV.WALES publication track record</td>
                <td className="px-6 py-4 text-gov-dark">Yes — Welsh Government land valuation report</td>
                <td className="px-6 py-4 text-gov-secondary">Rare</td>
                <td className="px-6 py-4 text-gov-secondary">Publication via host department only</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Devolved procurement portals</td>
                <td className="px-6 py-4 text-gov-dark">Sell2Wales, PCS, eTendersNI registered</td>
                <td className="px-6 py-4 text-gov-secondary">Typically registered, often inactive</td>
                <td className="px-6 py-4 text-gov-secondary">Not applicable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME pricing flexibility</td>
                <td className="px-6 py-4 text-gov-dark">Micro-enterprise rates, direct award &lt;£10k</td>
                <td className="px-6 py-4 text-gov-secondary">Premium enterprise pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Fixed headcount cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Welsh Government — Machine Learning for Land Valuation
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            ML-Assisted Land Valuation for National Tax Policy
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Commissioned by Welsh Government to evaluate land valuation methodologies for the
            proposed Land Value Tax, our team applied machine learning models to Land Registry
            data across Welsh local authorities and benchmarked against conventional valuation
            and formula-based approaches. Statistical outputs were validated against international
            comparators and the final report was published on <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.WALES</a>. The work
            is structured to support Senedd Cymru committee scrutiny and aligned to Wellbeing of
            Future Generations Act long-term test.
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
              <p className="text-2xl font-extrabold text-gov-blue">GOV.WALES</p>
              <p className="text-sm text-gov-secondary mt-1">Published</p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/case-studies/welsh-government-land-valuation" className="text-gov-blue hover:underline font-medium">
              Read the Welsh Government land valuation case study →
            </Link>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Typical engagement — Scottish Government public engagement
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Deliberative Public Engagement on AI in Public Services
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            In an engagement of the kind Tesseract is well-placed to support across Scottish
            Government, COSLA, Public Health Scotland and Audit Scotland, our team would design
            and run a deliberative public engagement process on the use of AI in public services —
            recruiting a stratified citizen panel, developing accessible briefing materials,
            facilitating online and in-person sessions, and producing a policy-grade synthesis
            report. Outputs are calibrated to the Scottish Government's Programme for Government
            framing and to evaluation standards used by Audit Scotland, supported by published
            engagement materials in plain English.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">PfG</p>
              <p className="text-sm text-gov-secondary mt-1">Programme for Government aligned</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Mixed</p>
              <p className="text-sm text-gov-secondary mt-1">Online + in-person facilitation</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">COSLA</p>
              <p className="text-sm text-gov-secondary mt-1">Local government partnership</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Devolved governments and their arm's-length bodies can commission Tesseract Academy through
          the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 / RM6126 (UK-wide CCS frameworks)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Welsh Government, Scottish Government and the Northern Ireland Executive are all
                eligible to call off Crown Commercial Service frameworks including RM6200
                (Management Consultancy Three) and RM6126 (Research Marketplace). This is the
                primary route for AI strategy, research and policy assurance.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">Sell2Wales — Welsh Government portal</p>
              <p className="text-gov-secondary text-sm mt-1">
                The mandatory portal for Welsh Government and Welsh public-sector procurement.
                Tesseract is registered for AI, research and engagement opportunities published
                via Sell2Wales.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Public Contracts Scotland — Scottish Government portal</p>
              <p className="text-gov-secondary text-sm mt-1">
                The national procurement portal for Scottish Government, NHS Scotland, Audit
                Scotland, COSLA partners and Revenue Scotland. Tesseract is registered for
                opportunities published via PCS.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">eTendersNI — Northern Ireland portal</p>
              <p className="text-gov-secondary text-sm mt-1">
                The NI Executive's central procurement portal, used by NI departments, Health
                and Social Care NI, NIAO and NILGA partners. Tesseract is registered for AI,
                research and engagement opportunities published via eTendersNI.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">5</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Contracts below £10,000 may be awarded directly without further competition,
                subject to each administration's commercial policy. Suitable for scoping
                studies, rapid feasibility reviews and pilot engagements.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>{' '}
          with a brief description of your requirement, the relevant administration, and any
          bilingual deliverable needs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Related</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li><Link to="/case-studies/welsh-government-land-valuation" className="text-gov-blue hover:underline">Case Study — Welsh Government Land Valuation →</Link></li>
          <li><Link to="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Analysis →</Link></li>
          <li><Link to="/services/public-engagement" className="text-gov-blue hover:underline">Public Engagement and Deliberative Research →</Link></li>
          <li><Link to="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector →</Link></li>
          <li><Link to="/sectors" className="text-gov-blue hover:underline">All UK Government Sectors →</Link></li>
          <li><Link to="/how-to-buy" className="text-gov-blue hover:underline">How to Buy — Procurement Routes →</Link></li>
        </ul>
      </section>
    </div>
  );
};
