import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const DATA_URL = '/data/museum-visits/museum-visits.json';
const SOURCE_URL =
  'https://www.gov.uk/government/statistical-data-sets/museums-and-galleries-monthly-visits';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/museum-visits-observatory#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/museum-visits-observatory',
  headline:
    'The DCMS Museum Visits Observatory: an interactive explorer of visitor recovery | Tesseract Academy',
  description:
    'An interactive observatory of monthly visits to all DCMS-sponsored museums and galleries, January 2019 to March 2026, built from the official DCMS statistical data set. Explore 16 museum groups and site-level detail, compare post-pandemic recovery against 2019 baselines, and read every number behind the chart in an accessible table view. Open Government Licence v3.0.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-07-13',
  dateModified: '2026-07-13',
  about: {
    '@type': 'Dataset',
    name: 'Monthly and Quarterly Visits to DCMS-sponsored Museums and Galleries',
    url: SOURCE_URL,
    license:
      'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  },
  keywords:
    'museum visitor figures, DCMS sponsored museums, visitor analytics, cultural sector data, museum dashboard, audience measurement, visitor recovery, data visualisation, GLAM analytics',
};

// Categorical palette validated for CVD separation, chroma and contrast on white
// (site teal first; identities keep their colour regardless of how many series show).
const SERIES_COLORS = ['#12a59c', '#4263eb', '#e8590c', '#9c36b5', '#5c940d'];

interface VisitsData {
  source: string;
  licence: string;
  months: string[];
  groups: Record<string, (number | null)[]>;
  iwmSites: Record<string, (number | null)[]>;
}

const fmt = (v: number | null): string => (v === null ? 'n/a' : v.toLocaleString('en-GB'));
const fmtAxis = (v: number): string =>
  v >= 1_000_000 ? `${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M` : v >= 1_000 ? `${Math.round(v / 1_000)}k` : `${v}`;
const shortMonth = (m: string): string => {
  const [name, year] = m.split(' ');
  return `${name.slice(0, 3)} ${year.slice(2)}`;
};

interface Series {
  name: string;
  color: string;
  values: (number | null)[];
}

const CHART_W = 760;
const CHART_H = 340;
const PAD = { top: 16, right: 118, bottom: 34, left: 52 };

const VisitsChart: React.FC<{ months: string[]; series: Series[] }> = ({ months, series }) => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const innerW = CHART_W - PAD.left - PAD.right;
  const innerH = CHART_H - PAD.top - PAD.bottom;
  const maxVal = useMemo(() => {
    const all = series.flatMap(s => s.values.filter((v): v is number => v !== null));
    return Math.max(1, ...all);
  }, [series]);
  const niceMax = useMemo(() => {
    const mag = Math.pow(10, Math.floor(Math.log10(maxVal)));
    return Math.ceil(maxVal / (mag / 2)) * (mag / 2);
  }, [maxVal]);

  const x = (i: number) => PAD.left + (i / (months.length - 1)) * innerW;
  const y = (v: number) => PAD.top + innerH - (v / niceMax) * innerH;

  // COVID closures band: March 2020 to May 2021 inclusive
  const covidStart = months.indexOf('March 2020');
  const covidEnd = months.indexOf('May 2021');

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => f * niceMax);
  const xTickEvery = 12;

  const linePath = (values: (number | null)[]): string => {
    let d = '';
    let pen = false;
    values.forEach((v, i) => {
      if (v === null) {
        pen = false;
        return;
      }
      d += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`;
      pen = true;
    });
    return d;
  };

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * CHART_W;
    const i = Math.round(((px - PAD.left) / innerW) * (months.length - 1));
    setHoverIdx(i >= 0 && i < months.length ? i : null);
  };

  const hover = hoverIdx !== null ? hoverIdx : null;
  const tooltipLeftSide = hover !== null && hover > months.length * 0.6;

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        className="w-full h-auto select-none"
        role="img"
        aria-label={`Monthly visits, ${months[0]} to ${months[months.length - 1]}, for ${series.map(s => s.name).join(', ')}`}
        onMouseMove={onMove}
        onMouseLeave={() => setHoverIdx(null)}
      >
        {/* COVID closures band */}
        {covidStart >= 0 && covidEnd >= 0 && (
          <g>
            <rect
              x={x(covidStart)}
              y={PAD.top}
              width={x(covidEnd) - x(covidStart)}
              height={innerH}
              fill="#5c6670"
              opacity={0.07}
            />
            <text x={(x(covidStart) + x(covidEnd)) / 2} y={PAD.top + 14} textAnchor="middle" fontSize="10" fill="#78828c">
              Covid closures
            </text>
          </g>
        )}

        {/* gridlines + y axis */}
        {yTicks.map(t => (
          <g key={t}>
            <line x1={PAD.left} x2={PAD.left + innerW} y1={y(t)} y2={y(t)} stroke="#e2e6e9" strokeWidth={t === 0 ? 1.25 : 1} strokeDasharray={t === 0 ? undefined : '2,3'} />
            <text x={PAD.left - 8} y={y(t) + 3.5} textAnchor="end" fontSize="10.5" fill="#78828c">
              {fmtAxis(t)}
            </text>
          </g>
        ))}

        {/* x ticks: Januaries */}
        {months.map((m, i) =>
          i % xTickEvery === 0 ? (
            <text key={m} x={x(i)} y={CHART_H - 12} textAnchor="middle" fontSize="10.5" fill="#78828c">
              {m.split(' ')[1]}
            </text>
          ) : null
        )}

        {/* series lines */}
        {series.map(s => (
          <path key={s.name} d={linePath(s.values)} fill="none" stroke={s.color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        ))}

        {/* direct labels at line ends, de-overlapped vertically */}
        {(() => {
          const labels = series
            .map(s => {
              let li = -1;
              for (let i = s.values.length - 1; i >= 0; i--) {
                if (s.values[i] !== null) {
                  li = i;
                  break;
                }
              }
              return li < 0 ? null : { name: s.name, lx: x(li) + 6, ly: y(s.values[li] as number) + 3.5 };
            })
            .filter((l): l is { name: string; lx: number; ly: number } => l !== null)
            .sort((a, b) => a.ly - b.ly);
          const MIN_GAP = 13;
          for (let i = 1; i < labels.length; i++) {
            if (labels[i].ly - labels[i - 1].ly < MIN_GAP) labels[i].ly = labels[i - 1].ly + MIN_GAP;
          }
          return labels.map(l => (
            <text key={l.name} x={l.lx} y={l.ly} fontSize="10.5" fontWeight={600} fill="#444e57">
              {l.name.length > 18 ? `${l.name.slice(0, 17)}…` : l.name}
            </text>
          ));
        })()}

        {/* hover crosshair + markers */}
        {hover !== null && (
          <g pointerEvents="none">
            <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + innerH} stroke="#5c6670" strokeWidth={1} strokeDasharray="3,3" />
            {series.map(s =>
              s.values[hover] !== null ? (
                <circle key={s.name} cx={x(hover)} cy={y(s.values[hover] as number)} r={4.5} fill={s.color} stroke="#ffffff" strokeWidth={2} />
              ) : null
            )}
          </g>
        )}
      </svg>

      {hover !== null && (
        <div
          className="absolute top-2 z-10 bg-white border border-gov-border rounded-lg shadow-md px-4 py-3 text-xs pointer-events-none min-w-[190px]"
          style={tooltipLeftSide ? { left: 8 } : { right: 8 }}
        >
          <p className="font-semibold text-gov-dark mb-1.5">{months[hover]}</p>
          {series.map(s => (
            <p key={s.name} className="flex items-center justify-between gap-4 text-gov-secondary leading-relaxed">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: s.color }} />
                {s.name}
              </span>
              <span className="font-semibold text-gov-dark tabular-nums">{fmt(s.values[hover])}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export const MuseumVisitsObservatory: React.FC = () => {
  const [data, setData] = useState<VisitsData | null>(null);
  const [loadError, setLoadError] = useState('');
  const [selected, setSelected] = useState('Imperial War Museum');
  const [showSites, setShowSites] = useState(true);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    fetch(DATA_URL)
      .then(r => {
        if (!r.ok) throw new Error(`${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(() => setLoadError('Could not load the visits data set. Please refresh the page.'));
  }, []);

  const groupNames = useMemo(() => (data ? Object.keys(data.groups).filter(g => g !== 'DCMS Total') : []), [data]);

  const series: Series[] = useMemo(() => {
    if (!data) return [];
    if (selected === 'Imperial War Museum' && showSites) {
      return Object.entries(data.iwmSites).map(([name, values], i) => ({
        name,
        color: SERIES_COLORS[i % SERIES_COLORS.length],
        values,
      }));
    }
    return [{ name: selected, color: SERIES_COLORS[0], values: data.groups[selected] ?? [] }];
  }, [data, selected, showSites]);

  const recovery = useMemo(() => {
    if (!data) return null;
    const vals = data.groups[selected];
    if (!vals) return null;
    const last12 = vals.slice(-12).filter((v): v is number => v !== null);
    const base = vals.slice(0, 12).filter((v): v is number => v !== null);
    if (!last12.length || !base.length) return null;
    const cur = last12.reduce((a, b) => a + b, 0);
    const b19 = base.reduce((a, b) => a + b, 0);
    return { cur, b19, pct: Math.round((cur / b19) * 100) };
  }, [data, selected]);

  return (
    <article className="max-w-5xl mx-auto px-6 lg:px-8 py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <header>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">Tesseract Foundational Research: Audience Measurement</p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The DCMS Museum Visits Observatory
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Every month, DCMS publishes visitor figures for the national museums and galleries it sponsors - and every month those numbers land as a spreadsheet, not a decision tool. We rebuilt the full statistical data set, January 2019 to March 2026, as an interactive observatory: 16 museum groups, site-level detail, pandemic closures marked, and recovery measured against each institution's own 2019 baseline. It is a working demonstration of the difference between reporting and insight, on data every cultural organisation already knows.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { n: '16', l: 'DCMS-sponsored museum groups' },
          { n: '87', l: 'months of data (Jan 2019 - Mar 2026)' },
          { n: '3.7M', l: 'visits across all groups, March 2026' },
          { n: '100%', l: 'reproducible from the official data set' },
        ].map(t => (
          <div key={t.l} className="border border-gov-border/50 rounded-xl p-5 bg-white text-center">
            <div className="text-2xl font-bold text-gov-dark tabular-nums font-mono">{t.n}</div>
            <div className="text-xs text-gov-secondary mt-1 leading-snug">{t.l}</div>
          </div>
        ))}
      </section>

      {/* Explorer */}
      <section className="bg-white border border-gov-border/50 rounded-xl p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="museum-select" className="text-sm font-semibold text-gov-dark">
            Museum group
          </label>
          <select
            id="museum-select"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            className="text-sm border border-gov-border rounded-lg px-3 py-2 bg-white text-gov-dark focus:outline-none focus:ring-2 focus:ring-gov-blue/40"
          >
            {groupNames.map(g => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {selected === 'Imperial War Museum' && (
            <label className="flex items-center gap-2 text-sm text-gov-secondary cursor-pointer">
              <input type="checkbox" checked={showSites} onChange={e => setShowSites(e.target.checked)} className="accent-[#12a59c]" />
              Break down by site
            </label>
          )}
          <button
            type="button"
            onClick={() => setShowTable(v => !v)}
            className="ml-auto text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline"
          >
            {showTable ? 'Hide data table' : 'View as data table'}
          </button>
        </div>

        {!data && !loadError && <p className="text-sm text-gov-secondary py-16 text-center">Loading the visits data set…</p>}
        {loadError && <p className="text-sm text-gov-secondary py-16 text-center">{loadError}</p>}

        {data && !showTable && (
          <>
            <VisitsChart months={data.months} series={series} />
            {series.length > 1 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1" aria-hidden="true">
                {series.map(s => (
                  <span key={s.name} className="flex items-center gap-2 text-xs text-gov-secondary">
                    <span className="inline-block w-3 h-3 rounded-sm" style={{ background: s.color }} />
                    {s.name}
                  </span>
                ))}
              </div>
            )}
          </>
        )}

        {data && showTable && (
          <div className="overflow-x-auto max-h-96 overflow-y-auto border border-gov-border/40 rounded-lg">
            <table className="w-full text-xs">
              <thead className="bg-gov-bg sticky top-0">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gov-dark">Month</th>
                  {series.map(s => (
                    <th key={s.name} className="text-right px-3 py-2 font-semibold text-gov-dark">
                      {s.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.months.map((m, i) => (
                  <tr key={m} className={i % 2 === 0 ? 'bg-white' : 'bg-gov-bg/40'}>
                    <td className="px-3 py-1.5 text-gov-dark whitespace-nowrap">{shortMonth(m)}</td>
                    {series.map(s => (
                      <td key={s.name} className="px-3 py-1.5 text-right text-gov-secondary tabular-nums">
                        {fmt(s.values[i])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data && recovery && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-gov-bg rounded-lg p-4 text-center border border-gov-border/30">
              <p className="text-xl font-extrabold text-gov-dark tabular-nums">{fmt(recovery.cur)}</p>
              <p className="text-xs text-gov-secondary mt-1">visits in the latest 12 months</p>
            </div>
            <div className="bg-gov-bg rounded-lg p-4 text-center border border-gov-border/30">
              <p className="text-xl font-extrabold text-gov-dark tabular-nums">{fmt(recovery.b19)}</p>
              <p className="text-xs text-gov-secondary mt-1">visits in 2019 (pre-pandemic baseline)</p>
            </div>
            <div className="bg-gov-bg rounded-lg p-4 text-center border border-gov-border/30">
              <p className="text-xl font-extrabold text-gov-blue tabular-nums">{recovery.pct}%</p>
              <p className="text-xs text-gov-secondary mt-1">of the 2019 baseline recovered</p>
            </div>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Why we built it</h2>
          <p className="text-gov-dark leading-relaxed">
            Cultural organisations are rich in data and short on analytical capacity. The DCMS monthly visits series is one of the sector's best openly published data sets, yet it circulates as static tables: no baselines, no seasonality context, no way for a trustee or a marketing team to answer the question they actually have, which is "are we back, and compared to what?" This observatory answers that question interactively for every DCMS-sponsored museum group, and does it with the disciplines we bring to commissioned measurement work: an explicit baseline (each group's own 2019), honest handling of gaps and closures rather than smoothing over them, and every underlying number one click away in an accessible table.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">What the data shows</h2>
          <p className="text-gov-dark leading-relaxed">
            Recovery is uneven, and averages hide it. Across all DCMS-sponsored museums, visits in the year to March 2026 sit close to pre-pandemic levels, but the group-level picture ranges widely - and within a single group, site-level trajectories diverge further still. The Imperial War Museums breakdown illustrates the point: five branches with five different recovery curves, from a central-London gallery site to a wartime airfield and a moored warship, each with its own seasonality. A single aggregate would tell the leadership team almost nothing actionable; the disaggregated view shows exactly where audience growth is coming from. That is the general lesson we take into every measurement engagement: the value is rarely in the headline number, it is in the decomposition.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-l-2 border-l-gov-blue pl-6">
          <h2 className="text-2xl font-bold text-gov-dark font-serif mb-3">Method and reproducibility</h2>
          <p className="text-gov-dark leading-relaxed">
            The observatory is built directly from the official DCMS statistical data set, "<a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="text-gov-blue underline hover:text-gov-blue-dark">Monthly and Quarterly Visits to DCMS-sponsored Museums and Galleries</a>" (to March 2026), reused under the Open Government Licence v3.0. Missing months are shown as gaps, never interpolated; the pandemic closure period (March 2020 to May 2021) is marked on the chart rather than excluded; recovery percentages compare the latest 12 months against the same institution's calendar-2019 total, so no museum is judged against anyone else's baseline. The extraction is a single script from the published ODS file, and the full monthly table is viewable on this page - if you can see a number in the chart, you can read it in the table.
          </p>
        </div>
      </section>

      <div className="bg-gov-bg border border-gov-border/50 rounded-xl p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gov-dark">Want your organisation's data to work like this?</p>
          <p className="text-sm text-gov-secondary mt-1">
            We build measurement frameworks, dashboards and analytics capability for public-sector and cultural organisations - see our <Link to="/services/digital-analytics" className="text-gov-blue underline hover:text-gov-blue-dark">digital analytics and audience measurement service</Link>.
          </p>
        </div>
        <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-blue text-white text-sm font-semibold rounded-lg hover:bg-gov-blue-dark transition-colors whitespace-nowrap">
          Source data on GOV.UK <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="text-sm text-gov-secondary/90 leading-relaxed">
        Independent, self-initiated open research. Source figures &copy; Crown copyright, Department for Culture, Media and Sport, reused under the Open Government Licence v3.0. This observatory is not endorsed by DCMS or any museum shown.
      </p>

      <div className="pt-4 border-t border-gov-border/30">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </article>
  );
};
