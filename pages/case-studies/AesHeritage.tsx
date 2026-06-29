import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/case-studies/agri-environment-heritage-value#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/case-studies/agri-environment-heritage-value',
  headline: 'The Value of Agri-Environment Heritage Actions — Tesseract Academy',
  description:
    'A self-initiated, open-data demonstration of how we evidence the wider value of agri-environment scheme heritage actions for nature and for people: a scoping-review framework built on Natural England\'s own evidence-review method, with a real spatial analysis of the 2,206 Scheduled Monuments on the Historic England Heritage at Risk Register 2024.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
  about: {
    '@type': 'Thing',
    name: 'Agri-environment scheme heritage actions and their co-benefits',
  },
  keywords:
    'agri-environment, heritage, historic environment, Scheduled Monuments, Heritage at Risk, scoping review, evidence synthesis, natural capital, value for money, Green Book, ENCA, Natural England',
};

const STEPS = [
  {
    id: '1',
    name: 'Understand the policy frame',
    description: 'Anchor the question to the Environmental Improvement Plan, Natural England\'s strategy, and the named SFI26 and Countryside Stewardship Higher Tier heritage action codes, so the evidence speaks directly to decisions.',
  },
  {
    id: '2',
    name: 'A standards-based scoping review',
    description: 'A scoping review built on Natural England\'s own evidence-review method (NEER001), PRISMA-ScR reporting and the Collaboration for Environmental Evidence guidelines, with rapid-evidence search discipline to fit a real timetable.',
  },
  {
    id: '3',
    name: 'A charting and evidence-gap framework',
    description: 'Each heritage action is charted against its co-benefit domains (biodiversity, soils, water, carbon, landscape, access and wellbeing) and EIP linkage, producing an evidence map that shows at a glance where evidence is strong, thin or absent.',
  },
  {
    id: '4',
    name: 'Value for nature AND for people',
    description: 'People-centred co-benefits (access, learning, volunteering, wellbeing, place identity) are charted with equal weight to environmental ones, because the brief is for the natural environment and for people.',
  },
  {
    id: '5',
    name: 'Indicative value for money',
    description: 'Multi-objective benefits are valued using the HM Treasury Green Book and a natural-capital approach (ENCA, value transfer, Culture and Heritage Capital), stating confidence honestly rather than forcing false precision.',
  },
];

export const AesHeritage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open-data capability demonstration &mdash; Heritage &amp; Natural Environment
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The Value of Agri-Environment Heritage Actions
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Agri-environment schemes are the largest source of government funding for the rural historic environment, yet the wider co-benefits of heritage actions, for nature and for people, are real but evidentially fragmented. This is a self-initiated, open demonstration of how we would establish a defensible baseline of that evidence.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Monuments analysed</p>
          <p className="text-3xl font-extrabold text-gov-dark">2,206</p>
          <p className="text-sm text-gov-secondary mt-1">Scheduled Monuments at Risk, 2024</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">On farmland</p>
          <p className="text-3xl font-extrabold text-gov-dark">84%</p>
          <p className="text-sm text-gov-secondary mt-1">of monuments at risk, where heritage actions act</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Method spine</p>
          <p className="text-3xl font-extrabold text-gov-dark">5</p>
          <p className="text-sm text-gov-secondary mt-1">recognised evidence standards</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            As nature recovery is delivered faster, at greater scale and under tighter budgets, heritage actions risk being overlooked unless their wider co-benefits for nature, people and the economy can be evidenced. Seventy-five per cent of Scheduled Monuments and all Registered Battlefields lie on farmland, and <strong>eighty-four per cent of Scheduled Monuments at Risk are on farmland</strong>, where the main pressure is agriculture or natural processes. What threatens habitats also threatens heritage; done sensitively, recovering nature tackles the heritage crisis too. The evidence for these co-benefits exists but is scattered across disciplines and grey literature.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            This is a <strong>self-initiated demonstration</strong> of our approach to that problem, built entirely on public data and open methods. It is not a commissioned contract; it shows how we establish a defensible evidence baseline.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Where heritage at risk actually is</h2>
        <p className="text-gov-secondary leading-relaxed">
          To ground the method in real data, we took the <strong>Historic England Heritage at Risk Register 2024</strong> open dataset and performed our own spatial join, locating every one of the <strong>2,206 Scheduled Monuments at Risk</strong> by English region. The concentration in the South West and Yorkshire shows where agri-environment heritage actions, and this evidence, matter most. The South West alone holds 973 of the located monuments, which matches Historic England&apos;s own published figure of roughly 45 per cent of the register, a check that the analysis is sound.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aes-heritage-monuments-at-risk.png" alt="Choropleth map of England showing Scheduled Monuments at Risk by region in 2024, with the South West highest at 973 and Yorkshire and the Humber next at 336. Eighty-four per cent of Scheduled Monuments at Risk are on farmland." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            Scheduled Monuments at Risk by English region, 2024. Source: Historic England Heritage at Risk Register 2024 (open data); spatial join by The Tesseract Academy. 2,181 of 2,206 located.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">How we evidence the wider value</h2>
        <p className="text-gov-secondary leading-relaxed">
          We pre-registered and openly published a scoping-review protocol for exactly this question. The method is built on Natural England&apos;s own evidence-review standards, not invented for the occasion, and treats accessible outputs as scored craft rather than an afterthought.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Step</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it does</th>
              </tr>
            </thead>
            <tbody>
              {STEPS.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{c.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            The demonstration produces three things a commissioner can use: a published, replicable scoping-review protocol; a charting framework that turns a fragmented literature into an evidence map and an actionable gap register; and a real spatial analysis that already shows where the need is greatest. Together they make the case that heritage actions deliver multi-objective public value, for nature and for people, in a form that can withstand scrutiny.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            It also shows our working principle: lead with the policy context, build on the buyer&apos;s own standards, give people-centred value equal weight to environmental value, and be honest about uncertainty rather than overclaiming.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">&quot;A baseline of evidence is what lets a heritage action be defended on the strength of its multi-objective value, rather than lost under budget pressure. The job is to count the benefits that single-outcome accounting hides, and to show the working.&quot;</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">&mdash; Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Read the open methods note</p>
          <p className="text-sm text-gov-secondary mt-1">The full pre-registered scoping-review protocol (PDF).</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/papers/aes-heritage-cobenefits-scoping-protocol.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            Read the protocol (PDF)
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </article>
  );
};
