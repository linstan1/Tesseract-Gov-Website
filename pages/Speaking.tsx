import React from 'react';
import { Card } from '../components/ui/Card';

const EVENTS = [
  {
    name: 'Designing your AI roadmap: A step-by-step guide for growing businesses',
    start: '2026-08-24T11:00:00+01:00',
    end: '2026-08-24T12:00:00+01:00',
    day: 'Monday 24 August 2026, 11:00',
    url: 'https://www.business.gov.uk/business-academy/events/designing-your-ai-roadmap-a-step-by-step-guide-for-growing-businesses-24-august-2026/',
    summary:
      'How an organisation identifies AI opportunities across operations, marketing and product, ranks them by commercial impact against technical feasibility, and sequences them into a phased roadmap with success metrics and governance checkpoints agreed before delivery starts.',
  },
  {
    name: 'Tool-agnostic AI automation: Streamlining your existing workflows',
    start: '2026-09-24T11:00:00+01:00',
    end: '2026-09-24T12:00:00+01:00',
    day: 'Thursday 24 September 2026, 11:00',
    url: 'https://www.business.gov.uk/business-academy/events/toolagnostic-ai-automation-streamlining-your-existing-workflows-24-september-2026/',
    summary:
      'How to find the repetitive workflows that are worth automating, evaluate them before buying anything, and choose tooling without creating vendor lock-in. The method is deliberately tool-agnostic so it survives a change of supplier.',
  },
  {
    name: 'AI adoption in practice: Making it work in your team',
    start: '2026-10-06T11:00:00+01:00',
    end: '2026-10-06T12:00:00+01:00',
    day: 'Tuesday 6 October 2026, 11:00',
    url: 'https://www.business.gov.uk/business-academy/events/ai-adoption-in-practice-making-it-work-in-your-team-06-october-2026/',
    summary:
      'What has to change for AI to move from isolated experiments to a capability a team actually trusts and uses: ownership, day-to-day working practice, and the evidence that tells you adoption is real rather than reported.',
  },
];

const SCHEMAS = EVENTS.map((event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.name,
  startDate: event.start,
  endDate: event.end,
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  description: event.summary,
  url: event.url,
  inLanguage: 'en-GB',
  location: {
    '@type': 'VirtualLocation',
    url: event.url,
  },
  organizer: {
    '@type': 'GovernmentOrganization',
    name: 'Business Academy, business.gov.uk',
    url: 'https://www.business.gov.uk/business-academy/',
  },
  performer: {
    '@type': 'Person',
    '@id': 'https://gov.tesseract.academy/#kampakis',
    name: 'Dr Stylianos Kampakis',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    url: event.url,
    validFrom: '2026-08-01T00:00:00+01:00',
  },
}));

export const Speaking: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMAS) }} />

      <header className="border-b border-gov-border/30 pb-10">
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">
          Talks and Webinars
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Dr Stylianos Kampakis delivers the AI strategy webinar series on the UK government's Business Academy, the free business support and training platform run by the Department for Business and Trade at business.gov.uk. Three sessions run between <time dateTime="2026-08-24">24 August</time> and <time dateTime="2026-10-06">6 October 2026</time>. Attendance is free and open to any UK organisation with a Business Academy account.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gov-dark">Business Academy AI series, autumn 2026</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          The three sessions run in sequence and answer the questions in the order an organisation actually meets them. The first covers what to build and in what order. The second covers which existing workflows are worth automating. The third covers what has to change inside a team for any of it to stick. Each session lasts one hour, runs online, and is recorded to the Business Academy video library afterwards.
        </p>

        {EVENTS.map((event) => (
          <Card key={event.url} className="border-l-2 border-l-gov-blue">
            <h3 className="text-2xl font-bold text-gov-dark mb-1 font-serif">{event.name}</h3>
            <p className="text-sm font-semibold text-gov-blue mb-4 uppercase tracking-wider">
              {event.day} (1 hour, online, free)
            </p>
            <p className="text-gov-dark leading-relaxed text-base mb-4">{event.summary}</p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gov-focus focus-visible:ring-offset-2 rounded"
            >
              Book on business.gov.uk
            </a>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gov-dark">Why this matters for public sector buyers</h2>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          The Business Academy commissions its trainers directly, so the series is evidence that a UK government department has already assessed and selected our AI strategy content for national delivery. The material is written for organisations that have to justify AI spend to a board rather than for research audiences, which is the same constraint a directorate faces when it puts an AI proposal through business case approval.
        </p>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          The series first ran in 2025 and was recommissioned for 2026. An earlier delivery of the roadmap session took place on <time dateTime="2025-10-27">27 October 2025</time> and remains available through the Business Academy. We deliver the same content as closed sessions for individual departments, arm's length bodies and local authorities, tailored to the organisation's own use cases and governance regime.
        </p>
        <p className="text-gov-dark leading-relaxed text-base max-w-4xl">
          To discuss a tailored session, contact Fabio Rovai at <a href="mailto:fabio@thetesseractacademy.com" className="text-gov-blue font-medium hover:underline">fabio@thetesseractacademy.com</a>. Our training work is available through Crown Commercial Service frameworks, described on the <a href="/how-to-buy" className="text-gov-blue font-medium hover:underline">how to buy</a> page, and our wider training offer is set out under <a href="/services/education-upskilling" className="text-gov-blue font-medium hover:underline">education and upskilling</a>.
        </p>
      </section>
    </div>
  );
};
