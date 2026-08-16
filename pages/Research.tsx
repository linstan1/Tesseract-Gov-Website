import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudyItem } from '../components/CaseStudyItem';
import { ResearchTopicGroup } from '../components/ResearchTopicGroup';
import { CASE_STUDIES, CATEGORY_LABELS, RESEARCH_TOPICS } from '../data/caseStudies';

const PublicationGroup: React.FC<{ title: string; count: number; children: React.ReactNode }> = ({ title, count, children }) => (
  <ResearchTopicGroup title={title} count={count}>
    <ul className="space-y-8 pt-6">{children}</ul>
  </ResearchTopicGroup>
);

export const Research: React.FC = () => {
  const openDemos = CASE_STUDIES.filter(cs => cs.category === 'open-demo');

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <header className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Research-Backed Implementation</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We do not just "build". We validate. Our delivery models are rooted in rigorous academic and industrial research methods to ensure efficacy and reduce waste.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Our Approach</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          "Research-backed implementation" means that every technical decision is preceded by evidence gathering. We apply <span className="font-semibold text-gov-blue">mixed-methods research</span> (quantitative data analysis + qualitative user research) to define the problem space before writing a single line of code. This aligns perfectly with the GDS Discovery phase but adds a layer of academic rigour to the validation process.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gov-border/30 pb-4">
          <h2 className="text-3xl font-bold text-gov-dark">{CATEGORY_LABELS['open-demo']}</h2>
          <p className="text-sm text-gov-secondary mt-2 max-w-4xl">
            Our self-funded research programme: open standards, evidence bases and reference implementations built on public data, published in full for independent verification and reuse. Each project ships with a complete write-up covering challenge, intervention, assurance and reusable assets. Browse by topic below.
          </p>
        </div>
        <div className="space-y-4">
          {RESEARCH_TOPICS.map(topic => {
            const items = openDemos.filter(cs => cs.topic === topic);
            if (items.length === 0) return null;
            return (
              <ResearchTopicGroup key={topic} title={topic} count={items.length}>
                <div className="space-y-6 pt-6">
                  {items.map(cs => (
                    <CaseStudyItem key={cs.id} data={cs} />
                  ))}
                </div>
              </ResearchTopicGroup>
            );
          })}
        </div>
      </section>

      <section className="bg-gov-blue/5 border border-gov-blue/20 p-8 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gov-dark mb-1">Commissioned delivery case studies</h2>
          <p className="text-sm text-gov-secondary max-w-2xl">
            Contracts commissioned by government and government-funded programmes, each with a full write-up: challenge, intervention, assurance and reusable assets.
          </p>
        </div>
        <Link to="/use-cases" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors flex-shrink-0">
          See all delivery case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 p-6 sm:p-10 rounded-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gov-dark mb-2">Selected Publications &amp; Talks</h2>
          <p className="text-sm text-gov-secondary max-w-4xl">Grouped by topic. Open a group to see the studies, papers and talks inside it.</p>
        </div>
        <div className="space-y-4">

        <PublicationGroup title="Safe & verifiable AI" count={11}>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/ontology-correctness-benchmark"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The Open-World Hole: Why SHACL Cannot Catch a Hallucinated Ontology Term</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open benchmark, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">SHACL, the default RDF validator, is open-world: it silently passes any ontology term it has no shape for, which is exactly the failure mode of an LLM authoring RDF. Measured on three real vocabularies (schema.org, IES4, and the OBO Foundry's PATO and RO), open-world SHACL validated as conformant every one of 300 data graphs carrying a fabricated term, across 418 fakes. A closed-world vocabulary gate caught all 300 with zero false positives on clean data. The correctness layer for AI-generated knowledge graphs, released reproducible.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/ontology-correctness-benchmark" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">open-ontologies engine<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/copula-coupled-uncertainty-certificates"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Marginal Coverage Is Not Joint Coverage: Copula-Coupled Uncertainty Certificates</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open case study, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Scientific models predict correlated vectors, and calibrating their uncertainty one output at a time gives a per-target guarantee that looks right and a joint guarantee that is quietly wrong. On 1,600 real OQMD materials, a "90%" independent conformal certificate delivers only 79% joint coverage; a coupled certificate restores 90% (22% tighter than Bonferroni) and a Gaussian-copula region matches it at less than half the size. Distribution-free, machine-checkable, reproducible.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/copula-coupled-uncertainty-certificates" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/certicoupla" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/verifiable-scientific-llm-benchmark"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Fluency Is Saturated, Correctness Is Not: An Un-Game-Able Scientific-LLM Benchmark</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open benchmark, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Most LLM benchmarks grade on fluency or an LLM judge, so a model that invents a nonexistent gene or ontology term scores as correct. verifiabench grades with a deterministic closed-world oracle instead. Across nine models, including Claude Opus, Sonnet, Haiku and local open checkpoints, raw fluency saturates at 1.00 while verified capability ranges from 0.00 to 1.00 on the same tasks: a local Qwen3-Coder-30B ties Claude Opus at perfect verified correctness, while some equally fluent models invent roughly half their terms. Un-game-able, reproducible against any endpoint.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/verifiable-scientific-llm-benchmark" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/verifiabench" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/proof-carrying-action-gatekeeper"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The Gate You Can Trust: A Proof-Carrying-Action Gatekeeper, Exhaustively Verified</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open reference implementation, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A safeguarded AI permits an action only if it carries a certificate a small trusted component can check. This is a working reference gatekeeper for a bounded multi-agent system, verified exhaustively rather than tested: over 96 reachable states and 1,176 transitions it blocks 672 of 672 unsafe actions and admits 504 of 504 safe ones, at 0.36 microseconds per check with a 31-line trusted core. Without the gate, 57% of actions violate the safety spec.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/proof-carrying-action-gatekeeper" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/tardygrada-gatekeeper" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/health-ai-privacy-fairness-assurance"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The Privacy Fix That Quietly Breaks Fairness: One Report Card for Health AI</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open case study, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Privacy and fairness are audited separately, but they interact. On the real UCI Diabetes readmission dataset, one report card runs membership inference and per-subgroup equity on the same clinical model across a differential-privacy sweep. At the tightest privacy, differential privacy costs minority subgroups 2.6x more accuracy than the majority (drops ordered by subgroup size), while the membership leakage it targets is near zero, almost all equity cost for almost no privacy gain, visible only when both planes sit on one card.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/health-ai-privacy-fairness-assurance" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/assure-health" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-dark mb-2">Proving the Utility of Large Language Models in Cybersecurity Simulations</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Collaboration with The Alan Turing Institute, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Research paper exploring how Large Language Models can bolster cybersecurity simulations by automating the creation of synthetic environments and identifying latent vulnerabilities. Co-authored with researchers from The Alan Turing Institute.</p>
             <a href="/papers/alan-turing-ontology-paper.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the paper (PDF)<span className="sr-only"> (opens in new tab)</span></a>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/neurosymbolic-space-kg"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Silence Is Not Assent: What Catches a Wrong AI Classification in Orbit</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open knowledge graph and measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A public 833,403-triple knowledge graph of all 70,122 catalogued space objects, aligned to the Space Situational Awareness Ontology. The ontology declares exactly one exclusion axiom, between two coordinate formats, so 351 of its 353 classes can never reject a wrong AI classification. The instance data can: LogMap 4.0 on this pair reports zero repair conflicts while the catalogue refutes nine of its candidates, catches a category error in its final output and rescues one it wrongly discarded. The threshold sweep also caught a circular measurement in our own earlier version, which is reported rather than buried. Includes the first openly published language model for a space ontology: hallucinated ontology terms fall from 13.81 to 0.06 per output.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/neurosymbolic-space-kg" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/neurosymbolic-space-kg" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
               <a href="https://huggingface.co/fabsssss/qwen3-coder-30b-a3b-space" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">model on Hugging Face<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/ontology-grounded-biomedical-kg"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Grounded, Not Retrieved: An Ontology-Validated Biomedical Knowledge Graph</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open case study, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A gene-disease knowledge graph built from 40 real Open Targets associations, every edge typed with the Biolink Model and checked by a closed-world vocabulary gate before it enters the graph. The grounded graph has zero SHACL and zero vocabulary violations across 284 triples; an ungrounded twin with one fabricated Biolink predicate passes SHACL but is caught by the gate. Ships with a provenance-carrying hypothesis triage and a one-click reproduction.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/ontology-grounded-biomedical-kg" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/bio-kg-triage" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/construction-standards-crosswalks"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Construction Data Standards Cannot Check Your AI: IFC, COBie, Uniclass and BOT Measured</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open crosswalks and measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">AI tools now assign Uniclass codes and fill COBie workbooks automatically, and the target standards assert zero disjointness: measured falsifiability 0.00%, so no wrong mapping into them can ever be machine-rejected. Open, argued crosswalks across IFC4, COBie, Uniclass 2015 and the W3C Building Topology Ontology: 49 correspondences, 7 recorded refusals including the bot:Zone false friend and the framed-structures part-whole trap, all 96 identifiers verified against pinned sources, every Uniclass code confirmed against the live NBS service. BOT reaches 80.95% checkability from 9 axioms; IFC4 reaches 11.45% from 2,443.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/construction-standards-crosswalks" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/construction-standards-crosswalks" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">crosswalks on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://huggingface.co/datasets/fabsssss/semantic-web-counterfactual-census" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Is the Semantic Web Counterfactual-Ready? A Tractability Census of Public Ontologies<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open dataset and preprint (forthcoming), 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">The first tractability map of the public semantic web. A compiler certifies whether each of 528 public ontologies can, as written, support a counterfactual ("what if") query. The finding: 56% declare no constraints and are counterfactual-blind, including both of the UK's 4D data standards, IES4 and HQDM, alongside schema.org, CIDOC-CRM, SAREF and GS1. On the 233 that can, a certified counterfactual is computed for each (median 0.19 ms), confirming that the cost is governed by ontology structure, not by the degree-based hardness that would suggest infeasibility. Open, reproducible, and released with a "counterfactual-ready standards" proposal.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <a href="https://huggingface.co/datasets/fabsssss/semantic-web-counterfactual-census" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Census and atlas dataset<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://github.com/fabio-rovai/open-governance" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Open Governance: Open-Source AI Governance Server<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open-Source Tool, Ongoing</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">An open-source AI governance platform that helps organisations discover, assess, and monitor AI systems against EU AI Act, NIST AI RMF, and ISO 42001 frameworks. Provides automated risk classification, compliance matrices, bias and hallucination monitoring, policy enforcement gates, and audit-ready reporting through 48 governance tools.</p>
           </li>
        </PublicationGroup>

        <PublicationGroup title="Environment & climate" count={2}>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/parametric-payout-assurance"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Can a Parametric Climate Insurance Product Prove It Paid?</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open standard and measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">An open vocabulary and twelve machine-checkable rules that audit a parametric climate insurance promise at the three points where it fails: whether the promise is specifiable at all, whether a registered household is payable before a storm, and whether the payout arrived after one. The replay produces a documented false negative from public records. Severe Tropical Storm Nalgae came ashore at 110 km/h, eight short of the 118 km/h that defines a typhoon, and destroyed roughly 67,000 tonnes of mostly rice worth about PHP 1.3 billion. A trigger set at typhoon strength pays nothing for that. Every one of the twelve rules ships with a case built to trip it, and the build report lists what we could not obtain.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/parametric-payout-assurance" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/payout-assurance-standard" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/waste-reporting-loss"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Half the Detail Dies on the Way to the Return: What UK Waste Reporting Throws Away</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open crosswalks, measurement and reporting engine, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">AI analytics classify waste at the belt in over a hundred categories and the industry sells that granularity as regulatory reporting. Every UK channel that consumes composition data accepts between 7 and 47 values. Of 5.907 bits of composition detail, the List of Waste retains 53.8%, pEPR 52.1%, RAM 2027 49.5% and Simpler Recycling 38.4%. The crosswalk cannot be a function in either direction: it collapses up to 23 classes onto one value, 7 classes fix no regulatory value at all, and the packaging schemes cannot represent 19 to 22 of them. Of ten operational questions, two are answerable in every channel and four in none, including the aluminium against steel split that sets the pEPR fee and for which the List of Waste offers a single code. Ships a reporting engine that emits returns as intervals rather than point estimates, and a release gate that caught a language-tag defect hiding the most-used municipal code in the upstream ontology.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/waste-reporting-loss" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/waste-vocab-crosswalk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
        </PublicationGroup>

        <PublicationGroup title="Register assurance" count={1}>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/register-assurance"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Register Assurance: Why Every Public Register Fails at Its Boundary</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Research programme pillar, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Public registers increasingly assure their own records, and GLEIF is the standing proof that it can be done: 99.99 average data-quality score across 3.39 million LEI records. But assurance stops at the register boundary. Nothing checks conformance when one register embeds another&apos;s identifiers, nothing verifies that embedded identifiers still resolve, and nothing reconciles what two registers claim about the same entity. Measured across six domains with one open method, the boundary fails in the same four ways every time: embedded-scheme non-conformance, resolution failure, cross-register disagreement, and missing governance metadata. All 2,252 FDIC LEIs are truncated and invalid, 19.5 per cent of active EEA insurers carry no LEI, the largest index fund is missing from the open identifier map, the registers of retraction agree on 72.42 per cent, all 67,141 dereferenced US academic-standards identifiers return 404, and zero of 300 sampled GOV.UK documents carry any maintenance commitment. The pillar names the discipline, indexes the six open ontologies as one program, and announces the Register Integrity Index.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/register-assurance" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the pillar</Link>
               <a href="https://github.com/fabio-rovai/register-integrity-index" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">register-integrity-index on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
        </PublicationGroup>

        <PublicationGroup title="Economy, finance & skills" count={14}>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/semantic-asset-register"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">What 13 Million Triples Reveal About the Quality of US Federal Vocabularies</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open register, reproducible assessment, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Consultancies sell ontology assessment, and almost none has published an assessment of a single named real-world ontology. This register does it in public against 28 vocabularies from 10 US federal publishers, retrieved and hashed on 16 August 2026 and put through 26 checks. The estate holds up better than a gotcha audit would claim: every asset retrieved, HTTPS compliance was complete, and nothing was logically inconsistent. What makes the ten real failures actionable is that every check names the authority it derives from and declares whether failing it violates a specification or departs from a convention the publisher never agreed to. The Library of Congress MADS/RDF ontology does not parse, using rdf:resource on a node element 23 times where the RDF/XML grammar forbids it, and the Thesaurus for Graphic Materials types its 7,782 concepts against it. All 507 ISO 639-2 concepts violate SKOS integrity condition S14, because the vocabulary of language codes carries three preferred labels each and no language tag on any of them. The strain in the estate is governance rather than logic: 21 of 28 assets declare no licence, 20 name no publisher, 14 carry no version. Findings are W3C EARL assertions anchored to dated hashed snapshots, publishers have a documented right of reply, and two flaws in the register&apos;s own method were caught and discarded before publication.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/semantic-asset-register" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/semantic-asset-register" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/bank-register-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The FDIC Publishes 2,252 Legal Entity Identifiers. Not One of Them Is a Valid LEI.</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, full-register measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Every LEI value in the FDIC BankFind register is exactly 16 characters, truncated from the 20 that ISO 17442 requires, discarding both check digits, so no value can be validated and none matches the Global LEI System as published. Resolving all of them against the complete GLEIF golden copy of 3,403,760 records shows why arithmetic cannot repair it: 16 characters puts 6.37 per cent of the entire global LEI population into a collision, and nine FDIC values denote up to six unrelated companies each, across four countries. Two values, confirmed by GLEIF&apos;s own consolidation records, identify the wrong legal entity: Associated Bank carries the LEI of Associated Banc-Corp, its parent holding company, while the bank&apos;s own active LEI appears nowhere in the register. The Federal Reserve&apos;s MDRM dictionary shows the mirror-image defect in the concept fabric: item names and definitions are pure functions of the item code across forms with different consolidation bases, and 27,445 of 47,305 item codes carry no definition at all. An open OWL 2 ontology, SKOS registries and SHACL governance layer, 1,123,634 triples, every headline computed twice, reproducible from public data.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/bank-register-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/bank-register-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/enterprise-knowledge-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Your Search Index and Your AI Pipeline Are Reading Different Corpora</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, corpus measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Every organisation is wiring its documents into an AI assistant and almost none can say whether the knowledge is any good, because the field answers that question with adjectives. We built an open OWL ontology defining authority as a property of a maintenance commitment rather than of content, ten SKOS schemes, a SHACL publish gate that exits non-zero in CI, and the Corpus Readiness Index, then ran the instrument against 54,222 GOV.UK guidance documents. Across 300 randomly sampled documents and 133 distinct schema keys, not one field expresses a review date, an owner, a maintainer or a verification date. GOV.UK search correctly returns zero withdrawn documents, while its public sitemap advertises roughly 55,000 of them still serving body text at a median 5.87 years since withdrawal, so any pipeline that crawls rather than consuming the curated index ingests exactly what that index was careful to exclude. 4,810 documents are owned only by organisations that no longer exist, including a 1955 treaty attributed to a department merged away in 2020. 63.5 per cent are unchanged in over two years and 13,595 are still tagged to the 2010 to 2015 coalition government, more than are tagged to the current one. 29.7 per cent carry under 500 characters of indexable text because the answer sits inside an attachment. Reproducible from public data, with a build report listing four defects we found in our own code.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/enterprise-knowledge-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/enterprise-knowledge-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/scholarly-record-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Science Has No Shepard&apos;s: Measuring How Far the Registers of Retraction Disagree</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, four-register measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Legal research has known since 1873 whether an authority still stands, because Frank Shepard began printing citation labels marking which decisions had been overruled. Science has registers of retraction instead, and they do not agree. We built an open OWL ontology, SKOS status vocabulary and three-layer SHACL suite for the integrity status of scholarly works, then measured it against four public registers. Crossref and Retraction Watch, both published by Crossref since it acquired the database in September 2023, agree on only 72.42 per cent of the retracted DOIs between them. OpenAlex flags 94.5 per cent of retraction notices as retracted research, a category error confirmed independently at 95.95 per cent against Europe PMC&apos;s MEDLINE publication types, while Crossref does this for 0.91 per cent of the same notices and Europe PMC for 0.32 per cent, which shows the distinction is achievable rather than hard. The central metadata field is declared a closed 12-value enumeration on a required attribute, yet the live index holds 34 values, 22 of them invalid, including two different misspellings of retraction, a bare integer and a test string reading this_is_some_update_23. Only 19.24 per cent of a 137,243 DOI union is agreed by all four registers. 43,683 citations to the most-cited retracted works post-date their retraction, including 1,171 to the Wakefield paper retracted in 2010 for falsification, none carrying any machine-readable warning. 3.19 million triples, reproducible from public data.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/scholarly-record-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/scholarly-record-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/media-attention-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The Content Registry Television Measurement Runs On Covers 1.84 Per Cent of Television</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, full-corpus identifier measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">EIDR is the audiovisual industry&apos;s own content registry, and it models properly the distinction measurement depends on: a title is not a cut, and a cut is not an encoding, because nobody watches an abstraction and duration is what completion and frequency are computed from. In the open graph it reaches 53.44 per cent of films and 1.84 per cent of television series. We harvested 224,710 EIDR identifier assertions across 224,182 works and resolved 1,179 of them against EIDR&apos;s public registry to learn what each actually denotes. Of the 522 works carrying more than one EIDR identifier, 285 hold identifiers at more than one level of the abstraction hierarchy at once, pairing a title-level record with a specific cut as though they were interchangeable, and a further 133 identifiers are each claimed by two distinct works. There is a trap for implementers underneath all of it: EIDR runs ISO 7064 MOD 37,36 but maps the supplementary value to the digit 0 where the standard convention is an asterisk, so a validator built from the standard alone rejects 6,252 perfectly valid identifiers, one in thirty-six, as corrupt, while across all 224,577 distinct identifiers exactly zero genuinely fail their arithmetic. IMDb mints no season-level identifier at all and covers 0.78 per cent of seasons. The IAB Tech Lab taxonomies, the advertising industry&apos;s shared vocabularies for content, audience and ad product, contain no RDF, SKOS or OWL of any kind, and are published here as SKOS for the first time, 2,845 concepts, with the 10 structural defects found in the source reported rather than repaired. schema.org carries 2,987 labelled terms and not one expresses viewership, impressions, exposure or reach. 2,702,154 triples, findings computed twice and agreeing exactly, reproducible from public data.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/media-attention-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/media-attention-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/learning-standards-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Every Identifier Underneath American Academic Standards Is Dead, and the Redirect Still Works</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, three-population census, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">The Achievement Standards Network minted the persistent identifiers that United States K-12 academic standards were published under, and that the LRMI educationalAlignment pattern was designed around, so they sit inside learning-resource metadata across the open education web. We dereferenced 67,141 of them across three populations, two of which are complete censuses rather than samples. Every single one returns HTTP 404. The vocabulary that describes them still returns 200, served from a static object store, so a system checking whether the scheme is alive gets a reassuring and false answer. The dependency reaches the standards bodies: 1EdTech, publisher of the successor specification CASE, ships a QTI v3 example package whose curriculum references are dead ASN URIs, and so do DCMI&apos;s own worked LRMI examples. Alongside the census we measured what the surviving artefacts can reject. The CEDS Ontology v14 from the US Department of Education declares zero owl:ObjectProperty and zero rdfs:domain across its 2,336 properties, types 965 terms as both an owl:Class and a skos:ConceptScheme, and publishes 19,546 concepts with no broader relations at all; given six specific mis-statements it detects none, five of them being inexpressible in it, while the abandoned 465-triple ASN schema detects one. The corpus fails in both directions at once: 433 identifiers name materially different standards, one attaching four statements about controlled investigations and one about cellular respiration to the same name, while the single most replicated statement text carries 718 distinct identifiers. In the live Georgia CASE package, 2,453 of 2,483 associations are document structure and cross-framework associations number zero. 1,931,913 standard statements across 771 jurisdictions, 21,404,069 triples, reproducible from public data.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/learning-standards-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/learning-standards-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/insurance-register-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">An Open Ontology for Insurance and Reinsurance, Tested Against Every Insurer in Europe</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, full-register measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">There was no open, usable ontology for insurance and reinsurance entity data, so we built one and proved it on the hardest available evidence. An open OWL 2 ontology, two SKOS registries and a three-layer SHACL governance suite, run against the complete EIOPA Register of Insurance Undertakings (33,924 rows), joined to a same-day GLEIF harvest of all 3,630 identifiers it files, then cross-checked against BaFin&apos;s German register. 643 of 3,304 active insurers and reinsurers carry no LEI at all. Four filed values are arithmetically impossible, including a letter O where the real identifier carries a zero, which quietly disconnects a Danish insurer from the global system. 118 identifiers have lapsed, 42 name entities GLEIF says no longer exist, 283 cross-border passports outlive the authorisation they depend on, and one identifier is filed for both SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland, two distinct reinsurance legal entities. The German cross-register test recovers 14 valid identifiers that the national regulator publishes and the European register does not, while confirming that where both populate the field they agree on all 344 matched undertakings: a coverage problem, not a contradiction problem. Reproducible from public data with five commands, no licensed sources.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/insurance-register-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/insurance-register-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/investment-fund-ontology"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">The Largest Index Fund Is Missing From the Open Identifier Map: the US Fund Register as a Governance Graph</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open ontology, full-universe measurement, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Fund data is an identifier problem before it is anything else. An open OWL 2 ontology, twenty-scheme SKOS identifier registry and SHACL governance layer, built and run against the whole public US fund universe: 2,316 registrants, 14,841 funds and 43,344 share classes joined to four quarters of Form N-CEN and all 9,119,948 GLEIF ISIN-LEI pairs, every one check-digit validated with zero failures. SEC filings are not as clean: 19 of 14,960 self-reported LEIs (0.13%) fail the same check digit. Only 12.3% of self-reported ETF fund LEIs (497 of 4,053) carry any ISIN in the open mapping, including the Vanguard 500 Index Fund, which has a valid ISIN in commercial data that GLEIF's open file does not carry, and 96.8% of register quotations (29,258 of 30,238) carry no venue field, mostly because the field is ETF-only in the source schema. Class-level ISIN resolution is enclosed behind licensed CUSIP data: 259 of 19,803 funds (1.3%) resolve from public data alone.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/investment-fund-ontology" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/investment-fund-ontology" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/research/financial-answer-verification"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Provenance Beats Plausibility: Catching Wrong Financial Answers Without a Gold Key</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open measurement and benchmark audit, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">The failure that matters when a model reads a filing is a confidently wrong number wearing plausible provenance. FinanceBench ships 2,400 model answers carrying human correctness labels, an unused supervision set for verification. A deterministic check that never sees the gold answer recovers 57.4% of labelled errors and lifts served accuracy from 68.8% to 78.0% at 60.5% coverage, with positive recall in all sixteen configurations. Two negative results matter more: the same check against the whole filing recovers 3.6%, because a filing carries a median of 1,270 numbers against 69 on the cited page, and excusing answers reconstructible by arithmetic excuses 98.6% of them while the excused are more often wrong than the rest. The audit also finds evidence page numbers are 0-indexed and that the two shipped gold files disagree on 15 of 51 numeric cases, every one by exactly 100x.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/financial-answer-verification" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/financebench-verification" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://thedatascientist.com/fca-stablecoins-and-the-future-of-uk-crypto-regulation/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">FCA Consultation: Stablecoins and UK Crypto Regulation<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Financial Conduct Authority Regulatory Consultation, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Contributed expert analysis to the FCA's consultation on stablecoin regulation and the future of crypto asset oversight in the UK. Provided evidence-based commentary on regulatory frameworks, consumer protection mechanisms, and systemic risk considerations for digital assets.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://jbba.scholasticahq.com/article/10237-is-blockchain-part-of-the-future-of-art" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Is Blockchain Part of the Future of Art?<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Journal of the British Blockchain Association (JBBA), Peer-Reviewed</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Peer-reviewed research exploring the intersection of distributed ledger technology and the creative industries. Examined provenance tracking, digital ownership, and the implications of blockchain for cultural asset management and intellectual property governance.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Welsh Government Land Valuation Research Report<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Commissioned by Welsh Government, 2025–2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Independent research into the feasibility of land value tax models for Wales. Combined statistical analysis of land registry data with international comparator evidence and stakeholder interviews across Welsh local authorities. Findings presented to Welsh Government officials and cited in Senedd committee proceedings.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <a href="/papers/testing-land-valuation-methods-tesseract-academy-report.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the full report (PDF)<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://github.com/fabio-rovai/open-ontologies/blob/main/case-studies/skills-mobility/case-study.md" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">What Adult Skills Reveal About Social Mobility That Qualifications Hide<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open research, OECD Survey of Adult Skills (PIAAC) public-use data, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A reproducible analysis of educational and skills mobility in England using open OECD PIAAC data. Among adults with the same qualification, those from a higher-educated background score about 37 points higher in numeracy, so qualifications understate the advantage of social origin. The data harmonisation is published as an open, machine-readable scheme.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <a href="https://github.com/fabio-rovai/open-ontologies/blob/main/case-studies/skills-mobility/case-study.md" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the case study<span className="sr-only"> (opens in new tab)</span></a>
               <span className="text-gov-border">|</span>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/skills-mobility" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Reproducible code and data scheme<span className="sr-only"> (opens in new tab)</span></a>
               <span className="text-gov-border">|</span>
               <Link to="/research/skills-england-occupational-maps" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Explore the Skills England occupational maps ontology</Link>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://www.gov.uk/government/publications/ai-skills-for-the-uk-workforce/annex-a-methodology" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">AI Skills for the UK Workforce - Skills England<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Skills England / UK Government Publication, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Tesseract Academy is cited as an AI training provider and consultancy in Skills England's official research into AI skills for the UK workforce. The publication's methodology included stakeholder workshops with 43 organisations, with Tesseract Academy contributing alongside institutions including The Alan Turing Institute and the Surrey AI Centre.</p>
           </li>
        </PublicationGroup>

        <PublicationGroup title="Talks & community" count={3}>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-dark mb-2">UK Government Business Academy - AI Webinar Series</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Department for Business and Trade, Business Academy, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Delivered a series of three official UK Government Business Academy webinars on AI adoption for growing businesses, led by Dr Stylianos Kampakis. Topics covered: designing AI roadmaps, choosing the right AI tools using the OCT (Objectives-Capabilities-Tools) methodology, and building internal AI capability including skills-gap analysis and organisational models for long-term success.</p>
             <div className="mt-3 flex flex-wrap gap-3">
               <a href="https://www.business.gov.uk/business-academy/events/designing-your-ai-roadmap-a-step-by-step-guide-for-growing-businesses-27-october-2025/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">AI Roadmap<span className="sr-only"> (opens in new tab)</span></a>
               <span className="text-gov-border">|</span>
               <a href="https://www.business.gov.uk/business-academy/events/choosing-the-right-ai-tools-matching-technology-to-business-objectives-06-november-2025/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Choosing AI Tools<span className="sr-only"> (opens in new tab)</span></a>
               <span className="text-gov-border">|</span>
               <a href="https://www.business.gov.uk/business-academy/events/building-internal-ai-capability-skills-teams-culture-for-long-term-success-12-november-2025/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Building AI Capability<span className="sr-only"> (opens in new tab)</span></a>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <Link to="/insights"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">London Data Week 2026: AI Tools for Everyone, Advancing Disability Inclusion</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">London Data Week, Shaw Library, LSE, 8 July 2026</p>
             <figure className="mb-4">
               <img src="/events/ldw2026-lse-panel.jpg" alt="The speaker panel at Tesseract Academy's AI Tools for Everyone: Advancing Disability Inclusion event in the Shaw Library, LSE, with King's Institute for Artificial Intelligence, London Data Week and LSE Data Science Institute banners" width="2048" height="1152" loading="lazy" decoding="async" className="w-full rounded-xl shadow-sm" />
             </figure>
             <p className="text-base text-gov-dark/90 leading-relaxed">Hosted at the London School of Economics on Wednesday 8 July 2026, Tesseract Academy convened a public session bringing together speakers from technology, disability, research and policy to explore how AI can advance accessibility and support for people with diverse disabilities. Held in the Shaw Library, LSE, and hosted by the LSE Data Science Institute with the King's Institute for Artificial Intelligence, with speakers from Vision Ability CIC, Imperial College London, King's College London and UCL.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://londondataweek.org/ldw25-events/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">London Data Week 2025: AI Tools for the Visually Impaired<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">London Data Week, co-organised with Vision Ability CIC, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Co-organised a public workshop and demonstration on making AI tools accessible to people with visual impairments. Delivered at Chabad Islington Community Centre as part of London Data Week 2025, in partnership with Vision Ability CIC.</p>
           </li>
        </PublicationGroup>

        </div>
      </section>

      <aside className="pt-4">
        <p className="text-sm text-gov-secondary">
          See also: <Link to="/use-cases" className="text-gov-blue hover:underline">Use cases</Link> · <Link to="/insights" className="text-gov-blue hover:underline">Insights</Link> · <Link to="/services/research-policy" className="text-gov-blue hover:underline">Research &amp; policy advisory</Link>
        </p>
      </aside>
    </div>
  );
};
