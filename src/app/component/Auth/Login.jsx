"use client";

import Icon from "../Icon";
import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import "react-phone-number-input/style.css";
import { InputMask } from "@react-input/mask";
import { api } from "@/app/utils/api";
import { useTranslations } from "next-intl";

const types = [{ name: "phone" }, { name: "userName" }, { name: "email" }];

export default function Login({ onClose, onSucces, cleared = false }) {
  const t = useTranslations("menu"); // Using the "form" namespace for form-related translations
  const [messageApi, contextHolder] = message.useMessage();

  const [selectType, setSelectType] = useState("phone");
  const [phone, setPhone] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [emailReg, setEmailReg] = useState(""); // Email for registration
  const [phoneReg, setPhoneReg] = useState(""); // Phone for registration
  const [passwordReg, setPasswordReg] = useState(""); // Password for registration
  const [passwordRegAgain, setPasswordRegAgain] = useState("");

  const [type, setType] = useState("log");

  const clear = () => {
    setPhone("");
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setEmailReg("");
    setPhoneReg("");
    setPasswordReg("");
    setPasswordRegAgain("");
    setUsername("");
  };

  useEffect(() => {
    clear();
  }, [cleared]);

  const onFinish = async (values) => {
    try {
      const cleanedPhone = values.phone.replace(/\D/g, "");
      const response = await api({
        url: "/account/signin/",
        method: "POST",
        data: { identifier: cleanedPhone, password: values.password },
      });
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      onSucces();
    } catch (error) {
      messageApi.error(t("loginError")); // Using translation for error message
    } finally {
      onClose();
      clear();
    }
  };

  const onFinishEmail = async (values) => {
    try {
      const response = await api({
        url: "/account/signin/",
        method: "POST",
        data: { identifier: values.email, password: values.password },
      });
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      onSucces();
    } catch (error) {
      messageApi.error(t("emailError")); // Using translation for email error message
    } finally {
      clear();
      onClose();
    }
  };

  const onFinishUser = async (values) => {
    try {
      const response = await api({
        url: "/account/signin/",
        method: "POST",
        data: { identifier: values.username, password: values.password },
      });
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      onSucces();
    } catch (error) {
      messageApi.error(t("emailError")); // Using translation for email error message
    } finally {
      clear();
      onClose();
    }
  };

  const onFinishReg = async (values) => {
    try {
      const cleanedPhone = values.phoneReg.replace(/\D/g, "");
      const response = await api({
        url: "/account/signup/",
        method: "POST",
        data: {
          phone: cleanedPhone,
          email: values.emailReg,
          password: values.passwordReg,
          password_confirm: values.passwordRegAgain,
          first_name: values.firstName,
          last_name: values.lastName,
          username: values.username,
        },
      });
      onFinish({ phone: cleanedPhone, password: values.passwordReg });
    } catch (error) {
      messageApi.error(t("registrationError")); // Using translation for registration error message
    } finally {
      onClose();
      clear();
    }
  };

  return (
    <div className="overflow-x-auto tr-scrollbar max-h-[calc(100vh-150px)]">
      {type == "log" ? (
        <>
          <div className="flex justify-center text-3xl font-semibold ">
            {t("login")}
          </div>
          <div className="bg-gray-100 font-semibold text-sm p-1.5 rounded-xl mt-7 grid grid-cols-3 gap-2.5">
            {types.map((type, i) => (
              <div
                key={i}
                onClick={() => setSelectType(type.name)}
                className={`flex items-center justify-center h-10 rounded-xl hover:cursor-pointer tr-3 hover:bg-white ${
                  type.name == selectType ? "bg-white " : "bg-transparent"
                }`}
              >
                {t(type.name)}
              </div>
            ))}
          </div>
          <div className="mt-2.5 mb-7">
            {selectType == "phone" ? (
              <div>
                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    name="phone"
                    label={t("phone")}
                    className="phone"
                    rules={[
                      {
                        required: true,
                        message: t("phoneRequired"), // Using translation for phone required message
                      },
                    ]}
                  >
                    <InputMask
                      className="w-full"
                      mask="+7 (___) ___-__-__"
                      placeholder="+7 (777) 777-77-77"
                      replacement={{ _: /\d/ }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label={t("password")}
                    rules={[
                      {
                        required: true,
                        message: t("passwordRequired"), // Using translation for password required message
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={t("passwordPlaceholder")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full mt-4 !bg-green-800 border !border-green-800 hover:!text-green-800 hover:!bg-white !py-6"
                    >
                      {t("login")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : selectType == "email" ? (
              <div>
                <Form layout="vertical" onFinish={onFinishEmail}>
                  <Form.Item
                    name="email"
                    label={t("email")}
                    className="phone"
                    rules={[
                      {
                        required: true,
                        message: t("emailRequired"), // Using translation for email required message
                      },
                    ]}
                  >
                    <Input
                      placeholder={t("email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label={t("password")}
                    rules={[
                      {
                        required: true,
                        message: t("passwordRequired"), // Using translation for password required message
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={t("passwordPlaceholder")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full mt-4 !bg-green-800 border !border-green-800 hover:!text-green-800 hover:!bg-white !py-6"
                    >
                      {t("login")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <div>
                <Form layout="vertical" onFinish={onFinishUser}>
                  <Form.Item
                    name="username"
                    label={t("userName")}
                    className="phone"
                    rules={[
                      {
                        required: true,
                        message: t("userName_error"), 
                      },
                    ]}
                  >
                    <Input
                      placeholder={t("userName")}
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label={t("password")}
                    rules={[
                      {
                        required: true,
                        message: t("passwordRequired"), // Using translation for password required message
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={t("passwordPlaceholder")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full mt-4 !bg-green-800 border !border-green-800 hover:!text-green-800 hover:!bg-white !py-6"
                    >
                      {t("login")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            )}
            <div
              onClick={() => setType("reg")}
              className="flex justify-center hover:underline hover:underline-offset-1 hover:cursor-pointer"
            >
              {t("register")}
            </div>
          </div>
        </>
      ) : (
        <div className="">
          <div className="flex justify-center text-3xl font-semibold ">
            {t("register")}
          </div>

          <div className="mt-2.5 mb-7">
            <div>
              <Form layout="vertical" onFinish={onFinishReg}>
                <Form.Item
                  name="firstName"
                  label={t("firstName")}
                  rules={[{ required: true, message: t("name_error") }]}
                >
                  <Input
                    placeholder={t("firstName")}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label={t("lastName")}
                  rules={[{ required: true, message: t("lastName_error") }]}
                >
                  <Input
                    placeholder={t("lastName")}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="username"
                  label={t("userName")}
                  rules={[{ required: true, message: t("userName_error") }]}
                >
                  <Input
                    placeholder={t("userName")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  className="phone"
                  name="phoneReg"
                  label={t("phone")}
                  rules={[{ required: true, message: t("phoneRequired") }]}
                >
                  <InputMask
                    className="w-full"
                    placeholder="+7 (777) 777-77-77"
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    value={phoneReg}
                    onChange={(e) => setPhoneReg(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="emailReg"
                  label={t("email")}
                  rules={[{ required: true, message: t("emailRequired") }]}
                >
                  <Input
                    placeholder={t("email")}
                    value={emailReg}
                    onChange={(e) => setEmailReg(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="passwordReg"
                  label={t("password")}
                  rules={[{ required: true, message: t("passwordRequired") }]}
                >
                  <Input.Password
                    placeholder={t("password")}
                    value={passwordReg}
                    onChange={(e) => setPasswordReg(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="passwordRegAgain"
                  label={t("passwordConfirm")}
                  rules={[
                    {
                      required: true,
                      message: t("passwordRequired"),
                    },
                  ]}
                >
                  <Input.Password
                    placeholder={t("passwordConfirm")}
                    value={passwordRegAgain}
                    onChange={(e) => setPasswordRegAgain(e.target.value)}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full mt-4 !bg-green-800 border !border-green-800 hover:!text-green-800 hover:!bg-white !py-6"
                  >
                    {t("register")}
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <span
              onClick={() => setType("log")}
              className="flex items-center justify-center gap-2 mx-auto hover:underline hover:underline-offset-1 hover:cursor-pointer max-w-max"
            >
              {t("login")}
              <span className="text-lg">
                <Icon type="log" />
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
