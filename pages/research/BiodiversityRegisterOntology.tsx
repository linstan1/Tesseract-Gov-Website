import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/biodiversity-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/biodiversity-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/biodiversity-register-ontology',
  headline:
    'An open ontology for biodiversity registers, tested against the Biodiversity Heritage Library, ZooBank, and the Natural History Museum Data Portal | Tesseract Academy',
  description:
    'A measured census of the identifier and rights layer under biodiversity AI. The Official Register of Zoological Nomenclature refuses machine clients whose address is not on its anti-DDoS whitelist, and it refuses them with HTTP 404, the same status it returns for a name that was never registered. We established that by probing the same 50 canonical act URLs before and after the registrar whitelisted us: 50 of 50 returned 404, then 50 of 50 returned 200. Its two public mirrors were 518 and 1,327 days stale at census; GBIF re-crawled successfully on 30 August 2026 and now serves 527,163 usages against 478,746 before, while ChecklistBank still serves its January 2023 copy. In the Biodiversity Heritage Library export, 86.0 per cent of 329,129 distinct digitised items carry no machine-actionable licence and ten titles carry the literal string Array as their DOI. The NHM Data Portal mints a resolving DOI for every dataset, which is best in class, while eight of 294 datasets meet a five-property product-readiness bar. Shipped as an open OWL 2, SKOS and SHACL ontology with every headline computed two ways.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-08-31',
  about: {
    '@type': 'Dataset',
    name: 'Biodiversity Register Ontology (BDRO)',
    url: REPO,
  },
  keywords:
    'biodiversity ontology, ZooBank, Biodiversity Heritage Library, BHL, NHM Data Portal, DiSSCo, Creative Content Exchange, taxonomic names, nomenclature register, LSID, DOI resolution, identifier integrity, rights metadata, machine-actionable licence, SHACL, SKOS, OWL 2, knowledge graph, entity normalisation, Darwin Core, TDWG, OpenBiodiv, Catalogue of Life, GBIF, ChecklistBank, WoRMS, IPNI, register assurance',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/biodiversity-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is ZooBank machine-readable today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes to a whitelisted client and no to anyone else, as of 30 August 2026. zoobank.org sits behind an anti-DDoS system that combines a reCAPTCHA challenge with an IP whitelist, and it refuses clients that are not on the whitelist with HTTP 404 rather than 403. On 28 August every route except the homepage returned 404 to us, including the About and Api pages linked from its own navigation, the documented JSON API, the urn:lsid URN form, and all 50 canonical act URLs we sampled, which are the exact URLs the GBIF copy publishes as references. We read that as a broken resolver and we were wrong. After the registrar added our address to the whitelist on 30 August, the identical 50 URLs probed from the same machine with the same command all returned 200, and every one of them resolved to its canonical act page. Separately, the Bishop Museum IPT was rebuilt on 29 August and serves 527,127 records, and GBIF re-crawled it successfully on 30 August, ending a run of 64 consecutive aborted crawls that went back to April 2025, and lifting the count it serves from 478,746 to 527,163. What remains defective is that every one of those 527,127 records publishes a zoobank.org URL that an un-whitelisted client cannot distinguish from a name that was never registered, because the register answers both with 404.',
      },
    },
    {
      '@type': 'Question',
      name: 'How stale are the public mirrors of ZooBank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These are the figures as at the 28 August 2026 census, and the GBIF half of them was overtaken on 30 August, when GBIF re-crawled successfully and moved to 527,163 usages. On census day the freshest copy GBIF held was published on 28 March 2025, which was 518 days old. ChecklistBank’s copy is dated 9 January 2023, which is 1,327 days old. The two mirrors also disagree with each other on record count, 478,746 against 399,326, a difference of 79,420 records that reflects different snapshot dates and transformations rather than register truth. Any pipeline that normalises taxon names against these copies cannot see any name registered since March 2025.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did ZooBank recover, and what changed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and our first account of how it recovered was wrong. The Bishop Museum IPT, ZooBank\u2019s declared publication endpoint, was rebuilt from scratch on 29 August 2026, one day after we wrote to the registrar and after the outage was raised on GBIF\u2019s tracker. Measured on 30 August 2026 at 09:12 UTC, the resource page, archive and EML all return HTTP 200, and the republished Darwin Core archive carries 527,127 records dated to 23 August 2026, which was then 48,381 more than the 478,746 GBIF served and 127,801 more than ChecklistBank\u2019s 399,326. GBIF has since re-crawled, on 30 August 2026, and now serves 527,163 usages; ChecklistBank has not moved. We then reported that the resolution layer had not recovered, because all 50 sampled act URLs still returned 404. The registrar explained the real mechanism: those 404s were an IP whitelist refusing our client, not a resolver failing. He whitelisted our address the same day and the identical 50 URLs returned 200, so the resolver was never broken. Re-running the census over the recovered archive found the identity layer clean, with 527,127 distinct identifiers, no duplicates, no self-parenting, no cycles and no malformed UUIDs, alongside three new defects: 347 internal references naming a record absent from the archive, 41,274 records carrying author and year inside the name string while the atomised fields are empty, and five records with no scientific name.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fraction of the Biodiversity Heritage Library carries a machine-actionable licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the bulk export stamped 1 August 2026, 283,090 of 329,129 distinct digitised items, which is 86.0 per cent, carry no machine-actionable licence: 283,006 have a blank LicenseType and 84 carry a Creative Commons IRI with an invisible Unicode character (U+FFA0, halfwidth hangul filler) appended, which defeats exact matching against any licence registry. Separately, 108,509 items, 33.0 per cent, carry the copyright status string "Not provided. Contact Holding Institution to verify copyright status", and the CopyrightStatus field is uncontrolled free text in which the same status appears in dozens of lexical variants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are BHL’s DOIs reliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The registration practice is clean and the export hygiene is not. All 40 sampled DOIs under BHL’s own 10.5962 prefix are registered at doi.org, and 24 of 25 sampled externally minted DOIs. In the export, however, ten titles carry the literal string Array as their DOI value, one carries a volume designation, two carry the https://doi.org/ resolver prefix, and 171 DOI values are asserted for more than one entity, six of them across entity types, so the identifier cannot resolve to its referent. These are export-layer defects, not registration defects, and they are exactly the kind of thing a schema-validated pipeline catches at deposit time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How product-ready is the Natural History Museum Data Portal metadata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The identifier layer is best in class: every one of the 294 public datasets has a DOI under the 10.5519 prefix, and 25 of 25 sampled resolve at doi.org. That is ahead of every catalogue we have measured in this programme, including the eleven Nordic national catalogues. The product layer is thinner: 8 of 294 datasets simultaneously carry a licence URL, a DOI, a contact email, a description of at least 100 characters, and a declared update frequency. 108 datasets have no licence URL, the licence vocabulary mixes CKAN identifiers with SPDX-style and free-text forms of the same licences, author email is empty on all 294, update frequency is absent on 207, and spatial coverage is present on exactly one dataset.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Biodiversity Register Ontology add over Darwin Core, NOMEN, or OpenBiodiv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nothing at the level of describing biodiversity data, which those artefacts own. TDWG’s standards define what the data should say, NOMEN models nomenclatural acts, OpenBiodiv built a knowledge graph over the literature, and Plazi extracts treatments at scale. BDRO’s only claim is the assurance layer none of them measure: whether the identifiers the registers publish conform to their own schemes, whether they dereference, how stale each mirror is, and whether rights statements are machine-actionable. Status and identity are modelled as dated claims by named registers, so conflicting claims and register silence are representable facts rather than data errors.',
      },
    },
  ],
};

export function BiodiversityRegisterOntology() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm text-gov-blue hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to research
        </Link>

        <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
          Research note · 28 August 2026
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          An open ontology for biodiversity registers, tested against the
          Biodiversity Heritage Library, ZooBank, and the Natural History Museum
          Data Portal
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Biodiversity informatics is entering its extraction era. Programmes on
          both sides of the Atlantic are turning tens of millions of pages of
          natural history literature into machine-readable knowledge, and every
          one of those pipelines ends the same way: an extracted name, linked to
          a register, under a licence. We measured that last mile. This note
          reports a census of the identifier and rights layer beneath
          biodiversity AI, run on 28 August 2026 against complete harvests of
          the Biodiversity Heritage Library bulk export, the Natural History
          Museum Data Portal, and ZooBank with its public mirrors, with WoRMS
          and IPNI as controls. Everything ships as an open OWL 2, SKOS and
          SHACL ontology with every headline number computed two ways, in the
          same programme as our earlier bank, insurance, scholarly-record and
          learning-standards register studies.
        </p>

        <p className="text-gray-700 mb-8">
          The repository, including the full build report with every caveat and
          everything we could not obtain, is public:{' '}
          <a
            href={REPO}
            className="text-gov-blue hover:underline inline-flex items-center gap-1"
          >
            github.com/fabio-rovai/biodiversity-register-ontology{' '}
            <ExternalLink size={14} />
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Finding one: the register of record for animal names refuses
          un-whitelisted machine clients with a 404
        </h2>
        <p className="text-gray-700 mb-4">
          Since the 2012 amendment to the International Code of Zoological
          Nomenclature, a new animal name published electronically must be
          registered in ZooBank to be available at all. ZooBank is therefore not
          a convenience database; it is the register of record. On 28 August
          2026, at two observation times, every route on zoobank.org except the
          homepage returned HTTP 404. That includes the About and Api pages
          linked from its own navigation, the documented JSON API, the LSID URN
          form that decades of taxonomic papers embed, and all 50 canonical act
          URLs we sampled from the register content itself. Those are the exact
          URLs that GBIF&apos;s copy of the register publishes in its{' '}
          <code>references</code> field, so this is the register failing its own
          published pointers, not our guess at a URL scheme.
        </p>
        <p className="text-gray-700 mb-4">
          The machine-readable supply chain behind it is in no better state. The
          register&apos;s declared publication endpoint, an IPT instance at the
          Bishop Museum, returns 404. GBIF&apos;s crawl of 23 August 2026 ended
          in ABORT, and the freshest copy GBIF holds dates from 28 March 2025,
          518 days before our census. ChecklistBank&apos;s copy dates from 9
          January 2023, 1,327 days stale, and the two mirrors disagree with each
          other by 79,420 records. The mirror content also contains 50
          identifiers that do not match the register&apos;s own UUID pattern.
          The operational consequence is concrete: any entity-normalisation
          pipeline built today, including the LLM-extraction platforms now being
          commissioned over the BHL corpus, cannot link to any zoological name
          registered in the last seventeen months, and most will silently pin to
          a mirror without recording which snapshot they pinned to.
        </p>
        <p className="text-gray-700 mb-8">
          The controls put the failure in context. The World Register of
          Marine Species resolved 10 of 10 sampled records the same day, and
          IPNI, the botanical names index at Kew, resolved 5 of 5, so this is a
          register-specific failure, not a property of biodiversity
          infrastructure. And our resolution observations are two timestamps on
          one day: if zoobank.org recovers tomorrow, the resolution finding
          shrinks to an outage report, while the mirror staleness, the aborted
          crawls and the dead publication endpoint survive any recovery. We
          found no announcement of the outage anywhere, and we looked.
        </p>
        <HBars
          title="Same-day resolution of sampled canonical records, 28 August 2026"
          note="Measured from an address ZooBank had not whitelisted. The zero is an access refusal served as a 404, not an absent record, and the correction below sets out how we established that. The marine and botanical registers operate no equivalent gate."
          max={100}
          rows={[
            { label: 'ZooBank canonical act URLs', value: 0, display: '0 / 50', color: CHART.amber },
            { label: 'World Register of Marine Species', value: 100, display: '10 / 10' },
            { label: 'IPNI (Kew)', value: 100, display: '5 / 5' },
          ]}
        />

        <div className="rounded-lg border border-gov-blue/30 bg-gov-blue/5 p-6 space-y-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Update, 30 August 2026: the publication endpoint recovered
          </h2>
          <p className="text-gray-700">
            On 29 August 2026, one day after we wrote to the ZooBank registrar
            and after the outage was raised on GBIF&apos;s tracker, the Bishop
            Museum IPT was rebuilt from scratch. We re-ran the census against
            the recovered archive on 30 August at 09:12 UTC rather than take
            the recovery on trust, and the paragraphs above now need reading in
            two halves.
          </p>
          <p className="text-gray-700">
            The half that recovered: all three IPT endpoints return 200, and
            the republished archive carries 527,127 records against the 478,746
            GBIF still serves and the 399,326 in ChecklistBank&apos;s copy. It
            is 48,381 records ahead of the freshest copy that existed anywhere
            when we published, and its content runs to 23 August 2026.
          </p>
          <p className="text-gray-700">
            The half we thought had not: all 50 sampled canonical act URLs
            still returned 404 at 09:12 UTC, as did the Api, About and Search
            routes. Every one of those 527,127 records publishes such a URL in
            its own <code>references</code> field. GBIF had not re-crawled at
            that point, so its API still served the March 2025 copy, which it
            no longer does. We concluded from this
            that the register&apos;s content was back and its identity layer
            was not. That conclusion was wrong, and the correction below
            explains what those 404s actually were. The measurements in this
            box stand; the inference drawn from them does not.
          </p>
          <p className="text-gray-700">
            Re-running the census also let us measure the register&apos;s
            content properly for the first time, and the result cuts both ways.
            The identity layer is clean: 527,127 distinct identifiers with no
            duplicates, no self-parenting, no cycles in the parent chain, every
            identifier a well-formed UUID, and CC0 asserted on every row with
            no variant spellings. The 50 malformed identifiers we found in the
            ChecklistBank snapshot are gone. Against that, 347 internal
            references name a record absent from the same archive, 41,274
            records carry the author and year inside the name string while the
            atomised authorship and year fields sit empty, and five records
            have no scientific name at all. All three were reported to the
            registrar the day we found them, and the row-level lists are in the
            repository.
          </p>
          <p className="text-gray-700">
            We said above that if zoobank.org recovered the resolution finding
            would shrink to an outage report while the staleness and the dead
            publication endpoint survived. The publication endpoint recovered.
            What we then called a surviving resolution failure turned out to be
            something else, which the next section sets out.
          </p>
        </div>

        <div className="rounded-lg border border-gov-blue/30 bg-gov-blue/5 p-6 space-y-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Correction, 30 August 2026: the 404s were an access gate, not a
            broken resolver
          </h2>
          <p className="text-gray-700">
            Hours after we published the update above, the ZooBank registrar
            told us the mechanism behind the 404s, and it is not the one we
            assumed. zoobank.org sits behind an anti-DDoS system that combines
            a reCAPTCHA challenge with an IP whitelist, built in response to
            what he described as years of semi-DDoS attacks. A client whose
            address is not on the whitelist is refused, and the refusal is
            served as HTTP 404. That is the same status the register returns
            for a name that was never registered.
          </p>
          <p className="text-gray-700">
            He added this machine&apos;s address to the whitelist at
            approximately 20:45 UTC the same day, which turned the question
            into a controlled test. The 50 canonical act URLs sampled at 09:12
            that morning were on file, the register&apos;s content had not
            changed in between, and the only thing that differed was whether
            our address was on the list. We re-probed the identical 50 URLs
            from the same machine using the same command as the original
            census, a plain <code>curl</code> with redirects followed and no
            browser user agent.
          </p>
          <HBars
            title="The same 50 canonical act URLs, same machine, same command, 30 August 2026"
            note="One variable changed between the two observations, and it was a property of our client rather than anything about the register."
            max={100}
            rows={[
              { label: 'Before the whitelist entry, 09:12 UTC', value: 0, display: '0 / 50', color: CHART.amber },
              { label: 'After the whitelist entry, 22:52 UTC', value: 100, display: '50 / 50' },
            ]}
          />
          <p className="text-gray-700">
            All 50 returned 404 before, all 50 return 200 after, and every one
            of them lands on the canonical{' '}
            <code>/NomenclaturalActs/</code> path for its UUID. Two of the
            fifty stopped on the redirect from http to https on the first pass
            and returned 200 on an immediate re-probe; the report records both
            statuses rather than smoothing the first one away. The resolver was
            never broken. We reported a resolution failure and what we had
            measured was an access refusal wearing a resolution failure&apos;s
            status code. Our first correction, written before we knew this,
            compounded the error by treating the persistence of the 404s as
            confirmation.
          </p>
          <p className="text-gray-700">
            What survives is narrower than the finding we published. All
            527,127 records publish a zoobank.org URL in their{' '}
            <code>references</code> field. A citation checker, a crawler or an
            entity-normalisation pipeline that follows one of those URLs
            without being whitelisted receives a 404, and 404 is also the
            status the register returns for a name that was never registered.
            A client that branches on the status code, which is what link
            checkers and crawlers do, therefore records a live identifier as
            dead. A 403 would carry the information a 404 destroys.
          </p>
          <p className="text-gray-700">
            ZooBank does communicate the gate, which is worth stating plainly.
            A notice on every page we checked, the 404 page included, says the
            site is testing a system to block high-volume robot traffic, that
            first-time users are asked once per internet connection to confirm
            they are not a robot, and that anyone having trouble should write
            to the address it gives. The 404 page for an unregistered
            identifier also names that identifier and says in words that it
            does not exist in ZooBank. The gap is not that the register keeps
            any of this quiet. It is that the status code carries none of it,
            and automated clients read status codes. What we cannot tell you is
            whether the 404 an un-whitelisted client received carried the same
            notice, because we recorded status codes rather than response
            bodies before we were whitelisted, and we can no longer issue a
            request from an address the list does not cover.
          </p>
          <p className="text-gray-700">
            The inverse error is confirmed. A well-formed UUID that was never
            registered returns 200 to a whitelisted client in the published
            bare form, because the site redirects an unrecognised UUID to a
            search page rather than answering 404, so a link checker following
            a <code>references</code> value records a dead identifier as
            healthy. The registrar has confirmed that behaviour as a known
            defect he intends to repair.
          </p>
          <p className="text-gray-700">
            One limit on this result is worth stating. We could not reproduce
            the refusal from a second, un-whitelisted address ourselves.
            zoobank.org publishes no AAAA record, so our only other egress, an
            IPv6 address the whitelist does not cover, cannot reach the host at
            all. The mechanism therefore rests on the registrar&apos;s account
            of his own system together with the before-and-after measurement
            above, rather than on our having seen the gate refuse a second
            client. The measurement itself is in{' '}
            <code>reports/zoobank_whitelist_retest.json</code> in the
            repository, with the status of all 50 URLs on both dates.
          </p>
        </div>

        <div className="rounded-lg border border-gov-blue/30 bg-gov-blue/5 p-6 space-y-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Update, 31 August 2026: the recovery reached GBIF
          </h2>
          <p className="text-gray-700">
            GBIF re-crawled the ZooBank dataset on 30 August 2026 at 22:39 UTC
            and the attempt finished NORMAL. That ended a run of 64 consecutive
            crawls finishing in ABORT, going back to 26 April 2025. The last
            crawl to ingest data ran on 29 March 2025, which is where the 28
            March 2025 snapshot we measured at census came from, and the three
            attempts after it reported NOT_MODIFIED before the aborts began. So
            GBIF&apos;s crawler had been failing against this dataset roughly
            once a week for sixteen months, and the dataset page carried no
            staleness signal through any of it. The count GBIF serves has
            moved from 478,746 usages to 527,163, so 48,417 names that were
            reachable only through a stale mirror when we published are now in
            the index most downstream biodiversity pipelines actually read.
          </p>
          <HBars
            title="Names served by GBIF for the ZooBank dataset"
            note="The archive itself was rebuilt on 29 August. The figures here are what GBIF served before and after its 30 August crawl."
            max={527163}
            rows={[
              { label: 'Before, the 28 March 2025 snapshot', value: 478746, display: '478,746', color: CHART.amber },
              { label: 'After the 30 August 2026 crawl', value: 527163, display: '527,163' },
            ]}
          />
          <p className="text-gray-700">
            Two things about that number are worth stating rather than
            rounding off. GBIF serves 527,163 while the source archive contains
            527,127, and the Bishop Museum IPT still declares 527,127 records
            with an EML datestamp of 29 August, so the archive has not been
            republished in the interval. The 36 record excess is therefore
            something GBIF&apos;s own processing produces and we have not
            established what. And ChecklistBank has not moved at all: it still
            serves version 2023-01-09 with 399,326 records and its most recent
            import finished on 17 August, which now leaves it 127,837 records
            behind the register it mirrors.
          </p>
          <p className="text-gray-700">
            On who caused what, the sequence is worth setting out plainly
            because it is easy to overclaim. We raised the aborted crawls and
            the dead endpoints on GBIF&apos;s tracker on 28 August. A GBIF
            developer brought the ZooBank registrar into that thread on 29
            August. The registrar rebuilt the IPT from scratch the same day and
            has said the rebuild was already in train and not prompted by the
            ticket. GBIF&apos;s crawler then ran on its ordinary weekly
            schedule and succeeded because the endpoint it had been failing
            against was back. We reported a problem and the people who own the
            infrastructure fixed it, which is the whole of what we are claiming.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Finding two: 86.0 per cent of the world&apos;s largest biodiversity
          library carries no machine-actionable licence
        </h2>
        <p className="text-gray-700 mb-4">
          The Biodiversity Heritage Library is the corpus underneath most
          biodiversity text mining, and its bulk export is admirably open and
          complete. In the export stamped 1 August 2026, 283,090 of 329,129
          distinct digitised items, 86.0 per cent, carry no machine-actionable
          licence. 283,006 have a blank LicenseType field, and 84 carry a Creative
          Commons IRI with an invisible Unicode character appended, U+FFA0,
          halfwidth hangul filler, which defeats exact matching against any
          licence registry while looking identical to a human. A further 108,509
          items, 33.0 per cent, carry the copyright status &quot;Not provided.
          Contact Holding Institution to verify copyright status.&quot; The
          status field itself is uncontrolled prose: the same legal position
          appears as NOT_IN_COPYRIGHT, NOT IN COPYRIGHT, and several
          punctuation and whitespace variants of the same sentence, and where a
          licence IRI exists it appears in http, https, and trailing-slash
          variants of the same licence.
        </p>
        <HBars
          title="Licence and rights metadata across the BHL bulk export, 1 August 2026"
          note="86.0% of the corpus carries no machine-actionable licence, and 84 items carry a Creative Commons IRI defeated by an invisible Unicode character."
          rows={[
            { label: 'All distinct digitised items', value: 329129, display: '329,129', color: CHART.gray },
            { label: 'No machine-actionable licence', value: 283090, display: '283,090', color: CHART.amber },
            { label: 'Copyright status "Not provided"', value: 108509, display: '108,509', color: CHART.amber },
            { label: 'CC IRI with invisible Unicode appended', value: 84, display: '84', color: CHART.amber },
          ]}
        />
        <p className="text-gray-700 mb-8">
          The consequence lands on anyone trying to license content or train
          models at corpus scale. A platform that needs to answer &quot;which of
          these 329,129 items may I redistribute, and under what terms&quot; can
          answer it mechanically for roughly one item in seven. For the rest the
          answer is a phone call to a holding institution. The table answering
          it is not even keyed cleanly: 9,118 ItemIDs recur with a different
          parent title per row, a collision our verification gate caught when
          its two independent computations refused to reconcile. Rights readiness, not
          OCR quality, is the binding constraint on making this corpus a
          commercial or AI-training data product.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Finding three: identifier hygiene, including a DOI called Array
        </h2>
        <p className="text-gray-700 mb-4">
          The export&apos;s DOI table holds 306,173 assignments. Thirteen values
          are not DOIs at all: ten titles carry the literal string{' '}
          <code>Array</code>, the fingerprint of a serialisation bug that wrote
          a programming-language artefact into a register field, one carries a
          volume designation, and two carry the https://doi.org/ resolver
          prefix, which the DOI display guidelines define as a display form
          rather than the identifier. 171 DOI values are asserted for more than
          one entity, six of them for both a title and an article, so the
          identifier cannot resolve to its referent. Among title-level
          identifiers, 912 of 5,607 ISBNs fail validation, 896 of them through
          MARC-style qualifier contamination such as{' '}
          <code>0804700036 (v. 1)</code>, eight through genuine checksum
          failure; 6 of 2,814 ISSNs fail; and 2,652 of 170,766 OCLC numbers are
          malformed, dominated by a pattern consistent with a control number
          concatenated with a six-digit date.
        </p>
        <p className="text-gray-700 mb-8">
          Fairness again, and prominently: BHL&apos;s own DOI minting practice
          is clean. Forty of forty sampled DOIs under its 10.5962 prefix are
          registered at doi.org, as are 24 of 25 sampled externally minted
          DOIs. Every defect above lives in the metadata export layer, where a
          per-scheme validation pass at deposit time, the kind of pipeline this
          study ships, would have caught each class.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Finding four: the NHM Data Portal is best in class on identifiers and
          thin on product metadata
        </h2>
        <p className="text-gray-700 mb-4">
          The Natural History Museum&apos;s portal is the strongest catalogue we
          have measured in this programme on the axis most catalogues fail.
          Every one of its 294 public datasets carries a DOI, and 25 of 25
          sampled resolve. For comparison, across the eleven Nordic national
          catalogues we measured in our health-data study, identifier coverage
          was 62.65 per cent. Descriptions are present on all 294 datasets.
          That deserves saying first, because the museum built the hard part.
        </p>
        <p className="text-gray-700 mb-8">
          The gap is in the fields a licensing platform or data marketplace
          reads. Eight of 294 datasets simultaneously carry a licence URL, a
          DOI, a contact email, a description of at least 100 characters, and a
          declared update frequency, the minimal bundle a data-product listing
          needs. 108 datasets have no licence URL and 51 no usable licence
          statement at all. The licence field mixes CKAN identifiers, SPDX-style
          identifiers and free text for the same licences, eighteen distinct
          values in total. Author email is empty on every dataset, update
          frequency is missing on 207, and spatial coverage is present on
          exactly one dataset in a collection whose specimens span the planet.
          At the file level, of 1,293 resources, 243 lack a format, 634 lack a
          size and 460 lack a description. None of this is hard to fix, which
          is the point: it is a bounded, enumerable backlog, and this census is
          the backlog list.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The model: registers make claims, and claims have dates
        </h2>
        <p className="text-gray-700 mb-4">
          The ontology is deliberately small and reuses the design that has now
          survived six register domains: status and identity are never
          properties of a thing, they are dated claims by a named register. An
          IdentifierAssertion records which register published which identifier
          for which resource, with conformance judged against the scheme&apos;s
          own declared rules. A RightsAssertion retains the verbatim rights
          string, because normalising NOT_IN_COPYRIGHT into a tidy code destroys
          the evidence of vocabulary drift. A ResolutionObservation records what
          happened when a canonical URL was dereferenced, with a date, so
          today&apos;s 404 and next month&apos;s recovery can coexist as facts.
          A RegisterSnapshot records how stale each mirror is, which for ZooBank
          is currently the whole story. The scheme registry is SKOS data, not
          code: each identifier scheme declares its syntax pattern, checksum
          algorithm and resolution template, and the pipeline validates every
          identifier against its declared scheme.
        </p>

        <div className="my-8">
          <Mermaid
            chart={`graph TD
  R[Register] -->|makes| IA[IdentifierAssertion]
  R -->|makes| RA[RightsAssertion]
  IA -->|about| RES[RegisteredResource]
  RA -->|about| RES
  IA -->|uses| SCH[Identifier scheme, rules as SKOS data]
  RO[ResolutionObservation, dated] -->|observed for| R
  SNAP[RegisterSnapshot, dated] -->|snapshot of| R
  SNAP -->|held by| M[Mirror register]`}
          />
        </div>

        <p className="text-gray-700 mb-8">
          Verification is the same discipline as the rest of the programme.
          Every headline number is computed twice, set-based in Python over the
          raw exports and via SPARQL over the emitted graph, by a gate that
          exits non-zero on any disagreement. SHACL runs in three layers with
          one shape per defect class, so the validation report enumerates the
          findings. Our own open-ontologies engine validates and lints every
          artefact as a third path. The build report states the sampling seeds,
          the caching, the partitioning, and everything we could not obtain,
          including the two Wayback timeouts that left the start date of the
          ZooBank outage unknown.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Prior art, credited by name
        </h2>
        <p className="text-gray-700 mb-8">
          TDWG&apos;s standards family, Darwin Core and Latimer Core above all,
          defines what biodiversity data should say. The NOMEN ontology models
          nomenclatural acts formally. OpenBiodiv, by Viktor Senderov and
          Lyubomir Penev, built a knowledge graph over biodiversity literature,
          and Plazi extracts taxonomic treatments at scale. GBIF, ChecklistBank
          and the Catalogue of Life operate the aggregation layer this study
          reads, and the Biodiversity Heritage Library&apos;s open bulk export
          is what made the census possible at all. None of that work measures
          whether the registers&apos; published identifiers conform to their own
          schemes, resolve, or agree across mirrors, and that assurance layer is
          the only claim this study makes for itself.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The transferable method, and a bounded offer
        </h2>
        <p className="text-gray-700 mb-4">
          The method transfers to any register-shaped system: verify the
          sources by hand, harvest completely or state the sample, declare each
          identifier scheme&apos;s rules as data, reify claims instead of
          overwriting them, dereference a seeded sample with dates, and compute
          every number twice. We have now run it on fund data, insurance,
          banking, the scholarly record, learning standards, health-data
          catalogues and biodiversity, and the defect classes repeat across
          domains with remarkable regularity.
        </p>
        <p className="text-gray-700 mb-8">
          If you run a collections catalogue, a nomenclature register, or an
          extraction pipeline that has to trust one of these, the first
          measurement pass on one register is free: write to{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:underline"
          >
            fabio@thetesseractacademy.com
          </a>{' '}
          with a pointer to the catalogue or register, and you will get back the
          conformance, resolution and rights-readiness table for it, in the open
          format this repository defines.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-500">
            Built and published 28 August 2026. All numbers are reproducible
            from the public repository; the build report records every caveat,
            every seed, and everything that could not be obtained. Corrections,
            when needed, are stated on this page rather than applied silently.
          </p>
        </div>
      </div>
    </div>
  );
}
