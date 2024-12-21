"use client";

import { Link } from "@/i18n/routing";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Select } from "antd";
import { useOrders } from "@/app/content/OrdersContext";

import Icon from "./Icon";
import { api } from "@/app/utils/api";
import { useTranslations } from "next-intl";

export default function Foot() {
  const t = useTranslations("menu");
  const [categories, setCategories] = useState([]);
  const { toggleOpened, opened, logined } = useOrders();

  const [selectedLang, setSelectedLang] = useState("ru");

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru");
      router.push(newPath);
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en");
      router.push(newPath);
    }
  };

  const changeLang = (value) => {
    setSelectedLang(value);
    switchLanguage();
  };

  const getCategory = async () => {
    try {
      const response = await api({
        url: "/flower/categories/",
        method: "GET",
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="border-t border-gray-800 max-sm:border-transparent ">
      <div className="container px-5 pt-10 pb-6 mx-auto overflow-x-hidden max-xs:p-0 max-sm:px-3 max-lg:pt-6 max-sm:pt-3 ">
        <div className="grid justify-between grid-cols-5 rounded-md max-xs:bg-gray-100 max-lg:gap-6 max-sm:flex max-sm:flex-col max-lg:grid-cols-6 max-sm:px-10 max-sm:py-3 max-sm:gap-4">
          <div className="flex flex-col gap-8 text-base capitalize text-dark-400 max-xl:text-sm max-lg:order-3 max-lg:col-span-2 max-sm:gap-4">
            <Link href={`/plantation`}>{t("aboutUs")}</Link>
            <Link href={`/payment`}>{t("payment")}</Link>
            <Link href={`/delivery`}> {t("delivery")}</Link>
            <Link href={`/flower-subscription`}>{t("subscription")}</Link>
          </div>
          <div className="flex max-lg:order-4 sm:justify-center max-lg:col-span-2 ">
            <div>
              <Link
                href={`/catalog`}
                className="text-base font-semibold text-black"
              >
                {t("catalog")}
              </Link>
              <div className="flex flex-col gap-2.5 mt-8 text-sm text-black/60 max-sm:mt-4 max-sm:gap-1.5">
                <Link href={`/catalog`}> {t("allProduct")}</Link>
                {categories.map((category, i) => (
                  <Link href={`/catalog?category=[${category.id}]`} key={i}>
                    {category?.translations?.[selectedLang]?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex max-lg:order-5 max-lg:justify-end max-lg:col-span-2 lg:justify-center max-sm:justify-start">
            <div className="">
              <span className="text-base font-semibold text-black">
                {t("title")}
              </span>
              <div className="flex flex-col gap-2.5 mt-8 text-sm text-black/60 max-sm:mt-4 max-sm:gap-1.5">
                {!logined && <span onClick={() => goOpen()}>{t("login")}</span>}
                <Link href={`/hystory`}>{t("orderHistory")}</Link>
                <Link href={`/favorite`}>{t("favorites")}</Link>
              </div>
            </div>
          </div>
          <div className="flex max-lg:order-2 max-lg:col-span-4 max-lg:justify-end max-md:col-span-3 max-sm:justify-start ">
            <div className="max-lg:flex max-lg:gap-3 max-md:gap-2 max-md:items-center max-sm:gap-4 max-xs:flex-col max-xs:w-full max-xs:items-start ">
              <span className="text-base font-semibold text-black max-lg:hidden ">
                {t("contacts")}
              </span>
              <div className="flex gap-2 text-lg font-semibold lg:flex-col xs:mt-2 text-dark-400 max-lg:mt-0 max-md:flex-col max-xs:mx-auto">
                <a href="tel:+7(981) 104 18 10">+7 981-104-18-10</a>
                <a href="tel:+7(981) 104 18 10">+7 981-104-18-10</a>
              </div>
              <div className="flex items-center h-6 gap-4 max-xl:gap-2 lg:mt-2 max-md:gap-1 max-xs:hidden ">
                <img src="/img/tg.png" className="h-full" />
                <img src="/img/wk.png" className="h-full" />
                <img src="/img/wt.png" className="h-full" />
                <a href="https://vk.com/flowersandopt" target="_blank">
                  <img src="/img/vk.png" className="h-full" />
                </a>
                <img src="/img/yt.png" className="h-full" />
              </div>

              <div className="flex items-center justify-between w-full h-6 gap-4 pt-5 text-xl text-gray-900 border-b border-gray-900 max-xs:text-lg xs:hidden max-md:pb-10 max-xs:justify-between">
                <span className="flex items-center justify-center border border-gray-900 rounded-full w-11 h-11 max-xs:min-w-9 max-xs:h-9 hover:bg-gray-900 hover:text-white tr3">
                  <Icon type="wk" />
                </span>
                <span className="flex items-center justify-center border border-gray-900 rounded-full w-11 h-11 max-xs:min-w-9 max-xs:h-9 hover:bg-gray-900 hover:text-white tr3">
                  <Icon type="face" />
                </span>
                <span className="flex items-center justify-center border border-gray-900 rounded-full w-11 h-11 max-xs:min-w-9 max-xs:h-9 hover:bg-gray-900 hover:text-white tr3">
                  <Icon type="insta" />
                </span>
                <span className="flex items-center justify-center border border-gray-900 rounded-full w-11 h-11 max-xs:min-w-9 max-xs:h-9 hover:bg-gray-900 hover:text-white tr3">
                  <Icon type="tg" />
                </span>
                <span className="flex items-center justify-center border border-gray-900 rounded-full w-11 h-11 max-xs:min-w-9 max-xs:h-9 hover:bg-gray-900 hover:text-white tr3">
                  <Icon type="ws" />
                </span>
              </div>
            </div>
          </div>
          <div className="max-lg:order-1 max-lg:col-span-2 max-md:col-span-3">
            <div className="flex flex-col gap-5 max-lg:gap-3 ">
              <div className="flex items-center gap-2 max-xs:grid max-xs:grid-cols-2 max-sm:justify-between ">
                <Link
                  href={`/`}
                  className="lg:hidden max-md:col-span-3 max-xs:justify-center max-xs:flex max-xs:mb-2"
                >
                  <img src="/img/logo.png" alt="logo" className="w-10 " />
                </Link>
                <div className="flex items-center none-select ">
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
                <div className="max-xs:flex max-xs:justify-end">
                  <Select
                    defaultValue="moskva"
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
                    <Select.Option value="moskva">{t("moskva")}</Select.Option>
                    <Select.Option value="ams">{t("amsterdam")}</Select.Option>
                    <Select.Option value="newest">{t("quito")}</Select.Option>
                  </Select>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-base font-medium text-dark-400 max-lg:hidden">
                <div className="flex items-center gap-1">
                  <img src="/img/watch.png" className="w-6" />
                  <span>{t("quito")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/watch.png" className="w-6" />
                  <span>{t("moskva")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/watch.png" className="w-6" />
                  <span>{t("amsterdam")}</span>
                </div>
              </div>
              <Link
                href={`/`}
                className="flex items-center gap-2.5 max-lg:hidden"
              >
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-10 max-lg:w-8"
                />
                <span className="text-xl font-medium text-pink-500 max-lg:hidden">
                  FLOWERS&OPT
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
