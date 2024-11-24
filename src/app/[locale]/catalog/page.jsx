"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Lists from "@/app/component/Catalog/Lists";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cards from "@/app/component/Catalog/Cards";

export default function Catalog() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  return (
    <div className="container px-5 mx-auto">
      <div className="flex items-center text-base font-medium gap-2.5 mb-5">
        <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
          Главная
        </Link>
        <Link href={`/${selectedLang}/catalog`} className="text-green-800">
          | Каталог
        </Link>
      </div>
      <Lists />
      <Cards />
    </div>
  );
}
