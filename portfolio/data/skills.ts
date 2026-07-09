export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "NumPy / Pandas",
      "Matplotlib",
      "TensorFlow / Keras",
      "MATLAB",
      "Arduino / ESP32 (C)",
      "SQL",
      "Power BI",
      "LaTeX",
    ],
  },
  {
    title: "Engineering Software",
    skills: [
      "HOMER Pro",
      "PVsyst",
      "MATLAB Simulink",
      "Siemens NX",
      "AutoCAD Electrical",
      "SolidWorks",
      "SCADA",
      "GitHub",
      "Google Colab",
    ],
  },
  {
    title: "Hardware & Systems",
    skills: [
      "PEM Fuel Cells",
      "Li-ion Battery Systems",
      "BLDC Hub Motors",
      "DC-DC Buck Converters",
      "OBC & PDU Systems",
      "Electrolyzer (SOEC/PEMFC)",
      "IoT Sensors & MCUs",
      "Inverter Duty Transformers",
      "Current Sensors",
    ],
  },
];
