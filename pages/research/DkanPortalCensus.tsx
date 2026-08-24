import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/dkan-portal-profile';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/dkan-portal-census#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/dkan-portal-census',
  headline:
    'We probed every .gov domain for DKAN and found three portals, all publishing the same wrong identity | Tesseract Academy',
  description:
    'A complete census of the DKAN open data portal across the US federal estate, taken on 21 August 2026. We probed 20,135 hostnames: all 16,535 registrable .gov domains from CISA dotgov-data, plus 3,600 DNS-resolving open data subdomains. DKAN 2.x answers on exactly three: data.medicaid.gov, data.healthcare.gov and data.sba.gov. All three publish the catalogue identity http://dkan/data.json, root-caused to line 3 of schema/collections/catalog.json in GetDKAN/dkan. The first census frame returned a false zero and the error is reported alongside the result.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  about: { '@type': 'Dataset', name: 'DKAN portal profile', url: REPO },
  keywords:
    'DKAN, open data portal, Drupal open data, CKAN alternative, DCAT-US, data.json, JSON-LD @id, @vocab coercion, phantom IRI, portal census, GetDKAN, data.medicaid.gov, data.healthcare.gov, data.sba.gov, catalogue assurance, platform default defect',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/dkan-portal-census#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many DKAN portals are there in the US federal estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three, as of 21 August 2026, within the stated frame. We probed 20,135 hostnames: all 16,535 registrable .gov domains listed in CISA dotgov-data, plus 3,600 DNS-resolving open data subdomains built from five prefixes. DKAN 2.x answered on data.medicaid.gov and data.healthcare.gov, both operated by the Centers for Medicare and Medicaid Services, and data.sba.gov at the Small Business Administration. The probe detects DKAN 2.x only; DKAN 1.x on Drupal 7 exposes different endpoints and is not detected, and portals outside .gov are outside the frame.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do DKAN catalogues publish http://dkan/data.json as their identity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because that value is shipped as the default. Line 3 of schema/collections/catalog.json in the GetDKAN/dkan repository sets the catalogue template @id to http://dkan/data.json, so any deployment that does not override it publishes a catalogue identified by a hostname resolvable only inside its own network. This is a platform default rather than three publishers making the same mistake, which matters because it can be fixed once upstream instead of being reported to each operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a catalogue @id matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A data.json file is a JSON-LD document, so its @id is the subject that every statement in the document hangs from. When three separate federal catalogues assert their contents about the same non-resolvable subject, merging any two of them merges their datasets onto a single catalogue node. That is the ordinary case for anyone aggregating DCAT-US, which is what data.gov itself does.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are phantom DCAT terms and are they DKAN bugs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are not DKAN bugs. The federal DCAT-US 1.1 JSON-LD context sets @vocab to the W3C DCAT namespace, so any key the context does not map is minted as a term in that namespace whether or not DCAT defines it. Across the three portals this produces dcat:references 368 times and dcat:_update 7 times. Neither term exists in the W3C DCAT vocabulary, checked against w3.org/ns/dcat.ttl. This affects every publisher using the federal context, not only DKAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'How good is DKAN data quality compared with other portals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On the checks their operators actually control, the two CMS portals are clean and better than most of the federal estate. All 886 bureau codes they publish are well formed and present in the authoritative OMB register, and only one required field is missing across 886 datasets. The defects found on DKAN portals are overwhelmingly inherited from the platform default and from the federal JSON-LD context rather than authored by the publishers. The exception is data.sba.gov, which omits bureauCode on all 25 of its datasets.',
      },
    },
  ],
};

export const DkanPortalCensus: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        We probed every .gov domain for DKAN and found three portals, all publishing the same wrong identity
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        DKAN is the Drupal open data portal, maintained in the open under GPL-2.0 and used by serious federal
        publishers. We wanted a narrow, answerable question about it: which of the defects visible in a DKAN
        catalogue come from the platform&apos;s shipped defaults, rather than from anything the publisher did? That
        distinction decides who can fix a finding, and whether it is fixed once upstream or reported separately to
        every operator. Answering it required knowing how many DKAN portals exist, so we counted them all.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>20,135 hostnames probed. Three DKAN 2.x portals: data.medicaid.gov, data.healthcare.gov and data.sba.gov.</li>
          <li>All three publish <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">&quot;@id&quot;: &quot;http://dkan/data.json&quot;</code>, the shipped default at line 3 of the DKAN catalog template.</li>
          <li>368 occurrences of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:references</code> and 7 of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:_update</code> are minted into the W3C DCAT namespace, which defines neither. That is the federal context&apos;s doing, not DKAN&apos;s.</li>
          <li>data.sba.gov omits <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">bureauCode</code> on all 25 of its datasets, and nothing catches it.</li>
          <li>The two CMS portals are clean on everything their operators control: 886 of 886 bureau codes well formed and present in the OMB register.</li>
          <li>Our first census frame returned zero. It was wrong, and both numbers are published.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The census, including the frame that failed</h2>
      <p className="text-gov-dark leading-relaxed">
        The first frame took CISA&apos;s <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dotgov-data</code> registry, which
        is the authoritative list of every registered .gov domain and names the organization behind each one, and
        asked all 16,535 of them for a DKAN response at
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">/api/1/metastore/schemas</code>. It found nothing. Zero DKAN
        portals in the entire United States government.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That result was false, and it was the kind of false that gets published. The CISA registry lists
        registrable domains only, never subdomains, so the probe asked medicaid.gov and never asked
        data.medicaid.gov, which we already knew was a DKAN portal because we had opened it by hand an hour
        earlier. Keeping one known-answer case and testing the detector against it is the only reason the zero was
        caught rather than written up.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second frame built candidate hostnames from five open data prefixes, gated them through DNS so that
        only resolving names were fetched, and probed the 3,600 that existed. Three DKAN portals answered. An
        earlier passive fingerprint had also miscounted data.cms.gov as DKAN, because it returns HTTP 200 with an
        HTML single-page shell at the DKAN API path; the probe now requires a parsed JSON object carrying a
        recognisable schema key, and that false positive falls out.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Both frames are in the published record. A census that shows only the frame that worked is not a census.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The finding: a default that reached production three times out of three</h2>
      <p className="text-gov-dark leading-relaxed">
        Every one of the three portals publishes this as the catalogue&apos;s own identity:
      </p>
      <pre className="bg-gov-dark text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>{`$ curl -s https://data.medicaid.gov/data.json | jq -r '."@id"'
http://dkan/data.json`}</code></pre>
      <p className="text-gov-dark leading-relaxed">
        This is not three publishers making the same mistake. It is line 3 of
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">schema/collections/catalog.json</code> in DKAN itself, shipped as
        the default catalog template, inherited by every deployment that does not override it. The hit rate in our
        census is three out of three.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The consequence is small and precise. A data.json file is JSON-LD, so its <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">@id</code> is
        the subject every statement in the document hangs from. Three federal catalogues currently describe their
        contents against the same non-resolvable subject, so merging any two of them merges their datasets onto one
        catalogue node. That merge is the ordinary case for anyone aggregating DCAT-US, which is what data.gov does.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We have drafted a reproducible issue for the DKAN maintainers proposing that the identity be derived from
        the configured site base URL, with the template used only as a fallback. We have not filed it. Our search
        of the DKAN tracker was inconclusive rather than clean, so the right next step is to ask a maintainer
        whether this is already known or deliberate before opening anything.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The defect that is not DKAN&apos;s fault</h2>
      <p className="text-gov-dark leading-relaxed">
        The federal DCAT-US 1.1 JSON-LD context sets <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">&quot;@vocab&quot;: &quot;http://www.w3.org/ns/dcat#&quot;</code>.
        Any key the context does not explicitly map therefore becomes a term in the W3C DCAT namespace, whether or
        not DCAT defines it. Across the three portals this mints
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:references</code> 368 times and
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:_update</code> 7 times. We checked both against the
        authoritative vocabulary at w3.org/ns/dcat.ttl. Neither exists.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">references</code> is a legitimate Project Open Data field that the
        context simply forgets to map. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">_update</code> is an internal field
        name that has leaked into a published catalogue and then been promoted into a W3C namespace on its way out.
        Neither is DKAN&apos;s doing, and both affect every publisher using the federal context. Attribution matters
        here as much as detection: a finding filed against the wrong party does not get fixed.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the publishers themselves got right, and one thing they did not</h2>
      <p className="text-gov-dark leading-relaxed">
        On the checks their operators control, the two CMS portals are good. All 886 bureau codes across
        data.medicaid.gov and data.healthcare.gov are well formed and present in the authoritative OMB register,
        and exactly one required field is missing across 886 datasets. That is a better record than most of the
        federal estate we measured in the companion study, and it deserves saying plainly.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The exception is data.sba.gov, which omits <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">bureauCode</code> on all
        25 of its datasets. The Small Business Administration is a federal agency and the DCAT-US 1.1 federal
        profile requires that field. Nothing catches it, and the reason is the subject of the companion study:
        federal publishers are registered with data.gov under the non-federal schema, which does not require it.
        The platform is not at fault, the publisher has made an ordinary omission, and the assurance layer that
        exists specifically to catch ordinary omissions has been pointed somewhere else.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The platform profile, the census pipeline, the per-portal measurements, the draft upstream issue and the
        build report are public, with eighteen offline tests pinning every published claim so that an upstream
        change cannot silently rewrite a finding. Code is MIT and the profile and documentation are CC BY 4.0. No
        DKAN source is redistributed. The wider study of the federal catalogue estate that this profile sits
        inside is published alongside it.
      </p>
      <a href={REPO} target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center gap-2 text-gov-blue hover:text-gov-blue-dark font-semibold">
        dkan-portal-profile on GitHub <ExternalLink className="w-4 h-4" />
      </a>
      <p className="text-gov-dark leading-relaxed">
        If you operate a DKAN portal, or any DCAT-US catalogue, we will send you the rows that name your
        deployment and the queries that produced them, at no charge. Write to <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>.
      </p>
    </section>
  </article>
);

export default DkanPortalCensus;
