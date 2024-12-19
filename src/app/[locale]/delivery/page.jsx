"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { api } from "@/app/utils/api";
import { Spin } from "antd";
import Top from "@/app/component/Main/Top";

export default function HomePage() {
  const t = useTranslations("menu");
  const [flowersAll, setFlowersAll] = useState([]);
  const [loading, setLoading] = useState(0);

  const getFlowersAll = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/flowers/all/",
        method: "GET",
      });

      setFlowersAll(response.data.results);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getFlowersAll();
  }, []);

  return (
    <div className="container px-5 mx-auto overflow-x-hidden text-lg max-sm:px-3">
      <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          {t("home")}
        </Link>

        <Link href={`/clients`} className="text-green-800">
          | {t("delivery")}
        </Link>
      </div>
      <h2 className="mb-4 text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
        {t("delivery")}
      </h2>
      <div className="grid grid-cols-5 gap-5 mb-20">
        <div className="col-span-3 max-lg:col-span-5">
          <span className="text-2xl text-green-800 max-xl:text-xl">
            {t("delivery_1")}
          </span>
          <div className="mt-2.5 flex flex-col gap-2.5">
            <div className="">
              <p className="font-semibold text-green-800">{t("delivery_3")}</p>
              {t("delivery_2")}
            </div>

            <div className="">
              <p className="font-semibold text-green-800"> {t("delivery_4")}</p>
              {t("delivery_5")}
            </div>
            <div className="">
              <p className="font-semibold text-green-800">{t("delivery_6")}</p>
              {t("delivery_7")}
            </div>
            <div className="">
              <p className="font-semibold text-green-800">{t("delivery_8")}</p>
              {t("delivery_9")}
            </div>
            <div className="">
              <p className="font-semibold text-green-800">
                {t("delivery_10")}{" "}
              </p>
              {t("delivery_11")}
            </div>
          </div>
          <h2 className="text-4xl font-semibold mt-7 max-lg:text-3xl max-md:text-2xl max-2xl:mt-4">
            {t("delivery_12")}{" "}
          </h2>
          <div className="mt-2.5 flex flex-col gap-2.5">
            <div className="">
              <p className="font-semibold text-green-800">
                {t("delivery_14")}{" "}
              </p>
              {t("delivery_13")}
              <ol className="list-disc list-inside ">
                <li> {t("delivery_15")}</li>
                <li> {t("delivery_16")} </li>
                <li> {t("delivery_17")} </li>
              </ol>
            </div>

            <div className="">
              <p className="font-semibold text-green-800">
                {t("delivery_18")}{" "}
              </p>
              {t("delivery_19")}{" "}
            </div>
            <div className="">
              <p className="font-semibold text-green-800">{t("delivery_20")}</p>
              {t("delivery_21")}
            </div>
          </div>
        </div>
        <div className="col-span-2 max-lg:col-span-5">
          <img src="/img/delivery.png" className="w-full" />
        </div>
      </div>

      {flowersAll.length >= 0 && (
        <>
          <Top data={flowersAll}  onUpdate={()=>getFlowersAll()}/>
        </>
      )}
    </div>
  );
}
