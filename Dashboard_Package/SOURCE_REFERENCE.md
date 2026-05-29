# SOURCE REFERENCE — Where the data comes from

The dashboard reads numbers from the Findings markdown files (which are themselves sourced from the four Excel files below). This page documents the chain.

---

## Source Excel files (read-only — do not modify)

Located in `C:\Users\levid\OneDrive - FSC Consulting\Steinmueller\01_Data Recieved\`.

| # | File | Path | Size | Purpose |
|---|------|------|------|---------|
| 1 | `Mondi Piping Support and Valve Tracker Rev 16 (1).xlsx` | `20250525\` | 9.6 MB | Physical-progress register: supports, valves, welds, dated milestones |
| 2 | `Project Plan BL and Actual Info per Day - Effort - Task Level Rev1.xlsx` | `20250528\` | 12.2 MB | Planned vs Actual labour hours per WBS activity per day (Jan–Apr 2026) — **Rev1 supersedes Rev0** |
| 3 | `SW.200002 Mondi CFB Blr - Client Budget per Area.xlsm` | `20250525\` | 0.2 MB | Activity-level Rand budget + baseline dates |
| 4 | `SW200002 2026.XLSX` | `20250525\` | 52.5 MB | SAP CO actual cost line items, Dec 2024 – Apr 2026 |

### Reference cheat sheets (in `..\` parent folder)

| File | What it documents |
|------|-------------------|
| `..\Mondi_Tracker_Workbook_Breakdown_CL.md` | Tracker file structure — 18 sheets, columns, jargon |
| `..\Project Plan BL CL.md` | Project Plan file — leaf-vs-parent rule, daily window, Row 12 caveat |
| `..\Client_Budget CL.md` | Client Budget file — % Complete is Duration-based, ZAR currency confirmed |
| `..\SAP_CO_Cheat_Sheet.md` | SAP CO file — 109 columns, cost element groups, integration with Navision |
| `..\PM_Performance_Metrics.md` | Full metrics inventory across all four files |

### Findings files (the analytical source of truth)

| File | What it contains |
|------|------------------|
| `..\Findings_ActivitiesComponentsTrades.md` | Cluster A — A1 to A7 plus Assumptions and Data Quality |
| `..\Findings_SupervisorsStandingTime.md` | Cluster B — B1 to B8, Rev1-recomputed |

---

## Data chain for the dashboard

```
[ Source Excel files (4 files, ~74 MB total) ]
              │
              ▼  (Python extraction by Claude)
[ Findings markdown files (2 files) ]
              │
              ▼  (Levi confirms interpretations; this prompt set)
[ METRICS_DATA.md  ←—  read by the AI in Antigravity ]
              │
              ▼  (Antigravity builds)
[ dashboard/ folder: HTML/CSS/JS/JSON ]
              │
              ▼  (Drag onto Netlify)
[ Live dashboard URL — emailed to customer ]
```

---

## Confirmed interpretations (from client / Levi)

| Question | Confirmed answer |
|----------|------------------|
| Currency of "Budgeted Labor Cost" | ZAR (South African Rand) |
| Performance % Complete configuration in P6 | Duration-based, NOT physical |
| Row 12 interpretation in Rev1 | **Full-project total** (Interpretation B). 386,352 h includes pre-2026 labour not in daily detail. |
| Dashboard delivery mechanism | HTML / Netlify / email link |

---

## Parked / unresolved items (NOT blocking the MVP)

The following items are noted but explicitly out of scope for the first dashboard build:

1. Welder Stamp Number → Personnel Number lookup (would unlock named-welder view)
2. Pre-2026 daily-detail extract (would unlock full-project monthly burn-rate trend)
3. Activity Type suffix decoding (EDU / PTA / ANDI / MON DUF / LB / SB)
4. Original contract baseline vs Rev 03 re-baseline (matters for EoT but not for internal productivity view)

These should appear on the Methodology page as open questions, with a note that resolving them would expand specific charts.

---

## Open data quality questions to flag on Methodology page

These are observations the dashboard surfaces but cannot resolve internally:

1. **Why is 99.8% of SAP CO cost posted Dec 2025 – Apr 2026?** Project officially started 2024-08-05. Either the export is filtered to recent periods, or labour is being retrospectively booked. Confirm with Steinmüller finance.

2. **Why is Supervision 22.5% of trade ZAR?** Norm is 8–12%. Genuine high-supervision project, or classification artifact?

3. **Why does Rigging exceed Welding hours by 30%?** Anomalous for piping erection. Scope, sequencing, or design causes?

4. **Why is "No Budget Position" only R425?** Expected scope-creep marker, but barely used. What's the actual marker?

5. **Why are 13 of 16 numbered pressure systems at 0% support installation?** Sequencing decision, or a different cause?

These are the **forensic anchors** of the EoT case. The dashboard surfaces them; the commercial/legal team answers them.
