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
    'An open, reproducible study of 1,738 real public biomedical datasets across three major repositories, plus an open, tool-certified ontology that models what an AI-ready dataset needs. Datasets are overwhelmingly findable and accessible, but none is interoperable or AI-ready.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-02',
  about: { '@type': 'Thing', name: 'FAIR data, dataset contracts, AI-ready scientific data, ontology' },
  keywords:
    'FAIR data, dataset contract, SHACL, OWL ontology, scientific data, biomedical data, multi-omics, provenance, RO-Crate, FAIRSCAPE, Bridge2AI, Croissant, AI-ready data, knowledge graph',
};

const STATS = [
  { label: 'Real datasets analysed (3 repositories)', value: '1,738' },
  { label: 'Interoperable or AI-ready', value: '0%' },
  { label: 'Lack a machine-readable schema', value: '100%' },
];

const TIERS = [
  { tier: 'Findable (PID, title, description)', rate: '99.9%' },
  { tier: 'Accessible (machine-readable distribution)', rate: '91.3%' },
  { tier: 'Interoperable (machine-readable schema, version)', rate: '0.0%' },
  { tier: 'AI-ready (checksums, provenance, data dictionary)', rate: '0.0%' },
];

export const FairScientificData: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Self-initiated study and open ontology
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          FAIR Dataset Contracts for Scientific Data
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          We turned "is this dataset actually reusable?" into a machine-checkable question, ran it across 1,738 real published biomedical datasets from three major repositories, and then built the open ontology that models the layer they are missing. The result is a measured gap between data that is deposited and data that is AI-ready, and a validated model for closing it.
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
          As research organisations move data closer to AI systems, the constraint is rarely the science and often the plumbing: whether a computational output can be reliably found, assembled, trusted and reused without bespoke manual wrangling for every project. A dataset can carry a DOI, a title and a landing page, and still be impossible for a machine to reuse, because the metadata that automation depends on is absent. FAIR (Wilkinson et al., 2016) named the principles; frameworks such as FAIRSCAPE (Al Manir, Clark et al.) and the Bridge2AI metadata work (Caufield, Munoz-Torres et al.) have since defined what AI-ready biomedical data should look like. What has been missing is a simple, open way to <em>check</em> a dataset against those expectations, and a shared model of what "AI-ready" concretely requires.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The study: 1,738 real datasets, four FAIR tiers</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          We assembled 1,738 real public datasets (single-cell, proteomics, spatial and multi-omics) from three major repositories, EMBL-EBI BioStudies (798), Dryad (340) and PRIDE / ProteomeXchange (600), normalised their metadata across profiles, and validated each against a tiered contract that operationalises the 28 FAIRSCAPE criteria. Findability is anchored on a persistent identifier, title and description; keywords and licence are reported as sub-metrics.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gov-border">
                <th className="py-3 pr-4 text-sm font-semibold uppercase tracking-wider text-gov-blue">FAIR tier</th>
                <th className="py-3 text-sm font-semibold uppercase tracking-wider text-gov-blue">Datasets conforming</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t) => (
                <tr key={t.tier} className="border-b border-gov-border/40">
                  <td className="py-3 pr-4 text-gov-secondary/90">{t.tier}</td>
                  <td className="py-3 font-semibold text-gov-dark">{t.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-secondary/90 leading-relaxed">
          Datasets are overwhelmingly findable and mostly accessible, but not one of the 1,738 is interoperable or AI-ready. Across the whole corpus, 100% lack a machine-readable schema, 100% lack checksums and machine-readable provenance, and about 80% lack a version. FAIR breaks precisely at the machine-readable structural and provenance layer that automated assembly, trust and AI reuse depend on. Every DOI, HTTP status and per-dataset result is recorded in the repository, so the analysis is fully reproducible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The remedy: an open, certified ontology</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          Measuring the gap is not enough, so we built the model that fills it: an OWL 2 ontology (<code>far:</code>, the FAIR AI-Ready Dataset ontology) that defines what a dataset needs to be a reusable, AI-ready data product, a machine-readable schema, provenance, integrity checks, a data dictionary, an ethics basis and access specification. Rather than reinvent vocabulary, it composes and aligns to existing standards, with 44 mappings to schema.org, W3C DCAT and PROV-O, SPDX, Bioschemas and MLCommons Croissant. The SHACL tiers are its validation layer, so the diagnostic and the remedy are one coherent artifact.
        </p>
        <p className="text-gov-secondary/90 leading-relaxed">
          The ontology is certified through our open-source Open Ontologies engine: it validates cleanly, passes governance linting with zero issues, and is logically consistent under OWL reasoning.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">From 0 to 100%: we do not just measure the gap, we close it</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          To prove the model works, we took a real open dataset from 0% to 100% AI-ready. The Zenodo Andean climate dataset (a dense high-Andean weather-station network in southern Ecuador) is findable and accessible but, like the rest of the corpus, fails the machine-readable layer: 0% AI-ready in its published form. Using the ontology and toolkit, we enriched it with values derived entirely from the dataset itself: a real SHA-256 integrity checksum, a variable schema and data dictionary built from its 12 real columns, a sample count from its 226 rows, a machine-readable provenance record, and a controlled-vocabulary subject. The enriched record then passes all four tiers, with zero violations against the same published SHACL contract.
        </p>
        <figure className="bg-white border border-gov-border/50 rounded-xl p-4">
          <img src="/fair-ai-ready-before-after.png" alt="Before and after remediation: AI-readiness score 0% to 100%, tiers passed 1 of 4 to 4 of 4, for the Zenodo Andean climate dataset" className="w-full h-auto rounded" />
          <figcaption className="text-xs text-gov-secondary/70 mt-2 text-center">A real dataset taken from 0% to 100% AI-ready, validated against the same published contract.</figcaption>
        </figure>
        <p className="text-gov-secondary/90 leading-relaxed">
          The full study and this worked remediation are written up in a short report:{' '}
          <a href="/papers/fair-ai-ready-datasets-tesseract-report.pdf" target="_blank" rel="noopener noreferrer" className="text-gov-blue font-semibold hover:underline">read the report (PDF)<span className="sr-only"> (opens in new tab)</span></a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Why it matters for research data platforms</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          For any organisation building an AI-ready data platform, whether a biotech scaling multi-omics or a public research programme, the distance between "we deposited it" and "a machine can find, assemble and trust it" is precisely this contract layer. Making that layer explicit, modelled and testable is what turns scattered pipeline outputs into governed, reusable data products, with structure, provenance, versioning and access that hold up to reuse and, later, to regulated use.
        </p>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Open toolkit and how we work</h2>
        <p className="text-gov-secondary/90 leading-relaxed">
          The ontology, the tiered SHACL contract, the validator, the readiness rubric and the full 1,738-dataset analysis are open source under an MIT licence. You can run the contract against your own datasets in minutes.
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
        Sources and grounding: Wilkinson et al., The FAIR Guiding Principles (Scientific Data, 2016); Al Manir, Clark et al., FAIRSCAPE AI-readiness framework; Caufield, Munoz-Torres et al., Bridge2AI metadata standards (arXiv:2509.10432); Leo, Soiland-Reyes et al., Workflow Run RO-Crate provenance (PLoS One, 2024); W3C DCAT and PROV-O; MLCommons Croissant. Analysis run 2 July 2026 on 1,738 public datasets from EMBL-EBI BioStudies, Dryad and PRIDE / ProteomeXchange.
      </p>
    </article>
  );
};
