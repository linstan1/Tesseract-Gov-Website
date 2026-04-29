import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ResourcesIndex: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://gov.tesseract.academy/resources#collection',
      name: 'UK Public Sector AI Resources',
      url: 'https://gov.tesseract.academy/resources',
      description:
        'Free, citeable practitioner resources for UK public sector procurement officers, GDS-aligned delivery managers, and digital leads commissioning AI and research services.',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://gov.tesseract.academy/#website',
        name: 'Tesseract Government Gateway',
        url: 'https://gov.tesseract.academy',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://gov.tesseract.academy/#organization',
        name: 'Tesseract Academy',
      },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Practitioner Resources',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 3,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            url: 'https://gov.tesseract.academy/resources/ai-procurement-guide',
            name: 'AI Procurement Guide for UK Public Sector',
          },
          {
            '@type': 'ListItem',
            position: 2,
            url: 'https://gov.tesseract.academy/resources/ai-readiness-checklist',
            name: 'AI Readiness Self-Assessment Checklist',
          },
          {
            '@type': 'ListItem',
            position: 3,
            url: 'https://gov.tesseract.academy/glossary',
            name: 'AI and Procurement Glossary',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'resources-index-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('resources-index-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Free Practitioner Resources
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          UK Public Sector AI Resources | Tesseract Government Gateway
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          A curated library of free, citeable resources for procurement officers, GDS-aligned
          delivery managers, and digital leads working across <a href="https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">DSIT</a>,
          <a href="https://www.england.nhs.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> NHS England</a>, the
          <a href="https://www.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> Welsh Government</a>, the
          <a href="https://www.gov.uk/government/organisations/ministry-of-justice" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> Ministry of Justice (MoJ)</a>, the
          <a href="https://www.gov.uk/government/organisations/cabinet-office" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> Cabinet Office</a>, and arm's-length bodies. Use them freely in tender specifications, internal training,
          governance reviews, or briefings to senior responsible officers. Each resource cross-references
          authoritative sources, including <a href="https://www.crowncommercial.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Crown Commercial Service (CCS)</a> procurement frameworks, the
          <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> GOV.UK Service Manual</a>,
          and the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Information Commissioner's Office (ICO)</a>.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Open Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-gov-bg border border-gov-border/40 rounded-xl p-8 flex flex-col">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
              Procurement Guide
            </p>
            <h3 className="text-xl font-bold text-gov-dark mb-4">
              AI Procurement Guide for UK Public Sector
            </h3>
            <p className="text-base text-gov-dark/85 leading-relaxed mb-6 flex-grow">
              A definitive walkthrough of how to commission AI and research from UK public sector
              suppliers. Covers <a href="https://www.crowncommercial.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">CCS</a> frameworks (RM6200, RM6094, RM6126), the
              Procurement Act 2023, devolved routes via <a href="https://www.sell2wales.gov.wales/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Sell2Wales</a> and <a href="https://www.publiccontractsscotland.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Public Contracts Scotland</a>, and innovation
              channels through DASA and Innovate UK. Endorsed by GDS-aligned delivery practice.
            </p>
            <Link to="/resources/ai-procurement-guide" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-semibold">
              Open resource &rarr;
            </Link>
          </article>

          <article className="bg-gov-bg border border-gov-border/40 rounded-xl p-8 flex flex-col">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
              Self-Assessment
            </p>
            <h3 className="text-xl font-bold text-gov-dark mb-4">
              AI Readiness Self-Assessment Checklist
            </h3>
            <p className="text-base text-gov-dark/85 leading-relaxed mb-6 flex-grow">
              A 12-question diagnostic for public sector teams considering AI procurement. Each
              question is mapped to authoritative guidance from the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">ICO</a>, the Central Digital and
              Data Office (CDDO), GDS, the <a href="https://www.equalityhumanrights.com/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">EHRC</a> Public Sector Equality Duty, and the
              <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> NIST AI Risk Management Framework</a>. Score yourself before issuing an ITT.
            </p>
            <Link to="/resources/ai-readiness-checklist" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-semibold">
              Open resource &rarr;
            </Link>
          </article>

          <article className="bg-gov-bg border border-gov-border/40 rounded-xl p-8 flex flex-col">
            <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
              Reference
            </p>
            <h3 className="text-xl font-bold text-gov-dark mb-4">
              AI and Procurement Glossary (60+ terms)
            </h3>
            <p className="text-base text-gov-dark/85 leading-relaxed mb-6 flex-grow">
              Plain-English definitions of every term a public sector commissioner is likely to
              encounter — from Algorithmic Impact Assessment and DPIA, through CCS frameworks and
              the Procurement Act 2023, to ISO 42001, NIST AI RMF, and the EU AI Act. Used by teams in
              DSIT, the Ministry of Justice, and NHS England as a citation reference.
            </p>
            <Link to="/glossary" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-semibold">
              Open resource &rarr;
            </Link>
          </article>
        </div>
      </section>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">Why these resources exist</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          Public sector teams routinely need authoritative reference material on AI procurement,
          governance, and assurance — yet most material is locked behind consultancy paywalls or
          buried in long-form government publications. Tesseract Academy publishes these resources
          openly so commissioning teams across the <a href="https://www.gov.uk/government/organisations/government-digital-service" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Digital Service (GDS)</a>,
          the Central Digital and Data Office (CDDO), the <a href="https://www.gov.uk/government/organisations/uk-ai-safety-institute" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">UK AI Safety Institute</a>,
          and devolved administrations can build from a shared, transparent baseline. Every claim is
          attributed to a primary source — the <a href="https://www.gov.uk/service-manual/service-standard" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">GOV.UK Service Manual</a>,
          the <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">NIST AI Risk Management Framework</a>,
          and Regulation (EU) 2024/1689 (the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">EU AI Act</a>) among them.
        </p>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          These resources are deliberately framework-neutral. Tesseract Academy is a CCS RM6200
          supplier, but the guidance below describes the entire commissioning landscape — including
          routes that do not involve us. That is intentional. Procurement officers and GDS-aligned
          delivery managers need accurate, transparent advice to make defensible decisions, and our
          long-term reputation depends on giving it. Resources are reviewed at least annually
          against changes from the Cabinet Office, the Government Commercial Function, the
          <a href="https://www.gov.uk/government/organisations/competition-and-markets-authority" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline"> Competition and Markets Authority (CMA)</a>, and the National Cyber Security Centre (NCSC).
          The next scheduled review is in October 2026.
        </p>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Need a tailored briefing?</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          If your team needs a session walking through these resources against a specific commissioning
          decision, see our <Link to="/how-to-buy" className="text-gov-blue hover:underline font-medium">How to Buy</Link> page or
          contact us directly at{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>
          . Briefings are free for verified UK public sector teams.
        </p>
      </section>
    </div>
  );
};
