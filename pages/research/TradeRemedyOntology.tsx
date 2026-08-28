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
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What we measured"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We visited all 21,008 commodity codes in the UK Trade Tariff. 405 of them carry a trade remedy measure, which comes to 9,385 distinct measures citing 49 legal instruments between them, with 990 additional codes assigning duty rates to named exporters. We harvested all 92 cases on the TRA public file, dereferenced every legal instrument locator against legislation.gov.uk and gov.uk, and resolved every published exporter name against the Global LEI System. The census is complete rather than sampled, and every headline figure is computed twice, once set-based in Python and once by SPARQL over the built graph, with a gate that exits non-zero if the two ever disagree."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The tariff truncates the legal instrument link at 200 characters"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Thirteen of the 49 cited instruments publish a locator of exactly 200 characters, cut mid word. All thirteen return HTTP 404. Every locator shorter than 200 characters returns HTTP 200, and no locator in the set exceeds 200 characters. That is a field length limit rather than a content error, and it falls almost entirely on trade remedies notices, whose gov.uk paths are the longest in the set."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The effect is that 1,477 of the 9,385 live measures, 15.7 percent, publish a broken link to the instrument that gives them legal force. We repaired all thirteen by fetching the gov.uk collection page named in the surviving prefix and keeping the one document link that begins with the truncated string. Every repair extended to exactly one candidate, and every candidate returns HTTP 200. The before and after table ships in the repository as a CSV, and we have staged the defect report for the Trade Tariff team, whose platform is itself open source on GitHub."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The case register drops leading zeros from commodity codes"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"A UK commodity code is 6, 8 or 10 digits. Two TRA cases each publish six nine-digit codes, and all twelve return HTTP 404 against the tariff. Restore the leading zero and all twelve resolve, each to a trout product, which matches what both cases are about. That is a numeric cast stripping the zero from chapter 3 goods. All twelve are repaired in the repository, and a repair is accepted only where the published value fails to resolve and the restored value resolves."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The exporter name field is not a name field"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Duty rates are assigned to individually named exporters through additional codes, and the name is the only identity the tariff publishes. Of 982 named exporters, 955 do not resolve to exactly one entity under a legal name lookup. Six in ten values mix the company name with address fragments, 65 carry raw HTML markup or double encoded characters inside the published name, and 55 pack more than one legal entity into a single value. Citation format is equally ungoverned: 87 legal citation records match no consistent scheme, and the most cited instrument of all, at 6,738 citations, is recorded with a double space in its own name."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The same questions, asked of other jurisdictions"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The UK book is overwhelmingly inherited. The WTO's own notification tables, which are open and need no subscription, record the United Kingdom as having notified 7 anti-dumping measures and 3 countervailing measures since 1995, against 46 measures in force. Both EU regulations still cited as the legal basis of live UK measures are no longer in force in the EU, checked against the Publications Office record. The Canadian register parsed cleanly at 189 measure rows and 4,681 commodity codes with zero malformed tokens, which shows the defect classes above are not inevitable. The Australian register refused a scripted connection outright, and we record that rather than work around it."}</p>
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
