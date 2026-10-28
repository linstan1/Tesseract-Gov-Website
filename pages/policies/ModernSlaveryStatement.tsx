import React from 'react';
import { Link } from 'react-router-dom';
import { PolicyDocument, Lines, H2, P, UL, A } from '../../components/PolicyDocument';

export const ModernSlaveryStatement: React.FC = () => (
  <PolicyDocument
    title="Modern Slavery Statement"
    subtitle="Financial year 1 December 2024 to 30 November 2025"
    meta={{
      version: '2.0',
      date: 'January 2026',
      owner: 'Dr Stylianos Kampakis',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2027',
    }}
  >
    <h2 className={H2}>1. Introduction</h2>
    <p className={P}>
      This statement sets out the steps that Kampakis and Co Ltd (trading as The Tesseract Academy) has taken during the
      financial year 1 December 2024 to 30 November 2025, and continues to take, to ensure that modern slavery and
      human trafficking are not taking place within our business or supply chains.
    </p>
    <p className={P}>
      Section 54 of the Modern Slavery Act 2015 requires a statement only from organisations with a total turnover of
      £36 million or more. As a micro-enterprise we are below that threshold and are not legally required to publish
      one. We do so voluntarily, as part of our commitment to ethical business practices and in recognition of the
      expectations of our public sector clients. The statement follows the structure recommended in the Home Office
      statutory guidance, Transparency in supply chains: a practical guide, as updated in March 2025.
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
      We are a small team of highly skilled professionals. As of January 2026, our workforce consists of fewer than 10
      individuals, including the Managing Director, employees, and a small number of specialist associates engaged on
      specific projects.
    </p>

    <h2 className={H2}>3. Our Supply Chains</h2>
    <p className={P}>
      Our supply chains are relatively simple given the nature of our professional services business. They primarily
      consist of:
    </p>
    <ul className={UL}>
      <li><strong>Technology providers:</strong> Cloud computing services (e.g., AWS, Google Cloud, Microsoft Azure), software licences, and SaaS platforms. These are major multinational companies that publish their own modern slavery statements.</li>
      <li><strong>Professional services:</strong> Specialist subcontractors and associates engaged for specific project deliverables, typically UK-based data scientists, AI engineers, and subject matter experts.</li>
      <li><strong>IT hardware and office supplies:</strong> Laptops, peripherals, office supplies, and general business consumables sourced from established suppliers.</li>
      <li><strong>Training and events:</strong> Venue hire, catering, and event management for training delivery, sourced from UK-based providers.</li>
    </ul>

    <h2 className={H2}>4. Policies in Relation to Modern Slavery</h2>
    <p className={P}>We maintain the following policies that are relevant to our commitment to combating modern slavery:</p>
    <ul className={UL}>
      <li><strong>Anti-Slavery and Human Trafficking Policy:</strong> Sets out our zero-tolerance approach to modern slavery in all forms, including forced labour, debt bondage, human trafficking, and child labour.</li>
      <li><strong>Whistleblowing Policy:</strong> Encourages all staff, associates, and third parties to report concerns about unethical conduct, including potential modern slavery, without fear of retaliation.</li>
      <li><strong>Supplier Code of Conduct:</strong> Requires suppliers and subcontractors to confirm that they have not committed, and do not tolerate, modern slavery or human trafficking, and to take proportionate steps in their own supply chains.</li>
      <li><strong>Equal Opportunities and Diversity Policy:</strong> Ensures fair treatment and prohibits exploitation of any kind. It is{' '}<Link to="/policies/equal-opportunities-policy" className={A}>published on our website</Link>.</li>
      <li><strong>Recruitment Policy:</strong> Ensures all employment is voluntary, properly compensated, and compliant with UK employment law, including right-to-work checks.</li>
    </ul>

    <h2 className={H2}>5. Due Diligence Processes</h2>
    <p className={P}>
      We undertake due diligence when considering taking on new suppliers and regularly review existing suppliers. Our
      due diligence process includes:
    </p>
    <ul className={UL}>
      <li>Assessing modern slavery risks as part of our supplier onboarding process.</li>
      <li>Requiring key suppliers and subcontractors to confirm that they have not been convicted of an offence under sections 1, 2, 4 or 30 of the Modern Slavery Act 2015, and to disclose any slavery and trafficking prevention or risk order or labour market enforcement order made against them.</li>
      <li>Reviewing the modern slavery statements of major suppliers where available.</li>
      <li>Including anti-slavery clauses in contracts with suppliers and subcontractors.</li>
      <li>Maintaining a supplier register that includes risk assessment ratings.</li>
    </ul>

    <h2 className={H2}>6. Risk Assessment</h2>
    <p className={P}>
      We have assessed the overall risk of modern slavery occurring in our business and supply chains as low, based on
      the following factors:
    </p>
    <ul className={UL}>
      <li>Our operations are UK-based professional services, a sector with a relatively low risk of modern slavery.</li>
      <li>Our workforce is small, highly skilled, and well-compensated. All staff and associates are engaged on clear contractual terms with fair pay.</li>
      <li>Our supply chain is short and primarily consists of established technology companies and UK-based professionals.</li>
      <li>We do not operate in sectors identified as high-risk for modern slavery (e.g., agriculture, manufacturing, construction, domestic work).</li>
    </ul>
    <p className={P}>
      The one area of higher inherent risk is IT hardware. Electronics supply chains, including the extraction of raw
      materials and component manufacture, carry a recognised risk of forced labour. We buy hardware in small volumes
      from established manufacturers and resellers, and we review their modern slavery statements where available.
    </p>
    <p className={P}>
      Notwithstanding this low overall risk, we remain vigilant and committed to taking all reasonable steps to prevent
      modern slavery.
    </p>

    <h2 className={H2}>7. Public Sector Procurement</h2>
    <p className={P}>
      For public contracts let under the Procurement Act 2023, we support contracting authorities in meeting Procurement
      Policy Note 009, Tackling modern slavery in government supply chains, which replaced PPN 02/23 for procurements
      started on or after 24 February 2025. We will complete the Modern Slavery Assessment Tool when asked, accept
      proportionate modern slavery contract clauses and key performance indicators, and provide supply chain information
      where a contract is assessed as higher risk. We will promptly tell any contracting authority if an exclusion ground
      relating to labour market, slavery or human trafficking offences under Schedule 6 or 7 of the Procurement Act 2023
      comes to apply to the company or its director.
    </p>

    <h2 className={H2}>8. Reporting Concerns and Remediation</h2>
    <p className={P}>
      Anyone, including staff, associates, suppliers and members of the public, can report a concern about modern
      slavery connected with our business or supply chains to us at{' '}
      <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>. Reports are
      treated confidentially and investigated promptly. If anyone is in immediate danger we will contact the police on
      999. Where we identify modern slavery in our supply chain, our priority is the safety and welfare of the people
      affected: we will refer the case to the relevant authorities and work with the supplier to remediate it, and we
      will end the relationship if the supplier will not cooperate.
    </p>

    <h2 className={H2}>9. Training</h2>
    <p className={P}>
      All staff receive awareness training on modern slavery as part of their induction. This training covers: the
      definition of modern slavery and its forms; how to identify potential indicators of modern slavery; our reporting
      mechanisms; and our responsibilities under the Modern Slavery Act 2015. Refresher training is provided annually.
    </p>

    <h2 className={H2}>10. Performance Indicators</h2>
    <p className={P}>
      We measure the effectiveness of our approach to combating modern slavery through the following KPIs:
    </p>
    <ul className={UL}>
      <li>100% of staff to complete modern slavery awareness training annually.</li>
      <li>100% of new suppliers subject to modern slavery risk assessment.</li>
      <li>Zero reported incidents of modern slavery in our business or supply chains.</li>
      <li>Annual review and update of this statement and associated policies.</li>
    </ul>

    <h2 className={H2}>11. Changes Since Our Last Statement</h2>
    <ul className={UL}>
      <li>The statement now follows the March 2025 update to the Home Office statutory guidance, including sections on remediation and on changes since the previous statement.</li>
      <li>The reporting period now matches our financial year, which ends on 30 November.</li>
      <li>Supplier confirmations now refer to the specific offences under the Modern Slavery Act 2015, since most of our suppliers are below the section 54 reporting threshold.</li>
      <li>We added a section on public sector procurement under the Procurement Act 2023 and PPN 009, and identified IT hardware as our one area of higher inherent risk.</li>
    </ul>

    <h2 className={H2}>12. Approval</h2>
    <p className={P}>
      This statement covers the financial year 1 December 2024 to 30 November 2025. It was approved in January 2026 by
      Dr Stylianos Kampakis, sole director of Kampakis and Co Ltd, on behalf of the board, and is signed by the
      Managing Director. It was amended in October 2026 to correct the name of our published equal opportunities
      policy. The next statement, covering the financial year ending 30 November 2026, is due by January 2027.
    </p>
    <Lines
      lines={[
        ['Signed', 'Dr Stylianos Kampakis'],
        ['Title', 'Managing Director'],
        ['Organisation', 'Kampakis and Co Ltd'],
        ['Date', 'January 2026'],
      ]}
    />
  </PolicyDocument>
);
