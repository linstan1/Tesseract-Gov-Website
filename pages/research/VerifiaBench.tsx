import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/verifiabench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/verifiable-scientific-llm-benchmark#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/verifiable-scientific-llm-benchmark',
  headline: 'Fluency is saturated, correctness is not: an un-game-able scientific-LLM benchmark | Tesseract Academy',
  description:
    'verifiabench grades LLM scientific-workflow output with a closed-world oracle (term existence + structure, no LLM judge) instead of fluency. Across five open models, raw capability saturates at 1.00 while verified capability ranges from 0.00 to 1.00 on the same tasks: two models produce fluent Biolink RDF that invents half its terms, one gets every term real.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'verifiabench',
    codeRepository: 'https://github.com/fabio-rovai/open-ontologies',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords: 'LLM benchmark, scientific AI, closed-world verification, hallucination, Biolink, ontology, evaluation, RDF, un-game-able, reliability',
};

const BOARD = [
  { m: 'Qwen3-Coder-30B-A3B (8bit)', raw: '1.00', ver: '1.00', ex: '1.00', fake: '0' },
  { m: 'Qwen2.5-3B', raw: '1.00', ver: '0.00', ex: '0.51', fake: '65' },
  { m: 'Llama-3.2-3B', raw: '1.00', ver: '0.00', ex: '0.51', fake: '49' },
  { m: 'gemma-2-2b', raw: '0.23', ver: '0.00', ex: '0.06', fake: '21' },
  { m: 'Qwen2.5-0.5B', raw: '0.00', ver: '0.00', ex: '0.00', fake: '0' },
];

export const VerifiaBench: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Foundational Research: Trustworthy Scientific AI
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Fluency is saturated. Correctness is not.
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Most benchmarks for LLMs on scientific tasks grade the answer with string match or an LLM judge, and both reward a confident, well-formed answer. So a model that emits a plausible-but-nonexistent gene, ontology class or predicate scores as correct. Grade the same output with a closed-world oracle instead, every term has to actually exist, and the picture inverts: models that look equally fluent turn out to be right anywhere from 0% to 100% of the time.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Fluency (raw)</p>
          <p className="text-3xl font-extrabold text-gov-dark">saturated</p>
          <p className="text-sm text-gov-secondary mt-1">1.00 for three of five models</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Verified capability</p>
          <p className="text-3xl font-extrabold text-gov-dark">0.00 &ndash; 1.00</p>
          <p className="text-sm text-gov-secondary mt-1">on the identical tasks</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Oracle</p>
          <p className="text-3xl font-extrabold text-gov-dark">closed-world</p>
          <p className="text-sm text-gov-secondary mt-1">deterministic, no LLM judge</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Benchmarks that grade on fluency, or ask a bigger model to judge, measure the wrong thing for scientific deployment. A model can write perfectly structured RDF, name a gene, a disease and a relationship, and have half of those names be terms that do not exist in the ontology. In a pipeline that trusts the output, that is not a near miss, it is corrupt data that looks clean. What a scientific evaluation needs is a grader that cannot be satisfied by confident nonsense.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The benchmark</h2>
          <p className="text-gov-dark leading-relaxed">
            30 real gene-disease facts, each asking a model to write Biolink-typed RDF. The oracle parses the output, checks that every Biolink term it emits actually exists in the <a href="https://github.com/biolink/biolink-model" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Biolink Model</a>, and checks the structure (a real gene, a real disease, a real association predicate). Correctness is set-membership plus constraints, computed deterministically, the same <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">closed-world principle</Link> that catches hallucinated terms in generated knowledge graphs, turned into an evaluation. Five open models, run locally:
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Raw (fluency)</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Verified</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Term-existence</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fabricated terms</th>
              </tr>
            </thead>
            <tbody>
              {BOARD.map((r, i) => (
                <tr key={r.m} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.m}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.raw}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.ver}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.ex}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.fake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          Three models produce structured Biolink RDF on every task (raw 1.00), yet Qwen2.5-3B and Llama-3.2-3B score 0.00 verified: every one of their outputs invents terms, about half of everything they emit does not exist in Biolink. Only Qwen3-Coder-30B actually gets it right, 1.00 verified with zero fabricated terms. A fluency- or judge-based benchmark would rank the two hallucinating models near the top. The oracle separates them cleanly, and you cannot lift the score by writing more fluent RDF, only by using terms that are real.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why this is the ownable gap</h2>
          <p className="text-gov-dark leading-relaxed">
            Fluency and correctness are different axes, and only one of them is what you deploy on. The closed-world oracle makes the second measurable without a judge to fool, and it validates in both directions: a genuinely capable model scores 100%, so the benchmark is measuring a real capability the weak models lack, not just failing everything. The method is authority-agnostic, the same oracle runs against GO, ChEBI, Reactome or EDAM, which is the path to a multi-domain suite, and it pairs with the <Link to="/research/ontology-grounded-biomedical-kg" className="text-gov-blue underline hover:text-gov-blue-dark">grounded knowledge-graph</Link> work that consumes exactly the terms this benchmark checks.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A model that writes flawless RDF naming genes that do not exist is not almost right, it is confidently wrong in a way a fluency benchmark cannot see. Grade on what exists, not on what reads well, and the leaderboard stops lying to you."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          An independent, self-initiated study on open tools and open models: the Biolink Model, and five locally-run open checkpoints over an OpenAI-compatible endpoint. One task family (Biolink gene-disease RDF) on one authority; GO, ChEBI and EDAM are the documented next step. The 30 facts are public, so the honest use is relative comparison and a versioned, inspectable oracle, not a secret leaderboard. Full method, per-task outputs and reproducible code in the repository.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Benchmark your own model</p>
          <p className="text-sm text-gov-secondary mt-1">The oracle and runner work against any OpenAI-compatible endpoint. Point it at your model.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <Link to="/how-to-buy" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Talk to us
          </Link>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    </article>
  );
};
