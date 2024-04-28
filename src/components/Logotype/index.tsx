import { CloudFilled } from "@ant-design/icons";
import { FC } from "react";
import styles from "./styles.module.scss";
import { LogotypeProps } from "./types";
import { Link } from "@tanstack/react-router";
import { Typography } from "antd";
import { COMPANY_NAME } from "@/constants";

const Logotype: FC<LogotypeProps> = ({ withText }) => {
  return (
    <Link to="/" className={styles["body"]}>
      <CloudFilled className={styles["logotype"]} />
      {withText && (
        <Typography.Text className={styles["company-name"]}>
          {COMPANY_NAME}
        </Typography.Text>
      )}
    </Link>
  );
};

export default Logotype;
