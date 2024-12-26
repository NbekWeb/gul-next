"use client";

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

export default function HomePage() {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const [flowersAll, setFlowersAll] = useState([]);
  const [balloon, setBalloon] = useState([]);

  const [loading, setLoading] = useState(0);

  const [sitemap, setSitemap] = useState("");

  useEffect(() => {
    fetch("/sitemap")
      .then((response) => response.text())
      .then((data) => {
        setSitemap(data);
      })
      .catch((error) => console.error("Error fetching sitemap:", error));
  }, []);

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

  const getBalloon = async () => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: "/flower/balloon/",
        method: "GET",
      });

      setBalloon(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getBanner();
    getBalloon();
    getCategory();
    getFlowersAll();
  }, []);

  return (
    <Spin spinning={loading > 0}>
      <div>
        {banner.length > 0 && <Banner bannerData={banner} />}
        <div className="container grid grid-cols-4 gap-5 px-5 mx-auto mt-16 max-lg:grid-cols-2 max-xs:grid-cols-1 max-xl:grid-cols-3 max-md:mt-10">
          {categories.map((category, index) => (
            <MainCard key={index} data={category} />
          ))}
        </div>
        <Ban />
        <div className="flex flex-col lg:gap-20 max-lg:gap-10">
          {flowersAll.length > 0 && (
            <>
              <Vitrina data={flowersAll} onUpdate={() => getFlowersAll()} />
              <New data={flowersAll} onUpdate={() => getFlowersAll()} />
            </>
          )}

          <div className="container px-5 mx-auto max-sm:px-3">
            <Roses />
          </div>

          {flowersAll.length > 0 && (
            <>
              <Aksi data={flowersAll} onUpdate={() => getFlowersAll()} />
              <Top data={flowersAll} onUpdate={() => getFlowersAll()} />
            </>
          )}

          <Baloon data={balloon} onUpdate={() => getBalloon()} />
        </div>
      </div>
    </Spin>
  );
}
