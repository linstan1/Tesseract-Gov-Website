import React from 'react';
import { Link } from 'react-router-dom';
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
    'An open, re-runnable quality assessment of 28 vocabularies and ontologies published by 10 US federal agencies. Every check names the authority it derives from and declares whether failing it violates a published specification or departs from a community practice the publisher never agreed to. 10 normative failures against 120 conventional ones. The Library of Congress MADS/RDF ontology does not parse, and 7,782 concepts depend on it. All 507 ISO 639-2 concepts violate SKOS integrity condition S14 because the vocabulary of language codes carries no language tags. Findings are W3C EARL assertions anchored to dated, hashed retrievals, every headline computed twice by two independent paths.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Semantic Asset Register (SAR)',
    url: REPO,
  },
  keywords:
    'ontology quality assessment, ontology evaluation, SKOS integrity conditions, SKOS S14, EARL, W3C EARL, OWL 2 DL profile, id.loc.gov, MADS/RDF, BIBFRAME, NASA GCMD keywords, USGS Thesaurus, NAL Agricultural Thesaurus, MeSH RDF, NCI Thesaurus, DCAT-US, NIEM, federal open data, vocabulary governance, linked data quality, qSKOS, OOPS!, FOOPS!, OBO Foundry dashboard, ontology assessment methodology',
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
        text: 'No, and saying otherwise would misread the evidence. Across 28 assets from 10 federal publishers measured on 16 August 2026, every asset was retrievable at the URL its publisher advertises, every plain HTTP request redirected to HTTPS or was refused outright, and no ontology was logically inconsistent. Of 130 failures, only 10 are violations of a published specification. The remaining 120 are departures from community practice that no standard obliges the publisher to follow. The real pattern is governance rather than logic: 21 of 28 assets declare no licence inside the payload, 20 name no publisher, and 14 carry no version information.',
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
        text: 'Not as published on 16 August 2026. The file at id.loc.gov/ontologies/madsrdf/v1.rdf contains 23 instances of an rdf:Description node element carrying an rdf:resource attribute inside an owl:unionOf with rdf:parseType="Collection". The RDF 1.1 XML Syntax grammar permits only rdf:ID, rdf:nodeID or rdf:about on a node element, so rdf:about is the correct attribute there. rdflib rejects the file outright. OWLAPI does not fail but silently substitutes error entities named Error1 through Error8, which is arguably worse because nothing downstream notices. The construct appears zero times in the BIBFRAME and PREMIS 3 files, so it is specific to MADS/RDF. It matters beyond one file because the Thesaurus for Graphic Materials types its 7,782 concepts with madsrdf:Topic.',
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
      name: 'Has anyone assessed government vocabularies before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and the prior work deserves credit rather than being quietly ignored. Mader, Haslhofer and Isaac defined 15 computable SKOS quality functions in the qSKOS tool and ran them over 15 vocabularies including LCSH, MeSH and NAICS, published at TPDL 2012 as arXiv:1206.1339. OOPS! has catalogued 41 ontology pitfalls derived from an analysis of over 693 ontologies since 2014, and FOOPS! has scored FAIRness on demand since 2021, both from the Ontology Engineering Group at Universidad Politecnica de Madrid. The OBO Foundry dashboard runs a standing, monthly, published quality report across roughly 190 ontologies. What did not exist is a standing, contestable register of what one government publishes, that separates specification violations from community conventions and gives assessed publishers a documented right of reply.',
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
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        What 13 Million Triples Reveal About the Quality of US Federal Vocabularies
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Consultancies sell ontology assessment. Job descriptions ask for the ability to assess existing ontologies and recommend improvements. Almost nobody who sells that service has published an assessment of a single named, real-world ontology. So we built one and pointed it at the vocabularies the US federal government actually publishes: 28 assets from 10 publishers, retrieved on 16 August 2026, hashed, and put through 26 checks. The interesting result is not that the estate is bad. It is that the estate is mostly fine, and that saying so precisely is what makes the ten real failures worth acting on.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The estate holds up.</strong> All 28 assets retrieved. HTTPS compliance was complete. No ontology was logically inconsistent. 27 of 28 payloads parsed.</li>
          <li><strong>The split is the point.</strong> Of 130 failures, 10 violate a published specification and 120 depart from a convention the publisher never agreed to. Only the first column describes something that is wrong by the standard&apos;s own terms.</li>
          <li><strong>An ontology that does not parse.</strong> The Library of Congress MADS/RDF file uses <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">rdf:resource</code> on a node element 23 times, which the RDF/XML grammar forbids. The Thesaurus for Graphic Materials types its 7,782 concepts against it.</li>
          <li><strong>A vocabulary of language codes with no language tags.</strong> All 507 ISO 639-2 concepts carry three preferred labels and no language tag on any of them, violating SKOS integrity condition S14 in every single case.</li>
          <li><strong>The pattern is governance, not logic.</strong> 21 of 28 assets declare no licence, 20 name no publisher, 14 carry no version. Those are the fields that decide whether anyone downstream may lawfully reuse the artefact.</li>
          <li><strong>The artefact:</strong> an open register, OWL 2 model, 26-check catalogue, findings as W3C EARL assertions, 23 unit tests, every headline computed twice by two paths that share no code. Code MIT, ontology and results CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why most ontology quality reports get ignored</h2>
      <p className="text-gov-dark leading-relaxed">
        Tools that score ontologies have existed for over a decade. They are not much used by the people who publish ontologies, and the reason is not indifference to quality. It is that most reports do not survive contact with a publisher who pushes back.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three failure modes recur. The first is convention presented as standard. A report says an ontology fails because its classes lack textual definitions. No W3C Recommendation requires textual definitions. The publisher reads one such item, concludes the whole document is somebody&apos;s house style, and stops reading, which costs the twenty findings that were real.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second is inapplicable presented as failed. A SKOS concept scheme gets scored against OWL profile conformance and marked down for carrying no OWL axioms, which it was never meant to carry. The score is now measuring the wrong thing and the publisher is right to ignore it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The third is an unreproducible subject. A report says the NASA keywords have some number of problems. Which retrieval, on what date, from which of several endpoints? A finding that cannot be re-derived cannot be acted on, and cannot be shown to have been fixed.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The distinction that does the work</h2>
      <p className="text-gov-dark leading-relaxed">
        Every check in this register declares two things that are usually conflated. The first is <strong>normativity</strong>, which is a claim about authority. A check is normative only if failing it violates a published specification, and the check must name the clause. Ten of the 26 qualify. Six of those ten are the SKOS integrity conditions S9, S13, S14, S27, S37 and S46, which the SKOS Reference states normatively. The others are RDF syntax conformance, media type correctness, and OWL 2 consistency. One normative check cites government policy rather than a standards body: OMB Memorandum M-15-13 requires federal websites to serve only over HTTPS, which makes transport security a compliance question for these publishers specifically.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second is <strong>severity</strong>, which is a claim about consequence, and it is deliberately allowed to diverge from normativity in both directions. An undeclared licence is conventional, because no specification compels a publisher to state a licence inside the payload, and high severity, because a consumer who cannot determine the licence cannot lawfully redistribute derived data. A mislabelled media type is normative, because it violates the media type registration, and low severity, because almost every client sniffs the content anyway.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Findings are expressed as W3C EARL assertions rather than a bespoke result format, because EARL already carries the distinction this domain needs. It has five outcomes, not two, and this register uses them in earnest. A SKOS scheme carrying no OWL axioms is recorded <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:inapplicable</code> for OWL profile conformance, not <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:failed</code>. A reasoner that exhausts its budget yields <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">earl:cantTell</code>, never a silent pass. Of the 728 results in this run, 155 are inapplicable and 50 could not be determined, and publishing those counts is what lets a reader recompute the aggregate under a different weighting.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Assessments attach to a snapshot, never to an abstract asset. Each snapshot records the URL requested, the URL finally resolved to, the HTTP status, the media type actually returned, the byte count and a SHA-256 of the bytes. A publisher can re-fetch and compare hashes. If the hash changed, the finding may be stale and this register is wrong to keep asserting it. That property is what makes the results contestable rather than merely assertive.
      </p>
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
        Two independent parsers agree that something is wrong, and they disagree interestingly about what to do. rdflib refuses the file. OWLAPI, via ROBOT, does not fail: it emits a recognition warning and silently substitutes error entities named Error1 through Error8. The second behaviour is the more dangerous one, because a pipeline built on it produces a graph that looks complete and quietly is not. Silent parser recovery is how a defect survives for years.
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
        This is the class of defect a checker finds in a second and a careful human reader never notices, because on the screen the labels look correct and the multilingual intent is obvious. It is also a one-line fix per label.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The rest of the normative column, and what is conspicuously absent from it</h2>
      <p className="text-gov-dark leading-relaxed">
        The remaining normative failures are small in number and concrete. Four NASA GCMD concept scheme endpoints return <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/xml</code> rather than <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/rdf+xml</code>, so a client negotiating content properly cannot tell it has been handed RDF, although the payload is well formed and parses. Three assets carry pairs of concepts asserted both associatively and hierarchically, which SKOS condition S27 makes disjoint: 4,700 of roughly 246,000 pairs in the USGS Common Geographic Areas file, which at that scale looks like a generation artefact rather than editorial slips, 6 of 32 in GCMD Platforms, and 1 of 1,106 in the USGS Thesaurus. Two assets breach S14 on a small proportion of concepts.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What is absent from that column matters as much. There were no failures on retrievability: every asset was obtainable at the address its publisher advertises. There were no failures on HTTPS: every plain HTTP request either redirected to HTTPS or, in the EPA&apos;s case, was refused outright, which is stronger. There were no inconsistent ontologies, no unsatisfiable classes, and no violations of the SKOS disjointness conditions S9, S13, S37 or S46 anywhere in the sample. A report that wanted a scandal would have to manufacture one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The real pattern is governance</h2>
      <p className="text-gov-dark leading-relaxed">
        The conventional column is where the estate actually shows strain, and it clusters tightly. Twenty-one of 28 assets carry no licence statement anywhere in the payload. Twenty name no publisher or creator. Fourteen carry no version or dated metadata. Thirteen have terms without definitions, and twelve do not return RDF when RDF is requested at their namespace.
      </p>
      <p className="text-gov-dark leading-relaxed">
        None of that breaks a rule, and it would be wrong to describe any of it as an error. It is also the set of properties that determines whether a downstream consumer can act. An organisation building a retrieval pipeline over federal vocabularies has to answer three questions before it can ship: may we redistribute derived data, which version did we ingest, and who do we contact when a term changes underneath us. For most of this sample, the payload answers none of the three, and the answers live in a landing page a machine will not read.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is also a coverage story worth stating plainly. Several assets sought for this register are not available as RDF at all. NIEM 6.0, the largest US federal data exchange standard, publishes its normative model as XML Schema, and the only RDF-adjacent artefact in its repository is a JSON-LD context of 5,418 bytes. The EPA Substance Registry Services returns HTML when RDF is requested. NIST OSCAL is XML and JSON Schema. Those are recorded as sought and not obtainable rather than scored against criteria they were never built to meet, because a register that lists only what worked is not a register of the estate.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two mistakes this register made, and why they are on the page</h2>
      <p className="text-gov-dark leading-relaxed">
        An instrument that audits other people should show its own working, including the parts that were wrong. Two findings from the first run were discarded before publication.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The first was a transport finding attributed to the wrong party. The DCAT-US 3.0 SHACL shapes and the National Archives restrictions vocabulary were retrieved from <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">raw.githubusercontent.com</code>, which serves Turtle files as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">text/plain</code>. The register booked a media type violation against GSA and the National Archives for a header that GitHub sets. Attributing a mirror&apos;s behaviour to a publisher is exactly the category error this whole approach exists to avoid. Those assets are now flagged, and transport checks return inapplicable for them with the reason stated.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second was a check that measured its own regular expression. The dependency check originally derived namespace prefixes by truncating term URIs at the last slash or hash, then probed the prefixes. It reported <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">http://id.loc.gov/vocabulary/</code> as a dead dependency of twelve assets. That URL does return 404, but no publisher ever minted it, and every real sub-namespace beneath it resolves normally. The check now probes the referenced terms themselves over a deterministic sample. The corrected count is six assets rather than eighteen, and the original headline was thrown away rather than published.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A third case changed shape rather than disappearing. The NOAA paleoenvironmental thesaurus initially recorded as unparseable. It is served as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">application/rdf+xml; charset=ISO-8859-1</code>, carries no XML declaration, and contains a byte that is not valid UTF-8 at offset 9,497: the n-with-tilde in &quot;El Nino&quot;. A correct HTTP client honours the charset parameter, so the loader now does, and the file parses to 27,326 triples. The underlying issue is real but different from a parse failure, and it is now reported as its own check: detached from its HTTP headers, the file cannot be decoded. Since XML 1.0 expressly permits an external protocol to supply the encoding, it is graded conventional rather than a violation.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border-l-4 border-gov-blue bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">Correction, 16 August 2026</h2>
        <p className="text-gov-dark leading-relaxed">
          A reader pointed out on the day of publication that the repository this register harvested the DCAT-US artefacts from, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">github.com/DOI-DO/dcat-us</code>, was archived on 28 April 2026 and is read-only. The live home is <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">github.com/GSA/dcat-us</code>, maintained by the Data.gov team on a documented semi-annual cycle. The check outcomes for those two payloads are unaffected, because the bytes assessed are the bytes that repository still serves and the snapshot hashes are unchanged. What was wrong was the provenance, and provenance is most of what this register claims to get right.
        </p>
        <p className="text-gov-dark leading-relaxed mt-3">
          The correction surfaced something larger, which belongs in the findings rather than in a footnote. As of 16 August 2026 the live GSA repository contains no SHACL directory and no Turtle files at all, and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">nara-restrictions.ttl</code> sits under <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">DEPRECATED/vocabularies</code>. The canonical validation artefact for DCAT-US v3.0 is now JSON Schema, following draft 2020-12. The SHACL shapes assessed on this page survive only in the archived repository. A register whose purpose is to measure whether published semantic assets can be relied upon should have noticed that one of its own sources was frozen, and it did not. The full entry is in <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">docs/CORRECTIONS.md</code>.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Credit where it is due</h2>
      <p className="text-gov-dark leading-relaxed">
        Reproducible ontology quality tooling is not new, and this register would be dishonest to imply otherwise. The closest prior work is directly on part of this corpus: Mader, Haslhofer and Isaac defined fifteen computable quality functions, implemented them as qSKOS, and ran them over fifteen vocabularies including LCSH, MeSH and NAICS, published at TPDL 2012. They found issues in all fifteen, including 342,848 undocumented concepts in LCSH. The SKOS checks here are a narrower and more conservative descendant of theirs.
      </p>
      <p className="text-gov-dark leading-relaxed">
        OOPS! has catalogued 41 ontology pitfalls, derived from an empirical analysis of more than 693 ontologies, and has been live since 2014. FOOPS! has scored vocabularies against the FAIR principles since 2021. Both come from the Ontology Engineering Group at Universidad Politecnica de Madrid, and between them they are most of the reason automated ontology checking is a solved problem at the level of individual artefacts. The OBO Foundry dashboard goes further and runs a standing, monthly, published report across roughly 190 ontologies, which is the closest thing in the field to what is described here.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What is genuinely new is narrower than a headline would like. It is a standing, contestable register pointed at a national government&apos;s estate, that separates specification violations from community conventions, that publishes the snapshot hashes behind every claim, and that gives the assessed publishers a documented right of reply. The OBO dashboard reaches exactly two US federal vocabularies, and only because biomedicine adopted OBO. The last systematic look at federal SKOS vocabularies was fourteen years ago and covered three of them.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we did not measure</h2>
      <p className="text-gov-dark leading-relaxed">
        Coverage is a seeded sample, not a census, and it is biased toward agencies that publish RDF at all, which by construction underrepresents the agencies whose semantic assets are least accessible. The Library of Congress accounts for 15 of the 28 assets, so proportions should be read as proportions of this sample, in which one publisher is heavily weighted, and not of the federal estate.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Retrievability was observed once, from one network location, on one day. A transient outage and a permanent removal look identical in a single run, which is the main reason the register is built to be re-run rather than published once. Reasoning is bounded by a time budget, and assets that exhaust it report that they could not be determined, which is a limit of this run rather than a judgement about the asset. Assets typed with MADS/RDF rather than SKOS, such as the Thesaurus for Graphic Materials, fall outside the SKOS battery entirely and are assessed only on retrieval, parsing, documentation and governance.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every headline figure on this page was computed twice, once set-based in Python over the results and once by SPARQL over the EARL graph, by a script that shares no code between the two paths and exits non-zero if they disagree. They agree on every figure. That is a guard against arithmetic error, not against a wrong idea, and the two discarded findings above are what a guard against wrong ideas looks like.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">If this register is wrong about your asset</h2>
      <p className="text-gov-dark leading-relaxed">
        Publishers have a standing right of reply, and using it is the fastest way to change a result. Three responses are equally welcome. If the finding is wrong, show the retrieval or the check we got wrong, and the register is fixed and re-run, with the correction recorded publicly rather than quietly edited. If the finding is right and you have fixed it, the next run will pick it up, and because snapshots are hashed the improvement is visible as a changed hash and a changed outcome. If the check simply does not apply to your asset, that is the response we most want, because it is a defect in the catalogue rather than in your asset, and the fix is a narrower applicability rule or an outright removal.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nobody is obliged to agree with a conventional finding. It records a departure from community practice, not a breach of any rule the publisher is bound by, and the register says so on every line.
      </p>
    </section>

    <section className="space-y-4 border-t border-gov-border pt-8">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact, and how to use it on your own estate</h2>
      <p className="text-gov-dark leading-relaxed">
        The whole register is open at <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark underline">github.com/fabio-rovai/semantic-asset-register</a>: the OWL 2 model, the 26-check catalogue with every check bound to its authority and clause, the harvester, the check battery, the report generator, the two-path cross-check, 23 unit tests and continuous integration. Code is MIT, the ontology and results are CC BY 4.0. Retrieved payloads are not redistributed; the register records where each artefact came from, when, and the hash of the bytes received, which is enough to reproduce or falsify any finding.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The battery is not specific to the United States. It is defined over RDF graphs and published authorities, so it points at a UK, EU or Canadian government estate without modification, and at a private vocabulary estate without much more. The question it answers for an organisation is a practical one: if somebody ran this against the vocabularies your AI and data pipelines depend on, which column would your findings land in, and could you tell the difference between the rule you broke and the convention you never adopted.
      </p>
      <p className="text-gov-dark leading-relaxed">
        If you want that answered for your own estate, or you maintain one of the assets above and think we have it wrong, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark underline">fabio@thetesseractacademy.com</a>. A bounded first engagement is a run of this battery over an agreed list of your vocabularies, with the findings split normative and conventional, and the pipeline handed over so you can re-run it yourself.
      </p>
    </section>
  </article>
);
