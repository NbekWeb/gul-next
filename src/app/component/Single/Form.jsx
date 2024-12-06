"use client";

import { Form, Input, Button, Rate, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function FormComponent() {
  const onFinish = (values) => {
    message.success("Feedback submitted successfully");
    console.log("Received values:", values);
  };

  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold mb-7">Оставить отзыв</h3>
        <Form
          name="feedback_form"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            rating: 0,
          }}
        >
          {/* Name input */}
          <Form.Item
            name="name"
            label="Ваше имя"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя!" },
            ]}
          >
            <Input placeholder="Введите ваше имя" />
          </Form.Item>

          {/* Feedback textarea */}
          <Form.Item
            name="feedback"
            label="Отзыв"
            rules={[
              { required: true, message: "Пожалуйста, оставьте ваш отзыв!" },
            ]}
          >
            <Input.TextArea placeholder="Напишите ваш отзыв" rows={4} />
          </Form.Item>

          {/* Image upload (optional) */}
          <Form.Item
            name="image"
            label=""
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          >
            <Upload
              action="/upload"
              listType="picture-card"
              showUploadList={false}
              onChange={({ file, fileList }) => {
                if (file.status === "done") {
                  message.success(`${file.name} file uploaded successfully`);
                } else if (file.status === "error") {
                  message.error(`${file.name} file upload failed.`);
                }
              }}
            >
              <span className="mr-2">Загрузить фото</span>
              <UploadOutlined />
            </Upload>
          </Form.Item>

          {/* Rating */}
          <Form.Item
            name="rating"
            label="Ваша оценка "
            className="row"
            rules={[
              { required: true, message: "Пожалуйста, выберите рейтинг!" },
            ]}
          >
            <Rate />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled>
              Оставить отзыв
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
