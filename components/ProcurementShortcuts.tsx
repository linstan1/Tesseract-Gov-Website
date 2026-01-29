import React from 'react';
import { Download, FileText, Mail, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

export const ProcurementShortcuts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gov-bg border border-gov-border/50 rounded-2xl p-8 my-16" aria-label="Procurement Shortcuts">
      <h2 className="text-sm font-bold text-gov-dark mb-6 flex items-center gap-3 uppercase tracking-widest">
        <div className="w-8 h-8 rounded-lg bg-gov-blue/10 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-gov-blue" />
        </div>
        Procurement Officer Shortcuts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="bg-white justify-start text-sm font-medium py-3"
          onClick={() => window.alert('Downloading Consolidated Procurement Pack (PDF)...')}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Procurement Pack
        </Button>
        <Button
          variant="outline"
          className="bg-white justify-start text-sm font-medium py-3"
          onClick={() => navigate('/compliance')}
        >
          <FileText className="w-4 h-4 mr-2" />
          Policies & Compliance
        </Button>
        <Button
          variant="outline"
          className="bg-white justify-start text-sm font-medium py-3"
          onClick={() => window.location.href = 'mailto:procurement@tesseract.academy'}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Procurement
        </Button>
      </div>
    </div>
  );
};
