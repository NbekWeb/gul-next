"use client";

import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

import { Spin } from "antd";

import Banner from "../component/Card/Banner";
import Ban from "../component/Card/Ban";
import MainCard from "../component/Card/MainCard";
import Vitrina from "../component/Main/Vitrina";
import Aksi from "../component/Main/Aksi";
import Roses from "../component/Main/Roses";
import Top from "../component/Main/Top";
import New from "../component/Main/New";
import Baloon from "../component/Main/Baloon";

import { api } from "@/app/utils/api";
import { routing } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const translatedText = t("sa");

  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(0);

  const getBanner = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/banner-carousel/",
        method: "GET",
      });
      setBanner(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  // useEffect(() => {
  //   getBanner();
  // }, []);

  return (
    <Spin spinning={loading > 0}>
      <div>
        {loading}
        <Banner bannerData={banner} loading={loading} />
        <div className="container grid grid-cols-4 gap-5 px-5 mx-auto mt-16 max-lg:grid-cols-2 max-xs:grid-cols-1 max-xl:grid-cols-3 max-md:mt-10">
          {[...Array(8)].map((_, index) => (
            <MainCard key={index} />
          ))}
        </div>
        <Ban />
        <div className="flex flex-col lg:gap-20 max-lg:gap-10">
          <Vitrina />
          <New />
          <div className="container px-5 mx-auto max-sm:px-3">
            <Roses />
          </div>
          <Aksi />
          <Top />
          <Baloon />
        </div>
      </div>
    </Spin>
  );
}
