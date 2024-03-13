import { FC } from "react";
import { HomePresentationProps } from "./types";
import { Button, Flex, Typography } from "antd";
import { Link } from "@tanstack/react-router";
import styles from "./styles.module.scss";
import { useAppSelector } from "@/hooks/redux";

const HomePresentation: FC<HomePresentationProps> = (props) => {
  const { login } = useAppSelector((state) => state.account);

  return (
    <Flex gap={40} align="center" className={styles["body"]}>
      <Flex vertical className={styles["text-box"]}>
        <Typography.Title className={styles["title"]}>
          Персональное облачное хранилище
        </Typography.Title>
        <Typography className={styles["presentation-text"]}>
          Храните свои данные в безопасном месте с доступом из любой точки
          планеты
        </Typography>
        <Flex vertical gap={20} className={styles["text-box__footer"]}>
          <Link to="/storage/my">
            <Button
              type="primary"
              size="large"
              className={styles["open-storage-btn"]}
              style={{ width: "100%" }}
            >
              Открыть хранилище
            </Button>
          </Link>
          {!login && (
            <Flex align="center" gap={20}>
              <Typography.Text className={styles["dont-have-account"]}>
                Нет аккаунта?
              </Typography.Text>
              <Link to="/registration" className={styles["dont-have-account"]}>
                Зарегистрироваться
              </Link>
            </Flex>
          )}
        </Flex>
      </Flex>
      <img
        src="/cloud-technologies.png"
        alt="cloud technologies"
        className={styles["presetation-image"]}
      />
    </Flex>
  );
};

export default HomePresentation;
