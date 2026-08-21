import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/skills-england-esco-crosswalk';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/skills-england-esco-crosswalk#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/skills-england-esco-crosswalk',
  headline: 'Where England’s occupational standards meet Europe’s skills vocabulary | Tesseract Academy',
  description:
    'An open SKOS crosswalk from the 1,269 Skills England occupational standards to the EU ESCO occupation classification, with conservative, labelled confidence: 114 exact, 281 close, 270 related and 604 unmatched. The large unmatched tail is the headline, quantifying where England’s occupational language diverges from ESCO. Published in Open Ontologies under CC BY 4.0.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-10',
  dateModified: '2026-07-10',
  about: {
    '@type': 'Dataset',
    name: 'Skills England to ESCO occupation crosswalk',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'ESCO, Skills England, occupational maps, skills taxonomy, apprenticeship standards, labour market, SOC, SKOS crosswalk, skills mapping, occupation classification, technical education, adult skills',
};

const BANDS = [
  { band: 'exactMatch', def: 'label identity (similarity ≥ 0.95)', n: 114, cls: 'bg-green-50 text-green-700 border-green-200' },
  { band: 'closeMatch', def: 'strong lexical match (≥ 0.82)', n: 281, cls: 'bg-sky-50 text-sky-700 border-sky-200' },
  { band: 'relatedMatch', def: 'partial lexical match (≥ 0.62)', n: 270, cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  { band: 'unmatched', def: 'no lexical match ≥ 0.62', n: 604, cls: 'bg-red-50 text-red-700 border-red-200' },
];

export const SkillsEnglandEscoCrosswalk: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Skills &amp; Labour Market</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Where England&rsquo;s occupational standards meet Europe&rsquo;s skills vocabulary
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          To read English apprenticeship and skills data against the reference vocabulary the rest of Europe uses, you need a crosswalk, and you need to know how far to trust each link. This is that crosswalk, built openly, stated honestly as a lexical baseline, and published with its gaps rather than around them.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The direction of travel</h2>
          <p className="text-gov-dark leading-relaxed">
            <a href="https://esco.ec.europa.eu/en" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">ESCO</a> is the reference classification of occupations and skills across Europe, used for labour-market analytics, matching and cross-border comparison. England&rsquo;s <a href="https://www.gov.uk/government/organisations/skills-england" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Skills England</a> maintains a separate, nationally specific set of occupational standards behind apprenticeships and technical education. As skills policy leans harder on data (bootcamps, adult-skills funding, local skills improvement plans), the need to translate between the national taxonomy and the international one only grows. A crosswalk is the join, and it is only useful if it is honest about confidence.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The method, and its honest label</h2>
          <p className="text-gov-dark leading-relaxed">
            For each of the 1,269 Skills England occupations, we compare its name against every ESCO candidate&rsquo;s title and English alternative labels, keep the best normalised similarity (sequence ratio combined with token overlap and containment), and band it. This is a <strong>lexical</strong> crosswalk, stated as such: a candidate-generation and triage asset, not an authoritative equivalence. Every link carries its similarity score and match method so a user can set their own threshold, and the unmatched set is published in full.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {BANDS.map((b) => (
            <div key={b.band} className={`rounded-xl p-5 border ${b.cls}`}>
              <div className="flex items-baseline justify-between">
                <code className="text-sm font-bold">{b.band}</code>
                <span className="text-2xl font-bold tabular-nums font-mono">{b.n}</span>
              </div>
              <p className="text-xs mt-1 opacity-90">{b.def}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The gap is the finding</h2>
          <p className="text-gov-dark leading-relaxed">
            Just over half of England&rsquo;s occupational standards (52%) find any lexical match to ESCO, and only 31% match strongly. The <strong>604 unmatched</strong> occupations are not a failure of the method; they are a measurement of how far England&rsquo;s occupational language sits from ESCO&rsquo;s, which is exactly the surface a semantic crosswalk or a national extension to ESCO has to cover. A lexical method sets the floor and names the work; an embeddings-plus-adjudication approach would recover more of the related and unmatched tail, and that is stated as the next step rather than quietly assumed.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            The crosswalk builds directly on our <Link to="/research/skills-england-occupational-maps" className="text-gov-blue underline hover:text-gov-blue-dark">Skills England occupational maps ontology</Link> (the 1,269 standards modelled as a graph with the SOC crosswalk), and pairs with our <a href="https://github.com/fabio-rovai/open-ontologies/blob/main/case-studies/skills-mobility/case-study.md" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">open PIAAC skills-mobility research</a>. Together they let English skills data be read against SOC for national statistics and against ESCO for international comparison, from one open, reproducible base.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-initiated open research. Skills England names under the Open Government Licence v3.0; ESCO &copy; European Union, CC BY 4.0; this crosswalk CC BY 4.0. Endorsed by neither body.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">View the open crosswalk</p>
          <p className="text-sm text-gov-secondary mt-1">Banded SKOS mappings, the full unmatched set, and the reproducible build.</p>
        </div>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">
          View on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </article>
  );
};
