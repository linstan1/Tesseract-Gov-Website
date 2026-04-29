import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'BridgeAI: AI Adoption for UK Creative Industries | Tesseract Academy',
  description:
    'Tesseract Academy delivered the BridgeAI Skills Hub launch and AI readiness sessions for UK creative industries under Innovate UK contract GSS24646. 1,100 registrations against a target of 200. Satisfaction: 4.6/5.',
  author: {
    '@type': 'Organization',
    name: 'Tesseract Academy',
    url: 'https://gov.tesseract.academy',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tesseract Academy',
  },
  datePublished: '2026-01-01',
  funder: {
    '@type': 'Organization',
    name: 'Innovate UK',
    url: 'https://www.ukri.org/councils/innovate-uk/',
  },
  keywords:
    'BridgeAI, Innovate UK, creative industries, AI adoption, AI readiness, SME, PwC, Skills Hub',
};

const METRICS = [
  { label: 'Registrations', value: '1,100', context: 'vs 200 capacity target' },
  { label: 'Satisfaction Rating', value: '4.6 / 5', context: 'across all sessions' },
  { label: 'Sectors Covered', value: '3', context: 'construction, creative, transport' },
  { label: 'Contract Reference', value: 'GSS24646', context: 'Innovate UK BridgeAI' },
];

const ACTIVITIES = [
  {
    activity: 'Programme Delivery Report',
    description:
      'Research-backed guidance on AI adoption for UK creatives, covering readiness assessment, implementation strategy, and practical tooling.',
    partner: 'Tesseract Academy (lead)',
  },
  {
    activity: 'AI Readiness Assessment',
    description:
      'Structured diagnostic framework evaluating AI maturity across creative sector SMEs.',
    partner: 'Tesseract Academy (lead)',
  },
  {
    activity: 'BridgeAI Skills Hub Launch',
    description:
      'Inaugural hub launch event at Ona Studios, London. Live demonstrations, panels, and practitioner workshops.',
    partner: 'Tesseract Academy (lead)',
  },
  {
    activity: 'Sector AI Readiness Sessions',
    description:
      'Co-delivered targeted AI readiness workshops for construction, creative industries, and transport sectors.',
    partner: 'Tesseract Academy + PwC',
  },
];

export const BridgeAI: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'cs-bridgeai-jsonld';
    script.textContent = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('cs-bridgeai-jsonld');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <div>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Case Study — Innovate UK BridgeAI Programme
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          BridgeAI: AI Adoption for UK Creative Industries
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          1,100 registrations against a capacity target of 200. Satisfaction rating 4.6 out of 5. Delivered under Innovate UK contract GSS24646.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {METRICS.map((m) => (
          <div key={m.label} className="bg-gov-bg border border-gov-border/50 rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">{m.label}</p>
            <p className="text-2xl font-extrabold text-gov-dark">{m.value}</p>
            <p className="text-xs text-gov-secondary mt-1">{m.context}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            UK creative industries — music, film, design, advertising, games — were under-served by mainstream AI adoption programmes. Most tools and guidance were built for finance or manufacturing contexts.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Innovate UK's BridgeAI programme needed a delivery partner to bridge the gap between cutting-edge AI research and practical implementation for creative sector SMEs. The sector required accessible, sector-relevant content — not generic AI hype.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What We Delivered</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Activity</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Description</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Delivery Partner</th>
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map((a, i) => (
                <tr
                  key={a.activity}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 font-medium text-gov-dark">{a.activity}</td>
                  <td className="px-4 py-3 text-gov-secondary">{a.description}</td>
                  <td className="px-4 py-3 text-gov-secondary whitespace-nowrap">{a.partner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Delivery Team</h2>
          <ul className="space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span><span className="font-semibold">Fabio Rovai</span> — programme management, Skills Hub design, stakeholder engagement.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span><span className="font-semibold">Dr Stylianos Kampakis</span> — technical AI content, readiness assessment methodology, sector AI readiness sessions with PwC.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            The BridgeAI Skills Hub at Ona Studios, London, became the highest-demand AI adoption event in the programme's creative industries strand. Registrations reached 1,100 — 5.5 times the capacity target of 200.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Satisfaction rated 4.6 out of 5. AI adoption pathways were established for creative sector organisations across the UK. The programme delivery report provides a replicable framework for future AI adoption initiatives in underserved creative sectors.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Read the Skills Hub announcement</p>
          <p className="text-sm text-gov-secondary mt-1">
            Tesseract Academy partners with BridgeAI to advance AI training in creative industries.
          </p>
        </div>
        <a
          href="https://tesseract.academy/tesseract-academy-partners-with-bridgeai-to-advance-ai-training-in-creative-industries/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
        >
          Read Announcement
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </div>
  );
};
