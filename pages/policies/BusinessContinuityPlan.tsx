import React from 'react';
import { PolicyDocument, PolicyTable, Lines, H2, P, UL } from '../../components/PolicyDocument';

export const BusinessContinuityPlan: React.FC = () => (
  <PolicyDocument
    title="Business Continuity Plan"
    subtitle="Continuity of service for a remote-first AI consultancy and training provider"
    meta={{
      version: '1.0',
      date: 'June 2026',
      owner: 'Fabio Rovai, Operations Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2027',
    }}
  >
    <h2 className={H2}>1. Purpose and Scope</h2>
    <p className={P}>
      This Business Continuity Plan sets out how Kampakis and Co Ltd (trading as The Tesseract Academy) maintains
      continuity of service to clients during disruption. It covers all delivery, data and personnel functions of our
      remote-first operating model and applies to all staff and associates. It is reviewed annually and after any
      significant incident or organisational change.
    </p>

    <h2 className={H2}>2. Business Continuity Objectives</h2>
    <ul className={UL}>
      <li>Maintain delivery of contracted services to agreed service levels during disruption.</li>
      <li>Protect the confidentiality, integrity and availability of client and personal data.</li>
      <li>Restore any disrupted critical function within the recovery objectives below.</li>
    </ul>
    <PolicyTable
      label="Recovery objectives for critical functions"
      head={['Critical function', 'Recovery Time Objective (RTO)', 'Recovery Point Objective (RPO)']}
      rows={[
        ['Client communications', '4 hours', 'Not applicable'],
        ['Access to project data and deliverables', '8 hours', '24 hours'],
        ['Cloud-hosted delivery platforms', '8 hours', '24 hours'],
        ['Payroll and supplier payments', '2 business days', 'Not applicable'],
      ]}
    />

    <h2 className={H2}>3. Risk Scenarios and Responses</h2>
    <PolicyTable
      label="Risk scenarios and responses"
      head={['Scenario', 'Response']}
      rows={[
        ['Key-person unavailability', 'A named deputy is assigned to every accountable delivery role, with documented handover packs. Our vetted associate network provides surge cover. There is no single point of delivery failure.'],
        ['IT or cloud outage', 'Cloud-hosted, geographically redundant infrastructure; data backed up to an independent provider; alternative connectivity (mobile tethering) for remote staff.'],
        ['Cyber incident or data breach', 'Cyber Essentials controls and an ISO 27001-aligned incident-response procedure. Isolate, assess, restore from backup, notify affected parties, and notify the ICO within 72 hours where required (ICO registration ZB715782).'],
        ['Loss of premises', 'Not applicable. The fully remote operating model has no single physical dependency.'],
        ['Supplier or subcontractor failure', 'Pre-qualified alternative suppliers, contractual continuity clauses, and critical sub-contracts kept below single-point-of-failure thresholds.'],
        ['Pandemic or widespread disruption', 'The remote-first model continues unaffected, as demonstrated in normal operations.'],
      ]}
    />

    <h2 className={H2}>4. Data Backup and Recovery</h2>
    <p className={P}>
      All client deliverables and operational data are held in cloud storage with version history and replicated
      backups held with an independent provider. Backups are tested for restorability on a quarterly basis. Recovery
      follows the objectives set out in Section 2.
    </p>

    <h2 className={H2}>5. Communications</h2>
    <p className={P}>
      In a continuity event, the document owner notifies affected clients via their nominated contact within the
      Recovery Time Objective for client communications. Where the disruption affects a public-sector framework
      call-off, the relevant Approved Organisation is contacted through the agreed call-off contact and, where
      applicable, the procurement portal event messaging.
    </p>

    <h2 className={H2}>6. Testing, Maintenance and Governance</h2>
    <p className={P}>
      This plan is reviewed at least annually and after any significant incident or organisational change. A tabletop
      walkthrough test is conducted at least annually, and lessons learned are incorporated into the next version. The
      plan is owned by the Operations Lead and approved by the Managing Director.
    </p>
    <Lines
      lines={[
        ['Signed', 'Dr Stylianos Kampakis'],
        ['Title', 'Managing Director, Kampakis and Co Ltd'],
        ['Date', 'June 2026'],
      ]}
    />
    <p className={P}>This Business Continuity Plan is published on our website and will be reviewed annually.</p>
  </PolicyDocument>
);
