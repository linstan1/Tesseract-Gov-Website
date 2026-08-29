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
  "description": "Hybrid quantum optimisation pipelines encode business constraints twice, once as QUBO penalties and once in the classical checker, so both can share a misunderstanding and the check still passes. Qollateral makes the collateral rule book machine readable in OWL and SKOS, declares per rule whether it admits an exact quadratic encoding, and compiles that one source to both a CP-SAT integer model and a QUBO. Every solver run is certified twice, once in Python and once by SHACL shapes over reified allocation assertions. On a seeded grid of 8 instances between 8 and 20 binary variables, CP-SAT proved every optimum within 0.0034 seconds while QAOA at depth 1 to 3 on a noiseless simulator returned a certified feasible sample in 20 of 24 runs. An agreement battery of 120 cells across two rule books found zero disagreements on 98 feasible instances.",
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
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Financial institutions meet margin, settlement and funding obligations by pledging assets that differ in class, currency, issuer and liquidity. Choosing which unit of collateral serves which obligation, under eligibility schedules, no-reuse controls, exact coverage requirements and issuer concentration limits, is a recurring combinatorial decision, and it is one of the workloads most often proposed for near-term quantum optimisation. We built Qollateral, an open benchmark that treats the rule book as the central artefact of that proposal rather than an afterthought, and published every number it produces together with the machinery to recompute them."}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <Tile kpi="98" label="instances in the agreement battery, zero disagreements" />
          <Tile kpi="0.0034 s" label="slowest CP-SAT proof of optimality across the grid" />
          <Tile kpi="20 of 24" label="QAOA runs returning a certified feasible sample" />
          <Tile kpi="2" label="independent certification paths on every run" />
        </div>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The failure mode that motivated the build"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"A hybrid quantum pipeline encodes its business constraints twice. Once as penalty terms inside the quadratic unconstrained binary optimisation problem the quantum routine consumes, and once inside the classical checker that validates what comes back. When both encodings are written by hand from the same prose rule book, they can share a misunderstanding, and the validation passes on results that are wrong. We have watched a dual-computation gate pass on numbers that were wrong by a factor of 3.6 in earlier register work, because both computation paths consumed the same misreading of a source vocabulary. The lesson generalises: agreement between two implementations checks the implementation, not the semantics."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"One rule book, compiled to both routes"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Qollateral removes that failure mode by construction. The rule book is data, written in Turtle under CERO, the Collateral Eligibility Rule Ontology. Every rule declares whether it admits an exact quadratic encoding and which algebraic form that encoding takes, and the encoding forms are themselves concepts in a SKOS scheme that states their algebra as data. One compiler reads the rule book and produces a CP-SAT integer model. A second compiler reads the same rule book and produces the QUBO. A rule without an exact quadratic encoding is refused at load time. The concentration rule is the working example: a bound of one unit per issuer per obligation compiles exactly to a pairwise penalty, while a bound of two has no exact quadratic form without auxiliary variables, so a rule book declaring that combination is rejected before any solver runs."}</p>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Certification is then independent and doubled. A Python certifier re-derives the feasibility of every proposed allocation from raw asset and obligation attributes, without consulting either compiler. Separately, every solver run is emitted as reified allocation assertions in RDF, and SHACL shapes re-derive the same verdict from the graph, one shape per defect class covering double pledge, coverage mismatch, concentration breach and ineligible assignment. A verification script requires the two verdicts to agree on every run and exits non-zero when they do not. Eligibility itself is derived three ways, by the pruner, by the emitted graph edges, and by a SPARQL query over raw attributes."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What the measurements show"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"On the seeded grid of eight instances between 8 and 20 binary variables, CP-SAT proved every optimum in at most 0.0034 seconds. QAOA, run at depths one to three on a noiseless simulator with parameters optimised against exact statevector expectations and solutions drawn by sampling transpiled circuits, produced a certified feasible best sample in 20 of 24 runs and sampled the exact optimum in 11. Four runs produced no feasible sample at all, and the SHACL layer flagged exactly those four, in full agreement with the Python certifier, on live solver output rather than on a constructed test case."}</p>
        <HBars
          title="Share of 4,096 sampled shots that land on a feasible allocation, depth 3"
          note="Bars are scaled by feasibility mass in units of one ten-thousandth. The 19 variable instance returned no feasible sample at depth 3, shown at the axis minimum. Feasible states are rare by construction: the 20 variable instance has 66 feasible assignments among 1,048,576."
          rows={FEASIBILITY_ROWS}
        />
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The sampled feasibility mass fell from 0.19 at 8 variables to 0.0002 at 19, while routed circuit depth grew from 43 to 663 and two-qubit gate count from 42 to 1,873. At 20 variables the QAOA route took 330 seconds of wall clock against 0.003 seconds for CP-SAT. Depth and gate counts are measured after transpilation to a linear coupling map and a native-style basis, so they are routed numbers rather than abstract circuit counts."}</p>
        <HBars
          title="Transpiled two-qubit gate count at depth 3, with wall clock alongside"
          note="Bars show two-qubit gate count after routing to a linear coupling map. Labels show the wall clock of the full depth-3 run, including classical parameter optimisation. CP-SAT solved every one of these instances in under 0.0034 seconds."
          rows={RESOURCE_ROWS}
        />

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The agreement battery"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Beyond the grid, an agreement battery swept 120 cells across two rule books, four sizes and fifteen seeds. On the 98 cells where a feasible instance exists, it found zero disagreements on any of four properties: the unconstrained QUBO ground state equals the constrained optimum, CP-SAT equals exhaustive enumeration, the CP-SAT solution passes the independent certifier, and the lowest infeasible QUBO energy sits strictly above the highest feasible objective, with a minimum observed separation of 27 cost units. The remaining 22 cells admit no feasible instance at that combination of size and seed, which is recorded rather than quietly dropped. The second rule book differs from the first in exactly one Turtle value, requiring a currency match in eligibility, and both compilers pick that change up together with no code edit."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The baseline a hardware claim now has to clear"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The classical routes dominate on every measure at these sizes, and that is the useful result. Advantage, parity, non-competitiveness and uncertainty are all valid outcomes of a fair comparison, and a benchmark that can only report the first of those is not a benchmark. What this one contributes is the frozen protocol: exact compilation of both routes from one rule book, doubled certification, and per-run resource accounting covering qubits, routed depth, two-qubit gates, shots, optimiser evaluations and wall clock. Any future hardware claim on this workload now has a stated baseline to beat and a stated cost to beat it at."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Prior art, and the gap"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The prior art is real and credited. Giron, Korpas, Parvaiz, Malik and Aspman formulated collateral optimisation as MILP and QUBO for NISQ and quantum-inspired computing in IEEE Transactions on Quantum Engineering in 2023. Jin and Florescu published a higher-order QAOA framework for CSA and margin-aware collateral in 2026, with a deterministic CP-SAT solver certifying candidate actions before recommendation, and the idea of a classical arbiter over quantum candidates is theirs. What is new in Qollateral, to the best of our knowledge, is the combination: the rule book as ontology data with per-rule declared encodability, one source compiled to both solver routes, an independent SHACL certification path over reified allocation assertions, and a fully open seeded benchmark whose every headline is computed two ways. Corrections to that claim are welcome as repository issues."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Where the method transfers"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Any hybrid optimisation pipeline whose constraints originate in a governed document faces the same double-encoding failure mode. Network capacity rules, rostering agreements and grid dispatch limits all have the same shape, and the same medicine applies: make the rule book machine readable, declare encodability rule by rule, compile every route from the one source, and certify results through a path that consulted none of the compilers. The ontology, the shapes, the compilers and the battery are in the repository under open licences, and the entire result set regenerates from seeds with two commands."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Scope and method"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Version 0.1 runs on a simulator with noiseless parameter optimisation, and every figure above is a simulator figure. Instances are synthetic and sized for exhaustive ground truth, which is the design decision that turns route agreement from an assertion into a tested property: with every assignment enumerable, the claim that the QUBO ground state is the constrained optimum is checked rather than argued. The cost model is a cheapest-to-deliver proxy built from liquidity band, currency mismatch and issuer spread. The roadmap from here is hardware execution of the smallest instances under the same doubled certification, constraint-preserving mixers and warm starts on the quantum side, auxiliary-variable encodings for concentration bounds above one, and an anonymised historical workload with a named data owner."}</p>

        <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"A bounded first engagement"}</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"For a treasury, clearing or collateral technology team, the bounded exercise is two weeks: formalise one eligibility schedule as a CERO rule book, compile it to your existing optimiser and to a QUBO, and run the agreement battery against your current allocations. The output is a machine-readable rule book you own, a defect list wherever the encodings disagree with practice, and a frozen benchmark protocol that any later quantum claim has to clear. Enquiries to fabio@thetesseractacademy.com."}</p>
      </section>
    </div>
  </div>
);
