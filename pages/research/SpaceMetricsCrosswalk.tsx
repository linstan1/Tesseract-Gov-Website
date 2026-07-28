import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/space-metrics-crosswalk';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/space-metrics-crosswalk#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/space-metrics-crosswalk',
  headline:
    'Space debris metrics that cannot be added up: an open composition checker | Tesseract Academy',
  description:
    'The two premier orbital debris engineering models disagree by a factor of 2.3 to 3.0 at the 1 cm collision-risk threshold and by almost two orders of magnitude in the sub-millimetre regime, because they partition the same physical population along orthogonal axes. Every indicator built on either model silently inherits that partition and does not declare it. An open composition checker, built on QUDT, SOSA/SSN and PROV-O, that refuses invalid combinations with a reason and states what may be done instead.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'Space Environment Metrics Crosswalk',
    url: REPO,
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: 'Python',
  },
  keywords:
    'space debris, orbital debris, MASTER-8, ORDEM 3.1, ECOB, Criticality of Spacecraft Index, Space Sustainability Rating, QUDT, SOSA, SSN, PROV-O, semantic interoperability, ontology, crosswalk, metrics composition, space situational awareness, space sustainability, UN COPUOS long-term sustainability',
};

const DIVERGENCE = [
  { size: '1 m', delta: 'Near identical', tone: 'ok' },
  { size: 'Down to ~4 mm', delta: 'Less than an order of magnitude, ORDEM 3.1 lower', tone: 'warn' },
  { size: '1 cm', delta: 'MASTER-8 higher by a factor of 2.3, and 3.0 in the second case', tone: 'bad' },
  { size: '2 mm to 10 µm', delta: 'ORDEM 3.1 higher by a factor of 2 to 10', tone: 'bad' },
  { size: 'Sub-millimetre', delta: 'ORDEM 3.1 almost two orders of magnitude higher', tone: 'bad' },
];

const TONE: Record<string, string> = {
  ok: 'bg-green-50 text-green-700 border border-green-200',
  warn: 'bg-amber-50 text-amber-700 border border-amber-200',
  bad: 'bg-red-50 text-red-700 border border-red-200',
};

const RULES = [
  { id: 'R1', name: 'Dimension', detail: 'Quantity kinds must match for additive composition. Carried by QUDT.' },
  { id: 'R2', name: 'Denominator', detail: 'Quantities normalised against different bases are not additive. Per mission and per resident space object are not interchangeable.' },
  { id: 'R3', name: 'Partition', detail: 'Source models that partition the same population along orthogonal axes cannot have their outputs arithmetically combined. This is the rule the domain currently lacks.' },
  { id: 'R4', name: 'Regime of validity', detail: 'Declared size ranges and orbital regimes must overlap, and any requested evaluation point must sit inside the intersection.' },
  { id: 'R5', name: 'Independence', detail: 'Metrics sharing a source model are flagged as non-independent: common-mode error means a composed figure understates uncertainty.' },
];

const VERDICTS = [
  { pair: 'ECOB + ORDEM-derived indicator', verdict: 'INVALID', rule: 'R3, orthogonal partitions', tone: 'bad' },
  { pair: 'ECOB + Criticality of Spacecraft Index', verdict: 'INVALID', rule: 'R2, per mission against per object', tone: 'bad' },
  { pair: 'ECOB + SSR Mission Index', verdict: 'VALID WITH CAVEAT', rule: 'R5, both derive from MASTER-8, so not independent', tone: 'warn' },
  { pair: 'Any pair, reported side by side', verdict: 'VALID', rule: 'No arithmetic performed', tone: 'ok' },
];

export const SpaceMetricsCrosswalk: React.FC = () => {
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
          Case Study: Space Environment Measurement
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Space debris metrics that cannot be added up
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The world's two premier orbital debris models disagree by a factor of 2.3 to 3.0 at the diameter where collision-avoidance decisions are made. Neither is wrong. They divide the same physical population along axes that do not align, and nothing in either model's output records that fact. We built an open checker that catches it.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Divergence at 1 cm</p>
          <p className="text-3xl font-extrabold text-gov-dark">2.3 to 3.0x</p>
          <p className="text-sm text-gov-secondary mt-1">between two authoritative models</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Standards used</p>
          <p className="text-3xl font-extrabold text-gov-dark">3</p>
          <p className="text-sm text-gov-secondary mt-1">QUDT, SOSA/SSN, PROV-O</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Open and tested</p>
          <p className="text-3xl font-extrabold text-gov-dark">9 / 9</p>
          <p className="text-sm text-gov-secondary mt-1">tests passing, MIT licensed</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            ESA's <strong>MASTER-8</strong> and NASA's <strong>ORDEM 3.1</strong> are the two premier orbital debris engineering models. Both are authoritative. Both are carefully built. Both describe the same physical reality. On identical simulation cases they diverge sharply, and the joint ESA and NASA comparison study is explicit that this is not a matter of one being right: "each model provides its agency's best estimate of the orbital debris environment. One model may be more accurate in one regime while the other may be more accurate in another, and it is expected that the truth lies somewhere in between."
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The structural cause is stated in the same paper, and it is the sentence that matters: <strong>"a direct comparison of the source models is not immediately possible from the model output."</strong> MASTER-8 divides the population by <em>generative source</em>, into fragments, solid rocket motor slag and dust, NaK droplets, paint flakes, ejecta and MLI fragments. ORDEM 3.1 divides it by <em>material density</em>, into low, medium, high, NaK and intacts. One population, orthogonal cuts, only the NaK component in common.
          </p>
        </div>

        <div className="space-y-2">
          {DIVERGENCE.map((d) => (
            <div key={d.size} className="flex items-start gap-3 border border-gov-border/50 rounded-xl p-4 bg-white">
              <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded whitespace-nowrap ${TONE[d.tone]}`}>{d.size}</span>
              <p className="text-sm text-gov-secondary leading-relaxed">{d.delta}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          The 1 cm row is the one that matters operationally. The comparison paper calls it "a critical diameter threshold for collision risk estimations", and it is where collision-avoidance thresholds, shielding specification and post-mission disposal requirements are set.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why this is a safety problem, not a housekeeping problem</h2>
          <p className="text-gov-dark leading-relaxed">
            Every environmental indicator is computed over an underlying population model, and therefore <strong>silently inherits that model's partition</strong>. ECOB, the Criticality of Spacecraft Index and the Space Sustainability Rating mission index each carry an inheritance their outputs do not record. Combine two indicators built on different models and you have combined two incompatible partitions with no trace that it happened.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            There is no error message. The composed indicator returns a number, and the number gets used. It is the same class of failure as a unit mismatch, and it has the same property: cheap to prevent by construction, effectively undetectable afterwards.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built</h2>
        <p className="text-gov-dark leading-relaxed">
          Each metric is declared as an explicit, machine-readable object rather than described in prose. We deliberately built on mature standardised semantic infrastructure rather than inventing anything: <strong>QUDT</strong> for quantity kinds and units, <strong>SOSA/SSN</strong> (a W3C Recommendation) for observation semantics, and <strong>PROV-O</strong> (a W3C Recommendation) for the assumption and derivation chain. The vocabulary adds only the two things those three do not supply: the <strong>population partition</strong> a metric inherits from its source model, and its <strong>regime of validity</strong>.
        </p>
        <div className="space-y-3">
          {RULES.map((r) => (
            <div key={r.id} className="border border-gov-border/50 rounded-xl p-5 bg-white">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-gov-bg text-gov-blue border border-gov-border/50">{r.id}</span>
                <code className="text-sm font-semibold text-gov-dark">{r.name}</code>
              </div>
              <p className="text-sm text-gov-secondary leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          The decision is symbolic. There is no statistical component and no language model anywhere in the decision path, so the same inputs always produce the same, inspectable answer.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Four verdicts, not one refusal</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Composition</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Verdict</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Why</th>
              </tr>
            </thead>
            <tbody>
              {VERDICTS.map((v, i) => (
                <tr key={v.pair} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{v.pair}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded whitespace-nowrap ${TONE[v.tone]}`}>{v.verdict}</span>
                  </td>
                  <td className="px-4 py-3 text-gov-secondary">{v.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-l-2 border-l-gov-blue pl-6">
          <p className="text-gov-dark leading-relaxed">
            <strong>The third row is the one that shows the tool is doing real work.</strong> A checker that refuses everything is useless, and one that permits everything is dangerous. ECOB and the SSR mission index genuinely <em>are</em> structurally combinable, and the framework permits the combination while flagging that both derive from MASTER-8 and are therefore not independent estimates. Shared source-population error is common-mode, so a composed figure will understate its own uncertainty. That is a judgement a spreadsheet cannot make and a dashboard will not surface.
          </p>
        </div>
        <p className="text-gov-dark leading-relaxed">
          Every refusal is issued together with what may be done instead: report both figures side by side attributed to their source models with the divergence stated; use either metric alone within its own declared regime of validity; or establish an explicit, evidenced mapping between the two partitions, after which composition becomes checkable. <strong>The purpose is to establish what can validly be done. Refusal is the safety property underneath, not the headline feature.</strong>
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The gap this sits in</h2>
          <p className="text-gov-dark leading-relaxed">
            A decade of orbital debris ontology work exists in the literature. The Space Object Ontology, the Space Situational Awareness Ontology and an associated orbital event ontology are all formalised in OWL, and all are described by their authors as under development. <strong>None has been mapped to an operational data standard or to an engineering model.</strong>
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            Meanwhile the CCSDS orbit, conjunction and tracking message families are mature and operationally adopted, but they are syntactic: they standardise message structure, not the meaning of a derived quantity, not the population partition it was computed over, and not the assumptions under which it holds. Four layers, developed independently, none mapped to the next. This artifact is one small, concrete step across that gap.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Scope, stated plainly</h2>
          <p className="text-gov-dark leading-relaxed">
            The declarations capture the <strong>structural</strong> commitments of each metric: quantity kind, denominator, source model, inherited partition, regime of validity and stated assumptions. They do <strong>not</strong> reimplement the metrics' formulae and are not a substitute for the primary literature; parameter-level definitions should be confirmed with the metric authors before operational use. The ORDEM-derived indicator is constructed for demonstration and is not a published index. The orthogonality assertion between the two partitions is evidenced by the cited ESA and NASA study rather than asserted by us. This is a demonstrator built to show that the composition problem is mechanically checkable, and it is deliberately small.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why we could build it quickly</h2>
          <p className="text-gov-dark leading-relaxed">
            Because the method was not invented here. This is the third domain in which we have applied the same pattern: formalise each authoritative representation's commitments machine-readably, compute where a mapping is sound, lossy or invalid, and emit a certificate a reviewer can check independently rather than having to trust us. Previously for defence and security information exchange, in the <Link to="/research/ies-hqdm-defence-interoperability" className="text-gov-blue underline hover:text-gov-blue-dark">IES to HQDM crosswalk</Link> with its reasoner-certified 21-axiom bridge, and for UK government digital twin semantics through the National Digital Twin Programme.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The domains differ. The problem does not: two or more authoritative representations of the same reality, built on different assumptions, that somebody now needs to use together.
          </p>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Reproduce it</h2>
        <p className="text-gov-dark leading-relaxed">
          The repository is public and MIT licensed. One of the tests asserts that the factor 2.3 to 3.0 divergence appears in the refusal reason, so if a future change ever caused the tool to quietly average the two models instead of refusing them, that test fails.
        </p>
        <pre className="bg-white border border-gov-border/50 rounded-lg p-4 text-sm overflow-x-auto text-gov-dark"><code>{`git clone ${REPO}
cd space-metrics-crosswalk
pip install -r requirements.txt
python examples/master_ordem_1cm.py
pytest tests/ -q          # 9 passed`}</code></pre>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          View the repository on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">References</h2>
        <ul className="space-y-2 text-sm text-gov-secondary leading-relaxed list-disc pl-5">
          <li>ESA and NASA, <em>Flux comparison of MASTER-8 and ORDEM 3.1 modelled space debris population</em>, 8th European Conference on Space Debris, Darmstadt, 2021. NASA NTRS 20210011563</li>
          <li>Letizia, Colombo, Lewis and Krag, on the ECOB space debris index</li>
          <li>Rossi, Valsecchi and Alessi, <em>The Criticality of Spacecraft Index</em></li>
          <li>Space Sustainability Rating (World Economic Forum, ESA, MIT Space Enabled, University of Texas at Austin, BryceTech)</li>
          <li>Rovetto, <em>An Ontological Architecture for Orbital Debris Data</em>; Rovetto and Kelso, <em>Preliminaries of a Space Situational Awareness Ontology</em></li>
          <li>UN COPUOS, <em>Guidelines for the Long-term Sustainability of Outer Space Activities</em></li>
        </ul>
      </section>
    </article>
  );
};
