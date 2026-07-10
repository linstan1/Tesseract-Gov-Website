import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const HowToBuy = lazy(() => import('./pages/HowToBuy').then(m => ({ default: m.HowToBuy })));
const Capabilities = lazy(() => import('./pages/Capabilities').then(m => ({ default: m.Capabilities })));
const UseCases = lazy(() => import('./pages/UseCases').then(m => ({ default: m.UseCases })));
const Research = lazy(() => import('./pages/Research').then(m => ({ default: m.Research })));
const Partnerships = lazy(() => import('./pages/Partnerships').then(m => ({ default: m.Partnerships })));
const Compliance = lazy(() => import('./pages/Compliance').then(m => ({ default: m.Compliance })));
const Feedback = lazy(() => import('./pages/Feedback').then(m => ({ default: m.Feedback })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const WelshGovernment = lazy(() => import('./pages/research/WelshGovernment').then(m => ({ default: m.WelshGovernment })));
const NationalDigitalTwin = lazy(() => import('./pages/research/NationalDigitalTwin').then(m => ({ default: m.NationalDigitalTwin })));
const BridgeAI = lazy(() => import('./pages/research/BridgeAI').then(m => ({ default: m.BridgeAI })));
const Kalgera = lazy(() => import('./pages/research/Kalgera').then(m => ({ default: m.Kalgera })));
const WastewaterDataQuality = lazy(() => import('./pages/research/WastewaterDataQuality').then(m => ({ default: m.WastewaterDataQuality })));
const AerialPhotographyHeritage = lazy(() => import('./pages/research/AerialPhotographyHeritage').then(m => ({ default: m.AerialPhotographyHeritage })));
const ZeroEmissionAviation = lazy(() => import('./pages/research/ZeroEmissionAviation').then(m => ({ default: m.ZeroEmissionAviation })));
const WrapFoodWaste = lazy(() => import('./pages/research/WrapFoodWaste').then(m => ({ default: m.WrapFoodWaste })));
const AesHeritage = lazy(() => import('./pages/research/AesHeritage').then(m => ({ default: m.AesHeritage })));
const ConnectiveProductCyberIncidents = lazy(() => import('./pages/research/ConnectiveProductCyberIncidents').then(m => ({ default: m.ConnectiveProductCyberIncidents })));
const FairScientificData = lazy(() => import('./pages/research/FairScientificData').then(m => ({ default: m.FairScientificData })));
const IesHqdmCrosswalk = lazy(() => import('./pages/research/IesHqdmCrosswalk').then(m => ({ default: m.IesHqdmCrosswalk })));
const Ies4TurtleLanguageModel = lazy(() => import('./pages/research/Ies4TurtleLanguageModel').then(m => ({ default: m.Ies4TurtleLanguageModel })));
const BiologyOntologyLanguageModel = lazy(() => import('./pages/research/BiologyOntologyLanguageModel').then(m => ({ default: m.BiologyOntologyLanguageModel })));
const PyramidBridge = lazy(() => import('./pages/research/PyramidBridge').then(m => ({ default: m.PyramidBridge })));
const NatureSecurityRisk = lazy(() => import('./pages/research/NatureSecurityRisk').then(m => ({ default: m.NatureSecurityRisk })));
const SkillsEnglandOccupationalMaps = lazy(() => import('./pages/research/SkillsEnglandOccupationalMaps').then(m => ({ default: m.SkillsEnglandOccupationalMaps })));
const VictimWitnessEvaluation = lazy(() => import('./pages/research/VictimWitnessEvaluation').then(m => ({ default: m.VictimWitnessEvaluation })));
const SmallAreaHealth = lazy(() => import('./pages/research/SmallAreaHealth').then(m => ({ default: m.SmallAreaHealth })));
const AlgorithmicTransparencyCorpus = lazy(() => import('./pages/research/AlgorithmicTransparencyCorpus').then(m => ({ default: m.AlgorithmicTransparencyCorpus })));
const LocalLabourMarket = lazy(() => import('./pages/research/LocalLabourMarket').then(m => ({ default: m.LocalLabourMarket })));
const FcaWarningsObservatory = lazy(() => import('./pages/research/FcaWarningsObservatory').then(m => ({ default: m.FcaWarningsObservatory })));
const ConsultationCorpus = lazy(() => import('./pages/research/ConsultationCorpus').then(m => ({ default: m.ConsultationCorpus })));
const EvaluationAtlas = lazy(() => import('./pages/research/EvaluationAtlas').then(m => ({ default: m.EvaluationAtlas })));
const SkillsEnglandEscoCrosswalk = lazy(() => import('./pages/research/SkillsEnglandEscoCrosswalk').then(m => ({ default: m.SkillsEnglandEscoCrosswalk })));
const NatureGovernanceGraph = lazy(() => import('./pages/research/NatureGovernanceGraph').then(m => ({ default: m.NatureGovernanceGraph })));
const ModipPlasticsGraph = lazy(() => import('./pages/research/ModipPlasticsGraph').then(m => ({ default: m.ModipPlasticsGraph })));
const IxbrlDisclosureBenchmark = lazy(() => import('./pages/research/IxbrlDisclosureBenchmark').then(m => ({ default: m.IxbrlDisclosureBenchmark })));
const PropertyMarketIndicators = lazy(() => import('./pages/research/PropertyMarketIndicators').then(m => ({ default: m.PropertyMarketIndicators })));
const Glossary = lazy(() => import('./pages/Glossary').then(m => ({ default: m.Glossary })));
const AIConsulting = lazy(() => import('./pages/services/AIConsulting').then(m => ({ default: m.AIConsulting })));
const ResearchPolicy = lazy(() => import('./pages/services/ResearchPolicy').then(m => ({ default: m.ResearchPolicy })));
const PublicEngagement = lazy(() => import('./pages/services/PublicEngagement').then(m => ({ default: m.PublicEngagement })));
const SurveyDesign = lazy(() => import('./pages/services/SurveyDesign').then(m => ({ default: m.SurveyDesign })));
const EducationUpskilling = lazy(() => import('./pages/services/EducationUpskilling').then(m => ({ default: m.EducationUpskilling })));
const AIGovernance = lazy(() => import('./pages/services/AIGovernance').then(m => ({ default: m.AIGovernance })));
const Insights = lazy(() => import('./pages/Insights').then(m => ({ default: m.Insights })));

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Tesseract Academy for the Public Sector - Research, AI & Public Sector Delivery Partner',
    description: 'Tesseract Academy delivers research-backed AI, data science, public engagement, survey design, and policy advisory services for UK and EU public sector organisations. Crown Commercial Service appointed supplier.',
  },
  '/how-to-buy': {
    title: 'How to Buy - Procurement Routes | Tesseract Academy for the Public Sector',
    description: 'Commission Tesseract Academy through Crown Commercial Service frameworks (RM6200, RM6094, RM6126, RM6219) or direct award. SME supplier for AI, research, training, and digital services.',
  },
  '/capabilities': {
    title: 'Capabilities - AI, Research, Education & Survey Services | Tesseract Academy for the Public Sector',
    description: 'Policy-aligned advisory, rapid delivery, data and AI upskilling, and survey design services. Case studies include Welsh Government, BridgeAI, FCA, and US Navy executive training.',
  },
  '/use-cases': {
    title: 'Use Cases - Public Sector Project Evidence | Tesseract Academy for the Public Sector',
    description: 'Evidence of delivery across UK government contracts: Welsh Government land valuation, National Digital Twin Programme, BridgeAI creative industries AI, Kalgera financial vulnerability research.',
  },
  '/research': {
    title: 'Research & Publications | Tesseract Academy for the Public Sector',
    description: 'Tesseract Foundational Research programme, academic publications and open-source tools. Welsh Government land valuation report, Alan Turing Institute cybersecurity research, NDTP ontology tools.',
  },
  '/partnerships': {
    title: 'Consortium Partnerships - Innovate UK & Horizon Europe | Tesseract Academy for the Public Sector',
    description: 'Partner with Tesseract Academy on Innovate UK and Horizon Europe bids. Focus areas: trustworthy AI, digital twins, HealthTech, and sustainable technology.',
  },
  '/compliance': {
    title: 'Compliance & Policies | Tesseract Academy for the Public Sector',
    description: 'Cyber Essentials certified, ISO 27001 aligned. Download our data protection, information security, modern slavery, carbon reduction, and accessibility policies.',
  },
  '/testimonials': {
    title: 'Testimonials & Executive Training | Tesseract Academy for the Public Sector',
    description: 'Client reviews and executive AI training case studies. Workshops delivered for US Navy (40+ participants), Vodafone, and Philips leadership teams. Verified Clutch reviews.',
  },
  '/about': {
    title: 'About Us - Team, Credentials & Company Profile | Tesseract Academy for the Public Sector',
    description: 'Meet the Tesseract Academy team: Dr Stylianos Kampakis (PhD UCL, FRSS, CStat) and Fabio Rovai MSc. CCS frameworks RM6200, RM6094, RM6126, RM6219. Cyber Essentials certified. DV-cleared resource available.',
  },
  '/research/welsh-government-land-valuation': {
    title: 'Welsh Government Land Valuation Research | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy tested five land valuation methodologies across 1,916 Welsh LSOAs — 99% of Welsh geography — for Welsh Government. Published on GOV.WALES, March 2026. Informs local government finance policy.',
  },
  '/research/national-digital-twin-programme': {
    title: 'AI Ontology Extension Generator — National Digital Twin Programme | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy contributed to the open-source AI Ontology Extension Generator for the UK National Digital Twin Programme. Production-ready Streamlit app. Apache 2.0. Published on GitHub under National-Digital-Twin.',
  },
  '/research/bridgeai-creative-industries': {
    title: 'BridgeAI: AI Adoption for UK Creative Industries | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy delivered the BridgeAI Skills Hub launch and AI readiness sessions under Innovate UK contract GSS24646. 1,100 registrations vs 200 target. Satisfaction rating 4.6 out of 5.',
  },
  '/research/kalgera-financial-vulnerability': {
    title: 'Financial Vulnerability Research — Kalgera / Fintech Scotland | Tesseract Academy for the Public Sector',
    description: 'End-to-end qualitative research validating Kalgera\'s AI-driven financial vulnerability signals. A screening survey plus in-depth interviews mapped to 8 financial-vulnerability signals, under an ethical framework aligned with the Adult Support and Protection (Scotland) Act 2007.',
  },
  '/research/wastewater-effluent-data-quality': {
    title: 'Wastewater Effluent Data Quality | Tesseract Academy for the Public Sector',
    description: 'Open-data demonstration of statistical and rule-based quality assurance for continuous wastewater effluent monitoring: 1,382 days of full-scale works data, SHACL rules including the COD >= BOD physical invariant. Open source via Open Ontologies.',
  },
  '/research/computation-ready-aerial-heritage': {
    title: 'Computation-Ready Aerial Photography Heritage | Tesseract Academy for the Public Sector',
    description: 'From digitised to computable: an open standard for aerial photography heritage. 292 real NCAP frames harvested from the public catalogue, reprojected to WGS84 and validated at zero SHACL violations, with a published RiC-O to STAC crosswalk. Open source via Open Ontologies.',
  },
  '/research/zero-emission-flight-ecosystem': {
    title: 'Mapping the UK Zero-Emission Flight Ecosystem | Tesseract Academy for the Public Sector',
    description: 'An open, SHACL-validated knowledge graph of the UK hydrogen and electric aviation ecosystem: 42 real entities and 55 relationships across organisations, airports, programmes, projects, funders and technologies, validated at zero SHACL violations with enforced referential integrity. Open source via Open Ontologies.',
  },
  '/research/wrap-food-loss-waste-taxonomy': {
    title: 'WRAP Food Loss and Waste Data Taxonomy | Tesseract Academy for the Public Sector',
    description: 'Commissioned by WRAP (PRC228) to build a structured, machine-readable Food Loss and Waste data taxonomy: 5 coded dimensions and 84 entities in SKOS and JSON-LD, grounded in the FLW Standard, the WRAP Data Capture Sheet and Codex GSFA, supporting 400+ Courtauld Commitment 2030 organisations.',
  },
  '/research/fair-scientific-data': {
    title: 'FAIR Dataset Contracts for Scientific Data | Tesseract Academy for the Public Sector',
    description: 'An open study of 1,738 real public biomedical datasets across three repositories (EMBL-EBI BioStudies, Dryad, PRIDE): overwhelmingly findable and accessible, but 0% interoperable or AI-ready (100% lack a machine-readable schema, checksums and provenance). Paired with an open, tool-certified OWL ontology that models the AI-ready dataset layer. Open source and reproducible.',
  },
  '/research/ies-hqdm-defence-interoperability': {
    title: 'IES to HQDM: an open 4D ontology crosswalk for defence data | Tesseract Academy for the Public Sector',
    description: 'The first public crosswalk between the UK Information Exchange Standard (IES) and HQDM, two 4D upper ontologies. Open SSSOM and RDF correspondences, a curated divergences record, SHACL validation, and a worked SAPIENT-node safety case grounding autonomy in IES-typed world states. Supports the Defence Investment Plan interoperability and autonomy-assurance agenda.',
  },
  '/research/ies4-turtle-language-model': {
    title: 'An open language model for IES4 data | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for IES4, the UK 4D defence-data ontology. Against the untuned base model, IES term conformance rises from 0% to 88.6% and the hallucinated-term rate falls from 0.937 to 0.010, on correct-by-construction training data double-validated against the published dstl/IES4 ontology. Model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/biology-ontology-language-model': {
    title: 'An open, conformant language model for biomedical knowledge graphs | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for the Biolink Model and GO-CAM. Against the untuned base model, term conformance rises from 0% to 100% and the hallucinated-term rate falls from 0.42 to 0.00, holding at 89% on multi-association graphs never seen in training. Correct-by-construction data validated with the Biolink Model Toolkit and the GO-CAM schema; model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/pyramid-ies-hqdm-semantic-bridge': {
    title: 'Grounding a PYRAMID avionics bridge in IES and HQDM | Tesseract Academy for the Public Sector',
    description: 'PYRAMID (Def Stan 00-134) is an open avionics reference architecture with no shared data model; it pushes interoperability into inter-component bridges. A worked, open, SHACL-validated example grounds those bridges in the IES and HQDM 4D ontologies, so three PRA components (Geography, Tactical Objects, Data Fusion) that model the same object resolve to one referent. No prior work grounds PYRAMID in an upper ontology.',
  },
  '/research/agri-environment-heritage-value': {
    title: 'The Value of Agri-Environment Heritage Actions | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open-data demonstration of how we evidence the wider value of agri-environment scheme heritage actions for nature and for people: a scoping-review framework on Natural England\'s NEER001 method, with a real spatial analysis of the 2,206 Scheduled Monuments on the Historic England Heritage at Risk Register 2024.',
  },
  '/research/connective-product-cyber-incidents': {
    title: 'Cyber Incidents affecting Connective Products: an open evidence base | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base of cyber incidents affecting connective products (IoT, operational technology, computing devices, networking equipment and software/firmware): 16 documented incidents (2022 to 2025), a SKOS taxonomy and a source-quality rubric aligned to the six Government Data Quality Framework dimensions, published on GitHub under CC-BY-4.0.',
  },
  '/research/nature-related-security-risk': {
    title: 'Nature-Related Security Risk: an open evidence base and systems ontology | Tesseract Academy for the Public Sector',
    description: 'A self-initiated, open, machine-readable evidence base and systems ontology that operationalises the UK National Security Assessment on biodiversity loss and ecosystem collapse (2026): 14 documented nature-to-security cascades graded with the assessment\'s own confidence ratings, an OWL ontology (NSRO), a SKOS taxonomy cross-walked to IPBES and SHACL shapes, published on GitHub under CC-BY-4.0.',
  },
  '/research/skills-england-occupational-maps': {
    title: 'The Skills England Occupational Maps as an Ontology | Tesseract Academy for the Public Sector',
    description: 'An open, machine-readable ontology and explorer of the Skills England occupational maps by Tesseract Academy: 1,269 occupational standards placed in the route, pathway and cluster hierarchy, crosswalked to ONS SOC 2010/2020, linked to apprenticeship and technical education products, green-jobs themes and progression pathways. 51,355 triples, published as Turtle and JSON-LD, validated at zero SHACL violations. Open Government Licence v3.0.',
  },

  '/research/property-market-indicators': {
    title: "What a year of transactions says about every local housing market | Tesseract Academy for the Public Sector",
    description: "An open, reproducible set of residential property-market indicators for all 318 local authorities in England and Wales, derived from HM Land Registry Price Paid Data: median and quartile prices, transaction volume, new-build and leasehold share, and property-type mix, from 760,607 standard 2025 transactions. Built from open data under the Open Government Licence, published on GitHub and Hugging Face.",
  },

  '/research/ixbrl-disclosure-benchmark': {
    title: "How machine-readable are UK company accounts, really? | Tesseract Academy for the Public Sector",
    description: "An open benchmark parsing a full day of Companies House Inline XBRL accounts filings to measure what fraction expose each core accounting concept as a structured, machine-readable fact. 8,856 filings, 899 concepts; core balance-sheet concepts exposed in 73 to 97 percent of filings, the empirical premise behind claims that structured data beats PDF for AI-driven reporting. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/nature-governance-graph': {
    title: "The UK nature-governance landscape, as a graph you can cite | Tesseract Academy for the Public Sector",
    description: "An open, provenance-first reference graph of the UK nature and environment governance landscape: 47 statutory agencies, NGOs, data bodies, funders, sector bodies, partnerships and international conventions, and 48 sourced relationships. Every relationship reified with a cited source; SHACL enforces that no edge is unsourced. Zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/modip-plastics-knowledge-graph': {
    title: "From raw museum records to a knowledge graph | Tesseract Academy for the Public Sector",
    description: "A reproducible pipeline turning the Museum of Design in Plastics' raw open catalogue (11,865 objects, CC BY 4.0 via the Museum Data Service) into a standards-based knowledge graph: a SKOS materials taxonomy grounded in polymer science, a CIDOC-CRM instance graph, verified Getty AAT alignments and a variant graph recovered from description prose. 99.9% of 35,172 material tags resolved; zero SHACL violations. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/skills-england-esco-crosswalk': {
    title: "Where England's occupational standards meet Europe's skills vocabulary | Tesseract Academy for the Public Sector",
    description: "An open SKOS crosswalk from the 1,269 Skills England occupational standards to the EU ESCO occupation classification, with conservative, labelled confidence: 114 exact, 281 close, 270 related and 604 unmatched. The large unmatched tail quantifies where England's occupational language diverges from ESCO. Published in Open Ontologies under CC BY 4.0.",
  },

  '/research/evaluation-evidence-atlas': {
    title: "What government evaluates, and how openly it says so | Tesseract Academy for the Public Sector",
    description: "An open atlas of 1,770 UK government evaluation publications, harvested from the GOV.UK Search API and classified by evaluation type and declared method. Impact evaluations dominate, but only 11 percent declare a recognisable method in their metadata. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/consultation-corpus': {
    title: "Every government consultation that reached an outcome, as one corpus | Tesseract Academy for the Public Sector",
    description: "An open, structured corpus of 6,260 UK government consultations with a published outcome, harvested from the GOV.UK APIs and coded by policy area. 98 percent carry policy-area coding; only 77 percent attach response documents to their outcome. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/fca-warnings-observatory': {
    title: "A live list with no memory: reconstructing the FCA scam-warning signal | Tesseract Academy for the Public Sector",
    description: "The FCA warning list of unauthorised firms shows only the current set with no history. This open dataset reconstructs it as a monthly time series from 18,224 live warning pages: FCA warnings rose nearly four-fold from around 500 a year in 2019 to roughly 1,900 across 2022 to 2025, 18 percent flagging clone firms. Published on GitHub and Hugging Face.",
  },

  '/research/local-labour-market': {
    title: "The most timely local labour-market signal, tidied for every authority | Tesseract Academy for the Public Sector",
    description: "An open dataset of the latest monthly claimant count for all 374 local authorities in Great Britain, from the ONS via NOMIS. Claimant rate ranges from 1.1 to 10.1 percent against a 3.5 percent mean. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/algorithmic-transparency-corpus': {
    title: "The closest thing to a public register of government AI, as a corpus | Tesseract Academy for the Public Sector",
    description: "The full set of 136 published UK Algorithmic Transparency Recording Standard records, structured as an open corpus: which of 73 public bodies have disclosed which algorithmic and AI tools. Published on GitHub and Hugging Face under the Open Government Licence.",
  },

  '/research/small-area-health-profile': {
    title: "The baseline a local health survey should be read against | Tesseract Academy for the Public Sector",
    description: "An open small-area health profile for all 331 local authorities in England and Wales, combining Census 2021 self-reported general health, disability and unpaid care. Self-reported bad health ranges from 2.7 to 9.6 percent. Published on GitHub and Hugging Face under the Open Government Licence.",
  },
  '/research/victim-witness-evaluation': {
    title: 'When a Theory of Change has to hold up: machine-checkable evaluation logic | Tesseract Academy for the Public Sector',
    description: 'A reflection on where government evaluation is heading, the Evaluation Task Force, the Victims and Prisoners Act 2024, outcome-based commissioning, and a self-initiated open method that answers it: building a Theory of Change as a typed, evidence-graded, SHACL-validated graph so its weak links are named, not buried. Worked on victim and witness support, anchored on the Victims\' Funding Strategy outcomes; 7 pathways, zero SHACL violations, two genuine evidence gaps surfaced. Published on GitHub under CC-BY-4.0.',
  },
  '/glossary': {
    title: 'AI & Procurement Glossary | Tesseract Academy for the Public Sector',
    description: 'Definitions of 60+ AI, data science, and procurement terms used in UK public sector contracting. From Algorithmic Impact Assessment to Zero-Shot Learning.',
  },
  '/services/ai-consulting': {
    title: 'AI Consulting for UK Public Sector | Tesseract Academy for the Public Sector',
    description: 'Custom AI model development, NLP, machine learning pipelines, and predictive analytics for UK public sector. CCS RM6200 appointed supplier. Aligned with GDS Service Standard.',
  },
  '/services/research-policy': {
    title: 'Research & Policy Advisory | Tesseract Academy for the Public Sector',
    description: 'Evidence-based research design, systematic literature reviews, policy analysis, and regulatory consultation responses for UK government bodies. Published on GOV.WALES.',
  },
  '/services/public-engagement': {
    title: 'Public Engagement & Participatory Research | Tesseract Academy for the Public Sector',
    description: 'Deliberative workshops, citizen panels, inclusive co-design, and participatory research with diverse communities. Full ethical framework. CCS RM6126 appointed supplier.',
  },
  '/services/survey-design': {
    title: 'Survey Design & Delivery for Public Sector | Tesseract Academy for the Public Sector',
    description: 'End-to-end survey methodology, questionnaire design, mixed-mode data collection, and statistical analysis. Qualifications Wales 3-year contract (2026-2029). CCS RM6126.',
  },
  '/services/education-upskilling': {
    title: 'AI Education & Upskilling | Tesseract Academy for the Public Sector',
    description: 'AI literacy programmes, data science workshops, and executive leadership training for UK public sector. UK Government Business Academy partner. BridgeAI / Innovate UK programme delivery.',
  },
  '/services/ai-governance': {
    title: 'AI Ethics & Governance | Tesseract Academy for the Public Sector',
    description: 'EU AI Act, NIST AI RMF, ISO 42001 compliance. Bias auditing, algorithmic impact assessments. Open-source governance platform with 48 governance tools. Cyber Essentials certified.',
  },
  '/insights': {
    title: 'UK Public Sector AI Insights — Research Findings | Tesseract Academy for the Public Sector',
    description: 'Original research from Tesseract Academy: land valuation ML analysis across 1,916 Welsh LSOAs, BridgeAI 450% oversubscription, NDTP open-source ontology tooling. Evidence from UK government AI delivery 2022-2026.',
  },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://gov.tesseract.academy${pathname}`);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://gov.tesseract.academy${pathname}`);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-gov-blue focus:text-white focus:px-4 focus:py-2">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<div className="max-w-6xl mx-auto px-6 lg:px-8 py-20" aria-busy="true" aria-live="polite"><div className="h-8 w-48 bg-gov-bg rounded animate-pulse mb-6" /><div className="h-4 w-full max-w-2xl bg-gov-bg rounded animate-pulse mb-3" /><div className="h-4 w-full max-w-xl bg-gov-bg rounded animate-pulse" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/research" element={<Research />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/testimonials" element={<Feedback />} />
              <Route path="/about" element={<About />} />
              <Route path="/research/welsh-government-land-valuation" element={<WelshGovernment />} />
              <Route path="/research/national-digital-twin-programme" element={<NationalDigitalTwin />} />
              <Route path="/research/bridgeai-creative-industries" element={<BridgeAI />} />
              <Route path="/research/kalgera-financial-vulnerability" element={<Kalgera />} />
              <Route path="/research/wastewater-effluent-data-quality" element={<WastewaterDataQuality />} />
              <Route path="/research/computation-ready-aerial-heritage" element={<AerialPhotographyHeritage />} />
              <Route path="/research/zero-emission-flight-ecosystem" element={<ZeroEmissionAviation />} />
              <Route path="/research/wrap-food-loss-waste-taxonomy" element={<WrapFoodWaste />} />
              <Route path="/research/agri-environment-heritage-value" element={<AesHeritage />} />
              <Route path="/research/connective-product-cyber-incidents" element={<ConnectiveProductCyberIncidents />} />
              <Route path="/research/fair-scientific-data" element={<FairScientificData />} />
              <Route path="/research/ies-hqdm-defence-interoperability" element={<IesHqdmCrosswalk />} />
              <Route path="/research/ies4-turtle-language-model" element={<Ies4TurtleLanguageModel />} />
              <Route path="/research/biology-ontology-language-model" element={<BiologyOntologyLanguageModel />} />
              <Route path="/research/pyramid-ies-hqdm-semantic-bridge" element={<PyramidBridge />} />
              <Route path="/research/nature-related-security-risk" element={<NatureSecurityRisk />} />
              <Route path="/research/skills-england-occupational-maps" element={<SkillsEnglandOccupationalMaps />} />
              <Route path="/research/victim-witness-evaluation" element={<VictimWitnessEvaluation />} />
              <Route path="/research/small-area-health-profile" element={<SmallAreaHealth />} />
              <Route path="/research/algorithmic-transparency-corpus" element={<AlgorithmicTransparencyCorpus />} />
              <Route path="/research/local-labour-market" element={<LocalLabourMarket />} />
              <Route path="/research/fca-warnings-observatory" element={<FcaWarningsObservatory />} />
              <Route path="/research/consultation-corpus" element={<ConsultationCorpus />} />
              <Route path="/research/evaluation-evidence-atlas" element={<EvaluationAtlas />} />
              <Route path="/research/skills-england-esco-crosswalk" element={<SkillsEnglandEscoCrosswalk />} />
              <Route path="/research/nature-governance-graph" element={<NatureGovernanceGraph />} />
              <Route path="/research/modip-plastics-knowledge-graph" element={<ModipPlasticsGraph />} />
              <Route path="/research/ixbrl-disclosure-benchmark" element={<IxbrlDisclosureBenchmark />} />
              <Route path="/research/property-market-indicators" element={<PropertyMarketIndicators />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/services/ai-consulting" element={<AIConsulting />} />
              <Route path="/services/research-policy" element={<ResearchPolicy />} />
              <Route path="/services/public-engagement" element={<PublicEngagement />} />
              <Route path="/services/survey-design" element={<SurveyDesign />} />
              <Route path="/services/education-upskilling" element={<EducationUpskilling />} />
              <Route path="/services/ai-governance" element={<AIGovernance />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
