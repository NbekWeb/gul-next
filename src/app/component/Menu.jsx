"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import { Popover, Select, Menu, Modal, Input } from "antd";
import { useTranslations } from "next-intl";
import Login from "./Auth/Login";
import { useOrders } from "@/app/content/OrdersContext";
import { api } from "@/app/utils/api";

const content = (
  <div className="flex flex-col gap-2 text-lg font-semibold ">
    {/* <a
      href="tel:+7(981) 104 18 10"
      className="hover:text-dark-400 text-dark-400"
    >
      +7 981-104-18-10
    </a> */}
    <a
      href="tel:+7(981) 104 18 10"
      className="hover:text-dark-400 text-dark-400"
    >
      +7 981-104-18-10
    </a>
  </div>
);

const menus = [
  {
    path: "catalog",
    label: "catalog",
    icon: "/img/flower.png",
    key: "catalog",
  },
  {
    path: "aboutUs",
    label: "aboutUs",
    key: "aboutUs",
    children: [
      {
        key: "plantation",
        label: "plantation",
        path: "plantation",
      },
      {
        key: "example",
        label: "example",
        path: "example",
      },
      {
        key: "schedule",
        label: "schedule",
        path: "schedule",
      },
      {
        key: "clients",
        label: "clients",
        path: "clients",
      },
      {
        key: "retail-clients ",
        label: "retailClients",
        path: "retail-clients",
      },
    ],
  },
  { path: "1", label: "payment", key: "payment" },
  { path: "delivery", label: "delivery", key: "delivery" },
  {
    path: "4",
    label: "subscription",
    key: "subscription",
  },
  { path: "2", label: "return", key: "return" },
  { path: "3", label: "client", key: "client" },
];

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function Menus() {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 300);
  const goBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const { toggleOpened, opened, logined, updatLogined } = useOrders();
  const t = useTranslations("menu");

  const { ordersLength, updateOrders } = useOrders();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (name.length > 0) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  }, [name]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showDialog, setShowDialog] = useState(false);
  const [hasAccessToken, setHasAccessToken] = useState(
    !!localStorage.getItem("access_token")
  );
  const [selectedLang, setSelectedLang] = useState("ru");
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);
  const [flowersAll, setFlowersAll] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLang = (newLang) => {
    setSelectedLang(newLang);

    if (selectedLang !== newLang) {
      switchLanguage();
    }
  };

  const getFlowersAll = async (name) => {
    try {
      const response = await api({
        url: "/flower/flowers/all/",
        method: "GET",
        params: { name },
      });

      setFlowersAll(response.data.results);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setHasAccessToken(false);
    updatLogined();
  };

  const handleFocus = () => {
    if (name.length > 0) {
      setIsDropdownVisible(true);
    }
  };

  useEffect(() => {
    if (debouncedName) {
      getFlowersAll(debouncedName);
    }
  }, [debouncedName]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setHasAccessToken(!!token);
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    if (opened) {
      setShowDialog(opened);
    }
  }, [opened]);

  const handleCancel = () => {
    setShowDialog(false);
    if (opened) {
      toggleOpened();
    }
  };

  const switchLanguage = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/ru");
      router.push(newPath);
    } else if (pathname.startsWith("/ru")) {
      const newPath = pathname.replace("/ru", "/en");
      router.push(newPath);
    }
  };

  const handleSucces = () => {
    updatLogined();
    setHasAccessToken(true);
  };

  useEffect(() => {
    const findCurrentMenu = (menus) => {
      for (const menu of menus) {
        if (pathname.startsWith(`/${selectedLang}/${menu.path}`)) {
          return menu;
        }
        if (menu.children) {
          const childMenu = findCurrentMenu(menu.children);
          if (childMenu) {
            return childMenu;
          }
        }
      }
      return undefined;
    };

    const currentMenu = findCurrentMenu(menus);
    setCurrent(currentMenu?.key);
  }, [pathname, selectedLang]);

  return (
    <div className={`relative `}>
      {showDialog && (
        <Modal footer={null} title="" open={showDialog} onCancel={handleCancel}>
          <Login
            onClose={handleCancel}
            onSucces={() => handleSucces()}
            cleared={showDialog}
          />
        </Modal>
      )}
      <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
        <div className="flex items-center justify-between py-5 max-md:grid max-md:grid-cols-3 max-md:pt-5 max-md:pb-3">
          <div className="flex items-center gap-4 md:hidden">
            <span className="text-4xl" onClick={() => setOpen(true)}>
              <Icon type="menu" />
            </span>

            <Popover content={content} trigger="click" placement="bottomRight">
              <span className="text-xl text-dark-400">
                <Icon type="tel" />
              </span>
            </Popover>
          </div>
          <Link
            href={`/`}
            className="flex items-center gap-2.5 max-md:justify-center"
          >
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <span className="text-xl font-medium text-pink-500 max-sm:hidden max-md:text-base">
              FLOWERS&OPT
            </span>
          </Link>
          <div className="flex gap-4 text-xl text-dark-400 md:hidden max-md:justify-end">
            <Link href={`/favorite`}>
              <Icon type="heart" />
            </Link>
            <Link href={`/basket`}>
              <span className="relative">
                <Icon type="bag" />
                {ordersLength > 0 && (
                  <span className="w-[14px] h-[14px] rounded-full bg-green-700 text-[10px] flex items-center justify-center text-white absolute top-0 right-0 max-xl:w-[10px] max-xl:h-[10px] max-xl:text-[8px] max-xl:right-0.5 max-xl:top-0.5">
                    {ordersLength}
                  </span>
                )}
              </span>
            </Link>
            {hasAccessToken ? (
              <Popover
                content={
                  <div
                    className="flex items-center gap-2 text-lg font-medium text-dark-400 hover:cursor-pointer "
                    onClick={logOut}
                  >
                    <span className="text-red-500">
                      <Icon type="log" />
                    </span>
                    <span>{t("logout")}</span>{" "}
                  </div>
                }
                trigger="click"
                placement="bottomRight"
              >
                <span className="text-xl text-dark-400">
                  <Icon type="user" />
                </span>
              </Popover>
            ) : (
              <span
                onClick={() => setShowDialog(true)}
                className="hover:cursor-pointer"
              >
                <Icon type="user" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 max-md:hidden ">
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
              defaultValue="moskva"
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
              <Select.Option value="moskva">{t("moskva")}</Select.Option>
              <Select.Option value="amsterdam">{t("amsterdam")}</Select.Option>
              <Select.Option value="newest">{t("quito")}</Select.Option>
            </Select>

            <div className="flex items-center gap-4 text-base font-medium text-dark-400 max-lg:hidden">
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>{t("quito")}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>{t("moskva")}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/img/watch.png" className="w-9" />
                <span>{t("amsterdam")}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg font-semibold text-dark-400 max-xl:hidden">
              <a href="tel:+7(981) 104 18 10">+7 981-104-18-10</a>
              {/* <a href="tel:+7(981) 104 18 10">+7 981-104-18-10</a> */}
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
          <div className="flex-grow mr-4 overflow-x-auto tr-scrollbar">
            <Menu
              mode="horizontal"
              className="min-w-max"
              selectedKeys={[current]}
              items={menus.map(({ path, label, icon, children }) =>
                children
                  ? {
                      key: path,
                      label: t(label),
                      children: children.map(({ key, label, path }) => ({
                        key,
                        label: <Link href={`/${path}`}>{t(label)}</Link>,
                      })),
                    }
                  : path != "1" && path != "2" && path != "3" && path != "4"
                  ? {
                      key: path,
                      label: (
                        <Link href={`/${path}`}>
                          <span className="flex items-center gap-2 ">
                            <span>{t(label)}</span>
                            {icon && (
                              <img src={icon} alt={label} className="w-4" />
                            )}
                          </span>
                        </Link>
                      ),
                    }
                  : {
                      key: path,
                      label: (
                        <span onClick={() => goBottom()}>
                          <span className="flex items-center gap-2 ">
                            <span>{t(label)}</span>
                          </span>
                        </span>
                      ),
                    }
              )}
            />
          </div>
          <div className="flex items-center gap-5 text-xl text-dark-400 max-xl:text-xl ">
            <div className="h-10 w-[300px] max-lg:w-[200px] overflow-y-hidden searching max-h-10">
              <Input
                prefix={<Icon type="search" />}
                placeholder="Поиск"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleFocus}
              />
              <div
                ref={searchRef}
                className={`absolute flex flex-col gap-2 text-sm text-dark-400 w-[300px] max-lg:w-[200px] rounded-md  top-32 z-[1000] py-1.5 border px-2.5 ${
                  !isDropdownVisible && "hidden"
                }`}
              >
                {flowersAll.map((flower, i) => (
                  <Link
                    href={`/single-flower/${flower?.id}`}
                    key={i}
                    onClick={() => setName("")}
                    className="truncate hover:outline-offset-1 hover:underline hover:cursor-pointer hover:text-green-800"
                  >
                    {flower?.translations?.[selectedLang]?.name}
                  </Link>
                ))}
                {flowersAll.length == 0 && (
                  <div className="truncate ">{t("notFound")}</div>
                )}
              </div>
            </div>

            <Link href={`/favorite`}>
              <Icon type="heart" />
            </Link>
            <Link href={`/basket`}>
              <span className="relative">
                <Icon type="bag" />
                {ordersLength > 0 && (
                  <span className="w-[14px] h-[14px] rounded-full bg-green-700 text-[10px] flex items-center justify-center text-white absolute top-0 right-0 max-xl:w-[10px] max-xl:h-[10px] max-xl:text-[8px] max-xl:right-0.5 max-xl:top-0.5">
                    {ordersLength}
                  </span>
                )}
              </span>
            </Link>
            {hasAccessToken ? (
              <Popover
                content={
                  <div
                    className="flex items-center gap-2 text-lg font-medium text-dark-400 hover:cursor-pointer "
                    onClick={logOut}
                  >
                    <span className="text-red-500">
                      <Icon type="log" />
                    </span>
                    <span>{t("logout")}</span>
                  </div>
                }
                trigger="click"
                placement="bottomRight"
              >
                <span className="text-xl text-dark-400">
                  <Icon type="user" />
                </span>
              </Popover>
            ) : (
              <span
                onClick={() => setShowDialog(true)}
                className="hover:cursor-pointer"
              >
                <Icon type="user" />
              </span>
            )}
          </div>
        </div>
        <div className="w-full h-10 mb-2 overflow-y-hidden searching max-h-10 md:hidden">
          <Input
            prefix={<Icon type="search" />}
            placeholder="Поиск"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus}
          />
          <div className="container absolute pr-10 mx-auto max-sm:pr-6 top-[120px] z-[1000] ">
            <div
              ref={searchRef}
              className={`  flex flex-col gap-2 text-sm bg-white left-0 text-dark-400 w-full rounded-md   py-1.5 border px-2.5 ${
                !isDropdownVisible && "hidden"
              }`}
            >
              {flowersAll.map((flower, i) => (
                <Link
                  href={`/single-flower/${flower?.id}`}
                  key={i}
                  onClick={() => setName("")}
                  className="truncate hover:outline-offset-1 hover:underline hover:cursor-pointer hover:text-green-800"
                >
                  {flower?.translations?.[selectedLang]?.name}
                </Link>
              ))}
              {flowersAll.length == 0 && (
                <div className="truncate ">{t("notFound")}</div>
              )}
            </div>
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
            <div className="flex items-center gap-4 pl-6 mb-2">
              <div className="flex items-center none-select">
                <Select
                  value={selectedLang}
                  className=""
                  onChange={(val) => {
                    changeLang(val);
                  }}
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
                defaultValue="moskva"
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
                <Select.Option value="moskva">{t("moskva")}</Select.Option>
                <Select.Option value="amsterdam">
                  {t("amsterdam")}
                </Select.Option>
                <Select.Option value="newest">{t("quito")}</Select.Option>
              </Select>
            </div>
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
                        label: (
                          <Link
                            href={`/${path}`}
                            onClick={() => setOpen(false)}
                          >
                            {label}
                          </Link>
                        ),
                      })),
                    }
                  : path != "1" && path != "2" && path != "3"
                  ? {
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
                  : {
                      key: path,
                      label: (
                        <span
                          onClick={() => {
                            setOpen(false);
                            goBottom();
                          }}
                        >
                          <span className="flex items-center gap-2 ">
                            <span>{label}</span>
                            {icon && (
                              <img src={icon} alt={label} className="w-4" />
                            )}
                          </span>
                        </span>
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
