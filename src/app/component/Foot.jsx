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
          <div className="flex items-center gap-2">
            <div className="relative">
              {!isOpen && (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="flex items-center justify-center text-black-400"
                >
                  {selectedLang === "ru" ? "RU" : "EN"}
                  <span className="ml-2 flex chevron items-center rotate-0 justify-center w-4 h-4 text-white bg-pink-500 rounded-full text-[8px]">
                    <Icon type="chevron" />
                  </span>
                </button>
              )}
              {isOpen && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center text-black-400"
                >
                  {selectedLang === "ru" ? "RU" : "EN"}
                  <span className="ml-2 flex chevron items-center rotate-180 justify-center w-4 h-4 text-white bg-pink-500 rounded-full text-[8px]">
                    <Icon type="chevron" />
                  </span>
                </button>
              )}

              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 w-16 mt-2 bg-white rounded-lg top-full"
                >
                  <button
                    onClick={() => changeLang("ru")}
                    className="w-full p-2 text-center rounded-t-lg hover:bg-gray-200"
                  >
                    RU
                  </button>
                  <button
                    onClick={() => changeLang("en")}
                    className="w-full p-1 text-center rounded-b-lg hover:bg-gray-200"
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            <div className="relative flex items-center px-2 rounded-md custom-select-icon shadow-select">
              <span className="text-sm font-medium text-black/50">
                Ваш город
              </span>

              <div className="flex items-center min-w-28 ">
                <div
                  ref={countryDropdownRef}
                  className="relative w-full cursor-pointer"
                  onClick={() => setIsOpenCountry(!isOpenCountry)}
                >
                  <div className="flex items-center justify-between p-2 ">
                    <span>{selectedCountry}</span>
                    <span
                      className={`flex chevron items-center justify-center w-4 h-4 text-white bg-pink-500 rounded-full text-[8px] ${
                        isOpenCountry && "rotate-180"
                      }`}
                    >
                      <Icon type="chevron" />
                    </span>
                  </div>

                  {isOpenCountry && (
                    <div className="absolute left-0 w-full mt-2 bg-white rounded-lg shadow-lg top-full">
                      <button
                        onClick={() => changeCountry("Москва")}
                        className="w-full p-2 text-center rounded-t-lg hover:bg-gray-200"
                      >
                        Москва
                      </button>
                      <button
                        onClick={() => changeCountry("Амстердам")}
                        className="w-full p-2 text-center hover:bg-gray-200"
                      >
                        Амстердам
                      </button>
                      <button
                        onClick={() => changeCountry("Кито")}
                        className="w-full p-2 text-center rounded-b-lg hover:bg-gray-200"
                      >
                        Кито
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
