import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';
const BUILD_REPORT = 'https://github.com/fabio-rovai/payout-assurance-standard/blob/main/BUILD_REPORT.md';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/assurance-provenance-discipline#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/assurance-provenance-discipline',
  headline: 'What a certification standard owes its own evidence | Tesseract Academy',
  description:
    'We built a standard that refuses unsourced claims, then caught ourselves citing Wikipedia for a landfall wind speed. This is the provenance discipline we adopted in response: a confidence level on every product encoding, a primary-or-secondary marker on every data row, negative test cases for every rule, and a build report that lists what we could not obtain. A rule set that passes everything is decoration.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Index Insurance Quality and Basis Risk: Evidence from Northern Kenya',
      author: 'Nathaniel D. Jensen, Christopher B. Barrett and Andrew G. Mude',
      isPartOf: 'American Journal of Agricultural Economics',
      volumeNumber: '98',
      datePublished: '2016',
      sameAs: 'https://doi.org/10.1093/ajae/aaw046',
    },
  ],
  keywords:
    'provenance, research integrity, reproducibility, certification, assurance, negative testing, SHACL, encoding confidence, primary sources, build report, index insurance quality, data standards',
};

const LEVELS = [
  { level: 'official', meaning: 'Taken from the issuer binding wording. Nothing in the repository currently carries this level, and saying so is the point.' },
  { level: 'public-documentation', meaning: 'Terms published by the issuer but not the contractual wording.' },
  { level: 'reconstructed', meaning: 'Structure from public announcements, with stand-in values where the issuer publishes none. Every product encoding we hold is at this level.' },
];

const DISCIPLINES = [
  { name: 'A confidence level on every encoding', detail: 'Each product carries a machine-readable confidence value, and a validation rule fails any encoding that omits it. You cannot quietly present a reconstruction as a reading of the contract, because the field is mandatory and the vocabulary enumerates the permitted answers.' },
  { name: 'A source marker on every data row', detail: 'Each historical event carries the measuring agency and whether the source is primary or secondary. One of our five events cites a primary PAGASA document. The other four do not, and the file says so on the row rather than in a caveat nobody reads.' },
  { name: 'A negative test for every rule', detail: 'Twelve rules, twelve cases built specifically to trip them. Before we added a deliberately brochure-grade product encoding, five of the twelve rules had only ever been asserted to pass on well-formed input, which proves nothing about whether they fire.' },
  { name: 'A build report of what could not be obtained', detail: 'Enumerating the public archive to establish that PAGASA does not publish per-storm summaries for four of our five event years is more useful than a sentence apologising for weak sourcing, because it converts a vague weakness into a specific, closeable task.' },
  { name: 'Corrections kept in the record', detail: 'We had the wrong partner institutions for a government insurance pilot, and described a pilot as launched. Both are fixed in the text and preserved in the commit history and the build report, because a standard about verifiability should be checkable on its own record.' },
];

export const AssuranceProvenanceDiscipline: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        What a certification standard owes its own evidence
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        We wrote a rule saying that an encoding without stated provenance is an assertion rather than a
        certification. Then we caught ourselves citing Wikipedia for a landfall wind speed. This is what
        we did about it, and why we think the answer generalises to anyone building assurance tooling.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The self-catch</h2>
      <p className="text-gov-dark leading-relaxed">
        Our standard's first rule requires a product encoding to name its source documentation and state
        how close that source is to the issuer's binding wording. The intent was to stop anyone dressing
        a brochure up as a contract. Having written it, we then assembled a small set of historical
        typhoon landfalls to replay products against, and sourced the wind speeds from whatever was
        reachable: one PAGASA primary document, two news reports of PAGASA bulletins, one figure from a
        different meteorological agency, and one from Wikipedia.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every number was accurate. We checked them. That is not the point. A repository that says
        overstating your own evidence is worthless cannot cite an encyclopedia for a load-bearing
        physical measurement and describe the result as sourced. The inconsistency was ours, it was
        found by adversarial review before publication rather than after, and the fix was not to hide it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Five disciplines we now hold to</h2>
      <div className="space-y-4">
        {DISCIPLINES.map((d) => (
          <div key={d.name} className="border-l-4 border-sky-300 pl-4">
            <p className="font-semibold text-gov-dark">{d.name}</p>
            <p className="text-gov-secondary leading-relaxed">{d.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Confidence as a first-class field</h2>
      <p className="text-gov-dark leading-relaxed">
        The mechanism doing most of the work is small: a mandatory enumerated field on every product
        encoding.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Level</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it means</th>
            </tr>
          </thead>
          <tbody>
            {LEVELS.map((l, i) => (
              <tr key={l.level} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-mono font-medium text-gov-dark whitespace-nowrap">{l.level}</td>
                <td className="px-4 py-3 text-gov-secondary">{l.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Because the level is machine-readable, a downstream user can filter. Someone comparing products
        for a regulator can require official encodings and ignore everything else, without having to read
        our prose or trust our judgement. That is the difference between a caveat and a control.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Quality is measurable, and someone should measure ours</h2>
      <p className="text-gov-dark leading-relaxed">
        Nathaniel Jensen, Christopher Barrett and Andrew Mude, writing in the American Journal of
        Agricultural Economics in 2016, did something in this field that we think is under-imitated: they
        measured the quality of an index insurance product rather than assuming it, and showed how much
        residual risk a given contract left a household carrying.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The obvious extension, and the one we would like someone to perform on us, is that assurance
        tooling deserves the same treatment. A validator is a product. It has a false-negative rate: the
        failures it does not catch. It has a coverage profile: the failure classes it was never designed
        to see. We have made a start by ensuring every rule has a case that trips it, but that establishes
        only that each rule is live, not that the twelve are sufficient. We do not know what fraction of
        real-world payout failures they would catch, because we have not yet run them over a real ledger.
        The honest version of that sentence appears in the repository, not only here.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this is a competitive argument, not a confession</h2>
      <p className="text-gov-dark leading-relaxed">
        There is a tempting read of this article in which we are being admirably humble. That is not the
        argument. The argument is that in assurance work, declared limits are the product. Anyone can
        publish a validator. What makes one worth adopting by a regulator, a donor or a public insurer is
        a legible account of what it does not do, because that is what lets them decide where it fits
        without discovering the gaps themselves in production.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We hold the same position in adjacent work. In our{' '}
        <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">
          industrial data crosswalks
        </Link>{' '}
        the headline finding is that four of seven standards examined cannot reject a mis-mapping at all,
        which means the reasoner check most projects rely on could never have failed. That is the same
        idea in a different domain: a check that cannot fail is not evidence, and the useful contribution
        is often to say so out loud.
      </p>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Read the build report first</h2>
      <p className="text-gov-dark leading-relaxed">
        It lists what was fetched and from where, what was computed rather than asserted, what could not
        be obtained and why, and the corrections made during the build.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={BUILD_REPORT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          BUILD_REPORT.md <ExternalLink className="w-4 h-4" />
        </a>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          The standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Part of the{' '}
        <Link to="/research/parametric-payout-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Parametric Payout Assurance Standard</Link>.
        Cited: Jensen, Barrett and Mude, American Journal of Agricultural Economics 98 (2016) 1450 to
        1469. If you find a rule that does not fire when it should, or a claim in the repository that
        outruns its source, open an issue and we will publish the correction. Contact Fabio Rovai,
        fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default AssuranceProvenanceDiscipline;
