import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Loader2,
  Leaf,
  TrendingUp,
  Layers,
  Award,
  AlertCircle,
  GraduationCap,
  Route as RouteIcon,
  ChevronRight,
  Network,
} from 'lucide-react';

const CANONICAL = 'https://gov.tesseract.academy/research/skills-england-occupational-maps';
const DATA_BASE = '/data/skills-england';
const ONTOLOGY_REPO =
  'https://github.com/fabio-rovai/open-ontologies/tree/main/case-studies/skills-england-occupational-maps';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  '@id': `${CANONICAL}#dataset`,
  name: 'Skills England Occupational Maps Ontology (SEOM)',
  url: CANONICAL,
  description:
    'An open, machine-readable ontology and explorer of the Skills England occupational maps by Tesseract Academy: 1,269 occupational standards placed in the Route to Pathway to Cluster hierarchy, crosswalked to ONS SOC 2010 and 2020, linked to apprenticeship and technical education products, green-jobs themes, and progression pathways. Published as Turtle and JSON-LD, validated at zero SHACL violations.',
  creator: { '@id': 'https://gov.tesseract.academy/#organization' },
  isBasedOn: {
    '@type': 'Dataset',
    name: 'Skills England Occupational Maps',
    creator: {
      '@type': 'GovernmentOrganization',
      name: 'Skills England',
      url: 'https://www.gov.uk/government/organisations/skills-england',
    },
  },
  license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
  keywords: 'occupational standards, apprenticeships, SOC 2020, green jobs, ontology, SKOS, skills',
};

// ---- Static open snapshot (no API key, no live dependency) ----
async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load data (${res.status})`);
  return (await res.json()) as T;
}

// ---- Types (only the fields we render) ----
interface OccupationSummary {
  stdCode: string;
  name: string;
  level: number;
  statusName?: string;
}
interface JobTitle {
  name: string;
  isGreen: boolean;
}
interface SubUnitGroup {
  code: string;
  description: string;
  isPrimary: boolean;
}
interface Soc {
  soc2010Code?: number;
  soc2010Description?: string;
  soc2020Code?: number;
  soc2020Description?: string;
  soc2020SubUnitGroups?: SubUnitGroup[];
}
interface MapHierarchy {
  routeName?: string;
  pathwayName?: string;
  clusterName?: string;
  technicalLevelName?: string;
}
interface Product {
  name: string;
  level: number;
  statusName?: string;
  typeName?: string;
  productCode?: string;
}
interface OccLink {
  rel?: string;
  href: string;
  title?: string;
}
interface OccupationDetail extends OccupationSummary {
  versionNo?: string;
  summary?: string;
  overview?: string;
  involvedEmployers?: string;
  keywords?: string[];
  typicalJobTitles?: JobTitle[];
  soc?: Soc;
  mapHierarchy?: MapHierarchy;
  products?: Product[];
  links?: OccLink[];
  greenThemeIds?: number[];
  progression?: OccupationSummary[];
}
interface RouteItem {
  routeId: number;
  name: string;
  sequence: number;
}
interface SubTheme {
  themeId: number;
  themeName: string;
}
interface GreenTheme {
  themeId: number;
  themeName: string;
  subThemes?: SubTheme[];
}
interface Index {
  version: string;
  harvestedAt: string;
  stats: { occupations: number; routes: number; greenThemes: number };
  occupations: OccupationSummary[];
  routes: RouteItem[];
  greenThemes: GreenTheme[];
}

// ---- Helpers ----
function htmlToParagraphs(html?: string): string[] {
  if (!html) return [];
  return html
    .replace(/<\/p>/gi, '\n')
    .replace(/<br\s*\/?>(\n)?/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#39;|&rsquo;|&lsquo;/gi, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/gi, '"')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

const FEATURED = [
  { code: 'OCC0118', label: 'Data analyst' },
  { code: 'OCC0763', label: 'AI data specialist' },
  { code: 'OCC0714', label: 'Data scientist' },
  { code: 'OCC0284', label: 'Cyber security technologist' },
];

const StatTile: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex items-center gap-4 bg-gov-bg-alt border border-gov-border/60 rounded-xl p-5 shadow-subtle">
    <div className="text-gov-blue">{icon}</div>
    <div>
      <div className="text-2xl font-extrabold text-gov-dark tabular-nums">{value}</div>
      <div className="text-sm text-gov-secondary">{label}</div>
    </div>
  </div>
);

export const SkillsEnglandOccupationalMaps: React.FC = () => {
  const [occupations, setOccupations] = useState<OccupationSummary[]>([]);
  const [routes, setRoutes] = useState<RouteItem[]>([]);
  const [greenThemes, setGreenThemes] = useState<GreenTheme[]>([]);
  const [snapshotDate, setSnapshotDate] = useState<string>('');
  const [stats, setStats] = useState<{ occupations: number; routes: number; greenThemes: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string>('');

  const [query, setQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState<OccupationDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState('');

  // Load the open snapshot index once.
  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      setLoadError('');
      try {
        const idx = await fetchJSON<Index>(`${DATA_BASE}/index.json`);
        if (!active) return;
        setOccupations(idx.occupations || []);
        setRoutes((idx.routes || []).slice().sort((a, b) => a.sequence - b.sequence));
        setGreenThemes(idx.greenThemes || []);
        setStats(idx.stats || null);
        setSnapshotDate(idx.harvestedAt || '');
      } catch (e) {
        if (active) setLoadError(e instanceof Error ? e.message : 'Could not load the occupational map snapshot.');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const greenThemeName = useMemo(() => {
    const m = new Map<number, string>();
    greenThemes.forEach((t) => m.set(t.themeId, t.themeName));
    return m;
  }, [greenThemes]);

  const loadOccupation = useCallback(async (stdCode: string) => {
    setSelected(stdCode);
    setDetailLoading(true);
    setDetailError('');
    setDetail(null);
    if (typeof window !== 'undefined') {
      document.getElementById('occupation-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    try {
      const d = await fetchJSON<OccupationDetail>(`${DATA_BASE}/occupations/${encodeURIComponent(stdCode)}.json`);
      setDetail(d);
    } catch (e) {
      setDetailError(e instanceof Error ? e.message : 'Could not load this occupation.');
    } finally {
      setDetailLoading(false);
    }
  }, []);

  const levels = useMemo(
    () => Array.from(new Set(occupations.map((o) => o.level).filter(Boolean))).sort((a, b) => a - b),
    [occupations],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return occupations.filter((o) => {
      if (levelFilter !== 'all' && String(o.level) !== levelFilter) return false;
      if (!q) return true;
      return o.name.toLowerCase().includes(q) || o.stdCode.toLowerCase().includes(q);
    });
  }, [occupations, query, levelFilter]);

  const visible = filtered.slice(0, 60);
  const progression = (detail?.progression || []).filter((o) => o.stdCode !== detail?.stdCode);

  return (
    <article className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Header */}
      <header className="max-w-4xl">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        <p className="text-sm font-semibold uppercase tracking-wider text-gov-blue mb-3">
          Open ontology and explorer · Skills &amp; Occupations
        </p>
        <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
          The Skills England occupational maps, as an ontology
        </h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed">
          Skills England publishes the national occupational maps through a public API. We turned the whole thing into
          what it already is: a single connected graph. Every occupational standard is a node; its route, pathway and
          cluster, its Standard Occupational Classification (SOC) codes, its apprenticeship and technical education
          products, its green-jobs themes and the occupations it progresses to are typed edges. The result is an open,
          machine-readable ontology, and the searchable explorer below.
        </p>
        <p className="mt-4 text-base text-gov-secondary/80 leading-relaxed">
          It is the operational companion to our open research on{' '}
          <a
            href="https://github.com/fabio-rovai/open-ontologies/blob/main/case-studies/skills-mobility/case-study.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gov-blue hover:underline"
          >
            skills and social mobility in England
          </a>
          : PIAAC tells us what adults can do; the occupational maps tell us where those skills lead; and SOC is the join
          between them.
        </p>
      </header>

      {/* Snapshot status + stats */}
      <section aria-label="Snapshot status">
        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
          <span className="inline-flex items-center gap-2 font-medium text-gov-dark">
            <Network className="w-4 h-4 text-gov-blue" />
            Open snapshot of the Skills England Occupational Maps
          </span>
          {snapshotDate && <span className="text-gov-secondary/80">· harvested {snapshotDate}</span>}
          <a
            href={ONTOLOGY_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gov-blue hover:text-gov-blue-dark hover:underline font-medium"
          >
            Get the ontology (Turtle / JSON-LD)
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {loadError ? (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">The occupational map snapshot could not be loaded.</p>
              <p className="mt-1 text-amber-800/90">{loadError}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatTile
              icon={<Layers className="w-7 h-7" />}
              value={stats ? stats.occupations.toLocaleString('en-GB') : '…'}
              label="Occupational standards"
            />
            <StatTile
              icon={<RouteIcon className="w-7 h-7" />}
              value={stats ? String(stats.routes) : '…'}
              label="Occupational routes"
            />
            <StatTile
              icon={<Leaf className="w-7 h-7" />}
              value={stats ? String(stats.greenThemes) : '…'}
              label="Green occupation themes"
            />
          </div>
        )}
      </section>

      {/* Explorer */}
      <section aria-label="Occupation explorer">
        <h2 className="text-2xl font-bold text-gov-dark mb-6 font-serif">Search the occupational map</h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gov-secondary/60" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 1,200+ occupations (e.g. data, nuclear, nurse, welder)"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gov-border focus:border-gov-blue focus:ring-2 focus:ring-gov-blue/20 outline-none text-gov-dark"
              aria-label="Search occupations by name or standard code"
            />
          </div>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="py-3 px-4 rounded-xl border border-gov-border focus:border-gov-blue focus:ring-2 focus:ring-gov-blue/20 outline-none text-gov-dark bg-gov-bg-alt"
            aria-label="Filter by level"
          >
            <option value="all">All levels</option>
            {levels.map((l) => (
              <option key={l} value={String(l)}>
                Level {l}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-sm text-gov-secondary">Try:</span>
          {FEATURED.map((f) => (
            <button
              key={f.code}
              onClick={() => loadOccupation(f.code)}
              className="text-sm px-3 py-1.5 rounded-full border border-gov-border hover:border-gov-blue hover:text-gov-blue transition-colors text-gov-dark"
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-gov-secondary py-10">
            <Loader2 className="w-5 h-5 animate-spin" /> Loading the national occupational map…
          </div>
        ) : (
          !loadError && (
            <>
              <p className="text-sm text-gov-secondary mb-3">
                Showing {Math.min(visible.length, filtered.length)} of {filtered.length.toLocaleString('en-GB')} matching
                {filtered.length === 1 ? ' occupation' : ' occupations'}
              </p>
              <ul className="divide-y divide-gov-border/60 border border-gov-border/60 rounded-xl overflow-hidden bg-gov-bg-alt">
                {visible.map((o) => (
                  <li key={o.stdCode}>
                    <button
                      onClick={() => loadOccupation(o.stdCode)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gov-bg transition-colors ${
                        selected === o.stdCode ? 'bg-gov-bg' : ''
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-gov-dark truncate">{o.name}</span>
                        <span className="block text-xs text-gov-secondary mt-0.5">
                          {o.stdCode} · Level {o.level} · {o.statusName}
                        </span>
                      </span>
                      <ChevronRight className="w-5 h-5 text-gov-secondary/50 flex-shrink-0" />
                    </button>
                  </li>
                ))}
                {visible.length === 0 && (
                  <li className="px-5 py-8 text-center text-gov-secondary text-sm">No occupations match your search.</li>
                )}
              </ul>
              {filtered.length > visible.length && (
                <p className="text-xs text-gov-secondary/80 mt-3">
                  Refine your search to narrow these {filtered.length.toLocaleString('en-GB')} results.
                </p>
              )}
            </>
          )
        )}
      </section>

      {/* Occupation detail */}
      <section id="occupation-detail" aria-label="Occupation detail">
        {detailLoading && (
          <div className="flex items-center gap-3 text-gov-secondary py-10">
            <Loader2 className="w-5 h-5 animate-spin" /> Loading occupation…
          </div>
        )}

        {detailError && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>{detailError}</p>
          </div>
        )}

        {detail && !detailLoading && (
          <div className="border border-gov-border/60 rounded-2xl overflow-hidden shadow-soft">
            <div className="bg-gov-blue text-white px-6 py-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 rounded px-2 py-1">
                  {detail.stdCode}
                </span>
                <span className="text-xs font-medium bg-white/15 rounded px-2 py-1">Level {detail.level}</span>
                {detail.statusName && (
                  <span className="text-xs font-medium bg-white/15 rounded px-2 py-1">{detail.statusName}</span>
                )}
                {detail.versionNo && (
                  <span className="text-xs font-medium bg-white/15 rounded px-2 py-1">v{detail.versionNo}</span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold font-serif">{detail.name}</h3>
            </div>

            <div className="p-6 space-y-8">
              {/* Map hierarchy breadcrumb */}
              {detail.mapHierarchy && (detail.mapHierarchy.routeName || detail.mapHierarchy.pathwayName) && (
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {[detail.mapHierarchy.routeName, detail.mapHierarchy.pathwayName, detail.mapHierarchy.clusterName]
                    .filter(Boolean)
                    .map((part, i, arr) => (
                      <React.Fragment key={i}>
                        <span className={i === 0 ? 'font-semibold text-gov-dark' : 'text-gov-secondary'}>{part}</span>
                        {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-gov-secondary/40" />}
                      </React.Fragment>
                    ))}
                  {detail.mapHierarchy.technicalLevelName && (
                    <span className="ml-2 text-xs bg-gov-bg border border-gov-border rounded-full px-2.5 py-1 text-gov-secondary">
                      {detail.mapHierarchy.technicalLevelName}
                    </span>
                  )}
                </div>
              )}

              {/* Green themes */}
              {detail.greenThemeIds && detail.greenThemeIds.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {detail.greenThemeIds.map((id) => (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5 border border-emerald-300 bg-emerald-50 text-emerald-800"
                    >
                      <Leaf className="w-3.5 h-3.5" />
                      Green: {greenThemeName.get(id) || `theme ${id}`}
                    </span>
                  ))}
                </div>
              )}

              {/* Summary / overview */}
              {(detail.summary || detail.overview) && (
                <div className="space-y-3 text-gov-dark/90 leading-relaxed">
                  {(detail.summary ? htmlToParagraphs(detail.summary) : htmlToParagraphs(detail.overview))
                    .slice(0, 3)
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
              )}

              {/* Typical job titles */}
              {detail.typicalJobTitles && detail.typicalJobTitles.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-gov-secondary mb-3">Typical job titles</h4>
                  <div className="flex flex-wrap gap-2">
                    {detail.typicalJobTitles.map((t, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 text-sm rounded-full px-3 py-1.5 border ${
                          t.isGreen
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : 'border-gov-border bg-gov-bg text-gov-dark'
                        }`}
                      >
                        {t.isGreen && <Leaf className="w-3.5 h-3.5" />}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SOC mapping */}
                {detail.soc && (detail.soc.soc2020Code || detail.soc.soc2010Code) && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gov-secondary mb-3">
                      Standard Occupational Classification
                    </h4>
                    <dl className="text-sm space-y-2">
                      {detail.soc.soc2020Code ? (
                        <div>
                          <dt className="inline font-semibold text-gov-dark">SOC 2020:</dt>{' '}
                          <dd className="inline text-gov-secondary">
                            {detail.soc.soc2020Code} · {detail.soc.soc2020Description}
                          </dd>
                        </div>
                      ) : null}
                      {detail.soc.soc2010Code ? (
                        <div>
                          <dt className="inline font-semibold text-gov-dark">SOC 2010:</dt>{' '}
                          <dd className="inline text-gov-secondary">
                            {detail.soc.soc2010Code} · {detail.soc.soc2010Description}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                    {detail.soc.soc2020SubUnitGroups && detail.soc.soc2020SubUnitGroups.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {detail.soc.soc2020SubUnitGroups.map((g) => (
                          <li key={g.code} className="text-xs text-gov-secondary">
                            <span className="font-mono text-gov-dark">{g.code}</span> {g.description}
                            {g.isPrimary && <span className="ml-1 text-gov-blue font-medium">(primary)</span>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Products */}
                {detail.products && detail.products.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gov-secondary mb-3">
                      Technical education products
                    </h4>
                    <ul className="space-y-2">
                      {detail.products.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-gov-blue flex-shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium text-gov-dark">{p.name}</span>
                            <span className="block text-xs text-gov-secondary">
                              {[p.typeName, `Level ${p.level}`, p.productCode, p.statusName].filter(Boolean).join(' · ')}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Progression */}
              {progression.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-gov-secondary mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gov-blue" /> Occupational progression
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {progression.map((o) => (
                      <button
                        key={o.stdCode}
                        onClick={() => loadOccupation(o.stdCode)}
                        className="text-sm px-3 py-1.5 rounded-full border border-gov-border hover:border-gov-blue hover:text-gov-blue transition-colors text-gov-dark"
                        title={`${o.stdCode} · Level ${o.level}`}
                      >
                        {o.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* External links */}
              {detail.links && detail.links.filter((l) => /^https?:/.test(l.href)).length > 0 && (
                <div className="pt-2 flex flex-wrap gap-4">
                  {detail.links
                    .filter((l) => /^https?:/.test(l.href))
                    .slice(0, 4)
                    .map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline"
                      >
                        {l.title || l.rel || 'View on Skills England'}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Routes */}
      {!loadError && routes.length > 0 && (
        <section aria-label="Occupational routes">
          <h2 className="text-2xl font-bold text-gov-dark mb-6 font-serif">The 15 occupational routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {routes.map((r) => (
              <div
                key={r.routeId}
                className="flex items-center gap-3 bg-gov-bg-alt border border-gov-border/60 rounded-xl px-4 py-3 shadow-subtle"
              >
                <RouteIcon className="w-5 h-5 text-gov-blue flex-shrink-0" />
                <span className="font-medium text-gov-dark text-sm">{r.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Green themes */}
      {!loadError && greenThemes.length > 0 && (
        <section aria-label="Green occupation themes">
          <h2 className="text-2xl font-bold text-gov-dark mb-2 font-serif">Green occupation themes</h2>
          <p className="text-gov-secondary mb-6">
            Skills England classifies the occupations that underpin the transition to net zero across these themes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {greenThemes.map((t) => (
              <div key={t.themeId} className="bg-gov-bg-alt border border-gov-border/60 rounded-xl p-5 shadow-subtle">
                <h3 className="flex items-center gap-2 font-semibold text-gov-dark mb-3">
                  <Leaf className="w-4 h-4 text-emerald-600" /> {t.themeName}
                </h3>
                {t.subThemes && t.subThemes.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {t.subThemes.map((s) => (
                      <span
                        key={s.themeId}
                        className="text-xs rounded-full px-2.5 py-1 border border-emerald-200 bg-emerald-50 text-emerald-800"
                      >
                        {s.themeName}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Article: the SEOM ontology write-up */}
      <section aria-label="About the ontology" className="max-w-4xl space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gov-dark font-serif">The occupational maps, as a graph</h2>
          <p className="text-lg text-gov-secondary/90 leading-relaxed">
            Skills England publishes the national occupational maps through a public API: occupational standards
            arranged into routes, pathways and clusters, each carrying a Standard Occupational Classification mapping,
            apprenticeship and technical education products, and a green-jobs classification, with progression
            relationships between occupations. That is a graph. Delivered as JSON over REST endpoints it reads as
            documents, and consumed the usual way a slice of it ends up flattened into a spreadsheet where the
            relationships that make it valuable are lost.
          </p>
          <p className="text-lg text-gov-secondary/90 leading-relaxed">
            We turned the whole thing into what it already is: a single, connected, machine-readable graph. Every
            occupational standard is a node; its route, pathway, cluster, technical level, status, SOC codes, products,
            green themes and progression targets are typed edges. The result is 51,355 statements that validate against
            a formal SHACL schema with zero violations, published openly as Turtle and JSON-LD.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gov-border/60 rounded-xl overflow-hidden">
            <thead className="bg-gov-bg">
              <tr>
                <th className="text-left font-semibold text-gov-dark px-4 py-3">In the graph</th>
                <th className="text-right font-semibold text-gov-dark px-4 py-3">Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gov-border/50">
              {[
                ['Occupational standards', '1,269'],
                ['Routes, pathways, clusters', '15 / 35 / 172'],
                ['SOC 2020 concepts (crosswalk)', '278'],
                ['SOC 2010 concepts (crosswalk)', '246'],
                ['Technical education products', '1,313'],
                ['Green themes (occupation links)', '8 (231)'],
                ['Progression edges', '2,717'],
                ['Total triples', '51,355'],
                ['SHACL validation', '0 violations'],
              ].map(([k, v]) => (
                <tr key={k} className="bg-gov-bg-alt">
                  <td className="px-4 py-2.5 text-gov-dark">{k}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums font-medium text-gov-dark">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">The challenge</h3>
          <p className="text-gov-dark/90 leading-relaxed">
            Occupational standards sit at the join between three systems that rarely share a data model: the education
            system (apprenticeships, T Levels, Higher Technical Qualifications), the labour market (ONS Standard
            Occupational Classification, used for every official statistic on jobs and pay), and skills policy (routes,
            clusters, green-jobs themes). The occupational maps are the object that connects them, which is exactly why
            they are hard to use well. The data is relational but the delivery is document-shaped; there is no published
            schema for the connected object, so every consumer re-invents one; and the SOC crosswalk, the single most
            useful bridge to official labour-market statistics, is buried inside each record rather than exposed as a
            first-class mapping.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">How we built it</h3>
          <p className="text-gov-dark/90 leading-relaxed">
            We harvested a complete static snapshot of the Public API under the Open Government Licence and modelled it
            as an ontology. Three design choices make it trustworthy and reusable. First, the map is modelled as it is
            defined: the Route to Pathway to Cluster hierarchy is a SKOS concept scheme, so it can be browsed and
            reasoned over like any controlled vocabulary. Second, the SOC crosswalk is a first-class citizen: every
            distinct SOC 2010 and 2020 code becomes a concept in its own scheme, and each occupation carries an explicit
            mapping edge, so the bridge from standards to ONS statistics is a single query rather than a bespoke join.
            Third, the graph is constraint-checked, not just serialised: a SHACL shapes file states what a well-formed
            occupation, product and SOC concept must look like, and the graph is validated against it, and against
            referential-integrity checks, on every build.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">Assurance</h3>
          <p className="text-gov-dark/90 leading-relaxed">
            The graph conforms to the SHACL shapes with zero violations across all 51,355 triples, and passes four
            referential-integrity checks: no occupation without a route, no progression edge to a non-occupation, no
            green-theme link to a non-theme, and no SOC reference without a notation. Every one of the 1,269 standards is
            fully placed in the map (route, pathway, cluster and technical level all present); 1,079 (85%) carry a SOC
            2020 mapping. The whole pipeline is reproducible: one script rebuilds the graph from the snapshot, another
            re-runs validation and the coverage report.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">Why an open ontology matters for the skills system</h3>
          <p className="text-gov-dark/90 leading-relaxed">
            The direction of travel in national skills policy is a single, authoritative, data-driven view of what the
            country needs, one that can map the routes from courses and standards through to occupations, and reason
            about skills demand sector by sector. Priority occupations for the industrial strategy are already identified
            by SOC code; a new standardised skills classification links skills to occupations through the most detailed
            level of SOC 2020; and the occupational maps themselves are published as free data behind a public API. The
            missing layer is not more data. It is the connective tissue that makes the data computable: a typed,
            validated graph in which routes, occupations, SOC codes, products and progression are first-class,
            queryable objects rather than fields inside separate documents.
          </p>
          <p className="text-gov-dark/90 leading-relaxed">
            That is what this ontology provides, and it is why we built it as an open artifact rather than an internal
            tool. Because the SOC crosswalk is a first-class citizen, the maps snap directly onto the classification that
            underpins every official statistic on jobs, pay and vacancies, and onto the emerging skills classification
            layered on top of it. Questions that used to need bespoke code become single queries: the full progression
            neighbourhood of any occupation, every standard that feeds a given SOC group, the apprenticeship and higher
            technical offer under any green theme, or the occupations that sit across more than one route. It lets
            employers, providers and analysts compute pathways, gaps and green-transition demand at scale instead of
            reading pages one at a time.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gov-dark font-serif">Open source, and free to reuse</h3>
          <p className="text-gov-dark/90 leading-relaxed">
            Everything here is open. The SEOM vocabulary, the full instance graph in Turtle and JSON-LD, the ONS SOC
            2010 and 2020 crosswalk as standalone SKOS concept schemes, the SHACL shapes and the reproducible build and
            validation scripts are all published on GitHub under an open licence, alongside the static snapshot they are
            built from. Anyone can query it, extend it, align it to their own vocabularies, or regenerate it from a fresh
            snapshot. We built it to be reused, and to show what the occupational maps become when they are treated as
            the connected, standards-based, machine-readable evidence base the skills system is asking for.
          </p>
          <p>
            <a
              href={ONTOLOGY_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline"
            >
              Ontology, data and reproducible build on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
      </section>

      {/* How this works */}
      <section className="bg-gov-bg border border-gov-border/50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gov-dark mb-3 font-serif flex items-center gap-2">
          <Award className="w-5 h-5 text-gov-blue" /> How this was built
        </h2>
        <p className="text-gov-dark/90 leading-relaxed">
          We harvested a complete static snapshot of the Skills England Occupational Maps Public API under an Open
          Government Licence, and modelled it as an ontology: the Route to Pathway to Cluster hierarchy as a SKOS
          concept scheme, the ONS SOC 2010 and 2020 codes as a first-class crosswalk, and occupations, products and
          progression as typed instances. The graph is 51,000+ triples, published as Turtle and JSON-LD, and validated
          at zero SHACL violations. This page reads the same open snapshot, so it needs no live credentials and cannot
          go stale silently: refresh the snapshot, rebuild, and both the ontology and this explorer update together.
        </p>
        <p className="mt-4">
          <a
            href={ONTOLOGY_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gov-blue hover:text-gov-blue-dark hover:underline"
          >
            Ontology, data and reproducible build on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </p>
      </section>

      {/* Mandatory Skills England attribution + Open Government Licence */}
      <section
        aria-label="Data source and licence"
        className="border-t-2 border-gov-blue/20 pt-8 flex flex-col sm:flex-row items-start gap-6"
      >
        <a
          href="https://www.gov.uk/government/organisations/skills-england"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <img src="/logos/skills-england.svg" alt="Skills England" width={132} height={57} className="h-14 w-auto" />
        </a>
        <div className="text-sm text-gov-secondary leading-relaxed">
          <p>
            This service uses data from the{' '}
            <a
              href="https://occupational-maps.skillsengland.education.gov.uk/public-api/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Skills England Occupational Maps Public API
            </a>
            . Contains public sector information from Skills England licensed under the{' '}
            <a
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gov-blue hover:underline"
            >
              Open Government Licence v3.0
            </a>
            .
          </p>
          <p className="mt-2 text-gov-secondary/80">
            © Crown copyright. Skills England data is used under licence; use is subject to the Skills England Licence and
            Terms of Use. This explorer and ontology are an independent Tesseract Academy demonstration and are not
            endorsed by Skills England.
          </p>
        </div>
      </section>
    </article>
  );
};

export default SkillsEnglandOccupationalMaps;
