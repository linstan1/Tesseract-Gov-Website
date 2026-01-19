import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowToBuy } from './pages/HowToBuy';
import { Capabilities } from './pages/Capabilities';
import { UseCases } from './pages/UseCases';
import { Research } from './pages/Research';
import { Partnerships } from './pages/Partnerships';
import { Compliance } from './pages/Compliance';

// Use a ScrollToTop component since Router v6 ScrollRestoration might need configuration in HashRouter
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/research" element={<Research />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/compliance" element={<Compliance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
