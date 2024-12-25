import React from "react";
import Example from "@/app/pages/Example";
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
      title: "Pricing Example for Wholesale Clients! Flower&Opt",
      description:
        "Flower&Opt - Check out an example of pricing for wholesale flower orders! You can order online on the website.",
    },
    ru: {
      title: "Пример расчета цен для оптовых клиентов! Flower&Opt",
      description:
        "Flower&Opt - Ознакомьтесь с примером расчета цены при оптовом заказе цветов! Заказать можно онлайн на сайте.",
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
  return <Example />;
}
