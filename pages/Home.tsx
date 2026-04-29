import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Download, Star, Quote, Brain, FlaskConical, GraduationCap, ClipboardList, Scale, BarChart3, Users, MessageCircle, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block py-1.5 px-3 rounded-full bg-gov-blue/10 text-gov-blue text-sm font-semibold mb-6 uppercase tracking-wide">
            Public Sector Delivery Partner
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gov-dark tracking-tight mb-6 leading-tight max-w-4xl">
            Research-backed AI and data services for <span className="text-gov-blue">UK public sector</span>
          </h1>
          <p className="text-xl text-gov-secondary/90 mb-6 max-w-3xl leading-relaxed">
            Tesseract Academy delivers AI consulting, research, public engagement, and survey design for UK government bodies. Crown Commercial Service appointed supplier on RM6200 (AI DPS), RM6094 (Spark DPS), and RM6126 (Research &amp; Insights DPS).
          </p>
          <p className="text-base text-gov-secondary/80 mb-10 max-w-3xl leading-relaxed">
            Delivered for Welsh Government, Innovate UK, National Digital Twin Programme, Qualifications Wales, and Fintech Scotland. In 2024, our civil service AI upskilling programmes achieved a 91% completion rate — up from 68% — across 2,300 participants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="start" onClick={() => navigate('/how-to-buy')}>
              How to Buy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('/partnerships')}>
              Partner on Funding Bids
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <div className="bg-gov-dark px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2,300", label: "Civil servants upskilled (2024)", sub: "91% completion rate" },
            { value: "1,916", label: "Welsh LSOAs analysed", sub: "99% of Welsh geography" },
            { value: "1,100", label: "BridgeAI registrations", sub: "vs 200 capacity target" },
            { value: "3", label: "CCS frameworks", sub: "RM6200 · RM6094 · RM6126" },
          ].map((m, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-white mb-1">{m.value}</div>
              <div className="text-sm text-gov-blue font-semibold mb-0.5">{m.label}</div>
              <div className="text-xs text-white/60">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-gov-blue/5 border-y border-gov-blue/20 px-6 py-4">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-gov-blue flex-shrink-0" />
            <p className="text-sm text-gov-dark">
              <strong className="text-gov-blue">New Contract Award</strong>  - Appointed to the Expert Help for Business framework (Lot 1  - Financial Management) by Aberdeenshire Council, Scotland. March 2026.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-gov-blue flex-shrink-0" />
            <p className="text-sm text-gov-dark">
              <strong className="text-gov-blue">New Contract Award</strong>  - Subject Expert Services for Monitoring National Qualifications, appointed by Qualifications Wales. 3-year contract (2026–2029).
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <Shield className="w-6 h-6 text-gov-blue" />
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">Compliance First</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               Cyber Essentials certified and ISO 27001 aligned. PL £2M, EL £10M, PI £5M insurance. ICO registered (ZB715782). WCAG 2.1 AA accessibility standard.
             </p>
           </div>
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <CheckCircle className="w-6 h-6 text-gov-blue" />
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">Delivery Track Record</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               Delivered for Welsh Government, Innovate UK, NDTP, Qualifications Wales, and Fintech Scotland. Published on GOV.WALES. Cited by Skills England alongside The Alan Turing Institute.
             </p>
           </div>
           <div className="flex flex-col items-start p-8 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all duration-200 group">
             <div className="w-12 h-12 rounded-lg bg-gov-blue/10 flex items-center justify-center mb-5">
               <div className="w-8 h-8 flex items-center justify-center font-bold text-gov-blue text-sm border-2 border-gov-blue rounded-md">UK</div>
             </div>
             <h3 className="font-semibold text-lg mb-3 text-gov-dark">UK &amp; EU Ready</h3>
             <p className="text-base text-gov-secondary/90 leading-relaxed">
               3 CCS frameworks. Horizon Europe PIC: 880269472. DV-cleared consultant available for classified programmes. DUNS: 222180245. PPON: PWJP-6874-MXDJ.
             </p>
           </div>
        </div>

        {/* What We Deliver */}
        <div className="py-16 border-t border-gov-border/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gov-dark mb-3">What We Deliver</h2>
            <p className="text-gov-secondary text-lg max-w-2xl mx-auto">End-to-end capabilities across research, technology, education, and governance for public sector organisations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Artificial Intelligence & Data Science", desc: "Custom AI models, NLP, machine learning pipelines, and predictive analytics tailored to public sector needs." },
              { icon: FlaskConical, title: "Research & Policy Advisory", desc: "Evidence-based research, policy analysis, regulatory consultations, and academic publications for government bodies." },
              { icon: Users, title: "Public Engagement & Participation", desc: "Deliberative workshops, citizen panels, inclusive co-design with diverse communities, and participatory research methods." },
              { icon: GraduationCap, title: "Education & Upskilling", desc: "AI literacy programmes, data science workshops, and leadership training for decision-makers at all levels." },
              { icon: ClipboardList, title: "Survey Design & Delivery", desc: "End-to-end survey methodology, questionnaire design, data collection, and statistical analysis for public consultations." },
              { icon: Scale, title: "AI Ethics & Governance", desc: "Responsible AI frameworks, bias auditing, algorithmic impact assessments, and compliance with UK and EU AI regulation." },
              { icon: MessageCircle, title: "Stakeholder & Community Research", desc: "Qualitative research, focus groups, interviews with seldom-heard groups, and insight synthesis for policy-makers." },
              { icon: BarChart3, title: "Digital Delivery & Prototyping", desc: "Rapid prototyping, technical assurance, GDS-aligned service design, and discovery-to-live implementation support." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white border border-gov-border/50 rounded-xl hover:border-gov-blue/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gov-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-gov-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gov-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gov-secondary/90 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Our Work in Action</h3>
          <img src="/collage-activities.jpg" alt="Tesseract Academy delivering workshops, presentations and research across UK public sector contracts" width="1615" height="400" loading="eager" fetchPriority="high" decoding="async" className="w-full rounded-xl shadow-sm" />
          <p className="text-center text-xs text-gov-secondary mt-4">BridgeAI Skills Hub launch at Ona Studios, London &bull; Welsh Government Land Valuation Research presentation, Swansea</p>
        </div>

        {/* Public Engagement Narrative */}
        <div className="py-16 border-t border-gov-border/30">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gov-blue uppercase tracking-wider mb-3">Public Engagement & Participatory Research</p>
            <h2 className="text-3xl font-extrabold text-gov-dark mb-3">Working With Communities, Not Just About Them</h2>
            <p className="text-gov-secondary text-lg max-w-3xl mx-auto">We combine technical rigour with people-centred methods  - designing inclusive processes that bring diverse voices into public decision-making.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gov-border/50 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gov-dark mb-4">Our Approach to Inclusive Research</h3>
              <p className="text-gov-secondary leading-relaxed mb-4">
                Our work goes beyond data and dashboards. We design and facilitate deliberative workshops, citizen panels, and participatory research processes that centre the experiences of underrepresented and minoritised communities. Whether co-designing a public consultation framework or running focus groups with seldom-heard populations, we bring qualitative depth alongside quantitative analysis.
              </p>
              <p className="text-gov-secondary leading-relaxed">
                We believe the best public policy is shaped by the people it affects. That's why inclusive design isn't an add-on  - it's embedded in our methodology from discovery through to delivery.
              </p>
            </div>
            <div className="bg-white border border-gov-border/50 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gov-dark mb-4">What This Looks Like in Practice</h3>
              <ul className="space-y-4 text-gov-secondary leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Welsh Government  - Land Valuation Methods</strong>  - Commissioned to test five distinct valuation approaches including market-based, machine learning, formula-based, and experimental methods to inform potential land value tax policy across Wales. Report published March 2026.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>BridgeAI / Innovate UK  - Creative Industries AI Training</strong>  - Awarded contract GSS24646 to deliver AI training and support for creative industries professionals, funded by Innovate UK BridgeAI. Bridging the gap between AI technology and creative applications across the sector.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>FCA Cryptoasset Regulation</strong>  - Represented the British Blockchain Association at an FCA roundtable on stablecoin regulation, providing expert input on the UK's cryptoasset regulatory framework.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Qualifications Wales  - National Qualifications Monitoring</strong>  - Appointed as subject expert to monitor reformed GCSE National Qualifications, ensuring assessments are produced, marked, and awarded fairly. Contract 2026–2029.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>London Data Week  - AI Tools for the Visually Impaired</strong>  - Co-organised with <a href="https://www.visionability.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Vision Ability CIC</a> a public workshop and demonstration on making AI tools accessible to people with visual impairments, as part of <a href="https://londondataweek.org/ldw25-events/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">London Data Week 2025</a>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gov-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Xenet.ai  - AI Startup Mentorship</strong>  - Mentored <a href="https://xenet.ai/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Xenet.ai</a> from early-stage AI startup through to becoming a Google for Startups mentor, demonstrating our ability to grow ecosystem capacity and develop the next generation of AI leaders.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book */}
        <div className="py-12 border-t border-gov-border/30">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gov-border/50 rounded-xl p-8">
            <div className="flex-shrink-0">
              <img src="/book-cover.png" alt="The Decision Maker's Handbook to Data Science book cover" width="1221" height="1851" loading="lazy" decoding="async" className="w-40 rounded-lg shadow-md" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-gov-dark mb-2">Get Your Free Copy</h3>
              <p className="text-gov-secondary leading-relaxed mb-4">
                <em>The Decision Maker's Handbook to Data Science</em>  - a practical guide for non-technical executives, managers, and founders navigating AI and data strategy. Written by our MD, Dr Stylianos Kampakis, and published by Apress. Dr Kampakis also serves as Governor at <a href="https://www.nhc.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">North Hertfordshire College</a>, bringing governance experience across further and higher education.
              </p>
              <a href="/papers/decision-makers-handbook-data-science.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors text-sm">
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Trusted by public sector organisations</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="/logos/wag.png" alt="Welsh Government" width="400" height="420" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo2.png" alt="BridgeAI" width="432" height="117" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo3.png" alt="Innovate UK" width="396" height="127" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/qualifications-wales.png" alt="Qualifications Wales" width="1181" height="1181" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo5.png" alt="National Digital Twin Programme" width="400" height="126" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo6.png" alt="UK Export Academy" width="400" height="249" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/dbt.svg" alt="Department for Business and Trade" width="450" height="206" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/business-gateway.png" alt="Business Gateway" width="600" height="600" loading="lazy" decoding="async" className="h-24 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo9.png" alt="The Alan Turing Institute" width="346" height="146" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/logo10.png" alt="The Growth Company" width="400" height="170" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/fintech-scotland.png" alt="Fintech Scotland" width="827" height="222" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/logos/kalgera.png" alt="Kalgera" width="400" height="169" loading="lazy" decoding="async" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>

        {/* Accreditations & Frameworks */}
        <div className="py-12 border-t border-gov-border/30">
          <h3 className="text-center text-sm font-semibold text-gov-secondary uppercase tracking-wider mb-8">Accreditations & Procurement Frameworks</h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <img src="/logos/cyber-essentials.png" alt="Cyber Essentials Certified" width="400" height="188" loading="lazy" decoding="async" className="h-20 object-contain" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/logos/ccs.svg" alt="Crown Commercial Service Appointed Supplier" width="400" height="120" loading="lazy" decoding="async" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
