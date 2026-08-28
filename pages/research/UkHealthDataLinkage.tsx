import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/health-data-linkage-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/uk-health-data-linkage#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/uk-health-data-linkage',
  headline: 'UK health data linkage registers, measured at the discovery layer | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology and a reproducible census of the machine-readable linkage layer of UK health data, built on 28 August 2026 from the HDR UK Gateway API and the NHS England Data Uses Register. The GWDM field that links a dataset to its data uses is empty on all 1,278 active Gateway datasets. 101 of 324 published dataset-to-dataset links resolve to nothing. All 59 pid values inside linkage entries are dataset names rather than identifiers. The two public registers of UK health data uses share an identifier for about 3 per cent of the register. Every headline is computed two independent ways and the pipeline fails its own build if they disagree.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  about: { '@type': 'Dataset', name: 'Health Data Linkage Ontology', url: REPO },
  keywords:
    'UK health data, data linkage, HDR UK Gateway, Gateway Data Model, GWDM, NHS England Data Uses Register, DARS, data sharing agreement, Health Data Research Service, Sudlow Review, secure data environment, SDE, trusted research environment, metadata quality, SHACL, OWL 2 ontology, SKOS, register assurance, dataset linkage, persistent identifier',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/uk-health-data-linkage#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much of UK health dataset linkage metadata is machine actionable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On 28 August 2026 the HDR UK Gateway held 1,278 active dataset records, of which 109 published 324 dataset-to-dataset linkage entries. 223 of those 324 resolve to a record on the Gateway by identifier, URL or exact title. The other 101 resolve to nothing: 85 carry no identifier and no URL, 35 of those carry no title either, and 16 carry a pointer that dangles. The field designed to link datasets to their approved data uses, linkage.dataUses in the Gateway Data Model, is empty on every one of the 1,278 active records.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the HDR UK Gateway and the NHS England Data Uses Register agree?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They can be joined by identifier for about 3 per cent of the register. The NHS England Data Uses Register of August 2026 holds 5,577 data sharing agreement versions in 1,942 agreement families. On the Gateway, 68 of 2,565 data use register rows carry a DARS reference. 1,883 of the 1,942 NHS families, which is 96.96 per cent, have no identifier-joinable Gateway entry. In the other direction, four agreement families are shown as active data uses on the Gateway while absent from both current NHS England publications, all four dating from 2021.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do linkage identifiers on the Gateway fail to resolve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because they are not identifiers. All 59 pid values published inside linkage entries on active Gateway datasets are dataset names such as "Electronic Patient Record - OUH NHS FT". Zero are UUID shaped and zero resolve against any generation of Gateway identifier. The mechanism is in the schema: the HDRUK schema types a dataset\'s own identifier as Uuidv4 but types the pid slot inside a linkage descriptor as a general string of 2 to 150 characters, so prose validates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the NHS England Data Uses Register reliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Internally, yes, and measurably so. All 5,577 agreement references conform to the DARS-NIC pattern with zero duplicates. Across 38,650 dataset rows and 103,706 release rows there are zero dangling cross-sheet references, and all 103,706 file references are conformant and duplicate free. The residual defects are small: seven agreements carry no dataset rows and one agreement records an end date before its start date. The integrity problems in this study live between registers, not inside this one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does schema validation catch broken linkage metadata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. 1,277 of the 1,278 active Gateway records validate in full against the Gateway Data Model 2.0 JSON Schema, including every record with empty, prose-filled or dangling linkage. The schema cannot express that a linkage target must resolve, that a pid slot must hold an identifier, or that a linkage claim should agree with another register. Those checks need shapes over a graph, which is what the SHACL layers in this work provide, one shape per defect class.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Health Data Linkage Ontology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small OWL 2 ontology, published open under CC BY 4.0 with an MIT licensed pipeline, that models linkage as a dated, reified claim by a named register rather than as a property of a dataset. A LinkageAssertion carries whatever the register actually published about a target, verbatim, plus a computed machine-actionability flag. An IdentifierAssertion records a published identifier against the conformance rules its own scheme declares as data. A CrossRegisterObservation records what two registers say about the same entity, including the case where one is silent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should the Health Data Research Service take from this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That the discovery layer it will inherit asserts linkage mostly in prose. The service is being built to make linked health data easier to find and use, and the current registers describe linkage in a way a pipeline cannot follow: no shared identifier between the dataset catalogue and the data use register for 97 per cent of agreements, dataset references by free text name on the NHS side, and a linkage pid slot typed as free text on the Gateway side. Requiring resolvable identifiers in linkage descriptors, and one shared reference between the two registers, would move most of the numbers in this study on their own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I reproduce these numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The repository at github.com/fabio-rovai/health-data-linkage-ontology holds the harvest pipeline, the ontology, the SHACL layers, the SPARQL queries and a build report stating populations, methods and the errors made during the build. Both sources are open and keyless: the HDR UK Gateway API and the NHS England Data Uses Register monthly workbook. Every headline number is computed set-based in Python and again by SPARQL over the emitted graph, and the dual-check script exits non-zero on any disagreement.',
      },
    },
  ],
};

const cd = 'text-sm bg-gov-bg px-1.5 py-0.5 rounded';

export const UkHealthDataLinkage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:underline">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-gov-dark font-serif leading-tight">
        UK health data linkage registers, measured at the discovery layer
      </h1>
      <p className="text-sm text-gov-secondary">28 August 2026</p>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The UK government and Wellcome are investing up to 600 million pounds in a Health Data Research Service on
        the strength of one idea: the most powerful insights come from linking health datasets together. On 28
        August 2026 we measured the machine readable layer that idea currently stands on, across the two public
        registers that describe it: the HDR UK Gateway and the NHS England Data Uses Register. The field that
        links a dataset to its data uses is empty on all 1,278 active Gateway datasets. A third of published
        dataset-to-dataset links resolve to nothing. Every identifier published inside a linkage entry is a name,
        not an identifier. And the two registers share an identifier for about 3 per cent of the register. Every
        number is computed two independent ways, and the pipeline fails its own build if the two disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><code className={cd}>linkage.dataUses</code>, the Gateway Data Model field that ties a dataset to its approved data uses, is empty on all 1,278 active Gateway datasets. The Gateway&apos;s own relational layer proves the linkage is knowable: 1,704 of its 2,565 data use rows link to datasets.</li>
          <li>109 active datasets publish 324 <code className={cd}>linkedDatasets</code> entries. 101 resolve to nothing on the register. 35 of them carry no identifier, no URL and no title, and every one of those empty descriptors validates against the schema.</li>
          <li>All 59 pid values inside linkage entries are dataset names, not identifiers. Zero resolve. The schema types the linkage pid slot as a string of 2 to 150 characters, while a dataset&apos;s own identifier is typed Uuidv4.</li>
          <li>133 of the register&apos;s 1,707 dataset pids fail the Uuidv4 type the schema declares for them, with sequential tails consistent with a migration artifact.</li>
          <li>Cross-register: 68 of 2,565 Gateway data use rows carry a DARS reference. 96.96 per cent of the NHS register&apos;s 1,942 agreement families have no identifier-joinable Gateway entry. Four families are active on the Gateway and absent from both current NHS publications.</li>
          <li>The NHS England register is internally clean: 100 per cent scheme-conformant references and zero dangling cross-sheet references across 103,706 release rows. The failures live between registers, not inside them.</li>
          <li>1,277 of 1,278 active records validate in full against GWDM 2.0. Everything above passes schema validation, which is the point.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why now</h2>
      <p className="text-gov-dark leading-relaxed">
        The Sudlow Review, published on 8 November 2024 and commissioned by the Chief Medical Officer for England,
        the UK National Statistician and NHS England&apos;s National Director for Transformation, made the case
        that England&apos;s health data should be treated as critical national infrastructure, and its premise is
        linkage: the value of the country&apos;s health data comes from joining its sources together. On 7 April
        2025 the government and Wellcome announced up to 600 million pounds, 500 million from government and 100
        million from Wellcome, to build a Health Data Research Service at the Wellcome Genome Campus. The
        institutions that will build and staff that service are hiring data linkage and data architecture people
        now. Wellcome itself opened a Technology Lead vacancy for data linkage and data architecture in its
        Discovery team on 26 August 2026.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the money, the mandate and the hiring all assume that linkage between UK health datasets can be
        described in a way machines can follow. That assumption is measurable today, on public registers, with no
        credentials. This study measures it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured, and from where</h2>
      <p className="text-gov-dark leading-relaxed">
        Two public surfaces, both open and keyless, both pinned to 28 August 2026. The HDR UK Gateway API at
        api.healthdatagateway.org: 1,707 dataset records (1,278 active, 121 draft, 308 archived, every one
        converting to Gateway Data Model 2.0), 2,565 data use register rows, 3,459 publication records, 427 tools
        and 218 collections. And the NHS England Data Uses Register, published monthly as a workbook: 5,577 data
        sharing agreement versions, 38,650 agreement-to-dataset rows, and 103,706 released files, plus the
        internal register of 31 agreements and 428 data sharing framework contracts.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The conformance targets are not typed by hand. The Gateway Data Model and HDRUK schemas are fetched from
        HDR UK&apos;s own schemata repository, which is public under Apache 2.0, and each of the 1,278 active
        records is validated against the GWDM 2.0 JSON Schema exactly as published. A linkage target counts as
        resolved if its identifier matches a Gateway pid, its URL points at a harvested record, or its title
        matches a harvested dataset title exactly. That rule is implemented twice, once over Python sets and once
        by SPARQL over an RDF graph of 88,772 triples, and the build fails if the two computations ever disagree.
        On this run, seven checks out of seven agree.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the dataset-to-data-use link is dead metadata</h2>
      <p className="text-gov-dark leading-relaxed">
        The Gateway Data Model defines <code className={cd}>linkage.dataUses</code> on every dataset, the field
        that says which approved data uses draw on this dataset. On 28 August 2026 it is empty on all 1,278
        active datasets. Not sparse. Empty.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is not because the information does not exist. The Gateway runs a data use register with 2,565 rows,
        and 1,704 of them are relationally linked to Gateway datasets through the platform&apos;s own database.
        The system knows which uses draw on which datasets. The metadata field the standard defines for exactly
        that relationship carries none of it, so anyone consuming Gateway metadata through the standard, rather
        than through the platform&apos;s internal joins, sees a register in which no dataset has ever been used.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence lands on anyone building transparency or impact reporting on top of the
        metadata: counting the uses of a dataset from GWDM output returns zero for every dataset in the country.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: a third of declared dataset links resolve to nothing</h2>
      <p className="text-gov-dark leading-relaxed">
        109 active datasets declare links to other datasets, 324 entries in all. Each entry is a descriptor with
        three slots: pid, url and title. 223 of the 324 resolve to a Gateway record through at least one slot.
        The other 101 resolve to nothing:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Unresolvable linkage entries</th>
              <th className="text-right p-3 font-semibold text-gov-dark border-b border-gov-border">Count</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border">No pid and no URL, title only</td><td className="p-3 text-right border-b border-gov-border">50</td></tr>
            <tr><td className="p-3 border-b border-gov-border">No pid, no URL and no title: an empty descriptor</td><td className="p-3 text-right border-b border-gov-border">35</td></tr>
            <tr><td className="p-3 border-b border-gov-border">Pid or URL present but dangling</td><td className="p-3 text-right border-b border-gov-border">16</td></tr>
            <tr><td className="p-3 font-semibold">Total, of 324 entries</td><td className="p-3 text-right font-semibold">101</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        What sits in the title slot is often not a title. 81 of the 288 published titles run past 80 characters,
        and the register&apos;s most repeated linkage entry reads, verbatim: &quot;Each patient will be identified
        by an unique patient key that can be used to link to all other datasets available within London SDE
        Platform&quot;. That is a true and useful sentence for a human. It is also the entire machine readable
        content of the linkage: no identifier, no URL, no target.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The distribution across custodians matters, because it shows the problem is practice, not possibility.
        London Secure Data Environment accounts for 41 unresolvable entries and North West SDE for 23, with
        Generations Study at 10, Genomics England at 8 and Public Health Scotland at 7. Meanwhile University of
        Sheffield&apos;s Data Connect publishes 169 linkage entries and Thames Valley and Surrey SDE 41, almost
        all resolving by Gateway URL or exact title. Two custodians prove the same schema, on the same platform,
        supports linkage a pipeline can follow end to end.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the identifiers are names</h2>
      <p className="text-gov-dark leading-relaxed">
        59 linkage entries populate the pid slot, the slot for a persistent identifier. Every one of the 59
        values is a dataset name: &quot;Electronic Patient Record - OUH NHS FT&quot;, &quot;Cancer Waiting Times
        (CWT) - OUH NHS FT&quot;, &quot;Radiology reports - OUH NHS FT&quot;. Zero are UUID shaped. We checked
        them against every generation of Gateway identifier, current pids, the pre-migration Mongo identifiers
        and the numeric dataset ids, and zero resolve.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The mechanism is a schema decision. In HDR UK&apos;s published schema, a dataset&apos;s own identifier is
        typed Uuidv4, but the pid slot inside a linkage descriptor is typed as a general string of 2 to 150
        characters. Prose in the pid slot therefore validates, and publishers have used it as a label field. The
        one character class of fix, typing linkage pids as identifiers, would make this entire failure mode
        impossible at submission time.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The register&apos;s own identifiers have a quieter version of the same problem. 133 of the 1,707 dataset
        pids, 131 of them on active records, are UUID shaped but fail the Uuidv4 type the schema declares: wrong
        version and variant bits, with sequential tails such as …9ce46, …9ce47, which is what a migration script
        minting pseudo-UUIDs looks like. Nothing checks, so nothing complains.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the two registers barely share an identifier</h2>
      <p className="text-gov-dark leading-relaxed">
        The UK publishes two registers of health data uses. NHS England&apos;s Data Uses Register records data
        sharing agreements under DARS-NIC references, 5,577 agreement versions in 1,942 families in the August
        2026 export. The Gateway&apos;s data use register holds 2,565 rows with a free text project id field.
        Joining them by identifier is possible for 68 rows. That is the overlap: 65 agreement families, 59 of
        which appear in the NHS register, out of 1,942. 96.96 per cent of the NHS register&apos;s agreement
        families have no identifier-joinable entry on the Gateway.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The reverse direction is small but sharper. Six DARS families on the Gateway are absent from the NHS
        external register; two of them appear in the internal register, which leaves four, all approved in 2021,
        all COVID era projects, shown as active data uses on the Gateway while absent from both current NHS
        England publications. Two public registers disagree about whether these uses of national health data are
        current, and neither says so, because neither reads the other.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Datasets fare no better than agreements. The NHS register references datasets by free text name, 211
        distinct names across 38,650 rows. Twelve of the 211 match a Gateway dataset title exactly. The
        country&apos;s record of which datasets were released under which agreements, and its catalogue of what
        those datasets are, connect by name in twelve cases and by identifier in none.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What this is not</h2>
      <p className="text-gov-dark leading-relaxed">
        This is not a data quality scandal, and it is worth being precise about why. The NHS England register is
        internally disciplined to a degree worth stating: all 5,577 agreement references conform to the DARS-NIC
        pattern, there are zero duplicates, and across 38,650 dataset rows and 103,706 release rows there is not
        one dangling cross-sheet reference. Its residual defects are seven agreements with no dataset rows and
        one agreement whose end date precedes its start date. HDR UK, for its part, publishes its schemas in the
        open under Apache 2.0, computes a metadata quality score per dataset, and published the data utility
        framework behind it (Gordon and colleagues, BMJ Health and Care Informatics, 2021). GUILD (Gilbert and
        colleagues, Journal of Public Health, 2018) set out years ago what researchers need to know about linkage
        processing. None of that ground is claimed here.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What this study adds is the layer none of those instruments look at: whether linkage claims resolve by
        machine, and whether the registers agree with each other. 1,277 of 1,278 active Gateway records validate
        in full against GWDM 2.0. Every empty descriptor, every prose pid and every dangling target above passes
        schema validation, because a JSON Schema cannot express &quot;this reference must resolve&quot; or
        &quot;these two registers must agree&quot;. Those are graph properties, and they need graph checks.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The model: linkage as a claim, not a property</h2>
      <p className="text-gov-dark leading-relaxed">
        The Health Data Linkage Ontology (HDLO) is a small OWL 2 ontology with one load-bearing decision: linkage
        is never a property of a dataset. It is a dated, reified claim by a named register. A
        <code className={cd}>LinkageAssertion</code> carries whatever the register actually published about the
        target, pid, URL, title or nothing, verbatim, plus a computed <code className={cd}>machineActionable</code>
        flag. An <code className={cd}>IdentifierAssertion</code> records a published identifier against the
        conformance rules its scheme declares as data in a SKOS registry, so the pipeline validates against the
        scheme rather than against hard coded rules, and a test pins the SHACL shapes to the registry so the two
        cannot drift. A <code className={cd}>CrossRegisterObservation</code> records what two registers say about
        the same entity, including the case where one is silent. Silence is a position.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three SHACL layers run over the emitted graph: structural integrity, scheme conformance, and one shape
        per defect class, so the validation report is the findings table. On this run: layer one conforms, layer
        two reports exactly the 133 pseudo-UUID pids, and layer three reports 224 machine-unactionable linkage
        assertions, 29 dangling pointers, 63 prose titles and 1,883 cross-register silences, reconciling with the
        dual-computed counts.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What would move the numbers</h2>
      <p className="text-gov-dark leading-relaxed">
        For HDR UK, two schema changes and one data fix. Type the pid slot of a linkage descriptor as an
        identifier rather than a 150 character string. Constrain descriptors so an entry with no pid, no URL and
        no title cannot validate. And repair or re-mint the 133 pseudo-UUID pids. We are filing the schema
        findings, including a separate defect in the DOI pattern that accepts strings like 10X1234/abcd, as
        issues on the schemata repository.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For custodians, the Sheffield comparison is the whole prescription: publish linkage entries with the
        Gateway URL or exact title of the target, which two custodians already do at scale on the same platform.
        For the register pair, one shared reference would do more than any metadata programme: a DARS-NIC field
        on Gateway data use entries, populated at approval time, would take the identifier join from 3 per cent
        to wherever NHS England&apos;s coverage of the register actually stands, and would surface disagreements
        like the four ghost agreements automatically.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For the Health Data Research Service, the finding is a baseline: the discovery layer it inherits asserts
        linkage mostly in prose. Requiring resolvable identifiers in linkage metadata, at submission time, is
        cheaper than reconstructing linkage after the fact, and the registers this study measured are the systems
        it will federate.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Method, reproducibility, and the offer</h2>
      <p className="text-gov-dark leading-relaxed">
        Everything is public and reproducible from two open sources with no credentials. The repository at{' '}
        <a href={REPO} className="text-gov-blue hover:underline">github.com/fabio-rovai/health-data-linkage-ontology</a>{' '}
        holds the resumable harvest pipeline, the ontology, the SKOS scheme registry, the SHACL layers, the
        verified SPARQL queries, the tests, and a build report that states populations, methods, the errors made
        during the build, and the claims that died on verification. One did: an early version of finding three
        read as a resolution failure until we looked at the values and found names, which is a different and
        stronger finding.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The method transfers to any register pair: harvest both sides resumably, declare each identifier
        scheme&apos;s rules as data, reify every linkage claim with what was actually published, compute
        actionability, and compare registers with silence recorded as a position. We have run the same playbook
        on EU health dataset catalogues, fund registers, bank registers and the scholarly record.
      </p>
      <p className="text-gov-dark leading-relaxed">
        If your organisation publishes to the Gateway, runs a secure data environment, or is building on the
        Health Data Research Service and wants its linkage layer to resolve, the first engagement is a fixed
        scope review of your register&apos;s linkage metadata against these shapes, with a findings table your
        data architecture team can act on. Write to{' '}
        <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">fabio@thetesseractacademy.com</a>.
      </p>
    </section>
  </div>
);
