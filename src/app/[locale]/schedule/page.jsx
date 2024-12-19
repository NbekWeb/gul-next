"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/routing";

import Sorts from "@/app/component/Main/Sorts";
import Top from "@/app/component/Main/Top";

import { api } from "@/app/utils/api";

export default function HomePage() {
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

  const [loading, setLoading] = useState(0);
  const [flowersAll, setFlowersAll] = useState([]);
  const [categories, setCategories] = useState([]);

  const holidays = {
    ru: {
      Сентябрь: [
        "1 сентября - День знаний",
        "27 сентября - День воспитателя и дошкольного работника",
        "30 сентября - Вера, Надежда, Любовь",
      ],
      Октябрь: [
        "1 октября - Международный день пожилых людей",
        "5 октября - День учителя",
        "30 октября - День тренера",
      ],
      Июнь: [
        "1 июня - Международный день защиты детей",
        "12 июня - День России",
        "18 июня - День медицинского работника",
        "23 июня - ТРОИЦА",
      ],
      Июль: [
        "7 июля - Ивана Купала",
        "8 июля - Всеросийский день семьи любви и верности",
      ],
      Май: [
        "5 мая - ПАСХА",
        "9 мая - День Победы",
        "12 мая - Красная горка",
        "15 мая - Международный день семьи",
      ],
      Февраль: [
        "14 февраля - День Св. Валентина",
        "15 февраля - Сретение Господне",
        "23 февраля - День Защитника Отечества",
      ],
    },
    en: {
      September: [
        "September 1 - Knowledge Day",
        "September 27 - Teacher and Preschool Worker Day",
        "September 30 - Faith, Hope, Love",
      ],
      October: [
        "October 1 - International Day of Older Persons",
        "October 5 - Teacher's Day",
        "October 30 - Coach's Day",
      ],
      June: [
        "June 1 - International Children's Protection Day",
        "June 12 - Russia Day",
        "June 18 - Medical Worker Day",
        "June 23 - Trinity Day",
      ],
      July: [
        "July 7 - Ivan Kupala",
        "July 8 - All-Russian Day of Family, Love, and Fidelity",
      ],
      May: [
        "May 5 - Easter",
        "May 9 - Victory Day",
        "May 12 - Red Hill",
        "May 15 - International Day of Families",
      ],
      February: [
        "February 14 - St. Valentine's Day",
        "February 15 - Meeting of the Lord",
        "February 23 - Defender of the Fatherland Day",
      ],
    },
  };

  const getCategory = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/categories/",
        method: "GET",
      });

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };
  const getFlowersAll = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/flowers/all/",
        method: "GET",
      });

      setFlowersAll(response.data.results);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    getCategory();
    getFlowersAll();
  }, []);

  return (
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          {t("home")}
        </Link>

        <Link
          href={`/plantation`}
          className="text-green-800 hover:text-green-800"
        >
          | {t("holiday_schedule")}
        </Link>
      </div>
      <h3 className="mb-5 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        {t("holiday_calendar_title")}
      </h3>
      <div className="grid items-start grid-cols-2 gap-10 mb-20 text-lg text-black max-md:mb-10 auto-rows-auto max-sm:text-sm">
        {Object.entries(holidays[selectedLang]).map(([month, events]) => (
          <div key={month} className="flex flex-col gap-2.5">
            <span className="text-3xl font-semibold text-green-800 max-lg:text-2xl max-md:text-xl">
              {month}:
            </span>
            <ul className="flex flex-col gap-2">
              {events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Sorts data={categories} />
      {flowersAll.length >= 0 && (
        <>
          <Top data={flowersAll} onUpdate={()=>getFlowersAll()} />
        </>
      )}
    </div>
  );
}
