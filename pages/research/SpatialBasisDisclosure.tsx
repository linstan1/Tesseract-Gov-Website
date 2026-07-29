import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/spatial-basis-disclosure#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/spatial-basis-disclosure',
  headline: 'Two products, one headline, different promises: spatial basis is the disclosure that decides who gets paid | Tesseract Academy',
  description:
    'Two parametric products can advertise an identical 118 km/h trigger and pay on completely different sets of storms, because one settles on wind at the storm centre at landfall and the other on wind over the insured parcel. That difference is invisible on any product register and detectable from the encoding alone, with no event data required. A validation rule makes the omission a failure rather than a silence.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Managing basis risk with multiscale index insurance',
      author: 'Ghada Elabed, Marc F. Bellemare, Michael R. Carter and Catherine Guirkinger',
      isPartOf: 'Agricultural Economics',
      volumeNumber: '44',
      datePublished: '2013',
      sameAs: 'https://doi.org/10.1111/agec.12025',
    },
  ],
  keywords:
    'spatial basis risk, idiosyncratic basis risk, multiscale index insurance, parametric insurance, product disclosure, ontology, SHACL, comparability, product register, storm centre, landfall, insured parcel',
};

const COMPARISON = [
  { field: 'Advertised trigger', a: '118 km/h', b: '118 km/h', same: true },
  { field: 'Measurement basis', a: '10-minute sustained', b: '10-minute sustained', same: true },
  { field: 'Measuring authority', a: 'PAGASA', b: 'PAGASA', same: true },
  { field: 'Spatial basis', a: 'Storm centre at landfall, national bulletin value', b: 'Insured parcel, georeferenced, remote-sensed wind field', same: false },
  { field: 'Settlement promise', a: '14 days', b: '5 days', same: false },
];

export const SpatialBasisDisclosure: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Two products, one headline, different promises
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Where an index is measured decides who gets paid, and it is the field most often left unstated.
        Two products advertising the same threshold can be entirely different instruments, and you can
        detect it from the paperwork without touching a single storm record.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The same number, twice</h2>
      <p className="text-gov-dark leading-relaxed">
        Below are two encoded parametric products from our repository, compared field by field. Four
        fields agree, including the headline number a buyer would compare. Two do not, and those two
        decide everything.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Field</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fisher product</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Rice product</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((c, i) => (
              <tr key={c.field} className={`border-b border-gov-border/50 ${c.same ? (i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40') : 'bg-amber-50'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{c.field}</td>
                <td className="px-4 py-3 text-gov-secondary">{c.a}</td>
                <td className="px-4 py-3 text-gov-secondary">{c.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        A product settled on wind at the storm centre pays every household in the scheme when the eye
        crosses the coast, and pays nothing to a household two hundred kilometres away that lost its
        season to the same storm. A product settled over the insured parcel does close to the opposite:
        it can pay a household the national bulletin never mentioned, and decline one directly under a
        landfall whose local wind field was weaker than the headline.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Neither behaviour is wrong. They are different products for different risks, and a fisher whose
        exposure is storm surge and swell may well be better served by a landfall reference than a
        parcel one. The problem is that on any brochure, product register or comparison table these two
        appear identical.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Detected from the encoding, not the payout table</h2>
      <p className="text-gov-dark leading-relaxed">
        There is a methodological point here that we think is the most transferable part of this work. The
        divergence above is found by reading the two encodings against each other. No event data is
        involved. No hazard archive, no gridded wind field, no historical replay.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This matters because the empirical route is expensive and slow. Quantifying spatial basis risk
        properly needs per-location wind fields over decades, which most schemes will never commission.
        A structural check needs one afternoon and a text file, and it answers a genuinely useful
        question: are these two things the same kind of promise? Our own replay honestly cannot
        demonstrate the numerical consequence, because it feeds landfall wind to both products for want
        of gridded fields, and therefore understates the divergence by construction. We say so in the
        scorecard at the point a reader might otherwise over-read the table.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the rule we wrote is a disclosure rule, not a measurement rule. R3 requires every index to
        state its measurement basis and its spatial basis, and fails the encoding where either is
        missing. It does not ask whether the choice was a good one. It asks that the choice be visible.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Standing on Elabed, Bellemare, Carter and Guirkinger</h2>
      <p className="text-gov-dark leading-relaxed">
        The intellectual groundwork here is not ours. Ghada Elabed, Marc Bellemare, Michael Carter and
        Catherine Guirkinger, writing in Agricultural Economics in 2013, set out multiscale index
        insurance precisely to attack the gap between an index measured at one scale and a loss suffered
        at another, and showed that contracts can be designed to reduce the residual the household is
        left carrying.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Our contribution is narrower and, we would argue, complementary. Their work improves the
        instrument. Ours makes the instrument's scale choice legible to everyone downstream of the
        actuary: the cooperative officer explaining it, the municipal technician enrolling people into
        it, the donor paying the premium, and the regulator asked to approve a market of these things.
        A multiscale contract is a better product. A stated spatial basis is what lets a buyer tell that
        it is a better product.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What a product register could ask for tomorrow</h2>
      <p className="text-gov-dark leading-relaxed">
        Nothing here requires new legislation or new data collection. A regulator, a public insurer or a
        donor could require four fields on any parametric product they approve, fund or list:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gov-dark">
        <li>The index, and the authority whose published measurement settles it.</li>
        <li>The measurement basis, since a ten-minute sustained wind and a gust are different quantities.</li>
        <li>The spatial basis, stated as a location rule rather than implied.</li>
        <li>The comparator at the boundary, because "winds of 118 km/h" does not say whether 118 pays.</li>
      </ul>
      <p className="text-gov-dark leading-relaxed">
        Those four are machine-checkable, cheap to supply for any issuer who knows its own product, and
        together they make two products comparable for the first time. Everything else in our standard is
        optional next to this.
      </p>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The encodings are public</h2>
      <p className="text-gov-dark leading-relaxed">
        Both products above are in the repository, both labelled reconstructed because no Philippine
        issuer publishes its payout table. The comparison is generated from them rather than written by
        hand.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          payout-assurance-standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <Link to="/how-to-buy" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Discuss product comparability
        </Link>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Part of the{' '}
        <Link to="/research/parametric-payout-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Parametric Payout Assurance Standard</Link>.
        Cited: Elabed, Bellemare, Carter and Guirkinger, Agricultural Economics 44 (2013) 419 to 431. See
        also{' '}
        <Link to="/research/basis-risk-false-negative" className="text-gov-blue underline hover:text-gov-blue-dark">the computed false negative</Link>{' '}
        for what happens when the threshold, rather than the location, is the binding choice. Contact
        Fabio Rovai, fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default SpatialBasisDisclosure;
