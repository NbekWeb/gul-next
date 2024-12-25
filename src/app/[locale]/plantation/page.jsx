import React from "react";
import Plant from "@/app/pages/Plant";
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
      title: "Our Flower Plantation | Flower&Opt",
      description:
        "Flower&Opt - Explore our plantation where we grow flowers for you and your business!",
    },
    ru: {
      title: "Наша плантация цветов | Flower&Opt",
      description:
        "Flower&Opt - Ознакомьтесь с нашей плантацией, где мы выращиваем цветы для вас и вашего бизнеса!",
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
  return <Plant />;
}
