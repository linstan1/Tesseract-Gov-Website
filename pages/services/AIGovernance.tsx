import React, { useEffect } from 'react';

export const AIGovernance: React.FC = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Governance and Compliance for UK Public Sector',
      provider: {
        '@type': 'Organization',
        name: 'Tesseract Academy',
        url: 'https://gov.tesseract.academy',
      },
      serviceType: 'AI Governance and Regulatory Compliance',
      description:
        'EU AI Act, NIST AI RMF, and ISO 42001 compliance. Bias auditing, DPIA, algorithmic impact assessments. Open-source governance platform with 48 tools. Cyber Essentials certified. FCA stablecoin consultation contribution.',
      url: 'https://gov.tesseract.academy/services/ai-governance',
      areaServed: 'GB',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ai-governance-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('ai-governance-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <div className="border-b border-gov-border/30 pb-10">
        <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-4">
          Service — AI Governance and Compliance
        </p>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          AI Governance and Regulatory Compliance
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          We help public sector organisations implement robust AI governance frameworks aligned
          to EU AI Act, NIST AI RMF, and ISO 42001. Our open-source governance platform provides
          48 tools for risk classification, bias auditing, compliance monitoring, and audit-ready
          reporting. We are Cyber Essentials certified and hold ISO 27001-aligned information
          security controls.
        </p>
      </div>

      <section className="space-y-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gov-dark">What We Deliver</h2>
        <p className="text-gov-dark leading-relaxed text-base">
          AI governance is now a legal obligation, not an optional enhancement. Regulation (EU)
          2024/1689 (the EU AI Act) — the world's first comprehensive AI law — classifies AI systems
          by risk level and imposes mandatory requirements for high-risk systems, including algorithmic
          impact assessments, human-in-the-loop controls, bias monitoring, and technical documentation.
          For UK public sector bodies procuring or developing AI systems that interact with EU citizens
          or are placed in EU markets, compliance is mandatory. UK government guidance on algorithmic
          transparency and the ICO's Explaining Decisions Made with AI create parallel obligations
          under UK law.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Tesseract Academy delivers end-to-end AI governance programmes covering the full compliance
          lifecycle. We begin with a risk classification assessment — mapping AI systems against EU AI
          Act Annex III categories and NIST AI RMF risk dimensions — and produce a governance roadmap
          with prioritised remediation actions. We then support implementation of algorithmic
          transparency disclosures, bias audit protocols, Data Protection Impact Assessments (DPIAs),
          and human-in-the-loop control design.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          Our open-source AI governance platform (open-governance, available on GitHub) provides 48
          governance tools covering automated risk classification, compliance matrices against EU AI
          Act, NIST AI RMF, and ISO 42001, bias and hallucination monitoring, policy enforcement
          gates, and audit-ready reporting. The platform is designed for public sector use and can be
          self-hosted to avoid data leaving organisational boundaries — an important consideration for
          systems handling personal or classified information.
        </p>
        <p className="text-gov-dark leading-relaxed text-base">
          We contributed expert analysis to the Financial Conduct Authority's consultation on
          stablecoin regulation in 2025, demonstrating our capability to engage at the frontier of
          AI and financial technology regulation. We are Cyber Essentials certified and operate
          ISO 27001-aligned information security controls, meeting the security baseline required
          for contracts involving personal data or government OFFICIAL classification.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Service Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gov-border/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-gov-bg border-b border-gov-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold text-gov-dark">Capability</th>
                <th className="px-6 py-4 font-semibold text-gov-blue">Tesseract Academy</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Legal / Compliance Firm</th>
                <th className="px-6 py-4 font-semibold text-gov-secondary">Large Technology Vendor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/30">
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">EU AI Act compliance</td>
                <td className="px-6 py-4 text-gov-dark">Technical + regulatory — integrated</td>
                <td className="px-6 py-4 text-gov-secondary">Legal framing — limited technical depth</td>
                <td className="px-6 py-4 text-gov-secondary">Own product focus — not independent</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Bias auditing</td>
                <td className="px-6 py-4 text-gov-dark">Statistical bias testing across demographics</td>
                <td className="px-6 py-4 text-gov-secondary">Policy review only</td>
                <td className="px-6 py-4 text-gov-secondary">Proprietary tools — limited transparency</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Open-source tooling</td>
                <td className="px-6 py-4 text-gov-dark">48 tools — self-hostable, auditable</td>
                <td className="px-6 py-4 text-gov-secondary">Not offered</td>
                <td className="px-6 py-4 text-gov-secondary">Proprietary SaaS — data leaves org</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">NIST AI RMF alignment</td>
                <td className="px-6 py-4 text-gov-dark">Govern, Map, Measure, Manage — all four functions</td>
                <td className="px-6 py-4 text-gov-secondary">Awareness only</td>
                <td className="px-6 py-4 text-gov-secondary">Partial — product-centric mapping</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Cyber Essentials certification</td>
                <td className="px-6 py-4 text-gov-dark">Certified</td>
                <td className="px-6 py-4 text-gov-secondary">Varies</td>
                <td className="px-6 py-4 text-gov-secondary">Typically ISO 27001 only</td>
              </tr>
              <tr className="hover:bg-gov-bg/60 transition-colors">
                <td className="px-6 py-4 text-gov-dark font-medium">Regulatory consultation experience</td>
                <td className="px-6 py-4 text-gov-dark">FCA stablecoin consultation — 2025</td>
                <td className="px-6 py-4 text-gov-secondary">Yes — legal submissions</td>
                <td className="px-6 py-4 text-gov-secondary">Lobbying — not independent analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gov-dark mb-8">Frameworks We Implement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">EU AI Act</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Risk classification, Annex III high-risk assessment, conformity assessment preparation,
              technical documentation, algorithmic transparency disclosures, and human oversight
              design under Regulation (EU) 2024/1689.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">NIST AI RMF</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Full implementation across all four functions: Govern (policies, culture, accountability),
              Map (risk identification), Measure (testing, monitoring), and Manage (risk response,
              continual improvement).
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">ISO 42001</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              AI management system design, gap analysis against the 2023 standard, implementation
              roadmap, internal audit preparation, and integration with existing ISO 27001
              information security management systems.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Bias Auditing</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Systematic statistical testing of AI model performance across demographic groups
              (age, gender, ethnicity, disability status). Bias audit reports suitable for
              submission to public sector clients and inclusion in algorithmic transparency returns.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">DPIA and AIA</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Data Protection Impact Assessments (DPIA) required under UK GDPR for high-risk
              processing, and Algorithmic Impact Assessments (AIA) required for high-risk AI
              systems. Both delivered to ICO-compliant standards.
            </p>
          </div>
          <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-6">
            <h3 className="font-bold text-gov-dark mb-3">Cyber Essentials</h3>
            <p className="text-sm text-gov-secondary/90 leading-relaxed">
              Tesseract Academy is Cyber Essentials certified, meeting the UK government baseline
              for information security. We can advise public sector bodies and suppliers on
              achieving Cyber Essentials or Cyber Essentials Plus certification.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Case Studies</h2>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Open-Source AI Governance Platform
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            48 Governance Tools Across EU AI Act, NIST AI RMF, and ISO 42001
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            We developed and maintain an open-source AI governance platform (open-governance,
            available on GitHub under fabio-rovai/open-governance) that helps organisations
            discover, assess, and monitor AI systems against major governance frameworks. The
            platform provides automated risk classification, compliance matrices, bias and
            hallucination monitoring, policy enforcement gates, and audit-ready reporting through
            48 governance tools. It is self-hostable, enabling public sector organisations to
            use it without sending data outside their network boundaries.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">48</p>
              <p className="text-sm text-gov-secondary mt-1">Governance tools in the platform</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">3</p>
              <p className="text-sm text-gov-secondary mt-1">Frameworks: EU AI Act, NIST, ISO 42001</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">Self-host</p>
              <p className="text-sm text-gov-secondary mt-1">Data stays within your network</p>
            </div>
          </div>
        </div>

        <div className="bg-gov-bg border border-gov-border/40 rounded-xl p-8">
          <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-3">
            Financial Conduct Authority — Stablecoin Consultation Response
          </p>
          <h3 className="text-xl font-bold text-gov-dark mb-4">
            Expert Regulatory Analysis for FCA Consultation on Crypto Asset Oversight
          </h3>
          <p className="text-base text-gov-dark/90 leading-relaxed mb-4">
            In 2025, Tesseract Academy contributed expert analysis to the FCA's consultation on
            stablecoin regulation and the future of crypto asset oversight in the UK. Our submission
            provided evidence-based commentary on regulatory framework design, consumer protection
            mechanisms for stablecoin holders, and systemic risk considerations for digital assets.
            This engagement demonstrates our capability to operate at the intersection of AI,
            financial technology, and regulatory compliance.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">FCA</p>
              <p className="text-sm text-gov-secondary mt-1">Official regulatory consultation</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">2025</p>
              <p className="text-sm text-gov-secondary mt-1">Stablecoin regulation response</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gov-border/30">
              <p className="text-2xl font-extrabold text-gov-blue">FinTech</p>
              <p className="text-sm text-gov-secondary mt-1">AI and financial regulation intersection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gov-bg border border-gov-border/40 rounded-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark">How to Commission This Service</h2>
        <p className="text-base text-gov-dark/90 leading-relaxed">
          AI governance and compliance services can be commissioned through:
        </p>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-gov-dark">CCS RM6200 — Management Consultancy Three</p>
              <p className="text-gov-secondary text-sm mt-1">
                The primary route for AI governance strategy, compliance programme design, and
                regulatory advisory. Covers EU AI Act compliance assessments, NIST AI RMF
                implementation, and ISO 42001 gap analysis.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Direct Award (below £10,000)</p>
              <p className="text-gov-secondary text-sm mt-1">
                Rapid bias audits, DPIA reviews, algorithmic transparency disclosures, and
                governance platform demonstrations can be commissioned directly for contracts
                below threshold.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gov-blue text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-gov-dark">Embedded Governance (within AI delivery)</p>
              <p className="text-gov-secondary text-sm mt-1">
                All Tesseract Academy AI consulting engagements include governance as a default
                component — bias auditing, DPIA, and AIA are integrated into every ML and LLM
                delivery engagement at no additional procurement step.
              </p>
            </div>
          </li>
        </ol>
        <p className="text-base text-gov-dark/90 leading-relaxed pt-2">
          To discuss your AI governance requirement or request a platform demonstration, contact{' '}
          <a
            href="mailto:fabio@thetesseractacademy.com"
            className="text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            fabio@thetesseractacademy.com
          </a>
          . We will provide a free initial risk classification assessment within five working days.
        </p>
      </section>
    </div>
  );
};
