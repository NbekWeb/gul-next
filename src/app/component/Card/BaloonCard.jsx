"use client";

import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { api } from "@/app/utils/api";
import { useOrders } from "@/app/content/OrdersContext";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

export default function Banner({ data = {}, onlike }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [type, setType] = useState("");
  const { toggleOpened, opened } = useOrders();
  const pathname = usePathname();

  const t = useTranslations("menu");

  const postLike = async (id) => {
    if (!data?.like) {
      try {
        const response = await api({
          url: "/flower/like/balloon",
          method: "POST",
          data: { balloon: id },
        });
        onlike();
      } catch (error) {
        if (!opened) {
          toggleOpened();
        }
      }
    } else {
      try {
        const response = await api({
          url: `/flower/like/balloon/${id}/`,
          method: "DELETE",
        });
        onlike();
      } catch (error) {
        if (!opened) {
          toggleOpened();
        }
        console.error("Error fetching banner data:", error);
      }
    }
  };

  const addToOrder = () => {
    // Get existing orders from localStorage, or initialize an empty object
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Structure the order object as per your requirements
    const order = {
      id: data?.id,
      type: 1,
    };

    existingOrders.push(order);

    // Save the updated orders back to localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    router.push(`/${selectedLang}/basket`);
  };

  useEffect(() => {
    if (data?.is_new) {
      setType("new");
    }
    if (data?.is_popular) {
      setType("top");
    }
    if (
      Math.trunc(data?.discount_price) !== Math.trunc(data?.price) &&
      data?.discount_price
    ) {
      setType("minus");
    }
  }, [data]);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      offset: 120, // Offset from the trigger point
      duration: 600, // Animation duration
      easing: "ease-in-out", // Easing function
      delay: 100, // Delay before animation starts
      once: false, // Whether animation should run only once
    });
    AOS.refresh();
  }, []);

  return (
    <div className="max-lg:pb-10" data-aos="zoom-in-up" data-aos-delay="200">
      <div className="relative ">
        <div className="flex flex-col justify-between ">
          <img
            src={data?.images_balloon?.[0]?.image}
            className="w-full rounded-2xl max-h-[325px]"
          />
          <p className="mt-1 text-lg font-semibold min-h-8 max-lg:text-base limit2 text-dark-400">
            {data?.translations?.[selectedLang]?.description}
          </p>
          <div className="grid grid-cols-2 gap-4 pb-3 mt-2 max-lg:grid-cols-1 max-lg:gap-2">
            <div className="flex items-center justify-center text-lg font-semibold text-dark-400">
              4290 ₽
              {type == "minus" && (
                <span className="text-xs text-white bg-red-500 rounded-sm px-0.5 ml-2 ">
                  <span className="line-through">4590</span>₽
                </span>
              )}
            </div>
            <div
              className="flex hover:cursor-pointer  items-center justify-center py-3 text-lg  hover:text-white rounded-[30px] hover:bg-dark-400 shadow-v bg-white text-dark-400 tr-3 max-lg:mx-2 max-lg:py-2
            "
            >
              {t("buyButton")}
            </div>
          </div>

          <span
            onClick={() => postLike(data?.id)}
            className={`absolute flex items-center justify-center text-lg text-white bg-green-200 rounded-full w-9 h-9  hover:text-dark-400 hover:bg-white tr-3 top-3 right-3  ${
              data?.like ? " hover:text-red-500" : "hover:text-dark-400 pt-1"
            }`}
          >
            {data?.like ? <Icon type="delete" /> : <Icon type="heart" />}
          </span>
          {type == "new" && (
            <span className="absolute left-0 flex px-3 text-lg text-white bg-dark-400 rounded-tl-2xl rounded-br-xl">
              {t("newLabel")}
            </span>
          )}
          {type == "top" && (
            <span className="absolute left-0 flex px-3 text-lg text-white bg-pink-400 rounded-tl-2xl rounded-br-xl">
              {t("topLabel")}
            </span>
          )}
          {type == "minus" && (
            <span className="absolute left-0 flex px-3 text-lg bg-white text-dark-400 rounded-tl-2xl rounded-br-xl">
              -{Math.trunc(100 - data?.discount_price / data?.price)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
