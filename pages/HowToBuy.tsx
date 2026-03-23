import React from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const FRAMEWORKS = [
  { name: 'Artificial Intelligence DPS', ref: 'RM6200', lots: ['AI Discovery & Consultancy', 'AI Licensing & Customisation', 'AI End-to-End Partnerships'], status: 'Live', url: 'https://www.crowncommercial.gov.uk/agreements/RM6200' },
  { name: 'Spark DPS', ref: 'RM6094', lots: ['AI & Automation', 'Data', 'Internet of Things (IoT)'], status: 'Live', url: 'https://www.crowncommercial.gov.uk/agreements/RM6094' },
  { name: 'Research & Insights DPS', ref: 'RM6126', lots: ['Research Services', 'Insight & Evidence'], status: 'Live', url: 'https://www.crowncommercial.gov.uk/agreements/RM6126' },
];

export const HowToBuy: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">How to Buy</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Streamlined routes to market for UK and EU public bodies. We are committed to transparent, compliant procurement.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Routes to Market</h2>
        <div className="overflow-x-auto rounded-lg border border-gov-border shadow-soft">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b border-gov-border bg-gov-bg">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold text-gov-text text-xs">Framework / Route</th>
                <th scope="col" className="px-6 py-4 font-semibold text-gov-text text-xs">Reference</th>
                <th scope="col" className="px-6 py-4 font-semibold text-gov-text text-xs">Lots / Categories</th>
                <th scope="col" className="px-6 py-4 font-semibold text-gov-text text-xs">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold text-gov-text text-xs">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border">
              {FRAMEWORKS.map((fw) => (
                <tr key={fw.name} className="bg-white hover:bg-gov-bg transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-gov-text">{fw.name}</td>
                  <td className="px-6 py-4 text-gov-secondary font-mono text-xs">{fw.ref}</td>
                  <td className="px-6 py-4 text-gov-secondary">
                    <ul className="list-disc list-inside space-y-1">
                      {fw.lots.map(lot => <li key={lot}>{lot}</li>)}
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${
                      fw.status === 'Live' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    }`}>
                      {fw.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {fw.url ? (
                      <a href={fw.url} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark flex items-center gap-1 font-medium transition-colors">
                        View Listing<span className="sr-only"> (opens in new tab)</span> <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gov-secondary leading-relaxed">
          * Note: For direct awards under threshold, please contact our commercial team for a compliance check.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Supplier Details" className="bg-gov-bg/50">
          <div className="space-y-3 font-mono text-sm bg-white p-6 border border-gov-border rounded-md select-all">
            <p><span className="font-semibold text-gov-text">Company Name:</span> KAMPAKIS AND CO. LTD t/a The Tesseract Academy</p>
            <p><span className="font-semibold text-gov-text">Company Number:</span> 10459791</p>
            <p><span className="font-semibold text-gov-text">Legal Structure:</span> LTD</p>
            <p><span className="font-semibold text-gov-text">UTR:</span> 9291720006</p>
            <p><span className="font-semibold text-gov-text">VAT Reg:</span> GB 371 4744 89</p>
            <p><span className="font-semibold text-gov-text">Address:</span> 5 Brunswick Park Gardens, London, England, N11 1EJ, Barnet</p>
            <p><span className="font-semibold text-gov-text">DUNS:</span> 222180245</p>
            <p><span className="font-semibold text-gov-text">PPON:</span> PWJP-6874-MXDJ</p>
            <p><span className="font-semibold text-gov-text">ICO:</span> ZB715782</p>
            <p><span className="font-semibold text-gov-text">PIC:</span> 880269472</p>
            <p><span className="font-semibold text-gov-text">Size:</span> SME / Micro</p>
          </div>
        </Card>

      </section>
    </div>
  );
};
