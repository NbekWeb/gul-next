"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Aksi from "@/app/component/Main/Aksi";
import { api } from "@/app/utils/api";
import { Spin } from "antd";

export default function HomePage() {
  const t = useTranslations("menu");

  const [loading, setLoading] = useState(0);
  const [flowersAll, setFlowersAll] = useState([]);

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
            | {t("example")}
          </Link>
        </div>
        <div className="grid grid-cols-2 mb-20 text-lg max-sm:text-sm text-dark-400 max-xl:text-base gap-7 max-xl:gap-5 max-lg:grid-cols-1 max-md:mb-10">
          <div className="">
            <p className="font-medium">{t("order_description")} </p>

            <ol className="mt-4 list-disc list-inside">
              <li>{t("fullbox_pink_floyd")}</li>
              <li>{t("fullbox_freedom")}</li>
              <li>{t("fullbox_mix")}</li>
              <li>{t("fullbox_sweetness")}</li>
            </ol>
            <div>
              <p className="font-semibold text-green-800">
                {t("delivery_title")}
              </p>
              <ul>
                <li> {t("delivery_title")} </li>
                <li>{t("amsterdam_moscow")}</li>
                <li>{t("pre_cooling")}</li>
                <li>{t("total_delivery_price")}</li>
              </ul>
              <p className="font-semibold text-green-800">{t("final_price")}</p>
            </div>
          </div>
          <div>
            <img src="/img/example.png" className="w-full rounded-xl" />
            <p className="pt-2 font-medium text-green-800">
              {t("customs_included")}
            </p>
          </div>
        </div>
        <Aksi data={flowersAll} onUpdate={()=>getFlowersAll()} />
      </div>
    </Spin>
  );
}
