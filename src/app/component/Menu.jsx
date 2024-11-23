"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Select } from "antd";
import { useState, useEffect } from "react";
import Icon from "./Icon";

export default function Menu() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [selectedCountry, setSelectedCountry] = useState("moskva");

  const router = useRouter();
  const pathname = usePathname();
  const changeLang = (value) => {
    setSelectedLang(value);
    switchLanguage();
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

  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between py-5 border ">
        <div className="flex items-center gap-2.5">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <span className="text-xl font-medium text-pink-500">FLOWERS&OPT</span>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="custom-select-icon">
            <Select
              value={selectedLang}
              onChange={changeLang}
              className=""
              suffixIcon={
                <span className="flex chevron items-center justify-center w-4 h-4 text-white bg-pink-500 rounded-full text-[8px] ">
                  <Icon type="chevron" />
                </span>
              }
            >
              <Select.Option value="ru">RU</Select.Option>
              <Select.Option value="en">EN</Select.Option>
            </Select>
          </div>
          <div className="flex items-center px-2 rounded-md shadow-select">
            <span className="text-sm font-medium text-black/50">Ваш город</span>

            <div className="flex items-center min-w-28 custom-select-icon">
              <Select
                value={selectedCountry}
                onChange={changeCountry}
                suffixIcon={
                  <span className="flex chevron items-center justify-center w-4 h-4 text-white bg-pink-500 rounded-full text-[8px] ">
                    <Icon type="chevron" />
                  </span>
                }
              >
                <Select.Option value="moskva">Москва</Select.Option>
                <Select.Option value="amsterdam">Амстердам</Select.Option>
                <Select.Option value="china">Кито</Select.Option>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-4 text-base font-semibold text-black-400">
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
          <div className="flex items-center gap-4 text-lg font-semibold text-black-400">
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
            <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
          </div>
        </div>
        {/* <button onClick={switchLanguage}>Switch Language</button> */}
      </div>
      <div>
        <div className="flex items-center gap-8 text-base font-semibold">
          <Link
            href={`/${selectedLang}/catalog`}
            className={`flex gap-1.5 items-center border-b pb-1 ${getBorderClass(
              "/catalog"
            )}`}
          >
            <span>Каталог</span>
            <img src="/img/flower.png" className="w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
