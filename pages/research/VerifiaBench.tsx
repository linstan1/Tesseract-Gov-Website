import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/verifiabench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/verifiable-scientific-llm-benchmark#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/verifiable-scientific-llm-benchmark',
  headline: 'Fluency is saturated, correctness is not: an un-game-able scientific-LLM benchmark | Tesseract Academy',
  description:
    'verifiabench grades LLM scientific-workflow output with a closed-world oracle (term existence + structure, no LLM judge) instead of fluency. Across nine models including Claude Opus, Sonnet, Haiku and local open checkpoints, raw fluency saturates at 1.00 while verified capability ranges 0.00 to 1.00 on identical tasks: a local Qwen3-Coder-30B ties Claude Opus at 1.00, while some fluent models invent half their terms.',
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
  { m: 'Claude Opus', raw: '1.00', ver: '1.00', ex: '1.00', fake: '0' },
  { m: 'Claude Haiku', raw: '1.00', ver: '0.93', ex: '0.99', fake: '1' },
  { m: 'Qwen3.6-35B-A3B (8bit)', raw: '1.00', ver: '0.77', ex: '0.92', fake: '7' },
  { m: 'Claude Sonnet', raw: '1.00', ver: '0.73', ex: '1.00', fake: '0' },
  { m: 'Llama-3.2-3B', raw: '1.00', ver: '0.00', ex: '0.51', fake: '49' },
  { m: 'Qwen2.5-3B', raw: '1.00', ver: '0.00', ex: '0.51', fake: '65' },
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
          <p className="text-sm text-gov-secondary mt-1">1.00 for seven of nine models</p>
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
            30 real gene-disease facts, each asking a model to write Biolink-typed RDF. The oracle parses the output, checks that every Biolink term it emits actually exists in the <a href="https://github.com/biolink/biolink-model" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Biolink Model</a>, and checks the structure (a real gene, a real disease, a real association predicate). Correctness is set-membership plus constraints, computed deterministically, the same <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">closed-world principle</Link> that catches hallucinated terms in generated knowledge graphs, turned into an evaluation. Nine models, five open checkpoints run locally and Claude Haiku, Sonnet and Opus:
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
        <HBars
          title="Verified capability spans the full range while raw fluency saturates at 1.00 for seven of nine models."
          note="Values are the verified column of the table above. The oracle checks that every Biolink term a model emits actually exists in the Biolink Model."
          max={1}
          labelWidth="w-56"
          rows={[
            { label: 'Qwen3-Coder-30B-A3B (8bit)', value: 1.0, display: '1.00' },
            { label: 'Claude Opus', value: 1.0, display: '1.00' },
            { label: 'Claude Haiku', value: 0.93, display: '0.93' },
            { label: 'Qwen3.6-35B-A3B (8bit)', value: 0.77, display: '0.77' },
            { label: 'Claude Sonnet', value: 0.73, display: '0.73' },
            { label: 'Llama-3.2-3B', value: 0.0, display: '0.00', color: CHART.amber },
            { label: 'Qwen2.5-3B', value: 0.0, display: '0.00', color: CHART.amber },
            { label: 'gemma-2-2b', value: 0.0, display: '0.00', color: CHART.amber },
            { label: 'Qwen2.5-0.5B', value: 0.0, display: '0.00', color: CHART.amber },
          ]}
        />
        <p className="text-gov-dark leading-relaxed">
          Seven of nine models produce structured Biolink RDF on every task (raw 1.00), so fluency tells you almost nothing. Verified capability spans the full range. Two models tie at the top with perfect verified correctness and zero fabricated terms, one local (Qwen3-Coder-30B) and one frontier (Claude Opus). At the bottom, Qwen2.5-3B and Llama-3.2-3B look identical to the leaders on fluency yet score 0.00 verified, inventing roughly half of every term they emit. The oracle also separates two failure modes fluency grading cannot see: hallucination (the small local models, 49 to 65 fabricated terms) and structural incompleteness (Claude Sonnet, 0.73 verified with zero fabricated terms, its misses are a missing typed disease, not an invented term). You cannot lift the score by writing more fluent RDF, only by using terms that are real.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Two authorities, three task families</h2>
          <p className="text-gov-dark leading-relaxed">
            The benchmark above uses one ontology and one task. That was the easy case, and it let a local model tie the frontier. So we extended it to a second authority, the <a href="https://geneontology.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Gene Ontology</a> (48,329 terms), and three task families: single-hop gene-disease (Biolink), GO annotation (emit a real GO term for a named process), and cross-ontology multi-hop (gene, disease and process, Biolink and GO in one graph). The oracle now checks term existence across both authorities, and multi-hop cannot be gamed by getting one authority right and inventing the other.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Overall verified</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Biolink</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">GO annotation</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Multi-hop</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Claude Opus</td><td className="px-4 py-3 font-semibold text-gov-dark">1.00</td><td className="px-4 py-3 text-gov-secondary">1.00</td><td className="px-4 py-3 text-gov-secondary">1.00</td><td className="px-4 py-3 text-gov-secondary">1.00</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Claude Sonnet</td><td className="px-4 py-3 font-semibold text-gov-dark">0.75</td><td className="px-4 py-3 text-gov-secondary">0.60</td><td className="px-4 py-3 text-gov-secondary">0.85</td><td className="px-4 py-3 text-gov-secondary">0.93</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Qwen3-Coder-30B</td><td className="px-4 py-3 font-semibold text-gov-dark">0.48</td><td className="px-4 py-3 text-gov-secondary">1.00</td><td className="px-4 py-3 font-semibold text-gov-dark">0.00</td><td className="px-4 py-3 text-gov-secondary">0.07</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Claude Haiku</td><td className="px-4 py-3 font-semibold text-gov-dark">0.43</td><td className="px-4 py-3 text-gov-secondary">0.77</td><td className="px-4 py-3 text-gov-secondary">0.20</td><td className="px-4 py-3 text-gov-secondary">0.07</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Llama-3.2-3B / Qwen2.5-3B</td><td className="px-4 py-3 font-semibold text-gov-dark">0.00</td><td className="px-4 py-3 text-gov-secondary">0.00</td><td className="px-4 py-3 text-gov-secondary">0.00</td><td className="px-4 py-3 text-gov-secondary">0.00</td></tr>
            </tbody>
          </table>
        </div>
        <HBars
          title="With two authorities and three task families, Claude Opus scores 1.00 overall while Qwen3-Coder-30B collapses to 0.48."
          note="Values are the overall verified column of the table above. On the single-authority task the local Qwen3-Coder-30B tied Claude Opus at 1.00."
          max={1}
          labelWidth="w-56"
          rows={[
            { label: 'Claude Opus', value: 1.0, display: '1.00' },
            { label: 'Claude Sonnet', value: 0.75, display: '0.75' },
            { label: 'Qwen3-Coder-30B', value: 0.48, display: '0.48' },
            { label: 'Claude Haiku', value: 0.43, display: '0.43' },
            { label: 'Llama-3.2-3B / Qwen2.5-3B', value: 0.0, display: '0.00', color: CHART.amber },
          ]}
        />
        <p className="text-gov-dark leading-relaxed">
          On the single-authority task the local Qwen3-Coder-30B tied Claude Opus at 1.00. Add a second ontology and multi-hop, and the tie breaks: <strong>Opus scores 1.00 across all three families, the 30B collapses to 0.48</strong>, perfect on Biolink but zero on GO annotation, where it fluently emits fabricated 7-digit GO identifiers, and near zero on multi-hop. GO annotation is the discriminator; multi-hop is the hardest. A single family called several models equal; the multi-domain version re-separates them and exposes the cross-ontology hallucination the single family hid.
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
          An independent, self-initiated study: the Biolink Model, five locally-run open checkpoints over an OpenAI-compatible endpoint, and Claude Haiku, Sonnet and Opus. Qwen3.6-35B is a reasoning model, scored on its final answer with a large token budget so it can finish reasoning. Two authorities (Biolink and the Gene Ontology) and three task families including cross-ontology multi-hop; ChEBI, Reactome and EDAM extend the same oracle further. The facts are public, so the honest use is relative comparison and a versioned, inspectable oracle, not a secret leaderboard. The Claude models are queried through the claude -p CLI, which loads this machine's configuration, a raw API call would be the cleaner comparison. Full method, per-task outputs and reproducible code in the repository.
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
