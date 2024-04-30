import { EntityInterface } from "@/types/storage";

export interface EntityListContainerProps {
  list: EntityInterface[];
  isFetching?: boolean;
}
