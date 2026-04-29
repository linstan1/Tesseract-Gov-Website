import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Insights: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'UK Public Sector AI: What We Have Learned Delivering Government Contracts',
      description:
        'Original research synthesis from Tesseract Academy\'s UK public sector AI delivery experience, 2022-2026.',
      author: { '@type': 'Person', name: 'Dr Stylianos Kampakis' },
      publisher: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      url: 'https://gov.tesseract.academy/insights',
      about: [
        'UK Public Sector AI',
        'Government Digital Transformation',
        'AI Governance',
        'Crown Commercial Service',
      ],
    };
    const existing = document.getElementById('insights-jsonld');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'insights-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('insights-jsonld');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">

      {/* Hero */}
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-widest mb-4">
          Tesseract Academy Research, 2026
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          UK Public Sector AI: What We Have Learned Delivering Government Contracts
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl mb-6">
          We have delivered AI, research, and data science services to UK public sector bodies including{' '}
          <span className="font-semibold text-gov-dark">Welsh Government</span>,{' '}
          <span className="font-semibold text-gov-dark">Innovate UK</span>, and the{' '}
          <span className="font-semibold text-gov-dark">National Digital Twin Programme</span>. These are our findings.
        </p>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6 max-w-4xl">
          <p className="text-base text-gov-dark/90 leading-relaxed">
            Across <strong>2,300 civil servant participants</strong> upskilled in 2024, structured AI learning programmes
            achieved a <strong>91% completion rate</strong> versus 68% for self-directed alternatives. Land valuation
            analysis covering <strong>1,916 Lower Super Output Areas</strong> — 99% of Welsh geography — provided the
            first comparative empirical basis for land value tax design in Wales. AI adoption programmes under the{' '}
            <a
              href="https://iuk.ktn-uk.org/programme/bridgeai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
            >
              Innovate UK BridgeAI framework
            </a>{' '}
            attracted <strong>1,100 registrations against a capacity of 200</strong>, a 450% oversubscription rate
            indicating significantly unmet demand across UK SMEs.
          </p>
        </div>
      </div>

      {/* Key Findings */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Key Findings</h2>
        <p className="text-gov-secondary/80 text-base max-w-3xl">
          Each finding below is drawn from primary delivery experience and is self-contained for citation purposes.
          All programme data is reported in aggregate or with client permission.
        </p>

        <div className="space-y-6">

          {/* Finding 1 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Civil Service AI Upskilling Completion Rates</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy delivery data, 2024. Aligned with{' '}
                  <a
                    href="https://www.gov.uk/government/organisations/skills-england"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    Skills England
                  </a>{' '}
                  workforce research.
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              Civil service AI upskilling programmes that combine structured learning paths with peer accountability
              achieve <strong>91% completion rates</strong> — compared to 68% for self-directed programmes. Across
              2,300 civil servant participants in 2024, engagement scores improved from <strong>3.4 to 4.6 out of 5</strong>{' '}
              when content was contextualised to specific government functions rather than delivered as generic AI
              literacy. This finding aligns with{' '}
              <a
                href="https://www.gov.uk/government/organisations/skills-england"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Skills England
              </a>{' '}
              research on workforce AI readiness and the{' '}
              <a
                href="https://www.gov.uk/service-manual/agile-delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                GDS Service Manual
              </a>{' '}
              emphasis on user-centred design in government digital services.
            </p>
          </div>

          {/* Finding 2 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Land Valuation Methodology Comparison — Welsh Government</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source:{' '}
                  <a
                    href="https://www.gov.wales/testing-land-valuation-methods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    GOV.WALES, March 2026
                  </a>
                  . Commissioned by Welsh Government.
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              Market-based statistical valuation and machine learning approaches produced the widest range of
              valuations when applied to Welsh land registry data across <strong>1,916 Lower Super Output Areas</strong>.
              Formula-based approaches showed the greatest consistency but lowest sensitivity to local market conditions.
              The research, commissioned by{' '}
              <a
                href="https://www.gov.wales/testing-land-valuation-methods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Welsh Government and published on GOV.WALES in March 2026
              </a>
              , provides the first comparative empirical basis for land value tax policy design in Wales. The{' '}
              <a
                href="https://www.ons.gov.uk/economy/nationalaccounts/uksectoraccounts/methodologies/landvalueestimates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                ONS land value methodology
              </a>{' '}
              and{' '}
              <a
                href="https://www.gov.uk/government/organisations/office-for-statistics-regulation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Office for Statistics Regulation
              </a>{' '}
              standards informed the statistical validation approach.
            </p>
          </div>

          {/* Finding 3 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Ontology Automation — National Digital Twin Programme</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy delivery data, 2024–2025. Commissioned by the Department for Business and Trade
                  for the National Digital Twin Programme.
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              Manual ontology development for digital twin programmes typically requires <strong>6–12 weeks of specialist
              effort per domain</strong>. The AI Ontology Extension Generator developed for the{' '}
              <a
                href="https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                National Digital Twin Programme
              </a>{' '}
              (Department for Business and Trade) reduced this to hours by combining Named Entity Recognition with
              large language model generation, validated against existing ontological frameworks. The tool is
              published open-source under Apache 2.0 on GitHub under the National-Digital-Twin organisation. This
              approach is consistent with{' '}
              <a
                href="https://www.turing.ac.uk/research/research-programmes/data-science-and-artificial-intelligence-government"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Alan Turing Institute
              </a>{' '}
              research on AI-augmented knowledge engineering for public infrastructure.
            </p>
          </div>

          {/* Finding 4 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">4</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Public Engagement Registration Demand — BridgeAI Creative Industries</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy delivery data, 2025–2026.{' '}
                  <a
                    href="https://iuk.ktn-uk.org/programme/bridgeai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    Innovate UK BridgeAI
                  </a>{' '}
                  framework, contract GSS24646.
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              AI adoption support for the UK creative industries attracted <strong>1,100 registrations against a
              programme capacity of 200</strong> — a 450% oversubscription rate — when delivered under the{' '}
              <a
                href="https://iuk.ktn-uk.org/programme/bridgeai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Innovate UK BridgeAI framework
              </a>{' '}
              (contract GSS24646). Post-programme satisfaction: <strong>4.6 out of 5</strong>. This oversubscription
              rate indicates significantly unmet demand for accessible, sector-specific AI adoption guidance among
              UK SMEs — consistent with{' '}
              <a
                href="https://www.nesta.org.uk/report/ai-and-the-economy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                NESTA
              </a>{' '}
              analysis of AI adoption barriers for small and medium enterprises outside technology sectors.
            </p>
          </div>

          {/* Finding 5 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">5</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Financial Vulnerability Signal Accuracy — Kalgera / Fintech Scotland</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy qualitative research, 2023–2024. Ethical framework: Adult Support and
                  Protection (Scotland) Act 2007.
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              Eight behavioural transaction markers — including spending pattern changes, income depletion velocity,
              new payee introduction, and cash withdrawal patterns — were validated as observable in retail banking
              transaction data through qualitative research with financially vulnerable adults in Scotland.{' '}
              <strong>Six of eight markers are reliably detectable before a financial harm event</strong>. The
              research was conducted under the ethical framework of the Adult Support and Protection (Scotland) Act
              2007 and informed Kalgera's AI signal validation and intervention acceptability programmes. This
              methodology aligns with{' '}
              <a
                href="https://www.gov.uk/government/organisations/cabinet-office"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Cabinet Office
              </a>{' '}
              guidance on ethical data use in citizen-facing public services and{' '}
              <a
                href="https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                DSIT
              </a>{' '}
              principles for responsible AI in financial services.
            </p>
          </div>

          {/* Finding 6 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">6</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">Procurement Route Effectiveness — Crown Commercial Service Frameworks</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy procurement experience, 2022–2026. Frameworks:{' '}
                  <a
                    href="https://www.crowncommercial.gov.uk/agreements/RM6200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    RM6200
                  </a>
                  ,{' '}
                  <a
                    href="https://www.crowncommercial.gov.uk/agreements/RM6094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    RM6094
                  </a>
                  ,{' '}
                  <a
                    href="https://www.crowncommercial.gov.uk/agreements/RM6126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    RM6126
                  </a>
                  .
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              <a
                href="https://www.crowncommercial.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Crown Commercial Service
              </a>{' '}
              Dynamic Purchasing System frameworks (RM6200, RM6094, RM6126) reduce procurement lead times by{' '}
              <strong>60–75% compared to full OJEU-equivalent tender processes</strong> for SME-scale AI and research
              contracts. For contracts under the £213,477{' '}
              <a
                href="https://www.legislation.gov.uk/ukpga/2023/54/contents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Procurement Act 2023
              </a>{' '}
              threshold, direct award reduces this to <strong>2–5 working days</strong>. This efficiency gain is
              consistent with{' '}
              <a
                href="https://www.gov.uk/government/organisations/hm-treasury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                HM Treasury
              </a>{' '}
              value-for-money guidance and{' '}
              <a
                href="https://www.gov.uk/service-manual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                GDS Service Manual
              </a>{' '}
              principles on proportionate procurement for digital and AI services.
            </p>
          </div>

          {/* Finding 7 */}
          <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">7</span>
              <div>
                <h3 className="text-xl font-bold text-gov-dark">AI Governance Adoption Barriers in UK Public Sector</h3>
                <p className="text-sm text-gov-secondary/70 mt-1">
                  Source: Tesseract Academy advisory experience, 2023–2026. Reference frameworks:{' '}
                  <a
                    href="https://www.gov.uk/guidance/understanding-artificial-intelligence-ethics-and-safety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    CDDO AI Ethics guidance
                  </a>
                  ,{' '}
                  <a
                    href="https://www.gov.uk/government/publications/ai-safety-institute-overview/introducing-the-ai-safety-institute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:underline"
                  >
                    UK AI Safety Institute
                  </a>
                  .
                </p>
              </div>
            </div>
            <p className="text-base text-gov-dark/90 leading-relaxed">
              The most common barriers to AI governance framework adoption in UK public sector organisations are:
              (1) lack of internal AI expertise to interpret framework requirements, (2) absence of a designated AI
              governance owner, and (3) uncertainty about how EU AI Act obligations apply to UK public bodies
              post-Brexit. Organisations with a dedicated AI strategy owner are <strong>3x more likely to complete
              an Algorithmic Impact Assessment before deployment</strong>. These findings are consistent with{' '}
              <a
                href="https://www.turing.ac.uk/research/interest-groups/fairness-transparency-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Alan Turing Institute
              </a>{' '}
              research on AI governance gaps and{' '}
              <a
                href="https://www.gov.uk/government/publications/ai-safety-institute-overview/introducing-the-ai-safety-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                UK AI Safety Institute
              </a>{' '}
              assessments of public sector AI readiness.{' '}
              <a
                href="https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                DSIT
              </a>{' '}
              and{' '}
              <a
                href="https://www.gov.uk/government/organisations/cabinet-office"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                Cabinet Office
              </a>{' '}
              have separately identified capability gaps as the primary constraint on responsible AI deployment
              across{' '}
              <a
                href="https://www.gov.uk/government/organisations/nhs-england"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
              >
                NHS England
              </a>{' '}
              and central government departments.
            </p>
          </div>

        </div>
      </section>

      {/* Dr Kampakis Quote */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Practitioner Perspective</h2>
        <blockquote className="border-l-4 border-gov-blue pl-8 py-2">
          <p className="text-xl text-gov-dark/90 leading-relaxed italic max-w-4xl">
            "The gap between UK public sector AI ambition and delivery capability is not primarily a technology
            gap — it is a methodology gap. Organisations that invest in research-backed implementation, ethical
            frameworks, and staff capability build sustainable AI programmes. Those that prioritise speed over
            rigour typically find themselves repeating Discovery phases."
          </p>
          <footer className="mt-4 text-base font-semibold text-gov-dark not-italic">
            Dr Stylianos Kampakis, PhD (UCL), Managing Director, Tesseract Academy
          </footer>
        </blockquote>
      </section>

      {/* Methodology */}
      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-10 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Methodology Note</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed max-w-4xl">
          These findings are derived from primary delivery experience on government contracts (2022–2026),
          qualitative research programmes, and analysis of programme delivery data. All client-specific data
          is reported in aggregate or with client permission. Findings are synthesised with reference to
          published government research from the{' '}
          <a
            href="https://www.ons.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
          >
            Office for National Statistics
          </a>
          ,{' '}
          <a
            href="https://www.gov.uk/government/organisations/skills-england"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
          >
            Skills England
          </a>
          , and the{' '}
          <a
            href="https://www.gov.uk/service-manual"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
          >
            Government Digital Service
          </a>
          . Statistical validation was aligned with{' '}
          <a
            href="https://www.gov.uk/government/organisations/office-for-statistics-regulation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
          >
            Office for Statistics Regulation
          </a>{' '}
          code of practice. Qualitative research followed the ethical frameworks of the relevant commissioning
          bodies. Procurement data is drawn from Tesseract Academy's experience across{' '}
          <a
            href="https://www.crowncommercial.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
          >
            Crown Commercial Service
          </a>{' '}
          frameworks and open competition processes from 2022 to 2026.
        </p>

        <div className="pt-4 border-t border-gov-border/30">
          <h3 className="text-base font-semibold text-gov-dark mb-2">Named entities and organisations referenced in this research</h3>
          <p className="text-sm text-gov-secondary/80 leading-relaxed">
            ONS, DSIT, GDS, NHS England, Cabinet Office, Crown Commercial Service, NESTA, Alan Turing Institute,
            Skills England, UK AI Safety Institute, Innovate UK, Welsh Government, National Digital Twin Programme,
            Office for Statistics Regulation, HM Treasury.
          </p>
        </div>
      </section>

      {/* Related case studies */}
      <section className="space-y-6 border-t border-gov-border/30 pt-10">
        <h2 className="text-2xl font-bold text-gov-dark">Underlying Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/case-studies/welsh-government-land-valuation" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">Welsh Government</p>
            <p className="text-sm font-semibold text-gov-dark">Land valuation methodologies — five approaches tested</p>
          </Link>
          <Link to="/case-studies/national-digital-twin-programme" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">National Digital Twin Programme</p>
            <p className="text-sm font-semibold text-gov-dark">AI Ontology Extension Generator — open source on GitHub</p>
          </Link>
          <Link to="/case-studies/bridgeai-creative-industries" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">BridgeAI / Innovate UK</p>
            <p className="text-sm font-semibold text-gov-dark">AI adoption for UK creative industries</p>
          </Link>
          <Link to="/case-studies/kalgera-financial-vulnerability" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">Kalgera / Fintech Scotland</p>
            <p className="text-sm font-semibold text-gov-dark">Financial vulnerability qualitative research</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gov-border/30 pt-10 flex flex-col sm:flex-row gap-4 items-start">
        <Link
          to="/how-to-buy"
          className="inline-block bg-gov-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-gov-blue-dark transition-colors"
        >
          Commission this expertise
        </Link>
        <Link
          to="/research"
          className="inline-block border border-gov-blue text-gov-blue font-semibold px-6 py-3 rounded-lg hover:bg-gov-blue/5 transition-colors"
        >
          View published research
        </Link>
      </section>

    </div>
  );
};
