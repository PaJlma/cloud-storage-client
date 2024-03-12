import { FC } from "react";
import { HeaderProps } from "./types";
import styles from "./styles.module.scss";
import Logotype from "../Logotype";

const Header: FC<HeaderProps> = ({ suffix }) => {
  return (
    <header className={styles["body"]}>
      <Logotype />
      {suffix}
    </header>
  );
};

export default Header;
