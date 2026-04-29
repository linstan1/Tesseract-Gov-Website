import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type ChecklistItem = {
  id: string;
  number: number;
  question: string;
  why: React.ReactNode;
  reference: React.ReactNode;
  refText: string;
};

type ChecklistSection = {
  id: string;
  letter: string;
  title: string;
  items: ChecklistItem[];
};

const SECTIONS: ChecklistSection[] = [
  {
    id: 'problem-outcomes',
    letter: 'A',
    title: 'Problem and Outcomes',
    items: [
      {
        id: 'q1',
        number: 1,
        question:
          'Have you defined the policy or service problem in user-needs language using GOV.UK Service Manual practice?',
        why: (
          <>
            AI projects fail when teams jump to a technology before agreeing what user or policy
            problem they are solving. The{' '}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Government Digital Service (GDS) Service Manual
            </a>{' '}
            sets out a Discovery practice that requires user-needs framing before solution design.
            Without it, evaluation panels cannot tell whether a supplier's proposed model actually
            addresses the underlying problem.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            GOV.UK Service Manual — Discovery phase
          </a>
        ),
        refText: 'GOV.UK Service Manual — Discovery phase',
      },
      {
        id: 'q2',
        number: 2,
        question:
          'Have you specified measurable outcomes that distinguish AI success from technical novelty?',
        why: (
          <>
            Outcome metrics force commissioners to separate "the model worked" from "the service
            improved". The{' '}
            <a
              href="https://www.nao.org.uk/reports/use-of-artificial-intelligence-in-government/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              National Audit Office report on AI in government
            </a>{' '}
            highlighted unclear outcome measurement as a recurring weakness. Tie metrics to citizen
            outcomes, not solely to model F1 scores.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/service-manual/measuring-success"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            GOV.UK Service Manual — Measuring success
          </a>
        ),
        refText: 'GOV.UK Service Manual — Measuring success',
      },
      {
        id: 'q3',
        number: 3,
        question:
          'Have you completed an Equality Impact Assessment under the Public Sector Equality Duty?',
        why: (
          <>
            Section 149 of the Equality Act 2010 imposes the Public Sector Equality Duty (PSED) on
            contracting authorities. The{' '}
            <a
              href="https://www.equalityhumanrights.com/equality/public-sector-equality-duty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Equality and Human Rights Commission (EHRC)
            </a>{' '}
            expects PSED analysis to be visible at the point of decision-making — including AI
            commissioning — and not retrofitted after deployment.
          </>
        ),
        reference: (
          <a
            href="https://www.equalityhumanrights.com/guidance/public-sector-equality-duty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            EHRC — PSED technical guidance
          </a>
        ),
        refText: 'EHRC — PSED technical guidance',
      },
    ],
  },
  {
    id: 'data-infrastructure',
    letter: 'B',
    title: 'Data and Infrastructure',
    items: [
      {
        id: 'q4',
        number: 4,
        question:
          'Do you hold a current Data Protection Impact Assessment (DPIA) for the proposed dataset?',
        why: (
          <>
            UK GDPR Article 35 requires a DPIA for processing likely to result in high risk —
            which includes most public sector AI use cases. The{' '}
            <a
              href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              ICO's AI and data protection guidance
            </a>{' '}
            sets out specific DPIA expectations for AI, including bias, explainability, and human
            review. Without a current DPIA, suppliers cannot lawfully begin processing.
          </>
        ),
        reference: (
          <a
            href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            ICO — DPIA guidance
          </a>
        ),
        refText: 'ICO — DPIA guidance',
      },
      {
        id: 'q5',
        number: 5,
        question:
          'Have you confirmed lawful basis, data quality, and access arrangements before going to market?',
        why: (
          <>
            Data quality and lawful basis are the most common cause of AI project delay. The{' '}
            <a
              href="https://www.gov.uk/government/organisations/central-digital-and-data-office"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Central Digital and Data Office (CDDO)
            </a>{' '}
            and the Data Standards Authority publish standards for data quality, sharing
            agreements, and metadata that should be referenced in your Statement of Requirements.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/government/publications/the-government-data-quality-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            Government Data Quality Framework
          </a>
        ),
        refText: 'Government Data Quality Framework',
      },
      {
        id: 'q6',
        number: 6,
        question:
          'Has the AI security threat model been reviewed against NCSC AI Security Principles?',
        why: (
          <>
            Public sector AI systems face adversarial risks (prompt injection, data poisoning, model
            extraction) that are distinct from conventional IT security. The{' '}
            <a
              href="https://www.ncsc.gov.uk/collection/machine-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              National Cyber Security Centre (NCSC)
            </a>{' '}
            publishes machine learning security principles that should be applied during design —
            not assurance.
          </>
        ),
        reference: (
          <a
            href="https://www.ncsc.gov.uk/collection/machine-learning/principles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            NCSC — Machine Learning Security Principles
          </a>
        ),
        refText: 'NCSC — ML Security Principles',
      },
    ],
  },
  {
    id: 'governance-ethics',
    letter: 'C',
    title: 'Governance and Ethics',
    items: [
      {
        id: 'q7',
        number: 7,
        question:
          'Have you committed to publishing an Algorithmic Transparency Recording Standard (ATRS) entry on GOV.UK?',
        why: (
          <>
            ATRS is a UK-wide standard, mandated by the Cabinet Office for in-scope algorithmic
            tools across central government. Publishing an ATRS entry on{' '}
            <a
              href="https://www.gov.uk/algorithmic-transparency-records"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              GOV.UK
            </a>{' '}
            sets a transparency baseline citizens, Parliament, and oversight bodies can rely on.
            Department for Science, Innovation and Technology (DSIT) maintains the standard.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            DSIT — Algorithmic Transparency Recording Standard
          </a>
        ),
        refText: 'DSIT — Algorithmic Transparency Recording Standard',
      },
      {
        id: 'q8',
        number: 8,
        question:
          'Has the proposed AI use been mapped against the NIST AI Risk Management Framework functions (Govern, Map, Measure, Manage)?',
        why: (
          <>
            Even though it is voluntary, the{' '}
            <a
              href="https://www.nist.gov/itl/ai-risk-management-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              NIST AI Risk Management Framework (AI RMF 1.0)
            </a>{' '}
            is the de facto international reference for AI risk discipline. UK suppliers and
            commissioners using its four functions (Govern, Map, Measure, Manage) are better
            positioned for cross-border procurement and EU AI Act alignment.
          </>
        ),
        reference: (
          <a
            href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            NIST AI RMF 1.0 (PDF)
          </a>
        ),
        refText: 'NIST AI RMF 1.0',
      },
      {
        id: 'q9',
        number: 9,
        question:
          'Have you assessed obligations under the EU AI Act if any output reaches the EU market?',
        why: (
          <>
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Regulation (EU) 2024/1689 (the EU AI Act)
            </a>{' '}
            applies extraterritorially when AI outputs are used in the EU. Public sector AI used in
            cross-border services, EU-resident citizens' data, or shared research infrastructure
            may trigger high-risk obligations even where the deploying authority is UK-based.
          </>
        ),
        reference: (
          <a
            href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            European Commission — AI Act regulatory framework
          </a>
        ),
        refText: 'European Commission — AI Act regulatory framework',
      },
    ],
  },
  {
    id: 'procurement-capability',
    letter: 'D',
    title: 'Procurement and Capability',
    items: [
      {
        id: 'q10',
        number: 10,
        question:
          'Have you identified the appropriate CCS framework (RM6200, RM6094, RM6126) or alternative route?',
        why: (
          <>
            Framework selection determines which suppliers you can see and how long the
            procurement will take.{' '}
            <a
              href="https://www.crowncommercial.gov.uk/agreements/RM6200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Crown Commercial Service (CCS) RM6200
            </a>{' '}
            handles strategy, RM6094 Spark handles innovation, and RM6126 Research and Insights
            handles user research. Picking incorrectly invites contested awards and re-procurement.
          </>
        ),
        reference: (
          <a
            href="https://www.crowncommercial.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            Crown Commercial Service — agreement search
          </a>
        ),
        refText: 'Crown Commercial Service — agreements',
      },
      {
        id: 'q11',
        number: 11,
        question:
          'Is the named senior responsible officer trained on the Procurement Act 2023 transparency obligations?',
        why: (
          <>
            The{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2023/54/contents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Procurement Act 2023
            </a>{' '}
            introduced new transparency notices through the Central Digital Platform. The{' '}
            <a
              href="https://www.gov.uk/government/groups/government-commercial-function"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Government Commercial Function
            </a>{' '}
            offers Knowledge Drops and learning materials that should be completed before any
            in-scope award.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/government/collections/transforming-public-procurement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            Cabinet Office — Transforming Public Procurement
          </a>
        ),
        refText: 'Cabinet Office — Transforming Public Procurement',
      },
      {
        id: 'q12',
        number: 12,
        question:
          'Does your delivery team have the in-house capability to manage and assure an AI supplier?',
        why: (
          <>
            AI commissioning fails when the buyer cannot critique the supplier's outputs.{' '}
            <a
              href="https://www.gov.uk/government/organisations/central-digital-and-data-office"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              CDDO
            </a>{' '}
            and DSIT have published capability frameworks describing the AI literacy and
            data-engineering skills departments need to retain. If those skills are missing, plan
            for assurance support alongside the technical contract.
          </>
        ),
        reference: (
          <a
            href="https://www.gov.uk/government/publications/digital-data-and-technology-profession-capability-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            DDaT Profession Capability Framework
          </a>
        ),
        refText: 'DDaT Profession Capability Framework',
      },
    ],
  },
];

export const AIReadinessChecklist: React.FC = () => {
  useEffect(() => {
    const allQuestions = SECTIONS.flatMap((s) => s.items);

    const schema = {
      '@context': 'https://schema.org',
      '@type': ['Article', 'Quiz'],
      '@id': 'https://gov.tesseract.academy/resources/ai-readiness-checklist#article',
      headline: 'AI Readiness Self-Assessment Checklist for UK Public Sector',
      name: 'AI Readiness Self-Assessment Checklist for UK Public Sector',
      description:
        'A 12-question self-assessment for UK public sector teams considering AI procurement. Covers problem framing, data, governance, and procurement capability with citations to ICO, CDDO, GDS, NIST, EHRC, and DSIT guidance.',
      url: 'https://gov.tesseract.academy/resources/ai-readiness-checklist',
      mainEntityOfPage: 'https://gov.tesseract.academy/resources/ai-readiness-checklist',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      inLanguage: 'en-GB',
      author: {
        '@type': 'Person',
        '@id': 'https://gov.tesseract.academy/#kampakis',
        name: 'Dr Stylianos Kampakis',
        url: 'https://gov.tesseract.academy/about',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      educationalUse: 'Self-assessment',
      hasPart: allQuestions.map((q) => ({
        '@type': 'Question',
        position: q.number,
        name: q.question,
        text: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.refText,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ai-readiness-checklist-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('ai-readiness-checklist-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Resource — Self-Assessment
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI Readiness Self-Assessment Checklist
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          A 12-question diagnostic for UK public sector teams considering AI procurement. Each
          question is grounded in published guidance from the{' '}
          <a
            href="https://ico.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            Information Commissioner's Office (ICO)
          </a>
          , the{' '}
          <a
            href="https://www.gov.uk/government/organisations/central-digital-and-data-office"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            Central Digital and Data Office (CDDO)
          </a>
          , and the{' '}
          <a
            href="https://www.nist.gov/itl/ai-risk-management-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            NIST AI Risk Management Framework
          </a>
          . Score yourself before issuing an Invitation to Tender. The self-assessment is free to
          use and citeable in internal governance papers.
        </p>
      </div>

      <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-2 bg-gov-bg rounded-r-lg max-w-4xl">
        <p className="text-gov-dark italic leading-relaxed">
          "Most failed AI procurements fail before the contract is signed. They fail because the
          buyer never asked themselves whether they had the data, the lawful basis, the governance,
          or the team to absorb what a supplier was about to deliver. This checklist is the
          conversation we have with every commissioner before we agree to bid."
        </p>
        <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">
          — Dr Stylianos Kampakis, Managing Director, Tesseract Academy
        </cite>
      </blockquote>

      <nav aria-label="Section navigation" className="bg-gov-bg border border-gov-border/40 rounded-xl p-6 max-w-4xl">
        <h2 className="text-lg font-bold text-gov-dark mb-4">Sections</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-gov-blue hover:underline">
                {s.letter}. {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="space-y-6 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gov-dark">
            {section.letter}. {section.title}
          </h2>
          <div className="space-y-6">
            {section.items.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="bg-gov-bg border border-gov-border/40 rounded-xl p-8"
              >
                <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-2">
                  Question {item.number}
                </p>
                <h3 className="text-xl font-bold text-gov-dark mb-4">{item.question}</h3>
                <p className="text-sm font-semibold text-gov-dark/80 uppercase tracking-wider mt-4 mb-2">
                  Why this matters
                </p>
                <p className="text-base text-gov-dark/90 leading-relaxed">{item.why}</p>
                <p className="text-sm text-gov-secondary mt-4">
                  <span className="font-semibold">Reference: </span>
                  {item.reference}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section id="scoring" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gov-dark">Score interpretation</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed max-w-4xl">
          Count one point for each question you can answer "yes" with documented evidence. Use the
          table below to interpret your score and decide on next steps.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Score</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Readiness</th>
                <th className="px-6 py-4 font-semibold text-gov-dark">Recommended action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">0–3</td>
                <td className="px-6 py-4 text-gov-dark/90">Not ready</td>
                <td className="px-6 py-4 text-gov-dark/90">
                  Do not go to market yet. Commission a Discovery phase under the GDS Service
                  Manual to define problem, data, and user needs first.
                </td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">4–6</td>
                <td className="px-6 py-4 text-gov-dark/90">Partially ready</td>
                <td className="px-6 py-4 text-gov-dark/90">
                  Address gaps before issuing an ITT. Engage the ICO, CDDO, or your departmental
                  Data Protection Officer for the unanswered questions.
                </td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">7–9</td>
                <td className="px-6 py-4 text-gov-dark/90">Substantially ready</td>
                <td className="px-6 py-4 text-gov-dark/90">
                  Suitable for a CCS framework mini-competition or Spark DPS call-off. Document
                  remaining gaps in the Statement of Requirements.
                </td>
              </tr>
              <tr className="hover:bg-gov-bg/60">
                <td className="px-6 py-4 text-gov-dark font-medium">10–12</td>
                <td className="px-6 py-4 text-gov-dark/90">Ready</td>
                <td className="px-6 py-4 text-gov-dark/90">
                  Proceed to market. Consider whether a Find a Tender Service competition or
                  framework call-off best fits scale, novelty, and timeline.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-gov-dark">Use this checklist freely</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Public sector teams are welcome to embed this checklist in internal governance papers,
          spending control submissions, and supplier briefing packs. Cite this page as: "Tesseract
          Academy, AI Readiness Self-Assessment Checklist for UK Public Sector, 2026". For tailored
          support applying it to a specific commissioning decision, contact{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>
          .
        </p>
      </section>

      <section className="border-t border-gov-border/30 pt-10 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Related</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
          <li>
            <Link to="/resources/ai-procurement-guide" className="text-gov-blue hover:underline">
              AI Procurement Guide for UK Public Sector
            </Link>
          </li>
          <li>
            <Link to="/glossary" className="text-gov-blue hover:underline">
              AI and Procurement Glossary
            </Link>
          </li>
          <li>
            <Link to="/how-to-buy" className="text-gov-blue hover:underline">
              How to Buy from Tesseract Academy
            </Link>
          </li>
          <li>
            <Link to="/services/ai-governance" className="text-gov-blue hover:underline">
              AI Governance service overview
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
