"use client";

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SolutionOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select } from "antd";
import Header from "../../components/header/header";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { Option } = Select;
  const router = useRouter();
  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  // };

  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0,
  //     },
  //     sm: {
  //       span: 16,
  //       offset: 8,
  //     },
  //   },
  // };

  // const App: React.FC = () => {
  //   const [form] = Form.useForm();

  const onFinish = (values: string) => {
    console.log("Received values of form: ", values);
  };

  const handleRegister = () => {
    return router.push("/login");
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
            Admin Register
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
            name="role"
            rules={[{ required: true, message: "Please select your role" }]}
          >
            <Select
              placeholder="Select your role"
              style={{ width: "300px" }}
              size="large"
              prefix={<UserSwitchOutlined />}
            >
              <Option value="male">Trainer</Option>
              <Option value="female">Client</Option>
            </Select>
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
            name="planType"
            rules={[
              { required: true, message: "Please select your Plan Type!" },
            ]}
          >
            <Select
              placeholder="Select your Plan Type"
              style={{ width: "300px" }}
              size="large"
              prefix={<SolutionOutlined />}
            >
              <Option value="base">Base</Option>
              <Option value="pro">Pro</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="active"
            rules={[{ required: true, message: "Please select True or False" }]}
          >
            <Select
              placeholder="Active"
              style={{ width: "300px" }}
              size="large"
              prefix={<QuestionCircleOutlined />}
            >
              <Option value="true">True</Option>
              <Option value="false">False</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="trial"
            rules={[{ required: true, message: "Please select True or False" }]}
          >
            <Select
              placeholder="Trial"
              style={{ width: "300px" }}
              size="large"
              prefix={<QuestionCircleOutlined />}
            >
              <Option value="true">True</Option>
              <Option value="false">False</Option>
            </Select>
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
              style={{ width: "300px" }}
              size="large"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
