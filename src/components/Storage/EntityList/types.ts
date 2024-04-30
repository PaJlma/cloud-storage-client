import { Nullable } from "@/types";
import { EntityInterface } from "@/types/storage";

export interface EntityListProps {
  list: EntityInterface[];
  isFetching?: boolean;
  path: string;
  selected: Nullable<string>;
  setSelected: (entity: string) => void;
}
