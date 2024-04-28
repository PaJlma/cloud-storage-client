import { FC, useContext } from "react";
import { FormLayoutProps } from "./types";
import { Flex, Form, Typography } from "antd";
import { ConfigContext } from "antd/es/config-provider";
import styles from "./styles.module.scss";
import Logotype from "@/components/Logotype";

const FormLayout: FC<FormLayoutProps> = ({ title, titleSuffix, ...props }) => {
  const { theme } = useContext(ConfigContext);

  return (
    <Flex
      style={{
        border: theme?.token?.borderRadius,
        boxShadow: theme?.token?.boxShadow,
      }}
    >
      <div
        style={{
          borderTopLeftRadius: theme?.token?.borderRadius,
          borderBottomLeftRadius: theme?.token?.borderRadius,
        }}
        className={styles["image"]}
      />
      <Flex vertical gap={35} className={styles["form-wrapper"]}>
        {title && (
          <Flex align="center" gap={20}>
            <Logotype />
            <Typography.Title className={styles["title"]}>
              {title}
            </Typography.Title>
            {titleSuffix}
          </Flex>
        )}
        <Form {...props} />
      </Flex>
    </Flex>
  );
};

export default FormLayout;
