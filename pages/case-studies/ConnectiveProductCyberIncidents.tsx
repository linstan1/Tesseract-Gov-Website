import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/case-studies/connective-product-cyber-incidents#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/case-studies/connective-product-cyber-incidents',
  headline: 'Cyber Incidents affecting Connective Products: an open evidence base',
  description:
    'A self-initiated, open, machine-readable evidence base of cyber incidents affecting connective products (IoT, operational technology, computing devices, networking equipment and software/firmware), built on real public sources, with the evidence gaps named honestly.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  about: { '@type': 'Thing', name: 'Cyber incidents affecting connective products' },
  keywords:
    'connective products, IoT security, operational technology, edge devices, VPN exploitation, software supply chain, firmware security, PSTI Act 2022, Cyber Security and Resilience Bill, Verizon DBIR, Mandiant M-Trends, NCSC Cyber Assessment Framework, CISA KEV, EPSS exploit prediction, Mirai botnet, PLC ICS security, CIC-IoT-2023, UNSW-NB15, Edge-IIoTset, SKOS taxonomy, Government Data Quality Framework, NAO PAC cyber resilience, open dataset',
};

const REPO = 'https://github.com/fabio-rovai/connective-product-cyber-incidents';

const REFERENCES = [
  { t: 'Verizon (2025) 2025 Data Breach Investigations Report (DBIR).', u: 'https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf' },
  { t: 'Mandiant / Google Cloud (2025) M-Trends 2025.', u: 'https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025/' },
  { t: 'National Cyber Security Centre (2025) NCSC Annual Review 2025.', u: 'https://www.ncsc.gov.uk/collection/ncsc-annual-review-2025' },
  { t: 'IoT Analytics. Number of connected IoT devices.', u: 'https://iot-analytics.com/number-connected-iot-devices/' },
  { t: 'UK Government. The Government Data Quality Framework.', u: 'https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework' },
  { t: 'techUK. PSTI regulations come into force (Product Security and Telecommunications Infrastructure Act 2022).', u: 'https://www.techuk.org/resource/psti-regulations-come-into-force.html' },
  { t: 'CISA (2024) Advisory AA24-038A: PRC State-Sponsored Actors Compromise US Critical Infrastructure (Volt Typhoon).', u: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a' },
  { t: 'Ladisa, Plate, Martinez, Barais (2023) SoK: Taxonomy of Attacks on Open-Source Software Supply Chains. IEEE Symposium on Security and Privacy.', u: 'https://ieeexplore.ieee.org/document/10179304/' },
  { t: 'Lopez-Morales, Planta, Rubio-Medrano, Abbasi, Cardenas (2024) SoK: Security of Programmable Logic Controllers. 33rd USENIX Security Symposium.', u: 'https://arxiv.org/abs/2403.00280' },
  { t: 'Boeck, Sundermann, Fusari, Karuppayah, Muehlhaeuser, Levin (2023) The End of the Canonical IoT Botnet: A Measurement Study of Mirai Descendants.', u: 'https://arxiv.org/abs/2309.01130' },
  { t: 'Neto, Dadkhah, Ferreira, Zohourian, Lu, Ghorbani (2023) CICIoT2023: A Real-Time Dataset and Benchmark for Large-Scale Attacks in IoT Environment. Sensors 23(13):5941.', u: 'https://www.mdpi.com/1424-8220/23/13/5941' },
  { t: 'National Audit Office (2025) Government cyber resilience.', u: 'https://www.nao.org.uk/reports/government-cyber-resilience/' },
  { t: 'National Cyber Security Centre. Cyber Assessment Framework (CAF).', u: 'https://www.ncsc.gov.uk/collection/cyber-assessment-framework' },
];

export const ConnectiveProductCyberIncidents: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/use-cases" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open research report: Connective Product Security
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          Cyber Incidents affecting Connective Products: an open evidence base
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Connective products (IoT, operational technology, computing devices, networking equipment, and software and firmware) now dominate the attack surface, yet the incident evidence is fragmented across vendors, agencies and insurers. This is Tesseract&apos;s self-initiated, open, machine-readable evidence base, built on real public sources, with the gaps named honestly.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Incidents documented</p>
          <p className="text-3xl font-extrabold text-gov-dark">16</p>
          <p className="text-sm text-gov-secondary mt-1">2022 to 2025, across 5 technology groups</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Edge and VPN targeting</p>
          <p className="text-3xl font-extrabold text-gov-dark">22%</p>
          <p className="text-sm text-gov-secondary mt-1">share of vulnerability-exploitation targeting that hit edge devices and VPNs in 2025, up from 3% (Verizon DBIR 2025)</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Published</p>
          <p className="text-3xl font-extrabold text-gov-dark">Open</p>
          <p className="text-sm text-gov-secondary mt-1">dataset, taxonomy and grading rubric, published on GitHub under CC-BY-4.0</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Literature reviewed</p>
          <p className="text-3xl font-extrabold text-gov-dark">40+</p>
          <p className="text-sm text-gov-secondary mt-1">peer-reviewed and recognised technical sources across 6 research strands, plus the public policy record from 2018 to 2026</p>
        </div>
      </div>

      <div className="bg-gov-bg border border-gov-border/60 rounded-xl p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-4">In brief</p>
        <ul className="space-y-3 text-gov-dark leading-relaxed">
          <li className="flex gap-3"><span className="text-gov-blue font-bold">1.</span><span><strong>The attack surface has moved to the network edge and the software supply chain.</strong> NCSC and Mandiant both found the most-exploited vulnerabilities of 2024 were all edge and connective devices (Ivanti, Fortinet, Palo Alto).</span></li>
          <li className="flex gap-3"><span className="text-gov-blue font-bold">2.</span><span><strong>The evidence is fragmented and inconsistently defined.</strong> There is no open, structured, longitudinal dataset mapping incidents to product class, vector and impact, and no shared denominator, so all counts are triangulated lower bounds, not a census.</span></li>
          <li className="flex gap-3"><span className="text-gov-blue font-bold">3.</span><span><strong>We built the open reference.</strong> 16 documented incidents across all five technology groups, a SKOS taxonomy, and a source-quality grading rubric aligned to the six UK Government Data Quality Framework dimensions.</span></li>
        </ul>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Where the risk is now</h2>
          <p className="text-gov-dark leading-relaxed">
            The edge and networking layer is now the systemically exploited layer. The Verizon 2025 Data Breach Investigations Report found vulnerability exploitation rose to 20 per cent of breaches (a 34 per cent year-on-year increase), and that edge devices and VPNs jumped to <strong>22 per cent of vulnerability-exploitation targeting from 3 per cent the prior year</strong>. Only around 54 per cent of edge-device vulnerabilities were fully remediated over the year, at a median of 32 days. Mandiant&apos;s M-Trends 2025 found that three of the top four exploited 2024 CVEs were edge-device zero-days, and that 44 per cent of all zero-days hit enterprise networking and security products. NCSC handled a record 204 nationally significant incidents in the year to September 2025, up from 89 (a 130 per cent rise). The installed base reached 21.1 billion active IoT devices by end-2025 (IoT Analytics). This is a research theme with real public regulatory context: the Product Security and Telecommunications Infrastructure Act 2022 (PSTI) brought baseline security requirements into force for consumer connectable products.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What we built: an open incident dataset</h2>
        <p className="text-gov-secondary leading-relaxed">
          We assembled <strong>16 incidents (2022 to 2025)</strong> mapped to the five technology groups: networking equipment (4), software and firmware (4), IoT (3), operational technology (3), and computing devices (2). Each incident is traced to an authoritative primary source (CISA, NCSC, Unit 42, Cisco Talos, Red Hat, Binarly), CVE-referenced where a CVE genuinely exists, and carries a confidence flag. The set is published as CSV and JSON-LD, with a SKOS taxonomy of the five product classes and seven vulnerability types.
        </p>
        <p className="text-gov-secondary leading-relaxed">
          Verified examples in the set include the Ivanti Connect Secure mass exploitation (CVE-2023-46805, CVE-2024-21887), the MOVEit and Cl0p supply-chain compromise (CVE-2023-34362), the XZ Utils backdoor (CVE-2024-3094), and Unitronics PLC attacks on water utilities (via default credentials, no CVE). These span nation-state edge-device campaigns, a mass supply-chain data-theft event, a near-miss open-source backdoor, and low-sophistication attacks on exposed operational technology.
        </p>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-sm text-gov-dark leading-relaxed">
            The complete dataset, taxonomy and grading rubric are open on GitHub under CC-BY-4.0.{' '}
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue font-semibold hover:underline inline-flex items-center gap-1">
              <Github className="w-4 h-4" /> connective-product-cyber-incidents<span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What the research literature shows</h2>
        <p className="text-gov-secondary leading-relaxed">
          We reviewed the peer-reviewed and recognised technical literature on cyber incidents affecting connective products across five research strands, and the pattern is consistent: each sub-domain is studied rigorously but in isolation, in different venues, with different metrics and datasets, and no paper synthesises them into a single cross-product-class threat model. IoT-botnet measurement work shows the once-canonical Mirai lineage has fragmented (Boeck et al. 2023 track Hajime and Mozi to near-zero IP overlap), while telescope and honeypot studies confirm Telnet-targeting and credential brute-forcing still dominate live traffic. The most numerically grounded work on edge and appliance exploitation comes from vendor threat intelligence, not peer review: the Google Threat Intelligence Group found 44 per cent of 2024 zero-days hit enterprise technologies, and its 2025 review put enterprise targeting at an all-time high with 14 zero-days affecting edge devices whose lack of endpoint detection likely undercounts the true figure. Software supply-chain research is mature (Ladisa et al., IEEE S&P 2023, build an attack-tree taxonomy of 107 vectors across 94 real incidents; package-confusion work defines 13 confusion categories beyond typosquatting), but firmware-specific measurement lags well behind. OT and ICS work is the deepest and the most siloed: Lopez-Morales et al. (USENIX Security 2024) systematise 17 years and 133 papers of PLC-attack research, Pickren et al. (NDSS 2024) demonstrate web-based PLC malware abusing legitimate admin interfaces across roughly 80 per cent of the vendor market, and Salazar et al. (IEEE S&P 2024) forensically compare Industroyer and Industroyer2. Exploitation-prediction work (the EPSS foundation paper by Jacobs et al., and Expected Exploitability by Suciu et al., USENIX Security 2022) closes the loop from "possible in a testbed" to "likely to be exploited in the field," yet even here the scoring systems disagree with one another.
        </p>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>IoT botnet measurement.</strong> Mirai has no single successor: its descendants have diverged so far that there is no longer one canonical IoT botnet (Boeck et al. 2023).</li>
          <li><strong>Edge and appliance exploitation.</strong> Enterprise networking and security products are now the dominant enterprise zero-day surface, and the absence of on-device detection likely means the real edge figure is undercounted (Google Threat Intelligence Group, 2024 and 2025 reviews).</li>
          <li><strong>Software and firmware supply chain.</strong> A taxonomy of 107 attack vectors mapped to 94 real incidents (Ladisa et al. 2023); firmware-binary and embedded-device coverage remains thin relative to npm and PyPI package research.</li>
          <li><strong>OT and ICS.</strong> Web-based PLC malware can falsify sensors and disable safety alarms across around 80 per cent of the market (Pickren et al. 2024); Industroyer2 hard-coded substation parameters for a targeted grid strike (Salazar et al. 2024).</li>
          <li><strong>Exploitation prediction.</strong> EPSS and Expected Exploitability let prioritisation weight vulnerabilities by real exploitation probability rather than raw severity (Jacobs et al.; Suciu et al. 2022), though scoring systems rank the same CVEs inconsistently.</li>
        </ul>
        <p className="text-gov-secondary leading-relaxed">
          The clearest finding from the review is structural, not technical: these strands are documented separately and never joined up. Convergence trends (edge appliances as the top enterprise zero-day surface, ICS malware weaponising standard IT protocols such as Modbus, AI-component supply chains) are each well evidenced in their own venue and nowhere synthesised across product classes. That absence is precisely what a product-class-indexed evidence base is for.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The public datasets, and what they cannot show</h2>
        <p className="text-gov-secondary leading-relaxed">
          A reproducible study needs open data, and the public corpus is genuinely strong for detector benchmarking per product class. The mainstream benchmarks are real and citable: CIC-IoT-2023 (traffic from 105 real IoT devices under 33 attacks), UNSW-NB15 and NSL-KDD (general network-flow intrusion detection), Edge-IIoTset and N-BaIoT (IoT and industrial-IoT, the latter capturing nine commercial devices infected by Mirai and BASHLITE), HAI and a community SWaT mirror for operational technology, and CIC-IDS2017 and CIC-IDS2018 for enterprise network traffic. BETH provides rare real host telemetry (over eight million kernel-level events from honeypot hosts, not synthetic), and an exposure layer of CVE, CISA Known Exploited Vulnerabilities and EPSS scores lets exposure be weighted by exploitation probability rather than raw count. The honest caveat is that almost all of these are lab or testbed captures with scripted attacks, or exposure indices, not real-world incident records: they measure the detectability of known attack patterns, not the frequency, cost or root cause of incidents in deployed products.
        </p>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>Testbed, not incidents.</strong> CIC-IoT-2023, UNSW-NB15, Edge-IIoTset, CIC-IDS2017/2018, SWaT and HAI are generated on controlled testbeds with scripted attacks; base-rate or incident-frequency claims cannot be drawn from them.</li>
          <li><strong>OT and firmware coverage is thin.</strong> Only HAI (and a repackaged SWaT mirror) give real OT process data on the open platforms; most ICS and SCADA benchmarks, and true firmware-binary datasets, are scarce or gated behind originating-lab request forms.</li>
          <li><strong>The real-world anchors are proxies.</strong> BETH, honeypot captures, CISA KEV and Project Zero are the closest to observed adversary behaviour, but KEV and Project Zero are curated exposure indices, not a primary incident register.</li>
          <li><strong>No open real-incident register exists.</strong> No single public dataset records real-world cyber incidents against connective products with dates, product class, vector, impact and cost. This is the gap this work sets out to address, using the public datasets for controlled benchmarking and the exposure indices for external validity, while building the product-class-indexed incident set separately.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The cross-government policy picture</h2>
        <p className="text-gov-secondary leading-relaxed">
          The public policy record over eight years shows a clear and, in one respect, uncomfortable through-line. Government legislates confidently where it has measured data (consumer IoT) and legislates on operational technology and enterprise products where it largely does not. The consumer track ran from a voluntary code to a mandatory regime; the operational-technology and enterprise track is expanding through the services route (NIS and the Cyber Security and Resilience Bill) rather than a product law, and the government's own estate is flagged as under-resilient by its own auditors.
        </p>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>2018.</strong> DCMS (with NCSC) publishes Secure by Design and the Code of Practice for Consumer IoT Security: 13 outcome-focused guidelines led by no default passwords, a vulnerability disclosure policy, and keeping software updated.</li>
          <li><strong>2022.</strong> The Product Security and Telecommunications Infrastructure (PSTI) Act 2022 receives Royal Assent (6 December 2022), empowering ministers to set security requirements for connectable consumer products. The same year, BEIS (now DESNZ) consults on the interoperability and cyber security of energy smart appliances (heat pumps, batteries, EV chargers) under the smart-and-secure electricity system programme.</li>
          <li><strong>2023.</strong> The PSTI Security Requirements Regulations 2023 are made (14 September 2023). The Joint Committee on the National Security Strategy publishes "A hostage to fortune" (13 December 2023), warning the UK is unprepared for a catastrophic ransomware attack on largely privately-operated, legacy-IT critical national infrastructure.</li>
          <li><strong>April 2024.</strong> The PSTI Regulations come into force (29 April 2024): three mandatory baseline requirements (no universal default passwords, a published vulnerability disclosure policy, transparency on the minimum security-update period) plus a statement of compliance.</li>
          <li><strong>2025.</strong> The National Audit Office (29 January 2025) and the Committee of Public Accounts (9 May 2025) both report that government will miss its end-2025 cyber-resilience target, with hundreds of significant legacy systems, many without funded remediation, and a severe skills shortage. NCSC releases Cyber Assessment Framework v4.0 (6 August 2025), the assessment tool for the cyber resilience of essential functions.</li>
          <li><strong>2025 to 2026.</strong> The Cyber Security and Resilience Bill progresses through Parliament (Commons first reading 12 November 2025, completing the Commons on 10 June 2026 and moving to the Lords), expanding the NIS regime to managed service providers and designated critical suppliers rather than the PSTI product regime.</li>
        </ul>
        <p className="text-gov-secondary leading-relaxed">
          Two facts sharpen the point. PSTI has no post-implementation review yet: the statutory review duty sits in the 2023 Regulations, with the first report not due until around 2029, so there is not yet measured evidence that the mandatory regime has reduced insecure devices in market. And the rich, repeatable evidence base exists only at the consumer and enterprise-IT ends (the Cyber Security Breaches Survey, the NAO and PAC work), not for operational technology or enterprise connective products, where CAF returns are not published as an aggregate. That asymmetry, confident legislation where there is data and thinner ground where there is not, is exactly the space an open, quantified, product-class-indexed evidence base is built to inform.
        </p>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">How we grade the evidence</h2>
          <p className="text-gov-dark leading-relaxed">
            The source-quality rubric operationalises the six dimensions of the UK{' '}
            <a href="https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Government Data Quality Framework</a>
            {' '}(completeness, uniqueness, validity, accuracy, consistency, timeliness) into a tiered evidence hierarchy: peer-reviewed, official NCSC/CISA/ENISA, vendor threat report, grey literature, and news. Each incident record is graded against that hierarchy so a reader can see, for every figure, how strong the underlying source is and how much weight it can carry.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">The gaps we name</h2>
        <p className="text-gov-secondary leading-relaxed">
          An honest evidence base names its own limits. This is the differentiator, not a disclaimer, and it is the part most sources leave out.
        </p>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>No clean count, no shared denominator.</strong> No public source gives a clean count of attacks via connective products or a shared denominator, so every count in this field, including ours, is a triangulated lower bound rather than a census.</li>
          <li><strong>Definitions differ and are non-additive.</strong> Breach, attack and incident are defined differently between reports, so figures cannot simply be added together across sources.</li>
          <li><strong>Vendor telemetry carries no published margins of error.</strong> The large-scale numbers come from vendor visibility, which is partial and unquantified.</li>
          <li><strong>Some widely quoted figures are extrapolations.</strong> For example, the MOVEit aggregate cost is not independently corroborated: a defensible range is 6.5 to 10 billion USD, not the 12 billion USD sometimes cited.</li>
          <li><strong>Scope is bounded by design.</strong> Medical devices and apps are out of scope, so the set is not a claim about the whole connected-device universe.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">&quot;The field has plenty of headline numbers and no shared, honest baseline. The job is to build one: map real incidents to product class, vector and impact, grade every source, and name the gaps openly rather than paper over them.&quot;</p>
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
        <p className="text-xs text-gov-secondary/80">Method note: figures are drawn from the primary sources above; every incident record in the dataset carries its own source and confidence grade. We publish the working, not just the conclusion.</p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">The evidence base is open</p>
          <p className="text-sm text-gov-secondary mt-1">Dataset, SKOS taxonomy and grading rubric on GitHub under CC-BY-4.0. Contributions and corrections are welcome: contact <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:underline">fabio@thetesseractacademy.com</a>.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">
            Explore the open dataset on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/use-cases" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>
    </article>
  );
};
