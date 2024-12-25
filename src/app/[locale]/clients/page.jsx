import React from "react";
import Clients from "@/app/pages/Clients";
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
      title: "Wholesale Order Terms | Flower&Opt",
      description:
        "Flower&Opt - Learn about the terms for wholesale flower orders! Custom offers, discounts, and promotions for you.",
    },
    ru: {
      title: "Условия заказа для оптовых клиентов | Flower&Opt",
      description:
        "Flower&Opt - Ознакомьтесь с условиями оптового заказа цветов! Индивидуальные предложения для вас, скидки, акции.",
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
  return <Clients />;
}
