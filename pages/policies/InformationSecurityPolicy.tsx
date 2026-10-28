import React from 'react';
import { PolicyDocument, PolicyTable, Lines, H2, H3, P, UL } from '../../components/PolicyDocument';

export const InformationSecurityPolicy: React.FC = () => (
  <PolicyDocument
    title="Information Security Policy"
    subtitle="Kampakis and Co Ltd (trading as The Tesseract Academy)"
    meta={{
      version: '1.5',
      date: 'January 2026',
      owner: 'Fabio Rovai, Operations Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2027',
    }}
  >
    <h2 className={H2}>1. Purpose and Scope</h2>
    <p className={P}>
      This policy establishes the framework for protecting the confidentiality, integrity, and availability of
      information assets held by Kampakis and Co Ltd (trading as The Tesseract Academy). It applies to all employees,
      contractors, and third parties who access, process, or manage the organisation's information systems and data.
    </p>
    <p className={P}>
      As an AI consultancy and data science training provider, we handle sensitive client data, proprietary
      algorithms, research data, and commercially confidential information. This policy ensures that appropriate
      controls are in place to protect these assets proportionate to the risks identified.
    </p>

    <h2 className={H2}>2. Information Security Objectives</h2>
    <ul className={UL}>
      <li>Protect client data and intellectual property from unauthorised access, disclosure, or loss.</li>
      <li>Ensure business continuity and minimise the impact of security incidents.</li>
      <li>Comply with all applicable legal, regulatory, and contractual requirements including UK GDPR, DPA 2018, and the NIS Regulations 2018.</li>
      <li>Foster a culture of security awareness across all staff and associates.</li>
      <li>Continuously improve our security posture through regular review and assessment.</li>
    </ul>

    <h2 className={H2}>3. Roles and Responsibilities</h2>
    <PolicyTable
      label="Roles and responsibilities"
      head={['Role', 'Responsibility']}
      rows={[
        [<>Managing Director<br />(Dr Stylianos Kampakis)</>, 'Overall accountability for information security. Approves policy and resource allocation.'],
        [<>Operations Lead<br />(Fabio Rovai)</>, 'Day-to-day management of security controls, incident coordination, policy implementation, and compliance monitoring.'],
        ['All Staff & Contractors', 'Comply with this policy and associated procedures. Report security incidents and vulnerabilities promptly.'],
        ['Third-Party Suppliers', 'Adhere to contractual security requirements. Notify us of any incidents affecting our data.'],
      ]}
    />

    <h2 className={H2}>4. Access Control</h2>
    <p className={P}>
      Access to information systems and data is granted on the principle of least privilege. All access is role-based
      and reviewed quarterly.
    </p>
    <ul className={UL}>
      <li>User accounts are created only upon approval from the Operations Lead and are unique to each individual.</li>
      <li>Access rights are reviewed upon role change, project completion, or at least every 90 days.</li>
      <li>Accounts are disabled immediately upon termination of employment or contract.</li>
      <li>Privileged access (administrator accounts) is strictly limited to authorised personnel and subject to enhanced monitoring.</li>
      <li>Multi-factor authentication (MFA) is mandatory for all cloud services, email, and remote access systems.</li>
    </ul>

    <h2 className={H2}>5. Password and Authentication Policy</h2>
    <p className={P}>Strong authentication is fundamental to our security posture. The following requirements apply:</p>
    <ul className={UL}>
      <li>Minimum password length of 14 characters with a combination of uppercase, lowercase, numbers, and special characters.</li>
      <li>Passwords must not be reused across the last 12 password changes.</li>
      <li>Password managers (e.g., 1Password, Bitwarden) are mandatory for storing credentials. Storing passwords in plain text, spreadsheets, or browser auto-fill is prohibited.</li>
      <li>Multi-factor authentication (MFA) using authenticator apps or hardware keys is required for all business-critical systems.</li>
      <li>Service accounts and API keys are rotated at least every 90 days and stored in secure vaults.</li>
    </ul>

    <h2 className={H2}>6. Incident Response</h2>
    <p className={P}>
      All suspected or confirmed security incidents must be reported immediately to the Operations Lead. Our incident
      response process follows four phases:
    </p>
    <h3 className={H3}>6.1 Detection and Reporting</h3>
    <p className={P}>
      Any individual who identifies a potential security incident must report it within 1 hour to the Operations Lead
      via email or phone. Incidents include but are not limited to: unauthorised access, malware infection, data loss,
      phishing attempts, and physical security breaches.
    </p>
    <h3 className={H3}>6.2 Containment</h3>
    <p className={P}>
      The Operations Lead will assess the incident severity and take immediate containment actions, which may include
      isolating affected systems, revoking compromised credentials, and preserving evidence.
    </p>
    <h3 className={H3}>6.3 Investigation and Resolution</h3>
    <p className={P}>
      A thorough investigation will be conducted to determine root cause, scope, and impact. External forensic
      specialists may be engaged for significant incidents. Resolution actions will be documented and tracked.
    </p>
    <h3 className={H3}>6.4 Recovery and Lessons Learned</h3>
    <p className={P}>
      Affected systems will be restored from verified clean backups. A post-incident review will be conducted within 5
      working days, and findings will be used to improve controls and update this policy as needed.
    </p>

    <h2 className={H2}>7. Acceptable Use</h2>
    <p className={P}>All users of the organisation's information systems must:</p>
    <ul className={UL}>
      <li>Use systems and data only for authorised business purposes.</li>
      <li>Not install unauthorised software or connect unapproved devices to the network.</li>
      <li>Not share credentials or allow others to use their accounts.</li>
      <li>Lock screens when away from workstations (automatic lock after 5 minutes).</li>
      <li>Not transmit sensitive data via unencrypted channels (e.g., plain email for confidential data).</li>
      <li>Report any suspicious activity or policy violations immediately.</li>
    </ul>

    <h2 className={H2}>8. Remote Working and Mobile Security</h2>
    <p className={P}>As a remote-first organisation, specific controls are in place for home and mobile working:</p>
    <ul className={UL}>
      <li>All remote connections to company systems must use an encrypted VPN or zero-trust network access (ZTNA) solution.</li>
      <li>Company data must not be stored on personal devices unless those devices meet our minimum security standards (full-disk encryption, up-to-date OS, endpoint protection).</li>
      <li>Work must be conducted in a private setting where screens cannot be observed by unauthorised persons.</li>
      <li>Portable storage devices (USB drives) are prohibited for transferring company data unless encrypted and pre-approved.</li>
    </ul>

    <h2 className={H2}>9. Encryption</h2>
    <p className={P}>Encryption is used to protect data at rest and in transit:</p>
    <ul className={UL}>
      <li><strong>Data at rest:</strong> AES-256 encryption on all storage devices, databases, and backups.</li>
      <li><strong>Data in transit:</strong> TLS 1.2 or higher for all web traffic, email (STARTTLS), and API communications.</li>
      <li><strong>End-to-end encryption:</strong> Used for sharing sensitive client data via approved platforms.</li>
      <li><strong>Key management:</strong> Encryption keys are stored separately from encrypted data and rotated annually.</li>
    </ul>

    <h2 className={H2}>10. Physical Security</h2>
    <p className={P}>As a primarily remote-first micro-enterprise, physical security controls focus on:</p>
    <ul className={UL}>
      <li>Secure home office environments with lockable storage for any physical documents.</li>
      <li>Confidential waste shredding (cross-cut, DIN 66399 Level P-4 minimum).</li>
      <li>Laptop cable locks when working in shared or public spaces.</li>
      <li>No sensitive data stored on local machines beyond encrypted project directories.</li>
    </ul>

    <h2 className={H2}>11. Backup and Business Continuity</h2>
    <p className={P}>Critical data is backed up to encrypted cloud storage with the following schedule:</p>
    <ul className={UL}>
      <li>Daily incremental backups of active project data and email.</li>
      <li>Weekly full backups of all systems.</li>
      <li>Monthly backup restoration tests to verify integrity and recoverability.</li>
      <li>Recovery Point Objective (RPO): 24 hours. Recovery Time Objective (RTO): 4 hours for critical systems.</li>
    </ul>

    <h2 className={H2}>12. Review Schedule</h2>
    <p className={P}>
      This policy is reviewed annually or following a significant security incident, organisational change, or change
      in the threat landscape. The next scheduled review is January 2027.
    </p>
    <Lines
      lines={[
        ['Approved by', 'Dr Stylianos Kampakis, Managing Director'],
        ['Date', 'January 2026'],
      ]}
    />
  </PolicyDocument>
);
