import { FC } from "react";
import { AppAvatarProps } from "./types";
import { Avatar, Dropdown, Flex, MenuProps, Typography } from "antd";
import { useAppDispatch } from "@/hooks/redux";
import { clearAccount } from "@/store/reducers/auth.slice";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "@tanstack/react-router";

const AppAvatar: FC<AppAvatarProps> = ({ login, color, name, ...props }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/profile">Профиль</Link>,
      icon: <UserOutlined />,
    },
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
    <Flex align="center" gap={10}>
      <Typography.Text>{name || login}</Typography.Text>
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        arrow
        trigger={["click"]}
      >
        <Avatar
          style={{
            backgroundColor: color,
            cursor: "pointer",
            userSelect: "none",
          }}
          {...props}
        >
          {(name || login).charAt(0).toUpperCase()}
        </Avatar>
      </Dropdown>
    </Flex>
  );
};

export default AppAvatar;
