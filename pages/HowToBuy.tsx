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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="border-b border-gov-border pb-8">
        <h1 className="text-3xl font-bold text-gov-text mb-4">How to Buy</h1>
        <p className="text-xl text-gov-secondary">
          Streamlined routes to market for UK and EU public bodies. We are committed to transparent, compliant procurement.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gov-text mb-6">Routes to Market</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 border-gov-text bg-gov-bg">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold text-gov-text">Framework / Route</th>
                <th scope="col" className="px-6 py-4 font-bold text-gov-text">Reference</th>
                <th scope="col" className="px-6 py-4 font-bold text-gov-text">Lots / Categories</th>
                <th scope="col" className="px-6 py-4 font-bold text-gov-text">Status</th>
                <th scope="col" className="px-6 py-4 font-bold text-gov-text">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border border-b border-gov-border">
              {FRAMEWORKS.map((fw) => (
                <tr key={fw.name} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gov-text">{fw.name}</td>
                  <td className="px-6 py-4 text-gov-secondary font-mono">{fw.ref}</td>
                  <td className="px-6 py-4 text-gov-secondary">
                    <ul className="list-disc list-inside">
                      {fw.lots.map(lot => <li key={lot}>{lot}</li>)}
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      fw.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {fw.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {fw.status === 'Live' ? (
                      <a href="#" className="text-gov-blue hover:underline flex items-center gap-1">
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
        <p className="mt-4 text-sm text-gov-secondary">
          * Note: For direct awards under threshold, please contact our commercial team for a compliance check.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Supplier Details" className="bg-gov-bg border-none">
          <div className="space-y-4 font-mono text-sm bg-white p-4 border border-gov-border rounded-sm select-all">
            <p><span className="font-bold text-gov-text">Legal Name:</span> Tesseract Academy Ltd</p>
            <p><span className="font-bold text-gov-text">Company Number:</span> 12345678</p>
            <p><span className="font-bold text-gov-text">DUNS:</span> 12-345-6789</p>
            <p><span className="font-bold text-gov-text">VAT Reg:</span> GB 123 456 789</p>
            <p><span className="font-bold text-gov-text">HQ:</span> 123 Innovation Way, London, UK</p>
            <p><span className="font-bold text-gov-text">Size:</span> SME</p>
          </div>
          <p className="text-xs text-gov-secondary mt-2">
            Click text box to highlight for copy-paste.
          </p>
        </Card>

        <Card title="Procurement Pack">
          <p className="text-gov-secondary mb-6">
            Everything you need for due diligence in one place. Includes insurance certificates, policy summaries, and capability statement.
          </p>
          <Button fullWidth onClick={() => alert("Downloading Procurement Pack...")}>
            <Download className="w-5 h-5 mr-2" />
            Download Consolidated Pack (PDF)
          </Button>
          <div className="mt-4 text-center">
             <a href="mailto:procurement@tesseract.academy" className="text-sm text-gov-blue hover:underline font-medium inline-flex items-center">
               <Mail className="w-3 h-3 mr-1" /> Email for specific clarifications
             </a>
          </div>
        </Card>
      </section>
    </div>
  );
};
