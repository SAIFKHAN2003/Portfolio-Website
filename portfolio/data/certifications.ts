export interface Certification {
  title: string;
  provider: string;
  date: string;
  description: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    title: "Politics and Economics of International Energy",
    provider: "Sciences Po",
    date: "Apr 2026",
    description:
      "Explored the political, economic, and strategic dimensions of global energy markets and the transition towards sustainable energy policies.",
    skills: ["Energy Policy", "Energy Economics"],
  },
  {
    title: "Energy Modeling: Predicting & Optimizing Consumption",
    provider: "Coursera",
    date: "Jun 2026",
    description:
      "Developed skills in forecasting energy demand and optimizing consumption patterns using data-driven modeling techniques.",
    skills: ["Energy Modeling", "Data Optimization"],
  },
  {
    title: "Hydrogen for the Energy Transition: Power-to-X",
    provider: "WWF Germany",
    date: "Mar 2025",
    description:
      "In-depth study of green hydrogen production, Power-to-X technologies, and Fischer-Tropsch synthesis for decarbonizing hard-to-abate sectors.",
    skills: ["PtX", "Fischer-Tropsch Synthesis", "Hydrogen Storage"],
  },
  {
    title: "Renewable Energy Technologies",
    provider: "ASSET EnergyTransition",
    date: "Oct 2024",
    description:
      "Comprehensive overview of renewable generation systems including solar PV, wind energy, and grid integration strategies.",
    skills: ["Renewable Energy Systems", "Solar Energy"],
  },
  {
    title: "Industrial Automation & SCADA",
    provider: "LinkedIn Learning",
    date: "Sep 2024",
    description:
      "Mastered collecting, analyzing, and visualizing industrial data through SCADA systems alongside core industrial automation principles.",
    skills: ["SCADA", "Industrial Automation", "Data Visualization"],
  },
  {
    title: "PLC Ladder Logic: The Basics",
    provider: "LinkedIn Learning",
    date: "Sep 2024",
    description:
      "Learned the fundamentals of Programmable Logic Controllers (PLCs) and developed foundational skills in programming using ladder logic.",
    skills: ["PLC Ladder Logic", "Control Systems"],
  },
  {
    title: "Principles of Sustainable Development",
    provider: "LinkedIn Learning",
    date: "Aug 2024",
    description:
      "Gained insights into sustainable development goals (SDGs), environmental impact assessments, and corporate sustainability strategies.",
    skills: ["Sustainable Development", "Sustainability"],
  },
  {
    title: "Career Skills in Data Analytics",
    provider: "LinkedIn Learning",
    date: "Aug 2023",
    description:
      "Built foundational competencies in data processing, analytics workflows, and technical problem-solving for engineering applications.",
    skills: ["Data Analytics", "Tech Career Skills"],
  },
];
