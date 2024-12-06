"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Select } from "antd";

import Icon from "./Icon";

const { Option } = Select;

export default function Foot() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [selectedCountry, setSelectedCountry] = useState("Москва");

  const router = useRouter();
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru");
      router.push(newPath);
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en");
      router.push(newPath);
    }
  };
  const changeCountry = (value) => {
    setSelectedCountry(value);
  };
  const changeLang = (value) => {
    setSelectedLang(value);
    switchLanguage();
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the language dropdown if clicked outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      // Close the country dropdown if clicked outside of it
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsOpenCountry(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-t border-gray-800">
      <div className="container flex justify-between px-5 pt-10 pb-6 mx-auto">
        <div className="flex flex-col gap-8 text-base capitalize text-dark-400">
          <Link href={`/${selectedLang}/aboutUs`}>О нас</Link>
          <Link href={`/${selectedLang}/payment`}>Оплата</Link>
          <Link href={`/${selectedLang}/delivery`}> доставка</Link>
          <Link href={`/${selectedLang}/flower-subscription`}>
            подписка на цветы
          </Link>
        </div>
        <div>
          <Link
            href={`/${selectedLang}/catalog`}
            className="text-base font-semibold text-black"
          >
            Каталог
          </Link>
          <div className="flex flex-col gap-2.5 mt-8 text-sm text-black/60 ">
            <Link href={`/${selectedLang}/catalog`}> Все товары</Link>
            <Link href={`/${selectedLang}/catalog`}>
              Стоматологические материалы{" "}
            </Link>
            <Link href={`/${selectedLang}/catalog`}>
              {" "}
              Стоматологические инструменты
            </Link>
            <Link href={`/${selectedLang}/catalog`}> Хирургия</Link>
            <Link href={`/${selectedLang}/catalog`}> Инфузионные системы</Link>
            <Link href={`/${selectedLang}/catalog`}> Уход за стомой</Link>
            <Link href={`/${selectedLang}/catalog`}> Ортопедия</Link>
          </div>
        </div>
        <div>
          <span className="text-base font-semibold text-black">
            Личный кабинет
          </span>
          <div className="flex flex-col gap-2.5 mt-8 text-sm text-black/60 ">
            <Link href={`/${selectedLang}/login`}>Войти</Link>
            <Link href={`/${selectedLang}/regis`}>Зарегистрироваться</Link>
            <Link href={`/${selectedLang}/hystory`}>История заказов</Link>
            <Link href={`/${selectedLang}/favorite`}>Избранные товары</Link>
          </div>
        </div>
        <div>
          <span className="text-base font-semibold text-black">Контакты</span>
          <div className="flex flex-col gap-2 mt-2 text-lg font-semibold text-dark-400 ">
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
            <div className="flex items-center h-6 gap-6">
              <img src="/img/tg.png" className="h-full" />
              <img src="/img/wk.png" className="h-full" />
              <img src="/img/wt.png" className="h-full" />
              <img src="/img/vk.png" className="h-full" />
              <img src="/img/yt.png" className="h-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
          <div className="flex items-center none-select">
          <Select
              value={selectedLang}
              className=""
              onChange={(val) => changeLang(val)}
              suffixIcon={
                <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              }
              style={{ width: 70 }}
            >
              <Select.Option value="ru">RU</Select.Option>
              <Select.Option value="en">EN</Select.Option>
            </Select>
          </div>
            <Select
              defaultValue="Москва "
              suffixIcon={
                <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              }
              style={{ width: 120 }}
            >
              <Select.Option value="moskva">Москва</Select.Option>
              <Select.Option value="ams">Амстердам</Select.Option>
              <Select.Option value="newest">Кито</Select.Option>
            </Select>
          </div>
          <div className="flex items-center gap-4 text-base font-semibold text-dark-400">
            <div className="flex items-center gap-2">
              <img src="/img/watch.png" className="w-9" />
              <span>Кито</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/watch.png" className="w-9" />
              <span>Москва</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/watch.png" className="w-9" />
              <span>Амстердам</span>
            </div>
          </div>
          <Link href={`/${selectedLang}`} className="flex items-center gap-2.5">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <span className="text-xl font-medium text-pink-500">
              FLOWERS&OPT
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
