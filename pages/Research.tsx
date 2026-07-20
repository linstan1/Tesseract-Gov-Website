import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudyItem } from '../components/CaseStudyItem';
import { CASE_STUDIES, CATEGORY_LABELS } from '../data/caseStudies';

export const Research: React.FC = () => {
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
            Our self-funded research programme: open standards, evidence bases and reference implementations built on public data, published in full for independent verification and reuse. Each project ships with a complete write-up covering challenge, intervention, assurance and reusable assets.
          </p>
        </div>
        <div className="space-y-6">
          {CASE_STUDIES.filter(cs => cs.category === 'open-demo').map(cs => (
            <CaseStudyItem key={cs.id} data={cs} />
          ))}
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

      <section className="bg-gov-bg border border-gov-border/50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gov-dark mb-8">Selected Publications &amp; Talks</h2>
        <ul className="space-y-8">
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
             <Link to="/research/ontology-grounded-biomedical-kg"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Grounded, Not Retrieved: An Ontology-Validated Biomedical Knowledge Graph</h3></Link>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open case study, 2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">A gene-disease knowledge graph built from 40 real Open Targets associations, every edge typed with the Biolink Model and checked by a closed-world vocabulary gate before it enters the graph. The grounded graph has zero SHACL and zero vocabulary violations across 284 triples; an ungrounded twin with one fabricated Biolink predicate passes SHACL but is caught by the gate. Ships with a provenance-carrying hypothesis triage and a one-click reproduction.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <Link to="/research/ontology-grounded-biomedical-kg" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the study</Link>
               <a href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/bio-kg-triage" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Code and reproduction<span className="sr-only"> (opens in new tab)</span></a>
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
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-dark mb-2">Proving the Utility of Large Language Models in Cybersecurity Simulations</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Collaboration with The Alan Turing Institute, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Research paper exploring how Large Language Models can bolster cybersecurity simulations by automating the creation of synthetic environments and identifying latent vulnerabilities. Co-authored with researchers from The Alan Turing Institute.</p>
             <a href="/papers/alan-turing-ontology-paper.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the paper (PDF)<span className="sr-only"> (opens in new tab)</span></a>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://jbba.scholasticahq.com/article/10237-is-blockchain-part-of-the-future-of-art" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Is Blockchain Part of the Future of Art?<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Journal of the British Blockchain Association (JBBA), Peer-Reviewed</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Peer-reviewed research exploring the intersection of distributed ledger technology and the creative industries. Examined provenance tracking, digital ownership, and the implications of blockchain for cultural asset management and intellectual property governance.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://thedatascientist.com/fca-stablecoins-and-the-future-of-uk-crypto-regulation/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">FCA Consultation: Stablecoins and UK Crypto Regulation<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Financial Conduct Authority Regulatory Consultation, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Contributed expert analysis to the FCA's consultation on stablecoin regulation and the future of crypto asset oversight in the UK. Provided evidence-based commentary on regulatory frameworks, consumer protection mechanisms, and systemic risk considerations for digital assets.</p>
           </li>
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
             <a href="https://github.com/fabio-rovai/open-governance" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Open Governance: Open-Source AI Governance Server<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open-Source Tool, Ongoing</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">An open-source AI governance platform that helps organisations discover, assess, and monitor AI systems against EU AI Act, NIST AI RMF, and ISO 42001 frameworks. Provides automated risk classification, compliance matrices, bias and hallucination monitoring, policy enforcement gates, and audit-ready reporting through 48 governance tools.</p>
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
        </ul>
      </section>

      <aside className="pt-4">
        <p className="text-sm text-gov-secondary">
          See also: <Link to="/use-cases" className="text-gov-blue hover:underline">Use cases</Link> · <Link to="/insights" className="text-gov-blue hover:underline">Insights</Link> · <Link to="/services/research-policy" className="text-gov-blue hover:underline">Research &amp; policy advisory</Link>
        </p>
      </aside>
    </div>
  );
};
