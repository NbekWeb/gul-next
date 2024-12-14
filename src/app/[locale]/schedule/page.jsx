"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Sorts from "@/app/component/Main/Sorts";
import Top from "@/app/component/Main/Top";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const holidays = {
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
  };

  return (
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>

        <Link href={`/plantation`} className="text-green-800">
          | График праздников
        </Link>
      </div>
      <h3 className="mb-5 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        Календарь праздников 2024
      </h3>
      <div className="grid items-start grid-cols-2 gap-10 mb-20 text-lg text-black max-md:mb-10 auto-rows-auto max-sm:text-sm">
        {Object.entries(holidays).map(([month, events]) => (
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
      <Sorts />
      <Top />
    </div>
  );
}
