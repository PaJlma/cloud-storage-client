export type EntityType = "file" | "dir" | "unknown";

export interface IStorageInfo {
  totalSize: number;
  entitiesCount: number;
  maxSize: number;
}

export interface IEntity {
  name: string;
  type: EntityType;
  size: number;
  birthtime: Date;
}
