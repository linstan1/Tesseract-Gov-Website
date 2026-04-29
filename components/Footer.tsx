import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gov-border/30 mt-auto">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-base font-bold text-gov-dark mb-4">Tesseract Academy | Government</h3>
            <p className="text-sm text-gov-secondary max-w-md leading-relaxed">
              Supporting public sector innovation through research-backed implementation, rapid delivery, and policy-aligned advisory.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Compliance</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary">
              <li><a href="/policies/accessibility-statement.pdf" className="hover:text-gov-dark transition-colors">Accessibility Statement</a></li>
              <li><a href="/policies/data-protection-policy.pdf" className="hover:text-gov-dark transition-colors">Privacy Notice</a></li>
              <li><a href="/policies/modern-slavery-statement.pdf" className="hover:text-gov-dark transition-colors">Modern Slavery Statement</a></li>
              <li><Link to="/compliance" className="hover:text-gov-dark transition-colors">All Policies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gov-dark mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gov-secondary">
              <li>
                <span className="block text-xs text-gov-secondary mb-0.5">Head of Procurement & Delivery</span>
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
        <div className="border-t border-gov-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
