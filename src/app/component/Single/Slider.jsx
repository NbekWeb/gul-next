"use client";

import { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

  const image = "/img/buk.png"; // Replace with your image path
  const slides = Array(4).fill(image); // Creates an array with the same image repeated 4 times

  return (
    <div className="grid grid-cols-2 gap-5">

    <div className="banner-slider">
      {/* Main Slider */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Navigation, Thumbs]}
        className="main-slider"
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full rounded-3xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumb-slider mt-5"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative ">
              {/* Conditionally apply bg-black/40 only if the index matches activeIndex */}
              <div
                className={`absolute flex w-full h-full rounded-3xl ${
                  activeIndex === index ? "bg-black/40" : ""
                } z-10 top-0`}
              ></div>
              <img src={slide} alt={`Thumbnail ${index + 1}`} className="w-full  rounded-3xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
