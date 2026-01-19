import React from 'react';
import { Download, FileText, Mail, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

export const ProcurementShortcuts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gov-bg border-l-4 border-gov-blue p-6 my-8" aria-label="Procurement Shortcuts">
      <h2 className="text-lg font-bold text-gov-text mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-gov-blue" />
        Procurement Officer Shortcuts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
          variant="outline" 
          className="bg-white justify-start"
          onClick={() => window.alert('Downloading Consolidated Procurement Pack (PDF)...')}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Procurement Pack
        </Button>
        <Button 
          variant="outline" 
          className="bg-white justify-start"
          onClick={() => navigate('/compliance')}
        >
          <FileText className="w-4 h-4 mr-2" />
          Policies & Compliance
        </Button>
        <Button 
          variant="outline" 
          className="bg-white justify-start"
          onClick={() => window.location.href = 'mailto:procurement@tesseract.academy'}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Procurement
        </Button>
      </div>
    </div>
  );
};
