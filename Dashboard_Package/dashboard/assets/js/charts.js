(function () {
  const D = window.MONDI_DATA;
  const fmt = window.MondiFormat || {};
  const chartRegistry = {};

  if (!window.Chart) {
    window.MondiCharts = {
      chartRegistry,
      render() {
        document.querySelectorAll(".chart-wrap").forEach(wrap => {
          wrap.innerHTML = '<div class="card gap-card" style="height:100%;display:grid;place-items:center;text-align:center;">Chart.js could not be loaded. Numeric source data remains visible on this page.</div>';
        });
      }
    };
    return;
  }

  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#94A3B8";
  Chart.defaults.borderColor = "#475569";
  Chart.defaults.plugins.legend.position = "bottom";
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.tooltip.backgroundColor = "#0F172A";
  Chart.defaults.plugins.tooltip.borderColor = "#475569";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.titleFont = { weight: 600 };
  Chart.defaults.responsive = true;
  Chart.defaults.maintainAspectRatio = false;

  const palette = {
    blue: "#2563EB",
    blue2: "#3B82F6",
    red: "#DC2626",
    amber: "#D97706",
    green: "#059669",
    grey: "#64748B",
    cyan: "#0891B2",
    violet: "#8B5CF6"
  };

  function money(v) { return fmt.money ? fmt.money(v) : `R${Math.round(v).toLocaleString("en-US")}`; }
  function number(v, d = 0) { return fmt.number ? fmt.number(v, d) : Number(v).toLocaleString("en-US"); }
  function percent(v, d = 1) { return `${Number(v).toFixed(d)}%`; }

  function sourceTooltip(source) {
    return {
      callbacks: {
        afterBody: () => source ? [`Source: ${source}`] : []
      }
    };
  }

  function openDrill(title, details) {
    if (window.MondiUI && window.MondiUI.openDrill) {
      window.MondiUI.openDrill(title, details);
    }
  }

  function makeChart(id, config, source) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const options = config.options || {};
    options.plugins = options.plugins || {};
    const existingTooltip = options.plugins.tooltip || {};
    options.plugins.tooltip = Object.assign({}, existingTooltip, {
      callbacks: Object.assign({}, existingTooltip.callbacks || {}, sourceTooltip(source).callbacks)
    });
    options.onClick = options.onClick || ((evt, els, chart) => {
      if (!els.length) return;
      const el = els[0];
      const label = chart.data.labels[el.index];
      const dataset = chart.data.datasets[el.datasetIndex];
      const raw = dataset.data[el.index];
      openDrill(String(label), `${dataset.label || "Value"}: ${Array.isArray(raw) ? raw.join(" / ") : raw}`);
    });
    config.options = options;
    chartRegistry[id] = new Chart(canvas, config);
    return chartRegistry[id];
  }

  function renderHome() {
    makeChart("monthlyCostChart", {
      type: "bar",
      data: {
        labels: D.monthlyCost.map(d => d[0]),
        datasets: [{ label: "ZAR posted", data: D.monthlyCost.map(d => d[1]), backgroundColor: palette.blue }]
      },
      options: {
        scales: { y: { ticks: { callback: v => money(v) } } },
        plugins: { tooltip: { callbacks: { label: ctx => money(ctx.raw) } } }
      }
    }, "Findings_ActivitiesComponentsTrades.md A3 - monthly cost profile.");

    renderGapChart();
  }

  function renderWelding() {}

  function renderRigging() {
    makeChart("riggingOverrunChart", {
      type: "bar",
      data: {
        labels: D.rigging.overruns.map(d => d.name),
        datasets: [{ label: "Actual minus BL hours", data: D.rigging.overruns.map(d => d.overrun), backgroundColor: palette.amber }]
      },
      options: {
        indexAxis: "y",
        onClick: (evt, els) => {
          if (!els.length) return;
          const d = D.rigging.overruns[els[0].index];
          openDrill(d.id, `${d.name}. BL ${d.bl} h; Actual ${d.actual} h; Overrun +${d.overrun} h.`);
        }
      }
    }, "Findings_ActivitiesComponentsTrades.md A1 and METRICS_DATA.md C.2.");
  }

  function renderSupports() {}

  function renderSupervisors() {
    makeChart("shiftChart", {
      type: "bar",
      data: {
        labels: D.supervisors.shifts.map(d => d.shift),
        datasets: [
          { label: "BL hours", data: D.supervisors.shifts.map(d => d.bl), backgroundColor: palette.blue },
          { label: "Actual hours", data: D.supervisors.shifts.map(d => d.actual), backgroundColor: palette.amber }
        ]
      }
    }, "METRICS_DATA.md E.3 - day/night shift Rev1.");

    renderGapChart();
  }

  function renderGapChart() {
    makeChart("gapChart", {
      type: "bar",
      data: {
        labels: D.supervisors.gaps.map(d => d[0]),
        datasets: [
          { label: "Weekend gap days", data: D.supervisors.gaps.map(d => Math.round(d[4] * d[6] / 100)), backgroundColor: palette.grey },
          { label: "Weekday gap days", data: D.supervisors.gaps.map(d => Math.round(d[4] * (100 - d[6]) / 100)), backgroundColor: palette.red },
          { label: "Active window days", data: D.supervisors.gaps.map(d => d[3] - d[4]), backgroundColor: palette.green }
        ]
      },
      options: { indexAxis: "y", scales: { x: { stacked: true }, y: { stacked: true } } }
    }, "METRICS_DATA.md E.4 and Findings_SupervisorsStandingTime.md B8.");
  }

  function renderWelders() {}

  window.MondiCharts = {
    chartRegistry,
    render(page) {
      if (page === "home") renderHome();
      if (page === "welding") renderWelding();
      if (page === "rigging") renderRigging();
      if (page === "supports") renderSupports();
      if (page === "supervisors") renderSupervisors();
      if (page === "welders") renderWelders();
    }
  };
})();
