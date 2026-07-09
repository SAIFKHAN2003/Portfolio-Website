export interface Referee {
  name: string;
  title: string;
  department: string;
  institution: string;
  email: string;
  phone: string;
  relationship: string;
}

export const referees: Referee[] = [
  {
    name: "Prof. Majid Jamil",
    title: "Professor",
    department: "Electrical Engineering",
    institution: "Jamia Millia Islamia, New Delhi",
    email: "mjamil@jmi.ac.in",
    phone: "+91 9313462108",
    relationship: "Thesis & Research Supervisor",
  },
  {
    name: "Prof. Shakeb Ahmad Khan",
    title: "Professor",
    department: "Electrical Engineering",
    institution: "Jamia Millia Islamia, New Delhi",
    email: "skhan3@jmi.ac.in",
    phone: "+91 9650087393",
    relationship: "Co-author & Academic Referee",
  },
  {
    name: "Prof. Arunesh Kumar Singh",
    title: "Associate Professor",
    department: "Electrical Engineering",
    institution: "Jamia Millia Islamia, New Delhi",
    email: "asingh1@jmi.ac.in",
    phone: "+91 9911889119",
    relationship: "Internship Supervisor — Control Lab",
  },
];
