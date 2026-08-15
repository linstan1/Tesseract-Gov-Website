import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/insurance-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/insurance-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/insurance-register-ontology',
  headline:
    'An open ontology for insurance and reinsurance: what the EU register says about 3,304 insurers, and what it gets wrong | Tesseract Academy',
  description:
    'The first open OWL 2 ontology, SKOS registry and SHACL governance layer for insurance and reinsurance entity data, built against the complete EIOPA Register of Insurance Undertakings (33,924 rows) joined with GLEIF and cross-checked against the German national register. 643 of 3,304 active EEA insurers carry no LEI. Four filed LEI values are arithmetically impossible. 118 have lapsed, 42 name entities GLEIF says no longer exist, one is shared by two SCOR reinsurance companies, and 283 passports outlive the authorisation they depend on. Every finding is reproducible from public data with five commands.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-14',
  dateModified: '2026-08-15',
  about: {
    '@type': 'Dataset',
    name: 'Insurance Register Ontology (IRO)',
    url: REPO,
  },
  keywords:
    'insurance ontology, reinsurance ontology, insurance knowledge graph, OWL ontology insurance, insurance data model, SHACL insurance, SKOS insurance, LEI, EIOPA register, GLEIF, BaFin, Solvency II data quality, entity resolution insurance, counterparty data, insurance data governance, FIBO insurance, ACORD, treaty reinsurance data',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/insurance-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an open ontology for insurance and reinsurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Until now, effectively no. FIBO, the open financial industry ontology from the EDM Council, contains four insurance-related classes inside a guaranty module plus two entity classes, and the string "reinsur" appears exactly once in the entire ontology, inside a free-text definition. There is no Reinsurer class, no Treaty, no Cession. ACORD standards and the Lloyd\'s Core Data Record are real and detailed but sit behind membership or portal access. Oasis LMF Open Exposure Data is genuinely open under CC0 but is a flat-file exposure schema rather than an ontology. The Insurance Register Ontology published at github.com/fabio-rovai/insurance-register-ontology is an open OWL 2, SKOS and SHACL artefact for insurance and reinsurance entity data, licensed CC BY 4.0 and MIT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does FIBO cover insurance or reinsurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barely. Verified against the published FIBO source on GitHub in August 2026, the complete insurance content is InsurancePolicy, Insurer, InsuranceBackedGuaranty and Policyholder in the FBC guaranty module, plus InsuranceCompany and InsuranceService in the financial services entities module. Insurance appears there in service of credit enhancement rather than as a modelled domain. Reinsurance is not modelled at all: no Reinsurer, no ReinsuranceContract, no Treaty, no Cession, no Retrocession.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many EU insurers are missing a Legal Entity Identifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the EIOPA Register of Insurance Undertakings as exported on 14 August 2026, 643 of 3,304 active domestic insurance and reinsurance undertakings carry no LEI at all, which is 19.5 per cent. 492 of those are German. The German national register published by BaFin is not more complete: it carries an LEI for only 505 of the 4,824 German-supervised entities it lists, which is 10.5 per cent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you validate a Legal Entity Identifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An LEI is 20 characters under ISO 17442: 18 alphanumerics followed by two decimal check digits computed with ISO 7064 MOD 97-10. To validate, expand every character to its base-36 numeric value, concatenate the digits, and confirm the resulting integer modulo 97 equals 1. This is pure arithmetic and takes microseconds. Applying it to the EIOPA register finds four values that cannot exist, and to the BaFin register five more, three of which are 19 characters long and therefore truncated rather than mistyped.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an insurance data model and an insurance ontology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A data model fixes the shape of records inside one system. An ontology fixes the meaning of entities and relationships across systems, independently of any storage layout, and can carry executable constraints. The practical difference in insurance is that a data model can hold two systems that disagree about which company an identifier names without noticing, whereas an ontology with reified identifier assertions makes that disagreement a query. The OMG Property and Casualty Data Model is an open relational data model, frozen at version 1.0 since 2014. An ontology such as IRO adds scope semantics, provenance per assertion, and SHACL rules that run continuously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is SHACL used for in insurance data governance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SHACL is the W3C standard for validating graph data against declared shapes. In insurance entity data it lets a policy such as "an active undertaking must hold a valid LEI" or "a cross-border passport must not outlive the authorisation it derives from" exist as an executable artefact rather than a paragraph in a procedures manual, running continuously against live data instead of during a quarterly remediation project. Severity grading matters: a missing identifier is a Warning that creates a work queue, while an arithmetically impossible identifier is a Violation.',
      },
    },
  ],
};

const MODEL = `graph TD
  U["InsuranceUndertaking<br/><i>Solvency II Article 13</i>"] --> RG["Registration<br/><i>home authorisation<br/>with its own dates</i>"]
  RG --> N["SupervisoryAuthority<br/><i>the national regulator</i>"]
  U --> OP["CrossBorderOperation<br/><i>one host country,<br/>one operation mode</i>"]
  OP --> M["OperationMode<br/><i>SKOS: services, branch,<br/>third-country branch</i>"]
  L["LEI assertion<br/><b>entity-scoped</b><br/>checksum plus GLEIF status"] -.-> U
  C["National code assertion<br/><b>authority-scoped</b>"] -.-> U`;

const LAYERS = `graph LR
  A["Public register<br/>33,924 rows"] --> B["Two-pass<br/>entity resolution"]
  B --> C["Graph<br/>276,683 triples"]
  C --> D["Layer 1<br/>syntax and format"]
  C --> E["Layer 2<br/>structure and cardinality"]
  C --> F["Layer 3<br/>cross-source rules"]
  D --> G["Graded findings:<br/>Violation or Warning"]
  E --> G
  F --> G`;

const FINDINGS = [
  {
    f: 'Active domestic insurance and reinsurance undertakings carrying no LEI at all, twelve years after EIOPA issued guidelines asking national authorities to ensure they hold one',
    n: '643 of 3,304 (19.5%)',
    sev: 'gap',
    means: 'Any screening, exposure aggregation or counterparty query keyed on LEI silently omits one in five authorised EEA insurers.',
  },
  {
    f: 'LEI values that fail ISO 7064 check digits, meaning they cannot exist in the global system. One is twenty zeros. One is a letter O where the real identifier carries a zero',
    n: '4, all absent from GLEIF',
    sev: 'defect',
    means: 'Each one severs an authorised insurer from every downstream system keyed on LEI, and each is detectable by arithmetic that takes microseconds.',
  },
  {
    f: 'Active undertakings whose LEI registration has lapsed at GLEIF: authorised to write business, not maintaining the identifier that names them',
    n: '118 (63 French)',
    sev: 'signal',
    means: 'Lapsed records stop being refreshed, so any attribute you read from them ages silently while the entity trades normally.',
  },
  {
    f: 'Active undertakings whose LEI points at an entity GLEIF marks INACTIVE: one register says authorised to insure, the other says the company has ceased',
    n: '42',
    sev: 'defect',
    means: 'A direct contradiction about whether a live insurer exists. Whichever system is wrong, an automated decision that trusts either one alone is wrong too.',
  },
  {
    f: 'LEIs filed against more than one register key; of those, the number carrying materially different names; of those, hard collapses on domestic rows alone, including one identifier shared by SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland',
    n: '227 / 56 / 3',
    sev: 'signal',
    means: 'Two distinct reinsurance legal entities resolving to one identifier is precisely the failure that corrupts treaty counterparty resolution and group exposure roll-up.',
  },
  {
    f: 'Open cross-border operation rows belonging to undertakings whose home authorisation has already ended: passports outliving the licence they depend on',
    n: '283',
    sev: 'defect',
    means: 'A passport is derived permission. If the source authorisation has ended, an open passport row is either a stale record or an unlicensed activity, and the register does not distinguish them.',
  },
  {
    f: 'Register names that disagree with the GLEIF legal name after aggressive normalisation, including MAPFRE MIDDLESEA against MAPFRE MALTA, a rename one side has not absorbed',
    n: '402 of 2,661 (15.1%)',
    sev: 'signal',
    means: 'Name matching is the fallback when identifiers are missing, and this is the measured error rate of that fallback on official data.',
  },
  {
    f: 'Status of every distinct LEI filed anywhere in the register: issued, retired, lapsed, duplicate, annulled, absent',
    n: '2,590 / 680 / 351 / 3 / 1 / 4',
    sev: 'signal',
    means: 'A register is not a snapshot of live entities. Nearly a fifth of the identifiers in it name entities that have been retired.',
  },
];

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

const PLAYBOOK = [
  {
    step: '1. Key entities on the register that governs them, never on the identifier you wish were clean',
    detail: 'IRO keys an undertaking on home country plus national authority code, because that is the register’s own primary key. The LEI is treated as an assertion to be validated, not as identity. Had we keyed on LEI, the 643 undertakings without one would have vanished from the graph and the three shared identifiers would have silently merged distinct companies.',
  },
  {
    step: '2. Make every identifier a node, not a string column',
    detail: 'An identifier assertion carries the scheme it belongs to, the system that asserted it, and its computed validation state. Two systems asserting different identifiers for one company then becomes representable and queryable rather than an overwrite. This single decision is what turns reconciliation from a project into a query.',
  },
  {
    step: '3. Declare scope as data',
    detail: 'The SKOS registry states that an LEI is entity-scoped and globally unique while a national authority code is authority-scoped and unique only within one regulator. A branch legitimately carrying its head office’s LEI under a host regulator’s code is then modelled correctly instead of raising a false alarm.',
  },
  {
    step: '4. Reify anything with a lifecycle',
    detail: 'Authorisations and passports have start dates, end dates and issuing authorities. Model them as nodes and "a passport outliving its authorisation" becomes a rule that runs. Model them as edges and it becomes a spreadsheet someone rebuilds each quarter.',
  },
  {
    step: '5. Compute arithmetic in code, enforce policy in shapes',
    detail: 'Check digits are computed by the pipeline and asserted into the graph; the shapes then require the recorded result. Encoding modulo 97 arithmetic in SPARQL is possible and unwise. The independent validator re-finds exactly the four impossible identifiers from the recorded state, which is how you know the two halves agree.',
  },
  {
    step: '6. Grade severity honestly',
    detail: 'An impossible identifier is a Violation. A missing one is a Warning that creates a work queue. A lapsed one is a signal to investigate. Systems that flag everything at one level get ignored at every level, and a validation report nobody reads is worse than no report.',
  },
  {
    step: '7. Join a second source and record the disagreement rather than resolving it silently',
    detail: 'Joining the European register to the global identifier system produced 118 lapsed, 42 contradicted and 402 name mismatches. Joining it to a national register recovered 14 identifiers Europe does not hold. None of these were visible inside any single source.',
  },
];

export const InsuranceRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open ontology for insurance and reinsurance, tested against every insurer in Europe
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        There was no open, usable ontology for insurance and reinsurance entity data, so we built one and proved it on the hardest available evidence: the European Union&apos;s own register of every authorised insurer and reinsurer, joined to the global identifier system that is supposed to name them, and cross-checked against a national regulator&apos;s separate register. The result is 276,683 triples of public data and eight findings that no single source could see. One in five active European insurers has no global identifier. Four of the identifiers that are filed cannot exist. Two different SCOR reinsurance companies share one. This page explains what we built, how, what it found, and how the same method applies to your own entity data.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The artefact:</strong> an open OWL 2 ontology, two SKOS registries and a three-layer SHACL governance suite for insurance and reinsurance undertakings, their authorisations, their cross-border passports and their identifiers. Public under CC BY 4.0 and MIT.</li>
          <li><strong>The evidence:</strong> the complete EIOPA Register of Insurance Undertakings, 33,924 rows covering 4,842 authorised undertakings and 29,082 cross-border operations, joined to a same-day harvest of all 3,630 identifiers it files from GLEIF, then cross-checked against BaFin&apos;s German register.</li>
          <li><strong>The headline defects:</strong> 643 active insurers with no identifier, 4 arithmetically impossible identifiers, 42 direct contradictions about whether an insurer exists, 3 identifier collapses across distinct legal entities, 283 passports outliving their authorisation.</li>
          <li><strong>The clean result:</strong> where both the European and German registers populate the identifier field, they agree perfectly across 344 matched undertakings, with zero conflicting values. The problem is coverage, not contradiction.</li>
          <li><strong>Reproducibility:</strong> five commands, two public sources, no licensed data, no API keys.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why insurance had no open ontology worth using</h2>
      <p className="text-gov-dark leading-relaxed">
        Insurance is the least served major financial vertical in open semantics, and this is verifiable rather than rhetorical. We checked the published sources directly in August 2026 rather than relying on secondary claims.
      </p>
      <p className="text-gov-dark leading-relaxed">
        FIBO, the Financial Industry Business Ontology maintained by the EDM Council and released under an MIT licence, is the natural place to look. Its complete insurance content is four classes inside a guaranty module, InsurancePolicy, Insurer, InsuranceBackedGuaranty and Policyholder, plus InsuranceCompany and InsuranceService among the financial services entities. Insurance appears there in service of credit enhancement rather than as a modelled domain. Reinsurance is absent entirely: the string appears exactly once in the whole ontology, inside a free-text definition of an insurance company. There is no Reinsurer, no ReinsuranceContract, no Treaty, no Cession, no Retrocession.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The detailed models the industry actually runs on are real but closed. ACORD maintains substantial standards, including the reinsurance and large commercial families, and its Reference Architecture carries the closest thing the sector has to a canonical information model, but access requires membership or subscription. The Lloyd&apos;s Core Data Record, extended to proportional and non-proportional treaty reinsurance in version 3.3 during May 2026, is published through interactive portals rather than as a downloadable open artefact. The one unambiguously open standard, Oasis LMF Open Exposure Data under CC0, includes genuine reinsurance structures in its ReinsInfo and ReinsScope files, but it is a flat-file exposure schema for catastrophe modelling rather than an ontology, and no semantic serialisation of it exists. The OMG Property and Casualty Data Model is openly downloadable and relational, and has been frozen at version 1.0 since 2014.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the field has shallow-but-open, deep-but-closed, or open-but-not-semantic. Nothing bridges them, and reinsurance structures have no public formal semantics at all. We started where the public evidence is richest and the consequences are most concrete: the register fabric that every regulated European insurer already sits inside.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the ontology actually models</h2>
      <p className="text-gov-dark leading-relaxed">
        The model is deliberately small, because a large model that nobody validates is decoration. Four commitments carry all the weight.
      </p>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        <strong>Authorisation is a lifecycle, not an edge.</strong> An undertaking&apos;s home registration is a node carrying its own start date, end date and issuing authority. So is each cross-border operation. Modelling them as nodes is what allows the rule &quot;an open passport must not outlive the authorisation it derives from&quot; to exist as an executable constraint. Model the same facts as edges between companies and countries and that rule cannot be written at all, which is why in practice it becomes a spreadsheet somebody rebuilds each quarter.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Identifiers are assertions, not attributes.</strong> Every identifier in the graph is a node carrying three things a string column cannot: the scheme it belongs to, the source system that asserted it, and its computed validation state. This is the difference between a system that can represent &quot;the European register and the German register disagree about this company&apos;s identifier&quot; and one that silently overwrites one with the other. It is also what makes reconciliation a query rather than a project.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Scope is declared as data.</strong> The SKOS registry states that an LEI is entity-scoped and globally unique, while a national authority code is authority-scoped and unique only within one regulator&apos;s namespace. This matters immediately: a branch legitimately carries its head office&apos;s LEI while being registered under a host regulator&apos;s own code. Without declared scope that pattern looks like a duplicate identifier and generates false alarms. With it, the genuine collapses stand out, which is exactly how we isolated the three cases where one identifier names materially different companies.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Operation modes come from law, not from a dropdown.</strong> The five modes in the register vocabulary are given definitions grounded in Directive 2009/138/EC: freedom to provide services under Articles 147 to 149, establishment through a branch under Articles 145 and 146, and third-country branches under Article 162. A vocabulary whose concepts cite the legal instrument that creates them can be argued about with a regulator. A dropdown cannot.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The same design was first proved on the United States fund universe in our <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link>. Insurance is its second instantiation, which is itself a finding: the discipline transfers across regulated register fabrics without redesign.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, and the two things that nearly broke it</h2>
      <p className="text-gov-dark leading-relaxed">
        The EIOPA register has no stable export URL. Its export button is an ASP.NET postback inside a SharePoint application, so the pipeline fetches the page, lifts the view-state and event-validation fields, and replays the postback to obtain an 11 megabyte semicolon-delimited file. That is a fair summary of the state of insurance data infrastructure in 2026: the European Union&apos;s complete register of insurers is public, and reaching it programmatically requires emulating a button click. The identifier harvest then runs against the free GLEIF API in batches of fifty at unauthenticated rate limits, taking about ten minutes for 3,630 identifiers, with a resumable cache so an interrupted run costs nothing.
      </p>
      <Mermaid chart={LAYERS} />
      <p className="text-gov-dark leading-relaxed">
        Two problems in the source data would have silently corrupted every number on this page, and both are worth stating because they are the kind of thing that survives into production systems unnoticed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>The date format.</strong> Every date in the export is formatted as day, month, year followed by a time component. A parser expecting a bare date silently discards all 41,920 date values rather than failing loudly. The consequence is that every registration appears to have no end date, so every undertaking appears active, and the rules that depend on activity inflate roughly threefold: 348 lapsed identifiers instead of the true 118, and 680 contradictions instead of the true 42. We caught it because the graph queries and the independent set-based pipeline disagreed, and the disagreement had to be explained. A single implementation would have published inflated numbers with total confidence.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>The entity key.</strong> Branch rows frequently carry the host regulator&apos;s registration code rather than the home one. Measured precisely: of 298 identifiers appearing on both domestic and branch rows, 171 use a different code on the branch row. A naive single-pass join would either create phantom companies or merge distinct ones. The pipeline therefore resolves in two passes, joining branch rows to their home undertaking by key first and by unambiguous identifier second, and where neither works it creates an explicit RegisteredPresence node rather than guessing. 1,839 rows across 185 keys land there, third-country branches by construction plus branch rows the register itself does not link back to a head office. The join failure is recorded as data. An ontology that silently guessed would demonstrate better and govern worse.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Eight findings, and what each one costs</h2>
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
        All figures are computed from the 14 August 2026 export and same-day harvest. Both sources are live systems, so a later run produces different totals while the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The letter O that cut a Danish insurer out of the global identifier system</h2>
      <p className="text-gov-dark leading-relaxed">
        An LEI carries two check digits under ISO 7064 MOD 97-10. Expand each character to its base-36 value, concatenate, divide by 97, and a valid identifier leaves a remainder of exactly one. The check costs microseconds and requires no network call, no licence and no vendor. Four values in the European Union&apos;s register of insurers fail it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One is twenty zeros, filed as the legal entity identifier of an insurance company. The most instructive is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">5493O00MN7XN3BBKCE67</code>, filed for AP Skadesforsikring of Denmark. The fifth character is the letter O. The company&apos;s real identifier, which resolves correctly in GLEIF to the same insurer, carries a zero in that position. Somebody typed it, no form divided by 97, and the transposition now sits in the official register of a European supervisory authority, quietly disconnecting that insurer from every system keyed on the global identifier. All four impossible values are absent from GLEIF, which is the expected result and a useful confirmation: the arithmetic and the global register agree with each other, and both disagree with what was filed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The contradictions run deeper than typing errors. 118 active undertakings hold identifiers that have lapsed at GLEIF, meaning the company is authorised to write insurance while the identifier naming it is no longer being maintained, so any attribute read from that record ages silently. More seriously, 42 undertakings that the European register shows as authorised carry identifiers whose entity GLEIF marks INACTIVE, meaning the company has ceased to exist. One of the two systems is wrong about a live European insurer, 42 times over. The graph records the disagreement and refuses to adjudicate it, because adjudicating without evidence is how bad data becomes confident data.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The finding with the sharpest commercial edge is the smallest. Of 227 identifiers filed against more than one register key, most are legitimate branch structures that the scope declarations explain away. 56 carry materially different names. Three are hard collapses on domestic registrations alone, and one of those three is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">549300KCPG3666EE4546</code>, filed for both SCOR Global Reinsurance France and SCOR Global Reinsurance Ireland Designated Activity Company. Two distinct reinsurance legal entities, in different jurisdictions, sharing one identifier in the European register. Any system that resolves treaty counterparties, aggregates group exposure or computes concentration limits from that identifier is treating two companies as one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Testing the gap against a second regulator: the German case</h2>
      <p className="text-gov-dark leading-relaxed">
        The largest finding needed a second opinion. 643 active insurers with no identifier is either a real absence or a transmission failure between national regulators and the European register. 492 of the 643 are German, so Germany is the test: BaFin publishes its own register with its own identifier column, reachable by a similar export mechanism. We built the join with deliberately strict matching, on the European identification code against BaFin&apos;s registration numbers, or an exact match on a normalised legal name.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The result cuts both ways, and both directions are useful. BaFin&apos;s own file carries an identifier for only 505 of the 4,824 German-supervised entities it lists, which is 10.5 per cent. So most of the missing identifiers are genuinely missing at source, not lost in transmission, and the European register is if anything the more complete of the two. But the pipe leaks as well: among the strictly matched subset, 14 undertakings that the European register records as having no identifier demonstrably have a valid one published by their own regulator, including Gothaer Lebensversicherung, N&uuml;rnberger Lebensversicherung, HDI Lebensversicherung and Generali Versicherung. Every one of those 14 passes the check-digit test. They are real, valid, free to obtain, and absent from the European view.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two further results deserve stating plainly because they are honest negatives. First, only 44 of the 492 matched at all under strict rules, so this measures a floor rather than the full extent; a fuzzier match was tested and rejected after it collapsed two distinct Saarland insurers onto a single identifier, which is precisely the error class this work exists to catch, and shipping a number produced by a method we had just watched fail would have been indefensible. Second, and more encouragingly, among the 344 undertakings where both registers populate the field, the two agree on every single value. Zero conflicts. European insurance entity data has a coverage problem, not a contradiction problem, and coverage problems are the cheaper kind to fix.
      </p>
      <p className="text-gov-dark leading-relaxed">
        BaFin&apos;s file carries one defect class the European register does not: five identifiers failing the check digit, three of which are 19 characters long. A 19-character identifier is not a typing error, it is a truncation, which points at a field width or an export path rather than a person. That is a different remediation entirely, and you can only tell the two apart by running the arithmetic and looking at the length.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The transferable method, in seven steps</h2>
      <p className="text-gov-dark leading-relaxed">
        None of the findings above depend on insurance. They depend on a method that applies to any entity data governed by more than one register, which describes almost every regulated dataset in financial services. Here is the method, stated so you can apply it without us.
      </p>
      <div className="space-y-4">
        {PLAYBOOK.map((p) => (
          <div key={p.step} className="border-l-2 border-l-gov-blue pl-6">
            <h3 className="font-semibold text-gov-dark mb-1">{p.step}</h3>
            <p className="text-gov-dark leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where this bites inside an insurance business</h2>
      <p className="text-gov-dark leading-relaxed">
        The findings on this page come from public register data, but the defect classes are the ones that appear inside carriers, brokers and reinsurers, usually with more sources and less discipline. Four places where they surface:
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Counterparty and sanctions screening.</strong> Screening keyed on a global identifier misses every entity that has none. On the European register that is one in five active insurers, and the fallback is name matching, whose measured error rate against official data on this evidence is 15.1 per cent. Knowing both numbers changes how you configure the control and what you tell an auditor about its coverage.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Treaty and facultative counterparty resolution.</strong> Cession chains resolve parties by identifier. When two legal entities in the same group share one, exposure aggregates wrongly and concentration limits are computed against a fiction. The SCOR pair on this page is a public example of a private problem, and the reason reinsurance is the hardest place to run this discipline is that nobody has published formal semantics for treaties at all.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Regulatory reporting plumbing.</strong> Solvency II reporting depends on stable entity identity across group structures and reporting periods. Entities whose identifiers lapse, retire or change while the company continues trading break period-on-period comparability quietly, and the break usually surfaces as an unexplained variance rather than as a data-quality alert.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Grounding for automated systems.</strong> Every serious insurance data programme in 2026 wants language models and agents reading its entity data. A model grounded in a graph that contains an impossible identifier, or that merges two reinsurers, will answer confidently and wrongly, and the confidence is the dangerous part. Validation is not a step before the interesting work. It is what makes the interesting work safe to deploy.
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
        The ontology, both SKOS registries, the three-layer SHACL suite, the register fetcher, the identifier harvester, the two-pass entity resolution, the cross-register test and the query library are public. Ontology and documentation under CC BY 4.0, code under MIT. Every figure on this page traces to five commands run against two public sources, with no licensed data, no API key and no vendor. The build report lists what could not be obtained as carefully as what could, because a study that only reports its successes is marketing.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          insurance-register-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          We build this for insurers, reinsurers, brokers and supervisors on their own data. The public version took a few days against two sources; the private version is the same discipline applied to policy administration, claims, treaty and finance systems that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          A typical first engagement is bounded and diagnostic: take your entity data as it is, build the identifier fabric, run the validation layers, and return a graded findings report that separates the impossible from the missing from the merely stale, with the queries attached so your team can re-run it. That report is useful whether or not the work continues, which is the point. After that the usual paths are an ontology and shape suite your systems validate against continuously, an entity resolution layer across internal and external registers, or grounding work that makes your entity graph safe for automated systems to read.
        </p>
        <p className="text-gov-dark leading-relaxed">
          If you run insurance entity data, register reconciliation, Solvency II reporting plumbing, or treaty counterparty resolution, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>. Send a description of the sources that disagree and we will tell you which of the defect classes on this page we would expect to find, before any commitment.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link> applies the same identifier discipline to the United States fund universe, and our <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study measures when an ontology can actually reject a wrong statement.
      </p>
    </section>
  </article>
);

export default InsuranceRegisterOntology;
