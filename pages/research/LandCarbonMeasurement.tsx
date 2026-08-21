import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/scotland-land-register-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/land-carbon-measurement#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/land-carbon-measurement',
  headline:
    'Measuring peat on a Scottish landholding, tested against the national cadastre and the national habitat map | Tesseract Academy',
  description:
    "The Land Reform (Scotland) Act 2025 requires land management plans, addressing carbon, for holdings of 1,000 hectares or more. Sizing the peat on such a holding requires an area and a habitat map, and three independent defects compound against it. Registers of Scotland publishes no areas: the INSPIRE areavalue attribute carries the literal string UNPOPULATED on all 1,564,345 parcels. Areas computed from the published geometry depend on method, with summation exceeding the geometric union by 1,867,044 hectares or 28.37 per cent nationally. NatureScot's habitat map declares a NoData value of 0 that neither GeoTIFF encodes, so 7,205,895,872 of 8,100,000,000 pixels, 88.96 per cent of the national grid, present themselves as a valid class. Scotland's raised and blanket bog covers 1,330,616 hectares, 14.88 per cent of classified extent. All 8.1 billion pixel pairs of the Level 1 and Level 2 habitat maps were compared: 1.3239 per cent violate the EUNIS hierarchy, all of them at the marine and coastal boundary, and the peat class Q1 is clean.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  about: { '@type': 'Dataset', name: 'Land Register Integrity Ontology', url: REPO },
  keywords:
    'Land Reform Scotland Act 2025, land management plan, carbon, peatland, blanket bog, EUNIS, Q1 raised and blanket bogs, NatureScot habitat map, Registers of Scotland, cadastral parcels, zonal statistics, NoData, peat depth, natural capital, rural valuation, RICS, Scottish Land Commission',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/land-carbon-measurement#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much of Scotland is raised and blanket bog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In NatureScot's Scotland Habitat and Land Cover Map 2024, EUNIS class Q1, raised and blanket bogs, covers 133,061,631 pixels at 10 metre resolution, which is 1,330,616 hectares, or 14.88 per cent of the 8,941,041 hectares the map classifies. Class Q2, valley mires, poor fens and transition mires, covers a further 18,808 hectares. Class Q4, base-rich fens and calcareous spring mires, covers 84 pixels in the whole of Scotland, which is under one hectare.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you calculate the peat on a 1,000 hectare Scottish landholding from open data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not reliably, because three independent defects compound. Registers of Scotland publishes no area for any parcel, so an area must be computed from geometry. Parcels overlap by design, so summing them exceeds the geometric union by 28.37 per cent nationally. And the national habitat map declares a NoData value that neither GeoTIFF encodes, so unclassified ground inside a boundary is silently counted as a class rather than excluded. Each defect is individually modest and each is separately fixable, but they land on the same calculation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the two Scottish national habitat maps agree with each other?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always. EUNIS is hierarchical, so a Level 2 code sits beneath exactly one Level 1 code. Comparing all 8,100,000,000 pixel pairs of the Level 1 and Level 2 maps, which are published on an identical grid, 98.6761 per cent roll up correctly and 1.3239 per cent do not, which is 118,374 hectares. Every violation is the same marine and coastal confusion, and there are only four distinct violating class pairs. The peat class Q1 is involved in none of them, no pixel uses a code absent from its attribute table, and no pixel is classified in one map but not the other.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NoData problem in the Scottish habitat map?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The README shipped with the data states a NoData value of 0. Neither the Level 1 nor the Level 2 GeoTIFF encodes that value, so reading either file reports no NoData at all and every tool that honours the file's own metadata treats 0 as a valid class. Measured across the grid, 7,205,895,872 of 8,100,000,000 pixels, or 88.96 per cent, are background presenting themselves as data. It is a one-line fix at write time.",
      },
    },
  ],
};

export const LandCarbonMeasurement: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to research
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-gov-black mb-6 leading-tight">
        Measuring peat on a Scottish landholding, tested against the national cadastre and the national habitat map
      </h1>

      <p className="text-sm text-gray-500 mb-8">Published 21 August 2026. Data retrieved 21 August 2026.</p>

      <p className="text-lg text-gray-800 mb-6">
        The Land Reform (Scotland) Act 2025 requires a land management plan for holdings of
        1,000 hectares or more, and those plans are expected to address carbon. In Scotland
        that mostly means peat. So a reasonable question for anyone advising a large estate
        is: how much of this holding is bog?
      </p>

      <p className="text-gray-700 mb-6">
        The data to answer it is published and free. A national cadastre gives the parcels,
        a national habitat map gives the bog, and the calculation between them is an overlay
        that any competent GIS analyst would price at an afternoon.
      </p>

      <p className="text-gray-700 mb-6">
        We ran it. Three separate defects compound against the answer, and any one of them
        could be fixed without much trouble. What makes them matter is that they all land on
        the same calculation.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">First: the register publishes no areas</h2>

      <p className="text-gray-700 mb-6">
        The INSPIRE specification defines an <code className="bg-gray-100 px-1 rounded">areavalue</code>{' '}
        attribute as the quantification of a parcel&rsquo;s area. Across all 33 registration
        counties and all 1,564,345 parcels, Registers of Scotland publishes that field with
        the literal value <code className="bg-gray-100 px-1 rounded">UNPOPULATED</code>. It is
        the only value the field takes anywhere in Scotland. Five further attributes behave
        identically. The detail is in our{' '}
        <Link to="/research/land-register-ontology" className="text-gov-blue hover:underline">
          study of the cadastre itself
        </Link>.
      </p>

      <p className="text-gray-700 mb-6">
        So the area has to be computed from the polygons.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Second: computed area depends on the method</h2>

      <p className="text-gray-700 mb-6">
        Overlapping and stacked polygons are a valid part of the Registers of Scotland data
        model, and hole polygons stay in when the data is published. Adding parcels up
        therefore counts some ground twice. Taking the geometric union counts it once.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50"><tr>
            <th className="text-left px-4 py-2 border-b font-semibold">Method</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Hectares</th>
          </tr></thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Sum of parcel areas</td><td className="px-4 py-2 border-b text-right">6,581,717</td></tr>
            <tr><td className="px-4 py-2 border-b">Geometric union</td><td className="px-4 py-2 border-b text-right">4,714,673</td></tr>
            <tr className="bg-gray-50 font-semibold"><td className="px-4 py-2">Difference</td><td className="px-4 py-2 text-right">1,867,044 (28.37%)</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-6">
        The gap runs from 1.33 per cent in Nairn to 95.40 per cent in West Lothian, so there
        is no single correction factor to apply. Of 270 connected parcel groups that reach
        1,000 hectares by summation, 20 fall below it by union.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Third: the habitat map does not declare its own gaps</h2>

      <p className="text-gray-700 mb-6">
        NatureScot&rsquo;s Scotland Habitat and Land Cover Map 2024 is published as two
        GeoTIFFs, EUNIS Level 1 and Level 2, each 90,000 by 90,000 pixels at 10 metres. The
        README shipped alongside them states plainly: <em>NoData value: 0</em>.
      </p>

      <p className="text-gray-700 mb-6">
        Neither file encodes it. Open either raster and it reports no NoData value at all, so
        every tool that honours the file&rsquo;s own metadata treats 0 as a valid class rather
        than as absence. Measured across the grid, <strong>7,205,895,872 of 8,100,000,000
        pixels, 88.96 per cent, are background presenting themselves as data</strong>.
      </p>

      <p className="text-gray-700 mb-6">
        For a holding-level overlay this has one specific consequence. Unclassified ground
        inside a boundary gets counted as a class instead of being left out, so the
        denominator and every per-class share come out wrong, and nothing warns you. The fix
        is one line at write time.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">What the habitat map does get right</h2>

      <p className="text-gray-700 mb-6">
        Because the two habitat maps sit on an identical grid, and because EUNIS is
        hierarchical so a Level 2 code must sit beneath exactly one Level 1 code, the two can
        be checked against each other for every pixel in Scotland. We compared all
        8,100,000,000 pixel pairs, routed through each product&rsquo;s own value attribute
        table because the two encode classes with different integers.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50"><tr>
            <th className="text-left px-4 py-2 border-b font-semibold">Result</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Pixels</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Share</th>
          </tr></thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Level 2 rolls up to Level 1 correctly</td><td className="px-4 py-2 border-b text-right">882,266,740</td><td className="px-4 py-2 border-b text-right">98.6761%</td></tr>
            <tr><td className="px-4 py-2 border-b">Hierarchy violation</td><td className="px-4 py-2 border-b text-right">11,837,388</td><td className="px-4 py-2 border-b text-right">1.3239%</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-6">
        That 1.32 per cent is 118,374 hectares. Its shape matters more than its size. Only
        four distinct violating class pairs exist, and every one of them is the same marine
        and coastal confusion, where the Level 1 map calls ground marine benthic and the
        Level 2 map calls it coastal dunes, rock cliffs or shingle, or the other way round.
        The intertidal zone is the hardest thing in a product like this to classify, and one
        coherent cause points at something fixable.
      </p>

      <p className="text-gray-700 mb-6">
        <strong>For this question the important result is a null.</strong> The peat class{' '}
        <code className="bg-gray-100 px-1 rounded">Q1</code> is involved in none of the
        violations. No pixel in either raster uses a code absent from its attribute table. No
        pixel is classified in one map but not the other. Away from the coast, the two maps
        agree with each other exactly, and the carbon-relevant classes are clean.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">How much bog there is</h2>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50"><tr>
            <th className="text-left px-4 py-2 border-b font-semibold">EUNIS class</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Hectares</th>
            <th className="text-right px-4 py-2 border-b font-semibold">Share of classified</th>
          </tr></thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Q1, raised and blanket bogs</td><td className="px-4 py-2 border-b text-right">1,330,616</td><td className="px-4 py-2 border-b text-right">14.88%</td></tr>
            <tr><td className="px-4 py-2 border-b">Q2, valley mires, poor fens, transition mires</td><td className="px-4 py-2 border-b text-right">18,808</td><td className="px-4 py-2 border-b text-right">0.21%</td></tr>
            <tr><td className="px-4 py-2 border-b">Q4, base-rich fens and calcareous spring mires</td><td className="px-4 py-2 border-b text-right">under 1</td><td className="px-4 py-2 border-b text-right">0.00%</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-6">
        Roughly one hectare in seven of classified Scotland is raised or blanket bog. Q4
        deserves a footnote of its own. It occupies 84 pixels in the whole country, under a
        single hectare, so the map documents a class that barely exists in it.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">What this adds up to</h2>

      <p className="text-gray-700 mb-6">
        The habitat map is good, and our own hierarchy test mostly demonstrates that. But
        the Act now attaches a duty to an area threshold and expects that duty to engage with
        carbon, and the public record cannot support that calculation from end to end. The
        areas are not published, the geometry does not sum safely, and the raster does not
        declare its own gaps. An adviser who runs the obvious overlay gets a number with no
        warning attached and no way to say how far off it is.
      </p>

      <p className="text-gray-700 mb-6">
        The defects we found in NatureScot&rsquo;s delivery, including the unencoded NoData
        value and a README that gives a Level 1 class code as <code className="bg-gray-100 px-1 rounded">O</code>{' '}
        where the shipped attribute table gives <code className="bg-gray-100 px-1 rounded">OW</code>,
        are written up as reproducible reports in the repository, and we are sending them to
        the publisher.
      </p>

      <h2 className="text-2xl font-bold text-gov-black mt-12 mb-4">Method and scope</h2>

      <p className="text-gray-700 mb-6">
        Every headline in the cadastral half is computed twice, set-based in Python and by
        SPARQL over an assertion graph, by code paths that share nothing, with a gate that
        exits non-zero on disagreement. The habitat comparison is a single co-occurrence over
        all 8.1 billion pixel pairs with no parsing in the path. The pipeline is public.
      </p>

      <p className="text-gray-700 mb-6">
        Scope, stated plainly: no ownership data is used anywhere, because resolving a
        cadastral identifier to a title requires a paid service. Registers of Scotland states
        that roughly 30 per cent of Land Register titles are absent from the parcel dataset
        and that the Land Register is still replacing the General Register of Sasines, so
        every area figure is an area of published parcels and never an area of Scotland. The
        habitat figures are areas of a modelled classification, not of surveyed peat, and
        peat depth, which is what carbon actually depends on, is not in these data at all.
      </p>

      <p className="mb-8">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gov-blue font-medium hover:underline">
          github.com/fabio-rovai/scotland-land-register-ontology
          <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>

      <div className="border-l-4 border-gov-blue bg-gray-50 p-6 mb-8">
        <h3 className="font-semibold text-gov-black mb-2">If you are sizing carbon on a Scottish holding</h3>
        <p className="text-gray-700 mb-3">
          We will run the overlay for a holding you name, with the areas computed both ways
          and the habitat gaps handled explicitly, and tell you the range rather than a single
          number. If the two methods agree on your holding, that is a useful answer too.
        </p>
        <p className="text-gray-700">
          Fabio Rovai, The Tesseract Academy:{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">fabio@thetesseractacademy.com</a>
        </p>
      </div>

      <p className="text-xs text-gray-500">
        Contains public sector information licensed under the Open Government Licence v3.0.
        &copy; Crown copyright. Reproduced with the permission of Registers of Scotland.
        Contains OS data. &copy; Crown copyright and database right 2026. Habitat data
        &copy; NatureScot, created with Space Intelligence.
      </p>
    </div>
  </div>
);
