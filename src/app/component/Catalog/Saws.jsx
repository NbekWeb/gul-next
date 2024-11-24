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
      <div className="relative ">
        <div className="flex flex-col justify-between ">
          <img src="/img/o1.png" className="w-full rounded-2xl " />
          <p className="pr-5 mt-3 text-lg font-semibold leading-5 text-dark-400">
            Кремовый букет пионовидных роз
          </p>
        </div>
      </div>
    </>
  );
}
