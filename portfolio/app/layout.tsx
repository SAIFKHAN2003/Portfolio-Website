import type { Metadata } from "next";
import { inter, instrumentSerif } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saif Ur Rahman Khan — Electrical Engineer | EV & Renewable Energy",
  description:
    "Portfolio of Saif Ur Rahman Khan — Electrical Engineer specializing in E-Mobility, Renewable Energy Systems, and Power Electronics. R&D Trainee at Denso International India.",
  keywords: [
    "Electrical Engineer",
    "EV",
    "Renewable Energy",
    "Green Hydrogen",
    "Power Electronics",
    "Machine Learning",
    "PEM Fuel Cell",
    "HOMER Pro",
    "Denso",
  ],
  authors: [{ name: "Saif Ur Rahman Khan" }],
  openGraph: {
    title: "Saif Ur Rahman Khan — Electrical Engineer | EV & Renewable Energy",
    description:
      "Portfolio of Saif Ur Rahman Khan — Electrical Engineer specializing in E-Mobility, Renewable Energy Systems, and Power Electronics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Ur Rahman Khan — Electrical Engineer",
    description:
      "Electrical Engineer specializing in E-Mobility, Renewable Energy, and Green Hydrogen.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
