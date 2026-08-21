import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = 'https://github.com/fabio-rovai/jsonld-escaping-conformance';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/jsonld-escaping-conformance#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/jsonld-escaping-conformance',
  headline:
    'How many passes of HTML unescaping should a JSON-LD parser do? A census of the Tranco top 10,000 | Tesseract Academy',
  description:
    'In August 2026 Google changed its JSON-LD extraction to apply a single pass of HTML unescaping instead of two, saying the change brought its parser up to JSON and other standards. The HTML Standard and JSON-LD 1.1 both put the conformant number at zero. This study measures Googlebot’s actual behaviour against Google’s own validator, then censuses the Tranco top 10,000 homepages. Of 2,969 domains publishing JSON-LD, 199 contain a value that Googlebot and every conformant parser read differently, against 10 domains affected by the change Google announced, a ratio of roughly twenty to one. Dell and Investopedia are visibly broken inside Google today. Two Google properties are in the diverging set.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  about: {
    '@type': 'Dataset',
    name: 'JSON-LD escaping conformance census',
    url: REPO,
  },
  keywords:
    'JSON-LD escaping, HTML unescaping, Googlebot structured data, schema.org validator, JSON-LD 1.1 section 7.2, WHATWG script data state, double-escaped entities, structured data conformance, AI crawler visibility, Tranco census, extruct, Web Data Commons, rich results, RFC 8259',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/jsonld-escaping-conformance#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many passes of HTML unescaping should a JSON-LD parser apply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero. The WHATWG HTML Standard tokenizer enters the character reference state from exactly five states: the data state, the RCDATA state, and the three attribute value states. The script data state, section 13.2.5.4, has no U+0026 AMPERSAND clause and emits every character literally, so character references inside a script element are never decoded. JSON-LD 1.1 section 7.2 agrees, stating that escaped content will remain escaped after processing through the JSON-LD API, and its Example 147 shows an escaped closing script tag surviving unchanged into both the expanded output and the Turtle. Python’s html.parser, lxml, Node and extruct all apply zero passes. Googlebot applies one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What did Google actually change in August 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google reduced its JSON-LD extraction from two passes of HTML unescaping to one, and said the change brought its parser up to JSON and other standards. The practical effect is that double-escaped entities such as an escaped ampersand entity are no longer unrolled. Measuring Google’s own validator at validator.schema.org confirms exactly one pass: an input of L2 followed by a double-escaped ampersand comes back still carrying a single escaped ampersand. One pass is not a standard number. RFC 8259 does not mention HTML character references and neither does JSON-LD 1.1, so the change moved from one unspecified number to another.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many sites does the change actually affect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a census of the Tranco top 10,000 homepages taken on 21 August 2026, 2,969 domains publish JSON-LD. Ten of them, 0.34 per cent, are affected by the change Google announced, meaning their values read differently before and after the second pass was removed. One hundred and ninety-nine of them, 6.70 per cent, contain a value that Googlebot and every conformant parser read differently both before and after the change. The population Google left in place is roughly twenty times the population the change addressed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can HTML entities in JSON-LD inject structured data into Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We tested this directly and the hypothesis failed. Googlebot parses JSON structure on the raw script block first and only then applies its single unescaping pass to each parsed string value, so a character reference cannot alter JSON structure. A name value containing escaped quote characters and what looks like an injected property returns as a single name value containing literal quotes, with no property injected. This is sound engineering on Google’s part and the negative result is recorded rather than buried.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does this matter for AI crawlers rather than only for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the divergence runs in Google’s favour. A site publishing an escaped ampersand or an escaped apostrophe inside a JSON-LD string value is read correctly by Googlebot, which unescapes it, and incorrectly by every parser built to the specification, which does not. That includes PyLD and jsonld.js, the two JSON-LD 1.1 reference processors, and extruct, which sits underneath much SEO and scraping tooling. Bing and the AI crawlers are not measured here, because neither Bing nor Yandex exposes a validator without a login, and we do not assert what we have not measured. The structured data is correct inside Google and wrong everywhere else, and nothing in Google’s guidance tells the affected publishers that.',
      },
    },
  ],
};

export const JsonLdEscapingConformance: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        How many passes of HTML unescaping should a JSON-LD parser do? A census of the Tranco top 10,000
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        On 20 August 2026 Google announced that it had changed its JSON-LD extraction to apply only a single pass of HTML unescaping, in its own words to bring the parser up to JSON and other standards. Every commentary we could find restated the advice. Nobody measured it. We did, using Google&apos;s own validator as the oracle rather than trusting the announcement, and then censused the homepages of the Tranco top 10,000. The change affects ten domains in our census. It leaves one hundred and ninety-nine untouched, and those one hundred and ninety-nine are publishing structured data that reads correctly only inside Google.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The conformant number is zero, not one.</strong> The HTML Standard never decodes character references inside a script element, and JSON-LD 1.1 states that escaped content remains escaped after processing, with a worked example showing exactly that.</li>
          <li><strong>Googlebot applies exactly one pass,</strong> measured against Google&apos;s own validator rather than taken from the announcement. It parses JSON structure first and unescapes parsed string values afterwards.</li>
          <li><strong>The ratio is roughly twenty to one.</strong> Of 2,969 domains publishing JSON-LD, 199 diverge from every conformant parser and 10 are affected by the change Google announced.</li>
          <li><strong>Dell and Investopedia are visibly broken inside Google today,</strong> confirmed by sending their live blocks through Google&apos;s validator.</li>
          <li><strong>Two Google properties are in the diverging set,</strong> including the Google blog and a Google Marketing Platform page.</li>
          <li><strong>The artefact</strong> is an open OWL 2, SKOS and SHACL model with the full pipeline, verified five ways, code MIT and ontology CC BY 4.0.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the specifications actually say</h2>
      <p className="text-gov-dark leading-relaxed">
        The question has a precise answer and two specifications give it. The WHATWG HTML Standard defines a tokenizer that enters the character reference state from exactly five places: the data state, the RCDATA state, and the three attribute value states. The RCDATA state, section 13.2.5.2, is explicit about it, instructing the tokenizer on U+0026 AMPERSAND to set the return state and switch to the character reference state. The script data state, section 13.2.5.4, has no such clause. Its instruction for anything other than a less-than sign or a null is to emit the current input character as a character token. Character references inside a script element are not decoded, at all, ever.
      </p>
      <p className="text-gov-dark leading-relaxed">
        JSON-LD 1.1 says the same thing from the other direction. Section 7.2, on restrictions for the contents of JSON-LD script elements, states that escaped content will remain escaped after processing through the JSON-LD API. Its Example 147 takes a description property containing an escaped closing script tag and shows the expanded output and the Turtle serialisation both preserving that escaping unchanged. The section is marked non-normative, so we describe it as the specification&apos;s stated expectation and worked example rather than as a requirement, but the expectation is unambiguous.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Zero is therefore the conformant number, and one is as unspecified as two. RFC 8259 governs JSON syntax and does not mention HTML character references. JSON-LD 1.1 does not introduce them. There is no standard anywhere that prescribes a single pass. Google&apos;s change moved from one arbitrary number to a different arbitrary number and described the move as standards conformance. That is the first thing worth saying plainly, and it is a statement about the justification rather than about the engineering.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Measuring Googlebot instead of quoting it</h2>
      <p className="text-gov-dark leading-relaxed">
        Google runs the validator at validator.schema.org, and it accepts an HTML payload over a keyless POST and returns every property value it extracted. That makes Googlebot&apos;s parsing behaviour empirically measurable rather than a matter of trust. Feeding it a ladder of escaping depths returns exactly one pass applied to each parsed string value, which confirms Google&apos;s description independently.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Value in the script block</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">What Google returns</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">What every conformant parser returns</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border"><code>L0 &amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L0 &amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L0 &amp; x</code></td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>L1 &amp;amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L1 &amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L1 &amp;amp; x</code></td></tr>
            <tr><td className="p-3 border-b border-gov-border"><code>L2 &amp;amp;amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L2 &amp;amp; x</code></td><td className="p-3 border-b border-gov-border"><code>L2 &amp;amp;amp; x</code></td></tr>
            <tr><td className="p-3"><code>L3 &amp;amp;amp;amp; x</code></td><td className="p-3"><code>L3 &amp;amp;amp; x</code></td><td className="p-3"><code>L3 &amp;amp;amp;amp; x</code></td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        Notice which column is the odd one out. Google&apos;s announcement is about the third row, where a doubled escape is no longer unrolled. The second row is the interesting one, because that is ordinary correct-looking markup, it is everywhere, and Google is the only reader that resolves it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Two things Google gets right, which we tested and expected to find broken</h2>
      <p className="text-gov-dark leading-relaxed">
        A critique that concedes nothing does not survive contact with the engineers who built the thing. We went looking for two much more serious problems and did not find either, and both negative results are in the repository.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The first was injection. If a parser unescapes the raw script text before parsing JSON, then a quotation entity inside a user-supplied value could close a string and inject arbitrary properties into a search engine&apos;s understanding of the page. That would be a genuine vulnerability class. It is not what happens. Googlebot parses JSON structure on the raw block first and applies its single pass to each already-parsed string value afterwards. We sent a name value containing escaped quotes and a plausible injected property, and it came back as one name value containing literal quote characters, with nothing injected. The architecture is correct and the ordering is the right way round.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second was testability. If Google&apos;s own validator still applied the old two passes, publishers would have no way to see the new behaviour before it hit their traffic. It does not. The validator already implements the single pass, so anyone can test the change today against Google&apos;s own tooling. That hypothesis died as well.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One smaller divergence did survive. Google requires the terminating semicolon and returns an unterminated ampersand entity unchanged, where the HTML named character reference table decodes some references without one. Google&apos;s single pass is therefore not HTML-conformant unescaping either. It is its own thing.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The census, and the ratio that answers the question</h2>
      <p className="text-gov-dark leading-relaxed">
        We took the Tranco daily list generated on 20 August 2026, fetched the homepage of the top 10,000 domains once each over HTTPS with a self-identifying user agent, and extracted every JSON-LD script block from the rendered response body. Of the 10,000 domains, 6,509 returned a body and 2,969 of those publish JSON-LD, giving 5,020 blocks. Every value in every block was then read three ways: at zero passes, at one pass, and at two.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Population</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Domains</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Share of JSON-LD domains</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border">Googlebot reads differently from every conformant parser</td><td className="p-3 border-b border-gov-border"><strong>199</strong></td><td className="p-3 border-b border-gov-border"><strong>6.70 per cent</strong></td></tr>
            <tr><td className="p-3 border-b border-gov-border">Affected by the change Google announced</td><td className="p-3 border-b border-gov-border"><strong>10</strong></td><td className="p-3 border-b border-gov-border"><strong>0.34 per cent</strong></td></tr>
            <tr><td className="p-3">JSON invalid for every parser including Googlebot</td><td className="p-3">36</td><td className="p-3">1.21 per cent</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The ratio is 19.9 to one, and it is converged rather than an artefact of where we stopped. At 3,121 domains it was 21 to one, at 3,372 it was 23 to one, and at the full 10,000 it settled at 19.9. Google shipped a breaking, publisher-facing change for a third of a per cent of sites and left seven per cent exactly where they were.
      </p>
      <p className="text-gov-dark leading-relaxed">
        There is a serious defence of that decision and it deserves stating. Going to zero passes, which is what conformance actually requires, would alter values on nearly seven per cent of JSON-LD publishing domains overnight. That is a lot of structured data to change in one release, and stopping at one pass is defensible harm reduction rather than laziness. What does not follow from that defence is describing the result as standards conformance, and what certainly does not follow is leaving the seven per cent uninformed.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Who is affected, by name</h2>
      <p className="text-gov-dark leading-relaxed">
        A finding nobody can be shown to have is not worth publishing. Every row below was taken from the site&apos;s own response body and then confirmed by sending that block through Google&apos;s validator, so these are Google&apos;s readings of the sites&apos; real bytes rather than our simulation of Google.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three organisations are visibly broken <em>inside</em> Google as a direct result of the change, because their markup was double-escaped and the second pass was what repaired it. Dell&apos;s organisation description now reads as technology solutions, services, an escaped ampersand, and support. Investopedia&apos;s description carries an escaped apostrophe in the middle of the phrase about being the world&apos;s leading source of financial content. A Google Marketing Platform page reachable from doubleclick.net publishes a headline with escaped break tags, which Google&apos;s single pass turns into literal markup sitting inside a schema.org headline.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The larger group is the reverse case, correct in Google and wrong everywhere else. It includes Samsung, Meta, NASA, the White House, Salesforce, Tencent, People, France Info and the Google blog itself, which publishes an escaped apostrophe in the phrase describing itself as Google&apos;s official blog. The sharpest single example is T-Online, whose sitelinks searchbox target URL uses an escaped ampersand as its query separator. Googlebot resolves it and the search works. Every conformant consumer receives a URL whose separator is a literal five-character entity, and for them the URL is simply broken.
      </p>
      <p className="text-gov-dark leading-relaxed">
        That is the operational consequence, and it is not an SEO consequence. A site in this group has structured data that is correct in Google Search and incorrect in every parser we measured that is not Googlebot, which includes PyLD and jsonld.js, the two JSON-LD 1.1 reference processors, and extruct, which sits underneath a great deal of SEO and scraping tooling. As more consumers of schema.org appear that are not Google, the cost of being correct only in Google rises. Nothing in Google&apos;s guidance tells these publishers that they are in this position.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">The method, which transfers to any published specification</h2>
      <p className="text-gov-dark leading-relaxed">
        The pattern here is one we use across register and specification work, and it is worth separating from this particular finding. Observation and judgement are kept apart: the harvester records only what was in the response and states no defects, and a separate stage classifies. Each parser profile declares its own unescaping pass count as data in a SKOS registry, so the pipeline compares declared profiles rather than hard-coding a rule about any one of them. Defect classes are OWL equivalent-class definitions entailed by a reasoner, so no finding can be asserted by hand.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Every headline is computed twice, set-based in Python and again by SPARQL over the emitted graph, by a script that exits non-zero when the two disagree. That gate earned its keep on this build by catching a genuine race between the emit and verify stages while the harvest was still appending. A SHACL structural layer caught a real modelling bug, that bare integers in Turtle are typed as integer rather than non-negative integer. And probing Google&apos;s validator caught the most important error of all, which was ours: our first analyser unescaped raw text before parsing JSON, a model that invented a defect class which does not exist. All three corrections are recorded in the repository rather than quietly dropped.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Where the tooling could not do the job we say so. The SHACL conformance layer contains multi-way self-joins over reified observation nodes, which rdflib does not execute at scale, and a full run did not complete in six hundred seconds. It therefore runs over a random sample with a recorded seed, and the blocks that run did not cover are reported rather than silently dropped.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Prior art, and what is genuinely new here</h2>
      <p className="text-gov-dark leading-relaxed">
        The Web Data Commons project at Mannheim and KIT has extracted structured data from Common Crawl every year since 2013 and publishes the canonical census, described in the WWW 2023 companion paper on the schema.org data set series. Their October 2024 extraction report covers 1.3 billion pages, 16.5 million domains and 74 billion quads. It is the reference work and anyone measuring structured data at scale is standing on it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        What it measures is prevalence and volume. It does not report parse errors, escaping, or conformance of the extracted data, and neither does any other published census we could find. That is the gap this study fills rather than duplicates. The extruct library, which sits underneath a great deal of SEO and scraping tooling, is included here as a measured parser profile, and it applies zero passes exactly as the specification expects.
      </p>
      <p className="text-gov-dark leading-relaxed">
        One structural observation worth recording. There is no public issue tracker for Googlebot&apos;s structured data parser. We checked Google Issue Tracker components, the schema.org repository and the Search Central documentation. The documented route for reporting a parsing defect is a help community thread. For a component that determines how a large fraction of the web&apos;s machine-readable data is interpreted, that is a thin channel, and we have filed the specification side of this finding as an issue against the JSON-LD syntax specification, where section 7.2 lives, so that at least part of it sits somewhere public and citable.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Correction, and a second pass, 22 August 2026</h2>
      <div className="rounded-lg border border-amber-300 bg-amber-50/60 p-6">
        <p className="text-gov-dark leading-relaxed">
          <strong>A claim in the first version of this page has been withdrawn.</strong> It said that the affected sites read incorrectly in Bing and in non-Google AI crawlers. We had measured four parsers. Bing was not one of them and neither was any AI crawler, so that was an inference presented as a measurement. Neither Bing nor Yandex exposes a validator without a login, so both remain untested and we no longer claim anything about them. The correction is stated here rather than applied quietly, because a page arguing that someone else should disclose a problem cannot hide its own.
        </p>
      </div>
      <p className="text-gov-dark leading-relaxed">
        In place of the withdrawn claim the measured set was widened to the two JSON-LD 1.1 reference processors, PyLD and jsonld.js. Both preserve every character reference through expansion, which is a stronger result than the HTML parsers alone, because these are the implementations the specification is written against.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A second hypothesis died in the same pass, and it is the more interesting failure. We expected a small number of platforms to emit most of the defective markup, so that a few upstream bug reports would fix the bulk of it. Detecting platform signatures across the 199 diverging domains appeared to confirm it, putting WordPress on 58 per cent, Yoast on 30 per cent and Rank Math on 18 per cent. That table is misleading and we very nearly acted on it. Detecting a plugin somewhere on a page is not evidence that the plugin emitted the defective block. Both Yoast and Rank Math wrap their output in distinctive HTML comments, so each block can be attributed by position. Doing that gives Yoast 8.4 per cent, Rank Math 8.0 per cent, and 83.5 per cent attributable to neither. Page-level detection overstates vendor responsibility by about three and a half times, and filing bugs on the strength of it would have been wrong four times in five, against two open source projects that had done nothing wrong. The owner of most of this defect is the site, not a vendor.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Finally, the homepage figure was described above as a lower bound, and it is, by roughly a factor of two. A seeded random sample of 400 of the JSON-LD publishing domains, taking up to three deeper pages each, finds that 81.8 per cent of deeper pages publish JSON-LD against 45.6 per cent of homepages, and that divergence across those same 400 domains rises from 7.75 per cent on the homepage to 15.75 per cent once you look past it. Forty-nine domains diverge only on a deeper page and are invisible to a homepage census, among them Asus, Anker, Clarivate and 20minutos. The corrected headline is that roughly one domain in six publishing JSON-LD, rather than one in fifteen, carries a value that Googlebot and every conformant parser read differently. The ratio against the population Google&apos;s change addressed narrows from about twenty to one to about eleven to one, because the double-escaped population grows too. It remains an order of magnitude.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we would check on your estate</h2>
      <p className="text-gov-dark leading-relaxed">
        If you publish structured data at any scale, the question this study raises for you is narrow and answerable. Which of your pages carry values that Google reads one way and every other consumer reads another, and what does that cost you as more of your traffic and your visibility comes from readers that are not Google Search?
      </p>
      <p className="text-gov-dark leading-relaxed">
        A bounded first engagement looks like this. We run the census over your own estate rather than your homepage alone, because product, article and listing pages carry far more JSON-LD than homepages do and the figures in this study are a lower bound for any individual site. You get the affected URLs, the exact values as each class of consumer reads them, the template or plugin each defect traces back to, and a fix that is usually a single change at the output layer. Two weeks, fixed price, and the pipeline is open source so nothing about the method is a black box.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Everything on this page is reproducible from the repository, including the parts where we were wrong. If a number here is incorrect we would rather be told, and the repository is the place to do it.
      </p>
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6 space-y-3">
        <p className="text-gov-dark leading-relaxed">
          <strong>Repository:</strong>{' '}
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:text-gov-blue-dark hover:underline">github.com/fabio-rovai/jsonld-escaping-conformance<span className="sr-only"> (opens in new tab)</span></a>
        </p>
        <p className="text-gov-dark leading-relaxed">
          <strong>Contact:</strong>{' '}
          <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue hover:text-gov-blue-dark hover:underline">fabio@thetesseractacademy.com</a>
        </p>
      </div>
    </section>
  </article>
);

export default JsonLdEscapingConformance;
