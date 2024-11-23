"use client";

import { usePathname, useRouter } from "next/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Menu() {
  const router = useRouter(); // For navigation
  const pathname = usePathname(); // Get the current path

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru"); // Replace `/en` with `/ru`
      router.push(newPath); // Navigate to the new route
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en"); // Replace `/ru` with `/en`
      router.push(newPath); // Navigate to the new route
    }
  };

  return (
    <div>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <p>Current Path: {pathname}</p>
      <button onClick={switchLanguage}>Switch Language</button>
    </div>
  );
}
