import { FC } from "react";
import { AvatarWithDropdownProps } from "./types";
import { Avatar, Dropdown, MenuProps } from "antd";
import styles from "./styles.module.scss";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

const AvatarWithDropdown: FC<AvatarWithDropdownProps> = ({ account }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const items: MenuProps["items"] = [
    {
      key: 0,
      label: "Профиль",
      onClick: () => navigate({ to: "/" }),
      icon: <UserOutlined />,
    },
    {
      key: 1,
      label: "Выйти",
      onClick: logout,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Dropdown trigger={["click"]} menu={{ items }} arrow>
      <Avatar
        size="large"
        style={{ backgroundColor: account.color }}
        className={styles["avatar"]}
      >
        {account.login?.charAt(0).toUpperCase()}
      </Avatar>
    </Dropdown>
  );
};

export default AvatarWithDropdown;
