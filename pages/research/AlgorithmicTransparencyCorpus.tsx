import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-algorithmic-transparency';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-algorithmic-transparency';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/algorithmic-transparency-corpus#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/algorithmic-transparency-corpus',
  headline: 'The closest thing to a public register of government AI, as a corpus | Tesseract Academy',
  description:
    'The full set of 136 published UK Algorithmic Transparency Recording Standard (ATRS) records, structured as an open corpus: which of 73 public bodies have disclosed which algorithmic and AI tools. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: { '@type': 'Dataset', name: 'UK Algorithmic Transparency Corpus', url: HF, license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/' },
  keywords: 'algorithmic transparency, ATRS, AI governance, responsible AI, public sector AI, AI ethics, algorithmic accountability, AI Act, government AI, open data',
};

const TILES = [
  { n: '136', l: 'ATRS records' },
  { n: '73', l: 'distinct public bodies' },
  { n: 'DSIT, DWP', l: 'most disclosures' },
  { n: 'OGL v3.0', l: 'open licence' },
];

const BODIES = [
  { b: 'DSIT', n: 6 }, { b: 'DWP', n: 6 }, { b: 'Money and Pensions Service', n: 5 },
  { b: 'DfE', n: 5 }, { b: 'DESNZ', n: 5 }, { b: 'DBT', n: 5 },
];

export const AlgorithmicTransparencyCorpus: React.FC = () => {
  const max = Math.max(...BODIES.map((b) => b.n));
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: AI Governance</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">The closest thing to a public register of government AI, as a corpus</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The UK now asks its public bodies to publish how they use algorithmic and AI tools in decisions that affect people. The result, the Algorithmic Transparency Recording Standard, is the nearest thing to a public register of government AI. It is published one record at a time, which makes the individual disclosures visible but the pattern invisible. This assembles the whole set into one corpus.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TILES.map((t) => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-xl font-bold text-gov-dark">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            Transparency about public-sector AI has moved from aspiration to expectation. The <a href="https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Algorithmic Transparency Recording Standard</a>, developed by DSIT and the Central Digital and Data Office, is now the mechanism by which departments and arm&rsquo;s-length bodies disclose the algorithmic tools they use, and its use is being extended across government. Alongside the frameworks that govern this space, the EU AI Act, ISO&nbsp;42001, the NIST AI RMF, the ATRS is where UK practice becomes visible. Reading it as a whole is how you see where government AI actually is.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: assemble the register</h2>
          <p className="text-gov-dark leading-relaxed">
            We harvested every published ATRS record from GOV.UK and structured each one: the publishing body, the tool, its description and its date. What was 136 separate pages becomes a single dataset spanning <strong>73 distinct public bodies</strong>, led by DSIT, DWP, the Money and Pensions Service, DfE, DESNZ and DBT. The corpus makes answerable the questions no single record can: which parts of government are most transparent, which kinds of tools recur, and how disclosure is spreading.
          </p>
        </div>
        <div className="space-y-2">
          {BODIES.map((e) => (
            <div key={e.b} className="flex items-center gap-3">
              <div className="w-56 text-sm text-gov-dark flex-shrink-0">{e.b}</div>
              <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${(e.n / max) * 100}%` }} />
              </div>
              <div className="w-8 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.n}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gov-secondary/90">Public bodies with the most ATRS disclosures.</p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            Captured over time, the corpus becomes a live index of government AI adoption and transparency, the base for a disclosure-growth measure and for classifying tools by risk and function. It is the public-register companion to Tesseract&rsquo;s AI-governance work and to our <a href="https://github.com/fabio-rovai/open-governance" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open AI-governance tooling</a>: transparency is only useful when someone reads the whole of it.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Contains public sector information licensed under the Open Government Licence v3.0.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the corpus</p>
          <p className="text-sm text-gov-secondary mt-1">All 136 ATRS records structured, and the reproducible harvester.</p>
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
