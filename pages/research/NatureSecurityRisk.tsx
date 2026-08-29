import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/nature-related-security-risk#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/nature-related-security-risk',
  headline: 'Nature-Related Security Risk: an open evidence base and systems ontology',
  description:
    'A self-initiated, open, machine-readable evidence base and systems ontology that operationalises the UK National Security Assessment on biodiversity loss and ecosystem collapse (2026): 14 documented nature-to-security cascades, an OWL ontology and SHACL shapes, aligned to IPBES and the Kunming-Montreal indicators, and built against the securitisation critique.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  about: { '@type': 'Thing', name: 'Nature-related national security risk' },
  keywords:
    'nature security, ecological security, biodiversity loss national security, ecosystem collapse, UK Nature Security Assessment 2026, National Risk Register, risk cascades, tipping points, feedback loops, compounding shocks, IPBES, IPBES Nexus Assessment, Kunming-Montreal Global Biodiversity Framework, TNFD, planetary boundaries, ND-GAIN, Biodiversity Intactness Index, WRI Aqueduct, IUCN Red List of Ecosystems, Swiss Re BES, Council on Strategic Risks, SIPRI Biosphere Security, systems ontology, SHACL, open dataset, IPBES conceptual framework, early warning, strategic foresight',
};

const REPO = 'https://github.com/fabio-rovai/nature-security-risk';

const REFERENCES = [
  { t: 'UK Government, Department for Environment, Food and Rural Affairs (2026) National Security Assessment on global biodiversity loss, ecosystem collapse and national security. Developed across HM Government.', u: 'https://www.gov.uk/government/publications/nature-security-assessment-on-global-biodiversity-loss-ecosystem-collapse-and-national-security' },
  { t: 'IPBES (2024) Nexus Assessment (biodiversity, water, food, health and climate interlinkages).', u: 'https://www.ipbes.net/nexus-assessment' },
  { t: 'IPBES (2019) Global Assessment Report on Biodiversity and Ecosystem Services.', u: 'https://www.ipbes.net/global-assessment' },
  { t: 'IPBES (Daszak, P. et al.) (2020) Workshop Report on Biodiversity and Pandemics.', u: 'https://doi.org/10.5281/zenodo.4147317' },
  { t: 'Richardson, K., Steffen, W. et al. (2023) Earth beyond six of nine planetary boundaries. Science Advances 9(37).', u: 'https://doi.org/10.1126/sciadv.adh2458' },
  { t: 'Global Tipping Points Report (Lenton, T.M. et al.) (2023).', u: 'https://global-tipping-points.org' },
  { t: 'Council on Strategic Risks / Schoonover, R. (2021) The Security Threat That Binds Us: The Unraveling of Ecological and Natural Security.', u: 'https://councilonstrategicrisks.org/the-security-threat-that-binds-us/' },
  { t: 'SIPRI (2023) Biosphere Security: Understanding the Connections between Conflict and Biodiversity.', u: 'https://www.sipri.org/publications/2023/partner-publications/biosphere-security-understanding-connections-between-conflict-and-biodiversity' },
  { t: 'HM Treasury / Dasgupta, P. (2021) The Economics of Biodiversity: The Dasgupta Review.', u: 'https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review' },
  { t: 'Kelley, C.P. et al. (2015) Climate change in the Fertile Crescent and implications of the recent Syrian drought. PNAS 112(11).', u: 'https://doi.org/10.1073/pnas.1421533112' },
  { t: 'Selby, J. et al. (2017) Climate change and the Syrian civil war revisited. Political Geography 60.', u: 'https://doi.org/10.1016/j.polgeo.2017.05.007' },
  { t: 'Lagi, M., Bertrand, K.Z., Bar-Yam, Y. (2011) The Food Crises and Political Instability in North Africa and the Middle East. arXiv:1108.2455.', u: 'https://arxiv.org/abs/1108.2455' },
  { t: 'Tebboth, M., Redicker, S., Adger, W.N., Subramanian, R.R. (2026) Risks and limits from a securitisation framing of nature and biodiversity crises. PLOS Climate.', u: 'https://doi.org/10.1371/journal.pclm.0000873' },
  { t: 'CBD (2022) Kunming-Montreal Global Biodiversity Framework and monitoring indicators.', u: 'https://www.cbd.int/gbf' },
  { t: 'TNFD (2023) Recommendations and the LEAP approach.', u: 'https://tnfd.global' },
];

export const NatureSecurityRisk: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open research: Nature and National Security
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Nature-Related Security Risk: an open evidence base and systems ontology
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          In January 2026 the UK Government assessed, with high confidence, that every critical ecosystem is on a pathway to collapse, naming six ecosystems of particular strategic importance to the UK, and that this carries national-security consequences. That assessment is a written document, not a tool. This is Tesseract&apos;s self-initiated, open, machine-readable evidence base and systems ontology that turns documented nature-to-security cascades into something a government can query, monitor and act on, built on real sources with the gaps named honestly.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Documented cascades</p>
          <p className="text-3xl font-extrabold text-gov-dark">14</p>
          <p className="text-sm text-gov-secondary mt-1">nature-to-security chains, each source-traced and confidence-graded</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Planetary boundaries</p>
          <p className="text-3xl font-extrabold text-gov-dark">6 of 9</p>
          <p className="text-sm text-gov-secondary mt-1">already transgressed, including biosphere integrity (Richardson et al. 2023)</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Strategic ecosystems</p>
          <p className="text-3xl font-extrabold text-gov-dark">6</p>
          <p className="text-sm text-gov-secondary mt-1">of strategic importance named by the UK assessment (which judges every critical ecosystem to be on a collapse pathway)</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Published</p>
          <p className="text-3xl font-extrabold text-gov-dark">Open</p>
          <p className="text-sm text-gov-secondary mt-1">ontology, taxonomy, SHACL shapes and dataset on GitHub under CC-BY-4.0</p>
        </div>
      </div>

      <div className="bg-gov-bg border border-gov-border/60 rounded-xl p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-4">In brief</p>
        <ul className="space-y-3 text-gov-dark leading-relaxed">
          <li className="flex gap-3"><span className="text-gov-blue font-bold">1.</span><span><strong>The framing is now government-endorsed, but it stops at prose.</strong> The UK Nature Security Assessment (January 2026) applies intelligence tradecraft to nature loss, cascades, tipping points, feedback loops, compounding shocks, yet ships no dataset, no ontology and no standing monitoring mechanism. Its causal chains cannot be queried, versioned or stress-tested.</span></li>
          <li className="flex gap-3"><span className="text-gov-blue font-bold">2.</span><span><strong>Nobody has built the machine-readable layer.</strong> The science exists (IPBES Nexus 2024), the indicators exist (BII, Aqueduct, ND-GAIN, the Kunming-Montreal set), and the security framing exists (Council on Strategic Risks; SIPRI). The one thing missing is an open, computation-ready evidence base and ontology that joins them for security.</span></li>
          <li className="flex gap-3"><span className="text-gov-blue font-bold">3.</span><span><strong>We built the reference.</strong> 14 documented cascades graded with the assessment&apos;s own confidence ratings, an OWL systems ontology (NSRO), a SKOS taxonomy cross-walked to IPBES, and SHACL shapes, all published open source, and designed against the securitisation critique.</span></li>
        </ul>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why nature loss is now a security question</h2>
          <p className="text-gov-dark leading-relaxed">
            The evidence has converged from several directions at once. The World Economic Forum&apos;s 2025 Global Risks Report ranks biodiversity loss and ecosystem collapse the second most severe global risk over ten years. Swiss Re estimates that 55 per cent of global GDP depends moderately or highly on nature. Planetary-boundaries science now places six of nine Earth-system boundaries beyond the safe operating space, biosphere integrity among them (Richardson et al. 2023). The IPBES Global Assessment put around one million species at risk of extinction. The HM Treasury-commissioned Dasgupta Review reframed economies as embedded in nature, not adjacent to it. Against that backdrop the UK Government&apos;s January 2026 assessment, forced into publication by a Green Alliance freedom-of-information request and then debated in the House of Lords, was the first British state document to treat biodiversity loss and ecosystem collapse as a national-security matter and to assess, with high confidence, that every critical ecosystem is on a pathway to collapse, naming six ecosystems of particular strategic importance to the UK.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built: an open cascade evidence base and ontology</h2>
        <p className="text-gov-secondary leading-relaxed">
          The core artefact is a machine-readable evidence base of <strong>14 documented nature-to-security cascades</strong>. Each is one instance of a single structure, borrowed upstream from the IPBES conceptual framework and extended downstream with the security layer the field lacks:
        </p>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-sm font-mono text-gov-dark leading-relaxed">
            Driver &rarr; ecosystem-service loss &rarr; transmission channel &rarr; security outcome
          </p>
          <p className="text-xs text-gov-secondary mt-2">(e.g. drought and groundwater depletion &rarr; loss of rain-fed agriculture &rarr; food and water insecurity, displacement &rarr; contributory instability)</p>
        </div>
        <p className="text-gov-secondary leading-relaxed">
          The cases span food-price shocks and unrest (2007-2008 and 2010-2011), the contested Syria drought-displacement chain, Lake Chad Basin degradation and Boko Haram fragility, the 2011-2012 Somalia famine, the 2019-2022 East Africa locust upsurge, Somali fisheries collapse and piracy, Nile transboundary water tension over the Grand Ethiopian Renaissance Dam, zoonotic spillover and COVID-19, pollinator decline, the Amazon and AMOC tipping points, Sahel farmer-herder conflict, and South-East Asian reef and mangrove loss. Each record is traced to authoritative sources, classified by transmission channel and security outcome, carries a named intervention point, and is graded with the assessment&apos;s own <strong>High / Moderate / Low analytical confidence ratings</strong>. Six of the fourteen are flagged as contested, because their causal chains are genuinely disputed.
        </p>
        <HBars
          title="Six of the fourteen documented cascades are flagged as contested."
          note="Contested chains carry both the claim and its rebuttal, because their causal chains are genuinely disputed."
          rows={[
            { label: 'Documented cascades', value: 14, display: '14', color: CHART.gray },
            { label: 'Flagged as contested', value: 6, display: '6', color: CHART.amber },
          ]}
        />
        <p className="text-gov-secondary leading-relaxed">
          Around the dataset sits the <strong>Nature-Related Security Risk Ontology (NSRO)</strong>: an OWL model whose classes are driver, ecosystem-service loss, transmission channel, security outcome, strategic ecosystem, indicator and intervention point, with the four systems constructs the assessment names, tipping points, feedback loops, risk cascades and compounding shocks, as first-class objects rather than figures in a report. A SKOS taxonomy cross-walks the drivers and services to the IPBES framework, and SHACL shapes define what a valid cascade record must contain: a driver, a service loss, at least one channel, an outcome, a confidence grade, a source, and, for any contested chain, both sides of the argument.
        </p>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-sm text-gov-dark leading-relaxed">
            The complete evidence base, ontology, taxonomy and SHACL shapes are open on GitHub under CC-BY-4.0 (code MIT).{' '}
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue font-semibold hover:underline inline-flex items-center gap-1">
              <Github className="w-4 h-4" /> nature-security-risk<span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The whitespace, in one table</h2>
        <p className="text-gov-secondary leading-relaxed">
          We surveyed the field before building. Nature-related security risk decomposes into four capabilities, and no existing artefact holds all four. The framing and the science are strong; the machine-readable security layer is empty.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gov-border text-left">
                <th className="py-2 pr-4 font-semibold text-gov-dark">Capability</th>
                <th className="py-2 pr-4 font-semibold text-gov-dark">Best existing coverage</th>
                <th className="py-2 font-semibold text-gov-dark">Status</th>
              </tr>
            </thead>
            <tbody className="text-gov-secondary">
              <tr className="border-b border-gov-border/40"><td className="py-2 pr-4">Nature-as-security framing</td><td className="py-2 pr-4">UK NSA 2026; Council on Strategic Risks; SIPRI Biosphere Security</td><td className="py-2">Exists, as prose</td></tr>
              <tr className="border-b border-gov-border/40"><td className="py-2 pr-4">Systems science of cascades and tipping points</td><td className="py-2 pr-4">IPBES Nexus 2024; Global Tipping Points 2023</td><td className="py-2">Exists, not security-framed</td></tr>
              <tr className="border-b border-gov-border/40"><td className="py-2 pr-4">Early-warning and monitoring machinery</td><td className="py-2 pr-4">DPSIR ecological-security indices; critical-slowing-down statistics</td><td className="py-2">Exists, place-based ecology</td></tr>
              <tr><td className="py-2 pr-4"><strong>Machine-readable ontology + evidence base of nature&rarr;security cascades</strong></td><td className="py-2 pr-4">NatureKG (finance only); OpenBiodiv (taxonomy only)</td><td className="py-2"><strong>Empty for security</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gov-secondary leading-relaxed">
          The reusable building blocks are all there, TNFD&apos;s risk grammar, the IPBES conceptual framework, the Kunming-Montreal monitoring indicators, SEEA ecosystem accounts, planetary boundaries, ND-GAIN, the Biodiversity Intactness Index, WRI Aqueduct, the IUCN Red List of Ecosystems, the Swiss Re BES index. What none of them do is securitise nature: throughout, &quot;risk&quot; means financial, enterprise, conservation or statistical risk, and the actor is a firm, an investor or an environment ministry, never a security institution reasoning about conflict, fragility, resource-driven instability or strategic supply chains. NSRO grafts exactly that missing threat-actor-consequence-national-interest layer onto those otherwise apolitical instruments.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Assess, monitor, mitigate</h2>
        <p className="text-gov-secondary leading-relaxed">
          The evidence base is built so each of the three functions government needs maps to a concrete method, all specified in the repository.
        </p>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>Assess.</strong> A nature-security exposure profile that binds open indicators (BII, IUCN Red List of Ecosystems, Aqueduct water stress, ND-GAIN, Swiss Re BES, FAO import dependency) to each transmission channel. It is deliberately kept as a vector, not collapsed to one score, so a decision-maker can see which channel drives the exposure, the information a mitigation choice actually needs.</li>
          <li><strong>Monitor.</strong> Leading indicators per channel, and, for tipping-point cascades, the established early-warning statistics, rising autocorrelation and variance, &quot;critical slowing down&quot;, computed on the ecosystem time series rather than asserted. An emerging risk is flagged when a driver-side signal and a channel-side indicator move together on a cascade already in the base.</li>
          <li><strong>Mitigate.</strong> Every cascade carries the intervention point at which the chain is cheapest to break, expressed as a civilian, preventive lever, grain reserves and trade coordination, One Health surveillance, transboundary water treaties, ecosystem restoration, and mapped to a policy home in the National Risk Register, an IPBES response option, or a Kunming-Montreal target.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Built against its own strongest critique</h2>
          <p className="text-gov-dark leading-relaxed">
            Framing nature loss as national security is contested, and the objection is serious: Tebboth et al. (2026, PLOS Climate) warn that a securitisation framing can oversimplify causal claims, militarise policy and backfire, and Selby et al. (2017) showed how the celebrated climate-to-Syrian-war chain was overstated. This evidence base is designed against those failure modes rather than ignoring them. Every cascade is evidence-graded, not asserted. Contested chains are flagged and carry both the claim and its rebuttal, the Syria case cites Kelley et al. (2015) and Selby et al. (2017) side by side. The framing is civilian and preventive, not militarised. And the method is transparent, so a reader can see how much weight each claim carries. Naming the limits is the differentiator, not a disclaimer.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The gaps we name</h2>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>No shared denominator.</strong> There is no census of nature-to-security cascades; this set is a curated, illustrative lower bound, not a complete list.</li>
          <li><strong>Attribution is probabilistic.</strong> Nature loss is almost never a sole cause; it is a threat multiplier interacting with governance, poverty and markets, and the confidence ratings encode exactly that.</li>
          <li><strong>Indicators were built for other purposes.</strong> BII, Aqueduct, ND-GAIN and the rest were designed for conservation, water, and adaptation, not security; binding them to security outcomes is an explicit modelling choice, stated openly.</li>
          <li><strong>Absence of evidence is not evidence of absence.</strong> A classified or internal government monitoring tool could exist; the whitespace claim is about the open, published record.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">&quot;The concept is now government-endorsed and the science exists. What does not exist is the open, machine-readable systems ontology and evidence base that turns documented nature-to-security cascades into a tool a government can query, monitor and act on. So we built the first version, and published the working, not just the conclusion.&quot;</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">The Tesseract Academy</cite>
        </blockquote>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Selected evidence</h2>
        <ol className="space-y-3 text-sm text-gov-dark leading-relaxed list-decimal pl-6">
          {REFERENCES.map((r, i) => (
            <li key={i}>
              {r.t}{' '}
              <a href={r.u} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Link<span className="sr-only"> (opens in new tab)</span></a>
            </li>
          ))}
        </ol>
        <p className="text-xs text-gov-secondary/80">Method note: every cascade record carries its own source and confidence grade, and contested chains cite both sides. We publish the working, not just the conclusion.</p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">The evidence base is open</p>
          <p className="text-sm text-gov-secondary mt-1">Dataset, ontology, SKOS taxonomy and SHACL shapes on GitHub under CC-BY-4.0. Contributions and corrections welcome: contact <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">fabio@thetesseractacademy.com</a>.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">
            Explore the open evidence base on GitHub
            <ExternalLink className="w-4 h-4" />
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
