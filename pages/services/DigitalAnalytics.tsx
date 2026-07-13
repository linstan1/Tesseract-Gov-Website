import React from 'react';
import { Link } from 'react-router-dom';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://gov.tesseract.academy/services/digital-analytics#service',
  name: 'Digital Analytics and Audience Measurement for UK Public Sector',
  provider: {
    '@type': 'Organization',
    '@id': 'https://gov.tesseract.academy/#organization',
  },
  serviceType: 'Digital Analytics, Audience Measurement and Insight',
  description:
    'GA4 and Google Tag Manager implementation and audit, consent-aware measurement, Power BI and Looker Studio dashboards, KPI and measurement frameworks, test-and-learn support, and analytics capability building for UK public sector and cultural organisations.',
  url: 'https://gov.tesseract.academy/services/digital-analytics',
  areaServed: 'GB',
  datePublished: '2026-07-13',
  dateModified: '2026-07-13',
};

export const DigitalAnalytics: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service - Digital Analytics and Audience Measurement
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Digital Analytics and Audience Measurement
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We help public-sector and cultural organisations turn web, marketing and audience data
          into decisions: Google Analytics 4 and Google Tag Manager done properly, consent-aware
          measurement that survives privacy-first browsers, dashboards leadership actually uses,
          and the capability building that means your own team gets stronger every quarter we work
          together.
        </p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">
            "Since consent moved to opt-in, most organisations' web analytics understate their real
            audience - and most dashboards quietly pretend otherwise. Honest measurement now means
            engineering for consent, modelling the gap, and being explicit about uncertainty.
            That is an analytics discipline, not a reporting task."
          </p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">
            - Dr Stylianos Kampakis, Managing Director, Tesseract Academy
          </cite>
        </blockquote>

        <p className="text-gov-dark leading-relaxed text-base">
          Our analytics practice covers the full measurement stack. At the collection layer we
          implement, audit and maintain <strong>Google Analytics 4</strong> properties and{' '}
          <strong>Google Tag Manager</strong> containers: event and conversion design, cross-domain
          and e-commerce tracking, tagging QA, and the recurring hygiene work (broken tags,
          duplicate events, untracked journeys) that silently corrupts reporting when neglected.
          We audit cookie banners and consent management platforms against{' '}
          <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">ICO guidance on PECR</a>{' '}
          and UK GDPR, and we advise on consent mode, conversion APIs and first-party or
          server-side tagging where the benefit justifies the infrastructure - and say plainly
          when it does not.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          At the insight layer we build <strong>Power BI and Looker Studio</strong> reporting that
          brings web, paid media (Google Ads, Meta, Search Console), CRM and ticketing or
          transaction data into one governed view, so marketing performance and audience growth are
          read from a shared set of numbers rather than five contradictory exports. Every reporting
          build comes with a <strong>KPI and measurement framework</strong>: metrics defined once,
          tied to organisational objectives, with named owners and explicit data-quality caveats.
          Dashboards are designed to WCAG 2.2 AA accessibility standards.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Beyond reporting, we support a <strong>test-and-learn culture</strong>: hypothesis
          backlogs, A/B test design and evaluation, conversion-rate optimisation recommendations
          prioritised by expected impact, and decision-ready insight notes rather than data dumps.
          And because dependency on an agency is a failure mode, not a business model, every
          engagement includes <strong>capability building</strong>: structured mentoring for
          in-house analysts, refresher training for marketing and content teams, and documentation
          your team owns. Our training pedigree is a matter of record - our{' '}
          <Link to="/research/bridgeai-creative-industries" className="text-gov-blue hover:underline">
            Innovate UK BridgeAI programme
          </Link>{' '}
          drew 1,100 registrations against a 200-place target.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We work under UK GDPR with ICO registration (ZB715782), hold Cyber Essentials
          certification, and are an appointed supplier on{' '}
          <a href="https://www.crowncommercial.gov.uk/agreements/RM6126" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">CCS RM6126</a>{' '}
          (Research and Insights) and the Imperial War Museums Digital Transformation Support
          Framework (Lot 1 - Data Consultancy).
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
                <th className="px-6 py-4 font-semibold text-gov-secondary">Media Agency Add-On</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Reporting-Only Supplier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Consent-aware measurement design</td>
                <td className="px-6 py-4 text-gov-dark">Consent mode, modelling, server-side advice</td>
                <td className="px-6 py-4 text-gov-secondary">Focused on campaign attribution</td>
                <td className="px-6 py-4 text-gov-secondary">Reports what the tool collects</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Statistical depth behind insight</td>
                <td className="px-6 py-4 text-gov-dark">Chartered-statistician led; modelling and testing</td>
                <td className="px-6 py-4 text-gov-secondary">Platform metrics as given</td>
                <td className="px-6 py-4 text-gov-secondary">Descriptive dashboards</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Data integration (web + CRM + ticketing)</td>
                <td className="px-6 py-4 text-gov-dark">Power BI / Looker Studio governed models</td>
                <td className="px-6 py-4 text-gov-secondary">Media data only, typically</td>
                <td className="px-6 py-4 text-gov-secondary">Single-source reporting</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Capability building for in-house teams</td>
                <td className="px-6 py-4 text-gov-dark">Mentoring + training in every engagement</td>
                <td className="px-6 py-4 text-gov-secondary">Rarely offered</td>
                <td className="px-6 py-4 text-gov-secondary">Creates dependency</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Public-sector compliance context</td>
                <td className="px-6 py-4 text-gov-dark">UK GDPR, PECR, WCAG 2.2 AA, Cyber Essentials</td>
                <td className="px-6 py-4 text-gov-secondary">Commercial default settings</td>
                <td className="px-6 py-4 text-gov-secondary">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Evidence</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Open demonstration - built on official DCMS statistics
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">The DCMS Museum Visits Observatory</h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            To show rather than tell, we rebuilt the official DCMS monthly visitor statistics for
            all sponsored museums and galleries as an interactive observatory: 16 museum groups,
            87 months of data, site-level breakdowns, pandemic closures marked honestly, and
            recovery measured against each institution's own 2019 baseline. Every number in the
            chart is readable in an accessible table view.
          </p>
          <Link to="/research/museum-visits-observatory" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline">
            Explore the observatory
          </Link>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Enterprise analytics transformation - international device-protection group
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            From Report Factory to Insight Function in Twelve Months
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            For a US-headquartered device-protection company within a major insurance group, we led
            a twelve-month analytics transformation: data maturity assessment, redesign of the
            analytics operating model, governed self-service BI, and a hands-on upskilling
            curriculum using real business problems. Self-service reporting cut ad-hoc report
            requests by around 60% and automated pipelines saved roughly 40 hours a week of manual
            preparation, while 85% of the original team upskilled into an advanced analytics
            function that now feeds executive dashboards and planning.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">~60%</p>
              <p className="text-sm text-gov-secondary mt-1">reduction in ad-hoc report requests</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">~40 hrs/wk</p>
              <p className="text-sm text-gov-secondary mt-1">manual data preparation automated</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">85%</p>
              <p className="text-sm text-gov-secondary mt-1">of the existing team upskilled</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Government dashboarding and data quality
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Cross-Domain Dashboards for the National Digital Twin Programme
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            For the UK National Digital Twin Programme (Department for Business and Trade), we
            delivered proof-of-concept dashboards over 15+ previously siloed infrastructure data
            sets, backed by automated data-quality pipelines that scored incoming data before it
            could contaminate reporting - the same reliability discipline we apply to every
            analytics build.
          </p>
          <Link to="/research/national-digital-twin-programme" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline">
            Read the case study
          </Link>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">1</span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6126 - Research and Insights</p>
              <p className="text-gov-secondary text-sm mt-1">
                Audience measurement, analytics and insight work can be called off directly.
                Tesseract Academy is an appointed supplier on this framework.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">2</span>
            <div>
              <p className="font-semibold text-gov-dark">Retained analytics support</p>
              <p className="text-gov-secondary text-sm mt-1">
                A fixed monthly or quarterly allocation covering GA4 and tag maintenance, reporting,
                insight notes, testing support and training - the model most organisations with a
                small in-house analytics team find works best.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">3</span>
            <div>
              <p className="font-semibold text-gov-dark">Direct award (below threshold) or open tender</p>
              <p className="text-gov-secondary text-sm mt-1">
                Discrete audits (GA4, tagging, cookies and consent), dashboard builds and
                measurement-framework projects can be scoped as fixed-price engagements.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          Contact{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>{' '}
          to request a scoping call, a sample measurement framework, or a walkthrough of the
          Museum Visits Observatory.
        </p>
      </section>
    </div>
  );
};
