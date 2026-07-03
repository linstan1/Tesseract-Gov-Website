import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/wastewater-effluent-data-quality#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/wastewater-effluent-data-quality',
  headline: 'Wastewater Effluent Data Quality: Tesseract Academy',
  description:
    'An open-data demonstration of statistical and rule-based quality assurance for continuous wastewater effluent monitoring: 1,382 days of full-scale treatment-works data, with SHACL data-quality rules including the COD >= BOD physical invariant. Published open source via Open Ontologies.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
  about: {
    '@type': 'Thing',
    name: 'Continuous wastewater effluent monitoring data quality',
  },
  keywords:
    'wastewater, effluent monitoring, data quality, continuous monitoring, BOD, COD, ammonia, SHACL, water quality statistics, Environment Agency',
};

const CHECKS = [
  {
    id: '1',
    name: 'Completeness against cadence',
    description: 'Detects telemetry dropouts and maintenance gaps where a monitor reports less often than its design interval.',
  },
  {
    id: '2',
    name: 'Stuck-sensor / flatline detection',
    description: 'Flags runs of invariant values, the signature of a frozen or fouled probe reporting a constant.',
  },
  {
    id: '3',
    name: 'Robust outlier detection (MAD)',
    description: 'Median-absolute-deviation spikes, so genuine pollution events are not masked by their own influence on a mean-based threshold.',
  },
  {
    id: '4',
    name: 'Physical-range plausibility',
    description: 'Per-determinand non-negative bands (ammonia, BOD, COD, total nitrogen) that reject impossible readings.',
  },
  {
    id: '5',
    name: 'COD >= BOD cross-parameter invariant',
    description: 'Chemical Oxygen Demand can never be below Biochemical Oxygen Demand. A record where it is, is physically impossible and is rejected, something no single-column check can see.',
  },
  {
    id: '6',
    name: 'Baseline drift estimation',
    description: 'Quantifies slow shifts between service visits, the calibration-and-fouling drift that single-point range checks miss.',
  },
];

export const WastewaterDataQuality: React.FC = () => {
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
          Open-data capability demonstration: Water &amp; Environment
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Wastewater Effluent Data Quality
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Continuous effluent monitoring is only as useful as the data is trustworthy. This is a worked, fully open demonstration of how we make it trustworthy: statistics to find the anomalies, and declarative rules to encode the physics so impossible records can never pass.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Data analysed</p>
          <p className="text-3xl font-extrabold text-gov-dark">1,382</p>
          <p className="text-sm text-gov-secondary mt-1">days of full-scale works data</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Physical invariant</p>
          <p className="text-3xl font-extrabold text-gov-dark">100%</p>
          <p className="text-sm text-gov-secondary mt-1">of rows pass COD &ge; BOD</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Validation rules</p>
          <p className="text-3xl font-extrabold text-gov-dark">8</p>
          <p className="text-sm text-gov-secondary mt-1">SHACL shapes (R1&ndash;R8)</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The UK is rolling out continuous water-quality monitoring on wastewater assets under the <strong>Environment Act 2021</strong>, and the <strong>Environment Agency</strong> is exploring whether that data can serve as a regulatory tool and a transparent record for the public. The hard question underneath is data quality: calibration drift, fouled probes, telemetry gaps and transcription errors all masquerade as real water-quality signals. Before continuous monitoring can carry regulatory weight, someone has to be able to say, defensibly, which readings are trustworthy.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            To demonstrate our method on real, open data, we analysed a full-scale wastewater treatment works dataset of <strong>1,382 daily records</strong> carrying the regulated effluent suite (ammonia, BOD, COD, total nitrogen, plus inflow and outflow). Source: a public dataset released under CC BY-SA 4.0.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The quality-assurance battery</h2>
        <p className="text-gov-secondary leading-relaxed">
          Two layers work together. <strong>Statistics</strong> finds the anomalies; a declarative <strong>ontology and SHACL rule set</strong> of eight shapes (R1&ndash;R8: date, four determinand ranges, non-empty record, the COD &ge; BOD invariant and a flow-conservation check) encodes the domain physics that decides which anomalies are merely unusual and which are impossible. The six check families below are reproducible and open source.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/wastewater-effluent-qa.png" alt="Five years of wastewater effluent data-quality analysis: ammonia, BOD, COD and total nitrogen with flagged statistical outliers." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            QA pass over five years of effluent determinands. The series is complete and internally consistent, yet the battery still surfaces dozens of statistical outliers and a multi-year COD baseline drift of +115 mg/L that no single-point check would catch.
          </figcaption>
        </figure>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Check</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it catches</th>
              </tr>
            </thead>
            <tbody>
              {CHECKS.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{c.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            The analysis is complete and internally consistent: the COD &ge; BOD invariant holds on every one of 1,382 rows, a strong curation signal. But the quality-assurance pass still surfaces genuine structure a trend analyst must handle, including a multi-year COD baseline drift and dozens of statistical outliers per determinand. The declarative SHACL rules catch every planted physically-impossible record and pass every clean one, with a named reason for each rejection. The verdict on whether the data can be trusted is therefore auditable, which is exactly what a regulator needs.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The full ontology, the SHACL data-quality shapes, the statistical analysis and the worked examples are published open source as a case study in <strong>Open Ontologies</strong>, our open data-validation platform.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Classification of whether data can be trusted should be declarative, not learned. Statistics finds the anomalies; the ontology encodes the physics, such as the simple fact that chemical oxygen demand can never fall below biochemical oxygen demand, that decides which anomalies are impossible. That separation is what makes data quality auditable."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the open-source case study</p>
          <p className="text-sm text-gov-secondary mt-1">Ontology, SHACL rules and analysis on GitHub. Data under CC BY-SA 4.0.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/wastewater-effluent-quality"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.kaggle.com/datasets/d4rklucif3r/full-scale-waste-water-treatment-plant-data"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            Source dataset
            <ExternalLink className="w-4 h-4" />
          </a>
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
