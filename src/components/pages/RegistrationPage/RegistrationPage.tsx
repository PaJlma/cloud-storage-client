import { FC } from "react";
import { RegistrationPageProps } from "./types";
import { Flex } from "antd";
import RegistrationForm from "@/components/forms/RegistrationForm";
import styles from "./styles.module.scss";

const RegistrationPage: FC<RegistrationPageProps> = (props) => {
  return (
    <Flex justify="center" className={styles["body"]}>
      <RegistrationForm />
    </Flex>
  );
};

export default RegistrationPage;
