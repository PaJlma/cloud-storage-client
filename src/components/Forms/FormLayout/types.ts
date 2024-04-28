import { FormProps } from "antd";
import { ReactNode } from "react";

export interface FormLayoutProps extends FormProps {
  title?: string;
  titleSuffix?: ReactNode;
  children: ReactNode;
}
