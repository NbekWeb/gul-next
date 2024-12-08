"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

import Slider from "@/app/component/Single/Slider";

export default function HomePage() {
  const t = useTranslations("HomePage");
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
    <div className="container max-sm:px-3  mx-auto px-5 ">
      <div className="flex gap-2.5 items-center text-base font-medium mb-5">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          | Букеты
        </Link>
        <Link href={`/${selectedLang}/catalog`} className="text-green-800">
          | Букет из светло-персиковых кустовых роз Павлова
        </Link>
      </div>
        <div>
          <Slider />
        </div>
    </div>
  );
}
