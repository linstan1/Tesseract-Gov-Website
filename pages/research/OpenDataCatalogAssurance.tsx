import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-data-catalog-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/open-data-catalog-assurance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/open-data-catalog-assurance',
  headline:
    'Fifty-nine federal agencies are validated against the schema that exempts them | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the US federal open data catalogue estate, built on 21 August 2026 from data.gov's own keyless harvest API. Of 130 DCAT-US harvest sources, 76 covering 59 federal agencies are registered under the dcatus1.1 non-federal validation schema, which drops bureauCode and programCode from required and additionally permits null for both. Zero federal-typed organizations are registered under the federal schema. The list includes the Office of Management and Budget, which mandates the bureau code, and the General Services Administration, which operates data.gov. The federal schema's bureauCode pattern is published unanchored, so it accepts xx024:01yy, and its own normative example contradicts its own pattern. 997 Department of Energy datasets carry the Department of Education's agency code. Every headline computed two independent ways.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  about: { '@type': 'Dataset', name: 'Open Data Catalog Ontology', url: REPO },
  keywords:
    'DCAT-US, data.gov, open data quality, bureauCode, programCode, OMB Circular A-11, Project Open Data, harvest validation, JSON Schema anchoring, SHACL, OWL 2 ontology, SKOS, register assurance, federal open data, catalogue assurance, data.gov harvester, open data catalog ontology',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/open-data-catalog-assurance#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many federal agencies are registered with data.gov under the non-federal validation schema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On 21 August 2026, 76 of the 130 DCAT-US harvest sources registered with data.gov belong to organizations whose type is Federal Government, and every one of those 76 is bound to the dcatus1.1 non-federal schema. They cover 59 distinct federal organizations. Zero federal-typed organizations are bound to the federal schema. The only two sources bound to the federal schema belong to the National Endowment for the Arts and the Government Publishing Office, neither of which carries an organization type in the API.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the federal and non-federal DCAT-US 1.1 schemas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They differ in exactly two respects, and both are confined to the same two fields. The federal schema lists bureauCode and programCode in its required array; the non-federal schema does not. The non-federal schema additionally admits an explicit null for both fields through a type-null branch the federal schema does not carry. No other property definition differs between them. Both differences narrow enforcement in the same direction, so binding a federal publisher to the non-federal schema disables the only checks that are specific to federal publishers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the federal schema actually enforce the bureau code format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The published pattern is [0-9]{3}:[0-9]{2} with no anchors. Under JSON Schema semantics an unanchored pattern matches on substring, so the string xx024:01yy validates successfully against the federal schema as published. We confirmed this by running the jsonschema library against the schema file served from resources.data.gov. The practical effect is that even a correctly bound federal publisher would not have malformed bureau codes rejected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do 997 Department of Energy datasets carry the Department of Education agency code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '997 Department of Energy records publish bureauCode 018:001. In the authoritative OMB register published at resources.data.gov, agency code 018 is the Department of Education. The Department of Energy is 019. The value also uses a three-digit bureau segment where the register form is two digits. Because the Department of Energy is registered under the non-federal schema, the field is not required, and because the pattern is unanchored, it would not have been rejected even if it were.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many data.gov harvest sources fail completely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '179 of 793 registered harvest sources, which is 22.6 per cent, completed their most recent harvest job having errored every single record they saw. The job status on those runs is complete, so the aggregator reports success while ingesting nothing valid from the source. This is computed from data.gov’s own job telemetry, which it publishes without an API key.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is data.gov validation telemetry public?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. harvest.data.gov exposes a keyless JSON API with an OpenAPI description at /openapi.json, including per-record validation errors. It currently holds 4,176,301 validation error rows across 8,022,943 harvest records. We could find no published aggregation of it. Errors and warnings are returned together and must be separated by their severity field, because the job summary field records_errored counts only error-severity records.',
      },
    },
  ],
};

export const OpenDataCatalogAssurance: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Fifty-nine federal agencies are validated against the schema that exempts them
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Federal agencies publishing open data are required to tag every dataset with an OMB bureau code and a
        program code. data.gov validates what agencies publish. On 21 August 2026 we asked a narrower question:
        which rules does it validate them against? The answer is that 76 harvest sources covering 59 federal
        agencies are registered under a schema that does not require either field, and that no federal agency is
        registered under the one that does. The list includes the Office of Management and Budget, which issues
        the requirement, and the General Services Administration, which operates data.gov. Everything below comes
        from keyless public sources, every headline is computed two independent ways, and the pipeline fails its
        own build if the two ever disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>Of 130 DCAT-US harvest sources, 128 are bound to the non-federal validation schema. 76 of them, covering 59 distinct federal organizations, belong to bodies whose type is Federal Government. Zero federal-typed organizations are bound to the federal schema.</li>
          <li>The two schemas differ in exactly two respects, both confined to <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">bureauCode</code> and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">programCode</code>: they are dropped from <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">required</code>, and an explicit null is additionally permitted for both.</li>
          <li>The federal schema&apos;s bureau code pattern is published unanchored, so it accepts <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">xx024:01yy</code>. Its own normative example, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">015:010</code>, does not satisfy an anchored reading of the pattern printed beside it.</li>
          <li>997 Department of Energy datasets carry bureau code <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">018:001</code>. Agency 018 is the Department of Education. The Department of Energy is 019.</li>
          <li>669 bureau code values name nothing in the OMB register, mostly the placeholder <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">000:00</code>, which the Department of Labor uses on 401 of its 404 datasets and the FDIC on all 23 of its own.</li>
          <li>179 of 793 harvest sources, 22.6 per cent, completed their most recent job having errored every record they saw, with the job status still reported as complete.</li>
          <li>data.gov publishes 4,176,301 validation error rows through a keyless API. We could find no aggregation of it anywhere.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured, and from where</h2>
      <p className="text-gov-dark leading-relaxed">
        Four public surfaces, all keyless, all pinned to 21 August 2026. The data.gov harvester API at
        harvest.data.gov, which publishes 793 harvest sources, 120 organizations and 56,764 harvest jobs, and
        which describes itself in an OpenAPI document at <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">/openapi.json</code>.
        The publishers&apos; own <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">data.json</code> catalogues, of which
        we fetched 136 and parsed 97. The DCAT-US 1.1 schemas and JSON-LD context served from resources.data.gov,
        together with the authoritative OMB bureau code register of 368 agency and bureau pairs. And the harvester
        source itself at GSA/datagov-harvester, where the schema selection logic sits at
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">harvester/harvest.py</code> lines 158 to 162.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The measurement vantage point was London. That detail is not decoration, and the section on what went
        wrong explains why it nearly produced a false finding.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the binding, not the data, decides what is checked</h2>
      <p className="text-gov-dark leading-relaxed">
        When an agency registers a catalogue with data.gov, the registration carries a schema type. The harvester
        reads it and picks a validation schema: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcatus1.1: federal</code> loads
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">federal_dataset.json</code>, and
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcatus1.1: non-federal</code> loads
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">non-federal_dataset.json</code>. That choice is made once, at
        registration, and it decides for good which rules the catalogue will ever be measured against.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We diffed the two schema files as published. They are the same document with two exceptions, both confined
        to the two federal fields. In the federal schema, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">bureauCode</code> and
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">programCode</code> appear in the required array. In the non-federal
        schema they do not, and both additionally gain a branch permitting an explicit null. Nothing else differs.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Then we cross-tabulated the registrations against the organization types data.gov itself publishes. Every
        one of the 76 federal-typed sources is bound to the non-federal schema. The 59 organizations behind them
        include the Department of Defense, the Department of the Treasury, the Social Security Administration,
        NASA, the FDIC, the Securities and Exchange Commission, the Library of Congress, the General Services
        Administration, and the Office of Management and Budget. OMB issues the bureau code requirement. GSA
        operates data.gov. Both are registered under the schema that does not check it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the shape of defect we have found in every register family we have audited, and it is why we call
        the practice register assurance rather than data quality. Assurance stops at the register boundary. Each
        catalogue is validated diligently against the rules it was pointed at, and nothing anywhere checks whether
        it was pointed at the right ones. The failure is invisible from inside either system, because from inside
        both, everything passes.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the rule that would have caught it does not work either</h2>
      <p className="text-gov-dark leading-relaxed">
        The obvious remedy is to rebind those 76 sources to the federal schema. We checked what that would
        actually enforce, and the answer is close to nothing. The bureau code pattern is published as
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">[0-9]&#123;3&#125;:[0-9]&#123;2&#125;</code>, with no
        anchors. JSON Schema patterns are unanchored by default and match on substring, so
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">xx024:01yy</code> validates cleanly. So does
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">422:00:00</code>, and so does every malformed value we found
        in production.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Worse, the property contradicts itself. The description beside that pattern gives
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">015:010</code> as the normative example, which is three digits,
        a colon and three digits. The pattern requires three digits, a colon and two digits. A publisher who reads
        the documentation and follows the example produces values the pattern is supposed to reject. That is
        exactly what the Department of Homeland Security does, on 1,168 datasets, with values such as
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">024:010</code> where the OMB register lists bureau 10. On the
        evidence, DHS is not the party in error here.
      </p>
      <p className="text-gov-dark leading-relaxed">
        In fairness, this is confined to one property. We checked <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">programCode</code>,
        whose example <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">015:001</code> is consistent with its own pattern.
        The defect is specific and therefore fixable in one line.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: what the unchecked field actually contains</h2>
      <p className="text-gov-dark leading-relaxed">
        Across 79,413 bureau code values on 79,404 datasets from 49 federal catalogues, 76,498 are well formed and
        present in the OMB register. The federal estate is not in ruins. But 2,246 fail an anchored read of the
        pattern, and 669 are well formed while naming nothing in the register that issues them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The clearest single case is the Department of Energy, which publishes bureau code
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">018:001</code> on 997 datasets. Agency 018 in the OMB register is
        the Department of Education. The Department of Energy is 019. Anyone rolling up federal open data holdings
        by publishing agency, which is the ordinary use of the field, attributes those 997 datasets to the wrong
        cabinet department.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second pattern is the placeholder. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">000:00</code> is not in the
        OMB register and never has been, yet the Department of Labor uses it on 401 of its 404 datasets, the
        General Services Administration on 103, the Department of Energy on 66, and the Federal Deposit Insurance
        Corporation on all 23 of its own. It matches the pattern perfectly. It identifies nothing. This is the same
        failure mode as the charity register placeholders we documented in the UK, arriving independently in a
        different country and a different sector, which is what makes it a defect class rather than an anecdote.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the aggregator reports success while ingesting nothing</h2>
      <p className="text-gov-dark leading-relaxed">
        data.gov publishes its own harvest telemetry, and it is unusually candid. Taking each of the 793 sources
        and reading its most recent completed job, 179 of them, 22.6 per cent, errored every single record they
        saw. The status field on those runs reads complete. A source that ingests nothing and a source that
        ingests everything are reported the same way to anyone reading the status alone.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Behind that sits a corpus of 4,176,301 validation error rows, exposed without an API key, which we can
        find no evidence of anyone aggregating. The individual rows are humbling in an ordinary, human way. A
        licence field containing <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">text-align:Left;</code>, a fragment of CSS
        that escaped a content editor. A contact address reading
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">mailto:jaeger,stephanie&lt;sjaeger@sandiego.gov&gt;</code>, an Outlook
        display name pasted whole. Another reading
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">mailto:patricia.chardon-at-caricoos.org</code>, where an anti-spam
        habit has quietly destroyed the address. A landing page given as
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">www.woodsholegroup.com</code> with no scheme, so it is not a URI at
        all. None of these people did anything unreasonable. The systems around them simply never told them.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, and what it costs to be sure</h2>
      <p className="text-gov-dark leading-relaxed">
        The artefact is an OWL 2 ontology with a SKOS scheme registry and three SHACL layers, one shape per defect
        class, so that a validation report is a findings table rather than a wall of constraint violations. The
        modelling commitment is that conformance is never a property of a dataset. It is an assertion by a named
        source carrying a date, which makes disagreement representable and makes silence visible: a validator that
        was never pointed at a rule cannot observe its breach, and that silence is itself a position.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every headline is computed twice, set-based in Python and again in SPARQL over the 960,914-triple evidence
        graph, by a script that exits non-zero if the two ever disagree. All nine agree. SHACL is a third path and
        it corroborates the load-bearing number independently: layer 3 reports exactly 76 violations, the same 76
        sources. The vocabulary and shapes are additionally validated and linted with our own open-source engine.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That machinery earns its keep by catching us. Three claims in this work were wrong before they were right.
        We first reported that the two schemas differ in exactly one respect; the offline test pinning the claim
        failed, and the true answer is two. We first reported that 17 harvest sources were broken because they
        returned HTTP 403; they were not, and the section below explains why. And we first excluded a date defect
        as untraceable because we were grepping the source JSON for a value that only exists after parsing. All
        three corrections are recorded in the build report rather than quietly applied, because a build report that
        only records successes is not a build report.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The finding that died, and why we are telling you</h2>
      <p className="text-gov-dark leading-relaxed">
        Seventeen registered harvest sources refused us, including every one of the Department of the Interior&apos;s
        twelve bureau catalogues, the Social Security Administration, the Department of Defense and the Department
        of Agriculture. All 17 returned HTTP 403 to our research client, and all 17 returned 403 again to a
        standard browser user agent, which ruled out the easy explanation. It looked like a substantial finding
        about the reachability of mandated public data.
      </p>
      <p className="text-gov-dark leading-relaxed">
        It was not. Every one of those responses came from an Akamai or CloudFront edge node in London, which is
        where we were measuring from. The way to settle it was to stop measuring and go and read data.gov&apos;s own
        job history, which is public: the Social Security Administration source completes daily, ingests 2,363
        records and reports zero errors. The 403 is a fact about our vantage point, not about the source. No
        defect is claimed, the hypothesis is recorded as dead, and separating edge denial from genuine
        unavailability would need a US vantage point we do not have.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We report this at length because it is the most useful thing in the study for anyone doing similar work.
        A confident, well-evidenced, entirely false finding was one unchecked assumption away from publication.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What follows from this</h2>
      <p className="text-gov-dark leading-relaxed">
        Three of these defects are one-line fixes in public repositories, and none of them requires an agency to
        change how it publishes anything. Anchor the bureau code pattern. Reconcile the property description with
        the pattern printed beside it. Rebind federal publishers to the federal schema, in that order, because
        rebinding first would enforce a rule that currently enforces nothing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For a publishing agency the question is narrower and more immediate: how many of your own datasets carry a
        bureau code that names nothing, and would you know? For the 59 organizations named in this study the
        answer is currently no, because the system that would tell you is not looking.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h3 className="text-lg font-bold text-gov-dark font-serif">A bounded first engagement</h3>
        <p className="text-gov-dark leading-relaxed">
          If you operate one of the catalogues measured here, we will send you the rows that name your agency,
          together with the queries that produced them, at no charge and with no obligation. If you want the check
          to keep running rather than to be a snapshot, that is a small, fixed-scope piece of work and we are happy
          to quote it. Write to <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art and credit</h2>
      <p className="text-gov-dark leading-relaxed">
        The DCAT-US 3.0 tiger team inherited a website, a JSON Schema and a SHACL definition that were out of sync,
        with no source of truth and a three-month deadline, and said so publicly. Nothing here is a criticism of
        that work. The 1.1 profile measured in this study predates it, and the defects are inherited rather than
        introduced. data.gov also deserves credit for publishing the telemetry that made most of this possible:
        very few aggregators expose their own failure rates without an API key, and the study would not exist if
        it did not.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, the SKOS registry, the three SHACL layers, the pipeline, the verified queries and the build
        report are public. Code is MIT, the ontology and documentation are CC BY 4.0. The build report states what
        was fetched, what was verified, what was sampled and with which seed, which hypotheses died, and what could
        not be obtained. A companion study profiles DKAN, one of the portal platforms in this estate.
      </p>
      <a href={REPO} target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center gap-2 text-gov-blue hover:text-gov-blue-dark font-semibold">
        open-data-catalog-ontology on GitHub <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  </article>
);

export default OpenDataCatalogAssurance;
