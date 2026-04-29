import React, { useEffect } from 'react';

export const HealthNHS: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/sectors/health-nhs#service',
      name: 'AI and Research Services for NHS and UK Health Sector',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public sector consultancy',
      description:
        'AI, machine learning, governance, and research services for NHS England, NHS Trusts, integrated care boards, and UK health arm\'s-length bodies. Aligned to the NHS AI Strategy and MHRA SaMD guidance.',
      url: 'https://gov.tesseract.academy/sectors/health-nhs',
      areaServed: 'GB',
      audience: {
        '@type': 'GovernmentOrganization',
        name: 'NHS England',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Health Sector AI and Research Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical AI Readiness and Safety Case Support' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IG Toolkit / DSPT Compliance and DPIA Authoring' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MHRA Software and AI as a Medical Device (SaMD) Readiness' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real-World Evidence and Health Data Research Pipelines' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NHS Workforce AI Literacy and Upskilling' } },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'health-nhs-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('health-nhs-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Sector — Health and NHS
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI, Research & Data Services for Health and NHS | UK Public Sector
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          The <a href="https://transform.england.nhs.uk/ai-lab/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NHS AI Lab</a> has co-funded over 80 AI projects across NHS England since 2019, yet fewer than one in five reach routine clinical adoption. Tesseract Academy partners with NHS Trusts, integrated care boards, the
          {' '}<a href="https://www.nice.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Institute for Health and Care Excellence (NICE)</a>, MHRA, the Care Quality Commission,
          Health Data Research UK, and the Department of Health and Social Care to design clinically safe AI, build research-grade evidence, and align programmes with the NHS Long Term Plan and the NHS AI Strategy.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Health AI must clear an evidentiary bar that consumer AI never has to meet — clinical safety, equity, and explainability are non-negotiable, not features."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Health AI is the most heavily regulated form of public sector AI in the United Kingdom. Any decision-support, triage, imaging, or generative system intended for clinical use sits inside a layered regulatory perimeter that includes <a href="https://www.gov.uk/government/publications/software-and-artificial-intelligence-ai-as-a-medical-device" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">MHRA Software and AI as a Medical Device guidance</a>, NHS Digital Clinical Risk Management standards (DCB0129 and DCB0160), the Data Security and Protection Toolkit (DSPT), and the assurance expectations set by <a href="https://www.england.nhs.uk/long-term-plan/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">the NHS Long Term Plan</a> and the NHS AI Strategy. Tesseract Academy is built around that perimeter: every clinical engagement begins with a structured Discovery that maps regulatory class, evidence requirements, and equity risk before model design.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our delivery teams work with NHS England, the NHSE Transformation Directorate, NHS Digital legacy services now folded into NHSE, and the wider arm's-length body landscape including the UK AI Safety Institute, the NHS Race and Health Observatory, the AI Centre for Value Based Healthcare, and the Medicines and Healthcare products Regulatory Agency. We integrate research methods drawn from <a href="https://www.hdruk.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Health Data Research UK (HDR UK)</a>, the Health Foundation, the Nuffield Trust, and the NHS Confederation, ensuring that AI outputs are not only technically sound but defensible against peer review and committee scrutiny.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Typical engagements include AI readiness assessments for Trust executive teams; safety case authoring and DCB0129/DCB0160 evidence packs; DPIA and Data Protection by Design reviews aligned to UK GDPR and the Caldicott Principles; bias audits across protected characteristics with explicit reference to the NHS Race and Health Observatory's evidence base; and structured upskilling programmes for clinical informatics teams. Where engagements cross the SaMD threshold, we co-author Quality Management System artefacts compatible with ISO 13485 and IEC 62304, and we coordinate with the Care Quality Commission and Trust Information Governance leads to ensure assurance is end-to-end rather than retrofitted.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy is a Cyber Essentials certified micro-enterprise (Kampakis and Co Ltd, company number 10459791, ICO ZB715782) with public liability insurance of £2 million, employers' liability of £10 million, and professional indemnity of £5 million. We hold positions on Crown Commercial Service framework <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200 (Management Consultancy Three)</a> and engage with NHS Shared Business Services and NHS commercial routes for Trust-level call-offs. Our PPON is PWJP-6874-MXDJ, registered with the Cabinet Office supplier register.
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
                <td className="px-6 py-4 text-gov-dark font-medium">Clinical safety case alignment (DCB0129/DCB0160)</td>
                <td className="px-6 py-4 text-gov-dark">Yes — embedded from Discovery</td>
                <td className="px-6 py-4 text-gov-secondary">Subcontracted clinical safety officer</td>
                <td className="px-6 py-4 text-gov-secondary">Rarely in scope</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">IG Toolkit / DSPT compliance</td>
                <td className="px-6 py-4 text-gov-dark">DPIA + DSPT mapped per project</td>
                <td className="px-6 py-4 text-gov-secondary">Standardised templates</td>
                <td className="px-6 py-4 text-gov-secondary">Limited NHS-specific knowledge</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">MHRA Software and AI as a Medical Device readiness</td>
                <td className="px-6 py-4 text-gov-dark">SaMD class triage + QMS support</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — premium pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Not offered</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">NHS commercial framework eligibility</td>
                <td className="px-6 py-4 text-gov-dark">CCS RM6200 + NHS SBS routes</td>
                <td className="px-6 py-4 text-gov-secondary">Multiple frameworks</td>
                <td className="px-6 py-4 text-gov-secondary">Variable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Multi-Trust deployment experience</td>
                <td className="px-6 py-4 text-gov-dark">Cross-Trust engagement model</td>
                <td className="px-6 py-4 text-gov-secondary">Common</td>
                <td className="px-6 py-4 text-gov-secondary">Rare</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Real-World Evidence and research integration</td>
                <td className="px-6 py-4 text-gov-dark">HDR UK methods + peer-reviewed outputs</td>
                <td className="px-6 py-4 text-gov-secondary">Limited research depth</td>
                <td className="px-6 py-4 text-gov-secondary">Not in scope</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Sector Use Cases</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Financial Vulnerability Detection — Methods Adapted to Health
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            From Kalgera Vulnerability Modelling to NHS Patient Risk Stratification
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract Academy designed the machine learning vulnerability detection engine for Kalgera, a Fintech Scotland portfolio company recognised by the Financial Conduct Authority's regulatory sandbox. The same statistical and explainability methods translate directly to NHS risk stratification — for example, identifying patients at elevated risk of unplanned admission, frailty deterioration, or care home transition. This is the framing recommended by the <a href="https://www.health.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Health Foundation</a> and NHS Confederation when evaluating predictive models for Trust adoption, with explicit equity audit aligned to the NHS Race and Health Observatory's review framework.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">FCA</p>
              <p className="text-sm text-gov-secondary mt-1">Sandbox-recognised methodology</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">9</p>
              <p className="text-sm text-gov-secondary mt-1">Vulnerability indicators modelled</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Equity</p>
              <p className="text-sm text-gov-secondary mt-1">Audit aligned to NHS Race and Health Observatory</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            NHS Trust — AI Readiness Assessment
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Trust-Level AI Readiness Assessment Aligned to NHS AI Strategy
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            A typical Tesseract Academy engagement with an NHS Trust executive team is a 6 to 8 week structured AI readiness assessment. The assessment maps in-flight AI initiatives against the
            {' '}<a href="https://transform.england.nhs.uk/ai-lab/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NHS AI Lab</a> assurance criteria, MHRA SaMD classification, DSPT posture, and Care Quality Commission inspection themes. Outputs include a prioritised AI portfolio, a clinical safety risk register reviewed against DCB0129, and a board-ready paper. Where Tesseract has supported similar Trust readiness work, equity audit, workforce literacy, and Information Governance gaps consistently drive the top-three remediation priorities, mirroring findings published by the Nuffield Trust and the AI Centre for Value Based Healthcare.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">8wk</p>
              <p className="text-sm text-gov-secondary mt-1">Typical assessment timeline</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">DCB0129</p>
              <p className="text-sm text-gov-secondary mt-1">Clinical risk standard applied</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Board</p>
              <p className="text-sm text-gov-secondary mt-1">Executive paper delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          NHS and health sector buyers can commission Tesseract Academy through the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">NHS Shared Business Services frameworks</p>
              <p className="text-gov-secondary text-sm mt-1">
                NHS Trusts, integrated care boards, and arm's-length bodies can call off via NHS Shared Business Services routes for advisory, AI readiness, and research engagements. Suitable for Trust- and ICB-level commissioning.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary central-government route for NHS England, the Department of Health and Social Care, MHRA, and NICE. Used for AI strategy, governance reviews, and policy-aligned research.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6094 — Research Marketplace / RM6126</p>
              <p className="text-gov-secondary text-sm mt-1">
                For evaluation, real-world evidence studies, and research-grade outputs aligned to HDR UK methods, the Research Marketplace and adjacent CCS frameworks provide a direct procurement path.
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
                Discovery-phase work, proof-of-concept evaluations, and short advisory engagements below £10,000 may be awarded directly under framework rules.
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
          with a brief description of your clinical or operational requirement, the data environment, and indicative timeline.
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark mb-6">Related pages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
          <li><a href="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector</a></li>
          <li><a href="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Services</a></li>
          <li><a href="/case-studies/kalgera-financial-vulnerability" className="text-gov-blue hover:underline">Case study: Kalgera financial vulnerability detection</a></li>
          <li><a href="/case-studies/national-digital-twin-programme" className="text-gov-blue hover:underline">Case study: National Digital Twin Programme</a></li>
          <li><a href="/insights" className="text-gov-blue hover:underline">Insights and articles</a></li>
          <li><a href="/how-to-buy" className="text-gov-blue hover:underline">How to buy from Tesseract Academy</a></li>
        </ul>
      </section>
    </div>
  );
};
