import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/uk-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/uk-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/uk-register-ontology',
  headline:
    'An open ontology for UK public registers, tested against Companies House, the Charity Commission and the Global LEI System | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the UK's public registers, built from complete keyless downloads of the Companies House bulk file (5,695,465 live companies, 1 August 2026), the Charity Commission register, the Companies House PSC snapshot and the GLEIF LEI golden copy (all 17 August 2026). 1,268 of 31,612 Registered charitable companies (4.01 per cent) cite a company number that resolves to nothing on the live register, including 32 placeholders (00000000, 01234567, 12345678) that pass the format rule. 1,082 charities disagree with Companies House about their own company's name. Of 117,324 GLEIF records naming UK Companies House as registration authority, 36 live issued LEIs cite in-range company numbers absent from the live register and 2,666 disagree with Companies House on the name. Companies House's own bulk file contains 5,912 live companies whose numbers violate the documented format, and its PSC snapshot misspells its own enum value in 621,705 production records. Every headline computed two independent ways, reproducible from public data.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
  about: {
    '@type': 'Dataset',
    name: 'UK Public Register Ontology',
    url: REPO,
  },
  keywords:
    'UK public registers, Companies House data quality, Charity Commission register, charity company number, ECCTA, Economic Crime and Corporate Transparency Act, identity verification, LEI validation, GLEIF golden copy, persons with significant control, PSC register, register assurance, SHACL, OWL 2 ontology, SKOS, dangling identifiers, company number validation, UK register ontology',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/uk-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many UK charities cite company numbers that do not resolve at Companies House?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the Charity Commission extract of 17 August 2026, 31,612 Registered charities carry a company registration number. 1,268 of them, which is 4.01 per cent, cite a number that resolves to nothing on the Companies House live file of 5,695,465 companies dated 1 August 2026. The free Companies House bulk product contains live companies only, so an absent number means the number is wrong or the company has dissolved while the charity remains Registered. Both readings are register-boundary failures, and the split between them cannot be computed from open bulk data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a placeholder company number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A value someone typed to fill a mandatory-looking field rather than an identifier. In the Charity Commission register, 18 charities give 00000000 as their registered company number, 9 give 01234567, and 5 give 12345678. Every one of these passes the 8-digit format rule, so schema validation accepts them all; only a referential check against the live register catches them. One specimen is charity 217602, SOUTH CROXTON VILLAGE HALL, whose registered company number is 00000000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the Charity Commission and Companies House agree about company names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Of 30,327 charitable companies that join to a live Companies House record, 1,082 (3.57 per cent) carry a charity-register name that diverges from the Companies House name even after conservative normalisation that ignores case, punctuation and suffixes such as Limited. These are real divergences, not normaliser noise: charity 200124, ABINGER CONSOLIDATED CHARITIES, cites company 01648018, which Companies House names ABINGER HAMMER VILLAGE SCHOOL TRUST. A further 662 joined companies are in a distress state at Companies House, including 223 in liquidation, while the charity remains Registered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are UK LEI records linked correctly to Companies House?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mostly, and the failures are structured. Of 117,324 GLEIF golden-copy records naming UK Companies House as their registration authority on 17 August 2026, 16,627 cite company numbers absent from the live file. Most of those are RETIRED or LAPSED LEIs of dissolved companies, which is the system working as designed. The candidate defect set is the 127 records that are entity ACTIVE with registration ISSUED: 82 cite BR branch numbers the free bulk product excludes by design, 9 are almost certainly companies incorporated between the two snapshots, and 36 are format-valid, in-range numbers that simply do not resolve. Separately, 2,666 records disagree with Companies House about the company name, including stale post-rename records on ISSUED LEIs, and 34 records publish junk such as mutuals numbers in the slot declared to carry a Companies House number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there really a misspelled value in Companies House PSC data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The production enum value no-individual-or-entity-with-signficant-control, with the second i of significant missing, appears in 621,705 statement records of the 17 August 2026 PSC snapshot. Any consumer who validates against the correctly spelled string silently matches nothing. The register also contains 5,912 live companies whose own company numbers violate the documented format, so a validator that implements only the documented shapes rejects 5,912 genuine live companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many UK companies declare that no one has significant control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the PSC snapshot of 17 August 2026, 617,557 distinct companies carry an explicit statement that no individual or entity with significant control exists. 345,627 of them resolve on the 1 August 2026 live register, which is 6.07 per cent of the 5,695,465 live companies. This is the narrow, explicit declaration rate, re-measurable monthly from the same keyless products. It is not the same metric as Open Ownership’s published figure of roughly 20 per cent, which counts companies without a named beneficial owner on a broader basis including unidentified-PSC and unfiled cases.',
      },
    },
  ],
};

const MODEL = `graph TD
  R["Charity Commission record /<br/>GLEIF LEI record"] --> A["IdentifierAssertion<br/><b>reified, dated, by register</b><br/>value as published + conformance"]
  A -.->|resolves on| CH["Companies House live file<br/><i>5,695,465 companies, 2026-08-01</i>"]
  S["SKOS scheme registry<br/><i>shapes + canonicalisation<br/>declared as data</i>"] --> A
  A --> D["DanglingIdentifier /<br/>PlaceholderIdentifier /<br/>CrossSchemeIdentifier"]
  A --> N["NameDisagreement<br/><b>cross-register reconciliation</b>"]`;

const FINDINGS = [
  {
    f: 'Registered charitable companies citing a company number absent from the Companies House live file of 5,695,465 companies, out of 31,612 with a number. Absent means wrong OR dissolved while the charity remains Registered; the split is not computable from open bulk data',
    n: '1,268 (4.01%)',
    sev: 'defect',
    means: 'Anyone joining the charity register to Companies House, for due diligence, grant screening or beneficial-ownership work, silently loses 4 in every 100 charitable companies at the first join.',
  },
  {
    f: 'Charities giving a placeholder as their registered company number: 18 give 00000000, 9 give 01234567, 5 give 12345678. All pass the 8-digit format rule',
    n: '32',
    sev: 'defect',
    means: 'Format validation is not validation. Only a referential check against the target register catches a well-formed lie.',
  },
  {
    f: 'Identifiers from other schemes entirely sitting in the company-number field: HMRC charity tax references (XN89306, XR38029), a mutuals register number (IP24891R), CIO register codes (CE00020 and five others), a Sea Cadet unit code',
    n: '17',
    sev: 'defect',
    means: 'The field has no declared scheme, so regulators file whatever identifier they hold. A SKOS scheme registry is the fix, and the register does not have one.',
  },
  {
    f: 'Joined charitable companies whose charity-register name disagrees with the Companies House name after conservative normalisation, out of 30,327 joined',
    n: '1,082 (3.57%)',
    sev: 'defect',
    means: 'Name-based matching, still the default in charity due diligence, splits one organisation into two or merges two into one, and neither register can see it.',
  },
  {
    f: 'Joined charitable companies in a distress state at Companies House while the charity remains Registered: 410 proposal to strike off, 223 in liquidation, 25 in administration, 4 other',
    n: '662',
    sev: 'signal',
    means: 'The charity register asserts Registered while the company register asserts the corporate shell is dying. Nothing reconciles the two claims.',
  },
  {
    f: 'GLEIF records naming UK Companies House as registration authority whose company number is absent from the live file. Most are RETIRED or LAPSED LEIs of dissolved companies, which is the system working as designed',
    n: '16,627 of 117,324',
    sev: 'signal',
    means: 'The honest decomposition matters more than the raw count: the defect set is the ACTIVE and ISSUED slice below, not this number.',
  },
  {
    f: 'Live issued LEIs (entity ACTIVE, registration ISSUED) citing a format-valid, in-range company number that does not resolve, after excluding 82 BR branch numbers the bulk product omits by design and 9 post-snapshot incorporations. Specimen: MENHADEN RESOURCE EFFICIENCY PLC cites 09242421',
    n: '36 of 127',
    sev: 'defect',
    means: 'Live, currently certified identifiers point at companies that are not on the live register, and the annual LEI renewal did not catch them.',
  },
  {
    f: 'GLEIF records disagreeing with Companies House about the company name, including stale post-rename records on ISSUED LEIs: ALBION CAPITAL GROUP LLP is now ALBIONVC LLP at Companies House',
    n: '2,666 (2.65%)',
    sev: 'defect',
    means: 'The LEI system certifies a name the source register no longer asserts. Renewal checked the box and missed the divergence.',
  },
  {
    f: 'UK LEI records whose certification has lapsed (38,544 LAPSED of 117,324, with 16,742 RETIRED and 61,832 ISSUED)',
    n: '32.85%',
    sev: 'signal',
    means: 'One in three UK LEIs is an expired claim. Adoption without renewal is not identification.',
  },
  {
    f: "Live companies inside Companies House's own bulk file whose numbers violate the documented format (5,243 IP...R style, 528 RS...FI style, 93 R0000019 style, 40 SP015CUS style, 8 stranger shapes)",
    n: '5,912',
    sev: 'signal',
    means: 'Any downstream validator that implements only the documented shapes rejects 5,912 genuine live companies. The register’s own scheme is not internally uniform.',
  },
  {
    f: 'PSC statement records carrying the misspelled production enum no-individual-or-entity-with-signficant-control, and 617,557 distinct companies declaring no PSC exists (6.07% of live companies)',
    n: '621,705',
    sev: 'defect',
    means: 'A consumer validating against the correctly spelled string silently matches nothing. The register’s errors become load-bearing, because fixing the spelling would now break every consumer that coded around it.',
  },
];

const SEV_STYLE: Record<string, string> = {
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

export const UkRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open ontology for UK public registers, tested against Companies House, the Charity Commission and the Global LEI System
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        From 18 November 2026 the Economic Crime and Corporate Transparency Act requires verification of who runs a company. Identity verification for the people is arriving; verification of the identifiers that link the registers to each other exists nowhere. On 17 August 2026 we downloaded the complete open UK register fabric, every source keyless: the Companies House bulk file of 5,695,465 live companies, the full Charity Commission register, the 12.9&nbsp;GB PSC snapshot, and the GLEIF LEI golden copy of 3,403,856 records. Then we measured what happens at every boundary where one register embeds another&apos;s identifiers. This is a case study in register assurance for the UK: the practice of auditing what a register publishes against the rules its identifiers declare for themselves and against the other registers that carry the same identity. Everything below is reproducible from the open repository, every headline is computed two independent ways, and the pipeline fails its own build if the two ever disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>1,268 of 31,612 Registered charitable companies (4.01 per cent) cite a company number that resolves to nothing on the Companies House live register. The free product excludes dissolved companies, so absent means wrong OR dissolved while the charity remains Registered; both are register-boundary failures.</li>
          <li>18 charities give 00000000 as their company number, 9 give 01234567, and 5 give 12345678. Every placeholder passes the format rule; only referential checking catches them.</li>
          <li>1,082 charities disagree with Companies House about their own company&apos;s name, and 662 charitable companies are in a distress state at Companies House, including 223 in liquidation, while the charity remains Registered.</li>
          <li>Of 117,324 GLEIF records naming UK Companies House as registration authority, 36 live issued LEIs cite format-valid, in-range company numbers that do not resolve, 2,666 disagree with Companies House on the name, and one in three has lapsed certification.</li>
          <li>Companies House&apos;s own bulk file contains 5,912 live companies whose numbers violate the documented format, and its PSC snapshot misspells its own enum value, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">no-individual-or-entity-with-signficant-control</code>, in 621,705 production records.</li>
          <li>The artefact is an open OWL 2 ontology, SKOS scheme registry and three SHACL layers, one shape per defect class, code MIT, ontology and documentation CC BY 4.0, reproducible from public data.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured</h2>
      <p className="text-gov-dark leading-relaxed">
        Four register surfaces, all keyless, all pinned to dated snapshots. The Companies House Free Company Data Product of 1 August 2026 carries 5,695,465 live companies; its DissolutionDate column is empty on every row, so the product contains live companies only, and absence from it never proves nonexistence. The Charity Commission full register download of 17 August 2026 carries the registered company number of 31,612 charitable companies. The Companies House PSC snapshot of the same day carries 14,923,476 records across 12.9&nbsp;GB of JSON. The GLEIF golden copy published at 08:00 that morning carries 3,403,856 LEI records, of which 117,324 name UK Companies House as their registration authority, verified against GLEIF&apos;s own registration-authorities API, with Companies House Gibraltar excluded as the false friend it is.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: 1,268 charitable companies point at nothing</h2>
      <p className="text-gov-dark leading-relaxed">
        Of the 31,612 Registered charities that carry a company registration number, 1,268 cite a number absent from the live register. That is 4.01 per cent. Specimens: charity 211570, SPORT HORSE BREEDING OF GREAT BRITAIN, cites 00221470; charity 214020, THE W R V S TRUST, cites 00522824; charity 212735, THE FOOD EDUCATION SOCIETY, cites 00156201. None of these numbers exists on the live register.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The honesty caveat, stated plainly: the free Companies House product contains live companies only, so an absent number means the number is wrong or the company has dissolved while the charity remains Registered. The split between the two cannot be computed from open bulk data. But both readings are register-boundary failures, because a Registered charity citing a dissolved corporate shell is itself a finding. The operational consequence is direct: anyone joining the charity register to Companies House, for grant due diligence, procurement screening or beneficial-ownership analysis, silently loses 4 in every 100 charitable companies at the first join, and nothing in either register tells them.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the placeholders that pass validation</h2>
      <p className="text-gov-dark leading-relaxed">
        Inside the dangling set, 18 charities give the placeholder 00000000 as their registered company number, 9 give 01234567, and 5 give 12345678. Every one of these 32 values passes the 8-digit format rule. Charity 217602, SOUTH CROXTON VILLAGE HALL, is registered with company number 00000000, and no format validator on earth will object.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the cleanest demonstration we have yet found of why identifier validation needs layers. Our SHACL model separates them explicitly: layer 1 checks the shape of the string against the scheme&apos;s declared rules, layer 2 checks the syntactic defect classes, and layer 3 checks that the identifier resolves in the target register and that the two registers agree about what it names. The placeholders sail through the first two and are caught only by the third. A register that runs format validation and stops has validated nothing.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the company-number field is a lost-property box</h2>
      <p className="text-gov-dark leading-relaxed">
        17 charitable companies publish values in the company-number field that violate the register&apos;s format entirely, and most of them are not typos. They are identifiers from other schemes: HMRC charity tax references (XN89306 at charity 238015, XR38029 at THE DAKHLEH TRUST, XT17973, XT12514), a mutuals register number (IP24891R), six CIO-scheme codes (CE00020, CE00571, CE00683, CEO10917, CEO11932, CEO13168), a Sea Cadet unit code (MSSC298), and a malformed royal charter number (RC00834, seven characters where the register form is RC followed by six digits).
      </p>
      <p className="text-gov-dark leading-relaxed">
        The pattern is that regulators file whatever identifier they hold, because the field declares no scheme and validates against none. The fix is a scheme registry: a machine-readable declaration of each identifier scheme&apos;s shapes, canonicalisation and authority, so that a value can be checked against the rules its claimed scheme declares and recognised when it belongs to a different scheme entirely. Our ontology ships one as SKOS, with every scheme above in it. The register does not have one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: 1,082 charities disagree with Companies House about their own name</h2>
      <p className="text-gov-dark leading-relaxed">
        Of the 30,327 charitable companies that join to a live Companies House record, 1,082 carry a name that diverges from the Companies House name after conservative normalisation that ignores case, punctuation, ampersands and suffixes such as Limited. These are real divergences, not normaliser noise. Charity 200124, ABINGER CONSOLIDATED CHARITIES, cites company 01648018, which Companies House names ABINGER HAMMER VILLAGE SCHOOL TRUST. Charity 200359, MEATH EPILEPSY CHARITY, cites 05822835, named THE MEATH TRUSTEE COMPANY LIMITED at Companies House. Charity 200264, LINGFIELD UNITED CHARITIES, cites 08296570, named LINGFIELD UNITED TRUST.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A further 662 of the joined companies are in a distress state at Companies House while the charity remains Registered: 410 with an active proposal to strike off, 223 in liquidation, 25 in administration, and 4 in other insolvency states. The charity register asserts Registered; the company register asserts the corporate shell is dying; nothing reconciles the two claims.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding five: the LEI system versus the live register</h2>
      <p className="text-gov-dark leading-relaxed">
        117,324 GLEIF golden-copy records name UK Companies House as their registration authority. 16,627 of them cite company numbers absent from the live file, and the honest reading of that number matters: most of those are RETIRED or LAPSED LEIs of dissolved companies, which is the system working exactly as designed. The candidate defect set is the 127 records that are entity ACTIVE with registration ISSUED yet cite a number absent from the live register. Decomposed: 82 cite BR-prefixed UK establishment numbers, a genuine Companies House series that the free bulk product excludes by design, so they are unverifiable at the open register boundary rather than provably wrong; 9 cite numbers above the highest number in the 1 August file and are almost certainly companies incorporated in the 16-day window between snapshots; and 36 cite format-valid, in-range numbers that simply do not resolve. MENHADEN RESOURCE EFFICIENCY PLC, a live issued LEI, cites 09242421. WEBB TRADERS UK LTD cites 10777356. These are currently certified identifiers pointing at companies that are not on the live register.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Name reconciliation finds 2,666 disagreements among the 100,663 joined records, including stale post-rename records on ISSUED LEIs: ALBION CAPITAL GROUP LLP is now ALBIONVC LLP at Companies House, ESSENSYS PLC is now ESSENSYS GROUP LIMITED, RIVER GLOBAL SERVICES LIMITED is now LIONTRUST SERVICES LIMITED. The LEI annual renewal did not catch the divergence in any of them. And 34 records publish junk in the registeredAs slot itself: ORBIT HOUSING ASSOCIATION LIMITED, an ISSUED LEI, records the mutuals number IP27802R as its Companies House number. The status distribution completes the picture: 61,832 ISSUED, 38,544 LAPSED, 16,742 RETIRED. One in three UK LEIs has lapsed certification.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding six: the register&apos;s own numbers break the register&apos;s own rules</h2>
      <p className="text-gov-dark leading-relaxed">
        Companies House&apos;s bulk file contains 5,912 live companies whose company numbers violate the documented format of 8 digits or a 2-letter prefix plus 6 digits: 5,243 of shape IP10067R, 528 of shape RS0001FI, 93 of shape R0000019, 40 of shape SP015CUS, and 8 stranger shapes including SP3COLLS and IPIP2960. These are genuine live companies, mostly industrial and provident legacy registrations. Any downstream validator that implements only the documented shapes rejects all 5,912.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The PSC snapshot adds the sharpest specimen in the study. The enum value <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">no-individual-or-entity-with-signficant-control</code>, with the second i of significant missing, is the literal production value in 621,705 statement records. Any consumer who validates against the correctly spelled string silently matches nothing. Behind the misspelling sits a re-measurable baseline: 617,557 distinct companies explicitly declare that no individual or entity with significant control exists, and 345,627 of them resolve on the live register, which is 6.07 per cent of all live companies. That is a narrower metric than Open Ownership&apos;s published figure of roughly 20 per cent, which counts companies without a named beneficial owner on a broader basis including unidentified-PSC and unfiled cases; ours is the explicit declaration rate alone, re-measurable monthly from the same keyless products.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The findings, graded</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Number</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Class</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Operational consequence</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((r, i) => (
              <tr key={r.f} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r.f}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{r.n}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
                <td className="px-4 py-3 text-gov-secondary">{r.means}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures are computed from register snapshots pinned to their dates: the Companies House bulk file of 1 August 2026, and the Charity Commission extract, PSC snapshot and GLEIF golden copy of 17 August 2026. The 16-day skew between the bulk file and the other sources is quantified where it matters. All are living systems, so a later run produces different totals while the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, transferable</h2>
      <p className="text-gov-dark leading-relaxed">
        None of this required privileged access or a single API key. The method is the same one we have now run against US bank registers, US securities registers, EU insurance registers, scholarly records, learning standards and enterprise knowledge bases.
      </p>
      <p className="text-gov-dark leading-relaxed">
        First, model identity honestly. An identifier in a register is not a property of an entity; it is a dated claim by a named register. Our OWL model reifies every published value as an IdentifierAssertion carrying the value exactly as published, the scheme the field claims, whether the value conforms to the rules that scheme declares for itself, and whether it resolves in the target register. Each observed failure mode is a class: DanglingIdentifier, PlaceholderIdentifier, CrossSchemeIdentifier, FormatInvalidIdentifier, SeriesOutOfScope, NameDisagreement.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        Second, make the schemes self-describing. A SKOS registry declares each scheme&apos;s shapes and canonicalisation as data, including the two documented Companies House shapes, the BR branch series the bulk product excludes, the legacy shapes the register itself contains, and the schemes whose values were found squatting in the company-number field.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Third, make defects first-class. Each defect class is one SHACL shape, so the validation report is the findings table, and the layering is the argument: format checks pass placeholders, referential checks catch them, and only cross-register reconciliation catches a name divergence between two internally consistent registers.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Fourth, never trust one computation. Every headline was computed by two independent implementations with different parsers and engines, and they agreed exactly only after the dual computation caught a real bug: the Charity Commission extract is unquoted tab-separated text, 172 charity names contain literal double quotes, and default CSV quoting silently dropped 234 charitable companies. The governance gate recomputes every number set-based and via SPARQL and SHACL over the graph, asserts a known-answer case before computing anything, and fails the build on any disagreement.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What was not measured, and why</h2>
      <p className="text-gov-dark leading-relaxed">
        The FCA Financial Services Register requires a free API key we did not hold, and we scraped nothing; a keyed run would join firm reference numbers the same way, including for the 1,652 charities that list the FCA as a regulator. The Land Registry&apos;s overseas and corporate ownership datasets sit behind a bespoke non-OGL licence and were not downloaded; a licensed run would produce dangling and name-mismatch rates for land-title proprietors, the same shape as the findings above. And the missing-versus-dissolved split inside every dangling count is not computable from the free Companies House product, which excludes dissolved companies by design. The repository states each gap with the same precision as the findings.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What a register operator or a charity should do with this</h2>
      <p className="text-gov-dark leading-relaxed">
        If you operate a register: declare the scheme of every identifier field you publish, validate against the declared scheme at ingestion, run the referential check against the target register on a cadence, and treat the placeholders and the cross-scheme values above as the test cases they are. If you are a charity trustee or a due-diligence team: the join that loses 4 per cent of charitable companies is the join your screening process is almost certainly running today, and every number above is checkable from your side with open data and the shipped pipeline.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Common questions</h2>
      <div className="space-y-5">
        {FAQ_SCHEMA.mainEntity.map((q) => (
          <div key={q.name}>
            <h3 className="font-semibold text-gov-dark mb-1">{q.name}</h3>
            <p className="text-gov-dark leading-relaxed">{q.acceptedAnswer.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, reproducible, and free to use</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository, with the ontology, the SKOS scheme registry, the three SHACL layers, the harvest and finding pipelines in both independent implementations, the query library and the full findings report, is public: code under MIT, ontology and documentation under CC BY 4.0. The findings report lists what could not be obtained as carefully as what could, and everything regenerates from roughly 25&nbsp;GB of keyless open register data with the scripts as shipped.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          uk-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If you want this run against a register you operate or depend on, we run a scoped diagnostic of one register boundary as a one-week engagement: harvest, conformance census, cross-register reconciliation, and a findings ledger your engineers can reproduce. The public version of this study took days against four open sources; the private version is the same method applied to the entity systems inside your organisation that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with the register name.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the same register-boundary discipline found every FDIC LEI truncated in <Link to="/research/bank-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US bank register</Link>, the missing CIK-to-LEI crosswalk in <Link to="/research/securities-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US securities register</Link>, and the category both belong to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>.
      </p>
    </section>
  </article>
);

export default UkRegisterOntology;
