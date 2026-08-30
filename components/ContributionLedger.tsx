import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONTRIBUTIONS, STATUS_LABEL, type Contribution, type ContributionStatus } from '../data/contributions';
import { CONTRIBUTION_TOTALS } from '../data/contributionTotals';

// The ledger that stands in for a logo wall. Each row names the body, states
// the finding, and links the public thread, so the claim is checkable in one
// click instead of asserted by a borrowed trademark.

const STATUS_CLASS: Record<ContributionStatus, string> = {
  fixed: 'bg-gov-dark text-white border-gov-dark',
  merged: 'bg-gov-blue-dark text-white border-gov-blue-dark',
  invited: 'bg-gov-blue/10 text-gov-blue-dark border-gov-blue/30',
  open: 'bg-gov-border/60 text-gov-text border-gov-border',
  reported: 'bg-white text-gov-secondary border-gov-border',
};

const Stat: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div>
    <div className="text-4xl lg:text-5xl font-extrabold text-gov-blue-light tabular-nums leading-none">{value}</div>
    <div className="text-sm text-white/70 mt-2 leading-snug">{label}</div>
  </div>
);

const isInternal = (url: string) => url.startsWith('/');

// "2026-08-25" reads as machine output in a sentence. Format it by hand rather
// than through toLocaleDateString, which would disagree between the server
// render and the browser.
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const longDate = (iso: string) => {
  const [year, month, day] = iso.split('-');
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
};

const Ref: React.FC<{ label: string; url: string }> = ({ label, url }) =>
  isInternal(url) ? (
    <Link to={url} className="text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30">
      {label}
    </Link>
  ) : (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-gov-blue hover:text-gov-blue-dark underline underline-offset-2 decoration-gov-blue/30"
    >
      {label}
      <ArrowUpRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
    </a>
  );

const Row: React.FC<{ item: Contribution }> = ({ item }) => (
  <li className="grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] gap-x-8 gap-y-3 py-7 border-t border-gov-border/50 first:border-t-0">
    <div className="space-y-2">
      <h3 className="text-base font-bold text-gov-dark leading-snug">{item.body}</h3>
      <p className="text-sm text-gov-secondary leading-snug">{item.context}</p>
      <span
        className={`inline-block text-xs font-semibold rounded-full border px-2.5 py-1 ${STATUS_CLASS[item.status]}`}
      >
        {STATUS_LABEL[item.status]}
      </span>
    </div>
    <div className="space-y-3">
      <p className="text-gov-text leading-relaxed">{item.finding}</p>
      <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {item.refs.map((ref) => (
          <Ref key={ref.url} label={ref.label} url={ref.url} />
        ))}
      </p>
    </div>
  </li>
);

export const ContributionLedger: React.FC = () => (
  <div className="space-y-10">
    <div className="bg-gov-dark rounded-2xl px-8 py-10 lg:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Stat value={CONTRIBUTION_TOTALS.mergedPullRequests} label="pull requests merged upstream" />
        <Stat value={CONTRIBUTION_TOTALS.issuesFiled} label="defects reported upstream" />
        <Stat value={CONTRIBUTION_TOTALS.projects} label="projects contributed to" />
        <Stat value={CONTRIBUTION_TOTALS.organisations} label="organisations, none of them ours" />
      </div>
      <p className="text-sm text-white/60 mt-8 leading-relaxed max-w-3xl">
        Counted from the GitHub API on {longDate(CONTRIBUTION_TOTALS.generatedOn)}, over repositories owned
        by other people. Our own projects are excluded, and so is anything we were paid to write.
      </p>
    </div>

    <ul>
      {CONTRIBUTIONS.map((item) => (
        <Row key={item.body} item={item} />
      ))}
    </ul>
  </div>
);
