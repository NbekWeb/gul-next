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
    <div className="">
      <div className="relative ">
        <div className="flex flex-col justify-between ">
          <img src="/img/o1.png" className="w-full rounded-2xl " />
          <p className="mt-3 text-lg font-semibold max-lg:text-base max-sm:text-sm max-md:mt-1 limit2 min-h-8 text-dark-400">
            Кремовый букет пионовидных роз Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corrupti vero repellendus laborum
            similique ipsa beatae mollitia facere nesciunt consequatur, quas qui
            sequi non dolore pariatur impedit earum, praesentium perferendis
            perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
}
