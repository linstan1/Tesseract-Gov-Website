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
    <header className="glass-effect border-b border-gov-border/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center gap-3">
              <div className="bg-gov-blue p-2.5 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-none text-gov-dark">TESSERACT ACADEMY</span>
                <span className="text-[10px] text-gov-secondary font-medium uppercase tracking-widest mt-1">Government Gateway</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
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

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gov-text hover:bg-gov-bg"
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
        <div className="md:hidden bg-white border-t border-gov-border/30">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
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
        </div>
      )}
    </header>
  );
};
