import { FC } from "react";
import { InfoListContainerProps } from "./types";
import InfoList from "@/components/Storage/InfoList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  createFolder,
  deleteFile,
  fetchStorageInfo,
  fetchStorageList,
  setStorageSelected,
  uploadFile,
} from "@/store/reducers/storage.slice";
import { useSearch } from "@tanstack/react-router";

const InfoListContainer: FC<InfoListContainerProps> = () => {
  const { info, selected } = useAppSelector((state) => state.store);
  const { path: storagePath } = useSearch({ from: "/storage/my" });
  const dispatch = useAppDispatch();

  return (
    <InfoList
      deleteFile={async (path: string) => {
        await dispatch(deleteFile(path));
        dispatch(setStorageSelected(null));
        dispatch(fetchStorageInfo());
        dispatch(fetchStorageList(storagePath || "/"));
      }}
      uploadFile={async (path, file) => {
        await dispatch(uploadFile({ path, file }));
        dispatch(fetchStorageInfo());
        dispatch(fetchStorageList(storagePath || "/"));
      }}
      createFolder={async (path, name) => {
        await dispatch(createFolder({ path, name }));
        dispatch(fetchStorageInfo());
        dispatch(fetchStorageList(storagePath || "/"));
      }}
      entitiesCount={info.entitiesCount}
      selected={selected}
    />
  );
};

export default InfoListContainer;
