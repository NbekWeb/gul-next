"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Icon from "../Icon";

import OnlineCard from "../Card/OnlineCard";

export default function Banner() {
  return (
    <div className="">
      <h2 className="container px-16 mx-auto text-4xl font-semibold text-dark-400 mb-7">
      Акции
      </h2>
      <div className="container relative flex justify-center mx-auto ">
        <div className="container px-16 mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next-aksi",
              prevEl: ".custom-prev-aksi",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={50}
            slidesPerView={4}
          >
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
            <SwiperSlide>
              <OnlineCard type="minus" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute z-10 flex justify-between w-full mx-auto top-40">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white border rounded-full custom-prev-aksi shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white border rounded-full custom-next-aksi shadow-v text-dark-400 border-dark-400">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
