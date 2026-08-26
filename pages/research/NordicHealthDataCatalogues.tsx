import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ConformanceChart, ThemeBindingChart, SquattedThemeChart, FindataLanguageChart } from '../../components/HdcoCharts';

const REPO = 'https://github.com/fabio-rovai/health-dataset-catalogue-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/nordic-health-data-catalogues#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/nordic-health-data-catalogues',
  headline:
    'Nordic health dataset catalogues measured against HealthDCAT-AP Release 7 | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and a reproducible census of Nordic health dataset descriptions, built on 25 August 2026 from the data.europa.eu SPARQL endpoint and the Findata Aineistokatalogi public API. Across the eleven Nordic national catalogues harvested by data.europa.eu there are 2,811 dataset descriptions carrying the EU health theme, and none satisfies all eight properties HealthDCAT-AP Release 7 makes mandatory on dcat:Dataset. Three of the eight are present on exactly zero. Finland contributes 1,146 themed descriptions and not one uses the EU data theme authority vocabulary. 1,238 datasets across the endpoint carry one of 22 IRIs minted inside the EU authority namespace that the authority never defined. Every headline computed two independent ways.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-25',
  dateModified: '2026-08-26',
  about: { '@type': 'Dataset', name: 'Health Dataset Catalogue Ontology', url: REPO },
  keywords:
    'European Health Data Space, EHDS, HealthDCAT-AP, DCAT-AP, health data access body, secondary use of health data, Findata, Nordic health data, VALO, data.europa.eu, dataset catalogue, metadata quality, SHACL, OWL 2 ontology, SKOS, register assurance, catalogue assurance, cross-border health data discovery',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/nordic-health-data-catalogues#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many Nordic health dataset descriptions conform to HealthDCAT-AP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None. On 25 August 2026 the eleven Nordic national catalogues harvested by data.europa.eu held 2,811 dataset descriptions carrying the EU health theme. Not one of them satisfies all eight properties that HealthDCAT-AP Release 7 makes mandatory on dcat:Dataset in its public layer. Three of the eight, healthdcatap:hdab, healthdcatap:healthCategory and healthdcatap:hasStructuredData, are present on exactly zero descriptions across the entire region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which properties does HealthDCAT-AP Release 7 make mandatory on a dataset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight in the public layer: dct:accessRights, dct:identifier, dcat:distribution, dcat:theme, dcatap:applicableLegislation, healthdcatap:hdab, healthdcatap:healthCategory and healthdcatap:hasStructuredData. The restricted layer mandates the same eight. The non-public layer mandates twelve, adding dcat:contactPoint, dcat:keyword, dct:type and dct:provenance. dct:title and dct:description do not appear because HealthDCAT-AP inherits them from DCAT-AP rather than restating them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a European health data search return no Finnish datasets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Finland's national portal contributes 2,259 dataset descriptions to data.europa.eu and 1,146 of them carry a dcat:theme. Not one of those values comes from the European Union data theme authority table; every one is a local CKAN group UUID under avoindata.suomi.fi. Finland is the only one of the eleven Nordic catalogues in this position. A European filter on the health theme therefore returns zero Finnish datasets, while avoindata.fi's own search returns 57 results for health. The data is published and indexed domestically and invisible on the European route.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you tell whether a dcat:theme value is really in the EU authority vocabulary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not by HTTP status. The authority host answers 200 for any IRI inside the data-theme namespace. For a term it has never defined it returns a well formed RDF document of 170 bytes containing no concept at all, where a real term such as HEAL returns 16,063 bytes. Membership can only be decided by parsing the response body. Across the whole endpoint 36 distinct IRIs are in use inside that namespace and the authority defines 14 of them, with 1,238 datasets carrying one of the other 22.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the largest source of undefined EU data theme values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The literal string undefined. 806 datasets carry http://publications.europa.eu/resource/authority/data-theme/undefined as a theme: 647 from the Moldova government open data portal, 157 from the Zagreb city portal and two from the Czech national catalogue. A further 237 datasets from the London Datastore carry data-theme/ENV, where the authority defines ENVI.',
      },
    },
    {
      '@type': 'Question',
      name: 'How good is the Finnish secondary use health data catalogue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Findata's Aineistokatalogi holds 2,835 dataset descriptions and 89,368 instance variable descriptions, which is finer grained than anything in the Nordic DCAT layer. Only 2.01 per cent of those variables lack a description, so the metadata is substantively complete. 84.74 per cent of them carry no English label, and only 7.51 per cent of the dataset descriptions do. All 2,948 of its concept tags report a null concept scheme, so 508 well labelled concepts are bound to no published vocabulary. The catalogue publishes nothing into the DCAT layer at all.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do the Nordic health data strategy documents address catalogue metadata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not by name. Sitra study 255 of February 2026, proposing a Finnish Health Data Space, names FHIR, openEHR and OMOP and cites Findata regulation 1/2021 on dataset descriptions, and its text mentions DCAT zero times. The Nature Medicine paper of 2026 by Andreassen and colleagues on a Nordic AI-Health infrastructure commits to a Nordic Common Data Model with rigorous schema auditing and FAIR-compliant metadata, and says the project must treat EHDS compliance as a primary design constraint rather than a retrofit, but does not name DCAT, DCAT-AP or HealthDCAT-AP either. Both treat data standardisation as a question about what is inside a dataset. The discovery layer, which decides whether anyone outside the country can find the dataset, is where the measurement reported here finds zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the European Health Data Space start to apply to secondary use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Regulation was published in the Official Journal on 5 March 2025 and entered into force on 26 March 2025. The European Commission's own page states that March 2027 is the deadline for the Commission to adopt key implementing acts, that in March 2029 the rules on secondary use start to apply for most data categories including data from electronic health records, and that March 2031 covers the remaining categories including genomic data. We could not read the Official Journal text directly: EUR-Lex returned HTTP 202 with an empty body on every route tried, so those dates rest on the Commission summary page rather than on primary text.",
      },
    },
  ],
};

export const NordicHealthDataCatalogues: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:underline">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-gov-dark font-serif leading-tight">
        Nordic health dataset catalogues measured against HealthDCAT-AP Release 7
      </h1>
      <p className="text-sm text-gov-secondary">25 August 2026</p>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The European Health Data Space obliges health data access bodies to publish a machine readable national
        dataset catalogue, and the European Commission publishes HealthDCAT-AP as the profile those descriptions
        should follow. On 25 August 2026 we asked what the Nordic region actually publishes today. Across the
        eleven Nordic national catalogues harvested by data.europa.eu there are 2,811 dataset descriptions
        carrying the EU health theme, and not one of them satisfies all eight properties Release 7 makes
        mandatory. Three of the eight are present on exactly zero. Everything below comes from keyless public
        sources, every headline is computed two independent ways, and the pipeline fails its own build if the two
        ever disagree.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>2,811 health themed dataset descriptions across eleven Nordic national catalogues. Zero satisfy all eight mandatory HealthDCAT-AP Release 7 properties on <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:Dataset</code>.</li>
          <li>The three health specific mandatory properties, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">healthdcatap:hdab</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">healthdcatap:healthCategory</code> and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">healthdcatap:hasStructuredData</code>, are present on exactly none of the 2,811.</li>
          <li>The generic layer is in good order. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:title</code> and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:description</code> are on all 2,811 and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:publisher</code> on 2,785. The gap is confined to the layer the Regulation adds.</li>
          <li>Finland contributes 1,146 themed descriptions to data.europa.eu and not one uses the EU data theme authority vocabulary, so a European health filter returns zero Finnish datasets while avoindata.fi returns 57.</li>
          <li>36 distinct IRIs are in use inside the EU data theme authority namespace and the authority defines 14. 1,238 datasets carry one of the other 22, including 806 on the literal string <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">data-theme/undefined</code>.</li>
          <li>The authority host answers HTTP 200 for any IRI in its namespace and returns an empty 170 byte graph for terms it has never defined, so a status code check cannot detect any of this.</li>
          <li>Findata&apos;s Aineistokatalogi holds 89,368 variable descriptions, the most detailed health metadata in the region, of which 84.74 per cent carry no English label. It publishes nothing into the DCAT layer.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why now, and why the Nordics</h2>
      <p className="text-gov-dark leading-relaxed">
        The Nordic Council of Ministers funds VALO, a project coordinated by Sitra on value from Nordic health
        data. Its full members are the Danish Health Data Authority, Sitra with THL, the Finnish Ministry of
        Social Affairs and Health and Findata, the Icelandic Ministry of Health with the Directorate of Health and
        the University of Iceland, the Norwegian Institute of Public Health, and the Swedish Ministry of Health
        and Social Affairs with the National Board of Health and Welfare and the Swedish eHealth Agency. Estonia
        and Lithuania are observers. Phase one ran from February 2024 to October 2025 and VALO2 runs to October
        2026. Two of its stated goals are preparing jointly for the European Health Data Space and maintaining
        Nordic leadership in the secondary use of health data.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is a well resourced, well governed, five country programme with exactly the right people in the room.
        It is also the reason the finding matters. If the region that leads on secondary use of health data
        publishes nothing today that would pass the profile, the gap is not a Nordic failing. It is a measure of
        how far the profile sits from the installed base everywhere, and the Nordics are simply the place where
        someone is far enough along to measure it against.
      </p>
      <p className="text-gov-dark leading-relaxed">
        On timing. The Regulation entered into force on 26 March 2025. The European Commission&apos;s own page
        states that the rules on secondary use start to apply for most data categories in March 2029, with the
        remaining categories including genomic data in March 2031, and that the Commission&apos;s deadline for
        adopting key implementing acts is March 2027. We could not verify those dates against the Official
        Journal text, because EUR-Lex answered HTTP 202 with a zero length body on every route we tried. Anyone
        citing chapter or article numbers should read the primary text first. We are not.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured, and from where</h2>
      <p className="text-gov-dark leading-relaxed">
        Two public surfaces, both keyless, both pinned to 25 August 2026. The data.europa.eu SPARQL endpoint,
        which harvests the national open data portals of the Member States and held 1,908,938 instances of
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:Dataset</code> at the time of the run. And the
        Findata Aineistokatalogi public API, which returns the whole Finnish social and health data catalogue,
        instance variables inlined, in a single response of roughly 116 MB.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The requirement set is not typed by hand anywhere in this work. The pipeline fetches the official
        HealthDCAT-AP Release 7 SHACL shapes from the European Commission&apos;s GitLab at code.europa.eu, parses
        them, and generates the requirement registry the measurement runs against. A test fails the build if the
        committed registry drifts from what the generator produces, so a future release of the profile shows up as
        a diff rather than as a silent divergence between our claims and the standard.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That matters more than it sounds, because the profile has moved and its own signposting has not kept up.
        HealthDCAT-AP used to live at healthdcat-ap.github.io. That page was decommissioned on 22 September 2025
        and its README still directs readers to Release 5 as the current and authoritative version. Release 5 is
        not current. Release 6 was deprecated on 24 April 2026 and Release 7 is the live one. Several national and
        institutional implementations on GitHub still point at the decommissioned location.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the gap is entirely in the health layer</h2>
      <p className="text-gov-dark leading-relaxed">
        HealthDCAT-AP Release 7 makes eight properties mandatory on
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:Dataset</code> in its public layer. Here is what the
        Nordic region publishes against them.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Mandatory property</th>
              <th className="text-right p-3 font-semibold text-gov-dark border-b border-gov-border">Present</th>
              <th className="text-right p-3 font-semibold text-gov-dark border-b border-gov-border">Share of 2,811</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border"><code>dcat:theme</code></td><td className="p-3 text-right border-b border-gov-border">2,811</td><td className="p-3 text-right border-b border-gov-border">100.00%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>dcat:distribution</code></td><td className="p-3 text-right border-b border-gov-border">2,582</td><td className="p-3 text-right border-b border-gov-border">91.85%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>dct:accessRights</code></td><td className="p-3 text-right border-b border-gov-border">2,338</td><td className="p-3 text-right border-b border-gov-border">83.17%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>dct:identifier</code></td><td className="p-3 text-right border-b border-gov-border">1,761</td><td className="p-3 text-right border-b border-gov-border">62.65%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>dcatap:applicableLegislation</code></td><td className="p-3 text-right border-b border-gov-border">21</td><td className="p-3 text-right border-b border-gov-border">0.75%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>healthdcatap:hdab</code></td><td className="p-3 text-right border-b border-gov-border">0</td><td className="p-3 text-right border-b border-gov-border">0.00%</td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>healthdcatap:healthCategory</code></td><td className="p-3 text-right border-b border-gov-border">0</td><td className="p-3 text-right border-b border-gov-border">0.00%</td></tr>
            <tr><td className="p-3"><code>healthdcatap:hasStructuredData</code></td><td className="p-3 text-right">0</td><td className="p-3 text-right">0.00%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        One line in that table is not a finding. The
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:theme</code> figure is 100 per cent by construction,
        because descriptions were selected by carrying the health theme in the first place. It is in the table so
        the table is complete.
      </p>
      <ConformanceChart />
      <p className="text-gov-dark leading-relaxed">
        The useful shape here is the contrast with the generic layer. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:title</code> is
        on all 2,811. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:description</code> is on all 2,811.
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:publisher</code> is on 2,785.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is narrow and specific. Three properties sit at zero
        across five countries and eleven catalogues, which means no Nordic catalogue can currently express who the
        responsible health data access body is, what category of health data a dataset holds, or whether it has
        structured data at variable level. Those fields do not exist in the systems doing the publishing, so closing that gap is a procurement and system change question rather than a data entry question. That is worth knowing four years before the obligation bites
        rather than one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: Finland is absent from European health discovery</h2>
      <p className="text-gov-dark leading-relaxed">
        Finland&apos;s national portal contributes 2,259 dataset descriptions to data.europa.eu. 1,146 of them
        carry a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:theme</code>. Not one of those values is drawn
        from the European Union data theme authority table. Every one is a local CKAN group UUID under
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">avoindata.suomi.fi/data/group/</code>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Finland is alone in this among the eleven catalogues we measured. data.norge.no binds 1,547 of 1,591
        themed descriptions to the authority. Datavejviser binds 3,460 of 3,461. dataportal.se binds 18,635 of
        18,701. The Swedish INSPIRE node binds all 178 of its 178. The Icelandic geoportal binds 383 of 422. Even
        the weakest of the others, Geonorge at 112 of 347, is not at zero.
      </p>
      <ThemeBindingChart />
      <p className="text-gov-dark leading-relaxed">
        The consequence is immediate and it is the whole point of the exercise. A European health filter returns
        zero Finnish datasets. Finland has them, and avoindata.fi&apos;s own search returns 57 results for health
        against the same corpus. The data is published, it is indexed at home, and it is invisible on the route
        the European Health Data Space is being built on. This is a one property fix in a harvest mapping and it
        is the highest leverage single change available to any organisation in this study.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Finland is strong on the axes this does not measure. Kanta aggregates primary and secondary care and social care data, every care
        provider public and private is mandated to deposit into it, Kanta PHR lets individuals contribute their own
        measurements, and the European electronic health record exchange format is on its roadmap. Findata has run
        a working permit process and a secure processing environment for years. Measured on infrastructure, on
        legal machinery and on the willingness of providers to participate, Finland is ahead of most Member States
        and the comparison is not close.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This finding is about one specific obligation on one specific axis: the machine readable dataset
        catalogue through which someone in another Member State discovers that a Finnish dataset exists at all.
        Having the data, having the permit process and having the exchange format are necessary and none of them
        makes a dataset findable. On that axis the measured value today is zero, and the distance between zero and
        a good score is a theme mapping rather than a programme. Against everything Finland has already built, it is the
        cheapest item remaining.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the EU authority namespace accepts terms it never defined</h2>
      <p className="text-gov-dark leading-relaxed">
        DCAT-AP requires <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcat:theme</code> values to come from the
        EU Data Theme authority table. We asked the endpoint which IRIs are actually in use inside that namespace,
        and then dereferenced every one of them. 36 distinct IRIs are in use. The authority defines 14. The other
        22 were minted by publishers inside the European Union&apos;s own namespace, and 1,238 datasets carry one.
      </p>
      <SquattedThemeChart />
      <p className="text-gov-dark leading-relaxed">
        806 datasets carry the literal string <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">undefined</code> as a
        theme. That is a serialiser writing a JavaScript value into a public authority namespace, and it has been
        sitting there long enough to be harvested and republished.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The reason nobody has caught this generalises well beyond themes. The authority host answers <strong>HTTP 200 for any IRI in the namespace</strong>. For a term it has never
        defined it returns a well formed RDF document of 170 bytes containing no concept. For a real term such as
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">HEAL</code> it returns 16,063 bytes. A validator checking
        that a theme value resolves sees success on a term that does not exist. Membership can only be decided by
        parsing the body and looking for a concept, which is what our pipeline does and what a test in the
        repository pins so that a future rewrite cannot quietly reintroduce the status code check.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The health slice of this is three datasets. It is a small finding for health and a large one for the endpoint, and it is reported as both. What it does mean for health is that a theme based count of health datasets is a floor and not a census, which is why the 2,811
        figure above is described as one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the richest health metadata in the region is the least reachable</h2>
      <p className="text-gov-dark leading-relaxed">
        Findata is the Finnish social and health data permit authority. Its Aineistokatalogi holds 2,835 dataset
        descriptions and <strong>89,368 instance variable descriptions</strong>, each with a distinct identifier.
        That is finer grained than anything in the Nordic DCAT layer by a wide margin, and none of it is in that
        layer, so none of it appears anywhere in finding one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The metadata is substantively complete. Only 2.01 per cent of the 89,368 variables lack a description. It is also almost entirely closed to anyone who does
        not read Finnish: <strong>84.74 per cent of the variables carry no English label</strong>, and only 7.51
        per cent of the dataset descriptions do. Cross border discovery is the stated purpose of the Regulation,
        and a description that is complete domestically and monolingual is not a complete description for that purpose.
      </p>
      <FindataLanguageChart />
      <p className="text-gov-dark leading-relaxed">
        A second gap compounds it. All 2,948 concept tags in the catalogue, spread across 2,059 descriptions,
        report a null concept scheme. There are 508 distinct concepts and 477 of them have English labels. They
        are good tags bound to nothing, so they cannot be mapped to the EU data theme vocabulary or to any other
        published vocabulary, and the English labels that do exist cannot be reached through them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The asymmetry is the interesting part. Mapped onto the profile, Findata could source six of the eight
        mandatory properties from fields it already populates, including
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">healthdcatap:hasStructuredData</code>, which its 89,368
        variable descriptions answer better than any other catalogue in the region could. Exactly two have no
        source field at all: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcatap:applicableLegislation</code> and
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">healthdcatap:hdab</code>, the identifier of the health data
        access body, which in this case is Findata itself. The organisation best placed in the region to satisfy
        the hardest requirement in the profile is currently absent from the measurement entirely.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The layer the Finnish national proposal does not name</h2>
      <p className="text-gov-dark leading-relaxed">
        In February 2026 Sitra published study 255, <em>Terveystiedon tulevaisuus tekoälyn aikakaudella</em>, by
        Olli Kallioniemi and Kimmo Porkka, proposing a national Finnish Health Data Space on a one, one, one model:
        FHDS-Tieto as a single national data infrastructure, FHDS-Lupa as a single coordinating authorisation
        authority, and FHDS-TKI as a single national collaboration body. Its diagnosis is blunt. In its own English summary, &ldquo;Finland&apos;s fragmented data production and
        governance, along with regional data silos, hinder the full-scale utilisation of AI, the formation of a
        comprehensive national overview, and compatibility with the EHDS.&rdquo;
      </p>
      <p className="text-gov-dark leading-relaxed">
        Our finding two is a measured instance of exactly that sentence. Where the report asserts a compatibility
        gap, the endpoint shows one: 1,146 themed Finnish descriptions, zero bound to the vocabulary a European
        health filter reads.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The report is thorough on data content standards. It names HL7 FHIR, openEHR and the OMOP
        Common Data Model repeatedly, it puts the FAIR principles at the centre of what FHDS-Tieto is for, and it
        cites Findata&apos;s own binding regulation 1/2021 on the content, concepts and structures of dataset
        descriptions, noting that standardisation of metadata is essential for findability. Those are the right instruments for the problem they address.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The extracted text of the report mentions DCAT zero times and HealthDCAT-AP zero times. FHIR, openEHR and
        OMOP describe what is inside a dataset. HealthDCAT-AP describes the dataset so that someone in another
        Member State can find it in the first place, and it is the profile the European Commission publishes for
        that purpose. A national programme can get every content model right and still be undiscoverable, which is
        the position finding two measures. This is an observation about the document&apos;s text. Figures in the report are images, we read the extracted text, and the omission may be deliberate scoping.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Finland is already paying to close this gap. On 20 May 2026 Business Finland
        announced funding for <em>Roadmap to Finnish Health Data Space</em>, a joint project with a budget of
        7.7 million euros of which Business Finland funds 4.6 million. It is the first joint project of the
        Finnish wellbeing regions to be funded. The participants are HUS, the Pirkanmaa wellbeing region, the
        University of Helsinki, Orion, GE Healthcare Finland, Productivity Leap and Biocomputing Platforms, and
        the announcement is explicit that the work is driven by what the European Health Data Space Regulation
        requires.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Seven named organisations, a four year public investment and a regulation that starts to bite in 2029 are
        the reason a measurement like this one is worth taking now rather than in 2028. The number that matters to
        that project is not our headline. It is the per record list underneath it, which says exactly which
        descriptions fail which requirement, and which of those requirements the current schema cannot source at
        all. The first is a data entry problem. The second is a system design decision, and it is much cheaper to
        take at the start of a roadmap than at the end of one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Finland already has a binding national regulation on dataset
        descriptions, a permit authority that operates a catalogue, and, in that catalogue, 89,368 variable
        descriptions that would answer the single hardest requirement in the European profile. What is missing
        between those assets and European discoverability is a mapping and a theme binding, both of which are
        small pieces of work compared with everything else the FHDS proposal contemplates.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, and why it is worth borrowing</h2>
      <p className="text-gov-dark leading-relaxed">
        The transferable part of this is not the Nordic numbers. It is the recording discipline, and it applies to
        any register that republishes another register&apos;s identifiers or another profile&apos;s properties.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Record absence, do not infer it.</strong> When a catalogue does not publish a required property,
        that silence is a position the catalogue has taken. We emit it as a dated observation with a verdict and a
        reason drawn from a controlled scheme, because absent, present but bound to no vocabulary, and present but
        injected by an aggregator are three different failures with three different remedies. A bare count of
        missing fields collapses them and destroys the remedy.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Separate what the publisher said from what the aggregator computed.</strong> This one cost us a
        finding. An early run measured <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dqv:hasQualityAnnotation</code> at
        98.40 per cent and we were briefly delighted. The property is present, in named graphs under
        <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">data.europa.eu/88u/metrics/</code>, which is where the portal
        stores the output of its own metadata quality assessment. Those triples were computed downstream and no
        publisher supplied any of them. Excluding the metrics graphs moved the figure to 0.96 per cent, a factor
        of a hundred. Every measurement here now excludes them, and the ontology carries a provenance observation
        type that exists solely because of that mistake.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Compute every headline twice.</strong> Seventeen figures in this study are computed set based in
        Python and again by SPARQL over the emitted graph, sharing no code path, and the build fails if any pair
        disagrees. All seventeen agree in the published run. They did not on the first attempt: one cross check
        summed across two distinct defect classes and reported 4,186 where the true figure is 1,238. Doing the
        work twice is the only reason we know the number we published is the right one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Do not trust a status code as evidence of meaning.</strong> Finding three exists because we
        parsed bodies. An earlier version of the same check read status codes, got 200 for every term including
        the invented ones, and would have reported zero squatted IRIs with complete confidence.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We also got the requirement set itself wrong on the first pass. A regular expression over the official
        SHACL file reported eight mandatory properties, five of which are not mandatory at all, because SHACL
        property shapes are nested blank nodes that a line oriented regex cannot bracket. An entire conformance
        table was computed against the wrong list before parsing the shapes properly gave the right one. All four
        of these mistakes are written up in the repository&apos;s build report rather than quietly fixed, because
        a method is only worth borrowing if you can see where it broke.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art</h2>
      <p className="text-gov-dark leading-relaxed">
        HealthDCAT-AP was designed under the HealthData@EU pilot, and the design account is published by its
        authors: Pascal Derycke, Beatriz J. Barros, Nienke M. Schutte, Charles-Andrew Vande Catsyne and Martina
        Bargeman Fonseca of Sciensano, &ldquo;Designing DCAT-AP Extensions for Common European Data Spaces: The
        EHDS HealthDCAT-AP Case Study&rdquo;, presented at the NeXt-generation Data Governance workshop at
        SEMANTiCS 2025 in Vienna and published in CEUR-WS Volume 4064. It sets out the requirements gathering, the
        stakeholder working groups, the multi country sandbox validation against real world examples and the
        public consultation. It is the right citation for what the profile is and why it has the shape it has, and
        anyone reading our numbers should read it first.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Our claim is narrower and does not overlap theirs. They designed the profile and validated it against
        curated examples. We measured the installed base of live national catalogues against the shipped Release
        7. Neither piece of work answers the other&apos;s question.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A second piece of prior art sits alongside this one and shares an author with the Finnish proposal. Ole A.
        Andreassen and twenty one colleagues, with Olli Kallioniemi among them, published &ldquo;An AI-Health
        infrastructure for the Nordic region: technical foundations, data assets, and a roadmap for
        deployment&rdquo; in <em>Nature Medicine</em> in 2026 (doi 10.1038/s41591-026-04575-4). It proposes a
        Nordic AI-Health platform over the region&apos;s linked registries and biobanks, a Nordic Common Data
        Model built on OMOP, federated learning across national trusted research environments, and an integrated
        high performance computing layer. It cites the Sitra report as reference 15. We read the SSRN preprint
        rather than the published version, so the two may differ in detail.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Its roadmap is the most useful thing here, because it argues our timing better than we would. Step five
        says the project must &ldquo;treat EHDS compliance as a primary design constraint rather than a
        retrofit&rdquo;. Step two commits to a common data model &ldquo;supported by rigorous schema auditing and
        FAIR-compliant metadata&rdquo;, and the body promises that datasets will undergo &ldquo;schema auditing,
        ontology mapping, and controlled-access onboarding&rdquo;. We agree with all of it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The observation is the same one the Finnish proposal invites. The paper names FAIR,
        whose first letter is findability, and it names OMOP, ICD, imaging and pathology standards, all of which
        describe what is inside a dataset. It does not name DCAT, DCAT-AP or HealthDCAT-AP, which is the profile
        that decides whether anyone outside your own country can find the dataset at all. Two of the most
        considered documents produced in this region this year both treat data standardisation as a content
        problem, and the discovery layer is where the measurement above finds zero. If EHDS compliance is to be a
        primary design constraint rather than a retrofit, the catalogue metadata is part of what that constrains,
        and it is the part currently at zero across all five countries.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The European Commission also publishes an official HealthDCAT-AP validator, built on the Interoperability
        Test Bed. It is the right tool for checking a single record before submission and we have not
        reimplemented it. The shapes in our repository do the opposite job: they read a graph of dated
        observations about many catalogues at once and produce a report that can be handed to the body able to fix
        it. If you are a publisher preparing one record, use the Commission&apos;s validator.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artifact</h2>
      <p className="text-gov-dark leading-relaxed">
        Everything above is reproducible from a public repository: an OWL 2 core, a requirement registry generated
        from the official Release 7 shapes, a SKOS registry in which each scheme declares its own conformance
        rules as data, three gated SHACL layers with one shape per defect class, a resumable pipeline, six
        verified SPARQL queries and offline tests with CI. The graph is 221,430 triples, emitted as Turtle text in
        0.05 seconds and parsed back in 3.35 seconds to prove it is well formed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        No harvested payload is redistributed. Findata publishes no reuse licence for the Aineistokatalogi
        metadata, so redistributing it would assume a permission nobody granted. The harvester regenerates it in
        one call.
      </p>
      <p>
        <a href={REPO} className="inline-flex items-center gap-2 text-gov-blue hover:underline font-medium" target="_blank" rel="noopener noreferrer">
          github.com/fabio-rovai/health-dataset-catalogue-ontology <ExternalLink className="w-4 h-4" />
        </a>
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark font-serif">If you run one of these catalogues</h2>
        <p className="text-gov-dark leading-relaxed">
          Every aggregate in this study resolves to named records. We can send you the individual dataset
          descriptions behind any figure above for your own catalogue, as a list you can open, along with the
          query that produced it so you can rerun it yourself whenever you like.
        </p>
        <p className="text-gov-dark leading-relaxed">
          A bounded first engagement is a two week conformance baseline for a single catalogue:
          your descriptions measured against HealthDCAT-AP Release 7 property by property, the per record evidence
          rows, a mapping of which mandatory properties your current schema can source and which have no source
          field at all, and a written note on what closing each gap actually requires. Fixed scope, fixed price,
          and the pipeline handed over so the baseline can be rerun without us.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Corrections are welcome and are applied on this page rather than silently. If a number here is wrong,
          tell us, and the correction and its cause will stay visible alongside it.
        </p>
        <p className="text-gov-dark leading-relaxed">
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline font-medium">
            fabio@thetesseractacademy.com
          </a>
        </p>
      </div>
    </section>
  </div>
);
