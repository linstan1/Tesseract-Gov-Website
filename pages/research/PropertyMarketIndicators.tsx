import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-property-market-indicators';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-property-market-indicators';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/property-market-indicators#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/property-market-indicators',
  headline: 'What a year of transactions says about every local housing market | Tesseract Academy',
  description:
    'An open, reproducible set of residential property-market indicators for all 318 local authorities in England and Wales, derived from HM Land Registry Price Paid Data: median and quartile prices, transaction volume, new-build and leasehold share, and property-type mix. Built from open data under the Open Government Licence, published on GitHub and Hugging Face.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'UK Local-Authority Property-Market Indicators',
    url: HF,
    license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  },
  keywords:
    'property market, house prices, HM Land Registry, Price Paid Data, local housing market, stock condition, strategic housing market assessment, local plan evidence base, housing need, open data, local authority',
};

const TILES = [
  { n: '318', l: 'local authorities covered' },
  { n: '760,607', l: 'standard 2025 transactions' },
  { n: '10', l: 'indicators per authority' },
  { n: '£135k–£1.16m', l: 'range of local median prices' },
];

const INDICATORS = [
  { name: 'Transaction volume', detail: 'Count of standard price-paid (open-market) residential sales in the authority in the year.' },
  { name: 'Median & quartile price', detail: 'The median, lower-quartile and upper-quartile sale price, so the spread of a market is visible, not just its midpoint.' },
  { name: 'New-build share', detail: 'Share of transactions that are new-build, an indicator of where supply is actually being added.' },
  { name: 'Leasehold share', detail: 'Share of transactions sold leasehold, a proxy for the flatted and managed-estate segment.' },
  { name: 'Property-type mix', detail: 'The split across detached, semi-detached, terraced, flat and other, the shape of the local stock that trades.' },
];

export const PropertyMarketIndicators: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Housing &amp; Property Data</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          What a year of transactions says about every local housing market
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Local authorities are asked, again and again, to evidence their housing market: for a local plan, a strategic housing market assessment, a stock-condition programme, a viability study. The raw material is open and national, but it arrives as fourteen unlabelled columns and nine hundred thousand rows. This is a small, reproducible step that turns that raw material into a comparable indicator per authority, and is honest about what it can and cannot say.
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
            The evidence bar under local housing decisions keeps rising. The <a href="https://www.gov.uk/government/publications/national-planning-policy-framework--2" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">National Planning Policy Framework</a> requires plans to rest on adequate, up-to-date and proportionate evidence of housing need and market conditions; the standard method for assessing local housing need and every strategic housing market assessment lean on transaction and price data. Stock-condition programmes, private-rented-sector databases and tenant-insight work all begin from the same question: what does this local market actually look like, and how does it compare to its neighbours?
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            HM Land Registry publishes the answer in the <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Price Paid Data</a>, openly, under the Open Government Licence. What is missing is not the data; it is the last mile that makes it comparable.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: aggregate honestly, attribute cleanly</h2>
          <p className="text-gov-dark leading-relaxed">
            Every standard transaction in the 2025 Price Paid file carries a local-authority district, so each sale is attributed to its authority directly, with no postcode lookup to introduce error. We count only <strong>standard price-paid transactions</strong> (the category that excludes repossessions and bulk or non-market transfers), then compute ten indicators per authority. The build is a single script over the open CSV; anyone can re-run it and get the same numbers.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Indicator</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it captures</th>
              </tr>
            </thead>
            <tbody>
              {INDICATORS.map((d, i) => (
                <tr key={d.name} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{d.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{d.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What it is, and what it is not</h2>
          <p className="text-gov-dark leading-relaxed">
            This is a market <em>activity</em> indicator set: what sold, and for how much, in the open market this year. It is deliberately not a dwelling-stock census. It says nothing about homes that did not transact, and a low-volume authority will have a noisier median than a high-volume one. Stating that plainly is the point: an indicator you can trust is one whose limits are on the label. The transaction count sits next to every price precisely so a user can judge how much weight the median will bear.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            The same pipeline extends cleanly: multiple years for a time series, lower-quartile-price-to-earnings for an affordability ratio, or a join to deprivation and stock data for a fuller market picture. It is the property-market companion to our <Link to="/research/welsh-government-land-valuation" className="text-gov-blue underline hover:text-gov-blue-dark">Welsh Government land-valuation research</Link>, which tested valuation methods across 1,916 Welsh geographies; both start from the same conviction that land and property questions should be answered from open data, reproducibly.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research built entirely from public data. Contains HM Land Registry data &copy; Crown copyright and database right 2026, licensed under the Open Government Licence v3.0. Not endorsed by HM Land Registry.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the open dataset</p>
          <p className="text-sm text-gov-secondary mt-1">Indicators for all 318 authorities as CSV and JSON, plus the reproducible build.</p>
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
