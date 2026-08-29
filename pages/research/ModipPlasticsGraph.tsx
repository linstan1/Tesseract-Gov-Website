import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/modip-plastics-kg';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/modip-plastics-knowledge-graph#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/modip-plastics-knowledge-graph',
  headline: 'From raw museum records to a knowledge graph: a worked example on the Museum of Design in Plastics | Tesseract Academy',
  description:
    "A reproducible pipeline that turns a small museum's raw open catalogue (11,865 objects from the Museum of Design in Plastics, published CC BY 4.0 via the Museum Data Service) into a standards-based knowledge graph: a SKOS materials taxonomy grounded in polymer science, a CIDOC-CRM instance graph, verified Getty AAT alignments, and a variant graph recovered from description prose. 99.9% of 35,172 free-text material tags resolved; zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'MoDiP Plastics Knowledge Graph',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'collections as data, museum data, CIDOC-CRM, Linked Art, SKOS, Getty AAT, Spectrum, knowledge graph, plastics, polymer taxonomy, GLAM, Museum Data Service, MoDiP, digital heritage, SHACL',
};

const TILES = [
  { n: '11,865', l: 'object records' },
  { n: '99.9%', l: 'of material tags resolved' },
  { n: '485k', l: 'CIDOC-CRM triples' },
  { n: '0', l: 'SHACL violations' },
];

const SYNONYMS = [
  { p: 'polypropylene', s: 'PP (941) + polypropylene (940)' },
  { p: 'polyethylene', s: 'PE (790) + polyethylene (831) + polythene (767)' },
  { p: 'phenol formaldehyde', s: 'PF (516) + phenol formaldehyde (517) + bakelite (490)' },
  { p: 'acrylic (PMMA)', s: 'PMMA (355) + polymethyl methacrylate (352) + acrylic (352) + Perspex' },
  { p: 'polyamide', s: 'PA (428) + polyamide (431) + nylon (426)' },
];

const CHART = { teal: '#00897b' };

const FRAG_GROUPS: { polymer: string; rows: { label: string; value: number }[] }[] = [
  { polymer: 'polypropylene', rows: [{ label: 'PP', value: 941 }, { label: 'polypropylene', value: 940 }] },
  { polymer: 'polyethylene', rows: [{ label: 'polyethylene', value: 831 }, { label: 'PE', value: 790 }, { label: 'polythene', value: 767 }] },
  { polymer: 'phenol formaldehyde', rows: [{ label: 'phenol formaldehyde', value: 517 }, { label: 'PF', value: 516 }, { label: 'bakelite', value: 490 }] },
  { polymer: 'polyamide', rows: [{ label: 'polyamide', value: 431 }, { label: 'PA', value: 428 }, { label: 'nylon', value: 426 }] },
  { polymer: 'acrylic (PMMA)', rows: [{ label: 'PMMA', value: 355 }, { label: 'polymethyl methacrylate', value: 352 }, { label: 'acrylic', value: 352 }] },
];

const FRAG_MAX = 941;

const FragChart: React.FC = () => (
  <figure className="rounded-lg border border-gov-border bg-white p-5">
    <figcaption className="text-sm font-semibold text-gov-dark mb-3">One polymer, several unrelated strings: material-tag counts in the raw records</figcaption>
    <div className="space-y-4">
      {FRAG_GROUPS.map((g) => (
        <div key={g.polymer}>
          <p className="text-xs font-semibold text-gov-dark mb-1">{g.polymer}</p>
          <div className="space-y-1">
            {g.rows.map((r) => (
              <div key={r.label} className="flex items-center gap-3" title={`${r.label}: ${r.value} records`}>
                <span className="w-44 shrink-0 text-right text-xs text-gov-secondary leading-tight">{r.label}</span>
                <div className="flex-1 h-[14px]">
                  <div className="h-full rounded-r" style={{ width: `${(r.value / FRAG_MAX) * 100}%`, backgroundColor: CHART.teal }} />
                </div>
                <span className="w-12 shrink-0 text-xs font-semibold text-gov-dark tabular-nums">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gov-secondary mt-3">A search for any one spelling silently misses the others. The taxonomy folds every string into one concept with alternate labels, so all of them return together.</p>
  </figure>
);

export const ModipPlasticsGraph: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Collections as Data</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          From raw museum records to a knowledge graph
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          UK museums are opening their collections as data faster than the data can be made usable. The records come out as flat, free-text rows: the same polymer written four different ways, relationships between objects trapped inside caption prose, no links to anything. We took one small museum's open catalogue and did the full job end to end, on the real records, so the gap between "published" and "computable" is visible and measurable, and so the pipeline that closes it is reusable by any collection.
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
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The collection, and why it is a fair test</h2>
          <p className="text-gov-dark leading-relaxed">
            The <a href="https://www.modip.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Museum of Design in Plastics</a> (MoDiP), at the Arts University Bournemouth, is the UK's only accredited museum devoted to plastics in design. It publishes 11,865 object records through the new <a href="https://museumdata.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Museum Data Service</a> under a CC BY 4.0 licence. The records are genuinely rich, with materials, techniques, makers, places, inscriptions and dimensions, and genuinely raw: a good, honest test of what it actually takes to make museum data computable, rather than a cherry-picked clean sample.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The problem, quantified</h2>
          <p className="text-gov-dark leading-relaxed">
            Across the set there are <strong>476 distinct material strings</strong> for what is really a much smaller set of polymers. The same material is recorded under an abbreviation, a full chemical name and one or more trade names, as unrelated free text. A curator or researcher searching for one spelling silently misses the others. These are not edge cases; they are the most common materials in the collection.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">One polymer</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Recorded as these unrelated strings (with counts)</th>
              </tr>
            </thead>
            <tbody>
              {SYNONYMS.map((c, i) => (
                <tr key={c.p} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{c.p}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FragChart />
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What we built, using open standards only</h2>
          <p className="text-gov-dark leading-relaxed">
            Nothing here is a home-grown schema where a standard already exists. The vocabularies are <strong>SKOS</strong>; the instance graph is <strong>CIDOC-CRM</strong> (ISO 21127, the reference ontology for cultural heritage, Linked Art compatible); the materials are aligned by query to the <strong>Getty Art &amp; Architecture Thesaurus</strong>. A <a href={`${REPO}/blob/main/docs/spectrum-crm-mapping.md`} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">published Spectrum-to-CIDOC-CRM crosswalk</a>, which the sector has lacked in open form, maps each catalogue field to its standard property.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gov-dark leading-relaxed">
            <li>A <strong>materials taxonomy of 137 concepts</strong> grounded in polymer science (thermoplastic, thermoset, elastomer, biopolymer), with every abbreviation and trade name folded in as an alternate label, so a search for "polycarbonate" now also finds "PC" and "Lexan". It resolves <strong>99.9%</strong> of 35,172 material assertions; the 55 concepts with an exact Getty AAT peer carry a verified link, and the ones without are left unlinked rather than guessed.</li>
            <li>Process and use-domain taxonomies covering <strong>100%</strong> of their assertions.</li>
            <li>A <strong>485,000-triple CIDOC-CRM graph</strong> over all 11,865 objects, with production events, makers, places, dated time-spans, inscriptions and parsed dimensions.</li>
            <li>A <strong>variant graph</strong>: 289 object-to-object edges recovered from accession numbers that curators wrote into descriptions ("the same box but a different colourway"), turning relationships readable only by a human into a graph a machine can traverse.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Validation: zero violations, zero dangling references</h2>
          <p className="text-gov-dark leading-relaxed">
            {"SHACL validation of the full graph returns zero violations, while a closed-world vocabulary check confirms that every material, process and domain concept referenced by an object is defined, with zero dangling references. This specific check is significant because open-world validation permits dangling references to pass silently. The build report states coverage precisely: 49 single-occurrence trade names remain unresolved and are listed by name, Getty alignment is scoped by design, and noisy dates resolve to a year. The entire graph regenerates from the committed data with one command and revalidates."}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            This is one worked example of a pipeline that applies to any of the 250-plus collections already in the Museum Data Service, and to any museum sitting on a Spectrum or CSV export. It is part of Tesseract's <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Open Ontologies</a> work and shares its method with our <Link to="/research/computation-ready-aerial-heritage" className="text-gov-blue underline hover:text-gov-blue-dark">heritage aerial-photography</Link> and <Link to="/research/nature-governance-graph" className="text-gov-blue underline hover:text-gov-blue-dark">nature-governance</Link> graphs: model the domain as a sourced, validated graph so its data can be queried and checked, not just published as a download. If you run a collection, or fund one, and want your catalogue made this queryable, we would like to hear from you.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Source records &copy; the Museum of Design in Plastics / Arts University Bournemouth, published CC BY 4.0 via the Museum Data Service; this transformation released under CC BY 4.0. Endorsed by neither MoDiP nor the Museum Data Service.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open pipeline</p>
          <p className="text-sm text-gov-secondary mt-1">Taxonomies, the Spectrum-to-CRM crosswalk, the graph in Turtle, SHACL shapes, SPARQL queries and a full build report.</p>
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
