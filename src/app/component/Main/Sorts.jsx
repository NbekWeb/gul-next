"use client";

import { useTranslations } from "next-intl";
import Sort from "../Catalog/Sort";

export default function Round({ data = [] }) {
  const t = useTranslations("menu");
  return (
    <>
      <div>
        <span className="mt-10 text-4xl font-semibold text-dark-400">
          {t("rose_varieties")}
        </span>
        <div className="grid grid-cols-4 gap-5 pt-5 pb-32 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3">
          {data.map((item, i) => (
            <Sort key={i} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
