import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/spectral-library-ontology';

const DESC = "An open OWL 2, SKOS and SHACL ontology and reproducible audit of the public mass spectrometry reference libraries, built from keyless downloads of 2,091,754 GNPS2 library spectra across 98 libraries, 20,052 MassIVE datasets and 1,065,831 ReDU sample rows, all retrieved on 21 August 2026. GNPS publishes two independently derived InChIKeys per record, and on 1,485,480 records where both are present they disagree 14,012 times: 13,112 at stereochemistry and 662 at connectivity. Independent recomputation with RDKit reduces the connectivity figure to 229 and reclassifies the other 418 as failures in the register's own derivation. 145 of 4,418 ProteomeXchange accessions MassIVE publishes resolve nowhere. Every headline computed three independent ways.";

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/spectral-library-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/spectral-library-ontology',
  headline: 'The register that publishes its own contradiction: an open ontology for mass spectrometry reference libraries | Tesseract Academy',
  description: DESC,
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  about: { '@type': 'Dataset', name: 'Spectral Library Ontology', url: REPO },
  keywords: 'mass spectrometry, metabolomics, GNPS, MassIVE, ReDU, spectral library, InChIKey, SMILES, InChI, natural products, molecular networking, ProteomeXchange, register assurance, SHACL, OWL 2 ontology, SKOS, CAS Registry Number, chemical identity, training data quality, label noise, MassSpecGym, reference spectra',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/spectral-library-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can one spectral library record contain two incompatible claims about what was measured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and GNPS is the register that lets you prove it. GNPS computes an InChIKey from the depositor’s SMILES and a second InChIKey from the depositor’s InChI, and publishes both. On 1,485,480 records where both are present and well formed, they disagree on 14,012: 13,112 at the stereochemistry layer, 662 at the connectivity layer and 32 at protonation. A connectivity difference means the two claims describe molecules built from different atoms joined differently, inside a record that asserts they are the same substance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the problem uniform across spectral libraries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and the corpus average is misleading on its own. Across all 98 libraries the divergence rate is 0.94 per cent of comparable records. Within individual libraries it ranges from 1.41 per cent in MONA to 59.44 per cent in BILELIB19, with GNPS-NUTRI-METAB-FEM-POS at 37.91 per cent and MASSBANK at 8.53 per cent. Stereochemistry-dense families such as bile acids concentrate the problem, so anyone assembling a reference set or a training set needs the number for the libraries they are actually using rather than the corpus figure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know the disagreement is in the deposited data rather than in your own analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We reparsed the raw SMILES and the raw InChI with RDKit and recomputed both keys ourselves rather than trusting the register’s arithmetic. On a 20,000-record random sample with a recorded seed, RDKit reproduced the published SMILES-derived key on 15,658 of 15,660 comparable records. That independent check also overturned part of our own finding: of the 662 connectivity divergences, only 229 survive recomputation, and for the other 418 RDKit does not reproduce the key GNPS publishes, which makes those a defect in the register’s derivation rather than in the deposited structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the metabolomics community have a register that gets controlled identity right?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ReDU, the sample metadata layer spanning MetaboLights, Metabolomics Workbench, MassIVE and NORMAN, pairs every human-readable term with an ontology identifier and holds up under census: 977,015 populated NCBI taxonomy values are 100.00 per cent conformant, and there are zero non-conformant values across 683,451 anatomy, disease and environment ontology indices. Its one gap is 1,173 disease annotations with the index left blank, and all 1,173 are recoverable from mappings ReDU already publishes in the same file. Controlled identity is being achieved at the sample metadata layer; it is the reference library layer where it is not.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to a dataset accession when two repositories disagree about whether it exists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It becomes doubly invisible. MassIVE publishes a ProteomeXchange accession for 4,418 of its 20,052 public datasets. 145 of those resolve nowhere, failing both the ProteomeXchange PROXI API and the canonical resolver, with PXD000001 confirmed as a working control. They fall into 123 separate runs spanning 2015 to 2026, so this is a persistent low-rate failure in the registration handshake rather than one historical incident. MassIVE tells a reader the deposition is registered and citable, and ProteomeXchange has no record of it.',
      },
    },
  ],
};

export const SpectralLibraryOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        The register that publishes its own contradiction: an open ontology for mass spectrometry reference libraries
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        Every compound identification in untargeted metabolomics rests on a reference spectrum being correctly labelled with a structure. GNPS is unusual among registers in that it derives that structure twice, from two different fields the depositor supplied, and publishes both derivations. Almost nobody does this. It means GNPS is the one place where a register&apos;s internal disagreement with itself can be counted rather than guessed at. On 21 August 2026 we downloaded all of it, 2,091,754 spectra across 98 libraries, and counted.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li>Of 1,485,480 records carrying two derived InChIKeys, 1,471,468 agree. 13,112 diverge at stereochemistry, 662 at connectivity, 32 at protonation.</li>
          <li>Independent recomputation with RDKit cuts the connectivity figure to 229 and reclassifies the other 418 as failures in the register&apos;s own derivation, which is a different defect and a more fixable one.</li>
          <li>The corpus rate of 0.94 per cent hides a range from 1.41 per cent in MONA to 59.44 per cent in BILELIB19. The per-library number is the one that matters.</li>
          <li>164,137 InChI strings, 9.81 per cent of those populated, are published without the mandatory <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">InChI=</code> prefix and are rejected outright by standard chemistry toolkits.</li>
          <li>6,710 CAS Registry Numbers, 6.01 per cent of those populated, fail the check digit CAS itself defines for them.</li>
          <li>113,458 records, 7.21 per cent of those where the check is possible, declare a precursor mass that cannot be reconciled with their own declared neutral mass and adduct.</li>
          <li>Not one of the 2,091,754 records carries a valid SPLASH, the hash that would let a spectrum be recognised in another repository.</li>
          <li>145 of the 4,418 ProteomeXchange accessions MassIVE publishes resolve nowhere, on either of ProteomeXchange&apos;s two surfaces.</li>
          <li>ReDU, by contrast, is 100.00 per cent conformant on 977,015 taxonomy values and has zero non-conformant ontology indices across 683,451 of them.</li>
          <li>The artefact is an open OWL 2 ontology, a SKOS registry of twenty identifier schemes and three SHACL layers, code MIT, ontology and documentation CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Credit before criticism</h2>
      <p className="text-gov-dark leading-relaxed">
        This study exists because of a decision GNPS made that most registers do not. GNPS takes the SMILES a depositor supplied and computes an InChIKey from it, takes the InChI the same depositor supplied and computes a second InChIKey from that, and publishes both in the same record. Two independent derivations of the same fact, side by side, in public. We verified with RDKit that both computations are, in the overwhelming majority of cases, correct.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nothing below is a criticism of that arithmetic. It is a count of something GNPS made countable and nobody had counted. A register that only ever stored one structure per record would look cleaner in every measurement in this article and would be telling you less.
      </p>
      <p className="text-gov-dark leading-relaxed">
        GNPS also names a depositor on every one of the 2,091,754 records and issues a well-formed accession to every one of them. Zero unattributed, zero malformed. That is better than most registers we have measured. MassIVE, for its part, encodes the absence of an associated publication as an explicit controlled term rather than as a blank field, which is the correct way to record that silence is a position.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding one: where two claims in one record stop agreeing</h2>
      <p className="text-gov-dark leading-relaxed">
        An InChIKey is layered, which is what makes this measurable rather than merely observable. The first fourteen characters hash molecular connectivity alone. The next eight hash the remaining layers, where stereochemistry lives. The final character records protonation. Two keys can therefore be compared to say precisely where two structure claims stop agreeing, rather than only that they do.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold">Where the two claims stop agreeing</th>
              <th className="text-right p-3 font-semibold">Records</th>
              <th className="text-right p-3 font-semibold">Share of comparable</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gov-border"><td className="p-3">They agree</td><td className="p-3 text-right">1,471,468</td><td className="p-3 text-right">99.057%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">Stereochemistry</td><td className="p-3 text-right">13,112</td><td className="p-3 text-right">0.883%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">Connectivity</td><td className="p-3 text-right">662</td><td className="p-3 text-right">0.045%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">InChI generation flag only</td><td className="p-3 text-right">206</td><td className="p-3 text-right">0.014%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">Protonation</td><td className="p-3 text-right">32</td><td className="p-3 text-right">0.002%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The stereochemistry cases are not a technicality. In bile acid, steroid and sugar chemistry, stereochemistry is the difference between compounds with different biology. Chenodeoxycholic acid, ursodeoxycholic acid and deoxycholic acid share a skeleton and differ in exactly the layer that is diverging here. When a record says the SMILES is one and the InChI is another, a downstream tool picks whichever field it happens to read, and the register does not say which is right.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The last row exists because we got it wrong first. Characters nine and ten of the second block record whether the key came from a standard or a non-standard InChI and under which version. They describe how the identifier was made, not what it describes. Our first pass counted 206 of those as stereochemical divergence. They are now their own category, defined in the ontology with an explicit instruction that a difference there must never be reported as chemistry.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding two: the check that overturned our own headline</h2>
      <p className="text-gov-dark leading-relaxed">
        662 records diverging at the connectivity layer is the strongest claim in this study, so it was the one we refused to sample. We reparsed the raw SMILES and the raw InChI for all 662 with RDKit and recomputed both keys from scratch.
      </p>
      <p className="text-gov-dark leading-relaxed">
        229 survive. For the other 418, RDKit does not reproduce the <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">InChIKey_smiles</code> that GNPS publishes, and when both keys are recomputed independently they agree. Non-reproduction runs at 63 per cent inside that subset against 0.013 per cent across a 20,000-record random sample drawn with a recorded seed, an enrichment of roughly five thousandfold. Those 418 records are not depositors contradicting themselves. They are the register&apos;s derivation step failing, and concentrating almost entirely in the records that then look contradictory.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Both are real defects and they need different fixes. Conflating them would have produced a larger number and a less useful one. This is what a third independent verification path is for, and it is the second time in this build that it contradicted us.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding three: the corpus average is the wrong number</h2>
      <p className="text-gov-dark leading-relaxed">
        0.94 per cent across the corpus sounds like a rounding error. It is not distributed like one.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold">Library</th>
              <th className="text-right p-3 font-semibold">Divergent</th>
              <th className="text-right p-3 font-semibold">Records</th>
              <th className="text-right p-3 font-semibold">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gov-border"><td className="p-3">BILELIB19</td><td className="p-3 text-right">2,977</td><td className="p-3 text-right">5,008</td><td className="p-3 text-right">59.44%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">GNPS-NUTRI-METAB-FEM-POS</td><td className="p-3 text-right">964</td><td className="p-3 text-right">2,543</td><td className="p-3 text-right">37.91%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">GNPS-NUTRI-METAB-FEM-NEG</td><td className="p-3 text-right">645</td><td className="p-3 text-right">2,239</td><td className="p-3 text-right">28.81%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">GNPS-COLLECTIONS-PESTICIDES-POSITIVE</td><td className="p-3 text-right">162</td><td className="p-3 text-right">653</td><td className="p-3 text-right">24.81%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">RESPECT</td><td className="p-3 text-right">964</td><td className="p-3 text-right">7,112</td><td className="p-3 text-right">13.55%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">MASSBANK</td><td className="p-3 text-right">5,528</td><td className="p-3 text-right">64,783</td><td className="p-3 text-right">8.53%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">GNPS-LIBRARY</td><td className="p-3 text-right">1,115</td><td className="p-3 text-right">16,157</td><td className="p-3 text-right">6.90%</td></tr>
            <tr className="border-t border-gov-border"><td className="p-3">MONA</td><td className="p-3 text-right">793</td><td className="p-3 text-right">56,292</td><td className="p-3 text-right">1.41%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        A forty-twofold spread between the cleanest and the dirtiest library means the corpus figure describes nobody&apos;s actual situation. If you are building a bile acid reference set, your number is 59.44 per cent. If you are training on MONA, it is 1.41 per cent. We know how badly the average misleads because an early version of this study extrapolated from BILELIB19 alone and produced a headline that was wrong by two orders of magnitude. That error is written up in the build report rather than quietly deleted.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The operational consequence is for anyone assembling training data. Public benchmarks in this area draw from GNPS, MoNA and MassBank precisely because they are the largest labelled collections available. The label for a spectrum comes from one of two structure fields, and in the libraries above the two fields disagree at rates from one in seventy to three in five. Nobody has published what that does to a retrieval benchmark, because nobody had the per-library number.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding four: identifiers that fail their own published rules</h2>
      <p className="text-gov-dark leading-relaxed">
        A CAS Registry Number ends in a check digit that CAS defines: the position-weighted sum of the preceding digits, modulo ten. 6,710 of the 111,593 populated CAS numbers in the corpus, 6.01 per cent, fail it. Every one of those is detectable as wrong without consulting any registry, using a rule CAS published so that exactly this would be detectable.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A standard InChI begins with the literal prefix <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">InChI=1S/</code>. 164,137 of the 1,672,597 populated InChI values, 9.81 per cent, do not. Passed straight to RDKit, they return nothing at all rather than a molecule. Nearly one in ten populated InChI values in the largest public spectral library corpus fails to parse in the most widely used chemistry toolkit, for the want of six characters.
      </p>
      <p className="text-gov-dark leading-relaxed">
        113,458 records, 7.21 per cent of the 1,573,871 where the arithmetic is possible, declare a precursor mass to charge ratio that cannot be reconciled with their own declared neutral exact mass and adduct within 0.05 daltons. That tolerance is deliberately loose, roughly a hundred times the precision the instruments involved actually achieve, because we would rather understate this than manufacture it. Where an adduct string could not be read with confidence, no discrepancy was computed at all: only 6,806 records, 0.33 per cent, fall in that category.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding five: values that are not values</h2>
      <p className="text-gov-dark leading-relaxed">
        The <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">user_id</code> field carries the literal four-character string <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">null</code> on all 2,091,754 records. The <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">splash</code> field carries <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">null-null-null-null</code> on 2,047,584 of them. <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">InChIKey_inchi</code> carries the string <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">None</code>, which is what Python prints when it stringifies a null, on 83,184.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A consumer testing whether a field is populated sees a populated field. In our own first pass this caused a seventyfold overstatement of a finding, and we caught it only because we compute every number twice and the two answers differed. Others will not catch it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The SPLASH deserves its own sentence. It is a hash computed from the peak list, designed so that the same spectrum acquires the same identifier in any repository, which is the mechanism by which a spectrum can be recognised across databases at all. Not one record in the corpus has a valid one. The field exists, is populated, and contains a placeholder.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We counted conventional <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">N/A</code> placeholders separately and did not treat them as defects, because saying that a value does not apply is a legitimate thing for a field to do. There are 1,980,161 of them in the CAS field alone.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding six: the crossing between repositories</h2>
      <p className="text-gov-dark leading-relaxed">
        MassIVE holds 20,052 public datasets. 15,634 of them, 77.97 per cent, carry no ProteomeXchange accession and are therefore invisible to the cross-repository index. Of the 4,418 that do carry one, we dereferenced every single accession against both the ProteomeXchange PROXI API and the canonical resolver, with PXD000001 as a control.
      </p>
      <p className="text-gov-dark leading-relaxed">
        145 resolve nowhere. They are not one bad batch: they fall into 123 separate contiguous runs spanning PXD001696 to PXD065767, which is 2015 to 2026. A dataset in this state is doubly invisible, because MassIVE tells a reader the deposition is registered with ProteomeXchange and citable, and ProteomeXchange has no record of it. A further 5 accessions resolve on ProteomeXchange&apos;s human-readable surface and 404 on its machine-readable one, so the two disagree with each other.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One MassIVE finding we expected and did not get. The bulk census publishes an empty principal investigator array for 6,364 datasets, every one from 2006 to 2014. That looks like a third of the repository being unattributed. We re-queried all 6,364 against MassIVE&apos;s own per-dataset interface, with a 400-dataset control from the attributed cohort. All 6,364 have a contact name and a contact email. Not one is genuinely unattributed. The repository knows exactly who deposited every one of them; the bulk export, which is the artefact everyone actually builds on, does not say so.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Finding seven: ReDU, which mostly passes</h2>
      <p className="text-gov-dark leading-relaxed">
        ReDU is the sample metadata layer over four repositories, 1,065,831 rows spanning MetaboLights, Metabolomics Workbench, MassIVE and NORMAN. It is the one register here that commits to controlled vocabularies, pairing each human-readable term with an ontology identifier in its own column, and the commitment holds.
      </p>
      <p className="text-gov-dark leading-relaxed">
        977,015 populated NCBI taxonomy values are 100.00 per cent conformant, with zero malformed. Across 683,451 anatomy, disease and environment ontology indices there are zero non-conformant values. The column named for UBERON correctly carries Plant Ontology terms for 65,397 plant samples and Cell Ontology terms for 10,317 cell samples, because UBERON is animal anatomy and would be the wrong vocabulary for a leaf. We briefly took that for contamination; it is careful modelling.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The single gap is 1,173 rows where a disease name appears with the DOID index blank, across eight disease names and 24 datasets. Every one of the eight is already mapped to a DOID elsewhere in the same file, so all 1,173 rows are recoverable by joining the dump against itself. Today a query for <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">DOID:9970</code> misses 556 obesity samples that ReDU has correctly identified as obesity samples.
      </p>
      <p className="text-gov-dark leading-relaxed">
        ReDU matters to the argument more than its defect count suggests. Controlled chemical and sample identity in metabolomics is not impossible and is not merely aspirational. It is being done, at scale, one layer away from the reference libraries. The reference library layer is where it is not being done.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, which transfers</h2>
      <p className="text-gov-dark leading-relaxed">
        The modelling decision that makes all of this expressible is that chemical identity is not a property of a spectrum. It is a dated claim made by a named depositor. A spectrum does not have a structure; somebody asserted a structure about it on a date, in a particular representation, and possibly asserted a different one in the next field. Once that is the shape of the data, a record contradicting itself is an ordinary fact that can be recorded, queried and counted, rather than an inconsistency that has to be resolved away before the data can be loaded.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Each of the twenty identifier schemes declares its own conformance rule as data rather than in code, so the pipeline validates against the published rule and adding a scheme extends validation without touching a shape. There are three SHACL layers, structural, scheme conformance and cross-source, with one shape per defect class, which means the validation report is the findings table rather than a separate artefact that can drift from it. The graph is 21.6 million statements across 98 library files, regenerable from public sources.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every headline is computed three ways: set-based in Python, by SPARQL over the emitted graph, and for the chemistry by independent recomputation in RDKit. A script exits non-zero if the first two disagree. Six hypotheses died during this build, five of them our own errors, and all six are written up rather than deleted. The build report also records a bug this work exposed in our own validation engine, which was reporting parsed statement counts under a key labelled triples.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is the thirteenth register we have measured this way. The substrate changes and the failure does not: registers are careful about their own contents and nobody owns the boundary between them, or in this case, the boundary between two fields inside a single record.
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
        We have not measured how much any of this moves a benchmark. Establishing what a 59 per cent intra-record disagreement rate does to retrieval accuracy on a bile acid test set requires training models, not auditing registers, and it is the obvious next piece of work for somebody who has the compute.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We have not published a resolution rate for Universal Spectrum Identifiers. A 500-accession sample run at six concurrent connections failed 94 per cent of the time, which would have been the largest number in this study and was entirely an artefact of our own request rate. Asked sequentially, the same population resolves 85 per cent of the time. We cannot separate throttling from genuine non-resolution at any rate we are willing to impose on somebody else&apos;s server, so we report it as not measured rather than as zero.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We have not established why 418 records defeat RDKit&apos;s reproduction of the published SMILES-derived key, only that they do and that the effect is five thousandfold enriched in the divergent subset. That is a question for whoever maintains the derivation step, and we would rather be told than assume.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every figure here is a claim about snapshots taken on 21 August 2026, which is exactly why the model dates every assertion instead of storing identity as a property of a spectrum.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Working with us</h2>
        <p className="text-gov-dark leading-relaxed">
          If you maintain a spectral library, we will send you the per-record list of divergences in your own library, with accessions, for nothing. If you are training a model on public spectral data, the per-library table above is where your label noise floor starts and the pipeline reproduces it for whatever subset you are using.
        </p>
        <p className="text-gov-dark leading-relaxed">
          For organisations whose internal compound registries, instrument exports and reference libraries disagree with each other in ways nobody has measured, we run a scoped diagnostic of one register boundary as a one-week engagement: harvest, conformance census, cross-source reconciliation, and a findings ledger your chemists and your engineers can both reproduce. The public version of this study took a day against three open sources.
        </p>
        <p className="text-gov-dark leading-relaxed">
          Write to <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue underline hover:text-gov-blue-dark">fabio@thetesseractacademy.com</a> with the library or registry name.
        </p>
      </div>
      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Related work: the same register-boundary discipline found every FDIC LEI truncated in <Link to="/research/bank-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the US bank register</Link>, catalogue entries that correspond to no real object in <Link to="/research/space-object-register-ontology" className="text-gov-blue underline hover:text-gov-blue-dark">the space object catalogues</Link>, and the category all of them belong to is set out in <Link to="/research/register-assurance" className="text-gov-blue underline hover:text-gov-blue-dark">Register assurance: why every public register fails at its boundary</Link>.
      </p>
    </section>
  </article>
);

export default SpectralLibraryOntology;
