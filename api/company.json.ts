import type { VercelRequest, VercelResponse } from '@vercel/node';

const COMPANY_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gov.tesseract.academy/#organization",
  "legalName": "Kampakis and Co Ltd",
  "tradingName": "The Tesseract Academy",
  "alternateName": "Tesseract Government Gateway",
  "companyNumber": "10459791",
  "vatNumber": "GB 371 4744 89",
  "incorporationDate": "2016-11-02",
  "url": "https://gov.tesseract.academy",
  "mainSite": "https://tesseract.academy",
  "address": {
    "streetAddress": "5 Brunswick Park Gardens",
    "addressLocality": "London",
    "addressRegion": "England",
    "postalCode": "N11 1EJ",
    "addressCountry": "GB"
  },
  "geo": {
    "latitude": 51.6154,
    "longitude": -0.1325
  },
  "contact": {
    "name": "Fabio Rovai",
    "role": "Partner and Delivery Lead",
    "email": "fabio@thetesseractacademy.com",
    "phone": "07398771664"
  },
  "team": [
    {
      "@type": "Person",
      "name": "Dr Stylianos Kampakis",
      "jobTitle": "Managing Director",
      "honorificPrefix": "Dr",
      "credentials": [
        "PhD in Machine Learning, University College London",
        "Chartered Statistician (CStat)",
        "Fellow of the Royal Statistical Society (FRSS)",
        "Honorary Research Fellow, UCL Centre for Blockchain Technologies",
        "Data Science Advisor, London Business School"
      ],
      "publications": "40+ peer-reviewed journal articles, 3 books on AI and data science"
    },
    {
      "@type": "Person",
      "name": "Fabio Rovai",
      "jobTitle": "Partner and Delivery Lead",
      "credentials": [
        "MSc Data Science and AI, University of the Arts London",
        "Associate Lecturer (1000+ students across 5 programmes)",
        "NeurIPS Ethics Reviewer",
        "DBS checked (Enhanced, Children and Adults)"
      ]
    }
  ],
  "ccsFrameworks": [
    {
      "id": "RM6200",
      "name": "Artificial Intelligence Dynamic Purchasing System",
      "shortName": "AI DPS",
      "scope": "AI consulting, model development, ethics and governance"
    },
    {
      "id": "RM6094",
      "name": "Spark Dynamic Purchasing System",
      "shortName": "Spark DPS",
      "scope": "Research, data science, digital transformation"
    },
    {
      "id": "RM6126",
      "name": "Research and Insights Dynamic Purchasing System",
      "shortName": "Research & Insights DPS",
      "scope": "Survey design, public engagement, qualitative research"
    }
  ],
  "certifications": [
    { "name": "Cyber Essentials", "status": "certified" },
    { "name": "ISO 27001", "status": "aligned" },
    { "name": "ICO Registration", "reference": "ZB715782" }
  ],
  "identifiers": {
    "companiesHouse": "10459791",
    "vat": "GB 371 4744 89",
    "ico": "ZB715782",
    "duns": "222180245",
    "ppon": "PWJP-6874-MXDJ",
    "horizonEuropePic": "880269472"
  },
  "insurance": {
    "publicLiability": { "value": 2000000, "currency": "GBP" },
    "employerLiability": { "value": 10000000, "currency": "GBP" },
    "professionalIndemnity": { "value": 5000000, "currency": "GBP" }
  },
  "services": [
    "AI and Data Science Consulting",
    "Research and Policy Advisory",
    "Public Engagement and Participatory Research",
    "Education and AI Upskilling",
    "Survey Design and Delivery",
    "AI Ethics and Governance"
  ],
  "selectedContracts": [
    {
      "client": "Welsh Government",
      "title": "Testing Land Valuation Methods",
      "year": "2025-2026",
      "published": "https://www.gov.wales/testing-land-valuation-methods"
    },
    {
      "client": "Innovate UK / BridgeAI",
      "title": "AI Training for UK Creative Industries",
      "reference": "GSS24646",
      "year": "2025-2026",
      "registrations": 1100,
      "satisfactionRating": 4.6
    },
    {
      "client": "National Digital Twin Programme (Dept for Business and Trade)",
      "title": "AI Ontology Extension Generator",
      "year": "2024-2025",
      "github": "https://github.com/National-Digital-Twin/ndtp-ai-ontology-extension"
    },
    {
      "client": "Qualifications Wales",
      "title": "Subject Expert Services for Qualifications Monitoring",
      "year": "2026-2029",
      "duration": "3 years"
    },
    {
      "client": "UK Government Agency",
      "title": "AI Literacy Civil Service Upskilling",
      "year": "2024",
      "civilServantsUpskilled": 2300,
      "completionRateImprovement": "68% to 91%",
      "engagementImprovement": "3.4 to 4.6 out of 5"
    }
  ],
  "publications": [
    {
      "title": "Testing Land Valuation Methods",
      "type": "GovernmentReport",
      "client": "Welsh Government",
      "year": 2026,
      "url": "https://gov.tesseract.academy/papers/testing-land-valuation-methods-tesseract-academy-report.pdf"
    },
    {
      "title": "Proving the Utility of LLMs in Cybersecurity Simulations",
      "type": "ResearchPaper",
      "collaborator": "The Alan Turing Institute",
      "year": 2025,
      "url": "https://gov.tesseract.academy/papers/alan-turing-ontology-paper.pdf"
    },
    {
      "title": "AI Skills for the UK Workforce",
      "type": "GovernmentPublication",
      "publisher": "Skills England / UK Government",
      "year": 2025,
      "url": "https://www.gov.uk/government/publications/ai-skills-for-the-uk-workforce/annex-a-methodology",
      "note": "Tesseract Academy cited alongside The Alan Turing Institute and Surrey AI Centre"
    }
  ]
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(COMPANY_DATA);
}
