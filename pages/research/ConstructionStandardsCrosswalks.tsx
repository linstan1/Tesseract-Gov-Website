import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/construction-standards-crosswalks';
const COURSE = 'https://tesseract.academy/courses/construction-data-standards-and-ai-ontologies-and-crosswalks/';

const CURRICULUM = [
  { n: '1 to 6', title: 'The standards', detail: 'Why project data fails to join at handover even when every party used a recognised standard. What an ontology adds over a classification. IFC, Uniclass 2015, COBie and BOT each read in plain language: what they carry, what they refuse to say, and the measured gap between richness and checkability.' },
  { n: '7 to 9', title: 'Crosswalks and falsifiability', detail: 'What a checkable crosswalk looks like: identifiers, match kinds with direction, curator confidence, written arguments, recorded refusals. The Zone false friend. The falsifiability rate: why 9 well-placed rules beat 2,443 badly placed ones, and what a 0% target means for validation claims.' },
  { n: '10 to 12', title: 'The traps', detail: 'AI classification without a safety net: what happens when the target standard cannot reject an error. Part-of versus kind-of, worked on the framed-structures refusal. Element, system and product strata, and the as-supplied versus as-installed line that must not collapse.' },
  { n: '13 to 15', title: 'Practice', detail: 'The verification pipeline: pinned sources, lifted spreadsheets, shape checks that reject unargued rows, identifier resolution. Procurement questions for AI mapping tools. Using, challenging and extending the open crosswalk on a live project.' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/construction-standards-crosswalks#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/construction-standards-crosswalks',
  headline:
    'Construction data standards cannot check your AI: falsifiability measured across IFC, COBie, Uniclass and BOT | Tesseract Academy',
  description:
    'Open crosswalks between the standards a building passes through (IFC4, COBie/BS 1192-4, Uniclass 2015, W3C BOT): 49 correspondences and 7 asserted non-mappings, every identifier machine-verified, every row argued. Plus the measurement that matters for AI procurement: the classification layer of construction is 0% falsifiable, so no wrong mapping into COBie or Uniclass can ever be rejected by a machine. BOT reaches 80.95% checkability from 9 axioms; IFC4 reaches 11.45% from 2,443.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  about: {
    '@type': 'Dataset',
    name: 'Construction standards crosswalks',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  citation: [
    {
      '@type': 'Course',
      name: 'Construction Data Standards and AI: Ontologies and Crosswalks (IFC, Uniclass, COBie)',
      url: COURSE,
      description:
        'Free 15-lesson course for construction professionals: how IFC, Uniclass, COBie and BOT relate, what a checkable crosswalk looks like, and how to procure AI mapping tools against standards that cannot reject errors. Every figure in the lessons is produced by the open repository.',
      provider: { '@id': 'https://gov.tesseract.academy/#organization' },
    },
  ],
  keywords:
    'IFC, ISO 16739, COBie, BS 1192-4, Uniclass 2015, Building Topology Ontology, BOT, ontology alignment, crosswalk, SSSOM, SHACL, falsifiability, BIM, ISO 19650, construction AI, handover, asset information, classification',
};

const FALSIFIABILITY = [
  { vocab: 'BOT (W3C Building Topology Ontology)', classes: '7', disj: '9', rate: '80.95%', tone: 'good' },
  { vocab: 'IFC4 ADD2 (ISO 16739-1)', classes: '1,286', disj: '2,443', rate: '11.45%', tone: 'mid' },
  { vocab: 'COBie 2.4 (BS 1192-4, lifted)', classes: '18', disj: '0', rate: '0.00%', tone: 'bad' },
  { vocab: 'Uniclass 2015 (verified codes, lifted)', classes: '27', disj: '0', rate: '0.00%', tone: 'bad' },
];

const TONE: Record<string, string> = {
  good: 'bg-emerald-50 text-emerald-800',
  mid: 'bg-amber-50 text-amber-800',
  bad: 'bg-rose-50 text-rose-800',
};

const DELIVERABLES = [
  { item: 'Three crosswalks', detail: 'BOT to IFC4 (8 correspondences, 3 asserted non-mappings), COBie 2.4 to IFC4 (19 and 2), and Uniclass 2015 to IFC4 (22 and 2). Every row carries a match kind with direction, a curator confidence and a written argument; automated shape checks reject any row without one.' },
  { item: 'Verified Uniclass codes', detail: 'Every Uniclass code mapped (EF_25_10 Walls, EF_20_05_30 Foundations, Ss_25 Wall and barrier systems and 17 more) was verified against the live NBS service before use, April 2026 table versions, with the confirming page recorded per code. None are approximated.' },
  { item: 'Asserted non-mappings', detail: 'Seven pairs that look alignable and are not, published as machine-readable denials with the argument for each: the bot:Zone false friend, the framed-structures part-whole trap, the products-are-not-elements line, and the COBie sheets with no honest IFC counterpart.' },
  { item: 'Documented lifts', detail: 'COBie and Uniclass publish no machine identifiers, so the repository mints them, with the interpretation written down and no invented rules: both sources assert zero disjointness and the lifts honour that.' },
  { item: 'Falsifiability measurement', detail: 'A reproducible script computing, for each standard, the fraction of class pairs a machine could ever prove incompatible. The number that decides whether any automated check of an alignment can work at all.' },
  { item: 'Identifier verification', detail: 'All 96 distinct identifiers used by the crosswalks are programmatically resolved against the hash-pinned sources. A mapping to a class that does not exist is the easiest error to produce and the hardest to spot by eye.' },
];

const DIVERGENCES = [
  {
    kind: 'Trap',
    pair: 'bot:Zone vs ifc:IfcZone',
    detail: 'The false friend of linked building data. In BOT, Zone is the spatial parent of site, building, storey and space. In IFC, IfcZone is a subclass of IfcGroup: a non-spatial bundle of spaces with no geometry and no containment meaning. Assert the match and every BOT site, building and storey silently becomes an IFC group. Identical strings, disjoint intent.',
  },
  {
    kind: 'Convergence',
    pair: 'bot:Zone vs ifc:IfcSpatialStructureElement',
    detail: 'The correct partner, and one no label matcher would rank first. BOT subsumes Site, Building, Storey and Space under Zone exactly as IFC subsumes IfcSite, IfcBuilding, IfcBuildingStorey and IfcSpace under IfcSpatialStructureElement. Two committees independently drew the same four-way partition of built space. Crosswalks should start at matching structure, not matching labels.',
  },
  {
    kind: 'Convergence',
    pair: 'cobie:Zone vs ifc:IfcZone',
    detail: 'Two rows from the trap, the same IFC entity is exactly right: the COBie Zone sheet and IfcZone are both non-spatial aggregations of spaces, mapped at close match, confidence 0.9. One word, one right mapping and one canonical wrong one, distinguishable only by structure.',
  },
  {
    kind: 'Trap',
    pair: 'uniclass:EF_20_10_30 Framed structures vs ifc:IfcBeam',
    detail: 'The canonical part-whole error of construction alignment. A beam is a part of a framed structure, not a kind of one. Tools infer the match from lexical overlap constantly, and because Uniclass asserts no axioms, no reasoner or shape check will ever reject it. Refused by a curator, in writing, in the record.',
  },
  {
    kind: 'Trap',
    pair: 'uniclass:Pr Products vs ifc:IfcElement',
    detail: 'The as-supplied versus as-installed line. A Uniclass product is the manufacturer’s catalogue item; an IfcElement is the installed occurrence in a building. Collapse the line and every delivered pallet becomes a wall. The construction twin of the as-designed versus as-built distinction that industrial standards also independently draw.',
  },
  {
    kind: 'Gap',
    pair: 'COBie Coordinate and Impact vs IFC4',
    detail: 'Two COBie sheets with no honest class-level counterpart: a Coordinate row is a projection of geometry, not an entity, and IFC4 has no entity for economic or environmental impact at all. Recorded as asserted absences, because no counterpart exists and no mapping found are different claims.',
  },
  {
    kind: 'Gap',
    pair: 'Uniclass Co Complexes vs IFC4',
    detail: 'IFC4 has no class for a campus or estate; IfcFacility only arrives in IFC 4.3. The Complexes table anchors to IfcSite composition conventions at 0.6 confidence, and the gap is recorded explicitly.',
  },
];

const DIVERGENCE_STYLES: Record<string, string> = {
  Trap: 'bg-rose-50 text-rose-800',
  Convergence: 'bg-emerald-50 text-emerald-800',
  Gap: 'bg-amber-50 text-amber-800',
};

export const ConstructionStandardsCrosswalks: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Construction data standards cannot check your AI, measured across IFC, COBie, Uniclass and BOT
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Open, argued crosswalks between the standards a building actually passes through, and the measurement that matters for anyone buying AI classification or COBie extraction: the classification layer of construction is 0% falsifiable, so no wrong mapping into it can ever be rejected by a machine.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Correspondences</p>
        <p className="text-3xl font-extrabold text-gov-dark">49 + 7</p>
        <p className="text-sm text-gov-secondary mt-1">mappings plus asserted non-mappings, across 4 standards</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Cannot be contradicted</p>
        <p className="text-3xl font-extrabold text-gov-dark">2 / 4</p>
        <p className="text-sm text-gov-secondary mt-1">COBie and Uniclass assert zero disjointness: zero checkability</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Identifiers verified</p>
        <p className="text-3xl font-extrabold text-gov-dark">96 / 96</p>
        <p className="text-sm text-gov-secondary mt-1">every IRI resolved against hash-pinned sources</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
        <p className="text-gov-dark leading-relaxed">
          A design team delivers an <strong>IFC</strong> model. The contractor classifies packages with <strong>Uniclass 2015</strong>. The client demands <strong>COBie</strong> at handover under BS 1192-4, and the estate wants its data in the wider linked-data world that <strong>BOT</strong> serves. Every party holds valid, standards-conformant data, and the join still fails, because the failure is semantic: the same word means different things and different words mean the same thing.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          AI has made this urgent. Classifiers that assign Uniclass codes, extractors that fill COBie workbooks and copilots that answer across both are all implementing concept-to-concept mappings, usually private, unversioned and unargued. This repository publishes the mappings openly, argues every row, refuses the plausible wrong pairs in writing, and measures what the machines can and cannot check.
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
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The finding: the classification layer cannot tell you that you are wrong</h2>
        <p className="text-gov-dark leading-relaxed">
          A standard can only prove a mapping impossible if it contains a rule capable of producing a contradiction. Count, for each standard, the fraction of class pairs that provably cannot share an instance. That is its <strong>falsifiability rate</strong>: the ceiling on what any automated check of an alignment into it can ever catch.
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
        COBie and Uniclass score exactly zero. Not because they are bad standards, but because they are classifications: labelled pigeonholes without rules. The consequence is unavoidable: <strong>when an AI tool writes a wrong code into Uniclass or a wrong row into COBie, nothing in the target standard can reject it.</strong> The error is stored, inherited by cost plans, carbon calculations and asset registers, and found by a human, late, if at all. Any vendor claim that such output &quot;passed validation&quot; refers to formats and shapes, never to meanings.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second result replicates, on a second domain, the finding of our <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial crosswalks study</Link>: <strong>BOT carries 271 times fewer disjointness axioms than IFC4 and is 7 times more checkable</strong> (80.95% against 11.45%), because BOT&apos;s nine rules sit at the top of a seven-class hierarchy and cascade to everything beneath, while IFC4&apos;s thousands sit between leaf siblings and protect almost nothing. Axiom placement beats axiom count, both times it has been measured.
      </p>
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
        Each refusal is published as a machine-readable asserted non-mapping, so a tool consuming the crosswalk is told not to make the join rather than left to discover the problem in production.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for a buyer</h2>
        <p className="text-gov-dark leading-relaxed">
          Five questions for any vendor whose AI writes into your project&apos;s standards, none of which requires an ontologist to ask.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>Show me the mapping table and its version history.</strong> Your tool is implementing one; if it cannot be inspected, it cannot be contracted against.</li>
          <li><strong>Show me your recorded refusals and their arguments.</strong> A mapping with no refusals has not been reviewed hard enough to have any.</li>
          <li><strong>State your measured error rate on our building type.</strong> Against a 0% falsifiable target, this number is the only correctness evidence that exists.</li>
          <li><strong>Tell me what your tool does with Zone.</strong> If the answer involves name similarity, the tool is guessing precisely where guessing is most dangerous.</li>
          <li><strong>Tell me which stratum each destination field expects.</strong> Classifying to elements (EF) and to systems (Ss) are different tasks on the same object; a pipeline that cannot tell them apart fills both with one answer.</li>
        </ul>
        <p className="text-gov-dark leading-relaxed mt-3">
          For information managers: reference a public, versioned, argued crosswalk in the exchange information requirements. A private mapping is a liability you cannot even inspect.
        </p>
      </div>
    </section>

    <section className="space-y-6">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Learn it properly: free 15-lesson course</h2>
        <p className="text-gov-dark leading-relaxed">
          The whole subject is taught as a free course on the Tesseract Academy platform, written for construction professionals rather than ontologists: project managers, quantity surveyors, BIM leads and information managers. Every figure quoted in the lessons is produced by the repository, so the course and the crosswalks check each other. Fifteen lessons, each with a structural diagram and a graded quiz.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Lessons</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Module</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it covers</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULUM.map((c, i) => (
              <tr key={c.n} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{c.n}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{c.title}</td>
                <td className="px-4 py-3 text-gov-secondary">{c.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a
        href={COURSE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors"
      >
        Take the course: Construction Data Standards and AI <ExternalLink className="w-4 h-4" />
      </a>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        Every figure on this page is produced by scripts in the repository, run against sources pinned by checksum, with every Uniclass code verified against the live NBS service before use. No standards body material is redistributed. Five commands with free tools reproduce the lifts, the shape checks, the identifier resolution and the falsifiability table.
      </p>
      <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium">
        construction-standards-crosswalks on GitHub <ExternalLink className="w-4 h-4" />
      </a>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Released CC BY 4.0. Related work: the <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial ontology crosswalks</Link> apply the identical method to ISO 15926, ISA-95, CFIHOS, OPC UA, SAREF and the Asset Administration Shell, and the <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">IES to HQDM crosswalk</Link> extends the certification method to defence data.
      </p>
    </section>
  </article>
);

export default ConstructionStandardsCrosswalks;
