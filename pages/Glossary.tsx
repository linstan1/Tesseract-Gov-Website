import React, { useEffect, useMemo } from 'react';

type GlossaryTerm = {
  term: string;
  definition: string;
};

const TERMS: GlossaryTerm[] = [
  {
    term: 'Algorithmic Impact Assessment (AIA)',
    definition:
      'A structured evaluation of an AI system\'s potential effects on individuals and groups before deployment, required for high-risk AI under the EU AI Act.',
  },
  {
    term: 'Algorithmic Transparency',
    definition:
      'The principle that the logic and data used by automated decision-making systems should be accessible and understandable to affected individuals.',
  },
  {
    term: 'AI Assurance',
    definition:
      'The process of building justified confidence that an AI system behaves as intended and in accordance with ethical principles and legal requirements.',
  },
  {
    term: 'Alpha Phase',
    definition:
      'A phase of building and testing high-risk hypotheses with real users, following Discovery. Part of the GDS agile delivery framework.',
  },
  {
    term: 'Beta Phase',
    definition:
      'A phase of building a working service and testing it with real users, following Alpha. The service is made available to a limited audience for testing.',
  },
  {
    term: 'Bias Audit',
    definition:
      'Systematic testing of an AI model to detect performance disparities across demographic groups (age, gender, ethnicity, disability status).',
  },
  {
    term: 'Call-Off Contract',
    definition:
      'A specific contract placed under a framework agreement, defining the exact scope, price, and timeline for a particular piece of work.',
  },
  {
    term: 'Consumer Duty',
    definition:
      'FCA Regulation (PS22/9) effective July 2023, requiring firms to deliver good outcomes for retail customers, including those in vulnerable circumstances.',
  },
  {
    term: 'Crown Commercial Service (CCS)',
    definition:
      'The UK government\'s central purchasing authority, operating commercial frameworks for public sector buyers.',
  },
  {
    term: 'Cyber Essentials',
    definition:
      'A UK government-backed certification scheme protecting against common cyber threats. Required for contracts involving personal data or certain security classifications.',
  },
  {
    term: 'Data Protection Impact Assessment (DPIA)',
    definition:
      'A process to identify and minimise data protection risks of a project, required under UK GDPR for high-risk processing activities.',
  },
  {
    term: 'Deliberative Research',
    definition:
      'A form of public engagement where participants are given time and information to form considered views on complex topics, often used in policy development.',
  },
  {
    term: 'Digital Twin',
    definition:
      'A virtual model that represents a physical system, asset, or process, enabling simulation, monitoring, and optimisation.',
  },
  {
    term: 'Direct Award',
    definition:
      'Awarding a contract to a specific supplier without a further competition, permitted under certain thresholds and framework rules.',
  },
  {
    term: 'Discovery Phase',
    definition:
      'The first phase of GDS agile delivery, focused on understanding user needs and the problem space before any solution is proposed.',
  },
  {
    term: 'DUNS Number',
    definition:
      'A nine-digit identifier assigned by Dun & Bradstreet, used in procurement to uniquely identify business entities globally.',
  },
  {
    term: 'Dynamic Purchasing System (DPS)',
    definition:
      'A procurement mechanism allowing new suppliers to join at any time, used for commonly purchased goods and services. More flexible than a framework agreement.',
  },
  {
    term: 'EU AI Act',
    definition:
      'Regulation (EU) 2024/1689, the world\'s first comprehensive AI law. Classifies AI systems by risk level (unacceptable, high, limited, minimal). Applies to products placed in the EU market.',
  },
  {
    term: 'Explainable AI (XAI)',
    definition:
      'AI systems designed so their decisions can be interpreted and understood by humans, a requirement for high-risk applications.',
  },
  {
    term: 'Federated Learning',
    definition:
      'Training AI models across distributed datasets without centralising the data, preserving privacy.',
  },
  {
    term: 'Few-Shot Learning',
    definition:
      'AI model capability to generalise from only a small number of labelled examples.',
  },
  {
    term: 'Financial Vulnerability',
    definition:
      'A state in which an individual\'s circumstances make them significantly less able to protect their financial interests. Defined by the FCA in the Consumer Duty.',
  },
  {
    term: 'Find a Tender Service (FaTS)',
    definition:
      'The UK\'s post-Brexit replacement for OJEU, where UK public contracts above threshold must be advertised.',
  },
  {
    term: 'Framework Agreement',
    definition:
      'A pre-competed agreement between a buyer and one or more suppliers setting out terms for future call-off contracts.',
  },
  {
    term: 'GDS (Government Digital Service)',
    definition:
      'The UK government unit responsible for the GOV.UK platform and Service Standard, guiding how government digital services are designed and assessed.',
  },
  {
    term: 'GDS Service Standard',
    definition:
      '14 criteria that public-facing government services must meet, covering user research, agile delivery, accessibility, and security.',
  },
  {
    term: 'Hallucination (AI)',
    definition:
      'When a large language model generates plausible-sounding but factually incorrect information, a key risk in public sector AI deployments.',
  },
  {
    term: 'Human-in-the-Loop (HITL)',
    definition:
      'An AI system design where humans are involved in the decision-making process, either to approve outputs or override automated decisions.',
  },
  {
    term: 'Invitation to Tender (ITT)',
    definition:
      'A formal document inviting shortlisted suppliers to submit detailed bids, including methodology, team, and price.',
  },
  {
    term: 'IR35 (Off-Payroll Working Rules)',
    definition:
      'UK tax legislation determining whether contractors should be treated as employees for tax purposes. Affects how public sector bodies engage individual consultants.',
  },
  {
    term: 'ISO 27001',
    definition:
      'The international standard for information security management systems. Specifies controls for protecting confidential information.',
  },
  {
    term: 'ISO 42001',
    definition:
      'The international standard for AI management systems, published 2023. Specifies requirements for responsible development and use of AI.',
  },
  {
    term: 'Large Language Model (LLM)',
    definition:
      'A neural network trained on billions of text tokens, capable of generating, summarising, translating, and reasoning over text. Examples: GPT-4, Claude, Gemma.',
  },
  {
    term: 'Live Phase',
    definition:
      'The phase when a service is publicly available and continues to be improved based on data and user feedback.',
  },
  {
    term: 'Micro Enterprise',
    definition:
      'A business with fewer than 10 employees and turnover under £2 million.',
  },
  {
    term: 'Mixed Methods Research',
    definition:
      'Combining quantitative and qualitative approaches in a single study to triangulate findings and answer different types of research questions.',
  },
  {
    term: 'Named Entity Recognition (NER)',
    definition:
      'An NLP technique that identifies and classifies proper nouns (people, organisations, places, dates) in unstructured text.',
  },
  {
    term: 'Natural Language Processing (NLP)',
    definition:
      'The field of AI concerned with enabling machines to understand, interpret, and generate human language.',
  },
  {
    term: 'NIST AI RMF',
    definition:
      'The US National Institute of Standards and Technology AI Risk Management Framework — a voluntary framework for managing AI risks across four functions: Govern, Map, Measure, Manage.',
  },
  {
    term: 'OJEU (Official Journal of the European Union)',
    definition:
      'The publication where EU public contracts above threshold were required to be advertised (pre-Brexit). Now replaced by Find a Tender Service (FaTS) in the UK.',
  },
  {
    term: 'Ontology (Data)',
    definition:
      'A formal, structured vocabulary defining concepts and relationships within a domain, used to enable interoperability between data systems.',
  },
  {
    term: 'Participatory Action Research (PAR)',
    definition:
      'Research designed with communities as active participants rather than passive subjects, ensuring findings reflect lived experience.',
  },
  {
    term: 'PPON (Public Procurement Organisation Number)',
    definition:
      'A unique identifier assigned to organisations registered on the UK government\'s procurement portal.',
  },
  {
    term: 'Procurement Act 2023',
    definition:
      'UK legislation replacing the Public Contracts Regulations 2015, effective February 2025. Introduced new transparency and competitive tendering requirements.',
  },
  {
    term: 'Quality-Price Ratio',
    definition:
      'The weighting given to quality versus price in tender evaluation. UK government typically uses 60/40 or 70/30 quality-weighted evaluations.',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'An AI architecture combining a knowledge retrieval system with an LLM to ground generated responses in verified source documents.',
  },
  {
    term: 'Sampling Strategy',
    definition:
      'The method used to select participants for research. Common strategies include random, stratified, purposive, and snowball sampling.',
  },
  {
    term: 'SME (Small and Medium Enterprise)',
    definition:
      'Businesses with fewer than 250 employees and annual turnover under £50 million. UK Government targets 33% SME spend.',
  },
  {
    term: 'Social Value',
    definition:
      'The broader benefits to society from public procurement, required to be evaluated under the Social Value Act 2012. Includes employment, community impact, and environmental sustainability.',
  },
  {
    term: 'Stablecoin',
    definition:
      'A crypto-asset designed to maintain a stable value relative to a reference asset (e.g. USD, GBP, or gold).',
  },
  {
    term: 'Statement of Requirements (SOR)',
    definition:
      'A document from the buyer defining what they need. Suppliers respond with a proposal.',
  },
  {
    term: 'Synthetic Data',
    definition:
      'Artificially generated data that mirrors real data distributions, used when real data is scarce or privacy-sensitive.',
  },
  {
    term: 'Systematic Literature Review',
    definition:
      'A rigorous, reproducible review of existing research on a defined topic, following a pre-registered protocol.',
  },
  {
    term: 'Thematic Analysis',
    definition:
      'A qualitative method for identifying, analysing, and reporting patterns (themes) within data.',
  },
  {
    term: 'TOMs (Themes, Outcomes and Measures)',
    definition:
      'A framework for measuring social value in public sector procurement, developed by the Social Value Portal.',
  },
  {
    term: 'Transfer Learning',
    definition:
      'Reusing a model trained on one task as a starting point for a different but related task.',
  },
  {
    term: 'UK GDPR',
    definition:
      'The UK\'s retained version of the EU General Data Protection Regulation, governing how personal data is collected, stored, and used.',
  },
  {
    term: 'Zero-Shot Learning',
    definition:
      'The ability of an AI model to correctly handle tasks or categories it was not explicitly trained on.',
  },
];

const SORTED_TERMS = [...TERMS].sort((a, b) =>
  a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })
);

const LETTERS = Array.from(
  new Set(
    SORTED_TERMS.map((t) => t.term[0].toUpperCase())
  )
).sort();

export const Glossary: React.FC = () => {
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const t of SORTED_TERMS) {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    }
    return map;
  }, []);

  useEffect(() => {
    const definitions = SORTED_TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: 'https://gov.tesseract.academy/glossary',
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': 'https://gov.tesseract.academy/glossary#termset',
      name: 'Tesseract Academy Public Sector AI and Procurement Glossary',
      url: 'https://gov.tesseract.academy/glossary',
      description:
        'Authoritative definitions of AI, procurement, governance, research, and FinTech terms relevant to UK public sector commissioning.',
      creator: { '@id': 'https://gov.tesseract.academy/#organization' },
      publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
      hasDefinedTerm: definitions,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'glossary-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('glossary-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-14">
      <header className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Public Sector AI and Procurement Glossary
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          This glossary defines key terms used across AI, machine learning, UK government procurement,
          AI governance regulation, research methodology, and financial technology. It is intended to
          support commissioning officers, policy teams, and technical leads working on public sector
          AI and data projects. Definitions reflect current UK government guidance, applicable
          legislation, and established academic usage as of 2025.
        </p>
      </header>

      <nav aria-label="Jump to letter section">
        <div className="flex flex-wrap gap-2">
          {LETTERS.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-gov-border/50 text-sm font-semibold text-gov-blue hover:bg-gov-blue hover:text-white transition-colors duration-150"
            >
              {letter}
            </a>
          ))}
        </div>
      </nav>

      {LETTERS.map((letter) => (
        <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gov-dark mb-6 pb-2 border-b border-gov-border/40">
            {letter}
          </h2>
          <dl className="space-y-6">
            {(grouped[letter] || []).map((item) => (
              <div
                key={item.term}
                className="bg-gov-bg border border-gov-border/40 rounded-lg p-6"
              >
                <dt className="text-base font-semibold text-gov-dark mb-2">{item.term}</dt>
                <dd className="text-base text-gov-dark/80 leading-relaxed">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
};
