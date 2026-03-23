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
    if (ogUrl) ogUrl.setAttribute('content', `https://tesseract-gov-website.vercel.app${pathname}`);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://tesseract-gov-website.vercel.app${pathname}`);
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
