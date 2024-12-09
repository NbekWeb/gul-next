"use client";

import Link from "next/link";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";

export default function Banner({ type = "" }) {
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
      <div className="relative max-md:pb-10">
        <div className="flex flex-col justify-between ">
          <img src="/img/o1.png" className="w-full rounded-2xl " />
          <p className="pr-5 mt-3 text-lg font-semibold leading-5 text-dark-400 min-h-10 limit2">
            Кремовый букет пионовидных роз
          </p>
          <div className="grid grid-cols-2 gap-4 pb-3 mt-4 max-sm:grid-cols-1 max-sm:gap-2 max-sm:mx-2.5">
            <div className="flex items-center justify-center text-lg font-semibold text-dark-400">
              4290 ₽
              {type == "minus" && (
                <span className="text-xs text-white bg-red-500 rounded-sm px-0.5 ml-2 ">
                  <span className="line-through">4590</span>₽
                </span>
              )}
            </div>
            <Link href={`/${selectedLang}/single-flower`}
              className="flex  items-center justify-center py-3 text-lg max-lg:py-2   rounded-[30px] hover:bg-green-800/80 shadow-v bg-green-800 text-white tr-3
            "
            >
              Купить
            </Link>
          </div>

          <span className="absolute flex items-center justify-center text-lg text-white bg-green-200 rounded-full w-9 h-9 right-5 top-5 hover:text-dark-400 hover:bg-white tr-3 max-lg:top-3 max-lg:right-3">
            <Icon type="heart" />
          </span>
          {type == "new" && (
            <span className="absolute left-0 flex px-3 text-lg text-white bg-dark-400 rounded-tl-2xl rounded-br-xl">
              New
            </span>
          )}
          {type == "top" && (
            <span className="absolute left-0 flex px-3 text-lg text-white bg-pink-400 rounded-tl-2xl rounded-br-xl">
              Top
            </span>
          )}
          {type == "minus" && (
            <span className="absolute left-0 flex px-3 text-lg bg-white text-dark-400 rounded-tl-2xl rounded-br-xl">
              -15%
            </span>
          )}
        </div>
      </div>
    </>
  );
}
