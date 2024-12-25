"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { api } from "@/app/utils/api";
import Slider from "@/app/component/Single/Slider";
import { Spin } from "antd";
import { useOrders } from "@/app/content/OrdersContext";

export default function HomePage() {
  const t = useTranslations("menu");
  const [flowers, setFlowers] = useState({});
  const [sizes, setSizes] = useState([]);
  const [flowersAll, setFlowersAll] = useState([]);
  const [categories, setCategories] = useState({});
  const [categoryName, setCategoryName] = useState("");
  const [selectedLang, setSelectedLang] = useState("ru");
  const [loading, setLoading] = useState(0);
  const pathname = usePathname();
  const [saws, setSaws] = useState([]);
  const { logined } = useOrders();

  const flowerId = pathname.split("/").pop();

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

  const getSizes = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/size-flowers/",
        method: "GET",
      });
      setSizes(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const getFlowers = async (id) => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: `/flower/flowers/${id}/`,
        method: "GET",
      });

      setFlowers(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };
  const getSaws = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/flower-seen/",
        method: "GET",
      });

      setSaws(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
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
    if (flowerId) {
      getFlowers(flowerId);
    }
    getCategory();
    getSizes();
    getFlowersAll();
  }, [flowerId]);

  useEffect(() => {
    if (flowers && categories.length > 0) {
      const name = categories.find(
        (category) => category.id === flowers.category
      );
      setCategoryName(name?.translations?.[selectedLang]?.name || ""); // Fallback to "Букеты" if no name is found
    }
  }, [flowers, categories, selectedLang]);

  useEffect(() => {
    if (logined) {
      getSaws();
    }
  }, [logined]);

  return (
    <Spin spinning={loading > 0}>
      <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
        <div className="flex gap-2.5 items-center text-base font-medium mb-5 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
          <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
            {t("home")}
          </Link>
          <Link
            href={`/catalog?category=[${flowers.category}]`}
            className="text-dark-400/50 hover:text-green-800"
          >
            | {categoryName}
          </Link>
          <span className="text-green-800">
            | {flowers?.translations?.[selectedLang]?.name}
          </span>
        </div>

        <div className="">
          <Slider
            data={flowers}
            flowers={flowersAll}
            vaza={sizes}
            onlike={() => getFlowers(flowerId)}
            onUpdate={() => getFlowersAll()}
            saws={saws}
          />
        </div>
      </div>
    </Spin>
  );
}
