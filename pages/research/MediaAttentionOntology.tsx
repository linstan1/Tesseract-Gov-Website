import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/media-attention-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/media-attention-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/media-attention-ontology',
  headline:
    'The identifier registry that television measurement runs on covers 1.84% of television | Tesseract Academy',
  description:
    'EIDR is the audiovisual industry’s own content registry. In the open graph it reaches 53.44% of films and 1.84% of television series. We harvested 224,710 EIDR identifier assertions, resolved 1,179 of them against EIDR’s public registry, and found 285 works carrying identifiers at two different levels of the abstraction hierarchy at once, plus 133 identifiers each claimed by two distinct works. Alongside: why a stock ISO 7064 validator rejects 2.78% of perfectly valid EIDR identifiers, the first SKOS serialisation of the IAB Tech Lab taxonomies, and an open OWL 2 ontology in which an observation of attention is distinct from the attention itself.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  about: {
    '@type': 'Dataset',
    name: 'Media Attention Ontology (MAO)',
    url: REPO,
  },
  keywords:
    'media ontology, media attention ontology, TV measurement knowledge graph, EIDR, Entertainment Identifier Registry, content identity, entity resolution media, IAB Tech Lab taxonomy SKOS, IAB content taxonomy RDF, audience measurement ontology, cross-screen measurement, automatic content recognition, ACR, device graph, identity resolution, SHACL media, advertising ontology, CTV measurement, viewership data model, ad tech knowledge graph',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/media-attention-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much of television does EIDR actually cover in open data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Measured across Wikidata in August 2026: 53.44 per cent of films carry an EIDR content identifier (186,079 of 348,231), against 1.84 per cent of television series (1,620 of 87,959). Episodes reach 7.87 per cent and seasons 2.97 per cent. Television films, which are films, reach 27.45 per cent. This measures the open graph rather than EIDR’s internal registry, and that is the operationally relevant number: it is what an organisation can obtain without a commercial EIDR membership. The consequence is that a cross-screen measurement graph assuming one shared content identifier spanning film and television is assuming something the open data does not supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does a standard ISO 7064 implementation reject valid EIDR identifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EIDR’s check character is the ISO 7064 hybrid MOD 37,36 computation, which produces a value in the range 1 to 36. The standard maps the 36th value to a supplementary character, conventionally an asterisk. EIDR does not use an asterisk: it maps that value to the digit 0, giving a clean 36-symbol check alphabet. An unmodified ISO 7064 implementation therefore computes an asterisk where the real identifier carries a 0, and rejects the identifier as corrupt. In our corpus that is 6,252 of 224,577 distinct identifiers, 2.78 per cent, which is almost exactly the one-in-thirty-six a uniformly distributed check character predicts. Every one of them is perfectly valid. We derived this empirically rather than assuming it: the textbook formula matched 97.05 per cent of real identifiers, and the failures were not random but exactly the supplementary-value case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is scope conflation in content identifiers, and how common is it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Content identifiers are minted at different levels of abstraction. A title-level record identifies the work as an idea; an edit-level record identifies one particular cut with its own duration; a manifestation identifies a specific encoding. Nobody watches an abstraction, so a viewing event attaches to a manifestation, and joining measurement data on a title-level identifier silently merges every version of the title. EIDR encodes this properly through its StructuralType field, but a bare EIDR identifier does not reveal its level until you resolve it. We found 522 works in the open graph carrying more than one EIDR identifier, and after resolving all of them against EIDR’s public registry, 285 of those works, 54.6 per cent, hold identifiers at more than one level at once: 281 pairing a title-level Abstraction with a Performance, and 3 pairing an Abstraction with a Digital record.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the IAB Tech Lab advertising taxonomies available in RDF or SKOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The IAB Tech Lab Taxonomies repository contains 21 tab-separated files and three markdown files, and zero RDF, SKOS or OWL files of any kind. The Content, Audience and Ad Product taxonomies are the advertising industry’s shared controlled vocabularies, and they ship as spreadsheets with no URIs, so every consumer re-implements the hierarchy walk and no two implementations agree about the defects. We published what we believe is the first SKOS serialisation, 2,845 concepts across Content 3.1, Audience 1.1 and Ad Product 2.0, carrying the upstream Creative Commons Attribution 3.0 licence forward in each concept scheme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does schema.org model audience measurement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Verified by parsing the current schema.org vocabulary, which carries 17,949 triples and 2,987 labelled terms. Of those, 25 cover broadcast and television distribution, including TVSeries, TVEpisode, TVSeason, BroadcastEvent, BroadcastService and CableOrSatelliteService. There is no term for viewership, impressions, exposure or reach. The Audience class and its subclasses PeopleAudience, BusinessAudience and EducationalAudience describe who content is intended for, not who watched it. WatchAction and ConsumeAction exist as consumer-action markup with no measurement method, no observing party and no confidence attached. So the open landscape lets you say what a programme is, and gives you no way to say that somebody watched it, how you know, or how much you should believe it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should an audience graph keep disagreeing measurements instead of reconciling them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the disagreement is information and the reconciliation is a judgement. Automatic content recognition, a panel meter, set-top-box return path data and a server-side ad log observing the same household in the same hour produce four records that will differ about duration, about attribution and sometimes about what was on screen. Each method has a different blind spot: fingerprint matching recognises only content in its reference library, so a non-match is evidence of absence from the library rather than absence of viewing, and an electronic programme guide lookup resolves what was scheduled rather than what was transmitted, which makes it systematically wrong exactly when audiences are largest, during live sport and breaking news. A model that forces one number at ingestion destroys the ability to ask later which method produced it. The Media Attention Ontology therefore separates an AttentionEvent, something that happened, from an Observation, a record produced by a method that purports to be evidence of it.',
      },
    },
  ],
};

const HIERARCHY = `graph TD
  A["Abstract work<br/>the title as an idea"] --> B["Edit<br/>a specific cut, its own duration"]
  B --> C["Manifestation<br/>an encoding actually delivered"]
  C --> D["Attention event<br/><b>only ever attaches here</b>"]
  A -.->|"work-scoped identifier<br/>joined here by mistake"| D
  E["<b>285 works</b> in the open graph<br/>hold identifiers at two<br/>of these levels at once"]`;

const OBSERVATION = `graph LR
  E["Attention event<br/>something that happened"]
  O1["Observation<br/>automatic content recognition"] --> E
  O2["Observation<br/>panel meter"] --> E
  O3["Observation<br/>return path data"] --> E
  O4["Observation<br/>server-side ad log"] --> E
  E --> D["Derived attribute<br/>window, method, version,<br/>observation count"]`;

const SEV_STYLE: Record<string, string> = {
  clean: 'bg-emerald-50 text-emerald-800',
  defect: 'bg-rose-50 text-rose-800',
  gap: 'bg-amber-50 text-amber-800',
  signal: 'bg-slate-100 text-slate-700',
};

const FINDINGS = [
  {
    f: 'EIDR coverage of films in the open graph, against television series. EIDR is the audiovisual industry’s own registry',
    n: '53.44% vs 1.84%',
    sev: 'gap',
    means:
      'A cross-screen graph assuming one shared content identifier across film and television is assuming something the open data does not supply. Television is the thing television measurement measures.',
  },
  {
    f: 'Works carrying more than one EIDR identifier where those identifiers sit at different levels of the abstraction hierarchy, after resolving every one against EIDR’s own registry',
    n: '285 of 522 (54.6%)',
    sev: 'defect',
    means:
      'A title-level record and a specific cut attached to the same node as though interchangeable. They denote different things and a join on either produces a different answer. No schema storing identifiers as literals can express the problem.',
  },
  {
    f: 'EIDR identifiers each claimed by two distinct works. Every one resolves to a title-level Abstraction record',
    n: '133',
    sev: 'defect',
    means:
      'Either the catalogue holds one work twice or two works share a registry identifier. Both are entity-resolution defects, and neither is visible until the identifier is a node rather than a string.',
  },
  {
    f: 'Valid EIDR identifiers that a validator built on a stock ISO 7064 library rejects as corrupt, because EIDR maps the MOD 37,36 supplementary value to 0 where the standard convention is an asterisk',
    n: '6,252 (2.78%)',
    sev: 'defect',
    means:
      'A silent one-in-thirty-six false positive rate inside a data quality gate. Not a rounding concern: it quietly condemns thousands of perfectly good identifiers.',
  },
  {
    f: 'Distinct EIDR identifiers checked against their own check-character arithmetic',
    n: '0 of 224,577 fail',
    sev: 'clean',
    means:
      'A guarded null result, reported as one. Unlike company and fund registers, where hand-keyed values routinely fail their own arithmetic, this data is perfect, consistent with machine import rather than typing.',
  },
  {
    f: 'IMDb coverage of television seasons. IMDb mints no season-level identifier at all',
    n: '0.78% (205 of 26,429)',
    sev: 'gap',
    means:
      'A join routed through IMDb cannot express season structure, which matters because scheduling, availability, licensing and measurement are frequently organised by season.',
  },
  {
    f: 'RDF, SKOS or OWL files in the IAB Tech Lab taxonomy repository, which publishes the advertising industry’s shared vocabularies for content, audience and ad product',
    n: '0 of 24 files',
    sev: 'gap',
    means:
      'Twenty-one tab-separated spreadsheets with no URIs. Every consumer re-implements the hierarchy walk, and no two implementations agree about the defects, because nobody can point at a concept.',
  },
  {
    f: 'Structural defects in the source found while converting those taxonomies, including concepts in Ad Product Taxonomy 2.0 that declare themselves as their own parent',
    n: '10, of which 2 are cycles',
    sev: 'defect',
    means:
      'A cycle in what is meant to be a tree. Recorded rather than repaired, so the SKOS and the published TSV stay comparable row for row. A converter that quietly fixes its input is how a defect survives for years in every downstream copy.',
  },
  {
    f: 'Terms in the current schema.org vocabulary for viewership, impressions, exposure or reach, out of 2,987 labelled terms',
    n: '0',
    sev: 'gap',
    means:
      'schema.org models the supply side of television well, with 25 broadcast and TV terms. Its Audience class describes who content is for, not who watched it. There is nowhere to put a measurement.',
  },
];

export const MediaAttentionOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The content registry that television measurement runs on covers 1.84 per cent of television
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        EIDR is the audiovisual industry&apos;s own content registry, and it does content identity properly, including the distinction between a title, a cut and an encoding that measurement depends on. In the open graph it reaches 53.44 per cent of films and 1.84 per cent of television series. We harvested 224,710 EIDR identifier assertions, resolved 1,179 of them against EIDR&apos;s public registry to learn what each one actually denotes, and found 285 works carrying identifiers at two different levels of abstraction at once. This page explains what we measured, why a stock checksum library quietly rejects one valid identifier in thirty-six, and what an ontology of measured attention has to do that nothing open currently does.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The coverage gap:</strong> EIDR reaches 53.44 per cent of films in the open graph and 1.84 per cent of television series. Seasons reach 2.97 per cent. The registry built for the audiovisual industry is, in public, a film registry.</li>
          <li><strong>The structural finding:</strong> of 522 works carrying more than one EIDR identifier, 285 hold identifiers at more than one level of the abstraction hierarchy at once. Those identifiers are not synonyms. They denote different things.</li>
          <li><strong>The trap for implementers:</strong> EIDR runs ISO 7064 MOD 37,36 but maps the supplementary value to <code>0</code> rather than <code>*</code>. A validator built from the standard alone rejects 6,252 perfectly valid identifiers, 2.78 per cent, as corrupt.</li>
          <li><strong>The vocabulary gap:</strong> the IAB Tech Lab taxonomies, the advertising industry&apos;s shared vocabularies, contain no RDF, SKOS or OWL of any kind. We published the first SKOS serialisation, 2,845 concepts, and reported the 10 defects we found in the source rather than repairing them.</li>
          <li><strong>The modelling gap:</strong> schema.org has 2,987 labelled terms and not one of them expresses viewership, impressions, exposure or reach.</li>
          <li><strong>The artefact:</strong> an open OWL 2 ontology, SKOS registries and an eight-rule SHACL suite in which an observation of attention is distinct from the attention itself, and an affinity score carries the window, method, version and evidence count that make it auditable. CC BY 4.0 and MIT.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Nobody watches an abstraction</h2>
      <p className="text-gov-dark leading-relaxed">
        Every serious content registry distinguishes levels of abstraction. There is the work as an idea, the title you would name in conversation. There is the edit, a particular cut with its own running time: theatrical, broadcast-standards, a thirty-second advertising version against a fifteen. There is the manifestation, a specific encoding with a resolution and an audio configuration, which is the thing a stream actually delivers.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This matters for measurement in a way it does not matter for a catalogue. A viewing event attaches to a manifestation on a service. It never attaches to an abstraction, because an abstraction has no duration, and duration is what completion, frequency and reach are computed from. Resolve an event only to title level and the loss is invisible the moment the rows are aggregated.
      </p>
      <Mermaid chart={HIERARCHY} />
      <p className="text-gov-dark leading-relaxed">
        EIDR encodes this correctly. Every EIDR record declares a <code>StructuralType</code>: Abstraction, Performance, Digital, Composite. The difficulty is that the identifier does not carry its level in its syntax. <code>10.5240/</code> followed by twenty hexadecimal characters and a check character looks identical whether it names a title or a cut, and Wikidata&apos;s own property definition says so plainly: EIDR content ID is an &quot;identifier for a film or television work, edit or manifestation&quot;. One property, three levels, and no way to tell which you have without asking the registry.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So we asked. We took every work in the open graph carrying more than one EIDR identifier, 522 of them, and resolved all 1,179 identifiers involved against EIDR&apos;s public resolution service, which is genuinely open and answered every request. 285 of those works, 54.6 per cent, turn out to hold identifiers at more than one level at once: 281 pairing an Abstraction with a Performance, three pairing an Abstraction with a Digital record, one holding two Abstractions and a Performance together.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is the shape of the problem stated in data. Two identifiers hang off one node as though they were alternative names for the same thing. They are not. One names the film and one names a particular cut of it, and a measurement pipeline that joins on the first gets every version merged while one joining on the second gets a single cut. Both answers are defensible and they are different numbers. Nothing in the record says which you have.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The registry that does not reach television</h2>
      <p className="text-gov-dark leading-relaxed">
        The larger finding is simpler and harder to design around. We counted, for each kind of work in the open graph, how many carry an EIDR identifier at all.
      </p>
      <div className="overflow-x-auto rounded-lg border border-gov-border">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gov-bg text-left">
              <th className="px-4 py-3 font-semibold text-gov-dark">Work type</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">Items</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">With EIDR</th>
              <th className="px-4 py-3 font-semibold text-gov-dark">With IMDb</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Film', '348,231', '186,079 (53.44%)', '273,283 (78.48%)'],
              ['Television series', '87,959', '1,620 (1.84%)', '50,245 (57.12%)'],
              ['Television series episode', '181,418', '14,277 (7.87%)', '152,758 (84.20%)'],
              ['Television series season', '26,429', '784 (2.97%)', '205 (0.78%)'],
              ['Television film', '22,631', '6,213 (27.45%)', '21,090 (93.19%)'],
              ['Short film', '49,639', '7,998 (16.11%)', '31,704 (63.87%)'],
            ].map((r, i) => (
              <tr key={r[0]} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                <td className="px-4 py-3 text-gov-dark">{r[0]}</td>
                <td className="px-4 py-3 text-gov-dark tabular-nums">{r[1]}</td>
                <td className="px-4 py-3 text-gov-dark tabular-nums">{r[2]}</td>
                <td className="px-4 py-3 text-gov-dark tabular-nums">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Film, 53.44 per cent. Television series, 1.84 per cent. Television film, which is a film, 27.45 per cent. The pattern is consistent and it is about format rather than recency or popularity.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Be precise about what this measures. It measures the open graph, not EIDR&apos;s internal registry, which certainly holds more. That is deliberate, because the open graph is what an organisation can obtain without a commercial membership, and the practical question is not how complete EIDR is but how complete the reachable identifier fabric is. On that question the answer is that anyone building cross-screen measurement on open content identity has a spine for cinema and almost nothing for television.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The season row deserves separate attention, because it fails on the other side too. IMDb covers 78.48 per cent of films and 84.20 per cent of episodes, and 0.78 per cent of seasons, for the straightforward reason that IMDb mints no season-level identifier. A join routed through IMDb identifiers cannot express season structure at all. Seasons are how rights are licensed, how catalogues are merchandised, how release patterns are planned and how a great deal of measurement is reported, and the most widely used identifier scheme in the business has no name for one.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">One identifier in thirty-six that your validator will condemn</h2>
      <p className="text-gov-dark leading-relaxed">
        EIDR identifiers carry a check character, so a corrupted value can be caught before it reaches a join. The algorithm is ISO 7064&apos;s hybrid MOD 37,36 computation, which is the same family used for other alphanumeric identifiers, and implementing it from the standard is straightforward.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We implemented it and tested against 2,000 real identifiers. It matched 97.05 per cent. That is a suspicious number: a correct algorithm should match everything except genuinely broken data, and three per cent broken would itself be a large finding. The failures were not random. Every one of them was the same case, and in every one the recorded check character was <code>0</code> where our implementation computed the supplementary symbol.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The computation yields a value from 1 to 36. ISO 7064 maps the thirty-sixth to a supplementary character, conventionally an asterisk, because the check alphabet only has 36 symbols and the modulus is 37. EIDR does not use an asterisk. It maps that value to the digit <code>0</code>, which gives a clean 36-symbol check alphabet with no special case in the identifier syntax. With that one mapping corrected the algorithm validates <strong>224,577 of 224,577 distinct identifiers, 100 per cent</strong>, and the check characters turn out to be near-uniformly distributed across all 36 symbols, which is independent evidence the algorithm is right rather than accidentally permissive.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The practical consequence is a quiet one. A validator built on a stock ISO 7064 library rejects 6,252 identifiers in this corpus, 2.78 per cent, as corrupt. Every one is perfectly valid. That is a one-in-thirty-six false positive rate inside a data quality gate, which is exactly the sort of defect that gets absorbed as background noise, blamed on upstream partners, and never traced.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Worth stating the null result alongside it, because it cuts against the pattern we have found in other registers. Across all 224,577 identifiers, <strong>zero</strong> fail their check character. In company and fund registers the equivalent measurement reliably turns up hand-keyed values that cannot exist, including transpositions and letter-for-digit slips sitting in official records. This data has none of that, which is consistent with its having been machine-imported rather than typed. We report it as a null result rather than quietly dropping a finding that did not appear.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The advertising industry&apos;s vocabularies have no semantics</h2>
      <p className="text-gov-dark leading-relaxed">
        The IAB Tech Lab publishes the Content Taxonomy, the Audience Taxonomy and the Ad Product Taxonomy. They are the shared controlled vocabularies of programmatic advertising: what a page is about, what an audience segment means, what a creative is selling. They are used for contextual targeting, brand safety and data transparency across the industry.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The repository holds 21 tab-separated files and three markdown files. It contains no RDF, no SKOS, no OWL, and no URIs. This is not an oversight of format only. Without URIs there is no way to state that one taxonomy&apos;s concept is broader than another&apos;s, no way to attach a mapping to a concept rather than to a row number, and no way for two organisations to agree they are talking about the same segment except by agreeing on a spreadsheet.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The files already contain a concept scheme. Each row carries a unique identifier, a parent identifier, a name and the tier path it sits on, which is a SKOS hierarchy written in TSV. So we converted them: 2,845 concepts across Content 3.1, Audience 1.1 and Ad Product 2.0, with the upstream Creative Commons Attribution 3.0 licence and source carried into every generated concept scheme. As far as we can establish this is the first SKOS serialisation of these taxonomies.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The conversion reports defects rather than repairing them, which is the part worth arguing for. Ad Product Taxonomy 2.0 contains two concepts that declare themselves as their own parent, a cycle in what is meant to be a tree, and eight rows whose name column disagrees with its own tier column, mostly casing but including <code>Video Games and Consoles</code> against a tier reading <code>Video Game Consoles</code>. Content 3.1 and Audience 1.1 are structurally clean. A converter that silently fixes its input is how a defect survives for years in every downstream copy, each consumer patching it privately and none of them telling the publisher.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>One correction we made against ourselves.</strong> The first run reported 1,555 defects in the Audience Taxonomy. That was our bug, not theirs. The Audience file&apos;s name column is headed <code>Condensed Name (1st, 2nd, Last Tier)</code> and is a deliberate concatenation, so comparing it against the deepest tier flags every row in the file. Corrected, Audience 1.1 has zero defects. We mention it because a checker that reports a thousand defects in someone else&apos;s data is much more likely to be broken than the data is.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Nine findings, and what each one costs</h2>
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
                <td className="px-4 py-3 font-semibold text-gov-dark whitespace-nowrap tabular-nums">{r.n}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${SEV_STYLE[r.sev]}`}>{r.sev}</span>
                </td>
                <td className="px-4 py-3 text-gov-secondary/90">{r.means}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        All figures computed on 16 August 2026 from a live Wikidata harvest and same-day EIDR resolution. Both are living systems, so a later run gives different totals while the method reproduces exactly. The findings are computed twice, once set-based and once as SPARQL over the built graph, and agree exactly.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the ontology does about it</h2>
      <Mermaid chart={OBSERVATION} />
      <p className="text-gov-dark leading-relaxed">
        <strong>An observation is not the thing observed.</strong> An <code>AttentionEvent</code> is something that happened in the world. An <code>Observation</code> is a record produced by a measurement method that purports to be evidence of it. Automatic content recognition, a panel meter, return path data and a server-side ad log watching the same household in the same hour produce four observations that will disagree about duration, about attribution and sometimes about what was on screen. The ontology holds all four, with their method, their operator and how the content was identified, rather than forcing a single number that erases the disagreement at ingestion. Each method has a specific blind spot worth recording: fingerprint matching recognises only what its reference library contains, so a non-match is evidence of absence from the library rather than absence of viewing, and a programme guide lookup resolves what was scheduled rather than what was transmitted, which makes it systematically wrong precisely during live sport and breaking news.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Identifiers are reified assertions, and scope is declared on the scheme.</strong> An EIDR identifier observed in Wikidata is Wikidata&apos;s claim about EIDR, and keeping that distinct from EIDR&apos;s own record is what made the coverage measurement possible at all. The registry states that IMDb title identifiers are work-scoped, that Ad-ID is creative-scoped, and that EIDR is multi-level, meaning a bare EIDR identifier does not tell you what it denotes until you resolve it. &quot;Can I join these two datasets on this column?&quot; is answered once in the registry rather than assumed separately by every consumer.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Identity links are graded, never <code>owl:sameAs</code>.</strong> A probabilistic or embedding match is evidence about identity, not identity. Embeddings place sequels, remakes, dubbed versions and same-franchise titles very close together, which is exactly the neighbourhood where media entity resolution has to be most careful. The 133 registry collisions are loaded as links with status <code>proposed</code>, a recorded method and a confidence, because a shared identifier is a reason to look rather than a licence to merge. A shape rejects any probabilistic link promoted to accepted below a confidence threshold, since accepting one at low confidence is how two households become one.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Derived attributes are auditable by construction.</strong> A genre, brand or topic affinity carries its window, its method, its version and the number of observations it rests on. A shape fails any affinity scoring above 0.8 that rests on fewer than three observations, which is arithmetically defensible and substantively meaningless, and the single most common way an audience graph acquires confident nonsense. A separate rule fails any derived attribute computed after the subject withdrew consent, because in a domain governed by video privacy statutes &quot;which attributes depend on a withdrawn consent&quot; must be one traversal rather than an investigation.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The shapes are not decorative. A probe graph contains exactly one violation of each of the eight rules and a test fails if any rule stops firing, because a SHACL rule that silently stops matching is worse than no rule: the run still passes and the gate still looks green. One rule genuinely did not fire on first run, because <code>rdf:type</code> inside a SPARQL constraint matches only direct types rather than walking the subclass hierarchy the way <code>sh:targetClass</code> does. It is fixed, and a regression test guards it.
      </p>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        The identifier discipline here was first proved on the United States fund universe in our <Link to="/research/investment-fund-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Investment Fund Ontology</Link>, then on European insurance in the <Link to="/research/insurance-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Insurance Register Ontology</Link>, and then on American academic standards in the <Link to="/research/learning-standards-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">Learning Standards Ontology</Link>. Media is its fourth instantiation, and the transfer without redesign is itself the finding: identifier fabrics fail the same way whatever they name.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why this matters if you work in media measurement</h2>
      <p className="text-gov-dark leading-relaxed">
        <strong>Cross-screen deduplication.</strong> Deduplicating reach across linear, streaming and digital requires deciding that an exposure on one screen and an exposure on another were to the same content. If the content identifier is at title level on one side and cut level on the other, the deduplication is wrong in a direction nobody can see from the output. The 285 cross-level works here are in open data; a commercial catalogue assembled from multiple suppliers will not be cleaner.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Building a graph on content identity.</strong> Any team standing up a media knowledge graph has to choose a spine. The measurement to run before choosing is the one on this page: for your own catalogue, what proportion of each work type carries the identifier you were planning to join on, and at which level was it minted. If the answer for television is anything like 1.84 per cent, the spine is title strings with an identifier decoration, and it is much better to know that at design time.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Affinity and audience segments.</strong> Genre, brand and topic affinities are the product in audience intelligence. An affinity with no recorded window, method version or evidence count cannot be explained to a client, audited by a regulator, or debugged when it drifts. Making that structure mandatory in the schema costs nothing at write time and is impossible to retrofit once a billion of them exist.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Consent that has to be traceable.</strong> Television viewership is among the most regulated categories of behavioural data there is. The question a regulator asks first is not whether consent was captured but which downstream artefacts depend on a consent that has since been withdrawn. That is a graph traversal if consent is modelled at party level and a forensic project if it is not.
      </p>
      <p className="text-gov-dark leading-relaxed">
        <strong>Grounding language models on a media graph.</strong> Every measurement business in 2026 wants models and agents reading its content and audience graph. A model grounded in a graph where one identifier names both a film and a particular cut of it, or where two works share a registry identifier, answers confidently and wrongly. The confidence is the dangerous part. Validation is not a step before the interesting work; it is what makes the interesting work safe to ship.
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
        The ontology, the SKOS registries, the IAB taxonomy conversion, the eight-rule SHACL suite, the harvester, the EIDR resolver, the graph builder and the query library are public. Ontology and documentation under CC BY 4.0, code under MIT. The build report lists what could not be obtained as carefully as what could, including a research strand that was cut short and whose unverified output we therefore refused to use anywhere, because a study that only reports its successes is marketing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One open question is stated rather than answered. Findings on collisions and level conflation count what appears in Wikidata, which is a third-party mirror maintained by editors and bots. How much is a mirroring artefact and how much reflects the registries themselves cannot be settled from open data, and we have deliberately not guessed. If you can resolve it, the issue tracker is the right place.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gov-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-gov-blue-dark transition-colors">
          media-attention-ontology on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          We build this for broadcasters, streamers, measurement companies, agencies and ad tech platforms on their own data. The public version took days against open sources; the private version is the same discipline applied to content catalogues, device graphs, identity spines and affinity layers that disagree with each other in ways nobody has measured yet.
        </p>
        <p className="text-gov-dark leading-relaxed">
          A typical first engagement is bounded and diagnostic. We take your content identity data as it is, resolve every identifier in it, determine what level each was minted at, build the identifier fabric, run the validation layers, and return a graded findings report separating the colliding from the cross-level from the merely absent, with the queries attached so your team can re-run it whenever they like. That report is useful whether or not the work continues, which is the point.
        </p>
        <p className="text-gov-dark leading-relaxed">
          If you run content metadata, cross-screen measurement, identity resolution or an audience knowledge graph, write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a>. Send a sample of the content identifiers you store and we will tell you what proportion resolve, and at which level they were minted, before any commitment.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: our <Link to="/research/machine-validated-open-ontologies" className="text-gov-blue underline hover:text-gov-blue-dark">machine-validated ontologies</Link> study measures when an ontology can reject a wrong statement, and the <Link to="/research/industrial-ontology-crosswalks" className="text-gov-blue underline hover:text-gov-blue-dark">industrial ontology crosswalks</Link> measure how often standards crosswalks can detect a wrong mapping at all.
      </p>
    </section>
  </article>
);

export default MediaAttentionOntology;
