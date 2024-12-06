"use client";

import {  Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import Icon from "../Icon";

import OnlineCard from "../Card/OnlineCard";



export default function Banner() {
  return (
    <div className="container px-5 mx-auto ">
      <h2 className="px-16 text-4xl font-semibold text-dark-400 mb-7">
        Витрина Онлайн
      </h2>
      <div className="relative flex justify-center ">
        <div className="w-full px-16 mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-vitrina",
              prevEl: ".custom-prev-vitrina",
            }}
            pagination={{ clickable: true }}
           
            loop={true}
            spaceBetween={50}
            slidesPerView={4}
          >
            <SwiperSlide>
              <OnlineCard type="new" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="new" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="new" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute z-10 flex justify-between w-full mx-auto transform -translate-y-1/2 top-1/2">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white border rounded-full custom-prev-vitrina shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white border rounded-full custom-next-vitrina shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
