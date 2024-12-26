import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Menu from "../component/Menu";
import Foot from "../component/Foot";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "ru";

  if (!routing.locales?.includes(locale)) {
    notFound();
  }

  return {
    title: "FLOWERS&OPT",
  };
}

export default async function LocaleLayout({ children }) {
  // Get the locale from cookies or fallback to "ru"
  const cookieStore = cookies();
  console.log(cookieStore.get("NEXT_LOCALE")?.value);
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "ru";
  // Fetch messages for the locale
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="text-dark-400">
        <div className="fixed top-0 bg-white z-[10] w-full">
        {/* {locale}   */}
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
