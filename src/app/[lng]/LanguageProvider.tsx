"use client";

import "@/i18n/client";

import { useEffect } from "react";

import i18next from "i18next";

type Props = {
  lng: string;
};

export default function LanguageProvider({
  lng,
}: Props) {
  useEffect(() => {
    i18next.changeLanguage(lng);
  }, [lng]);

  return null;
}