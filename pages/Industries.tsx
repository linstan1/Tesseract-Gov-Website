import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../data/industries';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://gov.tesseract.academy/industries#page',
  name: 'Industries',
  description:
    'The sectors Tesseract Academy works in, with the delivered engagements and the open research that sits under each one.',
  url: 'https://gov.tesseract.academy/industries',
  isPartOf: { '@id': 'https://gov.tesseract.academy/#organization' },
  hasPart: INDUSTRIES.map((i) => ({
    '@type': 'CollectionPage',
    name: i.name,
    url: `https://gov.tesseract.academy/industries/${i.slug}`,
  })),
};

export const Industries: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <header className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">Industries</p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          The sectors we work in
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Each sector below carries the engagements we have delivered in it and the open research that
          sits underneath. The research is published in full, with the data and the queries, so you can
          check the method before you commission anything.
        </p>
      </header>

      <section>
        <ul className="grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((i) => (
            <li key={i.slug}>
              <Link
                to={`/industries/${i.slug}`}
                className="flex flex-col h-full bg-white border border-gov-border/50 rounded-2xl px-6 py-6 hover:border-gov-blue hover:bg-gov-blue/5 transition-colors"
              >
                <span className="text-xl font-bold text-gov-dark">{i.name}</span>
                <span className="mt-3 text-gov-secondary leading-relaxed">{i.lede}</span>
                <span className="mt-4 text-sm font-semibold text-gov-blue">
                  {i.research.length} studies
                  {i.delivered.length > 0
                    ? `, ${i.delivered.length} delivered engagement${i.delivered.length === 1 ? '' : 's'}`
                    : ''}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Industries;
