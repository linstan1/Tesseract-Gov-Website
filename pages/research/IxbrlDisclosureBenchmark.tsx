import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/ixbrl-disclosure-benchmark';
const HF = 'https://huggingface.co/datasets/fabsssss/ixbrl-disclosure-benchmark';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/ixbrl-disclosure-benchmark#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/ixbrl-disclosure-benchmark',
  headline: 'How machine-readable are UK company accounts, really? | Tesseract Academy',
  description:
    'An open benchmark that parses a full day of Companies House Inline XBRL accounts filings and measures what fraction of real filings expose each core accounting concept as a structured, machine-readable fact. 8,856 filings, 899 concepts; core balance-sheet concepts exposed in 73 to 97 percent of filings. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'iXBRL Structured-Disclosure Benchmark',
    url: HF,
    license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  },
  keywords:
    'XBRL, iXBRL, structured data, financial reporting, Companies House, AI-driven reporting, digital reporting, machine-readable accounts, FRC, benchmarking, structured financial data, open data',
};

const EXPOSURE = [
  { c: 'Equity', pct: 97.2 },
  { c: 'Net assets / liabilities', pct: 86.6 },
  { c: 'Creditors', pct: 75.6 },
  { c: 'Total assets less current liabilities', pct: 73.3 },
  { c: 'Current assets', pct: 72.6 },
  { c: 'Property, plant & equipment', pct: 61.9 },
  { c: 'Debtors', pct: 28.0 },
];

const TILES = [
  { n: '8,856', l: 'real filings parsed' },
  { n: '899', l: 'distinct taxonomy concepts' },
  { n: '49', l: 'median tagged facts per filing' },
  { n: '97.2%', l: 'expose Equity as a machine-readable fact' },
];

export const IxbrlDisclosureBenchmark: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Structured Reporting</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          How machine-readable are UK company accounts, really?
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          "Structured data beats PDF for AI-driven reporting" is now received wisdom in regulatory circles. It is also rarely measured. This is a small, open benchmark that asks the empirical version of the question: across the accounts that companies actually file, what fraction expose each core figure as a structured fact a machine can read without guessing?
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TILES.map((t) => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-2xl font-bold text-gov-dark tabular-nums">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            Digital, structured reporting is the settled direction of UK financial regulation. Companies House already receives company accounts as <a href="https://www.gov.uk/government/publications/company-accounts-guidance" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Inline XBRL</a>, where every figure is machine-tagged to a UK-GAAP or IFRS taxonomy concept, and its <a href="https://www.gov.uk/government/news/changes-to-uk-company-law" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">transition to software-only filing</a> under the Economic Crime and Corporate Transparency Act will make full tagging universal. The Financial Reporting Council and others increasingly ask what structured data makes newly possible for analysis, assurance and AI. That question has an empirical premise that usually goes unchecked: how much of a real filing is genuinely structured today?
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: measure exposure, per concept</h2>
          <p className="text-gov-dark leading-relaxed">
            We took one day of the open Companies House accounts bulk archive, parsed every Inline XBRL filing, and recorded which taxonomy concepts each one exposes as a tagged fact. The benchmark quantity is <strong>concept exposure</strong>: the share of filings in which a given accounting concept appears as a structured fact an automated reader could consume with no OCR and no layout heuristics. That is the quantity the "structured beats PDF" claim actually rests on, not that data <em>could</em> be structured, but that in the filed population it already <em>is</em>, at a measurable rate that differs sharply by concept.
          </p>
        </div>
        <div className="space-y-2">
          {EXPOSURE.map((e) => (
            <div key={e.c} className="flex items-center gap-3">
              <div className="w-56 text-sm text-gov-dark flex-shrink-0">{e.c}</div>
              <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${e.pct}%` }} />
              </div>
              <div className="w-14 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.pct}%</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gov-secondary/90">Share of the 8,856 parsed filings exposing each core concept as a machine-readable fact.</p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What the numbers say</h2>
          <p className="text-gov-dark leading-relaxed">
            The core of the balance sheet is genuinely structured: equity is exposed as a machine-readable fact in <strong>97%</strong> of filings, net assets in <strong>87%</strong>, creditors and total-assets-less-current-liabilities in the mid-70s. The tail falls away fast, and unevenly: debtors, a concept many analysts would assume is always present, appears as a tagged fact in only <strong>28%</strong>. That unevenness is the finding. A system that assumes every concept is uniformly available will silently fail on the ones that are not; a system built on the measured exposure profile will not.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            The same parser scales to the full daily and monthly archives for a longitudinal exposure profile, and extends to value-level extraction and cross-taxonomy comparison. It complements our work on machine-readable public data, from the <Link to="/research/wastewater-effluent-data-quality" className="text-gov-blue underline hover:text-gov-blue-dark">quality of continuous environmental monitoring</Link> to open ontologies: in every case the useful question is not whether data could be structured in principle, but how far it is structured in the records that already exist.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Contains public sector information from Companies House licensed under the Open Government Licence v3.0. Not endorsed by Companies House or the FRC.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the benchmark</p>
          <p className="text-sm text-gov-secondary mt-1">Concept-exposure table, per-filing data, and the reproducible parser.</p>
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
