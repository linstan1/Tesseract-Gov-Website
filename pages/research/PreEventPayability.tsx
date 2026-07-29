import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/pre-event-payability#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/pre-event-payability',
  headline: 'The payout that fails before the storm: register integrity as the binding constraint in adaptation finance | Tesseract Academy',
  description:
    'Where climate cover is premium-subsidised or donor-paid and enrolled in bulk from a public register, whether a household is actually payable is decided before any event: correct name, correct barangay, a georeferenced parcel or registered gear, and a live payout instrument in a matching name. Four open validation rules find those failures while there is still time to fix them, and turn an audit into a to-do list rather than a post-mortem.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'How basis risk and spatiotemporal adverse selection influence demand for index insurance: Evidence from northern Kenya',
      author: 'Nathaniel D. Jensen, Andrew G. Mude and Christopher B. Barrett',
      isPartOf: 'Food Policy',
      volumeNumber: '74',
      datePublished: '2018',
      sameAs: 'https://doi.org/10.1016/j.foodpol.2018.01.002',
    },
  ],
  keywords:
    'payability, register integrity, RSBSA, FishR, bulk enrolment, index insurance, parametric insurance, adaptation finance, SHACL, data quality, last mile, Philippines, cash card, mobile wallet, name matching',
};

const RULES = [
  { id: 'P1', name: 'The unreconcilable entry', detail: 'No register identifier, no recorded name, no barangay, no municipality, or no linked product. Without these the entry cannot be reconciled against a payout file at all, and a wrong or missing barangay is a documented cause of misdirected payment.' },
  { id: 'P2', name: 'No georeference', detail: 'The parcel or registered gear has no location. A trigger settled on conditions at the insured location cannot be evaluated for this household even in principle. The product is sold, the premium is paid, and the index is unevaluable.' },
  { id: 'P3', name: 'Nowhere to land', detail: 'No payout instrument recorded, or one whose status is dormant or closed. The trigger can fire perfectly and the money still has nowhere to go. A dormant cash card is a payout that will bounce.' },
  { id: 'P4', name: 'The unexplained name mismatch', detail: 'The account name on the instrument does not match the register, and no reason is stated. Some mismatches are entirely legitimate, such as a married name or a suffix, which is why a declared mismatch conforms and an undeclared one does not.' },
];

export const PreEventPayability: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The payout that fails before the storm
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Almost all attention in adaptation finance verification points backwards: did the payout arrive,
        did the index behave. The failure that actually decides whether a household gets paid happens
        before the event, in the register, and it is the only kind of failure you can still fix.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The household that made no decision</h2>
      <p className="text-gov-dark leading-relaxed">
        A great deal of climate cover in the Philippines is not bought. It is conferred. Cover for
        register-listed subsistence farmers and fisherfolk is premium-subsidised, and in the flagship
        parametric scheme for small-scale fishers the premium is donor-paid and the cover is offered as a
        benefit of registration. Enrolment is frequently done in bulk by a municipal agriculture office
        working from the register.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two consequences follow, and most verification designs miss both. First, the household often does
        not know it is covered, so there is no promise for it to disbelieve and no demand for it to
        express. Second, and more practically, every decision that determines whether money can reach
        that household has already been made by the time a storm forms, and it was made by a data-entry
        process rather than by an underwriter.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Because the fisher product ties cover to registration, the register is not administrative
        background. It is the enrolment mechanism, the eligibility test and the payment instruction, all
        in one artefact that nobody treats as safety-critical.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Four rules, and the failure each one catches</h2>
      <div className="space-y-4">
        {RULES.map((r) => (
          <div key={r.id} className="border-l-4 border-emerald-300 pl-4">
            <p className="font-semibold text-gov-dark">
              <span className="font-mono text-emerald-800">{r.id}</span>  {r.name}
            </p>
            <p className="text-gov-secondary leading-relaxed">{r.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-gov-dark leading-relaxed">
        Run these over a register and a payout file and the output is a list of households who could not
        currently be paid, with a reason attached to each. That is the whole point. A settlement audit
        tells you the payment failed and by then the season is gone. A payability audit tells you it will
        fail, in time to correct a spelling, georeference a parcel, or reactivate a card.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this is politically easier, not harder</h2>
      <p className="text-gov-dark leading-relaxed">
        There is a practical reason to lead with payability rather than settlement, and it is about who
        will agree to be audited. A settlement audit applied to a public insurer's records produces an
        externally auditable count of entitlements that were owed and never paid. That is a finding an
        institution has every reason to refuse, and a competent government lawyer will stop it in the
        first meeting.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A payability audit produces a to-do list that makes the municipal office and the policyholder
        look competent when they act on it. The incentives point the same way for once: nobody in the
        chain wants to discover after a typhoon that four hundred registered fishers had dead cash cards.
        That alignment is the difference between a standard that gets adopted and one that gets admired.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where this sits against the demand literature</h2>
      <p className="text-gov-dark leading-relaxed">
        Nathaniel Jensen, Andrew Mude and Christopher Barrett, writing in Food Policy in 2018 on index
        insurance in northern Kenya, show how basis risk and spatiotemporal adverse selection shape
        demand, in a setting where households are making real purchase decisions. Their framework is the
        right one for a market with buyers.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Our argument is about what happens to that framework when the purchase decision is removed.
        Under bulk enrolment from a public register, demand elasticity stops being the operative variable
        for whether a household benefits, and administrative data quality takes its place. Nothing in the
        demand literature is wrong; it is simply answering a different question from the one a
        donor-funded, register-enrolled scheme faces. And when those households do eventually face a real
        decision, on top-up cover above the free layer or on renewal after a subsidy lapses, what they
        will price is their memory of whether the free layer ever worked.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">No names have to leave the building</h2>
      <p className="text-gov-dark leading-relaxed">
        The name-match check is the one that looks like it needs personal data, and it does not. In the
        standard, the comparison result is an asserted boolean computed at source, alongside an optional
        stated reason for a legitimate mismatch. A register holder can run the rules and publish
        rule-failure counts without sending anyone a list of names, and the worked examples in the
        repository use pseudonymous codes throughout.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is deliberate. The households most exposed to climate risk are disproportionately the ones
        without documentation, so a verification scheme that demands documentation to confirm they were
        paid would exclude exactly the people it exists to protect.
      </p>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Run it on a real register</h2>
      <p className="text-gov-dark leading-relaxed">
        The rules, a conforming worked example including a declared legitimate name mismatch, and a
        deliberately broken register that trips all four, are public. One command runs them.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          payout-assurance-standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <Link to="/how-to-buy" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Talk to us about a payability audit
        </Link>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Part of the{' '}
        <Link to="/research/parametric-payout-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Parametric Payout Assurance Standard</Link>.
        Cited: Jensen, Mude and Barrett, Food Policy 74 (2018) 172 to 198. If you run a register or a
        scheme, we will run the payability rules over the first one at no charge and publish nothing
        without your sign-off. Contact Fabio Rovai, fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default PreEventPayability;
