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
        <li>zoom in up to 400% without the text spilling off the screen</li>
        <li>move through the website using just a keyboard, with a "skip to main content" link at the top of each page and a visible focus indicator on every link and control</li>
        <li>change colours, contrast levels and fonts using your browser or device settings</li>
      </ul>

      <h2 className={H2}>How accessible this website is</h2>
      <p className={P}>We know some parts of this website are not fully accessible:</p>
      <ul className={UL}>
        <li>our policy documents and some older reports are PDFs that are not tagged, so screen readers may not read their headings and tables in order</li>
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
        to the non-compliance listed below. The web pages themselves passed every test we ran on 13 October 2026; the
        remaining failure is in PDF documents linked from them.
      </p>

      <h3 className={H3}>Non-accessible content</h3>
      <h4 className={H4}>Non-compliance with WCAG 2.2 AA</h4>
      <ul className={UL}>
        <li>
          Our six policy documents on the compliance page (for example the data protection policy), the Decision
          Maker's Handbook to Data Science linked from the home page and the Alan Turing Institute cybersecurity paper
          are untagged PDFs, so their structure is not available to assistive technology. This fails success criterion
          1.3.1 (Info and Relationships). We plan to replace them with tagged PDFs or web pages by 27 November 2026.
          The three tagged PDF reports on this site have not yet been audited in full.
        </li>
      </ul>

      <h3 className={H3}>Disproportionate burden</h3>
      <p className={P}>We are not claiming that fixing any of the issues above would be a disproportionate burden.</p>

      <h2 className={H2}>What we are doing to improve accessibility</h2>
      <p className={P}>
        On 13 October 2026 we fixed every failure found on the web pages: grey text was darkened to at least 4.5:1,
        links inside running text are now underlined, tables and charts that scroll sideways on a phone can be reached
        and scrolled with a keyboard, pages reflow at 320 pixels wide without sideways scrolling, diagrams have text
        alternatives, and the focus indicator is now dark ink at 10:1 or more against the page instead of yellow at
        1.3:1. Next we will replace the untagged PDFs, test the website with a screen reader (VoiceOver and NVDA), and
        add automated accessibility checks to our build so that new failures are caught before they go live.
      </p>

      <h2 className={H2}>Preparation of this accessibility statement</h2>
      <p className={P}>
        This statement was prepared on 13 October 2026. It was last reviewed on 13 October 2026.
      </p>
      <p className={P}>
        This website was last tested on 13 October 2026 against the WCAG 2.2 AA standard. We carried out the tests
        ourselves, on the built site, as follows.
      </p>
      <ul className={UL}>
        <li>
          Automated testing with axe-core 4.14.0, using its WCAG 2.0, 2.1 and 2.2 level A and AA rules, on every web
          page of the site (120 pages, including every page in our sitemap) at a desktop width of 1280 pixels and a
          phone width of 412 pixels. No violations were found.
        </li>
        <li>
          Reflow at 320 pixels wide on all 120 pages: no page scrolls sideways; wide tables and charts scroll inside
          their own keyboard-reachable box.
        </li>
        <li>
          Keyboard testing on 12 main pages (home, how to buy, about, compliance, accessibility, capabilities,
          insights, a service page, the industries index, an industry page, glossary and partnerships) at both widths:
          every link and control can be reached with the Tab key, shows a focus indicator and is not hidden behind
          other content when focused. We checked the focus indicators by eye on screenshots.
        </li>
      </ul>
      <p className={P}>
        Automated tools find only some of the barriers disabled people may face. We have not yet tested the website
        with a screen reader or with disabled users, and the PDFs listed above still fail, so we do not claim full
        conformance. We will update this statement after the screen reader test and after the PDFs are replaced.
      </p>
    </div>
  );
};
