import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/open-ontologies';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/semantic-integrity-detection-delta#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/semantic-integrity-detection-delta',
  headline: 'Semantic-Integrity Defects Evade Static Analysis and Shape Validation: A Cross-Library Detection Study | Tesseract Academy',
  description:
    'A controlled study of four real defects in popular open-source knowledge-graph libraries and whether mainstream static analysis and SHACL validation catch them. They do not; a semantic verifier does.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  keywords: 'knowledge graph, RDF, static analysis, SHACL, semantic verification, injection, data integrity, open-ontologies',
};

const RESULTS = [
  {
    defect: 'Serialization injection',
    tool: 'Pattern-based and dataflow static analyzers',
    verdict: 'Not flagged',
    oo: 'Caught (surfaces the forged triple)',
  },
  {
    defect: 'Invalid identifier',
    tool: 'Pattern-based and dataflow static analyzers',
    verdict: 'Not flagged',
    oo: 'Caught (rejects the invalid identifier)',
  },
  {
    defect: 'Information loss on import',
    tool: 'Pattern-based and dataflow static analyzers',
    verdict: 'Not flagged',
    oo: 'Caught (preserves the term distinctions)',
  },
  {
    defect: 'Vacuous validation',
    tool: 'A reference SHACL validator',
    verdict: 'Reported "Conforms: True"',
    oo: 'Caught (reports conformance as undetermined and names the unmatched shape)',
  },
];

export const SemanticIntegrityDetectionDelta: React.FC = () => {
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
          Semantic-Integrity Defects Evade Static Analysis and Shape Validation: A Cross-Library Detection Study
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Detecting semantic-integrity defects across four knowledge-graph libraries. A controlled study of four real defects in popular open-source knowledge-graph libraries, and whether mainstream static analysis and SHACL validation catch them. They do not. A semantic verifier does.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why these defects hide</h2>
          <p className="text-gov-dark leading-relaxed">
            Knowledge graphs increasingly sit underneath production AI systems, and a defect in how a graph is serialized, parsed, or validated can silently corrupt data or open an injection path. These defects live in the semantic layer rather than in the control flow of the program, so the tools that ordinarily guard software may not see them at all. We ran a small controlled study to find out whether they do.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Method</h2>
          <p className="text-gov-dark leading-relaxed">
            We took four confirmed defects in four popular open-source knowledge-graph and RDF libraries, kept anonymous here, spanning serialization, parsing, and validation. For each defect we ran the analysis tool appropriate to its layer and Open Ontologies against the same artifact. Every artifact was produced by the library&apos;s own code, not simulated.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The four defects</h2>
        <p className="text-gov-dark leading-relaxed">
          Each defect is a genuine fault in a real library, described here at the level of mechanism so that nothing identifies the source.
        </p>
        <ol className="space-y-4 list-decimal pl-6">
          <li className="text-gov-dark leading-relaxed">
            A hand-rolled serializer interpolates a language tag without escaping, so a crafted value forges an additional triple, which is an injection.
          </li>
          <li className="text-gov-dark leading-relaxed">
            An identifier encoder omits the backslash from its set of forbidden characters, so it emits an IRI that a strict parser must reject and a lenient one silently misreads as a different identifier.
          </li>
          <li className="text-gov-dark leading-relaxed">
            A parser flattens datatype, language tag, and IRI-versus-literal distinctions, so terms that are genuinely different become indistinguishable once imported.
          </li>
          <li className="text-gov-dark leading-relaxed">
            A validation component generates constraint shapes that target a namespace absent from the data, so the shapes match nothing and the artifact is certified as conformant even though a required field is missing.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Results</h2>
        <div className="overflow-x-auto rounded-lg border border-gov-border">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gov-bg text-left">
                <th className="px-4 py-3 font-semibold text-gov-dark">Defect</th>
                <th className="px-4 py-3 font-semibold text-gov-dark">Appropriate mainstream tool</th>
                <th className="px-4 py-3 font-semibold text-gov-dark">Verdict</th>
                <th className="px-4 py-3 font-semibold text-gov-dark">Open Ontologies</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.defect} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark">{r.defect}</td>
                  <td className="px-4 py-3 text-gov-secondary">{r.tool}</td>
                  <td className="px-4 py-3 text-gov-secondary whitespace-nowrap">{r.verdict}</td>
                  <td className="px-4 py-3 text-gov-dark">{r.oo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gov-secondary/90 leading-relaxed">
          The pattern-based analyzer ran 694 security rules including an OWASP pack. The dataflow analyzer ran its full security-extended suites, 50 and 103 queries with interprocedural taint analysis, and still passed the injection, which is precisely the class it advertises.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What we found</h2>
          <p className="text-gov-dark leading-relaxed">
            Across the four defects, the mainstream tool appropriate to each layer flagged none. The static analyzers passed the serialization and parsing defects clean, including the injection, because the dangerous sink is defined in the data model rather than in the program, so no amount of code-level analysis reaches it. The reference validator certified the vacuous-shape artifact as conformant. Open Ontologies caught all four.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The boundary we do not cross</h2>
          <p className="text-gov-dark leading-relaxed">
            One further defect we examined, an edge reversal in application logic over a non-RDF graph, is caught by no tool including Open Ontologies, because it is a semantic-correctness error with no structural signature. We state the boundary rather than hide it.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What it means</h2>
          <p className="text-gov-dark leading-relaxed">
            The standard toolchain guards the code, not the meaning. When the correctness of a system depends on the semantics of the data it emits, verification has to operate at the semantic layer, on the artifact itself, which is where Open Ontologies works.
          </p>
        </div>

        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">"A static analyzer can read every line of the code and still miss the defect, because the defect is in the meaning of the data the code emits, not in the code."</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">Fabio Rovai, Tesseract Academy</cite>
        </blockquote>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Verify at the semantic layer</p>
          <p className="text-sm text-gov-secondary mt-1">The engine that caught all four defects is open source.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            open-ontologies on GitHub <ExternalLink className="w-4 h-4" />
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
