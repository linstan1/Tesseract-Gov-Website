import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRY_BY_SLUG } from '../../data/industries';

interface IndustryPageProps {
  slug: string;
}

export const IndustryPage: React.FC<IndustryPageProps> = ({ slug }) => {
  const industry = INDUSTRY_BY_SLUG[slug];

  if (!industry) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://gov.tesseract.academy/industries/${industry.slug}#page`,
    name: industry.name,
    description: industry.metaDesc,
    url: `https://gov.tesseract.academy/industries/${industry.slug}`,
    isPartOf: { '@id': 'https://gov.tesseract.academy/#organization' },
    hasPart: industry.research.map((r) => ({
      '@type': 'Article',
      name: r.title,
      url: `https://gov.tesseract.academy${r.route}`,
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="border-b border-gov-border/30 pb-10">
        <Link to="/industries" className="text-sm font-semibold text-gov-blue hover:text-gov-blue-dark">
          Back to industries
        </Link>
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mt-6 mb-4">Industry</p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          {industry.name}
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">{industry.lede}</p>
      </header>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">How we work in this sector</h2>
        <p className="text-gov-dark leading-relaxed text-base">{industry.body}</p>
      </section>

      {industry.delivered.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gov-dark">Delivered in this sector</h2>
          <ul className="space-y-4 max-w-4xl">
            {industry.delivered.map((d) => (
              <li key={d} className="bg-gov-bg border border-gov-border/50 rounded-xl px-6 py-5">
                <p className="text-gov-dark leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Research in this sector</h2>
        <p className="text-gov-secondary max-w-4xl">
          Every figure in the work below is reproducible from an open repository. There are{' '}
          {industry.research.length} studies here.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {industry.research.map((r) => (
            <li key={r.route}>
              <Link
                to={r.route}
                className="block h-full bg-white border border-gov-border/50 rounded-xl px-5 py-4 text-gov-dark hover:border-gov-blue hover:bg-gov-blue/5 transition-colors"
              >
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IndustryPage;
