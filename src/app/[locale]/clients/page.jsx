"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Sorts from "@/app/component/Main/Sorts";
import { api } from "@/app/utils/api";

export default function HomePage() {
  const t = useTranslations("menu");

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(0);

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
    <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          {t("home")}
        </Link>

        <Link href={`/clients`} className="text-green-800">
          | {t("clients")}
        </Link>
      </div>
      <h2 className="mb-4 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        {t("clients")}
      </h2>
      <div className="grid grid-cols-5  mb-20 max-lg:mb-2 mt-10 gap-2.5 items-start text-dark-400 text-lg max-sm:text-sm">
        <div className="col-span-3 max-lg:col-span-5">
          <span className="text-2xl text-green-800 max-lg:text-xl">
            {t("greeting")}
          </span>
          <p>{t("unique_service")}</p>
          <p>{t("clientsF")}</p>
          <h3 className="mb-2.5 mt-5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            {t("benefits_title")}
          </h3>
          <p>{t("clientDoc")}</p>
          <h3 className="mt-12 mb-2.5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            {t("fresh_flowers_title")}
          </h3>
          <p>{t("compR")} </p>
          <p className="pt-2.5">{t("clientGotov")} </p>
          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>{t("small_wholesale_benefits")}</li>
            <li>{t("selectClient")}</li>
            <li>{t("wholesale_offer")}</li>
            <li>{t("clientDemoc")}</li>
          </ol>
          <h3 className="mt-12 mb-2.5 text-3xl font-semibold max-lg:text-3xl max-md:text-xl">
            {t("wholesale_offer_title")}
          </h3>
          <p>{t("clientMdh")}</p>

          <ol className="pl-1.5 mt-2.5 list-decimal list-inside border-l-2 border-green-800">
            <li>{t("clientCheap")}</li>
            <li>{t("clientS")}</li>
            <li>{t("clientWork")}</li>
            <li>{t("clientSet")}</li>
          </ol>
          <p className="pt-2.5">{t("clientKurup")}</p>
          <div className="flex items-center justify-center h-12 px-5 mt-4 text-white bg-green-800 border-2 border-green-800 max-lg:hidden hover:cursor-pointer max-w-max rounded-3xl hover:bg-white hover:text-green-800">
            {t("registration_info")}
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-7 max-lg:col-span-5 max-lg:gap-5">
          <img src="/img/market1.png" className="w-full" />
          <img src="/img/market2.png" className="w-full" />
        </div>
      </div>
      <div className="flex items-center justify-center h-12 px-5 mt-4 mb-10 text-white bg-green-800 border-2 border-green-800 max-sm:w-full hover:cursor-pointer lg:hidden max-w-max rounded-3xl hover:bg-white hover:text-green-800">
        {t("registration")}
      </div>

      <Sorts data={categories} />
    </div>
  );
}
