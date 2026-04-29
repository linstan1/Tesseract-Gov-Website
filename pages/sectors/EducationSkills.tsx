import React, { useEffect } from 'react';

export const EducationSkills: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/education-skills#service',
      name: 'AI, Research and Upskilling Services for UK Education and Skills Sector',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public sector consultancy',
      description:
        'AI literacy, data science upskilling, EdTech evaluation, and research services for the Department for Education, Skills England, JISC, UKRI, Ofsted, and the Office for Students. Aligned to the DfE EdTech Strategy and the Skills England remit letter.',
      url: 'https://gov.tesseract.academy/sectors/education-skills',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'Department for Education',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Education and Skills AI and Research Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Civil Service and Public Sector AI Upskilling' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EdTech and Generative AI Evaluation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skills England and UKRI Research Support' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Higher Education AI Strategy and Curriculum Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ofsted-Aligned Research Reviews' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'education-skills-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('education-skills-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Education and Skills
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research & Data Services for Education and Skills | UK Public Sector
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Tesseract Academy's BridgeAI programme registered more than 1,100 learners from UK creative and adjacent industries in a single cohort, and our civil service upskilling programmes have achieved completion rates above 91%. We work with the
          {' '}<a href="https://www.gov.uk/government/organisations/department-for-education" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Education (DfE)</a>, Skills England, Ofsted, the Office for Students, JISC, UK Research and Innovation (UKRI), the Education and Skills Funding Agency (ESFA), HESA, HEPI, the Education and Training Foundation, and the Alan Turing Institute to deliver AI literacy, EdTech evaluation, and research aligned to the DfE EdTech Strategy and the Skills England remit letter.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"AI literacy is now infrastructure for the public sector workforce — not a learning and development line item. Treating it as optional is the single biggest preventable risk in UK education and skills policy."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          The UK education and skills landscape is undergoing the largest realignment in a generation. The
          {' '}<a href="https://www.gov.uk/government/publications/skills-england-remit-letter" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Skills England remit letter</a> sets a clear expectation that AI literacy and applied data skills are embedded across post-16 provision, while the
          {' '}<a href="https://www.gov.uk/government/publications/realising-the-potential-of-technology-in-education" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">DfE EdTech Strategy</a> requires schools, colleges, and multi-academy trusts to evaluate technology adoption against measurable learning outcomes. Tesseract Academy supports this realignment with research-grade evaluation, curriculum design, and large-scale upskilling programmes that have been delivered for civil service teams, regulators, and the creative industries.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our delivery partners and stakeholders span the full education and skills system: DfE, Skills England, Ofsted, the Office for Students (OfS), JISC, UKRI, ESFA, the Higher Education Statistics Agency (HESA), the Higher Education Policy Institute (HEPI), Innovate UK and its BridgeAI programme, the Alan Turing Institute, OpenStax, Welsh Government Education, Education Scotland, the Education and Training Foundation (ETF), and the Department for Business and Trade. Where research outputs are required, we align to
          {' '}<a href="https://www.gov.uk/government/publications/research-review-series-computing" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Ofsted research review</a> standards and to UKRI's open research expectations.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Typical engagements include applied AI bootcamps for civil service Grade 7 to SCS 1 cohorts; HEI-level AI strategy and curriculum reviews aligned to OfS quality conditions; EdTech and generative AI evaluations for schools and multi-academy trusts that map directly to the DfE EdTech Strategy outcome framework; Ofsted-aligned research reviews; and policy research support for Skills England and UKRI. Our materials are designed to be open-licensed where contractually possible, drawing on OpenStax-style open educational resource (OER) practice, and our evaluation methodology is adapted from HEPI and Nuffield-style mixed-methods research.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise (Kampakis and Co Ltd, company number 10459791, ICO ZB715782) with public liability insurance of £2 million, employers' liability of £10 million, and professional indemnity of £5 million. We hold a position on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200 (Management Consultancy Three)</a> and are accessible to schools and trusts via the DfE Get Help Buying for Schools service. Our PPON is PWJP-6874-MXDJ.
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
                <td className="px-6 py-4 text-gov-dark font-medium">Civil service AI upskilling at scale</td>
                <td className="px-6 py-4 text-gov-dark">91%+ completion across delivered cohorts</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
                <td className="px-6 py-4 text-gov-secondary">Limited delivery experience</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">BridgeAI / Innovate UK programme delivery</td>
                <td className="px-6 py-4 text-gov-dark">1,100+ registrations on a single cohort</td>
                <td className="px-6 py-4 text-gov-secondary">Rare</td>
                <td className="px-6 py-4 text-gov-secondary">Not offered</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Ofsted-aligned research reviews</td>
                <td className="px-6 py-4 text-gov-dark">Yes — methodology peer-reviewed</td>
                <td className="px-6 py-4 text-gov-secondary">Subcontracted</td>
                <td className="px-6 py-4 text-gov-secondary">Light-touch only</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">EdTech and generative AI evaluation</td>
                <td className="px-6 py-4 text-gov-dark">Mixed-methods to DfE EdTech Strategy</td>
                <td className="px-6 py-4 text-gov-secondary">Vendor-led</td>
                <td className="px-6 py-4 text-gov-secondary">Survey-led only</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Open educational resources (OER) practice</td>
                <td className="px-6 py-4 text-gov-dark">OpenStax-style open licensing default</td>
                <td className="px-6 py-4 text-gov-secondary">IP retention common</td>
                <td className="px-6 py-4 text-gov-secondary">Rare</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">DfE Get Help Buying for Schools availability</td>
                <td className="px-6 py-4 text-gov-dark">Accessible — SME pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Premium pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            BridgeAI / Innovate UK — Creative Industries Upskilling
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            BridgeAI Cohort: 1,100+ Registrations from UK Creative Industries
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract Academy delivered an Innovate UK BridgeAI cohort focused on the UK creative and adjacent industries, attracting more than 1,100 learner registrations and producing a pipeline of applied AI projects across small and medium creative businesses. The programme was co-aligned with the
            {' '}<a href="https://iuk.ktn-uk.org/programme/bridgeai/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">BridgeAI / Innovate UK</a> outcome framework and drew on UKRI's open research expectations, with materials structured for re-use by the Education and Training Foundation and JISC member institutions. The cohort design built on Department for Business and Trade engagement with the creative industries and is consistent with HEPI and HESA observations on the rapid demand growth for applied AI skills across the post-18 system.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">1,100+</p>
              <p className="text-sm text-gov-secondary mt-1">BridgeAI registrations on a single cohort</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">UKRI</p>
              <p className="text-sm text-gov-secondary mt-1">Aligned to Innovate UK outcome framework</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Open</p>
              <p className="text-sm text-gov-secondary mt-1">OER-style materials reusable by JISC institutions</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Civil Service — Applied AI Upskilling
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Civil Service Applied AI Upskilling — 91% Completion
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract Academy has designed and delivered applied AI upskilling for civil service cohorts achieving 91% completion across delivered programmes. The curriculum maps directly to
            {' '}<a href="https://www.gov.uk/government/organisations/government-skills-and-curriculum-unit" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Skills and Curriculum Unit</a> standards, the Skills England remit letter, and DfE post-18 frameworks, and feeds into evaluation methodologies recognised by HESA and HEPI. Where Tesseract has supported similar civil service engagements, the most consistent outcomes are improved AI procurement scrutiny, better DPIA authorship by policy teams, and faster Discovery-phase delivery on subsequent AI projects — outcomes endorsed by the Education and Training Foundation and consistent with Education Scotland's applied digital skills framing.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">91%</p>
              <p className="text-sm text-gov-secondary mt-1">Civil service cohort completion rate</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">G7-SCS1</p>
              <p className="text-sm text-gov-secondary mt-1">Grades covered in delivered cohorts</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">DfE</p>
              <p className="text-sm text-gov-secondary mt-1">Aligned to EdTech Strategy outcome framework</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Education and skills sector buyers — DfE, Skills England, OfS, JISC, UKRI, multi-academy trusts, colleges, and universities — can commission Tesseract Academy through the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for DfE, Skills England, Ofsted, OfS, and central UKRI commissioning of AI strategy, EdTech evaluation, and research engagements. Further competition required for contracts above £10,000.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">DfE Get Help Buying for Schools</p>
              <p className="text-gov-secondary text-sm mt-1">
                Schools and multi-academy trusts may access Tesseract Academy via the DfE Get Help Buying for Schools service for evaluation, AI literacy, and curriculum support engagements.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6094 — Research Marketplace</p>
              <p className="text-gov-secondary text-sm mt-1">
                For Ofsted-aligned research reviews, HEPI-style evaluations, and UKRI policy research support, the Research Marketplace provides a direct route. Suitable for evidence-grade outputs.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Discovery-phase work, EdTech scoping, and short upskilling pilots below £10,000 may be awarded directly under framework rules.
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
          with a brief description of your education or skills requirement, the cohort or institution profile, and indicative timeline.
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Related pages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
          <li><a href="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector</a></li>
          <li><a href="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Services</a></li>
          <li><a href="/case-studies/bridgeai-creative-industries" className="text-gov-blue hover:underline">Case study: BridgeAI creative industries cohort</a></li>
          <li><a href="/case-studies/welsh-government-land-valuation" className="text-gov-blue hover:underline">Case study: Welsh Government land valuation</a></li>
          <li><a href="/insights" className="text-gov-blue hover:underline">Insights and articles</a></li>
          <li><a href="/how-to-buy" className="text-gov-blue hover:underline">How to buy from Tesseract Academy</a></li>
        </ul>
      </section>
    </div>
  );
};
