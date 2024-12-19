"use client";

import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { api } from "@/app/utils/api";

import { useOrders } from "@/app/content/OrdersContext";

export default function Banner({ data = {}, tip = "", onlike }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [type, setType] = useState("");
  const pathname = usePathname();
  const t = useTranslations("menu");
  const { toggleOpened, opened } = useOrders();

  const postLike = async (id) => {
    if (!data?.like) {
      try {
        const response = await api({
          url: "/flower/like/",
          method: "POST",
          data: { flower: id },
        });
        onlike();
      } catch (error) {
        if (!opened) {
          toggleOpened();
        }
        console.error("Error fetching banner data:", error);
      }
    } else {
      try {
        const response = await api({
          url: `/flower/like/${id}/`,
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
    if (tip) {
      setType(tip);
    }
  }, [data]);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  // const queryParams = new URLSearchParams();
  // queryParams.set("id", data?.id);

  return (
    <>
      <div className="relative max-md:pb-10 ">
        <div className="flex flex-col justify-between ">
          <div className="w-full overflow-hidden rounded-2xl aspect-square">
            <img
              src={data?.images?.[0]?.image}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-3 text-lg font-semibold limit2 text-dark-400 max-lg:text-base min-h-8">
            {data?.translations?.[selectedLang]?.name}
          </p>
          <div className="grid grid-cols-2 gap-4 pb-3 mt-4 max-sm:grid-cols-1">
            <div className="flex items-center justify-center text-lg font-semibold text-dark-400 max-md:justify-start max-sm:justify-center">
              {Math.trunc(data?.price)} ₽
              {Math.trunc(data?.discount_price) != Math.trunc(data?.price) && (
                <span className="text-xs text-white bg-red-500 rounded-sm px-0.5 ml-2 ">
                  <span className="line-through">
                    {Math.trunc(data?.discount_price)}
                  </span>
                  ₽
                </span>
              )}
            </div>
            <Link
              href={`/single-flower/${data?.id}`}
              className="flex  items-center justify-center py-3 max-lg:py-2 text-lg  hover:text-white rounded-[30px] hover:bg-dark-400 shadow-v bg-white text-dark-400 tr-3 max-sm:bg-green-800 max-sm:border max-sm:border-green-800 max-sm:text-white max-sm:hover:bg-white max-sm:hover:text-green-800
            "
            >
              {t("buyButton")}
            </Link>
          </div>

          <span
            onClick={() => postLike(data?.id)}
            className={`absolute hover:cursor-pointer flex items-center justify-center text-lg text-white bg-green-200 rounded-full w-9 h-9 right-3 top-3  ${
              data?.like ? " hover:text-red-500" : "hover:text-dark-400 pt-1"
            } hover:bg-white tr-3 max-lg:top-3 max-lg:right-3`}
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
    </>
  );
}
