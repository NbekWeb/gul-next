"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";

export default function Menu() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [selectedCountry, setSelectedCountry] = useState("Москва");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);

  const changeLang = (newLang) => {
    setSelectedLang(newLang);
    setIsOpen(false);
    if (selectedLang !== newLang) {
      switchLanguage();
    }
  };

  const changeCountry = (value) => {
    setSelectedCountry(value);
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru");
      router.push(newPath);
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en");
      router.push(newPath);
    }
  };

  const getBorderClass = (path) => {
    return pathname.startsWith(`/${selectedLang}${path}`)
      ? "border-pink-500"
      : "border-transparent";
  };

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
    <div className="container px-5 mx-auto">
      <div className="flex items-center justify-between py-5">
        <Link href={`/${selectedLang}`} className="flex items-center gap-2.5">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <span className="text-xl font-medium text-pink-500">FLOWERS&OPT</span>
        </Link>
        <div className="flex items-center gap-4">
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
            <span className="text-sm font-medium text-black/50">Ваш город</span>

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
          <div className="flex items-center gap-4 text-lg font-semibold text-dark-400">
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-8 text-base font-semibold capitalize">
          <Link
            href={`/${selectedLang}/catalog`}
            className={`flex gap-1.5 items-center border-b pb-1 ${getBorderClass(
              "/catalog"
            )} hover:border-pink-500`}
          >
            <span>Каталог</span>
            <img src="/img/flower.png" className="w-4" />
          </Link>

          <Link
            href={`/${selectedLang}/aboutUs`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/aboutUs"
            )}`}
          >
            О нас
          </Link>

          <Link
            href={`/${selectedLang}/payment`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/payment"
            )}`}
          >
            Оплата
          </Link>
          <Link
            href={`/${selectedLang}/delivery`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/delivery"
            )}`}
          >
            доставка
          </Link>
          <Link
            href={`/${selectedLang}/flower-subscription`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/flower-subscription"
            )}`}
          >
            подписка на цветы
          </Link>
          <Link
            href={`/${selectedLang}/return`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/return"
            )}`}
          >
            Возврат
          </Link>
          <Link
            href={`/${selectedLang}/corporate-client`}
            className={`flex gap-1.5 items-center border-b pb-1 hover:border-pink-500 ${getBorderClass(
              "/corporate-client"
            )}`}
          >
            Корпоративным клиентам
          </Link>
        </div>
        <div className="flex gap-5 text-2xl text-dark-400">
          <Icon type="search" />
          <Link href={`/${selectedLang}/favorite`}>
            <Icon type="heart" />
          </Link>
          <Link href={`/${selectedLang}/basket`}>
            <span className="relative">
              <Icon type="bag" />
              <span className="w-[14px] h-[14px] rounded-full bg-green-700 text-[10px] flex items-center justify-center text-white absolute top-0 right-0">
                1
              </span>
            </span>
          </Link>
          <Icon type="user" />
        </div>
      </div>
    </div>
  );
}
