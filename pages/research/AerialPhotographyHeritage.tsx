import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/computation-ready-aerial-heritage#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/computation-ready-aerial-heritage',
  headline: 'From Digitised to Computable: An Open Standard for Aerial Photography Heritage',
  description:
    'A worked, open-source demonstration that turns a national aerial photography collection from digitised to computable. 292 real frames harvested from the public NCAP Air Photo Finder catalogue, reprojected to WGS84 and validated against the NAPH standard at zero SHACL violations, with a published RiC-O to STAC crosswalk.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  about: {
    '@type': 'Thing',
    name: 'Computation-ready digitisation of aerial photography heritage',
  },
  keywords:
    'aerial photography, heritage, digitisation standard, computation-ready, linked data, NCAP, Historic Environment Scotland, Towards a National Collection, N-RICH, STAC, RiC-O, GeoSPARQL, IIIF, PROV-O, FAIR, CARE, SHACL',
};

const FINDINGS = [
  {
    id: '1',
    name: 'Machine-readable footprint',
    description: 'A WKT polygon is present for 100% of records, in EPSG:3857. Reaching a geographic CRS is a reprojection, not new data.',
  },
  {
    id: '2',
    name: 'ISO-8601 capture date',
    description: 'Every record already carries an ISO-8601 date, with a self-declared precision flag distinguishing day-level from year-level dates.',
  },
  {
    id: '3',
    name: 'Stable identifier',
    description: 'A stable unique identifier is present for 100% of records, ready to be minted into a resolvable URI.',
  },
  {
    id: '4',
    name: 'Archival reference',
    description: 'An ISAD(G) archival reference is present for 86% of records, anchoring each frame to its finding aid.',
  },
  {
    id: '5',
    name: 'Machine-readable rights',
    description: 'Absent from the payload. This is the one genuine baseline gap, and the one that matters most for a collection that licenses its imagery.',
  },
];

export const AerialPhotographyHeritage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open-data capability demonstration &middot; Heritage &amp; Culture
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          From Digitised to Computable: an Open Standard for Aerial Photography Heritage
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Most of the UK's heritage is digitised but not computable. It is scanned, catalogued and on a map, yet a researcher still cannot query it at scale. This is a worked, fully open demonstration of how we close that gap for one collection type done properly, tested against a real national archive.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Real frames</p>
          <p className="text-3xl font-extrabold text-gov-dark">292</p>
          <p className="text-sm text-gov-secondary mt-1">harvested live from the public catalogue</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Substrate present</p>
          <p className="text-3xl font-extrabold text-gov-dark">100%</p>
          <p className="text-sm text-gov-secondary mt-1">already carry a footprint and an ISO date</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Validation</p>
          <p className="text-3xl font-extrabold text-gov-dark">0</p>
          <p className="text-sm text-gov-secondary mt-1">SHACL violations after lift to Baseline</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            For twenty years, heritage funding has been measured in things scanned. By that metric the work is a success. By the metric that now matters it is not finished: a photograph on an interactive map is legible to a human with a browser but not to a machine. A researcher cannot ask a collection of thirty million aerial images to return every frame over a given city between 1943 and 1946, run an image-similarity search, or cross-reference a reconnaissance sortie to another archive, without clicking through by hand. This is the gap the <strong>Towards a National Collection</strong> programme (AHRC / UKRI) and its <strong>N-RICH</strong> work set out to close, and the gap we address for aerial photography specifically.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            We built <strong>NAPH</strong>, a computation-ready digitisation standard for aerial photography heritage. It is synthesis, not invention: it is assembled entirely from existing standards (GeoSPARQL, PROV-O, Dublin Core, IIIF, Records in Contexts), and it defines three tiers (Baseline, Enhanced, Aspirational) that an institution can adopt incrementally without rebuilding what it already has.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">One real frame, made computable</h2>
        <p className="text-gov-secondary leading-relaxed">
          The transformation below is a single real catalogue record going from raw metadata to computation-ready linked data: a stable URI, a WGS84 footprint, a machine-readable date and rights, and IIIF and STAC exports for free. Queryable by space and time, with no lock-in.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aerial-before-after.png" alt="One real aerial frame transformed from a raw catalogue API record into computation-ready NAPH linked data: stable URI, WGS84 GeoSPARQL footprint, ISO date, machine-readable rights." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            Raw catalogue payload on the left, NAPH computation-ready RDF on the right. Validated against the standard at zero errors.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">We measured a real collection, not a hypothetical one</h2>
        <p className="text-gov-secondary leading-relaxed">
          We took the <strong>National Collection of Aerial Photography (NCAP)</strong>, one of the world's largest aerial archives at over thirty million images and part of Historic Environment Scotland, and measured a sample of 300 real records from its public catalogue. Metadata only, read-only, rate-limited, and in good faith. The result is a compliment to the collection: the hard part is already done.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aerial-measured-coverage.png" alt="Measured field coverage across 300 real NCAP records: 100% carry a machine-readable footprint, 100% an ISO-8601 date, 100% a stable identifier, 0% machine-readable rights." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            What the public catalogue already exposes, measured rather than assumed. The computational substrate is already in the data.
          </figcaption>
        </figure>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Field</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What the real data shows</th>
              </tr>
            </thead>
            <tbody>
              {FINDINGS.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}
                >
                  <td className="px-4 py-3 text-gov-blue font-bold">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{c.name}</td>
                  <td className="px-4 py-3 text-gov-secondary">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The expert ground: binding two worlds that never met</h2>
        <p className="text-gov-secondary leading-relaxed">
          The archival community describes these collections with Records in Contexts and PROV-O, capturing custody and provenance but not spatial computability. The geospatial community indexes imagery with STAC and GeoSPARQL, delivering search by space and time but no archival provenance. Nobody had crosswalked the two for historic aerial photography. NAPH publishes that bridge, wrapped in FAIR and CARE, and every term mapped to Records in Contexts was verified against the published RiC-O 1.1 ontology rather than assumed.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aerial-stack.png" alt="NAPH as the bridge between the archival stack (RiC-O, PROV-O) and the geospatial stack (STAC, GeoSPARQL, IIIF), wrapped in FAIR and CARE across three tiers." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            The unoccupied whitespace: archival provenance bound to spatiotemporal computability, for historic aerial photography.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Outcome</h2>
          <p className="text-gov-dark leading-relaxed">
            We harvested 292 real frames spanning 1924 to 1956, from Hong Kong to the Caribbean, reprojected their footprints to WGS84, and validated them against the standard at <strong>zero SHACL violations</strong>. Testing against real holdings also earned its keep: year-only dates in the sample exposed a defect in the standard's own date-precision shape, which we then corrected. The same records export cleanly to a STAC 1.0 catalogue, to GeoJSON and to IIIF, so a collection adopting the standard gains the entire geospatial and viewer ecosystem without bespoke integration.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            The full ontology, the SHACL shapes, the live harvester, the RiC-O crosswalk and an interactive map are published open source as a case study in <strong>Open Ontologies</strong>, our open data-validation platform.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"Computation-readiness for heritage is not a request to start over. The substrate is usually already in the data. The work is a thin, automatable layer: reproject the geometry, mint a stable URI, attach machine-readable rights. Do that, and twenty years of digitisation becomes twenty years of computable research."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Explore the open-source case study</p>
          <p className="text-sm text-gov-secondary mt-1">Standard, ontology, SHACL shapes, harvester, STAC and RiC-O crosswalk on GitHub. MIT + CC BY 4.0.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/heritage-aerial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors"
          >
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://airphotofinder.ncap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors"
          >
            NCAP Air Photo Finder
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </article>
  );
};
