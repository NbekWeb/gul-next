"use client";

import {  Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import Icon from "../Icon";

import BaloonCard from "../Card/BaloonCard";

export default function Banner() {
  return (
    <div className="container max-sm:px-3  grid grid-cols-2 gap-5 px-5 mx-auto pb-44">
      <div className="relative bg-blue-100 w-full rounded-3xl h-[540px] flex gap-10 flex-col justify-center px-5">
        <img
          src="/img/baloon.png"
          className="absolute bottom-0 right-0 h-[500px]"
        />
        <img src="/img/vec.png" className="absolute top-12 left-12" />
        <h3 className="w-1/2 text-5xl font-semibold capitalize ">
          воздушные шары
        </h3>
        <span className="absolute flex items-center text-lg font-semibold text-dark-400 bottom-16 gap-2.5">
          Выбрать
          <Icon type="arrow" className="" />
        </span>
      </div>
      <div className="relative flex flex-col justify-center justify-between w-full h-full mx-auto overflow-x-hidden">
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-ball",
              prevEl: ".custom-prev-ball",
            }}
            pagination={{ clickable: true }}
            
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
          >
            <SwiperSlide>
              <BaloonCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <BaloonCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <BaloonCard type="top" />
            </SwiperSlide>
            <SwiperSlide>
              <BaloonCard type="minus" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex px-2 gap-7">
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
