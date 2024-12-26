import React from "react";
import Schedele from "@/app/pages/Schedele";
import { notFound } from "next/navigation";
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
      title: "Holiday Schedule for Flower Needs! Flower&Opt",
      description:
        "Flower&Opt - Every year, a relevant holiday schedule to stock more flowers for your business! Order online on the website.",
    },
    ru: {
      title: "График праздников, когда цветы пригодятся! Flower&Opt",
      description:
        "Flower&Opt - Каждый год, актуальный график праздников когда нужно закупить больше цветов для вашего бизнеса! Заказать можно на сайте.",
    },
  };

  const metadata = translations[locale] || translations.ru;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

// Main page component
export default function Page() {
  return <Schedele />;
}
