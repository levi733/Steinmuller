(function () {
  const D = window.MONDI_DATA;

  function number(v, digits = 0) {
    if (v === null || v === undefined || Number.isNaN(Number(v))) return "-";
    return Number(v).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  }

  function money(v) {
    if (v === null || v === undefined) return "-";
    return `R${Math.round(v).toLocaleString("en-US")}`;
  }

  function pct(v, digits = 1) {
    if (v === null || v === undefined) return "-";
    return `${Number(v).toFixed(digits)}%`;
  }

  window.MondiFormat = { number, money, pct };

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function withFilters(href) {
    const p = params();
    const q = p.toString();
    return q ? `${href}?${q}` : href;
  }

  function tier(label, kind, anchor = "tier-framework", note) {
    const cls = kind === "gap" ? "gap" : kind === "t2" ? "t2" : "t1";
    const text = kind === "gap" ? "Data Gap" : kind === "t2" ? "Tier 2" : "Tier 1";
    return `<a class="tier ${cls}" href="${withFilters(`methodology.html#${anchor}`)}" title="${note || D.tiers[kind || "t1"]}">${label || text}</a>`;
  }

  function kpi(label, value, sub, kind = "t1", tone = "") {
    return `<article class="card kpi span-3" tabindex="0" title="${sub}">
      <div class="label">${label}</div>
      <div class="value ${tone}">${value}</div>
      <div class="sub">${sub}</div>
      ${tier(null, kind)}
    </article>`;
  }

  function chartCard(title, id, span, source, kind = "t1", height = "") {
    return `<section class="card ${span}">
      <h2>${title}</h2>
      ${tier(null, kind)}
      <div class="card-actions"><button class="export-btn" data-export="${id}" type="button">Export</button></div>
      <div class="chart-wrap ${height}"><canvas id="${id}"></canvas></div>
      <p class="source">Source: ${source}</p>
    </section>`;
  }

  function gapCard(title, text, span = "span-6") {
    return `<section class="card gap-card ${span}">
      <h2>${title}</h2>
      ${tier("Data Gap", "gap")}
      <p>${text}</p>
    </section>`;
  }

  function sourceFooter() {
    const list = D.sources.map(s => `<li>${s}</li>`).join("");
    return `<footer><div class="footer-inner">
      <div><strong>Source data:</strong><ul>${list}</ul></div>
      <div>Prepared by ${D.meta.preparedBy}. Scope: ${D.meta.dataAsOf}.<br>
      <a href="${withFilters("methodology.html")}">Methodology</a> - <a href="${withFilters("methodology.html#sources")}">Source Reference</a></div>
    </div></footer>`;
  }

  function shell() {
    const page = document.body.dataset.page;
    const nav = [
      ["home", "index.html", "Home"],
      ["welding", "welding.html", "Welding"],
      ["rigging", "rigging.html", "Rigging"],
      ["supports", "supports.html", "Supports"],
      ["supervisors", "supervisors.html", "Supervisors"],
      ["welders", "welders.html", "Welders"]
    ].map(([id, href, text]) => `<a class="${page === id ? "active" : ""}" href="${withFilters(href)}">${text}</a>`).join("");
    document.getElementById("app-shell").innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="topbar"><div class="nav-inner"><div class="brand">Mondi CFB Evidence Dashboard</div><nav class="nav">${nav}</nav></div></header>
      <section class="page-header"><div class="container">
        <p class="eyebrow">${D.meta.projectId} - ${D.meta.dataAsOf}</p>
        <h1>${pageTitle(page)}</h1>
        <p class="subtitle">${pageSubtitle(page)}</p>
      </div></section>
      ${page === "home" || page === "methodology" ? "" : filterBar()}
      <main id="main" class="container"></main>
      ${sourceFooter()}
      <aside class="drill" id="drill"><h3 id="drill-title"></h3><p id="drill-body"></p><button class="btn" id="drill-close" type="button">Close</button></aside>
    `;
  }

  function pageTitle(page) {
    return {
      home: D.meta.title,
      welding: "Welding Productivity",
      rigging: "Rigging Anomaly",
      supports: "Supports Standing Time",
      supervisors: "Supervisor Scorecard",
      welders: "Welder Data Gap",
      methodology: "Methodology and Data Quality"
    }[page] || D.meta.title;
  }

  function pageSubtitle(page) {
    return {
      home: `${D.meta.subtitle}. Forensic dashboard scoped to the Jan-Apr 2026 effort window.`,
      welding: "Jan-Apr-only welding metrics are shown where the source pack supports them.",
      rigging: "Jan-Apr rigging-related activity overruns and explicit productivity data gaps.",
      supports: "Jan-Apr-only support metrics are shown where the source pack supports them.",
      supervisors: "PF rankings, shift comparison, and gap-day attribution from Rev1 project plan data.",
      welders: "Jan-Apr-only welder metrics are shown where the source pack supports them.",
      methodology: "Traceability, formulas, caveats, source files, and open questions."
    }[page] || "";
  }

  function filterBar() {
    return `<section class="filter-bar"><div class="container filters">
      <label>Start month<input id="filter-start" type="month" value="2026-01"></label>
      <label>End month<input id="filter-end" type="month" value="2026-04"></label>
      <label>Trade<select id="filter-trade"><option value="">All disciplines</option><option>Welding</option><option>Rigging</option><option>Boilermaking</option><option>Pipe Fitting</option><option>Supervision</option><option>Indirect</option><option>Other</option></select></label>
      <label>Supervisor<select id="filter-supervisor"><option value="">All supervisors</option>${D.supervisors.jobsite.map(s => `<option>${s[0]}</option>`).join("")}</select></label>
      <button class="btn" id="reset-filters" type="button">Reset</button>
    </div></section>`;
  }

  function restoreFilters() {
    const p = params();
    ["start", "end", "trade", "supervisor"].forEach(k => {
      const el = document.getElementById(`filter-${k}`);
      if (el && p.get(k)) el.value = p.get(k);
    });
    document.querySelectorAll(".filters input, .filters select").forEach(el => {
      el.addEventListener("change", () => {
        const next = params();
        ["start", "end", "trade", "supervisor"].forEach(k => {
          const field = document.getElementById(`filter-${k}`);
          if (field && field.value) next.set(k, field.value);
          else next.delete(k);
        });
        history.replaceState(null, "", `${location.pathname}${next.toString() ? `?${next}` : ""}`);
        applyPageFilters();
      });
    });
    const reset = document.getElementById("reset-filters");
    if (reset) reset.addEventListener("click", () => {
      history.replaceState(null, "", location.pathname);
      document.querySelectorAll(".filters input, .filters select").forEach(el => {
        if (el.type === "month") el.value = el.id.includes("start") ? "2026-01" : "2026-04";
        else el.value = "";
      });
      applyPageFilters();
    });
  }

  function activeScopeNotice() {
    const p = params();
    const active = ["trade", "supervisor"].filter(k => p.get(k)).map(k => `${k}: ${p.get(k)}`);
    if (!active.length) return "";
    return `<section class="card notice span-12" id="scope-note"><h3>Active cross-page filter</h3><p>${active.join("; ")}. Charts remain Jan-Apr scope where the source files do not provide a reliable split for this filter.</p></section>`;
  }

  function applyPageFilters() {
    const sup = params().get("supervisor");
    document.querySelectorAll("tbody[data-filter-supervisor] tr").forEach(row => {
      row.style.display = !sup || row.dataset.supervisor === sup ? "" : "none";
    });
    const note = document.getElementById("scope-note");
    if (note) note.outerHTML = activeScopeNotice();
  }

  function renderHome() {
    main().innerHTML = `
      <section class="grid">
        ${kpi("Jan-Apr Actual Effort", `${number(D.project.actualEffortDailyWindow)} h`, "daily detail leaf sum", "t1", "warning")}
        ${kpi("Leaf Activities", number(D.project.leafActivities), "Project Plan leaf tasks", "t1")}
        ${kpi("Day-shift PF", D.supervisors.shifts[0].pf.toFixed(3), "Jan-Apr supervisor window", "t1", "ok")}
        ${kpi("Night-shift PF", D.supervisors.shifts[1].pf.toFixed(3), "Jan-Apr supervisor window", "t1", "ok")}
        ${chartCard("Jan-Apr 2026 cost profile", "monthlyCostChart", "span-6", "Findings A3 monthly SAP CO profile, restricted to Jan-Apr 2026.", "t1")}
        ${chartCard("Jan-Apr supervisor gap attribution", "gapChart", "span-6", "METRICS_DATA.md E.4.", "t1", "tall")}
        <section class="card span-12 note"><h2>Window Scope</h2><p>Only Jan-Apr 2026 components with source-backed values are displayed. Metrics without a Jan-Apr-only numerator and denominator are labelled as data gaps.</p></section>
      </section>`;
  }

  function renderWelding() {
    main().innerHTML = `<section class="grid">
      ${activeScopeNotice()}
      ${gapCard("Jan-Apr welding productivity", "The source pack does not provide Jan-Apr-only welding hours, WDI, FDI, FPY, or cycle-time numerators and denominators.", "span-12")}
      ${gapCard("Jan-Apr WDI planned-vs-actual curve", "The source pack does not provide a Jan-Apr 2026 daily planned/actual WDI series for display.", "span-12")}
    </section>`;
  }

  function renderRigging() {
    main().innerHTML = `<section class="grid">
      ${activeScopeNotice()}
      ${chartCard("Jan-Apr rigging-related overruns", "riggingOverrunChart", "span-12", "Findings A1 Jan-Apr top-overrun list filtered to rig/lift activities.", "t1", "tall")}
      ${gapCard("Jan-Apr rigging hours/cost", "The source pack does not provide Jan-Apr-only total rigging hours, total rigging cost, or rigging/welding ratio.", "span-12")}
      ${gapCard("Jan-Apr rigging hours by month", "The source pack does not provide rigging-only monthly hours for Jan-Apr 2026.", "span-12")}
      <section class="card gap-card span-12"><h2>What cannot be computed</h2>${tier("Data Gap", "gap")}<p>${D.rigging.gaps.join(", ")} cannot be derived from the available data. No lift log, per-lift tonnage record, crane operator hours sheet, or idle rigging split is present in the documented source set.</p></section>
    </section>`;
  }

  function renderSupports() {
    main().innerHTML = `<section class="grid">
      ${activeScopeNotice()}
      ${gapCard("Jan-Apr support status", "The source pack does not provide Jan-Apr-only support funnels, pressure-system readiness, per-medium completion, or delivery-to-fit lag values.", "span-12")}
    </section>`;
  }

  function renderSupervisors() {
    main().innerHTML = `<section class="grid">
      ${activeScopeNotice()}
      ${kpi("Day-shift PF", D.supervisors.shifts[0].pf.toFixed(3), "Rev1 corrected", "t1", "ok")}
      ${kpi("Night-shift PF", D.supervisors.shifts[1].pf.toFixed(3), "Rev1 corrected", "t1", "ok")}
      ${kpi("Supervisors tracked", "13 + 44", "Senior + jobsite unique names", "t1")}
      ${supervisorTable("Senior Supervisor table", D.supervisors.senior, "span-6")}
      ${supervisorTable("Jobsite Supervisor table", D.supervisors.jobsite, "span-6")}
      ${chartCard("Day vs Night shift", "shiftChart", "span-6", "METRICS_DATA.md E.3 Rev1.", "t1")}
      ${chartCard("Gap-day attribution", "gapChart", "span-6", "METRICS_DATA.md E.4.", "t1", "tall")}
      <section class="card span-12 note"><h2>Disclosure</h2><p>PF = Baseline Effort / Actual Effort. PF greater than 1 means actual hours are below baseline; PF below 1 means over baseline. Weekend gap days are calendar gaps, not automatically productivity loss.</p></section>
    </section>`;
  }

  function supervisorTable(title, rows, span) {
    const body = rows.map(r => `<tr class="clickable" data-supervisor="${r[0]}" data-title="${r[0]}" data-detail="Activities ${number(r[1])}; BL ${number(r[2])} h; Actual ${number(r[3])} h; PF ${r[4].toFixed(3)}.">
      <td>${r[0]}</td><td class="num">${number(r[1])}</td><td class="num">${number(r[2])}</td><td class="num">${number(r[3])}</td><td class="num"><span class="pf ${pfClass(r[4])}">${r[4].toFixed(3)}</span></td><td>${r[5] || ""}</td></tr>`).join("");
    return `<section class="card ${span}"><h2>${title}</h2>${tier(null, "t1")}<div class="table-scroll"><table class="sortable"><thead><tr><th>Supervisor</th><th class="num">Activities</th><th class="num">BL h</th><th class="num">Actual h</th><th class="num">PF</th><th>Shift</th></tr></thead><tbody data-filter-supervisor>${body}</tbody></table></div><p class="source">Source: METRICS_DATA.md E.1-E.2.</p></section>`;
  }

  function pfClass(v) {
    if (v < .7) return "low";
    if (v < .95) return "mid";
    if (v > 1.5) return "high";
    return "neutral";
  }

  function renderWelders() {
    main().innerHTML = `<section class="grid">
      ${activeScopeNotice()}
      ${kpi("Stamp to personnel bridge", "Unavailable", "Named-welder analysis gated on QA lookup", "gap", "warning")}
      ${gapCard("Jan-Apr welder ranking", "The source pack does not provide Jan-Apr-only stamp-level WDI, FDI, or FPY rankings.", "span-12")}
    </section>`;
  }

  function renderMethodology() {
    const dq = D.dataQuality.map(x => `<li>${x}</li>`).join("");
    main().innerHTML = `<section class="grid methodology">
      <section class="card span-12"><h2>What this dashboard is</h2><p>A static, source-cited dashboard for productivity, efficiency, and standing-time evidence on SW.200002. It is designed for management, commercial, and legal review.</p></section>
      <section class="card span-12" id="tier-framework"><h2>Audit-tier framework</h2><table><thead><tr><th>Tier</th><th>Meaning</th></tr></thead><tbody><tr><td>${tier("Tier 1","t1")}</td><td>Direct source counts or confirmed source totals.</td></tr><tr><td>${tier("Tier 2","t2")}</td><td>Reliable number with an explicit caveat or source interpretation risk.</td></tr><tr><td>${tier("Data Gap","gap")}</td><td>Cannot be computed reliably from the available source set.</td></tr></tbody></table></section>
      <section class="card span-12" id="sources"><h2>Source files</h2><ul>${D.sources.map(s => `<li>${s}</li>`).join("")}</ul></section>
      <section class="card span-12"><h2>Calculation methodology</h2><table><thead><tr><th>Metric</th><th>Formula / source</th></tr></thead><tbody>
        <tr><td>Jan-Apr cost profile</td><td>Monthly SAP CO profile restricted to Jan-Apr 2026 source rows.</td></tr>
        <tr><td>PF</td><td>Baseline effort / Actual effort from Rev1 leaf activities grouped by supervisor columns.</td></tr>
      </tbody></table></section>
      <section class="card span-12"><h2>Open questions for Steinmueller</h2><ul><li>Provide lift logs, tonnage records, and crane utilisation records for rigging productivity denominators.</li><li>Provide Stamp Number to Personnel Name lookup from QA records.</li><li>Provide Jan-Apr 2026-only daily WDI planned/actual series if that chart is required.</li></ul></section>
      <section class="card span-12"><h2>Data quality issues observed</h2><ol>${dq}</ol></section>
      <section class="card span-12"><h2>Revision history</h2><p>Rev1 corrected MLAMBO mega-postings, moving day-shift PF from 0.331 to 1.331 and MLAMBO PF from 0.018 to 0.851. Supervisor tables use Rev1.</p></section>
    </section>`;
  }

  function main() { return document.getElementById("main"); }

  function attachEvents() {
    restoreFilters();
    document.addEventListener("click", e => {
      const row = e.target.closest("tr.clickable");
      if (row) openDrill(row.dataset.title || "Detail", row.dataset.detail || "No additional detail in source pack.");
      const close = e.target.closest("#drill-close");
      if (close) document.getElementById("drill").classList.remove("open");
      const exportBtn = e.target.closest("[data-export]");
      if (exportBtn) exportChart(exportBtn.dataset.export);
    });
    document.querySelectorAll("table.sortable th").forEach((th, idx) => {
      th.addEventListener("click", () => sortTable(th.closest("table"), idx));
    });
  }

  function openDrill(title, body) {
    document.getElementById("drill-title").textContent = title;
    document.getElementById("drill-body").textContent = body;
    document.getElementById("drill").classList.add("open");
  }

  function sortTable(table, idx) {
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);
    const numeric = rows.every(r => !Number.isNaN(parseFloat(r.cells[idx].innerText.replace(/,/g, ""))));
    rows.sort((a, b) => {
      const av = a.cells[idx].innerText.replace(/,/g, "");
      const bv = b.cells[idx].innerText.replace(/,/g, "");
      return numeric ? parseFloat(av) - parseFloat(bv) : av.localeCompare(bv);
    });
    rows.forEach(r => tbody.appendChild(r));
  }

  function exportChart(id) {
    const chart = window.MondiCharts.chartRegistry[id];
    if (!chart) return;
    const a = document.createElement("a");
    a.href = chart.toBase64Image();
    a.download = `${id}.png`;
    a.click();
  }

  window.MondiUI = { withFilters, openDrill };

  document.addEventListener("DOMContentLoaded", () => {
    shell();
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "welding") renderWelding();
    if (page === "rigging") renderRigging();
    if (page === "supports") renderSupports();
    if (page === "supervisors") renderSupervisors();
    if (page === "welders") renderWelders();
    if (page === "methodology") renderMethodology();
    attachEvents();
    applyPageFilters();
    window.MondiCharts.render(page);
  });
})();
