import React from 'react';
import { PolicyDocument, PolicyTable, Lines, H2, P, UL, A } from '../../components/PolicyDocument';

export const DataProtectionPolicy: React.FC = () => (
  <PolicyDocument
    title="Data Protection Policy"
    subtitle="Kampakis and Co Ltd (trading as The Tesseract Academy)"
    meta={{
      version: '2.2',
      date: 'January 2026',
      owner: 'Fabio Rovai, Data Protection Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2027',
    }}
  >
    <h2 className={H2}>1. Introduction and Purpose</h2>
    <p className={P}>
      Kampakis and Co Ltd (trading as The Tesseract Academy) is committed to protecting the privacy and security of
      personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act
      2018, both as amended by the Data (Use and Access) Act 2025, the Privacy and Electronic Communications Regulations
      2003 (PECR), and all other applicable data protection legislation. This policy sets out how we collect, process,
      store, and protect personal data and establishes the framework for compliance across all business activities.
    </p>
    <p className={P}>
      Most of the data protection changes made by the Data (Use and Access) Act 2025 came into force on 5 February 2026
      under the Data (Use and Access) Act 2025 (Commencement No. 6 and Transitional and Saving Provisions) Regulations
      2026 (SI 2026/82). The duty to handle complaints from data subjects (section 164A of the Data Protection Act 2018)
      came into force on 19 June 2026. This policy reflects both.
    </p>
    <p className={P}>
      The Tesseract Academy is registered with the UK data protection regulator under registration number ZB715782. On
      30 September 2026 the functions of the Information Commissioner transferred to the Information Commission, which
      now holds that registration. This policy applies to all employees, contractors, consultants, and third-party data
      processors acting on our behalf.
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
      <li><strong>Purpose Limitation:</strong> Personal data shall be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes. Where we consider further processing, we assess compatibility under Article 8A of the UK GDPR.</li>
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
        ['Consent (Art. 6(1)(a))', 'Marketing communications, newsletter subscriptions, and any non-essential cookies or similar technologies not covered by an exception under PECR'],
        ['Contract (Art. 6(1)(b))', 'Processing necessary for client engagements, consultancy contracts, training delivery'],
        ['Legal Obligation (Art. 6(1)(c))', 'Tax records, employment law compliance, regulatory reporting'],
        ['Recognised Legitimate Interest (Art. 6(1)(ea) and Annex 1)', 'Only the purposes listed in Annex 1 of the UK GDPR, such as responding to an emergency, preventing or detecting crime, or safeguarding vulnerable individuals'],
        ['Legitimate Interest (Art. 6(1)(f))', 'Business development and direct marketing to business contacts, internal administration, fraud prevention, and the security of our network and information systems'],
      ]}
    />
    <p className={P}>
      A recognised legitimate interest does not require a balancing test, so we rely on it only where the processing is
      necessary for a purpose that Annex 1 lists. For every other legitimate interest we carry out and record a
      legitimate interests assessment that weighs our interest against the rights and freedoms of the individual.
      Article 6(11) of the UK GDPR confirms that direct marketing, intra-group transmission for internal
      administrative purposes, and network and information security can be legitimate interests, but the balancing
      test still applies to them.
    </p>
    <p className={P}>
      Under PECR as amended by the Data (Use and Access) Act 2025, some storage and access technologies, such as cookies
      used only for statistical analysis of our own website or to improve its functionality, may be used without
      consent if the conditions in Schedule A1 to PECR are met, including giving users clear and comprehensive
      information about the purpose and a simple, free means of objecting. Any other
      non-essential cookie or similar technology is used only with consent.
    </p>

    <h2 className={H2}>5. Data Subject Rights</h2>
    <p className={P}>
      Under the UK GDPR, individuals have the following rights in relation to their personal data. We have procedures
      in place to ensure these rights can be exercised effectively:
    </p>
    <ul className={UL}>
      <li><strong>Right of Access (Art. 15):</strong> Individuals may request a copy of the personal data we hold about them. In response to a Subject Access Request (SAR) we carry out a reasonable and proportionate search for the personal data and other information the individual is entitled to, as Article 15(1A) provides.</li>
      <li><strong>Right to Rectification (Art. 16):</strong> Individuals may request correction of inaccurate or incomplete personal data.</li>
      <li><strong>Right to Erasure (Art. 17):</strong> Individuals may request deletion of their personal data where there is no compelling reason for its continued processing.</li>
      <li><strong>Right to Restrict Processing (Art. 18):</strong> Individuals may request that we restrict the processing of their data in certain circumstances.</li>
      <li><strong>Right to Data Portability (Art. 20):</strong> Individuals may request their data in a structured, commonly used, and machine-readable format.</li>
      <li><strong>Right to Object (Art. 21):</strong> Individuals may object to processing based on legitimate interests and may object to direct marketing at any time.</li>
      <li><strong>Automated Decision-Making (Arts. 22A to 22D):</strong> We do not take significant decisions about individuals, meaning decisions with a legal or similarly significant effect, based solely on automated processing with no meaningful human involvement. If we ever do, we will provide the safeguards Article 22C requires: we will tell the individual about the decision, let them make representations, let them obtain human intervention, and let them contest the decision. We will not take such a decision on the basis of special category data unless Article 22B permits it.</li>
    </ul>
    <p className={P}>
      To exercise any of these rights, individuals should contact us at{' '}
      <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>. We respond within
      one month of the latest of receiving the request, receiving any information we reasonably need to confirm the
      requester&apos;s identity, or receiving any fee that may be charged (Article 12A). Where requests are complex or
      numerous we may extend this by up to two further months, and we will tell the individual why before the first
      month ends. If we reasonably need more information to identify the data or processing a request relates to, we
      will ask for it, and the time until the individual replies does not count towards the deadline.
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
        ['Data protection complaints', '6 years after the complaint is closed', 'Accountability / Limitation Act 1980'],
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
      <li>Where a breach is likely to result in a risk to individuals' rights and freedoms, we will notify the Information Commission within 72 hours of becoming aware of the breach, as required by Article 33 of the UK GDPR.</li>
      <li>Where a breach is likely to result in a high risk to individuals, we will notify affected data subjects without undue delay (Article 34).</li>
      <li>All breaches, whether reportable or not, will be documented in our breach register, including the facts, effects, and remedial actions taken.</li>
    </ul>

    <h2 className={H2}>8. International Data Transfers</h2>
    <p className={P}>
      We transfer personal data outside the UK only where Chapter V of the UK GDPR, as amended by the Data (Use and
      Access) Act 2025, permits it. Under Article 44A a transfer must rely on one of three routes: a country or
      organisation approved by regulations under Article 45A, appropriate safeguards under Article 46, or a derogation
      for a specific situation under Article 49.
    </p>
    <p className={P}>
      Where we rely on appropriate safeguards, such as the International Data Transfer Agreement or the International
      Data Transfer Addendum to the EU Standard Contractual Clauses, we first consider, acting reasonably and
      proportionately, whether the data protection test in Article 46 is met. The test is met if the protection for
      individuals after the transfer would not be materially lower than under UK law. We record this assessment,
      taking into account the nature and volume of the data being transferred.
    </p>

    <h2 className={H2}>9. Data Protection Impact Assessments and Research</h2>
    <p className={P}>
      We conduct Data Protection Impact Assessments (DPIAs) for any processing that is likely to result in a high risk
      to individuals' rights and freedoms, including but not limited to: large-scale processing of special category
      data, systematic monitoring of public areas, and automated decision-making with significant effects. Given our
      work in AI and data science, we pay particular attention to algorithmic fairness and bias when conducting DPIAs
      for machine learning projects.
    </p>
    <p className={P}>
      Where we process personal data for scientific or historical research, archiving in the public interest, or
      statistical purposes, we apply the safeguards in Articles 84A to 84D of the UK GDPR, which replaced Article 89 on
      5 February 2026. We do not use such data to take measures or decisions about a particular individual, we do not
      process it in a way likely to cause substantial damage or substantial distress, and we use data minimisation
      measures such as pseudonymisation.
    </p>

    <h2 className={H2}>10. Training and Awareness</h2>
    <p className={P}>
      All staff receive data protection training upon induction and annually thereafter. Additional specialist training
      is provided to staff whose roles involve significant data processing activities. Training records are maintained
      and reviewed as part of our compliance programme.
    </p>

    <h2 className={H2}>11. Complaints</h2>
    <p className={P}>
      Anyone who considers that we have infringed the UK GDPR in connection with their personal data can complain to
      us, as section 164A of the Data Protection Act 2018 provides. Complaints can be made electronically by email to{' '}
      <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>, or by post to the
      address below. We will:
    </p>
    <ul className={UL}>
      <li>acknowledge the complaint within 30 days of receiving it;</li>
      <li>take appropriate steps to respond to it without undue delay, including making enquiries into the subject matter of the complaint to the extent appropriate;</li>
      <li>keep the complainant informed of progress; and</li>
      <li>tell the complainant the outcome.</li>
    </ul>
    <p className={P}>
      If you remain dissatisfied, you have the right to lodge a complaint with the Information Commission at{' '}
      <a href="https://ico.org.uk" className={A}>ico.org.uk</a> or by calling 0303 123 1113. We ask that you raise your
      complaint with us first so that we have the opportunity to resolve it.
    </p>

    <h2 className={H2}>12. Contact</h2>
    <p className={P}>For any queries regarding this policy or to exercise your data protection rights, please contact:</p>
    <Lines
      lines={[
        ['Data Protection Lead', 'Fabio Rovai'],
        ['Email', <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>],
        ['Address', '5 Brunswick Park Gardens, London, England, N11 1EJ'],
        ['Registration (Information Commission)', 'ZB715782'],
      ]}
    />

    <h2 className={H2}>13. Policy Review</h2>
    <p className={P}>
      This policy is reviewed annually or following any significant changes to our processing activities, relevant
      legislation, or organisational structure. Version 2.2 was reviewed and approved in January 2026 to reflect the
      Data (Use and Access) Act 2025. It was amended in October 2026 to reflect the transfer of the Information
      Commissioner&apos;s functions to the Information Commission on 30 September 2026. The next scheduled review is
      January 2027.
    </p>
  </PolicyDocument>
);
