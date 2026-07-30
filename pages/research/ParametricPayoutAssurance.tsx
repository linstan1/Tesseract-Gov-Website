import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/payout-assurance-standard';
const SCORECARD = 'https://github.com/fabio-rovai/payout-assurance-standard/blob/main/docs/BASIS_RISK.md';
const BUILD_REPORT = 'https://github.com/fabio-rovai/payout-assurance-standard/blob/main/BUILD_REPORT.md';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/parametric-payout-assurance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/parametric-payout-assurance',
  headline:
    'Can a parametric climate insurance product prove it paid? An open assurance standard | Tesseract Academy',
  description:
    'An open vocabulary and twelve machine-checkable rules that audit a parametric climate insurance promise at the three points where it fails: whether the promise is specifiable at all, whether a registered household is payable before a storm, and whether the payout arrived after one. Includes a documented false negative computed from public records. Severe Tropical Storm Nalgae came ashore 8 km/h below a typhoon trigger and destroyed roughly 67,000 tonnes of mostly rice worth about PHP 1.3 billion, for which a trigger set at typhoon strength pays nothing.',
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
    {
      '@type': 'ScholarlyArticle',
      name: 'How basis risk and spatiotemporal adverse selection influence demand for index insurance: Evidence from northern Kenya',
      author: 'Nathaniel D. Jensen, Andrew G. Mude and Christopher B. Barrett',
      isPartOf: 'Food Policy',
      volumeNumber: '74',
      datePublished: '2018',
      sameAs: 'https://doi.org/10.1016/j.foodpol.2018.01.002',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Managing basis risk with multiscale index insurance',
      author: 'Ghada Elabed, Marc F. Bellemare, Michael R. Carter and Catherine Guirkinger',
      isPartOf: 'Agricultural Economics',
      volumeNumber: '44',
      datePublished: '2013',
      sameAs: 'https://doi.org/10.1111/agec.12025',
    },
    {
      '@type': 'ScholarlyArticle',
      name: "Understanding farmers' valuation of agricultural insurance: Evidence from Vietnam",
      author: 'Michael King and Anuj Pratap Singh',
      isPartOf: 'Food Policy',
      volumeNumber: '94',
      datePublished: '2020',
      sameAs: 'https://doi.org/10.1016/j.foodpol.2020.101861',
    },
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
    'parametric insurance, index insurance, adaptation finance, climate adaptation, basis risk, payout verification, payability, register integrity, spatial basis, SHACL, ontology, OWL, Philippines, PCIC, BFAR, PAGASA, smallholder farmers, small-scale fishers, financial resilience, assurance standard, last mile payments, Typhoon Nalgae',
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
  { event: 'Haiyan (Yolanda), Nov 2013', wind: '235', fisher: '100%', rice: '100%', miss: false },
  { event: 'Mangkhut (Ompong), Sep 2018', wind: '205', fisher: '100%', rice: '100%', miss: false },
  { event: 'Rai (Odette), Dec 2021', wind: '195', fisher: '100%', rice: '100%', miss: false },
  { event: 'Nalgae (Paeng), Oct 2022', wind: '110', fisher: 'no payout', rice: 'no payout', miss: true },
  { event: 'Doksuri (Egay), Jul 2023', wind: '175', fisher: '40%', rice: '50%', miss: false },
];

const COMPARISON = [
  { field: 'Advertised trigger', a: '118 km/h', b: '118 km/h', same: true },
  { field: 'Measurement basis', a: '10-minute sustained', b: '10-minute sustained', same: true },
  { field: 'Measuring authority', a: 'PAGASA', b: 'PAGASA', same: true },
  { field: 'Spatial basis', a: 'Storm centre at landfall, national bulletin value', b: 'Insured parcel, georeferenced, remote-sensed wind field', same: false },
  { field: 'Settlement promise', a: '14 days', b: '5 days', same: false },
];

const LEVELS = [
  { level: 'official', meaning: 'Taken from the issuer binding wording. Nothing in the repository currently carries this level, and saying so is the point.' },
  { level: 'public-documentation', meaning: 'Terms published by the issuer, but not the contractual wording.' },
  { level: 'reconstructed', meaning: 'Structure from public announcements, with stand-in values where the issuer publishes none. Every product encoding we hold sits here.' },
];

const REFERENCES = [
  { text: 'Elabed, G., Bellemare, M. F., Carter, M. R. and Guirkinger, C. (2013). Managing basis risk with multiscale index insurance. Agricultural Economics 44(4-5), 419-431.', doi: 'https://doi.org/10.1111/agec.12025' },
  { text: 'Jensen, N. D., Barrett, C. B. and Mude, A. G. (2016). Index Insurance Quality and Basis Risk: Evidence from Northern Kenya. American Journal of Agricultural Economics 98(5), 1450-1469.', doi: 'https://doi.org/10.1093/ajae/aaw046' },
  { text: 'Jensen, N. D., Mude, A. G. and Barrett, C. B. (2018). How basis risk and spatiotemporal adverse selection influence demand for index insurance: Evidence from northern Kenya. Food Policy 74, 172-198.', doi: 'https://doi.org/10.1016/j.foodpol.2018.01.002' },
  { text: 'King, M. and Singh, A. P. (2020). Understanding farmers’ valuation of agricultural insurance: Evidence from Vietnam. Food Policy 94, 101861.', doi: 'https://doi.org/10.1016/j.foodpol.2020.101861' },
  { text: 'Kramer, B., Porter, M. and Wassie, S. B. (2025). Basis risk, social comparison, perceptions of fairness, and demand for insurance: A field experiment in Ethiopia. Journal of Risk and Insurance.', doi: 'https://doi.org/10.1111/jori.70015' },
  { text: 'Lichtenberg, E. and Iglesias, E. (2022). Index insurance and basis risk: A reconsideration. Journal of Development Economics 158, 102883.', doi: 'https://doi.org/10.1016/j.jdeveco.2022.102883' },
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
        it actually fails, and a documented case where a storm eight kilometres per hour below a
        typhoon trigger destroyed PHP 1.3 billion of mostly rice.
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

    <nav className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-3">On this page</p>
      <ol className="list-decimal list-inside space-y-1 text-sm text-gov-dark">
        <li><a href="#live" className="text-gov-blue underline hover:text-gov-blue-dark">The instruments are already live</a></li>
        <li><a href="#three" className="text-gov-blue underline hover:text-gov-blue-dark">Three failure points, all of them record problems</a></li>
        <li><a href="#rules" className="text-gov-blue underline hover:text-gov-blue-dark">The twelve rules</a></li>
        <li><a href="#nalgae" className="text-gov-blue underline hover:text-gov-blue-dark">The 8 km/h that decided a season</a></li>
        <li><a href="#payability" className="text-gov-blue underline hover:text-gov-blue-dark">The payout that fails before the storm</a></li>
        <li><a href="#spatial" className="text-gov-blue underline hover:text-gov-blue-dark">Two products, one headline, different promises</a></li>
        <li><a href="#verification" className="text-gov-blue underline hover:text-gov-blue-dark">Verification cuts both ways</a></li>
        <li><a href="#provenance" className="text-gov-blue underline hover:text-gov-blue-dark">What a certification standard owes its own evidence</a></li>
        <li><a href="#open" className="text-gov-blue underline hover:text-gov-blue-dark">Open, reproducible, and honest about its limits</a></li>
      </ol>
    </nav>

    <section id="live" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">1. The instruments are already live</h2>
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

    <section id="three" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">2. Three failure points, all of them record problems</h2>
      <p className="text-gov-dark leading-relaxed">
        A parametric product changes behaviour only if the household believes it will pay. That belief
        can break in three distinct places, and the three are usually held in three different systems
        by three different organisations, which is why nobody sees them together.
      </p>
      <div className="space-y-4">
        <div className="border-l-4 border-sky-300 pl-4">
          <p className="font-semibold text-gov-dark">The promise is not specifiable</p>
          <p className="text-gov-secondary leading-relaxed">
            A product can be marketed against a hazard without ever stating, in a form anyone could
            test, what fires a payout. Which index, measured by which authority, on what basis, at what
            threshold, with which comparator at the boundary. Where those are missing, no claim about
            the product can be verified or disputed, and a brochure is doing the work of a contract.
          </p>
        </div>
        <div className="border-l-4 border-emerald-300 pl-4">
          <p className="font-semibold text-gov-dark">The household is not payable, before the storm</p>
          <p className="text-gov-secondary leading-relaxed">
            Where cover is premium-subsidised or donor-paid and enrolled in bulk from a public register,
            the household often makes no purchase decision and sometimes does not know it is covered.
            What then decides whether they are paid is register integrity: correct name, correct
            barangay, a georeferenced parcel or registered gear, a live payout instrument in a matching
            name. A misspelling or a dormant cash card defeats a perfectly designed trigger.
          </p>
        </div>
        <div className="border-l-4 border-amber-300 pl-4">
          <p className="font-semibold text-gov-dark">The payout cannot be shown to have arrived</p>
          <p className="text-gov-secondary leading-relaxed">
            Field research on Philippine last-mile climate insurance payouts found money moving through
            mobile wallets, remittance agents and cheques with no consistent way to verify whether
            payments were received, and friction at exactly the moment a household is most exposed. An
            entitlement can be owed, recorded, and then simply not settled, with nothing in any existing
            system that makes that state visible.
          </p>
        </div>
      </div>
      <p className="text-gov-dark leading-relaxed">
        None of these is a modelling problem. All three are record problems, which means all three are
        machine-checkable once somebody writes the rules down.
      </p>
    </section>

    <section id="rules" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">3. The twelve rules</h2>
      <p className="text-gov-dark leading-relaxed">
        Each rule exists because a documented failure exists. Two of them, R6 and R7, are written
        directly from the last-mile findings above. A rule set that passes everything is decoration, so
        every one of the twelve has a negative test case in the repository built specifically to trip
        it, including a deliberately brochure-grade product encoding that nothing could ever settle or
        dispute.
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
        list rather than a post-mortem. An honest "we do not know whether this cheque was banked" is a
        conformant record, and so is a declared legitimate name mismatch such as a married name.
        Silence about either is what fails.
      </p>
    </section>

    <section id="nalgae" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">4. The 8 km/h that decided a season</h2>
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
              <tr key={r.event} className={`border-b border-gov-border/50 ${r.miss ? 'bg-rose-50' : i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
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
        Severe Tropical Storm Nalgae, locally Paeng, made landfall at Virac in Catanduanes on 29
        October 2022. Reported ten-minute maximum sustained winds at landfall were 110 km/h. PAGASA's
        current scale puts the boundary of a typhoon at 118 km/h. Nalgae arrived eight kilometres per
        hour short of being a typhoon. It killed over a hundred people, affected more than two million,
        and the Department of Agriculture reported roughly 67,000 tonnes of agricultural losses worth
        about PHP 1.3 billion, the bulk of it in rice.
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
        The four catastrophic super-typhoons in the set all trigger comfortably, which is exactly why a
        product looks fine when tested against the storms everyone remembers. A farmer who lost a field
        to Nalgae and received nothing did not experience an index limitation. They experienced a
        broken promise, and told their barangay so.
      </p>
      <h3 className="text-xl font-bold text-gov-dark font-serif pt-2">Why this matters more than the modelling debate</h3>
      <p className="text-gov-dark leading-relaxed">
        Erik Lichtenberg and Eva Iglesias, in a reconsideration of the basis-risk literature published
        in the Journal of Development Economics in 2022, argue that the standard account has been too
        quick to treat basis risk as the explanation for low uptake, and that contract design deserves
        more of the blame. We think that is right, and that it sharpens rather than blunts the case for
        publishing results like the one above. If the problem is partly design, then design is a
        decision somebody made, and decisions can be disclosed. A trigger set at 118 km/h rather than 90
        km/h is a choice about which losses the product declines to cover. That choice may be entirely
        defensible on pricing grounds. What is not defensible is that it is currently invisible to the
        household, to the cooperative selling it, and often to the donor paying the premium.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Berber Kramer, Maria Porter and Solomon Wassie, in a field experiment in Ethiopia published in
        the Journal of Risk and Insurance in 2025, find that basis risk and what a neighbour was seen to
        receive move perceived fairness and willingness to pay. That is the mechanism this work is aimed
        at. Households in these schemes do not price a product. They judge whether it treated them
        fairly, and they judge it collectively, in a barangay, over years.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the disclosure we think should be routine, for any parametric product before sale, is: the
        historical events over the covered geography where the index did not reach the trigger; of
        those, the ones with documented losses of the kind the product exists to cover; the margin by
        which each one missed, because 8 km/h reads very differently from 80 km/h; and the measuring
        authority and basis, so the number can be independently recomputed. None of this requires
        proprietary data. Everything in the Nalgae result comes from public storm reporting and public
        agricultural loss figures.
      </p>
    </section>

    <section id="payability" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">5. The payout that fails before the storm</h2>
      <p className="text-gov-dark leading-relaxed">
        Almost all attention in adaptation finance verification points backwards: did the payout arrive,
        did the index behave. The failure that actually decides whether a household gets paid happens
        before the event, in the register, and it is the only kind you can still fix.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A great deal of climate cover in the Philippines is not bought. It is conferred. Cover for
        register-listed subsistence farmers and fisherfolk is premium-subsidised, and in the flagship
        parametric scheme for small-scale fishers the premium is donor-paid and the cover is offered as
        a benefit of registration. Enrolment is frequently done in bulk by a municipal agriculture
        office working from the register. Two consequences follow, and most verification designs miss
        both. First, the household often does not know it is covered, so there is no promise for it to
        disbelieve. Second, every decision that determines whether money can reach that household has
        already been made by the time a storm forms, and it was made by a data-entry process rather than
        by an underwriter.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Because the fisher product ties cover to registration, the register is not administrative
        background. It is the enrolment mechanism, the eligibility test and the payment instruction, all
        in one artefact that nobody treats as safety-critical. Rules P1 to P4 run over a register and a
        payout file and return a list of households who could not currently be paid, with a reason
        attached to each: missing barangay, no georeference, no or dormant instrument, unexplained name
        mismatch.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is also a practical reason to lead with payability rather than settlement, and it is about
        who will agree to be audited. A settlement audit applied to a public insurer's records produces
        an externally auditable count of entitlements that were owed and never paid, which is a finding
        an institution has every reason to refuse. A payability audit produces a to-do list that makes
        the municipal office and the policyholder look competent when they act on it. Nobody in the
        chain wants to discover after a typhoon that four hundred registered fishers had dead cash
        cards.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nathaniel Jensen, Andrew Mude and Christopher Barrett, writing in Food Policy in 2018 on index
        insurance in northern Kenya, show how basis risk and spatiotemporal adverse selection shape
        demand in a setting where households are making real purchase decisions. Their framework is the
        right one for a market with buyers. Our argument is about what happens to it when the purchase
        decision is removed: under bulk enrolment, demand elasticity stops being the operative variable
        for whether a household benefits, and administrative data quality takes its place. And when
        those households do eventually face a real decision, on top-up cover or on renewal after a
        subsidy lapses, what they will price is their memory of whether the free layer ever worked.
      </p>
    </section>

    <section id="spatial" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">6. Two products, one headline, different promises</h2>
      <p className="text-gov-dark leading-relaxed">
        Where an index is measured decides who gets paid, and it is the field most often left unstated.
        Below are the two encoded products compared field by field. Four fields agree, including the
        headline number a buyer would compare. Two do not, and those two decide everything.
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
        season to the same storm. A product settled over the insured parcel does close to the opposite.
        Neither behaviour is wrong; they are different products for different risks. The problem is that
        on any brochure, product register or comparison table these two appear identical.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The methodological point is the transferable part: this divergence is found by reading the two
        encodings against each other, with no event data involved. That matters because the empirical
        route is expensive. Quantifying spatial basis risk properly needs per-location wind fields over
        decades, which most schemes will never commission. A structural check needs an afternoon and a
        text file. So rule R3 is a disclosure rule rather than a measurement rule: it requires every
        index to state its measurement basis and its spatial basis, and does not ask whether the choice
        was a good one, only that it be visible.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The groundwork here is not ours. Ghada Elabed, Marc Bellemare, Michael Carter and Catherine
        Guirkinger, writing in Agricultural Economics in 2013, set out multiscale index insurance
        precisely to attack the gap between an index measured at one scale and a loss suffered at
        another. Their work improves the instrument. Ours makes the instrument's scale choice legible to
        everyone downstream of the actuary. A multiscale contract is a better product; a stated spatial
        basis is what lets a buyer tell that it is a better product.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nothing here needs new legislation. A regulator, public insurer or donor could require four
        fields on any parametric product they approve, fund or list: the index and the authority whose
        published measurement settles it; the measurement basis, since a ten-minute sustained wind and a
        gust are different quantities; the spatial basis, stated as a location rule rather than implied;
        and the comparator at the boundary, because "winds of 118 km/h" does not say whether 118 pays.
      </p>
    </section>

    <section id="verification" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">7. Verification cuts both ways</h2>
      <p className="text-gov-dark leading-relaxed">
        The honest counter-argument to everything above is that verification is exactly what has already
        killed several agricultural insurance schemes. Vietnam's national agricultural insurance
        programme, with premium support that at points reached 90 per cent for poor households, has
        repeatedly failed to reach expected participation, and the documented obstacles were largely
        administrative: cumbersome procedures, slow appraisal, loss verification requiring multiple
        signatures before a claim could move, and insurers withdrawing after poor loss experience.
      </p>
      <p className="text-gov-dark leading-relaxed">
        In other words, the country most often cited for weak uptake despite heavy subsidy is one where
        the burden of verification was placed on the claimant, and where that burden is part of why it
        did not work. The resolution is that the word covers two mechanisms with opposite effects.
      </p>
      <div className="space-y-4">
        <div className="border-l-4 border-rose-300 pl-4">
          <p className="font-semibold text-gov-dark">Verification as a precondition of payment</p>
          <p className="text-gov-secondary leading-relaxed">
            The claimant must prove the loss. Notices of loss within a window, adjuster visits,
            documentary evidence, official signatures. Every step is a point at which a legitimate claim
            can die. This is the kind that suppresses uptake, and the kind parametric cover was invented
            to delete.
          </p>
        </div>
        <div className="border-l-4 border-emerald-300 pl-4">
          <p className="font-semibold text-gov-dark">Verification as an obligation on the payer</p>
          <p className="text-gov-secondary leading-relaxed">
            The scheme must be able to show that what it promised is what it did. The household supplies
            nothing and proves nothing. The burden sits entirely on institutions that already hold the
            records.
          </p>
        </div>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Parametric products are a large improvement on the first kind and have so far done nothing about
        the second. A product can settle in three days without a single farm visit and still leave
        nobody able to say whether the payment reached the person it was owed to.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Michael King and Anuj Pratap Singh, writing in Food Policy in 2020 on farmers' valuation of
        agricultural insurance in Vietnam, examine how households actually value these products rather
        than assuming they value them at actuarial worth. If valuation is behavioural and contextual,
        then the experience of the process is part of the product, and a scheme that pays eventually
        after four signatures is not a slower version of one that pays in three days. It is a different
        good. Extend that and assurance is not overhead on the product; it is a feature of it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three design constraints follow, and we hold ourselves to them rather than advertising them.
        Nothing new is asked of the household: no app, no smartphone, no identity document, no form.
        Checking is machine-checkable rather than clerical, because verification became a burden in the
        first place when it was performed by people one claim at a time. And an honest unknown conforms,
        because a standard that punished institutions for admitting gaps would teach them to hide gaps.
      </p>
    </section>

    <section id="provenance" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">8. What a certification standard owes its own evidence</h2>
      <p className="text-gov-dark leading-relaxed">
        We wrote a rule saying that an encoding without stated provenance is an assertion rather than a
        certification. Then we assembled a small set of historical typhoon landfalls and sourced the
        wind speeds from whatever was reachable: one PAGASA primary document, two news reports of PAGASA
        bulletins, one figure from a different meteorological agency, and one from Wikipedia.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every number was accurate. We checked them. That is not the point. A repository that says
        overstating your own evidence is worthless cannot cite an encyclopedia for a load-bearing
        physical measurement and describe the result as sourced. The inconsistency was ours, it was
        found by adversarial review before publication rather than after, and the fix was not to hide
        it. The event file now carries the measuring agency and a primary-or-secondary marker on every
        row, and the build report enumerates PAGASA's public archive to establish why four of five
        events rest on secondary sourcing: it publishes per-storm summaries for 2018 only.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The mechanism doing most of the work is small: a mandatory enumerated confidence field on every
        product encoding, which a validation rule fails if omitted.
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
        Because the level is machine-readable, a downstream user can filter: someone comparing products
        for a regulator can require official encodings and ignore everything else, without having to
        trust our judgement. That is the difference between a caveat and a control.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nathaniel Jensen, Christopher Barrett and Andrew Mude, in the American Journal of Agricultural
        Economics in 2016, measured the quality of an index insurance product rather than assuming it.
        The obvious extension, and the one we would like someone to perform on us, is that assurance
        tooling deserves the same treatment. A validator is a product with a false-negative rate and a
        coverage profile. Ensuring every rule has a case that trips it establishes only that each rule
        is live, not that twelve are sufficient. We do not know what fraction of real-world payout
        failures they would catch, because we have not yet run them over a real ledger.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is a competitive argument rather than a confession. In assurance work, declared limits are
        the product: what makes a validator worth adopting by a regulator, donor or public insurer is a
        legible account of what it does not do. We hold the same position in adjacent work. In our{' '}
        <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">
          industrial data crosswalks
        </Link>{' '}
        the headline finding is that four of seven standards examined cannot reject a mis-mapping at
        all, which means the reasoner check most projects rely on could never have failed. A check that
        cannot fail is not evidence, and the useful contribution is often to say so out loud.
      </p>
    </section>

    <section id="open" className="space-y-4 scroll-mt-24 bg-gov-bg border border-gov-border/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">9. Open, reproducible, and honest about its limits</h2>
      <p className="text-gov-dark leading-relaxed">
        The standard, the validator, the replay and the tests are public. Every figure on this page is
        regenerated by one command from the event data and the product encodings. Beneficiaries are
        modelled as pseudonymous identifiers throughout, so proving a payout reached its holder never
        requires the identity documents whose absence excluded that household in the first place, and
        nothing personal has to cross a border for a scheme to be audited. Where an institution prefers,
        the validator runs inside their own environment and emits only rule-failure counts.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What it proves is that the promise is encodable and checkable. What it does not prove is that a
        household shown a certified card behaves any differently. That needs fieldwork, and we say so
        rather than implying otherwise. The product encodings are labelled reconstructed because no
        Philippine issuer publishes its payout table, so this demonstrates a method rather than
        establishing a finding about any named issuer's behaviour.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          payout-assurance-standard on GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={SCORECARD} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Basis-risk scorecard <ExternalLink className="w-4 h-4" />
        </a>
        <a href={BUILD_REPORT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Build report <ExternalLink className="w-4 h-4" />
        </a>
        <Link to="/how-to-buy" className="inline-flex items-center gap-2 border border-gov-blue text-gov-blue px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue/5 transition-colors">
          Work with us on adaptation finance data
        </Link>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Standard released CC BY 4.0, tooling Apache-2.0, because a Creative Commons licence is the wrong
        instrument for code and a third party running the validator without asking us is the entire
        point. If you hold official product terms and want them encoded properly, that is the single
        most useful contribution available, and it turns a reconstructed encoding into an official one.
        If you run a register or a scheme and want the payability rules run over it, we will do the
        first one at no charge and publish nothing without your sign-off. Contact Fabio Rovai,
        fabio@thetesseractacademy.com.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">References</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm text-gov-secondary">
        {REFERENCES.map((r) => (
          <li key={r.doi} className="leading-relaxed">
            {r.text}{' '}
            <a href={r.doi} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">
              {r.doi.replace('https://doi.org/', 'doi:')}
            </a>
          </li>
        ))}
      </ol>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Product and scheme facts are taken from the Willis and Rare announcements of 12 November 2025
        and the Philippine Department of Agriculture announcement of 17 July 2025. Event data carries a
        per-row source, measuring agency and primary-or-secondary marker in the repository. Related
        work: the{' '}
        <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial ontology crosswalks</Link>{' '}
        apply the same falsifiability thinking to industrial data standards.
      </p>
    </section>
  </article>
);

export default ParametricPayoutAssurance;
