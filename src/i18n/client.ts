"use client";

import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import resourcesToBackend from "i18next-resources-to-backend";

import {
  defaultNS,
  fallbackLng,
} from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(
          `../locales/${language}/${namespace}.json`
        )
    )
  )
  .init({
    fallbackLng,

    defaultNS,

    ns: [
      "common",
      "projects",
    ],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;