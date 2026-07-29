import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/parametric-payout-assurance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/parametric-payout-assurance',
  headline:
    'Can a parametric climate insurance product prove it paid? An open assurance standard | Tesseract Academy',
  description:
    'An open vocabulary and twelve machine-checkable rules that audit a parametric climate insurance promise at the three points where it fails: whether the promise is specifiable at all, whether a registered household is payable before a storm, and whether the payout arrived after one. Includes a documented false negative computed from public records: Severe Tropical Storm Nalgae came ashore 8 km/h below a typhoon trigger and destroyed roughly 67,000 tonnes of mostly rice.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  about: {
    '@type': 'Dataset',
    name: 'Parametric Payout Assurance Standard (PPAS)',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'parametric insurance, index insurance, adaptation finance, climate adaptation, basis risk, payout verification, SHACL, ontology, OWL, Philippines, PCIC, BFAR, smallholder farmers, small-scale fishers, financial resilience, assurance standard, last mile payments',
};

const RULES = [
  { id: 'R1', group: 'promise', catches: 'The unspecifiable promise: no testable trigger, no source documentation, no stated settlement speed.' },
  { id: 'R2', group: 'promise', catches: 'The untraceable trigger: a threshold with no measuring authority, no unit, or an implicit comparator.' },
  { id: 'R3', group: 'promise', catches: 'The incomparable index: no stated measurement basis, or no stated spatial basis. The principal basis-risk disclosure.' },
  { id: 'R4', group: 'promise', catches: 'The ambiguous payout: a tier with no threshold, or a ratio outside 0 to 1.' },
  { id: 'P1', group: 'payability', catches: 'The unreconcilable register entry: no identifier, name, barangay, municipality or linked product.' },
  { id: 'P2', group: 'payability', catches: 'No georeference, so a trigger settled on the insured location cannot be evaluated for this household at all.' },
  { id: 'P3', group: 'payability', catches: 'Nowhere for the money to land: no payout instrument, or a dormant or closed one.' },
  { id: 'P4', group: 'payability', catches: 'The unexplained name mismatch between the instrument and the register, which is what fails at the counter.' },
  { id: 'R5', group: 'settlement', catches: 'The orphan entitlement: an amount owed with no event, product or beneficiary behind it.' },
  { id: 'R6', group: 'settlement', catches: 'The entitlement that vanished: owed, never disbursed, invisible in every existing system.' },
  { id: 'R7', group: 'settlement', catches: 'The unverified payment: no receipt confirmation and no stated reason why receipt is unknown.' },
  { id: 'R8', group: 'settlement', catches: 'Short payment: less disbursed than owed.' },
];

const GROUP_STYLES: Record<string, string> = {
  promise: 'bg-sky-50 text-sky-800',
  payability: 'bg-emerald-50 text-emerald-800',
  settlement: 'bg-amber-50 text-amber-800',
};

const REPLAY = [
  { event: 'Haiyan (Yolanda), Nov 2013', wind: '235', fisher: '100%', rice: '100%' },
  { event: 'Mangkhut (Ompong), Sep 2018', wind: '205', fisher: '100%', rice: '100%' },
  { event: 'Rai (Odette), Dec 2021', wind: '195', fisher: '100%', rice: '100%' },
  { event: 'Nalgae (Paeng), Oct 2022', wind: '110', fisher: 'no payout', rice: 'no payout' },
  { event: 'Doksuri (Egay), Jul 2023', wind: '175', fisher: '40%', rice: '50%' },
];

export const ParametricPayoutAssurance: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Can a parametric climate insurance product prove it paid?
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Adaptation finance is arriving in Southeast Asia through parametric cover, which pays on a
        measured index rather than an assessed loss. That makes the promise fast, and it makes it
        checkable in principle. In practice almost none of it is checked. We have published an open
        vocabulary and twelve machine-checkable rules that audit the promise at the three points where
        it actually fails.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Rules</p>
        <p className="text-3xl font-extrabold text-gov-dark">12</p>
        <p className="text-sm text-gov-secondary mt-1">each with a case built to trip it</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">The gap that decided a season</p>
        <p className="text-3xl font-extrabold text-gov-dark">8 km/h</p>
        <p className="text-sm text-gov-secondary mt-1">Nalgae, below a typhoon trigger, PHP 1.3bn of crops lost</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Fishers in one live scheme</p>
        <p className="text-3xl font-extrabold text-gov-dark">14,200</p>
        <p className="text-sm text-gov-secondary mt-1">24 coastal municipalities, up to USD 100 a cycle</p>
      </div>
    </div>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The instruments are already live</h2>
      <p className="text-gov-dark leading-relaxed">
        In November 2025 the Bureau of Fisheries and Aquatic Resources became policyholder for the
        Philippines' first parametric cover for small-scale fishers, alongside the Philippine Crop
        Insurance Corporation, Rare and Willis, developed through the Ocean Risk and Resilience Action
        Alliance with funding from the Government of Canada and the UK Government's Blue Planet Fund.
        It reaches 14,200 fishers across 24 coastal municipalities, pays up to USD 100 per policy
        cycle, and is offered as a benefit of fisher registration. Separately, in July 2025 the
        Department of Agriculture announced that PCIC is readying a parametric typhoon pilot for rice
        farmers with the Philippine Space Agency and the Philippine Rice Research Institute, targeting
        computation of compensation within three to five days of a storm exiting.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is real public and donor money, moving now, to households among the most climate-exposed
        on earth. The question we think is under-asked is not whether these instruments are a good
        idea. It is whether anyone outside the issuer can check that they did what they said.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three failure points, all of them record problems</h2>
      <p className="text-gov-dark leading-relaxed">
        A parametric product changes behaviour only if the household believes it will pay. That belief
        can break in three distinct places, and the three are usually held in three different systems
        by three different organisations, which is why nobody sees them together.
      </p>
      <div className="space-y-4">
        <div className="border-l-4 border-sky-300 pl-4">
          <p className="font-semibold text-gov-dark">1. The promise is not specifiable</p>
          <p className="text-gov-secondary leading-relaxed">
            A product can be marketed against a hazard without ever stating, in a form anyone could
            test, what fires a payout. Which index, measured by which authority, on what basis, at what
            threshold, with which comparator at the boundary. Where those are missing, no claim about
            the product can be verified or disputed, and a brochure is doing the work of a contract.
          </p>
        </div>
        <div className="border-l-4 border-emerald-300 pl-4">
          <p className="font-semibold text-gov-dark">2. The household is not payable, before the storm</p>
          <p className="text-gov-secondary leading-relaxed">
            Where cover is premium-subsidised or donor-paid and enrolled in bulk from a public register,
            the household often makes no purchase decision and sometimes does not know it is covered.
            What then decides whether they are paid is register integrity: is the name spelled
            correctly, in the right barangay, against a georeferenced parcel or registered gear,
            attached to a live payout instrument in a matching name. A misspelling or a dormant cash
            card defeats a perfectly designed trigger. Because the fisher product ties cover to
            registration, the register is not administrative background. It is the enrolment mechanism.
          </p>
        </div>
        <div className="border-l-4 border-amber-300 pl-4">
          <p className="font-semibold text-gov-dark">3. The payout cannot be shown to have arrived</p>
          <p className="text-gov-secondary leading-relaxed">
            Field research on Philippine last-mile climate insurance payouts found money moving through
            mobile wallets, remittance agents and cheques with no consistent way to verify whether
            payments were received, and friction at exactly the moment a household is most exposed.
            An entitlement can be owed, recorded, and then simply not settled, with nothing in any
            existing system that makes that state visible.
          </p>
        </div>
      </div>
      <p className="text-gov-dark leading-relaxed">
        None of these is a modelling problem. All three are record problems, which means all three are
        machine-checkable once somebody writes the rules down.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The twelve rules</h2>
      <p className="text-gov-dark leading-relaxed">
        Each rule exists because a documented failure exists. Two of them, R6 and R7, are written
        directly from the last-mile findings above. A rule set that passes everything is decoration, so
        every one of the twelve has a negative test case in the repository built specifically to trip
        it.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Rule</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Stage</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">What it catches</th>
            </tr>
          </thead>
          <tbody>
            {RULES.map((r, i) => (
              <tr key={r.id} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-mono font-medium text-gov-dark whitespace-nowrap">{r.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${GROUP_STYLES[r.group]}`}>{r.group}</span>
                </td>
                <td className="px-4 py-3 text-gov-secondary">{r.catches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The payability rules are the ones worth running first, because a payability report is a to-do
        list rather than a post-mortem. Every failure they find is fixable while there is still time to
        fix it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the replay found</h2>
      <p className="text-gov-dark leading-relaxed">
        Encode a product's trigger and payout tiers, then replay that logic against observed events.
        Below, two encoded products against five Philippine landfalls. The interesting row is the
        fourth.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Event</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Landfall wind (km/h)</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Fisher product</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Rice product</th>
            </tr>
          </thead>
          <tbody>
            {REPLAY.map((r, i) => (
              <tr key={r.event} className={`border-b border-gov-border/50 ${r.wind === '110' ? 'bg-rose-50' : i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.event}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.wind}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.fisher}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.rice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Severe Tropical Storm Nalgae, locally Paeng, came ashore at Virac in October 2022 at 110 km/h,
        eight short of the 118 km/h that defines a typhoon on PAGASA's current scale. It killed over a
        hundred people, affected more than two million, and destroyed roughly 67,000 tonnes of mostly
        rice, about PHP 1.3 billion. A wind trigger set at typhoon strength pays nothing for that.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A farmer who lost a field to Nalgae and received nothing did not experience an index
        limitation. They experienced a broken promise, and told their barangay so. That is the trust
        cost, and it is computable from public records before a product is sold rather than discovered
        after it fails. We take that argument further in{' '}
        <Link to="/research/basis-risk-false-negative" className="text-gov-blue underline hover:text-gov-blue-dark">
          the article on the 8 km/h that decided a season
        </Link>.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Designed for households without documentation</h2>
      <p className="text-gov-dark leading-relaxed">
        Beneficiaries are modelled as pseudonymous identifiers throughout. Proving that a payout
        reached its holder never requires the identity documents whose absence excluded that household
        in the first place, and nothing personal has to cross a border for a scheme to be audited. The
        name-matching check that catches the most common counter-level failure is an asserted boolean
        computed at source, so a register holder can run it without sending anyone a list of names.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Where an institution prefers, the validator runs inside their own environment and emits only
        rule-failure counts. That matters because the honest version of this work produces findings an
        institution may not enjoy, and a standard that can only be used by outsiders auditing insiders
        will not be used at all.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Read alongside</h2>
      <ul className="list-disc list-inside space-y-2 text-gov-dark">
        <li>
          <Link to="/research/basis-risk-false-negative" className="text-gov-blue underline hover:text-gov-blue-dark">The 8 km/h that decided a season</Link>
          {' '}on computing a documented false negative, and what the revisionist basis-risk literature gets right.
        </li>
        <li>
          <Link to="/research/pre-event-payability" className="text-gov-blue underline hover:text-gov-blue-dark">The payout that fails before the storm</Link>
          {' '}on register integrity as the binding constraint, and why ex-post reconciliation is a post-mortem.
        </li>
        <li>
          <Link to="/research/spatial-basis-disclosure" className="text-gov-blue underline hover:text-gov-blue-dark">Two products, one headline, different promises</Link>
          {' '}on why spatial basis is the disclosure that decides who gets paid.
        </li>
        <li>
          <Link to="/research/verification-burden-paradox" className="text-gov-blue underline hover:text-gov-blue-dark">Verification cuts both ways</Link>
          {' '}on Viet Nam, where adding verification suppressed uptake, and what that implies about where checking belongs.
        </li>
        <li>
          <Link to="/research/assurance-provenance-discipline" className="text-gov-blue underline hover:text-gov-blue-dark">What a certification standard owes its own evidence</Link>
          {' '}on catching ourselves citing Wikipedia for a landfall wind speed.
        </li>
      </ul>
    </section>

    <section className="space-y-4 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, reproducible, and honest about its limits</h2>
      <p className="text-gov-dark leading-relaxed">
        The standard, the validator, the replay and the tests are public. Every figure on this page is
        regenerated by one command from the event data and the product encodings. The repository labels
        every product encoding as reconstructed, every ledger as synthetic, every weakly sourced event
        row as secondary, and every missing piece as pending, because a certification standard that
        overstates its own evidence is worthless. The BUILD_REPORT records what we could not obtain,
        including the enumeration of PAGASA's public archive that explains why four of five events rest
        on secondary sourcing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What it proves is that the promise is encodable and checkable. What it does not prove is that a
        household shown a certified card behaves any differently. That needs fieldwork, and we say so
        rather than implying otherwise.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors"
        >
          payout-assurance-standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <Link
          to="/how-to-buy"
          className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors"
        >
          Work with us on adaptation finance data
        </Link>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        If you hold official product terms and want them encoded properly, that is the single most
        useful contribution available, and it turns a reconstructed encoding into an official one.
        If you run a register or a scheme and want the payability rules run over it, we will do the
        first one at no charge. Contact Fabio Rovai, fabio@thetesseractacademy.com.
      </p>
    </section>
  </article>
);

export default ParametricPayoutAssurance;
