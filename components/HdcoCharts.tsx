import React from 'react';

/**
 * Charts for the Nordic health dataset catalogue study.
 *
 * Every chart here plots one series, so every bar carries the same hue and there is
 * no legend: the title says what is plotted. Colour is never used to re-encode the
 * value, because the bar length already shows it.
 *
 * Palette: the site's gov-blue #2c7773 at 5.26:1 on white, inside the OKLCH
 * lightness band. The meter track is a lighter step of the same hue, so the ramp is
 * monotone in lightness. Text always wears text tokens, never the data colour.
 */

const SERIES = '#2c7773';
const TRACK = '#e3efee';
const GRID = '#e2e6e9';
const INK = '#313b45';
const INK_MUTED = '#5c6670';

type Row = { label: string; value: number; note?: string };

/** Horizontal bars: 18px thick, 4px rounded at the data end, square at the baseline. */
function barPath(x: number, y: number, w: number, h: number) {
  const r = Math.min(4, Math.max(0, w));
  if (w <= 0) return '';
  if (w <= r) return `M${x},${y}h${w}v${h}h${-w}z`;
  return `M${x},${y}h${w - r}a${r},${r} 0 0 1 ${r},${r}v${h - 2 * r}a${r},${r} 0 0 1 ${-r},${r}h${-(w - r)}z`;
}

interface BarChartProps {
  title: string;
  subtitle?: string;
  rows: Row[];
  max: number;
  format: (v: number) => string;
  axisTicks: number[];
  axisFormat: (v: number) => string;
  labelWidth?: number;
  caption: string;
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  subtitle,
  rows,
  max,
  format,
  axisTicks,
  axisFormat,
  labelWidth = 236,
  caption,
}) => {
  const rowH = 32;
  const barH = 18;
  const plotX = labelWidth + 12;
  const plotW = 396;
  const top = 8;
  const plotBottom = top + rows.length * rowH;
  const height = plotBottom + 34;
  const width = plotX + plotW + 74;
  const scale = (v: number) => (max <= 0 ? 0 : (v / max) * plotW);

  return (
    <figure className="my-8">
      <figcaption className="mb-1 text-base font-semibold text-gov-dark font-serif">{title}</figcaption>
      {subtitle && <p className="mb-3 text-sm text-gov-secondary">{subtitle}</p>}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          style={{ maxWidth: `${width}px`, height: 'auto' }}
          role="img"
          aria-label={caption}
        >
          {axisTicks.map((t) => (
            <line
              key={`g${t}`}
              x1={plotX + scale(t)}
              x2={plotX + scale(t)}
              y1={top}
              y2={plotBottom}
              stroke={GRID}
              strokeWidth={1}
            />
          ))}
          {rows.map((r, i) => {
            const y = top + i * rowH;
            const w = scale(r.value);
            const isZero = r.value === 0;
            return (
              <g key={r.label}>
                <text
                  x={labelWidth}
                  y={y + barH / 2 + 4}
                  textAnchor="end"
                  fontSize={12.5}
                  fill={INK}
                  fontFamily="JetBrains Mono, ui-monospace, monospace"
                >
                  {r.label}
                </text>
                {isZero ? (
                  /* A zero bar has no length, so it gets a visible tick. Otherwise
                     the most important rows in this study would render as nothing. */
                  <line
                    x1={plotX}
                    x2={plotX}
                    y1={y + 1}
                    y2={y + barH - 1}
                    stroke={SERIES}
                    strokeWidth={2}
                  />
                ) : (
                  <path d={barPath(plotX, y, w, barH)} fill={SERIES} />
                )}
                <text
                  x={plotX + Math.max(w, 0) + 8}
                  y={y + barH / 2 + 4}
                  fontSize={12.5}
                  fill={isZero ? INK : INK_MUTED}
                  fontWeight={isZero ? 700 : 500}
                >
                  {format(r.value)}
                  {r.note ? ` ${r.note}` : ''}
                </text>
              </g>
            );
          })}
          <line x1={plotX} x2={plotX} y1={top} y2={plotBottom} stroke={GRID} strokeWidth={1} />
          {axisTicks.map((t) => (
            <text
              key={`t${t}`}
              x={plotX + scale(t)}
              y={plotBottom + 18}
              textAnchor="middle"
              fontSize={11.5}
              fill={INK_MUTED}
            >
              {axisFormat(t)}
            </text>
          ))}
        </svg>
      </div>
      <p className="mt-2 text-xs text-gov-secondary leading-relaxed">{caption}</p>
    </figure>
  );
};

/** Conformance against the eight properties HealthDCAT-AP Release 7 makes mandatory. */
export const ConformanceChart: React.FC = () => (
  <BarChart
    title="What the Nordic region publishes against each mandatory property"
    subtitle="2,811 health themed dataset descriptions, eleven Nordic national catalogues, 25 August 2026"
    rows={[
      { label: 'dcat:theme', value: 100.0 },
      { label: 'dcat:distribution', value: 91.85 },
      { label: 'dct:accessRights', value: 83.17 },
      { label: 'dct:identifier', value: 62.65 },
      { label: 'dcatap:applicableLegislation', value: 0.75 },
      { label: 'healthdcatap:hdab', value: 0 },
      { label: 'healthdcatap:healthCategory', value: 0 },
      { label: 'healthdcatap:hasStructuredData', value: 0 },
    ]}
    max={100}
    axisTicks={[0, 25, 50, 75, 100]}
    axisFormat={(v) => `${v}%`}
    format={(v) => (v === 0 ? '0' : `${v.toFixed(2)}%`)}
    caption="Share of the 2,811 descriptions carrying each property. The dcat:theme row is 100 per cent by construction, because descriptions were selected by carrying the health theme; it is shown so the set is complete, not as a finding. The three properties at zero are the ones HealthDCAT-AP adds to DCAT-AP for health, and no catalogue in the region can currently express any of them."
  />
);

/** Whether each catalogue binds dcat:theme to the EU authority vocabulary. */
export const ThemeBindingChart: React.FC = () => (
  <BarChart
    title="Share of themed descriptions bound to the EU data theme authority"
    subtitle="Share of each catalogue's themed descriptions carrying at least one value from the EU authority table, across all themes and not only health"
    rows={[
      { label: 'Swedish INSPIRE node', value: 100.0 },
      { label: 'Datavejviser (DK)', value: 99.97 },
      { label: 'Norwegian INSPIRE node', value: 99.66 },
      { label: 'dataportal.se', value: 99.65 },
      { label: 'data.norge.no', value: 97.23 },
      { label: 'Icelandic geoportal', value: 90.76 },
      { label: 'Paikkatietohakemisto (FI)', value: 80.50 },
      { label: 'Geodata.se', value: 69.57 },
      { label: 'Geonorge', value: 32.28 },
      { label: 'avoindata.fi', value: 0, note: 'of 1,146' },
    ]}
    max={100}
    axisTicks={[0, 25, 50, 75, 100]}
    axisFormat={(v) => `${v}%`}
    format={(v) => (v === 0 ? '0' : `${v.toFixed(2)}%`)}
    caption="Finland's national portal is the only one of the eleven at zero. All 1,146 of its themed descriptions carry a local CKAN group identifier instead of a value from the European authority table, so a European filter on the health theme returns no Finnish datasets at all."
  />
);

/** Values used inside the EU authority namespace that the authority does not define. */
export const SquattedThemeChart: React.FC = () => (
  <BarChart
    title="Datasets carrying a data theme IRI the EU authority never defined"
    subtitle="Of 36 distinct IRIs in use inside the authority namespace, the authority defines 14"
    rows={[
      { label: 'undefined', value: 806 },
      { label: 'ENV', value: 237 },
      { label: 'UKLF', value: 34 },
      { label: 'VERWALTUNG', value: 29 },
      { label: 'BEVOELKERUNG', value: 26 },
      { label: 'TRANSPORT-VERKEHR', value: 23 },
      { label: 'the other 16 values', value: 83 },
    ]}
    max={850}
    axisTicks={[0, 200, 400, 600, 800]}
    axisFormat={(v) => v.toLocaleString('en-GB')}
    format={(v) => v.toLocaleString('en-GB')}
    labelWidth={190}
    caption="1,238 datasets in total. The largest value is the literal string undefined, published by the Moldova government portal on 647 datasets and the Zagreb city portal on 157. ENV is used by the London Datastore on 237 datasets where the authority defines ENVI. The authority host answers HTTP 200 for every one of these and returns an empty 170 byte RDF document, so a check on the status code sees success."
  />
);

interface MeterProps {
  label: string;
  share: number;
  numerator: string;
  denominator: string;
}

const Meter: React.FC<MeterProps> = ({ label, share, numerator, denominator }) => (
  <div>
    <div className="flex items-baseline justify-between gap-3 mb-1.5">
      <span className="text-sm text-gov-dark">{label}</span>
      <span className="text-sm font-semibold text-gov-dark tabular-nums">{share.toFixed(2)}%</span>
    </div>
    <svg viewBox="0 0 400 10" width="100%" style={{ height: 'auto' }} role="img" aria-label={`${label}: ${share.toFixed(2)} per cent, ${numerator} of ${denominator}`}>
      <rect x={0} y={0} width={400} height={10} rx={4} fill={TRACK} />
      {share > 0 && <rect x={0} y={0} width={Math.max((share / 100) * 400, 3)} height={10} rx={4} fill={SERIES} />}
    </svg>
    <p className="mt-1 text-xs text-gov-secondary">
      {numerator} of {denominator}
    </p>
  </div>
);

/** English language coverage in the Finnish secondary use catalogue. */
export const FindataLanguageChart: React.FC = () => (
  <figure className="my-8">
    <figcaption className="mb-1 text-base font-semibold text-gov-dark font-serif">
      English coverage in Findata&apos;s Aineistokatalogi
    </figcaption>
    <p className="mb-4 text-sm text-gov-secondary">
      The most detailed health metadata in the Nordic region, and the share of it a
      researcher who does not read Finnish can use
    </p>
    <div className="space-y-5 rounded-lg border border-gov-border bg-gov-bg/40 p-6">
      <Meter label="Dataset descriptions with an English label" share={7.51} numerator="213" denominator="2,835" />
      <Meter label="Dataset descriptions with an English description" share={7.20} numerator="204" denominator="2,835" />
      <Meter label="Instance variables with an English label" share={15.26} numerator="13,639" denominator="89,368" />
      <Meter label="Instance variables with a description in any language" share={97.99} numerator="87,569" denominator="89,368" />
    </div>
    <p className="mt-2 text-xs text-gov-secondary leading-relaxed">
      The bottom row is the point of the top three. The catalogue is substantively
      complete, with only 2.01 per cent of its 89,368 variable descriptions missing a
      description in any language, and it is almost entirely closed to a reader outside
      Finland. Cross border discovery is the stated purpose of the European Health Data
      Space, so a record that is complete domestically and monolingual is not yet a
      complete record for the purpose the Regulation sets.
    </p>
  </figure>
);
