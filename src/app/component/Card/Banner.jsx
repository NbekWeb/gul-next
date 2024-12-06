"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Icon from "../Icon";

export default function Banner() {
  return (
    <div className="container flex justify-center px-5 mx-auto">
      <div className="relative w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next-banner",
            prevEl: ".custom-prev-banner",
          }}
          pagination={{ clickable: true }}
          
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="/img/b1.png" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/b2.png" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/b1.png" className="w-full" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute z-10 flex justify-between w-full px-20 mx-auto bottom-5">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white rounded-full custom-prev-banner">
            <Icon type="chevron" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 -rotate-90 bg-white rounded-full custom-next-banner">
            <Icon type="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
