import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/scotland-land-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/land-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/land-register-ontology',
  headline:
    'An open ontology for land register integrity, tested against all 33 Scottish registration counties | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology and reproducible audit of the Registers of Scotland INSPIRE Cadastral Parcels dataset, built from a complete keyless download of all 33 registration counties, 1,564,345 parcels, retrieved on 21 August 2026 under the Open Government Licence. The Land Reform (Scotland) Act 2025 attaches duties to landholdings of 1,000 hectares or more. The register publishes no areas: the INSPIRE areavalue attribute carries the literal string UNPOPULATED on all 1,564,345 parcels, as do referencepoint, beginlifespanversion, endlifespanversion, validfrom and validto. Area computed from the published geometry depends on method: summing parcels gives 6,581,717 hectares, the geometric union gives 4,714,673, a difference of 1,867,044 hectares or 28.37 per cent, ranging from 1.33 per cent in Nairn to 95.40 per cent in West Lothian. Every headline computed two independent ways.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  about: { '@type': 'Dataset', name: 'Land Register Integrity Ontology', url: REPO },
  keywords:
    'Land Reform Scotland Act 2025, large landholding, 1000 hectare threshold, lotting, Registers of Scotland, INSPIRE cadastral parcels, Land Register of Scotland, General Register of Sasines, cadastral map, land valuation, rural surveyors, RICS, register assurance, SHACL, OWL 2 ontology, SKOS, open government licence, community right to buy, Scottish Land Commission',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/land-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Registers of Scotland publish the area of registered land?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The INSPIRE Cadastral Parcels dataset defines an areavalue attribute as the registered area value giving quantification of the area projected on the horizontal plane of the cadastral parcel. On every one of the 1,564,345 parcels across all 33 registration counties, retrieved on 21 August 2026, that attribute carries the literal string UNPOPULATED. It is the only value the field takes anywhere in Scotland. Five further attributes behave identically: referencepoint, beginlifespanversion, endlifespanversion, validfrom and validto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the 1,000 hectare threshold in the Land Reform (Scotland) Act 2025 be computed from open data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not unambiguously. Because the register publishes no area, an area must be computed from the published polygons, and two defensible methods disagree. Summing individual parcel areas across Scotland gives 6,581,717 hectares. Taking the geometric union of the same polygons gives 4,714,673 hectares. The difference is 1,867,044 hectares, or 28.37 per cent. Summing double counts because overlapping and stacked polygons are a valid part of the Registers of Scotland data model and hole polygons are not removed before publication.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the two methods disagreement vary across Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By a factor of about seventy. The gap between summing parcels and taking their union is 1.33 per cent in Nairn and 95.40 per cent in West Lothian, with Dumfries at 80.27 per cent, Glasgow at 41.64 per cent and Aberdeen at 33.31 per cent. Because the distortion is not close to constant, no single correction factor can be applied to convert one method into the other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Land Reform (Scotland) Act 2025 in force?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not the parts that matter here. The Act received Royal Assent on 16 December 2025, and sections 11 and 44 to 48 came into force the following day. The Land Reform (Scotland) Act 2025 (Commencement No. 1) Regulations 2026 brought sections 8, 9 and 12 into force, covering Scottish Land Commissioner functions and a model lease for hutting on public land. The large landholding provisions, including land management plans, prior notification and lotting, await further commencement regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this study say who owns Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and it deliberately uses no ownership data at all. Resolving an INSPIRE identifier to a Land Register title number requires the Registers of Scotland lookup service, for which a fee applies. Every finding here is a property of the published geometry and the published attributes. Registers of Scotland also states that approximately 30 per cent of Land Register titles are absent from this dataset and that the Land Register is still replacing the General Register of Sasines, so every area figure is an area of published cadastral parcels and never an area of Scotland.',
      },
    },
  ],
};

const COUNTIES: Array<[string, string, string]> = [
  ['West Lothian', '52,252', '95.40'],
  ['Dumfries', '30,514', '80.27'],
  ['Glasgow', '114,546', '41.64'],
  ['Selkirk', '5,657', '40.76'],
  ['Aberdeen', '121,192', '33.31'],
  ['Renfrew', '105,962', '33.14'],
  ['Midlothian', '136,822', '27.48'],
  ['East Lothian', '24,885', '25.60'],
  ['Lanark', '199,379', '21.58'],
  ['Stirling', '73,944', '11.85'],
  ['Perth', '52,607', '7.33'],
  ['Orkney and Zetland', '17,097', '3.09'],
  ['Banff', '14,900', '1.81'],
  ['Nairn', '4,174', '1.33'],
];

export const LandRegisterOntology: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to research
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-gov-black mb-6 leading-tight">
        An open ontology for land register integrity, tested against all 33 Scottish registration counties
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Published 21 August 2026. Data retrieved 21 August 2026 under the Open Government Licence v3.0.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        The Land Reform (Scotland) Act 2025 regulates land by area. It attaches duties to
        landholdings of 1,000 hectares or more. Scotland&rsquo;s national cadastral dataset
        publishes no areas.
      </p>

      <p className="text-gray-700 mb-6">
        That is not a rhetorical flourish. The INSPIRE Cadastral Parcels dataset, which
        Registers of Scotland publishes to satisfy the INSPIRE Directive, defines an{' '}
        <code className="bg-gray-100 px-1 rounded">areavalue</code> attribute as the
        &ldquo;registered area value giving quantification of the area projected on the
        horizontal plane of the cadastral parcel&rdquo;. We downloaded all 33 registration
        counties on 21 August 2026, 1,564,345 parcels in total, and checked what that field
        contains. It contains the literal string{' '}
        <code className="bg-gray-100 px-1 rounded">UNPOPULATED</code>. On every parcel. It is
        the only value the field takes anywhere in Scotland.
      </p>

      <p className="text-gray-700 mb-6">
        Five further attributes behave the same way:{' '}
        <code className="bg-gray-100 px-1 rounded">referencepoint</code>,{' '}
        <code className="bg-gray-100 px-1 rounded">beginlifespanversion</code>,{' '}
        <code className="bg-gray-100 px-1 rounded">endlifespanversion</code>,{' '}
        <code className="bg-gray-100 px-1 rounded">validfrom</code> and{' '}
        <code className="bg-gray-100 px-1 rounded">validto</code>. Six mandated attributes,
        1,564,345 parcels, one distinct value across all of them.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Why a magic word is worse than an empty field</h2>

      <p className="text-gray-700 mb-6">
        INSPIRE provides a mechanism for an attribute that has no value. It is called a
        nil reason, and it carries why the value is absent: unknown, inapplicable,
        withheld. Writing the word UNPOPULATED into the field instead does two things. It
        destroys the declared type, so a quantity becomes text, which is why the field
        arrives as a string in every downstream republication we examined. And it collapses
        every possible reason for the absence into one uninformative token, so a consumer
        cannot tell whether the area is unknown to the Keeper, inapplicable to this parcel,
        or simply not carried in this particular product.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">The area is computable, and that is the problem</h2>

      <p className="text-gray-700 mb-6">
        The polygons are published, so an area can be computed. There are two obvious ways
        to do it, both defensible, and they do not agree.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 border-b font-semibold">Method</th>
              <th className="text-right px-4 py-2 border-b font-semibold">Hectares</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Sum of individual parcel areas</td><td className="px-4 py-2 border-b text-right">6,581,717</td></tr>
            <tr><td className="px-4 py-2 border-b">Geometric union of the same parcels</td><td className="px-4 py-2 border-b text-right">4,714,673</td></tr>
            <tr className="bg-gray-50 font-semibold"><td className="px-4 py-2">Difference</td><td className="px-4 py-2 text-right">1,867,044 (28.37%)</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-6">
        Summing double counts, and it does so by design rather than by error. Registers of
        Scotland states that overlapping and stacked polygons are a valid part of its data
        model, that holes such as removals and exceptions are indicated with an overlapping
        polygon, and that polygons representing holes are not removed from ownership
        polygons before they are included in the dataset. Add the parcels up and you count
        some ground twice, and some excluded ground as though it were included.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">There is no correction factor</h2>

      <p className="text-gray-700 mb-6">
        If the distortion were roughly constant, a practitioner could apply a haircut and
        move on. It is not. Across the 33 registration counties it ranges from 1.33 per cent
        to 95.40 per cent, a spread of about seventy to one.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 border-b font-semibold">Registration county</th>
              <th className="text-right px-4 py-2 border-b font-semibold">Parcels</th>
              <th className="text-right px-4 py-2 border-b font-semibold">Sum over union</th>
            </tr>
          </thead>
          <tbody>
            {COUNTIES.map(([name, parcels, pct]) => (
              <tr key={name}>
                <td className="px-4 py-2 border-b">{name}</td>
                <td className="px-4 py-2 border-b text-right">{parcels}</td>
                <td className="px-4 py-2 border-b text-right">{pct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Fourteen of the 33 counties shown. The full table is in the repository.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">The threshold flips on real land</h2>

      <p className="text-gray-700 mb-6">
        This is not a theoretical concern. We grouped the published parcels into connected
        clusters of touching or overlapping polygons, and measured each cluster both ways.
        Of the 270 clusters that reach 1,000 hectares by summation, <strong>20 fall below
        1,000 hectares by union</strong>. The largest is a cluster of 341 parcels in Angus
        which measures 2,950.2 hectares if you add its parcels up and 172.2 hectares if you
        take its union, an inflation of about seventeenfold. A cluster of 1,131 parcels in
        Midlothian measures 1,983.4 hectares by summation and 61.2 by union.
      </p>

      <p className="text-gray-700 mb-6">
        These clusters are spatial groupings, not ownership holdings, and we make no claim
        that anyone owns them. They are here to show that the aggregation arithmetic the Act
        requires is unsafe when performed on this dataset, which is a statement about the
        data and not about any landowner.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">What this means for the threshold</h2>

      <p className="text-gray-700 mb-6">
        A landholding under the Act is an aggregate, assembled across a single owner and
        connected persons, and contiguity is not required. Assessing it against 1,000
        hectares means adding parcels up. That is precisely the operation the register&rsquo;s
        own data model makes unsafe. The consequence is that a holding&rsquo;s statutory
        status can be an artefact of the arithmetic chosen rather than a fact about the
        land, and the ontology in this repository is built to make that explicit: an area is
        modelled as a dated claim by a named source computed by a stated method, never as a
        property of a parcel.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">The policy backdrop, from the government&rsquo;s own figures</h2>

      <p className="text-gray-700 mb-6">
        Scottish Government statistics, published as RDF and queryable without a key,
        record the area of land in community ownership rising from 51,971.5 hectares in
        2000 to 213,803.22 hectares in 2024. The trajectory has flattened hard. Between
        2023 and 2024 the total grew by 8.46 hectares.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">What we did not find</h2>

      <p className="text-gray-700 mb-6">
        We tested every parcel against the identifier rules Registers of Scotland states in
        its own specification, namely SCT followed by a title id padded with zeros to ten
        digits, and the namespaced INSPIRE form of the same value. There were zero
        violations of either rule and zero duplicate labels across all 1,564,345 parcels.
        That hypothesis died, and it is reported here because a null result is a result. On
        this evidence Registers of Scotland conforms to its own declared identifier rules.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Where the register is good, measured</h2>

      <p className="text-gray-700 mb-6">
        A study that only reports faults is not a measurement, so we tested three guarantees
        Registers of Scotland states in its own specification, across all 1,564,345 parcels.
        It passes all three.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50"><tr>
            <th className="text-left px-4 py-2 border-b font-semibold">Measure</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Count</th>
          </tr></thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Duplicate geometries, after normalising vertex order</td><td className="px-4 py-2 border-b text-right">0</td></tr>
            <tr><td className="px-4 py-2 border-b">Invalid geometries requiring repair</td><td className="px-4 py-2 border-b text-right">2</td></tr>
            <tr><td className="px-4 py-2 border-b">Slivers under one square metre</td><td className="px-4 py-2 border-b text-right">392</td></tr>
            <tr><td className="px-4 py-2 border-b">Parcels outside the national bounding envelope</td><td className="px-4 py-2 border-b text-right">1</td></tr>
            <tr><td className="px-4 py-2 border-b">Identifier format violations against RoS&rsquo;s own declared rules</td><td className="px-4 py-2 border-b text-right">0</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-6">
        Its specification says &ldquo;there should be no duplicated polygons within the
        dataset&rdquo;, and there are none. Geometry validity is two failures in 1.56 million.
        This also corrected a gap in our own first pass, which repaired invalid geometry with
        a zero-width buffer without counting how often it had to, and so would have let a
        source with poor geometry hygiene pass as clean.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Carbon, and why this matters beyond conveyancing</h2>

      <p className="text-gray-700 mb-6">
        A land management plan under the Act is expected to address carbon, which in Scotland
        mostly means peat. Sizing peat on a holding means overlaying it on the national
        habitat map, and that calculation inherits every problem on this page before it meets
        problems of its own. We measured that separately in{' '}
        <Link to="/research/land-carbon-measurement" className="text-gov-blue hover:underline">
          measuring peat on a Scottish landholding
        </Link>, which compares all 8.1 billion pixel pairs of the two national habitat maps.
        Scotland&rsquo;s raised and blanket bog covers 1,330,616 hectares, and the peat class
        is clean in both maps.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">What we got wrong, and corrected</h2>

      <p className="text-gray-700 mb-6">
        Two errors of ours are worth stating, because a study that audits other people&rsquo;s
        data should hold its own to the same standard.
      </p>

      <p className="text-gray-700 mb-6">
        We reported that our second validation engine could not match focus nodes for a common
        SHACL targeting construct. That was wrong, and it was wrong because we had invoked the
        tool incorrectly. Run correctly, the two engines agree exactly on the structural layer
        and on the cross-source layer that carries the argument. The single genuine
        disagreement isolates to one unimplemented constraint, which has since been fixed in
        that engine along with two related defects, all of which caused it to report a pass
        over data it had not checked.
      </p>

      <p className="text-gray-700 mb-6">
        Running the two engines against each other also exposed a real error in our own
        shapes, an unconstrained cross product that inflated one layer&rsquo;s results, and a
        later audit found two modelling errors and a self-contradiction in our own ontology:
        a property declared on too narrow a class, and an identifier scheme whose declared
        length disagreed with its own pattern. All are fixed, and both audits now run in
        continuous integration so they cannot return. The corrections are recorded in the
        build report rather than applied silently.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Scope, stated plainly</h2>

      <p className="text-gray-700 mb-6">
        These findings are about what the register says and does not say. They are not
        estimates of who owns Scotland, and no ownership data is used anywhere. Resolving an
        INSPIRE identifier to a title number requires a paid Registers of Scotland service.
        Registers of Scotland states that approximately 30 per cent of Land Register titles
        are absent from this dataset, that leases and properties without a determinable
        single ground level owner are excluded by design, and that the Land Register is
        still replacing the General Register of Sasines, with county operational dates
        staggered between 1981 and 2003. Every area figure above is an area of published
        cadastral parcels, never an area of Scotland.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">How it was verified</h2>

      <p className="text-gray-700 mb-6">
        Every headline is computed twice, once set-based in Python over the measurement
        output and once by SPARQL over the emitted assertion graph, by code paths that share
        nothing. The governance script exits non-zero if the two disagree. The ontology, the
        scheme registry and all three SHACL layers are validated and linted by two
        independent engines. The harvest is resumable, the data is regenerable rather than
        committed, and the build report records what could not be obtained, including that
        the Registers of Scotland web host returns HTTP 403 to this client on every path we
        tried, which blocks the official identifier cross-reference file.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Repository</h2>

      <p className="text-gray-700 mb-6">
        The ontology, the SHACL layers, the pipeline and the build report are public.
      </p>

      <p className="mb-8">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gov-blue font-medium hover:underline">
          github.com/fabio-rovai/scotland-land-register-ontology
          <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>

      <div className="border-l-4 border-gov-blue bg-gray-50 p-6 mb-8">
        <h3 className="font-semibold text-gov-black mb-2">If you advise on rural land in Scotland</h3>
        <p className="text-gray-700 mb-3">
          We will run the two area methods over a specific holding you name, and give you the
          gap in hectares together with the parcels that drive it, as a fixed scope first
          engagement. If the two methods agree on your holding, that is a useful answer too.
        </p>
        <p className="text-gray-700">
          Fabio Rovai, The Tesseract Academy:{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">
            fabio@thetesseractacademy.com
          </a>
        </p>
      </div>

      <p className="text-xs text-gray-500">
        Contains public sector information licensed under the Open Government Licence v3.0.
        &copy; Crown copyright. Reproduced with the permission of Registers of Scotland.
        Contains OS data. &copy; Crown copyright and database right 2026.
      </p>
    </div>
  </div>
);
