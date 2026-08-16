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
const IndustrialOntologyCrosswalks = lazy(() => import('./pages/research/IndustrialOntologyCrosswalks').then(m => ({ default: m.IndustrialOntologyCrosswalks })));
const ParametricPayoutAssurance = lazy(() => import('./pages/research/ParametricPayoutAssurance').then(m => ({ default: m.ParametricPayoutAssurance })));
const ConstructionStandardsCrosswalks = lazy(() => import('./pages/research/ConstructionStandardsCrosswalks').then(m => ({ default: m.ConstructionStandardsCrosswalks })));
const NeurosymbolicSpaceKg = lazy(() => import('./pages/research/NeurosymbolicSpaceKg').then(m => ({ default: m.NeurosymbolicSpaceKg })));
const WasteReportingLoss = lazy(() => import('./pages/research/WasteReportingLoss').then(m => ({ default: m.WasteReportingLoss })));
const FinancialAnswerVerification = lazy(() => import('./pages/research/FinancialAnswerVerification').then(m => ({ default: m.FinancialAnswerVerification })));
const InvestmentFundOntology = lazy(() => import('./pages/research/InvestmentFundOntology').then(m => ({ default: m.InvestmentFundOntology })));
const InsuranceRegisterOntology = lazy(() => import('./pages/research/InsuranceRegisterOntology').then(m => ({ default: m.InsuranceRegisterOntology })));
const LearningStandardsOntology = lazy(() => import('./pages/research/LearningStandardsOntology').then(m => ({ default: m.LearningStandardsOntology })));
const MediaAttentionOntology = lazy(() => import('./pages/research/MediaAttentionOntology').then(m => ({ default: m.MediaAttentionOntology })));
const ScholarlyRecordOntology = lazy(() => import('./pages/research/ScholarlyRecordOntology').then(m => ({ default: m.ScholarlyRecordOntology })));
const EnterpriseKnowledgeOntology = lazy(() => import('./pages/research/EnterpriseKnowledgeOntology').then(m => ({ default: m.EnterpriseKnowledgeOntology })));
const SpaceMetricsCrosswalk = lazy(() => import('./pages/research/SpaceMetricsCrosswalk').then(m => ({ default: m.SpaceMetricsCrosswalk })));
const Ies4TurtleLanguageModel = lazy(() => import('./pages/research/Ies4TurtleLanguageModel').then(m => ({ default: m.Ies4TurtleLanguageModel })));
const OntologyCorrectnessBench = lazy(() => import('./pages/research/OntologyCorrectnessBench').then(m => ({ default: m.OntologyCorrectnessBench })));
const ShaclShapesNotVocabulary = lazy(() => import('./pages/research/ShaclShapesNotVocabulary').then(m => ({ default: m.ShaclShapesNotVocabulary })));
const SymbolExistenceBox = lazy(() => import('./pages/research/SymbolExistenceBox').then(m => ({ default: m.SymbolExistenceBox })));
const FoundryGradeMachineOntologies = lazy(() => import('./pages/research/FoundryGradeMachineOntologies').then(m => ({ default: m.FoundryGradeMachineOntologies })));
const NeuroSymbolicVerificationDirection = lazy(() => import('./pages/research/NeuroSymbolicVerificationDirection').then(m => ({ default: m.NeuroSymbolicVerificationDirection })));
const CertifiedDenotation = lazy(() => import('./pages/research/CertifiedDenotation').then(m => ({ default: m.CertifiedDenotation })));
const BioKgTriage = lazy(() => import('./pages/research/BioKgTriage').then(m => ({ default: m.BioKgTriage })));
const CopulaCoupledUncertainty = lazy(() => import('./pages/research/CopulaCoupledUncertainty').then(m => ({ default: m.CopulaCoupledUncertainty })));
const VerifiaBench = lazy(() => import('./pages/research/VerifiaBench').then(m => ({ default: m.VerifiaBench })));
const ProofCarryingGatekeeper = lazy(() => import('./pages/research/ProofCarryingGatekeeper').then(m => ({ default: m.ProofCarryingGatekeeper })));
const AssureHealth = lazy(() => import('./pages/research/AssureHealth').then(m => ({ default: m.AssureHealth })));
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
const XbrlPdfHtmlAiBenchmark = lazy(() => import('./pages/research/XbrlPdfHtmlAiBenchmark').then(m => ({ default: m.XbrlPdfHtmlAiBenchmark })));
const PropertyMarketIndicators = lazy(() => import('./pages/research/PropertyMarketIndicators').then(m => ({ default: m.PropertyMarketIndicators })));
const Glossary = lazy(() => import('./pages/Glossary').then(m => ({ default: m.Glossary })));
const AIConsulting = lazy(() => import('./pages/services/AIConsulting').then(m => ({ default: m.AIConsulting })));
const ResearchPolicy = lazy(() => import('./pages/services/ResearchPolicy').then(m => ({ default: m.ResearchPolicy })));
const PublicEngagement = lazy(() => import('./pages/services/PublicEngagement').then(m => ({ default: m.PublicEngagement })));
const SurveyDesign = lazy(() => import('./pages/services/SurveyDesign').then(m => ({ default: m.SurveyDesign })));
const EducationUpskilling = lazy(() => import('./pages/services/EducationUpskilling').then(m => ({ default: m.EducationUpskilling })));
const AIGovernance = lazy(() => import('./pages/services/AIGovernance').then(m => ({ default: m.AIGovernance })));
const DigitalAnalytics = lazy(() => import('./pages/services/DigitalAnalytics').then(m => ({ default: m.DigitalAnalytics })));
const MuseumVisitsObservatory = lazy(() => import('./pages/research/MuseumVisitsObservatory').then(m => ({ default: m.MuseumVisitsObservatory })));
const Insights = lazy(() => import('./pages/Insights').then(m => ({ default: m.Insights })));
const FineTuningLlmGovernmentDataStandard = lazy(() => import('./pages/research/FineTuningLlmGovernmentDataStandard').then(m => ({ default: m.FineTuningLlmGovernmentDataStandard })));
const MachineValidatedOpenOntologies = lazy(() => import('./pages/research/MachineValidatedOpenOntologies').then(m => ({ default: m.MachineValidatedOpenOntologies })));
const BankRegisterOntology = lazy(() => import('./pages/research/BankRegisterOntology').then(m => ({ default: m.BankRegisterOntology })));
const SemanticAssetRegister = lazy(() => import('./pages/research/SemanticAssetRegister').then(m => ({ default: m.SemanticAssetRegister })));
const RegisterAssurance = lazy(() => import('./pages/research/RegisterAssurance').then(m => ({ default: m.RegisterAssurance })));

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
    description: 'Tesseract Academy has been commissioned by WRAP to develop a Food Loss and Waste data taxonomy for its Food Programme and global Food Pact Network. The engagement is in delivery; this page sets out the measurement problem the work addresses.',
  },
  '/research/fair-scientific-data': {
    title: 'FAIR Dataset Contracts for Scientific Data | Tesseract Academy for the Public Sector',
    description: 'An open study of 1,738 real public biomedical datasets across three repositories (EMBL-EBI BioStudies, Dryad, PRIDE): overwhelmingly findable and accessible, but 0% interoperable or AI-ready (100% lack a machine-readable schema, checksums and provenance). Paired with an open, tool-certified OWL ontology that models the AI-ready dataset layer. Open source and reproducible.',
  },
  '/research/ies-hqdm-defence-interoperability': {
    title: 'IES to HQDM: an open 4D ontology crosswalk for defence data | Tesseract Academy for the Public Sector',
    description: 'The first public crosswalk between the UK Information Exchange Standard (IES) and HQDM, two 4D upper ontologies. Open SSSOM and RDF correspondences, a curated divergences record, SHACL validation, and a worked SAPIENT-node safety case grounding autonomy in IES-typed world states. Supports the Defence Investment Plan interoperability and autonomy-assurance agenda.',
  },
  '/research/space-metrics-crosswalk': {
    title: 'Space debris metrics that cannot be added up: an open composition checker | Tesseract Academy for the Public Sector',
    description: 'The two premier orbital debris engineering models disagree by a factor of 2.3 to 3.0 at the 1 cm collision-risk threshold, and by almost two orders of magnitude in the sub-millimetre regime, because they partition the same physical population along orthogonal axes: MASTER-8 by generative source, ORDEM 3.1 by material density. Every indicator built on either model silently inherits that partition and never declares it. An open, MIT-licensed composition checker built on QUDT, SOSA/SSN and PROV-O that refuses invalid combinations with a reason and states what may be done instead.',
  },
  '/research/waste-reporting-loss': {
    title: 'Half the detail dies on the way to the return: what UK waste reporting throws away | Tesseract Academy for the Public Sector',
    description: 'AI waste analytics classify material at the belt in over a hundred categories; every UK channel that consumes composition data accepts between 7 and 47. Of 5.907 bits of composition detail, the List of Waste retains 53.8%, pEPR 52.1%, RAM 2027 49.5% and Simpler Recycling 38.4%. The crosswalk cannot be a function in either direction: collapse up to 23 classes per value, 7 classes that fix no regulatory value at all, and 19 to 22 classes the packaging schemes cannot represent. Of ten operational questions two are answerable in every channel and four in none, including the aluminium against steel split that sets the pEPR fee. Open SKOS vocabularies, SSSOM alignments, a SHACL release gate that caught a language-tag defect in the upstream List of Waste ontology, and a reporting engine that emits returns as intervals.',
  },
  '/research/investment-fund-ontology': {
    title: 'The largest index fund is missing from the open identifier map: the US fund register as a governance graph | Tesseract Academy for the Public Sector',
    description: 'An open OWL 2 ontology, SKOS identifier registry and SHACL governance layer built against the whole public US fund universe: 2,316 registrants, 14,841 funds, 43,344 share classes, joined to four quarters of Form N-CEN and all 9,119,948 GLEIF ISIN-LEI pairs, every pair check-digit validated with zero failures. SEC filings are not as clean: 19 of 14,960 self-reported LEIs (0.13%) fail the same check digit. Only 497 of 4,053 self-reported ETF fund LEIs (12.3%) carry any ISIN in GLEIF\'s open mapping, including the Vanguard 500 Index Fund, which holds a valid ISIN in commercial data that GLEIF\'s open file simply does not carry. 29,258 of 30,238 register quotations (96.8%) carry no venue field, mostly because the field is ETF-only in the source schema. Class-level ISIN resolution is enclosed behind licensed CUSIP data: 259 of 19,803 funds (1.3%) resolve from public data alone by unique pairing. The v0.2 open map, built from SEC N-PORT filings and OpenFIGI with no licensed feed, lifts exact-class resolution to 42.2% of 5,176 fund-ISIN rows and ETF open-ISIN coverage from 12.3% to 35.4%; one quarter of N-PORT attests 235,327 LEI-ISIN pairs of which 185,894 (79%) are absent from GLEIF\'s open file. Twenty identifier schemes across six markets, FIBO alignment with every target IRI verified live. Baseline figures as of the 14 August 2026 build.',
  },
  '/research/enterprise-knowledge-ontology': {
    title: 'Your search index and your AI pipeline are reading different corpora | Tesseract Academy for the Public Sector',
    description: 'An open OWL ontology, ten SKOS schemes, a SHACL publish gate and the Corpus Readiness Index, measured against 54,222 GOV.UK guidance documents. Across 300 randomly sampled documents and 133 distinct schema keys, zero carry any field expressing who maintains the content or when it was last verified. GOV.UK search returns zero withdrawn documents while its public sitemap advertises roughly 55,000 of them, still serving body text, median 5.87 years since withdrawal, so a retrieval pipeline that crawls ingests exactly what the curated index excludes. 4,810 documents are owned only by organisations that no longer exist. 63.5 per cent are unchanged in over two years and 13,595 are still tagged to the 2010 to 2015 coalition government. 29.7 per cent carry under 500 characters of indexable text because the answer is inside an attachment. Reproducible from public data.',
  },
  '/research/scholarly-record-ontology': {
    title: 'Science has no Shepard\u2019s: measuring how far the registers of retraction disagree | Tesseract Academy for the Public Sector',
    description: 'An open ontology and dataset for the integrity status of the scholarly record, measured across four public registers. Crossref and Retraction Watch, both published by Crossref since its 2023 acquisition, agree on only 72.42 per cent of retracted DOIs. OpenAlex flags 94.5 per cent of retraction notices as retracted research, confirmed independently at 95.95 per cent against Europe PMC, while Crossref does so for 0.91 per cent and Europe PMC for 0.32 per cent. Crossref update-type is a closed 12-value enumeration yet the live index holds 34 values, 22 invalid, including two misspellings of retraction and a bare integer. Only 19.24 per cent of a 137,243 DOI union is agreed by all four registers and 43.09 per cent rests on one. 43,683 citations to the most-cited retracted works post-date their retraction, including 1,171 to the Wakefield paper, none carrying a machine-readable warning. Reproducible from public data.',
  },
  '/research/media-attention-ontology': {
    title: 'The content registry television measurement runs on covers 1.84 per cent of television | Tesseract Academy for the Public Sector',
    description: "EIDR is the audiovisual industry's own content registry and it models the abstraction hierarchy that measurement depends on, yet in the open graph it reaches 53.44 per cent of films and 1.84 per cent of television series. We harvested 224,710 EIDR identifier assertions across 224,182 works and resolved 1,179 of them against EIDR's public registry to learn what each one denotes. 285 of the 522 works carrying more than one EIDR identifier hold identifiers at more than one level of the abstraction hierarchy at once, pairing a title-level record with a specific cut, and 133 identifiers are each claimed by two distinct works. EIDR maps the ISO 7064 MOD 37,36 supplementary value to 0 rather than an asterisk, so a validator built on a stock library rejects 6,252 perfectly valid identifiers, 2.78 per cent, as corrupt; across all 224,577 distinct identifiers zero genuinely fail. IMDb mints no season identifier and covers 0.78 per cent of seasons. The IAB Tech Lab taxonomies contain no RDF, SKOS or OWL of any kind, published here as SKOS for the first time with 2,845 concepts and 10 source defects reported rather than repaired. schema.org has 2,987 labelled terms and none for viewership, impressions, exposure or reach. 2,702,154 triples, reproducible from public data.",
  },
  '/research/learning-standards-ontology': {
    title: 'Every identifier in American K-12 academic standards is dead: 67,141 dereferenced, none resolve | Tesseract Academy for the Public Sector',
    description: 'The Achievement Standards Network was the identifier layer for United States academic standards, and its identifiers sit inside learning-resource metadata across the open education web. We dereferenced 67,141 of them across three populations, two of them complete censuses: every single one returns HTTP 404, while the vocabulary describing them still returns 200 from a static object store. 1EdTech, the body behind the successor specification CASE, ships a QTI v3 example package whose curriculum references are dead ASN URIs, as do DCMI\'s own LRMI examples. The CEDS Ontology v14 declares zero owl:ObjectProperty and zero rdfs:domain across 2,336 properties, types 965 terms as both an owl:Class and a skos:ConceptScheme, and publishes 19,546 concepts with no broader relations. Given six mis-statements it detects none, five being inexpressible in it, while the abandoned 465-triple ASN schema detects one. 433 identifiers name materially different standards and the most replicated statement text carries 718 distinct identifiers. 1,931,913 standard statements, 771 jurisdictions, 21,404,069 triples, reproducible from public data.',
  },
  '/research/insurance-register-ontology': {
    title: 'An open ontology for insurance and reinsurance: what the EU register says about 3,304 insurers, and what it gets wrong | Tesseract Academy for the Public Sector',
    description: 'The first open OWL 2 ontology, SKOS registry and SHACL governance layer for insurance and reinsurance entity data, built against the complete EIOPA Register of Insurance Undertakings (33,924 rows), joined to GLEIF and cross-checked against the German national register. 643 of 3,304 active EEA insurers carry no LEI. Four filed LEI values are arithmetically impossible, including a letter O where the real identifier carries a zero. 118 have lapsed, 42 name entities GLEIF says no longer exist, one identifier is shared by SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland, and 283 passports outlive the authorisation they depend on. Where both registers populate the field they agree perfectly across 344 undertakings: the problem is coverage, not contradiction. Reproducible from public data with five commands.',
  },
  '/research/bank-register-ontology': {
    title: 'The FDIC publishes 2,252 Legal Entity Identifiers. Not one of them is a valid LEI. | Tesseract Academy for the Public Sector',
    description: 'Every LEI in the FDIC BankFind register is truncated to 16 of the 20 characters ISO 17442 requires, discarding both check digits. Measured against the complete GLEIF golden copy of 3,403,760 records: 16 characters puts 6.37 per cent of the global LEI population into a collision, nine FDIC values are ambiguous across up to six unrelated companies, and two resolve to the wrong legal entity, including Associated Bank carrying its parent holding company’s identifier. The Federal Reserve’s MDRM dictionary shows the mirror-image defect: one definition per item code across forms with different consolidation bases, and 58 per cent of item codes with no definition at all. An open OWL 2 ontology, SKOS registries and SHACL governance layer, 1,123,634 triples, reproducible from public data.',
  },
  '/research/semantic-asset-register': {
    title: '13,040,382 triples of US federal vocabulary. 130 findings. Only 10 of them break a rule. | Tesseract Academy for the Public Sector',
    description: 'An open, re-runnable quality assessment of 28 vocabularies and ontologies published by 10 US federal agencies, retrieved and hashed on 16 August 2026. Every check names the authority it derives from and declares whether failing it violates a published specification or departs from a community practice the publisher never agreed to: 10 normative failures against 120 conventional ones. The Library of Congress MADS/RDF ontology does not parse, using rdf:resource on a node element 23 times, and the Thesaurus for Graphic Materials types 7,782 concepts against it. All 507 ISO 639-2 concepts violate SKOS integrity condition S14 because the vocabulary of language codes carries no language tags. Every asset retrieved, HTTPS compliance was complete and nothing was logically inconsistent: the strain is in governance, with 21 of 28 assets declaring no licence. Findings are W3C EARL assertions anchored to dated hashed snapshots, every headline computed twice.',
  },
  '/research/register-assurance': {
    title: 'Register assurance: why every public register fails at its boundary | Tesseract Academy for the Public Sector',
    description: 'Public registers increasingly assure their own records: GLEIF scores 99.99 across 3.39 million LEI records. But assurance stops at the register boundary: nothing checks conformance when one register embeds another’s identifiers, nothing verifies they still resolve, and nothing reconciles cross-register claims. Measured across six domains with one open method: all 2,252 FDIC LEIs are truncated and invalid, 19.5 per cent of active EEA insurers carry no LEI, the largest index fund is missing from the open identifier map, the registers of retraction agree on 72.42 per cent, all 67,141 dereferenced US academic-standards identifiers return 404, and zero of 300 sampled GOV.UK documents carry any maintenance commitment. Four boundary defect classes, six open ontologies, and the Register Integrity Index.',
  },
  '/research/financial-answer-verification': {
    title: 'Provenance beats plausibility: catching wrong financial answers without a gold key | Tesseract Academy for the Public Sector',
    description: 'FinanceBench ships 2,400 model answers carrying human correctness labels, an unused supervision set for answer verification. A deterministic check that never sees the gold answer recovers 57.4% of labelled errors and lifts the accuracy of served answers from 68.8% to 78.0% at 60.5% coverage, with positive recall in all sixteen model configurations. The same check against the whole filing recovers 3.6%, because a filing carries a median of 1,270 numbers against 69 on the cited page. Excusing answers that are reconstructible by arithmetic is anti-informative. The ground-truth audit finds page numbers are 0-indexed and that the two shipped gold files disagree on 15 of 51 numeric cases, every one by exactly 100x.',
  },
  '/research/neurosymbolic-space-kg': {
    title: 'Silence is not assent: what catches a wrong AI classification in orbit | Tesseract Academy for the Public Sector',
    description: 'A public 833,403-triple knowledge graph of all 70,122 catalogued space objects from a pinned CelesTrak SATCAT snapshot, aligned to the Space Situational Awareness Ontology. The ontology declares one disjointness axiom, so 351 of its 353 classes can never reject a wrong AI classification. LogMap 4.0 on the same pair reports zero repair conflicts while the catalogue refutes nine of its twenty candidates, catches a category error in its final output and rescues one it wrongly discarded. We also publish the first openly released language model for a space ontology: hallucinated ontology terms fall from 13.81 to 0.06 per output. Includes the threshold sweep that caught a circular measurement in our own earlier version.',
  },
  '/research/construction-standards-crosswalks': {
    title: 'Construction data standards cannot check your AI: IFC, COBie, Uniclass and BOT measured | Tesseract Academy for the Public Sector',
    description: 'Open crosswalks between the standards a building passes through (IFC4, COBie/BS 1192-4, Uniclass 2015, W3C BOT): 49 correspondences and 7 asserted non-mappings, all 96 identifiers machine-verified, every row argued. The classification layer of construction is 0% falsifiable, so no wrong AI mapping into COBie or Uniclass can ever be machine-rejected. BOT reaches 80.95% checkability from 9 axioms; IFC4 reaches 11.45% from 2,443. Axiom placement beats axiom count, measured on a second domain.',
  },
  '/research/parametric-payout-assurance': {
    title: 'Can a parametric climate insurance product prove it paid? | Tesseract Academy for the Public Sector',
    description: 'An open vocabulary and twelve machine-checkable rules that audit a parametric climate insurance promise at the three points where it fails: whether the promise is specifiable at all, whether a registered household is payable before a storm, and whether the payout arrived after one. Includes a documented false negative computed from public records: Severe Tropical Storm Nalgae came ashore 8 km/h below a typhoon trigger and destroyed roughly 67,000 tonnes of mostly rice.',
  },
  '/research/industrial-ontology-crosswalks': {
    title: 'Why industrial data crosswalks fail, measured across seven standards | Tesseract Academy for the Public Sector',
    description: 'Open crosswalks between four pairs of industrial data standards (ISO 15926-14, IFC4, ISA-95, CFIHOS, OPC UA, SAREF, Asset Administration Shell) plus the measurement that explains why they fail. Four of the seven cannot reject any mis-mapping at all, so the usual reasoner check could never have failed. IFC4 has 163 times more disjointness axioms than ISO 15926-14 and is 6.6 times less checkable. Every correspondence passes validation alone while the set collapses 29 classes together.',
  },
  '/research/ies4-turtle-language-model': {
    title: 'An open language model for IES4 data | Tesseract Academy for the Public Sector',
    description: 'To our knowledge the first openly published language model fine-tuned for IES4, the UK 4D defence-data ontology. Against the untuned base model, IES term conformance rises from 0% to 88.6% and the hallucinated-term rate falls from 0.937 to 0.010, on correct-by-construction training data double-validated against the published dstl/IES4 ontology. Model, dataset and evaluation harness released open for reproduction.',
  },
  '/research/ontology-correctness-benchmark': {
    title: 'The open-world hole: why SHACL cannot catch a hallucinated ontology term | Tesseract Academy for the Public Sector',
    description: 'A reproducible benchmark on three real vocabularies (schema.org, IES4, OBO PATO+RO) showing that open-world SHACL validates as conformant every data graph containing a fabricated ontology term (300 of 300), while a closed-world vocabulary gate catches all 300 with zero false positives across 418 fabricated terms. The correctness layer for AI-generated knowledge graphs, from the open-ontologies engine.',
  },
  '/research/shacl-shapes-not-vocabulary': {
    title: 'SHACL validates shapes, not vocabulary: the case for a closed-world companion | Tesseract Academy for the Public Sector',
    description: 'SHACL Core is open-world by design: it constrains the nodes a shape targets and is silent about everything else, including terms that do not exist in the ontology. Why sh:closed does not close the gap, and where a closed-world vocabulary check belongs in a generative RDF pipeline.',
  },
  '/research/symbol-existence-box': {
    title: 'The missing box: where symbol-existence checking belongs in a neuro-symbolic pipeline | Tesseract Academy for the Public Sector',
    description: 'Neuro-symbolic systems are assemblies of distinct components. Most LLM-to-knowledge-graph pipelines have generation and SHACL and assume SHACL is the symbol-grounding box. It is not. Read through the boxology of hybrid learning-and-reasoning systems, the missing box is symbol grounding.',
  },
  '/research/foundry-grade-machine-ontologies': {
    title: 'Foundry-grade guarantees for machine-authored ontologies | Tesseract Academy for the Public Sector',
    description: 'The OBO Foundry spent two decades insisting biomedical terms mean one thing and are declared in one place. Measured on the Foundry ontologies PATO and RO, open-world SHACL admits every fabricated identifier while a closed-world gate catches all of them, so machine output can be held to the same standard as human curation.',
  },
  '/research/neuro-symbolic-verification-direction': {
    title: 'Neuro-symbolic AI has a direction problem | Tesseract Academy for the Public Sector',
    description: 'Most neuro-symbolic work feeds symbols into the neural model. The under-built direction is the reverse, symbols verifying what the model produced. On the Kautz taxonomy the closed-world vocabulary gate is the cheapest reliable instance of that reverse arrow, and it catches an error class no amount of knowledge injection prevents.',
  },
  '/research/certified-denotation': {
    title: 'Beyond existence: certified denotation, the next gate | Tesseract Academy for the Public Sector',
    description: 'The closed-world vocabulary gate proves every term exists; it does not prove the term is used soundly. Certified denotation is the next gate, from ontology domain and range up to a certified world model. An honest roadmap of the correctness ladder, existence then type soundness then world-state soundness.',
  },
  '/research/ontology-grounded-biomedical-kg': {
    title: 'Grounded, not retrieved: an ontology-validated biomedical knowledge graph | Tesseract Academy for the Public Sector',
    description: 'A gene-disease knowledge graph from 40 real Open Targets associations, typed with the Biolink Model and validated by a closed-world vocabulary gate. The grounded graph has 0 SHACL and 0 vocabulary violations across 284 triples; an ungrounded variant with one fabricated Biolink predicate passes SHACL but is caught by the gate. Reproducible, with a provenance-carrying hypothesis triage.',
  },
  '/research/copula-coupled-uncertainty-certificates': {
    title: 'Marginal coverage is not joint coverage: copula-coupled uncertainty certificates | Tesseract Academy for the Public Sector',
    description: 'On 1,600 real OQMD materials with a frozen regressor, independent conformal prediction gives 90% per-target coverage but only 79% joint coverage. A coupled max-score certificate restores 90% joint coverage (22% tighter than Bonferroni), and a Gaussian-copula region matches it at 0.43x the size. Calibrated, machine-checkable uncertainty for correlated scientific outputs.',
  },
  '/research/verifiable-scientific-llm-benchmark': {
    title: 'Fluency is saturated, correctness is not: an un-game-able scientific-LLM benchmark | Tesseract Academy for the Public Sector',
    description: 'verifiabench grades LLM Biolink-RDF output with a closed-world oracle (term existence + structure, no LLM judge) instead of fluency. Across nine models including Claude Opus, Sonnet and Haiku, raw fluency saturates at 1.00 while verified capability ranges 0.00 to 1.00: a local Qwen3-Coder-30B ties Claude Opus at 1.00 while some fluent models invent half their terms. Reproducible against any endpoint.',
  },
  '/research/proof-carrying-action-gatekeeper': {
    title: 'The gate you can trust: a proof-carrying-action gatekeeper, exhaustively verified | Tesseract Academy for the Public Sector',
    description: 'A reference ARIA-Safeguarded-AI-style gatekeeper for a bounded multi-agent system. Actions dispatch only if a certificate passes a 31-line trusted core. Verified exhaustively, not sampled: over 96 reachable states and 1,176 transitions it blocks 672/672 unsafe actions and admits 504/504 safe ones at 0.36 microseconds per check. Without the gate, 57% of actions violate the spec.',
  },
  '/research/health-ai-privacy-fairness-assurance': {
    title: 'One report card for privacy and fairness: the disparate impact of differential privacy | Tesseract Academy for the Public Sector',
    description: 'Privacy and fairness are audited separately, but they interact. On the real UCI Diabetes readmission dataset, one report card runs membership inference and per-subgroup equity on the same model across a differential-privacy sweep. At epsilon 0.25, DP costs minority subgroups 2.6x more accuracy than the majority while the membership leakage it targets is near zero. The trade is only visible with both planes on one card.',
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

  '/research/xbrl-pdf-html-ai-benchmark': {
    title: "Does structured data actually help AI read company accounts? A controlled pilot | Tesseract Academy for the Public Sector",
    description: "A self-funded controlled pilot comparing how well an open-weights language model reads the same UK annual reports as structured XBRL facts, HTML text and PDF text. Three FY2026 filed reports, 21 tasks, 189 scored model calls. Financial extraction accuracy: XBRL 88.9%, PDF 86.7%, HTML 80.0%; only XBRL ever retrieved a bracketed negative equity figure with the correct sign, at 2.9x the token cost.",
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
  '/services/digital-analytics': {
    title: 'Digital Analytics & Audience Measurement | Tesseract Academy for the Public Sector',
    description: 'GA4 and Google Tag Manager implementation and audit, consent-aware measurement, Power BI and Looker Studio dashboards, KPI frameworks, test-and-learn support, and analytics capability building for UK public sector and cultural organisations. CCS RM6126 appointed supplier.',
  },
  '/research/museum-visits-observatory': {
    title: 'The DCMS Museum Visits Observatory | Tesseract Academy for the Public Sector',
    description: 'An interactive observatory of monthly visits to all DCMS-sponsored museums and galleries, January 2019 to March 2026, built from the official DCMS statistical data set: 16 museum groups, site-level detail, pandemic closures marked, and recovery measured against each institution\'s own 2019 baseline. Open Government Licence v3.0.',
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
  '/research/fine-tuning-llm-government-data-standard': {
    title: 'Teaching an open-source LLM a government information standard: from 94% hallucination to 1% | Tesseract Academy for the Public Sector',
    description: 'Tesseract Academy fine-tuned Qwen3-Coder-30B on IES4, the UK government Information Exchange Standard for defence and national security data sharing. Term confabulation fell from 93.7% to 1.0%, term conformance rose from 0% to 88.6%, every claim machine-verified against the published ontology. Published openly on Hugging Face.',
  },
  '/research/machine-validated-open-ontologies': {
    title: 'Publishing machine-validated open data structures for the public sector | Tesseract Academy for the Public Sector',
    description: 'Three delivered examples of open, machine-validated data structures: the Skills England occupational maps as a formal ontology (51,355 triples, 0 SHACL violations), the open-ontologies validation toolkit, and a computation-ready heritage aerial-photography archive (292 frames, 0 SHACL violations). Data, rules and checker published together.',
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
              <Route path="/research/industrial-ontology-crosswalks" element={<IndustrialOntologyCrosswalks />} />
              <Route path="/research/parametric-payout-assurance" element={<ParametricPayoutAssurance />} />
              <Route path="/research/construction-standards-crosswalks" element={<ConstructionStandardsCrosswalks />} />
              <Route path="/research/neurosymbolic-space-kg" element={<NeurosymbolicSpaceKg />} />
              <Route path="/research/waste-reporting-loss" element={<WasteReportingLoss />} />
              <Route path="/research/financial-answer-verification" element={<FinancialAnswerVerification />} />
              <Route path="/research/investment-fund-ontology" element={<InvestmentFundOntology />} />
              <Route path="/research/insurance-register-ontology" element={<InsuranceRegisterOntology />} />
              <Route path="/research/learning-standards-ontology" element={<LearningStandardsOntology />} />
              <Route path="/research/media-attention-ontology" element={<MediaAttentionOntology />} />
              <Route path="/research/scholarly-record-ontology" element={<ScholarlyRecordOntology />} />
              <Route path="/research/enterprise-knowledge-ontology" element={<EnterpriseKnowledgeOntology />} />
              <Route path="/research/space-metrics-crosswalk" element={<SpaceMetricsCrosswalk />} />
              <Route path="/research/ies4-turtle-language-model" element={<Ies4TurtleLanguageModel />} />
              <Route path="/research/ontology-correctness-benchmark" element={<OntologyCorrectnessBench />} />
              <Route path="/research/shacl-shapes-not-vocabulary" element={<ShaclShapesNotVocabulary />} />
              <Route path="/research/symbol-existence-box" element={<SymbolExistenceBox />} />
              <Route path="/research/foundry-grade-machine-ontologies" element={<FoundryGradeMachineOntologies />} />
              <Route path="/research/neuro-symbolic-verification-direction" element={<NeuroSymbolicVerificationDirection />} />
              <Route path="/research/certified-denotation" element={<CertifiedDenotation />} />
              <Route path="/research/ontology-grounded-biomedical-kg" element={<BioKgTriage />} />
              <Route path="/research/copula-coupled-uncertainty-certificates" element={<CopulaCoupledUncertainty />} />
              <Route path="/research/verifiable-scientific-llm-benchmark" element={<VerifiaBench />} />
              <Route path="/research/proof-carrying-action-gatekeeper" element={<ProofCarryingGatekeeper />} />
              <Route path="/research/health-ai-privacy-fairness-assurance" element={<AssureHealth />} />
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
              <Route path="/research/xbrl-pdf-html-ai-benchmark" element={<XbrlPdfHtmlAiBenchmark />} />
              <Route path="/research/property-market-indicators" element={<PropertyMarketIndicators />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/services/ai-consulting" element={<AIConsulting />} />
              <Route path="/services/research-policy" element={<ResearchPolicy />} />
              <Route path="/services/public-engagement" element={<PublicEngagement />} />
              <Route path="/services/survey-design" element={<SurveyDesign />} />
              <Route path="/services/education-upskilling" element={<EducationUpskilling />} />
              <Route path="/services/ai-governance" element={<AIGovernance />} />
              <Route path="/services/digital-analytics" element={<DigitalAnalytics />} />
              <Route path="/research/museum-visits-observatory" element={<MuseumVisitsObservatory />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/research/fine-tuning-llm-government-data-standard" element={<FineTuningLlmGovernmentDataStandard />} />
              <Route path="/research/machine-validated-open-ontologies" element={<MachineValidatedOpenOntologies />} />
              <Route path="/research/bank-register-ontology" element={<BankRegisterOntology />} />
              <Route path="/research/semantic-asset-register" element={<SemanticAssetRegister />} />
              <Route path="/research/register-assurance" element={<RegisterAssurance />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
