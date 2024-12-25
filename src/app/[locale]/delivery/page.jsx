import React from "react";
import Delivery from "@/app/pages/Delivery";
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
      title: "Delivery Terms for Our Flowers | Flower&Opt",
      description:
        "Flower&Opt - Learn about the terms of flower delivery! Discounts available on first orders.",
    },
    ru: {
      title: "Условия доставки наших цветов | Flower&Opt",
      description:
        "Flower&Opt - Ознакомьтесь с условиями доставки цветов! Действует скидка на первый заказ.",
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
  return <Delivery />;
}
