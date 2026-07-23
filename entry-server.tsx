/**
 * SSR / SSG entry point.
 * Imports every route synchronously (no lazy) so renderToString resolves
 * the full tree without Suspense fallback. The client entry (index.tsx)
 * keeps lazy + Suspense for runtime code splitting.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router';

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
import { WelshGovernment } from './pages/research/WelshGovernment';
import { NationalDigitalTwin } from './pages/research/NationalDigitalTwin';
import { BridgeAI } from './pages/research/BridgeAI';
import { Kalgera } from './pages/research/Kalgera';
import { WastewaterDataQuality } from './pages/research/WastewaterDataQuality';
import { AerialPhotographyHeritage } from './pages/research/AerialPhotographyHeritage';
import { ZeroEmissionAviation } from './pages/research/ZeroEmissionAviation';
import { WrapFoodWaste } from './pages/research/WrapFoodWaste';
import { AesHeritage } from './pages/research/AesHeritage';
import { ConnectiveProductCyberIncidents } from './pages/research/ConnectiveProductCyberIncidents';
import { FairScientificData } from './pages/research/FairScientificData';
import { IesHqdmCrosswalk } from './pages/research/IesHqdmCrosswalk';
import { Ies4TurtleLanguageModel } from './pages/research/Ies4TurtleLanguageModel';
import { OntologyCorrectnessBench } from './pages/research/OntologyCorrectnessBench';
import { ShaclShapesNotVocabulary } from './pages/research/ShaclShapesNotVocabulary';
import { SymbolExistenceBox } from './pages/research/SymbolExistenceBox';
import { FoundryGradeMachineOntologies } from './pages/research/FoundryGradeMachineOntologies';
import { NeuroSymbolicVerificationDirection } from './pages/research/NeuroSymbolicVerificationDirection';
import { CertifiedDenotation } from './pages/research/CertifiedDenotation';
import { BioKgTriage } from './pages/research/BioKgTriage';
import { CopulaCoupledUncertainty } from './pages/research/CopulaCoupledUncertainty';
import { VerifiaBench } from './pages/research/VerifiaBench';
import { ProofCarryingGatekeeper } from './pages/research/ProofCarryingGatekeeper';
import { AssureHealth } from './pages/research/AssureHealth';
import { BiologyOntologyLanguageModel } from './pages/research/BiologyOntologyLanguageModel';
import { PyramidBridge } from './pages/research/PyramidBridge';
import { NatureSecurityRisk } from './pages/research/NatureSecurityRisk';
import { SkillsEnglandOccupationalMaps } from './pages/research/SkillsEnglandOccupationalMaps';
import { VictimWitnessEvaluation } from './pages/research/VictimWitnessEvaluation';
import { SmallAreaHealth } from './pages/research/SmallAreaHealth';
import { AlgorithmicTransparencyCorpus } from './pages/research/AlgorithmicTransparencyCorpus';
import { LocalLabourMarket } from './pages/research/LocalLabourMarket';
import { FcaWarningsObservatory } from './pages/research/FcaWarningsObservatory';
import { ConsultationCorpus } from './pages/research/ConsultationCorpus';
import { EvaluationAtlas } from './pages/research/EvaluationAtlas';
import { SkillsEnglandEscoCrosswalk } from './pages/research/SkillsEnglandEscoCrosswalk';
import { NatureGovernanceGraph } from './pages/research/NatureGovernanceGraph';
import { ModipPlasticsGraph } from './pages/research/ModipPlasticsGraph';
import { IxbrlDisclosureBenchmark } from './pages/research/IxbrlDisclosureBenchmark';
import { XbrlPdfHtmlAiBenchmark } from './pages/research/XbrlPdfHtmlAiBenchmark';
import { PropertyMarketIndicators } from './pages/research/PropertyMarketIndicators';
import { Glossary } from './pages/Glossary';
import { AIConsulting } from './pages/services/AIConsulting';
import { ResearchPolicy } from './pages/services/ResearchPolicy';
import { PublicEngagement } from './pages/services/PublicEngagement';
import { SurveyDesign } from './pages/services/SurveyDesign';
import { EducationUpskilling } from './pages/services/EducationUpskilling';
import { AIGovernance } from './pages/services/AIGovernance';
import { DigitalAnalytics } from './pages/services/DigitalAnalytics';
import { MuseumVisitsObservatory } from './pages/research/MuseumVisitsObservatory';
import { Insights } from './pages/Insights';
import { FineTuningLlmGovernmentDataStandard } from './pages/research/FineTuningLlmGovernmentDataStandard';
import { MachineValidatedOpenOntologies } from './pages/research/MachineValidatedOpenOntologies';

const SSRApp: React.FC = () => (
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
      </Routes>
    </main>
    <Footer />
  </div>
);

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <SSRApp />
    </StaticRouter>,
  );
}
