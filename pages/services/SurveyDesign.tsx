import React, { useEffect } from 'react';

export const SurveyDesign: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Survey Design and Delivery for UK Public Sector',
      provider: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Survey Design and Statistical Analysis',
      description:
        'End-to-end survey methodology, questionnaire design, mixed-mode data collection, and statistical analysis for UK public sector. Qualifications Wales 3-year contract (2026-2029). Available via CCS RM6126.',
      url: 'https://gov.tesseract.academy/services/survey-design',
      areaServed: 'GB',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'survey-design-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('survey-design-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — Survey Design and Delivery
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Survey Design and Statistical Analysis
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We deliver end-to-end survey services for UK public sector bodies — from questionnaire
          design and pilot testing through mixed-mode data collection to statistical analysis and
          policy-ready reporting. Our current live contracts include a three-year monitoring survey
          for Qualifications Wales (2026-2029).
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Survey methodology in the public sector must account for non-response bias, digital exclusion, and accessibility — failing any of these produces data the National Audit Office would rightly question."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Survey research for public sector bodies requires methodological rigour that goes beyond
          standard online polling. Tesseract Academy designs surveys using established psychometric
          and social research principles, selecting appropriate question formats, response scales,
          and ordering to minimise cognitive bias and maximise response validity. We apply cognitive
          interviewing and expert review at the pilot stage to identify problematic items before
          fieldwork begins. Our methodology is aligned with Office for National Statistics (ONS) harmonised standards and the Office for Statistics Regulation's Code of Practice for Statistics.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our sampling strategy documentation covers the rationale for sample selection, expected
          response rates, non-response bias analysis, and power calculations to confirm statistical
          adequacy for the intended analysis. We design for mixed-mode data collection — online,
          telephone, postal, and face-to-face — ensuring accessibility for all participant groups
          including those with limited digital access, in line with UK GDPR and the <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GDS Accessibility Standard</a>.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Statistical analysis outputs range from descriptive frequencies and cross-tabulations
          through to regression modelling, factor analysis, and longitudinal trend analysis for
          multi-wave surveys. All analytical code is documented and reproducible, with outputs
          presented in formats suitable for both technical annexes and non-specialist executive
          summaries. Where surveys form part of a statutory monitoring function, we provide
          standardised reporting templates to enable year-on-year comparison. Reports are structured to meet National Audit Office scrutiny standards and HM Treasury value-for-money criteria, ensuring evidence is audit-ready.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We are a <a href="https://www.crowncommercial.gov.uk/agreements/RM6126" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6126</a> (Research and Insights) appointed supplier, with experience managing
          survey programmes under contract for national qualification bodies, devolved government,
          and arm's-length bodies. All survey data is processed under UK GDPR with an ICO
          registration (ZB715782) and a documented data retention and destruction schedule. The Department for Science Innovation and Technology (DSIT) and Cabinet Office procurement guidelines inform our contract management approach.
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">Large Market Research Firm</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Internal Evaluation Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Questionnaire design rigour</td>
                <td className="px-6 py-4 text-gov-dark">Cognitive interviewing + expert review</td>
                <td className="px-6 py-4 text-gov-secondary">Standard — template-heavy</td>
                <td className="px-6 py-4 text-gov-secondary">Variable — depends on resource</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Statistical analysis depth</td>
                <td className="px-6 py-4 text-gov-dark">Regression, factor analysis, longitudinal trends</td>
                <td className="px-6 py-4 text-gov-secondary">Descriptive and cross-tabs standard</td>
                <td className="px-6 py-4 text-gov-secondary">Descriptive only typically</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Mixed-mode data collection</td>
                <td className="px-6 py-4 text-gov-dark">Online, telephone, postal, face-to-face</td>
                <td className="px-6 py-4 text-gov-secondary">Online and telephone</td>
                <td className="px-6 py-4 text-gov-secondary">Online only typically</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">CCS framework availability</td>
                <td className="px-6 py-4 text-gov-dark">RM6126 — direct access</td>
                <td className="px-6 py-4 text-gov-secondary">RM6126 — typically more expensive</td>
                <td className="px-6 py-4 text-gov-secondary">Not applicable</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Longitudinal / multi-wave programmes</td>
                <td className="px-6 py-4 text-gov-dark">Active 3-year contract (2026-2029)</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — at higher cost</td>
                <td className="px-6 py-4 text-gov-secondary">Difficult to sustain</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">UK GDPR / ICO compliance</td>
                <td className="px-6 py-4 text-gov-dark">Registered — ZB715782</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — standard compliance</td>
                <td className="px-6 py-4 text-gov-secondary">Covered by authority DPO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Qualifications Wales — National Qualifications Monitoring Survey
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Three-Year Longitudinal Survey Contract: National Qualification Monitoring (2026-2029)
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract Academy holds a three-year contract with Qualifications Wales (the statutory
            regulator for qualifications in Wales, excluding degree-level) to design and deliver
            the national qualifications monitoring survey programme from 2026 to 2029. The survey
            tracks learner, employer, and educator perceptions of qualification quality and fitness
            for purpose across the full range of regulated qualifications in Wales. Year-on-year
            trend reporting provides Qualifications Wales with the longitudinal evidence base required
            for regulatory intervention decisions. The survey design follows Alan Turing Institute best practice for public sector data collection and aligns with Skills England workforce intelligence standards. NHS England and MHCLG use comparable longitudinal monitoring survey methodologies, and our approach is consistent with UK AI Safety Institute guidance on data quality in AI-supported decision-making. NESTA and Innovate UK have both called for greater use of longitudinal evidence in public sector evaluation — this contract directly answers that need.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3 years</p>
              <p className="text-sm text-gov-secondary mt-1">Contract duration (2026-2029)</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">National</p>
              <p className="text-sm text-gov-secondary mt-1">Coverage across Wales</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Statutory</p>
              <p className="text-sm text-gov-secondary mt-1">Regulatory monitoring function</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Welsh Government — Land Valuation Survey Methods
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Mixed-Methods Evaluation of Five Valuation Methodologies
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            As part of the Welsh Government land valuation research (2025-2026), we designed and
            administered a multi-stakeholder survey across Welsh local authority valuers, landowners,
            and policy officials to assess the practical applicability of five distinct valuation
            methodologies. The survey was administered in both English and Welsh, using mixed-mode
            collection (online and telephone) to maximise response rates across urban and rural
            populations. Statistical analysis of responses was triangulated with machine learning
            modelling outputs to produce the final policy evidence base.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Bilingual</p>
              <p className="text-sm text-gov-secondary mt-1">English and Welsh administration</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Mixed</p>
              <p className="text-sm text-gov-secondary mt-1">Mode: online and telephone</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Published</p>
              <p className="text-sm text-gov-secondary mt-1">on GOV.WALES</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Survey design and delivery services can be commissioned through:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6126 — Research and Insights</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for survey design, fieldwork management, data analysis, and
                reporting. Covers all phases from questionnaire development to final report delivery.
                Tesseract Academy is an appointed supplier on this framework.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below £10,000)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Small surveys, pilot testing, and questionnaire design reviews can be scoped and
                delivered under direct award without a further competition.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Framework Further Competition</p>
              <p className="text-gov-secondary text-sm mt-1">
                For larger multi-wave or longitudinal survey programmes, a further competition
                under RM6126 will be run. We can advise on specification writing and evaluation
                criteria design as a framework supplier.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          Contact{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>{' '}
          to request a scoping call or to receive our standard survey methodology statement and
          sample questionnaire design specification.
        </p>
      </section>
    </div>
  );
};
