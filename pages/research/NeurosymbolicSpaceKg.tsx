import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/neurosymbolic-space-kg';
const COURSE = 'https://tesseract.academy/courses/neurosymbolic-ai-in-space-knowledge-graphs-for-orbit/';
const MODEL = 'https://huggingface.co/fabsssss/qwen3-coder-30b-a3b-space';
const DATASET = 'https://huggingface.co/datasets/fabsssss/ssao-space-instruct';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/neurosymbolic-space-kg#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/neurosymbolic-space-kg',
  headline:
    'Silence is not assent: extensional falsification of catalogue-to-ontology alignments in space | Tesseract Academy',
  description:
    'A knowledge graph of all 70,122 catalogued space objects (833,403 triples from a pinned CelesTrak SATCAT snapshot) aligned to the Space Situational Awareness Ontology. The ontology declares one disjointness axiom, so 351 of its 353 classes can never reject a wrong AI classification. LogMap 4.0 on the same pair produces zero repair conflicts while the catalogue refutes nine of its candidates. Full method, measurements and the circular measurement our own sensitivity analysis caught.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-29',
  dateModified: '2026-07-30',
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
      provider: { '@id': 'https://gov.tesseract.academy/#organization' },
    },
  ],
  keywords:
    'space situational awareness, knowledge graph, ontology alignment, SSAO, SSSOM, space debris, IADC, neurosymbolic AI, SATCAT, CelesTrak, LogMap, extensional evaluation',
};

const PIPELINE_CHART = `graph LR
  A["CelesTrak SATCAT<br/>70,122 objects, hash-pinned"] --> B["Vocabulary lift<br/>codes to defined classes"]
  B --> C["Knowledge graph<br/>833,403 triples"]
  C --> D["Curated SSSOM alignment<br/>15 matches + 2 refusals"]
  D --> E["Channel I: reasoner<br/>disjointness reachability"]
  D --> F["Channel II: catalogue<br/>instance witnesses"]
  E --> G["Silent on 351 of 353 classes"]
  F --> H["Refutes 9 of LogMap's 20 candidates"]`;

const MUTANTS = [
  { m: 'Payload → Operational_Satellite', why: 'Payloads are satellites and many are operational', reasoner: 'silent', wit: '9,031 / 27,258', rate: '33.1%' },
  { m: 'GEO band → Geostationary_Orbit', why: 'The perennial geosynchronous/geostationary conflation', reasoner: 'silent', wit: '1,007 / 1,734', rate: '58.1%' },
  { m: 'RocketBody → Payload', why: 'Near-identical schema features: owner, launch date, elements', reasoner: 'silent', wit: '6,870 / 6,870', rate: '100%' },
  { m: 'Decayed → Resident_Space_Object', why: 'Every other class maps under it, so matchers generalise', reasoner: 'silent', wit: '35,411 / 35,411', rate: '100%' },
];

const LOGMAP = [
  { c: 'Payload → Payload', pool: 'final', verdict: 'correct', conf: '0.70', wit: '0 / 27,258', rate: '0%' },
  { c: 'StatusOperational → Operational_Status_of_Spacecraft', pool: 'final', verdict: 'category error', conf: '0.70', wit: '16,167 / 16,167', rate: '100%' },
  { c: 'RocketBody → Rocket_Body_Debris', pool: 'discarded', verdict: 'correct, wrongly discarded', conf: '0.44', wit: '0 / 6,870', rate: '0%' },
  { c: 'StatusOperational → Satellite_Operator', pool: 'hard discarded', verdict: 'category error', conf: '0.70', wit: '16,167 / 16,167', rate: '100%' },
  { c: 'RocketBody → Stellar_Body', pool: 'hard discarded', verdict: 'absurd', conf: '0.01', wit: '6,870 / 6,870', rate: '100%' },
  { c: 'Debris → Fragmentation_Debris', pool: 'hard discarded', verdict: 'the curated trap', conf: '0.31', wit: 'no test defined', rate: 'n/a' },
];

const SENSITIVITY = [
  { label: 'Inclination cut-off 1°', rate: '76.4%' },
  { label: 'Inclination cut-off 3°', rate: '66.1%' },
  { label: 'Inclination cut-off 5° (ours)', rate: '58.4%' },
  { label: 'Inclination cut-off 7°', rate: '49.2%' },
];

export const NeurosymbolicSpaceKg: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Silence is not assent: what actually catches a wrong AI classification in orbit
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        AI systems are beginning to file space data under ontology terms automatically. We measured what would catch their mistakes. The domain&apos;s best-known ontology can reject almost nothing; the public catalogue can reject almost everything. This is the full study, with the code, the numbers, and the error our own sensitivity analysis caught in it.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">The graph</p>
        <p className="text-3xl font-extrabold text-gov-dark">833,403</p>
        <p className="text-sm text-gov-secondary mt-1">triples covering all 70,122 catalogued objects</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Ontology can refute</p>
        <p className="text-3xl font-extrabold text-gov-dark">2 / 353</p>
        <p className="text-sm text-gov-secondary mt-1">classes reachable by its single disjointness axiom</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">LogMap repair conflicts</p>
        <p className="text-3xl font-extrabold text-gov-dark">0</p>
        <p className="text-sm text-gov-secondary mt-1">on 20 candidates, while the catalogue refutes 9</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The problem with the standard quality gate</h2>
        <p className="text-gov-dark leading-relaxed">
          When two vocabularies are aligned, the accepted way to check the result is logical: merge source, target and mappings, then run a reasoner to look for contradictions, and repair whatever produces them. Every method in that family assumes the target ontology contains axioms capable of contradicting something. Disjointness assertions, statements that two kinds of thing can never share a member, are where that power lives.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The Space Situational Awareness Ontology, the reference open ontology of the orbital domain and the version vendored inside a NASA visualisation project, declares <strong>exactly one</strong> disjointness axiom. It separates <code>Cartesian_Ephemeris</code> from <code>Keplerian_Ephemeris</code>: a guard against confusing two coordinate representations. Nothing separates payloads from debris, operational spacecraft from defunct ones, or geostationary orbits from merely geosynchronous ones.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          Propagating that axiom through the subsumption hierarchy reaches 2 of 353 classes: the two formats themselves. One of 62,128 possible class pairs, 0.002 percent, is provably incompatible. For every class an object-level alignment would actually target, <strong>no wrong mapping can ever be rejected by reasoning.</strong> A clean reasoner report there is silence, not assent. This is not a defect of the ontology; lightweight vocabularies are the norm in operational domains, and our companion measurements across <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial</Link> and <Link to="/research/construction-standards-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">construction</Link> standards find the same regime repeatedly. It is a mis-allocation of evidential burden.
        </p>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method: let the catalogue vote</h2>
      <p className="text-gov-dark leading-relaxed">
        The orbital domain has a compensating asset that few domains can match: a single public catalogue enumerating every tracked object with type, operational status, launch and decay dates, and orbital elements. Where the schema cannot refute, 70,122 instances can. The pipeline below turns that asset into an evaluation channel.
      </p>
      <Mermaid chart={PIPELINE_CHART} id="pipeline" ariaLabel="Pipeline from the pinned SATCAT catalogue through a vocabulary lift and knowledge graph to a curated alignment, then split into an intensional reasoner channel that is silent on 351 of 353 classes and an extensional catalogue channel that refutes nine of LogMap's twenty candidates." />
      <p className="text-gov-dark leading-relaxed">
        Two design decisions carry the weight. First, the catalogue&apos;s codes are lifted into defined classes with stable identifiers and printed thresholds, so the interpretation is inspectable rather than implicit. Second, and more important, <strong>instance data never asserts ontology types directly</strong>: ontology classification flows only through an explicit alignment file. That keeps the alignment a separate, falsifiable artefact instead of an invisible assumption baked into the data.
      </p>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Result 1: four plausible wrong mappings, two channels</h2>
      <p className="text-gov-dark leading-relaxed">
        To compare the channels we authored four correspondences that are wrong but lexically plausible, the characteristic failure mode of lexical, embedding and LLM matchers. Each was scored twice: can any reasoning path reach a contradiction, and how many catalogue-native counter-instances exist.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Wrong mapping</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Why a matcher proposes it</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Reasoner</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Witnesses</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Rate</th>
            </tr>
          </thead>
          <tbody>
            {MUTANTS.map((r, i) => (
              <tr key={r.m} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.m}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.why}</td>
                <td className="px-4 py-3"><span className="font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-800">{r.reasoner}</span></td>
                <td className="px-4 py-3 text-right text-gov-secondary whitespace-nowrap">{r.wit}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark">{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The reasoner is silent on all four, structurally: their targets sit among the 351 unreachable classes. The catalogue refutes all four. The two informative cases are the graded ones: a mapping wrong for a third or a half of its extension is not merely wrong, it is <em>quantifiably</em> wrong, and that quantity is the kind of damage estimate a repair system could minimise against in place of the coherence count it cannot compute here.
      </p>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Result 2: a real matcher, and what the channel does to it</h2>
      <p className="text-gov-dark leading-relaxed">
        Authored mutants only model matcher failure, so we ran <strong>LogMap 4.0</strong> on the same pair and collected not just its final alignment but its complete candidate pool: the discarded and hard-discarded layers of its lexical index, the high-recall stratum every matcher builds before selection. Twenty distinct candidates.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Candidate</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Pool</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Verdict</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Conf.</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Witnesses</th>
            </tr>
          </thead>
          <tbody>
            {LOGMAP.map((r, i) => (
              <tr key={r.c} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark text-xs">{r.c}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.pool}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.verdict}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.conf}</td>
                <td className="px-4 py-3 text-right text-gov-secondary whitespace-nowrap">{r.wit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Three findings. <strong>The vacuity result holds on a live system:</strong> none of the 20 candidates has a disjointness-reachable target, and LogMap&apos;s coherence-repair stage, its distinctive strength on axiom-rich pairs, emitted an empty conflict set. The repair machinery is not wrong here; it is unemployed. <strong>The channel catches what selection let through:</strong> half of LogMap&apos;s final two-mapping alignment is a category error, mapping the class of operational <em>objects</em> to the ontology&apos;s class of operational <em>statuses</em>, refuted by every one of its 16,167 instances, which carry orbital elements no status possesses. <strong>And it works as a rescue:</strong> the correct rocket-body correspondence LogMap discarded at confidence 0.44 passes with zero witnesses in 6,870 chances. Witness profiles are not only a destructive test; they are a precision-and-recall signal that lexical confidence is not.
      </p>
    </section>

    <section className="space-y-6">
      <div className="border-l-2 border-l-amber-500 pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Result 3: the method falsified us</h2>
        <p className="text-gov-dark leading-relaxed">
          An earlier version of this work reported the geosynchronous-geostationary conflation at a 99.6 percent witness rate. That number was an artefact of our own vocabulary. The geosynchronous band had been derived by a cascade that assigned band membership only to objects <em>failing</em> the geostationary test, so band membership already encoded &quot;inclination above 5 degrees&quot; and the measurement was reading the class definition rather than the world.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The threshold sweep caught it: an independent recomputation over all band residents returned 58 percent where the graph returned 99.6. The vocabulary was corrected so the geostationary class <em>nests</em> inside the band, and every number in this study was regenerated. We report it prominently because it is evidence for the thesis at the meta level: <strong>extensional measurement is falsifiable in a way that reasoner silence is not, and it falsified us.</strong>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Threshold variant (band ±50 min)</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Witness rate</th>
            </tr>
          </thead>
          <tbody>
            {SENSITIVITY.map((r, i) => (
              <tr key={r.label} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark">{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The rate is stable against the band width (56.0 to 58.9 percent across a four-fold range) because band membership is set by period while the discriminating evidence is inclination. It is sensitive to the inclination cut-off, as it must be: that cut-off <em>is</em> the definition of the disputed concept, so a reader moving it is disputing the concept, not the method. The majority verdict survives the entire plausible range, since station-keeping tolerances are conventionally well under one degree.
      </p>
    </section>


    <section className="space-y-6">
      <div className="border-l-2 border-l-emerald-600 pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Result 4: a model that stays inside the vocabulary</h2>
        <p className="text-gov-dark leading-relaxed">
          If an ontology cannot reject a wrong term, the practical defence is a model that does not produce wrong terms. We fine-tuned Qwen3-Coder-30B on data derived from this study and published it openly: to our knowledge the first language model targeting a space-domain ontology.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The baseline behaviour is the study&apos;s thesis in miniature. Asked for SSAO Turtle, the untuned model invents <strong>13.81 non-existent ontology terms per output</strong>, and what it invents is telling: <code>ssao:SpaceObject</code>, <code>ssao:launchDate</code>, <code>ssao:OrbitalElements</code>, fluent camelCase that SSAO never defines. It also declares no prefixes, so nothing it writes parses. Confident, well-formed, unusable, and in this domain nothing would reject it.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Metric (held-out, n=99)</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Base</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Tuned</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Turtle parse rate', '0.0%', '98.6%'],
              ['Term conformance (every term real)', '0.0%', '97.2%'],
              ['Hallucinated terms per output', '13.81', '0.06'],
              ['Namespace fidelity', '33.3%', '100%'],
              ['Primary class accuracy', '36.1%', '100%'],
              ['Orbit regime accuracy', '0.0%', '80.6%'],
              ['Refusal rate on unanswerable questions', '75%', '100%'],
            ].map((r, i) => (
              <tr key={r[0]} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r[0]}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r[1]}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Two honest notes. The domain&apos;s canonical error survives: three of fourteen regime errors label a geostationary orbit geosynchronous, though in the safe direction, since every geostationary orbit genuinely is geosynchronous. And the model will volunteer fields you did not supply: given the ISS with no COSPAR number, it emitted the correct 1998-067A from pretraining, which is helpful for a famous object and a fabrication risk for an obscure one. The vocabulary gate catches invented <em>terms</em>; it cannot catch invented <em>values</em>. Both limitations are recorded in the model card rather than left for a user to discover.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={MODEL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          The model on Hugging Face <ExternalLink className="w-4 h-4" />
        </a>
        <a href={DATASET} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium px-2 py-3">
          The training dataset and eval traces <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The same machinery, as an application</h2>
        <p className="text-gov-dark leading-relaxed">
          Because the graph carries dates, statuses and derived regimes, the falsification machinery doubles as a rule engine for debris-mitigation reporting. Three rules, each with its assumptions printed:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>10,016</strong> in-orbit LEO objects launched more than 25 years ago in a non-mission state: a conservative lower bound on the population the IADC 25-year disposal guideline addresses (1,356 non-operational or unknown-status payloads, 636 rocket bodies, 8,024 debris, of 28,238 LEO residents). It is a lower bound because the catalogue records launch dates, not mission-end dates.</li>
          <li><strong>619</strong> non-operational payloads still in the GEO band rather than raised to the graveyard region: candidates for the super-synchronous disposal the guidelines prescribe.</li>
          <li><strong>0</strong> rows carrying both a decay date and operational status: a clean negative, and clean negatives belong in reports.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for buyers and builders</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>For space AI procurement:</strong> a tool &quot;validated against the ontology&quot; has passed a gate that cannot fail. Ask what instance-level checking sits behind the accuracy claim, and ask for witness counts rather than confidence scores.</li>
          <li><strong>For SSA data engineering:</strong> stage AI output against instance evidence before it enters the record. The catalogue grades errors quantitatively, which schema validation cannot do at all here.</li>
          <li><strong>For matcher developers:</strong> witness profiles are a usable selection signal in both directions, catching final-output errors and rescuing wrongly discarded candidates, and they are continuous rather than binary, which suits the direction OAEI evaluation has been moving.</li>
          <li><strong>Honest boundary:</strong> some refusals stay curatorial. The catalogue cannot distinguish fragmentation debris from mission-related debris, so nine of LogMap&apos;s twenty candidates have no defined test. The method&apos;s value is that it makes explicit which judgements it cannot make for you.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        Data snapshot, vocabulary lift, argued alignment, falsification harness, sensitivity sweep, matcher outputs and rule signals are public under CC BY 4.0, with sources pinned by checksum. Every number on this page regenerates from the repository. SATCAT data courtesy of CelesTrak (T.S. Kelso); the SSA Ontology is by Robert J. Rovetto, whose satellite-database work explicitly proposed it as a reference ontology for catalogue sources, the programme this study executes and measures.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          neurosymbolic-space-kg on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={COURSE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium px-2 py-3">
          Free 15-lesson course on the method <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the <Link to="/research/space-metrics-crosswalk" className="text-gov-blue underline hover:text-gov-blue-dark">space debris metrics composition checker</Link> measures which orbital-debris indices may legitimately be combined; the <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial</Link> and <Link to="/research/construction-standards-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">construction</Link> crosswalks apply the same falsifiability method to other standards families.
      </p>
    </section>
  </article>
);

export default NeurosymbolicSpaceKg;
