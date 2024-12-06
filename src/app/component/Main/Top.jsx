"use client";

import {  Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import Icon from "../Icon";

import OnlineCard from "../Card/OnlineCard";

export default function Banner() {
  return (
    <div className="container px-5 mx-auto ">
      <h2 className="px-16 mx-auto text-4xl font-semibold text-dark-400 mb-7">
      Популярное 
      </h2>
      <div className="relative flex justify-center mx-auto ">
        <div className="w-full px-16 mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-top",
              prevEl: ".custom-prev-top",
            }}
            pagination={{ clickable: true }}     
            loop={true}
            spaceBetween={50}
            slidesPerView={4}
          >
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="top" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute z-10 flex justify-between w-full mx-auto transform -translate-y-1/2 top-1/2">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white border rounded-full custom-prev-top shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white border rounded-full custom-next-top shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
