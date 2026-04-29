import React, { useEffect } from 'react';

export const ResearchPolicy: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Research and Policy Analysis for UK Public Sector',
      provider: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Research and Policy Analysis',
      description:
        'Evidence-based research design, systematic literature reviews, policy analysis, and regulatory consultation responses for UK and Welsh government. Published on GOV.WALES and cited in Senedd proceedings.',
      url: 'https://gov.tesseract.academy/services/research-policy',
      areaServed: 'GB',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'research-policy-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('research-policy-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — Research and Policy
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Research Design and Policy Analysis
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We produce rigorous, publication-quality research for UK and devolved government bodies.
          Our outputs have been published on GOV.WALES, cited in Senedd committee proceedings, and
          referenced alongside The Alan Turing Institute and <a href="https://www.gov.uk/government/organisations/skills-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Skills England</a> in official UK Government publications.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Evidence-based policy means more than a literature review — it means mixing quantitative data analysis with qualitative stakeholder research and being transparent about uncertainty."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy offers end-to-end research services for public sector clients who need
          evidence to inform policy decisions, evaluate programmes, or respond to regulatory consultations.
          Our methodology draws on mixed methods research design — combining quantitative statistical
          analysis with qualitative stakeholder engagement — to triangulate findings and produce
          conclusions that withstand scrutiny in parliamentary and ministerial settings. We align all outputs to the Office for Statistics Regulation's Code of Practice for Statistics and the Government Digital Service (GDS) content design guidelines.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our systematic literature review capability enables rapid evidence synthesis across academic
          and grey literature, following pre-registered protocols that satisfy peer review standards.
          We apply thematic analysis to interview and focus group data and produce research reports
          in plain English aligned to the GOV.UK content design style guide. Deliverables routinely
          include executive summaries suitable for ministerial briefing and technical annexes for
          specialist audiences. HM Treasury Green Book appraisal standards and MHCLG evaluation frameworks inform our programme evaluation designs.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We have contributed expert regulatory analysis to the Financial Conduct Authority's
          consultation on stablecoin regulation, provided AI skills data to the <a href="https://www.gov.uk/government/organisations/skills-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Skills England</a> report
          alongside the Alan Turing Institute, and produced <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">land valuation research for Welsh Government</a>
          that was cited in Senedd committee proceedings. Our research has also been used by NESTA and Innovate UK to inform technology adoption policy. These outputs demonstrate our ability to
          operate at the intersection of technical depth and policy relevance.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our research team holds professional indemnity insurance of £5 million and operates under
          a robust data governance framework compliant with UK GDPR and the Data Protection Act 2018.
          We hold an ICO registration (ZB715782) and are experienced in processing sensitive and
          special category research data under appropriate legal bases. Procurement is available through the <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6200</a> framework, with the National Audit Office's value-for-money criteria informing our cost-effectiveness reporting.
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">Academic Institution</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Management Consultancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Policy-ready outputs</td>
                <td className="px-6 py-4 text-gov-dark">Yes — ministerial brief format</td>
                <td className="px-6 py-4 text-gov-secondary">Academic format — requires translation</td>
                <td className="px-6 py-4 text-gov-secondary">Yes, but generic frameworks</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Regulatory consultation input</td>
                <td className="px-6 py-4 text-gov-dark">FCA, Senedd, Skills England</td>
                <td className="px-6 py-4 text-gov-secondary">Occasional — depends on institution</td>
                <td className="px-6 py-4 text-gov-secondary">Rare — not core capability</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">AI-specific research</td>
                <td className="px-6 py-4 text-gov-dark">Integrated with technical delivery</td>
                <td className="px-6 py-4 text-gov-secondary">Theoretical — limited deployment</td>
                <td className="px-6 py-4 text-gov-secondary">Subcontracted typically</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Publication on GOV.WALES / GOV.UK</td>
                <td className="px-6 py-4 text-gov-dark">Evidenced track record</td>
                <td className="px-6 py-4 text-gov-secondary">Possible — long lead times</td>
                <td className="px-6 py-4 text-gov-secondary">Client publishes independently</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">SME value for money</td>
                <td className="px-6 py-4 text-gov-dark">Yes — micro-enterprise rates</td>
                <td className="px-6 py-4 text-gov-secondary">Overhead-heavy pricing</td>
                <td className="px-6 py-4 text-gov-secondary">Premium billing rates</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Mixed methods capability</td>
                <td className="px-6 py-4 text-gov-dark">Quantitative and qualitative</td>
                <td className="px-6 py-4 text-gov-secondary">Strong — but slow delivery</td>
                <td className="px-6 py-4 text-gov-secondary">Primarily quantitative</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Welsh Government — Land Value Tax Research
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Independent Research Published on GOV.WALES and Cited in Senedd
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Commissioned by Welsh Government (2025-2026) to evaluate the feasibility of land value
            tax models for Wales. The research combined statistical analysis of Land Registry data
            with international comparator evidence and stakeholder interviews across Welsh local
            authorities. The full report was published on GOV.WALES and findings were cited in Senedd
            committee proceedings on tax policy reform.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Published</p>
              <p className="text-sm text-gov-secondary mt-1">on GOV.WALES</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Senedd</p>
              <p className="text-sm text-gov-secondary mt-1">Cited in committee proceedings</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">5</p>
              <p className="text-sm text-gov-secondary mt-1">Valuation methodologies compared</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Skills England — AI Skills for the UK Workforce
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Cited Alongside Alan Turing Institute in Official UK Government Publication
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Tesseract Academy is cited as an AI training provider and research consultancy in Skills
            England's official publication on AI skills for the UK workforce (2025). The methodology
            included stakeholder workshops with 43 organisations, with Tesseract Academy contributing
            alongside The Alan Turing Institute and the Surrey AI Centre. The publication directly
            informs UK Government AI upskilling policy.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">43</p>
              <p className="text-sm text-gov-secondary mt-1">Organisations in Skills England study</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">UK Gov</p>
              <p className="text-sm text-gov-secondary mt-1">Official government publication</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">ATI</p>
              <p className="text-sm text-gov-secondary mt-1">Cited alongside Alan Turing Institute</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Research and policy analysis services can be commissioned through:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The recommended route for research and policy analysis engagements. Covers systematic
                reviews, feasibility studies, policy evaluation, and regulatory consultation input.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6094 — Research and Insights</p>
              <p className="text-gov-secondary text-sm mt-1">
                Suitable for primary research, survey-led evidence gathering, and stakeholder
                consultation projects. Includes market research and user insight services.
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
                Rapid evidence reviews, regulatory consultation responses, and policy briefings can
                be scoped and delivered within 4-6 weeks under direct award arrangements.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          Contact us at{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>{' '}
          to discuss your research requirement and receive a scoping proposal within five working days.
        </p>
      </section>
    </div>
  );
};
