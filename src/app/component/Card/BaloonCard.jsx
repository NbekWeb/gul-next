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
      <Link href={`/${selectedLang}`} className="relative ">
        <div className="flex flex-col justify-between ">
          <img
            src="/img/bal1.png"
            className="w-full rounded-2xl max-h-[325px]"
          />
          <p className="pr-32 mt-1 text-lg font-semibold leading-5 text-dark-400">
            Кремовый букет пионовидных роз
          </p>
          <div className="grid grid-cols-2 gap-4 pb-3 mt-2">
            <div className="flex items-center justify-center text-lg font-semibold text-dark-400">
              4290 ₽
              {type == "minus" && (
                <span className="text-xs text-white bg-red-500 rounded-sm px-0.5 ml-2 ">
                  <span className="line-through">4590</span>₽
                </span>
              )}
            </div>
            <div
              className="flex  items-center justify-center py-3 text-lg  hover:text-white rounded-[30px] hover:bg-dark-400 shadow-v bg-white text-dark-400 tr-3
            "
            >
              4290 ₽
            </div>
          </div>

          <span className="absolute flex items-center justify-center text-lg text-white bg-green-200 rounded-full w-9 h-9 right-5 top-5 hover:text-dark-400 hover:bg-white tr-3">
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
      </Link>
    </>
  );
}
