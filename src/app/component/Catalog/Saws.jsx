"use client";

import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library


export default function Banner({ data = {}, onlike }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

    useEffect(() => {
      AOS.init({
        offset: 120, // Offset from the trigger point
        duration: 600, // Animation duration
        easing: "ease-in-out", // Easing function
        delay: 100, // Delay before animation starts
        once: false, // Whether animation should run only once
      });
      AOS.refresh();
    }, []);
  

  return (
    <Link
    data-aos="zoom-in-up"
        data-aos-delay="200"
      href={`/single-flower/${data?.flower?.id}`}
      className="text-dark-400 "
    >
      <div className="max-lg:pb-10">
        <div className="relative ">
          <div className="flex flex-col justify-between ">
            <div className="w-full overflow-hidden rounded-2xl aspect-square">
              <img
                src={data?.flower?.images?.[0]?.image}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-lg font-semibold max-lg:text-base max-sm:text-sm max-md:mt-1 limit2 min-h-8 text-dark-400">
              {data?.flower?.translations?.[selectedLang]?.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
