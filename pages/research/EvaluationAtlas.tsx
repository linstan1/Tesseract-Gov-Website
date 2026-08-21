import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/uk-evaluation-atlas';
const HF = 'https://huggingface.co/datasets/fabsssss/uk-evaluation-atlas';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/evaluation-evidence-atlas#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/evaluation-evidence-atlas',
  headline: 'What government evaluates, and how openly it says so | Tesseract Academy',
  description:
    'An open atlas of 1,770 UK government evaluation publications, harvested from the GOV.UK Search API and classified by evaluation type and declared method. Impact evaluations dominate, but only 11 percent declare a recognisable method in their metadata. Published on GitHub and Hugging Face under the Open Government Licence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'UK Government Evaluation Evidence Atlas',
    url: HF,
    license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  },
  keywords:
    'evaluation, Magenta Book, Evaluation Task Force, impact evaluation, process evaluation, value for money, Government Social Research, monitoring and evaluation, evidence synthesis, evaluation methods, open data',
};

const TILES = [
  { n: '1,770', l: 'evaluation publications' },
  { n: '886', l: 'impact evaluations' },
  { n: '11%', l: 'declare a method in metadata' },
  { n: '1996–2026', l: 'years covered' },
];

const TYPES = [
  { t: 'Impact', n: 886 },
  { t: 'Process', n: 391 },
  { t: 'Mixed', n: 139 },
  { t: 'Feasibility', n: 108 },
  { t: 'Economic', n: 91 },
  { t: 'Evidence synthesis', n: 67 },
  { t: 'Unclear', n: 88 },
];

export const EvaluationAtlas: React.FC = () => {
  const max = Math.max(...TYPES.map((t) => t.n));
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Evaluation Methods</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          What government evaluates, and how openly it says so
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Government publishes a great deal of evaluation, and asks suppliers to build on it. But the published record has never been mapped as a whole: what kinds of evaluation dominate, who commissions them, and how clearly they state their own methods. This is a first pass at that map, built from open data, and one number in it is uncomfortable.
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
            The centre of government keeps raising the evidential bar behind spending. The <a href="https://www.gov.uk/government/organisations/evaluation-task-force/about" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Evaluation Task Force</a> now presses departments not just to evaluate but to let the evidence shape what is continued or stopped, with the <a href="https://www.gov.uk/government/publications/the-magenta-book" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Magenta Book</a> as the standard. Suppliers are routinely asked to ground bids in the existing evaluation evidence base. Doing that well requires knowing the shape of that base, and it is exactly what no one publishes.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: classify what the catalogue shows</h2>
          <p className="text-gov-dark leading-relaxed">
            We harvested every GOV.UK publication of type <em>research</em> and <em>independent report</em> whose title declares it an evaluation, then classified each by evaluation type and by any method its metadata names. Classification is from the <strong>title and description only</strong>, the publication's own framing, by a locally hosted open-weights model: it measures how evaluations present themselves in the public catalogue, which is what a searcher or an automated evidence-synthesis tool sees first.
          </p>
        </div>
        <div className="space-y-2">
          {TYPES.map((e) => (
            <div key={e.t} className="flex items-center gap-3">
              <div className="w-40 text-sm text-gov-dark flex-shrink-0">{e.t}</div>
              <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${(e.n / max) * 100}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.n}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The uncomfortable number</h2>
          <p className="text-gov-dark leading-relaxed">
            Impact evaluations dominate the record, which is what the Magenta Book agenda would predict. But only <strong>11%</strong> of these publications declare a recognisable method in their title or description. Where a method is named, qualitative and survey/monitoring designs lead; a randomised design is named in just nineteen. That is not a claim that the methods are absent from the reports, they are surely inside the PDFs, but it is a claim that the catalogue itself is largely method-blind: an automated reader, or a hurried human, cannot tell a robust impact study from a light-touch one without opening every file. The largest commissioners are DfID, the Department for Education and the Department for Work and Pensions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            The atlas is the corpus companion to our <Link to="/research/victim-witness-evaluation" className="text-gov-blue underline hover:text-gov-blue-dark">machine-checkable Theory-of-Change method</Link>: one measures how the evaluation estate presents itself, the other shows how a single evaluation's logic can be made auditable. Extended, it supports evidence-gap mapping by policy area and a method-transparency indicator per department, the raw material for a searchable evaluation evidence base.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Contains public sector information licensed under the Open Government Licence v3.0. Classification is automated and metadata-based; it describes how publications present themselves, not an audit of their contents.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the atlas</p>
          <p className="text-sm text-gov-secondary mt-1">1,770 classified publications as CSV, the summary breakdowns, and the reproducible pipeline.</p>
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
