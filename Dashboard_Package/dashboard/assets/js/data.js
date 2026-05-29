window.MONDI_DATA = {
  meta: {
    projectId: "SW.200002",
    projectName: "Mondi CFB Blr - Execute - Rev03",
    title: "Mondi CFB Boiler - Jan-Apr 2026 Productivity Analysis",
    subtitle: "SW.200002 - Steinmueller Africa - Richards Bay",
    dataAsOf: "Jan-Apr 2026 analysis window",
    preparedBy: "FSC Consultants"
  },
  sources: [
    "Mondi Piping Support and Valve Tracker Rev 16",
    "Project Plan BL and Actual Info Rev 1",
    "SW.200002 Mondi CFB Blr - Client Budget per Area",
    "SW200002 SAP CO Extract"
  ],
  tiers: {
    t1: "Tier 1 - Audit-grade reliable. Direct source counts or confirmed source totals.",
    t2: "Tier 2 - Reliable with explicit caveat or unresolved source interpretation.",
    gap: "Data Gap - Cannot be computed reliably from available sources."
  },
  project: {
    windowStart: "2026-01",
    windowEnd: "2026-04",
    actualEffortDailyWindow: 108730,
    leafActivities: 8519
  },
  monthlyCost: [
    ["2026-01", 31805892],
    ["2026-02", 45898008],
    ["2026-03", 51455555],
    ["2026-04", 41097643]
  ],
  rigging: {
    overruns: [
      { id: "9JG7LG56AP", name: "Rig Hood & Boiler Grid A1 & A2 into Position", bl: 4.8, actual: 716.0, overrun: 711.2 },
      { id: "9JG7LG56AO", name: "Preparation to Rig Hood & Boiler Grid A", bl: 0.0, actual: 563.5, overrun: 563.5 },
      { id: "9JG7LG56UG", name: "Lifting Front Wall in Final Position", bl: 102.6, actual: 604.0, overrun: 501.4 },
      { id: "1JG7JUQ", name: "160) Cyclone - Hangers Rods Installation", bl: 239.9, actual: 735.5, overrun: 495.6 },
      { id: "9JG7LG56TL", name: "Transfer Coil Panels from Storage onto Lifting Frame", bl: 0.0, actual: 729.5, overrun: 729.5 }
    ],
    gaps: [
      "Hours per lift",
      "Hours per tonne rigged",
      "Crane utilisation %",
      "Heavy-lift vs routine-lift split",
      "Idle rigging crew hours"
    ]
  },
  supervisors: {
    totals: { seniorUnique: 14, jobsiteUnique: 44 },
    shifts: [
      { shift: "Day", activities: 5120, bl: 122481, actual: 92007, pf: 1.331 },
      { shift: "Night", activities: 567, bl: 55611, actual: 35409, pf: 1.571 }
    ],
    senior: [
      ["BOTHA, EUGENE", 16, 46975, 24870, 1.889, "N"],
      ["LUDEWICK, NEVILLE", 9, 40371, 19827, 2.036, "D"],
      ["KEMP, JOHANNES", 1384, 8529, 8140, 1.048, "D"],
      ["VAN DYK, MARTHINUS", 350, 8075, 5326, 1.516, "D"],
      ["SILOMBO, MANDLA", 8, 2843, 4526, 0.628, "D"],
      ["DE JAGER, SAMUEL", 23, 2168, 3606, 0.601, "D/N"],
      ["GUN, UGUR", 504, 4102, 3567, 1.150, "D/N"],
      ["KONING, JETHRO", 3, 1150, 1516, 0.758, "D"],
      ["SMUTS, ARRIE", 618, 157, 730, 0.215, "D/N"],
      ["Mondi, Contractor", 465, 613, 103, 5.930, "D/N"]
    ],
    jobsite: [
      ["MALEKA, SHOROANE", 114, 32920, 18310, 1.798, "D/N"],
      ["SHABALALA, SAKHILE", 558, 23564, 11839, 1.990, "D"],
      ["LOWIESCH, ROWAN", 30, 12895, 9539, 1.352, "D/N"],
      ["MOTHA, KENNETH", 79, 10594, 8398, 1.261, "D/N"],
      ["WILLIAMS, LEESTON", 102, 7374, 7519, 0.981, "D"],
      ["KONING, JETHRO", 210, 9184, 6468, 1.420, "D/N"],
      ["MLAMBO, MANDLA", 379, 5125, 6022, 0.851, "D/N"],
      ["MTHOMBENI, BEN", 4, 11474, 5784, 1.984, "D"],
      ["STANLEY, FRANS", 67, 6352, 4592, 1.383, "D"],
      ["MOLOI, SAKHILE", 97, 3601, 4494, 0.801, "D/N"],
      ["PHORA, DENIS", 42, 8527, 4412, 1.932, "D"],
      ["RATAU, JOSAYA", 283, 4085, 4325, 0.944, "D/N"],
      ["MASHILOANE, JACKSON", 35, 1619, 4078, 0.397, "D"],
      ["CHRISTISON, LEON", 42, 4873, 2824, 1.726, "D"],
      ["MUKOSERA, BENSON", 8, 2490, 2460, 1.013, "D"],
      ["VAN DYK, MARTHINUS", 34, 875, 2288, 0.382, "D"],
      ["LUDEWICK, NEVILLE", 17, 2308, 2034, 1.134, "D/N"],
      ["MATHONSI, ENOS", 179, 1927, 1950, 0.988, "D"],
      ["MOKABANE, MOTHOGWAME", 103, 1752, 1797, 0.975, "D/N"],
      ["DORKIN, LINDROOI", 11, 2398, 1650, 1.454, "D"],
      ["TLADI, MAPHALE", 224, 2468, 1546, 1.597, "D"],
      ["JAPPIE, YUSRI", 32, 2730, 1306, 2.090, "D"],
      ["MCDONALD, JEREMY", 143, 840, 1276, 0.658, "D"],
      ["BOTHA, ERNST", 55, 774, 1046, 0.740, "D"],
      ["SHEKWA, JOHN SIFSO", 318, 858, 722, 1.189, "D/N"]
    ],
    gaps: [
      ["MALEKA, SHOROANE", 114, 13, 856, 431, 50.4, 43, 18310],
      ["SHABALALA, SAKHILE", 558, 9, 662, 390, 58.9, 38, 11839],
      ["LOWIESCH, ROWAN", 30, 15, 703, 463, 65.9, 35, 9539],
      ["MOTHA, KENNETH", 79, 11, 451, 313, 69.4, 35, 8398],
      ["WILLIAMS, LEESTON", 102, 16, 352, 208, 59.1, 38, 7519],
      ["KONING, JETHRO", 210, 9, 435, 290, 66.7, 36, 6468],
      ["MLAMBO, MANDLA", 379, 34, 1653, 1420, 85.9, 31, 6022],
      ["MTHOMBENI, BEN", 4, 3, 291, 170, 58.4, 41, 5784],
      ["STANLEY, FRANS", 67, 15, 688, 468, 68.0, 33, 4592],
      ["MOLOI, SAKHILE", 97, 6, 190, 92, 48.4, 41, 4494]
    ]
  },
  dataQuality: [
    "Dashboard scope is restricted to the Jan-Apr 2026 analysis window where dated data is displayed.",
    "Metrics without Jan-Apr-only source numerators and denominators are displayed as data gaps.",
    "Stamp Number to Personnel Number bridge is unavailable; named-welder productivity is a data gap.",
    "Rigging activity overruns are shown only where Jan-Apr source rows are documented; lift logs, tonnage logs, crane utilisation, and idle-time denominators are unavailable."
  ]
};
