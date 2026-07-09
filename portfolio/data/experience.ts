export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "R&D Trainee",
    company: "Denso International India Ltd",
    location: "Manesar, Gurgaon, Haryana",
    duration: "Jul 2025 — Present",
    isCurrent: true,
    bullets: [
      "Benchmarked Valeo India's 3-in-1 combo box (PDU + DC-DC Converter + OBC) against Denso's internal design targets — evaluating power density, thermal performance, and integration architecture.",
      "Analyzed the impact of V2X bi-directional power flow on switching stress, thermal loading, and reliability of OBC and DC-DC converter modules in Denso Japan's X-in-1 system.",
      "Designed current sensor mounting configurations and battery pack structural parts for HEV/BEV platforms, ensuring compatibility with AIS-038, IS 17017, and IS 17107.",
      "Validated current sensor performance through on-site testing at Maruti Suzuki India Ltd (MSIL) and Toyota, documenting measurement results and deviations.",
    ],
  },
  {
    role: "Research Intern — Smart Energy Lab",
    company: "Jamia Millia Islamia",
    location: "Control Lab, Supervisor: Dr. Arunesh Kumar Singh",
    duration: "Mar 2024 — Jun 2024",
    isCurrent: false,
    bullets: [
      "Developed hardware prototype of an Eddy Current Braking System (ECBS) using permanent magnets and electromagnets to study contactless energy absorption mechanisms.",
      "Implemented Fuzzy Logic Controllers (FLC) in simulation to handle system uncertainties and improve robustness of braking control response.",
      "Investigated eddy current-based Energy Absorbing Systems as a replacement for hydraulic absorbers in Aircraft Arrester Barrier Systems (AABS).",
    ],
  },
  {
    role: "Summer Research Intern",
    company: "Tata Power DDL",
    location: "New Delhi",
    duration: "Jun 2024 — Jul 2024",
    isCurrent: false,
    bullets: [
      "Developed an ML-based predictive model to forecast net grid consumption by integrating rooftop PV generation data with historical smart meter load profiles.",
      "Analyzed impact of rooftop solar penetration on feeder-level voltage profiles and reverse power flow conditions in the Delhi distribution network.",
      "Visualized KPIs — generation vs. consumption trends, peak shaving potential, and PV self-consumption ratio — using Python dashboards.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Tesla Transformers India Ltd",
    location: "Bhopal, Madhya Pradesh",
    duration: "May 2024 — Jul 2024",
    isCurrent: false,
    bullets: [
      "Studied design and performance of Inverter Duty Transformers (IDTs) — K-factor ratings, harmonic distortion tolerance, and thermal derating under non-sinusoidal loads.",
      "Explored Agrivoltaics configurations: co-location of solar PV with agricultural land for dual energy and crop yield analysis.",
      "Processed and visualized field data using Python and Excel — transformer efficiency, harmonic spectrum, and PV output variation plots.",
    ],
  },
];
