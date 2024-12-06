import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Menu from "../component/Menu";
import Foot from "../component/Foot";
import "../assets/style/index.css";
import { notFound, redirect } from "next/navigation";
import { Button } from "antd";

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
      <div className="sticky top-0 bg-white z-[10]">
        <Menu />
      </div>
      {/* <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider> */}
      {/* <Foot /> */}
    </>
  );
}
