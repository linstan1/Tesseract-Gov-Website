import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/certicoupla';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/certicoupla/demo.ipynb';
const WK = 'https://github.com/fabio-rovai/worldkernel';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/copula-coupled-uncertainty-certificates#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/copula-coupled-uncertainty-certificates',
  headline: 'Marginal coverage is not joint coverage: copula-coupled uncertainty certificates for scientific models | Tesseract Academy',
  description:
    'On 1,600 real OQMD materials with a frozen regressor, independent conformal prediction gives 90% per-target coverage but only 79% joint coverage. A coupled max-score certificate restores 90% joint coverage (22% tighter than Bonferroni), and a Gaussian-copula region matches it at 0.43x the size. Calibrated, machine-checkable uncertainty for correlated scientific outputs.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'certicoupla',
    codeRepository: 'https://github.com/fabio-rovai/open-ontologies',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords: 'conformal prediction, uncertainty quantification, joint coverage, copula, calibration, scientific machine learning, OQMD, materials, foundation models, certificate',
};

const M = [
  { name: 'Independent conformal (90%/target)', marg: '0.902', joint: '0.792', size: '1.0x' },
  { name: 'Bonferroni conformal', marg: '0.960', joint: '0.907', size: '6.18x' },
  { name: 'Coupled conformal (max-score box)', marg: '0.954', joint: '0.897', size: '4.83x' },
  { name: 'Gaussian-copula region', marg: 'joint by design', joint: '0.892', size: '0.43x of coupled' },
];

export const CopulaCoupledUncertainty: React.FC = () => {
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
          Marginal coverage is not joint coverage
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          A scientific model rarely predicts one number. It predicts a vector, a material's formation energy, band gap and stability, a protein's per-residue confidences, and those outputs are correlated. Calibrate the uncertainty one output at a time, as conformal prediction usually does, and you get a per-target guarantee that looks right and a joint guarantee that is quietly wrong. Measured on real materials data, a "90%" independent certificate delivers 79% joint coverage. Here is why, and what fixes it.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Independent certificate</p>
          <p className="text-3xl font-extrabold text-gov-dark">90% &rarr; 79%</p>
          <p className="text-sm text-gov-secondary mt-1">claimed vs actual joint coverage</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Coupled certificate</p>
          <p className="text-3xl font-extrabold text-gov-dark">89.7%</p>
          <p className="text-sm text-gov-secondary mt-1">joint coverage restored</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Evidence</p>
          <p className="text-3xl font-extrabold text-gov-dark">1,600</p>
          <p className="text-sm text-gov-secondary mt-1">real OQMD DFT materials</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Foundation and scientific models are deployed with uncertainty that is either uncalibrated or calibrated marginally, one output at a time. But a deployment decision usually depends on the whole prediction being right at once: is this material stable <em>and</em> low-formation-energy <em>and</em> a semiconductor? A certificate that has to hold jointly, the realized outcome vector falling inside an emitted region at the claimed rate, cannot be assembled from independent per-target intervals when the outputs are correlated. Stack d marginal 90% intervals and the joint region is the wrong shape and the wrong size.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The measurement</h2>
          <p className="text-gov-dark leading-relaxed">
            We took 1,600 real materials from the <a href="https://oqmd.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Open Quantum Materials Database</a>, three DFT targets, and a gradient-boosted regressor trained once and frozen. Every certificate below is calibrated to a nominal 90% joint coverage on a held-out split, and measured on a test split. The residuals are genuinely correlated (formation energy and stability +0.50), which is exactly why the joint problem is not the marginal problem.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Method</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Marginal coverage</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Joint coverage</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Region size</th>
              </tr>
            </thead>
            <tbody>
              {M.map((r, i) => (
                <tr key={r.name} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.marg}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.joint}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          Independent conformal is marginally correct (90.2% per target) and jointly wrong (79.2%). Bonferroni restores joint validity but at 6.18x the volume, intervals too wide to act on. The coupled certificate hits 89.7% joint coverage at 22% less volume than Bonferroni, and the Gaussian copula, using the dependence rather than ignoring it, matches the joint coverage in a region 57% smaller than the coupled box.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why this is the ownable gap</h2>
          <p className="text-gov-dark leading-relaxed">
            The fix is not a bigger model or more calibration data; independent conformal already has all the coverage it was asked for, marginally. The fix is to calibrate the object you actually deploy: the joint region. A global max-score conformal certificate does that with a finite-sample guarantee and no distributional assumption; a copula does it with a model of the dependence, buying back most of the volume Bonferroni throws away. Both emit a machine-checkable region whose soundness is the measured joint coverage, reported here on held-out data. This is the uncertainty companion to our <a href={WK} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">WorldKernel</a> coupling work, and it ladders to vine copulas over the outputs of several frozen models, which is where the copula-net world-model program goes next.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A model that reports 90% confidence on each of three correlated outputs is not 90% confident in the three together. Deploy on the marginal number and you are wrong about the joint one in the exact cases that matter. Calibrate the region, not the axes."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          An independent, self-initiated study on open data and open tools: OQMD's DFT properties under their open licence. The frozen model is a gradient-boosted regressor standing in for a large scientific model; the conformal guarantees are distribution-free, so the coverage result transfers, and running the wrapper on ESM-2 or a Materials Project foundation model is the honest scale-up. The copula is Gaussian, a first tractable dependence model; the region-size comparison is stated precisely in the build report. This is a coverage phenomenon on real data, not a new theorem.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Reproduce it</p>
          <p className="text-sm text-gov-secondary mt-1">Fetch real OQMD data, train and freeze the model, run every certificate, in Colab or the repo.</p>
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
