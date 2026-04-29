import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SectorCard {
  slug: string;
  url: string;
  eyebrow: string;
  name: string;
  description: string;
  buyers: string[];
  schemaName: string;
  schemaDescription: string;
}

const SECTORS: SectorCard[] = [
  {
    slug: 'health-nhs',
    url: 'https://gov.tesseract.academy/sectors/health-nhs',
    eyebrow: 'Health and care',
    name: 'Health and the NHS',
    description:
      'AI, evaluation and assurance for NHS England, NHS Wales, NHS Scotland, Health and Social Care Northern Ireland, integrated care boards, and the NIHR research family. Equality-grounded clinical decision-support assurance and DPIA-grade data governance.',
    buyers: ['NHS England, NHS Wales, NHS Scotland, HSC NI', 'Integrated Care Boards (ICBs) and NHS trusts', 'NIHR, MHRA, NICE'],
    schemaName: 'Health and NHS Sector — Tesseract Academy',
    schemaDescription:
      'AI, research and assurance services for the UK health and care system, including NHS England, NHS Wales, NHS Scotland, HSC NI, NICE, MHRA and NIHR.',
  },
  {
    slug: 'local-government',
    url: 'https://gov.tesseract.academy/sectors/local-government',
    eyebrow: 'Councils and combined authorities',
    name: 'Local Government',
    description:
      'Strategic AI, data and engagement support for English unitary and county councils, combined authorities, the Local Government Association (LGA), and devolved local-government partners through WLGA, COSLA and NILGA. MHCLG-aligned outcomes.',
    buyers: ['English county, unitary and district councils', 'Combined authorities and the GLA', 'LGA, WLGA, COSLA, NILGA'],
    schemaName: 'Local Government Sector — Tesseract Academy',
    schemaDescription:
      'AI and research services for English councils, combined authorities, the GLA and devolved local-government partners through WLGA, COSLA and NILGA.',
  },
  {
    slug: 'education-skills',
    url: 'https://gov.tesseract.academy/sectors/education-skills',
    eyebrow: 'Schools, FE and skills',
    name: 'Education and Skills',
    description:
      'AI, research and educator-upskilling services for the Department for Education (DfE), Skills England, Ofqual, Ofsted, Education Scotland, Estyn and the NI Education and Training Inspectorate, plus universities and FE colleges via Jisc and partners.',
    buyers: ['DfE, Skills England, Ofqual, Ofsted', 'Education Scotland, Estyn, ETI NI', 'Universities, FE colleges, Jisc'],
    schemaName: 'Education and Skills Sector — Tesseract Academy',
    schemaDescription:
      'AI, research and upskilling services for DfE, Skills England, Ofqual, Ofsted, devolved inspectorates and the UK higher and further education systems.',
  },
  {
    slug: 'defence-security',
    url: 'https://gov.tesseract.academy/sectors/defence-security',
    eyebrow: 'Defence, intelligence and resilience',
    name: 'Defence and Security',
    description:
      'AI assurance, simulation research and ontology work for the Ministry of Defence (MoD), Defence Science and Technology Laboratory (Dstl), the National Cyber Security Centre (NCSC), and the Alan Turing Institute defence partnership. Cyber Essentials certified.',
    buyers: ['Ministry of Defence (MoD), Dstl', 'NCSC, GCHQ-adjacent research bodies', 'Alan Turing Institute partnerships'],
    schemaName: 'Defence and Security Sector — Tesseract Academy',
    schemaDescription:
      'AI assurance, simulation and ontology services for MoD, Dstl, NCSC and aligned defence and security research bodies.',
  },
  {
    slug: 'justice-policing',
    url: 'https://gov.tesseract.academy/sectors/justice-policing',
    eyebrow: 'Justice, policing and the courts',
    name: 'Justice and Policing',
    description:
      'AI, equality and algorithmic accountability work for the Ministry of Justice (MoJ), HM Courts and Tribunals Service (HMCTS), HM Prison and Probation Service (HMPPS), the College of Policing, the Crown Prosecution Service (CPS), and police forces.',
    buyers: ['Ministry of Justice (MoJ), HMCTS, HMPPS', 'CPS, College of Policing, NCA', 'Police forces and PCCs'],
    schemaName: 'Justice and Policing Sector — Tesseract Academy',
    schemaDescription:
      'AI assurance, equality and algorithmic accountability services for MoJ, HMCTS, HMPPS, CPS, College of Policing and police forces.',
  },
  {
    slug: 'transport-infrastructure',
    url: 'https://gov.tesseract.academy/sectors/transport-infrastructure',
    eyebrow: 'Transport, infrastructure and the built environment',
    name: 'Transport and Infrastructure',
    description:
      'AI, ontology and digital-twin work for the Department for Transport (DfT), National Highways, Network Rail, Transport for London (TfL), the Office of Rail and Road (ORR), and the National Digital Twin Programme. Open-source delivery default.',
    buyers: ['Department for Transport (DfT)', 'National Highways, Network Rail, TfL', 'NDTP, ORR, Civil Aviation Authority'],
    schemaName: 'Transport and Infrastructure Sector — Tesseract Academy',
    schemaDescription:
      'AI, ontology and digital-twin services for DfT, National Highways, Network Rail, TfL, the National Digital Twin Programme and the ORR.',
  },
  {
    slug: 'welfare-revenue',
    url: 'https://gov.tesseract.academy/sectors/welfare-revenue',
    eyebrow: 'Welfare, tax and revenue',
    name: 'Welfare and Revenue',
    description:
      'Equality-first AI assurance, ATRS-ready documentation and decision-support traceability for the Department for Work and Pensions (DWP), HM Revenue and Customs (HMRC), HM Treasury, the Office for Budget Responsibility (OBR) and EHRC-aligned scrutiny bodies.',
    buyers: ['DWP, HMRC, HM Treasury, OBR', 'Office for Statistics Regulation, GIAA', 'Independent Case Examiner, SSAC, MaPS'],
    schemaName: 'Welfare and Revenue Sector — Tesseract Academy',
    schemaDescription:
      'AI assurance, ATRS-ready documentation and equality-grounded decision-support traceability for DWP, HMRC, HM Treasury, OBR and connected scrutiny bodies.',
  },
  {
    slug: 'devolved-nations',
    url: 'https://gov.tesseract.academy/sectors/devolved-nations',
    eyebrow: 'Wales, Scotland, Northern Ireland',
    name: 'Devolved Nations',
    description:
      'AI, research and engagement for Welsh Government, Scottish Government and the Northern Ireland Executive, with bilingual (Welsh) deliverables, GOV.WALES publication track record, and registration on Sell2Wales, Public Contracts Scotland and eTendersNI.',
    buyers: ['Welsh Government, Senedd Cymru, NHS Wales', 'Scottish Government, Scottish Parliament, NHS Scotland', 'NI Executive, NI Assembly, HSC NI'],
    schemaName: 'Devolved Nations Sector — Tesseract Academy',
    schemaDescription:
      'AI, research and engagement services for Welsh Government, Scottish Government, the Northern Ireland Executive and their respective health, education and audit bodies.',
  },
];

export const SectorsIndex: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://gov.tesseract.academy/sectors#collection',
      name: 'Sector Vertical Landing Pages | Tesseract Government Gateway',
      description:
        'Landing pages for the eight UK government sectors served by Tesseract Academy: Health and the NHS, Local Government, Education and Skills, Defence and Security, Justice and Policing, Transport and Infrastructure, Welfare and Revenue, and the Devolved Nations.',
      url: 'https://gov.tesseract.academy/sectors',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://gov.tesseract.academy/#website',
      },
      mainEntity: {
        '@type': 'ItemList',
        name: 'UK Government Sectors served by Tesseract Academy',
        numberOfItems: SECTORS.length,
        itemListElement: SECTORS.map((sector, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: sector.url,
          name: sector.schemaName,
          description: sector.schemaDescription,
        })),
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sectors-index-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('sectors-index-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          By UK Government Sector
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Sector Vertical Landing Pages | Tesseract Government Gateway
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Tesseract Academy serves every major UK public sector buyer — from <strong className="text-gov-dark">NHS England</strong> and <strong className="text-gov-dark">Welsh Government</strong> to the <strong className="text-gov-dark">Ministry of Defence (MoD)</strong>, <strong className="text-gov-dark">Ministry of Justice (MoJ)</strong>, <strong className="text-gov-dark">Department for Transport (DfT)</strong>, <strong className="text-gov-dark">Department for Work and Pensions (DWP)</strong>, <strong className="text-gov-dark">HM Revenue and Customs (HMRC)</strong>, the <strong className="text-gov-dark">Ministry of Housing, Communities and Local Government (MHCLG)</strong> and the <strong className="text-gov-dark">Department for Education (DfE)</strong>. The eight pages below collect the sector-specific procurement routes, named buyers, regulatory frameworks and case studies that matter most to each part of UK government, including devolved administrations and arm's-length bodies.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Eight UK Government Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.slug}
              className="bg-gov-bg border border-gov-border/40 rounded-xl p-8 hover:border-gov-blue transition"
            >
              <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
                {sector.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-gov-dark mb-4">{sector.name}</h3>
              <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
                {sector.description}
              </p>
              <ul className="text-sm text-gov-secondary space-y-1 mb-6 list-disc list-inside">
                {sector.buyers.map((buyer) => (
                  <li key={buyer}>{buyer}</li>
                ))}
              </ul>
              <Link
                to={`/sectors/${sector.slug}`}
                className="text-gov-blue hover:underline font-semibold"
              >
                View sector page →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Cross-Sector Capabilities</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed max-w-4xl mb-8">
          Every sector engagement draws on the same four core capability lines. Each links to a dedicated
          service page covering the underlying methodology, deliverables and procurement route.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/services/ai-consulting"
            className="bg-gov-bg border border-gov-border/40 rounded-xl p-6 hover:border-gov-blue transition block"
          >
            <h3 className="text-lg font-bold text-gov-dark mb-2">AI Consulting</h3>
            <p className="text-sm text-gov-secondary leading-relaxed">
              Custom ML, NLP, LLM and ontology delivery aligned to GDS Service Standard.
            </p>
          </Link>
          <Link
            to="/services/research-policy"
            className="bg-gov-bg border border-gov-border/40 rounded-xl p-6 hover:border-gov-blue transition block"
          >
            <h3 className="text-lg font-bold text-gov-dark mb-2">Research and Policy</h3>
            <p className="text-sm text-gov-secondary leading-relaxed">
              Policy-grade research, evaluation and statistical analysis for departments and ALBs.
            </p>
          </Link>
          <Link
            to="/services/public-engagement"
            className="bg-gov-bg border border-gov-border/40 rounded-xl p-6 hover:border-gov-blue transition block"
          >
            <h3 className="text-lg font-bold text-gov-dark mb-2">Public Engagement</h3>
            <p className="text-sm text-gov-secondary leading-relaxed">
              Deliberative, participatory and community engagement on AI and public services.
            </p>
          </Link>
          <Link
            to="/services/ai-governance"
            className="bg-gov-bg border border-gov-border/40 rounded-xl p-6 hover:border-gov-blue transition block"
          >
            <h3 className="text-lg font-bold text-gov-dark mb-2">AI Governance</h3>
            <p className="text-sm text-gov-secondary leading-relaxed">
              EU AI Act, NIST AI RMF, ISO 42001 and ATRS-aligned governance and assurance.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">Ready to commission?</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed max-w-3xl">
          Each sector page lists the relevant procurement frameworks (CCS RM6200, RM6094, RM6126,
          devolved portals, departmental frameworks). The cross-cutting "How to Buy" page summarises
          all routes in one place. To start a conversation, email us with your sector, your buyer,
          and a one-paragraph description of the requirement.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/how-to-buy"
            className="inline-block px-6 py-3 rounded-lg bg-gov-blue text-white font-semibold hover:bg-gov-blue-dark transition"
          >
            How to buy from Tesseract
          </Link>
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="inline-block px-6 py-3 rounded-lg border border-gov-blue text-gov-blue font-semibold hover:bg-gov-blue hover:text-white transition"
          >
            Email fabio@thetesseractacademy.com
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark">Related</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li><Link to="/services/ai-consulting" className="text-gov-blue hover:underline">AI Consulting for Public Sector →</Link></li>
          <li><Link to="/services/research-policy" className="text-gov-blue hover:underline">Research and Policy Analysis →</Link></li>
          <li><Link to="/use-cases" className="text-gov-blue hover:underline">Use Cases across UK Government →</Link></li>
          <li><Link to="/insights" className="text-gov-blue hover:underline">Insights — Public Sector AI →</Link></li>
          <li><Link to="/how-to-buy" className="text-gov-blue hover:underline">How to Buy — Procurement Routes →</Link></li>
        </ul>
      </section>
    </div>
  );
};
