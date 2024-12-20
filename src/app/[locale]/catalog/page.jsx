"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Lists from "@/app/component/Catalog/Lists";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cards from "@/app/component/Catalog/Cards";
import { useOrders } from "@/app/content/OrdersContext";
import { Spin, Empty } from "antd";
import See from "@/app/component/Main/See";
import { api } from "@/app/utils/api";

export default function Catalog() {
  const { logined, updatLogined } = useOrders();

  const [loading, setLoading] = useState(0);

  const [selectedLang, setSelectedLang] = useState("ru");
  const [saws, setSaws] = useState([]);
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [flowersAll, setFlowersAll] = useState([]);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const t = useTranslations("menu");

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

  const getSaws = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/flower-seen/",
        method: "GET",
      });

      setSaws(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const getFlowersAll = async (params = {}) => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/flowers/all/",
        method: "GET",
        params,
      });

      setFlowersAll(response.data.results);
      setCount(response.data.count);
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
    getCategory();
  }, []);

  useEffect(() => {
    if (logined) {
      getSaws();
    }
  }, [logined]);

  useEffect(() => {
    const min = searchParams.get("min") || null;
    const max = searchParams.get("max") || null;
    const page = searchParams.get("page") || null;
    const categoryParam = searchParams.get("category");
    let category = null;

    if (categoryParam) {
      if (categoryParam.startsWith("[") && categoryParam.endsWith("]")) {
        category = JSON.parse(categoryParam);
      } else {
        category = categoryParam
          .split(",")
          .map((id) => parseInt(id.trim(), 10));
      }
    }

    const params = {};
    params.page_size = 20;
    if (min) params.min_price = min;
    if (max) params.max_price = max;
    if (page) params.page = page;
    if (category && category.length > 0) params.category = category.join(",");

    getFlowersAll(params);
  }, [searchParams]);

  return (
    <Spin spinning={loading > 0}>
      <div className="container px-5 mx-auto max-sm:px-3">
        <div className="flex items-center text-base font-medium gap-2.5 mb-5">
          <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
            {t("home")}
          </Link>
          <span className="text-green-800">| {t("catalog")}</span>
        </div>

        <Lists data={categories} count={flowersAll.length} />

        {flowersAll.length > 0 && (
          <Cards
            data={flowersAll}
            total={count}
            onUpdate={() => getFlowersAll()}
          />
        )}
        {flowersAll.length == 0 && <Empty description="sa" />}

        {saws.length > 0 && <See data={saws} />}
      </div>
    </Spin>
  );
}
