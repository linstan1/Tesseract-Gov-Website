import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AIProcurementGuide: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['Article', 'TechArticle', 'HowTo'],
      '@id': 'https://gov.tesseract.academy/resources/ai-procurement-guide#article',
      headline: 'How to Commission AI and Research Services from UK Public Sector Suppliers',
      name: 'How to Commission AI and Research Services from UK Public Sector Suppliers',
      description:
        'A definitive practitioner guide to commissioning AI and research services from UK public sector suppliers, covering CCS frameworks, the Procurement Act 2023, devolved routes, evaluation criteria, timelines, and common pitfalls.',
      url: 'https://gov.tesseract.academy/resources/ai-procurement-guide',
      mainEntityOfPage: 'https://gov.tesseract.academy/resources/ai-procurement-guide',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      articleSection: 'Procurement',
      inLanguage: 'en-GB',
      author: {
        '@type': 'Person',
        '@id': 'https://gov.tesseract.academy/#kampakis',
        name: 'Dr Stylianos Kampakis',
        url: 'https://gov.tesseract.academy/about',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      about: [
        { '@type': 'Thing', name: 'Crown Commercial Service frameworks' },
        { '@type': 'Thing', name: 'Procurement Act 2023' },
        { '@type': 'Thing', name: 'GDS Service Standard' },
        { '@type': 'Thing', name: 'Find a Tender Service' },
        { '@type': 'Thing', name: 'Public sector AI governance' },
        { '@type': 'Thing', name: 'AI supplier evaluation' },
        { '@type': 'Thing', name: 'Algorithmic Transparency Recording Standard' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Define the policy or service problem',
          text: 'Frame the problem in user-needs language using the GOV.UK Service Manual practice. Avoid prescribing a specific AI technology before the problem is understood.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Confirm data readiness and lawful basis',
          text: 'Complete a Data Protection Impact Assessment (DPIA) under UK GDPR, identify the lawful basis for processing, and assess data quality, completeness, and bias risk.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Select the procurement route',
          text: 'Choose between direct award (under £10,000), CCS framework call-off (RM6200, RM6094 Spark DPS, RM6126 Research and Insights DPS), or a Find a Tender Service competition above threshold.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Write a Statement of Requirements',
          text: 'Specify the problem, data environment, success metrics, evaluation criteria, social value expectations, AI governance requirements, accessibility, and IP position.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Run the competition or direct award',
          text: 'Issue the Statement of Requirements through the Central Digital Platform or framework portal. Apply transparency notices required by the Procurement Act 2023.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Evaluate suppliers on quality and price',
          text: 'Apply a quality-price ratio (typically 60/40 or 70/30 in favour of quality) and evaluate research credentials, GDS Service Standard track record, AI governance maturity, and social value.',
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: 'Award and publish a contract notice',
          text: 'Issue the call-off contract under the framework agreement and publish a contract award notice on Find a Tender Service in line with Procurement Act 2023 transparency obligations.',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ai-procurement-guide-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('ai-procurement-guide-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Resource — Procurement Guide
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          How to Commission AI and Research Services from UK Public Sector Suppliers
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          A definitive, citeable practitioner guide for procurement officers, GDS-aligned delivery
          managers, and digital leads commissioning AI, machine learning, and research services
          from UK public sector suppliers. Covers <a href="https://www.crowncommercial.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS)</a> frameworks,
          the <a href="https://www.legislation.gov.uk/ukpga/2023/54/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Procurement Act 2023</a>, devolved routes, and the
          <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> GDS Service Standard</a>.
        </p>
        <p className="text-sm text-gov-secondary mt-3">
          Author: Dr Stylianos Kampakis, Managing Director, Tesseract Academy — published 29 April 2026.
        </p>
      </div>

      <nav aria-label="Table of contents" className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gov-dark mb-4">Contents</h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li><a href="#frameworks" className="text-gov-blue hover:underline">1. Procurement frameworks at a glance</a></li>
          <li><a href="#procurement-act" className="text-gov-blue hover:underline">2. Procurement Act 2023 — what changed</a></li>
          <li><a href="#decision-tree" className="text-gov-blue hover:underline">3. Choosing the right route</a></li>
          <li><a href="#statement" className="text-gov-blue hover:underline">4. Writing a Statement of Requirements</a></li>
          <li><a href="#evaluation" className="text-gov-blue hover:underline">5. Evaluation criteria for AI suppliers</a></li>
          <li><a href="#timelines" className="text-gov-blue hover:underline">6. Procurement timelines</a></li>
          <li><a href="#pitfalls" className="text-gov-blue hover:underline">7. Common pitfalls</a></li>
          <li><a href="#help" className="text-gov-blue hover:underline">8. Where to get help</a></li>
          <li><a href="#about" className="text-gov-blue hover:underline">9. About this guide</a></li>
        </ol>
      </nav>

      <section id="frameworks" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">1. Procurement frameworks at a glance</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          The first decision in commissioning AI or research services is the procurement route.
          For most UK contracting authorities, the practical starting point is a <a href="https://www.crowncommercial.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS)</a> framework — pre-competed, legally
          compliant, and quicker than a fresh open competition. The five most relevant frameworks
          for AI and research are listed below.
        </p>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The framework you select shapes the suppliers you can see. RM6200 surfaces strategy and
          assurance specialists; RM6094 Spark surfaces innovators and start-ups; RM6126 surfaces
          academic and applied researchers. Picking the right one is half the evaluation work."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Framework</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Description</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Threshold / Award</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">When to use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">
                  <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6200</a> Management Consultancy Three (MCF3)
                </td>
                <td className="px-6 py-4 text-gov-dark/90">AI strategy, assurance, business case work, evaluation, and policy advice.</td>
                <td className="px-6 py-4 text-gov-dark/90">Direct award &lt;£10k; further competition above.</td>
                <td className="px-6 py-4 text-gov-dark/90">Strategic AI advisory, business cases, evaluation, and assurance.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">
                  <a href="https://www.crowncommercial.gov.uk/agreements/RM6094" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6094</a> Spark DPS
                </td>
                <td className="px-6 py-4 text-gov-dark/90">A Dynamic Purchasing System for innovative technology products, including AI tooling.</td>
                <td className="px-6 py-4 text-gov-dark/90">Mini-competition required; no direct award.</td>
                <td className="px-6 py-4 text-gov-dark/90">Buying innovative AI tools, prototypes, and emerging-tech products.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">
                  <a href="https://www.crowncommercial.gov.uk/agreements/RM6126" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6126</a> Research and Insights DPS
                </td>
                <td className="px-6 py-4 text-gov-dark/90">Quantitative and qualitative research, evaluation, deliberative engagement, polling.</td>
                <td className="px-6 py-4 text-gov-dark/90">Mini-competition required.</td>
                <td className="px-6 py-4 text-gov-dark/90">User research, evaluation, deliberative engagement, mixed-methods studies.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">
                  <a href="https://www.crowncommercial.gov.uk/agreements/RM6263" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6263</a> Big Data and Analytics
                </td>
                <td className="px-6 py-4 text-gov-dark/90">Large-scale analytics, data engineering, and platform delivery.</td>
                <td className="px-6 py-4 text-gov-dark/90">Further competition; lots by capability.</td>
                <td className="px-6 py-4 text-gov-dark/90">High-volume data engineering, analytics platforms, and enterprise ML pipelines.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">
                  <a href="https://www.crowncommercial.gov.uk/agreements/RM6313" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">RM6313</a> Cyber Security Services 4
                </td>
                <td className="px-6 py-4 text-gov-dark/90">Penetration testing, security architecture, AI security assurance.</td>
                <td className="px-6 py-4 text-gov-dark/90">Further competition; NCSC-aligned suppliers.</td>
                <td className="px-6 py-4 text-gov-dark/90">AI red-teaming, model security testing, threat modelling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="procurement-act" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">2. Procurement Act 2023 — what changed</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          The <a href="https://www.legislation.gov.uk/ukpga/2023/54/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Procurement Act 2023</a>,
          which took effect on 24 February 2025, replaced the Public Contracts Regulations 2015 and
          materially changed how UK contracting authorities advertise, evaluate, and award contracts.
          The legislation is overseen by the <a href="https://www.gov.uk/government/organisations/cabinet-office" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Cabinet Office</a> through
          the <a href="https://www.gov.uk/government/groups/government-commercial-function" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Commercial Function</a>,
          and is delivered operationally via Crown Commercial Service.
        </p>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Three changes matter most for AI commissioning. First, <strong>transparency notices</strong> apply
          across the contract lifecycle — from pipeline notice through award and contract change.
          Second, the new <strong>Central Digital Platform</strong> hosts supplier registration data and
          notices, replacing the prior fragmentation between Contracts Finder and Find a Tender.
          Third, <strong>dynamic markets</strong> replace Dynamic Purchasing Systems for new arrangements,
          allowing rolling supplier admission with sharper transparency requirements. Read the
          official <a href="https://www.gov.uk/government/collections/transforming-public-procurement" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Transforming Public Procurement collection on GOV.UK</a> for the
          full picture.
        </p>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          For AI procurement specifically, the Act's emphasis on supplier exclusion grounds,
          transparency, and value-for-money assessment aligns well with parallel guidance from the
          <a href="https://www.gov.uk/government/organisations/uk-ai-safety-institute" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> UK AI Safety Institute</a> and the
          <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> ICO's AI and data protection guidance</a>.
          Authorities should expect Algorithmic Transparency Recording Standard (ATRS) entries to
          be referenced in award decisions for high-impact AI use cases.
        </p>
      </section>

      <section id="decision-tree" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">3. Choosing the right route</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Use the decision flow below to identify the right procurement route. Each step asks one
          question; answer "yes" and follow that path; otherwise continue.
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">Is direct award available?</p>
              <p className="text-gov-secondary text-sm mt-1">
                Contracts under £10,000 (or under framework-specific thresholds, e.g. RM6200) may
                be awarded directly without a further competition, subject to value-for-money tests
                and the framework's own rules.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">Is there an existing CCS framework that fits?</p>
              <p className="text-gov-secondary text-sm mt-1">
                Check RM6200 (consulting), RM6094 Spark (innovation), RM6126 (research) first.
                Frameworks save 8-16 weeks compared to a fresh competition.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Is the contract above the threshold?</p>
              <p className="text-gov-secondary text-sm mt-1">
                Above approximately £213,477 for central government services (2026 threshold), advertise
                via the <a href="https://www.find-tender.service.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Find a Tender Service (FaTS)</a> under Procurement Act 2023 procedures.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
            <div>
              <p className="font-semibold text-gov-dark">Is this an innovation or research project?</p>
              <p className="text-gov-secondary text-sm mt-1">
                Consider <a href="https://www.gov.uk/government/organisations/defence-and-security-accelerator" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">DASA</a>,
                <a href="https://www.ukri.org/councils/innovate-uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> Innovate UK</a>, or
                the <a href="https://www.gov.uk/government/collections/sbri-the-small-business-research-initiative" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Small Business Research Initiative (SBRI)</a> — these
                fund novel R&amp;D and have rules tailored to early-stage technology development.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">5</span>
            <div>
              <p className="font-semibold text-gov-dark">Is the contracting authority devolved?</p>
              <p className="text-gov-secondary text-sm mt-1">
                Welsh Government bodies advertise on <a href="https://www.sell2wales.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Sell2Wales</a>;
                Scottish bodies on <a href="https://www.publiccontractsscotland.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Contracts Scotland</a>;
                Northern Ireland bodies on <a href="https://etendersni.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">eTendersNI</a>.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="statement" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">4. Writing a Statement of Requirements</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          A high-quality Statement of Requirements (SoR) is the single biggest determinant of bid
          quality. The eight points below cover the structural minimum we recommend for any AI or
          data-science engagement.
        </p>
        <ul className="list-disc list-inside space-y-3 text-base text-gov-dark/90 leading-relaxed pl-2">
          <li><strong>Problem definition</strong> — frame in user-needs language using the <a href="https://www.gov.uk/service-manual" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.UK Service Manual</a> approach; avoid prescribing the AI technique.</li>
          <li><strong>Data environment</strong> — describe data location, custody, format, quality, and access constraints; flag whether a DPIA exists.</li>
          <li><strong>Success metrics</strong> — quantitative measures of model and service performance, plus user-centred outcome measures.</li>
          <li><strong>Evaluation criteria</strong> — quality-price ratio, weightings per quality dimension, and evidence required.</li>
          <li><strong>Social value</strong> — mandatory under the <a href="https://www.gov.uk/government/publications/social-value-act-information-and-resources" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Social Value Act 2012</a>; minimum 10% weighting under PPN 06/20.</li>
          <li><strong>AI governance requirements</strong> — explicit reference to ATRS, ICO guidance, NIST AI RMF, ISO 42001, and EHRC PSED obligations.</li>
          <li><strong>Accessibility</strong> — WCAG 2.2 AA conformance and assistive technology compatibility, particularly for citizen-facing outputs.</li>
          <li><strong>IP and open source</strong> — state whether deliverables will be open-sourced, who holds IP, and any licence preferences.</li>
        </ul>
      </section>

      <section id="evaluation" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">5. Evaluation criteria for AI suppliers</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed max-w-4xl">
          AI procurement requires evaluation criteria that go beyond standard consulting tests. The
          table below outlines the capability dimensions that distinguish credible AI suppliers from
          generic consultancies.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Capability</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">What good looks like</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Evidence to ask for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Research credentials</td>
                <td className="px-6 py-4 text-gov-dark/90">Doctoral-level expertise; published peer-reviewed work in relevant domain.</td>
                <td className="px-6 py-4 text-gov-dark/90">CVs, ORCID IDs, published papers.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">GDS Service Standard track record</td>
                <td className="px-6 py-4 text-gov-dark/90">Live or Beta phase delivery aligned to all 14 points.</td>
                <td className="px-6 py-4 text-gov-dark/90">Case studies citing assessment outcomes.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">AI governance maturity</td>
                <td className="px-6 py-4 text-gov-dark/90">Implements ISO 42001, NIST AI RMF, or equivalent; uses DPIAs and bias audits as standard.</td>
                <td className="px-6 py-4 text-gov-dark/90">Sample DPIA, bias audit report, governance policy.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Security clearances</td>
                <td className="px-6 py-4 text-gov-dark/90">Cyber Essentials Plus; SC clearance for sensitive data; ISO 27001 if relevant.</td>
                <td className="px-6 py-4 text-gov-dark/90">Certificates, SC-cleared staff list.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">SME and diversity profile</td>
                <td className="px-6 py-4 text-gov-dark/90">SME or micro-enterprise status; representation on delivery team.</td>
                <td className="px-6 py-4 text-gov-dark/90">Companies House data, EDI policy.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Social value commitments</td>
                <td className="px-6 py-4 text-gov-dark/90">Specific TOMs measures, named beneficiaries, measurable outputs.</td>
                <td className="px-6 py-4 text-gov-dark/90">Social Value Portal output, KPI commitments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="timelines" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">6. Procurement timelines</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Realistic timelines help avoid two common failures: under-resourced bids from suppliers
          and crashed delivery start dates. Use these durations as planning baselines.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Route</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Typical duration</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Key gates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Direct award (under threshold)</td>
                <td className="px-6 py-4 text-gov-dark/90">1–2 weeks</td>
                <td className="px-6 py-4 text-gov-dark/90">Internal sign-off, framework rules check.</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Mini-competition / further competition</td>
                <td className="px-6 py-4 text-gov-dark/90">4–8 weeks</td>
                <td className="px-6 py-4 text-gov-dark/90">SoR drafting, supplier responses, evaluation, standstill (where applicable).</td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">Find a Tender Service (above threshold)</td>
                <td className="px-6 py-4 text-gov-dark/90">12–26 weeks</td>
                <td className="px-6 py-4 text-gov-dark/90">Pipeline notice, tender notice, SQ, ITT, evaluation, standstill, contract notice.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="pitfalls" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">7. Common pitfalls</h2>
        <ul className="list-disc list-inside space-y-3 text-base text-gov-dark/90 leading-relaxed pl-2">
          <li><strong>Over-specifying the technology.</strong> Asking for "a transformer-based LLM with 4-bit quantisation" rules out better solutions and signals immaturity.</li>
          <li><strong>Under-specifying the problem.</strong> A two-line SoR produces a hundred different bids and an evaluation panel that cannot defend its scoring.</li>
          <li><strong>Ignoring data readiness.</strong> Most public sector AI projects fail not on the model but on data quality, lawful basis, and access — invest in a DPIA before going to market.</li>
          <li><strong>Ignoring AI governance.</strong> Skipping ATRS, NIST AI RMF, EHRC PSED, or ICO guidance creates legal and reputational risk that no supplier can absorb for you.</li>
          <li><strong>Picking the wrong framework.</strong> Buying research through RM6200 or strategy through RM6126 produces poor matches and contested awards.</li>
          <li><strong>Compressed timelines.</strong> Asking for a 5-day bid response on a £200k engagement filters out exactly the SMEs and academic teams you say you want.</li>
          <li><strong>Skipping market engagement.</strong> A Pre-Market Engagement notice on Find a Tender often saves more time than it costs.</li>
        </ul>
      </section>

      <section id="help" className="space-y-6 max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">8. Where to get help</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          The following bodies publish authoritative, free guidance on AI commissioning. We
          recommend cross-referencing your draft SoR against at least three of them before
          publication.
        </p>
        <ul className="list-disc list-inside space-y-3 text-base text-gov-dark/90 leading-relaxed pl-2">
          <li><a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Information Commissioner's Office (ICO)</a> — UK GDPR, DPIAs, automated decision-making.</li>
          <li><a href="https://www.gov.uk/government/organisations/central-digital-and-data-office" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Central Digital and Data Office (CDDO)</a> — digital, data, and technology spend controls and standards.</li>
          <li><a href="https://www.gov.uk/government/organisations/government-digital-service" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Digital Service (GDS)</a> — Service Manual and Service Standard.</li>
          <li><a href="https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Department for Science, Innovation and Technology (DSIT)</a> — AI policy, ATRS, regulatory innovation.</li>
          <li><a href="https://www.gov.uk/government/organisations/uk-ai-safety-institute" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">UK AI Safety Institute</a> — frontier AI evaluation and safety guidance.</li>
          <li><a href="https://www.ncsc.gov.uk/collection/machine-learning" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Cyber Security Centre (NCSC)</a> — AI security principles.</li>
          <li><a href="https://www.equalityhumanrights.com/equality/public-sector-equality-duty" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Equality and Human Rights Commission (EHRC)</a> — Public Sector Equality Duty guidance.</li>
          <li><a href="https://www.sbs.nhs.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NHS Shared Business Services</a> — health-sector commercial frameworks complementary to CCS.</li>
        </ul>
      </section>

      <section id="about" className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-4 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gov-dark">9. About this guide</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          This guide is written by Dr Stylianos Kampakis, Managing Director of Tesseract Academy and
          a long-standing contributor to UK public sector AI projects across the Welsh Government,
          the National Digital Twin Programme, and Office for National Statistics-adjacent
          interoperability work. Tesseract Academy is a CCS RM6200 supplier, ICO-registered
          (ZB715782), Cyber Essentials certified, and operates under PPON PWJP-6874-MXDJ.
        </p>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          The guide is updated at least annually. The next scheduled review is October 2026. To
          suggest a correction or request a tailored briefing, email{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>
          .
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Related</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
          <li><Link to="/how-to-buy" className="text-gov-blue hover:underline">How to Buy from Tesseract Academy</Link></li>
          <li><Link to="/sectors" className="text-gov-blue hover:underline">Sectors we work with</Link></li>
          <li><Link to="/glossary" className="text-gov-blue hover:underline">AI and Procurement Glossary</Link></li>
          <li><Link to="/insights" className="text-gov-blue hover:underline">Insights and publications</Link></li>
          <li><Link to="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting service overview</Link></li>
          <li><Link to="/resources/ai-readiness-checklist" className="text-gov-blue hover:underline">AI Readiness Self-Assessment</Link></li>
        </ul>
      </section>
    </div>
  );
};
