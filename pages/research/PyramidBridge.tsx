import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/ies-hqdm-crosswalk/tree/main/pyramid-bridge';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/pyramid-ies-hqdm-semantic-bridge#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/pyramid-ies-hqdm-semantic-bridge',
  headline:
    'Grounding a PYRAMID avionics bridge in IES and HQDM | Tesseract Academy',
  description:
    'PYRAMID (Def Stan 00-134) is an open avionics reference architecture with no shared data model; it pushes interoperability into inter-component bridges. A worked, open, SHACL-validated example grounds those bridges in the IES and HQDM 4D ontologies, so components that model the same object resolve to one referent.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  about: {
    '@type': 'Dataset',
    name: 'PYRAMID inter-component bridge grounded in IES/HQDM',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'PYRAMID, Def Stan 00-134, avionics, mission systems, MOSA, open architecture, FACE, IES, HQDM, 4D ontology, semantic interoperability, SHACL, defence data',
};

const DELIVERABLES = [
  { item: 'Entity grounding (SSSOM)', detail: 'Each component entity mapped to an IES or HQDM term, with predicate, confidence and justification.' },
  { item: 'Bridge (RDF)', detail: 'A machine-readable bridge that resolves the same object across three components to one referent.' },
  { item: 'Executable proof', detail: 'A runnable check showing the components cannot be joined without the grounding, and do with it.' },
  { item: 'Enforcement shapes (SHACL)', detail: 'A co-reference is valid only when both objects denote the same referent, which forbids the false-friend unification.' },
  { item: 'Negative fixture', detail: 'The naive mistake, committed on purpose, so the shape provably rejects it.' },
];

export const PyramidBridge: React.FC = () => {
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
          Analysis: Defence Open Architecture
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Grounding a PYRAMID avionics bridge in IES and HQDM
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          PYRAMID is the UK Ministry of Defence's open reference architecture for avionics and mission systems. It standardises how software components plug together and deliberately leaves what the data means across them to per-deployment bridges. This is a worked, open example that fills that gap with a shared 4D ontology, using standards the UK government already owns.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Focus</p>
          <p className="text-base font-bold text-gov-dark">Semantic interoperability</p>
          <p className="text-sm text-gov-secondary mt-1">above the architectural layer</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Components bridged</p>
          <p className="text-3xl font-extrabold text-gov-dark">3</p>
          <p className="text-sm text-gov-secondary mt-1">Geography, Tactical Objects, Data Fusion</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Verification</p>
          <p className="text-3xl font-extrabold text-gov-dark">SHACL</p>
          <p className="text-sm text-gov-secondary mt-1">bridge conforms; false friend rejected</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            <a href="https://www.gov.uk/guidance/pyramid-rapid-adaptability-for-avionics-systems" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">PYRAMID</a> (now UK Defence Standard 00-134, released under the Open Government Licence) decomposes avionics and mission-system software into well-defined components. By design it has no single shared data model. Its own Technical Standard states that components "do not share interface definitions", so "a deployment will use <strong>bridges to close the semantic gap</strong>", one function of which is "data element mapping (translating the meaning of data in order to bridge the semantic gap)". The accompanying MOD assessment puts it plainly: "whilst the PRA does not define a data architecture, it recognises that a data architecture is needed."
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            So PYRAMID standardises how components connect and leaves what the data means to bridges that are, today, hand-built per deployment. That is exactly the slot a shared, published 4D ontology fills. On the UK side those ontologies exist: the <strong>Information Exchange Standard (IES)</strong> for the operational picture and <strong>HQDM</strong> for the built and physical environment, both 4D and both descended from the same BORO tradition, which is why our <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">IES to HQDM crosswalk</Link> can join them.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
        <p className="text-gov-dark leading-relaxed">
          A reference semantics for one PYRAMID bridge, between the <strong>Geography</strong> component and the <strong>Tactical Objects</strong> component, extended up the sensing chain to <strong>Data Fusion</strong>. Every entity is taken verbatim from the public Technical Standard and grounded in an IES or HQDM term.
        </p>
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
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The finding: one building, two types, and a false friend</h2>
          <p className="text-gov-dark leading-relaxed">
            The standard's own text supplies the case. A <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Tactical_Object</code> may be "a building that is the target of an attack"; the Geography component models that same building as a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Geographical_Feature</code>. One real object, two disjoint component-local types, and nothing in the architecture tells a deployment they are the same thing. Grounding both in <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:Entity</code>, with the spatial side carried to <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">hqdm:physical_object</code> through the crosswalk, lets the two views resolve to one referent that a machine can check.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The trap is the mirror image: the word <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Capability</code> appears as a distinct entity in Geography, in Tactical Objects and in Data Fusion, meaning something different in each. A bridge that unifies them on the shared label corrupts all three. The grounding records them separately, and a SHACL shape refuses any co-reference whose two sides do not denote the same referent, so the mistake fails validation rather than shipping silently. This is the same discipline as the crosswalk's headline <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ies:Event</code> false friend, applied one layer up.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why it matters now</h2>
          <p className="text-gov-dark leading-relaxed">
            The demand is loud and the solution is unnamed. The MOD's Data Strategy for Defence records that fewer than a quarter of MOD systems have automatically discoverable data and a third do not follow international standards, and calls for a shift from platform-centric to data-centric. Yet the enabling programmes, the Single Information Environment, SAPIENT, FACE, the combat cloud, reach for transport, access and exchange mechanisms, and none names a shared meaning layer, even as the Digital Targeting Web needs sensor-to-shooter data to compose and GCAP needs it across a UK, Italy and Japan coalition. The US Department of Defense has, by contrast, mandated a foundational ontology baseline. The UK already owns the two ontologies that could close the gap; they have simply never been applied to avionics.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            We could find no published work that grounds PYRAMID, or the related FACE Shared Data Model, in any upper ontology. This example occupies that gap with open, government-owned standards.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            An open, machine-readable, validated bridge released under CC-BY-4.0 and built on Tesseract's <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> engine and the IES to HQDM crosswalk. It is not affiliated with or endorsed by the MOD PYRAMID programme; it is an independent demonstration built entirely on the public standard and open ontologies.
          </p>
          <ul className="mt-4 space-y-2 text-gov-dark leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>Three components resolve to one referent; the grounding is not a cherry-picked pair.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>The bridge conforms to the crosswalk's own SHACL shapes; the false-friend fixture is rejected.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gov-blue font-bold mt-0.5">›</span>
              <span>Everything is reproducible from the Open Government Licence Technical Standard, no gated model required.</span>
            </li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Open architecture is necessary but not sufficient. PYRAMID guarantees the components can be connected; a shared ontology is what lets them mean the same thing once they are. The UK already owns that ontology layer. This shows it doing the job, on the public standard, with the traps named honestly."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open bridge</p>
          <p className="text-sm text-gov-secondary mt-1">
            The entity grounding, the machine-readable bridge, the executable proof, and the enforcement shapes.
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
          to="/research/ies-hqdm-defence-interoperability"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Read the underlying IES to HQDM crosswalk
        </Link>
      </div>
    </article>
  );
};
