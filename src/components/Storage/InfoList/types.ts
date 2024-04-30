import { Nullable } from "@/types";

export interface InfoListProps {
  entitiesCount: number;
  selected: Nullable<string>;
  uploadFile: (path: string, file: unknown) => Promise<void>;
  deleteFile: (path: string) => Promise<void>;
  createFolder: (path: string, name: string) => Promise<void>;
}
