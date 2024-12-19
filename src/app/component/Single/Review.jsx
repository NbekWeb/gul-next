"use client";

import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Round({ data = {} }) {
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr); // Parse the date string
    const options = {
      day: "2-digit",
      month: "short", // Month as a short name
    };
    return new Intl.DateTimeFormat(selectedLang, options).format(date);
  };

  const formattedDate = formatDate(data.created_at); // Assuming data.time is a date string

  return (
    <div className="flex gap-5 text-lg text-dark-400 max-sm:grid max-sm:grid-cols-1">
      <img
        src={data?.image ? data.image : "/img/foto.png"}
        className="w-40 h-40 rounded-3xl"
      />
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-0 text-sm text-white bg-pink-500 rounded-full w-11 h-11">
            <span className=" leading-[14px]">
              {formattedDate.split(" ")[selectedLang == "ru" ? 0 : 1]}
            </span>
            <span className="text-[8px]  leading-[8px]">
              {formattedDate.split(" ")[selectedLang == "ru" ? 1 : 0]}
            </span>
          </div>
          <span className="font-medium">{data.full_name}</span>
          {
            data.rating && (

              <Rate disabled allowHalf defaultValue={data.rating} />
            )
          }
        </div>
        <p className="text-sm ">{data?.content}</p>
      </div>
    </div>
  );
}
