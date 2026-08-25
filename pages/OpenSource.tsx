import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ContributionLedger } from '../components/ContributionLedger';
import { CONTRIBUTION_TOTALS } from '../data/contributionTotals';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/open-source#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/open-source',
  headline: 'Upstream contributions: the standards we file bugs against | Tesseract Academy',
  description:
    'A public ledger of the defects we have reported and the fixes we have landed in the standards, registers and libraries other people build on: IATA ONE Record, EDM Council FIBO, GLEIF, the W3C JSON-LD specification, DCAT-US at the US General Services Administration, the USDA National Agricultural Library, the Italian national semantic assets repository, OpenSanctions and others. Every row links the public thread. No logos, because we are nobody’s partner and will not imply otherwise.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-25',
  dateModified: CONTRIBUTION_TOTALS.generatedOn,
  keywords:
    'open source contributions, standards bodies, IATA ONE Record, FIBO, EDM Council, GLEIF, LEI, ISO 17442, ISO 7064, W3C JSON-LD, DCAT-US, GSA, USDA NALT, SKOS, SHACL, OWL 2, OpenSanctions, dati semantici, register assurance, ontology quality',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gov-dark">{title}</h2>
    {children}
  </section>
);

export const OpenSource: React.FC = () => (
  <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

    <header className="border-b border-gov-border/30 pb-10">
      <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
        The standards we file bugs against
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
        Buying data work from us means buying the judgement that finds a defect in a published standard and
        the discipline to report it where the maintainer can act on it. This page is the record of that,
        kept in public and kept current.
      </p>
    </header>

    <Section title="Why there are no logos on this page">
      <div className="space-y-4 max-w-4xl text-gov-text leading-relaxed">
        <p>
          The usual way to display this work is a row of logos under a heading like "trusted by". We will not
          do that, for two reasons.
        </p>
        <p>
          The first is that it would be untrue. We are not a member, partner or licensee of IATA, the W3C,
          GLEIF, the EDM Council, the General Services Administration or the Department of Agriculture. Their
          marks are restricted to exactly those relationships, and putting one on a supplier page asserts a
          relationship that does not exist. Federal agencies in particular do not endorse contractors, and
          cannot be shown as if they had.
        </p>
        <p>
          The second is that a logo is weaker evidence than the thing it replaces. A logo asks you to take our
          word for it. Every row below is a dated public thread with a maintainer on the other end, and you can
          read the argument, the response and whether we were right.
        </p>
      </div>
    </Section>

    <Section title="The ledger">
      <ContributionLedger />
    </Section>

    <Section title="What we maintain ourselves">
      <div className="space-y-4 max-w-4xl text-gov-text leading-relaxed">
        <p>
          <a
            href="https://github.com/fabio-rovai/open-ontologies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-semibold text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30"
          >
            Open Ontologies
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>{' '}
          is a Rust server that exposes OWL and RDF taxonomies to language models as tools, with an OWL 2 DL
          reasoner, SHACL validation, SPARQL and versioning in a single binary. It has 442 stars, 56 forks and
          an outside contributor base that has landed 16 merged pull requests, including native Windows
          support and the bi-temporal conformance corpus.
        </p>
        <p>
          Underneath the research programme sits a family of published register-integrity ontologies in OWL 2,
          SKOS and SHACL, covering banking, investment funds, insurance, securities, the scholarly record,
          learning standards, air cargo, space objects, biosurveillance and on-chain control. Ten are archived
          with Zenodo DOIs. They feed the{' '}
          <Link to="/research/register-assurance" className="font-semibold text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30">Register Integrity Index</Link>, which
          scores 14 public registers on five measured dimensions.
        </p>
        <p>
          Everything is published under an open licence, and the assessment code is written to be re-run by
          somebody who does not trust us.
        </p>
      </div>
    </Section>

    <Section title="What this means if you are buying">
      <div className="space-y-4 max-w-4xl text-gov-text leading-relaxed">
        <p>
          A supplier who has never filed an issue against the standard your programme depends on has never
          read it closely enough to find one. Every entry in the ledger above is unpaid, and was done because
          the defect was there. It is the most honest sample of our method available to you before you
          commission anything:
          the same checks, run against the same kind of artefact, with the reasoning visible.
        </p>
        <p>
          The research write-ups sit under{' '}
          <Link to="/research" className="font-semibold text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30">Research</Link>, and
          how to commission us is on{' '}
          <Link to="/how-to-buy" className="font-semibold text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30">How to Buy</Link>.
        </p>
      </div>
    </Section>
  </div>
);
