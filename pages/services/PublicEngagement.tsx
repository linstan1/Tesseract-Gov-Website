import React, { useEffect } from 'react';

export const PublicEngagement: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Public Engagement and Participatory Research for UK Public Sector',
      provider: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Public Engagement and Participatory Research',
      description:
        'Deliberative workshops, citizen panels, inclusive co-design, and participatory research for UK public sector. Financial vulnerability research compliant with Adult Support and Protection Act 2007. London Data Week AI accessibility case study.',
      url: 'https://gov.tesseract.academy/services/public-engagement',
      areaServed: 'GB',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'public-engagement-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('public-engagement-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — Public Engagement
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Public Engagement and Participatory Research
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We design and deliver deliberative workshops, citizen panels, inclusive co-design processes,
          and participatory action research for public sector commissioners. Our approach centres
          the lived experience of affected communities and produces evidence that holds up to ethical
          and methodological scrutiny.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The best public consultation doesn't just gather opinions — it builds the deliberative conditions for citizens to form considered views on complex trade-offs."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Effective public engagement is not a consultation checkbox — it is a structured research
          process that generates legitimate, reproducible evidence about public needs and values.
          Tesseract Academy designs engagement programmes grounded in deliberative research methods:
          we give participants sufficient time, information, and facilitated space to form considered
          views on complex policy questions, rather than capturing initial reactions. Our methodology aligns with Cabinet Office engagement guidelines and the <a href="https://www.legislation.gov.uk/ukpga/2012/3/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Social Value Act 2012</a>, ensuring that participation yields measurable community benefit alongside evidence generation.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our participatory action research (PAR) approach treats communities as active co-investigators
          rather than passive data sources. This is particularly important when working with
          marginalised or vulnerable groups, where extractive research methods risk causing harm and
          producing distorted findings. We operate within a comprehensive ethical framework that
          covers informed consent, data minimisation, anonymisation, and duty-of-care obligations
          under relevant legislation including the Adult Support and Protection Act 2007. Our approach is consistent with NHS England patient and public involvement standards and MHCLG community engagement best practice.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our public engagement team has delivered work spanning financial vulnerability research
          for a regulated FinTech, accessibility workshops for visually impaired communities at
          London Data Week 2025, and inclusive AI co-design sessions. All engagement work is
          underpinned by a sampling strategy — whether random, stratified, purposive, or snowball —
          that is documented and justified in our methodology sections to enable reproducibility. Outputs are formatted to meet the Office for Statistics Regulation's quality assurance standards and Government Digital Service (GDS) accessibility requirements.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We are registered with the ICO (ZB715782) and process personal data collected during
          engagement activities under UK GDPR Article 6(1)(e) (public task) or Article 9(2)(j)
          (research purposes), with all processing documented in a Data Protection Impact Assessment
          (DPIA) before fieldwork begins. Services are available via <a href="https://www.crowncommercial.gov.uk/agreements/RM6126" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6126</a>, and our social value commitments are aligned with the <a href="https://www.legislation.gov.uk/ukpga/2012/3/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Social Value Act 2012</a> requirements applied by the UK AI Safety Institute and DSIT-funded programmes.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Service Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Capability</th>
                <th className="px-6 py-4 font-semibold text-gov-blue">Tesseract Academy</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">PR/Communications Agency</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Academic Research Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Deliberative workshop design</td>
                <td className="px-6 py-4 text-gov-dark">Structured methodology with pre-reg protocol</td>
                <td className="px-6 py-4 text-gov-secondary">Events-led — limited methodology</td>
                <td className="px-6 py-4 text-gov-secondary">Strong — slow delivery</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Vulnerable group engagement</td>
                <td className="px-6 py-4 text-gov-dark">Specialist ethical framework, DPIA, ASPA 2007</td>
                <td className="px-6 py-4 text-gov-secondary">Not typically offered</td>
                <td className="px-6 py-4 text-gov-secondary">Ethics board approval required — long lead</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">AI accessibility workshops</td>
                <td className="px-6 py-4 text-gov-dark">London Data Week 2025 — evidenced delivery</td>
                <td className="px-6 py-4 text-gov-secondary">Not core capability</td>
                <td className="px-6 py-4 text-gov-secondary">Possible — rarely delivered publicly</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Participatory action research</td>
                <td className="px-6 py-4 text-gov-dark">Communities as co-investigators</td>
                <td className="px-6 py-4 text-gov-secondary">Not offered</td>
                <td className="px-6 py-4 text-gov-secondary">Methodological strength</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">UK GDPR / DPIA compliance</td>
                <td className="px-6 py-4 text-gov-dark">Integrated into every engagement</td>
                <td className="px-6 py-4 text-gov-secondary">Basic consent forms only</td>
                <td className="px-6 py-4 text-gov-secondary">Ethics board managed</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Policy-linked outputs</td>
                <td className="px-6 py-4 text-gov-dark">Reports formatted for ministerial briefing</td>
                <td className="px-6 py-4 text-gov-secondary">Press releases and summaries</td>
                <td className="px-6 py-4 text-gov-secondary">Academic papers — long publication cycle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Kalgera — Financial Vulnerability Research
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Participatory Research with Financially Vulnerable Adults: ASPA 2007 Compliant
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Commissioned by Kalgera, a regulated FinTech focused on financial vulnerability detection,
            we designed and delivered a participatory research programme engaging adults with financial
            vulnerability as defined by the FCA Consumer Duty. The research protocol was developed
            to comply with the Adult Support and Protection Act 2007 duty-of-care requirements,
            ensuring appropriate safeguarding measures were in place throughout fieldwork. Findings
            directly informed Kalgera's product development and contributed to their FCA engagement
            on consumer vulnerability frameworks. The research sampling methodology followed Office for National Statistics (ONS) harmonised question standards and HM Treasury Green Book guidance on evaluation design. The Alan Turing Institute and NESTA have both identified participatory research with financially vulnerable populations as a priority area for public sector evidence development. Innovate UK's BridgeAI programme has cited this kind of community-rooted research as a model for responsible AI adoption. The National Audit Office considers participant representativeness a key criterion for evaluating public engagement research quality.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">ASPA</p>
              <p className="text-sm text-gov-secondary mt-1">2007 compliant safeguarding protocol</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">FCA</p>
              <p className="text-sm text-gov-secondary mt-1">Consumer Duty aligned methodology</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">DPIA</p>
              <p className="text-sm text-gov-secondary mt-1">Completed before fieldwork commenced</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            London Data Week 2025 — AI Accessibility Workshop
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Co-Designed AI Accessibility Workshop for Visually Impaired Communities
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Co-organised with Vision Ability CIC as part of London Data Week 2025, we delivered a
            public workshop and demonstration on making AI tools accessible to people with visual
            impairments. Held at Chabad Islington Community Centre, the event combined inclusive
            co-design principles with practical AI tool demonstrations. Participants contributed to
            a lived-experience evidence base on barriers to AI accessibility, informing subsequent
            policy recommendations to the <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Digital Service (GDS)</a> Accessibility Team. <a href="https://www.gov.uk/government/organisations/skills-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Skills England</a> has identified AI accessibility for underserved communities as a priority skills gap in the public sector digital literacy agenda.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">London</p>
              <p className="text-sm text-gov-secondary mt-1">Data Week 2025 official programme</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">GDS</p>
              <p className="text-sm text-gov-secondary mt-1">Accessibility recommendations produced</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Co-design</p>
              <p className="text-sm text-gov-secondary mt-1">Communities as co-investigators</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Public engagement and participatory research services can be commissioned through:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6094 — Research and Insights</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for public engagement, citizen panel delivery, deliberative research,
                and participatory action research. Covers all aspects of community consultation and
                user research for public sector bodies.
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
                Suitable for engagement work embedded within wider policy advisory or digital
                transformation projects.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Commissioning (below £10,000)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Small-scale workshops, focus groups, and rapid engagement exercises can be scoped
                and delivered under direct award within four to six weeks.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To discuss your engagement requirement, contact{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>
          . We will confirm our ethical framework, data handling approach, and proposed methodology
          in our initial scoping response.
        </p>
      </section>
    </div>
  );
};
