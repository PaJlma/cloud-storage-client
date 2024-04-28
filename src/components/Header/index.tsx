import { FC, useMemo } from "react";
import { HeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Button, Flex, Progress, Typography } from "antd";
import Logotype from "../Logotype";
import { LoginOutlined } from "@ant-design/icons";
import AppAvatar from "../AppAvatar";
import { formatBytes } from "@/utils/formatBytes";
import { useNavigate } from "@tanstack/react-router";

const Header: FC<HeaderProps> = ({
  isAuthenticated,
  login,
  name,
  avatarColor,
  storageTotalSize,
  storageMaxSize,
  logout,
}) => {
  const navigate = useNavigate();
  const percents = useMemo(() => {
    return +((storageTotalSize / storageMaxSize) * 100).toFixed();
  }, [storageTotalSize, storageMaxSize]);

  return (
    <header className={styles["body"]}>
      <Logotype withText />
      {isAuthenticated ? (
        <Flex align="center" gap={20}>
          <Flex align="center" gap={20}>
            <Typography.Text>{`${formatBytes(storageTotalSize)} / ${formatBytes(storageMaxSize)}`}</Typography.Text>
            <Progress
              percent={percents}
              style={{ width: 300 }}
              showInfo={false}
              status={percents >= 90 ? "exception" : "normal"}
            />
          </Flex>
          <AppAvatar
            logout={logout}
            size="large"
            login={login}
            name={name}
            color={avatarColor}
          />
        </Flex>
      ) : (
        <Button
          onClick={() => navigate({ to: "/registration" })}
          type="primary"
          icon={<LoginOutlined />}
        >
          Войти
        </Button>
      )}
    </header>
  );
};

export default Header;
