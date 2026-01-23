import React from 'react';
import { Download, FileText, Mail, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

export const ProcurementShortcuts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-gov-blue/5 to-gov-blue-light/5 border-l-4 border-gov-blue rounded-r-xl p-8 my-8 shadow-soft" aria-label="Procurement Shortcuts">
      <h2 className="text-lg font-bold text-gov-text mb-6 flex items-center gap-3 font-serif">
        <div className="w-10 h-10 rounded-lg bg-gov-blue/10 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-gov-blue" />
        </div>
        Procurement Officer Shortcuts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="bg-white justify-start hover:scale-100"
          onClick={() => window.alert('Downloading Consolidated Procurement Pack (PDF)...')}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Procurement Pack
        </Button>
        <Button
          variant="outline"
          className="bg-white justify-start hover:scale-100"
          onClick={() => navigate('/compliance')}
        >
          <FileText className="w-4 h-4 mr-2" />
          Policies & Compliance
        </Button>
        <Button
          variant="outline"
          className="bg-white justify-start hover:scale-100"
          onClick={() => window.location.href = 'mailto:procurement@tesseract.academy'}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Procurement
        </Button>
      </div>
    </div>
  );
};
