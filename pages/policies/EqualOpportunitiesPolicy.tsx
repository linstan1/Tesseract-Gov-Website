import React from 'react';
import { PolicyDocument, Lines, H2, P, UL } from '../../components/PolicyDocument';

export const EqualOpportunitiesPolicy: React.FC = () => (
  <PolicyDocument
    title="Equal Opportunities and Diversity Policy"
    subtitle="Kampakis and Co Ltd (trading as The Tesseract Academy)"
    meta={{
      version: '1.0',
      date: 'June 2026',
      owner: 'Fabio Rovai, Operations Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'June 2027',
    }}
  >
    <h2 className={H2}>1. Policy statement and commitment</h2>
    <p className={P}>
      Kampakis and Co Ltd is committed to equality of opportunity, diversity and inclusion in all of its activities. We
      oppose all forms of unlawful and unfair discrimination and are committed to treating all staff, associates,
      clients, suppliers and the people affected by our work with dignity and respect. We comply fully with the Equality
      Act 2010 and apply this policy across recruitment, selection, engagement, development, the delivery of our
      services and the design of the solutions we build.
    </p>

    <h2 className={H2}>2. Scope</h2>
    <p className={P}>
      This policy applies to all directors, employees, associates and sub-contractors of the organisation, and to our
      conduct towards clients, partners and members of the public. As a provider of artificial intelligence and data
      services, we also apply equality and inclusion principles to the design and testing of our solutions, including
      testing for bias across protected characteristics.
    </p>

    <h2 className={H2}>3. Protected characteristics</h2>
    <p className={P}>
      We will not discriminate against, harass or victimise any person on the grounds of any protected characteristic
      under the Equality Act 2010:
    </p>
    <ul className={UL}>
      <li>Age</li>
      <li>Disability</li>
      <li>Gender reassignment</li>
      <li>Marriage and civil partnership</li>
      <li>Pregnancy and maternity</li>
      <li>Race (including colour, nationality, ethnic or national origin)</li>
      <li>Religion or belief</li>
      <li>Sex</li>
      <li>Sexual orientation</li>
    </ul>

    <h2 className={H2}>4. Our commitments in practice</h2>
    <ul className={UL}>
      <li>Recruitment and selection based solely on merit and objective criteria, with reasonable adjustments provided for disabled applicants and staff.</li>
      <li>Fair treatment in development, reward, engagement and progression, free from bias.</li>
      <li>An inclusive working environment in which harassment, bullying and victimisation are not tolerated and are addressed promptly.</li>
      <li>Accessible delivery: our digital services are developed to WCAG 2.2 AA, audited with Vision Ability CIC, so the people who use them are not excluded.</li>
      <li>Inclusive solution design: we test AI solutions for bias and representativeness across protected characteristics so they do not embed or widen inequalities.</li>
      <li>Public engagement that centres under-represented and minoritised communities in the work we deliver.</li>
    </ul>

    <h2 className={H2}>5. Responsibilities</h2>
    <p className={P}>
      Overall responsibility for this policy rests with the Managing Director. All staff and associates are responsible
      for acting in accordance with it. Any person who believes they have been subject to discrimination, harassment or
      victimisation may raise the matter with the Operations Lead, and it will be investigated promptly and
      confidentially.
    </p>

    <h2 className={H2}>6. Monitoring and review</h2>
    <p className={P}>
      We monitor the application of this policy and review it at least annually, and following any significant change
      in legislation or in the organisation. Where the gender pay gap reporting threshold applies, we comply with the
      relevant regulations.
    </p>
    <Lines
      lines={[
        ['Signed', 'Dr Stylianos Kampakis'],
        ['Title', 'Managing Director, Kampakis and Co Ltd'],
        ['Date', 'June 2026'],
      ]}
    />
    <p className={P}>
      This Equal Opportunities and Diversity Policy is published on our website and reviewed annually.
    </p>
  </PolicyDocument>
);
