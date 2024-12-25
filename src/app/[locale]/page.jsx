import React from "react";
import Main from "@/app/pages/Main";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
// Async function to generate metadata
export async function generateMetadata({ params }) {
  const { locale } = params;

  // Check if the locale is valid
  if (!routing.locales?.includes(locale)) {
    notFound();
  }

  // Translations for metadata
  const translations = {
    en: {
      title: "FLOWERS&OPT",
      description: "Wholesale flower exchange with delivery! Flower&Opt",
    },
    ru: {
      title: "FLOWERS&OPT",
      description: "Биржа цветов оптом с доставкой! Flower&Opt",
    },
  };

  const metadata = translations[locale] || translations.en;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

// Main page component
export default function Page() {
  const t = useTranslations("menu"); // Example of using translations in the page

  return <Main />;
}
