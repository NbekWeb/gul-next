"use client";

import { useState,useEffect } from "react";
import { Form, Input, Button, Rate, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { api } from "@/app/utils/api";
import { useOrders } from "@/app/content/OrdersContext";
import { usePathname, useRouter } from "next/navigation";


export default function FormComponent({ id = -1, onUpdate }) {
  const t = useTranslations("menu");
  const { toggleOpened, opened } = useOrders();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState("ru");

  const [formValues, setFormValues] = useState({
    name: "",
    feedback: "",
    rating: 0,
    image: null,
  });

    useEffect(() => {
      if (pathname.startsWith("/en")) {
        setSelectedLang("en");
      } else if (pathname.startsWith("/ru")) {
        setSelectedLang("ru");
      }
    }, [pathname]);

  // Update state on input change
  const handleChange = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  // Handle file upload change
  const handleUploadChange = ({ file }) => {
    if (file.status === "done" || file.originFileObj) {
      handleChange("image", file.originFileObj);
    } else if (file.status === "error") {
      message.error(t("registrationError"));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("rating", formValues.rating);
    formData.append("image", formValues.image);
    formData.append("flower", id);
    formData.append("content", formValues.feedback);
    formData.append("full_name", formValues.name);

    try {
      await api({
        url: "/flower/reviews/",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success(t("review_success"));
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFormValues({
        name: "",
        feedback: "",
        rating: 0,
        image: null,
      });
      // router.push(`/${selectedLang}/catalog?category=[${id}]`);
      onUpdate();
    } catch (error) {
      if (!opened) {
        toggleOpened();
      }
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-7">{t("feedback_title")}</h3>
      <Form
        name="feedback_form"
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          rating: formValues.rating,
        }}
      >
        {/* Name input */}
        <Form.Item
          name="name"
          label={t("name_label")}
          rules={[{ required: true, message: t("name_error") }]}
        >
          <Input
            placeholder={t("name_placeholder")}
            value={formValues.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="feedback"
          label={t("feedback_label")}
          rules={[{ required: true, message: t("feedback_error") }]}
        >
          <Input.TextArea
            placeholder={t("feedback_placeholder")}
            rows={4}
            value={formValues.feedback}
            onChange={(e) => handleChange("feedback", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="image"
          label=""
          rules={[{ required: true, message: t("img_error") }]}
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload
            beforeUpload={(file) => {
              handleChange("image", file);
              return false; // Prevent auto-upload
            }}
            listType="picture-card"
            showUploadList={true}
            onChange={handleUploadChange}
          >
            <span className="mr-2">{t("upload_image")}</span>
            <UploadOutlined />
          </Upload>
        </Form.Item>

        {/* Rating */}
        <Form.Item
          name="rating"
          label={t("rating_label")}
          rules={[
            { required: true, message: t("rating_error") },
            () => ({
              validator(_, value) {
                if (value > 0) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("rating_error")));
              },
            }),
          ]}
        >
          <Rate
            value={formValues.rating}
            onChange={(value) => handleChange("rating", value)}
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-green-800 hover:!bg-white !border-green-800 !text-white hover:!text-green-800"
          >
            {t("submit_feedback")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
