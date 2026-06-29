import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/case-studies/agri-environment-heritage-value#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/case-studies/agri-environment-heritage-value',
  headline: 'The Value of Agri-Environment Heritage Actions — Tesseract Academy',
  description:
    'An open evidence review of the wider co-benefits of agri-environment scheme heritage actions for nature and for people: a real spatial analysis of the 2,206 Scheduled Monuments on the Historic England Heritage at Risk Register 2024, and an evidence map built from published sources, with honest gaps.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
  about: { '@type': 'Thing', name: 'Agri-environment scheme heritage actions and their co-benefits' },
  keywords:
    'agri-environment, heritage, historic environment, Scheduled Monuments, Heritage at Risk, soil carbon, grassland biodiversity, scoping review, natural capital, value for money, Green Book, Natural England, Historic England',
};

const REFERENCES = [
  { t: 'Historic England (2025) Gaining an understanding of soil carbon and its management in an archaeological context. Research Report Series 50/2025.', u: 'https://historicengland.org.uk/research/results/reports/50-2025' },
  { t: 'Historic England. Management of Archaeological Sites on Grassland (technical advice).', u: 'https://historicengland.org.uk/advice/technical-advice/monuments-and-sites/management-of-archaeological-sites-on-grassland/' },
  { t: 'Historic England. Grasslands — Nature Recovery and Heritage.', u: 'https://historicengland.org.uk/advice/climate-change/nature-recovery-and-heritage/grasslands/' },
  { t: 'English Heritage, ALGAO and Defra (2004) Farming the Historic Landscape: Caring for archaeological sites in grassland.', u: 'https://thegardenstrust.org/wp-content/uploads/2016/11/EH-Farming-the-historic-landscape-Caring-for-archaeological-sites-in-grassland-2004-1.pdf' },
  { t: 'Yang, Y., Tilman, D. et al. (2019) Soil carbon sequestration accelerated by restoration of grassland biodiversity. Nature Communications 10, 718.', u: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6372642/' },
  { t: 'Conservation Evidence. Maintain traditional water meadows (including management for breeding and/or wintering waders/waterfowl). Action 696.', u: 'https://www.conservationevidence.com/actions/696' },
  { t: 'Conservation Evidence. Raise water levels in ditches or grassland. Action 121.', u: 'https://www.conservationevidence.com/actions/121' },
  { t: 'Robertson, D. (2020) HEFERs and SHINE data: outcomes for the historic environment. ALGAO / Archaeology East Anglia Report 47.', u: 'https://www.algao.org.uk/sites/algao.org.uk/files/2024-07/HEFERSHINE_report_v5.pdf' },
];

export const AesHeritage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/use-cases" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open evidence review &mdash; Heritage &amp; Natural Environment
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The Value of Agri-Environment Heritage Actions
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Agri-environment schemes are the largest source of government funding for the rural historic environment. This is a self-initiated, open review of what the published evidence actually says about their wider co-benefits, for nature and for people, built on real public data. It maps where the evidence is strong, and where it is honestly thin.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Monuments analysed</p>
          <p className="text-3xl font-extrabold text-gov-dark">2,206</p>
          <p className="text-sm text-gov-secondary mt-1">Scheduled Monuments at Risk, 2024</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Buried archaeology</p>
          <p className="text-3xl font-extrabold text-gov-dark">85%</p>
          <p className="text-sm text-gov-secondary mt-1">at risk from ground disturbance</p>
        </div>
        <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue mb-1">Sources mapped</p>
          <p className="text-3xl font-extrabold text-gov-dark">8</p>
          <p className="text-sm text-gov-secondary mt-1">published studies and datasets</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">The Challenge</h2>
          <p className="text-gov-dark leading-relaxed">
            As nature recovery is delivered faster, at greater scale and under tighter budgets, heritage actions risk being overlooked unless their wider co-benefits for nature, people and the economy can be evidenced. Seventy-five per cent of Scheduled Monuments and all Registered Battlefields lie on farmland, and <strong>eighty-four per cent of Scheduled Monuments at Risk are on farmland</strong>, where the main pressure is agriculture or natural processes. The evidence for the co-benefits exists, but it is scattered across soil science, ecology, archaeology and grey literature. This review brings it together and shows the working. It is not a commissioned contract.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">Where the risk is, and what is at stake</h2>
        <p className="text-gov-secondary leading-relaxed">
          We took the <strong>Historic England Heritage at Risk Register 2024</strong> open dataset and ran our own analysis. Of the 2,206 Scheduled Monuments at risk, <strong>1,895 (85 per cent) are buried archaeology</strong>, the asset class most vulnerable to ground disturbance and precisely what agri-environment cultivation actions are designed to protect. A spatial join locates the risk by region: the South West holds 973 of the located monuments, which matches Historic England&apos;s own published figure of roughly 45 per cent of the register, a check that the analysis is sound.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aes-heritage-har-composition.png" alt="Heritage at Risk Register 2024 by asset type: 2,206 Scheduled Monuments, 2,100 Listed Buildings, 461 Conservation Areas, 103 Parks and Gardens. Of the Scheduled Monuments at risk, 1,895 (85 per cent) are buried archaeology and 311 are buildings or structures." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            Heritage at Risk Register 2024 composition. The asset class most at risk, buried archaeology, is the one cultivation-control actions protect. Source: Historic England (open data); analysis by The Tesseract Academy.
          </figcaption>
        </figure>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aes-heritage-monuments-at-risk.png" alt="Choropleth map of England showing Scheduled Monuments at Risk by region in 2024, with the South West highest at 973 and Yorkshire and the Humber next at 336." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            Scheduled Monuments at Risk by English region, 2024. Spatial join by The Tesseract Academy; 2,181 of 2,206 located.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gov-dark font-serif">What the evidence says, and where it is thin</h2>
        <p className="text-gov-secondary leading-relaxed">
          We charted eight published sources (listed below) against the main heritage actions and co-benefit domains. The evidence is genuinely strong in places and genuinely absent in others, and an honest review says so.
        </p>
        <figure className="rounded-xl overflow-hidden border border-gov-border/50">
          <img src="/case-studies/aes-heritage-evidence-map.png" alt="Evidence map rating each agri-environment heritage action against six co-benefit domains from gap to strong, based on eight published sources. Evidence is strongest for grassland, out-of-cultivation and water-feature actions on soil and carbon, biodiversity and water; it is weak or a gap for traditional buildings, walls and banks, and across the access and wellbeing column." className="w-full" />
          <figcaption className="text-sm text-gov-secondary px-4 py-3 bg-gov-bg">
            Evidence map of co-benefits by heritage action, rated from the eight sources below. Darker is stronger; &quot;gap&quot; means no robust evidence found.
          </figcaption>
        </figure>
        <ul className="space-y-3 text-gov-dark leading-relaxed list-disc pl-6">
          <li><strong>Strongest where land stays undisturbed.</strong> Keeping archaeological features under permanent grassland, or taking them out of cultivation, has solid evidence for soil-carbon retention and heritage preservation: undisturbed soils store carbon and preserve the best-surviving earthworks, while cultivation levels them (the Damerham Iron Age dyke is the textbook comparison). Restoring grassland biodiversity is itself shown to accelerate soil-carbon sequestration (Yang and Tilman, 2019).</li>
          <li><strong>Water features deliver for wildlife.</strong> Traditional water meadows and raised water levels have good evidence as habitat for breeding and wintering waders and waterfowl.</li>
          <li><strong>Real gaps remain.</strong> The co-benefit evidence for traditional farm buildings, dry stone walls and earth banks is thin to absent, and the people-centred column, access and wellbeing, is the weakest of all. For a programme whose value is for nature <em>and for people</em>, that is the single most important gap to close, and naming it is part of the job.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Putting a value on it</h2>
          <p className="text-gov-dark leading-relaxed">
            Multi-objective benefits can be valued, carefully, using the HM Treasury Green Book and a natural-capital approach. The carbon component alone is real and quantifiable: using the DESNZ central non-traded carbon value (around &pound;250 per tonne CO<sub>2</sub>e, 2020 prices), the carbon retained by not disturbing archaeological soil has a defensible annual value, to which water regulation, grassland biodiversity and the heritage asset itself can be added. Counting those benefits together, rather than a single outcome, materially strengthens the value-for-money case, and we are explicit about which benefits can be monetised with confidence and which are reported in physical or qualitative terms.
          </p>
        </div>
        <blockquote className="border-l-4 border-l-gov-blue pl-6 py-2 my-6 bg-gov-bg rounded-r-lg">
          <p className="text-gov-dark italic leading-relaxed">&quot;A baseline of evidence is what lets a heritage action be defended on the strength of its multi-objective value, rather than lost under budget pressure. The job is to count the benefits that single-outcome accounting hides, name the gaps honestly, and show the working.&quot;</p>
          <cite className="text-sm text-gov-secondary font-semibold not-italic mt-2 block">&mdash; Tesseract Academy</cite>
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
        <p className="text-xs text-gov-secondary/80">Method and full protocol: our pre-registered scoping-review protocol sets out the search strategy, eligibility criteria and charting framework in full.</p>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Read the open methods note</p>
          <p className="text-sm text-gov-secondary mt-1">The full pre-registered scoping-review protocol (PDF).</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/papers/aes-heritage-cobenefits-scoping-protocol.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors">
            Read the protocol (PDF)
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
