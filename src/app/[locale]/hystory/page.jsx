"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spin } from "antd";
import dynamic from "next/dynamic";
import { api } from "@/app/utils/api";
import { usePathname, useRouter } from "next/navigation";

import { useOrders } from "@/app/content/OrdersContext";

// Dynamically import the Chart component (SSR-safe)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const { toggleOpened, opened } = useOrders();
  const t = useTranslations("menu");
  const [statistic, setStatistic] = useState({});
  const [loading, setLoading] = useState(0);
  const [id, setId] = useState(-1);

  const [selectType, setSelectType] = useState("day");

  const [chartOptionsDay, setChartOptionsDay] = useState({});
  const [chartSeriesDay, setChartSeriesDay] = useState([]);

  const [chartOptionsMonth, setChartOptionsMonth] = useState({});
  const [chartSeriesMonth, setChartSeriesMonth] = useState([]);

  const [chartOptionsSixMonth, setChartOptionsSixMonth] = useState({});
  const [chartSeriesSixMonth, setChartSeriesSixMonth] = useState([]);

  const [chartOptionsYear, setChartOptionsYear] = useState({});
  const [chartSeriesYear, setChartSeriesYear] = useState([]);
  const [flowersAll, setFlowersAll] = useState([]);

  const [selectedLang, setSelectedLang] = useState("ru");

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  // Function to fetch daily statistics
  const getFlowersDaily = async () => {
    setLoading((prev) => prev + 1);
    const params = { day: true };
    if (id != -1) {
      params.flower_id = id;
    }
    try {
      const response = await api({
        url: "/order/statistics_flowers/",
        method: "GET",
        params, // Passing day parameter
      });

      const data = response.data;
      setStatistic(data);

      // Process daily data for chart
      const flowersData = {};
      data.day.forEach((stat) => {
        const flower = stat.flower; // Group by flower
        if (!flowersData[flower]) {
          flowersData[flower] = 0;
        }
        flowersData[flower] += stat.quantity; // Sum quantities for the same flower
      });

      const flowers = Object.keys(flowersData);
      const quantities = flowers.map((flower) => flowersData[flower]);

      // Configure chart options and series for daily data
      setChartOptionsDay({
        chart: {
          id: "daily-flower-sales",
          toolbar: { show: true },
          offsetY: 20,
        },
        xaxis: {
          categories: flowers, // Flower names
        },
        yaxis: {
          max: Math.max(...quantities) + 10,
          min: Math.min(...quantities) - 10, // Dynamic max value
        },
        stroke: { curve: "smooth" }, // Smooth curves for spline effect
        title: {
          text: "",
          align: "center",
        },
      });

      setChartSeriesDay([
        {
          name: t("totalQuantity"),
          data: quantities,
        },
      ]);
    } catch (error) {
      router.push(`/${selectedLang}`);
      if (!opened) {
        toggleOpened();
      }
      console.error("Error fetching daily flower statistics:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const getFlowersMonthly = async () => {
    setLoading((prev) => prev + 1);
    const params = { month: true };
    if (id != -1) {
      params.flower_id = id;
    }

    try {
      const response = await api({
        url: "/order/statistics_flowers/",
        method: "GET",
        params, // Passing month parameter
      });

      const data = response.data;

      // Process monthly data for chart
      const months = [];
      const totalQuantities = [];

      data.month.forEach((monthData) => {
        months.push(monthData.month_name); // Store month name for x-axis
        const totalQuantityForMonth = monthData.statistics.reduce(
          (sum, stat) => sum + stat.quantity,
          0
        );
        totalQuantities.push(totalQuantityForMonth);
      });

      setChartOptionsMonth({
        chart: {
          id: "monthly-flower-sales",
          toolbar: { show: true },
          offsetY: 20,
        },
        xaxis: {
          categories: months,

          labels: {
            rotate: -45,
            style: { fontSize: "12px" },
          },
        },
        yaxis: {
          max: Math.max(...totalQuantities) + 10,
          min: Math.min(...totalQuantities) - 10,
        },
        stroke: { curve: "smooth" },
      });

      setChartSeriesMonth([
        {
          name: t("totalQuantity"),
          data: totalQuantities,
        },
      ]);
    } catch (error) {
      router.push(`/${selectedLang}`);
      if (!opened) {
        toggleOpened();
      }
      console.error("Error fetching monthly flower statistics:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const getFlowersSixMonth = async () => {
    setLoading((prev) => prev + 1);
    const params = { six_month: true };
    if (id != -1) {
      params.flower_id = id;
    }
    try {
      const response = await api({
        url: "/order/statistics_flowers/",
        method: "GET",
        params,
      });

      const data = response.data;

      const months = [];
      const totalQuantities = [];

      data.six_month.forEach((monthData) => {
        months.push(monthData.month_name);
        const totalQuantityForMonth = monthData.statistics.reduce(
          (sum, stat) => sum + stat.quantity,
          0
        );
        totalQuantities.push(totalQuantityForMonth);
      });

      setChartOptionsSixMonth({
        chart: {
          id: "six-month-flower-sales",
          toolbar: { show: true },
          offsetY: 20,
        },
        xaxis: {
          categories: months,
        },
        yaxis: {
          max: Math.max(...totalQuantities) + 10,
          min: Math.min(...totalQuantities) - 10,
        },
        stroke: { curve: "smooth" },
      });

      setChartSeriesSixMonth([
        {
          name: t("totalQuantity"),
          data: totalQuantities,
        },
      ]);
    } catch (error) {
      router.push(`/${selectedLang}`);
      if (!opened) {
        toggleOpened();
      }
      console.error("Error fetching six-month flower statistics:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const getFlowersYearly = async () => {
    setLoading((prev) => prev + 1);
    const params = { year: true };
    if (id != -1) {
      params.flower_id = id;
    }
    try {
      const response = await api({
        url: "/order/statistics_flowers/",
        method: "GET",
        params,
      });

      const data = response.data;

      const months = [];
      const totalQuantities = [];

      data.year.forEach((monthData) => {
        months.push(monthData.month_name);
        const totalQuantityForMonth = monthData.statistics.reduce(
          (sum, stat) => sum + stat.quantity,
          0
        );
        totalQuantities.push(totalQuantityForMonth);
      });

      setChartOptionsYear({
        chart: {
          id: "yearly-flower-sales",
          toolbar: { show: true },
          offsetY: 20,
        },
        xaxis: {
          categories: months,
        },
        yaxis: {
          max: Math.max(...totalQuantities) + 10,
          min: Math.min(...totalQuantities) - 10,
        },
        stroke: { curve: "smooth" },
      });

      setChartSeriesYear([
        {
          name: t("totalQuantity"),
          data: totalQuantities,
        },
      ]);
    } catch (error) {
      router.push(`/${selectedLang}`);
      if (!opened) {
        toggleOpened();
      }
      console.error("Error fetching yearly flower statistics:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

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
    if (selectType == "day") {
      getFlowersDaily();
    } else if (selectType == "month") {
      getFlowersMonthly();
    } else if (selectType == "six_month") {
      getFlowersSixMonth();
    } else {
      getFlowersYearly();
    }
  }, [selectType, id]);

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
          <span className="flex text-green-800 ">/ {t("orderHistory")}</span>
        </div>
        <div className="overflow-x-auto tr-scrollbar">
          <div className="flex  max-w-max capitalize mb-7 items-center p-1.5 gap-1.5 rounded-xl bg-gray-100 text-base">
            <div
              onClick={() => setSelectType("day")}
              className={`h-full min-w-max hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                selectType == "day" && "bg-white"
              }`}
            >
              {t("day")}
            </div>
            <div
              onClick={() => setSelectType("month")}
              className={`h-full min-w-max hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                selectType == "month" && "bg-white"
              }`}
            >
              {t("month")}
            </div>
            <div
              onClick={() => setSelectType("six_month")}
              className={`h-full  min-w-max hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                selectType == "six_month" && "bg-white"
              }`}
            >
              {t("equator")}
            </div>
            <div
              onClick={() => setSelectType("year")}
              className={`h-full min-w-max hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                selectType == "year" && "bg-white"
              }`}
            >
              {t("year")}
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto tr-scrollbar">
          <div className="flex max-w-max capitalize mb-7 items-center p-1.5 gap-1.5 rounded-xl bg-gray-100 text-base">
            <div className="text-green-800 min-w-max px-2.5 py-2">
              Выберите цветок:
            </div>

            {flowersAll.map((item, i) => (
              <div
                key={i}
                onClick={() => setId(item.id)}
                className={`h-full min-w-max hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                  id == item.id && "bg-white"
                }`}
              >
                {item?.translations?.[selectedLang]?.name}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="px-10 overflow-y-hidden max-lg:px-6 max-sm:px-3">
            {selectType == "day" && (
              <Chart
                options={chartOptionsDay}
                series={chartSeriesDay}
                type="line"
                height={350}
              />
            )}
            {selectType == "month" && (
              <Chart
                options={chartOptionsMonth}
                series={chartSeriesMonth}
                type="line"
                height={350}
              />
            )}
            {selectType == "six_month" && (
              <Chart
                options={chartOptionsSixMonth}
                series={chartSeriesSixMonth}
                type="line"
                height={350}
              />
            )}
            {selectType == "year" && (
              <Chart
                options={chartOptionsYear}
                series={chartSeriesYear}
                type="line"
                height={350}
              />
            )}
          </div>
        </div>
      </div>
    </Spin>
  );
}
