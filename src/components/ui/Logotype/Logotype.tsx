import { Flex, Typography } from "antd";
import { FC, useContext } from "react";
import { LogotypeProps } from "./types";
import { CloudFilled } from "@ant-design/icons";
import { ConfigContext } from "antd/es/config-provider";
import { COMPANY_NAME } from "@/constants";
import styles from "./styles.module.scss";
import { Link } from "@tanstack/react-router";

const Logotype: FC<LogotypeProps> = (props) => {
  const { theme } = useContext(ConfigContext);

  return (
    <Link to="/">
      <Flex align="center" gap={10}>
        <CloudFilled
          className={styles["logotype"]}
          style={{ color: theme?.token?.colorPrimary }}
        />
        <Typography.Text className={styles["company-name"]}>
          {COMPANY_NAME}
        </Typography.Text>
      </Flex>
    </Link>
  );
};

export default Logotype;
