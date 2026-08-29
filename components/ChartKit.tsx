import React from 'react';

/**
 * Shared chart kit for research case-study pages.
 *
 * Marks: teal #00897b for the primary series, amber #b45309 for a defect or
 * contrast series, gray #5c6670 for context-only bars. The teal/amber pair
 * passes the six palette checks (lightness band, chroma floor, CVD separation,
 * normal-vision floor, contrast) on white and on gov-bg #f8fafa. Text always
 * wears ink tokens, never the series colour. Bars are thin, rounded at the data
 * end, labelled directly; identity is carried by the row label, never by colour
 * alone.
 */

export const CHART = { teal: '#00897b', amber: '#b45309', gray: '#5c6670', ink: '#313b45' };

export type BarRow = { label: string; value: number; display: string; color?: string };

export const Tile: React.FC<{ kpi: string; label: string }> = ({ kpi, label }) => (
  <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-6">
    <p className="text-3xl font-extrabold text-gov-dark">{kpi}</p>
    <p className="text-sm text-gov-secondary mt-1">{label}</p>
  </div>
);

export const HBars: React.FC<{ title: string; note?: string; max?: number; rows: BarRow[]; labelWidth?: string }> = ({
  title,
  note,
  max,
  rows,
  labelWidth = 'w-44',
}) => {
  const m = max ?? Math.max(...rows.map((r) => r.value));
  return (
    <figure className="rounded-lg border border-gov-border bg-white p-5">
      <figcaption className="text-sm font-semibold text-gov-dark mb-3">{title}</figcaption>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3" title={`${r.label}: ${r.display}`}>
            <span className={`${labelWidth} shrink-0 text-right text-xs text-gov-secondary leading-tight`}>{r.label}</span>
            <div className="flex-1 h-[18px]">
              <div
                className="h-full rounded-r"
                style={{ width: `${Math.max((r.value / m) * 100, 0.5)}%`, backgroundColor: r.color ?? CHART.teal }}
              />
            </div>
            <span className="w-24 shrink-0 text-xs font-semibold text-gov-dark tabular-nums">{r.display}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-gov-secondary mt-3">{note}</p>}
    </figure>
  );
};
