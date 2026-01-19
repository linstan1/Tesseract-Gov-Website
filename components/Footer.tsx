import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gov-bg border-t border-gov-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gov-text mb-4">Tesseract Academy | Government</h3>
            <p className="text-sm text-gov-secondary max-w-sm">
              Supporting public sector innovation through research-backed implementation, rapid delivery, and policy-aligned advisory.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gov-text mb-4">Compliance</h4>
            <ul className="space-y-3 text-sm text-gov-secondary">
              <li><Link to="/compliance" className="hover:underline hover:text-gov-blue">Accessibility Statement</Link></li>
              <li><Link to="/compliance" className="hover:underline hover:text-gov-blue">Privacy Notice</Link></li>
              <li><Link to="/compliance" className="hover:underline hover:text-gov-blue">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:underline hover:text-gov-blue">Modern Slavery Statement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gov-text mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gov-secondary">
              <li>
                <a href="mailto:procurement@tesseract.academy" className="hover:underline hover:text-gov-blue font-medium">
                  procurement@tesseract.academy
                </a>
              </li>
              <li>
                <a href="mailto:security@tesseract.academy" className="hover:underline hover:text-gov-blue">
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
        <div className="border-t border-gov-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gov-secondary">
            &copy; {new Date().getFullYear()} Tesseract Academy. All rights reserved.
          </p>
          <p className="text-xs text-gov-secondary mt-2 md:mt-0">
             Aligned to WCAG 2.1 AA Standards.
          </p>
        </div>
      </div>
    </footer>
  );
};
