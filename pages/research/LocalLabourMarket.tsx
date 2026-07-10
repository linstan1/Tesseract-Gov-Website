import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-local-labour-market';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-local-labour-market';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/local-labour-market#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/local-labour-market',
  headline: 'The most timely local labour-market signal, tidied for every authority | Tesseract Academy',
  description:
    'An open dataset of the latest monthly claimant count for all 374 local authorities in Great Britain, from the ONS via NOMIS. Claimant rate ranges from 1.1 to 10.1 percent against a 3.5 percent mean. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: { '@type': 'Dataset', name: 'UK Local Labour-Market Indicators', url: HF, license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/' },
  keywords: 'labour market, claimant count, unemployment, employability, local skills, ONS, NOMIS, local authority, employment support, skills bootcamps, open data',
};

const TILES = [
  { n: '374', l: 'local authorities' },
  { n: '3.5%', l: 'national mean claimant rate' },
  { n: '1.1–10.1%', l: 'range across authorities' },
  { n: 'Monthly', l: 'update frequency' },
];

export const LocalLabourMarket: React.FC = () => (
  <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <header>
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Research
      </Link>
      <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Skills &amp; Labour Market</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">The most timely local labour-market signal, tidied for every authority</h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Employability programmes, skills bootcamps and local growth plans all have to target the right places, and the question &ldquo;where is the labour market tightest right now&rdquo; has a monthly answer in the claimant count. It is open, but it is delivered through a query builder few outside statistics teams use. This tidies it into one comparable indicator per authority.
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
          Devolution is pushing employment and skills funding down to combined authorities and councils, from the <a href="https://www.gov.uk/government/collections/local-skills-improvement-plans" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Local Skills Improvement Plans</a> to the reformed adult-skills settlement and Connect to Work. Every one of those programmes has to evidence local need and target the right places, and the timeliest evidence is the monthly claimant count published by the ONS. It is fully open through <a href="https://www.nomisweb.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">NOMIS</a>, and just awkward enough to reach that it usually is not.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method, and its honest scope</h2>
        <p className="text-gov-dark leading-relaxed">
          We pull the latest month of the ONS Claimant Count from the NOMIS API for every local authority district and record two figures per authority: the count, and the claimant rate as a share of residents aged 16 to 64. It is a single, timely indicator, not a full labour-market model: the claimant count tracks people claiming unemployment-related benefits, which is a leading signal rather than the whole picture of worklessness. Its value is currency and coverage, a like-for-like reading for all 374 authorities, refreshed monthly.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The spread is wide: from <strong>1.1%</strong> in the tightest local markets to <strong>10.1%</strong> in Birmingham, against a national mean of <strong>3.5%</strong>, with Barking and Dagenham and Haringey next at 7.7%. That range is exactly what a place-based programme needs to see before it decides where to act.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
        <p className="text-gov-dark leading-relaxed">
          The same NOMIS pipeline extends to employment and economic-activity rates, to a monthly time series for trend, and to a join with our <Link to="/research/skills-england-esco-crosswalk" className="text-gov-blue underline hover:text-gov-blue-dark">skills and occupation work</Link> to connect where the labour market is slack to which skills pathways could relieve it. It is the labour-market half of a picture whose other half is skills supply.
        </p>
        <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
          Independent, self-initiated open research. Contains ONS data &copy; Crown copyright, via NOMIS, licensed under the Open Government Licence v3.0.
        </p>
      </div>
    </section>

    <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-gov-dark">Explore the dataset</p>
        <p className="text-sm text-gov-secondary mt-1">Claimant count and rate for all 374 authorities, and the reproducible build.</p>
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
