import { FC } from "react";
import { AppAvatarProps } from "./types";
import { Avatar, Dropdown, MenuProps } from "antd";
import { useAppDispatch } from "@/hooks/redux";
import { clearAccount } from "@/store/reducers/auth.slice";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";

const AppAvatar: FC<AppAvatarProps> = ({ login, color, name, ...props }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: "Выйти",
      onClick: async () => {
        await dispatch(clearAccount());
        navigate({ to: "/" });
      },
      icon: <LogoutOutlined />,
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
