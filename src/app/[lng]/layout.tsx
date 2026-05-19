import type { Metadata } from "next";

import Footer from "./components/footer.component";

import { Analytics } from "@vercel/analytics/react";

import SettingBar from "./components/setting-bar.component";

import Providers from "./providers";

import LanguageProvider from "./LanguageProvider";

export const metadata: Metadata = {
  title: "Portfolio Leonardo Rebollo",

  description:
    "Portfolio de proyectos de Leonardo Daniel Rebollo Calero",

  icons: {
    icon: "/planet-ringed.svg",
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: Promise<{
    lng: string;
  }>;
}) {
  const { lng } = await params;

  return (
    <Providers>
      <LanguageProvider lng={lng} />

      <SettingBar />

      {children}

      <Analytics />

      <Footer />
    </Providers>
  );
}