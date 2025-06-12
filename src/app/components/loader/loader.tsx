import React from "react";
import { Flex, Spin } from "antd";

const Loader: React.FC = () => {
  return (
    <Flex gap="middle" vertical>
      <Flex gap="middle">
        <Spin tip="Loading" size="large"></Spin>
      </Flex>
      <Spin tip="Loading..."></Spin>
    </Flex>
  );
};

export default Loader;
