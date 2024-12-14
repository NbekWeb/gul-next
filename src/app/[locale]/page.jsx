import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import Banner from "../component/Card/Banner";
import Ban from "../component/Card/Ban";
import MainCard from "../component/Card/MainCard";
import Vitrina from "../component/Main/Vitrina";
import Aksi from "../component/Main/Aksi";
import Roses from "../component/Main/Roses";
import Top from "../component/Main/Top";
import New from "../component/Main/New";
import Baloon from "../component/Main/Baloon";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const translatedText = t("sa");

  return (
    <div className="">
      <Banner />
      <div className="container grid grid-cols-4 gap-5 px-5 mx-auto mt-16 max-lg:grid-cols-2 max-xs:grid-cols-1 max-xl:grid-cols-3 max-md:mt-10">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <Ban />
      <div className="flex flex-col lg:gap-20 max-lg:gap-10">
        <Vitrina />
        <New />
        <div className="container px-5 mx-auto max-sm:px-3">
          <Roses />
        </div>
        <Aksi />
        <Top />
        <Baloon />
      </div>
    </div>
  );
}
