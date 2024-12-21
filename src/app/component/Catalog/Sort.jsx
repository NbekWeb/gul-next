"use client";

import { Link } from "@/i18n/routing";
import Icon from "../Icon";
import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

import { usePathname, useRouter } from "next/navigation";

export default function Banner({ data = {} }) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const pathname = usePathname();

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

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const queryParams = new URLSearchParams();
  queryParams.set("category", `[${data?.id}]`);

  return (
    <Link
      href={`/catalog?${queryParams.toString()}`}
      className="capitalize group"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      <div className="max-lg:pb-10">
        <div className="relative ">
          <div className="flex flex-col justify-between ">
            <div className="w-full overflow-hidden rounded-2xl aspect-square">
              <img src={data?.image} className="object-cover w-full h-full" />
            </div>
            <p className="mt-3 text-lg font-semibold max-lg:text-base max-sm:text-sm max-md:mt-1 limit2 min-h-8 text-dark-400">
              {data?.translations?.[selectedLang]?.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
