import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/fair-scientific-data#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/fair-scientific-data',
  headline: 'FAIR Dataset Contracts for Scientific Data | Tesseract Academy',
  description:
    'A self-initiated, open-data demonstration: an open SHACL dataset-contract toolkit for scientific research data, tested against 30 real public immune and multi-omics datasets. Every dataset was catalogued; none met a hard-FAIR, machine-readable contract.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  about: { '@type': 'Thing', name: 'FAIR data, dataset contracts, scientific data reuse' },
  keywords:
    'FAIR data, dataset contract, SHACL, scientific data, biomedical data, multi-omics, provenance, RO-Crate, FAIRSCAPE, AI-ready data, knowledge graph',
};

const STATS = [
  { label: 'Real datasets tested', value: '30' },
  { label: 'Meet a hard-FAIR contract', value: '0%' },
  { label: 'Lack a machine-readable schema', value: '100%' },
];

const FINDINGS = [
  { req: 'Structured schema (variableMeasured)', missing: '100% (30/30)' },
  { req: 'Machine-readable distribution / access', missing: '100% (30/30)' },
  { req: 'Dataset version', missing: '73% (22/30)' },
  { req: 'Keywords / subjects', missing: '50% (15/30)' },
];

export const FairScientificData: React.FC = () => {
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
          Self-initiated demonstration
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          FAIR Dataset Contracts for Scientific Data
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          We built an open toolkit that turns "is this dataset actually reusable?" into a machine-checkable question, then ran it against thirty real, published biomedical datasets. The result is a measured gap between data that is deposited and data that is contract-ready.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
            <p className="text-3xl font-extrabold text-gov-dark">{s.value}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The gap: findable is not the same as reusable</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          As research organisations move data closer to AI systems, the constraint is rarely the science and often the plumbing: whether a computational output can be reliably found, assembled, trusted and reused without bespoke manual wrangling for every project. A dataset can carry a DOI, a title and a landing page, and still be impossible for a machine to reuse, because the metadata that automation depends on is absent. FAIR (Wilkinson et al., 2016) named the principles; frameworks such as FAIRSCAPE (Al Manir, Clark et al.) and the Bridge2AI metadata work (Caufield, Munoz-Torres et al.) have since defined what AI-ready biomedical data should look like. What has been missing is a simple, open way to <em>check</em> a dataset against those expectations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          An open, reproducible toolkit that expresses a FAIR "dataset contract" as machine-readable constraints and validates any dataset's metadata against it:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gov-secondary/90 leading-relaxed">
          <li>A library of <strong>SHACL shapes</strong> for a scientific dataset contract, grounded in real vocabularies (schema.org, DCAT, Bioschemas, RO-Crate) and expressed at two tiers: a minimal catalogue level and a strict, hard-FAIR level.</li>
          <li>A <strong>validator</strong> (built on pyshacl and rdflib) that takes a dataset's metadata as JSON-LD or Turtle and returns a conformance report with precise, machine-readable messages.</li>
          <li>A <strong>FAIR / AI-readiness self-assessment</strong> that operationalises the FAIRSCAPE and Bridge2AI criteria as a runnable checklist and score, rather than a static PDF.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The finding</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          We discovered thirty real public datasets (single-cell, CyTOF, spatial and multi-omics immunology) through the Zenodo API, fetched their schema.org metadata by DOI content negotiation, and validated each with the toolkit. Every dataset passed a permissive, catalogue-level contract. None passed the strict, machine-readable one.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gov-border">
                <th className="py-3 pr-4 text-sm font-semibold uppercase tracking-wider text-gov-blue">Requirement most often absent</th>
                <th className="py-3 text-sm font-semibold uppercase tracking-wider text-gov-blue">Datasets missing it</th>
              </tr>
            </thead>
            <tbody>
              {FINDINGS.map((f) => (
                <tr key={f.req} className="border-b border-gov-border/40">
                  <td className="py-3 pr-4 text-gov-secondary/90">{f.req}</td>
                  <td className="py-3 font-semibold text-gov-dark">{f.missing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-secondary/90 leading-relaxed">
          The headline (zero of thirty meet the strict contract) holds on the unambiguous fields alone: a structured schema and a machine-readable distribution are absent from every record. The measurement is of published catalogue metadata, which is exactly what reuse automation acts on. Every DOI, HTTP status and per-dataset result is recorded in the repository, so the analysis is fully reproducible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Why it matters for research data platforms</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          For any organisation building an AI-ready data platform, whether a biotech scaling multi-omics or a public research programme, the distance between "we deposited it" and "a machine can find, assemble and trust it" is precisely this contract layer. Making that layer explicit and testable is what turns scattered pipeline outputs into governed, reusable data products, with structure, provenance, versioning and access that hold up to reuse and, later, to regulated use.
        </p>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Open toolkit and how we work</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          The shapes, validator, readiness rubric and the full strictness analysis are open source under an MIT licence. You can run the contract against your own datasets in minutes.
        </p>
        <a
          href="https://github.com/fabio-rovai/fair-scientific-data"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gov-blue font-semibold hover:text-gov-blue-dark hover:underline"
        >
          github.com/fabio-rovai/fair-scientific-data
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-gov-secondary/90 leading-relaxed">
          If you are building or governing a scientific data platform and want the dataset-contract, provenance and metadata layer done properly, we would be glad to talk. Contact us at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue font-semibold hover:underline">fabio@thetesseractacademy.com</a>{' '}
          or see{' '}
          <Link to="/how-to-buy" className="text-gov-blue font-semibold hover:underline">how to work with us</Link>.
        </p>
      </section>

      <p className="text-xs text-gov-secondary/60 leading-relaxed">
        Sources and grounding: Wilkinson et al., The FAIR Guiding Principles (Scientific Data, 2016); Al Manir, Clark et al., FAIRSCAPE AI-readiness framework; Caufield, Munoz-Torres et al., Bridge2AI metadata standards (arXiv:2509.10432); Leo, Soiland-Reyes et al., Workflow Run RO-Crate provenance (PLoS One, 2024). Analysis run 1 July 2026 on 30 public datasets retrieved via the Zenodo API.
      </p>
    </article>
  );
};
