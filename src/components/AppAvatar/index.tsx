import { FC } from "react";
import { AppAvatarProps } from "./types";
import { Avatar, Dropdown, MenuProps } from "antd";

const AppAvatar: FC<AppAvatarProps> = ({
  login,
  color,
  name,
  logout,
  ...props
}) => {
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: "Выйти",
      onClick: logout,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]}>
      <Avatar
        style={{
          backgroundColor: color,
          cursor: "pointer",
          userSelect: "none",
        }}
        {...props}
      >
        {(name ?? login).charAt(0).toUpperCase()}
      </Avatar>
    </Dropdown>
  );
};

export default AppAvatar;
