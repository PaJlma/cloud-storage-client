import { FC } from "react";
import { AuthenticationLayoutProps } from "./types";
import Header from "@/components/ui/Header";
import AvatarWithDropdown from "@/components/ui/AvatarWithDropdown";
import styles from "./styles.module.scss";

const AuthenticationLayout: FC<AuthenticationLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>{children}</main>
    </>
  );
};

export default AuthenticationLayout;
