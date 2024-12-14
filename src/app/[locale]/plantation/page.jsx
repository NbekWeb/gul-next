"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Sorts from "@/app/component/Main/Sorts";
import Roses from "@/app/component/Main/Roses";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>

        <Link href={`/plantation`} className="text-green-800">
          | Наша плантаци
        </Link>
      </div>
      <div className="grid grid-cols-2 mb-20 gap-7 max-xl:gap-5 max-lg:grid-cols-1 max-md:mb-10">
        <div className="text-lg text-dark-400 max-xl:text-base">
          <p className="font-medium">
            Наша плантация находится в 100 км на юг от столицы Эквадора Кито,
            недалеко от городка Латакунга. На благодатных склонах вулкана
            Котопакси, до которого всего 30 км напрямую, сама природа
            позаботиласть об идеальных условиях для выращивания роз.
          </p>
          <div className="flex flex-col mt-5 text-dark-400/80">
            <span>Кол-во сортов: .............14</span>
            <span>Площадь плантации: ........ 5 га</span>
            <span> Высота над уровнем моря:........ 2800 м</span>
            <span>
              Кол-во сотрудников:........................ 25 рабочих + 2
              менеджера
            </span>
          </div>
        </div>
        <img src="/img/plant.png" className="w-full rounded-xl" />
      </div>
      <Sorts />
      <Roses />
      <div className="">
        <h3 className="mt-20 mb-10 text-4xl font-semibold max-lg:mt-10 max-sm:mb-5 text-dark-400 max-lg:text-3xl max-md:text-2xl ">
          Карта
        </h3>
        <div className="h-[600px] pb-10 max-lg:h-[400px]">
          <iframe
            className="rounded-xl"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.59582507668!2d69.2903145!3d41.3394014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e14956af57%3A0x8844f705a66e4f7c!2sLor777!5e0!3m2!1sen!2s!4v1725197418502!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
