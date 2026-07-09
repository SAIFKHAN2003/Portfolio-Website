export interface Award {
  title: string;
  description: string;
  type: "competition" | "publication" | "funding" | "leadership";
  date: string;
  icon: string;
}

export const awards: Award[] = [
  {
    title: "Winner, DTU-IIF IdeaThon 2024",
    description:
      "Won ₹10,000 prize for an Agri-Voltaic solar-powered IoT irrigation & manuring system.",
    type: "competition",
    date: "Aug 2024",
    icon: "🏆",
  },
  {
    title: "SIH 2024 Hardware Edition Finalist",
    description:
      "Selected for Smart India Hackathon 5-day finale at KIET Ghaziabad for the Industrial-Scale Green Hydrogen Production Facility project (Ministry of Power, PS Code: 1574).",
    type: "competition",
    date: "Dec 2024",
    icon: "🏆",
  },
  {
    title: "Project Funding Awardee",
    description:
      "Received ₹20,000 from Jamia Engineering Alumni Association for the Hydrogen Fuel Cell E-Bike prototype hardware.",
    type: "funding",
    date: "Mar 2025",
    icon: "💰",
  },
  {
    title: "IEEE Publication",
    description:
      "Conference paper presented at IC3ECSBHI-2025, published in IEEE proceedings.",
    type: "publication",
    date: "2025",
    icon: "📄",
  },
  {
    title: "Chairperson, Power & Energy Sub-Society",
    description:
      "JMI IEEE Student Branch, New Delhi (Feb 2024 – Feb 2025).",
    type: "leadership",
    date: "Feb 2024 – Feb 2025",
    icon: "👥",
  },
];
