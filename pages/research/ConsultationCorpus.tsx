import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-consultation-corpus';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-consultation-corpus';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/consultation-corpus#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/consultation-corpus',
  headline: 'Every government consultation that reached an outcome, as one corpus | Tesseract Academy',
  description:
    'An open, structured corpus of 6,260 UK government consultations with a published outcome, harvested from the GOV.UK APIs and coded by policy area. 98 percent carry policy-area coding; only 77 percent attach response documents to their outcome. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'UK Government Consultation Corpus',
    url: HF,
    license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  },
  keywords:
    'public consultation, consultation analysis, response coding, public engagement, deliberative methods, Gunning principles, consultation response, policy area, open data, text analysis',
};

const TILES = [
  { n: '6,260', l: 'consultations with published outcome' },
  { n: '98%', l: 'coded by policy area' },
  { n: '77%', l: 'attach response documents' },
  { n: '4.1', l: 'average attachments each' },
];

const AREAS = [
  { a: 'UK economy', n: 366 },
  { a: 'Access to the countryside', n: 274 },
  { a: 'Low carbon technologies', n: 179 },
  { a: 'Climate change and energy', n: 171 },
  { a: 'National Health Service', n: 142 },
  { a: 'Business and industry', n: 141 },
  { a: 'Local government', n: 132 },
  { a: 'Crime, justice and law', n: 117 },
];

export const ConsultationCorpus: React.FC = () => {
  const max = Math.max(...AREAS.map((a) => a.n));
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Public Engagement</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Every government consultation that reached an outcome, as one corpus
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Government runs thousands of public consultations and publishes their outcomes, but the estate has never been assembled as a single, queryable corpus: who consults, on what, and whether they publish what they heard back. This builds that corpus from open data, and finds that closing the loop is less universal than the outcome pages suggest.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TILES.map((t) => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-2xl font-bold text-gov-dark tabular-nums font-mono">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            Consultation is a legal and democratic obligation, not a courtesy. The <a href="https://www.gov.uk/government/publications/consultation-principles-guidance" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Cabinet Office Consultation Principles</a> and the common-law Gunning principles require that consultation responses are conscientiously taken into account, and public bodies increasingly want to analyse large volumes of responses quickly and defensibly, with AI-assisted coding now on the table. Every one of those ambitions needs a structured view of the consultation estate to sample, benchmark and evaluate against. That view did not exist as open data.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: harvest, then use government's own coding</h2>
          <p className="text-gov-dark leading-relaxed">
            We harvested every GOV.UK consultation that has reached a published outcome, then pulled structured detail for each from the Content API: opening and closing dates, department, whether response documents are attached, and GOV.UK's own policy-area taxonomy. That last point matters: <strong>98%</strong> of consultations are already coded by policy area by government itself, so the domain layer needs no guessing. The corpus is the map; the response texts stay on the linked GOV.UK pages.
          </p>
        </div>
        <div className="space-y-2">
          {AREAS.map((e) => (
            <div key={e.a} className="flex items-center gap-3">
              <div className="w-48 text-sm text-gov-dark flex-shrink-0">{e.a}</div>
              <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${(e.n / max) * 100}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.n}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gov-secondary/90">Most consulted-on policy areas across the corpus.</p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Closing the loop, or not</h2>
          <p className="text-gov-dark leading-relaxed">
            Every consultation here has a published outcome page, yet only <strong>77%</strong> attach response documents to it. Nearly a quarter close with an outcome that carries no published response analysis at all. Defra, the Department for Transport and MHCLG are the most prolific consulting bodies; the busiest subjects are the UK economy, access to the countryside, and low-carbon energy. Whether a consultation publishes its response is now a measurable property, not an impression.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            As a corpus frame it is the sampling and benchmarking base for consultation-response coding and automated summarisation: pick a policy area, draw a stratified sample, and test a coding approach against a known population rather than an ad-hoc handful. It sits alongside our applied public-engagement work and our <Link to="/research/nature-governance-graph" className="text-gov-blue underline hover:text-gov-blue-dark">nature-governance graph</Link>, both built on the same conviction that the machinery of government should be legible as open, structured data.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Contains public sector information licensed under the Open Government Licence v3.0.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the corpus</p>
          <p className="text-sm text-gov-secondary mt-1">6,260 consultations as CSV with policy-area coding, plus the reproducible harvester.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a href={HF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">Dataset <ExternalLink className="w-4 h-4" /></a>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-border text-gov-dark text-sm font-semibold rounded-lg hover:bg-white transition-colors whitespace-nowrap">GitHub <ExternalLink className="w-4 h-4" /></a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </article>
  );
};
