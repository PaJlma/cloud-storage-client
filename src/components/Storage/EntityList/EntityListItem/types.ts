import { EntityInterface } from "@/types/storage";
import { FlexProps } from "antd";

export interface EntityListItemProps extends Omit<FlexProps, "children"> {
  entity: EntityInterface;
  path: string;
}
