import React from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const FRAMEWORKS = [
  { name: 'G-Cloud 13', ref: 'RM1557.13', lots: ['Lot 3: Cloud Support'], status: 'Live' },
  { name: 'Digital Outcomes 6', ref: 'RM1043.8', lots: ['Digital Outcomes', 'User Research Participants'], status: 'Live' },
  { name: 'Analysis for Policy (AfP)', ref: 'Pending', lots: ['Economic Analysis'], status: 'Pending' },
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
                    {fw.status === 'Live' ? (
                      <a href="#" className="text-gov-blue hover:text-gov-blue-dark flex items-center gap-1 font-medium transition-colors">
                        View Listing <ExternalLink className="w-3 h-3" />
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
            <p><span className="font-semibold text-gov-text">Legal Name:</span> Tesseract Academy Ltd</p>
            <p><span className="font-semibold text-gov-text">Company Number:</span> 12345678</p>
            <p><span className="font-semibold text-gov-text">DUNS:</span> 12-345-6789</p>
            <p><span className="font-semibold text-gov-text">VAT Reg:</span> GB 123 456 789</p>
            <p><span className="font-semibold text-gov-text">HQ:</span> 123 Innovation Way, London, UK</p>
            <p><span className="font-semibold text-gov-text">Size:</span> SME</p>
          </div>
          <p className="text-xs text-gov-secondary mt-4 leading-relaxed">
            Click text box to highlight for copy-paste.
          </p>
        </Card>

        <Card title="Procurement Pack">
          <p className="text-gov-secondary mb-8 leading-relaxed">
            Everything you need for due diligence in one place. Includes insurance certificates, policy summaries, and capability statement.
          </p>
          <Button fullWidth onClick={() => alert("Downloading Procurement Pack...")}>
            <Download className="w-5 h-5 mr-2" />
            Download Consolidated Pack (PDF)
          </Button>
          <div className="mt-6 text-center">
             <a href="mailto:procurement@tesseract.academy" className="text-sm text-gov-blue hover:text-gov-blue-dark font-medium inline-flex items-center gap-1 transition-colors">
               <Mail className="w-3 h-3" /> Email for specific clarifications
             </a>
          </div>
        </Card>
      </section>
    </div>
  );
};
