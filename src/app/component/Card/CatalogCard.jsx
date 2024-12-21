"use client";

import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

export default function Banner({ data = {} }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [type, setType] = useState("");
  const pathname = usePathname();
  const t = useTranslations("menu");

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

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
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        className="relative max-md:pb-10"
      >
        <div className="flex flex-col justify-between ">
          <div className="w-full overflow-hidden rounded-2xl aspect-square">
            <img
              src={data?.images?.[0]?.image}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="pr-5 mt-3 text-lg font-semibold leading-5 text-dark-400 min-h-10 limit2">
            {data?.translations?.[selectedLang]?.description}
          </p>
          <div className="grid grid-cols-2 gap-4 pb-3 mt-4 max-sm:grid-cols-1 max-sm:gap-2 max-sm:mx-2.5">
            <div className="flex items-center justify-center text-lg font-semibold text-dark-400">
              {Math.trunc(data?.price)} ₽
              {type == "minus" && (
                <span className="text-xs text-white bg-red-500 rounded-sm px-0.5 ml-2 ">
                  <span className="line-through">4590</span>₽
                </span>
              )}
            </div>
            <Link
              href={`/single-flower/${data?.id}`}
              className="flex hover:text-white  items-center justify-center py-3 text-lg max-lg:py-2   rounded-[30px] hover:bg-green-800/80 shadow-v bg-green-800 text-white tr-3
            "
            >
              {t("buyButton")}
            </Link>
          </div>

          <span className="absolute flex items-center justify-center text-lg text-white bg-green-200 rounded-full w-9 h-9 right-5 top-5 hover:text-dark-400 hover:bg-white tr-3 max-lg:top-3 max-lg:right-3">
            <Icon type="heart" />
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
    </>
  );
}
