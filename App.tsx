import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowToBuy } from './pages/HowToBuy';
import { Capabilities } from './pages/Capabilities';
import { UseCases } from './pages/UseCases';
import { Research } from './pages/Research';
import { Partnerships } from './pages/Partnerships';
import { Compliance } from './pages/Compliance';
import { Feedback } from './pages/Feedback';
import { About } from './pages/About';
import { WelshGovernment } from './pages/case-studies/WelshGovernment';
import { NationalDigitalTwin } from './pages/case-studies/NationalDigitalTwin';
import { BridgeAI } from './pages/case-studies/BridgeAI';
import { Kalgera } from './pages/case-studies/Kalgera';
import { Glossary } from './pages/Glossary';
import { AIConsulting } from './pages/services/AIConsulting';
import { ResearchPolicy } from './pages/services/ResearchPolicy';
import { PublicEngagement } from './pages/services/PublicEngagement';
import { SurveyDesign } from './pages/services/SurveyDesign';
import { EducationUpskilling } from './pages/services/EducationUpskilling';
import { AIGovernance } from './pages/services/AIGovernance';
import { Insights } from './pages/Insights';
import { SectorsIndex } from './pages/sectors/SectorsIndex';
import { HealthNHS } from './pages/sectors/HealthNHS';
import { LocalGovernment } from './pages/sectors/LocalGovernment';
import { EducationSkills } from './pages/sectors/EducationSkills';
import { DefenceSecurity } from './pages/sectors/DefenceSecurity';
import { JusticePolicing } from './pages/sectors/JusticePolicing';
import { TransportInfrastructure } from './pages/sectors/TransportInfrastructure';
import { WelfareRevenue } from './pages/sectors/WelfareRevenue';
import { DevolvedNations } from './pages/sectors/DevolvedNations';
import { ResourcesIndex } from './pages/resources/ResourcesIndex';
import { AIProcurementGuide } from './pages/resources/AIProcurementGuide';
import { AIReadinessChecklist } from './pages/resources/AIReadinessChecklist';

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Tesseract Government Gateway - Research, AI & Public Sector Delivery Partner',
    description: 'Tesseract Academy delivers research-backed AI, data science, public engagement, survey design, and policy advisory services for UK and EU public sector organisations. Crown Commercial Service appointed supplier.',
  },
  '/how-to-buy': {
    title: 'How to Buy - Procurement Routes | Tesseract Government Gateway',
    description: 'Commission Tesseract Academy through Crown Commercial Service frameworks (RM6200, RM6094, RM6126) or direct award. SME supplier for AI, research, and digital services.',
  },
  '/capabilities': {
    title: 'Capabilities - AI, Research, Education & Survey Services | Tesseract Government Gateway',
    description: 'Policy-aligned advisory, rapid delivery, data and AI upskilling, and survey design services. Case studies include Welsh Government, BridgeAI, FCA, and US Navy executive training.',
  },
  '/use-cases': {
    title: 'Use Cases - Public Sector Project Evidence | Tesseract Government Gateway',
    description: 'Evidence of delivery across UK government contracts: Welsh Government land valuation, National Digital Twin Programme, BridgeAI creative industries AI, Kalgera financial vulnerability research.',
  },
  '/research': {
    title: 'Research & Publications | Tesseract Government Gateway',
    description: 'Academic publications, government-commissioned research, and open-source tools. Welsh Government land valuation report, Alan Turing Institute cybersecurity research, NDTP ontology tools.',
  },
  '/partnerships': {
    title: 'Consortium Partnerships - Innovate UK & Horizon Europe | Tesseract Government Gateway',
    description: 'Partner with Tesseract Academy on Innovate UK and Horizon Europe bids. Focus areas: trustworthy AI, digital twins, HealthTech, and sustainable technology.',
  },
  '/compliance': {
    title: 'Compliance & Policies | Tesseract Government Gateway',
    description: 'Cyber Essentials certified, ISO 27001 aligned. Download our data protection, information security, modern slavery, carbon reduction, and accessibility policies.',
  },
  '/testimonials': {
    title: 'Testimonials & Executive Training | Tesseract Government Gateway',
    description: 'Client reviews and executive AI training case studies. Workshops delivered for US Navy (40+ participants), Vodafone, and Philips leadership teams. Verified Clutch reviews.',
  },
  '/about': {
    title: 'About Us - Team, Credentials & Company Profile | Tesseract Government Gateway',
    description: 'Meet the Tesseract Academy team: Dr Stylianos Kampakis (PhD UCL, FRSS, CStat) and Fabio Rovai MSc. CCS frameworks RM6200, RM6094, RM6126. Cyber Essentials certified. DV-cleared resource available.',
  },
  '/case-studies/welsh-government-land-valuation': {
    title: 'Welsh Government Land Valuation Research | Tesseract Government Gateway',
    description: 'Tesseract Academy tested five land valuation methodologies across 1,916 Welsh LSOAs — 99% of Welsh geography — for Welsh Government. Published on GOV.WALES, March 2026. Informs local government finance policy.',
  },
  '/case-studies/national-digital-twin-programme': {
    title: 'AI Ontology Extension Generator — National Digital Twin Programme | Tesseract Government Gateway',
    description: 'Tesseract Academy contributed to the open-source AI Ontology Extension Generator for the UK National Digital Twin Programme. Production-ready Streamlit app. Apache 2.0. Published on GitHub under National-Digital-Twin.',
  },
  '/case-studies/bridgeai-creative-industries': {
    title: 'BridgeAI: AI Adoption for UK Creative Industries | Tesseract Government Gateway',
    description: 'Tesseract Academy delivered the BridgeAI Skills Hub launch and AI readiness sessions under Innovate UK contract GSS24646. 1,100 registrations vs 200 target. Satisfaction rating 4.6 out of 5.',
  },
  '/case-studies/kalgera-financial-vulnerability': {
    title: 'Financial Vulnerability Research — Kalgera / Fintech Scotland | Tesseract Government Gateway',
    description: 'End-to-end qualitative research validating Kalgera\'s AI-driven financial vulnerability signals. 8–10 in-depth interviews, 80–120 survey respondents, ethical framework under the Adult Support and Protection (Scotland) Act 2007.',
  },
  '/glossary': {
    title: 'AI & Procurement Glossary | Tesseract Government Gateway',
    description: 'Definitions of 60+ AI, data science, and procurement terms used in UK public sector contracting. From Algorithmic Impact Assessment to Zero-Shot Learning.',
  },
  '/services/ai-consulting': {
    title: 'AI Consulting for UK Public Sector | Tesseract Government Gateway',
    description: 'Custom AI model development, NLP, machine learning pipelines, and predictive analytics for UK public sector. CCS RM6200 appointed supplier. Aligned with GDS Service Standard.',
  },
  '/services/research-policy': {
    title: 'Research & Policy Advisory | Tesseract Government Gateway',
    description: 'Evidence-based research design, systematic literature reviews, policy analysis, and regulatory consultation responses for UK government bodies. Published on GOV.WALES.',
  },
  '/services/public-engagement': {
    title: 'Public Engagement & Participatory Research | Tesseract Government Gateway',
    description: 'Deliberative workshops, citizen panels, inclusive co-design, and participatory research with diverse communities. Full ethical framework. CCS RM6126 appointed supplier.',
  },
  '/services/survey-design': {
    title: 'Survey Design & Delivery for Public Sector | Tesseract Government Gateway',
    description: 'End-to-end survey methodology, questionnaire design, mixed-mode data collection, and statistical analysis. Qualifications Wales 3-year contract (2026-2029). CCS RM6126.',
  },
  '/services/education-upskilling': {
    title: 'AI Education & Upskilling | Tesseract Government Gateway',
    description: 'AI literacy programmes, data science workshops, executive leadership training. 2,300 civil servants upskilled. 91% completion rate. UK Government Business Academy partner.',
  },
  '/services/ai-governance': {
    title: 'AI Ethics & Governance | Tesseract Government Gateway',
    description: 'EU AI Act, NIST AI RMF, ISO 42001 compliance. Bias auditing, algorithmic impact assessments. Open-source governance platform with 48 governance tools. Cyber Essentials certified.',
  },
  '/insights': {
    title: 'UK Public Sector AI Insights — Research Findings | Tesseract Government Gateway',
    description: 'Original research from Tesseract Academy: civil service AI upskilling achieves 91% completion, land valuation ML analysis across 1,916 Welsh LSOAs, BridgeAI 450% oversubscription. Evidence from UK government AI delivery 2022-2026.',
  },
  '/sectors': {
    title: 'Sector Vertical Landing Pages | Tesseract Government Gateway',
    description: 'AI, research, and data services tailored for every UK government sector — NHS, MHCLG, DfE, MoD, MoJ, DfT, DWP, HMRC, Welsh, Scottish, and Northern Irish governments. Crown Commercial Service appointed supplier.',
  },
  '/sectors/health-nhs': {
    title: 'AI & Research for NHS and UK Health Sector | Tesseract Government Gateway',
    description: 'AI, research, and data services for NHS England, NHS Trusts, NICE, MHRA, and Department of Health and Social Care. Clinical safety, IG Toolkit/DSPT compliance, MHRA SaMD readiness. CCS RM6200 supplier.',
  },
  '/sectors/local-government': {
    title: 'AI & Research for UK Local Government and Councils | Tesseract Government Gateway',
    description: 'AI, research, and survey services for MHCLG, LGA, councils, and Oflog. Welsh Government land valuation experience across 1,916 LSOAs. CCS RM6200 / RM6126 supplier with NAO and ONS-aligned methodologies.',
  },
  '/sectors/education-skills': {
    title: 'AI & Research for DfE, Skills England and Education Sector | Tesseract Government Gateway',
    description: 'AI, research, and education services for DfE, Skills England, OfS, JISC, and UKRI. 2,300 civil servants upskilled, 91% completion rate, BridgeAI Skills Hub delivery (1,100 registrations). CCS RM6126 supplier.',
  },
  '/sectors/defence-security': {
    title: 'AI & Research for UK Defence and National Security | Tesseract Government Gateway',
    description: 'AI assurance, ontology, and research services for MoD, Dstl, DASA, NCSC, and UK AI Safety Institute. NDTP ontology delivery experience. DV-cleared associate available. CCS RM6200 supplier.',
  },
  '/sectors/justice-policing': {
    title: 'AI & Research for UK Justice and Policing | Tesseract Government Gateway',
    description: 'AI assurance, algorithmic transparency, and research services for MoJ, HMCTS, HMPPS, College of Policing, and NPCC. ATRS-ready model documentation. ICO-aligned algorithmic auditing. CCS RM6200 supplier.',
  },
  '/sectors/transport-infrastructure': {
    title: 'AI & Research for UK Transport and Infrastructure | Tesseract Government Gateway',
    description: 'AI, digital twin, and research services for DfT, Network Rail, TfL, HS2, National Highways, CAA, and the National Infrastructure Commission. NDTP-compatible ontology methodology. CCS RM6200 supplier.',
  },
  '/sectors/welfare-revenue': {
    title: 'AI & Research for DWP and HMRC | Tesseract Government Gateway',
    description: 'AI assurance, equality impact assessments, and research services for DWP, HMRC, HM Treasury, and OBR. EHRC-aligned bias auditing for benefits, fraud, and tax decision-support models. CCS RM6200 supplier.',
  },
  '/sectors/devolved-nations': {
    title: 'AI & Research for Welsh, Scottish and NI Devolved Governments | Tesseract Government Gateway',
    description: 'AI, research, and survey services for Welsh Government, Scottish Government, and Northern Ireland Executive. Published on GOV.WALES March 2026 (1,916 LSOAs). Sell2Wales, Public Contracts Scotland, eTendersNI registered.',
  },
  '/resources': {
    title: 'Free UK Public Sector AI Resources & Practitioner Guides | Tesseract Government Gateway',
    description: 'Free practitioner resources for UK government procurement, digital, and policy teams. AI procurement guide, AI readiness checklist, and 60+ term glossary. Cited GOV.UK Service Manual, NIST AI RMF, EU AI Act sources.',
  },
  '/resources/ai-procurement-guide': {
    title: 'How to Commission AI Services from UK Public Sector Suppliers | Tesseract Government Gateway',
    description: 'Definitive guide to commissioning AI and research services in UK government. Covers CCS RM6200, RM6094 Spark, RM6126, Procurement Act 2023, FaTS, DASA, devolved portals. Authored by Dr Stylianos Kampakis.',
  },
  '/resources/ai-readiness-checklist': {
    title: 'AI Readiness Self-Assessment Checklist for UK Public Sector | Tesseract Government Gateway',
    description: 'Free 12-question self-assessment for UK public sector teams considering AI procurement. ICO, CDDO, NIST AI RMF, ATRS, and EHRC-referenced criteria. Authored by Dr Stylianos Kampakis.',
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
            <Route path="/case-studies/welsh-government-land-valuation" element={<WelshGovernment />} />
            <Route path="/case-studies/national-digital-twin-programme" element={<NationalDigitalTwin />} />
            <Route path="/case-studies/bridgeai-creative-industries" element={<BridgeAI />} />
            <Route path="/case-studies/kalgera-financial-vulnerability" element={<Kalgera />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/services/research-policy" element={<ResearchPolicy />} />
            <Route path="/services/public-engagement" element={<PublicEngagement />} />
            <Route path="/services/survey-design" element={<SurveyDesign />} />
            <Route path="/services/education-upskilling" element={<EducationUpskilling />} />
            <Route path="/services/ai-governance" element={<AIGovernance />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/sectors" element={<SectorsIndex />} />
            <Route path="/sectors/health-nhs" element={<HealthNHS />} />
            <Route path="/sectors/local-government" element={<LocalGovernment />} />
            <Route path="/sectors/education-skills" element={<EducationSkills />} />
            <Route path="/sectors/defence-security" element={<DefenceSecurity />} />
            <Route path="/sectors/justice-policing" element={<JusticePolicing />} />
            <Route path="/sectors/transport-infrastructure" element={<TransportInfrastructure />} />
            <Route path="/sectors/welfare-revenue" element={<WelfareRevenue />} />
            <Route path="/sectors/devolved-nations" element={<DevolvedNations />} />
            <Route path="/resources" element={<ResourcesIndex />} />
            <Route path="/resources/ai-procurement-guide" element={<AIProcurementGuide />} />
            <Route path="/resources/ai-readiness-checklist" element={<AIReadinessChecklist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
