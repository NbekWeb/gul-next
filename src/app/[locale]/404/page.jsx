"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Icon from "@/app/component/Icon";

export default function Catalog() {
  return (
    <div className="container px-5 mx-auto overflow-x-hidden font-semibold max-sm:px-3 text-dark-400">
      <div className="flex flex-col items-center my-20 ">
        <img
          src="/img/404.png"
          className="h-[380px] max-lg:h-[300px] max-sm:hidden"
        />
        <img src="/img/404.png" className="w-full sm:hidden" />
        <span className="mt-4 text-5xl text-center max-lg:text-4xl max-md:text-3xl ">
          Запрашиваемая страница не найдена!
        </span>
        <div className="grid w-full grid-cols-2 mt-5 text-lg sm:hidden">
          <div className="border-r-2 border-dark-400">
            <Link href="/">
              <span className="flex gap-2.5 items-center">
                На главную
                <Icon type="arr" />
              </span>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/catalog">
              <span className="flex gap-2.5 items-center">
                Каталог
                <Icon type="arr" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
