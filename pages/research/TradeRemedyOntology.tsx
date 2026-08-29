import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = "https://github.com/fabio-rovai/trade-remedy-ontology";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/trade-remedy-ontology#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/trade-remedy-ontology",
  "headline": "An open ontology for UK trade remedy measures, tested against the TRA case register, the UK Trade Tariff and legislation.gov.uk | Tesseract Academy",
  "description": "A full census of the UK trade remedy chain, from the Trade Remedies Authority case register to the duty charged at the border. All 21,008 commodity codes visited, 405 carrying 9,385 distinct measures. The tariff truncates the legal instrument link at 200 characters and all thirteen truncated links are dead, reaching 15.7 percent of live measures. The case register drops leading zeros from chapter 3 commodity codes. Both defect classes are repaired in the repository. Every figure is computed twice, set-based and by SPARQL, with a gate that fails on disagreement, and validated with pyshacl and the open-source Open Ontologies engine.",
  "author": { "@id": "https://gov.tesseract.academy/#organization" },
  "publisher": { "@id": "https://gov.tesseract.academy/#organization" },
  "datePublished": "2026-08-28",
  "dateModified": "2026-08-28",
  "inLanguage": ["en"],
  "about": {
    "@type": "Dataset",
    "name": "TradeRemedyOntology",
    "url": "https://github.com/fabio-rovai/trade-remedy-ontology"
  }
};

const CHART = { teal: '#00897b', amber: '#b45309', gray: '#5c6670' };

type BarRow = { label: string; value: number; display: string; color?: string };

const Tile: React.FC<{ kpi: string; label: string }> = ({ kpi, label }) => (
  <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
    <p className="text-3xl font-extrabold text-gov-dark">{kpi}</p>
    <p className="text-sm text-gov-secondary mt-1">{label}</p>
  </div>
);

const HBars: React.FC<{ title: string; note?: string; max?: number; rows: BarRow[] }> = ({ title, note, max, rows }) => {
  const m = max ?? Math.max(...rows.map((r) => r.value));
  return (
    <figure className="rounded-lg border border-gov-border bg-white p-5 my-6">
      <figcaption className="text-sm font-semibold text-gov-dark mb-3">{title}</figcaption>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3" title={`${r.label}: ${r.display}`}>
            <span className="w-48 shrink-0 text-right text-xs text-gov-secondary leading-tight">{r.label}</span>
            <div className="flex-1 h-[18px]">
              <div
                className="h-full rounded-r"
                style={{ width: `${Math.max((r.value / m) * 100, 0.5)}%`, backgroundColor: r.color ?? CHART.teal }}
              />
            </div>
            <span className="w-24 shrink-0 text-xs font-semibold text-gov-dark tabular-nums">{r.display}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-gov-secondary mt-3">{note}</p>}
    </figure>
  );
};

const LOCATOR_ROWS: BarRow[] = [
  { label: 'Locator under 200 characters (36 instruments)', value: 36, display: 'all HTTP 200' },
  { label: 'Locator exactly 200 characters (13 instruments)', value: 13, display: 'all HTTP 404', color: CHART.amber },
];

const EXPORTER_ROWS: BarRow[] = [
  { label: 'Published exporter names', value: 982, display: '982', color: CHART.gray },
  { label: 'No unique match in the Global LEI System', value: 955, display: '955', color: CHART.amber },
  { label: 'Raw markup or double-encoded characters', value: 65, display: '65', color: CHART.amber },
  { label: 'More than one legal entity in one value', value: 55, display: '55', color: CHART.amber },
  { label: 'A scope rule instead of a name', value: 14, display: '14', color: CHART.amber },
];

const INHERITED_ROWS: BarRow[] = [
  { label: 'Measures in force', value: 46, display: '46' },
  { label: 'UK-notified to the WTO since 1995', value: 10, display: '10' },
];

export const TradeRemedyOntology: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An open ontology for UK trade remedy measures, tested against the TRA case register, the UK Trade Tariff and legislation.gov.uk"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 28 August 2026.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>

      <section id="english" lang="en">
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Every anti-dumping and countervailing duty the UK charges runs a chain. The Trade Remedies Authority opens a case, the case names commodity codes, a legal instrument gives the resulting measure force, and the measure assigns a duty rate to a named exporter. By 31 March 2026 the measures in force covered around 20.6 billion pounds of UK imports. We built an open ontology of that chain, censused every link in it, and found that it breaks in twenty-five places. All twenty-five are repaired in the repository."}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              <Tile kpi="21,008" label="commodity codes visited, a complete census" />
              <Tile kpi="9,385" label="distinct trade remedy measures in force" />
              <Tile kpi="15.7%" label="of live measures cite a dead legal-instrument link" />
              <Tile kpi="99,095" label="triples in the validated graph" />
            </div>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What we measured"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We visited all 21,008 commodity codes in the UK Trade Tariff. 405 of them carry a trade remedy measure, which comes to 9,385 distinct measures citing 49 legal instruments between them, with 990 additional codes assigning duty rates to named exporters. We harvested all 92 cases on the TRA public file, dereferenced every legal instrument locator against legislation.gov.uk and gov.uk, and resolved every published exporter name against the Global LEI System. The census is complete rather than sampled, and every headline figure is computed twice, once set-based in Python and once by SPARQL over the built graph, with a gate that exits non-zero if the two ever disagree, currently across 20 metrics."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The tariff truncates the legal instrument link at 200 characters"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Thirteen of the 49 cited instruments publish a locator of exactly 200 characters, cut mid word. All thirteen return HTTP 404. Every locator shorter than 200 characters returns HTTP 200, and no locator in the set exceeds 200 characters. That is a field length limit rather than a content error, and it falls almost entirely on trade remedies notices, whose gov.uk paths are the longest in the set."}</p>
            <HBars
              title="49 cited legal instruments, by published locator length"
              note="No published locator exceeds 200 characters. The 13 truncated locators are cited by 1,477 of the 9,385 live measures (15.7%). All 13 are repaired in the repository."
              rows={LOCATOR_ROWS}
            />
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The effect is that 1,477 of the 9,385 live measures, 15.7 percent, publish a broken link to the instrument that gives them legal force. We repaired all thirteen by fetching the gov.uk collection page named in the surviving prefix and keeping the one document link that begins with the truncated string. Every repair extended to exactly one candidate, and every candidate returns HTTP 200. The before and after table ships in the repository as a CSV, and we have staged the defect report for the Trade Tariff team, whose platform is itself open source on GitHub."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The case register drops leading zeros from commodity codes"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"A UK commodity code is 6, 8 or 10 digits. Two TRA cases each publish six nine-digit codes, and all twelve return HTTP 404 against the tariff. Restore the leading zero and all twelve resolve, each to a trout product, which matches what both cases are about. That is a numeric cast stripping the zero from chapter 3 goods. All twelve are repaired in the repository, and a repair is accepted only where the published value fails to resolve and the restored value resolves."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The case file joins to the measures"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The public file and the tariff required joining before either could be relied upon as a register, as they describe the same measures from different perspectives. Of the 92 cases on the TRA public file, 91 publish commodity codes and 79 join to at least one commodity carrying a live measure. These cases publish 2,204 codes in total, of which 1,393 carry measures in the tariff today. This remainder is legitimate, because the cases also cover terminated investigations and expired measures, and the join table is included in the repository so the residue is inspectable rather than asserted."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The exporter name field is not a name field"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Duty rates are assigned to individually named exporters through additional codes, and the name is the only identity the tariff publishes. Of 982 named exporters, 955 do not resolve to exactly one entity under a legal name lookup. Six in ten values mix the company name with address fragments, 65 carry raw HTML markup or double encoded characters inside the published name, and 55 pack more than one legal entity into a single value. Citation format is equally ungoverned: 87 legal citation records match no consistent scheme, and the most cited instrument of all, at 6,738 citations, is recorded with a double space in its own name."}</p>
            <HBars
              title="990 additional codes assigning duty rates to named exporters"
              note="Counts overlap: one published value can carry several defect classes at once. Six in ten values mix the company name with address fragments. Name resolution measured against the Global LEI System with exact case-insensitive comparison."
              rows={EXPORTER_ROWS}
            />
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The same questions, asked of other jurisdictions"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The UK trade regime is largely inherited, yet the inherited framework is increasingly diverging from its origins. The WTO’s publicly accessible notification tables, which require no subscription, list the United Kingdom as having notified 7 anti-dumping measures and 3 countervailing measures since 1995, in contrast to 46 measures currently in force. The UK tariff references EU parent regulations using R-codes, which resolve against the Publications Office CELLAR service, a keyless system that maintains an in-force status flag. Both EU parents cited as the legal basis for active UK measures, R1722/18 and R0999/14, are recorded by the EU itself as no longer in force, a status that affects 6 UK measures. The Canadian register serves as a contrasting example, where the CBSA measures-in-force file parses cleanly into 189 measure rows and 4,681 commodity codes with zero malformed tokens, demonstrating that the defect classes identified above are not inevitable. The Australian register refused a scripted connection outright, a fact we record rather than attempt to circumvent."}</p>
            <HBars
              title="The UK trade remedy book: notified against in force"
              note="7 anti-dumping and 3 countervailing measures notified by the UK to the WTO since 1995, against 46 measures in force per the TRA's 2025-26 annual report. The book is overwhelmingly inherited."
              rows={INHERITED_ROWS}
            />
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The document layer underneath the measures"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Underneath the measures sits the evidence base. The 92 cases on the public file list 3,849 submissions, behind which we discovered 12,964 public documents. A register census of that document layer is the next build, addressing whether every listed document resolves, whether listed and actual counts agree, and how much of the corpus is machine-readable text rather than scanned image. The same link-integrity question that found the 200-character truncation applies one layer down."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"How the ontology holds disagreement"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Identity and legal citation are modelled as dated assertions by a named source, never as properties of a thing. An IdentifierAssertion records who published which identifier for whom and how many entities it resolves to. A LegalCitationAssertion records the citation code and the locator separately, because they can disagree, and a ResolutionObservation records what the locator returned on a given date. Each identifier scheme declares its own conformance rules as data, so adding a jurisdiction means adding a concept rather than editing code. SHACL carries one shape per defect class, which makes the validation report the findings table."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Everything is validated three ways: with pyshacl, with our own open-source Open Ontologies engine, and by the dual-computation gate. Validating this vertical also exposed a real gap in our own engine, which did not implement SHACL's numeric range constraints. We fixed the engine, pinned regression tests against pyshacl, and both engines now return identical violation counts. Findings that died under checking are recorded in the build report alongside the ones that survived, including one plausible-looking claim about a revoked sanctions regulation that turned out not to be a trade remedies defect at all."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Working with us"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We do bounded first engagements. For an investigating authority, a customs administration or a firm that depends on remedy measures being right, that is a fixed-scope integrity audit of your register against the sources it must agree with, delivered as a reproducible pipeline you keep, with every headline figure computed two ways. The repository shows exactly what that looks like."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd, trading as The Tesseract Academy. fabio@thetesseractacademy.com"}</p>
      </section>
    </div>
  </div>
);
