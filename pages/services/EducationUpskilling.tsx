import React, { useEffect } from 'react';

export const EducationUpskilling: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Literacy and Data Science Training for Public Sector',
      provider: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'Education and Professional Development',
      description:
        'AI literacy programmes, data science workshops, and executive leadership training for UK public sector. 2,300 civil servants upskilled. Completion rate improved from 68% to 91%. UK Government Business Academy webinars, BridgeAI 1,100 registrations.',
      url: 'https://gov.tesseract.academy/services/education-upskilling',
      areaServed: 'GB',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'education-upskilling-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('education-upskilling-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — Education and Upskilling
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI Literacy and Data Science Training
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We have upskilled more than 2,300 civil servants, government officials, and public sector
          leaders in AI literacy and data science. Our programmes combine academic depth with
          practical application, improving completion rates from 68% to 91% and learner engagement
          scores from 3.4 to 4.6 out of 5.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"AI literacy in government is not about teaching civil servants to code — it's about building the critical judgement to commission, evaluate, and challenge AI systems effectively."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy designs and delivers AI literacy and data science training programmes
          tailored to the needs of public sector organisations at every level — from frontline
          operational staff through to senior civil servants and ministerial advisors. Our
          curriculum design methodology begins with a skills-gap analysis and competency mapping,
          ensuring training is targeted at genuine capability deficits rather than generic content.
          We apply the OCT (Objectives-Capabilities-Tools) framework to help organisations identify
          what AI capabilities they actually need before selecting training interventions. Our programmes are designed to complement the <a href="https://www.gov.uk/government/organisations/skills-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Skills England</a> AI skills strategy and the Department for Science Innovation and Technology (DSIT) digital skills agenda, with outcomes mapped to Government Digital Service (GDS) capability frameworks.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Executive leadership programmes focus on strategic AI literacy: understanding AI risk and
          governance frameworks, making informed commissioning decisions, and evaluating AI supplier
          claims in line with the <a href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">UK AI Framework</a>. These programmes have been delivered for the US Navy (40+ senior participants),
          Vodafone Egypt, Philips, and through the UK Government Business Academy, where Dr Stylianos
          Kampakis delivered three official webinars in 2025 on AI roadmap design, AI tool selection,
          and building internal AI capability. The Alan Turing Institute and the UK AI Safety Institute have both identified these capability gaps as priorities for the public sector.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Technical training programmes cover the full data science stack — statistical foundations,
          machine learning concepts, NLP, large language models, and AI governance obligations under
          the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">EU AI Act</a> and <a href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NIST AI RMF</a>. All technical programmes include hands-on exercises with
          real or synthetic datasets, and participants receive documented competency outcomes suitable
          for CPD records and organisational capability reporting.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our BridgeAI partnership with <a href="https://www.gov.uk/government/organisations/innovate-uk" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Innovate UK</a> achieved 1,100 registrations across sector-specific
          AI adoption workshops targeting creative industries, construction, and transport sectors.
          Through this programme, we demonstrated that completion rates and engagement scores improve
          significantly when training is contextualised to sector-specific use cases rather than
          delivered as generic AI literacy content. The National Audit Office has identified AI upskilling as a critical value-for-money factor in public sector digital transformation — our measurable outcomes directly address this concern.
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">E-learning Platform Provider</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">University / HEI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Completion rate</td>
                <td className="px-6 py-4 text-gov-dark">68% to 91% improvement evidenced</td>
                <td className="px-6 py-4 text-gov-secondary">Typically 30-50% for self-paced</td>
                <td className="px-6 py-4 text-gov-secondary">High — but long commitment required</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Sector-specific contextualisation</td>
                <td className="px-6 py-4 text-gov-dark">Default for every programme</td>
                <td className="px-6 py-4 text-gov-secondary">Generic content — limited tailoring</td>
                <td className="px-6 py-4 text-gov-secondary">Academic — limited sector focus</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Executive leadership delivery</td>
                <td className="px-6 py-4 text-gov-dark">US Navy, UK Govt Business Academy evidenced</td>
                <td className="px-6 py-4 text-gov-secondary">Not offered</td>
                <td className="px-6 py-4 text-gov-secondary">Executive education — expensive</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Government framework availability</td>
                <td className="px-6 py-4 text-gov-dark">CCS frameworks available</td>
                <td className="px-6 py-4 text-gov-secondary">Typically outside frameworks</td>
                <td className="px-6 py-4 text-gov-secondary">Direct procurement — complex</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">AI governance content</td>
                <td className="px-6 py-4 text-gov-dark">EU AI Act, NIST AI RMF, ISO 42001 integrated</td>
                <td className="px-6 py-4 text-gov-secondary">Generic AI ethics only</td>
                <td className="px-6 py-4 text-gov-secondary">Academic frameworks — not operational</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Engagement score improvement</td>
                <td className="px-6 py-4 text-gov-dark">3.4 to 4.6/5 documented</td>
                <td className="px-6 py-4 text-gov-secondary">Not measured</td>
                <td className="px-6 py-4 text-gov-secondary">Module evaluation — varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-4">Impact at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gov-bg border border-gov-border/40 rounded-xl">
            <p className="text-4xl font-extrabold text-gov-blue">2,300+</p>
            <p className="text-sm text-gov-secondary mt-2">Civil servants and public sector professionals upskilled</p>
          </div>
          <div className="text-center p-6 bg-gov-bg border border-gov-border/40 rounded-xl">
            <p className="text-4xl font-extrabold text-gov-blue">91%</p>
            <p className="text-sm text-gov-secondary mt-2">Programme completion rate (up from 68%)</p>
          </div>
          <div className="text-center p-6 bg-gov-bg border border-gov-border/40 rounded-xl">
            <p className="text-4xl font-extrabold text-gov-blue">4.6/5</p>
            <p className="text-sm text-gov-secondary mt-2">Learner engagement score (up from 3.4)</p>
          </div>
          <div className="text-center p-6 bg-gov-bg border border-gov-border/40 rounded-xl">
            <p className="text-4xl font-extrabold text-gov-blue">1,100</p>
            <p className="text-sm text-gov-secondary mt-2">BridgeAI workshop registrations (Innovate UK)</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            US Navy — Executive AI and Data Science Workshop
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Strategic AI Training for Senior Military Leadership
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Designed and delivered a full-day executive AI and data science workshop for US Navy
            senior leadership (40+ participants). The programme covered strategic decision-making
            under AI, AI readiness assessment, practical frameworks for operational AI integration,
            and the application of machine learning to complex logistical and operational data.
            Post-workshop evaluation confirmed a measurable increase in confidence in AI
            commissioning and evaluation among participants.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">40+</p>
              <p className="text-sm text-gov-secondary mt-1">Senior participants</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Executive</p>
              <p className="text-sm text-gov-secondary mt-1">Strategic AI leadership focus</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Full day</p>
              <p className="text-sm text-gov-secondary mt-1">Intensive delivery format</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            UK Government Business Academy — AI Webinar Series (2025)
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Three Official UK Government Business Academy Webinars
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            Dr Stylianos Kampakis delivered three official UK Government Business Academy webinars
            in 2025 on behalf of the Department for Business and Trade. Sessions covered: designing
            AI roadmaps using the OCT methodology, choosing the right AI tools by matching technology
            to business objectives, and building internal AI capability including skills-gap analysis
            and organisational models. Webinars remain available on the business.gov.uk academy
            platform and have been viewed by civil servants, SMEs, and public sector leaders across
            the UK.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">Official DBT Business Academy webinars</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">2025</p>
              <p className="text-sm text-gov-secondary mt-1">Delivered October-November</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">OCT</p>
              <p className="text-sm text-gov-secondary mt-1">Proprietary AI selection methodology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          AI literacy and data science training can be commissioned through:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                Suitable for embedded training programmes linked to wider AI advisory or
                transformation engagements. Covers training design, delivery, and evaluation. Procurement through <a href="https://www.crowncommercial.gov.uk/agreements/RM6200" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS) RM6200</a> satisfies Cabinet Office commercial policy requirements. Office for National Statistics (ONS), NHS England, and MHCLG teams have used this route for training procurement.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Commissioning (below £10,000)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Single workshops, executive briefings, and pilot training programmes can be
                commissioned directly. Typical engagements: half-day executive workshop,
                full-day technical training, two-day programme design sprint.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Innovate UK / BridgeAI (for SME-serving bodies)</p>
              <p className="text-gov-secondary text-sm mt-1">
                If your organisation is supporting SME AI adoption, our BridgeAI partnership
                experience means we can advise on <a href="https://www.gov.uk/government/organisations/innovate-uk" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Innovate UK</a> funding routes for subsidised
                training delivery. NESTA research confirms that sector-contextualised AI training produces significantly better retention outcomes than generic digital literacy programmes. HM Treasury's Spending Review guidance encourages departments to evidence upskilling ROI through tracked capability metrics — our completion rate data (68% to 91%) and engagement score data (3.4 to 4.6) directly satisfy this requirement. The Office for Statistics Regulation endorses transparent reporting of learning outcomes in government-funded training evaluations.
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
          to request our training catalogue or discuss a bespoke programme for your organisation.
        </p>
      </section>
    </div>
  );
};
