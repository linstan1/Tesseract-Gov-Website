import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/assure-health';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/assure-health/demo.ipynb';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/health-ai-privacy-fairness-assurance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/health-ai-privacy-fairness-assurance',
  headline: 'One report card for privacy and fairness: the disparate impact of differential privacy on a clinical model | Tesseract Academy',
  description:
    'Privacy and fairness are audited separately, but they interact. On the real UCI Diabetes readmission dataset, one report card runs membership inference and per-subgroup equity on the same model across a differential-privacy sweep. At epsilon 0.25, DP costs minority subgroups 2.6x more accuracy than the majority, while the membership leakage it targets is near zero. The trade is only visible with both planes on one card.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-21',
  dateModified: '2026-07-21',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'assure-health',
    codeRepository: 'https://github.com/fabio-rovai/open-ontologies',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords: 'differential privacy, algorithmic fairness, health AI, membership inference, disparate impact, assurance, MIMIC, clinical model, equity, ARIA',
};

const CARD = [
  { e: 'inf (non-private)', mia: '0.004', maj: '+0.000', min: '+0.000' },
  { e: '4.0', mia: '0.004', maj: '+0.002', min: '+0.004' },
  { e: '1.0', mia: '0.006', maj: '+0.005', min: '+0.011' },
  { e: '0.5', mia: '0.006', maj: '+0.009', min: '+0.028' },
  { e: '0.25', mia: '0.013', maj: '+0.025', min: '+0.065' },
];

export const AssureHealth: React.FC = () => {
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
          The privacy fix that quietly breaks fairness
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Privacy and fairness are audited on separate benches, by separate teams, with separate sign-offs. But they interact. The standard privacy defence, differential privacy, degrades the accuracy of the smallest subgroups the fastest. So a clinical model can pass a privacy audit and a fairness audit run independently, while the very act of making it private is what broke equity for the patients with the least data. Here is that trade, measured on one model and one report card.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Disparate impact of DP</p>
          <p className="text-3xl font-extrabold text-gov-dark">2.6&times;</p>
          <p className="text-sm text-gov-secondary mt-1">minority accuracy loss vs majority</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Privacy actually bought</p>
          <p className="text-3xl font-extrabold text-gov-dark">~0</p>
          <p className="text-sm text-gov-secondary mt-1">membership-inference advantage</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">On one model</p>
          <p className="text-3xl font-extrabold text-gov-dark">both planes</p>
          <p className="text-sm text-gov-secondary mt-1">real public clinical data</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Machine learning on sensitive data needs guarantees against leakage, and clinical AI needs to be equitable across the groups it serves. These are usually treated as two separate assurance problems. But differential privacy, the rigorous answer to the first, is known to concentrate its accuracy cost on under-represented subgroups (the disparate impact of differential privacy, Bagdasaryan et al., 2019). For a mental-health or readmission model, the members most re-identifiable from a training set are often the smallest, highest-stigma clinical subgroups, exactly the ones the privacy fix hurts most. Assuring privacy and fairness apart is structurally blind to this.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">One report card</h2>
          <p className="text-gov-dark leading-relaxed">
            On the real, public <a href="https://archive.ics.uci.edu/dataset/296/diabetes+130-us+hospitals+for+years+1999-2008" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">UCI Diabetes readmission dataset</a> (predict 30-day readmission; race as the protected attribute), we freeze one logistic model and run both assurance planes on it as we tighten differential privacy: a loss-based membership-inference attack per subgroup, and per-subgroup accuracy. Because differential privacy is randomised, every number is averaged over 40 noise draws.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Privacy (epsilon)</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Membership-inference advantage</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Accuracy drop, majority</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Accuracy drop, minority</th>
              </tr>
            </thead>
            <tbody>
              {CARD.map((r, i) => (
                <tr key={r.e} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.e}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.mia}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.maj}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.min}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          At the tightest privacy (epsilon = 0.25) the accuracy cost is not shared evenly. Ordered by subgroup size, the drop is 2.5 points for Caucasians (n=6,150), 4.4 for African Americans (n=1,520), and 8.5 for Hispanics (n=153): a <strong>2.6x disparate impact</strong> on the minority groups, growing monotonically as privacy tightens. The smaller the group, the more the privacy fix costs it.
        </p>
        <HBars
          title="At the tightest privacy setting (epsilon 0.25), the accuracy cost falls hardest on the smallest subgroups."
          note="Ordered by subgroup size, the drop is 2.5 points for Caucasians, 4.4 for African Americans and 8.5 for Hispanics, a 2.6x disparate impact on the minority groups. Every number is averaged over 40 noise draws."
          labelWidth="w-56"
          rows={[
            { label: 'Caucasian (n=6,150)', value: 2.5, display: '2.5 points', color: CHART.amber },
            { label: 'African American (n=1,520)', value: 4.4, display: '4.4 points', color: CHART.amber },
            { label: 'Hispanic (n=153)', value: 8.5, display: '8.5 points', color: CHART.amber },
          ]}
        />
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why one card, not two audits</h2>
          <p className="text-gov-dark leading-relaxed">
            The membership-inference advantage the differential privacy is meant to reduce is near zero on this regularised model, so the privacy it actually buys here is marginal. Read the situation three ways. A privacy-only audit signs off: "differential privacy applied at epsilon 0.25", a win. A fairness-only audit at a fixed epsilon sees a subgroup gap, but not that the privacy knob caused it. Only the coupled report card shows the trade for what it is: almost all equity cost, for almost no privacy gain, borne by the patients with the least data. The contribution is not a new attack or a new fairness metric, it is putting both planes on one model, across a privacy sweep, so the interaction cannot hide.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"You cannot sign off privacy and fairness on separate forms. The tool that makes a clinical model private is the same tool that widens its accuracy gap for the smallest groups. Put both on one report card, or you will approve a trade you never saw."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          An independent, self-initiated study on open data and open tools. The model is a regularised linear classifier, which by nature leaks little to membership inference; higher-capacity or overfit models leak substantially more, and the same card applies to them with a larger privacy side to the trade. Differential privacy is applied by output perturbation, a rigorous closed-form mechanism and the convex analogue of DP-SGD. The dataset is real but specific (US hospital readmission, race); MIMIC-IV, credentialed under a data-use agreement, is the clinical scale-up, including a mental-health arm. Numbers are reported as measured, not inflated, and the disparate-impact trend is monotone across the whole privacy sweep.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Run the report card</p>
          <p className="text-sm text-gov-secondary mt-1">Both planes, the full DP sweep, on real data, in Colab or from the repo.</p>
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
