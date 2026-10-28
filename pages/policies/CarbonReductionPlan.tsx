import React from 'react';
import { PolicyDocument, PolicyTable, Lines, H2, H3, P, UL } from '../../components/PolicyDocument';

export const CarbonReductionPlan: React.FC = () => (
  <PolicyDocument
    title="Carbon Reduction Plan"
    subtitle="In accordance with PPN 06/21"
    meta={{
      version: '1.2',
      date: 'January 2026',
      owner: 'Fabio Rovai, Operations Lead',
      approvedBy: 'Dr Stylianos Kampakis',
      nextReview: 'January 2027',
    }}
  >
    <h2 className={H2}>1. Commitment to Net Zero</h2>
    <p className={P}>
      Kampakis and Co Ltd (trading as The Tesseract Academy) is committed to achieving Net Zero greenhouse gas emissions
      by 2050, in line with UK Government targets and the Paris Agreement. We recognise our responsibility to minimise
      our environmental impact and are taking proactive steps to reduce our carbon footprint across all areas of our
      operations.
    </p>
    <p className={P}>
      This Carbon Reduction Plan has been prepared in accordance with Procurement Policy Note 06/21 (PPN 06/21) and
      outlines our current greenhouse gas emissions, reduction targets, and the measures we are implementing to achieve
      those targets.
    </p>

    <h2 className={H2}>2. Baseline Emissions</h2>
    <p className={P}>
      Our baseline emissions have been calculated for the financial year 2022/23. As a micro-enterprise providing
      professional services (AI consultancy and training), our emissions profile is dominated by Scope 2 (purchased
      electricity) and Scope 3 (indirect emissions from our value chain) rather than Scope 1 (direct emissions).
    </p>
    <PolicyTable
      label="Baseline emissions, financial year 2022/23"
      head={['Emissions Source', 'Scope', 'Baseline (tCO2e)', 'Notes']}
      rows={[
        ['Company vehicles', 'Scope 1', '0.0', 'No company vehicles'],
        ['Natural gas (heating)', 'Scope 1', '0.0', 'No dedicated office premises'],
        ['Purchased electricity', 'Scope 2', '0.8', 'Home office energy usage (apportioned)'],
        ['Business travel', 'Scope 3', '2.1', 'Flights, rail, taxis for client meetings and conferences'],
        ['Employee commuting', 'Scope 3', '0.3', 'Minimal due to remote-first model'],
        ['Cloud computing', 'Scope 3', '1.5', 'AWS, GCP, Azure usage for AI/ML workloads'],
        ['Purchased goods & services', 'Scope 3', '0.6', 'IT equipment, software licences, office supplies'],
        [<strong>Total Baseline</strong>, '', <strong>5.3</strong>, ''],
      ]}
    />

    <h2 className={H2}>3. Current Emissions (2024/25)</h2>
    <p className={P}>
      Our current emissions for the reporting period 2024/25 show a reduction against the baseline, primarily driven by
      our remote-first working model and deliberate reduction in air travel:
    </p>
    <PolicyTable
      label="Current emissions, 2024/25"
      head={['Emissions Source', 'Scope', 'Current (tCO2e)', 'Change vs Baseline']}
      rows={[
        ['Scope 1 (Direct)', 'Scope 1', '0.0', 'No change'],
        ['Scope 2 (Electricity)', 'Scope 2', '0.6', '-25% (green tariff)'],
        ['Scope 3 (Business travel)', 'Scope 3', '1.2', '-43% (virtual meetings)'],
        ['Scope 3 (Cloud computing)', 'Scope 3', '1.3', '-13% (efficient workloads)'],
        ['Scope 3 (Other)', 'Scope 3', '0.7', '-22%'],
        [<strong>Total Current</strong>, '', <strong>3.8</strong>, <strong>-28% overall</strong>],
      ]}
    />

    <h2 className={H2}>4. Carbon Reduction Measures</h2>
    <p className={P}>We have implemented and continue to develop the following measures to reduce our carbon emissions:</p>

    <h3 className={H3}>4.1 Remote-First Working Model</h3>
    <p className={P}>
      Our default operating model is remote-first. All staff work primarily from home, eliminating daily commuting
      emissions and the energy costs of dedicated office space. We use collaborative tools (Microsoft Teams, Slack,
      Google Workspace) to maintain productivity without physical co-location. This single measure accounts for the
      majority of our emissions avoidance compared to a traditional office-based consultancy.
    </p>

    <h3 className={H3}>4.2 Sustainable Travel Policy</h3>
    <p className={P}>We have implemented a sustainable travel policy that prioritises:</p>
    <ul className={UL}>
      <li>Virtual meetings as the default for all client interactions and internal collaboration.</li>
      <li>Rail travel over air travel for UK destinations.</li>
      <li>Public transport over private vehicles for local travel.</li>
      <li>Air travel only when no viable alternative exists, with carbon offsetting for all flights.</li>
    </ul>

    <h3 className={H3}>4.3 Cloud Computing Efficiency</h3>
    <p className={P}>
      As an AI consultancy, cloud computing for machine learning workloads represents a significant portion of our
      Scope 3 emissions. We are reducing this through:
    </p>
    <ul className={UL}>
      <li>Selecting cloud regions powered by renewable energy where available.</li>
      <li>Optimising ML model training pipelines to reduce computation time and energy consumption.</li>
      <li>Using spot/preemptible instances to improve resource utilisation.</li>
      <li>Implementing auto-scaling and automatic shutdown of idle resources.</li>
      <li>Monitoring cloud carbon footprint using provider tools (AWS Carbon Footprint, Google Cloud Carbon Sense).</li>
    </ul>

    <h3 className={H3}>4.4 Procurement and Supply Chain</h3>
    <p className={P}>We consider environmental impact in our procurement decisions:</p>
    <ul className={UL}>
      <li>Preferring suppliers with published carbon reduction plans and Net Zero commitments.</li>
      <li>Extending the lifecycle of IT equipment through maintenance, repair, and refurbishment.</li>
      <li>Responsible disposal of IT equipment through certified WEEE recycling schemes.</li>
      <li>Paperless operations: all documentation is digital by default.</li>
    </ul>

    <h3 className={H3}>4.5 Green Energy</h3>
    <p className={P}>
      We encourage all home-based workers to switch to 100% renewable energy tariffs and provide a green energy
      allowance to facilitate this. The Operations Lead has verified that the primary home offices used for company
      work are now on certified green electricity tariffs.
    </p>

    <h2 className={H2}>5. Future Targets</h2>
    <PolicyTable
      label="Future emissions targets"
      head={['Target Year', 'Target (tCO2e)', 'Reduction vs Baseline', 'Key Actions']}
      rows={[
        ['2025/26', '3.2', '-40%', '100% green energy, further travel reduction'],
        ['2027/28', '2.5', '-53%', 'Carbon-aware cloud scheduling, sustainable procurement policy'],
        ['2030/31', '1.5', '-72%', 'Near-zero travel, fully optimised cloud, supply chain engagement'],
        ['2040/41', '0.5', '-91%', 'Residual emissions only, offsetting for remainder'],
        ['2050', '0.0 (Net Zero)', '-100%', 'Full Net Zero achieved'],
      ]}
    />

    <h2 className={H2}>6. Declaration and Sign-Off</h2>
    <p className={P}>
      This Carbon Reduction Plan has been completed in accordance with PPN 06/21 and associated guidance, and reporting
      standard for Carbon Reduction Plans.
    </p>
    <p className={P}>
      Emissions have been reported and recorded in accordance with the published reporting standard for Carbon
      Reduction Plans and the GHG Reporting Protocol corporate standard. This Carbon Reduction Plan has been reviewed
      and signed off by the board of Kampakis and Co Ltd.
    </p>
    <Lines
      lines={[
        ['Signed', 'Dr Stylianos Kampakis'],
        ['Title', 'Managing Director'],
        ['Date', 'January 2026'],
      ]}
    />
    <p className={P}>
      This Carbon Reduction Plan is published on our website at thetesseractacademy.com and will be updated annually.
    </p>
  </PolicyDocument>
);
