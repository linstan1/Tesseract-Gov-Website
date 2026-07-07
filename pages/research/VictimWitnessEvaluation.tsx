import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/open-evaluation-toc';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/victim-witness-evaluation#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/victim-witness-evaluation',
  headline:
    'A machine-checkable Theory of Change for victim & witness support | Tesseract Academy',
  description:
    'A self-initiated, open, machine-readable Theory of Change and rapid-evidence-assessment demonstrator for the National Witness Service and National Homicide Service, anchored on the four Victims’ Funding Strategy outcomes. A typed ToC ontology (7 pathways), SHACL validation and a structured evidence-extraction schema, published on GitHub under CC-BY-4.0.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-07',
  dateModified: '2026-07-07',
  about: {
    '@type': 'Dataset',
    name: 'Open machine-checkable Theory of Change for victim & witness support',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'Theory of Change, evaluation, rapid evidence assessment, Magenta Book, Government Social Research, victims, witnesses, National Witness Service, National Homicide Service, Victims Funding Strategy, SHACL, ontology, monitoring and evaluation',
};

const TOC_CHART = `flowchart LR
  subgraph NWS["National Witness Service"]
    P1["P1 Pre-trial familiarisation"]:::moderate
    P2["P2 In-court support"]:::gap
    P3["P3 Information · Code Right 8"]:::strong
    P4["P4 London / MOPAC to 2028"]:::limited
  end
  subgraph NHS["National Homicide Service"]
    H1["H1 Emotional / practical / peer"]:::limited
    H2["H2 Advocacy · Code Right 4"]:::moderate
    H3["H3 CYP community outreach"]:::gap
  end
  O2(("VFS2 Informed"))
  O3(("VFS3 Support received"))
  O4(("VFS4 CJS engagement"))
  O1(("VFS1 Cope & resilience"))
  P1 --> O2
  P2 --> O4
  P3 --> O3
  P4 --> O3
  H1 --> O1
  H2 --> O3
  H3 --> O1
  classDef strong fill:#e6f4ec,stroke:#1f7a5a,color:#14312a;
  classDef moderate fill:#e9f2f5,stroke:#3e8da6,color:#173038;
  classDef limited fill:#fbf1dc,stroke:#b0812a,color:#3a2e10;
  classDef gap fill:#fbe9e4,stroke:#b24a32,color:#3a1710;
`;

const PATHWAYS = [
  { id: 'P1', svc: 'Witness', grade: 'moderate', name: 'Pre-trial familiarisation reduces witness anxiety', vfs: 'VFS2 Informed' },
  { id: 'P2', svc: 'Witness', grade: 'gap', name: 'In-court support sustains attendance through to testimony', vfs: 'VFS4 CJS engagement' },
  { id: 'P3', svc: 'Witness', grade: 'strong', name: 'Information provision delivers Victims’ Code Right 8', vfs: 'VFS3 Support received' },
  { id: 'P4', svc: 'Witness', grade: 'limited', name: 'London pre-trial pathway (devolved to MOPAC to 2028)', vfs: 'VFS3 Support received' },
  { id: 'H1', svc: 'Homicide', grade: 'limited', name: 'Emotional, practical & peer support builds resilience', vfs: 'VFS1 Cope & resilience' },
  { id: 'H2', svc: 'Homicide', grade: 'moderate', name: 'Advocacy & information deliver Victims’ Code Right 4', vfs: 'VFS3 Support received' },
  { id: 'H3', svc: 'Homicide', grade: 'gap', name: 'Community outreach supports children & young people', vfs: 'VFS1 Cope & resilience' },
];

const GRADE_STYLES: Record<string, string> = {
  strong: 'bg-green-50 text-green-700 border border-green-200',
  moderate: 'bg-sky-50 text-sky-700 border border-sky-200',
  limited: 'bg-amber-50 text-amber-700 border border-amber-200',
  gap: 'bg-red-50 text-red-700 border border-red-200',
};

const DELIVERABLES = [
  { item: 'ToC ontology (Turtle)', detail: 'A typed Theory-of-Change vocabulary with 7 worked pathways (4 Witness, 3 Homicide), each resolving input → activity → output → outcome → impact.' },
  { item: 'VFS outcome anchoring', detail: 'Every outcome maps to one of the four Victims’ Funding Strategy national outcomes — the commissioner’s own framework.' },
  { item: 'SHACL shapes', detail: 'Validate completeness, outcome→VFS alignment, a mandatory evidence grade on every causal claim, and declared assumptions.' },
  { item: 'Evidence-extraction schema', detail: 'A structured REA table (population, service model, delivery mode, outcome, effect, quality grade, provenance) so the evidence map is queryable and its gaps countable.' },
  { item: 'Validator', detail: 'A script that runs the SHACL check and prints the evidence-gap map — reproducible with pyshacl.' },
];

const EVIDENCE = [
  { pop: 'Prosecution witnesses', model: 'Pre-trial familiarisation', mode: 'In-person', vfs: 'Informed (VFS2)', effect: 'Positive (anxiety ↓)', grade: 'moderate', prov: 'analogous / indicative' },
  { pop: 'Prosecution witnesses', model: 'On-the-day in-court support', mode: 'In-person', vfs: 'CJS engagement (VFS4)', effect: 'not estimable', grade: 'gap', prov: 'no robust UK study identified' },
  { pop: 'Witnesses (Code Right 8)', model: 'Information & signposting', mode: 'In-person / remote', vfs: 'Support received (VFS3)', effect: 'Positive (compliance)', grade: 'strong', prov: 'Victims’ Code; service records' },
  { pop: 'Bereaved by homicide', model: 'Emotional / practical / peer', mode: 'Blended', vfs: 'Cope & resilience (VFS1)', effect: 'Positive (indicative)', grade: 'limited', prov: 'grey literature / provider MI' },
  { pop: 'Children & young people', model: 'Short-term community outreach', mode: 'In-person', vfs: 'Cope & resilience (VFS1)', effect: 'not estimable', grade: 'gap', prov: 'no identified evaluation' },
];

const GRADE_BADGE: Record<string, string> = {
  strong: 'bg-green-100 text-green-800',
  moderate: 'bg-sky-100 text-sky-800',
  limited: 'bg-amber-100 text-amber-800',
  gap: 'bg-red-100 text-red-800',
};

export const VictimWitnessEvaluation: React.FC = () => {
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
          Tesseract Foundational Research: Evaluation Methods
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          A machine-checkable Theory of Change for victim &amp; witness support
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          A Theory of Change is a causal graph, so we build it as one — typed, anchored on the Victims’ Funding Strategy outcomes, and validated for completeness. Assumptions and evidence gaps become machine-checkable rather than buried in prose. Worked openly on the National Witness Service and National Homicide Service.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Worked pathways</p>
          <p className="text-3xl font-extrabold text-gov-dark">7</p>
          <p className="text-sm text-gov-secondary mt-1">across two services, one schema</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Outcome anchoring</p>
          <p className="text-3xl font-extrabold text-gov-dark">4 / 4</p>
          <p className="text-sm text-gov-secondary mt-1">Victims’ Funding Strategy outcomes</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Verification</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 / 2</p>
          <p className="text-sm text-gov-secondary mt-1">SHACL violations; evidence gaps found</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            The Ministry of Justice funds both the National Witness Service and the National Homicide Service, delivered by Victim Support, at a scale of over £57m and £24m respectively — yet neither has been formally evaluated for some time. Before an impact evaluation is possible, the groundwork has to exist: a clear Theory of Change, a rapid evidence assessment, and a feasibility-and-M&amp;E framework for each service, to <a href="https://www.gov.uk/government/publications/the-magenta-book" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Magenta Book</a> and Government Social Research standards.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The hard part is not drawing the diagram; it is being honest and systematic about which causal links the evidence actually supports, and making those judgements auditable. This demonstrator shows our method: build the Theory of Change as a typed graph, anchor every outcome to the four <a href="https://www.gov.uk/government/publications/victims-funding-strategy/victims-funding-strategy" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Victims’ Funding Strategy</a> outcomes, and let a validator find the gaps for you. It aligns with the Ministry of Justice’s own stated interest (<a href="https://www.gov.uk/government/publications/ministry-of-justice-areas-of-research-interest-2025" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Areas of Research Interest 2025</a>) in AI-assisted evidence synthesis.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The Theory of Change, as a typed graph</h2>
        <p className="text-gov-dark leading-relaxed">
          Each pathway is one mechanism of change, coloured by how well existing evidence supports it. The two links carrying each service’s headline claim — reduced court attrition (P2) and children &amp; young people’s outreach (H3) — are exactly the ones the evidence cannot yet support. They are recorded as gaps and become the prioritised questions for a future evaluation.
        </p>
        <div className="bg-white border border-gov-border/50 rounded-xl p-4 sm:p-6">
          <Mermaid chart={TOC_CHART} id="toc" ariaLabel="Theory of Change graph linking seven service pathways to the four Victims Funding Strategy outcomes, coloured by evidence strength." />
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-green-50 text-green-700 border border-green-200">strong — robust UK evidence</span>
          <span className="px-2 py-1 rounded bg-sky-50 text-sky-700 border border-sky-200">moderate — indicative / analogous</span>
          <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">limited — weak or indirect</span>
          <span className="px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200">evidence gap — prioritise for evaluation</span>
        </div>

        <div className="space-y-3">
          {PATHWAYS.map((p) => (
            <div key={p.id} className="border border-gov-border/50 rounded-xl p-5 bg-white">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <code className="text-xs font-bold text-gov-secondary">{p.id}</code>
                <span className="text-xs font-medium text-gov-secondary">{p.svc}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${GRADE_STYLES[p.grade]}`}>{p.grade}</span>
                <span className="ml-auto text-xs font-medium text-gov-blue">{p.vfs}</span>
              </div>
              <p className="text-sm text-gov-dark leading-relaxed">{p.name}</p>
            </div>
          ))}
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
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">A validator that finds the gaps for you</h2>
          <p className="text-gov-dark leading-relaxed">
            Because the pathways are typed, SHACL shapes check the graph the way a spell-checker checks prose: no outcome without a Victims’ Funding Strategy anchor, no causal claim without an evidence grade, no pathway without its declared assumptions. Running the validator on this graph returns <strong>SHACL conforms: true</strong>, then surfaces the evidence-gap map by query — <strong>two genuine gaps across seven pathways</strong>. Structure is guaranteed; the gaps are recorded, not hidden. That is what turns “highlight the evidence gaps” from a hopeful instruction into a mechanical result.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gov-border/50">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Population</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Service model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">VFS outcome</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Effect</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Quality</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Provenance</th>
              </tr>
            </thead>
            <tbody>
              {EVIDENCE.map((e, i) => (
                <tr key={i} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 text-gov-dark">{e.pop}</td>
                  <td className="px-4 py-3 text-gov-secondary">{e.model}</td>
                  <td className="px-4 py-3 text-gov-secondary">{e.vfs}</td>
                  <td className="px-4 py-3 text-gov-secondary tabular-nums">{e.effect}</td>
                  <td className="px-4 py-3"><span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${GRADE_BADGE[e.grade]}`}>{e.grade}</span></td>
                  <td className="px-4 py-3 text-gov-secondary text-xs">{e.prov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          Effect directions and grades shown here are illustrative of the extraction structure, not asserted findings. The two rows marked <em>gap</em> are genuine: neither service has been formally evaluated for some time — the fact that motivates this work.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            An open, machine-readable Theory of Change and evidence schema released under CC-BY-4.0, built on Tesseract’s <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> approach and validated with SHACL. The deliverables a commissioner sees are the standard products — the Theory of Change diagram, the narrative, the M&amp;E framework; the structured graph underneath is what makes them auditable, consistent across two parallel service strands, and reusable in the full evaluation that follows.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            This is an independent, self-initiated demonstration. It is not affiliated with, commissioned by, or endorsed by the Ministry of Justice or Victim Support, and contains no commissioned findings. It is built entirely from public information and open standards.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A clean Theory of Change is not one with no weak links; it is one where the weak links are named. Building it as a validated graph forces that honesty — the claims a service cannot yet evidence stop being reassuring prose and become the exact questions the evaluation must answer."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open Theory of Change</p>
          <p className="text-sm text-gov-secondary mt-1">
            Typed ToC ontology, SHACL shapes, the evidence-extraction schema and the validator.
          </p>
        </div>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap"
        >
          View on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    </article>
  );
};
