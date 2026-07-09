export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  pages?: string;
  publisher: string;
  doi?: string;
  doiUrl?: string;
  status: "published" | "in-progress";
}

export const publications: Publication[] = [
  {
    authors: "Khan, S. U. R., Ahmad, A., Jamil, M., & Irfan, A.",
    title:
      "State-of-charge estimation of Li-Ion battery in electric vehicles using deep neural networks",
    venue:
      "2025 International Conference on Cognitive Computing in Engineering, Communications, Sciences and Biomedical Health Informatics (IC3ECSBHI)",
    year: "2025",
    pages: "pp. 861–865",
    publisher: "IEEE",
    doi: "10.1109/IC3ECSBHI63591.2025.10990906",
    doiUrl: "https://doi.org/10.1109/IC3ECSBHI63591.2025.10990906",
    status: "published",
  },
  {
    authors: "Khan, S. U. R., & Jamil, M.",
    title:
      "Techno-Economic Analysis of Off-Grid Hybrid Renewable Energy-Based Hydrogen Refueling and Power Supply for Remote Indian Villages",
    venue: "Journal Paper",
    year: "2025",
    publisher: "Under Preparation",
    status: "in-progress",
  },
];
