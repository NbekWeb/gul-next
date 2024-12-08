"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import Icon from "../Icon";

import Saws from "../Catalog/Saws";

export default function Banner() {
  return (
    <div className="container max-sm:px-3  px-5 mx-auto ">
      <h2 className="px-16 mx-auto text-4xl font-semibold text-dark-400 mb-7">
        Вы смотрели
      </h2>
      <div className="relative flex justify-center mx-auto ">
        <div className="w-full px-16 mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-see",
              prevEl: ".custom-prev-see",
            }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={6}
          >
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
            <SwiperSlide>
              <Saws />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute z-10 flex justify-between w-full mx-auto transform -translate-y-1/2 top-1/2">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white border rounded-full custom-prev-see shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white border rounded-full custom-next-see shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
