import { FC } from "react";
import { AvatarWithDropdownProps } from "./types";
import { Avatar, Dropdown, MenuProps } from "antd";
import styles from "./styles.module.scss";
import { LogoutOutlined } from "@ant-design/icons";
import useAuth from "@/hooks/useAuth";

const AvatarWithDropdown: FC<AvatarWithDropdownProps> = ({ account }) => {
  const { logout } = useAuth();

  const items: MenuProps["items"] = [
    {
      key: 0,
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
