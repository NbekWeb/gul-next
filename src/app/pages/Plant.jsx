"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spin } from "antd";
import Sorts from "@/app/component/Main/Sorts";
import Roses from "@/app/component/Main/Roses";

import { api } from "@/app/utils/api";

export default function HomePage() {
  const t = useTranslations("menu");

  const [loading, setLoading] = useState(0);
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/categories/",
        method: "GET",
      });

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Spin spinning={loading > 0}>
      <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
        <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
          <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
            {t("home")}
          </Link>

          <Link
            href={`/plantation`}
            className="text-green-800 hover:text-green-800"
          >
            | {t("our_plantation")}
          </Link>
        </div>
        <div className="grid grid-cols-2 mb-20 gap-7 max-xl:gap-5 max-lg:grid-cols-1 max-md:mb-10">
          <div className="text-lg text-dark-400 max-xl:text-base">
            <p className="font-medium">{t("plantation_description")} </p>
            <div className="flex flex-col mt-5 text-dark-400/80">
              <span> {t("number_of_varieties")}: .............14</span>
              <span> {t("plantation_area")}</span>
              <span>{t("elevation")}</span>
              <span>{t("number_of_employees")}</span>
            </div>
          </div>
          <img src="/img/plant.png" className="w-full rounded-xl" />
        </div>
        <Sorts data={categories} />
        <Roses />
        <div className="">
          <h3 className="mt-20 mb-10 text-4xl font-semibold max-lg:mt-10 max-sm:mb-5 text-dark-400 max-lg:text-3xl max-md:text-2xl ">
            {t("map")}
          </h3>
          <div className="h-[600px] pb-10 max-lg:h-[400px]">
            <iframe
              className="rounded-xl"
              width="100%"
              height="100%"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d5356e2d6db30647e75f2c8598f960e163a3a8e53feb187f61b241c9ea96364&amp;source=constructor"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Spin>
  );
}
