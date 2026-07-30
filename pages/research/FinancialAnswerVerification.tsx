import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/financebench-verification';
const UPSTREAM = 'https://github.com/patronus-ai/financebench';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/financial-answer-verification#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/financial-answer-verification',
  headline:
    'Provenance beats plausibility: catching wrong financial answers without a gold key | Tesseract Academy',
  description:
    'FinanceBench ships 2,400 model answers carrying human correctness labels, an unused supervision set for answer verification. A deterministic check that never sees the gold answer recovers 57.4% of labelled errors and lifts served accuracy from 68.8% to 78.0%. The same check against the whole filing recovers 3.6%, because a 10-K carries a median of 1,270 numbers. Reconstructing a figure by arithmetic is anti-informative. The audit also finds that the two shipped gold files disagree on 15 of 51 numeric cases, every one by exactly 100x.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  about: {
    '@type': 'Dataset',
    name: 'FinanceBench verification and ground-truth audit',
    url: REPO,
  },
  keywords:
    'financial question answering, FinanceBench, LLM evaluation, hallucination detection, answer verification, retrieval augmented generation, benchmark audit, provenance, AI assurance, SEC filings, 10-K',
};

const PIPELINE = `graph LR
  A["Question"] --> V["Verifier"]
  B["Model answer"] --> V
  C["Source filing"] --> V
  G["Gold answer"] -.->|"never seen"| V
  V --> D["C1 provenance<br/>figure on the cited page"]
  V --> E["C2 derivation<br/>reconstructible by arithmetic"]
  V --> F["C3 scale and unit"]
  D --> H["Flag for review<br/>or serve"]
  E --> H
  F --> H`;

const CHECKS = [
  { c: 'C1 against the cited evidence page', flag: '0.395', p: '0.455', r: '0.574', served: '0.780', cov: '0.605', verdict: 'the recall instrument' },
  { c: 'C1 against the whole filing', flag: '0.041', p: '0.273', r: '0.036', served: '0.686', cov: '0.959', verdict: 'coincidence swamps it' },
  { c: 'C1 with a derivation escape hatch', flag: '0.006', p: '0.222', r: '0.004', served: '0.687', cov: '0.994', verdict: 'signal destroyed' },
  { c: 'C2 stated arithmetic does not evaluate', flag: '0.014', p: '0.909', r: '0.040', served: '0.696', cov: '0.986', verdict: 'a block rule' },
  { c: 'C3 scale mismatch', flag: '0.004', p: '0.000', r: '0.000', served: '0.686', cov: '0.996', verdict: 'null result' },
  { c: 'C3 percentage given as a ratio', flag: '0.000', p: 'n/a', r: '0.000', served: '0.688', cov: '1.000', verdict: 'null result' },
];

const AUDIT = [
  { a: 'A1 cited snippet appears in its cited page', res: '189 of 189 pass', sev: 'clean' },
  { a: 'A2 cited page number locates the text in the PDF', res: '187 of 187 locatable pages sit at offset exactly +1, none at 0', sev: 'defect' },
  { a: 'A6 the two shipped files agree on the gold answer', res: '15 of 51 disagree, every one by exactly 100x', sev: 'defect' },
  { a: 'A4 gold honours the unit the question asks for', res: '4 of 16 percentage questions carry a sub-1 ratio as gold', sev: 'defect' },
  { a: 'A3 gold figure appears in the cited evidence', res: '32 of 51 do not, because they are derived metrics', sev: 'characteristic' },
];

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  characteristic: 'bg-slate-100 text-slate-700',
};

export const FinancialAnswerVerification: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Provenance beats plausibility, but only if you scope it
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The failure that matters when a language model reads a financial filing is not a refusal. It is a confidently wrong number wearing plausible provenance. We built a check that catches those without ever seeing the right answer, scored it against 2,400 human-labelled answers the benchmark already ships, and found two things that do not work as well as the one that does.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Errors recovered</p>
        <p className="text-3xl font-extrabold text-gov-dark">57.4%</p>
        <p className="text-sm text-gov-secondary mt-1">of human-labelled wrong answers, no model call</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Served accuracy</p>
        <p className="text-3xl font-extrabold text-gov-dark">68.8 to 78.0%</p>
        <p className="text-sm text-gov-secondary mt-1">at 60.5% coverage</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Same check, whole filing</p>
        <p className="text-3xl font-extrabold text-gov-dark">3.6%</p>
        <p className="text-sm text-gov-secondary mt-1">recall, because scope is everything</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Gold mismatch found</p>
        <p className="text-3xl font-extrabold text-gov-dark">15 of 51</p>
        <p className="text-sm text-gov-secondary mt-1">numeric cases differ by exactly 100x</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The supervision set nobody used</h2>
        <p className="text-gov-dark leading-relaxed">
          FinanceBench is the standard open-book financial question answering benchmark: questions about real filings, each with a gold answer, an evidence string and a page number. Its public release also contains something less discussed. Sixteen model configurations were each run over 150 cases and <strong>all 2,400 answers were reviewed by hand</strong> and labelled correct, incorrect or a refusal.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          That is a labelled training and evaluation set for the separate problem of <em>verifying</em> an answer, and it costs nothing to use because the inference already happened. The distribution is 1,135 correct, 528 incorrect and 737 refusals. Before using it we confirmed we were reading the files as intended by reproducing the paper&apos;s headline number exactly: GPT-4-Turbo with a shared vector store scores 19.3% correct here, so 80.7% wrong or refused, against the 81% published.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The verifier, and its contract</h2>
      <p className="text-gov-dark leading-relaxed">
        The verifier sees the question, the model answer and the source filing. It never sees the gold answer, because in production there is no gold answer. It is fully deterministic: no model is called anywhere in this study.
      </p>
      <Mermaid chart={PIPELINE} />
      <p className="text-gov-dark leading-relaxed">
        Results below are on the 1,617 answers that attempted a figure, where 31.2% are labelled incorrect. Served accuracy is the share of unflagged answers a human marked correct, against a 68.8% baseline for serving everything.
      </p>
      <div className="overflow-x-auto border border-gov-border rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Check</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Flag rate</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Precision</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Recall</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Served acc.</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {CHECKS.map((r, i) => (
              <tr key={r.c} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.c}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.flag}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.p}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark">{r.r}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.served}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Two negative results worth more than the positive one</h2>
        <p className="text-gov-dark leading-relaxed">
          <strong>Scope is the whole game.</strong> Asking whether the asserted figure appears on the evidence page the case cites recovers 57.4% of labelled errors. Asking whether it appears anywhere in the filing recovers 3.6%. The reason is arithmetic: a filing in this set carries a median of <strong>1,270 distinct numbers</strong> against 69 on the cited page, so &quot;the number is in the document&quot; is nearly always true by coincidence. A provenance claim without a scope is not a check.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          <strong>The obvious safety valve is worse than useless.</strong> Many correct financial answers compute a figure rather than quoting one, so the natural refinement is to excuse an answer whose figure is reconstructible by arithmetic from the numbers it cites. Of 638 answers whose figure is absent from the cited evidence, that test excuses <strong>629, or 98.6%</strong>. Worse, the excused answers are <em>more</em> often wrong (45.8%) than the ones it cannot excuse (22.2%). Shallow arithmetic reconstruction is anti-informative here, and we report it as a dead end rather than dressing it up.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          One check does earn a different role. When a model states arithmetic that does not evaluate, it is wrong <strong>91%</strong> of the time, but this fires on only 1.4% of answers. That is a block rule, not a review rule. Both scale and unit checks fired too rarely to support any claim and are reported as null results.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Not an artefact of retrieval mode</h2>
      <p className="text-gov-dark leading-relaxed">
        An obvious objection is that the provenance check simply detects retrieval failure, so it would score well on configurations with poor retrieval and badly elsewhere. It does not. The check has <strong>positive recall in every one of the sixteen configurations</strong>, ranging from 0.31 to 0.79, spanning closed book, in-context, oracle and vector-store modes across three model families. Its precision tracks each configuration&apos;s own error rate, which is exactly how a fixed-recall detector behaves: 0.93 on a configuration where 78% of answers are wrong, 0.21 where 11% are.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The benchmark also marks an answer correct when its qualitative judgement is right even where its figure differs from gold, so a number-level verifier can only be judged fairly where the gold answer is itself a number. On those 51 cases recall rises to <strong>0.725</strong>.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Auditing the benchmark itself</h2>
        <p className="text-gov-dark leading-relaxed">
          Every evaluation inherits its ground truth. So we checked the 150 open cases against their own artefacts, deterministically.
        </p>
      </div>
      <div className="overflow-x-auto border border-gov-border rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Check</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Result</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Class</th>
            </tr>
          </thead>
          <tbody>
            {AUDIT.map((r, i) => (
              <tr key={r.a} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.a}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.res}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Two findings bite. The page numbers are <strong>0-indexed</strong> against the PDF: of 187 evidence pages we could locate by token containment, every single one sits at offset exactly +1 and none at 0. Anyone treating the field as a 1-based page number retrieves the wrong page, every time, which quietly corrupts any retrieval evaluation built on it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second is worse. The release carries a gold answer in two places, and for <strong>15 of the 51 numerically comparable cases they disagree, every one by a factor of exactly 100</strong>. The dataset file gives a percentage, such as &quot;1.9%&quot;; the results files give the ratio, 0.019. All fifteen are percentage questions. Anyone auto-scoring against the results field inherits a hundredfold unit error on 10% of the subset. The sixteen results files never disagree among themselves, which is what makes the pattern unambiguous rather than noise.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        One result is deliberately <em>not</em> filed as a defect. 32 of 51 numeric gold answers do not appear in the cited evidence at any scale, because they are derived metrics: days payable outstanding, fixed asset turnover, multi-year averages. Those cannot appear in a filing by construction. It is a property of the benchmark that bounds what any provenance check can score, and it explains the false positives in ours.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for buyers and builders</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>For anyone procuring document AI:</strong> accuracy on a benchmark tells you nothing about what happens to the errors. Ask what fraction of wrong answers the system withholds, and at what cost in coverage. Those are the two numbers that determine whether it is safe to put in front of an analyst.</li>
          <li><strong>For builders:</strong> a cheap deterministic provenance check, scoped to the retrieved passage rather than the document, buys a nine point lift in the accuracy of what you serve for no inference cost. Put it in before reaching for an LLM judge.</li>
          <li><strong>For evaluation designers:</strong> ship one gold answer, not two, and state the indexing convention of every offset field. Both defects here are the kind that silently degrade every downstream result rather than announcing themselves.</li>
          <li><strong>Honest boundary:</strong> the verifier is number-centric, so on questions whose answer is a judgement rather than a figure its flag is much less informative. It is a triage instrument, not a correctness oracle, and the precision figures say so plainly.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        The numeric layer, the checks, the audit and the scoring harness are public. Every figure on this page regenerates from two commands. No model is called at any point, so a full replication costs nothing but CPU time.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          financebench-verification on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={UPSTREAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium px-2 py-3">
          the upstream benchmark <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The repository ships code and aggregate results only. It does not redistribute FinanceBench questions, gold answers, model answers or filing PDFs: the upstream release carries no licence file, so no redistribution permission can be assumed, and audit findings cite case identifiers instead so every claim stays checkable. FinanceBench is by Islam and colleagues at Patronus AI, 2023.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: our <Link to="/research/ixbrl-disclosure-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">iXBRL disclosure benchmark</Link> measures machine-readable disclosure at scale across UK filings, and the <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study applies the same evidence-before-assertion discipline to knowledge representation.
      </p>
    </section>
  </article>
);

export default FinancialAnswerVerification;
