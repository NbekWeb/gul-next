"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spin, Empty } from "antd";
import { api } from "@/app/utils/api";

import { usePathname, useRouter } from "next/navigation";
import Round from "../Single/Round";

import Icon from "../Icon";

export default function HomePage({ item = {}, onDelete, onAdd }) {
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");
  const [nums, setNums] = useState(item?.count ? item?.count : 1);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  return (
    <div className="flex items-center gap-2.5 h-28 w-full ">
      <div className="h-full bg-white border w-28 rounded-2xl">
        <img
          src={item.images?.[0]?.image}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex py-2.5 justify-between flex-col h-full  gap-4 w-full">
        <p className="text-lg font-medium ">
          {item?.translations?.[selectedLang]?.name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0 bg-white rounded-3xl max-w-max">
              <Round
                val={<Icon type="minus" />}
                onClick={() => {
                  onAdd(nums > 1 ? nums - 1 : nums);
                  setNums((prev) => (prev > 1 ? prev - 1 : prev));
                }}
              />
              <span className="flex justify-center min-w-10">{nums}</span>
              <Round
                val={<Icon type="plus" />}
                onClick={() => {
                  onAdd(nums + 1);
                  setNums((prev) => prev + 1);
                }}
              />
            </div>
            <span>
              {Math.trunc(
                +item?.price + (item?.vaza ? 1290 : 0) + (item?.card ? 90 : 0)
              )}
              ₽
            </span>
          </div>
          <span
            className="flex items-center justify-center w-8 h-8 text-lg text-white bg-red-500 rounded-full"
            onClick={() => onDelete()}
          >
            <Icon type="delete" />
          </span>
        </div>
      </div>
    </div>
  );
}
