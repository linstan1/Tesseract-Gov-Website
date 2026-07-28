import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/industrial-ontology-crosswalks';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/industrial-ontology-crosswalks#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/industrial-ontology-crosswalks',
  headline:
    'Why industrial data crosswalks fail: falsifiability, measured across seven standards | Tesseract Academy',
  description:
    'Open crosswalks between four pairs of industrial data standards (ISO 15926-14, IFC4, ISA-95, CFIHOS, OPC UA, SAREF, Asset Administration Shell), plus the measurement that explains why such crosswalks fail. Four of the seven standards cannot reject any mis-mapping at all. IFC4 has 163 times more disjointness axioms than ISO 15926-14 and is 6.6 times less checkable. Every correspondence in the flagship crosswalk passes validation alone, while the set collapses 29 classes when asserted together.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  about: {
    '@type': 'Dataset',
    name: 'Industrial ontology crosswalks',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'ISO 15926, IFC, ISA-95, IEC 62264, CFIHOS, OPC UA, SAREF, Asset Administration Shell, ontology alignment, crosswalk, SSSOM, SHACL, OWL reasoning, HermiT, coherence, conservativity, falsifiability, industrial data, capital facilities handover, digital twin',
};

const FALSIFIABILITY = [
  { vocab: 'ISO 15926-14 (IDO)', classes: '49', disj: '15', rate: '75.94%', tone: 'good' },
  { vocab: 'ISO 15926-2:2003', classes: '201', disj: '781', rate: '46.81%', tone: 'mid' },
  { vocab: 'IFC4 ADD2', classes: '1,286', disj: '2,443', rate: '11.45%', tone: 'mid' },
  { vocab: 'SAREF core', classes: '95', disj: '0', rate: '0.00%', tone: 'bad' },
  { vocab: 'Asset Administration Shell', classes: '64', disj: '0', rate: '0.00%', tone: 'bad' },
  { vocab: 'CFIHOS V2.0 (IDO-aligned)', classes: '1,397', disj: '0', rate: '0.00%', tone: 'bad' },
  { vocab: 'OPC UA Device Information', classes: '53', disj: '0', rate: '0.00%', tone: 'bad' },
];

const TONE: Record<string, string> = {
  good: 'bg-emerald-50 text-emerald-800',
  mid: 'bg-amber-50 text-amber-800',
  bad: 'bg-rose-50 text-rose-800',
};

const DELIVERABLES = [
  { item: 'Four crosswalks', detail: 'ISO 15926-14 to IFC4, ISA-95 to Asset Administration Shell, CFIHOS to ISO 15926-14, and SAREF4INMA to OPC UA. SSSOM correspondences with predicate, confidence, justification and provenance.' },
  { item: 'Asserted non-mappings', detail: 'The pairs that look alignable and are not, published as machine-readable denials rather than left as silent omissions. Seventeen across the two mapped pairs.' },
  { item: 'Axiomatic Strength Index', detail: 'A reproducible count, per standard, of the axioms actually capable of producing a contradiction.' },
  { item: 'Falsifiability rate', detail: 'The fraction of possible mis-groundings a vocabulary can reject. The metric that decides whether any automated check of an alignment can work at all.' },
  { item: 'Documented schema lifts', detail: 'ISA-95 ships XML Schemas and OPC UA ships an address-space NodeSet, so both need transforming before alignment. The transformations are first-class artefacts that count and report what they discard.' },
  { item: 'Reasoner-certified bridge', detail: 'The flagship crosswalk promoted to OWL and certified with the HermiT reasoner: 21 of 24 candidate axioms survive, with zero new unsatisfiable classes and zero conservativity violations.' },
  { item: 'Independent audit', detail: 'A published third-party CFIHOS alignment audited for how much of it a reasoner is in a position to check.' },
];

const DIVERGENCES = [
  {
    kind: 'Trap',
    pair: 'ido:PhysicalQuantity vs ifc:IfcPhysicalQuantity',
    detail: 'The pair a lexical matcher ranks first, and it is wrong. In ISO 15926-14 a PhysicalQuantity is a Quality borne by the pipe. In IFC it is a recorded measurement value. The correct target is ido:QualityDatum, which sits in a branch the first model declares disjoint from qualities.',
  },
  {
    kind: 'Trap',
    pair: 'ido:System vs ifc:IfcSystem',
    detail: 'Identical names concealing a genuine disagreement about the world. ISO 15926-14 permits one pump to be both a functional object and a physical object. IFC places IfcSystem under IfcGroup, which it declares disjoint from IfcProduct. Assert both mappings and any functional-and-physical item becomes impossible.',
  },
  {
    kind: 'Trap',
    pair: 'ido:Site vs ifc:IfcSite',
    detail: 'Process industry treats space as a frame of reference; construction treats it as a physical object with geometry. The two sit on opposite sides of ISO 15926-14 own disjointness, and the reasoner rejects this pair in every direction.',
  },
  {
    kind: 'Trap',
    pair: 'ido:Stream vs ifc:IfcFlowSegment',
    detail: 'Contents versus container. The first is the fluid in motion, the second is the pipe. Tooling that equates them attaches composition and temperature to pipework, and diameter and insulation to the fluid, with nothing in either schema to stop it.',
  },
  {
    kind: 'Convergence',
    pair: 'ido:Actual / ido:Specified vs ifc:IfcObject / ifc:IfcTypeObject',
    detail: 'The strongest agreement in the set, and one no label matcher would find. Two committees, one from process industry and one from construction, working decades apart, independently drew the same line between the thing as designed and the thing as built, and independently declared it exclusive. A crosswalk between industrial standards should start at the matching disjointness, not the matching labels.',
  },
  {
    kind: 'Gap',
    pair: 'ido:Function and ido:Capability vs IFC',
    detail: 'IFC has no class for what a thing is for. It can name a pump as a pump through a type enumeration, but cannot say that a valve is capable of isolating a line without asserting that it currently is. Recorded as an asserted absence, because no counterpart exists and no mapping found are different claims.',
  },
];

const DIVERGENCE_STYLES: Record<string, string> = {
  Trap: 'bg-rose-50 text-rose-800',
  Convergence: 'bg-emerald-50 text-emerald-800',
  Gap: 'bg-amber-50 text-amber-800',
};

export const IndustrialOntologyCrosswalks: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Why industrial data crosswalks fail, measured across seven standards
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Open crosswalks between four pairs of industrial data standards, and the measurement that explains why this kind of work goes wrong. Four of the seven standards examined cannot reject a mis-mapping at all, so the reasoner check most projects rely on could never have failed.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Standards measured</p>
        <p className="text-3xl font-extrabold text-gov-dark">7</p>
        <p className="text-sm text-gov-secondary mt-1">across four crosswalk pairs</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Cannot be contradicted</p>
        <p className="text-3xl font-extrabold text-gov-dark">4 / 7</p>
        <p className="text-sm text-gov-secondary mt-1">zero disjointness axioms, so zero checkability</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Reasoner-certified</p>
        <p className="text-3xl font-extrabold text-gov-dark">21 / 0</p>
        <p className="text-sm text-gov-secondary mt-1">bridge axioms; zero new incoherences</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
        <p className="text-gov-dark leading-relaxed">
          A process plant is designed in an <strong>ISO 15926</strong> world and handed to an operator whose asset system runs on <strong>IFC</strong> or <strong>CFIHOS</strong>. A factory is specified in <strong>ISA-95</strong> and expected to expose itself through an <strong>Asset Administration Shell</strong> or <strong>OPC UA</strong>. Every party holds valid, standards-conformant data, and the join still fails. This is the capital-facilities handover problem, and it recurs in every infrastructure, energy and defence estate programme that has to carry information from design into operation.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The usual diagnosis is that the file formats differ. That diagnosis is wrong, and expensively so. Measured across the published ontologies, the exact normalised term overlap between CFIHOS V2.0 and IFC4 is <strong>one class name</strong>, across 1,397 and 1,286 classes respectively. The failure is semantic: the same word denotes different things, and the same thing carries different words.
        </p>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Deliverable</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it is</th>
            </tr>
          </thead>
          <tbody>
            {DELIVERABLES.map((d, i) => (
              <tr key={d.item} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{d.item}</td>
                <td className="px-4 py-3 text-gov-secondary">{d.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The finding: most of these standards cannot tell you that you are wrong</h2>
        <p className="text-gov-dark leading-relaxed">
          An ontology can only prove a mapping impossible if it contains an axiom capable of producing a contradiction. Count, for each standard, the fraction of class pairs that provably cannot share an instance. That is its <strong>falsifiability rate</strong>: the ceiling on what any automated check of an alignment into it can ever catch.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Standard</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Classes</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Disjointness axioms</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Falsifiability</th>
            </tr>
          </thead>
          <tbody>
            {FALSIFIABILITY.map((r, i) => (
              <tr key={r.vocab} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.vocab}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.classes}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.disj}</td>
                <td className="px-4 py-3 text-right">
                  <span className={`font-semibold px-2 py-0.5 rounded ${TONE[r.tone]}`}>{r.rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Four of the seven score exactly zero. No mis-mapping into CFIHOS, SAREF, the Asset Administration Shell or OPC UA Device Information can ever be rejected by a reasoner, because none of them asserts a single disjointness axiom. Running a reasoner over such an alignment and reporting that it is consistent measures the vocabulary, not the alignment. It would return the same answer for a deliberately absurd mapping.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second result is the one that changes practice. <strong>IFC4 carries 163 times more disjointness axioms than ISO 15926-14 and is 6.6 times less checkable.</strong> Axiom count is a poor proxy for rigour; axiom placement decides it. The 15 axioms in ISO 15926-14 sit at the top of a 49-class hierarchy and propagate down to three quarters of all class pairs. The 2,443 in IFC4 sit between leaf siblings, distinguishing a wall from a beam while saying nothing across branches. For anyone choosing a hub vocabulary for an estate or a digital twin, that is the number to procure against.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why reviewing mappings one at a time cannot work</h2>
        <p className="text-gov-dark leading-relaxed">
          Both flagship ontologies are individually sound: reasoned alone, ISO 15926-14 and IFC4 each have zero unsatisfiable classes, and merging them with no bridge changes nothing. So any damage is attributable to the crosswalk alone.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          Each of the 24 correspondences was then added on its own and measured. <strong>Every single one is harmless in isolation: zero unsatisfiable classes, zero invented subsumptions, 24 times out of 24.</strong> Assert the same 24 together and 29 IFC classes lose all possible instances, including IfcSite, IfcBuilding, IfcBuildingStorey and IfcSpace, while the merge invents 91 subsumptions that neither standard states. One of them entails that every process stream is a manufactured article.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The failure is emergent, and it needs at least two correspondences to interact. That has a direct consequence for assurance: reviewing a crosswalk correspondence by correspondence, which is what mapping review and most alignment tooling do, <strong>cannot detect this class of fault by construction</strong>. The smallest unit of failure is a pair of mappings, not a mapping.
        </p>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Named divergences, not silent omissions</h2>
      <div className="space-y-3">
        {DIVERGENCES.map((d, i) => (
          <div key={i} className="border border-gov-border/50 rounded-xl p-5 bg-white">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${DIVERGENCE_STYLES[d.kind]}`}>{d.kind}</span>
              <code className="text-sm font-semibold text-gov-dark">{d.pair}</code>
            </div>
            <p className="text-sm text-gov-secondary leading-relaxed">{d.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Each of these is published as a machine-readable asserted non-mapping, so a tool consuming the crosswalk is told not to make the join rather than left to discover the problem in production.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for a buyer</h2>
        <p className="text-gov-dark leading-relaxed">
          Three procurement-relevant conclusions follow, and none of them requires an ontologist to act on.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>Do not accept a clean reasoner report as evidence of a good alignment.</strong> Ask for the falsifiability rate of the target vocabulary alongside it. If that rate is zero, the report is uninformative by construction.</li>
          <li><strong>Do not accept per-mapping review as assurance.</strong> It is structurally blind to the most common failure mode. Ask what pairwise or set-level checking was done.</li>
          <li><strong>Ask which rendering was aligned.</strong> ISA-95 and the Asset Administration Shell are each published in two independent machine-readable renderings, and the two ISA-95 renderings agree on only 5.4% of their object-model concepts. A crosswalk against one does not transfer to the other.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        Every figure on this page is produced by scripts in the repository, run against artefacts fetched by IRI and pinned by checksum. No standards body material is redistributed. Two commands reproduce the measurements, and a third re-runs the reasoner certification.
      </p>
      <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium">
        industrial-ontology-crosswalks on GitHub <ExternalLink className="w-4 h-4" />
      </a>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Released CC BY 4.0. The CFIHOS audit examines a third-party ontology by Abad-Navarro, Fernandez-Breis and Garcia-Castro at Universidad de Murcia, and is offered as an independent measurement rather than a competing alignment. Related work: the <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">IES to HQDM crosswalk</Link> applies the same reasoner-certification method to defence data.
      </p>
    </section>
  </article>
);

export default IndustrialOntologyCrosswalks;
