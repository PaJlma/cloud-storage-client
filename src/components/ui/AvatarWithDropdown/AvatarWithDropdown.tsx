import { FC } from "react";
import { AvatarWithDropdownProps } from "./types";
import { Avatar, Button, Dropdown, MenuProps } from "antd";
import styles from "./styles.module.scss";
import { LogoutOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/hooks/redux";
import { logout } from "@/store/reducers/slices/account.slice";
import { useNavigate } from "@tanstack/react-router";

const AvatarWithDropdown: FC<AvatarWithDropdownProps> = ({ account }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: 0,
      label: (
        <Button
          onClick={() => {
            dispatch(logout());
            navigate({ to: "/" });
          }}
          type="text"
          icon={<LogoutOutlined />}
        >
          Выйти
        </Button>
      ),
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
