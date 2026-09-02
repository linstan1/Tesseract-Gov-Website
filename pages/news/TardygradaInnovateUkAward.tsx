import React from 'react';
import { Link } from 'react-router-dom';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  '@id': 'https://gov.tesseract.academy/news/tardygrada-innovate-uk-award#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/news/tardygrada-innovate-uk-award',
  headline: 'Tesseract Academy awarded Innovate UK Frontier AI Discovery funding for Tardygrada',
  description:
    'Kampakis and Co Ltd, trading as The Tesseract Academy, has been awarded Innovate UK funding through the Frontier AI Discovery competition (Theme 4, Fundamental AI) for project 10207012, A Formally Verified Runtime for Trustworthy AI Agents (Tardygrada), a Phase 1 feasibility study running from 1 October 2026 to 31 December 2026.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  url: 'https://gov.tesseract.academy/news/tardygrada-innovate-uk-award',
  about: [
    'Innovate UK',
    'Frontier AI Discovery',
    'Trustworthy AI',
    'Formal Verification',
  ],
};

export const TardygradaInnovateUkAward: React.FC = () => {
  return (
    <article className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Hero */}
      <header className="border-b border-gov-border/30 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gov-blue bg-gov-blue/10 px-2.5 py-1 rounded-full">
            Funding Award
          </span>
          <time className="text-xs text-gov-secondary/70" dateTime="2026-09-02">2 September 2026</time>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Tesseract Academy awarded Innovate UK Frontier AI Discovery funding for Tardygrada
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl mb-8">
          Kampakis and Co Ltd, trading as The Tesseract Academy, has been awarded funding from Innovate UK
          through the Frontier AI Discovery competition. The award supports project 10207012,{' '}
          <span className="font-semibold text-gov-dark">A Formally Verified Runtime for Trustworthy AI Agents (Tardygrada)</span>,
          under Theme 4 of the competition, which funds fundamental AI research. The project is a Phase 1
          feasibility study and will run from 1 October 2026 to 31 December 2026.
        </p>
        <figure className="max-w-xs">
          <img
            src="/images/innovate-uk-logo.png"
            alt="Innovate UK"
            width="490"
            height="380"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </figure>
      </header>

      {/* Project facts */}
      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8" aria-label="Project facts">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Project number</dt>
            <dd className="text-base font-semibold text-gov-dark">10207012</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Competition</dt>
            <dd className="text-base font-semibold text-gov-dark">Frontier AI Discovery, Theme 4 (Fundamental AI)</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Phase</dt>
            <dd className="text-base font-semibold text-gov-dark">Phase 1 feasibility study</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Duration</dt>
            <dd className="text-base font-semibold text-gov-dark">1 October 2026 to 31 December 2026</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Principal Investigator</dt>
            <dd className="text-base font-semibold text-gov-dark">Dr Stylianos Kampakis</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-gov-secondary/70">Co-Investigator and project manager</dt>
            <dd className="text-base font-semibold text-gov-dark">Fabio Rovai</dd>
          </div>
        </dl>
      </section>

      {/* Body */}
      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">Why agent guardrails need a different approach</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Most current guardrails for AI agents check an agent's claims only after the output has been produced.
          They typically ask a second statistical model to judge the first one. That second model has its own
          failure modes, and those failures are difficult for anyone to audit. When such a guardrail approves or
          blocks an output, the decision rests on model behaviour that cannot be inspected step by step.
        </p>

        <h2 className="text-3xl font-bold text-gov-dark pt-4">How Tardygrada works</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Tardygrada intervenes before an agent's output is released. The runtime decomposes the output into
          individual logical statements and grounds each statement in a formal ontology, an explicit and
          machine-readable model of the entities and rules of a domain. Deterministic consistency checks then
          evaluate the grounded statements against that ontology. Because the checks are deterministic, the same
          input always produces the same verdict. There is no second LLM inside the verification loop, so the
          audit problem described above does not reappear inside Tardygrada itself. When the runtime rejects an
          output, it returns a reason that anyone can inspect. Each rejection can be traced to the specific
          statement that failed and the specific constraint it violated.
        </p>

        <h2 className="text-3xl font-bold text-gov-dark pt-4">What Phase 1 will test</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Phase 1 will test whether this approach holds up on real documents at production latency. The
          feasibility study will assess whether verification that happens before output, grounded in a formal
          ontology, can operate within the time constraints of a production system while processing realistic
          material.
        </p>

        <h2 className="text-3xl font-bold text-gov-dark pt-4">Project team</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Dr Stylianos Kampakis is the Principal Investigator for the project. Fabio Rovai is Co-Investigator
          and project manager.
        </p>
      </section>

      {/* Funder acknowledgement */}
      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 max-w-4xl" aria-label="Funder acknowledgement">
        <p className="text-base text-gov-dark/90 leading-relaxed">
          This project is funded by Innovate UK, part of UK Research and Innovation, through the Frontier AI Discovery competition.
        </p>
      </section>

      {/* About Innovate UK */}
      <section className="border-t border-gov-border/30 pt-10 max-w-4xl" aria-label="About Innovate UK">
        <h2 className="text-2xl font-bold text-gov-dark mb-4">About Innovate UK</h2>
        <p className="text-sm text-gov-secondary/80 leading-relaxed">
          Innovate UK, part of UK Research and Innovation, is creating a better future by inspiring, involving and investing in businesses developing life-changing innovations. We provide targeted sectors with expertise, facilities and funding to test, demonstrate and evolve their ideas, driving UK productivity and economic growth. Join our network and communities of innovators to realise the potential of your ideas and accelerate business growth. Innovate UK: inspiring business innovation.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-gov-border/30 pt-10 flex flex-col sm:flex-row gap-4 items-start">
        <Link
          to="/research"
          className="inline-block bg-gov-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-gov-blue-dark transition-colors"
        >
          View published research
        </Link>
        <Link
          to="/insights"
          className="inline-block border border-gov-blue text-gov-blue font-semibold px-6 py-3 rounded-lg hover:bg-gov-blue/5 transition-colors"
        >
          Read our insights
        </Link>
      </section>

    </article>
  );
};
