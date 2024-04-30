import { Button, Flex, Typography } from "antd";
import { FC } from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "@tanstack/react-router";
import { PieChartFilled } from "@ant-design/icons";
import { PresentationProps } from "./types";

const Presentation: FC<PresentationProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <Flex align="center">
      <Flex vertical gap={10} className={styles["presentation-text-wrapper"]}>
        <Typography.Title className={styles["presentation-title"]}>
          Добро пожаловать в наш облачный сервис хранения данных — вашему
          надежному партнеру в цифровом мире!
        </Typography.Title>
        <Typography.Text className={styles["presentation-text"]}>
          Мы предлагаем инновационное решение для безопасного и удобного
          хранения ваших ценных файлов, фотографий, видео и документов. Наш
          облачный сервис обеспечивает доступ к вашим данным в любое время и из
          любой точки мира, где бы вы ни находились.
        </Typography.Text>
        <Button
          type="primary"
          icon={<PieChartFilled />}
          size="large"
          onClick={() => navigate({ to: "/storage/my", search: { path: "/" } })}
        >
          Войти в хранилище
        </Button>
        {!isAuthenticated && (
          <Flex
            align="center"
            justify="center"
            gap={10}
            className={styles["presentation-footer"]}
          >
            <Typography.Text>Ещё нет аккаунта?</Typography.Text>
            <Link to="/registration">Зарегистрироваться</Link>
          </Flex>
        )}
      </Flex>
      <img src="/cloud-technologies.png" alt="cloud technologies" />
    </Flex>
  );
};

export default Presentation;
