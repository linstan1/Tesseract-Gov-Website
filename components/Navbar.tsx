import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'How to Buy', path: '/how-to-buy' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Research', path: '/research' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Compliance', path: '/compliance' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="glass-effect border-b border-gov-border/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20 gap-8">
          <a href="/" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2" aria-label="Tesseract Academy  - Government Gateway home">
            <img src="https://consulting.tesseract.academy/wp-content/uploads/2024/04/logo-centered.png" alt="" className="h-14" aria-hidden="true" />
            <span className="font-bold text-base text-gov-dark uppercase tracking-wide ml-1.5">Government Gateway</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-lg ${
                    isActive
                      ? 'text-gov-dark bg-gov-bg'
                      : 'text-gov-secondary hover:text-gov-dark hover:bg-gov-bg/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gov-text hover:bg-gov-bg focus:outline-none focus:ring-2 focus:ring-gov-focus focus:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white border-t border-gov-border/30" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium rounded-lg ${
                    isActive
                      ? 'bg-gov-bg text-gov-dark'
                      : 'text-gov-secondary hover:bg-gov-bg/50 hover:text-gov-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
