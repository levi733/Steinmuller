# Build Prompt — Mondi CFB Boiler Productivity Dashboard

**Paste this entire file as your initial prompt into Antigravity.**

---

## Your task

Build an **interactive HTML dashboard** that visualises the productivity, efficiency, and standing-time analysis for the Mondi Circulating Fluidised Bed (CFB) Boiler installation project executed by Steinmüller (project ID `SW.200002`) at Mondi's Richards Bay paper mill in South Africa.

The dashboard supports a forensic case for an **Extension of Time (EoT 2) claim** by Steinmüller. The audience is project management, commercial team, and legal advisors. The visual tone must be **forensic and professional** — not marketing. Every number must be traceable to source. Caveats must be visible. This is evidence.

The dashboard will be:
- **Static HTML** (no server, no database)
- **Deployed to Netlify**
- **Emailed to customer** as a link

---

## Project context (read before coding)

Steinmüller is the main piping contractor on Mondi's CFB Boiler installation. The project is significantly behind schedule and over budget. We have been engaged to:

1. Quantify productivity loss across **Welding, Rigging, and Supports** (the three target trades)
2. Identify supervisors and welders associated with that productivity loss
3. Surface the data forensically so it can support an EoT claim

The dashboard is the deliverable.

### Headline numbers to anchor the dashboard

| Project KPI | Value |
|-------------|------:|
| Project ID | SW.200002 |
| Project Name | Mondi CFB Blr — Execute — Rev03 |
| Contract start | 2024-08-05 |
| Current forecast finish | 2027-03-16 |
| Baseline finish | 2027-03-14 |
| Total Baseline Effort (BL) | 186,840 h |
| Total Actual Effort (full project, per Row 12) | 386,352 h |
| Actual Effort (Jan–Apr 2026 daily detail only) | 108,730 h |
| Physical % Complete (units-based) | **19.8%** |
| Duration % Elapsed | 74.62% |
| Total Project Cost (SAP CO line items) | R170,665,037 |
| Client Budget (labour) | R111,950,860 |
| **SPI** (Earned hrs ÷ Planned hrs) | **0.20** |
| **CPI** (Earned hrs ÷ Actual hrs, full project) | **0.10** |

> The CPI of 0.10 means: for every Rand of labour spent, only 10 cents of real work is being delivered. The project is in the worst quadrant of the SPI/CPI matrix.

---

## Pages required (six)

The dashboard must have **six distinct pages**, navigable via a top nav bar. Each page is detailed in `PAGE_SPECS.md`. Summary:

| # | Page | Purpose |
|---|------|---------|
| 1 | **Home** | Executive summary — project health KPIs, top-line CPI/SPI, key findings across the 6 pages |
| 2 | **Welding** | Tier-1 forensic metrics for welding — Hours per FDI, FPY, Workshop vs Site cycle time |
| 3 | **Rigging** | Tier-1 forensic metrics for rigging — Total hours/cost, top overrun activities, explicit data-gap statement |
| 4 | **Supports** | Tier-1 forensic metrics for supports — Stage funnel, Material→Fit lag, per-pressure-system heat map |
| 5 | **Supervisors** | Supervisor scorecard — PF ranking, day vs night, gap-day attribution |
| 6 | **Welders** | Welder ranking by WDI/FDI output and First Pass Yield (Stamp Number level) |

Plus a methodology / data quality page accessible via footer link.

---

## Read these files for the actual numbers

The numbers to populate every chart and KPI are documented in:

1. **`METRICS_DATA.md`** in this package — structured data for direct consumption
2. **`..\Findings_ActivitiesComponentsTrades.md`** — Cluster A findings (Activities, Components, Trades, Supports & Valves)
3. **`..\Findings_SupervisorsStandingTime.md`** — Cluster B findings (Standing Time, Supervisors)

**Do not invent numbers. Do not estimate. Every value in the dashboard must come from one of the source documents above.** If a number is not in those documents, do not put it in the dashboard.

---

## Technical requirements

### Stack

- **HTML5**, **CSS3** (vanilla or Tailwind utility classes — your choice), **vanilla JavaScript**
- **Chart.js** for all charts (CDN-hosted is fine for the MVP — no npm/build steps)
- **No framework** (no React, Vue, Svelte) — keep it static and deployable
- **No backend** — all data baked into JSON files in the build
- **No external API calls** — fully self-contained

### File structure

```
dashboard/
├── index.html              # Home page
├── welding.html
├── rigging.html
├── supports.html
├── supervisors.html
├── welders.html
├── methodology.html        # Data quality / sources / caveats
├── assets/
│   ├── css/
│   │   └── style.css       # Single shared stylesheet
│   ├── js/
│   │   ├── main.js         # Navigation, filters, shared interactions
│   │   ├── charts.js       # Chart construction helpers
│   │   └── data.js         # All numbers, exported as window.MONDI_DATA
│   └── img/
│       └── (logo placeholders if needed)
└── netlify.toml            # Netlify config (no special handling required)
```

### Deployment

The site must be deployable to Netlify by drag-and-drop of the `dashboard/` folder. No build step. No npm install. No environment variables.

---

## Visual design

Detailed style guide in `DESIGN_GUIDELINES.md`. Summary:

- **Colour palette:** dark slate / navy / cool grey base; muted accent (industrial blue or amber); red for "over budget / behind"; green sparingly for "on track"
- **Typography:** Inter (Google Fonts) for body and headings; tabular-figures variant for all numbers
- **Layout:** generous whitespace, 12-column grid, max content width ~1400 px
- **No emoji, no shadows on KPI cards beyond subtle, no animation beyond fade/hover transitions**
- **Print-friendly:** every page must print cleanly to A3 portrait or landscape for board pack inclusion
- **Footer on every page** with source-file reference and "Data as of 2026-05-28"

---

## Interactivity required

| Interaction | What it does |
|-------------|-------------|
| **Hover on any chart element** | Tooltip showing the exact value, the source file, and the cell reference where available |
| **Click on a bar / row** | Drill into the underlying detail (e.g. clicking a top-overrun activity opens its daily-effort curve, supervisor name, and slip days) |
| **Filter bar at top of each page** | Date range, trade discipline, pressure test system, supervisor (where applicable on each page) |
| **Cross-filtering** | Selecting a supervisor on Supervisors page → other pages show that supervisor's view when navigated to |
| **Export per chart** | A small "Export" button on each chart for PNG download |
| **Confidence badge per chart** | A small "Tier 1 / Tier 2 / Gap" label on each chart indicating data quality |
| **Source footer** | Every chart has a 1-line source citation: e.g. "Source: Tracker — Weld Tracking sheet cols 27, 56, 60. Filtered to 2024-08 to 2026-06." |

---

## Accuracy requirements (non-negotiable)

This dashboard supports an EoT claim. The opposing expert WILL try to discredit the numbers. Your build must:

1. **Every number traceable** to a source file and (where possible) cell reference
2. **Every chart carries a footnote** with the source citation
3. **Every chart carries a Tier badge** — Tier 1 (audit-grade), Tier 2 (caveated), Gap (cannot compute)
4. **Methodology page must be linkable from every chart** (clicking the Tier badge takes you there)
5. **Calculations performed once in `data.js`** — never recompute in chart code
6. **Round only at the display layer**, never in the data layer
7. **Show ranges, not just point estimates**, where the data has known uncertainty

If a metric cannot be computed reliably, show it as **a labelled gap on the dashboard with explanation** — do NOT omit it or fabricate.

---

## Tier badges to display on every chart

| Tier | Meaning | Visual |
|------|---------|--------|
| **Tier 1** | Audit-grade reliable. Both numerator and denominator are direct counts from source. | Solid green badge |
| **Tier 2** | Reliable with explicit caveat (data quality issue or methodology assumption). | Amber badge with hover note |
| **Gap** | Cannot be reliably computed from available data. The chart shows the gap itself. | Grey badge labelled "Data Gap" |

The badge is small (~12px text, padded chip) and sits in the top-right of every chart card.

---

## Footer (every page)

```
Source data:
- Mondi Piping Support and Valve Tracker Rev 16 (2026-05-26)
- Project Plan BL and Actual Info Rev 1 (2026-05-28)
- SW.200002 Mondi CFB Blr — Client Budget per Area (2026-05-26)
- SW200002 2026 SAP CO Extract (2026-05-26)

Prepared by FSC Consultants. Data as of 2026-05-28.
Methodology: see [Methodology] page.
```

---

## Three areas the dashboard must address forensically

These are not flexible. The dashboard exists primarily to surface these three things:

1. **Welding inefficiency** — at 18.67 h/WDI we are running at roughly 2–3× industry norm. The diagnosis is the headline.
2. **Rigging anomaly** — 30% more rigging hours than welding hours. Unusual; must be explained or claimed.
3. **Supports standing time** — 1,634 supports delivered but never fitted; 157-day median delivery-to-fit lag. The biggest standing-time exposure in the project.

Each gets its own page (Welding, Rigging, Supports). The Home page surfaces the headline from each.

---

## Output deliverable

When you're done, the deliverable is:

1. The complete `dashboard/` folder ready to drag onto Netlify
2. A short `BUILD_NOTES.md` documenting any decisions you had to make
3. A list of any data gaps or ambiguities you encountered

**Do not gold-plate beyond what's specified.** Beauty matters but utility wins. The dashboard must be:

- Beautiful (clean, restrained, professional)
- Interactive (hover, click, filter, cross-link)
- Accurate (every number sourced, Tier-badged, footnoted)

Start by reading `METRICS_DATA.md`, `PAGE_SPECS.md`, `DESIGN_GUIDELINES.md`, and the two Findings files in the parent folder. Then begin building.
