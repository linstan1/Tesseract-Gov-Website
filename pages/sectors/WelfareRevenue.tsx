import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const WelfareRevenue: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/welfare-revenue#service',
      name: 'AI, Research and Public Engagement for UK Welfare and Revenue Bodies',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public Sector AI and Research Consulting — Welfare and Revenue',
      description:
        'Algorithmic transparency, equality impact assessment, fraud and error analytics, and benefits decision-support assurance for DWP, HMRC, HM Treasury, OBR, and connected arm\'s-length bodies. Available via CCS RM6200 and CCS RM6094 (Spark DPS).',
      url: 'https://gov.tesseract.academy/sectors/welfare-revenue',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'UK Welfare, Tax and Revenue Bodies',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Welfare and Revenue Sector Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Equality Impact Assessment for Algorithmic Decision Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fraud and Error Model Bias Auditing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Algorithmic Transparency Recording Standard (ATRS) Documentation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Benefits Decision-Support Traceability Reviews' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMRC RIS-Aligned Data Handling and Model Assurance' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sector-welfare-revenue-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sector-welfare-revenue-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Welfare, Tax and Revenue
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research and Assurance for UK Welfare and Revenue Bodies
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          With over <strong className="text-gov-dark">£300 billion</strong> in annual benefits expenditure under <a href="https://www.gov.uk/government/organisations/department-for-work-pensions" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Work and Pensions (DWP)</a> stewardship and <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HM Revenue and Customs (HMRC)</a> collecting north of £800 billion in tax receipts annually, algorithmic decisions in this sector touch every household in Britain. Tesseract Academy supports DWP, HMRC, <a href="https://www.gov.uk/government/organisations/hm-treasury" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HM Treasury</a>, the <a href="https://obr.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office for Budget Responsibility (OBR)</a>, and the <a href="https://osr.statisticsauthority.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office for Statistics Regulation</a> with equality-first AI assurance, <a href="https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Algorithmic Transparency Recording Standard (ATRS)</a> documentation, and benefits decision-support traceability.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"When AI touches benefits, tax, or compliance decisions, the equality impact is the contract — not an annex. We build EHRC-ready audit trails into every model from week one."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Welfare and revenue work sits in the most procedurally exposed corner of the UK state. The <a href="https://www.gov.uk/government/organisations/department-for-work-pensions" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Work and Pensions (DWP)</a> publishes annual <a href="https://www.gov.uk/government/collections/fraud-and-error-in-the-benefit-system" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Fraud and Error in the Benefit System</a> statistics that draw scrutiny from the <a href="https://www.gov.uk/government/organisations/government-internal-audit-agency" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Internal Audit Agency (GIAA)</a>, the <a href="https://www.nao.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Audit Office</a>, and parliamentary committees. <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">HMRC</a>'s long-running <em>Connect</em> data-matching platform — referenced in successive HMRC annual reports as a backbone of risk-based compliance — exemplifies the kind of high-stakes analytics environment Tesseract has been built to assure. We deliver Equality Impact Assessments (EIA) under the <a href="https://www.gov.uk/guidance/equality-act-2010-guidance" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Sector Equality Duty</a>, supported by <a href="https://www.equalityhumanrights.com/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Equality and Human Rights Commission (EHRC)</a> AI guidance and <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Information Commissioner's Office (ICO)</a> data protection audits.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Decisions in this sector are challengeable through statutory routes the rest of government rarely faces at scale: the <a href="https://www.gov.uk/government/organisations/independent-case-examiner" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Independent Case Examiner</a>, the <a href="https://ssac.independent.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Social Security Advisory Committee</a>, and the <a href="https://www.adjudicatorsoffice.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Adjudicator's Office</a> all impose evidentiary standards on automated and semi-automated decisions. Our equality and traceability methodology is informed by published research from the <a href="https://www.jrf.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Joseph Rowntree Foundation</a>, the <a href="https://www.resolutionfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Resolution Foundation</a>, the <a href="https://ifs.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Institute for Fiscal Studies (IFS)</a>, the <a href="https://maps.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Money and Pensions Service</a>, and operational evidence from <a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Citizens Advice</a> casework — bodies whose published evidence is routinely cited in select committee scrutiny of welfare AI.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          On the revenue side, our model assurance work aligns with HMRC's Risk and Intelligence Service (RIS) data handling standards, the <a href="https://www.gov.uk/government/organisations/cabinet-office" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Cabinet Office</a> Data Ethics Framework, and <a href="https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Science, Innovation and Technology (DSIT)</a> guidance on AI in the public sector. We document every model card to ATRS Tier 1 and Tier 2 specifications so that DWP and HMRC publishing teams can lift our outputs directly into the public Algorithmic Transparency Hub without rework. Our team has produced equality-grounded statistical work cited in policy by the <a href="https://obr.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office for Budget Responsibility</a> and reviewed against <a href="https://osr.statisticsauthority.gov.uk/code-of-practice/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Office for Statistics Regulation</a> Code of Practice principles.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise (PPON: PWJP-6874-MXDJ; ICO: ZB715782) holding £2 million public liability, £10 million employers' liability, and £5 million professional indemnity cover. We are SME-accredited under <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6200</a> and accessible via <a href="https://www.crowncommercial.gov.uk/agreements/RM6094" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6094 (Spark DPS)</a>, with direct-award capacity for engagements below the £10,000 threshold and full Procurement Act 2023 compliance for above-threshold work.
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
                <td className="px-6 py-4 text-gov-dark font-medium">Equality Impact Assessment depth</td>
                <td className="px-6 py-4 text-gov-dark">EHRC-ready, PSED-grounded</td>
                <td className="px-6 py-4 text-gov-secondary">Templated, often light-touch</td>
                <td className="px-6 py-4 text-gov-secondary">Variable — depends on equalities lead</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">ATRS-ready documentation</td>
                <td className="px-6 py-4 text-gov-dark">Tier 1 + Tier 2 model cards as default</td>
                <td className="px-6 py-4 text-gov-secondary">Additional cost</td>
                <td className="px-6 py-4 text-gov-secondary">Often retrofitted post-deployment</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Fraud and error model bias auditing</td>
                <td className="px-6 py-4 text-gov-dark">Disaggregated by protected characteristic</td>
                <td className="px-6 py-4 text-gov-secondary">Aggregate KPIs only</td>
                <td className="px-6 py-4 text-gov-secondary">Constrained by capacity</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Benefits decision-support traceability</td>
                <td className="px-6 py-4 text-gov-dark">Per-decision audit trails for ICE/SSAC review</td>
                <td className="px-6 py-4 text-gov-secondary">Limited to system logs</td>
                <td className="px-6 py-4 text-gov-secondary">Often reconstructed after challenge</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">HMRC RIS-aligned data handling</td>
                <td className="px-6 py-4 text-gov-dark">Cyber Essentials + ICO-registered processing</td>
                <td className="px-6 py-4 text-gov-secondary">Generic enterprise controls</td>
                <td className="px-6 py-4 text-gov-secondary">Internal — not externally certifiable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME procurement flexibility</td>
                <td className="px-6 py-4 text-gov-dark">RM6200, RM6094, direct award &lt;£10k</td>
                <td className="px-6 py-4 text-gov-secondary">Premium enterprise pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Not applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Typical engagement — DWP fraud and error model audit
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Equality and Bias Audit of a Welfare Risk-Scoring Model
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            In a representative engagement of the kind Tesseract has supported with welfare-adjacent
            bodies, our team would audit a <a href="https://www.gov.uk/government/organisations/department-for-work-pensions" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">DWP</a>-style fraud and error risk-scoring model
            against the <a href="https://www.gov.uk/guidance/equality-act-2010-guidance" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Sector Equality Duty</a>, EHRC AI guidance,
            and Algorithmic Transparency Recording Standard requirements. Outputs include disaggregated
            performance metrics across all nine protected characteristics, a Data Protection Impact
            Assessment refreshed against ICO guidance, and an ATRS Tier 2 model card publishable
            on the GOV.UK Algorithmic Transparency Hub. Findings are designed to withstand scrutiny
            from the Independent Case Examiner, the Social Security Advisory Committee, and the
            <a href="https://www.nao.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> National Audit Office</a>.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">9</p>
              <p className="text-sm text-gov-secondary mt-1">Protected characteristics analysed</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">ATRS</p>
              <p className="text-sm text-gov-secondary mt-1">Tier 1 + Tier 2 documentation</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">EHRC</p>
              <p className="text-sm text-gov-secondary mt-1">Equality Act 2010 alignment</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Reference case — Kalgera financial vulnerability detection
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            ML for Detecting Financial Vulnerability in Banking Data
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract delivered the machine learning and data science core for Kalgera, a fintech
            platform identifying signals of financial vulnerability — a domain directly relevant to
            DWP, HMRC, and the Money and Pensions Service. The work spans behavioural feature
            engineering on transactional banking data, vulnerability classification under FCA
            consumer-duty principles, and explainability outputs designed to support frontline
            advisor decisions of the kind Citizens Advice and the Money and Pensions Service deliver
            at scale. Read the full case study for the methodology, data architecture and outcomes.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">FCA</p>
              <p className="text-sm text-gov-secondary mt-1">Consumer-duty aligned</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">ML</p>
              <p className="text-sm text-gov-secondary mt-1">Vulnerability classification</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">XAI</p>
              <p className="text-sm text-gov-secondary mt-1">Explainability for frontline staff</p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline font-medium">
              Read the Kalgera case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Welfare and revenue bodies can commission Tesseract Academy through the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for AI assurance, equality impact, and policy-grade analytics
                engagements with DWP, HMRC, HM Treasury, and OBR. Further competition required
                above £10,000.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6094 — Spark DPS (innovation)</p>
              <p className="text-gov-secondary text-sm mt-1">
                The Spark Dynamic Purchasing System is appropriate where the engagement is
                innovation-led — early-stage AI assurance pilots, novel bias-detection methodology,
                or rapid feasibility studies on welfare and revenue datasets.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">HMRC commercial frameworks</p>
              <p className="text-gov-secondary text-sm mt-1">
                HMRC operates department-specific commercial routes for analytics, data-science
                and tax-administration assurance work. Tesseract is available as an SME supplier
                under those department frameworks, including via Crown Commercial Service
                aggregations where applicable.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Contracts below £10,000 may be awarded directly without further competition,
                subject to Procurement Act 2023 thresholds and departmental commercial policy.
                Suitable for scoping studies and rapid equality reviews.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To begin a conversation, contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>{' '}
          with a brief description of your model, data environment, and equality risk profile.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Related</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li><Link to="/services/ai-governance" className="text-gov-blue hover:underline">AI Governance and Assurance →</Link></li>
          <li><Link to="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector →</Link></li>
          <li><Link to="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Analysis →</Link></li>
          <li><Link to="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline">Case Study — Kalgera Financial Vulnerability →</Link></li>
          <li><Link to="/sectors" className="text-gov-blue hover:underline">All UK Government Sectors →</Link></li>
          <li><Link to="/how-to-buy" className="text-gov-blue hover:underline">How to Buy — Procurement Routes →</Link></li>
        </ul>
      </section>
    </div>
  );
};
