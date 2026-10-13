import React from 'react';
import { PolicyDocument, PolicyTable, Lines, H2, P, UL, A } from '../../components/PolicyDocument';

export const DataProtectionPolicy: React.FC = () => (
  <PolicyDocument
    title="Data Protection Policy"
    subtitle="Kampakis and Co Ltd (trading as The Tesseract Academy)"
    meta={{
      version: '2.1',
      date: 'January 2025',
      owner: 'Fabio Rovai, Data Protection Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2026',
    }}
  >
    <h2 className={H2}>1. Introduction and Purpose</h2>
    <p className={P}>
      Kampakis and Co Ltd (trading as The Tesseract Academy) is committed to protecting the privacy and security of
      personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act
      2018, and all applicable data protection legislation. This policy sets out how we collect, process, store, and
      protect personal data and establishes the framework for compliance across all business activities.
    </p>
    <p className={P}>
      The Tesseract Academy is registered with the Information Commissioner's Office (ICO) under registration number
      ZB715782. This policy applies to all employees, contractors, consultants, and third-party data processors acting
      on our behalf.
    </p>

    <h2 className={H2}>2. Scope</h2>
    <p className={P}>
      This policy applies to all personal data processed by the organisation, whether in electronic or paper form. It
      covers personal data relating to clients, employees, contractors, suppliers, website visitors, and any other
      individuals whose data we process in the course of our business as an AI consultancy and data science training
      provider.
    </p>

    <h2 className={H2}>3. Data Protection Principles</h2>
    <p className={P}>We adhere to the seven key principles of data protection as set out in Article 5 of the UK GDPR:</p>
    <ul className={UL}>
      <li><strong>Lawfulness, Fairness, and Transparency:</strong> Personal data shall be processed lawfully, fairly, and in a transparent manner in relation to the data subject.</li>
      <li><strong>Purpose Limitation:</strong> Personal data shall be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes.</li>
      <li><strong>Data Minimisation:</strong> Personal data shall be adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.</li>
      <li><strong>Accuracy:</strong> Personal data shall be accurate and, where necessary, kept up to date. Every reasonable step must be taken to ensure inaccurate data is erased or rectified without delay.</li>
      <li><strong>Storage Limitation:</strong> Personal data shall be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which it is processed.</li>
      <li><strong>Integrity and Confidentiality:</strong> Personal data shall be processed in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing and against accidental loss, destruction, or damage.</li>
      <li><strong>Accountability:</strong> The data controller shall be responsible for, and be able to demonstrate compliance with, the above principles.</li>
    </ul>

    <h2 className={H2}>4. Lawful Basis for Processing</h2>
    <p className={P}>
      We identify and document the lawful basis for each processing activity before processing begins. The lawful
      bases we rely upon include:
    </p>
    <PolicyTable
      label="Lawful bases for processing"
      head={['Lawful Basis', 'Typical Use']}
      rows={[
        ['Consent (Art. 6(1)(a))', 'Marketing communications, newsletter subscriptions, optional analytics cookies'],
        ['Contract (Art. 6(1)(b))', 'Processing necessary for client engagements, consultancy contracts, training delivery'],
        ['Legal Obligation (Art. 6(1)(c))', 'Tax records, employment law compliance, regulatory reporting'],
        ['Legitimate Interest (Art. 6(1)(f))', 'Business development, fraud prevention, network security, internal administration'],
      ]}
    />

    <h2 className={H2}>5. Data Subject Rights</h2>
    <p className={P}>
      Under the UK GDPR, individuals have the following rights in relation to their personal data. We have procedures
      in place to ensure these rights can be exercised effectively:
    </p>
    <ul className={UL}>
      <li><strong>Right of Access (Art. 15):</strong> Individuals may request a copy of the personal data we hold about them. We will respond to Subject Access Requests (SARs) within one calendar month.</li>
      <li><strong>Right to Rectification (Art. 16):</strong> Individuals may request correction of inaccurate or incomplete personal data.</li>
      <li><strong>Right to Erasure (Art. 17):</strong> Individuals may request deletion of their personal data where there is no compelling reason for its continued processing.</li>
      <li><strong>Right to Restrict Processing (Art. 18):</strong> Individuals may request that we restrict the processing of their data in certain circumstances.</li>
      <li><strong>Right to Data Portability (Art. 20):</strong> Individuals may request their data in a structured, commonly used, and machine-readable format.</li>
      <li><strong>Right to Object (Art. 21):</strong> Individuals may object to processing based on legitimate interests or direct marketing.</li>
      <li><strong>Rights Related to Automated Decision-Making (Art. 22):</strong> Individuals have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects.</li>
    </ul>
    <p className={P}>
      To exercise any of these rights, individuals should contact us at{' '}
      <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>. We will respond
      to all legitimate requests within one month. In complex cases, we may extend this by a further two months, and
      will inform the individual accordingly.
    </p>

    <h2 className={H2}>6. Data Retention</h2>
    <p className={P}>
      We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as
      required by law. Our standard retention periods are:
    </p>
    <PolicyTable
      label="Data retention periods"
      head={['Data Category', 'Retention Period', 'Basis']}
      rows={[
        ['Client contract records', '6 years after contract end', 'Limitation Act 1980'],
        ['Financial/tax records', '7 years', 'HMRC requirements'],
        ['Employee records', '6 years after employment ends', 'Employment law'],
        ['Marketing consent records', 'Until consent withdrawn', 'PECR / UK GDPR'],
        ['Website analytics', '26 months', 'Legitimate interest'],
        ['CCTV / access logs', 'Not applicable (no CCTV)', 'N/A'],
      ]}
    />

    <h2 className={H2}>7. Data Breach Procedures</h2>
    <p className={P}>
      A personal data breach is a breach of security leading to the accidental or unlawful destruction, loss,
      alteration, unauthorised disclosure of, or access to, personal data. In the event of a breach:
    </p>
    <ul className={UL}>
      <li>The breach must be reported internally to the Data Protection Lead within 4 hours of discovery.</li>
      <li>The Data Protection Lead will assess the severity, scope, and risk to individuals.</li>
      <li>Where a breach is likely to result in a risk to individuals' rights and freedoms, we will notify the ICO within 72 hours of becoming aware of the breach, as required by Article 33 of the UK GDPR.</li>
      <li>Where a breach is likely to result in a high risk to individuals, we will notify affected data subjects without undue delay (Article 34).</li>
      <li>All breaches, whether reportable or not, will be documented in our breach register, including the facts, effects, and remedial actions taken.</li>
    </ul>

    <h2 className={H2}>8. International Data Transfers</h2>
    <p className={P}>
      Where we transfer personal data outside the UK, we ensure that appropriate safeguards are in place in accordance
      with Chapter V of the UK GDPR. These safeguards include UK adequacy regulations, Standard Contractual Clauses
      (SCCs) approved by the ICO, or binding corporate rules. We conduct Transfer Impact Assessments where required to
      evaluate the level of data protection in the recipient country.
    </p>

    <h2 className={H2}>9. Data Protection Impact Assessments</h2>
    <p className={P}>
      We conduct Data Protection Impact Assessments (DPIAs) for any processing that is likely to result in a high risk
      to individuals' rights and freedoms, including but not limited to: large-scale processing of special category
      data, systematic monitoring of public areas, and automated decision-making with significant effects. Given our
      work in AI and data science, we pay particular attention to algorithmic fairness and bias when conducting DPIAs
      for machine learning projects.
    </p>

    <h2 className={H2}>10. Training and Awareness</h2>
    <p className={P}>
      All staff receive data protection training upon induction and annually thereafter. Additional specialist training
      is provided to staff whose roles involve significant data processing activities. Training records are maintained
      and reviewed as part of our compliance programme.
    </p>

    <h2 className={H2}>11. Contact and Complaints</h2>
    <p className={P}>For any queries regarding this policy or to exercise your data protection rights, please contact:</p>
    <Lines
      lines={[
        ['Data Protection Lead', 'Fabio Rovai'],
        ['Email', <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>],
        ['Address', '5 Brunswick Park Gardens, London, England, N11 1EJ'],
        ['ICO Registration', 'ZB715782'],
      ]}
    />
    <p className={P}>
      If you are dissatisfied with our handling of your data, you have the right to lodge a complaint with the
      Information Commissioner's Office (ICO) at{' '}
      <a href="https://ico.org.uk" className={A}>ico.org.uk</a> or by calling 0303 123 1113.
    </p>

    <h2 className={H2}>12. Policy Review</h2>
    <p className={P}>
      This policy is reviewed annually or following any significant changes to our processing activities, relevant
      legislation, or organisational structure. The next scheduled review is January 2026.
    </p>
  </PolicyDocument>
);
