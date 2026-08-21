import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/fca-warnings-observatory';
const HF = 'https://huggingface.co/datasets/fabsssss/fca-warnings-observatory';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/fca-warnings-observatory#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/fca-warnings-observatory',
  headline: 'A live list with no memory: reconstructing the FCA scam-warning signal | Tesseract Academy',
  description:
    'The FCA warning list of unauthorised firms shows only the current set with no history. This open dataset reconstructs it as a monthly time series from 18,224 live warning pages: FCA warnings rose nearly four-fold from around 500 a year in 2019 to roughly 1,900 across 2022 to 2025, with 18 percent flagging clone firms. Published on GitHub and Hugging Face.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'FCA Warning-List Observatory',
    url: HF,
  },
  keywords:
    'FCA, warning list, unauthorised firms, clone firms, investment fraud, scams, consumer protection, financial promotions, fraud prevention, romance fraud, time series, open data',
};

const YEARS: Array<[string, number]> = [
  ['2016', 1029], ['2017', 276], ['2018', 506], ['2019', 495], ['2020', 600],
  ['2021', 806], ['2022', 1616], ['2023', 1955], ['2024', 1893], ['2025', 1903],
];

const TILES = [
  { n: '18,224', l: 'live warning pages' },
  { n: '15,437', l: 'dated warnings' },
  { n: '~4×', l: 'rise 2019 to 2023' },
  { n: '18.3%', l: 'flag clone firms' },
];

export const FcaWarningsObservatory: React.FC = () => {
  const max = Math.max(...YEARS.map(([, n]) => n));
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Consumer Protection</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          A live list with no memory
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The FCA warns the public about unauthorised and scam firms through a warning list. It is a genuinely useful public safety tool, and it has one structural blind spot: it shows only the firms flagged right now. There is no history, so the trend, the very thing that tells you whether the scam problem is growing, is invisible. This reconstructs that trend from the list itself.
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
            Fraud is now the most common crime in England and Wales, and investment and romance fraud sit at the sharp end of it. The FCA has been handed stronger duties to match: it gained a role in the <a href="https://www.gov.uk/government/publications/online-safety-act-2023" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">financial-promotions regime for illegal content</a>, and its <a href="https://www.fca.org.uk/consumers/warning-list-unauthorised-firms" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">warning list</a> is a front-line signal of where consumer harm is emerging. Public bodies designing fraud-prevention services, and anyone building detection tooling, need to know the shape and direction of that signal. The list holds the answer but discards it daily.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: give the list a memory</h2>
          <p className="text-gov-dark leading-relaxed">
            Every live warning has its own page, and each page carries a machine-readable publication date. We took the FCA's public sitemap, which lists all <strong>18,224</strong> live warning pages, fetched each with a polite crawl, read its published date, and flagged clone firms from the page text. Aggregated by month, the live list becomes a warnings-published time series.
          </p>
        </div>
        <div className="bg-white border border-gov-border/50 rounded-xl p-5 sm:p-6">
          <div className="flex items-end gap-2 h-52" role="img" aria-label="FCA warnings published per year, rising from a few hundred in 2017-2019 to around 1,900 in 2022-2025.">
            {YEARS.map(([y, n]) => (
              <div key={y} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-[10px] text-gov-secondary tabular-nums mb-1">{n}</span>
                <div className="w-full bg-gov-blue/80 rounded-t" style={{ height: `${(n / max) * 100}%` }} />
                <span className="text-[10px] text-gov-secondary mt-1">{y}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gov-secondary/90 mt-3">FCA warnings published per year (live pages, dated from page metadata).</p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What the series shows</h2>
          <p className="text-gov-dark leading-relaxed">
            The signal is unambiguous. FCA warnings ran at a few hundred a year through the late 2010s, then climbed steeply to <strong>1,616 in 2022</strong> and around <strong>1,900 a year</strong> across 2023 to 2025, a near four-fold increase on 2019. Just under a fifth of all warnings flag <em>clone firms</em>, scammers cloning a genuine authorised business, one of the hardest frauds for a consumer to spot. This is the growth curve a fraud-prevention strategy is implicitly betting on, made explicit.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Honest about scope</h2>
          <p className="text-gov-dark leading-relaxed">
            This is a reconstruction of a <em>live</em> list, not a historical archive. Every record is a warning currently on the FCA site; warnings the FCA has since removed are not captured, so recent years are represented more completely than distant ones, and the early tail understates reality. It is a research reconstruction of a public signal, not an official FCA statistic. Stating that boundary is what makes the trend usable rather than misleading.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            Captured on a schedule, the observatory becomes a genuine longitudinal record rather than a one-off snapshot, and supports emerging-threat detection: spikes in clone activity, or in a named sector, as they happen. It complements our applied work on financial vulnerability, including the <Link to="/research/kalgera-financial-vulnerability" className="text-gov-blue underline hover:text-gov-blue-dark">Kalgera early-warning research</Link>, where the same instinct applies: harm signals are far more useful as a series than as a snapshot.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research reconstructed from public FCA warning-list pages. Not affiliated with or endorsed by the FCA.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the observatory</p>
          <p className="text-sm text-gov-secondary mt-1">Monthly time series, clone-firm share, and the reproducible crawler.</p>
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
