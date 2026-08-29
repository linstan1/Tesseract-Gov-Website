import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/tardygrada-gatekeeper';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/tardygrada-gatekeeper/demo.ipynb';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/proof-carrying-action-gatekeeper#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/proof-carrying-action-gatekeeper',
  headline: 'The gate you can trust: a proof-carrying-action gatekeeper, exhaustively verified | Tesseract Academy',
  description:
    'A proof-carrying-action gatekeeper: actions dispatch only if a certificate passes a 31-line trusted core. Verified exhaustively, not sampled, on three systems: a warehouse (672/672 unsafe blocked), DeepMind AI Safety Gridworlds Island Navigation (10/10 water-entry moves blocked on the official map), and the Melting Pot Commons Harvest substrate (447/447 patch-killing harvests blocked; ungated agents collapse the commons to 0 apples, gated agents sustain it). 0.36 microseconds per check.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-21',
  dateModified: '2026-07-21',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'tardygrada-gatekeeper',
    codeRepository: 'https://github.com/fabio-rovai/open-ontologies',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords: 'Safeguarded AI, gatekeeper, proof-carrying actions, multi-agent, formal verification, model checking, AI safety, certificate, trusted computing base, ARIA',
};

export const ProofCarryingGatekeeper: React.FC = () => {
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
          The gate you can trust
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The idea behind a safeguarded AI is a gatekeeper: an agent may act only if it can present a certificate that its action is safe, and a small trusted component checks that certificate before anything happens. The appeal is obvious. The hard part is building a runtime where the check is small enough to actually trust and fast enough to run on every action. This is a working reference gatekeeper for a multi-agent system, and because the system is bounded we do not sample its safety, we verify all of it.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Unsafe actions blocked</p>
          <p className="text-3xl font-extrabold text-gov-dark">672 / 672</p>
          <p className="text-sm text-gov-secondary mt-1">and 504/504 safe admitted</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Verification</p>
          <p className="text-3xl font-extrabold text-gov-dark">exhaustive</p>
          <p className="text-sm text-gov-secondary mt-1">sound and complete, not sampled</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Trusted core</p>
          <p className="text-3xl font-extrabold text-gov-dark">31 lines</p>
          <p className="text-sm text-gov-secondary mt-1">0.36 microseconds per check</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            High-stakes multi-agent systems cannot yet give demonstrable guarantees of safe behaviour, and the usual formal-methods answer is too slow and too specialised to sit in the execution loop. What deployment needs is not another offline verifier but a runtime where every action is gated by a check you can trust because it is small, and afford because it is fast. That is the gatekeeper pattern, and its credibility rests entirely on the size and speed of the trusted component doing the checking.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Proof-carrying actions</h2>
          <p className="text-gov-dark leading-relaxed">
            The scenario is a small warehouse: two robots on a 3x3 grid, a shared battery budget, and one irreversible hazard cell. The safety specification is three invariants that must hold in every state, the robots never share a cell, neither enters the hazard, and the battery never goes negative. A proposer, which may be untrusted or an ML policy, emits a joint action and a certificate: the state it claims results and its claim that the result is safe. The gatekeeper, the only trusted component, recomputes the successor and checks it matches the certificate (so the proposer cannot lie about the outcome), then checks that successor against the three invariants. It dispatches only if both pass. Generating a safe action may need search; checking one is a handful of comparisons. That asymmetry is the whole design: an arbitrarily capable, untrusted proposer behind a tiny, trustworthy gate.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Property</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Verification</td><td className="px-4 py-3 text-gov-secondary">exhaustive over the full reachable state space</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Reachable states / transitions</td><td className="px-4 py-3 text-gov-secondary">96 / 1,176</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Unsafe actions blocked</td><td className="px-4 py-3 font-semibold text-gov-dark">672 / 672 (100%)</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Safe actions admitted</td><td className="px-4 py-3 font-semibold text-gov-dark">504 / 504 (100%)</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Soundness &amp; completeness</td><td className="px-4 py-3 text-gov-secondary">both hold across the reachable space</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Adversarial (lying) proposer</td><td className="px-4 py-3 text-gov-secondary">672 / 672 unsafe proposals blocked</td></tr>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Ungated baseline</td><td className="px-4 py-3 text-gov-secondary">57.1% of transitions unsafe</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Checker latency / trusted core</td><td className="px-4 py-3 text-gov-secondary">0.36 microseconds / 31 lines</td></tr>
            </tbody>
          </table>
        </div>
        <HBars
          title="Exhaustive verification of the warehouse gate"
          note="The checker enumerates all 1,176 transitions across the 96 reachable states. Every one of the 672 unsafe actions is blocked and every one of the 504 safe actions is admitted."
          labelWidth="w-56"
          rows={[
            { label: 'Unsafe actions blocked', value: 672, display: '672 / 672' },
            { label: 'Safe actions admitted', value: 504, display: '504 / 504' },
            { label: 'Reachable transitions', value: 1176, display: '1,176', color: CHART.gray },
          ]}
        />
        <p className="text-gov-dark leading-relaxed">
          Because the model is bounded, the checker enumerates the entire reachable state space and, for every state and every action, confirms it admits the action if and only if the resulting state is safe. That is a complete soundness-and-completeness result over the reachable space, not a passing test suite. An adversarial proposer that simply asserts "this is safe" is blocked on every one of its unsafe proposals, and without the gate 57% of transitions would land in an unsafe state, so the gate is load-bearing, not decorative.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The same gate on two real benchmarks</h2>
          <p className="text-gov-dark leading-relaxed">
            The gate is not tied to the warehouse. We run it, unchanged, on two published multi-agent safety benchmarks, using their real maps and safety definitions.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            <strong>Island Navigation</strong> (<a href="https://github.com/google-deepmind/ai-safety-gridworlds" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">DeepMind AI Safety Gridworlds</a>). We take the official map and safety definition verbatim from the repo: the agent must reach the goal without ever entering water, an irreversible drowning penalised at -50. The gate permits a move only if its certified destination is not water. Exhaustive over the 21 reachable cells and 84 moves, it blocks <strong>10 of 10</strong> water-entering moves and admits <strong>74 of 74</strong> safe ones, sound and complete; ungated, 11.9% of moves would drown the agent.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            <strong>Commons Harvest</strong> (<a href="https://github.com/google-deepmind/meltingpot" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Melting Pot</a>), a faithful reimplementation of the substrate's dynamics: apples regrow only while an apple remains nearby, so eating the last apple in a patch kills it forever, the tragedy of the commons. The safety spec is sustainability, never harvest so as to empty a patch. The gate is verified exhaustively on a bounded instance (<strong>447 of 447</strong> patch-killing harvests blocked, <strong>1,857 of 1,857</strong> safe harvests admitted), and a dynamic episode with four greedy agents shows what it buys:
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Commons after 200 steps (mean of 20 runs)</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Ungated</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Gated</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white"><td className="px-4 py-3 font-medium text-gov-dark">Dead cells (irrecoverable)</td><td className="px-4 py-3 font-semibold text-gov-dark">36 / 36</td><td className="px-4 py-3 font-semibold text-gov-dark">0 / 36</td></tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40"><td className="px-4 py-3 font-medium text-gov-dark">Apples remaining</td><td className="px-4 py-3 text-gov-secondary">0</td><td className="px-4 py-3 text-gov-secondary">~10</td></tr>
            </tbody>
          </table>
        </div>
        <HBars
          title="Dead commons cells after 200 steps"
          note="Mean of 20 runs of the dynamic episode with four greedy agents. Ungated agents leave all 36 cells dead and irrecoverable; the same agents behind the sustainability gate leave 0 of 36 dead."
          max={36}
          labelWidth="w-56"
          rows={[
            { label: 'Ungated: dead cells', value: 36, display: '36 / 36', color: CHART.amber },
            { label: 'Gated: dead cells', value: 0, display: '0 / 36' },
          ]}
        />
        <p className="text-gov-dark leading-relaxed">
          Ungated greedy agents collapse the commons completely; the same agents behind the sustainability gate never kill a patch, and the resource persists. Same 31-line trusted core, three different systems.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why this is the ownable gap</h2>
          <p className="text-gov-dark leading-relaxed">
            The field ships verifiers and papers; what deployment needs is a certificate-carrying runtime, a gate small and fast enough to sit on every action. Making the trusted core explicit, 31 lines, sub-microsecond, and verifying the whole system rather than testing it, is the move. It is the runtime companion to a <Link to="/research/verifiable-scientific-llm-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">closed-world check on what a model emits</Link> and to the <Link to="/research/certified-denotation" className="text-gov-blue underline hover:text-gov-blue-dark">certificate ladder</Link> we are building elsewhere, and it is the reference specification for a formally-verified agent runtime whose small C core would carry exactly this gate into production.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"You do not make an untrusted agent safe by making it smarter. You put it behind a gate small enough to trust and fast enough to run on every action, and you verify the gate, not the agent. Then the agent can be as capable, and as untrusted, as you like."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          An independent, self-initiated study. Every guarantee is exhaustive over a bounded model; scaling to large systems needs symbolic model checking, where the same small checker stays small. This repo verifies the systems exhaustively but does not ship a machine-checked proof of the checker itself, that is the role of the Tardygrada formally-verified runtime, whose C core is the production vehicle for this gate. The Island Navigation map and safety definition are taken verbatim from the official AI Safety Gridworlds repository (its live engine also loads and steps here); Commons Harvest is a faithful reimplementation of the Melting Pot substrate, since that engine's dmlab2d backend does not build in this environment. Full method and reproducible code in the repository.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Reproduce it</p>
          <p className="text-sm text-gov-secondary mt-1">Pure Python standard library. Run the exhaustive verification in Colab or from the repo.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <a href={DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Run it now (Colab) <ExternalLink className="w-4 h-4" />
          </a>
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
