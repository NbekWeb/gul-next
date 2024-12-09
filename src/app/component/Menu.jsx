"use client";

import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";
import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import { Popover, Select, Menu } from "antd";

const content = (
  <div className="flex flex-col gap-2 text-lg font-semibold ">
    <a
      href="tel:+8(904) 999 99 99"
      className="hover:text-dark-400 text-dark-400"
    >
      8(904) 999 99 99
    </a>
    <a
      href="tel:+8(904) 999 99 99"
      className="hover:text-dark-400 text-dark-400"
    >
      8(904) 999 99 99
    </a>
  </div>
);

const menus = [
  {
    path: "catalog",
    label: "Каталог",
    icon: "/img/flower.png",
    key: "catalog",
  },
  {
    path: "aboutUs",
    label: "О нас",
    key: "aboutUs",
    children: [
      {
        key: "a",
        label: "sa",
        path: "sa",
      },
      {
        key: "a1",
        label: "sa1",
        path: "sa",
      },
    ],
  },
  { path: "payment", label: "Оплата", key: "payment" },
  { path: "delivery", label: "доставка", key: "delivery" },
  {
    path: "flower-subscription",
    label: "подписка на цветы",
    key: "subscription",
  },
  { path: "return", label: "Возврат", key: "return" },
  { path: "corporate-client", label: "Корпоративным клиентам", key: "client" },
];

export default function Menus() {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (newLang) => {
    setSelectedLang(newLang);

    if (selectedLang !== newLang) {
      switchLanguage();
    }
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru");
      router.push(newPath);
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en");
      router.push(newPath);
    }
  };

  useEffect(() => {
    const currentMenu = menus.find((menu) =>
      pathname.startsWith(`/${menu.path}`)
    );
    setCurrent(currentMenu?.key);
  }, [pathname, selectedLang]);

  return (
    <div className={`relative `}>
      <div className="container max-sm:px-3  px-5 mx-auto overflow-x-hidden ">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4 md:hidden">
            <span className="text-4xl" onClick={() => setOpen(true)}>
              <Icon type="menu" />
            </span>

            <Popover content={content} trigger="click" placement="bottomRight">
              <span className="text-xl text-dark-400">
                <Icon type="tel" />
              </span>
            </Popover>
            <div className="flex items-center none-select md:hidden">
              <Select
                value={selectedLang}
                className=""
                onChange={(val) => changeLang(val)}
                suffixIcon={
                  <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                }
                style={{ width: 70 }}
              >
                <Select.Option value="ru">RU</Select.Option>
                <Select.Option value="en">EN</Select.Option>
              </Select>
            </div>
          </div>
          <Link href={`/`} className="flex items-center gap-2.5">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <span className="text-xl font-medium text-pink-500 max-sm:hidden max-md:text-base">
              FLOWERS&OPT
            </span>
          </Link>
          <div className="flex gap-4 text-xl text-dark-400 md:hidden">
            <Link href={`/favorite`}>
              <Icon type="heart" />
            </Link>
            <Link href={`/basket`}>
              <span className="relative">
                <Icon type="bag" />
                <span className="w-[14px] h-[14px] rounded-full bg-green-700 text-[10px] flex items-center justify-center text-white absolute top-0 right-0 max-xl:w-[10px] max-xl:h-[10px] max-xl:text-[8px] max-xl:right-0.5 max-xl:top-0.5">
                  1
                </span>
              </span>
            </Link>
            <Icon type="user" />
          </div>
          <div className="flex items-center gap-4 max-md:hidden">
            <div className="flex items-center none-select">
              <Select
                value={selectedLang}
                className=""
                onChange={(val) => changeLang(val)}
                suffixIcon={
                  <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                }
                style={{ width: 70 }}
              >
                <Select.Option value="ru">RU</Select.Option>
                <Select.Option value="en">EN</Select.Option>
              </Select>
            </div>

            <Select
              defaultValue="Москва "
              suffixIcon={
                <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              }
              style={{ width: 120 }}
            >
              <Select.Option value="moskva">Москва</Select.Option>
              <Select.Option value="ams">Амстердам</Select.Option>
              <Select.Option value="newest">Кито</Select.Option>
            </Select>

            <div className="flex items-center gap-4 text-base font-semibold text-dark-400 max-lg:hidden">
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>Кито</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>Москва</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>Амстердам</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg font-semibold text-dark-400 max-xl:hidden">
              <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
              <a href="tel:+8(904) 999 99 99">8(904) 999 99 99</a>
            </div>
            <div className=" xl:hidden max-sm:hidden">
              <Popover
                content={content}
                trigger="click"
                placement="bottomRight"
              >
                <span className="text-xl text-dark-400">
                  <Icon type="tel" />
                </span>
              </Popover>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-6 overflow-x-hidden max-md:hidden">
          <div className="flex-grow mr-4 overflow-x-hidden">
            <Menu
              mode="horizontal"
              selectedKeys={[current]}
              items={menus.map(({ path, label, icon, children }) =>
                children
                  ? {
                      key: path,
                      label,
                      children: children.map(({ key, label, path }) => ({
                        key,
                        label: <Link href={`/${path}`}>{label}</Link>,
                      })),
                    }
                  : {
                      key: path,
                      label: (
                        <Link href={`/${path}`}>
                          <span className="flex items-center gap-2 ">
                            <span>{label}</span>
                            {icon && (
                              <img src={icon} alt={label} className="w-4" />
                            )}
                          </span>
                        </Link>
                      ),
                    }
              )}
            />
          </div>
          <div className="flex gap-5 text-xl text-dark-400 max-xl:text-xl">
            <Icon type="search" />
            <Link href={`/favorite`}>
              <Icon type="heart" />
            </Link>
            <Link href={`/basket`}>
              <span className="relative">
                <Icon type="bag" />
                <span className="w-[14px] h-[14px] rounded-full bg-green-700 text-[10px] flex items-center justify-center text-white absolute top-0 right-0 max-xl:w-[10px] max-xl:h-[10px] max-xl:text-[8px] max-xl:right-0.5 max-xl:top-0.5">
                  1
                </span>
              </span>
            </Link>
            <Icon type="user" />
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0  w-full h-screen  md:hidden overflow-y-hidden tr3 ${
          open ? "left-0" : "-left-[1000px]"
        } `}
        onClick={() => setOpen(false)}
      >
        <div
          className={`container max-sm:px-3  relative h-full p-5 bg-white rounded-r-md max-w-[450px] tr3  `}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute flex items-center justify-center bg-white  text-[8px] border rounded-full top-5  h-5 w-5 text-dark-400 border-dark-400 right-5"
            onClick={() => setOpen(false)}
          >
            <Icon type="close" />
          </div>
          <div className="pr-6">
            <Menu
              mode="inline"
              selectedKeys={[current]}
              items={menus.map(({ path, label, icon, children }) =>
                children
                  ? {
                      key: path,
                      label,
                      children: children.map(({ key, label, path }) => ({
                        key,
                        label: <Link href={`/${path}`}>{label}</Link>,
                      })),
                    }
                  : {
                      key: path,
                      label: (
                        <Link href={`/${path}`} onClick={() => setOpen(false)}>
                          <span className="flex items-center gap-2 ">
                            <span>{label}</span>
                            {icon && (
                              <img src={icon} alt={label} className="w-4" />
                            )}
                          </span>
                        </Link>
                      ),
                    }
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
