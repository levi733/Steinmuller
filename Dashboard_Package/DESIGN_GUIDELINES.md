# DESIGN GUIDELINES — Mondi CFB Boiler Dashboard

The visual language is forensic and professional. The audience includes commercial teams, project managers, and legal advisors. The dashboard is evidence; it must look credible.

---

## Visual tone

- **Restrained, not flashy.** No marketing language, no celebratory colours, no animations beyond subtle transitions.
- **Numbers-first.** The eye should go to the data, not the chrome.
- **Generous whitespace.** Crowded layouts erode credibility.
- **Print-friendly.** Every page must print cleanly to A3 portrait or landscape. Avoid backgrounds that swallow ink.

---

## Colour palette

### Primary palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Base / page background | `--bg` | `#0F172A` (slate-900) | Page background, all pages |
| Surface / card background | `--surface` | `#1E293B` (slate-800) | KPI cards, chart containers |
| Surface elevated | `--surface-2` | `#334155` (slate-700) | Hover states, modal backgrounds |
| Border / divider | `--border` | `#475569` (slate-600) | All horizontal rules and card borders |
| Text primary | `--text` | `#F1F5F9` (slate-100) | Body text |
| Text secondary | `--text-muted` | `#94A3B8` (slate-400) | Sub-labels, footnotes |
| Text tertiary | `--text-faint` | `#64748B` (slate-500) | Disabled, references |

### Accent palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Primary accent | `--accent` | `#2563EB` (blue-600) | Brand colour, primary CTAs, headline KPIs |
| Accent hover | `--accent-hover` | `#1D4ED8` (blue-700) | Hover states |
| Accent tint | `--accent-tint` | `#3B82F6` (blue-500) | Chart fill, lighter accent |

### Status palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Status: critical / over budget | `--danger` | `#DC2626` (red-600) | CPI/SPI < 0.5, NDT rejects, behind schedule |
| Status: warning | `--warning` | `#D97706` (amber-600) | CPI/SPI 0.5–0.9, Tier 2 badges, caveats |
| Status: nominal | `--ok` | `#059669` (emerald-600) | On track, Tier 1 badges, completed |
| Status: neutral / gap | `--neutral` | `#64748B` (slate-500) | Data Gap badges, "not started" |

### Discipline palette (pie/bar charts)

For consistency across discipline charts (Trade rollup, etc.):

| Discipline | Hex |
|-----------|-----|
| Supervision | `#8B5CF6` (violet-500) |
| Indirect | `#64748B` (slate-500) |
| Welding | `#DC2626` (red-600) — visually associates with weld/heat |
| Rigging | `#D97706` (amber-600) |
| Boilermaking | `#0891B2` (cyan-600) |
| Pipe Fitting | `#2563EB` (blue-600) |
| Mech Fitting | `#059669` (emerald-600) |
| Other | `#475569` (slate-600) |

---

## Typography

### Font family

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
font-feature-settings: 'tnum' 1; /* tabular figures for all numbers */
```

Load Inter from Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Type scale

| Role | Size | Weight | Use |
|------|-----:|-------:|-----|
| Display | 48px | 700 | Page title, single biggest KPI on Home |
| KPI numeric | 36px | 700 | KPI tile main values |
| H1 | 28px | 600 | Page-section titles |
| H2 | 20px | 600 | Card titles |
| H3 | 16px | 600 | Sub-section titles |
| Body | 14px | 400 | Body text |
| Small | 12px | 400 | Footnotes, captions, source citations |
| XS | 11px | 500 | Tier badges, axis labels |

### Numbers

- All numeric displays MUST use tabular figures (`font-feature-settings: 'tnum'`)
- Thousand separators: comma (`R170,665,037`)
- Decimal: full stop (`18.67`)
- Negative numbers: minus sign, NOT parentheses (consistency with engineering convention)
- Currency: prefix `R` (no decimals for amounts >R1,000)
- Percentages: one decimal place by default (`19.8%`), no decimal for whole-number percentages on KPI tiles
- Hours: suffix ` h` (space before)
- Days: suffix ` d` or ` days` (use full word in narrative, ` d` in tables)

---

## Layout

### Grid

- Max content width: `1400px`
- Container padding: `32px` desktop, `16px` mobile
- 12-column grid with `24px` gutters
- KPI tiles: 4-column wide each on desktop (3 across), full-width on mobile

### Spacing scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

### Card pattern

Every chart, KPI, and content block sits in a "card":

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  /* No box-shadow. Borders only. */
}
```

### Page header

```
[Brand bar — 56px tall, sticky]
[Page title block — 96px tall]
[Filter bar — 64px tall, sticky when scrolling]
[Page content]
[Footer — natural height]
```

---

## Components

### KPI tile

```
+---------------------------------+
| LABEL (small, uppercase, muted) |
|                                 |
|     VALUE (display size)        |
|                                 |
| Sub-label / context (small)     |
|                          [T1]   | ← tier badge bottom-right
+---------------------------------+
```

Status colour applied to the VALUE only — never the whole card background.

### Tier badge

Small chip, 11px text, padded:

| Tier | Background | Text colour | Hover behaviour |
|------|-----------|-------------|-----------------|
| T1 | `--ok` (emerald-600) | white | tooltip: "Tier 1 — Audit-grade reliable. Direct source counts." |
| T2 | `--warning` (amber-600) | slate-900 | tooltip: "Tier 2 — Reliable with caveat. [specific caveat]" |
| Gap | `--neutral` (slate-500) | white | tooltip: "Data Gap — Cannot be computed from available sources." |

Click anywhere on a badge → opens the Methodology page section relevant to that metric.

### Chart container

Every chart is wrapped in a card. The card has:

- Top: chart title (H2) + Tier badge (top-right)
- Middle: chart itself (Chart.js canvas)
- Bottom: 1-line source citation in `--text-faint` (e.g. "Source: Tracker — Weld Tracking sheet, cols 56, 60, 27. n=12,761 welds.")

### Source citations

Format: `Source: [Source file] — [Sheet/section] [columns or row reference]. [Optional filter/scope.]`

Examples:
- "Source: Tracker — Weld Tracking, cols 27/56/60. n=12,761 welds."
- "Source: Project Plan Rev1 — leaf activities only. Window: 2026-01-01 to 2026-04-30."
- "Source: SAP CO — Project Definition = SW.200002. n=120,501 line items."

---

## Charts (Chart.js)

### Global Chart.js defaults

```javascript
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#94A3B8'; // slate-400
Chart.defaults.borderColor = '#475569'; // slate-600
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.labels.boxWidth = 12;
Chart.defaults.plugins.tooltip.backgroundColor = '#0F172A';
Chart.defaults.plugins.tooltip.borderColor = '#475569';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.titleFont = { weight: 600 };
Chart.defaults.plugins.tooltip.bodyFont = { weight: 400 };
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;
```

### Chart-specific guidelines

- **Bar charts:** Horizontal preferred for category lists (better label readability)
- **Pie/doughnut:** Use only for proportional rollups (e.g. discipline split). Never for top-N rankings — use bar instead.
- **Line charts:** Always include the planned-vs-actual pair when showing time series
- **Heat maps:** Custom HTML grid, NOT Chart.js — Chart.js heat maps are limited
- **Funnel charts:** Custom HTML/CSS — Chart.js doesn't support natively. Use a series of trapezoidal divs.
- **Gauges:** Use Chart.js doughnut chart with `circumference: 180, rotation: 270` for semi-circle gauges

### Tooltip pattern

Every chart tooltip shows:
1. Category / data point label (bold)
2. Value
3. Source reference (small, muted)

Example:
```
Welder Stamp 2768
WDI: 1,247
FDI: 1,732
Source: Tracker col 27, n=172 welds
```

---

## Interactions

| Interaction | Where | Behaviour |
|-------------|-------|-----------|
| Hover on chart element | Any chart | Tooltip with value + source |
| Hover on KPI tile | Any KPI | Tooltip with formula + source |
| Click on chart bar/row | Bar charts, tables | Open drill-down panel |
| Click on Tier badge | Any chart card | Open Methodology page anchored to that metric |
| Click on discipline in pie chart | Home page | Navigate to relevant page (Welding/Rigging/etc) |
| Filter selection | Top filter bar | Persist in URL query params; affect all charts on that page |
| Page navigation | Top nav | Persist filters via query params |
| Export chart | Hover top-right of chart card | Download PNG of canvas |

### Animation budget

- Page-load fade-in: 200ms ease-out, opacity 0→1, all cards
- Chart bar grow: Chart.js default (use `animation.duration = 400`)
- Hover transitions: 150ms ease
- **No bouncing, no parallax, no auto-scrolling, no carousel rotation.**

---

## Accessibility

- Colour contrast minimum 4.5:1 for body text, 3:1 for large text
- Status colours must never be the only indicator (e.g. red bar must also have an icon or text)
- All charts must have a `<table>` data-fallback for screen readers (hidden visually, accessible to AT)
- Keyboard navigation: Tab through KPI tiles → filters → charts → footer
- Skip-to-content link at top of every page

---

## Mobile / responsive

- Breakpoint: `768px` (tablet), `480px` (mobile)
- KPI tiles stack vertically below 768px
- Filter bar collapses to a "Filters" button below 768px that opens a panel
- Charts maintain aspect ratio with `maintainAspectRatio: false` and explicit container height
- Tables become horizontally scrollable below 768px
- No mobile-only features — full functionality at all breakpoints

---

## Footer (every page)

```html
<footer>
  <div class="footer-sources">
    <strong>Source data:</strong>
    <ul>
      <li>Mondi Piping Support and Valve Tracker Rev 16 (2026-05-26)</li>
      <li>Project Plan BL and Actual Info Rev 1 (2026-05-28)</li>
      <li>SW.200002 Mondi CFB Blr — Client Budget per Area (2026-05-26)</li>
      <li>SW200002 2026 SAP CO Extract (2026-05-26)</li>
    </ul>
  </div>
  <div class="footer-meta">
    Prepared by FSC Consultants. Data as of 2026-05-28.<br>
    <a href="methodology.html">Methodology</a> · <a href="methodology.html#sources">Source Reference</a>
  </div>
</footer>
```

Footer text: `--text-muted`, 12px, 1.6 line height, full-width with max-width container.

---

## What NOT to do

- No emoji in the UI
- No celebratory colours (gold, neon green)
- No 3D effects, drop shadows beyond 1–2px subtle
- No animation that distracts from data
- No image backgrounds
- No carousel rotation of charts
- No auto-play of anything
- No "Loading..." spinners — the dashboard is static; data is baked in
- No external API calls — fully self-contained
- No tracking pixels or analytics scripts unless explicitly requested
