import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/machine-validated-open-ontologies#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/machine-validated-open-ontologies',
  headline: 'Publishing machine-validated open data structures for the public sector | Tesseract Academy',
  description:
    'Three delivered examples of open, machine-validated data structures: the Skills England occupational maps as a formal ontology (51,355 triples, 0 SHACL violations), the open-ontologies validation toolkit with external contributors, and a computation-ready heritage aerial-photography archive standard (292 digitised frames, 0 SHACL violations). Structured data is only valuable if its quality is machine-verifiable; we build the validation tooling and publish it openly.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  about: {
    '@type': 'Thing',
    name: 'Machine-validated open data structures',
  },
  keywords:
    'ontology, SHACL, validation, open data, data quality, tagging quality, Skills England, heritage archives, open source, knowledge graph, public sector data standards',
};

const DELIVERIES = [
  {
    name: 'Skills England Occupational Maps ontology',
    scale: '51,355 triples',
    validation: '0 SHACL violations',
    detail: 'The national occupational maps converted into an open, formally structured ontology.',
  },
  {
    name: 'open-ontologies toolkit',
    scale: 'Open-source validation primitives',
    validation: 'Deterministic machine checks',
    detail: 'Ontology quality checks anyone can run, with external contributors including an engineer at Hyundai.',
  },
  {
    name: 'Heritage aerial-photography archive standard',
    scale: '292 digitised frames',
    validation: '0 SHACL violations',
    detail: 'A digitised archive modelled computation-ready, with every frame passing machine validation.',
  },
];

export const MachineValidatedOpenOntologies: React.FC = () => {
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
          Case Study: Open Data Infrastructure
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Publishing machine-validated open data structures for the public sector
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Structured, tagged data is only valuable if its quality is machine-verifiable. Across national skills data,
          heritage archives and an open-source toolkit, we build formally structured data, validate every statement with
          deterministic machine checks, and publish both the data and the validation tooling openly so anyone can re-run
          the checks.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Skills England ontology</p>
          <p className="text-3xl font-extrabold text-gov-dark">51,355</p>
          <p className="text-sm text-gov-secondary mt-1">triples, 0 SHACL violations</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Heritage archive</p>
          <p className="text-3xl font-extrabold text-gov-dark">292</p>
          <p className="text-sm text-gov-secondary mt-1">digitised frames, 0 SHACL violations</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Validation toolkit</p>
          <p className="text-3xl font-extrabold text-gov-dark">Open</p>
          <p className="text-sm text-gov-secondary mt-1">published on GitHub, external contributors</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Public bodies publish ever more structured and tagged data: classifications, registers, taxonomies,
            machine-readable records. The tagging is the easy part to claim and the hard part to trust. A dataset can
            look structured while carrying broken references, malformed records and statements that violate its own
            schema, and none of that is visible to a human reader. Quality assertions ("the data is clean") are not the
            same as quality evidence.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The fix is to make quality machine-verifiable: publish the data with a formal schema and constraint rules,
            validate every statement against them, and publish the validation tooling itself so the checks can be re-run
            by anyone, not just taken on the publisher's word. This mirrors how regulators overseeing structured digital
            reporting think about tagging quality: what matters is not that data carries tags, but that the tags are
            demonstrably correct.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What We Delivered</h2>
        <p className="text-gov-secondary leading-relaxed">
          Three delivered examples of the same discipline. In each case validation is done with SHACL, the W3C's
          constraint-validation standard: a formal rulebook stating what a well-formed record must look like, checked by
          machine. Zero violations means every statement in the dataset passed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Delivery</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Scale</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Validation</th>
              </tr>
            </thead>
            <tbody>
              {DELIVERIES.map((d, i) => (
                <tr key={d.name} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{d.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{d.scale}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{d.validation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">The national occupational maps, as a validated ontology</h3>
          <p className="text-gov-dark leading-relaxed">
            We converted the Skills England occupational maps into an open, formally structured ontology: 51,355 triples
            covering occupational standards and the relationships between them, validated at zero SHACL violations.
            Every statement in the graph passed machine validation against the published constraint rules. The ontology
            and an interactive explorer are available in our{' '}
            <Link
              to="/research/skills-england-occupational-maps"
              className="text-gov-blue underline hover:text-gov-blue-dark"
            >
              Skills England occupational maps write-up
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">An open toolkit for ontology quality</h3>
          <p className="text-gov-dark leading-relaxed">
            The checks themselves are not bespoke one-offs. We maintain{' '}
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">
              open-ontologies
            </a>
            , an open-source toolkit of validation primitives for ontology quality. The design principle is that quality
            checking should be a deterministic machine check, not an LLM's opinion: a term exists in a vocabulary or it
            does not, a record satisfies a constraint or it does not. The project has attracted external contributors,
            including an engineer at Hyundai, which is what open validation tooling should do: outgrow its authors.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">A computation-ready heritage archive</h3>
          <p className="text-gov-dark leading-relaxed">
            The same discipline applies well beyond skills data. For a heritage aerial-photography archive we modelled
            292 digitised frames computation-ready, again validated at zero SHACL violations, turning a digitised
            collection into structured data that analysis can be run on directly. The full account is in our{' '}
            <Link
              to="/research/computation-ready-aerial-heritage"
              className="text-gov-blue underline hover:text-gov-blue-dark"
            >
              computation-ready aerial heritage write-up
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            Each publication carries its own evidence of quality: a formal schema, a machine-run validation report and
            the open tooling to reproduce it. A public body, a researcher or a regulator does not have to trust our
            claim that the data is well-formed; they can re-run the checks and see the zero-violations result for
            themselves. That is the standard we believe all published structured data should meet, and it is the
            standard we hold our own work to.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">
            "Anyone can publish tagged data. The question that matters is whether the tags survive machine validation.
            We publish the data, the rules and the checker together, so the answer is never a matter of opinion."
          </p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">
            Fabio Rovai, Tesseract Academy
          </cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Open validation tooling</p>
          <p className="text-sm text-gov-secondary mt-1">
            The open-ontologies toolkit, and the Skills England ontology it validates, are published for reuse.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            open-ontologies on GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            to="/research/skills-england-occupational-maps"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            Explore the Skills England ontology
          </Link>
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
