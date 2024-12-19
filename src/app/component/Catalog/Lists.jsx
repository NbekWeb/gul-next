"use client";

import { useState, useEffect } from "react";
import List from "./List";
import Filtr from "./Filtr";
import { useTranslations } from "next-intl";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Lists({ data = [], count = 0 }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const goTo = (id = -1) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id == -1) {
      params.delete("category");
    } else {
      params.set("category", `[${id}]`);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const categories = searchParams.get("category")
    ? JSON.parse(searchParams.get("category"))
    : [];

  return (
    <div className="">
      <span className="mt-5 text-3xl font-semibold text-dark-400 max-sm:text-2xl">
        {t("catalogColor")}
      </span>
      <div className="!max-w-full mt-5 overflow-x-hidden ">
        <div className="flex gap-2.5  flex-nowrap overflow-x-auto pb-2 custom-scrollbar">
          <List
            name={t("all_products")}
            selected={!searchParams.get("category")}
            onClick={() => goTo()}
          />
          {data.map((item, index) => (
            <List
              key={index}
              name={item?.translations?.[selectedLang]?.name}
              selected={categories.includes(item.id)}
              onClick={() => goTo(item.id)}
            />
          ))}
        </div>
      </div>
      <Filtr data={count} />
    </div>
  );
}
