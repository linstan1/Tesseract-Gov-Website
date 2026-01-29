import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gov-border/30 mt-auto">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-base font-bold text-gov-dark mb-4">Tesseract Academy | Government</h3>
            <p className="text-sm text-gov-secondary/80 max-w-md leading-relaxed">
              Supporting public sector innovation through research-backed implementation, rapid delivery, and policy-aligned advisory.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Compliance</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary/80">
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">Accessibility Statement</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">Privacy Notice</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">Modern Slavery Statement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary/80">
              <li>
                <a href="mailto:procurement@tesseract.academy" className="hover:text-gov-dark transition-colors font-medium">
                  procurement@tesseract.academy
                </a>
              </li>
              <li>
                <a href="mailto:security@tesseract.academy" className="hover:text-gov-dark transition-colors">
                  Security / Disclosure
                </a>
              </li>
              <li className="pt-2 text-xs">
                London, UK<br/>
                Company Reg: 12345678
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gov-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gov-secondary/60">
            &copy; {new Date().getFullYear()} Tesseract Academy. All rights reserved.
          </p>
          <p className="text-xs text-gov-secondary/60">
             Aligned to WCAG 2.1 AA Standards.
          </p>
        </div>
      </div>
    </footer>
  );
};
