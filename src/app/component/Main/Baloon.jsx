"use client";

import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

import BaloonCard from "../Card/BaloonCard";

export default function Banner({ data = [], onUpdate }) {
  const t = useTranslations("menu");

  useEffect(() => {
    AOS.init({
      offset: 120, // Offset from the trigger point
      duration: 600, // Animation duration
      easing: "ease-in-out", // Easing function
      delay: 100, // Delay before animation starts
      once: false, // Whether animation should run only once
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container grid grid-cols-2 gap-5 px-5 mx-auto baloon max-sm:px-3 pb-44 max-lg:grid-cols-1 ">
      <div
        className="relative bg-blue-100 w-full rounded-3xl h-[540px] flex gap-10 flex-col justify-center px-5"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <img
          src="/img/baloon.png"
          className="absolute bottom-0 right-0 h-[500px] z-[2]"
        />
        <img src="/img/vec.png" className="absolute top-12 left-12 " />
        <h3 className="w-1/2 text-5xl font-semibold capitalize relative z-[2] max-md:text-4xl max-sm:text-3xl">
          {t("balloons")}
        </h3>
        <Link href={`/404`}>
          <span className="absolute z-[2] flex items-center text-lg font-semibold text-dark-400 bottom-16 gap-2.5 hover:text-dark-400">
            {t("choose")}
            <Icon type="arrow" className="" />
          </span>
        </Link>
      </div>
      <div className="relative flex flex-col justify-between w-full h-full mx-auto overflow-x-hidden">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next-ball",
              prevEl: ".custom-prev-ball",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 2,
            }}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              280: {
                spaceBetween: 10,
              },
              480: {
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <BaloonCard type="top" data={item} onlike={onUpdate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex px-2 gap-7 max-lg:hidden">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white border border-transparent rounded-full custom-prev-ball shadow-v text-dark-400 hover:border-dark-400 tr-3">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white border border-transparent rounded-full custom-next-ball shadow-v text-dark-400 hover:border-dark-400 tr-3">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
