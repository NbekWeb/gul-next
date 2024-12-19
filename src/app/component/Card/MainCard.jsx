"use client";

import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";

export default function Banner({ data = {} }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const queryParams = new URLSearchParams();
  queryParams.set("category", `[${data?.id}]`);

  return (
    <>
      <Link
        href={`/catalog?${queryParams.toString()}`}
        className="capitalize group"
      >
        <div className="bg-gray-100 rounded-2xl p-7 h-[380px] flex flex-col justify-between relative ">
          <span className="text-2xl font-semibold text-dark-400 relative z-[2]">
            {data?.translations?.[selectedLang]?.name}
          </span>
          <div className="flex relative z-[2] items-center justify-center w-10 h-10 -rotate-45 bg-white border rounded-full border-dark-400 text-dark-400 group-hover:rotate-0 tr-3">
            <Icon type="arrow" />
          </div>
          <img src={data?.image} className="absolute right-0 h-72 bottom-3" />
        </div>
      </Link>
    </>
  );
}
