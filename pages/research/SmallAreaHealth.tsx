import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-small-area-health';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-small-area-health';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/small-area-health-profile#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/small-area-health-profile',
  headline: 'The baseline a local health survey should be read against | Tesseract Academy',
  description:
    'An open small-area health profile for all 331 local authorities in England and Wales, combining Census 2021 self-reported general health, disability and unpaid care. Self-reported bad health ranges from 2.7 to 9.6 percent. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: { '@type': 'Dataset', name: 'UK Small-Area Health Profile (Census 2021)', url: HF, license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/' },
  keywords: 'public health, self-rated health, health inequality, Census 2021, disability, unpaid care, health and wellbeing survey, population health, JSNA, harmonised questions, open data',
};

const TILES = [
  { n: '331', l: 'local authorities' },
  { n: '3', l: 'Census health measures' },
  { n: '2.7–9.6%', l: 'range of bad/very-bad health' },
  { n: 'Full pop.', l: 'not a sample' },
];

export const SmallAreaHealth: React.FC = () => (
  <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <header>
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Research
      </Link>
      <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Population Health</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">The baseline a local health survey should be read against</h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        When a council commissions a health-and-wellbeing survey, it asks residents to rate their own health, the same question the Census already asks the whole population. A survey read on its own is a number in a vacuum; read against the census baseline for that authority, it becomes a comparison. This assembles that baseline for every local authority.
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
          Local authorities carry a statutory duty to understand their population&rsquo;s health through the <a href="https://www.gov.uk/government/publications/joint-strategic-needs-assessment-and-joint-health-and-wellbeing-strategies-explained" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Joint Strategic Needs Assessment</a>, and many run their own adult health-and-wellbeing surveys to do it. Those surveys lean on standard harmonised questions, and self-rated general health, a single item that predicts mortality and service use remarkably well, is among the most common. The <a href="https://www.ons.gov.uk/census" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Census 2021</a> asks the whole population that exact question. The baseline exists; it just is not laid out per authority ready to compare against.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: a full-population anchor</h2>
        <p className="text-gov-dark leading-relaxed">
          We pull three Census 2021 measures for every local authority in England and Wales, self-reported general health, disability under the Equality Act, and provision of unpaid care, and combine them into one profile per authority. Because it is the census, this is the whole population, not a sample: it carries no sampling error and reaches every small area, which is exactly what makes it the right thing to read a local survey against.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The gradient is stark and familiar. Self-reported bad or very-bad health runs from <strong>2.7%</strong> in the healthiest authorities to <strong>9.6%</strong> in Blaenau Gwent, with Merthyr Tydfil (9.4%) and Blackpool (9.1%) close behind, the geography of health inequality, made measurable and comparable per authority alongside disability and unpaid-care prevalence.
        </p>
      </div>
      <HBars
        title="Self-reported bad or very-bad health runs from 2.7% in the healthiest authorities to 9.6% in Blaenau Gwent."
        note="Merthyr Tydfil (9.4%) and Blackpool (9.1%) are close behind. Because it is the census, these figures cover the whole population, not a sample."
        max={100}
        labelWidth="w-56"
        rows={[
          { label: 'Blaenau Gwent', value: 9.6, display: '9.6%' },
          { label: 'Merthyr Tydfil', value: 9.4, display: '9.4%' },
          { label: 'Blackpool', value: 9.1, display: '9.1%' },
          { label: 'Healthiest authorities', value: 2.7, display: '2.7%', color: CHART.gray },
        ]}
      />
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
        <p className="text-gov-dark leading-relaxed">
          Held next to a commissioned survey, the census baseline turns a raw local figure into a finding: better or worse than the population, and by how much. Extended, the same profile joins to deprivation and to our <Link to="/research/property-market-indicators" className="text-gov-blue underline hover:text-gov-blue-dark">local property-market indicators</Link> to place health need in its economic context, the kind of combined evidence base a needs assessment or a targeting decision actually runs on.
        </p>
        <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
          Independent, self-initiated open research. Contains ONS data &copy; Crown copyright and database right 2023, via NOMIS, licensed under the Open Government Licence v3.0.
        </p>
      </div>
    </section>

    <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-gov-dark">Explore the profile</p>
        <p className="text-sm text-gov-secondary mt-1">Health, disability and unpaid care for all 331 authorities, and the reproducible build.</p>
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
