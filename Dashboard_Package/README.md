# Mondi CFB Boiler — Productivity & Delay Dashboard Package

**Purpose:** Everything needed to build an interactive HTML dashboard that assesses welding, rigging, and supports productivity on the Mondi CFB Boiler project (Steinmüller / Project SW.200002), and supports a forensic case for an Extension of Time (EoT 2) claim.

**Intended consumer:** A GPT-class model running inside Google Antigravity, building HTML/CSS/JS that will be deployed to Netlify and emailed to the customer.

---

## Files in this package

| File | What it is | Read order |
|------|-----------|-----------|
| `README.md` | This file. Index. | 1st |
| `BUILD_PROMPT.md` | **The main prompt to paste into Antigravity.** Self-contained — describes the dashboard, references the other files. | 2nd (this is the brief) |
| `METRICS_DATA.md` | All the actual numbers, structured for direct AI consumption. Every value sourced and footnoted. | 3rd |
| `PAGE_SPECS.md` | Page-by-page specification — what each of the 6 pages contains, what charts, what filters. | 4th |
| `DESIGN_GUIDELINES.md` | Visual design language, color palette, typography, interaction patterns. | 5th |
| `SOURCE_REFERENCE.md` | Pointers to the source data and reference cheat sheets (lives in `..\` parent folder). | 6th (reference only) |

---

## How to use

1. **Open Antigravity** and create a new project.
2. **Copy the contents of this folder** into the project workspace.
3. **Paste `BUILD_PROMPT.md` as your initial prompt** to the AI agent.
4. The AI will read the other files in this folder as references.
5. **Deliverable:** a folder of HTML/CSS/JS/JSON files ready to push to Netlify.

---

## Source data location (read-only, do not modify)

`C:\Users\levid\OneDrive - FSC Consulting\Steinmueller\01_Data Recieved\`

Two date-stamped subfolders:
- `20250525\` — original delivery (5 files)
- `20250528\` — Rev1 of the Project Plan file (supersedes the Rev0)

Detailed file-by-file inventory: see `SOURCE_REFERENCE.md`.

---

## Source-of-truth findings (read-only, in `..\`)

These are the analytical findings the dashboard visualises. The AI should treat them as authoritative.

| File | Covers |
|------|--------|
| `..\Findings_ActivitiesComponentsTrades.md` | Cluster A — Activities, Components, Trades, Supports/Valves |
| `..\Findings_SupervisorsStandingTime.md` | Cluster B — Standing Time and Supervisor Productivity |
| `..\PM_Performance_Metrics.md` | The complete metrics inventory across the dataset |
| `..\Project Plan BL CL.md` | Project Plan file cheat sheet (Rev1) |
| `..\Mondi_Tracker_Workbook_Breakdown_CL.md` | Tracker cheat sheet |
| `..\Client_Budget CL.md` | Client Budget cheat sheet |
| `..\SAP_CO_Cheat_Sheet.md` | SAP CO cheat sheet |
| `..\Investigation_Status.md` | Current state of the investigation |

---

## Audience for the dashboard

- **Primary:** Steinmüller project management / commercial team
- **Secondary:** Steinmüller legal team building the EoT 2 claim against Mondi
- **Tertiary:** Mondi's review team when the EoT is submitted

The visual tone must therefore be **forensic and professional**, not marketing. Every chart must trace to source. Caveats must be visible. The dashboard is evidence, not advertising.

---

*Package created: 2026-05-28. FSC Consultants for Steinmüller.*
