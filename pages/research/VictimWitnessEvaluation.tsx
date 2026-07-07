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
    'When a Theory of Change has to hold up: making evaluation logic machine-checkable | Tesseract Academy',
  description:
    'A reflection on where government evaluation is heading - the Evaluation Task Force, the Victims and Prisoners Act 2024, outcome-based commissioning - and a self-initiated open method that answers it: building a Theory of Change as a typed, evidence-graded, SHACL-validated graph so its weak links are named, not buried. Worked on victim and witness support. Published on GitHub under CC-BY-4.0.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-07',
  dateModified: '2026-07-07',
  about: {
    '@type': 'Dataset',
    name: 'Open machine-checkable Theory of Change method',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'Theory of Change, evaluation methods, Evaluation Task Force, Magenta Book, realist evaluation, theory-based evaluation, Government Social Research, monitoring and evaluation, victim support, SHACL, ontology, evidence grading, value for money',
};

const TOC_CHART = `flowchart LR
  subgraph COURT["Court-based support"]
    P1["P1 Pre-trial familiarisation"]:::moderate
    P2["P2 In-court support"]:::gap
    P3["P3 Information provision"]:::strong
    P4["P4 Remote delivery"]:::limited
  end
  subgraph BEREAVE["Bereavement support"]
    H1["H1 Emotional / practical / peer"]:::limited
    H2["H2 Advocacy & navigation"]:::moderate
    H3["H3 Outreach for children"]:::gap
  end
  O2(("Feeling informed"))
  O3(("Support received"))
  O4(("Justice engagement"))
  O1(("Cope & resilience"))
  P1 --> O2
  P2 --> O4
  P3 --> O3
  P4 --> O2
  H1 --> O1
  H2 --> O3
  H3 --> O1
  classDef strong fill:#e6f4ec,stroke:#1f7a5a,color:#14312a;
  classDef moderate fill:#e9f2f5,stroke:#3e8da6,color:#173038;
  classDef limited fill:#fbf1dc,stroke:#b0812a,color:#3a2e10;
  classDef gap fill:#fbe9e4,stroke:#b24a32,color:#3a1710;
`;

const PATHWAYS = [
  { id: 'P1', svc: 'Court support', grade: 'moderate', name: 'Pre-trial familiarisation reduces witness anxiety', vfs: 'Feeling informed' },
  { id: 'P2', svc: 'Court support', grade: 'gap', name: 'In-court support sustains attendance through to testimony', vfs: 'Justice engagement' },
  { id: 'P3', svc: 'Court support', grade: 'strong', name: 'Information provision meets a witness’s right to be informed', vfs: 'Support received' },
  { id: 'P4', svc: 'Court support', grade: 'limited', name: 'Remote delivery reaches those who cannot attend in person', vfs: 'Feeling informed' },
  { id: 'H1', svc: 'Bereavement', grade: 'limited', name: 'Emotional, practical & peer support builds resilience', vfs: 'Cope & resilience' },
  { id: 'H2', svc: 'Bereavement', grade: 'moderate', name: 'Advocacy & navigation connect families to tailored help', vfs: 'Support received' },
  { id: 'H3', svc: 'Bereavement', grade: 'gap', name: 'Community outreach supports affected children & young people', vfs: 'Cope & resilience' },
];

const GRADE_STYLES: Record<string, string> = {
  strong: 'bg-green-50 text-green-700 border border-green-200',
  moderate: 'bg-sky-50 text-sky-700 border border-sky-200',
  limited: 'bg-amber-50 text-amber-700 border border-amber-200',
  gap: 'bg-red-50 text-red-700 border border-red-200',
};

const DELIVERABLES = [
  { item: 'ToC ontology (Turtle)', detail: 'A typed Theory-of-Change vocabulary with 7 worked pathways, each resolving input → activity → output → outcome → impact.' },
  { item: 'Outcome anchoring', detail: 'Every outcome maps to a published national outcome (here, the four Victims’ Funding Strategy outcomes) rather than a bespoke, unaccountable one.' },
  { item: 'SHACL shapes', detail: 'Validate completeness, outcome alignment, a mandatory evidence grade on every causal claim, and declared assumptions.' },
  { item: 'Evidence-extraction schema', detail: 'A structured extraction table (population, service model, delivery mode, outcome, effect, quality grade, provenance) so the evidence map is queryable and its gaps countable.' },
  { item: 'Validator', detail: 'A script that runs the SHACL check and prints the evidence-gap map - reproducible with pyshacl.' },
];

const EVIDENCE = [
  { pop: 'Court witnesses', model: 'Pre-trial familiarisation', mode: 'In-person', vfs: 'Informed', effect: 'Positive (anxiety ↓)', grade: 'moderate', prov: 'analogous / indicative' },
  { pop: 'Court witnesses', model: 'On-the-day in-court support', mode: 'In-person', vfs: 'Justice engagement', effect: 'not estimable', grade: 'gap', prov: 'no robust study identified' },
  { pop: 'Court witnesses', model: 'Information & signposting', mode: 'In-person / remote', vfs: 'Support received', effect: 'Positive (compliance)', grade: 'strong', prov: 'entitlement + service records' },
  { pop: 'Bereaved families', model: 'Emotional / practical / peer', mode: 'Blended', vfs: 'Cope & resilience', effect: 'Positive (indicative)', grade: 'limited', prov: 'grey literature / provider data' },
  { pop: 'Children & young people', model: 'Short-term community outreach', mode: 'In-person', vfs: 'Cope & resilience', effect: 'not estimable', grade: 'gap', prov: 'no identified evaluation' },
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
          When a Theory of Change has to hold up
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Government is being pulled towards proving that what it funds works. The workhorse of that proof, where trials are not feasible, is the Theory of Change - and as a prose diagram it hides its own weakest links. This is a reflection on where the evaluation agenda is heading, and a small, open method for building a Theory of Change that can actually be checked. We work it on victim and witness support.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            The centre of government is steadily raising the evidential bar behind spending. The <a href="https://www.gov.uk/government/organisations/evaluation-task-force/about" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Evaluation Task Force</a> - a joint Cabinet Office and HM Treasury unit set up after the 2020 Spending Review, once it emerged that only 8% of the government’s £432&nbsp;billion of major-project spend had a robust impact-evaluation plan - has since advised on over 380 programmes worth £202&nbsp;billion. Its <a href="https://www.gov.uk/government/publications/evaluation-task-force-strategy-2026-2029" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">2026–2029 strategy</a> marks a deliberate shift: from checking that evaluation happens, to ensuring the evidence actually shapes what gets continued, expanded or stopped.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            For services that support victims and witnesses the pull is sharper still. The <a href="https://www.legislation.gov.uk/ukpga/2024/21/contents" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Victims and Prisoners Act 2024</a> puts the Victims’ Code on a statutory footing, adds a duty to collaborate on commissioning victim support, and gives the Victims’ Commissioner powers to request compliance data; the <a href="https://www.gov.uk/government/publications/victims-funding-strategy/victims-funding-strategy" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Victims’ Funding Strategy</a> already commissions against four national outcomes and asks for evaluation plans in contracts. The direction is unmistakable: these services will increasingly have to show, proportionately and on shared outcomes, that they work - and to do it with the <a href="https://www.gov.uk/government/publications/the-magenta-book" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Magenta Book</a> as the standard and, per the Ministry of Justice’s own <a href="https://www.gov.uk/government/publications/ministry-of-justice-areas-of-research-interest-2025" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Areas of Research Interest 2025</a>, an openness to AI-assisted evidence synthesis.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">A method problem, long known</h2>
          <p className="text-gov-dark leading-relaxed">
            Most of that evaluation will rest on a Theory of Change, because randomised designs are rarely feasible for support services. Yet theory-based evaluation has carried the same flaw since Carol Weiss set it out in the 1990s: teams draw the programme theory and then do not use it to steer the evaluation. Pawson and Tilley’s realist evaluation sharpened the question a Theory of Change exists to answer - <em>what works, for whom, in what circumstances</em> - but the artefact itself stays a diagram with a narrative, and on the page a link with no evidence behind it looks exactly like a link with strong evidence. (Blamey and Mackenzie, in <em>Evaluation</em>, 2007, mapped how closely the two traditions actually sit.)
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            For services whose outcomes are diffuse and whose evidence base is thin - much of the victim and witness landscape - that is exactly where an evaluation goes wrong before it begins: effort pours into the links that are already well understood, while the load-bearing assumption nobody has tested sits unexamined in the middle of the diagram.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method: treat the Theory of Change as data</h2>
          <p className="text-gov-dark leading-relaxed">
            The fix is not a better drawing. It is to make the Theory of Change computable: type every element, anchor each outcome to a <em>published</em> national outcome rather than a bespoke one, attach an evidence grade to every causal claim, declare the assumptions each pathway rests on, and let a validator check the whole graph for completeness. What was a persuasive picture becomes a structure you can query, test and reuse.
          </p>
        </div>
        <h3 className="text-lg font-bold text-gov-dark">Worked on victim &amp; witness support</h3>
        <p className="text-gov-dark leading-relaxed">
          To show it doing real work we apply the method to victim and witness support - court-based support for witnesses, and support for families bereaved by homicide - anchoring every outcome to the four Victims’ Funding Strategy outcomes. Each pathway below is one mechanism of change, coloured by how well existing evidence supports it. The links carrying the headline claims - that in-court support keeps witnesses engaged (P2), that community outreach helps bereaved children cope (H3) - are exactly the ones the evidence cannot yet support, so they are recorded as gaps and become the questions an evaluation should prioritise.
        </p>
        <div className="bg-white border border-gov-border/50 rounded-xl p-4 sm:p-6">
          <Mermaid chart={TOC_CHART} id="toc" ariaLabel="Theory of Change graph linking seven support pathways to four national outcomes, coloured by evidence strength." />
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-green-50 text-green-700 border border-green-200">strong - robust evidence</span>
          <span className="px-2 py-1 rounded bg-sky-50 text-sky-700 border border-sky-200">moderate - indicative / analogous</span>
          <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">limited - weak or indirect</span>
          <span className="px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200">evidence gap - prioritise for evaluation</span>
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
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What the method produces</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Artefact</th>
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
            Because the pathways are typed, SHACL shapes check the graph the way a spell-checker checks prose: no outcome without a published anchor, no causal claim without an evidence grade, no pathway without its declared assumptions. Running the validator on this graph returns <strong>SHACL conforms: true</strong>, then surfaces the evidence-gap map by query - <strong>two genuine gaps across seven pathways</strong>. Structure is guaranteed; the gaps are recorded, not hidden. That is what turns “name the weak links” from a hope into a mechanical result - and it is precisely what a feasibility assessment or an Evaluation Task Force reviewer is looking for.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gov-border/50">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Population</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Service model</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Outcome</th>
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
          Effect directions and grades shown here are illustrative of the extraction structure, not asserted findings. The two rows marked <em>gap</em> reflect a real state of the field: these links are widely assumed but not yet robustly evidenced.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            An open, machine-readable Theory of Change and evidence schema released under CC-BY-4.0, built on Tesseract’s <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open-ontologies</a> approach and validated with SHACL. As evaluation moves to the centre of spending decisions, a Theory of Change stops being a document produced once and filed. It becomes standing infrastructure - auditable, internally consistent, and carried forward into the full evaluation rather than redrawn from scratch. The products a commissioner sees are still the familiar ones - the diagram, the narrative, the monitoring-and-evaluation framework; the structured graph underneath is what makes them hold up.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            This is an independent, self-initiated reflection on method. It is built entirely from public information and open standards, uses no confidential or commissioned data, and represents no organisation’s findings but our own.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A clean Theory of Change is not one with no weak links; it is one where the weak links are named. Building it as a validated graph forces that honesty - the claims a service cannot yet evidence stop being reassuring prose and become the exact questions an evaluation must answer."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open method</p>
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
