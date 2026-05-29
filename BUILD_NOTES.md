# Build Notes - Mondi CFB Boiler Dashboard

## Deliverable

Created `dashboard/` as a static HTML/CSS/JS site. It is ready for Netlify drag-and-drop deployment and requires no build step, no npm install, and no environment variables.

## Implementation decisions

- Used vanilla HTML/CSS/JavaScript with Chart.js loaded from CDN, per the MVP requirement.
- Centralised all project numbers in `dashboard/assets/js/data.js`. Chart code reads from this object and only formats values for display.
- Built shared rendering and interactions in `dashboard/assets/js/main.js` so each page uses the same nav, filters, footer, tier badges, chart export, table drill-down, and source citations.
- Kept visual styling restrained: dark slate surface, forensic red/amber/green status colours, bordered cards, no decorative imagery, and print-friendly CSS.
- Used URL query parameters for cross-page filter persistence. Where source data does not support a reliable Jan-Apr split by the selected filter, the page displays an explicit scope note.

## Data gaps and ambiguities encountered

- Planned-vs-actual WDI curve: `METRICS_DATA.md` identifies the `Baseline New` source sheet but does not provide the daily curve values. The Welding page shows this as a labelled data gap.
- Rigging-only monthly hours: the findings provide Jan-Apr project-level SAP monthly cost, not rigging-only monthly hours.
- Rigging productivity denominators are missing: no lift log, no tonnage log, no crane utilisation, no heavy-lift classification, and no idle rigging crew split.
- Supports Jan-Apr measures: the source pack does not provide Jan-Apr-only support funnels, pressure-system readiness, per-medium completion, or delivery-to-fit lag values. The Supports page shows this as a labelled data gap.
- Stamp Number to Personnel Name bridge: unavailable in source data. Welder page remains stamp-level only.
- Stamp-level Jan-Apr rankings: the source pack does not provide Jan-Apr-only WDI, FDI, and FPY rankings. The Welders page shows this as a labelled data gap.

## Verification pass

- The dashboard was re-scoped so visible metrics and chart data are restricted to Jan-Apr 2026 where the source pack supports that window.
- Components without Jan-Apr-only values were removed from the dashboard data layer and rendering code.
- JavaScript syntax checks passed for the dashboard data, chart, and UI files after the scope cleanup.
