import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';
const SCORECARD = 'https://github.com/fabio-rovai/payout-assurance-standard/blob/main/docs/BASIS_RISK.md';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/basis-risk-false-negative#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/basis-risk-false-negative',
  headline: 'The 8 km/h that decided a season: computing a documented false negative in parametric crop cover | Tesseract Academy',
  description:
    'Severe Tropical Storm Nalgae came ashore in the Philippines at 110 km/h, eight short of the 118 km/h that defines a typhoon, and destroyed roughly 67,000 tonnes of mostly rice worth about PHP 1.3 billion. A wind trigger set at typhoon strength pays nothing for that. We compute the result from public records and argue that basis risk should be published as a product disclosure before sale, not discovered by farmers after failure.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Index insurance and basis risk: A reconsideration',
      author: 'Erik Lichtenberg and Eva Iglesias',
      isPartOf: 'Journal of Development Economics',
      volumeNumber: '158',
      datePublished: '2022',
      sameAs: 'https://doi.org/10.1016/j.jdeveco.2022.102883',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Basis risk, social comparison, perceptions of fairness, and demand for insurance: A field experiment in Ethiopia',
      author: 'Berber Kramer, Maria Porter and Solomon B. Wassie',
      isPartOf: 'Journal of Risk and Insurance',
      datePublished: '2025',
      sameAs: 'https://doi.org/10.1111/jori.70015',
    },
  ],
  keywords:
    'basis risk, index insurance, parametric insurance, false negative, Typhoon Nalgae, Paeng, PAGASA, Philippines, rice, crop insurance, adaptation finance, product disclosure, trust',
};

export const BasisRiskFalseNegative: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The 8 km/h that decided a season
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Basis risk is usually discussed as a modelling property. It is also an arithmetic fact you can
        publish about a specific product and a specific storm, before anyone sells it. Here is one,
        computed from public records.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Nalgae</h2>
      <p className="text-gov-dark leading-relaxed">
        Severe Tropical Storm Nalgae, locally Paeng, made landfall at Virac in Catanduanes on 29 October
        2022. Reported ten-minute maximum sustained winds at landfall were 110 km/h. PAGASA's current
        scale puts the boundary of a typhoon at 118 km/h. Nalgae arrived eight kilometres per hour short
        of being a typhoon.
      </p>
      <p className="text-gov-dark leading-relaxed">
        It killed over a hundred people, affected more than two million, and the Department of
        Agriculture reported roughly 67,000 tonnes of agricultural losses worth about PHP 1.3 billion,
        the bulk of it in rice.
      </p>
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-rose-800">The computed result</p>
        <p className="text-gov-dark leading-relaxed">
          Run a wind-indexed product whose trigger fires at typhoon strength against Nalgae and it pays
          nothing. Not a reduced amount. Nothing. The storm that destroyed the crop was, by the
          instrument's own definition, not the kind of event the instrument covers.
        </p>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Our replay computes this for two encoded products across five Philippine landfalls, and Nalgae
        is the only row where both pay zero. That is what makes it useful: the four catastrophic
        super-typhoons in the set all trigger comfortably, which is exactly why a product looks fine
        when you test it against the storms everyone remembers.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this matters more than the modelling debate</h2>
      <p className="text-gov-dark leading-relaxed">
        Erik Lichtenberg and Eva Iglesias, in a reconsideration of the basis-risk literature published in
        the Journal of Development Economics in 2022, argue that the standard account has been too quick
        to treat basis risk as the explanation for low uptake, and that contract design deserves more of
        the blame. We think that is right, and we think it sharpens rather than blunts the case for
        publishing results like the one above.
      </p>
      <p className="text-gov-dark leading-relaxed">
        If the problem is partly design, then design is a decision somebody made, and decisions can be
        disclosed. A trigger set at 118 km/h rather than 90 km/h is a choice about which losses the
        product declines to cover. That choice may be entirely defensible on pricing grounds. What is
        not defensible is that it is currently invisible to the household, to the cooperative selling
        it, and often to the donor paying the premium.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Berber Kramer, Maria Porter and Solomon Wassie, in a field experiment in Ethiopia published in
        the Journal of Risk and Insurance in 2025, find that basis risk and what a neighbour was seen to
        receive move perceived fairness and willingness to pay. That is the mechanism this work is aimed
        at. Households in these schemes do not price a product. They judge whether it treated them
        fairly, and they judge it collectively, in a barangay, over years. One insured farmer who got
        nothing after a bad blow will suppress a whole village's demand, and no amount of premium
        subsidy repairs that.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The disclosure we think should be routine</h2>
      <p className="text-gov-dark leading-relaxed">
        Actuaries already backtest indices. What does not exist is a shared, published, machine-checkable
        form of the result, so the answer travels with the product instead of staying in the pricing
        model. Concretely, for any parametric product, before sale:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gov-dark">
        <li>The historical events over the covered geography where the index did not reach the trigger.</li>
        <li>Of those, the ones with documented losses of the kind the product exists to cover.</li>
        <li>The margin by which each one missed, because 8 km/h reads very differently from 80 km/h.</li>
        <li>The measuring authority and the measurement basis, so the number can be independently recomputed.</li>
      </ul>
      <p className="text-gov-dark leading-relaxed">
        None of this requires proprietary data. Everything in our Nalgae result comes from public storm
        reporting and public agricultural loss figures. The obstacle has never been availability. It is
        that nobody has been obliged to put it in a form a third party can run.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What our own result does not show</h2>
      <p className="text-gov-dark leading-relaxed">
        The five-event set is a demonstration, not a full historical ingest. The two encoded products
        carry reconstructed tier values, because no Philippine issuer publishes its payout table, so this
        is a demonstration of the method rather than a finding about any named issuer's behaviour. And
        the replay feeds landfall wind to both products because gridded per-parcel wind fields are not in
        the repository, which means it understates spatial basis risk by construction. We spell that out
        in{' '}
        <Link to="/research/spatial-basis-disclosure" className="text-gov-blue underline hover:text-gov-blue-dark">
          the article on spatial basis
        </Link>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The Nalgae arithmetic itself is not affected by any of that. A 110 km/h storm does not reach a
        118 km/h trigger under any spatial refinement, because refining the location can only lower the
        wind the household experienced, not raise it above the landfall maximum.
      </p>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Reproduce it</h2>
      <p className="text-gov-dark leading-relaxed">
        One command regenerates the scorecard from the event data and the product encodings. The event
        file carries the measuring agency and a primary-or-secondary marker on every row.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={SCORECARD} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          Read the basis-risk scorecard <ExternalLink className="w-4 h-4" />
        </a>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          The standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Part of the{' '}
        <Link to="/research/parametric-payout-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Parametric Payout Assurance Standard</Link>.
        Cited: Lichtenberg and Iglesias, Journal of Development Economics 158 (2022) 102883; Kramer,
        Porter and Wassie, Journal of Risk and Insurance (2025), doi 10.1111/jori.70015. If you hold an
        official product wording, we will encode it and publish the scorecard. Contact Fabio Rovai,
        fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default BasisRiskFalseNegative;
