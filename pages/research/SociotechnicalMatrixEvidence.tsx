import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars, Tile } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/sociotechnical-matrix-assurance';
const MATRIX = 'https://www.adalovelaceinstitute.org/resource/sociotechnical-evaluation-matrix/';
const REPORT = 'https://www.adalovelaceinstitute.org/report/care-and-consideration/';
const DESC = 'This is a partition of the Ada Lovelace Institute and NICE sociotechnical evaluation matrix into the 39 of 120 cells a published evaluation can settle, the 75 that rest on organisational records and the 6 that are judgements, run against 13 open-access evaluations of large language models for title and abstract screening. A study evidences a median of 20 of the 39 checkable cells. 11 of 13 publish the prompt, 2 of 13 report confidence intervals, 1 of 13 measures performance by language, and 0 of 13 pin an exact model version with a run date.';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/sociotechnical-matrix-evidence#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/sociotechnical-matrix-evidence',
  headline: 'Which cells of a sociotechnical AI evaluation matrix can anyone check? | Tesseract Academy',
  description: DESC,
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  about: { '@type': 'Dataset', name: 'Sociotechnical Matrix Assurance', url: REPO },
  keywords:
    'sociotechnical evaluation, AI evaluation matrix, Ada Lovelace Institute, NICE, public sector AI adoption, LLM screening, title and abstract screening, systematic review automation, AI assurance, evidence audit, SHACL, model version pinning, reproducibility, health inequalities, AI governance',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/sociotechnical-matrix-evidence#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the sociotechnical evaluation matrix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A template published by the Ada Lovelace Institute on 8 September 2026, developed by Cam Rincon and Rumman Chowdhury for the Institute\'s research collaboration with NICE. It asks 120 questions across ten sociotechnical criteria and twelve lifecycle columns, and an organisation answers each as fully, partially or not addressed. It was the central analytic tool for examining NICE\'s feasibility study of a large language model for title and abstract screening.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cells of the matrix can be checked from outside the organisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '39 of the 120 cells can be settled by inspecting a published evaluation, for example a metric with its confidence interval, a verbatim prompt or a pinned model version. 75 can only be settled by organisational records such as a RACI or a stage-gate decision, and 6 are judgements no artefact settles. So 81 of 120 traffic lights in a completed matrix are assertions to anyone outside the organisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How well does the published evidence on LLM screening evidence the checkable cells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Across 13 open-access evaluations of large language models for title and abstract screening, a study fully evidences a median of 20 of the 39 checkable cells. 11 of 13 publish the verbatim prompt, 2 of 13 report confidence intervals on headline metrics, 1 of 13 measures performance by language or region, and 0 of 13 pin an exact model version together with a run date or report energy cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this be applied to a completed matrix in my organisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The class of every cell and the evidence field that settles each artefact-class cell are published in the repository under an open licence. A completed matrix can be partitioned into the cells inspectable evidence can settle and the cells that rest on records or judgement, and the evaluation artefacts can be checked against the 37 evidence fields with the same scripts.',
      },
    },
  ],
};

export const SociotechnicalMatrixEvidence: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, September 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        Which cells of a sociotechnical AI evaluation matrix can anyone check?
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        The Ada Lovelace Institute and NICE have published the best-constructed instrument we have seen for assessing internal AI use in a public body. It is a matrix of 120 questions an organisation answers as fully, partially or not addressed. We asked one question of it. Which of those 120 answers could anyone outside the organisation check, and how often does the published evidence base for the task NICE studied actually carry the evidence. The answer is 39 cells, and about half the time.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>39 of 120 cells are checkable from a published evaluation.</strong> 75 rest on organisational records no publication carries, and 6 are judgements no artefact settles. 81 traffic lights in a completed matrix are assertions to anyone outside the room.</li>
          <li><strong>A published screening evaluation evidences a median of 20 of the 39.</strong> Across 13 open-access studies of large language models for title and abstract screening, 262 of 507 study-cell pairs are fully evidenced, 51.7%.</li>
          <li><strong>Prompts are published; versions are not pinned.</strong> 11 of 13 studies publish the verbatim prompt. 0 of 13 pin an exact model version together with a run date.</li>
          <li><strong>The equity question the report raises is almost never measured.</strong> 1 of 13 studies reports performance by language or region, and it is the study the report itself cites. None of the 12 randomly sampled studies does.</li>
          <li><strong>Intervals, energy and users are missing.</strong> 2 of 13 report confidence intervals on headline metrics; 0 of 13 report energy or compute cost; 0 of 13 collect reviewer or user perspectives.</li>
          <li><strong>Every verdict is computed three ways</strong> and every supporting quote is string-matched against the downloaded source. The third engine, our own, disagreed, and the bug it exposed is filed.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Tile kpi="39 of 120" label="matrix cells a published evaluation can settle" />
        <Tile kpi="81" label="cells that rest on internal records or judgement" />
        <Tile kpi="20 of 39" label="checkable cells a published evaluation evidences, median" />
        <Tile kpi="0 of 13" label="studies pinning model version and run date" />
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why a self-scored matrix needs an evidence layer</h2>
      <p className="text-gov-dark leading-relaxed">
        On 8 September 2026 the Ada Lovelace Institute published Care and consideration, a synthesis of its year-long collaboration with NICE on adopting AI for internal processes. Alongside it the Institute released the sociotechnical evaluation matrix that Cam Rincon and Rumman Chowdhury built as the central analytic tool for examining NICE's feasibility study of an off-the-shelf large language model for title and abstract screening. The matrix crosses ten criteria, from technical validity to participation and systemic impact, with the design, development and deployment stages of a system, and asks a question at every intersection. It is a serious instrument, and it is offered under an open licence for any public body to reuse.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The report is explicit about why the equity criteria matter for this particular task. A screening model trained mostly on English-language publications from high-income settings may perform less well on studies written in English as a second language or conducted in lower-resource settings. Over time that would leave certain populations underrepresented in surveillance reviews even while the aggregate sensitivity of the model looks acceptable. The matrix asks whether that has been measured. Our question is whether anyone could tell from the answer.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A completed matrix is a grid of traffic lights. Each one is the organisation's own statement that a criterion is fully, partially or not addressed. Some of those statements could be checked by anyone with the evaluation report in hand. Others could only be checked by an auditor inside the organisation with access to its risk register and its meeting records. Some are judgements that no document settles. The instrument does not distinguish between these, and until it does, a green cell of the first kind and a green cell of the third kind look identical.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The partition</h2>
      <p className="text-gov-dark leading-relaxed">
        We classified every one of the 120 cells by what could settle it, with a one-line rationale stored next to each cell in the repository. Class A cells are settled by an evaluation artefact that a published feasibility study should itself carry, meaning a named metric with its confidence interval, a verbatim prompt, a pinned model version, a subgroup breakdown or a pre-specified decision rule. Class B cells are settled only by governance records, such as a RACI, a risk register entry, a stage-gate decision or an engagement log. Class C cells are attestations, judgements of adequacy or legitimacy that no artefact settles.
      </p>
      <HBars
        title="How the 120 cells partition by what can settle them"
        note="Classes assigned one cell at a time with a written rationale; the counts recompute from the file and the test suite pins them."
        rows={[
          { label: 'A: evaluation artefact', value: 39, display: '39 cells, 32.5%', color: CHART.teal },
          { label: 'B: governance record', value: 75, display: '75 cells, 62.5%', color: CHART.gray },
          { label: 'C: attestation', value: 6, display: '6 cells, 5%', color: CHART.amber },
        ]}
        labelWidth="w-44"
      />
      <p className="text-gov-dark leading-relaxed">
        Thirty-nine cells, 32.5% of the matrix, can be settled by inspecting a published evaluation. The other 81 cannot be checked by anyone outside the organisation. That is the normal condition of governance frameworks and does not count against this one. What the partition gives a public body is a starting point, namely the 39 cells where an evidence requirement can be written down, checked mechanically, and demanded of a supplier or an internal team before a pilot moves to shadow testing.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For each of the 39 we defined the evidence that settles it, 37 fields in all, and made the definitions deliberately strict. A reported sensitivity without an interval leaves the interval field absent even if one could be computed. A model named only as GPT-4 leaves the version field partial. The fields, the classes and the rationales are open to challenge by issue, and moving a handful of cells between classes changes the counts by that handful without changing the argument.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the published evidence base carries</h2>
      <p className="text-gov-dark leading-relaxed">
        NICE's own feasibility protocol is not yet public, so we ran the 39 checkable cells against the evidence base a public body would draw on to justify the same decision, meaning published evaluations of large language models for title and abstract screening. A recorded PubMed query returned 145 records. 74 were primary evaluations of a generative or fine-tuned model doing record-level screening with a metric against a human reference, 51 of those have open-access full text, and 12 were drawn at random with a recorded seed. We added one study by design, the GPT-4 evaluation across peer-reviewed and grey literature in multiple languages that the report's appendix alludes to, and labelled it as such.
      </p>
      <p className="text-gov-dark leading-relaxed">
        For each of the 13 studies, every one of the 37 fields was scored present, partial or absent from the full text, the supplements and any linked repository, with a verbatim quote and a location for every present or partial field. A checker string-matches every quote against the downloaded source and rejects the record if any quote is not found. That gate caught our own tooling once. A web summariser reported three model version strings for a repository notebook that contains none, and only quotes from the downloaded file were accepted.
      </p>
      <HBars
        title="What 13 published screening evaluations carry, studies scoring present per evidence field"
        note="Amber marks fields present in three studies or fewer. Every study is partial on exact version and date: a version without a date, a rolling alias, or a version that appears only in the deposited code."
        max={13}
        rows={[
          { label: 'Ground truth defined', value: 13, display: '13 of 13', color: CHART.teal },
          { label: 'Test environment described', value: 13, display: '13 of 13', color: CHART.teal },
          { label: 'Failure modes named', value: 13, display: '13 of 13', color: CHART.teal },
          { label: 'Verbatim prompt published', value: 11, display: '11 of 13', color: CHART.teal },
          { label: 'Code or prompts deposited', value: 10, display: '10 of 13', color: CHART.teal },
          { label: 'Subgroup breakdown', value: 9, display: '9 of 13', color: CHART.teal },
          { label: 'Decoding parameters', value: 9, display: '9 of 13', color: CHART.teal },
          { label: 'Worst-case analysis', value: 8, display: '8 of 13', color: CHART.teal },
          { label: 'Recall prioritised', value: 6, display: '6 of 13', color: CHART.teal },
          { label: 'Systematic error analysis', value: 6, display: '6 of 13', color: CHART.teal },
          { label: 'Leakage or contamination', value: 3, display: '3 of 13', color: CHART.amber },
          { label: 'Confidence intervals', value: 2, display: '2 of 13', color: CHART.amber },
          { label: 'Go or no-go rule', value: 1, display: '1 of 13', color: CHART.amber },
          { label: 'Performance by language', value: 1, display: '1 of 13', color: CHART.amber },
          { label: 'Exact version and date', value: 0, display: '0 of 13', color: CHART.amber },
          { label: 'Energy or compute cost', value: 0, display: '0 of 13', color: CHART.amber },
          { label: 'User perspectives', value: 0, display: '0 of 13', color: CHART.amber },
        ]}
        labelWidth="w-52"
      />
      <p className="text-gov-dark leading-relaxed">
        The shape of the result is consistent. The literature is strong on what the model was asked and what it was scored against. Every study defines its reference standard, describes its test environment and names its failure modes, and 11 of 13 publish the prompt verbatim, which killed our pre-registered expectation that fewer than half would. It is thin on the things that make a result reproducible a year later or fair across populations. Not one study pins an exact model version together with the date it was run. Two report confidence intervals on their headline metrics. Three discuss whether the model might have seen the review's included studies in training. One measures performance by language, and that is the study the report already cites, not one of the twelve we sampled.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The version finding deserves a sentence on its own, because it is the one that turns a green cell red without anyone being careless. In two studies the deposited code pins a different model or a different decoding temperature from the one the paper reports, and in one the paper gives a temperature of 0.7 where its own notebook calls the API at 0. A public body that adopts a screening model on the strength of a published sensitivity figure, and cannot say which snapshot of which model produced it on which day, has a result it cannot reproduce after the next silent update. That is the matrix cell on logged prompt and model versions, and no study in the set evidences it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Four cells are evidenced by no study at all. These are user or reviewer perspectives collected as evidence, logged prompt and model versions, reporting detail sufficient to interpret a claim with a pinned version, and energy cost. Three are evidenced by every study, namely failure modes named, reference standard defined and test environment described. A public body writing an evidence requirement into a feasibility protocol now knows which requirements the literature already meets and which it would be the first to demand.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Cross-validation, applied to our own pipeline</h2>
      <p className="text-gov-dark leading-relaxed">
        Every cell verdict is computed three ways, and the pipeline exits non-zero if any two disagree. The three methods are set-based in Python over the records, SHACL validation with one shape per cell using pyshacl, and our own open-source engine. The first two agree on all 507 study-cell pairs. The third reported 52 violations against 245, exactly the four cells that fail for every study and nothing else. A three-record reproduction showed the engine reports full conformance whenever any one focus node conforms. That is a soundness bug in our own tool, it is filed with the reproduction, and it is the reason a verifier is run against a second verifier.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The same discipline runs through the rest of the build. The SHA-256 of every question text is pinned so a silent edit to the matrix fails the tests. Every figure on this page is emitted from the data by a script, and a test checks that each appears verbatim here. Two extraction decisions were changed after the fact for consistency across records, both of them downgrades, and both are logged with the rule that caused them.
      </p>
      <blockquote className="border-l-4 border-gov-blue pl-4 italic text-gov-dark leading-relaxed">
        A traffic light nobody outside the room can check is a statement about the room, not about the system.
      </blockquote>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Scope and method</h2>
      <p className="text-gov-dark leading-relaxed">
        The matrix was exported from the public Google Sheet the Institute links to, and its 120 question cells were extracted with identifiers, under the CC BY-NC 4.0 licence the Institute chose, with attribution and with no question text altered. The study set is a seeded random sample of the open-access subset of one PubMed query run on 11 September 2026, screened against four written criteria by a local model whose one-sentence reasons are published alongside seven overrides made after reading the abstract. Rates computed from 13 studies are estimates for that population with the sample size stated next to them, and they are not a systematic review of the field.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Nothing here is a claim about NICE's feasibility study, which the report says will be published separately, and nothing here is a claim that any organisation's completed matrix is wrong. The finding is about checkability. When NICE's protocol is published, the repository accepts it as one more record and the same 39 checks run against it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The artefact</h2>
      <p className="text-gov-dark leading-relaxed">
        The repository is at <a className="text-gov-blue hover:underline" href={REPO}>github.com/fabio-rovai/sociotechnical-matrix-assurance</a>. It holds the 120 cells with their class and rationale, the 37 evidence-field definitions, the OWL vocabulary and two SHACL layers, the PubMed query and every screening decision, the 13 evidence records with a verbatim quote and location per field, the three-way verdict script, the generated report, and the tests. The matrix text is CC BY-NC 4.0 and the work is non-commercial research; our own vocabulary, classification and reports are CC BY 4.0 and the code is MIT. The matrix itself is at the <a className="text-gov-blue hover:underline" href={MATRIX}>Ada Lovelace Institute</a>, and the report is <a className="text-gov-blue hover:underline" href={REPORT}>Care and consideration</a>.
      </p>
    </section>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <h2 className="text-lg font-bold text-gov-dark font-serif">Where to start</h2>
        <p className="text-gov-dark leading-relaxed">
          A bounded first engagement is a two-week evidence audit of one completed matrix, or of any self-scored AI evaluation framework applied to an internal use case. We partition it into the cells that inspectable evidence can settle and the cells that rest on records or judgement, run the checks that can be run against the evaluation artefacts, and hand back the evidence together with the method, so that the next pilot moves to shadow testing on a documented basis rather than a coloured grid.
        </p>
        <p className="text-gov-dark leading-relaxed">
          What is not validated is eventually wrong, and what is never measured is never fixed. Fabio Rovai, <a className="text-gov-blue hover:underline" href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a>. Corrections are published on this page rather than applied silently.
        </p>
      </div>
    </section>
  </article>
);
