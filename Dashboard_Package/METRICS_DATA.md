# METRICS DATA — All Numbers for the Dashboard

**Every number in the dashboard must come from this file (or the linked Findings files). Do not invent. Do not estimate. If a value isn't here, it isn't on the dashboard.**

All numbers are observed-and-computed from the source files. Tier ratings indicate forensic-audit confidence.

---

## A. Project headline KPIs (Home page)

| KPI | Value | Tier | Source |
|-----|------:|------|--------|
| Project ID | SW.200002 | T1 | All files |
| Contract start | 2024-08-05 | T1 | Client Budget col D R2 (Actual) |
| Current forecast finish | 2027-03-16 | T1 | Client Budget col E R2 |
| BL finish | 2027-03-14 | T1 | Client Budget col I R2 |
| Total Baseline Effort | 186,840 h | T1 | Project Plan Rev1 Row 12 |
| Total Actual Effort (full project) | 386,352 h | T1 | Project Plan Rev1 Row 12 (Interpretation B confirmed by client) |
| Actual Effort Jan–Apr 2026 (daily detail) | 108,730 h | T1 | Project Plan Rev1 leaf sum |
| Physical % Complete (Qty-based) | 19.8% | T1 | Tracker Dashboard sheet (31,712 of 160,139) |
| Duration % Elapsed | 74.62% | T1 | Client Budget col G R2 (Duration-based, not physical) |
| Project Cost (SAP CO line items, SW.200002 only) | R170,665,037 | T1 | SAP CO filtered to Project Definition = SW.200002 |
| Client Budget (labour) | R111,950,860 | T1 | Client Budget col F R2 |
| Earned hours | ≈ 37,000 h | T1 | 19.8% × 186,840 h |
| **SPI** (Earned ÷ Planned hrs) | **0.20** | T1 | 37,000 ÷ 186,840 |
| **CPI** (Earned ÷ Actual hrs, full project) | **0.10** | T1 | 37,000 ÷ 386,352 |
| CPI (Jan–Apr 2026 window only) | 0.34 | T1 | 37,000 ÷ 108,730 |
| Days slipped at project level | 2 days (apparent) | T2 | 2027-03-16 vs 2027-03-14. Suspect — see Methodology. |

---

## B. Welding page

### B.1 Tier-1 metrics

| Metric | Value | Source |
|--------|------:|--------|
| Total welding hours (SAP CO, all WELDER trades) | 220,245 h | SAP CO disciplines: WELDER A LB EDU + WELDER A SB EDU + WELDER CLADDING EDU |
| Total welding cost | R11,858,488 | Same |
| Total WDI completed | 11,798.2 | Tracker Weld Tracking col 56 sum |
| Total FDI completed | 16,389.2 | Tracker Weld Tracking col 61 sum |
| Total welds completed (count) | 6,384 | Tracker Weld Tracking col 57 sum |
| Total weld budget (target) | 12,761 welds / 23,250 WDI | Tracker Dashboard |
| **Hours per WDI** | **18.67** | 220,245 ÷ 11,798 |
| **Hours per FDI** | **13.44** | 220,245 ÷ 16,389 |
| Industry benchmark Hours per FDI (site) | 6–8 h/FDI | Industry rule of thumb (Mechanical Contractors Assn) |
| Industry benchmark Hours per FDI (workshop) | 3–5 h/FDI | Same |
| **Hours per FDI vs benchmark verdict** | **2× over** | — |
| Rand per WDI | R1,005 | 11,858,488 ÷ 11,798 |
| Rand per FDI | R724 | 11,858,488 ÷ 16,389 |
| % complete by WDI | 50.7% | 11,798 ÷ 23,250 |
| % complete by weld count | 50.0% | 6,384 ÷ 12,761 |

### B.2 First Pass Yield (FPY) — to be computed from tracker

Methodology: For each weld row in `Weld Tracking` where any NDT outcome column (32 site Accept, 34 site Reject, 44 W/S Accept, 46 W/S Reject) is populated, classify:
- **First-pass accept** = Accept populated AND Reject not populated
- **Reject (rework)** = Reject populated

FPY = first-pass-accepts ÷ (first-pass-accepts + rejects)

| FPY band | Diagnosis |
|----------|-----------|
| > 97% | World-class. Productivity issues NOT due to rework. |
| 95–97% | Decent. Productivity issues elsewhere (waiting, materials). |
| 90–95% | Procedural issues (WPS adherence, fit-up quality, material prep). |
| < 90% | Systemic problem. Training, supervision, or upstream fit-up. |

Display: KPI tile with current FPY, benchmark band markers, and a per-month trend line.

### B.3 Cycle times (Workshop vs Site, Weld → NDT)

| Stage | Workshop median | Workshop p90 | Site median | Site p90 |
|-------|----------------:|-------------:|------------:|---------:|
| Cut → Fit | 1 d | 7 d | 0 d | 1 d |
| Fit → Weld | 2 d | 7 d | 0 d | 5 d |
| **Weld → NDT** | **0 d** | **0 d** | **5 d** | **37 d** |

Worst observed: Site Weld → NDT max 96 d (SW-1464, 2025-10-15 to 2026-01-19). 100 site welds had >30 d cycle.

### B.4 Project welding completion vs Baseline

Tracker `Baseline New` sheet has the planned daily welds per medium. Compare cumulative actual vs cumulative planned curves. Source: Tracker Baseline New sheet rows 3+ (40 mediums × 555 daily columns starting 2025-03-17).

---

## C. Rigging page

### C.1 Tier-1 metrics

| Metric | Value | Source |
|--------|------:|--------|
| Total rigging hours | 286,514 h | SAP CO: RIGGER 5 EDU (266,360h) + RIGGER 4 EDU (17,405h) + minor buckets (2,749h) |
| Total rigging cost | R8,733,681 | Same |
| Rigging % of trade hours | 15.2% | Per discipline rollup |
| Rigging % of trade ZAR | 10.6% | Per discipline rollup |
| Welding hours (for comparison) | 220,245 h | See section B |
| **Rigging-to-welding hour ratio** | **130%** | 286,514 ÷ 220,245 |
| Normal benchmark | 50–70% | Industry rule of thumb |
| **Anomaly verdict** | **Rigging is 86% above the high end of normal** | — |
| Rigging activities in schedule (Project Plan Rev1) | 258 leaf activities | Filter Activity Name contains "rig" or "rigger" |

### C.2 Top 10 rigging activities by Actual hour overrun

From Findings A1, these rigging-related activities appear in the overall top-overrun list:

| Activity ID | Name | BL hrs | Actual hrs | Overrun |
|-------------|------|-------:|----------:|--------:|
| 9JG7LG56AP | Rig Hood & Boiler Grid A1 & A2 into Position | 4.8 | 716.0 | +711.2 |
| 9JG7LG56AO | Preparation to Rig Hood & Boiler Grid A | 0.0 | 563.5 | +563.5 |
| 9JG7LG56UG | Lifting Front Wall in Final Position | 102.6 | 604.0 | +501.4 |
| 1JG7JUQ | 160) Cyclone — Hangers Rods Installation | 239.9 | 735.5 | +495.6 |
| 9JG7LG57XQ | Rig Spools & Valve Into Position per Lines | (varies) | (varies) | (see Findings) |

A complete top-10 needs to be extracted from the Project Plan Rev1 file filtered to activities containing rigging keywords. The Findings file has the cross-trade top-20; the rigging-only subset must be derived. This is a Tier-1 computation given the keyword filter is straightforward.

### C.3 Explicit data gap statement (must appear prominently)

**Cannot be computed from available data:**
- Hours per lift (no lift log)
- Hours per tonne rigged (no tonnage log)
- Crane utilisation % (no crane operator hours)
- Heavy-lift vs routine-lift split (no classification)
- Idle rigging crew hours (not separable from booked hours)

**Why this matters for the EoT case:** The absence of these logs is itself a project-control finding. Steinmüller's contractual record-keeping requirements should be checked — if rigging logs were required, their absence is a project-control failure. If they were not required, Steinmüller can argue Mondi did not require traceability for a high-cost trade.

---

## D. Supports page

### D.1 Tier-1 metrics

| Metric | Value | Source |
|--------|------:|--------|
| Total supports in scope | 3,418 | Tracker Supports sheet count |
| Primary Supports installed (NDT done) | 49 (1.4%) | Tracker col AJ |
| Primary Supports welded | 171 (5.0%) | Tracker col AF |
| Primary Supports fitted | 402 (11.8%) | Tracker col AD |
| Secondary Steel delivered | 1,957 (57.3%) | Tracker col S (value=1) |
| Secondary Steel fitted on site | 242 (7.1%) | Tracker col V |
| Secondary Steel welded | 59 (1.7%) | Tracker col X |
| Secondary Steel VT'd | 12 (0.4%) | Tracker col Z |
| Secondary Steel NDT'd | 4 (0.1%) | Tracker col AB |
| **Supports delivered but never fitted** | **1,634 (84% of delivered)** | 1,957 − (242+82 already counted as fitted, take only intersection) — see Findings B2 |
| **Median Delivery → Fit lag (Secondary Steel)** | **157.5 days** | Findings B2 |
| Median Delivery → Fit lag (Primary Support) | 114 days | Findings B2 |
| p90 Delivery → Fit lag (Secondary Steel) | 203 days | Findings B2 |
| Max Delivery → Fit lag (Secondary Steel) | 213 days | Findings B2 |
| Workshop → Site delivery lag median | 0 days | Findings B1 (97.7% same-day) |

### D.2 Stage funnel — Secondary Steel

| Stage | Count | % of 3,418 | Drop-off vs prior |
|-------|------:|-----------:|------------------:|
| Delivered | 1,957 | 57.3% | — |
| Fitted | 242 | 7.1% | −87.6% |
| Welded | 59 | 1.7% | −75.6% |
| VT | 12 | 0.4% | −79.7% |
| NDT | 4 | 0.1% | −66.7% |

### D.3 Stage funnel — Primary Support

| Stage | Count | % of 3,418 | Drop-off vs prior |
|-------|------:|-----------:|------------------:|
| Fitted | 402 | 11.8% | — |
| Welded | 171 | 5.0% | −57.5% |
| VT | 105 | 3.1% | −38.6% |
| NDT | 49 | 1.4% | −53.3% |

### D.4 Stage funnel — Valves

| Stage | Count | % of 523 |
|-------|------:|---------:|
| Total | 523 | 100% |
| Fitted | 77 | 14.7% |
| Welded | 60 | 11.5% |
| VT | 30 | 5.7% |
| NDT | 30 | 5.7% |

### D.5 Per-pressure-system readiness (Supports + Valves)

| System | Description | Sup Total | Sup Done | Sup % | Val Total | Val Done | Val % |
|--------|-------------|----------:|---------:|------:|----------:|---------:|------:|
| 1 | FW Inlet incl. FW tank | 34 | 2 | 5.9% | 13 | 0 | 0.0% |
| 2 | FW pump discharge | 79 | 25 | 31.6% | 44 | 7 | 15.9% |
| **3** | **Boiler HP part (ECO inlet)** | **830** | **116** | **14.0%** | **124** | **49** | **39.5%** |
| 4 | Sootblower | 33 | 0 | 0.0% | 7 | 2 | 28.6% |
| 5 | Low Pressure Steam | 88 | 0 | 0.0% | 45 | 0 | 0.0% |
| 6 | Demin water / Condensate | 26 | 0 | 0.0% | 8 | 0 | 0.0% |
| 7 | Cold demin water | 84 | 0 | 0.0% | 0 | 0 | — |
| 8 | Secondary Cooling Water | 69 | 0 | 0.0% | 10 | 0 | 0.0% |
| 9 | Cooling water (pump disch) | 15 | 0 | 0.0% | 12 | 0 | 0.0% |
| 10 | Cooling water (after 285-7388) | 44 | 0 | 0.0% | 6 | 0 | 0.0% |
| 11 | SNCR injection | 206 | 0 | 0.0% | 0 | 0 | — |
| 12 | Heavy fuel oil filling | 1 | 0 | 0.0% | 0 | 0 | — |
| 13 | Heavy fuel oil piping | 51 | 0 | 0.0% | 0 | 0 | — |
| 14 | Diesel oil piping | 51 | 0 | 0.0% | 0 | 0 | — |
| 15 | Process Air | 305 | 0 | 0.0% | 48 | 0 | 0.0% |
| 16 | Instrument Air | 452 | 0 | 0.0% | 90 | 0 | 0.0% |
| — | None Assigned | 1,040 | 28 | 2.7% | 94 | 2 | 2.1% |

### D.6 Per-medium completion (Supports + Valves + Spools)

Source: Tracker Summary sheet. 43 mediums. Headline values:
- Boiler Water: Supports 65/331 (19.6%), Valves 8/26 (30.8%), Spools 359/589 (61.0%)
- Condensate: Supports 11/449 (2.4%), Valves 20/49 (40.8%), Spools 419/676 (62.0%)
- Feed Water: Supports 58/286 (20.3%), Valves 17/77 (22.1%), Spools 214/361 (59.3%)
- Live steam: Supports 13/118 (11.0%), Valves 5/23 (21.7%), Spools 81/116 (69.8%)
- Steam: Supports 24/338 (7.1%), Valves 10/51 (19.6%), Spools 109/441 (24.7%)
- (And 38 others — most at 0% supports)

---

## E. Supervisors page

### E.1 Senior Supervisor (cols 10 + 11)

14 unique. Sorted by Actual hours descending.

| Supervisor | Activities | BL h | Actual h | PF | Shift |
|-----------|----------:|-----:|---------:|---:|:-----:|
| BOTHA, EUGENE | 16 | 46,975 | 24,870 | 1.889 | N |
| LUDEWICK, NEVILLE | 9 | 40,371 | 19,827 | 2.036 | D |
| KEMP, JOHANNES | 1,384 | 8,529 | 8,140 | 1.048 | D |
| VAN DYK, MARTHINUS | 350 | 8,075 | 5,326 | 1.516 | D |
| SILOMBO, MANDLA | 8 | 2,843 | 4,526 | 0.628 | D |
| DE JAGER, SAMUEL | 23 | 2,168 | 3,606 | 0.601 | D/N |
| GUN, UGUR | 504 | 4,102 | 3,567 | 1.150 | D/N |
| KONING, JETHRO | 3 | 1,150 | 1,516 | 0.758 | D |
| SMUTS, ARRIE | 618 | 157 | 730 | 0.215 | D/N |
| Mondi, Contractor | 465 | 613 | 103 | 5.930 (placeholder) | D/N |

### E.2 Supervisor (cols 12 + 13) — top 25, Rev1 deduplicated

| Rank | Supervisor | Activities | BL h | Actual h | PF | Shift |
|----:|-----------|----------:|-----:|---------:|---:|:-----:|
| 1 | MALEKA, SHOROANE | 114 | 32,920 | 18,310 | 1.798 | D/N |
| 2 | SHABALALA, SAKHILE | 558 | 23,564 | 11,839 | 1.990 | D |
| 3 | LOWIESCH, ROWAN | 30 | 12,895 | 9,539 | 1.352 | D/N |
| 4 | MOTHA, KENNETH | 79 | 10,594 | 8,398 | 1.261 | D/N |
| 5 | WILLIAMS, LEESTON | 102 | 7,374 | 7,519 | 0.981 | D |
| 6 | KONING, JETHRO | 210 | 9,184 | 6,468 | 1.420 | D/N |
| 7 | MLAMBO, MANDLA | 379 | 5,125 | 6,022 | 0.851 | D/N |
| 8 | MTHOMBENI, BEN | 4 | 11,474 | 5,784 | 1.984 | D |
| 9 | STANLEY, FRANS | 67 | 6,352 | 4,592 | 1.383 | D |
| 10 | MOLOI, SAKHILE | 97 | 3,601 | 4,494 | 0.801 | D/N |
| 11 | PHORA, DENIS | 42 | 8,527 | 4,412 | 1.932 | D |
| 12 | RATAU, JOSAYA | 283 | 4,085 | 4,325 | 0.944 | D/N |
| 13 | MASHILOANE, JACKSON | 35 | 1,619 | 4,078 | 0.397 | D |
| 14 | CHRISTISON, LEON | 42 | 4,873 | 2,824 | 1.726 | D |
| 15 | MUKOSERA, BENSON | 8 | 2,490 | 2,460 | 1.013 | D |
| 16 | VAN DYK, MARTHINUS | 34 | 875 | 2,288 | 0.382 | D |
| 17 | LUDEWICK, NEVILLE | 17 | 2,308 | 2,034 | 1.134 | D/N |
| 18 | MATHONSI, ENOS | 179 | 1,927 | 1,950 | 0.988 | D |
| 19 | MOKABANE, MOTHOGWAME | 103 | 1,752 | 1,797 | 0.975 | D/N |
| 20 | DORKIN, LINDROOI | 11 | 2,398 | 1,650 | 1.454 | D |
| 21 | TLADI, MAPHALE | 224 | 2,468 | 1,546 | 1.597 | D |
| 22 | JAPPIE, YUSRI | 32 | 2,730 | 1,306 | 2.090 | D |
| 23 | MCDONALD, JEREMY | 143 | 840 | 1,276 | 0.658 | D |
| 24 | BOTHA, ERNST | 55 | 774 | 1,046 | 0.740 | D |
| 25 | SHEKWA, JOHN SIFSO | 318 | 858 | 722 | 1.189 | D/N |

### E.3 Day-shift vs Night-shift (Rev1)

| Shift | Activities | BL h | Actual h | PF |
|-------|----------:|-----:|---------:|---:|
| Day (cols 10+12) | 5,120 | 122,481 | 92,007 | 1.331 |
| Night (cols 11+13) | 567 | 55,611 | 35,409 | 1.571 |
| Both shifts (overlap) | 566 | — | — | — |

### E.4 Gap-day attribution — top 10 supervisors (Rev1)

| Rank | Supervisor | Matched | Qual ≥5d | Window | Gap | Gap% | Wknd | Actual h |
|----:|-----------|--------:|---------:|------:|----:|-----:|-----:|---------:|
| 1 | MALEKA, SHOROANE | 114 | 13 | 856 | 431 | 50.4% | 43% | 18,310 |
| 2 | SHABALALA, SAKHILE | 558 | 9 | 662 | 390 | 58.9% | 38% | 11,839 |
| 3 | LOWIESCH, ROWAN | 30 | 15 | 703 | 463 | 65.9% | 35% | 9,539 |
| 4 | MOTHA, KENNETH | 79 | 11 | 451 | 313 | 69.4% | 35% | 8,398 |
| 5 | WILLIAMS, LEESTON | 102 | 16 | 352 | 208 | 59.1% | 38% | 7,519 |
| 6 | KONING, JETHRO | 210 | 9 | 435 | 290 | 66.7% | 36% | 6,468 |
| 7 | MLAMBO, MANDLA | 379 | 34 | 1,653 | 1,420 | 85.9% | 31% | 6,022 |
| 8 | MTHOMBENI, BEN | 4 | 3 | 291 | 170 | 58.4% | 41% | 5,784 |
| 9 | STANLEY, FRANS | 67 | 15 | 688 | 468 | 68.0% | 33% | 4,592 |
| 10 | MOLOI, SAKHILE | 97 | 6 | 190 | 92 | 48.4% | 41% | 4,494 |

---

## F. Welders page

### F.1 Stamp Number inventory

- 134 unique Stamp Numbers in tracker Weld Tracking col 27
- Stamps are mixed format: integers (`2768`), strings (`L854`), paired (`2768, EC2395`), ranges (`2009-2308`)
- Top stamps by weld frequency: 2768/EC2395 (244 welds), 2768 (172), 2239/2682 (171), 2847 (167), 2239 (146), 2606 (134), 2847/2677 (133)

### F.2 Welder-level WDI/FDI

To be computed from tracker Weld Tracking, grouped by Stamp Number col 27:
- Total WDI per welder (sum of col 56)
- Total FDI per welder (sum of col 61)
- Total welds per welder (count)
- Site vs Workshop split per welder
- NDT rejects per welder

### F.3 First Pass Yield per welder

Same as project FPY but grouped by Stamp Number.

### F.4 Welder ↔ Supervisor join

**Verdict: indirect only.** Weld → Line ID prefix → Project Plan activity → Supervisor. Cannot resolve Stamp Number → Personnel Name without external lookup from Steinmüller. Welders page therefore shows Stamp-Number-level data; named-welder data is a gap pending Steinmüller's QA records.

---

## G. Discipline rollup (referenced on Home and Trades pages)

| Discipline | % of trade ZAR | ZAR | % of trade hours | Hours | # trades |
|------------|---------------:|----:|-----------------:|------:|---------:|
| SUPERVISION | 22.5% | R18,530,644 | 24.0% | 451,664 | 9 |
| INDIRECT | 18.7% | R15,390,902 | 20.5% | 385,849 | 23 |
| WELDING | 14.4% | R11,858,488 | 11.7% | 220,245 | 7 |
| RIGGING | 10.6% | R8,733,681 | 15.2% | 286,514 | 4 |
| BOILERMAKING | 9.2% | R7,554,946 | 9.1% | 170,333 | 5 |
| PIPE FITTING | 8.9% | R7,284,401 | 11.6% | 218,216 | 3 |
| MECH FITTING | 3.2% | R2,608,464 | 0.6% | 11,168 | 2 |
| OTHER (unmatched) | 12.5% | R10,233,591 | 7.3% | 136,418 | — |

---

## H. Data quality flags (display on Methodology page)

1. **Row 12 in Project Plan = full-project total**, not Jan–Apr 2026 only (confirmed by Levi 2026-05-28). Daily detail = 108,730 h; full project = 386,352 h.
2. **MLAMBO MANDLA mega-postings** in Rev0 corrected in Rev1 (277,622 h removed from two cells). All supervisor numbers above are Rev1-recomputed.
3. **SAP CO line-item total = R170.7M**, not R674M as initially reported. The R674M figure included 165 SAP subtotal rows that were not real transactions.
4. **99.8% of SAP cost** posted Dec 2025–Apr 2026. Project officially started 2024-08-05. Either export filtered or retrospective booking. Open question.
5. **"No Budget Position" flag** is only R425 total. Not a usable scope-creep indicator.
6. **Performance % Complete in Client Budget is Duration-based**, not Physical. Use 19.8% from Tracker, not 74.62% from Client Budget.
7. **Stamp Number ↔ Personnel Number bridge does not exist** in source data. Named-welder productivity gated on Steinmüller providing QA lookup.
8. **Tonnage from activity names** caught only 40 activities. Hours-per-tonne not reportable.
9. **Supervision intensity 22.5%** vs 8–12% norm — unusually high.
10. **Rigging hours > Welding hours by 30%** — anomalous.
11. **System 3 only live system.** 13 of 16 numbered systems at 0% supports.
12. **Rev 03 baseline** used. Original contract baseline may differ.

---

*Data extracted 2026-05-27 to 2026-05-28 from source files dated 2026-05-26 (originals) and 2026-05-28 (Project Plan Rev1).*
