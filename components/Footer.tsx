import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gov-border/30 mt-auto">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-base font-bold text-gov-dark mb-4">Tesseract Academy for the Public Sector</h3>
            <p className="text-sm text-gov-secondary max-w-md leading-relaxed">
              Supporting public sector innovation through research-backed implementation, rapid delivery, and policy-aligned advisory.
            </p>
            <p className="text-sm mt-4">
              <Link to="/research/open-source" className="text-gov-blue hover:text-gov-blue-dark transition-colors font-medium">
                Open source: the standards we file bugs against
              </Link>
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Compliance</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary">
              <li><Link to="/accessibility" className="hover:text-gov-dark transition-colors">Accessibility Statement</Link></li>
              <li><Link to="/policies/data-protection-policy" className="hover:text-gov-dark transition-colors">Privacy Notice</Link></li>
              <li><Link to="/policies/modern-slavery-statement" className="hover:text-gov-dark transition-colors">Modern Slavery Statement</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">All Policies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary">
              <li>
                <span className="block text-xs text-gov-secondary mb-0.5">Fabio Rovai, Deputy Director</span>
                <a href="mailto:fabio@thetesseractacademy.com" className="hover:text-gov-dark transition-colors font-medium">
                  fabio@thetesseractacademy.com
                </a>
              </li>
              <li className="pt-2 text-xs">
                London, UK<br/>
                Kampakis and Co Ltd t/a The Tesseract Academy - Reg: 10459791
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-12">
          <a href="https://aiskillshub.org.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
            <img src="/logos/ai-skills-hub.svg" alt="AI Skills Hub" className="h-8 object-contain" />
            <span className="text-sm text-gov-secondary group-hover:text-gov-dark transition-colors">Training provider on the UK Government AI Skills Hub</span>
          </a>
        </div>
        <div className="border-t border-gov-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gov-secondary">
            &copy; {new Date().getFullYear()} Tesseract Academy. All rights reserved.
          </p>
          <p className="text-xs text-gov-secondary">
             <Link to="/accessibility" className="underline hover:text-gov-dark">Accessibility statement</Link> (WCAG 2.2 AA, fully compliant)
          </p>
        </div>
      </div>
    </footer>
  );
};
