import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/semantic-asset-register';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/semantic-asset-register#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/semantic-asset-register',
  headline:
    'What 13 Million Triples Reveal About the Quality of US Federal Vocabularies | Tesseract Academy',
  description:
    'An open, re-runnable quality assessment of 28 vocabularies and ontologies published by 10 US federal agencies. Every check names the authority it derives from and declares whether failing it violates a published specification or departs from a community practice the publisher never agreed to. 10 normative failures against 120 conventional ones. The Library of Congress MADS/RDF ontology does not parse, and 7,782 concepts depend on it. All 507 ISO 639-2 concepts violate SKOS integrity condition S14 because the vocabulary of language codes carries no language tags. The NAL Agricultural Thesaurus has published no change to its linked data since July 2024, which is detectable only because it declares a date. Findings are W3C EARL assertions anchored to dated, hashed retrievals, every headline computed twice by two independent paths.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-25',
  about: {
    '@type': 'Dataset',
    name: 'Semantic Asset Register (SAR)',
    url: REPO,
  },
  keywords:
    'ontology quality assessment, ontology evaluation, SKOS integrity conditions, SKOS S14, EARL, W3C EARL, OWL 2 DL profile, id.loc.gov, MADS/RDF, BIBFRAME, NASA GCMD keywords, USGS Thesaurus, NAL Agricultural Thesaurus, NALT, NALT AWIC, MeSH RDF, NCI Thesaurus, DCAT-US, NIEM, federal open data, vocabulary governance, vocabulary staleness, linked data quality, qSKOS, OOPS!, FOOPS!, OBO Foundry dashboard, ontology assessment methodology',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/semantic-asset-register#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the quality of US federal published vocabularies actually bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The logic is sound and the governance is not. Across 28 assets from 10 federal publishers measured on 16 August 2026, every asset was retrievable at the URL its publisher advertises, every plain HTTP request redirected to HTTPS or was refused outright, and no ontology was logically inconsistent. Of 130 failures, 10 are violations of a published specification and 120 are departures from community practice that no standard obliges the publisher to follow. The concentration is in the second column and it is not cosmetic: 21 of 28 assets declare no licence inside the payload, 20 name no publisher, and 14 carry no version or dated metadata. Those three fields decide whether a downstream consumer may lawfully reuse the artefact, can tell which version it ingested, and can detect that the asset has stopped changing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a normative and a conventional finding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A normative finding means the asset violates a published specification, and the check must cite the clause. Ten of the 26 checks in this register qualify, six of them being SKOS integrity conditions S9, S13, S14, S27, S37 and S46, which the SKOS Reference states normatively. A conventional finding means the asset departs from a widely held practice that is not written into any standard the publisher is bound by. Severity is tracked as a separate axis and is allowed to diverge in both directions: an undeclared licence is conventional but high severity because it blocks lawful reuse, while a wrong media type is normative but low severity because most clients sniff the content anyway. Collapsing these two axes into a single notion of error is the main reason ontology quality reports get dismissed by the publishers they assess.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Library of Congress MADS/RDF ontology parse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not as published on 16 August 2026. The file at id.loc.gov/ontologies/madsrdf/v1.rdf contains 23 instances of an rdf:Description node element carrying an rdf:resource attribute inside an owl:unionOf with rdf:parseType="Collection". The RDF 1.1 XML Syntax grammar permits only rdf:ID, rdf:nodeID or rdf:about on a node element, so rdf:about is the correct attribute there. rdflib rejects the file outright. OWLAPI does not fail but silently substitutes error entities named Error1 through Error8, which is the more dangerous behaviour because nothing downstream notices. The construct appears zero times in the BIBFRAME and PREMIS 3 files, so it is specific to MADS/RDF. It matters beyond one file because the Thesaurus for Graphic Materials types its 7,782 concepts with madsrdf:Topic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do all 507 ISO 639-2 concepts violate SKOS S14?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because each concept carries three skos:prefLabel values, in English, French and German, and none of the three carries a language tag. SKOS integrity condition S14 states that a resource has no more than one value of skos:prefLabel per language tag, and three untagged labels are three labels sharing the same absent tag. The concept for the Banda languages, at id.loc.gov/vocabulary/iso639-2/bad, carries "Banda languages", "banda, langues" and "Banda-Sprachen (Ubangi-Sprachen)", all untagged. The vocabulary of language codes is itself not language tagged.',
      },
    },
    {
      '@type': 'Question',
      name: 'When was the NAL Agricultural Thesaurus last updated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Its published linked data declares dcterms:modified 2024-07-16. Every file in the download directory at lod.nal.usda.gov/downloads, covering all four NALT subschemes across N-Triples, RDF/XML, Turtle and MARC, carries a Last-Modified header of 24 July 2024. The Turtle payload inside the archive is named nalt-full_dwn_20240716.ttl. Re-fetched on 25 August 2026, the bytes were identical to the 16 August 2026 snapshot, SHA-256 a4a72e8f03aaef22e2bf4d1d2f9506ea2b67a1d877d2d66e4d53eb2d1b6c15cd, and no later edition is published at that address. That question is answerable only because NALT declares a date and a licence, which most of this sample does not. For the 14 assets carrying no version or dated metadata, staleness is not detectable at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Has anyone assessed government vocabularies before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mader, Haslhofer and Isaac defined 15 computable SKOS quality functions in the qSKOS tool and ran them over 15 vocabularies including LCSH, MeSH and NAICS, published at TPDL 2012 as arXiv:1206.1339. OOPS! has catalogued 41 ontology pitfalls derived from an analysis of over 693 ontologies since 2014, and FOOPS! has scored FAIRness on demand since 2021, both from the Ontology Engineering Group at Universidad Politecnica de Madrid. The OBO Foundry dashboard runs a standing monthly report across roughly 190 ontologies, and reaches exactly two US federal vocabularies. What did not exist is a standing, contestable register of what one government publishes, separating specification violations from community conventions, anchored to hashed retrievals, with a documented right of reply for the assessed publishers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NIEM have an RDF or OWL version?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not as a published artefact of the model itself. NIEM 6.0, now run as the NIEMOpen OASIS Open Project, publishes its normative reference model as XML Schema. The only RDF-adjacent file located in the niemopen/niem-model repository on 16 August 2026 is a single JSON-LD context of 5,418 bytes. NIEM 6 documentation does discuss RDF entailments, which is a semantics story rather than a downloadable graph. The largest US federal data exchange standard therefore falls outside a battery defined over RDF, and this register records it as sought but not obtainable rather than scoring it against criteria it was never meant to meet.',
      },
    },
  ],
};

export const SemanticAssetRegister: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026. Updated 25 August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        What 13 Million Triples Reveal About the Quality of US Federal Vocabularies
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Consultancies sell ontology assessment. Job descriptions ask for the ability to assess existing ontologies and recommend improvements. Almost nobody who sells that service has published an assessment of a single named, real-world ontology. So we built one and pointed it at the vocabularies the US federal government actually publishes: 28 assets from 10 publishers, retrieved on 16 August 2026, hashed, and put through 26 checks that each name the authority they derive from.
      </p>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The logic holds up. The governance does not. Ten findings break a published rule, and the other 120 sit in the fields that decide whether anyone downstream can lawfully use the artefact, tell which version they ingested, or notice that it stopped changing two years ago.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>An ontology that does not parse.</strong> The Library of Congress MADS/RDF file uses <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:resource</code> on a node element 23 times, which the RDF/XML grammar forbids. The Thesaurus for Graphic Materials types its 7,782 concepts against it.</li>
          <li><strong>A vocabulary of language codes with no language tags.</strong> All 507 ISO 639-2 concepts carry three preferred labels and no language tag on any of them, violating SKOS integrity condition S14 in every single case.</li>
          <li><strong>A national thesaurus that has not moved since July 2024.</strong> Every published serialisation of the NAL Agricultural Thesaurus carries a Last-Modified of 24 July 2024, and the Turtle file re-fetched on 25 August 2026 is byte-identical to the copy hashed nine days earlier. It is the best-governed asset in the sample, which is the only reason that sentence can be written at all.</li>
          <li><strong>The split is the point.</strong> Of 130 failures, 10 violate a published specification and 120 depart from a convention the publisher never agreed to. Only the first column describes something wrong by the standard&apos;s own terms, and saying so is what makes the ten worth acting on.</li>
          <li><strong>Governance is where the estate strains.</strong> 21 of 28 assets declare no licence, 20 name no publisher, 14 carry no version. Those are the fields a machine reads to decide whether it may proceed.</li>
          <li><strong>The logic is clean.</strong> All 28 assets retrieved, HTTPS compliance complete, no ontology logically inconsistent, no unsatisfiable classes, 27 of 28 payloads parsed.</li>
          <li><strong>The artefact:</strong> an open register, OWL 2 model, 26-check catalogue, findings as W3C EARL assertions, 23 unit tests, every headline computed twice by two paths that share no code. Code MIT, ontology and results CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">An ontology that does not parse, and the 7,782 concepts that depend on it</h2>
      <p className="text-gov-dark leading-relaxed">
        The Library of Congress MADS/RDF ontology, served at <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">id.loc.gov/ontologies/madsrdf/v1.rdf</code>, fails to parse at line 340. The construct is an <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:Description</code> node element carrying an <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:resource</code> attribute, appearing as a child of an <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">owl:unionOf</code> with <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:parseType=&quot;Collection&quot;</code>. It occurs 23 times.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The RDF 1.1 XML Syntax grammar is explicit here. The <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">nodeElement</code> production permits only <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:ID</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:nodeID</code> or <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:about</code>, while <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:resource</code> is valid on an empty property element. A collection parse type contains a node element list, so its children are node elements. The intended attribute is almost certainly <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:about</code>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two independent parsers agree that something is wrong and disagree instructively about what to do. rdflib refuses the file. OWLAPI, via ROBOT, does not fail: it emits a recognition warning and silently substitutes error entities named Error1 through Error8. A pipeline built on the second behaviour produces a graph that looks complete and quietly is not, which is how a defect of this kind survives for years without anyone filing anything.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The construct appears zero times in the BIBFRAME and PREMIS 3 files, so this is specific to MADS/RDF rather than a pattern across id.loc.gov. It matters beyond one file because the Thesaurus for Graphic Materials, a substantial Library of Congress vocabulary, types its 7,782 concepts with <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">madsrdf:Topic</code>. A live vocabulary is typed against an ontology that no conforming parser will read.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">A vocabulary of language codes that carries no language tags</h2>
      <p className="text-gov-dark leading-relaxed">
        Every one of the 507 concepts in the Library of Congress ISO 639-2 vocabulary violates SKOS integrity condition S14, which states that a resource has no more than one value of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">skos:prefLabel</code> per language tag.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The cause is not carelessness about labels. It is the opposite. Each concept is given three preferred labels, in English, French and German, which is more multilingual care than most vocabularies manage. None of the three carries a language tag. Three untagged labels are three labels sharing the same absent tag, so the condition is violated 507 times out of 507. The concept for the Banda languages carries &quot;Banda languages&quot;, &quot;banda, langues&quot; and &quot;Banda-Sprachen (Ubangi-Sprachen)&quot;, and a consumer has no machine-readable way to tell which is which.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the class of defect a checker finds in a second and a careful human reader never notices, because on the screen the labels look correct and the multilingual intent is obvious. It is also a one-line fix per label, in the vocabulary whose entire subject matter is which language something is in.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The best-governed asset in the sample is the one we can prove is two years old</h2>
      <p className="text-gov-dark leading-relaxed">
        The NAL Agricultural Thesaurus passes the governance checks that most of this sample fails. It declares its licence, Creative Commons Attribution 4.0, inside the payload. It names its publisher. It carries dated metadata. On the three fields where 21, 20 and 14 assets respectively fall short, NALT is clean.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is precisely why the next paragraph is possible.
      </p>
      <p className="text-gov-dark leading-relaxed">
        NALT declares <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">dcterms:modified 2024-07-16</code>. Every file in the download directory at <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">lod.nal.usda.gov/downloads</code>, covering all four subschemes across N-Triples, RDF/XML, Turtle and MARC, returns a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">Last-Modified</code> of 24 July 2024. The Turtle payload inside the archive is named <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">nalt-full_dwn_20240716.ttl</code>. Re-fetched on 25 August 2026, it is byte-identical to the 16 August 2026 snapshot, SHA-256 beginning <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">a4a72e8f03aa</code>. The service still describes itself as NALT 2024.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is public context for that. Federal procurement records show the Agricultural Research Service contracting for VocBench, the open source vocabulary editing platform managed by the EU Publications Office, specifically for the NAL Thesaurus, on an award running from September 2021 to 29 September 2026, alongside separate consulting awards under the same &quot;NALT for the Machine Age&quot; programme. A vocabulary being re-platformed is a vocabulary whose published output can sit still for a long time.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The point for a register is narrower than the reason. The question is answerable at all only because NALT declares a date, publishes a licence and serves stable bulk files. For the 14 assets in this sample that carry no version or dated metadata, the same question cannot be put. An asset that never claimed a date cannot be shown to have gone stale, and a consumer has no way to distinguish a vocabulary that is finished from one that is abandoned.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is the argument for the conventional column in one example. None of licence, publisher and version breaks a rule. All three are what makes decay observable.
      </p>
      <p className="text-gov-dark leading-relaxed">
        NALT carries the register&apos;s other S14 finding as well, and running it to ground turned a count into something actionable. Thirty-two of its 76,691 concepts carry two <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">skos:prefLabel</code> values in Spanish. Twenty-eight are the same scientific name twice with different capitalisation, <em>Callithrix</em> alongside <em>callithrix</em>. One is a misspelling rather than a duplicate, <em>calimico</em> for <em>Callimico</em>. Two are a singular beside a plural, <em>rana</em> and <em>ranas</em>. One is an acronym variant. The English side is clean throughout.
      </p>
      <p className="text-gov-dark leading-relaxed">
        All thirty-two sit in the NALT AWIC subscheme, which holds 887 concepts in the file. None of the other 75,800 concepts is affected. That places the defect in one load rather than in editorial practice across the thesaurus, which is a materially different thing to tell a maintainer, and the per-concept list is in the repository.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The rest of the normative column, and what is absent from it</h2>
      <p className="text-gov-dark leading-relaxed">
        The remaining specification violations are few and concrete. Four NASA GCMD concept scheme endpoints return <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/xml</code> rather than <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/rdf+xml</code>, so a client negotiating content properly cannot tell it has been handed RDF, although the payload is well formed and parses. Three assets carry pairs of concepts asserted both associatively and hierarchically, which SKOS condition S27 makes disjoint: 4,700 of roughly 246,000 pairs in the USGS Common Geographic Areas file, which at that scale reads as a generation artefact rather than editorial slips, 6 of 32 in GCMD Platforms, and 1 of 1,106 in the USGS Thesaurus. Two assets breach S14 on a small proportion of concepts.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There were no failures on retrievability: every asset was obtainable at the address its publisher advertises. There were no failures on transport security: every plain HTTP request either redirected to HTTPS or, in the EPA&apos;s case, was refused outright, which is stronger than the policy requires. There were no inconsistent ontologies, no unsatisfiable classes, and no violations of SKOS conditions S9, S13, S37 or S46 anywhere in the sample. Federal publishers are not shipping broken logic. They are shipping unlabelled artefacts.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Governance is the finding, not the footnote</h2>
      <p className="text-gov-dark leading-relaxed">
        Twenty-one of 28 assets carry no licence statement anywhere in the payload. Twenty name no publisher or creator. Fourteen carry no version or dated metadata. Thirteen have terms without definitions, and twelve do not return RDF when RDF is requested at their namespace.
      </p>
      <p className="text-gov-dark leading-relaxed">
        None of that breaks a rule. All of it decides whether a downstream consumer can act. An organisation building a retrieval pipeline over federal vocabularies has to answer three questions before it ships: may we redistribute derived data, which version did we ingest, and how do we find out when a term changes underneath us. For most of this sample the payload answers none of the three, and the answers live on a landing page that no machine will read. A licence on an HTML page is not a licence a pipeline can act on.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is also a coverage story that belongs in the findings rather than in a caveat. Several assets sought for this register are not available as RDF at all. NIEM 6.0, the largest US federal data exchange standard, publishes its normative model as XML Schema, and the only RDF-adjacent artefact in its repository is a JSON-LD context of 5,418 bytes. The EPA Substance Registry Services returns HTML when RDF is requested. NIST OSCAL is XML and JSON Schema. Those are recorded as sought and not obtainable rather than scored against criteria they were never built to meet, because a register that lists only what worked is not a register of the estate.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why these findings survive contact with a publisher</h2>
      <p className="text-gov-dark leading-relaxed">
        Tools that score ontologies have existed for over a decade and are not much used by the people who publish ontologies. The reason is not indifference to quality. It is that most reports lose the argument the first time a publisher pushes back, and they lose it in three predictable ways: convention presented as standard, so a publisher reads one item about missing textual definitions, correctly notes that no W3C Recommendation requires them, and stops reading, which costs the twenty findings that were real; inapplicable presented as failed, so a SKOS concept scheme is marked down for carrying no OWL axioms it was never meant to carry; and an unreproducible subject, so a report says the NASA keywords have some number of problems without saying which retrieval, on what date, from which endpoint.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This register is built to lose none of those three arguments. Every check declares <strong>normativity</strong>, which is a claim about authority. A check is normative only if failing it violates a published specification, and it must name the clause. Ten of the 26 qualify. Six are the SKOS integrity conditions S9, S13, S14, S27, S37 and S46, stated normatively in the SKOS Reference. The others are RDF syntax conformance, media type correctness and OWL 2 consistency. One cites government policy rather than a standards body: OMB Memorandum M-15-13 requires federal websites to serve only over HTTPS, which makes transport security a compliance question for these publishers specifically.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every check separately declares <strong>severity</strong>, which is a claim about consequence, and the two axes are allowed to diverge in both directions. An undeclared licence is conventional, because no specification compels a publisher to state a licence inside the payload, and high severity, because a consumer who cannot determine the licence cannot lawfully redistribute derived data. A mislabelled media type is normative, because it violates the media type registration, and low severity, because almost every client sniffs the content anyway.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Findings are W3C EARL assertions rather than a bespoke result format, because EARL already carries the distinction this domain needs. It has five outcomes, not two, and this register uses them in earnest. A SKOS scheme carrying no OWL axioms is recorded <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:inapplicable</code> for OWL profile conformance, not <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:failed</code>. A reasoner that exhausts its budget yields <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:cantTell</code>, never a silent pass. Of the 728 results in this run, 155 are inapplicable and 50 could not be determined, and publishing those counts is what lets a reader recompute the aggregate under a different weighting.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Assessments attach to a snapshot, never to an abstract asset. Each snapshot records the URL requested, the URL finally resolved to, the HTTP status, the media type actually returned, the byte count and a SHA-256 of the bytes. A publisher can re-fetch and compare hashes. If the hash changed, the finding may be stale and this register is wrong to keep asserting it. That property is what turns a report into something contestable, and it is also what made the NALT staleness measurable a week later without re-running anything.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every headline figure on this page was computed twice, once set-based in Python over the results and once by SPARQL over the EARL graph, by a script that shares no code between the two paths and exits non-zero if they disagree. They agree on every figure.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The catalogue in full</h2>
      <p className="text-gov-dark leading-relaxed">
        Every check ran against all 28 assets, which is where the 728 results come from. The table below is the whole instrument, with the authority each check derives from, its severity, and the number of assets that failed it in this run. The two blocks are the distinction the register is built around, and the totals are 10 against 120.
      </p>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm text-gov-dark">
          <thead>
            <tr className="border-b border-gov-border text-left">
              <th className="py-2 px-2 font-semibold">Check</th>
              <th className="py-2 pr-4 font-semibold">What it tests</th>
              <th className="py-2 pr-4 font-semibold">Authority</th>
              <th className="py-2 pr-4 font-semibold">Severity</th>
              <th className="py-2 font-semibold text-right">Assets failing</th>
            </tr>
          </thead>
          <tbody>
              <tr className="bg-gov-bg/60"><td colSpan={5} className="py-2 px-2 font-bold text-gov-dark">Normative: failing breaks a published specification (10 checks, 10 failures)</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-P02</td><td className="py-2 pr-4 align-top">Media type matches serialisation</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">RDF 1.1 Turtle</td><td className="py-2 pr-4 align-top whitespace-nowrap">Low</td><td className="py-2 align-top text-right tabular-nums">4</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L07</td><td className="py-2 pr-4 align-top">related disjoint with broaderTransitive</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">3</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L06</td><td className="py-2 pr-4 align-top">One preferred label per language</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">2</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-P01</td><td className="py-2 pr-4 align-top">Parses as RDF</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">RDF 1.1 Turtle</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">1</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L02</td><td className="py-2 pr-4 align-top">Logically consistent</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">OWL 2 Direct Semantics</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L04</td><td className="py-2 pr-4 align-top">Concept and ConceptScheme disjoint</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L05</td><td className="py-2 pr-4 align-top">Label properties pairwise disjoint</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L08</td><td className="py-2 pr-4 align-top">Collection disjoint with Concept and ConceptScheme</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L09</td><td className="py-2 pr-4 align-top">exactMatch disjoint with broadMatch and relatedMatch</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">SKOS Reference</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-R04</td><td className="py-2 pr-4 align-top">Served over HTTPS with a valid certificate</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">OMB M-15-13</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="bg-gov-bg/60"><td colSpan={5} className="py-2 px-2 font-bold text-gov-dark">Conventional: failing departs from a practice the publisher never agreed to (16 checks, 120 failures)</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-G01</td><td className="py-2 pr-4 align-top">Declares a licence</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">DCAT-US</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">21</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-G03</td><td className="py-2 pr-4 align-top">Declares a publisher or creator</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">DCAT-US</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">20</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-G02</td><td className="py-2 pr-4 align-top">Declares a version</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">14</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-D02</td><td className="py-2 pr-4 align-top">Minted terms carry definitions</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">CommunityPractice</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">13</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-R03</td><td className="py-2 pr-4 align-top">Serves RDF under content negotiation</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">12</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L01</td><td className="py-2 pr-4 align-top">Conforms to OWL 2 DL</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">OWL 2 Profiles</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">10</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-D03</td><td className="py-2 pr-4 align-top">Asset declares title and description</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Low</td><td className="py-2 align-top text-right tabular-nums">7</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-I01</td><td className="py-2 pr-4 align-top">Reuses external vocabularies</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">CommunityPractice</td><td className="py-2 pr-4 align-top whitespace-nowrap">Low</td><td className="py-2 align-top text-right tabular-nums">6</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-I02</td><td className="py-2 pr-4 align-top">External dependencies still resolve</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">6</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-D01</td><td className="py-2 pr-4 align-top">Minted terms carry labels</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">5</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-R02</td><td className="py-2 pr-4 align-top">Namespace URI dereferences</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">3</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-P03</td><td className="py-2 pr-4 align-top">Payload is self-describing</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">XML 1.0</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">1</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-S01</td><td className="py-2 pr-4 align-top">Deprecated terms name a successor</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">CommunityPractice</td><td className="py-2 pr-4 align-top whitespace-nowrap">Medium</td><td className="py-2 align-top text-right tabular-nums">1</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-S02</td><td className="py-2 pr-4 align-top">No live references to deprecated terms</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">CommunityPractice</td><td className="py-2 pr-4 align-top whitespace-nowrap">Low</td><td className="py-2 align-top text-right tabular-nums">1</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-L03</td><td className="py-2 pr-4 align-top">No unsatisfiable classes</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">CommunityPractice</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
              <tr className="border-b border-gov-border/60"><td className="py-2 pr-4 align-top whitespace-nowrap font-mono text-xs">SAR-R01</td><td className="py-2 pr-4 align-top">Download URL resolves</td><td className="py-2 pr-4 align-top text-gov-secondary whitespace-nowrap">W3C Vocab Pub Note</td><td className="py-2 pr-4 align-top whitespace-nowrap">High</td><td className="py-2 align-top text-right tabular-nums">0</td></tr>
          </tbody>
        </table>
      </div>
      <HBars
        title="Normative check failures across the sample"
        note="Ten failures across ten normative checks. Retrievability, transport security and logical consistency failed nowhere; the failures concentrate in serialisation labelling and SKOS label discipline."
        rows={[
          { label: 'SAR-P02 media type matches serialisation', value: 4, display: '4', color: CHART.amber },
          { label: 'SAR-L07 related vs broaderTransitive disjointness', value: 3, display: '3', color: CHART.amber },
          { label: 'SAR-L06 one preferred label per language', value: 2, display: '2', color: CHART.amber },
          { label: 'SAR-P01 parses as RDF', value: 1, display: '1', color: CHART.amber },
        ]}
      />
      <p className="text-gov-dark leading-relaxed">
        Reading down the conventional block is the fastest way to see the shape of the estate. The five largest counts are licence, publisher, version, definitions and content negotiation, in that order, and none of them is a logic problem.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where this sits against prior work</h2>
      <p className="text-gov-dark leading-relaxed">
        Reproducible ontology quality tooling is not new. Mader, Haslhofer and Isaac defined fifteen computable quality functions, implemented them as qSKOS, and ran them over fifteen vocabularies including LCSH, MeSH and NAICS, published at TPDL 2012; they found issues in all fifteen, including 342,848 undocumented concepts in LCSH, and the SKOS checks here are a narrower and more conservative descendant of theirs. OOPS! has catalogued 41 ontology pitfalls from an empirical analysis of more than 693 ontologies since 2014, FOOPS! has scored vocabularies against the FAIR principles since 2021, and the OBO Foundry dashboard runs a standing monthly report across roughly 190 ontologies.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The gap those leave is a national one. The OBO dashboard reaches exactly two US federal vocabularies, and only because biomedicine adopted OBO. The last systematic look at federal SKOS covered three vocabularies and was published fourteen years ago. What is new here is a standing, contestable register pointed at one government&apos;s semantic estate, which separates specification violations from community conventions, publishes the snapshot hash behind every claim, and gives the assessed publishers a documented right of reply.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What happens next, and what the publishers say</h2>
      <p className="text-gov-dark leading-relaxed">
        Notices are going out to the publishers named on this page, each carrying the retrieval, the clause and the per-concept list where one exists. Where a publisher is content for its response to be recorded, it is logged in the repository under a <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">publisher-response</code> label, whether it confirms a finding, corrects it or rejects it. Correspondence is not published without the publisher&apos;s agreement.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three responses are equally useful. If a finding is wrong, showing the retrieval or the check we got wrong gets the register fixed and re-run, with the correction recorded publicly rather than quietly edited. If a finding is right and already fixed, the next run picks it up, and because snapshots are hashed the improvement is visible as a changed hash and a changed outcome rather than as a claim. If a check simply does not apply to an asset, that is a defect in the catalogue rather than in the asset, and the fix is a narrower applicability rule or an outright removal.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The register is built to be re-run on a schedule for that reason. A first pass says what the estate looks like. A second pass, against the same hashed baseline, says which publishers moved.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Scope, and two findings that were thrown away</h2>
      <p className="text-gov-dark leading-relaxed">
        Coverage is a seeded sample rather than a census, biased toward agencies that publish RDF at all, which by construction underrepresents the agencies whose semantic assets are least accessible. The Library of Congress accounts for 15 of the 28 assets, so proportions are proportions of this sample. Retrievability was observed once, from one network location, on one day, which is the main reason the register is built to be re-run rather than published once. Reasoning is bounded by a time budget, and assets that exhaust it report that they could not be determined. Assets typed with MADS/RDF rather than SKOS, such as the Thesaurus for Graphic Materials, fall outside the SKOS battery and are assessed only on retrieval, parsing, documentation and governance.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two findings from the first run were discarded before publication, and an instrument that audits other people should say which. The first attributed a transport failure to the wrong party: the DCAT-US SHACL shapes and the National Archives restrictions vocabulary were retrieved from <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">raw.githubusercontent.com</code>, which serves Turtle as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">text/plain</code>, and the register booked a media type violation against GSA and NARA for a header GitHub sets. Those assets are now flagged and transport checks return inapplicable with the reason stated. The second was a check measuring its own regular expression: it derived namespace prefixes by truncating term URIs and reported <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">http://id.loc.gov/vocabulary/</code> as a dead dependency of twelve assets, a URL that does 404 but that no publisher ever minted. The check now probes the referenced terms themselves over a deterministic sample, and the corrected count is six assets rather than eighteen.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A third case changed shape rather than disappearing. The NOAA paleoenvironmental thesaurus first recorded as unparseable. It is served as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/rdf+xml; charset=ISO-8859-1</code>, carries no XML declaration, and contains a byte that is not valid UTF-8 at offset 9,497, the n-with-tilde in &quot;El Nino&quot;. A correct HTTP client honours the charset parameter, so the loader now does and the file parses to 27,326 triples. The real issue is different from a parse failure and is now its own check: detached from its HTTP headers, the file cannot be decoded. XML 1.0 expressly permits an external protocol to supply the encoding, so it is graded conventional.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border-l-4 border-gov-blue bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">Correction, 16 August 2026</h2>
        <p className="text-gov-dark leading-relaxed">
          The DCAT-US artefacts assessed here were harvested from <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">github.com/DOI-DO/dcat-us</code>, which was archived on 28 April 2026 and is read-only. The live home is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">github.com/GSA/dcat-us</code>, maintained by the Data.gov team on a documented semi-annual cycle. The check outcomes are unaffected, because the bytes assessed are the bytes that repository still serves and the snapshot hashes are unchanged. The provenance was wrong, and provenance is most of what this register claims to get right.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The correction surfaced a finding rather than only an error. As of 16 August 2026 the live GSA repository contains no SHACL directory and no Turtle files at all, and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">nara-restrictions.ttl</code> sits under <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">DEPRECATED/vocabularies</code>. The canonical validation artefact for DCAT-US v3.0 is now JSON Schema following draft 2020-12, and the SHACL shapes assessed on this page survive only in the archived repository. The full entry is in <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">docs/CORRECTIONS.md</code>.
        </p>
      </div>
    </section>

    <section className="space-y-4 border-t border-gov-border pt-8">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact, and how to use it on your own estate</h2>
      <p className="text-gov-dark leading-relaxed">
        The whole register is open at <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">github.com/fabio-rovai/semantic-asset-register</a>: the OWL 2 model, the 26-check catalogue with every check bound to its authority and clause, the harvester, the check battery, the report generator, the two-path cross-check, 23 unit tests and continuous integration. Code is MIT, the ontology and results are CC BY 4.0. Retrieved payloads are not redistributed; the register records where each artefact came from, when, and the hash of the bytes received, which is enough to reproduce or falsify any finding.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The battery is not specific to the United States. It is defined over RDF graphs and published authorities, so it points at a UK, EU or Canadian government estate without modification, and at a private vocabulary estate without much more. The question it answers for an organisation is practical. If somebody ran this against the vocabularies your AI and data pipelines depend on, which column would the findings land in, could you tell the difference between the rule you broke and the convention you never adopted, and would you be able to prove which version you ingested.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We run this as paid work on named estates, and the bounded first engagement is a run of the battery over an agreed list of vocabularies, findings split normative and conventional, with the pipeline handed over so the team can re-run it themselves. If you maintain one of the assets above and think we have it wrong, that is the other half of the offer and it costs nothing. Either way, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark underline">fabio@thetesseractacademy.com</a>.
      </p>
    </section>
  </article>
);
