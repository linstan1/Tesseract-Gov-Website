# Claims to confirm before publish — gov.tesseract.academy research/case studies

Generated from a full editorial + fact-check review (3 Jul 2026). Every item below is a
claim I could **not** verify from a public artifact, so I left it in place rather than
edit blind. Confirm, source, or delete each. Nothing here has been changed.

## Resolved during this pass (no action needed)
- **BridgeAI 1,100 registrations / 4.6-out-of-5 satisfaction** — Fabio confirmed these are
  real client metrics. Left untouched. The only BridgeAI problem was the dead primary link
  (last year's `gov.uk/collections/bridgeai`), now repointed to
  `https://iuk-business-connect.org.uk/programme/bridgeai/`.

## Needs your confirmation — Welsh Government (WelshGovernment.tsx)
1. **"Cited in Senedd committee proceedings"** — stated three times (hero line 83, assurance
   bullet, outcome link). The linked target is the gov.wales report page, which does not
   evidence a Senedd citation. If you have the committee/date reference, add it; otherwise
   delete all three. Highest embarrassment risk on the client set.
2. **"99% of Welsh geography covered"** stat card (line ~95) — not on gov.wales and not in the
   report I could see. LSOAs tile 100% of populated area, so "99%" reads invented. I removed
   it from the body prose during the OSR fix; the **stat card still shows it**. Source or drop.
3. **"The machine-learning methodology produced the most granular and consistent estimates"**
   (outcome) — this is a cross-methodology winner claim. Tesseract delivered one of six lots;
   that comparative verdict belongs to the Welsh Government synthesis. Soften to what Tesseract
   found, or cite the WG synthesis that says it.

## Needs your confirmation — AES Heritage (AesHeritage.tsx)
4. **"pre-registered scoping-review protocol"** (2 places) — "pre-registered" implies an
   external registry (OSF/PROSPERO). If it isn't registered anywhere public, downgrade to
   "pre-specified", or register it and cite the DOI.
5. **No analysis repo on disk.** The piece's pitch is "we ran our own analysis / show the
   working", but there is no HAR-2024 ingestion, spatial-join script or notebook anywhere on
   this machine — only the finished charts + prose. The one externally checkable number
   (South West 45%) *is* correct against Historic England, so the analysis was almost certainly
   done; it just isn't preserved as a public artifact. **Publish the analysis repo** (mirror the
   FAIR-repo pattern) or soften the "show the working" language. This is the single biggest
   credibility gap among the open-demo pieces.

## Needs your confirmation — Nature-Related Security Risk (NatureSecurityRisk.tsx)
6. **"forced into publication by a Green Alliance freedom-of-information request and then
   debated in the House of Lords"** — I could not confirm either the FOI trigger or the Lords
   debate. The gov.uk page doesn't mention them. Load-bearing provenance claims: verify both or
   soften to a citation.
7. **Assessment attributed to "Defra / MOD / Joint Intelligence Committee"** in the reference
   list — gov.uk attributes it to **Defra**. Drop "/ MOD / Joint Intelligence Committee" unless
   the PDF's inside cover lists them as co-authors.
8. **Hero sentence conflation** — the article says the assessment concluded "six strategic
   ecosystems are on a pathway to collapse". The gov High-confidence sentence is "*every*
   critical ecosystem is on a pathway to collapse", and it separately *names six* strategic
   ecosystems. Reword to: "assessed, with high confidence, that every critical ecosystem is on
   a pathway to collapse, and named six ecosystems of strategic importance to the UK." Costs
   nothing, removes the one attackable tightening.

## Needs your confirmation — IES→HQDM (IesHqdmCrosswalk.tsx)
9. **"17 correspondences" headline stat** — the "17" is not surfaced in the repo README (it's
   in the SSSOM TSV). A diligent reader can't confirm it one click away. Add a one-line
   "17 backbone correspondences, 6 divergences" summary to the repo README, or soften the site
   to "every backbone correspondence resolves." (Repo change, not a site change.)

## Needs your confirmation — PYRAMID (PyramidBridge.tsx)
10. **"Fewer than a quarter of MOD systems have automatically discoverable data and a third do
    not follow international standards"** (Data Strategy for Defence) — a specific, checkable
    stat with no link. Add a footnote/link or soften.
11. **"US DoD has mandated a foundational ontology baseline"** — broadly true but stated flatly.
    Add a citation.
12. **PYRAMID Technical Standard direct quotes** ("do not share interface definitions",
    "bridges to close the semantic gap") — anchor to a specific Def Stan 00-134 section so the
    verbatim-quote claim is checkable.

## Needs your action — Preprints (outward-facing, needs your account)
13. **FAIR preprint** is fully drafted and built (`fair-scientific-data/paper/preprint.md`, plus
    report.pdf/html). Ready to post to arXiv/bioRxiv — needs your account + go-ahead. I did not
    post it (irreversible, outward-facing).
14. **Nature preprint** is NOT yet preprint-ready. I built the first missing artifact this pass
    (`nature-security-risk/indicators/exposure-profile-bindings.csv`, 100 rows, 14 cascades,
    no fabricated values). Still to build before a preprint is honest: the early-warning-signal
    notebook (critical slowing down on one real ecosystem time series, e.g. Amazon NSR-11).
