import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'How to Buy', path: '/how-to-buy' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Research', path: '/research' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Compliance', path: '/compliance' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="glass-effect border-b border-gov-border-light sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-gradient-to-br from-gov-blue to-gov-blue-dark p-2.5 rounded-lg transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-gov-text tracking-tight font-serif">TESSERACT ACADEMY</span>
                <span className="text-xs text-gov-secondary font-medium uppercase tracking-widest mt-0.5">Government Gateway</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium border-b-3 transition-all duration-200 rounded-t-md ${
                    isActive
                      ? 'border-gov-blue text-gov-blue bg-gov-blue/5'
                      : 'border-transparent text-gov-text hover:bg-gov-blue/5 hover:text-gov-blue-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gov-text hover:bg-gov-blue/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gov-blue transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gov-border-light animate-fadeIn shadow-soft">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-4 text-base font-medium border-l-4 rounded-r-md transition-all duration-200 ${
                    isActive
                      ? 'border-gov-blue bg-gov-blue/5 text-gov-blue'
                      : 'border-transparent text-gov-text hover:bg-gov-bg hover:border-gov-blue/30'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
