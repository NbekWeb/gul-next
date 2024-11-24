"use client";

import Link from "next/link";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";

export default function Banner() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  return (
    <>
      <Link href={`/${selectedLang}/catalog`} className="group ">
        <div className="bg-gray-100 rounded-2xl p-7 h-[380px] flex flex-col justify-between relative ">
          <span className="text-2xl font-semibold">Букеты</span>
          <div className="flex items-center justify-center w-10 h-10 -rotate-45 bg-white border rounded-full border-dark-400 text-dark-400 group-hover:rotate-0 tr-3">
            <Icon type="arrow" />
          </div>
          <img
            src="/img/main-f.png"
            className="absolute right-0 h-72 bottom-3"
          />
        </div>
      </Link>
    </>
  );
}
