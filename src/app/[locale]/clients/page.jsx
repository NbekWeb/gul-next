"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Sorts from "@/app/component/Main/Sorts";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>

        <Link href={`/clients`} className="text-green-800">
          | Оптовым клиентам
        </Link>
      </div>
      <h2 className="mb-4 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        Оптовым клиентам
      </h2>
      <div className="grid grid-cols-5  mb-20 max-lg:mb-2 mt-10 gap-2.5 items-start text-dark-400 text-lg max-sm:text-sm">
        <div className="col-span-3 max-lg:col-span-5">
          <span className="text-2xl text-green-800 max-lg:text-xl">
            Уважаемые Профессионалы цветочного бизнеса, партнеры!
          </span>
          <p>
            Наша компания уже сегодня может предложить уникальную услугу по
            закупке цветов непосредственно от производителя! Огромный цветочный
            ассортимент, который вы сможете купить напрямую с
            голландских цветочных аукционов в режиме реального времени и по
            аукционным ценам, а также роза, купленная непосредственно на
            эквадорских и колумбийских плантациях, поможет вам стать более
            конкурентноспособными на цветочном рынке!
          </p>
          <p>
            Профессиональные флористы, владельцы цветочных магазинов, бутиков,
            интернет-магазины доставки цветов, федеральные государственные
            организации — наши настоящие и будущие клиенты.
          </p>
          <h3 className="mb-2.5 mt-5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            Выгодное сотрудничество с оптовой базой цветов «Планета Флора»
          </h3>
          <p>
            Дело в том, что наша компания не просто предоставляет возможность
            покупать цветы напрямую от производителей. Мы не бросаем своих
            клиентов один на один с транспортными компаниями, таможенными
            брокерами и с ворохом необходимых документов в ценах, ставках и в
            количестве которых можно запутаться и запросто потеряться. Работая с
            нами, вы получаете весь спектр услуг, связанных с закупкой цветов
            оптом в Голландии, Эквадоре, Колумбии, Кении и других странах, как в
            совокупности, так и каждого этапа в отдельности.
          </p>
          <h3 className="mt-12 mb-2.5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            Закупайте оптом только свежие цветы
          </h3>
          <p>
            Компания располагает складом с холодильным оборудованием и
            необходимыми условиями для поддержания температурного режима.
            Ознакомиться с актуальными товарными позициями можно в оранжерее или
            садовом центре.
          </p>
          <p className="pt-2.5">
            Компания готова предложить для небольших оптовых клиентов следующие
            преимущества сотрудничества:
          </p>
          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>
              Регулярное обновление ассортимента растений и высокое качество
              продукции;
            </li>
            <li>Широкий выбор роз, цветов для выращивания дома и в саду;</li>
            <li>
              Широкий ассортимент свежесрезанных цветов и все необходимое для
              работы флористов;
            </li>
            <li>
              Демократичные цены на позиционируемую продукцию благодаря прямому
              сотрудничеству с поставщиками.
            </li>
          </ol>
          <h3 className="mt-12 mb-2.5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            Предложение для оптовиков
          </h3>
          <p>
            Компания предлагает для оптовых покупателей широкий ассортимент
            цветов и горшечных растений по оптовым ценам. Компания занимает одно
            из ведущих мест в регионе по масштабам сотрудничества с поставщиками
            из России, стран СНГ, Израиля, Голландии, Колумбии и Эквадора.
          </p>

          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>низкие цены на цветы и садовые растения</li>
            <li>
              широкий ассортимент свежесрезанных цветов и горшечных растений
            </li>
            <li>круглосуточный график работы</li>
            <li>удобное расположение</li>
          </ol>
          <p className="pt-2.5">
            Крупный и мелкий опт цветов позволит обеспечить постоянные поставки
            свежесрезанных и горшечных цветов для сетей цветочных салонов и
            больших магазинов. В ассортименте представлено свыше 300 сезонных
            цветов, зелень, необходимые материалы и инструменты для работы
            флористов.
          </p>
          <div className="flex items-center justify-center h-12 px-5 mt-4 text-white bg-green-800 border-2 border-green-800 max-lg:hidden hover:cursor-pointer max-w-max rounded-3xl hover:bg-white hover:text-green-800">
            Регистрация для оптовых клиентов
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-7 max-lg:col-span-5 max-lg:gap-5">
          <img src="/img/market1.png" className="w-full" />
          <img src="/img/market2.png" className="w-full" />
        </div>
      </div>
      <div className="flex items-center justify-center h-12 px-5 mt-4 mb-10 text-white bg-green-800 border-2 border-green-800 max-sm:w-full hover:cursor-pointer lg:hidden max-w-max rounded-3xl hover:bg-white hover:text-green-800">
        Регистрация для оптовых клиентов
      </div>

      <Sorts />
    </div>
  );
}
