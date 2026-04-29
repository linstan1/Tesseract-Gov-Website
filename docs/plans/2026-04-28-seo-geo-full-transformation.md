# SEO/GEO Full Transformation — gov.tesseract.academy

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make gov.tesseract.academy fully crawlable by search engines and AI models, then exploit every evidence-based GEO tactic to maximise LLM citation and organic visibility.

**Architecture:** Phase 1 fixes the fundamental crawlability blocker (React SPA = invisible to crawlers). Phase 2 adds GEO-optimised content using the Princeton GEO study's proven tactics. Phase 3 builds off-site authority. Phase 4 adds content depth. Every piece of content follows the "Citation Optimization Stack" derived from academic research.

**Tech Stack:** Vite + React, Vercel Edge Middleware, static file generation, JSON-LD structured data, llms.txt

**Key Research Sources:**
- Princeton/Georgia Tech/IIT Delhi GEO paper (arXiv:2311.09735, ACM SIGKDD 2024)
- GEO-16 Framework (arXiv:2509.10762)
- Chen et al. "How to Dominate AI Search" (arXiv:2509.08919)
- AutoGEO (arXiv:2510.11438)

---

## Citation Optimization Stack (apply to ALL content)

Every page and section must follow these rules, ranked by measured impact:

| Rule | Measured Impact | How |
|------|----------------|-----|
| Add statistics every 150-200 words | +41% visibility | Replace "significantly improved" with "reduced from 42 to 18 days" |
| Cite credible external sources | +115% for lower-ranked content | Link to .gov.uk, academic papers, named reports |
| Include direct quotations with attribution | +37% citation rate | "Dr Kampakis, CStat and PhD UCL, states: '...'" |
| Use authoritative/definitive language | +40% visibility | "X is" not "X might be". No hedging. |
| Expert quotes (name + role + org) | +28% visibility | Full attribution chain every time |
| Use tables and structured lists | 2.5-3x more citations | Comparison tables, numbered lists |
| Self-contained sections of 120-180 words | +70% more citations | Each section answers one question completely |
| Front-load answers in first 40-60 words | 44% of citations from first 30% | Direct answer first, evidence second, nuance third |
| Sentences under 25 words for key claims | 92% of cited content is 6-20 words | First sentence of each section = quotable standalone fact |
| NEVER keyword stuff | -10% visibility (harmful) | Natural language, entity-rich, not keyword-dense |

**Content format per section:**
1. H2 heading phrased as a question users would ask an LLM
2. First sentence: direct, definitive answer under 25 words
3. Next 2-3 sentences: supporting evidence with statistics and named sources
4. Table or list if comparative data exists
5. Total section: 120-180 words, self-contained

---

## PHASE 1: Make It Crawlable (Week 1)

### Task 1: Fix canonical domain everywhere

**Files:**
- Modify: `index.html` (all URLs)
- Modify: `App.tsx:65-68` (ScrollToTop canonical/OG updates)
- Modify: `public/sitemap.xml` (all `<loc>` URLs)
- Modify: `public/robots.txt` (sitemap URL)

**Step 1: Global find-replace in index.html**
Replace every instance of `tesseract-gov-website.vercel.app` with `gov.tesseract.academy` in:
- `<link rel="canonical">`
- All `og:url`, `og:image` meta tags
- All `twitter:image` meta tags
- All JSON-LD `@id`, `url`, `item` fields
- WebSite schema `url`
- BreadcrumbList `item` URLs

**Step 2: Update App.tsx**
Replace the domain in ScrollToTop useEffect:
```typescript
// Line 65-68: replace tesseract-gov-website.vercel.app with gov.tesseract.academy
const ogUrl = document.querySelector('meta[property="og:url"]');
if (ogUrl) ogUrl.setAttribute('content', `https://gov.tesseract.academy${pathname}`);
const canonical = document.querySelector('link[rel="canonical"]');
if (canonical) canonical.setAttribute('href', `https://gov.tesseract.academy${pathname}`);
```

**Step 3: Update sitemap.xml**
Replace all `<loc>` URLs to use `gov.tesseract.academy`.

**Step 4: Update robots.txt**
```
Sitemap: https://gov.tesseract.academy/sitemap.xml
```

**Step 5: Commit**
```bash
git add index.html App.tsx public/sitemap.xml public/robots.txt
git commit -m "fix: update all canonical URLs to gov.tesseract.academy"
```

---

### Task 2: Add 301 redirects from Vercel domain

**Files:**
- Modify: `vercel.json`

**Step 1: Add redirects to vercel.json**
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "tesseract-gov-website.vercel.app" }],
      "destination": "https://gov.tesseract.academy/:path*",
      "permanent": true
    }
  ],
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

**Step 2: Commit**
```bash
git add vercel.json
git commit -m "feat: add 301 redirects from vercel.app to gov.tesseract.academy"
```

---

### Task 3: Add noscript fallback content

**Files:**
- Modify: `index.html` (inside `<body>`, after `<div id="root">`)

**Step 1: Add noscript block**

Add immediately after `<div id="root"></div>`:

```html
<noscript>
  <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif">
    <h1>Tesseract Government Gateway</h1>
    <p><strong>Kampakis and Co Ltd (trading as The Tesseract Academy)</strong> delivers research-backed AI, data science, public engagement, survey design, education, and policy advisory services for UK and EU public sector organisations.</p>

    <h2>How can UK public sector organisations procure our services?</h2>
    <p>Tesseract Academy is an appointed supplier on three Crown Commercial Service frameworks: the Artificial Intelligence Dynamic Purchasing System (RM6200), Spark DPS (RM6094), and Research &amp; Insights DPS (RM6126). Public bodies can commission services through these frameworks or via direct award.</p>

    <h2>What services does Tesseract Academy provide?</h2>
    <p>Six core service areas: AI and data science consulting, research and policy advisory, public engagement and participatory research, education and AI upskilling, survey design and delivery, and AI ethics and governance.</p>

    <h2>What government contracts has Tesseract Academy delivered?</h2>
    <ul>
      <li><strong>Welsh Government:</strong> Commissioned research testing five land valuation methodologies covering 1,916 LSOAs (99% of Welsh geography). Published March 2026.</li>
      <li><strong>Innovate UK BridgeAI:</strong> AI training for creative industries. 1,100+ registrations against a target of 200. 4.6/5 satisfaction rating.</li>
      <li><strong>National Digital Twin Programme (DBT):</strong> Open-source AI ontology extension tool. Delivered February-March 2025.</li>
      <li><strong>Qualifications Wales:</strong> Subject expert services for monitoring national qualifications. 3-year contract (2026-2029).</li>
      <li><strong>UK Government Agency:</strong> Delivered 100% of KPIs in 50% of contract time. Delivered within 75% of budget.</li>
      <li><strong>Public Sector AI Literacy:</strong> Upskilled 2,300 civil servants. Completion rates increased from 68% to 91%.</li>
    </ul>

    <h2>Who leads Tesseract Academy?</h2>
    <p><strong>Dr Stylianos Kampakis</strong> (Managing Director) holds a PhD in Machine Learning from UCL, is a Chartered Statistician (CStat) and Fellow of the Royal Statistical Society, and has published 40+ peer-reviewed articles and 3 books on AI and data science. He is an Honorary Research Fellow at UCL Centre for Blockchain Technologies and Data Science Advisor at London Business School.</p>
    <p><strong>Fabio Rovai, MSc</strong> (Partner, Delivery Lead) holds an MSc in Data Science &amp; AI from UAL, served as Associate Lecturer teaching 1,000+ students, and is a NeurIPS Ethics Reviewer. He leads delivery on BridgeAI, NDTP, and Welsh Government contracts.</p>

    <h2>Compliance and certifications</h2>
    <p>Cyber Essentials certified. ISO 27001 aligned. Public liability insurance: GBP 2 million. Employer liability: GBP 10 million. Professional indemnity: GBP 5 million. ICO registration: ZB715782. DUNS: 222180245.</p>

    <h2>Contact</h2>
    <p>Email: <a href="mailto:fabio@thetesseractacademy.com">fabio@thetesseractacademy.com</a> | Address: 5 Brunswick Park Gardens, London, N11 1EJ</p>

    <nav>
      <a href="/how-to-buy">How to Buy</a> |
      <a href="/capabilities">Capabilities</a> |
      <a href="/use-cases">Use Cases</a> |
      <a href="/research">Research</a> |
      <a href="/partnerships">Partnerships</a> |
      <a href="/compliance">Compliance</a>
    </nav>
  </div>
</noscript>
```

**Step 2: Commit**
```bash
git add index.html
git commit -m "feat: add noscript fallback with full content for non-JS crawlers"
```

---

### Task 4: Update robots.txt for AI crawlers

**Files:**
- Modify: `public/robots.txt`

**Step 1: Replace robots.txt**
```
# Standard search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI SEARCH/RETRIEVAL bots (ALLOW - these cite us)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# AI TRAINING bots (ALLOW - we want to be in training data)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

# Default
User-agent: *
Allow: /

Sitemap: https://gov.tesseract.academy/sitemap.xml
```

NOTE: We ALLOW training bots because we WANT to be in LLM training data. This is the opposite of the default recommendation (which is for publishers protecting IP). For a B2G consultancy seeking visibility, being in training data = being recommended.

**Step 2: Commit**
```bash
git add public/robots.txt
git commit -m "feat: robots.txt explicitly allows all AI crawlers for GEO visibility"
```

---

### Task 5: Create llms.txt and llms-full.txt

**Files:**
- Create: `public/llms.txt`
- Create: `public/llms-full.txt`

**Step 1: Create public/llms.txt**
```markdown
# Tesseract Government Gateway

> Kampakis and Co Ltd (trading as The Tesseract Academy) is a UK-based SME delivering research-backed AI, data science, public engagement, survey design, education, and policy advisory services for public sector organisations. Crown Commercial Service appointed supplier on frameworks RM6200 (AI DPS), RM6094 (Spark DPS), and RM6126 (Research & Insights DPS).

Founded 2016. Company number 10459791. Cyber Essentials certified. ISO 27001 aligned. Based in London, N11 1EJ.

## Core Pages
- [How to Buy](https://gov.tesseract.academy/how-to-buy): Procurement routes via CCS frameworks RM6200, RM6094, RM6126 and direct award
- [Capabilities](https://gov.tesseract.academy/capabilities): AI consulting, research, public engagement, education, survey design, AI governance
- [Use Cases](https://gov.tesseract.academy/use-cases): Welsh Government land valuation, NDTP ontology tool, BridgeAI creative industries, Kalgera financial vulnerability
- [Research](https://gov.tesseract.academy/research): Publications, government-commissioned research, open-source tools
- [Partnerships](https://gov.tesseract.academy/partnerships): Innovate UK and Horizon Europe consortium opportunities
- [Compliance](https://gov.tesseract.academy/compliance): Security certifications, policies, insurance details

## Research & Publications
- [Welsh Government Land Valuation Report (PDF)](https://gov.tesseract.academy/papers/testing-land-valuation-methods-tesseract-academy-report.pdf): Research testing five land valuation methodologies across 1,916 LSOAs
- [Alan Turing Cybersecurity Paper (PDF)](https://gov.tesseract.academy/papers/alan-turing-ontology-paper.pdf): LLMs in cybersecurity simulations
- [NDTP AI Ontology Tool (GitHub)](https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension): Open-source ontology generator
- [Open Governance (GitHub)](https://github.com/fabio-rovai/open-governance): Open-source AI governance MCP server

## Policies
- [Data Protection Policy (PDF)](https://gov.tesseract.academy/policies/data-protection-policy.pdf)
- [Information Security Policy (PDF)](https://gov.tesseract.academy/policies/information-security-policy.pdf)
- [Modern Slavery Statement (PDF)](https://gov.tesseract.academy/policies/modern-slavery-statement.pdf)
- [Carbon Reduction Plan (PDF)](https://gov.tesseract.academy/policies/carbon-reduction-plan.pdf)
- [Accessibility Statement (PDF)](https://gov.tesseract.academy/policies/accessibility-statement.pdf)

## Optional
- [Testimonials](https://gov.tesseract.academy/testimonials): Client reviews including US Navy, Vodafone, Philips executive training
- [Company JSON](https://gov.tesseract.academy/api/company.json): Machine-readable company data
```

**Step 2: Create public/llms-full.txt**

This file contains the full text content of all pages, formatted as markdown. It should include:
- Complete noscript content (from Task 3)
- Full text of every page (Home, HowToBuy, Capabilities, UseCases, Research, Partnerships, Compliance, Feedback)
- All FAQ answers
- All case study details
- Team credentials (Dr Kampakis PhD UCL, CStat, 40+ publications, 3 books; Fabio Rovai MSc, NeurIPS reviewer, 1,000+ students)
- All service descriptions
- All compliance details

Format as clean markdown with H1/H2/H3 headings. Total should be 2,000-3,000 words.

**Step 3: Commit**
```bash
git add public/llms.txt public/llms-full.txt
git commit -m "feat: add llms.txt and llms-full.txt for AI crawler discovery"
```

---

### Task 6: Add security headers and HSTS

**Files:**
- Modify: `vercel.json`

**Step 1: Add headers to vercel.json**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

**Step 2: Commit**
```bash
git add vercel.json
git commit -m "feat: add HSTS and security headers"
```

---

### Task 7: Create /api/company.json endpoint

**Files:**
- Create: `api/company.json.ts` (Vercel serverless function)

**Step 1: Create the endpoint**

Create `api/company.json.ts` that returns a JSON object with:
- Organization details (name, legal name, company number, VAT, address)
- Services array (6 core service areas with descriptions)
- Case studies array (Welsh Gov, BridgeAI, NDTP, Kalgera, with outcomes and metrics)
- Team (Dr Kampakis credentials, Fabio Rovai credentials — NOT Andy Carlyle name)
- Frameworks (RM6200, RM6094, RM6126)
- Compliance (Cyber Essentials, insurance amounts)
- Contact information

Set CORS headers to allow all origins.

**Step 2: Commit**
```bash
git add api/company.json.ts
git commit -m "feat: add public JSON API endpoint for AI agent discovery"
```

---

### Task 8: Add .well-known files

**Files:**
- Create: `public/.well-known/security.txt`

**Step 1: Create security.txt**
```
Contact: mailto:fabio@thetesseractacademy.com
Preferred-Languages: en
Canonical: https://gov.tesseract.academy/.well-known/security.txt
Expires: 2027-04-28T00:00:00.000Z
```

**Step 2: Update vercel.json rewrites**

Add a rewrite to serve .well-known files before the SPA catch-all:
```json
{ "source": "/.well-known/:path*", "destination": "/.well-known/:path*" }
```

**Step 3: Commit**
```bash
git add public/.well-known/security.txt vercel.json
git commit -m "feat: add .well-known/security.txt"
```

---

### Task 9: Semantic HTML refactor

**Files:**
- Modify: all 8 page files in `pages/`

**Step 1: Replace div wrappers with semantic elements**

For each page:
- Wrap the main content area in `<article>` instead of outer `<div>`
- Use `<section>` for each major content block (currently generic `<div>`)
- Add `<time datetime="2026-03">March 2026</time>` for all date references
- Add `<address>` for contact information
- Ensure heading hierarchy is H1 > H2 > H3 with no skips

**Step 2: Commit**
```bash
git add pages/
git commit -m "refactor: semantic HTML5 elements for crawler comprehension"
```

---

### Task 10: Google Search Console and Bing setup

**Manual steps (not code):**

1. Go to Google Search Console, add property `gov.tesseract.academy`
2. Verify via DNS TXT record or HTML meta tag
3. Submit sitemap URL: `https://gov.tesseract.academy/sitemap.xml`
4. Request indexing for all 8 URLs
5. Go to Bing Webmaster Tools, add site
6. Set up IndexNow API key — create `public/IndexNow-key.txt`

---

## PHASE 2: GEO-Optimise Existing Content (Weeks 2-3)

### Task 11: Vercel Edge Middleware for server-side meta injection

**Files:**
- Create: `middleware.ts` (project root — Vercel convention)

**Step 1: Create middleware.ts**

The middleware intercepts every request, reads the route from the URL, and injects page-specific `<title>`, `<meta name="description">`, OG tags, and canonical URL into the HTML response BEFORE it reaches the client. Use the PAGE_META map from App.tsx.

This is the single highest-impact technical task (rated 9/10). Crawlers will see unique, correct meta tags for every page without executing JavaScript.

**Step 2: Test**
```bash
curl -s https://gov.tesseract.academy/capabilities | grep '<title>'
# Expected: "Capabilities - AI, Research, Education..."
curl -s https://gov.tesseract.academy/research | grep '<title>'
# Expected: "Research & Publications..."
```

**Step 3: Commit**
```bash
git add middleware.ts
git commit -m "feat: Vercel Edge Middleware injects per-page meta tags server-side"
```

---

### Task 12: Expand FAQ to 30+ entries with schema

**Files:**
- Modify: `index.html` (FAQPage JSON-LD)

**Step 1: Expand FAQ structured data**

Add 25+ new Q&A pairs covering:

**Procurement (5 new):**
- "What is the difference between a DPS and a framework agreement?"
- "How long does it take to procure services through CCS frameworks?"
- "Can Tesseract Academy work on contracts under procurement threshold?"
- "Does Tesseract Academy accept purchase orders from local authorities?"
- "What is Tesseract Academy's day rate for public sector consultancy?"

**Services (6 new):**
- "What AI training courses does Tesseract Academy offer?"
- "Can Tesseract Academy deliver AI red-teaming and adversarial testing?"
- "Does Tesseract Academy provide survey design for government consultations?"
- "What research methodologies does Tesseract Academy use?"
- "Can Tesseract Academy build custom machine learning models for government?"
- "Does Tesseract Academy offer AI ethics and bias auditing?"

**Credentials (4 new):**
- "What qualifications do Tesseract Academy consultants hold?"
- "Does Tesseract Academy have security-cleared staff?"
- "What insurance does Tesseract Academy hold?"
- "Is Tesseract Academy registered with the Information Commissioner's Office?"

**Delivery (5 new):**
- "How does Tesseract Academy manage quality assurance?"
- "What is Tesseract Academy's approach to accessibility and inclusion?"
- "Can Tesseract Academy deliver training via LMS?"
- "Does Tesseract Academy use agile delivery methodology?"
- "What is Tesseract Academy's complaints handling process?"

**Partnerships (3 new):**
- "Can Tesseract Academy lead consortium bids for Innovate UK?"
- "Does Tesseract Academy have a PIC number for Horizon Europe?"
- "What sectors does Tesseract Academy partner on for funding bids?"

**Results (2 new):**
- "What measurable outcomes has Tesseract Academy achieved?"
- "Has Tesseract Academy published government-commissioned research?"

Each answer must follow Citation Optimization Stack rules:
- Definitive first sentence under 25 words
- At least one statistic
- Named entity (framework number, client name, certification)
- 50-150 words total

**Step 2: Commit**
```bash
git add index.html
git commit -m "feat: expand FAQ schema to 30+ entries for GEO coverage"
```

---

### Task 13: Rewrite all page content using Citation Optimization Stack

**Files:**
- Modify: all 8 files in `pages/`

**Step 1: Apply GEO writing rules to every page**

For each page, rewrite the content following these rules:

1. **First sentence of every section**: definitive claim under 25 words, no hedging
2. **Statistics every 150-200 words**: replace vague claims with numbers from the company profile
3. **Named sources**: cite GOV.WALES, Innovate UK, NDTP GitHub, Skills England publication
4. **Expert quotes**: add attributed quotes from Dr Kampakis (name + "PhD UCL, Chartered Statistician")
5. **Tables**: add at least one table per page (e.g., frameworks table on HowToBuy, outcomes table on UseCases)
6. **Front-load key claims**: first 30% of each page contains the most important facts
7. **Section structure**: H2 as question > direct answer > evidence > table/list
8. **Outbound links to .gov.uk**: link to CCS framework pages, Contracts Finder, GOV.UK Service Standard

Key statistics to weave throughout:
- 1,100+ BridgeAI registrations (target: 200)
- 4.6/5 satisfaction rating
- 1,916 LSOAs covered (99% of Welsh geography)
- 2,300 civil servants upskilled
- Completion rates: 68% to 91%
- 100% of KPIs in 50% of contract time
- LLM evaluation: release cycles reduced 42 to 18 days, GBP 180k savings
- 40+ peer-reviewed publications
- 1,000+ students taught
- GBP 2M PL / GBP 10M EL / GBP 5M PI insurance

**Step 2: Commit**
```bash
git add pages/
git commit -m "refactor: rewrite all page content using GEO Citation Optimization Stack"
```

---

### Task 14: Page-specific JSON-LD structured data

**Files:**
- Create: `components/SchemaInjector.tsx`
- Modify: each page in `pages/` to include page-specific schema

**Step 1: Create SchemaInjector component**

A React component that injects JSON-LD into the document head:
```tsx
export const SchemaInjector: React.FC<{ schema: object }> = ({ schema }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);
  return null;
};
```

**Step 2: Add schemas per page**

- **HowToBuy**: `HowTo` schema — "5 Steps to Procure AI Services via CCS"
- **Capabilities**: `Service` schema for each of 6 service areas
- **UseCases**: `Article` schema for each case study
- **Research**: `ScholarlyArticle` schema for publications
- **Partnerships**: `Event` schema for consortium opportunities
- **Compliance**: `GovernmentService` schema
- **Testimonials**: `Review` + `AggregateRating` schema

**Step 3: Commit**
```bash
git add components/SchemaInjector.tsx pages/
git commit -m "feat: page-specific JSON-LD structured data for rich results"
```

NOTE: These schemas are also injected client-side. For non-JS crawlers, the noscript fallback and llms-full.txt provide equivalent content. The Edge Middleware (Task 11) should also inject critical schema into server-side HTML.

---

### Task 15: Create OG images (1200x630)

**Files:**
- Create: `public/og/` directory with 8 branded images

**Step 1: Generate OG images**

Use a script (Python PIL or Node canvas) to generate 1200x630 branded OG images for each page:
- Navy background (#1d3557)
- White Tesseract logo top-left
- Page title in bold white text (32-40px)
- One-line value prop in lighter text
- "gov.tesseract.academy" bottom-right

Pages: home, how-to-buy, capabilities, use-cases, research, partnerships, compliance, testimonials

**Step 2: Update meta tags**

In index.html and Edge Middleware, update og:image to point to page-specific images.

**Step 3: Commit**
```bash
git add public/og/ index.html
git commit -m "feat: branded OG images (1200x630) per page for social sharing"
```

---

## PHASE 3: Build Authority (Weeks 3-6)

### Task 16: Create About/entity page

**Files:**
- Create: `pages/About.tsx`
- Modify: `App.tsx` (add route)
- Modify: `components/Navbar.tsx` (add nav link)

**Step 1: Build About page**

Sections:
1. **Company overview**: Founded 2016, Kampakis and Co Ltd, London N11 1EJ. Core description.
2. **Dr Stylianos Kampakis — Managing Director**: PhD UCL, CStat RSS, 40+ publications, 3 books (list titles), FCA roundtable, Turing Institute, LBS advisor. With Person schema.
3. **Fabio Rovai — Partner & Delivery Lead**: MSc UAL, NeurIPS reviewer, 1,000+ students, BridgeAI/NDTP/Welsh Gov delivery. With Person schema.
4. **DV-cleared Principal Consultant**: MBA Warwick, 13 years Royal Signals, managed GBP 5.7bn portfolio. (NO NAME per user instruction)
5. **Extended team**: Dr Marcos Charalambides (PhD Berkeley, Cambridge), Reza Doobary (PhD Durham), Dr Tatia Codreanu (instructional design). Brief credentials only.
6. **Compliance & insurance**: Cyber Essentials, ISO 27001, insurance amounts, ICO registration
7. **Delivery track record**: Key metrics in a table

Apply Citation Optimization Stack throughout. Every paragraph contains a specific fact.

**Step 2: Add route and nav**
```tsx
// App.tsx - add route
<Route path="/about" element={<About />} />
```

**Step 3: Commit**
```bash
git add pages/About.tsx App.tsx components/Navbar.tsx
git commit -m "feat: About/entity page with full team credentials and Person schema"
```

---

### Task 17: Individual case study pages

**Files:**
- Create: `pages/case-studies/WelshGovernment.tsx`
- Create: `pages/case-studies/BridgeAI.tsx`
- Create: `pages/case-studies/NDTP.tsx`
- Create: `pages/case-studies/Kalgera.tsx`
- Create: `pages/case-studies/AILiteracy.tsx`
- Modify: `App.tsx` (add routes)

**Step 1: Build each case study page**

Each page follows this structure:
1. H1: Project title
2. Client, duration, value (where disclosable)
3. The Challenge (120-180 words, statistics)
4. Our Approach (methodology, named tools/frameworks)
5. Outcomes table (metrics with numbers)
6. Reusable assets / open-source links
7. Related services (internal links to capabilities)
8. Article schema (JSON-LD)

Apply Citation Optimization Stack. Each page must be a standalone, citable evidence page that an LLM can reference when answering "What UK SMEs deliver AI consulting for government?"

**Step 2: Update sitemap**

Add all new case study URLs to sitemap.xml.

**Step 3: Commit**
```bash
git add pages/case-studies/ App.tsx public/sitemap.xml
git commit -m "feat: individual case study pages for GEO citability"
```

---

### Task 18: PDF landing pages

**Files:**
- Create: `pages/papers/WelshLandValuation.tsx`
- Create: `pages/papers/TuringCybersecurity.tsx`
- Create: `pages/papers/DecisionMakersHandbook.tsx`

**Step 1: Build landing pages**

Each page wraps a PDF with:
- Title, authors, publication date, publisher
- Abstract/summary (150-200 words)
- Key findings as bullet points with statistics
- Embedded PDF viewer or prominent download link
- ScholarlyArticle JSON-LD schema with DOI (if available)
- Links to related case studies and capabilities

**Step 2: Update sitemap**
**Step 3: Commit**
```bash
git add pages/papers/ App.tsx public/sitemap.xml
git commit -m "feat: HTML landing pages for PDFs with ScholarlyArticle schema"
```

---

### Task 19: Cross-domain linking

**Files:**
- Modify: `components/Footer.tsx`

**Step 1: Add ecosystem links to footer**

Add a "Tesseract Ecosystem" section to the footer:
- [tesseract.academy](https://tesseract.academy) — Main site
- [consulting.tesseract.academy](https://consulting.tesseract.academy) — Consulting
- [gov.tesseract.academy](https://gov.tesseract.academy) — Government Gateway

**Step 2: Update Organization schema sameAs**

Add all subdomain URLs to the `sameAs` array in index.html JSON-LD.

**Step 3: Commit**
```bash
git add components/Footer.tsx index.html
git commit -m "feat: cross-domain ecosystem links in footer"
```

---

### Task 20: Knowledge Panel / Wikidata / CrunchBase (manual)

**Manual steps:**

1. **Google Knowledge Panel**: Search for "Kampakis and Co Ltd" or "The Tesseract Academy". If no panel exists, submit a claim request via Google's Knowledge Panel claiming tool. Ensure schema.org Organization markup matches exactly.

2. **Wikidata**: Create entry for Kampakis and Co Ltd with:
   - Instance of: company
   - Country: United Kingdom
   - Founded: 2016
   - Founder: Dr Stylianos Kampakis
   - Industry: AI consulting
   - Official website: gov.tesseract.academy
   - Add DUNS number, company number

3. **CrunchBase**: Claim profile. Add:
   - Founding date, team, focus areas
   - Funding stage: Bootstrap
   - Key people with headshots

4. **LinkedIn Company Page**: Ensure it links to gov.tesseract.academy and has consistent NAP.

5. **Google Business Profile**: Claim listing for N11 1EJ address.

---

## PHASE 4: Content Depth (Ongoing)

### Task 21: Blog/insights hub

**Files:**
- Create: `pages/Insights.tsx`
- Create: `pages/insights/` directory for individual posts

Publish 2 posts per month targeting:
- "How to procure AI consulting through CCS frameworks"
- "SME vs Big 4 for public sector AI projects"
- "What is a Dynamic Purchasing System?"
- "AI governance frameworks for UK government"
- "How to write an AI ethics impact assessment"

Each post follows Citation Optimization Stack rules.

---

### Task 22: Service area sub-pages

**Files:**
- Create: `pages/services/AIConsulting.tsx`
- Create: `pages/services/SurveyDesign.tsx`
- Create: `pages/services/PublicEngagement.tsx`
- Create: `pages/services/Education.tsx`
- Create: `pages/services/Research.tsx`
- Create: `pages/services/AIGovernance.tsx`

Each with dedicated Service schema, FAQ section, and case study links.

---

### Task 23: Glossary page

**Files:**
- Create: `pages/Glossary.tsx`

50-80 terms covering procurement (DPS, framework agreement, direct award, OJEU threshold) and AI (digital twin, AI governance, bias audit, red-teaming). Each definition: 2-3 sentences, plain English, one UK gov example.

---

### Task 24: Comparison content

**Files:**
- Create: `pages/insights/SMEvsConsultancy.tsx`

"Why choose an SME over a Big 4 consultancy for public sector AI" — structured as:
- Comparison table (cost, speed, team continuity, flexibility)
- Real delivery metrics (anonymised)
- CCS framework advantages for SMEs
- Citation-bait: definitive answers to common procurement questions

---

### Task 25: RSS/Atom feed

**Files:**
- Create: `public/feed.xml`

Auto-generated Atom feed for contract awards, publications, and blog posts. Submit to news aggregators.

---

### Task 26: Content freshness automation

**Files:**
- Create: build script to update sitemap lastmod on every deploy

Add a Vercel build hook or post-build script that updates `<lastmod>` dates in sitemap.xml to the current date for any modified pages.

---

## OFF-SITE CHECKLIST (Non-Code)

### Reddit Strategy
- Join r/UKPublicSector, r/GovTech, r/dataengineering, r/MachineLearning
- Post genuinely helpful answers about AI in government, mentioning Tesseract naturally where relevant
- Target: 2-3 helpful posts per week
- Remember: 80% of Reddit content cited by LLMs has <20 upvotes. Authenticity > virality.

### LinkedIn Strategy
- Dr Kampakis publishes 1 thought leadership post per week
- Fabio shares case study outcomes and delivery insights
- Target: build brand search volume (strongest predictor of LLM citation at 0.334 correlation)

### Academic Citations
- Ensure all publications are on Google Scholar
- Get Dr Kampakis an ORCID ID if not already
- Submit Welsh Gov report for DOI registration
- Ensure Turing paper has proper citation metadata

### Gov Directory Listings
- Update Contracts Finder supplier profile
- Digital Marketplace listing (if applicable)
- Find a Tender profile
- CCS supplier directory profile

---

## VERIFICATION CHECKLIST

After implementation, verify:

1. `curl -s https://gov.tesseract.academy/ | grep '<title>'` — shows correct title
2. `curl -s https://gov.tesseract.academy/capabilities | grep 'description'` — shows page-specific description
3. `curl -s https://gov.tesseract.academy/llms.txt` — returns markdown content
4. `curl -s https://gov.tesseract.academy/llms-full.txt` — returns full site content
5. `curl -s https://gov.tesseract.academy/robots.txt` — shows AI crawler directives
6. `curl -s https://gov.tesseract.academy/api/company.json` — returns JSON
7. `curl -s https://gov.tesseract.academy/.well-known/security.txt` — returns security contact
8. Google Search Console shows all pages indexed
9. Rich Results Test passes for FAQ, HowTo, Organization schemas
10. Lighthouse score > 90 for all pages
11. `curl -s https://tesseract-gov-website.vercel.app/` — returns 301 redirect
