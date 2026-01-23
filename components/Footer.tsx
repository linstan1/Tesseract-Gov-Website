import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gov-border-light mt-auto shadow-soft">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gov-text mb-4 font-serif">Tesseract Academy | Government</h3>
            <p className="text-sm text-gov-secondary max-w-sm leading-relaxed">
              Supporting public sector innovation through research-backed implementation, rapid delivery, and policy-aligned advisory.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gov-text mb-6">Compliance</h4>
            <ul className="space-y-3 text-sm text-gov-secondary">
              <li><Link to="/compliance" className="hover:text-gov-blue transition-colors duration-200 hover:translate-x-1 inline-block">Accessibility Statement</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-blue transition-colors duration-200 hover:translate-x-1 inline-block">Privacy Notice</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-blue transition-colors duration-200 hover:translate-x-1 inline-block">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-gov-blue transition-colors duration-200 hover:translate-x-1 inline-block">Modern Slavery Statement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gov-text mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gov-secondary">
              <li>
                <a href="mailto:procurement@tesseract.academy" className="hover:text-gov-blue transition-colors duration-200 font-medium">
                  procurement@tesseract.academy
                </a>
              </li>
              <li>
                <a href="mailto:security@tesseract.academy" className="hover:text-gov-blue transition-colors duration-200">
                  Security / Disclosure
                </a>
              </li>
              <li className="pt-2 text-xs leading-relaxed">
                London, UK<br/>
                Company Reg: 12345678
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gov-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gov-secondary">
            &copy; {new Date().getFullYear()} Tesseract Academy. All rights reserved.
          </p>
          <p className="text-xs text-gov-secondary">
             Aligned to WCAG 2.1 AA Standards.
          </p>
        </div>
      </div>
    </footer>
  );
};
