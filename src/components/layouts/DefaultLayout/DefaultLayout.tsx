import { FC } from "react";
import { DefaultLayoutProps } from "./types";
import Header from "@/components/ui/Header";
import { Button } from "antd";
import { Link } from "@tanstack/react-router";
import { useAppSelector } from "@/hooks/redux";
import { LoginOutlined } from "@ant-design/icons";
import AvatarWithDropdown from "@/components/ui/AvatarWithDropdown";
import styles from "./styles.module.scss";

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const account = useAppSelector((state) => state.account);

  return (
    <>
      <Header
        suffix={
          <>
            {account.login ? (
              <AvatarWithDropdown account={account} />
            ) : (
              <Link to="/login">
                <Button icon={<LoginOutlined />} size="large" type="primary">
                  Войти в аккаунт
                </Button>
              </Link>
            )}
          </>
        }
      />
      <main className={styles["main-container"]}>{children}</main>
    </>
  );
};

export default DefaultLayout;
