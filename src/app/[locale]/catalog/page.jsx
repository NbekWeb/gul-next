import React from "react";
import Catalog from "@/app/pages/Catalog";
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
      title: "Catalog of Flowers Wholesale and Retail | Flower&Opt",
      description:
        "Flower&Opt - A wide selection of flowers with delivery! Quality assurance, promotions, and discounts. Order online.",
    },
    ru: {
      title: "Каталог цветов оптом и в розницу | Flower&Opt",
      description:
        "Flower&Opt - Большой выбор цветов с доставкой! Гарантия качества, акции, скидки. Заказывайте онлайн.",
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
  return <Catalog />;
}
