import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/ies-hqdm-crosswalk';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/ies-hqdm-defence-interoperability#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/ies-hqdm-defence-interoperability',
  headline:
    'IES to HQDM: an open 4D ontology crosswalk for defence data | Tesseract Academy',
  description:
    'The first public crosswalk between the UK Information Exchange Standard (IES) and the Higher Quality Data Model (HQDM), two 4D upper ontologies. Open dataset, curated divergences, SHACL validation, and a reasoner-certified logical bridge: the crosswalk promoted to OWL and checked with the HermiT reasoner, which shows published HQDM is natively incoherent and yields a certified bridge with zero new logical errors.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-08-25',
  about: {
    '@type': 'Dataset',
    name: 'IES to HQDM crosswalk',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  citation: {
    '@type': 'ScholarlyArticle',
    name: 'Consistency Is Not Coherence: Orientation Search for Certified Alignments Between 4D Defence Upper Ontologies',
    author: { '@type': 'Person', name: 'Fabio Rovai' },
    datePublished: '2026-08-22',
    url: 'https://arxiv.org/abs/2608.21914',
    identifier: 'arXiv:2608.21914',
    sameAs: 'https://doi.org/10.48550/arXiv.2608.21914',
    isPartOf: {
      '@type': 'PublicationEvent',
      name: '21st International Workshop on Ontology Matching (OM 2026), co-located with the 25th International Semantic Web Conference',
      url: 'https://om.ontologymatching.org/2026/',
      startDate: '2026-10-25',
      location: { '@type': 'Place', name: 'Bari, Italy' },
    },
  },
  keywords:
    'IES, HQDM, BFO, ontology alignment, crosswalk, 4D ontology, BORO, defence data, interoperability, autonomy assurance, SAPIENT, SHACL, SSSOM, OWL reasoning, HermiT, description logic, unsatisfiable classes, coherence, conservativity',
};

const DELIVERABLES = [
  { item: 'Crosswalk (SSSOM)', detail: '17 backbone correspondences with predicate, confidence and justification.' },
  { item: 'Crosswalk (RDF)', detail: 'SKOS mapping triples with PROV-O provenance and reified correspondences.' },
  { item: 'Divergences record', detail: 'The curated pairs that look like they map and do not: the original scholarship.' },
  { item: 'SHACL shapes', detail: 'Validate every correspondence has a subject, object, SKOS predicate, confidence and provenance.' },
  { item: 'Reasoner-certified bridge', detail: 'The crosswalk promoted to logic and checked with the HermiT reasoner: a 21-axiom bridge with zero new logical errors, plus the finding that published HQDM has 39 self-contradictory classes on its own. Fully reproducible.' },
  { item: 'SAPIENT safety case', detail: 'A worked example grounding one autonomous sensor node in IES-typed world states.' },
  { item: 'Reference pipeline', detail: 'Candidate generation and validation you can run against the live ontologies.' },
];

const DIVERGENCES = [
  {
    kind: 'Trap',
    pair: 'ies:Event vs hqdm:event',
    detail: 'A name matcher aligns these first and gets it backwards. ies:Event is a durative happening with participants, so its true counterpart is hqdm:activity; hqdm:event is a zero-duration boundary point. Recorded as relatedMatch at confidence 0.25 purely to carry the warning.',
  },
  {
    kind: 'Trap',
    pair: 'ies:BoundingState vs hqdm:event',
    detail: 'Both mark where a 4D extent begins and ends, so they are functionally equivalent, but in IES a boundary is a state and in HQDM it is a point event. A correspondence exists, but as a relatedMatch needing an EDOAL-style transformation, not a class equivalence.',
  },
  {
    kind: 'Trap',
    pair: 'ies:State vs hqdm:state',
    detail: 'The semantics are close (mapped at 0.85), but ies:State is a top-level root class while hqdm:state is subsumed under spatio_temporal_extent. Any reasoning that relies on state being a spatio-temporal extent holds in HQDM but not from the IES class graph alone: a soundness trap over a naive union.',
  },
  {
    kind: 'Convergence',
    pair: 'ies:EventParticipant vs hqdm:participant',
    detail: 'Not every notable pair is a trap. Both models independently make participation a state, not merely a relation, a deep agreement inherited from the shared BORO commitment. This is why the participation correspondences are among the strongest in the set, and where cross-model reasoning is safe.',
  },
  {
    kind: 'Partial',
    pair: 'ies:PossibleWorld vs hqdm:possible_world',
    detail: 'The classes correspond (0.80), but the surrounding apparatus differs: how membership in a world is asserted, and whether worlds are themselves classified by a powertype. Mappings of the relations around possible worlds need case-by-case treatment.',
  },
  {
    kind: 'Partial',
    pair: 'The powertype stack',
    detail: 'The class-of hierarchies line up at the root (ies:ClassOfElement vs hqdm:class_of_spatio_temporal_extent), but IES’s domain tree is shaped by intelligence and security use cases and HQDM’s by enterprise and engineering. Above the backbone the hierarchies stop being parallel and become a genuine matching problem.',
  },
];

const DIVERGENCE_STYLES: Record<string, string> = {
  Trap: 'bg-red-50 text-red-700 border border-red-200',
  Convergence: 'bg-green-50 text-green-700 border border-green-200',
  Partial: 'bg-amber-50 text-amber-700 border border-amber-200',
};

export const IesHqdmCrosswalk: React.FC = () => {
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
          Case Study: Defence Data Interoperability
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          IES to HQDM: an open 4D ontology crosswalk for defence data
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The first public crosswalk between the UK Information Exchange Standard (IES), the 4D ontology behind UK defence and security data, and HQDM, the model underpinning the National Digital Twin. Open, validated, and released so that suppliers building across the two can start from something concrete.
        </p>
      </header>

      <aside className="bg-gov-bg border border-gov-border/50 rounded-xl p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-2">Peer-reviewed</p>
        <p className="text-gov-dark leading-relaxed">
          The reasoning behind this crosswalk has been written up as{' '}
          <em>Consistency Is Not Coherence: Orientation Search for Certified Alignments Between 4D Defence Upper Ontologies</em>, accepted as a long paper at the{' '}
          <a href="https://om.ontologymatching.org/2026/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">21st International Workshop on Ontology Matching (OM 2026)</a>, co-located with the 25th International Semantic Web Conference in Bari on 25 October 2026. The paper adds the third ontology, BFO, and the method the certified bridge is built with: rather than deleting correspondences that break under reasoning, it treats the direction of each correspondence as the variable to solve for.
        </p>
        <a
          href="https://arxiv.org/abs/2608.21914"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          Read the paper on arXiv (2608.21914)
          <ExternalLink className="w-4 h-4" />
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </aside>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Focus</p>
          <p className="text-base font-bold text-gov-dark">Interoperability</p>
          <p className="text-sm text-gov-secondary mt-1">and autonomy assurance</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Standards bridged</p>
          <p className="text-3xl font-extrabold text-gov-dark">2</p>
          <p className="text-sm text-gov-secondary mt-1">IES and HQDM, both 4D</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Reasoner-certified</p>
          <p className="text-3xl font-extrabold text-gov-dark">21 / 0</p>
          <p className="text-sm text-gov-secondary mt-1">logic-checked bridge axioms; 0 new incoherences</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The <a href="https://www.gov.uk/government/publications/the-defence-investment-plan" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">UK Defence Investment Plan</a> (June 2026) commits over £5bn to autonomous systems and £7.5bn to a Digital Backbone and Digital Targeting Web. All of it depends on heterogeneous systems, and coalition partners, sharing data a machine can reason over. On the UK side that shared vocabulary is the <strong>Information Exchange Standard (IES)</strong>, an open 4D ontology in the BORO tradition, stewarded through the cross-government IES Working Group. Alongside it, the built and physical environment runs on <strong>HQDM</strong> and the National Digital Twin Foundation Data Model.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            An autonomous system reasoning about a mission in a real place has to connect what IES says about the operational picture to what HQDM says about the terrain and infrastructure. Both are 4D and share a common heritage, yet no machine-readable crosswalk between them had ever been published. For a smaller supplier, the cost of working out that alignment by hand is the real gate between a promising prototype and a trusted, fielded capability.
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
                <tr
                  key={d.item}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
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
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">A finding, not just a mapping</h2>
          <p className="text-gov-dark leading-relaxed">
            A clean crosswalk is not one with no disagreements; it is one where the disagreements are named. The headline example: a name matcher aligns <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:Event</code> to <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">hqdm:event</code> and gets it exactly backwards. In IES an Event is a happening with participants, so its true HQDM counterpart is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">hqdm:activity</code>; <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">hqdm:event</code> is an instantaneous boundary point with no participants. A tool that maps them on the shared label corrupts the shared picture. The repository records this and five further divergences with evidence from both ontologies, which is where an implementer would otherwise silently get it wrong. All six are set out below.
          </p>
        </div>
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
          Three of these are traps a label matcher falls into, one is a convergence worth exploiting, and two mark where the hand-curated backbone ends and the automated alignment work begins. A clean crosswalk is not one with no divergences; it is one where the divergences are named.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">From matches to logic: a reasoner-certified bridge</h2>
          <p className="text-gov-dark leading-relaxed">
            A crosswalk of soft matches is a starting point. The harder question, and the one that decides whether a machine can safely reason across the two standards, is what happens when each match is read as a strict logical statement rather than a note of resemblance. We tested exactly that: we promoted every correspondence to a formal class equivalence, merged the complete IES and HQDM ontologies, and ran the <a href="http://www.hermit-reasoner.com/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">HermiT</a> logic reasoner over the result. The reasoner is deterministic: the same inputs always give the same, provable answer, with no statistical guesswork.
          </p>
          <ul className="mt-4 space-y-3 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">1.</span>
              <span><strong>Published HQDM is already incoherent on its own.</strong> Reasoned in isolation, before any mapping is applied, the published HQDM OWL file has <strong>39 classes that can never have a member</strong>. This is a known side effect of rendering an ISO 15926-style model into OWL, and HQDM's own file documents the approximation; it is invisible to the ordinary "is it consistent?" check. IES on its own, and BFO on its own, are clean.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">2.</span>
              <span><strong>Raw equivalences pass the usual check but are quietly broken.</strong> Promoting the matches to hard equalities keeps the merge technically consistent, so the standard check gives a green light, yet around 140 classes become empty and the union starts entailing things neither standard ever stated, for instance that an Entity is a kind of State. Coherence, not consistency, is the property that actually matters, and it is the one that fails silently.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">3.</span>
              <span><strong>The fix is a certified bridge, not a bigger table.</strong> Rather than delete mappings, we let the reasoner decide, pair by pair, how strong each correspondence can safely be. The result is a small <strong>21-axiom bridge with zero new incoherences and zero unintended entailments</strong>: full equivalences where the two 4D models genuinely agree, and one-directional links where they do not, each weakening carrying the reasoner's own counterexample as its justification.</span>
            </li>
          </ul>
          <p className="text-gov-dark leading-relaxed mt-4">
            The same method settles the harder IES-to-BFO question raised by the emerging US and NATO defence-ontology foundry. The obvious mapping, treating an IES Entity as a BFO material entity, is refuted by BFO's own axioms: a whole-life 4D individual is not a persisting object, it is that object's <em>history</em>, and BFO already ships a class for exactly that. The corrected bridge points there and is certified clean.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Every step is reproducible: the <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">reasoning/</code> directory in the repository re-runs the whole analysis in about two minutes, and the result was independently re-checked with the HermiT command-line tool.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            An open, machine-readable crosswalk released under CC-BY-4.0, built on Tesseract's <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> alignment engine and validated against the live published ontologies: every one of the 17 correspondences resolves, the SHACL shapes conform, and, promoted to logic, the mappings are certified with the HermiT reasoner into a 21-axiom bridge that introduces no new logical errors. It ships with a worked safety case showing how one SAPIENT (BSI Flex 335) autonomous sensor node can have its behaviour grounded in IES-typed world states, connecting our <a href="https://arxiv.org/abs/2605.09168" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">CIVeX</a> agent-verification research to the defence data standard.
          </p>
          <ul className="mt-4 space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>Data and documentation: CC-BY-4.0, free for public and commercial reuse.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>Upstream ontologies referenced by IRI: IES (Open Government Licence), HQDM (Apache-2.0).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>Candidate-for-review, and open to correction: the most welcome contribution is a new divergence.</span>
            </li>
          </ul>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            This is an independent, self-initiated demonstration. It is not affiliated with, or endorsed by, the Ministry of Defence, the IES Working Group or the National Digital Twin programme. It is built entirely on published open standards and open ontologies.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"The autonomy money assumes suppliers can already speak the standard. The alignment layer is what lets them. Publishing an open crosswalk, with the traps named honestly, turns that from bespoke consulting into shared infrastructure a smaller supplier can build on."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Applied example: a PYRAMID avionics bridge</h2>
          <p className="text-gov-dark leading-relaxed">
            The crosswalk is not only a reference: it does work. <Link to="/research/pyramid-ies-hqdm-semantic-bridge" className="text-gov-blue underline hover:text-gov-blue-dark">PYRAMID</Link> (UK Defence Standard 00-134), the MOD open architecture for avionics and mission systems, deliberately has no shared data model and pushes interoperability into per-deployment "bridges" that perform semantic translation. Using this crosswalk, we ground three PYRAMID components in IES and HQDM so that the same object, a building that is both a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Geographical_Feature</code> and a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Tactical_Object</code>, resolves to one referent. It is the crosswalk's founding motivation, connecting the operational picture to the terrain, reduced to one bridge.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open crosswalk</p>
          <p className="text-sm text-gov-secondary mt-1">
            SSSOM and RDF correspondences, the divergences record, SHACL shapes, the reasoner-certified bridge, and the SAPIENT safety case.
          </p>
        </div>
        <a
          href={REPO}
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
    </article>
  );
};
