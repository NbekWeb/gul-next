"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Aksi from "@/app/component/Main/Aksi";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>

        <Link href={`/plantation`} className="text-green-800">
          | Пример расчета
        </Link>
      </div>
      <div className="grid grid-cols-2 mb-20 text-lg max-sm:text-sm text-dark-400 max-xl:text-base gap-7 max-xl:gap-5 max-lg:grid-cols-1 max-md:mb-10">
        <div className="">
          <p className="font-medium">
            Вы хотите закупить партию розы разных сортов длиной 70 см и объемом
            5 фуллбоксов. В одном фуллбоксе - 500 роз длиной 70 см *, значит ваш
            заказ составит 5*500=2500 роз.
          </p>

          <ol className="mt-4 list-disc list-inside">
            <li>1 фуллбокс Пинк флойд супер-премиум - 325$ (0.65$ за шт.)-</li>
            <li>1 фуллбокс Фридом премиум - 185$ (0.37$ за шт.)</li>
            <li>2 фуллбокса Микс из нескольких сортов - 400$ (0.40$ за шт.)</li>
            <li>
              1 фуллбокс Свитнесс премиум - 185$ (0.37$ за шт.) Сумма:
              325$+185$+400$+185$ = 1095$ (1095$ /2500 шт.=0.438$ за шт.
              по-среднему)
            </li>
          </ol>
          <div>
            <p className="font-semibold text-green-800">
              Теперь считаем доставку в Москву.
            </p>
            <ul>
              <li>Кито-Амстердам - 105$ за фуллбокс.</li>
              <li>Амстердам-Москва - 91$ за фуллбокс.</li>
              <li>Прекулинг - 12$ за фуллбокс**. </li>
              <li>За 5 фуллбоксов получаем: 525$ + 455$ + 60$ = 1040$.</li>
            </ul>
            <p className="font-semibold text-green-800">
              ИТОГО: 1095$ $ + 1040$ = 2135$.
            </p>
          </div>
        </div>
        <div>
          <img src="/img/example.png" className="w-full rounded-xl" />
          <p className="pt-2 font-medium text-green-800">
            * Растаможивание включено в стоимость. Оплата за первый этап
            осуществляется в Эквадоре, за второй - транспортной компании в
            Москве.
          </p>
        </div>
      </div>
      <Aksi />
    </div>
  );
}
