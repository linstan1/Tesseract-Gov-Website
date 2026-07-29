import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/neurosymbolic-space-kg';
const COURSE = 'https://tesseract.academy/courses/neurosymbolic-ai-in-space-knowledge-graphs-for-orbit/';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/neurosymbolic-space-kg#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/neurosymbolic-space-kg',
  headline:
    'The reasoner is silent in orbit: a knowledge graph of all 70,122 catalogued space objects | Tesseract Academy',
  description:
    'A public knowledge graph of every catalogued space object (832,680 triples from a pinned CelesTrak SATCAT snapshot), aligned to the Space Situational Awareness Ontology. The headline measurement: the domain ontology declares one disjointness axiom, so 99.4% of its vocabulary can never reject a wrong AI classification. The catalogue itself refutes plausible mis-mappings with thousands of instance witnesses, and yields debris-mitigation signals including a 10,016-object lower bound on the IADC 25-year population.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  about: {
    '@type': 'Dataset',
    name: 'Neurosymbolic space knowledge graph',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  citation: [
    {
      '@type': 'Course',
      name: 'Neurosymbolic AI in Space: Knowledge Graphs for Orbit',
      url: COURSE,
      description:
        'Free 15-lesson course: building the orbital knowledge graph, measuring the ontology, and gating neural extraction with symbolic and instance-level checks.',
      provider: { '@id': 'https://gov.tesseract.academy/#organization' },
    },
  ],
  keywords:
    'space situational awareness, knowledge graph, ontology alignment, SSAO, SSSOM, space debris, IADC, neurosymbolic AI, SATCAT, CelesTrak',
};

export const NeurosymbolicSpaceKg: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The reasoner is silent in orbit: a knowledge graph of every catalogued space object
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        As AI systems begin filing space data under ontology terms automatically, we measured what would catch their mistakes. The domain&apos;s best-known ontology can reject almost nothing. The catalogue itself can reject almost everything.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">The graph</p>
        <p className="text-3xl font-extrabold text-gov-dark">832,680</p>
        <p className="text-sm text-gov-secondary mt-1">triples covering all 70,122 catalogued objects, pinned snapshot</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Ontology can refute</p>
        <p className="text-3xl font-extrabold text-gov-dark">0.6%</p>
        <p className="text-sm text-gov-secondary mt-1">2 of 353 SSAO classes reachable by its single disjointness axiom</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Catalogue can refute</p>
        <p className="text-3xl font-extrabold text-gov-dark">35,411</p>
        <p className="text-sm text-gov-secondary mt-1">instance witnesses against the worst plausible mis-mapping</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What we found</h2>
        <p className="text-gov-dark leading-relaxed">
          The Space Situational Awareness Ontology declares exactly one exclusion axiom, and it separates two coordinate <em>representation formats</em>. Nothing separates payloads from debris, operational from defunct spacecraft, or geostationary from merely geosynchronous orbits. A reasoner therefore accepts any classification of the orbital vocabulary, however wrong: silence, not assent.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The compensating asset is the public catalogue. We built a knowledge graph of all 70,122 tracked objects from a hash-pinned CelesTrak SATCAT snapshot, aligned its lifted vocabulary to the ontology in an argued SSSOM crosswalk, and stress-tested four deliberately wrong but lexically plausible mappings of the kind automated matchers propose. The reasoner was silent on all four. The instance data refuted all four: <strong>9,031</strong> counter-instances against payload-equals-operational, <strong>1,007 of 1,011</strong> (99.6%) against the geosynchronous-geostationary conflation, <strong>6,870 of 6,870</strong> against rocket-body-equals-payload, and <strong>35,411 of 35,411</strong> against decayed-equals-resident.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The same machinery pays operational rent: symbolic rules over the graph yield a conservative lower bound of <strong>10,016</strong> LEO objects past the IADC 25-year disposal line, <strong>619</strong> non-operational GEO payloads not yet raised to the graveyard region, and a clean zero on internal catalogue contradictions.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why it matters</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>For space AI procurement:</strong> a tool &quot;validated against the ontology&quot; has passed a gate that cannot fail. Ask what instance-level checking sits behind any accuracy claim.</li>
          <li><strong>For SSA data engineering:</strong> the catalogue is a refutation machine. Pipelines that stage AI output against instance evidence catch, grade and queue errors that schema validation waves through.</li>
          <li><strong>For debris-mitigation reporting:</strong> compliance numbers can be re-runnable queries with printed assumptions rather than slideware.</li>
        </ul>
        <p className="text-gov-dark leading-relaxed mt-3">
          This page is deliberately the short version. The full methodology, the two-channel falsification harness, the mutation design and the complete measurement tables are developed in a detailed research paper currently in preparation; the repository already contains everything needed to reproduce every number above with three commands.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        Data snapshot, vocabulary lift, argued alignment, falsification harness and rule signals are public under CC BY 4.0, with sources pinned by checksum. SATCAT data courtesy of CelesTrak; the SSA Ontology is by Robert J. Rovetto.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          neurosymbolic-space-kg on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={COURSE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium px-2 py-3">
          Free 15-lesson course: Neurosymbolic AI in Space <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the <Link to="/research/space-metrics-crosswalk" className="text-gov-blue underline hover:text-gov-blue-dark">space debris metrics composition checker</Link>, and the falsifiability measurements across <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial</Link> and <Link to="/research/construction-standards-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">construction</Link> data standards.
      </p>
    </section>
  </article>
);

export default NeurosymbolicSpaceKg;
