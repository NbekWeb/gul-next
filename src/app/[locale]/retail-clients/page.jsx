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
          | Розничным клиентам
        </Link>
      </div>
      <h2 className="mb-4 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        Розничным клиентам
      </h2>
      <div className="grid grid-cols-5  mb-20 mt-10 gap-2.5 items-start text-dark-400 text-lg max-sm:text-sm max-lg:mb-2">
        <div className="col-span-3 max-lg:col-span-5">
          <span className="text-2xl text-green-800 max-lg:text-xl">
            Уважаемые Профессионалы цветочного бизнеса, партнеры!
          </span>
          <p>
            Мы понимаем, что простые люди (физические лица) тоже хотят
            сэкономить и недорого купить цветы. Один цветок продать мы, конечно,
            не можем, но покупка одной пачки — вполне допустима. Впрочем, у нас
            такие цены, что один цветок покупать — это просто смешно. Обычно к
            нам заезжают за небольшим букетом, но уезжают еще и с горшечными
            цветами, рассадой, садовыми деревьями и хорошим настроением. Поэтому
            все наши преимущества в виде низких цен на самые свежие цветы
            отличного качества доступны и частным лицам за наличный расчет.
          </p>
          <p>
            Мы составим любой сложности композиции, согласно Вашим пожеланиям.
            Поверьте, они оправдают все Ваши ожидания! Букеты оптом приобретать
            у нас выгодно еще и потому, что наши флористы обладают незаурядной
            фантазией, творческим мышлением. Используя индивидуальный подход к
            каждому клиенту, они создают такие букеты, от которых клиент обычно
            в восторге.
          </p>
          <h3 className="mb-2.5 mt-5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            Что мы предлагаем:
          </h3>
          <p>
            Вы хотели бы быстро и своевременно получать новые поставки цветочных
            композиций, всегда свежих и красочных? Мы с удовольствием поможем в
            этом, предлагая именно такие, выгодные клиенту условия. Это касается
            также разнообразия, постоянного пополнения ассортимента. 
          </p>
          <p className="mt-2.5">
            У нас регулярно появляется что-то новое, уникальные соцветия
            дополняют имеющийся ассортимент прекрасных растений. У Вас есть
            возможность пополнять свой товар новыми растениями на постоянной
            основе. Наши флористы легко сделают букеты, которые будут отличаться
            оригинальностью и красотой.
          </p>
          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>Замечательное оформление</li>
            <li>Только свежие букеты высокого качества</li>
            <li>Приемлемые цены</li>
            <li>Своевременную доставку, все согласно заявке</li>
          </ol>
          <h3 className="mt-12 mb-2.5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            Оптово-розничные гипермаркеты цветов и подарков
          </h3>
          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>низкие цены на цветы и садовые растения</li>
            <li>
              широкий ассортимент свежесрезанных цветов и горшечных растений
            </li>
            <li>круглосуточный график работы</li>
            <li>удобное расположение</li>
          </ol>
          <p>
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
          <img src="/img/market3.png" className="w-full" />
          <img src="/img/market4.png" className="w-full" />
        </div>
      </div>

      <div className="flex items-center justify-center h-12 px-5 mt-4 mb-10 text-white bg-green-800 border-2 border-green-800 max-sm:w-full hover:cursor-pointer lg:hidden max-w-max rounded-3xl hover:bg-white hover:text-green-800">
        Регистрация для оптовых клиентов
      </div>
      <Sorts />
    </div>
  );
}
