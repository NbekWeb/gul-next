import React from "react";
import Retail from "@/app/pages/Retail";
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
      title: "Retail Order Terms | Flower&Opt",
      description:
        "Flower&Opt - Learn about the terms for retail flower orders! Discounts available for first-time orders, place your order online.",
    },
    ru: {
      title: "Условия заказа для розничных клиентов | Flower&Opt",
      description:
        "Flower&Opt - Ознакомьтесь с условиями розничного заказа цветов! Действуют скидки на первый заказ, заказывайте онлайн.",
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
  return <Retail />;
}
