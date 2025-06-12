"use client";

import {
  CalendarOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import Header from "../../components/header/header";
import { useRouter } from "next/navigation";
import React from 'react'

export default function RegisterForm() {
  const router = useRouter();
  // const App: React.FC = () => {
  //   const [form] = Form.useForm();
  
  const handleLogin = () => {
    return router.push("/login");
  };

  const onFinish = (values: string) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Header />
      <div
        style={{
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Form
          // form={form}
          name="register"
          onFinish={onFinish}
          // style={{ maxWidth: 600 }}
          scrollToFirstError
          style={{
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            // border: "2px solid gray",
            // borderRadius: "10px",
            width: "400px",
          }}
        >
          <h1
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: "35px",
              padding: "1rem",
            }}
          >
            Client Register
          </h1>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Name"
              prefix={<UserOutlined />}
              style={{ width: "300px" }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Email"
              prefix={<MailOutlined />}
              style={{ width: "300px" }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              style={{ width: "300px" }}
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={{ width: "300px" }}
              size="large"
              placeholder="Confirm Password"
              prefix={<LockOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[
              { required: true, message: "Please input your date of birth" },
            ]}
          >
            <DatePicker
              renderExtraFooter={() => "extra footer"}
              style={{ width: "300px" }}
              size="large"
              placeholder="Date of Birth"
              prefix={<CalendarOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Mobile Number"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="policiesAccepted"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            // {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ width: "300px", fontWeight: "bold" }}
              size="large"
              onClick={handleLogin}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
