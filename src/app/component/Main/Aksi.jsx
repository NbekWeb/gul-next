"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "../Icon";

import OnlineCard from "../Card/OnlineCard";

export default function Banner() {
  return (
    <div className="container px-5 mx-auto max-sm:px-3 ">
      <h2 className="px-16 mx-auto text-4xl font-semibold text-dark-400 mb-7 max-lg:text-3xl max-lg:px-0 max-lg:mb-5 max-sm:mb-3 ">
        Акции
      </h2>
      <div className="relative flex justify-center ">
        <div className="w-full mx-auto md:px-16 max-md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next-aksi",
              prevEl: ".custom-prev-aksi",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 2,
            }}
            loop={true}
            breakpoints={{
              280: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
        <div className="absolute z-[2] flex justify-between w-full mx-auto transform -translate-y-1/2 top-1/2 max-md:hidden">
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
