import { AvatarProps } from "antd";

export interface AppAvatarProps extends AvatarProps {
  login: string;
  color: string;
  name?: string;
}
