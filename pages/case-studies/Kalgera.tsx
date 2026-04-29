import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/case-studies/kalgera-financial-vulnerability#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/case-studies/kalgera-financial-vulnerability',
  headline: 'Financial Vulnerability Research — Kalgera / Fintech Scotland | Tesseract Academy',
  description:
    'Tesseract Academy designed and delivered end-to-end qualitative user research for Kalgera and Fintech Scotland, validating AI-driven financial vulnerability signals for adults in Scotland.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2025-01-01',
  dateModified: '2026-04-29',
  about: {
    '@type': 'ResearchProject',
    name: 'Kalgera Financial Vulnerability Signal Validation',
    description:
      'Primary qualitative research to validate AI-driven early warning signals for financially vulnerable adults in Scotland.',
  },
  keywords:
    'financial vulnerability, qualitative research, Kalgera, Fintech Scotland, AI, early warning signals, Scotland, Adult Support and Protection',
};

const SIGNAL_CATEGORIES = [
  { signal: 'Spending pattern changes', description: 'Sudden shifts in regular spending behaviour.' },
  { signal: 'Income depletion', description: 'Faster-than-expected drawdown of available funds.' },
  { signal: 'Credit reliance', description: 'Increased use of overdraft, credit cards, or BNPL.' },
  { signal: 'New payees', description: 'Payments to previously unseen accounts.' },
  { signal: 'Cash patterns', description: 'Unusual ATM withdrawal frequency or amounts.' },
  { signal: 'Bill changes', description: 'Missed direct debits or new recurring charges.' },
  { signal: 'Account access', description: 'Login frequency, timing, or device anomalies.' },
  { signal: 'Scam indicators', description: 'Transaction patterns consistent with known fraud typologies.' },
];

const RESEARCH_STAGES = [
  {
    stage: '1',
    label: 'Paid Social Recruitment',
    detail: 'Facebook and Instagram campaigns. Primary target: financially vulnerable adults in Scotland (50+). Secondary: 35–49 age group.',
  },
  {
    stage: '2',
    label: 'Screening Survey',
    detail: '80–120 respondents. Quantitative and qualitative data. Qualification criteria mapped to Kalgera signal categories.',
  },
  {
    stage: '3',
    label: 'In-Depth 1:1 Interviews',
    detail: '8–10 interviews, 60 minutes each. Semi-structured protocol mapped directly to all eight signal categories.',
  },
];

const OUTPUTS = [
  {
    output: '1',
    title: 'Signal Validation Report',
    description:
      'Confirms which behavioural markers are observable in transaction data. Grounds Kalgera signal architecture in lived experience.',
  },
  {
    output: '2',
    title: 'Intervention Acceptability Framework',
    description:
      'Documents what vulnerable people consider helpful versus intrusive. Defines the acceptability spectrum for AI-driven nudges.',
  },
  {
    output: '3',
    title: 'Summary Findings Report',
    description:
      'Condensed findings for the Finance and Health Lab. Direct participant quotes used to support product decisions.',
  },
];

export const Kalgera: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'cs-kalgera-jsonld';
    script.textContent = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('cs-kalgera-jsonld');
      if (el) el.remove();
    };
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <header>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Case Study — Kalgera / Fintech Scotland
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Financial Vulnerability Research — Kalgera / Fintech Scotland
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          End-to-end qualitative user research validating AI-driven early warning signals for financially vulnerable adults in Scotland. Three structured outputs delivered: signal validation, acceptability framework, and Finance and Health Lab summary.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Survey Respondents</p>
          <p className="text-3xl font-extrabold text-gov-dark">80–120</p>
          <p className="text-sm text-gov-secondary mt-1">screening survey participants</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">In-Depth Interviews</p>
          <p className="text-3xl font-extrabold text-gov-dark">8–10</p>
          <p className="text-sm text-gov-secondary mt-1">60 minutes each, 1:1</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Signal Categories</p>
          <p className="text-3xl font-extrabold text-gov-dark">8</p>
          <p className="text-sm text-gov-secondary mt-1">mapped to Kalgera architecture</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Kalgera's AI-driven early warning system detects financial vulnerability through transaction data signals. Before scaling the product, Kalgera needed primary qualitative research to validate that the signals reflect real lived experiences — not just statistical artefacts. The work was delivered within the regulatory context established by the <a href="https://www.fca.org.uk/firms/consumer-duty" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">FCA Consumer Duty</a>, which places explicit obligations on firms to understand the needs of customers in vulnerable circumstances, and the <strong>Financial Conduct Authority</strong>'s Guidance for Firms on the Fair Treatment of Vulnerable Customers (FG21/1).
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The research had to capture the experiences of financially vulnerable adults in Scotland: people experiencing cognitive decline, scam victims, carers managing money on behalf of others. Reaching this population ethically and reliably required specialist recruitment and a robust ethical framework aligned with the <strong>Adult Support and Protection (Scotland) Act 2007</strong>. <strong>NHS England</strong>'s framework for inclusion research and the <strong>Office for National Statistics</strong> guidance on surveying vulnerable populations informed the recruitment and consent protocols. <strong>Fintech Scotland</strong>, in partnership with the Scottish Government's Financial Health Lab, supported access to the target participant cohort.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Research Programme — Three Stages</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-12">Stage</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Method</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Detail</th>
              </tr>
            </thead>
            <tbody>
              {RESEARCH_STAGES.map((s, i) => (
                <tr
                  key={s.stage}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{s.stage}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{s.label}</td>
                  <td className="px-4 py-3 text-gov-secondary">{s.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Kalgera Signal Categories — Interview Protocol</h2>
        <p className="text-gov-secondary leading-relaxed text-sm">
          Each interview was structured around all eight of Kalgera's signal categories. Participants were asked to describe experiences relevant to each category in their own words.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Signal Category</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it captures</th>
              </tr>
            </thead>
            <tbody>
              {SIGNAL_CATEGORIES.map((s, i) => (
                <tr
                  key={s.signal}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 font-medium text-gov-dark">{s.signal}</td>
                  <td className="px-4 py-3 text-gov-secondary">{s.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Ethical Framework</h2>
          <ul className="space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Framework aligned with the <strong>Adult Support and Protection (Scotland) Act 2007</strong>, ensuring duty-of-care obligations were met throughout the research programme.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Distress protocol in place with trained facilitators for all interviews, consistent with <strong>NHS England</strong> inclusion research standards for research involving adults at risk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>All data encrypted, UK-hosted, and anonymised within 7 days of collection. Data handling aligned with <strong>UK AI Safety Institute</strong> guidance on responsible data use in AI validation research and <strong>Cabinet Office</strong> data security classification requirements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Verbal and written consent obtained for participation, recording, and data use. Consent process reviewed against <strong>Office for National Statistics</strong> ethical standards for qualitative social research.</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
            <p className="text-gov-dark italic leading-relaxed">"Qualitative research with financially vulnerable adults requires the same rigour as clinical trials — distress protocols, ethical oversight, and a methodology grounded in lived experience. The Adult Support and Protection (Scotland) Act 2007 framework we built gave Kalgera's signal validation genuine human validity."</p>
            <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">— Dr Stylianos Kampakis, Managing Director, Tesseract Academy</cite>
          </blockquote>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Three Structured Outputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OUTPUTS.map((o) => (
            <div
              key={o.output}
              className="bg-white border border-gov-border/50 rounded-xl p-6 border-l-2 border-l-gov-blue"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">
                Output {o.output}
              </p>
              <h3 className="font-bold text-gov-dark mb-2 font-serif">{o.title}</h3>
              <p className="text-sm text-gov-secondary leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </article>
  );
};
