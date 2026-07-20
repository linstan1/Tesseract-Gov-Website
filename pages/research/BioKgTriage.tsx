import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/bio-kg-triage';
const DEMO = 'https://colab.research.google.com/github/fabio-rovai/open-ontologies/blob/main/case-studies/bio-kg-triage/demo.ipynb';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/ontology-grounded-biomedical-kg#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/ontology-grounded-biomedical-kg',
  headline: 'Grounded, not retrieved: an ontology-validated biomedical knowledge graph | Tesseract Academy',
  description:
    'A validated biomedical knowledge graph across four grounded layers: structured gene-disease associations (Open Targets + Biolink), literature relations from PubTator3, antimicrobial resistance from CARD/ARO, and a pathogen linkage policing ARO, Biolink and NCBITaxon at once against the current NCBI taxonomy. Grounded layers validate clean; ungrounded twins with one fabricated term pass SHACL but are caught by the gate, which also flags 17 retired taxon ids in CARD as a data-freshness signal. Reproducible, with a provenance-carrying hypothesis triage.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  about: {
    '@type': 'SoftwareSourceCode',
    name: 'bio-kg-triage',
    codeRepository: 'https://github.com/fabio-rovai/open-ontologies',
    license: 'https://opensource.org/licenses/MIT',
  },
  keywords: 'biomedical knowledge graph, Biolink Model, Open Targets, closed-world validation, ontology grounding, hypothesis triage, target discovery, RDF, SHACL, LLM',
};

const KG = [
  { kg: 'Grounded (real Biolink predicate)', triples: '284', terms: '3', shacl: 'conforms', viol: '0' },
  { kg: 'Ungrounded (fabricated predicate)', triples: '284', terms: '3', shacl: 'conforms', viol: '1' },
];
const TRIAGE = [
  { r: 1, g: 'BRAF', d: 'cardiofaciocutaneous syndrome', s: '0.877' },
  { r: 2, g: 'TP53', d: 'Li-Fraumeni syndrome', s: '0.876' },
  { r: 3, g: 'PTEN', d: 'Cowden syndrome 1', s: '0.874' },
  { r: 4, g: 'EGFR', d: 'non-small cell lung carcinoma', s: '0.853' },
  { r: 5, g: 'BRCA1', d: 'breast cancer', s: '0.839' },
];

export const BioKgTriage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Foundational Research: Ontology-Native AI
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Grounded, not retrieved: a validated biomedical knowledge graph
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Ungrounded retrieval over the literature lets a language model assert edges with nothing checking that the node types and relations are real, so a hallucinated gene or an invented predicate enters the graph and quietly corrupts everything downstream. This case study does the opposite: every edge is typed with the real Biolink Model and passes a closed-world vocabulary gate before it enters the graph. It is the same correctness gate we benchmarked on schema.org and IES4, now on the biomedical vocabulary and on real data.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Grounded KG violations</p>
          <p className="text-3xl font-extrabold text-gov-dark">0 / 0</p>
          <p className="text-sm text-gov-secondary mt-1">SHACL and closed-world, 284 triples</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Real associations</p>
          <p className="text-3xl font-extrabold text-gov-dark">40 live</p>
          <p className="text-sm text-gov-secondary mt-1">from the Open Targets Platform</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Vocabulary</p>
          <p className="text-3xl font-extrabold text-gov-dark">Biolink</p>
          <p className="text-sm text-gov-secondary mt-1">868 declared terms, every edge typed</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            Target and biomarker discovery still leans on manual literature reasoning, and the tools that promise to automate it, retrieval plus a language model, have no guarantee that the entities and relations they extract are real. A model can emit a plausible gene symbol that does not exist, or a plausible relation like <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">associated_with_disease</code> that is not a real Biolink predicate, and nothing in an ordinary pipeline stops it. As we showed in the <Link to="/research/ontology-correctness-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">open-world hole benchmark</Link>, SHACL will not catch it. In biomedicine that silent failure is expensive: a single fabricated identifier can break an integration that assumed every term was real.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What we built</h2>
          <p className="text-gov-dark leading-relaxed">
            A gene-disease knowledge graph assembled from 40 real associations pulled live from the <a href="https://platform.opentargets.org/" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Open Targets Platform</a> for eight well-known human targets (EGFR, TP53, KRAS, BRCA1, PTEN, BRAF, ALK, MYC). Every edge is typed with the <a href="https://github.com/biolink/biolink-model" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Biolink Model</a>: genes as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">biolink:Gene</code>, diseases as <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">biolink:Disease</code>, linked by <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">biolink:gene_associated_with_condition</code>, with Open Targets provenance on every edge. Then we validated it two ways, and built an ungrounded twin that swaps the one real predicate for a fabricated one to show the difference.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Knowledge graph</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Triples</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Biolink terms</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">SHACL</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Closed-world violations</th>
              </tr>
            </thead>
            <tbody>
              {KG.map((r, i) => (
                <tr key={r.kg} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.kg}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.triples}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.terms}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.shacl}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.viol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          The grounded graph has zero violations of either kind. The ungrounded twin, identical but for the fabricated predicate <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">biolink:associated_with_disease</code>, still reports <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">conforms=true</code> under SHACL, while the closed-world gate rejects it. The same open-world hole, on the biomedical vocabulary, caught by the same gate.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Four grounded layers</h2>
          <p className="text-gov-dark leading-relaxed">
            The gate is not tied to one source or one ontology. We built four layers, each from a different real source, and validated all four the same way. The structured layer above is the first; the second turns raw literature into a KG; the third moves to a different domain and ontology; the fourth links resistance genes to their pathogens and polices three ontologies at once.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Layer</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Source</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Grounded triples</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Closed-world violations</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Ungrounded twin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gov-border/50 bg-white">
                <td className="px-4 py-3 font-medium text-gov-dark">Structured (target-disease)</td>
                <td className="px-4 py-3 text-gov-secondary">Open Targets + Biolink</td>
                <td className="px-4 py-3 text-gov-secondary">284</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">0</td>
                <td className="px-4 py-3 text-gov-secondary">caught</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40">
                <td className="px-4 py-3 font-medium text-gov-dark">Literature</td>
                <td className="px-4 py-3 text-gov-secondary">PubTator3 + Biolink</td>
                <td className="px-4 py-3 text-gov-secondary">169</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">0</td>
                <td className="px-4 py-3 text-gov-secondary">caught</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-white">
                <td className="px-4 py-3 font-medium text-gov-dark">AMR (resistance-to-drug)</td>
                <td className="px-4 py-3 text-gov-secondary">CARD / ARO</td>
                <td className="px-4 py-3 text-gov-secondary">1,283</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">0</td>
                <td className="px-4 py-3 text-gov-secondary">caught</td>
              </tr>
              <tr className="border-b border-gov-border/50 bg-gov-bg/40">
                <td className="px-4 py-3 font-medium text-gov-dark">AMR pathogen linkage</td>
                <td className="px-4 py-3 text-gov-secondary">CARD + NCBI taxonomy</td>
                <td className="px-4 py-3 text-gov-secondary">20,692</td>
                <td className="px-4 py-3 font-semibold text-gov-dark">fake taxid caught; 17 retired flagged</td>
                <td className="px-4 py-3 text-gov-secondary">caught</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gov-dark leading-relaxed">
          The literature layer keeps only the gene-disease relations PubTator3 machine-extracts from 40 real PubMed abstracts, 57 across the eight target genes, and grounds each in Biolink. The resistance-to-drug layer takes 800 of the 5,053 real "confers resistance to" relationships in CARD's Antibiotic Resistance Ontology and polices the ARO namespace, so the gate is shown working on a third ontology and a different domain.
        </p>
        <p className="text-gov-dark leading-relaxed">
          The pathogen layer goes further: 6,404 gene-organism edges from CARD, policing <strong>three ontologies at once</strong>, ARO for the gene, Biolink for the <code className="text-sm bg-gov-bg px-1.5 py-0.5 rounded">in_taxon</code> predicate and types, and NCBITaxon for the organism, checked against the current NCBI taxonomy of 2,871,791 taxids. A fabricated taxon id is caught, as expected. And here the gate earns more than its keep: run against the current taxonomy, it flags <strong>17 organism identifiers in CARD as no longer current</strong>, all seventeen confirmed retired and merged in NCBI's own records. That is a real data-freshness signal, not fabrication, and it is exactly the kind of silent staleness open-world SHACL and a naive well-formedness check both wave through.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Triage, on a graph you can trust</h2>
          <p className="text-gov-dark leading-relaxed">
            Because every edge is validated and typed, the graph answers a ranked, provenance-carrying query directly. These are the top gene-disease hypotheses by Open Targets association score, each row a validated Biolink triple with a source. The score is Open Targets', not a model we invented; the contribution is that a triage built on this graph cannot rank on a fabricated edge.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Rank</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Gene</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Disease</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Open Targets score</th>
              </tr>
            </thead>
            <tbody>
              {TRIAGE.map((r, i) => (
                <tr key={r.r} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 text-gov-secondary">{r.r}</td>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.g}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.d}</td>
                  <td className="px-4 py-3 font-semibold text-gov-dark">{r.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where it fits</h2>
          <p className="text-gov-dark leading-relaxed">
            The graph is the substrate; the model that drafts against it is our <Link to="/research/biology-ontology-language-model" className="text-gov-blue underline hover:text-gov-blue-dark">biology-ontology language model</Link>, fine-tuned to hold term conformance at 100% against Biolink and GO-CAM. The model proposes edges; this gate guarantees the edges use only real terms before they are committed, and the <Link to="/research/certified-denotation" className="text-gov-blue underline hover:text-gov-blue-dark">next gate</Link> will check that a real term is used in a sound place. Neither component does the other's job.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A biomedical knowledge graph is only as trustworthy as its worst edge. Ground every edge in a real ontology and check it before it lands, and hypothesis triage stops being a bet on whether the extractor hallucinated."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>

        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          An independent, self-initiated study on open data and open tools: the Biolink Model, the Open Targets Platform, PubTator3, CARD, and the NCBI taxonomy, all used under their open licences. All four layers are built and validated. Honest limits: the resistance-to-drug layer uses a logged 800-edge slice of ARO's relationships, PubTator3's associations are its own machine extraction, and the triage ranks on Open Targets' own score with provenance rather than a new model. The 17 retired taxon ids the pathogen gate flags are a feature, real but deprecated ids CARD still carries. The full method and reproducible code are in the repository.
        </p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Reproduce it</p>
          <p className="text-sm text-gov-secondary mt-1">Build and validate the KG from live Open Targets data, in Colab or from the repo.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            GitHub <ExternalLink className="w-4 h-4" />
          </a>
          <a href={DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gov-blue text-gov-blue text-sm font-semibold rounded-lg hover:bg-gov-blue/5 transition-colors">
            Run it now (Colab) <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
      </div>
    </article>
  );
};
