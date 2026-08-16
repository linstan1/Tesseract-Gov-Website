import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/learning-standards-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/learning-standards-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/learning-standards-ontology',
  headline:
    'Every identifier in American K-12 academic standards is dead: 67,141 dereferenced, none resolve | Tesseract Academy',
  description:
    'The Achievement Standards Network was the identifier layer for US academic standards, and its identifiers are embedded across the open education web. We dereferenced 67,141 of them across three populations: every one returns 404, while the vocabulary describing them still resolves from a static object store. Alongside: an axiom census showing the CEDS Ontology v14 declares zero object properties and zero rdfs:domain, a falsifiability experiment in which CEDS detects none of six mis-statements, and an open OWL 2, SKOS and SHACL ontology that records identifier resolvability as data. Built against 1,931,913 standard statements from 771 jurisdictions.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Learning Standards Ontology (LSO)',
    url: REPO,
  },
  keywords:
    'education ontology, learning standards ontology, K-12 standards knowledge graph, Achievement Standards Network, ASN identifiers, CEDS ontology, Common Education Data Standards, CASE 1EdTech, Competencies and Academic Standards Exchange, curriculum alignment, standards alignment, SHACL education, SKOS curriculum, LRMI, educationalAlignment, link rot, persistent identifiers, education data governance, competency framework, CTDL-ASN',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/learning-standards-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Achievement Standards Network (ASN) identifiers still resolve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Measured in August 2026 across three populations totalling 67,141 identifiers, every single one returns HTTP 404. That covers 44,084 identifiers still cited in public code repositories (a full census), 3,057 standards-document identifiers carried by the live standards corpus (a full census), and a random sample of 20,000 drawn from the 770,861 statement identifiers in that corpus. The canonical form, http://purl.org/ASN/resources/{id}, redirects faithfully to asn.jesandco.org and then returns 404. The ASN schema itself, at http://purl.org/ASN/schema/core/, still returns 200 and serves valid RDF/XML from a static object store. The vocabulary survives; the identifiers it describes do not.',
      },
    },
    {
      '@type': 'Question',
      name: 'What replaced ASN, and does the replacement carry the old identifiers forward?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CASE, the Competencies and Academic Standards Exchange from 1EdTech, is the specification the sector migrated to. It mints fresh UUIDs per server and defines no obligation to carry a prior identifier forward, so in general it does not say which ASN identifier its items replace. A live CASE package from the Georgia Department of Education contains 2,453 items and 2,483 associations, with zero references to ASN and zero to CEDS. Separately, Credential Engine maintains CTDL-ASN, which inherited the ASN name and vocabulary lineage but mints its own ce-prefixed UUIDs rather than the ASN identifier space. The Common Standards Project API is the best surviving bridge, because it publishes each standard alongside its original ASN identifier, which is what makes the loss measurable at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the CEDS Ontology have object properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The shipped v14.0.0.0 file declares zero owl:ObjectProperty and zero owl:DatatypeProperty, verified by parsing the release tagged V14.0.0.0 in the CEDStandards/CEDS-Ontology repository. The repository README states that the ontology provides "definitions and meaning about those relationships through Object Properties". Relationships are present in the file, but as 2,336 bare rdf:Property terms annotated with schema.org domainIncludes and rangeIncludes, which schema.org defines as indicative rather than constraining. Across all of those properties the file declares zero rdfs:domain. CEDS describes the ontology as a draft project, is actively maintained, and has a live SHACL and JSON-LD workstream with NCES precisely because the shipped artefact does not constrain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an ontology be tested for whether it can reject a wrong statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and mechanically. Construct specific mis-statements, translate each into the artefact’s own vocabulary, and check whether any axiom actually present in that artefact is violated. Where the artefact has no term for what the mutation says, record the result as inexpressible rather than as undetected, because an artefact cannot be blamed for failing to reject a sentence it cannot form. Applied to six mis-statements: the Learning Standards Ontology detects six, the ASN schema detects one, and CEDS Ontology v14 detects none, with five of the six inexpressible in CEDS at all. The underlying reason is an axiom census: CEDS carries 24 refuting axioms across 243,601 triples, while the abandoned ASN schema carries 121 across 465 triples.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many academic standards are published without a licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of 23,700 standard sets harvested from the Common Standards Project in August 2026, 1,498 (6.3 per cent) state no licence at all, and a further 10,314 (43.5 per cent) carry no publication status, so a consumer cannot tell from the record whether those standards are in force, superseded or draft. 4,760 (20.1 per cent) are marked Deprecated. Where a licence is stated it is usually open: 13,707 sets are CC BY 4.0 US and 8,495 are CC BY 3.0 US. The problem is the silence, not the terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can two US states not tell whether they teach the same thing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the identifier layer fails in both directions at once. In the measured corpus, 433 ASN identifiers are attached to statements whose text is materially different, meaning one globally unique name points at two different standards. In the opposite direction, the single most replicated statement text appears under 718 distinct identifiers, so one expectation carries 718 names. Nothing in the published data says those 718 are the same thing. The alignment layer that should answer the question mostly does not: in the Georgia CASE package examined, 2,453 of 2,483 associations (98.8 per cent) are isChildOf, which is document structure rather than correspondence between frameworks, and cross-framework associations number zero.',
      },
    },
  ],
};

const MODEL = `graph TD
  J["Jurisdiction<br/><i>state, association,<br/>publisher</i>"] --> D["StandardsDocument<br/><i>the versioned work<br/>that gets adopted</i>"]
  D --> S["StandardStatement<br/><i>the thing content<br/>is aligned to</i>"]
  A["Adoption<br/><i>reified: status and dates<br/>differ per jurisdiction</i>"] --> D
  IA["IdentifierAssertion<br/><b>scheme + source + value</b>"] -.-> S
  IA --> RO["ResolutionObservation<br/><b>HTTP status, timestamp,<br/>final URL after redirects</b>"]
  AL["AlignmentAssertion<br/><i>carries its own<br/>falsifiability grade</i>"] -.-> S`;

const CENSUS = `graph LR
  A["Public code search<br/>494 files, 52 repos"] --> B["44,084 canonical<br/>ASN identifiers"]
  C["Common Standards Project<br/>23,700 sets"] --> D["770,861 statement ids<br/>3,057 document ids"]
  B --> E["Dereference<br/>67,141 total"]
  D --> E
  E --> F["<b>0 resolve</b><br/>every one 404"]
  G["purl.org/ASN/schema/core/"] --> H["<b>200 OK</b><br/>RDF/XML from S3"]`;

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

const FINDINGS = [
  {
    f: 'ASN identifiers dereferenced across three populations: every one still cited in public code, every standards-document identifier in the live corpus, and a random sample of statement identifiers',
    n: '0 of 67,141 resolve',
    sev: 'defect',
    means: 'Every learning-resource record, alignment table and metadata store that persisted an ASN URI now holds a name that dereferences to nothing. The redirect still works, which is why nobody noticed.',
  },
  {
    f: 'The ASN schema document itself, which describes those identifiers, served from a static object store',
    n: 'HTTP 200, valid RDF/XML',
    sev: 'signal',
    means: 'The vocabulary outlived the data. A consumer checking whether ASN is alive by fetching its namespace gets a reassuring answer and a false one.',
  },
  {
    f: 'Object properties and domain declarations in the CEDS Ontology v14, the US Department of Education artefact, across its 2,336 properties',
    n: '0 owl:ObjectProperty, 0 rdfs:domain',
    sev: 'gap',
    means: 'Relationships are documented but carry no logical force, so no assertion made in CEDS terms can contradict CEDS. Its own README describes object properties it does not declare.',
  },
  {
    f: 'Terms in CEDS v14 typed as both an owl:Class and a skos:ConceptScheme, conflating a set of individuals with a container of concepts',
    n: '965',
    sev: 'defect',
    means: 'No reasoner can distinguish an instance from a member. Its 19,546 concepts also carry zero broader or narrower relations, so hierarchical vocabularies inside it ship as flat lists.',
  },
  {
    f: 'Mis-statements detected out of six, each translated into the artefact’s own vocabulary: LSO, then the abandoned ASN schema, then the maintained federal ontology',
    n: '6, then 1, then 0',
    sev: 'defect',
    means: 'Five of the six are inexpressible in CEDS at all. A 465-triple abandoned vocabulary constrains more than a 243,601-triple maintained one.',
  },
  {
    f: 'ASN identifiers attached to statements whose text is materially different: one globally unique name, two different standards',
    n: '433',
    sev: 'defect',
    means: 'Any system joining on the identifier merges unrelated expectations. One case attaches four statements about controlled investigations and one about cellular respiration to the same name.',
  },
  {
    f: 'Distinct ASN identifiers carrying the single most replicated statement text, verbatim: the mirror-image failure',
    n: '718',
    sev: 'defect',
    means: 'One expectation, 718 names, and nothing in the data saying they are the same. Cross-state comparison falls back to comparing strings.',
  },
  {
    f: 'Associations in the live Georgia CASE package that are isChildOf, which is document structure rather than correspondence between frameworks',
    n: '2,453 of 2,483 (98.8%)',
    sev: 'gap',
    means: 'Cross-framework associations number zero. The layer that should answer "do these two states teach the same thing" is almost entirely a table of contents.',
  },
  {
    f: 'Standard sets stating no licence at all, and sets carrying no publication status so a consumer cannot tell whether they are in force',
    n: '1,498 and 10,314 of 23,700',
    sev: 'gap',
    means: 'Public curriculum policy that cannot lawfully be redistributed by anyone relying on the published metadata, and standards whose currency is unknowable from the record.',
  },
  {
    f: 'Where a licence is stated in the corpus, whether it is open',
    n: '22,202 of 22,202 are CC BY',
    sev: 'clean',
    means: 'The sector is not trying to lock this data up. 13,707 sets are CC BY 4.0 US and 8,495 CC BY 3.0 US. The failure is silence and identifier custody, not licensing policy.',
  },
];

export const LearningStandardsOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The identifiers underneath American academic standards are all dead, and the redirect still works
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        We dereferenced 67,141 Achievement Standards Network identifiers, the names that American K-12 academic standards were published under and that learning-resource metadata across the open education web still carries. Every single one returns 404. The vocabulary that describes them still resolves, cheerfully, from a static object store, so a system checking whether the scheme is alive gets a reassuring answer. Alongside that census we measured what the surviving standards can actually reject, and built the open ontology that records identifier resolvability as data rather than assuming it. This page explains what we found, how, and what it means if you align content to standards for a living.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The census:</strong> 67,141 ASN identifiers dereferenced across three populations, two of them complete censuses rather than samples. Zero resolve. Every one returns HTTP 404.</li>
          <li><strong>The irony that makes it a governance finding:</strong> <code>purl.org/ASN/schema/core/</code> returns 200 and serves real RDF/XML. The vocabulary outlived the identifiers it describes.</li>
          <li><strong>The reach:</strong> 1EdTech, the body behind CASE, the specification that succeeded ASN, ships a QTI v3 example package whose curriculum references are dead ASN URIs. So do DCMI&apos;s own published LRMI examples.</li>
          <li><strong>The measurement:</strong> given six specific mis-statements, the CEDS Ontology v14 detects none, five of them being inexpressible in it at all. The abandoned ASN schema, 524 times smaller, detects one.</li>
          <li><strong>The artefact:</strong> an open OWL 2 ontology, SKOS identifier-scheme registry and three-layer SHACL suite, in which an identifier is a node carrying its observed HTTP status and an alignment carries its own falsifiability grade. CC BY 4.0 and MIT.</li>
          <li><strong>The evidence base:</strong> 1,931,913 standard statements across 23,700 sets and 771 jurisdictions, joined into a 21,404,069 triple graph.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What ASN was, and why its death is not just a dead website</h2>
      <p className="text-gov-dark leading-relaxed">
        The Achievement Standards Network was the linked-data identifier layer for American academic standards. It minted a persistent, dereferenceable URI for every standards document and every individual standard statement, and it was the scheme the Learning Resource Metadata Initiative was designed around. When LRMI defined <code>educationalAlignment</code>, and when that pattern went into schema.org and from there into the metadata of open educational resources everywhere, the thing on the other end of the alignment was an ASN URI.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That means ASN identifiers are not confined to one dead service. They are sitting inside learning-object records, repository indexes, publisher catalogues and alignment tables built over fifteen years. A search of public code alone finds 44,084 distinct ASN identifiers across 52 repositories, cited 57,769 times: the Learning Registry, inBloom&apos;s tagging application, NCAR&apos;s digital library stack, the T3 Innovation Network&apos;s schema mapper, the CASS competency system, and DCMI&apos;s own worked examples of how to do this correctly.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The sharpest instance is 1EdTech. The organisation that publishes CASE, the specification the sector migrated to precisely because ASN was fading, ships a QTI version 3 example package whose curriculum-standard references are ASN URIs. All nine of them are dead. That is not a criticism of 1EdTech specifically; it is evidence of how deep the dependency runs, that even the successor&apos;s reference material still points at the predecessor.
      </p>
      <Mermaid chart={CENSUS} />
      <p className="text-gov-dark leading-relaxed">
        We measured three populations. Identifiers still cited in public code: all 44,084 dereferenced, a complete census. Standards-document identifiers carried by the live standards corpus: all 3,057, a complete census. Statement identifiers in that corpus: a random sample of 20,000 drawn from 770,861, which at zero successes puts the 95 per cent upper bound on the resolving proportion below 0.02 per cent. A full census of the third population would have taken about eleven hours at a polite request rate, and sampling is stated rather than hidden.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The result in all three: nothing resolves. Not degraded, not slow, not partially migrated. The canonical form <code>http://purl.org/ASN/resources/&#123;id&#125;</code> redirects faithfully to the origin host and the origin host returns 404. Meanwhile <code>http://purl.org/ASN/schema/core/</code> returns 200 with valid RDF/XML, served from an Amazon S3 bucket, and the education-level scheme still resolves too. Someone kept the vocabulary alive. Nobody kept the data.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the failure mode that persistent identifier schemes are supposed to prevent, arriving through the mechanism that was supposed to prevent it. A PURL is an indirection layer whose whole purpose is to outlive the hosting arrangement behind it. Here the indirection layer works perfectly and forwards every request to a 404, which is worse than an outage, because an outage is visible and this is not.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">One standard, all the way down</h2>
      <p className="text-gov-dark leading-relaxed">
        Take AP Microeconomics learning objective POL-5.B, &quot;Explain sources of income and wealth inequality.&quot; It is current, published by the College Board in the 2022 course and exam description, and in force. In the standards corpus it carries three names: a Common Standards Project identifier, the human coding scheme <code>POL-5.B</code> that a teacher would recognise, and the ASN identifier <code>S21370147</code>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Only one of those is a globally unique, dereferenceable name, and it returns 404. The human coding scheme is not unique outside its own document, so any system joining two frameworks on it is joining on a label. The record also carries a rights holder, D2L Corporation, and a licence title of null, so the statement cannot be lawfully redistributed by anyone relying on the published metadata. Nothing in the source data flags any of this. The identifier is simply printed, and everything downstream assumes.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the surviving standards can actually reject</h2>
      <p className="text-gov-dark leading-relaxed">
        An ontology earns its keep by ruling things out. If nothing you can write is inconsistent with it, it is a glossary. So we asked a mechanical question of each published artefact: given a specific wrong statement, does it notice?
      </p>
      <p className="text-gov-dark leading-relaxed">
        Six mis-statements, each translated into the artefact&apos;s own vocabulary, each counted as detected only when an axiom actually present in that artefact is violated. Where an artefact has no term for what the mutation says, the result is recorded as inexpressible rather than as undetected, because an artefact cannot be blamed for failing to reject a sentence it cannot form. The Learning Standards Ontology detects six of six. The ASN schema detects one. The CEDS Ontology v14 detects none, and five of the six are inexpressible in it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Underneath that sits an axiom census. CEDS v14 is 243,601 triples and carries 24 axioms of the kinds that let data contradict a model: domains, ranges, disjointness, cardinality, functionality. Six of those 24 are ranges on CEDS&apos;s own annotation properties such as <code>textFormat</code> and <code>maxLength</code>, and the other 18 are universal restrictions. Across all 2,336 of its domain properties it declares zero <code>rdfs:domain</code>, zero disjointness, and zero cardinality constraints. The ASN schema is 465 triples, has been unmaintained for years, and carries 121.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two further results from the same parse. CEDS v14 declares zero <code>owl:ObjectProperty</code>, while the repository README states that the ontology provides &quot;definitions and meaning about those relationships through Object Properties&quot;. The relationships are there, as 2,336 bare <code>rdf:Property</code> terms annotated with schema.org&apos;s <code>domainIncludes</code> and <code>rangeIncludes</code>, which schema.org defines as indicative rather than constraining. They are documentation, not logic. And 965 CEDS terms are typed as both an <code>owl:Class</code> and a <code>skos:ConceptScheme</code>, conflating a set of individuals with a container of concepts, while its 19,546 concepts carry zero <code>skos:broader</code> relations, so genuinely hierarchical vocabularies inside it, including 1,753 SCED course codes and 7,916 ISO 639-3 language codes, ship as flat lists.
      </p>
      <p className="text-gov-dark leading-relaxed">
        None of this is a verdict on the people who built these things. CEDS calls its ontology a draft, maintains it actively, licenses it Apache-2.0, and runs a SHACL and JSON-LD workstream with NCES precisely because the shipped artefact does not constrain. The measurement says how large the gap currently is, which is the useful thing to know if you are about to validate a pipeline against it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>One correction, stated because it moved a number against us.</strong> Our first checker read multiple <code>rdfs:range</code> declarations conjunctively, which is what RDFS actually says. Under that reading ASN appeared to detect three mutations. It was not detecting them: <code>asn:isChildOf</code> declares two ranges plainly meaning &quot;either&quot;, and the strict reading makes every ordinary ASN parent link violate its own schema. We switched to the charitable disjunctive reading, ASN&apos;s score fell from three to one, and the strict-reading defect is now reported separately as ten ASN properties declaring more than one domain or range. The lower number is the honest one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The corpus fails in both directions at once</h2>
      <p className="text-gov-dark leading-relaxed">
        Identifier systems fail in two opposite ways, and this corpus does both simultaneously.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>One name, several things.</strong> 433 ASN identifiers are attached to statements whose text is materially different. The clearest case we verified by hand against the live API: <code>S100EC5D</code> is attached to five statement records inside one document, Arizona&apos;s Academic Content Standards for Science. Four of them read &quot;Design and conduct controlled investigations.&quot; The fifth reads &quot;State that respiration involves the action of enzymes in cells.&quot;
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>One thing, many names.</strong> &quot;Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling&quot; appears verbatim under 718 distinct ASN identifiers. Nothing in the published data says those are the same expectation. A system asked whether two states teach the same thing has to decide by comparing strings, which is exactly the problem the identifier layer existed to solve.
      </p>
      <p className="text-gov-dark leading-relaxed">
        And the alignment layer that should adjudicate is mostly not alignment. In the live Georgia CASE package we examined, 2,453 of 2,483 associations, 98.8 per cent, are <code>isChildOf</code>: document structure, a table of contents. There are 30 <code>isRelatedTo</code> and zero cross-framework associations of any kind. <code>isRelatedTo</code> is itself worth naming, because no observation counts against it. It is the most common cross-framework predicate in practice and it is unfalsifiable, and a claim that cannot fail cannot inform a decision.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Ten findings, and what each one costs</h2>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Finding</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Number</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Class</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Operational consequence</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((r, i) => (
              <tr key={r.f} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r.f}</td>
                <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{r.n}</td>
                <td className="px-4 py-3"><span className={`font-semibold px-2 py-0.5 rounded whitespace-nowrap ${SEV_STYLE[r.sev]}`}>{r.sev}</span></td>
                <td className="px-4 py-3 text-gov-secondary">{r.means}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures computed on 16 August 2026. Only the CEDS measurement is pinned and byte-for-byte reproducible, from the <code>V14.0.0.0</code> tag. The standards corpus, the CASE server and the citation population are live systems, so a later run gives different totals while the method reproduces exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the ontology does about it</h2>
      <Mermaid chart={MODEL} />
      <p className="text-gov-dark leading-relaxed">
        <strong>Resolvability is recorded data, not an assumption.</strong> An identifier assertion carries its scheme, the source that asserted it, and a dated resolution observation holding the HTTP status, the media type and the final URL after redirects. That last field is what distinguishes a live indirection layer over dead data from a healthy scheme, and it is the distinction that made this whole study possible. No incumbent artefact in this space has anywhere to put that fact, which is why the failure went unmeasured for years.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Scope and custody are declared.</strong> The SKOS registry records for each of seven schemes whether it is document-, statement- or jurisdiction-scoped, whether it is globally unique, whether it promises dereferenceability, and whether anyone is currently honouring that promise. ASN is recorded as dereferenceable and orphaned, and the gap between those two is the subject of this page. The human coding scheme is recorded as not globally unique and minted per document, which is the fact that stops a team joining two frameworks on it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Alignments record what would refute them.</strong> An alignment assertion carries a falsifiability grade and may carry explicit refutation criteria; one with neither is classified automatically as an unfalsifiable alignment. An exact match asserted between a statement and its own ancestor is a contradiction the shapes reject outright, because containment and equality cannot both hold. That is a rule no incumbent standard here can express, which is why injected mis-mappings survive validation against them.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The test suite enforces on this ontology the properties whose absence it measures in others: every property declares exactly one domain and one range, the ontology declares disjointness, and no term is typed as both a class and a concept scheme. A pull request breaking any of those fails CI, deliberately. It would be embarrassing to publish this study and repeat the defects.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The identifier discipline here was first proved on the United States fund universe in our <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link> and then on European insurance in the <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Insurance Register Ontology</Link>. Education is its third instantiation, and the transfer without redesign is itself the finding: regulated register fabrics fail the same way whatever they name.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this matters if you work in education data</h2>
      <p className="text-gov-dark leading-relaxed">
        <strong>Content alignment claims.</strong> Publishers and assessment providers sell alignment to standards. If the identifier those claims resolve against is dead, the claim is unverifiable by anyone outside the company that made it, and internal drift is undetectable. That is a commercial exposure, not just a metadata problem.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Cross-state and cross-framework comparison.</strong> Any product that promises &quot;this works for your state&apos;s standards too&quot; is doing framework-to-framework mapping. With 433 colliding identifiers, 718 names for one common expectation, and 98.8 per cent of the available associations being table-of-contents structure, that mapping is being done by string similarity whether or not anyone says so out loud.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Migration off a dead scheme.</strong> Moving from ASN to CASE or CTDL-ASN means minting new identifiers. Unless the old identifier is carried forward explicitly, every historical alignment silently loses its anchor. The measurement to run before that migration is simple: how many of your stored identifiers still resolve, and what will you record for the ones that do not.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Grounding for automated systems.</strong> Every serious education data programme in 2026 wants language models and agents reading its curriculum graph. A model grounded in a graph where one identifier names both a statement about controlled investigations and a statement about cellular respiration will answer confidently and wrongly, and the confidence is the dangerous part. Validation is not a step before the interesting work; it is what makes the interesting work safe to ship.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Hiring signals.</strong> The sector has noticed. HMH is currently recruiting an Ontology Engineer for the K-12 domain, remote, at $100,000 to $115,000, asking for RDF, OWL, SHACL, SPARQL and experience with foundational ontologies including BFO, DOLCE and the Common Core Ontologies. That is a serious specification, and it exists because the artefacts this page measures do not yet do the job.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Common questions</h2>
      <div className="space-y-5">
        {FAQ_SCHEMA.mainEntity.map((q) => (
          <div key={q.name}>
            <h3 className="font-semibold text-gov-dark mb-1">{q.name}</h3>
            <p className="text-gov-dark leading-relaxed">{q.acceptedAnswer.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Open, reproducible, and free to use</h2>
      <p className="text-gov-dark leading-relaxed">
        The ontology, the identifier-scheme registry, the three-layer SHACL suite, the citation harvester, the resolution census, the corpus harvester, the graph builder and the query library are public. Ontology and documentation under CC BY 4.0, code under MIT. The build report lists what could not be obtained as carefully as what could, including the corrections we made against ourselves during the build, because a study that only reports its successes is marketing. Harvested source data is deliberately not redistributed: some of it states no licence, which is one of the findings.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          learning-standards-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          We build this for publishers, assessment providers, ministries and awarding bodies on their own data. The public version took days against open sources; the private version is the same discipline applied to content catalogues, item banks, curriculum maps and alignment tables that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          A typical first engagement is bounded and diagnostic. We take your alignment data as it is, resolve every identifier in it, build the identifier fabric, run the validation layers, and return a graded findings report separating the dead from the colliding from the merely unlicensed, with the queries attached so your team can re-run it whenever they like. That report is useful whether or not the work continues, which is the point.
        </p>
        <p className="text-gov-dark leading-relaxed">
          If you run curriculum alignment, standards migration, item banking or an education knowledge graph, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>. Send a sample of the identifiers you store and we will tell you what proportion of them still resolve, before any commitment.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: our <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study measures when an ontology can reject a wrong statement, the <Link to="/research/skills-england-occupational-maps" className="text-gov-blue underline hover:text-gov-blue-dark">Skills England occupational maps</Link> apply the same discipline to the UK skills system, and the <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial ontology crosswalks</Link> measure how often standards crosswalks can detect a wrong mapping at all.
      </p>
    </section>
  </article>
);

export default LearningStandardsOntology;
