import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer.component";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Portfolio Leonardo Rebollo",
  description: "Portfolio de proyectos de Leonardo Daniel Rebollo Calero",
  icons: {
    icon: "/planet-ringed.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
