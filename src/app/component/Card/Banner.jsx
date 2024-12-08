"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Icon from "../Icon";

export default function Banner() {
  const slides = [
    {
      src: "/img/b1.png",
      srcMobi: "/img/b1m.png",
    },
    {
      src: "/img/b1.png",
      srcMobi: "/img/b1m.png",
    },
    {
      src: "/img/b1.png",
      srcMobi: "/img/b1m.png",
    },
  ];
  return (
    <div className="container max-sm:px-3  flex justify-center px-5 mx-auto banner">
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item.src} className="w-full max-xs:hidden" />
              <img src={item.srcMobi} className="w-full xs:hidden" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-[2] flex justify-between w-full px-20 mx-auto bottom-5 max-sm:px-10 text-base max-sm:hidden max-sm:bottom-3">
          <div className="flex items-center justify-center w-12 h-12 rotate-90 bg-white rounded-full custom-prev-banner ">
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
