import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import Banner from "../component/Card/Banner";
import MainCard from "../component/Card/MainCard";
import Vitrina from "../component/Main/Vitrina";
import Aksi from "../component/Main/Aksi";
import Top from "../component/Main/Top";
import New from "../component/Main/New";
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
    <div>
      <Banner />
      <div className="container grid grid-cols-4 gap-5 px-5 mx-auto mt-16">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className="container px-5 py-20 mx-auto">
        <img src="/img/b3.png" className="w-full" />
      </div>
      <div className="flex flex-col gap-20">
        <Vitrina />
        <New />
        <div className="container px-5 mx-auto">
          <h3 className="text-4xl font-semibold text-dark-400">
            Какие бывают стадии зрелости бутона розы в Эквадоре
          </h3>
          <img src="/img/rose.png" className="w-full mt-8 rounded-xl" />
          <div className="flex py-2 mt-5 text-lg font-medium bg-green-800 shadow-v px-7 text-dark-400 max-w-max rounded-[30px] mb-3">
            Войти в кабинет партнера
          </div>
          <div className="flex  gap-1.5">
            <img src="/img/qr.png" className="w-32" />
            <p className="text-lg max-w-60">
              Наведите камеру и перейдите на каталог и дату поставок
            </p>
          </div>
        </div>
        <Aksi />
        <Top />
      </div>
    </div>
  );
}
