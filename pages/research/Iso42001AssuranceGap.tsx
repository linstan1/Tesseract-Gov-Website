import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars, Tile } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/ai-management-system-assurance';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/iso-42001-assurance-gap#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/iso-42001-assurance-gap',
  headline:
    'The Only Public Crosswalk to ISO 42001 Names Zero of Its Controls | Tesseract Academy',
  description:
    'A measured audit of what can be established about an ISO/IEC 42001 certificate from public evidence. The NIST AI RMF crosswalk to ISO/IEC 42001 contains 281 pairs across 72 AI RMF subcategories and 66 distinct ISO addresses, of which 202 are Annex B implementation guidance and 79 are mandatory clauses. Annex A control references: zero. The document is titled ISO/IEC FDIS 42001, targeting the Final Draft rather than the published 42001:2023. ISO/IEC 42001 published December 2023 and ISO/IEC 42006, which makes accreditation possible, published 7 July 2025, leaving roughly nineteen months in which certificates were sold under no published scheme for certifying the certifiers. The UKAS public register contains zero occurrences of 42001 across 9,278 harvested records.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  about: { '@type': 'Dataset', name: 'AI Management System Assurance', url: REPO },
  keywords:
    'ISO 42001, ISO/IEC 42001, ISO 42006, AI management system, AIMS, Annex A controls, Statement of Applicability, NIST AI RMF, AI RMF crosswalk, accredited certification body, UKAS, ANAB, RvA, IAF CertSearch, AI governance, EU AI Act, AI assurance, certificate verification, AI compliance, conformity assessment',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/iso-42001-assurance-gap#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a public crosswalk between NIST AI RMF and ISO/IEC 42001?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NIST publishes one at airc.nist.gov and it is a United States Government work in the public domain. It contains 281 crosswalk pairs across 72 AI RMF subcategories and 66 distinct ISO addresses. Two things about it are not widely known. It is titled NIST AI RMF to ISO/IEC FDIS 42001, meaning it targets the Final Draft International Standard rather than the published ISO/IEC 42001:2023. And of its 281 references, 202 point at Annex B implementation guidance and 79 at mandatory clauses, while exactly zero point at an Annex A control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does it matter that a crosswalk does not reference Annex A controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because Annex A is the normative control catalogue and the Statement of Applicability is a declaration about Annex A controls: which apply, which do not, and why. It is the central artefact a certification audit examines. A practitioner following the crosswalk from an AI RMF subcategory arrives at an Annex B guidance address or a clause number and must then make a further hop to reach the control they actually have to declare. Annex B is numbered to correspond to Annex A, so the hop is usually mechanical, but the crosswalk never states this and never performs it. Any tool that ingests the document to generate a Statement of Applicability is inferring the most important step without showing its work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could ISO 42001 certificates have been accredited when they were first issued?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not under a published scheme for certifying the certifiers. ISO/IEC 42001 was published in December 2023 and certification against it became commercially available immediately. ISO/IEC 42006, which sets out what a body auditing and certifying AI management systems must demonstrate, was published on 7 July 2025. That leaves roughly nineteen months during which certificates were bought and sold while the standard defining a competent certification body did not yet exist. Accreditations granted in that window were assessed against earlier and more general requirements, and the Standards Council of Canada has confirmed that new applications and scope extensions are now assessed against ISO/IEC 42006:2025. None of this makes an early certificate worthless, but the assurance behind it differs from one issued today.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check whether an ISO 42001 certificate is accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask for three things together, because any one alone is unfalsifiable: the certificate number, the certification body together with its accreditation body, and the date that certification body obtained accreditation for ISO/IEC 42001 specifically. Then compare that accreditation date against the certificate issue date. A certificate issued before its issuer held accreditation for this standard was not an accredited certificate at the moment of issue, whatever the issuer is accredited for now. Accreditation for ISO/IEC 27001 or ISO 9001 does not carry across.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you look up a company to see whether it holds an ISO 42001 certificate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. IAF CertSearch is the global database of accredited management system certificates and its published guidance states that no user is able to download or view a list of certifications issued by a certification body, and that all verification must be of known entities. You can confirm a certificate whose number you already hold. You cannot browse, list, or search for a company. The consequence is that absence is not observable: you can never establish from that register that a supplier has no certificate, and the only party who can supply the identifier needed to run the check is the supplier whose claim you are testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many controls are in each ISO 42001 Annex A objective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The total of 38 controls under nine objectives, addressed A.2 to A.10, is consistent across sources. The split between the nine objectives is not, and we decline to state one. Secondary sources give A.6 as both 8 and 9 controls, A.8 as both 4 and 5, and A.10 as both 2 and 3, and their figures do not reconcile to 38. Resolving it requires the standard, which is sold and which we do not reproduce. That the shape of the control catalogue is itself not establishable from public sources is a smaller instance of the same problem this research is about.',
      },
    },
  ],
};

export const Iso42001AssuranceGap: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The Only Public Crosswalk to ISO 42001 Names Zero of Its Controls
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Organisations are being asked to prove their AI governance with an ISO/IEC 42001 certificate. We measured what a buyer can actually establish about one from public evidence. The single public domain crosswalk into the standard never references a control from the annex that certification audits examine, and it maps to the draft rather than the published edition. The standard was certifiable for roughly nineteen months before the rules for certifying the certifiers existed. And the national register that granted the world's first accreditation for it does not record that accreditation anywhere.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>281 crosswalk pairs, zero Annex A controls.</strong> NIST's AI RMF to ISO/IEC 42001 crosswalk covers 72 AI RMF subcategories through 66 distinct ISO addresses. 202 of those references are Annex B implementation guidance and 79 are mandatory clauses. Not one is a control from Annex A.</li>
          <li><strong>It maps the draft.</strong> The document's own printed title is "NIST AI RMF to ISO/IEC FDIS 42001". FDIS is the Final Draft International Standard, not the published 42001:2023.</li>
          <li><strong>Nineteen months of certificates with no scheme behind them.</strong> ISO/IEC 42001 published December 2023. ISO/IEC 42006, which defines what a competent certification body must demonstrate, published 7 July 2025.</li>
          <li><strong>The UKAS register records ISO/IEC 42001 nowhere.</strong> Zero occurrences across 9,278 harvested records, nine months after BSI announced the world's first UKAS accreditation for that exact standard.</li>
          <li><strong>You cannot look a supplier up.</strong> IAF CertSearch does not permit listing certificates by certification body. Absence is unobservable by design.</li>
          <li><strong>The artefact</strong> reproduces no ISO text. All 281 ISO titles carried by the source PDF are discarded at ingest, and a test asserts none survives.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Tile kpi="0 of 38" label="Annex A controls referenced by the public crosswalk" />
        <Tile kpi="19 months" label="certifiable before ISO/IEC 42006 was published" />
        <Tile kpi="0" label="occurrences of 42001 in the UKAS public register" />
        <Tile kpi="FDIS" label="edition the NIST crosswalk actually targets" />
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this question is worth asking now</h2>
      <p className="text-gov-dark leading-relaxed">
        ISO/IEC 42001 is becoming the default answer to a question buyers have started asking, which is how do I know your AI is governed. It is a genuinely useful standard and this is not an argument against it. It is an argument for reading the certificate properly, because the infrastructure that would let you do so is younger and thinner than the marketing around it suggests.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We built this the same way as our ISO/IEC 27001 work, and for the same reason. If you want to reason about a standard you are not allowed to redistribute, you model it by address rather than by text. Control addresses like A.6 and B.2.2 are references in the way a page number is a reference. That discipline is what makes an open, reproducible measurement possible at all.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The crosswalk that cannot build a Statement of Applicability</h2>
      <p className="text-gov-dark leading-relaxed">
        NIST publishes a crosswalk from its AI Risk Management Framework to ISO/IEC 42001. It is a United States Government work in the public domain, which makes it the only crosswalk into this standard that anyone can freely redistribute, extend or build a product on. That matters, because the commercial alternatives sit under licences that forbid derivative work.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We parsed all sixteen pages and reduced them to address pairs, discarding every ISO title on the way in.
      </p>
      <HBars
        title="Where the 281 crosswalk references actually point"
        note="66 distinct ISO addresses across 72 AI RMF subcategories. Annex A is the normative control catalogue."
        rows={[
          { label: 'Annex B guidance', value: 202, display: '202 references, 71.9%', color: CHART.teal },
          { label: 'Mandatory clauses', value: 79, display: '79 references, 28.1%', color: CHART.gray },
          { label: 'Annex A controls', value: 0, display: '0 references', color: CHART.amber },
        ]}
        labelWidth="11rem"
      />
      <p className="text-gov-dark leading-relaxed">
        A Statement of Applicability is a declaration about Annex A controls. Which ones apply, which ones do not, and the justification for each exclusion. It is the document a certification audit works through. It is the artefact that determines what your certificate actually covers.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The crosswalk never mentions one. Follow it from an AI RMF subcategory and you arrive at an Annex B guidance address or a clause number, and you then have to make a further hop to reach the control you must declare. Annex B is numbered to correspond to Annex A, so that hop is usually mechanical. But the crosswalk never says so and never performs it, which means every tool that ingests this document to generate a Statement of Applicability is inferring the most important step and not showing its work. If you are buying such a tool, ask the vendor which document supplied their Annex A mapping. It was not this one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is a second problem visible on the front page. The document is titled "NIST AI RMF to ISO/IEC FDIS 42001 AI Management system Crosswalk". FDIS means Final Draft International Standard, the version that circulates before publication. This is the second time we have found a NIST crosswalk into an ISO management system standard addressing something other than the current published edition. The first was the SP 800-53 to ISO/IEC 27001 mapping, which addressed the superseded 2013 edition of that standard and has since been withdrawn from the NIST site entirely.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The nineteen month gap</h2>
      <p className="text-gov-dark leading-relaxed">
        Two standards are in play, and conflating them is the most common error in this area. ISO/IEC 42001 tells your organisation what an AI management system must do. ISO/IEC 42006 tells the certification body what it must demonstrate in order to audit and certify you competently. Accreditation bodies assess certification bodies against the second, never against the first.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg">
            <tr><th className="text-left p-3 border-b border-gov-border">Date</th><th className="text-left p-3 border-b border-gov-border">Event</th></tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-gov-border/50">December 2023</td><td className="p-3 border-b border-gov-border/50">ISO/IEC 42001 published. Certification becomes commercially available at once.</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3 border-b border-gov-border/50">24 September 2024</td><td className="p-3 border-b border-gov-border/50">ANAB grants its first ISO/IEC 42001 accreditation, to Schellman.</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">December 2024</td><td className="p-3 border-b border-gov-border/50">RvA accredits BSI for ISO/IEC 42001.</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3 border-b border-gov-border/50 font-semibold">7 July 2025</td><td className="p-3 border-b border-gov-border/50 font-semibold">ISO/IEC 42006:2025 published, setting out what a certification body must demonstrate.</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">17 November 2025</td><td className="p-3 border-b border-gov-border/50">BSI announces it is the first certification body in the world accredited by UKAS for ISO/IEC 42001.</td></tr>
            <tr className="bg-gov-bg/40"><td className="p-3">10 March 2026</td><td className="p-3">BSI announces ANAB accreditation, becoming the first accredited by UKAS, ANAB and RvA together.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Read the first row against the bold one. For roughly nineteen months, organisations bought and certification bodies sold certificates against ISO/IEC 42001 while the standard defining a competent certifier had not been published. Accreditations granted in that window were assessed against earlier and more general requirements, and the Standards Council of Canada has since confirmed that new applications and scope extensions are assessed against ISO/IEC 42006:2025.
      </p>
      <p className="text-gov-dark leading-relaxed">
        None of that makes an early certificate worthless and none of it implies anyone behaved improperly. It means the assurance behind an early certificate is different from the assurance behind one issued today, and a buyer who does not know the timeline has no way to tell them apart.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">A register that does not record what it granted</h2>
      <p className="text-gov-dark leading-relaxed">
        UKAS publishes a genuinely open register, with no key and no account required, and that is more than most national accreditation bodies manage. We harvested every collection to its declared total: 2,921 accredited organisations, 2,986 schedules, 3,336 scope categories.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The string 42001 appears in none of them. A live query against the register's own standard vocabulary returns an empty array, and the only artificial intelligence entry in that vocabulary is a single term named simply AI, classifying one record.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the United Kingdom's national accreditation body granted what BSI describes as the world's first UKAS accreditation for ISO/IEC 42001, announced it in November 2025, and nine months later its own public register carries no machine readable trace of it. That is not an allegation of wrongdoing. It is a practical warning: you cannot confirm an accreditation claim for this standard by searching the register, so you will have to ask the certification body directly and read the schedule they send you.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The number we refused to publish</h2>
      <p className="text-gov-dark leading-relaxed">
        We wanted to give a per objective breakdown of Annex A, showing how many controls sit under each of the nine objectives from A.2 to A.10. The total of 38 is consistent everywhere. The split is not. Secondary sources give A.6 as both eight and nine controls, A.8 as both four and five, A.10 as both two and three, and their totals do not reconcile to 38.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Settling it requires the standard, which is sold and which we will not reproduce. So the breakdown is absent from the report and from this page. We mention it because it is a smaller version of the same problem: even the shape of the control catalogue is not something a practitioner can establish from public sources, and the confident tables you will find elsewhere disagree with each other.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three questions that make a claim checkable</h2>
      <p className="text-gov-dark leading-relaxed">
        If you are writing ISO/IEC 42001 into a contract or assessing a supplier who claims it, ask for these together. Any one of them on its own is unfalsifiable.
      </p>
      <ol className="list-decimal pl-5 space-y-2 text-gov-dark leading-relaxed">
        <li><strong>The certificate number.</strong> Without it no register query can be formed at all, and IAF CertSearch will not help you form one because it cannot be browsed.</li>
        <li><strong>The certification body, its accreditation body, and the date it obtained accreditation for ISO/IEC 42001 specifically.</strong> Compare that date against the certificate issue date. Accreditation for ISO/IEC 27001 or ISO 9001 does not carry across to this standard.</li>
        <li><strong>The Statement of Applicability, or at minimum the list of excluded Annex A controls.</strong> A certificate tells you nothing about which of the 38 controls the holder declared out of scope, and no public crosswalk will tell you either.</li>
      </ol>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Method and limits</h2>
      <p className="text-gov-dark leading-relaxed">
        The crosswalk was parsed with pdfplumber and reduced to address pairs, with all 281 ISO titles discarded at ingest and a test asserting that none survives anywhere in the dataset. The UKAS register was harvested through its public REST API with every collection reconciled against the record total the API itself declares, and the 42001 result confirmed by an independent live query.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two registers could not be read. The ANAB accreditation directory returns HTTP 403 to any programmatic request, with and without a browser user agent. The RvA register was not obtained. Because of that, this work makes no claim whatsoever about the total number of accredited ISO/IEC 42001 certification bodies worldwide, and no such number appears anywhere in it. The timeline entries come from published announcements and are dated accordingly.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One correction was needed during the build and is recorded rather than quietly fixed. A secondary source placed BSI's first UKAS accreditation in January 2026. The BSI announcement itself is dated 17 November 2025, and the earlier figure was discarded before it was used anywhere.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository is at <a className="text-gov-blue hover:underline" href={REPO}>github.com/fabio-rovai/ai-management-system-assurance</a>. It holds the extractor, the extracted crosswalk as JSON, the granular report with the full per subcategory table, offline known answer tests including the assertion that no ISO title survives ingest, and continuous integration that re-extracts from the source PDF on every push. Code MIT, report CC BY 4.0. The companion repository <a className="text-gov-blue hover:underline" href="https://github.com/fabio-rovai/certification-register-ontology">certification-register-ontology</a> applies the same method to ISO/IEC 27001, and proves the no standard text property with a SHACL layer.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark font-serif">Where to start</h2>
        <p className="text-gov-dark leading-relaxed">
          A bounded first engagement is a two week AI assurance claim audit on one supplier population. We take your supplier list, extract every AI governance and certification claim, classify each by whether it can be checked at all, run the checks that can be run, and hand back the evidence with the method. The deliverable is a defensible statement of what you can and cannot establish, which is more useful than a dashboard implying you can establish everything.
        </p>
        <p className="text-gov-dark leading-relaxed">
          The training side of this work lives on our academy: the <a className="text-gov-blue hover:underline" href="https://tesseract.academy/iso-42001-training/">ISO 42001 training</a> guide, the <a className="text-gov-blue hover:underline" href="https://tesseract.academy/iso-42001-gap-analysis/">ISO 42001 gap analysis</a> explainer, and the free <a className="text-gov-blue hover:underline" href="https://tesseract.academy/courses/ai-literacy-training/">AI Literacy Training course</a>, all indexed on the <a className="text-gov-blue hover:underline" href="https://tesseract.academy/safe-ai/">Safe AI hub</a>.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Fabio Rovai, <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>. Corrections are published on this page rather than applied silently.
        </p>
      </div>
    </section>
  </article>
);
