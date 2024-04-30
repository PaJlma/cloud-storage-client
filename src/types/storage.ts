export interface StorageInfoInterface {
  totalSize: number;
  entitiesCount: number;
  maxSize: number;
}

export type EntityType = "file" | "dir" | "unknown";

export interface EntityInterface {
  name: string;
  type: EntityType;
  size: number;
  birthtime: Date;
}
