import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/biosurveillance-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/biosurveillance-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/biosurveillance-register-ontology',
  headline:
    'The missing pathogen crosswalk: an open ontology for One Health biosurveillance registers | Tesseract Academy',
  description:
    "An open OWL 2, SKOS and SHACL ontology and a complete census of the Food Standards Agency's open food alert register, all 1,348 alerts published from 9 January 2018 to 10 August 2026, taken on 18 August 2026 under the Open Government Licence. The register maintains 27 allergen concepts and 5 pathogen concepts, the pathogen scheme last modified on 4 September 2017. Of 234 alerts naming a pathogen, 57 name it in prose with no concept to join on. Pathogen coding was zero across all 188 alerts issued in 2018 and has never exceeded 19.7 per cent in any year, while allergen coding has run between 47.7 and 64.6 per cent every year without exception. Four pathogens named in the register have no concept available to code them: Bacillus cereus, hepatitis A, Cronobacter sakazakii and norovirus. No pathogen concept carries any external alignment, and all five denote at genus or species level while genomic food chain surveillance identifies isolates at serovar and sequence type. The study ships the NCBI Taxonomy crosswalk the register lacks, resolved two independent ways with zero disagreements, and every headline is computed twice with a build that fails if the two paths differ.",
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-18',
  dateModified: '2026-08-18',
  about: {
    '@type': 'Dataset',
    name: 'Biosurveillance Register Integrity Ontology',
    url: REPO,
  },
  keywords:
    'biosurveillance, One Health, food safety surveillance, FSA food alerts, pathogen vocabulary, NCBI Taxonomy crosswalk, genomic surveillance, PATH-SAFE, National Biosurveillance Network, register assurance, SKOS concept scheme, SHACL, OWL 2 ontology, foodborne pathogen coding, Listeria, Salmonella serovar, Cronobacter sakazakii, norovirus, food alert data quality, UK Biological Security Strategy',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/biosurveillance-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the FSA food alert register record which pathogen an alert is about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually not in a machine-readable way. Across the complete register of 1,348 alerts published between 9 January 2018 and 10 August 2026, 234 alerts name a pathogen somewhere in the title or a risk statement, and 177 carry a coded pathogen concept. The remaining 57 alerts, which is 24.4 per cent of all pathogen alerts, name the organism in free text only. In 2018 no alert at all carried a coded pathogen, including the first record in the register, which is titled "James Hall recalls BBQ Pulled Pork because it may contain Salmonella".',
      },
    },
    {
      '@type': 'Question',
      name: 'How many pathogens are in the FSA pathogen concept scheme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five. They are Salmonella spp, Listeria monocytogenes, Escherichia coli, Campylobacter spp and Clostridium botulinum. The scheme declares dct:modified of 4 September 2017 and owl:versionInfo 1. By comparison the allergen scheme in the same register carries 27 concepts, granular enough to distinguish macadamia from pecan and gluten-free oats from oats, and it is applied to between 47.7 and 64.6 per cent of all alerts in every year of the register without exception.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which foodborne pathogens cannot be coded in the FSA register?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four organisms appear by name in the register with no concept available to code them. Bacillus cereus appears in 8 alerts, hepatitis A virus in 3, Cronobacter sakazakii in 2 and norovirus in 2. Norovirus and hepatitis A are the two dominant foodborne viruses. Cronobacter sakazakii is the organism associated with powdered infant formula. None can be coded, because the scheme holds no concept for them and has not been revised since 2017.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a food safety alert be linked to a genomic surveillance record?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not on the hazard, as the register is currently published. Genomic food chain surveillance identifies isolates at serovar and sequence type level. All five FSA pathogen concepts denote at genus or species level, so a record coded "Salmonella spp" cannot be joined to a record about Salmonella Typhimurium ST34, because the register never captured which Salmonella it meant. Adding an external mapping fixes the alignment problem and does not fix the resolution problem; only recording the serovar does that, and that is a decision about what the register captures rather than about vocabulary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is register assurance for biosurveillance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is the practice of auditing what a surveillance register publishes against the rules its own identifiers declare, and against the other registers that are supposed to carry the same identity. For biosurveillance it asks one operational question: can a record in this register actually be joined across the One Health boundary to human health, animal health, plant health or environmental surveillance? The method separates three distinct failure modes, because they have different remedies: the hazard is not coded at all, the hazard is coded at too coarse a taxonomic rank, or the hazard is coded but carries no mapping into the target vocabulary.',
      },
    },
  ],
};

export const BiosurveillanceRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The missing pathogen crosswalk: an open ontology for One Health biosurveillance registers
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        One Health is an integration claim. It says that food safety, human health, animal health, plant health and environmental surveillance are one system rather than five. Integration claims can be tested, and the test is not a policy question. It is whether a record in one register can actually be joined to a record in another. On 18 August 2026 we took the Food Standards Agency&apos;s complete open food alert register, all 1,348 alerts published since January 2018, and asked that question of every one of them. This is a case study in register assurance applied to biosurveillance, and everything below is reproducible from public data under the Open Government Licence.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>The register can tell you which tree nut, but not which <em>Salmonella</em>. It maintains 27 allergen concepts and 5 pathogen concepts.</li>
          <li>The pathogen concept scheme declares its last modification as 4 September 2017 and its version as 1.</li>
          <li>Of 234 alerts naming a pathogen, 57 name it in prose with no concept to join on. That is 24.4 per cent of every pathogen alert in the register.</li>
          <li>Pathogen coding was zero across all 188 alerts issued in 2018 and has never exceeded 19.7 per cent in any year. Allergen coding has run between 47.7 and 64.6 per cent every year without exception.</li>
          <li>Four organisms appear in the register with no concept available to code them: <em>Bacillus cereus</em>, hepatitis A, <em>Cronobacter sakazakii</em> and norovirus.</li>
          <li>No pathogen concept carries any external mapping, and all five denote at genus or species level while genomic surveillance identifies isolates at serovar and sequence type.</li>
          <li>We built and published the NCBI Taxonomy crosswalk the register lacks. It is about two dozen triples.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured, and how we know it is complete</h2>
      <p className="text-gov-dark leading-relaxed">
        The FSA publishes its food alerts as open linked data at <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">data.food.gov.uk/food-alerts</code>, keyless, under the Open Government Licence version 3.0, in JSON, CSV, GeoJSON, HTML, RDF/XML and Turtle. It is a genuinely good piece of public infrastructure, and none of what follows would be measurable without it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The API has no paging parameter. A request with a limit above the register size returns everything, which could equally mean a silent server-side cap. We settled it with a cap test: fetch the register sorted ascending by creation date, fetch it again sorted descending, and compare the sets of alert identifiers. A truncating server returns different subsets under opposite sort orders. These three sets are identical, so 1,348 is a census and not a sample. One limit must be stated plainly: the API serves nothing created before 9 January 2018, although the FSA website carries older alerts, so every figure here describes the machine-readable register from that date onward and says nothing about the period before it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: two vocabularies, two levels of care</h2>
      <p className="text-gov-dark leading-relaxed">
        The same register carries an allergen concept scheme and a pathogen concept scheme. The allergen scheme has 27 members. It goes well beyond the fourteen regulated allergen groups, breaking out almond, brazil, cashew, hazelnut, macadamia, pecan, pistachio and walnut individually, separating wheat, rye, barley and oats, and carrying a distinct concept for gluten-free oats. It is applied consistently across the entire eight and a half year span.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The pathogen scheme has 5 members: <em>Salmonella</em> spp, <em>Listeria monocytogenes</em>, <em>Escherichia coli</em>, <em>Campylobacter</em> spp and <em>Clostridium botulinum</em>. Its scheme node declares <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dct:modified</code> of 4 September 2017 and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">owl:versionInfo</code> 1.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is not the contrast between a careless register and a careful one. It is the contrast between one part of a register that was resourced and maintained, and another part that was built in 2017 and left. That distinction matters, because it points at the remedy: this is a capability and ownership gap, not a technology gap.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: 57 alerts name a pathogen with nothing to join on</h2>
      <p className="text-gov-dark leading-relaxed">
        Across all 1,348 alerts, 234 name a pathogen in the title or a risk statement and 177 carry a coded pathogen. The 57 alerts in the gap state the organism in prose and offer no concept URI. The organism is knowable to a human reading the page and invisible to any system consuming the feed.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The year table shows this is not a legacy artefact being worked off.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Year</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Alerts</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Coded pathogen</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Coded allergen</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2018', '188', '0 (0.0%)', '109 (58.0%)'],
              ['2019', '178', '12 (6.7%)', '115 (64.6%)'],
              ['2020', '150', '26 (17.3%)', '82 (54.7%)'],
              ['2021', '152', '21 (13.8%)', '84 (55.3%)'],
              ['2022', '153', '30 (19.6%)', '78 (51.0%)'],
              ['2023', '122', '21 (17.2%)', '62 (50.8%)'],
              ['2024', '160', '24 (15.0%)', '91 (56.9%)'],
              ['2025', '157', '31 (19.7%)', '90 (57.3%)'],
              ['2026 to 10 Aug', '88', '12 (13.6%)', '42 (47.7%)'],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-gov-border/50">
                {row.map((cell, i) => (
                  <td key={i} className="p-3 text-gov-dark">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HBars
        title="Alerts carrying a coded pathogen concept, by year"
        note="Allergen coding in the same register runs between 47.7% and 64.6% every year without exception, so the gap is a property of the pathogen scheme, not of the operators."
        max={100}
        rows={[
          { label: '2018', value: 0, display: '0.0%', color: CHART.amber },
          { label: '2019', value: 6.7, display: '6.7%', color: CHART.amber },
          { label: '2020', value: 17.3, display: '17.3%', color: CHART.amber },
          { label: '2021', value: 13.8, display: '13.8%', color: CHART.amber },
          { label: '2022', value: 19.6, display: '19.6%', color: CHART.amber },
          { label: '2023', value: 17.2, display: '17.2%', color: CHART.amber },
          { label: '2024', value: 15.0, display: '15.0%', color: CHART.amber },
          { label: '2025', value: 19.7, display: '19.7%', color: CHART.amber },
          { label: '2026 (to 10 Aug)', value: 13.6, display: '13.6%', color: CHART.amber },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        Pathogen coding starts at zero, peaks at 19.7 per cent, and is not trending upward. Allergen coding never once drops below 47.7 per cent. The very first record in the register, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">FSA-PRIN-01-2018</code>, is titled &quot;James Hall recalls BBQ Pulled Pork because it may contain Salmonella&quot; and carries a prose risk statement naming salmonella with no coded pathogen at all.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: four organisms have nowhere to go</h2>
      <p className="text-gov-dark leading-relaxed">
        Some alerts are uncoded because nobody coded them. Others are uncoded because there is no concept to code them with. Four organisms appear by name in the register and have no member in the scheme: <em>Bacillus cereus</em> in 8 alerts, hepatitis A virus in 3, <em>Cronobacter sakazakii</em> in 2 and norovirus in 2.
      </p>
      <p className="text-gov-dark leading-relaxed">
        These are not exotic. Norovirus and hepatitis A are the two dominant foodborne viruses. <em>Cronobacter sakazakii</em> is the organism associated with powdered infant formula, and it is the subject of active international regulatory attention. <em>Bacillus cereus</em> is the most frequent of the four in this register. A surveillance vocabulary that closed in 2017 cannot represent the hazards its own operator has been publishing alerts about ever since.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: the join to genomic surveillance is impossible at every concept</h2>
      <p className="text-gov-dark leading-relaxed">
        This is the finding that matters most, and it survives even if every alert were coded tomorrow.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Genomic food chain surveillance identifies isolates at serovar and sequence type. An outbreak investigation does not act on <em>Salmonella</em>; it acts on <em>Salmonella</em> Typhimurium ST34. All five FSA concepts denote at genus or species level. A record coded &quot;Salmonella spp&quot; therefore cannot be joined to a genomic record, not because the systems are incompatible but because the register never captured which <em>Salmonella</em> it meant. The information was not lost in transmission. It was never recorded.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two of the five concepts also disagree with themselves. The notation <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">clostridium</code> is a genus and its label is &quot;Clostridium botulinum&quot;, a species. The notation <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">listeria</code> is a genus and its label is &quot;Listeria monocytogenes&quot;. A consumer reading the notation and a consumer reading the label will disagree about what the record is about. Separately, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">e-coli</code> is labelled as a species while every risk statement attached to it is explicitly about Shiga toxin-producing <em>E. coli</em>, which is a pathotype.
      </p>
      <p className="text-gov-dark leading-relaxed">
        And none of the five carries any external mapping. There is no <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">skos:exactMatch</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">closeMatch</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">broadMatch</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">broader</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">narrower</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">seeAlso</code> or <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">sameAs</code> anywhere in the scheme. A consumer holding an NCBI Taxonomy identifier has no declared path in, and vice versa.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three failure modes, three different remedies</h2>
      <p className="text-gov-dark leading-relaxed">
        The reason this needed an ontology rather than a spreadsheet is that &quot;the data is incomplete&quot; hides three problems that cost different amounts to fix and are owned by different people.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
        <li><strong>Not coded.</strong> The hazard is named in prose only. The remedy is process: someone applies the existing vocabulary at the point the alert is drafted. It is cheap.</li>
        <li><strong>Rank too coarse.</strong> The hazard is coded, but above the rank the join requires. The remedy is a decision about what the register captures, which touches the alert workflow and the laboratory interface. It is not cheap, and it is the one that actually unlocks One Health.</li>
        <li><strong>No alignment.</strong> The hazard is coded at sufficient rank but carries no mapping into the target vocabulary. The remedy is a crosswalk, which is a day of work, and we have done it below.</li>
      </ul>
      <p className="text-gov-dark leading-relaxed">
        A hazard concept is never simply present or absent. It denotes at a rank, it was recorded at a coding level, and it does or does not carry an alignment. Those three together decide whether a cross-tier join is possible, and they decide it differently for every record. That is what the published ontology models. It contains no pathogens at all; it contains dated assertions by named registers, and the identity of an assertion includes its date so that two claims made on different days stay two claims.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The crosswalk, which we built rather than merely requested</h2>
      <p className="text-gov-dark leading-relaxed">
        Criticism without a remedy is not worth publishing. Every organism the register names was resolved to an NCBI Taxonomy identifier twice, once through the EBI Ontology Lookup Service and once through NCBI E-utilities, and a mapping is emitted only where the two agree. All nine resolved, and all nine agreed.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Organism</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Alerts</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">NCBI Taxonomy</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">In the FSA scheme</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Salmonella', '110', 'NCBITaxon:590', 'yes'],
              ['Listeria monocytogenes', '86', 'NCBITaxon:1639', 'yes'],
              ['Escherichia coli', '19', 'NCBITaxon:562', 'yes'],
              ['Bacillus cereus', '8', 'NCBITaxon:1396', 'no'],
              ['Clostridium botulinum', '5', 'NCBITaxon:1491', 'yes'],
              ['Hepatovirus A', '3', 'NCBITaxon:12092', 'no'],
              ['Cronobacter sakazakii', '2', 'NCBITaxon:28141', 'no'],
              ['Norwalk virus', '2', 'NCBITaxon:11983', 'no'],
              ['Campylobacter', '1', 'NCBITaxon:194', 'yes'],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-gov-border/50">
                {row.map((cell, i) => (
                  <td key={i} className={`p-3 text-gov-dark ${i === 3 && cell === 'no' ? 'font-semibold' : ''}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HBars
        title="Pathogen alerts by organism, and whether the FSA scheme can code them"
        note="Teal: a concept exists in the FSA pathogen scheme. Amber: no concept exists, so the organism can only ever appear as free text. The scheme has not been revised since 4 September 2017."
        rows={[
          { label: 'Salmonella', value: 110, display: '110' },
          { label: 'Listeria monocytogenes', value: 86, display: '86' },
          { label: 'Escherichia coli', value: 19, display: '19' },
          { label: 'Bacillus cereus', value: 8, display: '8', color: CHART.amber },
          { label: 'Clostridium botulinum', value: 5, display: '5' },
          { label: 'Hepatovirus A', value: 3, display: '3', color: CHART.amber },
          { label: 'Cronobacter sakazakii', value: 2, display: '2', color: CHART.amber },
          { label: 'Norwalk virus', value: 2, display: '2', color: CHART.amber },
          { label: 'Campylobacter', value: 1, display: '1' },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        The published crosswalk carries five mappings for the concepts that exist and records the four missing organisms with the taxon identifier each could adopt and the number of alerts affected. It is about two dozen triples. The work of closing this particular gap is not large. It is simply not currently anyone&apos;s job.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One boundary must not be blurred. The crosswalk is a proposed remedy authored by us. The observations recorded in the graph continue to state, correctly, that as read on 18 August 2026 the FSA publishes no mapping of its own.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, which transfers to any surveillance register</h2>
      <p className="text-gov-dark leading-relaxed">
        Nothing above is specific to food. The same five steps apply to any register that publishes hazard, incident or case records and claims to be part of an integrated surveillance picture.
      </p>
      <ol className="list-decimal pl-5 space-y-2 text-gov-dark leading-relaxed">
        <li>Census the register and prove the census is complete rather than truncated. Opposite sort orders returning identical sets is the cheapest proof available.</li>
        <li>Separate what the register codes from what it merely narrates, and measure the gap per year rather than in aggregate, because an aggregate hides whether the gap is closing.</li>
        <li>Read the vocabulary&apos;s own declared currency. A scheme that publishes its own last-modified date is telling you something, and in this case it was telling us 2017.</li>
        <li>Establish the rank at which each concept denotes and compare it against the rank the downstream join requires. This is the step that distinguishes a data quality complaint from an operational finding.</li>
        <li>Compute every headline two independent ways and fail the build when they disagree.</li>
      </ol>
      <p className="text-gov-dark leading-relaxed">
        On step five we take our own medicine. Every number in this article is computed set-based in Python and again by SPARQL over the graph, and the pipeline exits non-zero if any pair differs. We also validated with our own open-source engine, which found fourteen defects in our own ontology that we then fixed. More usefully, our engine disagreed with the reference SHACL implementation on the cross-source rules, and the investigation found a real bug in our engine rather than in the reference: it was silently passing SPARQL-based constraints instead of evaluating them, reporting success for rules it had never run. We filed that against ourselves, fixed it the same day, and added regression tests so it cannot come back. The two engines now agree exactly on this study&apos;s shapes, at sixty-nine violations decomposing the same way as the independent Python computation. We have left the original disagreement documented in the repository rather than editing it out, because how a defect was found is part of the evidence that the method works, and because a method that only audits other people&apos;s registers is not a method.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The register, in context</h2>
      <p className="text-gov-dark leading-relaxed">
        The FSA publishes this register openly, without a key, in six serialisations, under an open licence. Very few food safety authorities anywhere do. Every finding here exists because the FSA chose to be transparent, and a register that published nothing would have produced a shorter and far less useful article.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The pathogen scheme is not malformed. Its five concepts are correctly typed SKOS, correctly in scheme, and they dereference. The defect is scope and currency, not construction. And the alert register is not the only surveillance surface the UK operates; PATH-SAFE and the National Biosurveillance Network exist precisely to work on the genomic layer, and nothing here should be read as a claim about their internal data. What this study measures is the public alert register and the joins that can be made from it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two sources sit outside the harvest. The World Organisation for Animal Health&apos;s WAHIS API refused our requests, so the animal health tier is modelled in the ontology and unpopulated in the data, and plant health records are outside this build&apos;s scope. The claim that no alignment exists is a claim about what the FSA publishes, not a claim that no mapping could be constructed, which is precisely why we constructed one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this matters beyond one register</h2>
      <p className="text-gov-dark leading-relaxed">
        Government is investing heavily in biosurveillance tooling, and the recurring finding across that investment is fragmentation: duplicated effort, limited visibility of what already exists, and organisations solving the same problem separately. That diagnosis is usually framed as a coordination problem, and coordination is treated as the remedy.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This study suggests the diagnosis is incomplete. Two organisations can be perfectly willing to share, sit on the same working group, and still be unable to join their records, because the identifiers do not meet at the resolution the join requires. Willingness is necessary and it is not sufficient. Before a data sharing agreement is worth signing, someone should be able to answer, per hazard and per register pair, whether the join is even possible and which of the three failure modes applies. That answer is computable, it is cheap to compute, and almost nobody computes it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, the SHACL layers, the crosswalk, the pipeline and an honest build report listing every source that refused us, every correction we made to our own counts and every hypothesis that died, are published at{' '}
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">
          github.com/fabio-rovai/biosurveillance-ontology<span className="sr-only"> (opens in new tab)</span>
        </a>. Code is MIT, ontology and documentation are CC BY 4.0, and the source data remains Crown copyright under the Open Government Licence.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h3 className="text-lg font-bold text-gov-dark font-serif">If you run a surveillance register</h3>
        <p className="text-gov-dark leading-relaxed">
          We will run this measurement against a register you own and give you the result, at no cost and with no obligation, for the first three organisations that ask. You get a per-hazard table of which of your records can be joined across the One Health boundary and which cannot, which of the three failure modes applies to each, and the crosswalk for anything that only needs one. If your register is open we can start today; if it is not, we will work from a schema and a sample.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Fabio Rovai, The Tesseract Academy.{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark underline">fabio@thetesseractacademy.com</a>
        </p>
      </div>
    </section>
  </article>
);

export default BiosurveillanceRegisterOntology;
