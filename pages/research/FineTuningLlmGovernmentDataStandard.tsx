import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const MODEL = 'https://huggingface.co/fabsssss/qwen3-coder-30b-a3b-ies4';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/fine-tuning-llm-government-data-standard#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/fine-tuning-llm-government-data-standard',
  headline:
    'Teaching an open-source LLM a government information standard: from 94% hallucination to 1% | Tesseract Academy',
  description:
    'Tesseract Academy fine-tuned Qwen3-Coder-30B, an Apache-2.0 30-billion-parameter mixture-of-experts model, on IES4, the UK government Information Exchange Standard used across defence and national security data sharing. Term confabulation fell from 93.7% to 1.0% and IES4 term conformance rose from 0% to 88.6%, every number verified by closed-world vocabulary checks against the published ontology. Published openly on Hugging Face.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  about: {
    '@type': 'SoftwareApplication',
    name: 'IES4 fine-tuned language model',
    url: MODEL,
    applicationCategory: 'Machine learning model',
  },
  keywords:
    'LLM fine-tuning, IES4, Information Exchange Standard, controlled vocabulary, hallucination, evaluation harness, machine-verifiable ground truth, Qwen, open source, government data standards',
};

const RESULTS = [
  {
    metric: 'Term confabulation',
    base: '93.7%',
    tuned: '1.0%',
    note: 'generated standard terms that do not exist in IES4',
  },
  {
    metric: 'IES4 term conformance',
    base: '0%',
    tuned: '88.6%',
    note: 'outputs that use only real terms from the published standard',
  },
];

const APPROACH = [
  {
    item: 'Closed-world vocabulary verification',
    detail:
      'Every term the model generates is machine-checked against the actual vocabulary of the published IES4 ontology. A term either exists in the standard or it does not; there is no room for interpretation.',
  },
  {
    item: 'Machine-verifiable ground truth',
    detail:
      'The evaluation harness is built directly from the structured data of the standard itself, so the quality numbers are computed by deterministic checks, not scored by another language model or by human impression.',
  },
  {
    item: 'Open publication',
    detail:
      'The fine-tuned model is published openly on Hugging Face, so any public body can inspect it, reproduce the evaluation and hold the claims to account.',
  },
];

export const FineTuningLlmGovernmentDataStandard: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Case Study: AI for Government Data Standards
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Teaching an open-source LLM a government information standard: from 94% hallucination to 1%
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          We fine-tuned Qwen3-Coder-30B, an Apache-2.0 licensed 30-billion-parameter mixture-of-experts model, on IES4,
          the UK government's Information Exchange Standard used across defence and national security data sharing. The
          result, published openly on Hugging Face, shows what it takes to make a language model respect a controlled
          vocabulary: measurement, not assertion.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Term confabulation</p>
          <p className="text-3xl font-extrabold text-gov-dark">93.7% &rarr; 1.0%</p>
          <p className="text-sm text-gov-secondary mt-1">invented standard terms, near-eliminated</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Term conformance</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 &rarr; 88.6%</p>
          <p className="text-sm text-gov-secondary mt-1">outputs conforming to the IES4 vocabulary</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Published</p>
          <p className="text-3xl font-extrabold text-gov-dark">Openly</p>
          <p className="text-sm text-gov-secondary mt-1">model released on Hugging Face</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Regulators and public bodies increasingly want AI that works with their structured standards: controlled
            vocabularies, coded classifications and formal ontologies. The problem is that general-purpose language
            models do not respect them. Asked to produce data conformant to IES4, the UK government's Information
            Exchange Standard for defence and national security data sharing, an untuned open-source model invented
            standard terms that do not exist 93.7% of the time. In a standards context that failure mode is dangerous
            precisely because it looks plausible: fabricated terms sit alongside real ones and pass a casual read.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The question we set out to answer was practical. Can an open-source model be taught a specific government
            information standard well enough to be useful, and can the improvement be proven with machine checks rather
            than claimed on trust?
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What We Delivered</h2>
        <p className="text-gov-secondary leading-relaxed">
          Kampakis and Co, trading as Tesseract Academy, fine-tuned Qwen3-Coder-30B on IES4 and published the resulting
          model openly on Hugging Face. The distinctive part of the work is not the fine-tune itself but the
          verification discipline around it: every quality claim is backed by a deterministic, machine-run check against
          the published standard.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Principle</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">How it works</th>
              </tr>
            </thead>
            <tbody>
              {APPROACH.map((a, i) => (
                <tr key={a.item} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{a.item}</td>
                  <td className="px-4 py-3 text-gov-secondary">{a.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Results</h2>
          <p className="text-gov-dark leading-relaxed">
            Both numbers below are computed by the closed-world vocabulary verifier, which checks every generated term
            against the standard's actual vocabulary. They are measured, not estimated.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Metric</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Base model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fine-tuned</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.metric} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.metric}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.base}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.tuned}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <HBars
          title="Term confabulation fell from 93.7% to 1.0%, and IES4 term conformance rose from 0% to 88.6%."
          note="Both numbers are computed by the closed-world vocabulary verifier, which checks every generated term against the standard's actual vocabulary."
          max={100}
          labelWidth="w-64"
          rows={[
            { label: 'Term confabulation, base model', value: 93.7, display: '93.7%', color: CHART.amber },
            { label: 'Term confabulation, fine-tuned', value: 1.0, display: '1.0%', color: CHART.amber },
            { label: 'IES4 term conformance, base model', value: 0, display: '0%' },
            { label: 'IES4 term conformance, fine-tuned', value: 88.6, display: '88.6%' },
          ]}
        />
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          A fuller technical account, including the training-data construction and further conformance metrics, is in
          our research write-up:{' '}
          <Link to="/research/ies4-turtle-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">
            an open language model for IES4 data
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why This Matters for the Public Sector</h2>
          <p className="text-gov-dark leading-relaxed">
            Public bodies do not need AI that sounds fluent about their standards; they need AI whose outputs conform to
            them, and evidence that it does. The general capability demonstrated here is building evaluation harnesses
            with machine-verifiable ground truth derived from structured data: wherever an organisation has a controlled
            vocabulary, a coded classification or a formal schema, the same method turns "the model seems good" into a
            conformance number that anyone can recompute. That is the difference between quality that is asserted and
            quality that is engineered.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">
            "If a standard is machine-readable, then conformance to it is machine-checkable, and there is no excuse for
            taking an AI system's quality on faith. We measure it, we engineer it, and we publish the result so others
            can check our work."
          </p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">
            Fabio Rovai, Tesseract Academy
          </cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">The model, published openly</p>
          <p className="text-sm text-gov-secondary mt-1">
            Inspect the fine-tuned model on Hugging Face, or read the full technical write-up.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={MODEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            Model on Hugging Face <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            to="/research/ies4-turtle-language-model"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            Technical write-up
          </Link>
        </div>
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
    </article>
  );
};
