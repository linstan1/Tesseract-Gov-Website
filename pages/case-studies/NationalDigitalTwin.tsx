import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI Ontology Extension Generator — National Digital Twin Programme | Tesseract Academy',
  description:
    'Tesseract Academy contributed to the open-source AI Ontology Extension Generator for the National Digital Twin Programme (NDTP), automating ontology development for UK infrastructure digital twins.',
  author: {
    '@type': 'Organization',
    name: 'Tesseract Academy',
    url: 'https://gov.tesseract.academy',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tesseract Academy',
  },
  datePublished: '2025-01-01',
  about: {
    '@type': 'SoftwareApplication',
    name: 'NDTP AI Ontology Extension Generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: 'https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension',
    license: 'https://www.apache.org/licenses/LICENSE-2.0',
  },
  keywords:
    'digital twin, ontology, AI, open source, NDTP, UK government, infrastructure, Named Entity Recognition, LLM',
};

const WORKFLOW_STEPS = [
  {
    step: '1',
    label: 'Data Profiling',
    detail: 'Automatic schema inference from CSV, JSON, and RDF/Turtle inputs.',
  },
  {
    step: '2',
    label: 'Named Entity Recognition',
    detail: 'NER pipeline extracts domain entities and relationships from raw data.',
  },
  {
    step: '3',
    label: 'LLM-Assisted Generation',
    detail: 'Large language models propose ontology classes, properties, and axioms.',
  },
  {
    step: '4',
    label: 'Validation and Refinement',
    detail: 'Built-in SHACL validation, visualisation, and iterative human review.',
  },
];

const FORMATS = [
  { format: 'CSV', use: 'Tabular data from legacy systems' },
  { format: 'JSON', use: 'API responses and semi-structured datasets' },
  { format: 'RDF / Turtle', use: 'Existing semantic web and linked data assets' },
];

export const NationalDigitalTwin: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'cs-ndtp-jsonld';
    script.textContent = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('cs-ndtp-jsonld');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <div>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Case Study — National Digital Twin Programme
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          AI Ontology Extension Generator — National Digital Twin Programme
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Production-ready open-source tool published under the National-Digital-Twin GitHub organisation. Apache License 2.0. Automates ontology generation for UK infrastructure digital twins.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Client</p>
          <p className="text-base font-bold text-gov-dark">NDTP</p>
          <p className="text-sm text-gov-secondary mt-1">Dept. for Business and Trade</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Workflow</p>
          <p className="text-3xl font-extrabold text-gov-dark">4-step</p>
          <p className="text-sm text-gov-secondary mt-1">guided wizard interface</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Input Formats</p>
          <p className="text-3xl font-extrabold text-gov-dark">3</p>
          <p className="text-sm text-gov-secondary mt-1">CSV, JSON, RDF/Turtle</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The National Digital Twin Programme (NDTP) — a UK Government initiative under the Department for Business and Trade — needed to accelerate digital twin creation across UK infrastructure. Ontology development was a critical bottleneck: manual methods were too slow and required specialist expertise not always available within delivery teams.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The challenge was to automate ontology extension while preserving semantic rigour. The tool had to support heterogeneous data formats and integrate with existing linked data assets.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">4-Step Wizard Workflow</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-12">Step</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Stage</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What happens</th>
              </tr>
            </thead>
            <tbody>
              {WORKFLOW_STEPS.map((s, i) => (
                <tr
                  key={s.step}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{s.step}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{s.label}</td>
                  <td className="px-4 py-3 text-gov-secondary">{s.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Supported Input Formats</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Format</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {FORMATS.map((f, i) => (
                <tr
                  key={f.format}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 font-mono font-medium text-gov-dark">{f.format}</td>
                  <td className="px-4 py-3 text-gov-secondary">{f.use}</td>
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
            Delivered a production-ready Streamlit web application. Built-in validation and visualisation tools allow teams to review and refine generated ontologies before publication. The tool is published on GitHub under the National-Digital-Twin organisation.
          </p>
          <ul className="mt-4 space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Code: Apache License 2.0 — free for public and commercial reuse.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Documentation: Open Government Licence v3.0.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">—</span>
              <span>Actively maintained by the NDTP organisation.</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open-source repository</p>
          <p className="text-sm text-gov-secondary mt-1">
            Published on GitHub under the National-Digital-Twin organisation.
          </p>
        </div>
        <a
          href="https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
        >
          View on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
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
    </div>
  );
};
