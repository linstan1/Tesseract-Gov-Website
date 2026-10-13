import React from 'react';
import { PolicyDocument, Lines, H2, P, UL } from '../../components/PolicyDocument';

export const ModernSlaveryStatement: React.FC = () => (
  <PolicyDocument
    title="Modern Slavery Statement"
    subtitle="Financial Year Ending March 2025"
    meta={{
      version: '1.0',
      date: 'January 2025',
      owner: 'Dr Stylianos Kampakis',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2026',
    }}
  >
    <h2 className={H2}>1. Introduction</h2>
    <p className={P}>
      This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out the steps that Kampakis
      and Co Ltd (trading as The Tesseract Academy) has taken and continues to take to ensure that modern slavery and
      human trafficking are not taking place within our business or supply chains.
    </p>
    <p className={P}>
      Although as a micro-enterprise we are not legally required to publish a modern slavery statement, we choose to do
      so voluntarily as part of our commitment to ethical business practices and in recognition of the expectations of
      our public sector clients.
    </p>

    <h2 className={H2}>2. Organisational Structure and Business</h2>
    <p className={P}>
      Kampakis and Co Ltd (Company Number: 10459791) trades as The Tesseract Academy. We are a UK-based
      SME/micro-enterprise specialising in artificial intelligence consultancy, data science training, and technology
      advisory services. Our registered office is at 5 Brunswick Park Gardens, London, England, N11 1EJ.
    </p>
    <p className={P}>
      Our core activities include: AI strategy consulting for public and private sector organisations; delivery of data
      science and AI training programmes; expert advisory services on responsible AI, data governance, and digital
      transformation; and applied research in machine learning and natural language processing.
    </p>
    <p className={P}>
      We are a small team of highly skilled professionals. As of January 2025, our workforce consists of fewer than 10
      individuals, including the Managing Director, permanent staff, and a small number of specialist associates engaged
      on specific projects.
    </p>

    <h2 className={H2}>3. Our Supply Chains</h2>
    <p className={P}>
      Our supply chains are relatively simple and low-risk given the nature of our professional services business. They
      primarily consist of:
    </p>
    <ul className={UL}>
      <li><strong>Technology providers:</strong> Cloud computing services (e.g., AWS, Google Cloud, Microsoft Azure), software licences, and SaaS platforms. These are major multinational companies with their own modern slavery policies and compliance programmes.</li>
      <li><strong>Professional services:</strong> Specialist subcontractors and associates engaged for specific project deliverables, typically UK-based data scientists, AI engineers, and subject matter experts.</li>
      <li><strong>Office supplies and equipment:</strong> IT hardware, office supplies, and general business consumables sourced from established UK suppliers.</li>
      <li><strong>Training and events:</strong> Venue hire, catering, and event management for training delivery, sourced from UK-based providers.</li>
    </ul>

    <h2 className={H2}>4. Policies in Relation to Modern Slavery</h2>
    <p className={P}>We maintain the following policies that are relevant to our commitment to combating modern slavery:</p>
    <ul className={UL}>
      <li><strong>Anti-Slavery and Human Trafficking Policy:</strong> Sets out our zero-tolerance approach to modern slavery in all forms, including forced labour, debt bondage, human trafficking, and child labour.</li>
      <li><strong>Whistleblowing Policy:</strong> Encourages all staff, associates, and third parties to report concerns about unethical conduct, including potential modern slavery, without fear of retaliation.</li>
      <li><strong>Supplier Code of Conduct:</strong> Requires all suppliers and subcontractors to confirm their compliance with the Modern Slavery Act 2015 and demonstrate adequate due diligence in their own supply chains.</li>
      <li><strong>Equal Opportunities and Dignity at Work Policy:</strong> Ensures fair treatment and prohibits exploitation of any kind.</li>
      <li><strong>Recruitment Policy:</strong> Ensures all employment is voluntary, properly compensated, and compliant with UK employment law, including right-to-work checks.</li>
    </ul>

    <h2 className={H2}>5. Due Diligence Processes</h2>
    <p className={P}>
      We undertake due diligence when considering taking on new suppliers and regularly review existing suppliers. Our
      due diligence process includes:
    </p>
    <ul className={UL}>
      <li>Assessing modern slavery risks as part of our supplier onboarding process.</li>
      <li>Requiring key suppliers to confirm compliance with the Modern Slavery Act 2015.</li>
      <li>Reviewing the modern slavery statements of major suppliers where available.</li>
      <li>Including anti-slavery clauses in contracts with suppliers and subcontractors.</li>
      <li>Maintaining a supplier register that includes risk assessment ratings.</li>
    </ul>

    <h2 className={H2}>6. Risk Assessment</h2>
    <p className={P}>
      We have assessed the risk of modern slavery occurring in our business and supply chains as low, based on the
      following factors:
    </p>
    <ul className={UL}>
      <li>We operate exclusively in the UK professional services sector, which is relatively low-risk for modern slavery.</li>
      <li>Our workforce is small, highly skilled, and well-compensated. All staff and associates are engaged on clear contractual terms with fair pay.</li>
      <li>Our supply chain is short and primarily consists of established technology companies and UK-based professionals.</li>
      <li>We do not operate in sectors identified as high-risk for modern slavery (e.g., agriculture, manufacturing, construction, domestic work).</li>
    </ul>
    <p className={P}>
      Notwithstanding this low-risk assessment, we remain vigilant and committed to taking all reasonable steps to
      prevent modern slavery.
    </p>

    <h2 className={H2}>7. Training</h2>
    <p className={P}>
      All staff receive awareness training on modern slavery as part of their induction. This training covers: the
      definition of modern slavery and its forms; how to identify potential indicators of modern slavery; our reporting
      mechanisms; and our responsibilities under the Modern Slavery Act 2015. Refresher training is provided annually.
    </p>

    <h2 className={H2}>8. Performance Indicators</h2>
    <p className={P}>
      We measure the effectiveness of our approach to combating modern slavery through the following KPIs:
    </p>
    <ul className={UL}>
      <li>100% of staff to complete modern slavery awareness training annually.</li>
      <li>100% of new suppliers subject to modern slavery risk assessment.</li>
      <li>Zero reported incidents of modern slavery in our business or supply chains.</li>
      <li>Annual review and update of this statement and associated policies.</li>
    </ul>

    <h2 className={H2}>9. Approval</h2>
    <p className={P}>
      This statement has been approved by the Board of Directors of Kampakis and Co Ltd and is signed by the Managing
      Director.
    </p>
    <Lines
      lines={[
        ['Signed', 'Dr Stylianos Kampakis'],
        ['Title', 'Managing Director'],
        ['Organisation', 'Kampakis and Co Ltd'],
        ['Date', 'January 2025'],
      ]}
    />
  </PolicyDocument>
);
