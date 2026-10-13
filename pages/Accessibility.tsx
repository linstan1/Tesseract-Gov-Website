import React from 'react';

const H2 = 'text-2xl font-bold text-gov-dark mt-12 mb-4';
const H3 = 'text-xl font-bold text-gov-dark mt-8 mb-3';
const H4 = 'text-lg font-semibold text-gov-dark mt-6 mb-3';
const P = 'text-base text-gov-dark leading-relaxed mb-4 max-w-4xl';
const UL = 'list-disc pl-6 space-y-2 text-base text-gov-dark leading-relaxed mb-4 max-w-4xl';
const A = 'text-gov-blue underline hover:text-gov-blue-dark';

export const Accessibility: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <header className="border-b border-gov-border/30 pb-10 mb-6">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Accessibility statement for gov.tesseract.academy
        </h1>
      </header>

      <p className={P}>
        This accessibility statement applies to https://gov.tesseract.academy, the public sector website of
        Kampakis and Co Ltd, trading as The Tesseract Academy. Our learning platform at tesseract.academy has{' '}
        <a href="https://tesseract.academy/accessibility/" className={A}>its own accessibility statement</a>.
      </p>
      <p className={P}>
        We want as many people as possible to be able to use this website. For example, you should be able to:
      </p>
      <ul className={UL}>
        <li>zoom in up to 400% without most text spilling off the screen</li>
        <li>move through most of the website using just a keyboard, with a "skip to main content" link at the top of each page</li>
        <li>change colours, contrast levels and fonts using your browser or device settings</li>
      </ul>

      <h2 className={H2}>How accessible this website is</h2>
      <p className={P}>We know some parts of this website are not fully accessible:</p>
      <ul className={UL}>
        <li>some grey text, such as page subtitles, dates and small notes, does not have enough contrast against its background</li>
        <li>some links inside paragraphs are shown only by their colour, which is too close to the colour of the text around them</li>
        <li>on a phone, some wide tables scroll sideways but cannot be reached with a keyboard</li>
        <li>our policy documents are PDFs that are not tagged, so screen readers may not read their headings and tables in order</li>
      </ul>

      <h2 className={H2}>Feedback and contact information</h2>
      <p className={P}>
        If you need information on this website in a different format, such as an accessible document, large print,
        easy read or an audio recording, email{' '}
        <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>. We will reply
        within 5 working days.
      </p>

      <h2 className={H2}>Reporting accessibility problems with this website</h2>
      <p className={P}>
        If you find a problem not listed on this page, or think we are not meeting accessibility requirements, email{' '}
        <a href="mailto:fabio@thetesseractacademy.com" className={A}>fabio@thetesseractacademy.com</a>. Tell us the
        page address and what went wrong.
      </p>

      <h2 className={H2}>Our obligations</h2>
      <p className={P}>
        Kampakis and Co Ltd is a private company, not a public sector body, so the Public Sector Bodies (Websites and
        Mobile Applications) (No. 2) Accessibility Regulations 2018 do not apply to this website directly. We use level
        AA of the Web Content Accessibility Guidelines (WCAG) version 2.2 as our standard because it is the standard our
        public sector clients must meet, and because as a service provider we have a duty under the Equality Act 2010 to
        make reasonable adjustments for disabled people.
      </p>

      <h2 className={H2}>Technical information about this website's accessibility</h2>

      <h3 className={H3}>Compliance status</h3>
      <p className={P}>
        This website is partially compliant with the Web Content Accessibility Guidelines version 2.2 AA standard, due
        to the non-compliances listed below.
      </p>

      <h3 className={H3}>Non-accessible content</h3>
      <h4 className={H4}>Non-compliance with WCAG 2.2 AA</h4>
      <ul className={UL}>
        <li>
          Some grey text does not meet the minimum contrast ratio. The lowest we measured was 2.49:1 for small text on
          the home page, where 4.5:1 is required; page subtitles measure 4.47:1. This fails success criterion 1.4.3
          (Contrast (Minimum)). We plan to fix this by 30 October 2026.
        </li>
        <li>
          Some links inside paragraphs are distinguished from the surrounding text only by colour, at a contrast of
          1.11:1 to 2.16:1 against that text, where 3:1 or an underline is required. This fails success criterion 1.4.1
          (Use of Colour). We plan to underline these links by 30 October 2026.
        </li>
        <li>
          On a phone-width screen, two tables on the About page and a comparison table on the AI governance page scroll
          sideways but cannot be reached with a keyboard. This fails success criterion 2.1.1 (Keyboard). We plan to fix
          this by 30 October 2026.
        </li>
        <li>
          Our policy documents (for example the data protection policy) are untagged PDFs, so their structure is not
          available to assistive technology. This fails success criterion 1.3.1 (Info and Relationships). We plan to
          replace them with tagged PDFs or web pages by 27 November 2026.
        </li>
      </ul>

      <h3 className={H3}>Disproportionate burden</h3>
      <p className={P}>We are not claiming that fixing any of the issues above would be a disproportionate burden.</p>

      <h2 className={H2}>What we are doing to improve accessibility</h2>
      <p className={P}>
        We will fix the colour, link and table problems above, re-test every page template, and add automated
        accessibility checks to our build so that new failures are caught before they go live. We will then test the
        website by hand with a screen reader and keyboard, and update this statement with the results.
      </p>

      <h2 className={H2}>Preparation of this accessibility statement</h2>
      <p className={P}>
        This statement was prepared on 13 October 2026. It was last reviewed on 13 October 2026.
      </p>
      <p className={P}>
        This website was last tested on 13 October 2026 against the WCAG 2.2 AA standard. We carried out the test
        ourselves with an automated tool (axe-core 4.14.0) at desktop and phone screen sizes, on a sample of 12 pages
        chosen to cover each page template: the home page, compliance, how to buy, about, capabilities, use cases,
        glossary, testimonials, a research article, a case study, a service page and an industry page. Automated
        testing finds only some of the barriers disabled people may face, and no manual test with assistive technology
        has been carried out yet, so we will update this statement after that test. We re-test after each stage of
        fixes and update this statement each time.
      </p>
    </div>
  );
};
