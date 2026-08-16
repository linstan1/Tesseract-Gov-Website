import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/investment-fund-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/investment-fund-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/investment-fund-ontology',
  headline:
    'The largest index fund is missing from the open identifier map: the US fund register as a governance graph | Tesseract Academy',
  description:
    'An open OWL 2 ontology, SKOS identifier registry and SHACL governance layer built against the whole public US fund universe: 2,316 registrants, 14,841 funds, 43,344 share classes, joined to four quarters of Form N-CEN and all 9,119,948 GLEIF ISIN-LEI pairs, every pair check-digit validated with zero failures. SEC filings are not as clean: 19 of 14,960 self-reported LEIs (0.13%) fail the same check digit. Only 497 of 4,053 self-reported ETF fund LEIs (12.3%) carry any ISIN in GLEIF\'s open mapping, including the Vanguard 500 Index Fund, which holds a valid ISIN in commercial data that GLEIF\'s open file simply does not carry. 29,258 of 30,238 register quotations (96.8%) carry no venue field, mostly because the field is ETF-only in the source schema. Class-level ISIN resolution is enclosed behind licensed CUSIP data: 259 of 19,803 funds (1.3%) resolve from public data alone by unique pairing. The v0.2 release then builds the missing open map from SEC N-PORT filings and OpenFIGI: 2,186 of 5,176 fund-ISIN rows (42.2%) resolve to an exact SEC share class, ETF open-ISIN coverage rises from 12.3% to 35.4%, and one quarter of N-PORT attests 235,327 LEI-ISIN pairs of which 185,894 (79%) are absent from the GLEIF open file. Baseline figures as of the 14 August 2026 build; open-map figures as of v0.2.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-14',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Investment Fund Ontology (IFO) and full-universe US build',
    url: REPO,
  },
  keywords:
    'investment fund data, knowledge graph, ontology, OWL, SHACL, SKOS, ISIN, LEI, CUSIP, SEDOL, identifier governance, GLEIF, SEC N-CEN, fund data management, FIBO, data governance, financial services',
};

const HIERARCHY = `graph TD
  R["FundRegistrant<br/><i>the umbrella trust</i>"] --> F["Fund<br/><i>SEC series</i>"]
  F --> C["ShareClass<br/><i>the issued security</i>"]
  C --> L["Listing<br/><i>admission to one venue</i>"]
  L --> V["TradingVenue<br/><i>ISO 10383 MIC</i>"]
  E1["LEI, CIK, 811- file number<br/><b>entity-scoped</b>"] -.-> R
  E2["LEI<br/><b>entity-scoped</b>"] -.-> F
  I1["ISIN, CUSIP<br/><b>issue-scoped</b>"] -.-> C
  V1["ticker, SEDOL<br/><b>venue-scoped</b>"] -.-> L`;

const SOURCES = [
  { s: 'SEC Investment Company Series and Class dataset', gives: 'the structural spine: registrant, series, class, ticker', n: '2,316 registrants, 14,841 funds, 43,344 classes, 30,238 tickers' },
  { s: 'SEC Form N-CEN structured data, four quarters', gives: 'self-reported LEIs, fund classification flags, ETF listing exchanges', n: '12,217 fund reports after deduplication, 1,130 venue-resolved ETF listing rows, which deduplicate to 980 distinct listings' },
  { s: 'GLEIF ISIN-to-LEI relationship file', gives: 'which ISINs each fund entity has issued', n: '9,119,948 pairs, all check-digit validated' },
];

const FINDINGS = [
  { f: 'Check-digit failures across the full GLEIF ISIN-LEI file, both columns, validators self-tested against corrupted vectors. Scope: ISO 6166/ISO 17442 check-digit validity only, not deduplication, staleness or entity-to-ISIN correctness', n: '0 of 9,119,948', sev: 'clean' },
  { f: 'LEI values inside SEC N-CEN filings failing the same ISO 7064 check digits GLEIF passes in full, including 00000000000000238096 filed as an LEI. 2 of the 19 are additionally malformed, a subset, not an addition', n: '19 of 14,960 (0.13%)', sev: 'defect' },
  { f: 'ETF funds whose share class has no listing anywhere in public data: the single Violation-severity rule in the governance layer (every other finding on this page is Warning-severity)', n: '73 of 4,053 (1.8%)', sev: 'defect' },
  { f: 'Self-reported ETF funds whose LEI carries at least one ISIN in the GLEIF open mapping, though every ETF is exchange-traded by definition. VOO has a valid ISIN in commercial data; GLEIF\'s open file simply does not carry the LEI-to-ISIN pair for it', n: '497 of 4,053 (12.3%)', sev: 'gap' },
  { f: 'Quotations with no venue field resolvable from public data. Scope limit of the public schema, not a failure: the field is ETF-only (Form N-CEN Item E.1) and structurally absent for ordinary mutual-fund share classes; graded Warning, "not an error in the record"', n: '29,258 of 30,238 (96.8%)', sev: 'signal' },
  { f: 'Funds sharing an LEI with their registrant or with sibling series, most plausibly legitimate series-trust structures (one legal entity, many SEC series); graded Warning, a question of identifier granularity rather than a confirmed error', n: '214 funds; largest shared LEI spans 27 series', sev: 'signal' },
  { f: 'Funds whose registered share classes exceed the class count on their own N-CEN annual report', n: '2,148', sev: 'signal' },
  { f: 'ISINs issued by US-registered funds under non-US prefixes (DE, PR, CH, GB, KY, NL)', n: '127 of 7,112 (1.8%)', sev: 'signal' },
  { f: 'Fund-level ISINs resolvable to an exact share class from public data alone, by unique pairing. This is the v0.1 baseline; the v0.2 open map below lifts exact-class resolution to 42.2% of fund-ISIN rows', n: '259 of 19,803 (1.3%)', sev: 'gap' },
];

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

export const InvestmentFundOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The largest index fund is missing from the open identifier map
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Fund data is an identifier problem before it is anything else. We built an open ontology and SHACL governance layer for the registered fund product hierarchy and ran it against the entire public US fund universe: every registrant, fund and share class the SEC lists, four quarters of Form N-CEN annual reports, and all 9,119,948 ISIN-to-LEI pairs GLEIF publishes. The graph that comes out holds 1.29 million triples, and it disagrees with itself in exactly the ways fund data teams will recognise. The Vanguard 500 Index Fund, the largest index fund there is, has an issued LEI and not one ISIN against it in the open mapping.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Scope is the load-bearing fact</h2>
      <p className="text-gov-dark leading-relaxed">
        The model is deliberately small: a product hierarchy of four levels, and identifiers as first-class nodes rather than string properties. Every identifier assertion carries three things a bare literal cannot: the scheme it belongs to, the source system that asserted it, and its computed check-digit state. The SKOS registry behind it declares each of twenty schemes across six markets (US, UK, Ireland, Australia, Canada, Mexico) as entity-scoped, issue-scoped or venue-scoped, and SHACL enforces the attachment: an LEI names a legal entity, an ISIN names an issue, a ticker names an admission to one venue. Most of what goes wrong in fund data is an identifier sitting at the wrong level of this diagram.
      </p>
      <Mermaid chart={HIERARCHY} />
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The same class listed on two venues has two listings, two tickers, possibly two SEDOLs, and one ISIN. Put the ticker on the share class, as most spreadsheets do, and the model cannot even represent the dual listing, let alone govern it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Three sources that must agree, measured where they do not</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Source system</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">What it contributes</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Volume</th>
            </tr>
          </thead>
          <tbody>
            {SOURCES.map((r, i) => (
              <tr key={r.s} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 font-medium text-gov-dark">{r.s}</td>
                <td className="px-4 py-3 text-gov-secondary">{r.gives}</td>
                <td className="px-4 py-3 text-gov-secondary whitespace-nowrap">{r.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Each source lands in its own named graph, so provenance survives the merge and cross-system disagreement is a query rather than an audit project. The build takes 82 seconds including full-file validation of every GLEIF pair; the SHACL gate covers the whole 1.29 million triple graph in 27. This matters because the industry default is to treat identifier reconciliation as a quarterly project. At these speeds it is a continuous property of the data.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Nine findings, all reproducible</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Number</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Class</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((r, i) => (
              <tr key={r.f} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r.f}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{r.n}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Figures throughout this page are dated to the 14 August 2026 build, run against the GLEIF file dated 8 August 2026 and four pinned quarters of Form N-CEN. The SEC series/class register and the GLEIF file are fetched as latest, not pinned, so a rerun today will not reproduce these exact totals; see &quot;Open, aligned, and reproducible&quot; below.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The strongest result: where the registration authority owns the pipeline, the arithmetic holds</h2>
      <p className="text-gov-dark leading-relaxed">
        The GLEIF file, all 9,119,948 ISIN-to-LEI pairs of it, checksum-validated in full, not sampled, returns zero ISO 6166 (ISIN) and ISO 17442/ISO 7064 (LEI) check-digit failures. The zero is not a vacuous pass: the validators embed corrupted test vectors (a broken Apple ISIN, a broken GLEIF LEI, a broken HSBC SEDOL) and refuse them on every run. The scope is narrow by design: check-digit arithmetic only. It says nothing about deduplication, about whether any given LEI registration is still current, or about whether a given ISIN-to-LEI pair is actually the correct pairing; none of that was tested. Within that narrow, honestly-stated scope, 9.1 million machine-maintained records are clean.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The control group is where the value sits. An LEI carries two check digits under ISO 7064 MOD 97-10, so a corrupted one is mechanically detectable by anyone who cares to divide by 97. Of the 14,960 LEI values self-reported across four quarters of N-CEN filings, 19 distinct values fail that division, a rate of 0.13%. Two of those 19 are additionally malformed, not even 20 characters of the right alphabet, a subset of the 19 rather than an addition to it. One filer submitted <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">00000000000000238096</code>, a zero-padded integer wearing an LEI&apos;s length. The Guardian Insurance separate account and a Teucrium ETF file LEIs that fail the checksum outright. None of this is exotic fraud; it is what happens when a regulated form field carries no validation and downstream nobody divides by 97. The check is pure arithmetic, so even a 0.13% failure rate is a real defect, not a rounding artefact: it should be zero, and machine-maintained data shows that zero is achievable. Where the value is retyped into a filing, it rots at a measurable rate. That difference, not any exotic technology, is the case for validating at the point of entry with executable constraints.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A different kind of signal, not necessarily a defect: 214 funds file their registrant&apos;s LEI as their own, and 13 LEIs are shared across sibling funds of the same umbrella, the largest spanning 27 distinct SEC series under one LEI. This is very likely a legitimate series-trust structure, one legal entity hosting many SEC series that are not separately incorporated, which is exactly why the ontology&apos;s own SHACL shapes grade both patterns Warning, not Violation. It is a genuine question about identifier granularity, worth asking the filer about, not evidence of a broken ID.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The hole in the open fabric sits where the money is</h2>
      <p className="text-gov-dark leading-relaxed">
        Every US ETF trades on an exchange, so every US ETF has an ISIN. Yet only 497 of the 4,053 self-reported ETF funds in the graph, 12.3 percent, have any ISIN against their LEI in GLEIF&apos;s open mapping. The Vanguard 500 Index Fund is among those missing the link: LEI issued and current, ISIN present in every commercial terminal on earth, absent from the open map that is supposed to link the two. VOO is not missing an identifier; GLEIF&apos;s open file simply does not carry the LEI-to-ISIN pair for it, a known gap in voluntary ISIN reporting by the legal entity. The open identifier fabric is thinnest precisely for the instruments the public trades most.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The enclosure goes deeper. GLEIF maps ISINs to the fund&apos;s legal entity, but which share class an ISIN names is knowledge that lives in the CUSIP registry, which is licensed. From public data alone, 259 of the 19,803 funds in the graph, 1.3 percent, resolve their ISIN to a class, and only because they have one class and one ISIN so the pairing is forced. For everything else, the last hop of the join between the world&apos;s two great open identifier systems runs through a paywall. A separate, structural gap sits beside it: the SEC&apos;s own series/class register carries no trading-venue field at all, for any listing; the only venue source is Form N-CEN&apos;s ETF-only exchange table (Item E.1), which non-ETF funds never complete because it does not apply to them. Only 980 of 30,238 listings, 3.2 percent, resolve a venue; the other 29,258 (96.8 percent) are mostly ordinary open-end mutual fund share classes that transact at NAV and were never going to have a venue to report. The ontology&apos;s own SHACL shape grades this Warning and says so explicitly: not an error in the record, a scope limit of the public schema.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        We say this precisely because the model refuses to fudge it: fund-level ISIN assertions attach through a dedicated property that says &quot;this entity issued this security, class unresolved&quot;, and promotion to class level happens only when the data earns it. An ontology that silently guessed the attachment would demo better and govern worse.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-blue/30 bg-gov-blue/5 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Update, 16 August 2026: v0.2 builds the open map this page said was missing</h2>
        <p className="text-gov-dark leading-relaxed">
          The findings above are the v0.1 baseline, and the natural objection to them is: if the last hop is licensed, can it be rebuilt from public data at all? Release v0.2 of the repository answers that with a working artefact. The open fund identifier map joins three keyless public sources: GLEIF&apos;s open ISIN-to-LEI mapping, the SEC&apos;s Form N-PORT portfolio filings (in which every fund that holds another fund must state that holding&apos;s ISIN), and the OpenFIGI API. No CUSIP, no SEDOL, no licensed feed anywhere in the pipeline.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>Exact-class resolution goes from 259 funds to 2,186 of 5,176 fund-ISIN rows (42.2%)</strong>, an 8.4x lift over the forced-pairing baseline, with zero ticker conflicts across the map and 86.4% of rows carrying FIGIs.</li>
          <li><strong>ETF open-ISIN coverage rises from 12.3% to 35.4%.</strong> 937 ETFs gain their first open ISIN from a single quarter of N-PORT; three more quarters remain to be folded in.</li>
          <li><strong>One quarter of N-PORT attests 235,327 (LEI, ISIN) pairs. 185,894 of them (79%) are absent from GLEIF&apos;s open file, and 2,055 contradict it.</strong> The open map is not merely thinner than the licensed one; it is missing four fifths of what regulatory filings themselves attest, and the filings are public.</li>
          <li>The same pass surfaced four more ISINs in SEC filings that fail their own check digit, extending the v0.1 defect family.</li>
        </ul>
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          The map ships in the repository as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">open-map/fund_identifier_map.csv</code> under the v0.2.1 release, together with the resumable OpenFIGI harvester, an offline test suite and CI. The v0.1 figures above stand as the dated baseline they always were; this update is what changes when you stop measuring the gap and start closing it.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Policy as shapes, arithmetic as code</h2>
      <p className="text-gov-dark leading-relaxed">
        The governance layer is 15 SHACL shapes plus six SPARQL-based business rules, and the division of labour is deliberate. Check-digit arithmetic runs in the pipeline and is asserted into the graph; shapes then require the recorded result to be true. Encoding MOD 97 in SPARQL is possible and unwise. The rules that pay for the machinery are the conditional ones: an exchange-traded fund whose share class has no listing is flagged at the moment of assertion, which is the executable form of &quot;an ETF you cannot trade is a launch defect&quot;. 73 of 4,053 ETF funds (1.8 percent) hit this rule, the single Violation-severity result in the whole governance layer; every other finding on this page is graded Warning. The same rule family catches identifiers attached at the wrong scope level, conflicting LEIs from different sources, and funds whose registered classes exceed the count on their own annual report (2,148 of them, Warning-severity, part timing artefact, part genuine drift, and the shape severity says which interpretation it earns).
      </p>
      <p className="text-gov-dark leading-relaxed">
        Warnings are findings, not noise. A fund with no LEI from any source (38.3 percent of the graph, mostly funds outside the N-CEN window) is not a broken record; it is a governance decision waiting for an owner. Encoding that distinction in shape severities is what turns a validation report into a work queue.
      </p>
    </section>

    <section className="space-y-4">
      <div className="border-l-2 border-l-gov-blue pl-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What this means for fund data teams</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>Validate at entry, mechanically.</strong> Nineteen of 14,960 self-reported LEIs (0.13%) sit in regulatory filings failing their own check digit because no form divided by 97. A SHACL shape at the point of capture costs nothing and ends the class of defect.</li>
          <li><strong>Treat scope as schema.</strong> Deciding once, in data, whether each scheme names an entity, an issue or a venue admission removes the largest single source of silent reconciliation error between source systems.</li>
          <li><strong>Do not assume the open fabric covers you.</strong> If your golden-source strategy leans on GLEIF for fund-to-ISIN linkage, measure the coverage first; for self-reported ETFs it is roughly one in eight (497 of 4,053, 12.3%). The v0.2 open map lifts that to 35.4% from public filings alone, which also tells you the residual gap is a data-publication problem, not a data-existence problem.</li>
          <li><strong>Provenance is not optional.</strong> Named graph per source system plus a source assertion on every identifier is what makes &quot;which system said this&quot; a query. Anything less and cross-system disagreement is invisible until it is expensive.</li>
          <li><strong>Honest boundary:</strong> this build is US-only instance data by declared scope, the registry models all six markets; venue resolution and class-level ISIN attachment are limited by what public data can say, and the build report lists every such limit as a finding rather than a footnote.</li>
          <li><strong>These numbers will drift.</strong> The SEC series/class register and the GLEIF file are fetched as latest, not pinned; the N-CEN and N-PORT inputs are pinned and reproduce exactly. Every figure on this page is dated to the 14 August 2026 build against the GLEIF file dated 8 August 2026; a rerun today will not reproduce these exact totals.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, aligned, and reproducible</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, the twenty-scheme SKOS registry, the shapes, the pipeline, the tested SPARQL library and a committed example subgraph (the Vanguard Index Funds family, 1,371 triples) are public under CC BY 4.0 and MIT. The FIBO alignment is graded and every target IRI was verified live against the EDM Council&apos;s published Turtle before assertion; where FIBO has no counterpart, the alignment says so instead of inventing one. Every figure on this page traces to one of four pipeline commands run against about seventy megabytes of public downloads. Run them again today and the method reproduces exactly, but the SEC register and the GLEIF file will have moved on, so the exact totals will not.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          investment-fund-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: our <Link to="/research/financial-answer-verification" className="text-gov-blue underline hover:text-gov-blue-dark">FinanceBench verification study</Link> applies the same evidence-before-assertion discipline to financial question answering, and the <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study measures when an ontology can actually reject a wrong statement. Working on fund data, identifier governance or semantic data foundations in financial services? Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>.
      </p>
    </section>
  </article>
);

export default InvestmentFundOntology;
