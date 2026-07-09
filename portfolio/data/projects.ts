export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  tools: string[];
  link: string;
  isFlagship: boolean;
  isWinner: boolean;
  metrics?: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "hydrogen-fuel-cell-ebike",
    year: "2025",
    title: "Hydrogen Fuel Cell–Based Electric Bicycle",
    description:
      "Designed a hydrogen PEMFC-hybrid electric bicycle by integrating a 200W Ecosense PEM fuel cell with a 36V/10.4Ah Li-ion battery and 350W BLDC hub motor, extending the hybrid range up to 100–120 km from a baseline of 25–30 km. Analyzed PEM fuel cell V-I characteristics to identify the Maximum Power Point (MPP), optimizing energy extraction efficiency. Developed a DC-DC converter circuit (36V → 12V) to manage the hybrid charging profile. Fabricated the e-bike prototype by modifying a standard pedal bicycle frame, integrating wiring harness, throttle, cruise control, real-time SOC display, lights, and horn. Conducted performance road tests achieving 25–30 km/h top speed. Secured ₹20,000 in project funding from the Jamia Engineering Alumni Association.",
    tools: ["BLDC", "Power Electronics", "PEM Fuel Cell", "BMS", "SolidWorks", "MATLAB/Simulink"],
    link: "project-fuel-cell.html",
    isFlagship: true,
    isWinner: false,
    metrics: [
      { value: "100–120 km", label: "Hybrid Range" },
      { value: "₹20,000", label: "Funding Awarded" },
      { value: "200W", label: "PEM Fuel Cell" },
      { value: "350W", label: "BLDC Hub Motor" },
    ],
  },
  {
    id: "hybrid-renewable-energy",
    year: "2024",
    title: "Off-Grid Hybrid Renewable Energy System",
    description:
      "Modelled site-specific load demand profiles and renewable resource data (solar irradiance, wind speed) for 3 remote, unelectrified Indian villages in Madhya Pradesh. Simulated and compared 4 hybrid RE configurations in HOMER Pro (PV+WT+DG+Bat, PV+WT+DG, PV+WT+Bat, PV+WT+HFC), selecting PV+Wind+Hydrogen Fuel Cell as the optimal net-zero, zero-LPSP configuration. Achieved Levelized Cost of Energy of $1.25/kWh and LCOH of $3.22/kg with an 80kW PEM electrolyzer + 250kW fuel cell. Extended findings into a journal paper currently under preparation.",
    tools: ["HOMER Pro", "MATLAB", "PV Systems", "Hydrogen Storage", "Techno-economic Analysis"],
    link: "project-hybrid-microgrid.html",
    isFlagship: true,
    isWinner: false,
    metrics: [
      { value: "$1.25/kWh", label: "LCOE Achieved" },
      { value: "$3.22/kg", label: "LCOH Achieved" },
      { value: "80 kW", label: "PEM Electrolyzer" },
      { value: "3 Villages", label: "Sites Modelled" },
    ],
  },
  {
    id: "soc-estimation-dnn",
    year: "2025",
    title: "SoC Estimation of Li-Ion Batteries Using DNN",
    description:
      "Developed a deep neural network model for real-time State-of-Charge estimation of lithium-ion batteries in electric vehicles. Trained and validated on battery cycling datasets — 1.34% MAE vs. 4.8% for Coulomb counting. Presented at IC3ECSBHI-2025 International Conference. Published in IEEE proceedings.",
    tools: ["Python", "Deep Learning", "Battery Modeling", "EV Systems", "TensorFlow/Keras"],
    link: "project-soc-dnn.html",
    isFlagship: false,
    isWinner: false,
    metrics: [
      { value: "1.34%", label: "MAE Achieved" },
      { value: "4.8%", label: "Coulomb Counting MAE" },
      { value: "IEEE", label: "Published At" },
    ],
  },
  {
    id: "solar-microgrid",
    year: "2024",
    title: "Decentralized Solar Energy Microgrid",
    description:
      "Conceptualized a P2P solar microgrid for urban residential clusters. Modelled 50 kWp community array in PVsyst (PR 78.4%), sized LV distribution, and designed a token-based energy trading mechanism compliant with DERC net-metering rules. Won DTU-Incubate IIF Ideathon 2024.",
    tools: ["PVsyst", "Solar PV", "Microgrid Design", "Net Metering", "IoT"],
    link: "project-solar-microgrid.html",
    isFlagship: false,
    isWinner: true,
    metrics: [
      { value: "50 kWp", label: "Community Array" },
      { value: "78.4%", label: "Performance Ratio" },
      { value: "₹10,000", label: "Prize Won" },
    ],
  },
];
