"use client";

import { useRouter } from "next/navigation";
import Header from "./components/header/header";
import { Button } from "antd";
import { useStyles } from "./style";
import { ProductProvider } from "./providers/productProvider";

const Page: React.FC = () => {
  const router = useRouter();
  const { styles } = useStyles();

  const handleAdmin = () => {
    return router.push("/register");
  };
  const handleClient = () => {
    return router.push("/clientregister");
  };
  return (
    <ProductProvider>
      <div>
        <Header />
        <div className={styles.container}>
          <div>
            <h1 className={styles.bigHeading}>Hello</h1>
          </div>
          <div>
            <h2 className={styles.smallHeading}>Hello</h2>
          </div>
          <div className={styles.butContainer}>
            <Button
              className={styles.Button}
              color="primary"
              variant="outlined"
              onClick={handleAdmin}
            >
              Admin
            </Button>
            <Button color="primary" variant="outlined" onClick={handleClient}>
              Client
            </Button>
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default Page;
