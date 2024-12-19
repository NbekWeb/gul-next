"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { Spin, Empty, Input, Form, Checkbox, Button } from "antd";

import { usePathname, useRouter } from "next/navigation";

import Icon from "../Icon";

export default function HomePage({ data, goBack }) {
  const t = useTranslations("menu");
  const [selectedLang, setSelectedLang] = useState("ru");
  const [select1, setSelect1] = useState(0);
  const [select2, setSelect2] = useState(0);
  const [select3, setSelect3] = useState(0);
  const pathname = usePathname();

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    const phoneNumber = phone.replace(/[^\d]/g, "");
    if (phoneNumber.length !== 110) {
      return `+7 (${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(
        3,
        6
      )} ${phoneNumber.substring(6, 8)}-${phoneNumber.substring(8, 10)}`;
    }
    return phoneNumber;
  };
  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setSelectedLang("en");
    } else if (pathname.startsWith("/ru")) {
      setSelectedLang("ru");
    }
  }, [pathname]);

  return (
    <div>
      <div>
        <h3 className="text-3xl font-semibold mb-7">{t("f_order_form")}</h3>

        <div className="flex max-w-max capitalize mb-7 items-center p-1.5 gap-1.5 rounded-xl bg-gray-100 text-base">
          <div
            onClick={() => setSelect1(0)}
            className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
              select1 == 0 && "bg-white"
            }`}
          >
            {t("f_select1_title")}
          </div>
          <div
            onClick={() => setSelect1(1)}
            className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
              select1 == 1 && "bg-white"
            }`}
          >
            {t("f_select2_title")}
          </div>
          <div
            onClick={() => setSelect1(2)}
            className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
              select1 == 2 && "bg-white"
            }`}
          >
            {t("f_select3_title")}
          </div>
          <div
            onClick={() => setSelect1(3)}
            className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
              select1 == 3 && "bg-white"
            }`}
          >
            {t("f_select4_title")}
          </div>
        </div>
        <Form name="feedback_form1" layout="vertical">
          <Form.Item
            name="name1"
            label={t("f_name_and_phone")}
            rules={[{ required: true, message: t("f_name_error1") }]}
          >
            <Input placeholder={t("f_name_and_phone")} />
          </Form.Item>
        </Form>
        <h3 className="mt-10 mb-5 text-3xl font-semibold">
          {t("f_delivery_address")}
        </h3>

        <Form name="feedback_form2" layout="vertical">
          <Form.Item
            name="name2"
            label={t("f_city")}
            rules={[{ required: true, message: t("f_name_error1") }]}
          >
            <Input placeholder={t("f_city")} />
          </Form.Item>
          <Form.Item
            name="name3"
            label={t("f_address")}
            rules={[{ required: true, message: t("f_name_error1") }]}
          >
            <Input placeholder={t("f_address")} />
          </Form.Item>
          <Form.Item
            name="name4"
            label={t("f_comment")}
            rules={[{ required: true, message: t("f_name_error1") }]}
          >
            <Input.TextArea rows={4} placeholder={t("f_comment")} />
          </Form.Item>
          <Checkbox>
            <span className="text-green-800">
              {t("f_call_before_delivery")}
            </span>
          </Checkbox>
        </Form>
        <h3 className="mt-10 mb-5 text-3xl font-semibold">
          {t("f_contact_information")}
        </h3>
        {data.phone && (
          <Form layout="vertical" disabled={true}>
            <Form.Item
              initialValue={`${data?.first_name} ${data?.last_name}`}
              name="name5"
              label={t("f_name")}
              rules={[{ required: true, message: t("f_name_error1") }]}
            >
              <Input placeholder={t("f_name")} />
            </Form.Item>
            <Form.Item
              initialValue={data?.email}
              name="email"
              label={t("f_email")}
              rules={[{ required: true, message: t("f_name_error1") }]}
            >
              <Input placeholder={t("f_email")} />
            </Form.Item>
            <Form.Item
              initialValue={formatPhoneNumber(data?.phone)}
              name="phone"
              label={t("f_phone")}
              rules={[{ required: true, message: t("f_name_error1") }]}
            >
              <Input placeholder={t("f_phone")} />
            </Form.Item>
          </Form>
        )}
        <div className="text-dark-400">
          <h3 className="mt-10 mb-5 text-3xl font-semibold">
            {t("f_when_deliver")}
          </h3>

          <div className="flex max-w-max capitalize mb-7 items-center p-1.5 gap-1.5 rounded-xl bg-gray-100 text-base">
            <div
              onClick={() => setSelect2(0)}
              className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                select2 == 0 && "bg-white"
              }`}
            >
              {t("f_free_delivery")}
            </div>
            <div
              onClick={() => setSelect2(1)}
              className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                select2 == 1 && "bg-white"
              }`}
            >
              {t("f_urgent_delivery")}
            </div>
            <div
              onClick={() => setSelect2(2)}
              className={`h-full hover:cursor-pointer px-2.5 flex items-center rounded-xl py-2 ${
                select2 == 2 && "bg-white"
              }`}
            >
              {t("f_exact_time_delivery")}
            </div>
          </div>
          <span>{t("f_delivery_price")}</span>
        </div>
        <div>
          <h3 className="mt-10 mb-5 text-3xl font-semibold">
            {t("f_payment_method")}
          </h3>
          <div className="flex flex-col gap-2.5 font-medium">
            <div
              onClick={() => setSelect3(0)}
              className="flex items-center justify-between px-3 py-3 bg-gray-100 rounded-2xl hover:cursor-pointer"
            >
              <div
                className={`${
                  select3 == 0 ? "text-green-800" : "text-dark-400"
                } flex items-center gap-3`}
              >
                <div
                  className={`flex items-center justify-center border rounded-full w-7 h-7  ${
                    select3 == 0
                      ? "bg-green-800 border-green-800"
                      : "bg-white border-dark-400 "
                  }`}
                >
                  <div className="flex bg-white rounded-full max-w-4 max-h-4 min-w-4 min-h-4"></div>
                </div>
                <span>{t("f_visa_mastercard_mir")}</span>
              </div>
              <div className="flex items-center h-5 gap-5">
                <img src="/img/visa.png" className="h-full" />
                <img src="/img/master.png" className="h-full" />
                <img src="/img/mir.png" className="h-full" />
              </div>
            </div>
            <div
              className="flex items-center justify-between px-3 py-3 bg-gray-100 rounded-2xl hover:cursor-pointer"
              onClick={() => setSelect3(1)}
            >
              <div
                className={`${
                  select3 == 1 ? "text-green-800" : "text-dark-400"
                } flex items-center gap-3`}
              >
                <div
                  className={`flex items-center justify-center border rounded-full w-7 h-7  ${
                    select3 == 1
                      ? "bg-green-800 border-green-800"
                      : "bg-white border-dark-400 "
                  }`}
                >
                  <div className="flex bg-white rounded-full max-w-4 max-h-4 min-w-4 min-h-4"></div>
                </div>
                <span>{t("f_foreign_cards")}</span>
              </div>
              <div className="flex items-center h-5 gap-5">
                <img src="/img/visa.png" className="h-full" />
                <img src="/img/master.png" className="h-full" />
              </div>
            </div>
            <div
              className="flex items-center justify-between px-3 py-3 bg-gray-100 rounded-2xl hover:cursor-pointer"
              onClick={() => setSelect3(2)}
            >
              <div
                className={`${
                  select3 == 2 ? "text-green-800" : "text-dark-400"
                } flex items-center gap-3`}
              >
                <div
                  className={`flex items-center justify-center border rounded-full w-7 h-7  ${
                    select3 == 2
                      ? "bg-green-800 border-green-800"
                      : "bg-white border-dark-400 "
                  }`}
                >
                  <div className="flex bg-white rounded-full max-w-4 max-h-4 min-w-4 min-h-4"></div>
                </div>
                <span>{t("f_e_wallets")}</span>
              </div>
              <div className="flex items-center h-5 gap-5">
                <img src="/img/cash.png" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-10 mb-5 text-3xl font-semibold">
            {t("f_comment_order")}
          </h3>
          <Form name="feedback_form3" layout="vertical">
            <Form.Item name="comment" rules={[{ required: false }]}>
              <Input.TextArea rows={4} placeholder={t("f_comment_order")} />
            </Form.Item>
          </Form>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <Button
            className="w-full !text-white !bg-green-800 !border-green-800 hover:!bg-white hover:!text-green-800"
            type="primary"
            onClick={() => goBack()}
          >
            {t("f_submit_order")}
          </Button>
          <Checkbox>
            <span className="text-green-800">
              {t("f_personal_data_consent")}
            </span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
