import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/securities-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/securities-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/securities-register-ontology',
  headline:
    'The missing CIK-to-LEI crosswalk: an open ontology for US securities entity registers | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the SEC's EDGAR entity register and the Global LEI System, built from complete downloads of both registers and of every open register that embeds them, all taken on 17 August 2026. The lei field is populated in 773 of 981,355 EDGAR entity records, 0.079 per cent, and only 667 of those are valid LEIs: the rest include telephone numbers, IRS EINs, entity names and 35 literal N/A strings. In one quarter 1,973 fund registrants stated their LEI to the SEC on Forms N-PORT and N-CEN, and the entity register surfaces 12 of them. GLEIF publishes 27,718 records that map LEIs to EDGAR identifiers daily under CC0, while no SEC surface publishes the reverse. Reconciling the two halves of the series crosswalk across 12,604 fund series finds 100 fund series carrying two different LEIs across the register boundary, and 56.6 per cent of all US LEI records are LAPSED. The joint data standards rule under the Financial Data Transparency Act adopts the Legal Entity Identifier as the common entity identifier for nine federal financial agencies, the SEC among them, from 1 October 2026. The artefact comprises 526,098 triples, with every headline computed two independent ways, reproducible from public data.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-17',
  dateModified: '2026-08-17',
  about: {
    '@type': 'Dataset',
    name: 'Securities Entity Register Ontology (SERO)',
    url: REPO,
  },
  keywords:
    'securities entity register, SEC EDGAR LEI, CIK to LEI mapping, CIK to LEI crosswalk, FDTA, Financial Data Transparency Act, 91 FR 38246, LEI validation, ISO 17442, ISO 7064 check digits, N-PORT data quality, N-CEN, GLEIF golden copy, ISIN-LEI mapping, register assurance, SHACL, OWL 2 ontology, SKOS, EDGAR entity register, fund LEI reconciliation, securities register ontology',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/securities-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the SEC publish LEIs for the companies in EDGAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Barely. Every one of the 981,355 entity records in the SEC's EDGAR bulk submissions file carries a top-level field named lei, and as of the 17 August 2026 build measured in this study it is populated in 773 of them, which is 0.079 per cent. Among the 7,992 listed operating companies in the register, 25 carry an LEI. Apple's LEI has been ISSUED at GLEIF since 2012, and Apple's EDGAR record says null, as do the records of Microsoft, JPMorgan and essentially every household-name filer. For comparison, the same day's GLEIF golden copy contains 358,294 US LEI records.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many EDGAR companies have a valid LEI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of the 773 populated lei values in the EDGAR entity register, 667 are valid LEIs. The other 106 include telephone numbers such as (646) 508-0022, IRS employer identification numbers, EDGAR file numbers, a Connecticut state registry string, entity names typed into the identifier field, fourteen 20-character strings that look like LEIs and fail the ISO 7064 check digits, thirty-five records whose LEI is the literal text N/A, and one value that is all zeros. EDGAR runs no validation on the field and republishes whatever was filed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a CIK to LEI mapping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not from the SEC. No SEC surface publishes a CIK-to-LEI or series-to-LEI file, and the SEC's own investment company series and class register, 19,340 series, has no LEI column at all. The mapping exists at GLEIF: 27,718 LEI records in the golden copy name EDGAR as their registration authority and carry an EDGAR identifier in their registeredAs field, 22,688 series IDs and 5,017 CIKs, published daily under CC0 by a Swiss foundation. A further partial crosswalk can be recovered from the SEC's own structured form datasets, because 1,973 fund registrants stated their LEIs to the SEC on Forms N-PORT and N-CEN in 2026 Q2 alone.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the FDTA joint data standards rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The joint data standards rule under the Financial Data Transparency Act takes effect on 1 October 2026. Nine federal financial agencies, the SEC among them, adopted the ISO 17442 Legal Entity Identifier as their common legal entity identifier, and the rule's operative text requires data schemas with semantics documented in machine-readable taxonomy or ontology models. This study takes that requirement literally: it is a baseline measurement of the SEC's entity register against the standard its own operator has adopted, taken 45 days before the rule takes effect and reproducible from the open repository.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you validate a Legal Entity Identifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An LEI carries two check digits under ISO 7064 precisely so that software can reject a corrupted value without asking anyone. The same government already relies on that arithmetic: by regulation, a HMDA loan identifier must begin with a valid LEI and end with a computable check digit. EDGAR runs no such check on its own lei field and republishes whatever was filed. The consequence is measurable: fourteen 20-character values in the entity register fail the check digits, and the Voya Ultra Short Income ETF variant reported on N-PORT, with the letter I replaced by the digit 1, fails them too, so the checksum the SEC does not run would have caught the SEC's own data.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are the fund LEIs reported on Form N-PORT accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mostly, and the failures are structured. In 2026 Q2 the N-PORT structured dataset records 5,347,869 portfolio holdings, of which 3,394,396 carry a valid issuer LEI and only 19 fail the check digits. At the fund series level, the two halves of the same crosswalk, GLEIF's EDGAR-registered series records and the series LEIs funds report on N-PORT, can be reconciled for 12,604 series: 12,504 agree and 100 disagree, meaning the same fund series carries two different LEIs on the two sides of the register boundary. The specimens include a character-substitution twin that fails the checksum, three VictoryShares ETF series holding each other's LEIs in a cycle, and eleven checksum-valid LEIs reported to the SEC that do not exist in the GLEIF golden copy at all.",
      },
    },
  ],
};

const MODEL = `graph TD
  R["EDGAR entity record<br/><i>CIK</i>"] --> A["IdentifierAssertion<br/><b>reified, dated, by register</b><br/>value as published + conformance"]
  A -.->|resolves to| E["LegalEntity<br/><i>GLEIF record + status</i>"]
  S["SKOS scheme registry<br/><i>length, charset, check digits<br/>declared as data</i>"] --> A
  A --> RO["ReconciliationObservation<br/><b>cross-register disagreement</b>"]
  A --> CO["CoverageObservation<br/><b>held on one surface,<br/>empty on another</b>"]`;

const FINDINGS = [
  {
    f: "EDGAR entity records with a populated lei field, out of 981,355 records that all carry the field. Among the 7,992 listed operating companies, 25 carry an LEI, and Apple's record says null while its LEI has been ISSUED at GLEIF since 2012",
    n: '773 (0.079%)',
    sev: 'gap',
    means: 'No institution can join SEC filings to sanctions lists, counterparty risk systems, Basel reporting or any LEI-keyed dataset from the register itself. Every consumer rebuilds the same crosswalk privately, badly, or not at all.',
  },
  {
    f: 'Populated values that are not valid LEIs: telephone numbers, IRS EINs, entity names typed into the identifier field, a state registry string, 14 LEI-shaped strings failing the ISO 7064 check digits, 35 literal "N/A" strings and one all-zeros value',
    n: '106 of 773',
    sev: 'defect',
    means: 'The register publishes a field it never validates. The check digits exist so software can reject a corrupted value, and EDGAR republishes whatever was filed.',
  },
  {
    f: "CIKs for which the operator demonstrably holds a valid LEI on one publication surface (Forms N-PORT and N-CEN, 1,973 registrants in one quarter) while the entity register's field for the same CIK is empty",
    n: '1,954',
    sev: 'defect',
    means: 'The crosswalk the SEC does not publish already sits inside its own filings.',
  },
  {
    f: "Entity register asserting the wrong entity's identity: CIK 892538, SunAmerica Series Trust, carries the LEI of SunAmerica Asset Management, LLC, its investment adviser, while the trust's own N-PORT filings report the LEI GLEIF registers against exactly this CIK",
    n: '1 confirmed',
    sev: 'defect',
    means: "Identity assigned to the wrong side of a control relationship at the register boundary. The same defect class was found last week in the FDIC's register, so this is two US regulators with one failure mode.",
  },
  {
    f: 'LEI records in the GLEIF golden copy naming EDGAR as their registration authority, carrying 22,688 series IDs and 5,017 CIKs in their registeredAs field, published daily under CC0. The SEC publishes no mapping in either direction and its series register has no LEI column',
    n: '27,718',
    sev: 'signal',
    means: 'The authoritative crosswalk between the US securities register and the US-adopted entity standard is maintained outside the United States, by the counterparty register.',
  },
  {
    f: "Fund series carrying two different LEIs on the two sides of the register boundary, out of 12,604 series reconcilable between GLEIF's records and the LEIs funds report on N-PORT",
    n: '100',
    sev: 'defect',
    means: 'Systems keying fund exposure, fee analysis or counterparty aggregation on the reported LEI silently split one fund into two entities or merge two into one, and no schema validator on either register can see it.',
  },
  {
    f: 'Checksum-valid LEIs reported to the SEC on N-PORT and N-CEN that do not exist in the GLEIF golden copy at all',
    n: '11',
    sev: 'defect',
    means: 'Plausible-looking identifiers that resolve to nothing. Only a cross-register resolution check can catch them, because the values pass every local test.',
  },
  {
    f: 'US LEI records in the golden copy that are LAPSED, materially worse than the global lapse rate',
    n: '202,698 of 358,294 (56.6%)',
    sev: 'signal',
    means: 'A lapsed identifier no longer attests anything current.',
  },
];

const SEV_STYLE: Record<string, string> = {
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

export const SecuritiesRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The missing CIK-to-LEI crosswalk: an open ontology for US securities entity registers
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        On 1 October 2026, the joint data standards rule under the Financial Data Transparency Act takes effect. Nine federal financial agencies, the SEC among them, adopted the ISO 17442 Legal Entity Identifier as their common legal entity identifier, and the rule&apos;s operative text requires data schemas with semantics documented in machine-readable taxonomy or ontology models. We took that requirement literally. On 17 August 2026 we downloaded the SEC&apos;s entire entity register and every open register that embeds or is embedded by it, and we measured what the public record actually says. This is a case study in register assurance: the practice of auditing what a register publishes against the rules its identifiers declare for themselves and against the other registers that carry the same identity. Everything below is reproducible from the open repository, every headline is computed two independent ways, and the pipeline fails its own build if the two ever disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>Every one of the 981,355 records in the SEC&apos;s EDGAR entity register carries a top-level <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">lei</code> field. It is populated in 773 of them, and only 667 of those are valid LEIs.</li>
          <li>The invalid values include telephone numbers, IRS employer identification numbers, entity names typed into the identifier field, fourteen strings that fail the ISO 7064 check digits, and thirty-five records whose LEI is the literal text &quot;N/A&quot;.</li>
          <li>In a single quarter, 1,973 fund registrants stated their LEI to the SEC on Forms N-PORT and N-CEN, and the entity register surfaces 12 of them. For 1,954 CIKs the operator demonstrably holds a valid LEI that its own register does not publish.</li>
          <li>GLEIF publishes a daily CC0 mapping from 27,718 LEIs to EDGAR identifiers. The SEC publishes no mapping in either direction, so the authoritative crosswalk to the US-adopted standard is maintained in Switzerland.</li>
          <li>Reconciling the two halves of the series crosswalk across 12,604 fund series finds 100 series carrying two different LEIs on the two sides of the register boundary, and 56.6 per cent of all US LEI records are LAPSED.</li>
          <li>The artefact is an open OWL 2 ontology, SKOS scheme registry and SHACL governance layer, 526,098 triples, code MIT, ontology and documentation CC BY 4.0, reproducible from public data.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured</h2>
      <p className="text-gov-dark leading-relaxed">
        Four register surfaces, all keyless, all fetched on the same day. The EDGAR bulk submissions file is the SEC&apos;s entity register: 981,355 entity records, refreshed daily, one JSON document per CIK. Every record carries a top-level field named <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">lei</code>. The GLEIF golden copy is the global LEI register: 3,404,295 records in the 17 August 16:00 UTC publish, of which 358,294 are US entities. The SEC&apos;s structured form datasets for 2026 Q2 record what regulated funds told the SEC on Forms N-PORT and N-CEN, including their own LEIs, their series&apos; LEIs, and the LEIs and CUSIPs of 5.3 million portfolio holdings. The GLEIF ISIN-LEI mapping file links 9,135,428 securities to their issuers&apos; LEIs, openly and daily.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the field is empty</h2>
      <p className="text-gov-dark leading-relaxed">
        The <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">lei</code> field is populated in 773 of 981,355 EDGAR entity records. That is 0.079 per cent. Among the 7,992 listed operating companies in the register, 25 carry an LEI. Apple&apos;s LEI has been ISSUED at GLEIF since 2012; its EDGAR record says null. The same is true of essentially every household-name filer.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is direct. Any institution that needs to join SEC filings to sanctions lists, to counterparty risk systems, to Basel reporting, or to any of the datasets keyed on the LEI cannot do it from the SEC&apos;s register. Every consumer of EDGAR data rebuilds the same crosswalk privately, badly, or not at all. From 1 October the identifier the register ignores is the standard the register&apos;s operator has adopted.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: what the field contains when it is not empty</h2>
      <p className="text-gov-dark leading-relaxed">
        Of the 773 populated values, 667 are valid LEIs. The other 106 are a museum of what happens when a register publishes a field it never validates. There are telephone numbers, including &quot;(646) 508-0022&quot; and &quot;424-231-9100&quot;. There are IRS employer identification numbers. There are entity names typed into the identifier field, including &quot;DANGEROUS 7 SPV 2 LP&quot; and &quot;WUWALLACEFAMILYTRUST&quot;. There is a Connecticut state registry string, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">US-CT.BER:3091043</code>. There are fourteen 20-character strings that look like LEIs and fail the ISO 7064 check digits, and there are thirty-five records whose LEI is the literal text &quot;N/A&quot;.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The LEI carries two check digits precisely so that software can reject a corrupted value. The same government already relies on this: a HMDA loan identifier must begin with a valid LEI and end with a computable check digit, by regulation. EDGAR runs no such check on its own LEI field and republishes whatever was filed.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the SEC holds the crosswalk it does not publish</h2>
      <p className="text-gov-dark leading-relaxed">
        In a single quarter, 1,973 fund registrants stated their LEI to the SEC on Forms N-PORT and N-CEN. The entity register surfaces 12 of them. For 1,954 CIKs we can show the operator holds a valid LEI on one publication surface while the entity register&apos;s field for the same CIK sits empty. Silence here is not missing data; it is a published position of the register, and it is wrong.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Where both surfaces are populated they can disagree. The entity register says CIK 892538, SunAmerica Series Trust, has LEI <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300E40BQMHI2LOX26</code>. GLEIF says that LEI belongs to SunAmerica Asset Management, LLC, the trust&apos;s investment adviser. The trust&apos;s own filings on Form N-PORT report <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300YDIAXUNCUXFM44</code>, which GLEIF registers as SunAmerica Series Trust against exactly this CIK. The register carries the manager&apos;s identity on the fund. We found the same defect class last week in a different US register: the FDIC&apos;s BankFind record for Associated Bank, N.A. carries the LEI of its holding company. Two regulators, one failure mode: identity assigned to the wrong side of a control relationship at the register boundary.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the reverse crosswalk exists, at GLEIF</h2>
      <p className="text-gov-dark leading-relaxed">
        27,718 LEI records in the golden copy name EDGAR as their registration authority and carry an EDGAR identifier in their registeredAs field: 22,688 series IDs and 5,017 CIKs. GLEIF, a Swiss foundation, publishes a mapping from LEIs to SEC identifiers every day under CC0. The SEC publishes no mapping in either direction, and its own investment company series and class register, 19,340 series, has no LEI column at all. The authoritative crosswalk between the US securities register and the US-adopted entity standard is maintained outside the United States, by the counterparty register.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding five: the two halves disagree 100 times</h2>
      <p className="text-gov-dark leading-relaxed">
        Because GLEIF records which EDGAR series each LEI belongs to, and because funds report their series LEIs to the SEC on N-PORT, the two halves of the same mapping can be reconciled for 12,604 series. They agree 12,504 times. One hundred fund series carry two different LEIs on the two sides of the register boundary.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The specimens tell you how identity actually decays. Voya Ultra Short Income ETF is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">254900FKI2RDASVD0175</code> at GLEIF, ISSUED and valid. Its N-PORT filings say <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">254900FK12RDASVD0175</code>, with the letter I replaced by the digit 1. The reported variant fails the check digits, so the checksum the SEC does not run would have caught the SEC&apos;s own data. Three VictoryShares ETF series hold each other&apos;s LEIs in a cycle, the unmistakable signature of a column shift in someone&apos;s reporting pipeline, now frozen into regulatory filings. Eleven checksum-valid LEIs reported to the SEC do not exist in the GLEIF golden copy at all: plausible identifiers that resolve to nothing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence: any system that keys fund exposure, fee analysis, or counterparty aggregation on the reported LEI will silently split one fund into two entities or merge two into one, and no schema validator on either register can see it, because each register is internally consistent. The defect exists only at the boundary.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding six: most US LEIs are not current anyway</h2>
      <p className="text-gov-dark leading-relaxed">
        Of 358,294 US LEI records, 202,698 are LAPSED: 56.6 per cent, materially worse than the global lapse rate. Among the LEIs asserted on SEC surfaces the status distribution is better but not clean, and the full breakdown is in the repository&apos;s governance summary. Adoption without renewal leaves an inventory of expired claims.
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
      <HBars
        title="One quarter of fund filings against the entity register's lei field"
        note="1,973 registrants stated their LEI to the SEC on Forms N-PORT and N-CEN in a single quarter. The entity register publishes an LEI for 12 of them."
        rows={[
          { label: 'Registrants stating an LEI to the SEC', value: 1973, display: '1,973', color: CHART.gray },
          { label: 'Surfaced by the entity register', value: 12, display: '12', color: CHART.amber },
        ]}
      />
      <HBars
        title="US LEI records in the GLEIF golden copy, by renewal state"
        note="202,698 of 358,294 (56.6%) are lapsed, materially worse than the global lapse rate. Adoption without renewal is an inventory of expired claims."
        rows={[
          { label: 'Lapsed', value: 202698, display: '202,698', color: CHART.amber },
          { label: 'Not lapsed', value: 155596, display: '155,596' },
        ]}
      />
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures are computed from register surfaces fetched on 17 August 2026: the EDGAR bulk submissions file, the GLEIF golden copy published at 08:00 that day, the GLEIF ISIN-LEI mapping, and the SEC structured form datasets for 2026 Q2. All are living systems, so a later run produces different totals while the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, transferable</h2>
      <p className="text-gov-dark leading-relaxed">
        None of this required privileged access. The method is the same one we have now run against fund registers, insurance registers, scholarly records, bank registers, learning standards, and enterprise knowledge bases.
      </p>
      <p className="text-gov-dark leading-relaxed">
        First, model identity honestly. An identifier in a register is not a property of an entity; it is a dated claim by a named register. Our OWL model reifies every published value as an IdentifierAssertion carrying the value exactly as published, the scheme the field claims, whether the value conforms to the rules that scheme declares for itself, and, for LEIs, whether the value resolves at GLEIF and with what status.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        Second, make the schemes self-describing. A SKOS registry declares each scheme&apos;s length, character set, and check-digit algorithm as data, so the validator has no hard-coded rules and adding a register means adding data, not code.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Third, make defects first-class. Each defect class is one SHACL shape, so the validation report is the findings table. Cross-register comparisons are ReconciliationObservation nodes; a register holding an identifier on one surface while another sits empty is a CoverageObservation.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Fourth, never trust one computation. Every headline is computed set-based in Python and independently via SPARQL and SHACL over the graph, and the build fails if they disagree. This gate has caught a real bug in every register we have audited, including, twice, our own pipelines.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art, credited</h2>
      <p className="text-gov-dark leading-relaxed">
        FIBO, maintained by the EDM Association, models legal entities and US registry identifiers conceptually, and its maintainers are actively improving LEI constraints; our findings sit downstream of FIBO&apos;s scope, at the layer where published values meet declared rules. The OFR&apos;s 2018 staff discussion paper by Liju Fan and Mark Flood prototyped OWL over bank registry data and remains the closest federal prior art. The Data Foundation&apos;s work on FDTA implementation, including its argument that the Act is about meaning sharing rather than file formats, frames the policy need this measurement serves. GLEIF&apos;s own data quality programme assures what issuers submit; nothing in it constrains what a downstream register republishes, which is exactly the gap measured here.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What a regulator or a fund complex should do with this</h2>
      <p className="text-gov-dark leading-relaxed">
        If you operate a register: validate identifier fields against their schemes at ingestion, publish the crosswalks you already hold, and treat an empty field as an assertion you are making. If you run regulatory reporting at a fund complex: reconcile your reported LEIs against the golden copy quarterly; the 100 disagreements above are all detectable from your side with the checksums and the open files.
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
        The repository, with the ontology, the SKOS scheme registry, the three SHACL layers, the harvest and reconciliation pipeline, the query library and the build report, is public: code under MIT, ontology and documentation under CC BY 4.0. The build report lists what could not be obtained as carefully as what could, and the graph of 526,098 triples regenerates from about 2.5&nbsp;GB of open register data with the scripts as shipped.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          securities-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If you want this run against a register you operate or depend on, we run a scoped diagnostic of one register boundary as a one-week engagement: harvest, conformance census, cross-register reconciliation, and a findings ledger your engineers can reproduce. The public version of this study took days against four open sources; the private version is the same method applied to the entity systems inside your firm that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with the register name.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the same register-boundary discipline found the mirror-image defect at the FDIC in <Link to="/research/bank-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US bank register</Link>, was proved on the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">US fund universe</Link>, and the category it belongs to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>.
      </p>
    </section>
  </article>
);

export default SecuritiesRegisterOntology;
