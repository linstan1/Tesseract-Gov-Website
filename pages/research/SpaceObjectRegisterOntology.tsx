import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/space-object-register-ontology';

const DESC = "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the boundary between the two open catalogues of objects in Earth orbit, built from keyless downloads of CelesTrak's SATCAT (70,292 objects) and Jonathan McDowell's General Catalog of Artificial Space Objects (69,391 numbered objects across four catalogues), both retrieved on 18 August 2026. GCAT marks 22 entries as corresponding to no real object, giving reasons such as radar error and cataloging error, and CelesTrak carries all 22, one of them with no decay date and therefore as a tracked object still in orbit. 1,094 objects GCAT records as no longer tracked carry no data status code in CelesTrak, which maintains that field and applies it to 1,292 others. 20,198 of 34,814 on-orbit objects, 58.0 per cent, have no published radar cross section. CelesTrak's owner code collapses the Soviet Union and the Russian Federation into one value where GCAT separates 16,142 objects from 9,016. Every headline computed two independent ways.";

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/space-object-register-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/space-object-register-ontology',
  headline: 'An open ontology for space object catalogues, tested against CelesTrak and the General Catalog of Artificial Space Objects | Tesseract Academy',
  description: DESC,
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-18',
  dateModified: '2026-08-18',
  about: { '@type': 'Dataset', name: 'Space Object Register Ontology', url: REPO },
  keywords: 'space domain awareness, resident space object, RSO catalogue, satellite catalogue, CelesTrak SATCAT, GCAT, Jonathan McDowell, NORAD catalog number, COSPAR international designator, space debris, conjunction assessment, space traffic coordination, register assurance, SHACL, OWL 2 ontology, SKOS, radar cross section, space object attribution, Registration Convention',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/space-object-register-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a space object catalogue say that one of its own entries is not a real object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only one of the two open catalogues can. GCAT defines a status value, ERR, meaning no object corresponds to this entry, and applies it to 22 entries with stated reasons including radar error, cataloging error, spurious debris and duplicate. CelesTrak carries all 22 of those entries. Neither the NORAD catalog number nor the COSPAR international designator has any way to express nonexistence, so an erroneous entry, once created, is indistinguishable from a real object by any check performed inside a single catalogue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many tracked objects have no size information in the public record?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of 34,814 objects CelesTrak carries with no decay date, 20,198 have no published radar cross section, which is 58.0 per cent. A further 618 have no orbital period at all. No size or mass estimate can be derived from the public catalogue for those objects, which is a direct constraint on any characterisation or risk assessment built on open data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the two catalogues agree on who owns a space object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only 42.2 per cent of shared objects carry an identical owner string, and most of the difference is vocabulary rather than disagreement, because neither register publishes a crosswalk to the other. The substantive part is that CelesTrak uses a single code, CIS, where GCAT separates 16,142 Soviet objects from 9,016 Russian ones, so that distinction cannot be recovered from CelesTrak at all. Separately, 157 objects are attributed to the United States by CelesTrak and to New Zealand by GCAT, which is the launch state against operator nationality question that determines liability under the Registration Convention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the NORAD catalog number and the COSPAR designator well formed in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and we expected otherwise. All 70,292 COSPAR international designators in the CelesTrak SATCAT match the declared pattern, with no duplicates and no designator shared across catalog numbers. The identifier hygiene is complete. The structural weakness lies elsewhere: the NORAD catalog number carries no check digit, so a transcription error produces another syntactically valid NORAD number, and the three number collisions we found inside GCAT were detectable only because GCAT maintains its own independent JCAT identifier alongside it.',
      },
    },
  ],
};

export const SpaceObjectRegisterOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        An open ontology for space object catalogues, tested against CelesTrak and the General Catalog of Artificial Space Objects
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Every collision warning, every reentry prediction and every attribution of an object to a state rests on a catalogue entry being about a real thing. Two catalogues of objects in Earth orbit are open and free to download. On 18 August 2026 we took both, reconciled them object by object, and measured what happens where they meet. The answer is not that either is careless. Their identifier hygiene is better than any register we have previously measured. The answer is that a catalogue can be perfectly self-consistent and still be wrong about whether a thing exists, and that only one of the two has any way to say so.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>GCAT marks 22 entries as corresponding to no real object, with reasons in its own words including <em>Radar error</em>, <em>Cataloging error</em>, <em>Spurious debris?</em> and <em>Delta 150 duplicate</em>. CelesTrak carries all 22.</li>
          <li>One of them, catalog number 11006, has no decay date in CelesTrak and therefore counts as a tracked object still in orbit.</li>
          <li>1,094 objects GCAT records as no longer tracked carry no data status code in CelesTrak. This is not a missing field: CelesTrak maintains it and applies it to 1,292 other objects.</li>
          <li>261 objects on which the two catalogues genuinely disagree about whether the object still exists in orbit, spread across every decade from the 1960s to the 2020s, so update lag does not explain them.</li>
          <li>20,198 of 34,814 on-orbit objects, 58.0 per cent, have no published radar cross section, and 618 have no orbital period at all.</li>
          <li>605 objects GCAT tracks have no NORAD number at all, 334 of them still in orbit, 538 launched since 2020.</li>
          <li>All 70,292 COSPAR designators are well formed, with no collisions. We expected malformation and found none.</li>
          <li>The artefact is an open OWL 2 ontology, a SKOS scheme registry and three SHACL layers, one shape per defect class, code MIT, ontology and documentation CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Credit where the work already exists</h2>
      <p className="text-gov-dark leading-relaxed">
        This study is only possible because Jonathan McDowell has maintained the <a href="https://planet4589.org/space/gcat/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">General Catalog of Artificial Space Objects</a> for decades and records things no other public catalogue records. The status value for an entry that corresponds to no object is his. The status value for an object presumed in orbit but no longer tracked is his. The phase model, in which an entry describes a period in an object&apos;s flight history rather than the object itself, is his. Several of the findings below exist only because he wrote them down. What follows does not replace that work. It makes the disagreements between catalogues machine-checkable, and it reports three candidate defects back to GCAT rather than publishing them as somebody else&apos;s problem.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we measured</h2>
      <p className="text-gov-dark leading-relaxed">
        Two catalogue surfaces, both keyless, both pinned to snapshots of 18 August 2026. The <a href="https://celestrak.org" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">CelesTrak</a> SATCAT carries 70,292 objects with the NORAD catalog number, the COSPAR international designator, owner, launch and decay dates, orbital elements, radar cross section, and CelesTrak&apos;s own codes for operational status and data status. GCAT is not one file but four, and the distinction matters: <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">satcat</code> carries 69,999 phases across 69,391 numbered objects, with <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">auxcat</code>, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ftocat</code> and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">satcat100k</code> holding objects the standard catalogue does not. GCAT is licensed CC BY 4.0. CelesTrak states no licence on the site, so the pipeline and the regenerable graph are published and the data is not.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The two join on the NORAD catalog number and on the COSPAR designator. 69,390 objects are in both.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Sources: the satellite catalogue data is from <a href="https://celestrak.org" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">CelesTrak</a> (<a href="https://celestrak.org/pub/satcat.csv" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">satcat.csv</a>), cited here as the source at CelesTrak&apos;s request, and from McDowell, Jonathan C., 2020, <a href="https://planet4589.org/space/gcat/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">General Catalog of Artificial Space Objects</a>, CC BY 4.0.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: the entries that are not objects</h2>
      <p className="text-gov-dark leading-relaxed">
        GCAT defines a status value, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">ERR</code>, whose published meaning is &quot;no object corresponding to this entry (tracking or cataloging errors)&quot;. It applies to 22 entries. Every one of those 22 is also carried by CelesTrak. GCAT gives its reasons in the entry names themselves: catalog number 9633 is <em>Cataloging error</em>, 10909 and 10910 are both <em>Radar error</em>, 7965 is <em>Spurious debris?</em>, 4925 is <em>Explorer XXVI dup?</em>, and 11006 is <em>Delta 150 duplicate</em>.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Twenty-one of the 22 carry a decay date in CelesTrak, so they are at least recorded as gone. One does not. Catalog number 11006, which GCAT identifies as a duplicate of another Delta rocket body, appears in the CelesTrak SATCAT with no decay date. An entry that the leading independent catalogue says corresponds to no physical object is carried, today, as a tracked object still in orbit.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the argument for cross-catalogue assurance in a single case. Neither the NORAD catalog number nor the COSPAR designator can express nonexistence. There is no field in the identifier, and no check inside one catalogue, that distinguishes an erroneous entry from a real object. Only another catalogue, maintained independently, can tell you.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: 1,094 objects nobody is tracking, presented as though they were</h2>
      <p className="text-gov-dark leading-relaxed">
        GCAT has a second status, <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">OX</code>, meaning in orbit but lost, defined as the same as in orbit but with no recent tracking data. It applies to 1,135 objects. Of those, 1,104 have no decay date in CelesTrak, and 1,094 of them carry no CelesTrak data status code at all.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The important part is what makes this a finding rather than a difference in scope. CelesTrak does have a field for exactly this. Its data status code takes the values <em>No Current Elements</em>, <em>No Initial Elements</em> and <em>No Elements Available</em>, and CelesTrak applies it to 1,292 objects: 1,041 as no elements available and 251 as no initial elements. Ten of the GCAT-lost objects are flagged. The other 1,094 are not, and appear in the register as ordinary on-orbit objects. 1,097 of them also carry a blank operational status.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is that anyone counting the on-orbit population from the open catalogue, or screening it for conjunction risk, is including more than a thousand objects whose position is a propagation from data that stopped arriving at an unstated time in the past, with nothing in the record to say so.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: 58 per cent of tracked objects have no size in the public record</h2>
      <p className="text-gov-dark leading-relaxed">
        Of the 34,814 objects CelesTrak carries with no decay date, 20,198 have no published radar cross section. That is 58.0 per cent. A further 618 have no orbital period at all. Nothing about size, mass or construction can be derived from the open catalogue for those objects.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two smaller gaps sit alongside it, and they are open identifications rather than clerical omissions. 180 on-orbit objects have an owner recorded as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">TBD</code>, and 53 have an object type of <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">UNK</code>. The catalogue is stating, correctly and usefully, that it does not know whose these are or what they are.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: attribution does not survive the crossing</h2>
      <p className="text-gov-dark leading-relaxed">
        Only 29,268 of the 69,390 shared objects, 42.2 per cent, carry an identical owner string in both catalogues. Most of that gap is vocabulary rather than disagreement, because the two use different code sets and neither publishes a crosswalk to the other: CelesTrak writes PRC where GCAT writes CN for 8,917 objects, FR against F for 1,438, JPN against J for 903, IND against IN for 763.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One difference is not vocabulary. CelesTrak uses a single owner code, CIS, for 25,158 objects that GCAT divides into 16,142 attributed to the Soviet Union and 9,016 attributed to the Russian Federation. The distinction between a Soviet-era object and a Russian one cannot be recovered from CelesTrak at all, at any level of care, because the register does not carry it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A second difference is a genuine disagreement about a fact with legal weight. 157 objects are attributed to the United States by CelesTrak and to New Zealand by GCAT. That is the difference between the state of the operator and the state from whose territory the launch occurred, and under the Registration Convention it is the question that determines which state carries liability.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding five: what we got wrong, and how we found out</h2>
      <p className="text-gov-dark leading-relaxed">
        The first version of this measurement reported 932 objects on which the catalogues disagree about disposition. The true figure is 261. We publish the error because the cause generalises.
      </p>
      <p className="text-gov-dark leading-relaxed">
        GCAT entries are phases in an object&apos;s flight history, not the object itself, and the status code describes the event that ends the phase. Our first classification treated the reentry codes as meaning the object was gone and everything else as meaning it was still in orbit. That was wrong twice. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">E</code> for exploded and <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">C</code> for collided destroy the object and were being counted as still in orbit. More seriously, codes such as docked, attached, transferred and grappled end a phase because the object joined another object, so GCAT is making no claim about current disposition at all, and 998 such objects were being scored as disagreements. Gemini 8 is the clearest case: GCAT ends the phase at docking with the Agena, CelesTrak records the landing, and the two records are consistent with each other.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The measurement pipeline computes every headline two independent ways and fails its own build if the two disagree. It passed on all of the wrong numbers, because both paths consumed the same misreading of the source vocabulary. Agreement between two implementations of the same misunderstanding is not verification. What caught it was reading the publishers&apos; own field documentation, and decomposing every unexplained residue until nothing was left unaccounted for. Both are now standing steps, and the corrected figures above are what survived them.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the registers get right</h2>
      <p className="text-gov-dark leading-relaxed">
        We expected to find malformed identifiers, because we have found them in every public register we have previously measured. There are none. All 70,292 COSPAR international designators in the CelesTrak SATCAT match the declared pattern of launch year, launch number and piece letter. No designator is shared across catalog numbers. No catalog number is duplicated. The identifier hygiene is complete, and it deserves saying as plainly as a defect would have been.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The structural weakness is elsewhere and it is nobody&apos;s error. The NORAD catalog number is a sequential integer with no check digit, so a single transcription error produces another syntactically valid catalog number and cannot be detected within the scheme. We found three catalog numbers asserted for two different objects inside GCAT, and they were detectable only because GCAT maintains its own independent identifier alongside the NORAD number. In two of the three cases the asserted number differs from GCAT&apos;s own identifier in exactly one digit. Those three are reported to GCAT as defects in GCAT.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The general lesson is an argument for redundant identifiers rather than a criticism of either catalogue. An identifier that cannot check itself needs a second, independently assigned identifier beside it, or errors in it are permanent and invisible.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, and why it transfers</h2>
      <p className="text-gov-dark leading-relaxed">
        The modelling decision that makes all of this expressible is that identity and disposition are not properties of a space object. They are dated claims made by a named catalogue. An object does not have a status; a catalogue asserted a status about it on a date. Once that is the shape of the data, two catalogues disagreeing is an ordinary fact that can be recorded, queried and counted, rather than an inconsistency that has to be resolved away before the data can be loaded.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Each identifier scheme declares its own conformance rule as data rather than in code, so the pipeline validates against the published rule. There are three SHACL layers, structural, scheme conformance and cross-source, with one shape per defect class, which means the validation report is the findings table rather than a separate artefact that can drift from it. The whole thing is 2,367,485 triples, regenerable from public sources in about eight seconds.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the twelfth register we have measured this way. The substrate changes and the failure does not: registers are careful about their own contents and nobody owns the boundary between them.
      </p>
      <div className="mt-4">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gov-blue underline hover:text-gov-blue-dark font-medium">
          The ontology, pipeline and findings on GitHub <ExternalLink className="w-4 h-4" />
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we have not done</h2>
      <p className="text-gov-dark leading-relaxed">
        Two further catalogues exist and are gated behind free accounts rather than closed: the European Space Agency&apos;s DISCOS and the United States Space Force&apos;s Space-Track. A four-way reconciliation is the obvious next version and would settle several of the disagreements above by majority rather than by pairwise comparison. We have also not established whether CelesTrak&apos;s data model has a legitimate reason to retain the 216 entries that GCAT records as destroyed, and we would rather be told than assume.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Both catalogues change daily. Every figure here is a claim about two snapshots taken on 18 August 2026, which is exactly why the model dates every assertion instead of storing status as a property of an object.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If you operate or depend on a space object catalogue, or on any register whose identifiers other people embed, we run a scoped diagnostic of one register boundary as a one-week engagement: harvest, conformance census, cross-source reconciliation, and a findings ledger your engineers can reproduce. The public version of this study took a day against two open sources. The private version is the same method applied to the catalogues and entity systems inside your organisation that disagree with each other in ways nobody has measured.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with the catalogue name.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the same register-boundary discipline found every FDIC LEI truncated in <Link to="/research/bank-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US bank register</Link>, dangling company numbers in <Link to="/research/uk-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the UK public registers</Link>, and the category all of them belong to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>. On space specifically, <Link to="/research/space-metrics-crosswalk" className="text-gov-blue underline hover:text-gov-blue-dark">the space environment metrics crosswalk</Link> measures the same problem one layer up, between debris models rather than between catalogues.
      </p>
    </section>
  </article>
);

export default SpaceObjectRegisterOntology;
