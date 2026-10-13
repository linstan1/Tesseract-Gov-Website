import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Shared layout for the web versions of our policy documents. Each policy
 * used to be an untagged PDF (WCAG 2.2 SC 1.3.1 failure); the pages under
 * pages/policies/ carry the same text as real headings, lists and tables.
 */

export const H2 = 'text-2xl font-bold text-gov-dark mt-12 mb-4';
export const H3 = 'text-xl font-bold text-gov-dark mt-8 mb-3';
export const P = 'text-base text-gov-dark leading-relaxed mb-4 max-w-4xl';
export const UL = 'list-disc pl-6 space-y-2 text-base text-gov-dark leading-relaxed mb-4 max-w-4xl';
export const A = 'text-gov-blue underline hover:text-gov-blue-dark';

export interface PolicyMeta {
  version: string;
  date: string;
  owner: string;
  approvedBy: string;
  nextReview: string;
}

interface PolicyDocumentProps {
  title: string;
  subtitle: string;
  meta: PolicyMeta;
  children: React.ReactNode;
}

export const PolicyDocument: React.FC<PolicyDocumentProps> = ({ title, subtitle, meta, children }) => {
  const rows: [string, string][] = [
    ['Version', meta.version],
    ['Date', meta.date],
    ['Owner', meta.owner],
    ['Approved By', meta.approvedBy],
    ['Next Review', meta.nextReview],
  ];
  return (
    <article className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <ol className="flex flex-wrap gap-2 text-gov-secondary">
          <li>
            <Link to="/compliance" className={A}>Compliance &amp; Policies</Link>
            <span aria-hidden="true" className="ml-2">/</span>
          </li>
          <li aria-current="page" className="text-gov-dark">{title}</li>
        </ol>
      </nav>

      <header className="border-b border-gov-border/30 pb-10 mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gov-dark mb-4 tracking-tight leading-tight break-words">
          {title}
        </h1>
        <p className="text-xl text-gov-secondary leading-relaxed max-w-4xl">{subtitle}</p>
      </header>

      <table className="text-base text-left mb-10 border border-gov-border/50 rounded-lg" aria-label="Document control">
        <tbody className="divide-y divide-gov-border/30">
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th scope="row" className="px-4 py-2 font-semibold text-gov-dark bg-gov-bg align-top">{k}</th>
              <td className="px-4 py-2 text-gov-dark align-top">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {children}

      <p className="text-sm text-gov-secondary border-t border-gov-border/30 pt-6 mt-12 max-w-4xl">
        Kampakis and Co Ltd (trading as The Tesseract Academy) | Company No. 10459791
      </p>
    </article>
  );
};

interface PolicyTableProps {
  label: string;
  head: string[];
  rows: React.ReactNode[][];
}

/* A data table whose first column labels each row. On narrow screens it
   scrolls sideways inside its own keyboard-reachable region. */
export const PolicyTable: React.FC<PolicyTableProps> = ({ label, head, rows }) => (
  <div tabIndex={0} role="region" aria-label={label} className="overflow-x-auto rounded-lg border border-gov-border/50 mb-6 max-w-4xl">
    <table className={`w-full text-sm text-left ${head.length > 2 ? 'min-w-[34rem]' : ''}`}>
      <thead className="bg-gov-bg border-b border-gov-border/50">
        <tr>
          {head.map((h) => (
            <th key={h} scope="col" className="px-4 py-3 font-semibold text-gov-dark align-bottom">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gov-border/30">
        {rows.map((r, i) => (
          <tr key={i} className="bg-white">
            {r.map((c, j) =>
              j === 0 ? (
                <th key={j} scope="row" className="px-4 py-3 font-medium text-gov-dark align-top">{c}</th>
              ) : (
                <td key={j} className="px-4 py-3 text-gov-dark align-top">{c}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* Signature and contact blocks: one labelled line each. */
export const Lines: React.FC<{ lines: [string, React.ReactNode][] }> = ({ lines }) => (
  <p className={P}>
    {lines.map(([k, v], i) => (
      <React.Fragment key={k}>
        {i > 0 && <br />}
        <strong className="font-semibold">{k}:</strong> {v}
      </React.Fragment>
    ))}
  </p>
);
