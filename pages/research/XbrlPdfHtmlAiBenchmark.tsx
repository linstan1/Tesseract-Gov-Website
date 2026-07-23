import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/xbrl-pdf-html-ai-benchmark#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/xbrl-pdf-html-ai-benchmark',
  headline: 'Does structured data actually help AI read company accounts? A controlled pilot | Tesseract Academy',
  description:
    'A self-funded controlled pilot comparing how well an open-weights language model reads the same UK annual reports as structured XBRL facts, HTML text and PDF text. Three FY2026 filed reports, 21 tasks, 189 scored model calls. Financial extraction accuracy: XBRL 88.9%, PDF 86.7%, HTML 80.0%. XBRL was the only format to ever retrieve a bracketed negative equity figure with the correct sign, and the facts-only condition abstained rather than inventing narrative answers, at 2.9x the token cost.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  keywords:
    'XBRL, iXBRL, xBRL-JSON, structured data, financial reporting, annual reports, AI, large language models, digital reporting, machine-readable accounts, benchmarking, PDF extraction, evaluation',
};

const EXTRACTION = [
  { c: 'XBRL facts', pct: 88.9 },
  { c: 'PDF text', pct: 86.7 },
  { c: 'HTML text', pct: 80.0 },
];

const ACCOUNTING = [
  { c: 'XBRL facts', pct: 77.8 },
  { c: 'PDF text', pct: 66.7 },
  { c: 'HTML text', pct: 55.6 },
];

const TILES = [
  { n: '189', l: 'scored model calls' },
  { n: '3 x 3 x 21', l: 'companies, formats, tasks' },
  { n: '88.9%', l: 'extraction accuracy on XBRL facts' },
  { n: '2.9x', l: 'token cost of full-facts XBRL prompting' },
];

const FAILURES = [
  {
    item: 'Signed figures',
    detail:
      "One company reports negative total equity, shown in brackets in the accounts. The XBRL condition retrieved the signed value in 1 of 3 runs; the HTML and PDF conditions scored 0 of 3 each, misreading the bracketed negative. Sign and scale travel with the XBRL fact; in rendered documents they must be inferred from presentation conventions.",
  },
  {
    item: 'Units and scale',
    detail:
      'Earnings-per-share confusion between pence and pounds destroyed HTML accuracy on one company: 0 of 3 runs correct. The XBRL fact carries its unit explicitly; the document reader has to notice a column heading.',
  },
  {
    item: 'Answering beyond the evidence',
    detail:
      'On narrative questions the facts-only XBRL condition abstained rather than inventing an answer in 7 of 9 runs. Both document conditions produced an answer in all 9. Whether abstention is a failure or a safety property depends entirely on what the downstream system does with a confident wrong answer.',
  },
];

export const XbrlPdfHtmlAiBenchmark: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Structured Reporting</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Does structured data actually help AI read company accounts? A controlled pilot
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          The claim that structured digital reporting makes company accounts easier for machines to read is usually asserted, not tested. In July 2026 we ran a self-funded pilot that tests it directly: the same filed annual reports, presented to the same AI model as structured XBRL facts, as HTML text and as PDF text, on the same questions, with ground truth anchored to the filed data. Structured facts won, but not everywhere, not by a landslide, and not for free.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TILES.map((t) => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-2xl font-bold text-gov-dark tabular-nums">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The design: one report, three formats, like for like</h2>
          <p className="text-gov-dark leading-relaxed">
            We took the FY2026 annual reports of three UK listed companies, Severn Trent, Babcock International and Moonpig Group, as filed in Inline XBRL and sourced from the public <a href="https://filings.xbrl.org" target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">filings.xbrl.org</a> repository. From each filed report we derived three matched conditions: the structured XBRL facts extracted to xBRL-JSON, the tag-stripped HTML text, and text extracted from a PDF rendering. Because all three conditions come from the same filing, the comparison is like for like: the disclosures are identical, only the representation changes.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            We wrote 21 tasks spanning financial extraction, accounting reasoning and narrative questions, with ground truth anchored to the filed XBRL facts and manually verified. One open-weights 30-billion-parameter model, Qwen3-Coder-30B, ran on our own hardware, with 3 repeated runs per condition: 189 scored model calls in total.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The headline numbers</h2>
          <p className="text-gov-dark leading-relaxed">
            On financial extraction, pulling specific figures out of the accounts, the structured condition led: <strong>88.9%</strong> accuracy on XBRL facts against <strong>86.7%</strong> on PDF text and <strong>80.0%</strong> on HTML text, over 45 runs per format. On accounting tasks, which require reasoning over the figures, the gap widened: XBRL <strong>77.8%</strong>, PDF <strong>66.7%</strong>, HTML <strong>55.6%</strong>, over 9 runs per format.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gov-dark mb-2">Financial extraction accuracy (45 runs per format)</p>
          <div className="space-y-2">
            {EXTRACTION.map((e) => (
              <div key={e.c} className="flex items-center gap-3">
                <div className="w-32 text-sm text-gov-dark flex-shrink-0">{e.c}</div>
                <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                  <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${e.pct}%` }} />
                </div>
                <div className="w-14 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.pct}%</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gov-dark mb-2 mt-4">Accounting task accuracy (9 runs per format)</p>
          <div className="space-y-2">
            {ACCOUNTING.map((e) => (
              <div key={e.c} className="flex items-center gap-3">
                <div className="w-32 text-sm text-gov-dark flex-shrink-0">{e.c}</div>
                <div className="flex-1 bg-gov-bg rounded-full h-5 overflow-hidden border border-gov-border/40">
                  <div className="h-full bg-gov-blue/80 rounded-full" style={{ width: `${e.pct}%` }} />
                </div>
                <div className="w-14 text-right text-sm font-semibold text-gov-dark tabular-nums">{e.pct}%</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gov-secondary/90">Accuracy against ground truth anchored to the filed XBRL facts and manually verified. Small cells; treat as directional.</p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where the formats actually break</h2>
          <p className="text-gov-dark leading-relaxed">
            Averages hide the interesting failures. The sharpest single result in the pilot concerns a signed figure, and it is exactly the kind of error a spot check would miss.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gov-bg border-b border-gov-border">
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">Failure mode</th>
                <th className="text-left px-4 py-3 font-semibold text-gov-dark">What happened</th>
              </tr>
            </thead>
            <tbody>
              {FAILURES.map((f, i) => (
                <tr key={f.item} className={`border-b border-gov-border/50 ${i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}`}>
                  <td className="px-4 py-3 font-medium text-gov-dark whitespace-nowrap">{f.item}</td>
                  <td className="px-4 py-3 text-gov-secondary">{f.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The costs nobody advertises</h2>
          <p className="text-gov-dark leading-relaxed">
            Structure is not free. Full-facts XBRL prompting used <strong>2.9 times</strong> the tokens of document text: a median of 51,148 tokens per call against 17,249 to 18,945 for the document conditions. Anyone budgeting an AI pipeline over structured filings should price that in, or invest in fact selection rather than full-facts prompting.
          </p>
          <p className="text-gov-dark leading-relaxed mt-3">
            And no format was reliably consistent with itself. Across repeated runs of identical prompts, exact agreement ranged from <strong>27.8% to 66.7%</strong> depending on condition. That is a finding about the model as much as the formats, and it matters to anyone deploying AI on company data: a single run of any pipeline, structured or not, is not a measurement.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Limitations, stated plainly</h2>
          <p className="text-gov-dark leading-relaxed">
            This is a pilot: three companies, one model, and small cells, particularly on the accounting and narrative tasks. The findings are directional, not definitive. A full study needs more companies, multiple models, contamination controls to rule out the model having memorised the filings, and arms that vary tagging quality, since the value of structured facts presumably depends on how well they were tagged in the first place. What the pilot does establish is that the comparison can be run like for like from real filed reports, and that the differences it surfaces, signed values, units, abstention, are mechanistic and explainable rather than noise.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where this goes</h2>
          <p className="text-gov-dark leading-relaxed">
            This pilot is the demand-side companion to our supply-side benchmark of <Link to="/research/ixbrl-disclosure-benchmark" className="text-gov-blue underline hover:text-gov-blue-dark">how machine-readable UK company accounts actually are</Link>: that work measures how much structure the filed population exposes; this one measures what an AI reader gains when it consumes that structure instead of the rendered document. Together they replace an article of faith about digital reporting with two measured quantities, and both are designed to scale to larger samples.
          </p>
          <p className="text-sm text-gov-secondary/90 leading-relaxed mt-4">
            Independent, self-funded pilot by Kampakis and Co, trading as Tesseract Academy, July 2026. Filed reports sourced from the public filings.xbrl.org repository.
          </p>
        </div>
      </section>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </article>
  );
};
