import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Menu from "../component/Menu";
import "../assets/style/index.css";
import { notFound, redirect } from "next/navigation";

import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return {
    title: "FLOWERS&OPT",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <>
      <Menu />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
