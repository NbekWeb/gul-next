"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Top from "@/app/component/Main/Top";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container px-5 mx-auto overflow-x-hidden text-lg max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>

        <Link href={`/clients`} className="text-green-800">
          | Доставка
        </Link>
      </div>
      <h2 className="mb-4 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        Доставка
      </h2>
      <div className="grid grid-cols-5 gap-5 mb-20">
        <div className="col-span-3 max-lg:col-span-5">
          <span className="text-2xl text-green-800 max-xl:text-xl">
            Бесплатная доставка цветов в пределах МКАД
          </span>
          <div className="mt-2.5 flex flex-col gap-2.5">
            <div className="">
              <p className="font-semibold text-green-800">
                1. География доставки:
              </p>
              Мы предлагаем бесплатную доставку цветов в рамках Московской
              кольцевой автомобильной дороги (МКАД).
            </div>

            <div className="">
              <p className="font-semibold text-green-800">2. Рабочее время:</p>
              Доставка осуществляется в рабочие часы с 08:00 до 20:00.
            </div>
            <div className="">
              <p className="font-semibold text-green-800">
                3. Интервалы доставки:
              </p>
              Вы можете выбрать удобный для вас двухчасовой интервал доставки,
              например, с 10:00 до 12:00.
            </div>
            <div className="">
              <p className="font-semibold text-green-800">4. Правила заказа:</p>
              Заказ на доставку следует оформить минимум за 4 часа до начала
              выбранного интервала.
            </div>
            <div className="">
              <p className="font-semibold text-green-800">
                5. Доставка в день заказа:
              </p>
              Для получения цветов в день заказа, необходимо оформить заказ до
              14:00.
            </div>
          </div>
          <h2 className="text-4xl font-semibold mt-7 max-lg:text-3xl max-md:text-2xl max-2xl:mt-4">
            Платная доставка цветов за пределы МКАД
          </h2>
          <div className="mt-2.5 flex flex-col gap-2.5">
            <div className="">
              <p className="font-semibold text-green-800">
                1. Расчет стоимости:
              </p>
              Стоимость доставки определяется в зависимости от расстояния от
              МКАД:
              <ol className="list-disc list-inside ">
                <li>До 5 км: 500 рублей</li>
                <li>От 6 до 10 км:  1000 рублей </li>
                <li>От 11 до 15 км: 1500 рублей</li>
              </ol>
            </div>

            <div className="">
              <p className="font-semibold text-green-800">
                2. Определение километража:
              </p>
              Расстояние до места доставки измеряется от ближайшего к точке
              заказа шоссе, ведущего из центра Москвы.
            </div>
            <div className="">
              <p className="font-semibold text-green-800">3. Время доставки:</p>
              Сроки доставки могут увеличиваться для адресов, расположенных за
              пределами МКАД.
            </div>
          </div>
        </div>
        <div className="col-span-2 max-lg:col-span-5">
          <img src="/img/delivery.png" className="w-full" />
        </div>
      </div>

      <Top />
    </div>
  );
}
