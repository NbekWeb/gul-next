"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spin, Empty } from "antd";
import { api } from "@/app/utils/api";
import { Input, Switch } from "antd";
import { useOrders } from "@/app/content/OrdersContext";

import { usePathname, useRouter } from "next/navigation";

import Card from "@/app/component/Basket/Card";
import Form from "@/app/component/Basket/Form";

export default function HomePage() {
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");
  const [flowers, setFlowers] = useState([]);
  const [accaunt, setAccaunt] = useState({});
  const [loading, setLoading] = useState(0);
  const token = localStorage.getItem("access_token");
  
  const { toggleOpened, opened, updateOrders } = useOrders();

  const pathname = usePathname();
  const router = useRouter();

  const getFlower = async (id, count) => {
    setLoading((prev) => prev + 1);
    try {
      const response = await api({
        url: `/flower/flowers/${id}/`,
        method: "GET",
      });
      setFlowers((prev) => [...prev, { ...response.data, count }]); // Use spread operator to add to array

      // Use spread operator to add to array
    } catch (error) {
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const clear = () => {
    router.push(`/${selectedLang}`);
    localStorage.removeItem("orders");
    updateOrders([]);
  };
  const getUser = async () => {
    try {
      const response = await api({
        url: `/account/user/detail/`,
        method: "GET",
      });
      setAccaunt(response.data);
    } catch (error) {
      router.push(`/${selectedLang}`);
      if (!opened) {
        toggleOpened();
      }
    } finally {
      setLoading((prev) => prev - 1);
    }
  };

  const onDelete = (id) => {
    // Remove the item from the localStorage orders
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Remove the deleted flower from the flowers state
    setFlowers((prev) => prev.filter((flower) => flower.id !== id));
    updateOrders(updatedOrders);
    // Optionally, refetch the flowers list if needed
    updatedOrders.forEach((order) => {
      if (order.id) {
        getFlower(order.id, order.count);
      }
    });
  };

  const handleAdd = (count, flowerId) => {
    setFlowers((prev) => {
      return prev.map((flower) =>
        flower.id === flowerId ? { ...flower, count } : flower
      );
    });

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = orders.map((order) =>
      order.id === flowerId ? { ...order, count } : order
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const calculateTotal = () => {
    return flowers.reduce((total, flower) => {
      return total + flower.price * flower.count; // Multiply price by count for each flower
    }, 0);
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  useEffect(() => {
    getUser();
    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Loop through orders and fetch data for each flower ID
    orders.forEach((order) => {
      if (order.id) {
        getFlower(order.id, order.count);
      }
    });
  }, []);

  return (
    <Spin spinning={loading > 0}>
      <div className="container px-5 mx-auto overflow-x-hidden max-sm:px-3">
        <div className="flex gap-2.5 items-center text-base font-medium mb-7 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
          <Link href={`/`} className="text-dark-400/50 hover:text-green-800">
            {t("home")}
          </Link>
          <span className="text-green-800 capitalize hover:text-green-800">
            | {t("cartTitle")}
          </span>
        </div>

        {flowers.length === 0 ? (
          <Empty description={t("empty")} />
        ) : (
          <div className=" gap-2.5 grid grid-cols-5 w-full max-xl:grid-cols-1 max-xl:gap-5 ">
            <div className="col-span-3 p-10 border rounded-3xl border-dark-400/50 max-xl:col-span-1 max-xl:order-last">
              <Form data={accaunt} goBack={() => clear()} />
            </div>
            <div className="col-span-2 p-10 bg-gray-100 rounded-2xl max-h-max max-xl:col-span-1">
              <h2 className="text-3xl font-semibold mb-7 text-dark-400 max-lg:text-2xl max-lg:mb-5 max-sm:mb-3">
                {t("cartTitle")}
              </h2>
              <div className="flex flex-col gap-5 pb-5 border-b border-dashed border-dark-400/50">
                {flowers.map((item, i) => (
                  <Card
                    key={i}
                    item={item}
                    onDelete={() => onDelete(item?.id)}
                    onAdd={(count) => handleAdd(count, item?.id)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-5 py-5 border-b border-dashed border-dark-400/50">
                <div className="flex items-center justify-between">
                  <span> {t("sum")} </span>
                  <span>{calculateTotal()} ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span> {t("delivery")}</span>
                  <span>499 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span> {t("discount")}</span>
                  <span className="">
                    <span className="text-red-500">- 500 </span>₽
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t("cashback")}</span>
                  <span>+ {calculateTotal() / 10} ₽</span>
                </div>
              </div>
              <div className="flex flex-col gap-5 py-5 border-b border-dashed border-dark-400/50">
                <div className="flex items-center justify-between gap-14">
                  <span className="text-base font-semibold min-w-[180px]">
                    {t("promoCode")}
                  </span>
                  <Input placeholder={t("codes")} className="" />
                </div>
                <div className="flex items-center justify-between gap-14 custom-switch">
                  <span className="text-base font-semibold min-w-[180px]">
                    {t("applyCashback")}
                  </span>
                  <div className="flex items-center gap-5 text-lg">
                    <Switch defaultChecked />
                    <span>
                      {" "}
                      {calculateTotal() >= 1000 ? 1000 : calculateTotal() / 2} ₽
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-3xl font-semibold mt-7 max-lg:text-2xl ">
                <h2 className=" text-dark-400">{t("cartTitle")}</h2>
                <span className="text-green-800">
                  {calculateTotal() +
                    499 -
                    500 -
                    (calculateTotal() >= 1000 ? 1000 : calculateTotal() / 2)}
                  ₽
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
}
