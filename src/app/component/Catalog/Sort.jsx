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
    <Link
      href={`/catalog?${queryParams.toString()}`}
      className="capitalize group"
    >
      <div className="max-lg:pb-10">
        <div className="relative ">
          <div className="flex flex-col justify-between ">
            <div className="w-full rounded-2xl aspect-square overflow-hidden">
              <img src={data?.image} className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-lg font-semibold max-lg:text-base max-sm:text-sm max-md:mt-1 limit2 min-h-8 text-dark-400">
              {data?.translations?.[selectedLang]?.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
