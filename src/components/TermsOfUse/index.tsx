import { FC, useContext } from "react";
import { Button, Divider, Flex, Typography } from "antd";
import Logotype from "@/components/Logotype";
import styles from "./styles.module.scss";
import { ConfigContext } from "antd/es/config-provider";
import { RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "@tanstack/react-router";
import { TERM_OF_USE_TEXT } from "@/constants";

const TermsOfUse: FC = () => {
  const { theme } = useContext(ConfigContext);
  const { history } = useRouter();

  return (
    <Flex vertical align="center">
      <Flex
        align="center"
        vertical
        style={{
          borderRadius: theme?.token?.borderRadius,
          boxShadow: theme?.token?.boxShadow,
        }}
        className={styles["document"]}
      >
        <Flex align="center" justify="space-between" style={{ width: "100%" }}>
          <Flex align="center" gap={30}>
            <Button
              onClick={() => history.back()}
              shape="circle"
              type="text"
              size="large"
            >
              <RollbackOutlined />
            </Button>
            <Typography.Title className={styles["title"]}>
              Правила обработки данных
            </Typography.Title>
          </Flex>
          <Logotype size="large" />
        </Flex>
        <Divider />
        <Typography.Paragraph className={styles["text"]}>
          {TERM_OF_USE_TEXT}
        </Typography.Paragraph>
      </Flex>
    </Flex>
  );
};

export default TermsOfUse;
