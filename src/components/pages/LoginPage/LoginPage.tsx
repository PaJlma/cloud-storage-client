import { FC } from "react";
import { LoginPageProps } from "./types";
import { Flex } from "antd";
import LoginForm from "@/components/forms/LoginForm";
import styles from "./styles.module.scss";

const LoginPage: FC<LoginPageProps> = (props) => {
  return (
    <Flex justify="center" className={styles["body"]}>
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
