import React, { useEffect } from 'react';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'about-person-jsonld';
    script.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dr Stylianos Kampakis',
        jobTitle: 'Managing Director',
        worksFor: {
          '@type': 'Organization',
          name: 'Kampakis and Co Ltd',
          alternateName: 'Tesseract Academy',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'University College London',
        },
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'PhD Machine Learning, UCL' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Chartered Statistician (CStat), Royal Statistical Society' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'membership', name: 'Fellow, Royal Statistical Society (FRSS)' },
        ],
        affiliation: [
          { '@type': 'Organization', name: 'UCL Centre for Blockchain Technologies', roleName: 'Honorary Research Fellow' },
          { '@type': 'Organization', name: 'London Business School', roleName: 'Data Science Advisor' },
          { '@type': 'Organization', name: 'Department for Business and Trade', roleName: 'Partner' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Fabio Rovai',
        honorificSuffix: 'MSc',
        jobTitle: 'Associate Lecturer and Delivery Lead',
        worksFor: {
          '@type': 'Organization',
          name: 'Kampakis and Co Ltd',
          alternateName: 'Tesseract Academy',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'University of the Arts London',
        },
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MSc Data Science and AI, University of the Arts London' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'DBS Enhanced Check (Children and Adults)' },
        ],
        affiliation: [
          { '@type': 'Organization', name: 'NeurIPS', roleName: 'Ethics Reviewer' },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('about-person-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">About Tesseract Academy</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Kampakis and Co Ltd (trading as Tesseract Academy) is a research-backed AI and data science consultancy incorporated in November 2016. We deliver evidence-based AI governance, public sector analytics, and procurement-ready advisory services to UK central government, devolved administrations, and Horizon Europe consortia. Our team holds active Crown Commercial Service (CCS) framework appointments across three lots and is published in peer-reviewed journals cited by UK government policy.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Mission</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          We exist to close the gap between frontier AI research and effective public sector implementation. Every engagement is grounded in evidence-based methodology: we gather data before we prescribe, we validate before we scale, and we transfer capability so that client teams own outcomes rather than depend on external consultants. Our work on AI governance, procurement strategy, and research design is designed to meet the UK Government's Digital, Data and Technology (DDaT) standards and the Cabinet Office Functional Standard GovS 005.
        </p>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          Since 2016 we have delivered across more than 30 distinct public sector and government-funded programmes. Our published research has been cited in Senedd committee proceedings and referenced by Skills England alongside institutions including The Alan Turing Institute. We treat every client relationship as a long-term partnership: we build reusable frameworks, open-source tools, and internal capability so that value persists after the contract ends.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">The Team</h2>

        <Card className="border-l-2 border-l-gov-blue">
          <h3 className="text-2xl font-bold text-gov-dark mb-1 font-serif">Dr Stylianos Kampakis</h3>
          <p className="text-sm font-semibold text-gov-blue mb-4 uppercase tracking-wider">Managing Director</p>
          <p className="text-gov-dark leading-relaxed text-base mb-4">
            Dr Kampakis holds a PhD in Machine Learning from University College London (UCL) and is a Chartered Statistician (CStat) and Fellow of the Royal Statistical Society (FRSS). He is an Honorary Research Fellow at the UCL Centre for Blockchain Technologies and a Data Science Advisor at London Business School. He has published more than 40 peer-reviewed journal articles, authored 3 books on data science and tokenomics, and delivered the official UK Government Business Academy AI webinar series (Department for Business and Trade, 2025) — a three-part programme reaching UK businesses through the government's own Business Academy platform.
          </p>
          <p className="text-gov-dark leading-relaxed text-base">
            Dr Kampakis is a Department for Business and Trade partner and has contributed expert evidence to the Financial Conduct Authority and to UK parliamentary proceedings. His OCT (Objectives-Capabilities-Tools) methodology for AI strategy has been adopted by public and private sector clients across 12 countries.
          </p>
        </Card>

        <Card className="border-l-2 border-l-gov-blue">
          <h3 className="text-2xl font-bold text-gov-dark mb-1 font-serif">Fabio Rovai MSc</h3>
          <p className="text-sm font-semibold text-gov-blue mb-4 uppercase tracking-wider">Associate Lecturer and Delivery Lead</p>
          <p className="text-gov-dark leading-relaxed text-base mb-4">
            Fabio Rovai holds an MSc in Data Science and AI from the University of the Arts London. He is an Associate Lecturer across 5 higher education programmes with more than 1,000 students taught, and serves as an Ethics Reviewer for NeurIPS — the world's premier machine learning conference, receiving more than 15,000 submissions annually. He holds an Enhanced DBS check covering both Children and Adults.
          </p>
          <p className="text-gov-dark leading-relaxed text-base">
            Fabio leads delivery on active government contracts including BridgeAI (Innovate UK), the National Digital Twin Programme (Department for Business and Trade), and the Welsh Government land valuation research programme. His expertise spans research design, AI governance tooling, and responsible AI deployment aligned with the EU AI Act and NIST AI RMF.
          </p>
        </Card>

        <Card className="border-l-2 border-l-gov-blue">
          <h3 className="text-2xl font-bold text-gov-dark mb-1 font-serif">Principal Consultant (DV Cleared)</h3>
          <p className="text-sm font-semibold text-gov-blue mb-4 uppercase tracking-wider">Senior Technical Advisor</p>
          <p className="text-gov-dark leading-relaxed text-base">
            Our team includes a Developed Vetting (DV) cleared Principal Consultant available for OFFICIAL-SENSITIVE and SECRET-classified programmes. This resource enables Tesseract Academy to support classified data environments, secure infrastructure assessments, and sensitive policy advisory work without requiring client-side security arrangements beyond standard onboarding. DV clearance details are available to contracting authorities on request under appropriate non-disclosure terms.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Team Credentials at a Glance</h2>
        <div className="overflow-x-auto rounded-xl border border-gov-border/50">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/50">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Credential</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Dr Stylianos Kampakis</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Fabio Rovai MSc</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">DV-Cleared Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Highest Qualification</td>
                <td className="px-6 py-4 text-gov-dark">PhD Machine Learning (UCL)</td>
                <td className="px-6 py-4 text-gov-dark">MSc Data Science and AI (UAL)</td>
                <td className="px-6 py-4 text-gov-secondary">On request</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Professional Body</td>
                <td className="px-6 py-4 text-gov-dark">FRSS, CStat (Royal Statistical Society)</td>
                <td className="px-6 py-4 text-gov-dark">NeurIPS Ethics Reviewer</td>
                <td className="px-6 py-4 text-gov-secondary">On request</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Academic Affiliation</td>
                <td className="px-6 py-4 text-gov-dark">UCL Centre for Blockchain Technologies; London Business School</td>
                <td className="px-6 py-4 text-gov-dark">Associate Lecturer, 5 HE programmes</td>
                <td className="px-6 py-4 text-gov-secondary">Not disclosed</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Government Engagement</td>
                <td className="px-6 py-4 text-gov-dark">DBT Business Academy webinars (2025); FCA consultation; DBT Partner</td>
                <td className="px-6 py-4 text-gov-dark">BridgeAI; NDTP; Welsh Government</td>
                <td className="px-6 py-4 text-gov-dark">OFFICIAL-SENSITIVE; SECRET</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Security Clearance</td>
                <td className="px-6 py-4 text-gov-dark">SC eligible</td>
                <td className="px-6 py-4 text-gov-dark">Enhanced DBS (Children and Adults)</td>
                <td className="px-6 py-4 text-gov-dark">Developed Vetting (DV)</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Publications</td>
                <td className="px-6 py-4 text-gov-dark">40+ peer-reviewed articles; 3 books</td>
                <td className="px-6 py-4 text-gov-dark">Conference contributions; open-source tools</td>
                <td className="px-6 py-4 text-gov-secondary">Not disclosed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Company Credentials</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          Kampakis and Co Ltd is a registered UK company (company number 10459791), incorporated on 2 November 2016 and registered for VAT (GB 371 4744 89). We hold three active Crown Commercial Service framework appointments, giving public bodies a direct, compliant procurement route without a further competition where regulations permit. All credentials below are verifiable through the named public registries.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gov-border/50">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/50">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Category</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Detail</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Reference / Registry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Legal Name</td>
                <td className="px-6 py-4 text-gov-dark">Kampakis and Co Ltd</td>
                <td className="px-6 py-4 text-gov-dark">Companies House: 10459791</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Trading Name</td>
                <td className="px-6 py-4 text-gov-dark">The Tesseract Academy</td>
                <td className="px-6 py-4 text-gov-secondary">Incorporated 2 November 2016</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">CCS Framework: AI</td>
                <td className="px-6 py-4 text-gov-dark">RM6200 — Artificial Intelligence Dynamic Purchasing System</td>
                <td className="px-6 py-4 text-gov-dark">Crown Commercial Service</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">CCS Framework: Digital</td>
                <td className="px-6 py-4 text-gov-dark">RM6094 — Spark Dynamic Purchasing System</td>
                <td className="px-6 py-4 text-gov-dark">Crown Commercial Service</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">CCS Framework: Research</td>
                <td className="px-6 py-4 text-gov-dark">RM6126 — Research and Insights Dynamic Purchasing System</td>
                <td className="px-6 py-4 text-gov-dark">Crown Commercial Service</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Cyber Security</td>
                <td className="px-6 py-4 text-gov-dark">Cyber Essentials certified; ISO 27001 aligned</td>
                <td className="px-6 py-4 text-gov-dark">NCSC scheme</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Professional Indemnity</td>
                <td className="px-6 py-4 text-gov-dark">£5,000,000</td>
                <td className="px-6 py-4 text-gov-secondary">Certificate available on request</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Public Liability</td>
                <td className="px-6 py-4 text-gov-dark">£2,000,000</td>
                <td className="px-6 py-4 text-gov-secondary">Certificate available on request</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Employers' Liability</td>
                <td className="px-6 py-4 text-gov-dark">£10,000,000</td>
                <td className="px-6 py-4 text-gov-secondary">Certificate available on request</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">ICO Registration</td>
                <td className="px-6 py-4 text-gov-dark">ZB715782</td>
                <td className="px-6 py-4 text-gov-dark">Information Commissioner's Office</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">DUNS Number</td>
                <td className="px-6 py-4 text-gov-dark">222180245</td>
                <td className="px-6 py-4 text-gov-dark">Dun and Bradstreet</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Procurement ID (PPON)</td>
                <td className="px-6 py-4 text-gov-dark">PWJP-6874-MXDJ</td>
                <td className="px-6 py-4 text-gov-dark">Find a Tender Service</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Horizon Europe PIC</td>
                <td className="px-6 py-4 text-gov-dark">880269472</td>
                <td className="px-6 py-4 text-gov-dark">European Commission Funding and Tenders Portal</td>
              </tr>
              <tr className="bg-white hover:bg-gov-bg/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">SME Status</td>
                <td className="px-6 py-4 text-gov-dark">SME / Micro enterprise</td>
                <td className="px-6 py-4 text-gov-secondary">EU definition; UK SME definition</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/50 p-10 rounded-xl space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">AI Governance and Compliance Frameworks</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          Our AI governance practice is evidence-based and aligned with the principal international standards. We apply these frameworks operationally — not as checklists — using our open-source governance tooling to produce audit-ready compliance matrices, automated risk classifications, and bias monitoring reports. All 48 governance tools in our platform are mapped to the frameworks below.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gov-border/50">
          <table className="w-full text-sm text-left">
            <thead className="bg-white border-b border-gov-border/50">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Framework</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Scope</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Our Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">EU AI Act</td>
                <td className="px-6 py-4 text-gov-dark">Mandatory risk classification for AI systems</td>
                <td className="px-6 py-4 text-gov-dark">Automated risk tiering; conformity assessment support</td>
              </tr>
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">NIST AI RMF</td>
                <td className="px-6 py-4 text-gov-dark">Govern, Map, Measure, Manage lifecycle</td>
                <td className="px-6 py-4 text-gov-dark">Policy enforcement gates; continuous monitoring</td>
              </tr>
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">ISO 42001</td>
                <td className="px-6 py-4 text-gov-dark">AI management system standard</td>
                <td className="px-6 py-4 text-gov-dark">Aligned internal processes; audit-ready reporting</td>
              </tr>
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">ISO 27001</td>
                <td className="px-6 py-4 text-gov-dark">Information security management</td>
                <td className="px-6 py-4 text-gov-dark">Operational alignment; supplier assurance evidence</td>
              </tr>
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">Cyber Essentials</td>
                <td className="px-6 py-4 text-gov-dark">UK government baseline cyber hygiene</td>
                <td className="px-6 py-4 text-gov-dark">Certified; renewed annually</td>
              </tr>
              <tr className="bg-gov-bg/30 hover:bg-gov-bg transition-colors">
                <td className="px-6 py-4 font-medium text-gov-dark">GDS Service Standard</td>
                <td className="px-6 py-4 text-gov-dark">UK Digital, Data and Technology delivery</td>
                <td className="px-6 py-4 text-gov-dark">Discovery, Alpha, Beta phase alignment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gov-dark">Contact</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          Procurement enquiries, framework call-off requests, and partnership discussions should be directed to Fabio Rovai at <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">fabio@thetesseractacademy.com</a>. For classified or security-sensitive programme enquiries, please indicate the classification level in your initial message and we will route your enquiry to the appropriate cleared team member. Our registered address is 5 Brunswick Park Gardens, London, N11 1EJ.
        </p>
      </section>
    </div>
  );
};
