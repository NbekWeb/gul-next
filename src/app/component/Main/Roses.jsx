"use client";

import { useTranslations } from "next-intl";
import { useOrders } from "@/app/content/OrdersContext";

export default function Banner() {
  const goOpen = () => {
    if (!opened) {
      toggleOpened();
    }
  };

  const t = useTranslations("menu");
  const { toggleOpened, opened, logined } = useOrders();
  return (
    <>
      <h3 className="text-4xl font-semibold text-dark-400 max-lg:text-3xl max-md:text-2xl">
        {t("rose_bud_stages")}
      </h3>
      <img
        src="/img/rose.png"
        className="w-full mt-8 rounded-xl max-lg:mt-6 max-md:mt-4 max-sm:h-[300px] max-sm:w-auto max-sm:object-cover"
      />
      {!logined && (
        <div
          onClick={() => goOpen()}
          className="flex py-2 mt-5 text-lg font-medium bg-green-800 shadow-v px-7 text-dark-400 max-w-max rounded-[30px] mb-3 hover:cursor-pointer"
        >
          {t("partner_login")}
        </div>
      )}
    </>
  );
}
