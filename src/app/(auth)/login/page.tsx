"use client";

import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import Header from "../../components/header/header";

export default function Login() {
  return (
    <>
      <div style={{ height: "100%", width: "100%", alignContent: "center" }}>
        <div style={{ position: "fixed", top: 0, width: "inherit" }}>
          <Header />
        </div>
        <div
          style={{
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
              // border: "2px solid gray",
              // borderRadius: "10px",
              // width: "fit-content",
              // padding: "2rem",
              // marginTop: "3rem",
              // minWidth: "150px",
            }}
            // onFinish={onFinish}
          >
            <h1
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: "35px",
                padding: "1rem",
              }}
            >
              Login
            </h1>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
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
                { required: true, message: "Please input your Password!" },
              ]}
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
            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password?</a>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ width: "300px", fontWeight: "bold" }}
                size="large"
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ width: "300px" }}
                size="large"
              >
                <a href="/register" style={{ fontWeight: "bold" }}>
                  Register
                </a>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
