import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CHART, HBars, Tile, type BarRow } from '../../components/ChartKit';

const REPO = "https://github.com/fabio-rovai/qollateral";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/quantum-collateral-benchmark#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/quantum-collateral-benchmark",
  "headline": "An open ontology-grounded benchmark for quantum collateral optimisation, with every allocation certified twice | Tesseract Academy",
  "description": "Hybrid quantum optimisation pipelines encode business constraints twice, once as QUBO penalties and once in the classical checker, so both can share a misunderstanding and the check still passes. Qollateral makes the collateral rule book machine readable in OWL and SKOS, declares per rule whether it admits an exact quadratic encoding, and compiles that one source to both a CP-SAT integer model and a QUBO. Every solver run is certified twice, once in Python and once by SHACL shapes over reified allocation assertions. On a seeded grid of 8 instances between 8 and 20 binary variables, CP-SAT proved every optimum within 0.0034 seconds while QAOA at depth 1 to 3 on a noiseless simulator returned a certified feasible sample in 20 of 24 runs. An agreement battery of 120 cells across two rule books found zero disagreements on 98 feasible instances. A nine variable instance run on ibm_kingston, a 156 qubit IBM Heron device, was certified feasible by both paths and reached approximation ratio 1.0290, matching the noiseless simulator. Measured against qiskit-optimization across 15 instances, the textbook slack route needs a median 2.09 times the qubits of the declared exact encoding for the same optimum, and absorbs 46 of 46 concentration constraints at a bound of one but 0 of 11 at a bound of two.",
  "author": { "@id": "https://gov.tesseract.academy/#organization" },
  "publisher": { "@id": "https://gov.tesseract.academy/#organization" },
  "datePublished": "2026-08-29",
  "dateModified": "2026-08-29",
  "inLanguage": ["en"],
  "about": {
    "@type": "SoftwareSourceCode",
    "name": "Qollateral",
    "url": "https://github.com/fabio-rovai/qollateral"
  }
};

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://gov.tesseract.academy/research/quantum-collateral-benchmark#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does QAOA beat classical solvers on collateral allocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at the sizes this benchmark can verify exactly. On instances between 8 and 20 binary variables, CP-SAT proved every optimum in at most 0.0034 seconds, while QAOA at depths 1 to 3 on a noiseless simulator returned a certified feasible best sample in 20 of 24 runs and the exact optimum in 11. At 20 variables the quantum route consumed 330 seconds of wall clock against 0.003 seconds for CP-SAT. Reporting that gap honestly, with full resource accounting, is the point of the benchmark."
      }
    },
    {
      "@type": "Question",
      "name": "What is the double encoding failure mode in hybrid quantum optimisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A hybrid pipeline encodes its business constraints twice, once as penalty terms in the QUBO the quantum routine consumes and once in the classical checker that validates the results. When both encodings are written by hand from the same prose rule book, they can implement the same misunderstanding, and the check passes on results that are wrong. Agreement between two implementations tests the implementation rather than the semantics."
      }
    },
    {
      "@type": "Question",
      "name": "What does it mean for a rule to be QUBO encodable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rule is exactly QUBO encodable when it admits a quadratic penalty or a pruning encoding that is zero if and only if the rule holds. A concentration limit of one unit per issuer per obligation compiles exactly to a pairwise penalty. A limit of two does not compile to any exact quadratic form without auxiliary variables. In this ontology every rule declares its encodability, and the loader refuses a rule book whose declaration is inconsistent, so the quantum route cannot silently solve a weaker problem than the rule book states."
      }
    },
    {
      "@type": "Question",
      "name": "How can SHACL certify a quantum optimisation result?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each solver run is emitted as reified allocation assertions in RDF, recording which unit was proposed for which obligation by which run. SHACL shapes then re-derive feasibility from that graph alone, one shape per defect class covering double pledge, coverage mismatch, concentration breach and ineligible assignment. Because those shapes consult neither compiler, they form an independent second certification path, and the verification script fails the build when the two paths disagree."
      }
    }
  ]
};

const FEASIBILITY_ROWS: BarRow[] = [
  { label: '8 variables, depth 3', value: 1904, display: '0.1904' },
  { label: '9 variables, depth 3', value: 2231, display: '0.2231' },
  { label: '11 variables, depth 3', value: 464, display: '0.0464' },
  { label: '15 variables, depth 3', value: 2, display: '0.0002', color: CHART.amber },
  { label: '19 variables, depth 3', value: 0.5, display: '0.0000', color: CHART.amber },
  { label: '20 variables, depth 3', value: 24, display: '0.0024', color: CHART.amber },
];

const QUBIT_COST_ROWS: BarRow[] = [
  { label: 'Declared exact encoding (this compiler)', value: 100, display: 'baseline' },
  { label: 'Absorb what fits, slack for the rest', value: 143, display: '1.43x qubits', color: CHART.gray },
  { label: 'Slack variables throughout', value: 209, display: '2.09x qubits', color: CHART.amber },
];

const HARDWARE_ROWS: BarRow[] = [
  { label: 'Noiseless simulator, feasibility mass', value: 1204, display: '0.1204' },
  { label: 'ibm_kingston (156 qubit Heron), feasibility mass', value: 1079, display: '0.1079', color: CHART.gray },
];

const RESOURCE_ROWS: BarRow[] = [
  { label: '8 variables: depth 111, 138 two-qubit gates', value: 138, display: '0.7 s' },
  { label: '12 variables: depth 340, 703 two-qubit gates', value: 703, display: '1.8 s' },
  { label: '15 variables: depth 455, 907 two-qubit gates', value: 907, display: '6.2 s' },
  { label: '19 variables: depth 652, 1,778 two-qubit gates', value: 1778, display: '80.0 s', color: CHART.amber },
  { label: '20 variables: depth 663, 1,873 two-qubit gates', value: 1873, display: '330.2 s', color: CHART.amber },
];

export const QuantumCollateralBenchmark: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An open, ontology-grounded benchmark for quantum collateral optimisation, with every allocation certified twice"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 29 August 2026.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>

      <section id="english" lang="en">
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Banks and other financial institutions satisfy their margin, settlement and funding commitments by posting assets that vary across class, currency, issuer and liquidity. Deciding which piece of collateral should back which commitment, subject to eligibility schedules, no-reuse controls, exact coverage requirements and issuer concentration limits, is a combinatorial problem that arises again and again, and it ranks among the workloads most frequently put forward for near-term quantum optimisation. We created Qollateral, an open benchmark that places the rule book at the heart of that proposal instead of treating it as an afterthought, and we released every number it generates alongside the machinery needed to recompute them."}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <Tile kpi="1.0290" label="approximation ratio on ibm_kingston, matching the noiseless simulator" />
          <Tile kpi="0.0034 s" label="slowest CP-SAT proof of optimality across the grid" />
          <Tile kpi="20 of 24" label="QAOA runs returning a certified feasible sample" />
          <Tile kpi="2.09x" label="qubits the generic route needs for the same optimum" />
        </div>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The failure mode that motivated the build"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"A hybrid quantum pipeline expresses its business constraints in two places. One encoding sits in the penalty terms of the quadratic unconstrained binary optimisation problem fed to the quantum routine, and the other sits in the classical checker that validates whatever comes back. If people hand-write both encodings from the same prose rule book, a single misunderstanding can live in both, and validation then approves results that are wrong. In earlier register work we observed a dual-computation gate approve figures that were off by a factor of 3.6, since both computation paths had absorbed the same misreading of a source vocabulary. The broader lesson is this: when two implementations agree, what has been checked is the implementation, not the semantics."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"One rule book, compiled to both routes"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Qollateral eliminates that failure mode by construction. The rule book exists as data, expressed in Turtle under CERO, the Collateral Eligibility Rule Ontology. Each rule states whether it permits an exact quadratic encoding and which algebraic form such an encoding would take, and those encoding forms appear as concepts in a SKOS scheme that records their algebra as data. One compiler consumes the rule book and emits a CP-SAT integer model. A second compiler consumes the same rule book and emits the QUBO. Any rule lacking an exact quadratic encoding is refused at load time. The concentration rule illustrates how this works: a limit of one unit per issuer per obligation compiles exactly into a pairwise penalty, whereas a limit of two possesses no exact quadratic form without auxiliary variables, so a rule book asserting that combination gets rejected before any solver ever runs."}</p>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Certification is therefore independent, and it happens twice. A Python certifier re-derives whether every proposed allocation is feasible straight from raw asset and obligation attributes, without referring to either compiler. Independently, each solver run is written out as reified allocation assertions in RDF, and SHACL shapes re-derive the identical verdict from the graph, with one shape per defect class covering double pledge, coverage mismatch, concentration breach and ineligible assignment. A verification script demands that the two verdicts agree on every run and exits non-zero whenever they do not. Eligibility itself gets derived in three ways: by the pruner, by the emitted graph edges, and by a SPARQL query over raw attributes."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What the measurements show"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Across the seeded grid of eight instances spanning 8 to 20 binary variables, CP-SAT proved every optimum in no more than 0.0034 seconds. QAOA, executed at depths one to three on a noiseless simulator, with parameters optimised against exact statevector expectations and solutions obtained by sampling transpiled circuits, delivered a certified feasible best sample in 20 of 24 runs and sampled the exact optimum in 11. Four runs yielded no feasible sample whatsoever, and the SHACL layer flagged precisely those four, in full agreement with the Python certifier, working on live solver output rather than a constructed test case."}</p>
        <HBars
          title="Share of 4,096 sampled shots that land on a feasible allocation, depth 3"
          note="Bars are scaled by feasibility mass in units of one ten-thousandth. The 19 variable instance returned no feasible sample at depth 3, shown at the axis minimum. Feasible states are rare by construction: the 20 variable instance has 66 feasible assignments among 1,048,576."
          rows={FEASIBILITY_ROWS}
        />
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The sampled feasibility mass dropped from 0.19 at 8 variables down to 0.0002 at 19, whereas routed circuit depth climbed from 43 to 663 and the two-qubit gate count from 42 to 1,873. At 20 variables the QAOA route consumed 330 seconds of wall clock, compared with 0.003 seconds for CP-SAT. Depth and gate counts are measured following transpilation onto a linear coupling map and a native-style basis, which makes them routed numbers rather than abstract circuit counts."}</p>
        <HBars
          title="Transpiled two-qubit gate count at depth 3, with wall clock alongside"
          note="Bars show two-qubit gate count after routing to a linear coupling map. Labels show the wall clock of the full depth-3 run, including classical parameter optimisation. CP-SAT solved every one of these instances in under 0.0034 seconds."
          rows={RESOURCE_ROWS}
        />

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The first run on real hardware"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"On 29 August 2026, version 0.1 of this benchmark executed a nine variable instance on ibm_kingston, an IBM Heron device with 156 qubits, at depth 1 using 2048 shots. Because the parameters had been optimised on the simulator in advance, the processor was used for sampling alone and no variational loop was run against the hardware. The samples returned were processed by the identical Python certifier and the identical SHACL layer 3 shapes applied to every simulator run in this study, and they passed both. That is the headline result and it deserves stating first: the certification path functions end to end on genuine device output, not merely on output we produced ourselves."}</p>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"On the hardware, the approximation ratio came to 1.0290, exactly matching the noiseless simulator on the same instance, while the sampled feasibility mass reached 0.1079 compared with the simulator's 0.1204. At depth 1, neither run located the exact optimum, a fact the simulator sweep had already established for this instance. What one instance at one depth on one device demonstrates is that the pipeline executes and certifies correctly on real hardware. It demonstrates nothing concerning scaling under noise, and we advance no claim of that kind."}</p>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The more transferable finding is the routing comparison, since it contradicts a widely held assumption. When transpiled against the actual heavy-hex coupling map at optimisation level 3, the circuit requires 1.64 times the depth yet only 0.81 times the two qubit gates of the linear coupling map estimate relied upon throughout the simulator study. A linear map is consequently not a conservative proxy in both directions simultaneously: it inflates the entangling gate count while understating depth. Any resource estimate quoted from an idealised topology ought to state which of the two it is optimistic about, as that answer decides whether the circuit fits within a coherence budget or a gate error budget."}</p>
        <HBars
          title="Same instance, same depth: real device against the noiseless simulator"
          note="Instance v9-s2-a14 at depth 1. Feasibility mass is the share of shots landing on a feasible allocation, shown here in units of one ten-thousandth. Both runs were certified by the Python certifier and by SHACL layer 3."
          rows={HARDWARE_ROWS}
        />

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The agreement battery"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Outside the grid, an agreement battery swept 120 cells over two rule books, four sizes and fifteen seeds. Across the 98 cells where a feasible instance exists, it detected zero disagreements on any of four properties: the unconstrained QUBO ground state equals the constrained optimum, CP-SAT equals exhaustive enumeration, the CP-SAT solution passes the independent certifier, and the lowest infeasible QUBO energy lies strictly above the highest feasible objective, with a minimum observed separation of 27 cost units. The other 22 cells admit no feasible instance for that combination of size and seed, a fact that is recorded rather than quietly dropped. The second rule book departs from the first in exactly one Turtle value, requiring a currency match in eligibility, and both compilers absorb that change together with no code edit."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What the declaration buys, measured against a general purpose converter"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The obvious objection runs like this: a general purpose converter already transforms constraints into a QUBO, so declaring encodability inside an ontology adds ceremony and nothing more. We put that to the test directly. The same problem was constructed as a Qiskit QuadraticProgram and converted with qiskit-optimization's own converters, over fifteen instances spanning five seeds and three sizes. Every Qiskit route is correct on every instance: its QUBO ground state is the constrained optimum each time. What differs is the qubit cost, and whether that cost becomes visible before the model is built."}</p>
        <HBars
          title="Qubits needed for the same optimum, relative to the declared exact encoding"
          note="Median across 15 instances at a concentration bound of one, measured with qiskit-optimization 0.7.0 and pinned by regression test. The slack route ranges from 1.67 to 2.29 times the declared encoding. All routes return the same optimum; on near-term hardware a factor of two in qubits is the difference between runnable and not runnable."
          rows={QUBIT_COST_ROWS}
        />
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The converter also confirms the declaration itself, which is the more useful half of the result. We count per constraint instead of per instance, since an instance that happens to carry no concentration constraint would otherwise register as a vacuous success: all 46 non-trivial concentration constraints at a bound of one are absorbed into the quadratic penalty with no auxiliary variables. At a bound of two, none of the 11 are, because the converter leaves every one of them for the slack route. That is precisely the boundary the ontology declares, arrived at independently by a tool that has never seen our rule book. Our compiler refuses that rule book at load time instead of discovering the problem downstream, and regression tests pin both regimes."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The baseline a hardware claim now has to clear"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"At these sizes the classical routes dominate on every measure, and that is the useful result. Advantage, parity, non-competitiveness and uncertainty are each valid outcomes of a fair comparison, and a benchmark able to report only the first of these is not a benchmark. What this one contributes is the frozen protocol: exact compilation of both routes from one rule book, doubled certification, and per-run resource accounting that covers qubits, routed depth, two-qubit gates, shots, optimiser evaluations and wall clock. Any future hardware claim on this workload now has a stated baseline to beat and a stated cost at which to beat it."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Prior art, and the gap"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The prior art is real and we credit it. Giron, Korpas, Parvaiz, Malik and Aspman formulated collateral optimisation as MILP and QUBO for NISQ and quantum-inspired computing in IEEE Transactions on Quantum Engineering in 2023. Jin and Florescu published a higher-order QAOA framework for CSA and margin-aware collateral in 2026, featuring a deterministic CP-SAT solver that certifies candidate actions before recommendation, and the concept of a classical arbiter over quantum candidates belongs to them. What Qollateral adds, to the best of our knowledge, is the combination: the rule book as ontology data with per-rule declared encodability, one source compiled to both solver routes, an independent SHACL certification path over reified allocation assertions, and a fully open seeded benchmark whose every headline is computed two ways. We welcome corrections to that claim as repository issues."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Where the method transfers"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Every hybrid optimisation pipeline whose constraints originate in a governed document faces this same double-encoding failure mode. Network capacity rules, rostering agreements and grid dispatch limits all share the same shape, and the same remedy applies: render the rule book machine readable, declare encodability rule by rule, compile every route from the one source, and certify results along a path that consulted none of the compilers. The ontology, the shapes, the compilers and the battery all live in the repository under open licences, and the whole result set regenerates from seeds with two commands."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Scope and method"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Apart from the ibm_kingston run described above, every figure here is a simulator figure, and parameter optimisation is noiseless throughout, including for that run. The instances are synthetic and sized to allow exhaustive ground truth, which is the design decision that turns route agreement from an assertion into a tested property: with every assignment enumerable, the claim that the QUBO ground state is the constrained optimum gets checked rather than argued. The cost model is a cheapest-to-deliver proxy constructed from liquidity band, currency mismatch and issuer spread. From here the roadmap covers hardware execution of the smallest instances under the same doubled certification, constraint-preserving mixers and warm starts on the quantum side, auxiliary-variable encodings for concentration bounds above one, and an anonymised historical workload with a named data owner."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"A bounded first engagement"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"For a treasury, clearing or collateral technology team, the bounded exercise takes two weeks: formalise one eligibility schedule as a CERO rule book, compile it to your existing optimiser and to a QUBO, and run the agreement battery against your current allocations. What you get back is a machine-readable rule book you own, a defect list wherever the encodings disagree with practice, and a frozen benchmark protocol that any later quantum claim has to clear. Enquiries to fabio@thetesseractacademy.com."}</p>
      </section>
    </div>
  </div>
);
