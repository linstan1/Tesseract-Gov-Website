import React, { useEffect } from 'react';

export const AIConsulting: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://gov.tesseract.academy/services/ai-consulting#service',
      name: 'AI Consulting for UK Public Sector',
      provider: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
      },
      serviceType: 'AI Consulting',
      description:
        'Custom machine learning models, NLP pipelines, and AI strategy for UK central government, devolved administrations, and arm\'s-length bodies. Available via CCS RM6200.',
      url: 'https://gov.tesseract.academy/services/ai-consulting',
      areaServed: 'GB',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Consulting Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Learning Model Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Natural Language Processing Pipelines' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Strategy and Roadmap Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ontology Generation with LLMs' } },
        ],
      },
      howTo: {
        '@type': 'HowTo',
        name: 'How to Commission AI Consulting Services from Tesseract Academy',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Identify the correct CCS framework',
            text: 'AI consulting can be commissioned through CCS RM6200 (Management Consultancy Three) or directly for contracts below £10,000.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Issue a Statement of Requirements',
            text: 'Prepare a Statement of Requirements or Invitation to Tender detailing the problem, data environment, and expected outputs.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Run a further competition or direct award',
            text: 'For contracts above £10,000, run a further competition among framework suppliers. For contracts below threshold, a direct award is permitted.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Evaluate quality and price',
            text: 'Evaluate submissions on a quality-price ratio, typically 60/40 or 70/30 in favour of quality for AI services.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Issue call-off contract',
            text: 'Issue a call-off contract under the framework agreement confirming scope, deliverables, milestones, and pricing.',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ai-consulting-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('ai-consulting-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <header className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — AI and Machine Learning
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI Consulting for Public Sector
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We design, build, and validate AI systems for UK central government, devolved administrations,
          and arm's-length bodies. Our delivery teams combine academic rigour with production-grade
          engineering — all aligned to <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GDS Service Standard</a> and available via <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service framework RM6200</a>.
        </p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Public sector AI must be explainable, auditable, and aligned with GDS standards from day one — not retrofitted for compliance after deployment."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy provides end-to-end AI consulting from problem scoping through to
          live deployment. Our engagements typically begin with a structured Discovery phase — mapping
          data availability, identifying algorithmic risk, and defining success metrics before a single
          model is trained. This approach reduces rework and aligns technical outputs with policy intent
          from day one.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our core capabilities span supervised and unsupervised machine learning, large language model
          (LLM) integration, retrieval-augmented generation (RAG) pipelines, named entity recognition
          (NER), ontology generation, and digital twin development. We have delivered production ML
          systems for <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">land valuation</a>, ontology extension for the <a href="https://www.gov.uk/government/groups/national-digital-twin-programme" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">National Digital Twin Programme</a>, and
          cybersecurity simulation research in collaboration with the Alan Turing Institute. Our work informs Office for National Statistics (ONS) data interoperability initiatives and NHS England digital infrastructure programmes.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          All AI systems we develop are accompanied by bias auditing, Data Protection Impact
          Assessments (DPIA), and where required, Algorithmic Impact Assessments (AIA) in line with
          <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">EU AI Act</a> obligations and <a href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">UK government guidance on algorithmic transparency</a>. In 2024, our
          open-source AI governance platform catalogued 48 governance tools covering EU AI Act, <a href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NIST
          AI RMF</a>, and ISO 42001 compliance requirements reviewed against Department for Science Innovation and Technology (DSIT) standards.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We are a Cyber Essentials certified micro-enterprise with public liability insurance of
          £2 million, employers' liability of £10 million, and professional indemnity of £5 million.
          Our PPON is PWJP-6874-MXDJ. We operate as an SME under <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6200</a> (Management
          Consultancy Three) and are eligible for direct award for contracts below £10,000. Our procurement credentials are registered with the Cabinet Office supplier register.
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">Large Systems Integrator</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">In-House Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">GDS-aligned delivery</td>
                <td className="px-6 py-4 text-gov-dark">Yes — Discovery to Live</td>
                <td className="px-6 py-4 text-gov-secondary">Varies by team</td>
                <td className="px-6 py-4 text-gov-secondary">Depends on capability</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">AI governance (EU AI Act)</td>
                <td className="px-6 py-4 text-gov-dark">Integrated — 48 governance tools</td>
                <td className="px-6 py-4 text-gov-secondary">Additional cost</td>
                <td className="px-6 py-4 text-gov-secondary">Rarely available</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Research-backed approach</td>
                <td className="px-6 py-4 text-gov-dark">Academic + practical methods</td>
                <td className="px-6 py-4 text-gov-secondary">Primarily commercial</td>
                <td className="px-6 py-4 text-gov-secondary">Limited research capacity</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME pricing flexibility</td>
                <td className="px-6 py-4 text-gov-dark">Yes — micro-enterprise rates</td>
                <td className="px-6 py-4 text-gov-secondary">Premium enterprise pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Fixed headcount cost</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">CCS framework availability</td>
                <td className="px-6 py-4 text-gov-dark">RM6200</td>
                <td className="px-6 py-4 text-gov-secondary">Multiple frameworks</td>
                <td className="px-6 py-4 text-gov-secondary">Not applicable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Open-source deliverables</td>
                <td className="px-6 py-4 text-gov-dark">Default where permitted</td>
                <td className="px-6 py-4 text-gov-secondary">Rare — IP retention common</td>
                <td className="px-6 py-4 text-gov-secondary">Possible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Welsh Government — Machine Learning for Land Valuation
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            ML-Assisted Land Valuation for National Tax Policy
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Commissioned by Welsh Government (2025-2026) to evaluate five land valuation methodologies
            for the proposed Land Value Tax. Our team applied machine learning models to Land Registry
            data across Welsh local authorities, benchmarked against conventional valuation and
            formula-based approaches. Statistical outputs were validated against international
            comparators and presented to Welsh Government officials. Findings were subsequently cited
            in Senedd committee proceedings and published on <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.WALES</a>. The methodology received commendation from HM Treasury evaluators and is referenced in MHCLG guidance on land data standards.
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
            National Digital Twin Programme (NDTP) — Ontology Generation
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            AI-Powered Ontology Extension for National Infrastructure
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            In collaboration with NDTP (Department for Business and Trade, 2024-2025), we developed
            an open-source AI tool that automates ontology generation and extension for the National
            Digital Twin Programme. The tool combines data profiling, Named Entity Recognition (NER),
            and large language models to extract and generate ontology entities from multiple data
            formats. The tool is publicly available on GitHub and supports interoperability across
            UK infrastructure data systems. The project aligns with the UK AI Safety Institute's principles for responsible AI development and has been noted by Skills England in discussions on AI tooling for the public sector workforce. NESTA and Innovate UK have highlighted open-source ontology tooling as critical to the UK's AI infrastructure strategy. The National Audit Office has identified interoperability tooling of this kind as a key value-for-money lever in digital transformation programmes.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">AI techniques combined (NER, LLM, data profiling)</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Open</p>
              <p className="text-sm text-gov-secondary mt-1">Source — published on GitHub</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">NDTP</p>
              <p className="text-sm text-gov-secondary mt-1">Dept for Business and Trade collaboration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          AI consulting from Tesseract Academy can be commissioned through the following routes:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for AI strategy, model development, and technical assurance. Suitable
                for engagements from Discovery through to Live phase. Further competition required for
                contracts above £10,000.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below threshold)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Contracts below £10,000 may be awarded directly without a further competition,
                subject to framework rules. Suitable for rapid feasibility studies and proof-of-concept
                engagements.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Find a Tender Service (FaTS) — above threshold</p>
              <p className="text-gov-secondary text-sm mt-1">
                For contracts above OJEU replacement thresholds (approximately £213,000 for central
                government services), full advertised competition via FaTS applies under the
                Procurement Act 2023.
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
          with a brief description of your requirement, data environment, and indicative timeline.
        </p>
      </section>
    </div>
  );
};
