"use client";

import Icon from "../Icon";

import { Link } from "@/i18n/routing";

export default function Ban() {
  return (
    <div className="container max-sm:px-3  flex justify-center px-5 mx-auto mt-24 max-md:mt-10 mb-10">
      <div className="bg-pink-400 rounded-[60px] w-full px-14 pt-5 grid grid-cols-2 gap-16 justify-between items-center max-lg:gap-6 max-md:grid-cols-1 max-sm:rounded-[40px]">
        <div className="text-dark-400 pb-5 max-sm:mb-5">
          <h3 className="text-4xl font-semibold max-md:text-2xl">
            Подписка на Цветы
          </h3>
          <p className="text-base max-md:text-sm">
            Подписка на цветы – это услуга для тех, кто доверят нашему вкусу и
            хочет каждое утро любоваться красивым сезонным букетом
          </p>
          <div className="mt-14 flex gap-7 items-center max-lg:flex-col max-lg:gap-3 max-lg:mt-4">
            <div className="flex gap-1 items-center text-sm font-semibold ">
              от <span className="text-xl font-bold">1500</span> ₽{" "}
              <span className="text-xl ml-1 max-sm:text-green-700">
                <Icon type="badge" />
              </span>
            </div>
            <Link
              href={`/single-flower`}
              className="flex font-semibold  items-center justify-center h-12 px-6 text-lg  text-white rounded-[30px] bg-dark-400 shadow-v hover:bg-white hover:text-dark-400 tr-3
            "
            >
              Оформить подписку
            </Link>
          </div>
        </div>
        <div className="relative items-end flex h-full max-md:justify-center">
          <img
            src="/img/ring.png"
            className="absolute top-1/2 transform  -translate-y-1/2 left-0 h-[148px] max-xl:h-[120px] max-lg:h-24 max-lg:mt-10 max-md:top-2 max-md:mt-0 max-md:left-10 z-[3] max-sm:h-28"
          />
          <img
            src="/img/ban-fl.png"
            className="xl:h-[360px] w-full pl-4 max-xl:h-[300px] max-lg:h-[240px] max-md:hidden"
          />
          <img src="/img/ban-m.png" className="md:hidden h-[280px] relative z-[2]" />
          <img
            src="/img/rounding.png"
            className="md:hidden absolute max-sm:-top-6 left-0  z-[1] max-md:top-4"
          />
        </div>
      </div>
    </div>
  );
}
