import React, { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLeaf = { label: string; path: string; blurb: string };
type NavGroup = { label: string; items: NavLeaf[] };
type NavEntry = { label: string; path: string } | NavGroup;

const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;

const NAV_ENTRIES: NavEntry[] = [
  { label: 'How to Buy', path: '/how-to-buy' },
  {
    label: 'Capabilities',
    items: [
      { label: 'Capabilities overview', path: '/capabilities', blurb: 'Advisory, delivery, upskilling and survey services' },
      { label: 'Safe AI', path: '/ontology', blurb: 'AI systems that can be checked before they answer' },
      { label: 'Use Cases', path: '/use-cases', blurb: 'Delivered engagements, named and dated' },
      { label: 'Industries', path: '/industries', blurb: 'Seven sectors, with the research under each' },
    ],
  },
  {
    label: 'Evidence',
    items: [
      { label: 'Research', path: '/research', blurb: 'Publications, open-source tools and reports' },
      { label: 'Insights', path: '/insights', blurb: 'Original findings from our own analysis' },
      { label: 'Testimonials', path: '/testimonials', blurb: 'Client reviews and executive training' },
      { label: 'Glossary', path: '/glossary', blurb: 'Public sector AI and procurement terms defined' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About us', path: '/about', blurb: 'The team, credentials and CCS frameworks' },
      { label: 'Partnerships', path: '/partnerships', blurb: 'Innovate UK and Horizon Europe consortia' },
      { label: 'Compliance', path: '/compliance', blurb: 'Cyber Essentials, policies and certificates' },
    ],
  },
];

const matchesPath = (pathname: string, path: string) =>
  pathname === path || pathname.startsWith(`${path}/`);

/* On a touch device mouseenter fires on tap and the click handler would then
   toggle the panel straight back shut, so hover-to-open is bound only where the
   pointer can actually hover. Resolved after mount to keep SSR output identical. */
const useCanHover = () => {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return canHover;
};

const DesktopGroup: React.FC<{
  group: NavGroup;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}> = ({ group, isOpen, onOpen, onClose }) => {
  const location = useLocation();
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();
  const isActive = group.items.some((item) => matchesPath(location.pathname, item.path));

  const closeAndRefocus = () => {
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <div
      className="relative"
      onMouseEnter={canHover ? onOpen : undefined}
      onMouseLeave={canHover ? onClose : undefined}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          e.stopPropagation();
          closeAndRefocus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            onOpen();
            window.requestAnimationFrame(() => {
              panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
            });
          }
        }}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2 ${
          isActive || isOpen
            ? 'text-gov-dark bg-gov-bg'
            : 'text-gov-secondary hover:text-gov-dark hover:bg-gov-bg/50'
        }`}
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Always rendered so the links stay in the prerendered HTML for crawlers.
          Hidden with CSS + inert rather than unmounted, which keeps them out of
          the tab order and the accessibility tree while closed. */}
      <div
        id={panelId}
        ref={panelRef}
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`absolute left-0 top-full w-80 pt-2 z-50 transition-opacity duration-150 ${
          isOpen ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="bg-white border border-gov-border/60 rounded-xl shadow-lg shadow-gov-dark/5 p-2">
          {group.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              aria-current={matchesPath(location.pathname, item.path) ? 'page' : undefined}
              className={({ isActive: leafActive }) =>
                `block px-3 py-2.5 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus ${
                  leafActive ? 'bg-gov-bg' : 'hover:bg-gov-bg/60'
                }`
              }
            >
              <span className="block text-sm font-semibold text-gov-dark">{item.label}</span>
              <span className="block mt-0.5 text-xs leading-snug text-gov-secondary">{item.blurb}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!openGroup) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [openGroup]);

  return (
    <header ref={headerRef} className="glass-effect border-b border-gov-border/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20 gap-8">
          <a href="/" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2" aria-label="Tesseract Academy for the Public Sector home">
            <img src="https://consulting.tesseract.academy/wp-content/uploads/2024/04/logo-centered.png" alt="" className="h-14" aria-hidden="true" />
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ENTRIES.map((entry) =>
              isGroup(entry) ? (
                <DesktopGroup
                  key={entry.label}
                  group={entry}
                  isOpen={openGroup === entry.label}
                  onOpen={() => setOpenGroup(entry.label)}
                  onClose={() => setOpenGroup(null)}
                />
              ) : (
                <NavLink
                  key={entry.path}
                  to={entry.path}
                  onMouseEnter={() => setOpenGroup(null)}
                  aria-current={location.pathname === entry.path ? 'page' : undefined}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2 ${
                      isActive
                        ? 'text-gov-dark bg-gov-bg'
                        : 'text-gov-secondary hover:text-gov-dark hover:bg-gov-bg/50'
                    }`
                  }
                >
                  {entry.label}
                </NavLink>
              )
            )}
          </nav>

          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="hidden lg:inline-flex items-center ml-auto whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-white bg-gov-cta rounded-lg transition-colors duration-150 hover:bg-gov-cta-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2"
          >
            Get in touch
          </a>

          <div className="flex items-center lg:hidden ml-auto">
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
        <nav id="mobile-menu" className="lg:hidden bg-white border-t border-gov-border/30 max-h-[calc(100vh-5rem)] overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-1">
            {NAV_ENTRIES.map((entry) =>
              isGroup(entry) ? (
                <div key={entry.label} className="pt-4 first:pt-0">
                  <p className="px-4 pb-1 text-xs font-bold uppercase tracking-widest text-gov-dark">
                    {entry.label}
                  </p>
                  {entry.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      aria-current={matchesPath(location.pathname, item.path) ? 'page' : undefined}
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
              ) : (
                <NavLink
                  key={entry.path}
                  to={entry.path}
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === entry.path ? 'page' : undefined}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg ${
                      isActive
                        ? 'bg-gov-bg text-gov-dark'
                        : 'text-gov-secondary hover:bg-gov-bg/50 hover:text-gov-dark'
                    }`
                  }
                >
                  {entry.label}
                </NavLink>
              )
            )}
            <a
              href="mailto:fabio@thetesseractacademy.com"
              onClick={() => setIsOpen(false)}
              className="block mt-6 px-4 py-3 text-base font-semibold text-center text-white bg-gov-cta rounded-lg hover:bg-gov-cta-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
