import React from 'react';
import { Link } from 'react-router-dom';

export const Research: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Research-Backed Implementation</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We do not just "build". We validate. Our delivery models are rooted in rigorous academic and industrial research methods to ensure efficacy and reduce waste.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Our Approach</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          "Research-backed implementation" means that every technical decision is preceded by evidence gathering. We apply <span className="font-semibold text-gov-blue">mixed-methods research</span> (quantitative data analysis + qualitative user research) to define the problem space before writing a single line of code. This aligns perfectly with the GDS Discovery phase but adds a layer of academic rigour to the validation process.
        </p>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gov-dark mb-8">Selected Publications & Talks</h2>
        <ul className="space-y-8">
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://www.gov.wales/testing-land-valuation-methods" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Welsh Government Land Valuation Research Report<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Commissioned by Welsh Government, 2025–2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Independent research into the feasibility of land value tax models for Wales. Combined statistical analysis of land registry data with international comparator evidence and stakeholder interviews across Welsh local authorities. Findings presented to Welsh Government officials and cited in Senedd committee proceedings.</p>
             <div className="mt-3 flex flex-wrap gap-3 items-center">
               <a href="/papers/testing-land-valuation-methods-tesseract-academy-report.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the full report (PDF)<span className="sr-only"> (opens in new tab)</span></a>
               <span className="text-gov-border">|</span>
               <Link to="/case-studies/welsh-government-land-valuation" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Case study</Link>
             </div>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://www.gov.uk/government/publications/ai-skills-for-the-uk-workforce/annex-a-methodology" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">AI Skills for the UK Workforce - Skills England<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Skills England / UK Government Publication, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Tesseract Academy is cited as an AI training provider and consultancy in Skills England's official research into AI skills for the UK workforce. The publication's methodology included stakeholder workshops with 43 organisations, with Tesseract Academy contributing alongside institutions including The Alan Turing Institute and the Surrey AI Centre.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">AI Ontology Extension Generator: National Digital Twin Programme<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Collaboration with NDTP (Department for Business and Trade), 2024–2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Contributed to the development of an open-source AI-powered tool that automates ontology generation and extension for the National Digital Twin Programme. The tool combines data profiling, Named Entity Recognition, and large language models to extract and generate ontology entities from multiple data formats.</p>
             <Link to="/case-studies/national-digital-twin-programme" className="inline-block mt-3 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the case study</Link>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <h3 className="font-semibold text-lg text-gov-dark mb-2">Proving the Utility of Large Language Models in Cybersecurity Simulations</h3>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Collaboration with The Alan Turing Institute, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Research paper exploring how Large Language Models can bolster cybersecurity simulations by automating the creation of synthetic environments and identifying latent vulnerabilities. Co-authored with researchers from The Alan Turing Institute.</p>
             <a href="/papers/alan-turing-ontology-paper.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the paper (PDF)<span className="sr-only"> (opens in new tab)</span></a>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://tesseract.academy/tesseract-academy-partners-with-bridgeai-to-advance-ai-training-in-creative-industries/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">BridgeAI Skills Hub Launch & PwC Sector Workshop<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Innovate UK / BridgeAI Programme, 2025–2026</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Designed and delivered AI adoption workshops for underserved UK sectors as part of the Innovate UK-funded BridgeAI programme. Led the Skills Hub launch event at Ona Studios, London, and co-delivered sector-specific AI readiness sessions with PwC targeting construction, creative industries, and transport.</p>
             <Link to="/case-studies/bridgeai-creative-industries" className="inline-block mt-3 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Read the case study</Link>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://github.com/fabio-rovai/open-governance" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Open Governance: Open-Source AI Governance Server<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Open-Source Tool, Ongoing</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">An open-source AI governance platform that helps organisations discover, assess, and monitor AI systems against EU AI Act, NIST AI RMF, and ISO 42001 frameworks. Provides automated risk classification, compliance matrices, bias and hallucination monitoring, policy enforcement gates, and audit-ready reporting through 48 governance tools.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://londondataweek.org/ldw25-events/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">London Data Week 2025: AI Tools for the Visually Impaired<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">London Data Week, co-organised with Vision Ability CIC, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Co-organised a public workshop and demonstration on making AI tools accessible to people with visual impairments. Delivered at Chabad Islington Community Centre as part of London Data Week 2025, in partnership with Vision Ability CIC.</p>
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
             <a href="https://thedatascientist.com/fca-stablecoins-and-the-future-of-uk-crypto-regulation/" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">FCA Consultation: Stablecoins and UK Crypto Regulation<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Financial Conduct Authority Regulatory Consultation, 2025</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Contributed expert analysis to the FCA's consultation on stablecoin regulation and the future of crypto asset oversight in the UK. Provided evidence-based commentary on regulatory frameworks, consumer protection mechanisms, and systemic risk considerations for digital assets.</p>
           </li>
           <li className="pb-8 border-b border-gov-border/50 last:border-0 last:pb-0">
             <a href="https://jbba.scholasticahq.com/article/10237-is-blockchain-part-of-the-future-of-art" target="_blank" rel="noopener noreferrer"><h3 className="font-semibold text-lg text-gov-blue mb-2 hover:text-gov-blue-dark hover:underline transition-colors">Is Blockchain Part of the Future of Art?<span className="sr-only"> (opens in new tab)</span></h3></a>
             <p className="text-sm text-gov-secondary/80 mb-3 font-medium">Journal of the British Blockchain Association (JBBA), Peer-Reviewed</p>
             <p className="text-base text-gov-dark/90 leading-relaxed">Peer-reviewed research exploring the intersection of distributed ledger technology and the creative industries. Examined provenance tracking, digital ownership, and the implications of blockchain for cultural asset management and intellectual property governance.</p>
           </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">Detailed Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/case-studies/welsh-government-land-valuation" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">Welsh Government</p>
            <p className="text-sm font-semibold text-gov-dark">Land valuation methodologies — five approaches tested</p>
          </Link>
          <Link to="/case-studies/national-digital-twin-programme" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">National Digital Twin Programme</p>
            <p className="text-sm font-semibold text-gov-dark">AI Ontology Extension Generator — open source on GitHub</p>
          </Link>
          <Link to="/case-studies/bridgeai-creative-industries" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">BridgeAI / Innovate UK</p>
            <p className="text-sm font-semibold text-gov-dark">AI adoption for UK creative industries</p>
          </Link>
          <Link to="/case-studies/kalgera-financial-vulnerability" className="block p-5 bg-white border border-gov-border/50 rounded-lg hover:border-gov-blue transition-colors">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">Kalgera / Fintech Scotland</p>
            <p className="text-sm font-semibold text-gov-dark">Financial vulnerability qualitative research</p>
          </Link>
        </div>
        <p className="text-sm text-gov-secondary">
          See also: <Link to="/insights" className="text-gov-blue hover:underline">Insights</Link> · <Link to="/use-cases" className="text-gov-blue hover:underline">Use cases</Link> · <Link to="/services/research-policy" className="text-gov-blue hover:underline">Research &amp; policy advisory</Link>
        </p>
      </section>
    </div>
  );
};
