import type { VercelRequest, VercelResponse } from '@vercel/node';

const COMPANY_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gov.tesseract.academy/#organization",
  "legalName": "Kampakis and Co Ltd",
  "tradingName": "The Tesseract Academy",
  "alternateName": "Tesseract Academy for the Public Sector",
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
    },
    {
      "id": "RM6219",
      "name": "Learning and Training Services Dynamic Purchasing System",
      "shortName": "Learning & Training Services DPS",
      "scope": "Off-the-shelf and bespoke training, learning technologies, education services"
    },
    {
      "id": "RM6235",
      "name": "Space-Enabled and Geospatial Services Dynamic Purchasing System",
      "shortName": "Space-Enabled & Geospatial Services DPS",
      "scope": "Geospatial, remote sensing and PNT, satellite communication, unmanned autonomous vehicles, upstream professional services"
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
    "Ontology Engineering and Knowledge Graphs (RDF, OWL 2, SKOS, SHACL)",
    "AI and Data Science Consulting",
    "Research and Policy Advisory",
    "Public Engagement and Participatory Research",
    "Education and AI Upskilling",
    "Survey Design and Delivery",
    "AI Ethics and Governance"
  ],
  "ontologyEngineering": {
    "url": "https://gov.tesseract.academy/services/ontology-engineering",
    "researchIndex": "https://gov.tesseract.academy/ontology",
    "standards": ["RDF", "RDFS", "OWL 2 DL", "SKOS", "SHACL", "SPARQL", "JSON-LD", "DCAT"],
    "scope": [
      "Domain ontology design in OWL 2 with SKOS vocabularies and SHACL constraints",
      "Standards crosswalks and interoperability audits with measured information loss",
      "Knowledge graph construction from full source data with provenance on every assertion",
      "Closed-world vocabulary verification of AI-generated RDF, beyond open-world SHACL",
      "Public register and reference data assurance",
      "Ontology engineering training in RDF, OWL, SPARQL, SHACL and GraphRAG"
    ],
    "engine": {
      "name": "Open Ontologies",
      "repository": "https://github.com/fabio-rovai/open-ontologies",
      "description": "Rust MCP server with an in-memory Oxigraph triple store, a native OWL 2 DL tableaux reasoner, SHACL validation, SPARQL and versioning. Single binary, no JVM, self-hostable."
    },
    "evidence": {
      "publishedStudies": 51,
      "publicRepositories": 29,
      "method": "Every headline computed at least two independent ways; failed hypotheses reported rather than dropped; reproducible from public data.",
      "namedResult": "Fine-tuning an open model on the UK IES4 standard cut confabulated ontology terms from 93.7% to 1.0% and raised term conformance from 0% to 88.6%, verified against the published ontology.",
      "upstreamDefectReports": ["IATA ONE Record", "FIBO", "W3C JSON-LD", "DCAT-US (GSA)", "USDA National Agricultural Library thesaurus"],
      "upstreamContributions": ["SHACL shapes contributed to GLEIF on the maintainers' invitation"]
    },
    "deliveredFor": "National Digital Twin Programme (Department for Business and Trade), AI ontology extension generator, open-sourced under Apache 2.0",
    "procurement": ["RM6200", "RM6126", "RM6219"]
  },
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
  ],
  "publications": [
    {
      "title": "Consistency Is Not Coherence: Orientation Search for Certified Alignments Between 4D Defence Upper Ontologies",
      "type": "ResearchPaper",
      "venue": "Ontology Matching workshop (OM 2026), co-located with the International Semantic Web Conference 2026, Bari",
      "peerReviewed": true,
      "year": 2026,
      "url": "https://arxiv.org/abs/2608.21914",
      "arxivId": "2608.21914",
      "doi": "10.48550/arXiv.2608.21914",
      "code": "https://github.com/fabio-rovai/ies-hqdm-crosswalk"
    },
    {
      "title": "Testing Land Valuation Methods",
      "type": "GovernmentReport",
      "client": "Welsh Government",
      "year": 2026,
      "url": "https://gov.tesseract.academy/papers/testing-land-valuation-methods-tesseract-academy-report.pdf"
    },
    {
      "title": "Proving the Utility of Large Language Models in Cybersecurity Simulations: A Comprehensive Examination",
      "type": "ResearchPaper",
      "collaborator": "The Alan Turing Institute",
      "year": 2026,
      "url": "https://arxiv.org/abs/2608.16422",
      "arxivId": "2608.16422"
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
