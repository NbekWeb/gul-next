import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Menu from "../component/Menu";
import Foot from "../component/Foot";
import { notFound, redirect } from "next/navigation";
import { Button } from "antd";

import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales?.includes(locale)) {
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
    <NextIntlClientProvider messages={messages}>
      <div className="text-dark-400">
        <div className="fixed top-0 bg-white z-[10] w-full ">
          <Menu />
        </div>
        <div className="max-md:mt-[120px] md:mt-[145px] xs:mb-10 max-xs:mb-4">
          {children}
        </div>
        <Foot />
      </div>
    </NextIntlClientProvider>
  );
}
