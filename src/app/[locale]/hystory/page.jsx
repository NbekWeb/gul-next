"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spin, Empty } from "antd";
import OnlineCard from "@/app/component/Card/OnlineCard";
import { api } from "@/app/utils/api";

export default function HomePage() {
  const t = useTranslations("menu");
  const [balloon, setBalloon] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState(0);

  const getFlowersAll = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/order/statistics_flowers/",
        method: "GET",
        params: { year: true },
      });
      // const newFilteredData = response.data.results.filter((item) => item.like);
      // setFilteredData(newFilteredData);
      console.log(response.data);
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

          <span className="text-green-800 hover:text-green-800">
            | {t("like")}
          </span>
        </div>
        <h2 className="text-4xl font-semibold text-dark-400 mb-7 max-lg:text-3xl max-lg:mb-5 max-sm:mb-3">
          {t("like")}
        </h2>
        {filteredData.length === 0 ? (
          <Empty description={t("empty")} />
        ) : (
          <div>
            <div className="flex gap-1 mb-3 font-medium">
              {filteredData.length} {t("products")}
            </div>
            <div className="grid  gap-[50px] grid-cols-4 max-lg:grid-cols-3 max-md:gap-5 max-md:grid-cols-2 max-lg:gap-[30px]">
              {filteredData.map((item, i) => (
                <OnlineCard
                  key={i}
                  data={item}
                  onlike={() => getFlowersAll()}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
}
