import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/nature-governance-graph';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/nature-governance-graph#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/nature-governance-graph',
  headline: 'The UK nature-governance landscape, as a graph you can cite | Tesseract Academy',
  description:
    'An open, provenance-first reference graph of the UK nature and environment governance landscape: 47 statutory agencies, NGOs, data bodies, funders, sector bodies, partnerships and international conventions, and 48 sourced relationships between them. Every relationship reified with a cited source; SHACL enforces that no edge is unsourced. Zero SHACL violations. Published in Open Ontologies under CC BY 4.0.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'UK Nature Governance Graph',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'stakeholder mapping, nature governance, environmental governance, Defra, JNCC, Natural England, Local Nature Recovery Strategies, biodiversity net gain, stakeholder engagement, knowledge graph, ontology, SHACL, provenance, PROV-O',
};

const TILES = [
  { n: '47', l: 'governance actors' },
  { n: '48', l: 'sourced relationships' },
  { n: '42', l: 'distinct cited sources' },
  { n: '0', l: 'SHACL violations' },
];

const CLASSES = [
  { c: 'Statutory agencies', ex: 'Defra, JNCC, Natural England, NRW, NatureScot, DAERA, Environment Agency, SEPA, OEP, ESS' },
  { c: 'Data / evidence bodies', ex: 'NBN Trust & Atlas, UKCEH, BTO, BSBI, Biological Records Centre, iRecord' },
  { c: 'NGOs', ex: 'National Trust, RSPB, Wildlife Trusts, Woodland Trust, WWF-UK, Plantlife, Rivers Trust' },
  { c: 'Funders', ex: 'National Lottery Heritage Fund, Esmée Fairbairn, the statutory biodiversity-credit market' },
  { c: 'Partnerships', ex: 'Local Nature Recovery Strategies, National Park Authorities, Catchment Based Approach' },
  { c: 'International', ex: 'CBD, Ramsar, OSPAR, IUCN and its UK National Committee' },
];

export const NatureGovernanceGraph: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Governance &amp; Stakeholder Mapping</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The UK nature-governance landscape, as a graph you can cite
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Stakeholder mapping for the environment sector is usually a slide: boxes and arrows, no provenance, out of date the day it is drawn. The relationships that matter, who sponsors whom, who advises government internationally, whose data flows into the national record, which duties are statutory, are exactly the ones a diagram cannot defend. This treats the landscape as data instead, and makes an unsourced link impossible by construction.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TILES.map((t) => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-2xl font-bold text-gov-dark tabular-nums font-mono">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            The <a href="https://www.legislation.gov.uk/ukpga/2021/30/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Environment Act 2021</a> reshaped who does what for nature in England: it created the Office for Environmental Protection, made Local Nature Recovery Strategies a statutory duty for 48 responsible authorities, and established mandatory Biodiversity Net Gain with a credit market run by Natural England on behalf of Defra. Any body planning stakeholder engagement, a Local Nature Recovery Strategy, a nature-market venture or an evidence partnership has to navigate this landscape correctly. Getting the relationships wrong (assuming Defra sponsors bodies it does not, or missing a statutory duty) is a real risk in a real bid or plan.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The design commitment: no unsourced edge</h2>
          <p className="text-gov-dark leading-relaxed">
            Every relationship in the graph is <strong>reified</strong> as its own node carrying a typed predicate (sponsors, advises, supplies-data-to, funds, partners-with, regulates, designated-under), a plain-language basis, and a <code className="text-sm">prov:wasDerivedFrom</code> link to a cited source with a resolvable URL. This is not a convention; it is enforced. The SHACL shapes fail the build if any relationship lacks a source, or any source lacks a URL. A relationship you cannot cite cannot enter the graph. The build validates at <strong>zero SHACL violations</strong> with full referential integrity.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Class</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Examples in the graph</th>
              </tr>
            </thead>
            <tbody>
              {CLASSES.map((c, i) => (
                <tr key={c.c} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{c.c}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where the tidy answer would be wrong</h2>
          <p className="text-gov-dark leading-relaxed">
            The graph records the accurate relationship, not the convenient one. The Forestry Commission is a non-ministerial department in the Defra group, not a sponsored public body; the Northern Ireland Environment Agency is an executive agency inside DAERA; NatureScot, Natural Resources Wales and SEPA answer to the devolved governments, not Defra; statutory biodiversity credits are sold by Natural England on behalf of Defra under Schedule 7A of the Town and Country Planning Act 1990; and Local Nature Recovery Strategy authorities are designated under Environment Act 2021 section 104. Each of those distinctions is carried in the relationship's basis and its citation, not smoothed over, because in this domain the distinction is the point.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            The graph answers competency questions directly: which bodies Defra sponsors, who supplies data to the NBN Atlas, which relationships rest on legislation. It extends to the devolved landscapes in more depth, to funding flows, and to specific programmes. It is part of Tesseract's <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Open Ontologies</a> work, and shares its method with our <Link to="/research/nature-related-security-risk" className="text-gov-blue underline hover:text-gov-blue-dark">nature-related security-risk evidence base</Link>: model the domain as a sourced, validated graph so its claims can be queried and checked, not just drawn.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research built entirely from public sources, each cited per relationship. Released under CC BY 4.0; endorsed by none of the bodies named within it.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open graph</p>
          <p className="text-sm text-gov-secondary mt-1">Ontology, SHACL shapes, the sourced graph in Turtle and JSON-LD, and competency queries.</p>
        </div>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">
          View on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </article>
  );
};
