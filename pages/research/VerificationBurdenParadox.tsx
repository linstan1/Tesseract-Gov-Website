import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/verification-burden-paradox#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/verification-burden-paradox',
  headline: 'Verification cuts both ways: why adaptation finance needs checking that costs the household nothing | Tesseract Academy',
  description:
    'Absent verification destroys trust in climate insurance, and added verification destroys uptake. Vietnam is the cautionary case: heavy premium subsidy under a national agricultural insurance programme, and participation that still fell away, with administrative and loss-verification burden among the documented causes. The resolution is that verification has to sit on the institution rather than the household, and be machine-checkable rather than clerical.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: "Understanding farmers' valuation of agricultural insurance: Evidence from Vietnam",
      author: 'Michael King and Anuj Pratap Singh',
      isPartOf: 'Food Policy',
      volumeNumber: '94',
      datePublished: '2020',
      sameAs: 'https://doi.org/10.1016/j.foodpol.2020.101861',
    },
  ],
  keywords:
    'Vietnam, agricultural insurance, Decree 58/2018, premium subsidy, verification burden, loss adjustment, index insurance, parametric insurance, administrative cost, adaptation finance, Mekong Delta, uptake',
};

export const VerificationBurdenParadox: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Verification cuts both ways
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        We argue elsewhere that unverifiable payouts destroy trust in climate cover. The honest
        counter-argument is that verification is exactly what has already killed several agricultural
        insurance schemes. Both are true, and reconciling them determines where the checking has to sit.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The objection we had to answer</h2>
      <p className="text-gov-dark leading-relaxed">
        When we first drafted the case for machine-checkable payout assurance, the sharpest criticism it
        received was that our own supporting example pointed the other way. Vietnam's national
        agricultural insurance programme, established under Decree 58/2018 with premium support that at
        points reached 90 per cent for poor households, has repeatedly failed to reach expected
        participation. Reach for that as evidence that price is not the constraint and you invite the
        obvious reply: the documented obstacles there were administrative. Cumbersome procedures. Slow
        appraisal. Loss verification requiring multiple signatures and official certification before a
        claim could move. Insurers withdrawing after poor loss experience.
      </p>
      <p className="text-gov-dark leading-relaxed">
        In other words, the country most often cited for weak uptake despite heavy subsidy is a country
        where the burden of verification was placed on the claimant, and where that burden is part of
        why the thing did not work. Citing it in support of "we need more verification" is, on its face,
        citing a case against yourself.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We removed the example, then decided the better response was to write about it, because the
        tension is the interesting part.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two different things called verification</h2>
      <p className="text-gov-dark leading-relaxed">
        The word covers two mechanisms with opposite effects on a household.
      </p>
      <div className="space-y-4">
        <div className="border-l-4 border-rose-300 pl-4">
          <p className="font-semibold text-gov-dark">Verification as a precondition of payment</p>
          <p className="text-gov-secondary leading-relaxed">
            The claimant must prove the loss. Notices of loss within a window, adjuster visits,
            documentary evidence, official signatures. Every step is a point at which a legitimate claim
            can die, and every step costs the household time it does not have in the weeks after a
            disaster. This is the kind that suppresses uptake, and the kind parametric cover was invented
            to delete.
          </p>
        </div>
        <div className="border-l-4 border-emerald-300 pl-4">
          <p className="font-semibold text-gov-dark">Verification as an obligation on the payer</p>
          <p className="text-gov-secondary leading-relaxed">
            The scheme must be able to show that what it promised is what it did. Was the trigger
            specifiable. Was the household payable. Did the money arrive. The household supplies nothing
            and proves nothing. The burden sits entirely on institutions that already hold the records.
          </p>
        </div>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Parametric products are a large improvement on the first kind and have so far done nothing about
        the second. That is the gap. A product can settle in three days without a single farm visit and
        still leave nobody able to say whether the payment reached the person it was owed to.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the valuation evidence suggests</h2>
      <p className="text-gov-dark leading-relaxed">
        Michael King and Anuj Pratap Singh, writing in Food Policy in 2020 on farmers' valuation of
        agricultural insurance in Vietnam, examine how households actually value these products rather
        than assuming they value them at actuarial worth. That framing matters for our argument in a
        specific way: if valuation is behavioural and contextual rather than purely actuarial, then the
        experience of the process is part of the product. A scheme that pays eventually, after four
        signatures, is not a slower version of a scheme that pays in three days. It is a different good,
        and households price it accordingly.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Extend that reasoning and it applies to assurance too. If a household's valuation reflects
        experience, then a scheme where members can see that neighbours were paid, promptly and in full,
        is worth more than an identical scheme where nobody can tell. The assurance is not overhead on
        the product. It is a feature of it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three design rules that follow</h2>
      <p className="text-gov-dark leading-relaxed">
        This tension is why our standard is built the way it is, and each of these is a constraint we hold
        ourselves to rather than a feature we advertise.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gov-dark">
        <li>
          <strong>Nothing new is asked of the household.</strong> No app, no smartphone, no identity
          document, no form. Every input comes from records an insurer, public insurer, cooperative or
          wallet provider already holds. If a rule needed the beneficiary to do something, it would be
          reproducing the failure it is meant to detect.
        </li>
        <li>
          <strong>Checking is machine-checkable, not clerical.</strong> The reason verification became a
          burden in the first place is that it was performed by people, one claim at a time. Twelve
          formal rules over a register and a ledger cost nothing per household and scale to a whole
          scheme.
        </li>
        <li>
          <strong>An honest unknown conforms.</strong> A cheque issued with no encashment record, declared
          as unknown with a stated reason, passes validation. Silence about the same cheque fails. This
          is deliberate: a standard that punished institutions for admitting gaps would teach them to
          hide gaps, and we would rather have the truthful ledger than the flattering one.
        </li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where we think we could still be wrong</h2>
      <p className="text-gov-dark leading-relaxed">
        The claim that institution-side assurance changes household behaviour is unproven, and we have
        not proven it. It is plausible on the fairness evidence, and it is the kind of thing that needs a
        field study rather than an argument. There is also a real possibility that publishing an accurate
        basis-risk profile for a mediocre product lowers demand for it rather than raising trust in the
        market, which would be an uncomfortable result and a genuinely useful one. We would publish it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What we are confident about is the narrower point: whatever the behavioural effect turns out to
        be, the cost of finding out should not be paid by a fisher standing at a remittance counter with
        the wrong name on a cheque.
      </p>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The standard, and its limits</h2>
      <div className="flex flex-wrap gap-3">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          payout-assurance-standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <Link to="/how-to-buy" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Work with us
        </Link>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Part of the{' '}
        <Link to="/research/parametric-payout-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Parametric Payout Assurance Standard</Link>.
        Cited: King and Singh, Food Policy 94 (2020) 101861. Related:{' '}
        <Link to="/research/pre-event-payability" className="text-gov-blue underline hover:text-gov-blue-dark">register integrity as the binding constraint</Link>.
        Contact Fabio Rovai, fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default VerificationBurdenParadox;
