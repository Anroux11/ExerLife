"use client";

import { useStyles } from "./style/style";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const { styles } = useStyles();
  const router = useRouter();

  const handleLogin = () => {
    return router.push("/login");
  };

  return (
    <div className={styles.header}>
      <Image
        src="/appLogo.png"
        alt="Profile"
        width={70}
        height={70}
        className={styles.Image}
      />
      {/* <Typography>ExerLife</Typography> */}

      <div className={styles.ButtonsContainer}>
        <Button
          className={styles.Button}
          color="primary"
          variant="filled"
          size="large"
          onClick={handleLogin}
        >
          <UserAddOutlined />
          Login
        </Button>

      </div>
    </div>
  );
};

export default Header;
