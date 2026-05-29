# PAGE SPECIFICATIONS — Mondi CFB Boiler Dashboard

Six pages plus a Methodology page accessible from the footer. Each page is described below in build order.

---

## Page 1 — Home (index.html)

**Purpose:** Executive summary. One scroll, no clutter. Surface the headline from each downstream page.

### Layout (top to bottom)

**Section 1: Title block**
- Project name: "Mondi CFB Boiler — Productivity & Delay Analysis"
- Subtitle: "SW.200002 · Steinmüller Africa · Richards Bay"
- "Data as of 2026-05-28"

**Section 2: 4 big KPI tiles, side by side**
| Tile | Value | Sub-label | Tier badge |
|------|-------|-----------|-----------|
| Physical % Complete | 19.8% | of planned units | T1 |
| Duration Elapsed | 74.62% | of planned schedule | T1 |
| **CPI** (Cost Performance Index) | **0.10** | 10c work per Rand spent | T1 |
| **SPI** (Schedule Performance Index) | **0.20** | at 20% of planned progress | T1 |

Visually: large numeric, smaller sub-label below. Each tile coloured by status (CPI 0.10 → red; SPI 0.20 → red).

**Section 3: SPI/CPI quadrant chart**
- 2x2 matrix with SPI on x-axis (0 to 1.5) and CPI on y-axis (0 to 1.5)
- Project plotted as a single dot at (0.20, 0.10) — lands in the bottom-left "Low/Low" quadrant
- Reference lines at SPI=1, CPI=1
- Tooltip on dot shows the calculation breakdown

**Section 4: Three "headline finding" cards (one per audit area)**
| Card | Headline | Sub-text | CTA |
|------|----------|----------|-----|
| **Welding** | 18.67 h per WDI | 2–3× industry benchmark of 6–10 h/WDI. Diagnosis: rework / cycle time. | "View Welding →" |
| **Rigging** | 130% of welding hours | Anomalous. Normal is 50–70%. Possible scope, sequencing, or design causes. | "View Rigging →" |
| **Supports** | 157d median delivery → fit lag | 1,634 supports delivered but never fitted. Largest standing-time exposure. | "View Supports →" |

**Section 5: Discipline ZAR pie chart**
- Pie of R82.2M discipline-attributed labour from the rollup table (G in METRICS_DATA.md)
- Sectors: Supervision 22.5%, Indirect 18.7%, Welding 14.4%, Rigging 10.6%, Boilermaking 9.2%, Pipe Fitting 8.9%, Mech Fitting 3.2%, Other 12.5%
- Click sector → goes to Welding/Rigging/Supervisors page or filters Trades view

**Section 6: Project-life time profile**
- Bar chart of SAP CO ZAR by month, 2024-12 to 2026-04
- Annotation flagging "99.8% of cost posted in last 5 months — pre-2026 gap unresolved" (Tier 2 caveat)

**Section 7: Methodology link block**
- "Every number on this dashboard is sourced and tiered. See Methodology for full citations and caveats."
- Link to methodology.html

---

## Page 2 — Welding (welding.html)

**Purpose:** Forensic deep-dive on welding productivity. Audience: commercial team building EoT case.

### Layout

**Hero KPI row (3 tiles)**
| KPI | Value | Tier |
|-----|------:|------|
| Hours per FDI | 13.44 | T1 |
| Hours per WDI | 18.67 | T1 |
| Welds completed | 6,384 of 12,761 (50.0%) | T1 |

**Chart 1: Hours per FDI vs benchmark band**
- Horizontal bar showing project at 13.44, with shaded benchmark band 6–8 (site) and 3–5 (workshop)
- Annotation: "2× over the high end of the site benchmark"
- Tier 1 badge

**Chart 2: First Pass Yield gauge**
- Semi-circle gauge showing current FPY
- Reference markers at 90% (problem), 95% (decent), 97% (world-class)
- Sub-text: "Each 1% drop in FPY ≈ 1.5–2× the labour for those welds"
- Tier 1 badge (computation must be done in data.js from tracker data)

**Chart 3: Workshop vs Site cycle times (grouped bar)**
- Three stages on x-axis (Cut→Fit, Fit→Weld, Weld→NDT)
- Two bars per stage (Workshop median, Site median)
- Y-axis: days (log scale to show the 5d site vs 0d workshop difference)
- Tooltip: median + p90 + max for each
- Tier 1 badge

**Chart 4: WDI progress curve (cumulative)**
- Line chart over time (Jan 2026–Apr 2026 or longer if data permits)
- Two lines: Cumulative Planned WDI (from Baseline New sheet), Cumulative Actual WDI (from Weld Tracking)
- Gap between the lines is the schedule variance in WDI
- Tier 1 badge

**Chart 5: Top 10 longest weld cycle times (table)**
- From Findings B3: SW-460.2 (365d Cut→Fit), SW-1125 (120d Fit→Weld), SW-1464 (96d Weld→NDT), etc.
- Columns: Weld No, Stage, Days, Site/Workshop, Date
- Each row clickable to drill (placeholder; the data may not exist yet but the UI should support it)
- Tier 1 badge

**Footer block: Diagnosis paragraph**
> "Welding is running at 18.67 hours per WDI — roughly 2× the high end of the industry benchmark. The most likely diagnosis is rework driven by NDT rejections (see First Pass Yield) compounded by a 5-day median Site Weld→NDT cycle that delays feedback to welders. Workshop welding cycle times are tight (median 0–2 days per stage), indicating welder skill is not the issue. The bottleneck is on site, in the rework/NDT loop."

---

## Page 3 — Rigging (rigging.html)

**Purpose:** Document the rigging anomaly and surface it for the EoT case.

### Layout

**Hero KPI row (3 tiles)**
| KPI | Value | Tier |
|-----|------:|------|
| Total rigging hours | 286,514 h | T1 |
| Total rigging cost | R8,733,681 | T1 |
| Rigging/Welding ratio | 130% | T1 |

**Chart 1: Rigging vs Welding hours bar comparison**
- Two horizontal bars: Welding (220,245h), Rigging (286,514h)
- Shaded reference band showing "Normal range: Rigging 50–70% of Welding"
- Annotation: "Rigging is 86% above the high end of normal"
- Tier 1 badge

**Chart 2: Top 10 rigging activities by Actual hour overrun**
- Horizontal bar chart
- Y-axis: activity names (truncated with full name on hover)
- X-axis: Actual − BL hours
- Each bar carries Activity ID
- Clickable to open detail panel showing supervisor, dates, etc.
- Tier 1 badge

**Chart 3: Rigging hours by month**
- Bar chart of rigging hours posted in SAP CO by month
- Reveals when the rigging burn rate spiked
- Tier 1 badge

**Section: The three EoT hypotheses**
Three side-by-side cards:
| Hypothesis | Test | Status |
|-----------|------|--------|
| **Scope change increased rigging demand** | Cross-check against variation register | Open — Steinmüller commercial to confirm |
| **Sequencing forced repeated rig/de-rig cycles** | Cross-check against construction diary | Open |
| **Heavy lifts beyond planned weight** | Cross-check against lift plans | Open |

**Section: Data Gap declaration (Gap badge)**
- Prominent grey card
- Title: "What we cannot compute"
- Body:
  > Hours per lift, hours per tonne rigged, crane utilisation %, heavy-lift vs routine-lift split, and idle rigging crew hours **cannot be derived from the available data**. No lift log, no per-lift tonnage record, and no crane operator hours sheet are present in any source file.
  >
  > This absence is itself a project-control finding. If the contract required these records, their absence is a project-control failure. If not, Steinmüller can argue Mondi did not require traceability for a high-cost trade.

**Footer diagnosis paragraph**
> "Rigging hours exceed welding hours by 30% — an anomaly inverted from normal piping projects where rigging is the support trade. Without per-lift records, the precise cause cannot be pinned down, but the magnitude itself is forensic evidence: an extra ~80,000 hours of rigging beyond the normal proportional band, with no productivity denominator to justify them."

---

## Page 4 — Supports (supports.html)

**Purpose:** Surface the standing-time bottleneck and document the EoT-relevant findings.

### Layout

**Hero KPI row (3 tiles)**
| KPI | Value | Tier |
|-----|------:|------|
| Supports delivered but never fitted | 1,634 (84%) | T1 |
| Median Delivery → Fit lag | 157 days | T1 |
| Primary Supports through NDT | 49 of 3,408 (1.4%) | T1 |

**Chart 1: Stage funnel — Secondary Steel**
- Funnel chart (or horizontal bar with decreasing widths): Delivered 1,957 → Fitted 242 → Welded 59 → VT 12 → NDT 4
- Drop-off % shown between each stage
- Each stage colour-coded by % of total (3,418 total supports)
- Tier 1 badge

**Chart 2: Stage funnel — Primary Support**
- Same shape: Fitted 402 → Welded 171 → VT 105 → NDT 49
- Tier 1 badge

**Chart 3: Stage funnel — Valves**
- Total 523 → Fitted 77 → Welded 60 → VT 30 → NDT 30
- Tier 1 badge

**Chart 4: Delivery → Fit lag distribution histogram**
- X-axis: lag days bins (0–30, 30–60, 60–90, 90–120, 120–150, 150–180, 180–210, 210+)
- Y-axis: count of supports in each bin
- Median (157.5d) and p90 (203d) marked with vertical reference lines
- Tier 1 badge

**Chart 5: Per-pressure-system heat map**
- 17 rows (Systems 1–16 plus None Assigned)
- 2 cells per row: Support % and Valve %
- Colour: red (0%) → amber (1–25%) → light green (25–50%) → green (50%+)
- System 3 highlighted as "the only live system"
- Tier 1 badge

**Chart 6: Per-medium % complete (top 20 mediums)**
- Horizontal stacked bar per medium
- Three layers: Supports % (red), Valves % (amber), Spools % (green)
- Allows visual comparison of which media are progressing and which aren't
- Tier 1 badge

**Footer diagnosis paragraph**
> "Workshop is producing supports faster than site can install them. 1,957 secondary-steel supports delivered, only 242 fitted (12% throughput). Of those fitted, only 4 have made it through NDT signoff (0.2% close-out). The median support sits on site 5 months between delivery and fitting. The bottleneck is unambiguously at site, not workshop — Workshop → Site delivery is essentially same-day (median 0 days). Pressure-test System 3 (Boiler HP) is the only system with material progress; 13 of 16 numbered systems are entirely cold."

---

## Page 5 — Supervisors (supervisors.html)

**Purpose:** Supervisor accountability. Who is delivering, who is not.

### Layout

**Hero KPI row (3 tiles)**
| KPI | Value | Tier |
|-----|------:|------|
| Day-shift PF | 1.331 | T1 |
| Night-shift PF | 1.571 | T1 |
| Total supervisors tracked | 13 Senior + 44 Jobsite | T1 |

**Section 1: Senior Supervisor table (cols 10+11)**
- All 14 Senior Supervisors listed
- Columns: Name, Activities, BL h, Actual h, PF, Shift (D/N/Both)
- PF cell colour-coded: red < 0.7, amber 0.7–0.95, neutral 0.95–1.5, green > 1.5
- Sortable on all columns
- Tier 1 badge

**Section 2: Supervisor (jobsite) table (cols 12+13)**
- Top 25 from METRICS_DATA section E.2
- Same columns and colour coding as Senior Supervisor
- Clicking a row drills into a supervisor detail panel showing their gap-day pattern
- Tier 1 badge

**Chart 3: Day vs Night shift comparison**
- Two-bar grouped chart: Day vs Night, with BL hours and Actual hours
- Annotation: "Both shifts in the same productivity band (PF 1.3–1.6). Earlier 'night 5× more productive' finding was a data anomaly — see Methodology."
- Tier 1 badge

**Chart 4: Gap-day attribution — top 10 supervisors**
- Stacked bar per supervisor: Weekend gap (light) + Weekday gap (dark) + Active days (green)
- Sorted by total Actual hours descending
- Tier 1 badge with caveat that weekends ≠ productivity loss

**Section: Supervisor disclosure block**
> "Productivity Factor (PF) = Baseline Effort ÷ Actual Effort. PF > 1 means actual hours are below baseline; PF < 1 means over. Supervisors with PF > 2 are flagged as possibly early-life (insufficient burn to judge). Supervisors with PF < 0.5 are flagged as significant under-performance, subject to scope-and-mix verification."

---

## Page 6 — Welders (welders.html)

**Purpose:** Welder-level performance ranking. Limited by Stamp Number ↔ Personnel Name gap.

### Layout

**Hero KPI row (3 tiles)**
| KPI | Value | Tier |
|-----|------:|------|
| Unique welder stamps in tracker | 134 | T1 |
| Stamp Number ↔ Personnel Name | **Bridge unavailable** | Gap |
| Project FPY | (computed value) | T1 |

**Section 1: Stamp Number data gap notice**
- Amber notice card at the top of the page
- Body:
  > Welder Stamp Numbers in the tracker do not bridge to Personnel Numbers in SAP CO. The 425 unique 7-digit Personnel Numbers in SAP CO show zero direct intersection with the 134 unique Stamp Numbers in the tracker. Welder-level analysis below is therefore by Stamp Number only — named-welder analysis is gated on Steinmüller providing the QA lookup table.

**Chart 2: Top 30 welders by WDI**
- Horizontal bar chart of WDI completed per Stamp Number
- Y-axis: Stamp Number (or pair like "2768, EC2395")
- X-axis: WDI
- Tier 1 badge

**Chart 3: Top 30 welders by FDI**
- Same shape, FDI denominator
- Tier 1 badge

**Chart 4: Welder FPY ranking**
- Horizontal bar chart of First Pass Yield per Stamp Number
- Reference lines at 90% / 95% / 97%
- Tier 1 badge

**Chart 5: Site vs Workshop split per welder**
- For top 30 welders, stacked bar: hours/welds done in workshop vs site
- Reveals welders specialising in one or the other vs flexible
- Tier 1 badge

**Section: Methodology block**
> "Stamp Number formats observed: integers (`2768`), strings (`L854`), paired (`2768, EC2395` = two welders worked together), and ranges (`2009-2308`). Pairs and ranges have been split per the methodology page. Welder-level numbers should be treated as cohort-level rather than individual until Steinmüller provides the Stamp Number → Personnel lookup."

---

## Methodology page (methodology.html)

Accessible from footer of every page. Body:

1. **What the dashboard is** — short statement
2. **Audit-tier framework** — explain Tier 1, Tier 2, Gap
3. **Source files** — list with dates and sizes
4. **Calculation methodology per metric** — for every KPI on the dashboard, the formula and the source cells
5. **Open questions for Steinmüller** — the four parked items plus any others
6. **Data quality issues observed** — list of 12 items from METRICS_DATA section H
7. **Revision history** — Rev0 vs Rev1 changes, MLAMBO correction, etc.

This page is dense text + tables. It does not need to be beautiful — it needs to be complete.

---

## Cross-page filters (top of every data page)

- Date range slider (defaulted to 2024-08 to 2026-04)
- Trade discipline multi-select (Welding / Rigging / Boilermaking / Pipe Fitting / Supervision / Indirect / Other)
- Pressure test system multi-select (Systems 1–16, None Assigned)
- Supervisor multi-select (where applicable)
- "Reset all filters" button

When a filter is set on one page and the user navigates to another, the filter persists in URL query params so the destination page reflects the same scope.

---

## Footer (every page)

```
Source data:
- Mondi Piping Support and Valve Tracker Rev 16 (2026-05-26)
- Project Plan BL and Actual Info Rev 1 (2026-05-28)
- SW.200002 Mondi CFB Blr — Client Budget per Area (2026-05-26)
- SW200002 2026 SAP CO Extract (2026-05-26)

Prepared by FSC Consultants. Data as of 2026-05-28.
Methodology: [Methodology] | Sources: [Source Reference]
```
