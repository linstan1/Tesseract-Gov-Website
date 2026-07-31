import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/waste-vocab-crosswalk';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/waste-reporting-loss#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/waste-reporting-loss',
  headline:
    'Half the detail dies on the way to the return: measuring what UK waste reporting throws away | Tesseract Academy',
  description:
    'AI waste analytics classify material at the belt in over a hundred categories. Every UK channel that consumes composition data accepts between 7 and 47. Of 5.907 bits of composition detail, EWC retains 53.8%, pEPR 52.1%, RAM 2027 49.5% and Simpler Recycling 38.4%. Of ten operational questions, two are answerable in every channel and four in none. Open SKOS vocabularies, SSSOM alignments, a SHACL release gate, and a reporting engine that emits returns as intervals rather than point estimates.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-30',
  dateModified: '2026-07-30',
  about: {
    '@type': 'Dataset',
    name: 'Waste vision-to-regulation crosswalk',
    url: REPO,
    license: 'https://creativecommons.org/licenses/by/4.0/',
  },
  keywords:
    'waste composition, material recovery facility, MRF, digital waste tracking, extended producer responsibility, pEPR, RAM 2027, Simpler Recycling, European Waste Catalogue, EWC, List of Waste, SKOS, SSSOM, ontology matching, information loss, recyclability assessment methodology',
};

const FLOW_CHART = `graph LR
  A["Belt classification<br/>60 to 111 material classes"] --> B["Crosswalk<br/>not a function"]
  B --> C["EWC / List of Waste<br/>13 of 47 codes reached"]
  B --> D["pEPR categories<br/>8 + 2 subcategories"]
  B --> E["RAM 2027<br/>10 assessed groups"]
  B --> F["Simpler Recycling<br/>7 concepts"]
  B --> G["Collapse<br/>up to 23 classes per value"]
  B --> H["Underdetermination<br/>7 classes fix no value"]
  B --> I["Out of scope<br/>19 to 22 classes unrecordable"]`;

const CHANNELS = [
  { ch: 'EWC / List of Waste', targets: '47', used: '13', fan: '18', undet: '3', oos: '0', ret: '53.8%', bits: '2.728' },
  { ch: 'pEPR categories', targets: '10', used: '12', fan: '19', undet: '7', oos: '19', ret: '52.1%', bits: '2.829' },
  { ch: 'RAM 2027 groups', targets: '10', used: '12', fan: '22', undet: '7', oos: '22', ret: '49.5%', bits: '2.986' },
  { ch: 'Simpler Recycling', targets: '7', used: '7', fan: '23', undet: '1', oos: '0', ret: '38.4%', bits: '3.640' },
];

const QUESTIONS = [
  { q: 'Plastic bottles versus plastic trays and tubs', why: 'Deposit return and PRF sorting both turn on it', ewc: 'collapsed', epr: 'collapsed', ram: 'collapsed', simp: 'collapsed' },
  { q: 'Flexible film versus rigid plastic', why: 'Flexibles cap at Amber under RAM 2027, rigids can reach Green', ewc: 'collapsed', epr: 'yes', ram: 'yes', simp: 'collapsed' },
  { q: 'Aluminium versus steel packaging', why: 'pEPR sets a separate base fee per metal', ewc: 'collapsed', epr: 'yes', ram: 'yes', simp: 'collapsed' },
  { q: 'Fibre-based composite versus plain board', why: 'Liquid cartons cannot reach Green, plain board can', ewc: 'yes', epr: 'yes', ram: 'yes', simp: 'yes' },
  { q: 'Drinks cans versus food cans', why: 'Different reprocessing routes and deposit return scope', ewc: 'collapsed', epr: 'undetermined', ram: 'undetermined', simp: 'collapsed' },
  { q: 'Expanded polystyrene versus other plastic', why: 'EPS has no kerbside route in most UK systems', ewc: 'collapsed', epr: 'partial', ram: 'partial', simp: 'collapsed' },
  { q: 'Paper cups versus paper packaging', why: 'Cups need a separate reprocessing route', ewc: 'yes', epr: 'yes', ram: 'yes', simp: 'yes' },
  { q: 'Packaging versus non-packaging, same material', why: 'pEPR liability attaches only to packaging', ewc: 'yes', epr: 'partial', ram: 'partial', simp: 'collapsed' },
  { q: 'Crisp packets versus other flexibles', why: 'Metallised film is a distinct sortation problem', ewc: 'collapsed', epr: 'collapsed', ram: 'collapsed', simp: 'collapsed' },
  { q: 'Glass bottles versus glass jars', why: 'Colour and format both affect remelt value', ewc: 'collapsed', epr: 'collapsed', ram: 'collapsed', simp: 'collapsed' },
];

const VERDICT_STYLE: Record<string, string> = {
  'yes': 'bg-emerald-50 text-emerald-800',
  'partial': 'bg-amber-50 text-amber-800',
  'undetermined': 'bg-orange-50 text-orange-800',
  'collapsed': 'bg-rose-50 text-rose-800',
};

const INTERVALS = [
  { cat: 'plastic - flexible', band: '819', drivers: 'none, fully determined' },
  { cat: 'plastic - rigid', band: '780 to 787', drivers: 'Squeezable tube' },
  { cat: 'Aluminium', band: '167 to 503', drivers: 'Aerosol, Drink can, Metal bottle cap, Metal lid, Squeezable tube' },
  { cat: 'Steel', band: '34 to 363', drivers: 'Aerosol, Drink can, Metal bottle cap, Metal lid' },
  { cat: 'Paper and card', band: '122 to 245', drivers: 'Meal carton, Other carton' },
  { cat: 'Fibre-based composite', band: '113 to 236', drivers: 'Meal carton, Other carton' },
];

export const WasteReportingLoss: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, July 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Half the detail dies on the way to the return
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        AI waste analytics now classify material at the belt in over a hundred categories, and the industry sells that granularity as regulatory reporting. Every UK channel that consumes composition data accepts between 7 and 47 values. We built the crosswalk, measured the loss, and found that the mapping cannot be a function in either direction.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Detail at the belt</p>
        <p className="text-3xl font-extrabold text-gov-dark">5.907</p>
        <p className="text-sm text-gov-secondary mt-1">bits of composition detail in the source vocabulary</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Worst channel</p>
        <p className="text-3xl font-extrabold text-gov-dark">38.4%</p>
        <p className="text-sm text-gov-secondary mt-1">retained by Simpler Recycling</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Answerable nowhere</p>
        <p className="text-3xl font-extrabold text-gov-dark">4 of 10</p>
        <p className="text-sm text-gov-secondary mt-1">operational questions no channel can answer</p>
      </div>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">EWC codes reached</p>
        <p className="text-3xl font-extrabold text-gov-dark">13 of 47</p>
        <p className="text-sm text-gov-secondary mt-1">granularity that exists and is never addressed</p>
      </div>
    </div>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why this matters in October 2026</h2>
        <p className="text-gov-dark leading-relaxed">
          Digital waste tracking becomes mandatory for permitted and licensed waste receiving sites in England, Wales and Northern Ireland in <strong>October 2026</strong>, for Scotland in January 2027, and for waste collectors in October 2027. The legal basis is section 58 of the Environment Act 2021. At the same time, packaging producers are reporting under extended producer responsibility and completing recyclability assessments whose outcomes modulate their fees.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          Sitting between the material and those returns is a layer of computer vision. Commercial analyzers over conveyors identify material in more than a hundred classes and their vendors state, correctly, that this taxonomy is mapped into regulatory reporting categories. That mapping is where the interesting question lives, and it is not published by anyone. So we built one from open sources and measured it.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What survives each channel</h2>
      <p className="text-gov-dark leading-relaxed">
        We measure retained detail as the mutual information between the perception class and the value the channel records, as a share of perception-class entropy. A channel that preserved every distinction would score 100%.
      </p>
      <div className="overflow-x-auto border border-gov-border rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Channel</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Targets</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Values used</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Worst fan-in</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Undetermined</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Out of scope</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Bits lost</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Retained</th>
            </tr>
          </thead>
          <tbody>
            {CHANNELS.map((r, i) => (
              <tr key={r.ch} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.ch}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.targets}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.used}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.fan}</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.undet} of 60</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.oos} of 60</td>
                <td className="px-4 py-3 text-right text-gov-secondary">{r.bits}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark">{r.ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Read the EWC row carefully. The catalogue offers 47 six-digit codes for municipal and packaging waste and the crosswalk reaches only 13 of them. Granularity that exists in a standard but is never addressed benefits nobody. These figures are also an upper bound, because a class whose value is undetermined is credited with its whole candidate set.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The crosswalk cannot be a function</h2>
        <p className="text-gov-dark leading-relaxed">
          Collapse is the failure everyone expects: many belt classes share one reported value, up to 23 of them in Simpler Recycling. Two further failures are less obvious and matter more, because conventional mapping quality measures cannot express either.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          <strong>Underdetermination.</strong> For 7 of 60 classes the perception class does not fix the regulatory value at all. A drinks can is aluminium or steel, and RAM 2027 lists cans under both metals. An unqualified plastic item does not say rigid or flexible, which is precisely the split that pEPR requires of large producers in reporting years 2 to 4 and that RAM 2027 uses to cap flexibles at Amber. The classifier has not made this decision. Whoever completes the return makes it, invisibly.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          <strong>Out of scope.</strong> pEPR cannot represent 19 of the 60 classes and RAM 2027 cannot represent 22, because both schemes are packaging-scoped and a great deal of what arrives on a belt is not packaging. That material does not appear in the return at all.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          Standard ontology-matching evaluation scores an alignment on precision and recall against a roughly one-to-one reference alignment. None of these three phenomena is expressible that way, which is why the loss has gone unmeasured.
        </p>
      </div>
      <Mermaid chart={FLOW_CHART} />
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Which operational questions survive</h2>
      <p className="text-gov-dark leading-relaxed">
        Retained bits are abstract, so we also asked ten concrete questions an operator, a reprocessor or a regulator would want answered. Each needs two groups of belt classes to stay distinguishable. <strong>Collapsed</strong> means the channel gives them the same value. <strong>Undetermined</strong> means a class does not fix its own value, so the distinction survives only if whoever completes the return guesses consistently. <strong>Partial</strong> means one group is not recorded at all.
      </p>
      <div className="overflow-x-auto border border-gov-border rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Question</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">EWC</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">pEPR</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">RAM 2027</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Simpler</th>
            </tr>
          </thead>
          <tbody>
            {QUESTIONS.map((r, i) => (
              <tr key={r.q} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">
                  <span className="font-medium">{r.q}</span>
                  <span className="block text-xs text-gov-secondary mt-0.5">{r.why}</span>
                </td>
                {[r.ewc, r.epr, r.ram, r.simp].map((v, j) => (
                  <td key={j} className="px-4 py-3">
                    <span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${VERDICT_STYLE[v]}`}>{v}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Two of ten questions are answerable in every channel. Four are answerable in none. Three results are worth stating plainly.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
        <li><strong>The metal split is the expensive one.</strong> pEPR sets separate base fees for aluminium and steel. The List of Waste offers a single code, <code>15 01 04 metallic packaging</code>, and no aluminium or steel split exists anywhere in the catalogue. So the distinction that determines the fee cannot be carried by the code that the mandatory waste tracking schema requires.</li>
        <li><strong>Metallised film fails everywhere.</strong> Crisp packets are a distinct sortation problem and a distinct reprocessing problem, and not one of the four channels has a cell for them.</li>
        <li><strong>EWC wins the one nobody expects.</strong> It separates packaging in <code>15 01 xx</code> from municipal fractions in <code>20 01 xx</code>, so it can tell a packaging bottle from a reusable food box. pEPR and RAM simply do not record the non-packaging side.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">A return that shows its own uncertainty</h2>
        <p className="text-gov-dark leading-relaxed">
          Waste analytics products emit a regulatory return as a point estimate. If the crosswalk is not a function, a point estimate is the wrong object: the true figure is bounded, not known. So the engine in this repository emits intervals instead, and names the classes responsible for each band.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          Put a composition through the pEPR categories and the aluminium line spans a factor of three. Aluminium carries its own base fee.
        </p>
      </div>
      <div className="overflow-x-auto border border-gov-border rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gov-bg border-b border-gov-border">
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">pEPR line</th>
              <th className="text-right px-4 py-3 font-semibold text-gov-dark">Reported interval</th>
              <th className="text-left px-4 py-3 font-semibold text-gov-dark">Classes driving the band</th>
            </tr>
          </thead>
          <tbody>
            {INTERVALS.map((r, i) => (
              <tr key={r.cat} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.cat}</td>
                <td className="px-4 py-3 text-right font-semibold text-gov-dark whitespace-nowrap">{r.band}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.drivers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        On the same composition, <strong>39.3%</strong> of the material cannot be represented in pEPR at all and <strong>45.6%</strong> cannot be represented in RAM 2027. The engine reports that mass separately rather than absorbing it into &quot;other&quot;, which is what makes a return look complete when it is not. Every line carries the mapping rows responsible, with their justification and confidence, so any figure can be audited back to the regulator&apos;s own text. The demonstration composition is built from annotation counts in open litter photography, which are item counts and not belt tonnages, and it is labelled as such throughout.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">How it is built, and what would falsify it</h2>
      <p className="text-gov-dark leading-relaxed">
        Six SKOS concept schemes, 171 concepts, 1,360 triples. Each scheme records the URL it was transcribed from, its publisher and its licence. Targets are transcribed verbatim from the publisher&apos;s own page: the pEPR categories and plastic subcategories from PackUK&apos;s regulation 7(11) notice, RAM 2027&apos;s assessed groups with their published format lists and permitted red, amber and green outcomes, Simpler Recycling&apos;s mandatory streams and named dry materials, and the composition-bearing fields of the Defra digital waste tracking receipt. The List of Waste is reused from the published <code>ewc-onto</code> rather than retyped.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Alignments are emitted as SSSOM, one file per channel. Where a mapping is supported by a regulator&apos;s own published format list, that entry is carried as the mapping&apos;s evidence and its justification is recorded as lexical matching rather than curation. RAM 2027 is the only channel where this is possible at scale: <strong>36 of its 67 mapping rows</strong> are grounded in the regulator&apos;s own words, against 5 for Simpler Recycling and 0 for both pEPR and EWC, which publish material names only. That asymmetry is a finding about the schemes, not about the method. Ambiguity is never resolved by guessing: an underdetermined class emits one row per candidate at reduced confidence, and the fork stays visible.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nothing is published unless a release gate passes. It has two parts: SHACL conformance, and a closed-world check that every identifier used in a mapping resolves to a concept that actually exists. An open-world RDF store accepts mappings to concepts that were never defined, and this catches them.
      </p>
      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-2">The gate earned its place immediately</p>
        <p className="text-gov-dark leading-relaxed">
          It flagged five mappings pointing at a code that did not exist in the built vocabulary. The cause was upstream. Of 990 labelled classes in <code>ewc-onto</code> v2025-07-08, 970 carry an English label and 20 do not, and exactly <strong>three of those hold an English string tagged as German</strong>, so no English-language query can see them: <code>20 03 01 mixed municipal waste</code>, which is the most heavily used municipal code in the catalogue, plus <code>10 03</code> and <code>03 02 05</code>. The correction is applied in the build, asserted against the upstream string so it fails loudly if upstream changes, and recorded on the concept. It has been reported rather than absorbed.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for buyers and builders</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>For MRF operators procuring analytics:</strong> a vendor claim that a taxonomy is &quot;mapped to regulatory reporting categories&quot; is not a quality statement until the mapping is inspectable. Ask which of your questions the mapping can still answer, and ask what the return does with material the scheme cannot represent.</li>
          <li><strong>For producers and compliance schemes:</strong> where a figure depends on a distinction the belt cannot make, such as aluminium against steel, the number you file is a choice someone made and not a measurement. It should carry a band.</li>
          <li><strong>For Defra, PackUK and the agencies:</strong> the granularity already exists in the List of Waste and is not being reached, while the distinctions that set fees are absent from it entirely. A one-code change, splitting <code>15 01 04</code>, would make the metal question answerable through the mandatory channel.</li>
          <li><strong>Honest boundary:</strong> the source vocabulary here is open litter photography, not a commercial MRF belt, and the weighting is item counts rather than tonnages. A larger source vocabulary makes every retention figure <em>worse</em> rather than better, so these are conservative. The curation is expert judgement, declared as such, with a rationale on every row.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        Vocabularies, alignments, metrics, the reporting engine, the SHACL shapes and the release gate are public under CC BY 4.0. Every figure on this page regenerates from three commands in the repository, and the entropy figures were additionally recomputed from the published mapping files independently of the build, matching to four decimal places. An interactive explorer ships with it: a single self-contained file with the retention chart, the answerability matrix, the interval chart and a filterable row for every belt class.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          waste-vocab-crosswalk on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Source vocabulary: TACO, 60 annotated classes and 4,784 annotations, MIT licensed. Targets under Open Government Licence v3.0; the List of Waste ontology under CC BY 4.0. A note on data we deliberately did not use: the Environment Agency&apos;s Waste Data Interrogator would be the natural tonnage weighting, and it is unusable for a published artefact because it carries the Environment Agency Conditional Licence, which permits internal or personal use only, for one year, without sublicensing. Mass weighting needs an Open Government Licence source instead.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: we are working with WRAP on a <Link to="/research/wrap-food-loss-waste-taxonomy" className="text-gov-blue underline hover:text-gov-blue-dark">food loss and waste data taxonomy</Link> for the Food Programme and global Food Pact Network; the <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial</Link> and <Link to="/research/construction-standards-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">construction</Link> crosswalks apply falsifiability measurement to other standards families.
      </p>
    </section>
  </article>
);

export default WasteReportingLoss;
