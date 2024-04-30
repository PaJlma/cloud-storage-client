import { EntityInterface, StorageInfoInterface } from "@/types/storage";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateInterface } from "..";
import { axiosWRA } from "@/utils/axios/axiosWRA";
import { authAccountIdSelector } from "../selectors/auth";
import { Nullable } from "@/types";
import { RcFile } from "antd/es/upload";

export interface StorageStateInterface {
  isListFetching: boolean;
  isInfoFetching: boolean;
  selected: Nullable<string>;
  info: StorageInfoInterface;
  list: EntityInterface[];
}

const initialState: StorageStateInterface = {
  isListFetching: false,
  isInfoFetching: false,
  selected: null,
  info: {
    totalSize: 0,
    maxSize: 0,
    entitiesCount: 0,
  },
  list: [],
};

export const uploadFile = createAsyncThunk<
  void,
  { path: string; file: unknown }
>("storage/upload-file", async ({ path = "/", file }, api) => {
  const accountId = authAccountIdSelector(api.getState() as RootStateInterface);
  const formData = new FormData();
  formData.append("file", file as RcFile);
  await axiosWRA.post(
    `http://localhost:5000/storage/${accountId}/upload?path=${path}`,
    formData,
  );
});

export const createFolder = createAsyncThunk<
  void,
  { path: string; name: string }
>("storage/create-folder", async ({ path = "/", name }, api) => {
  const accountId = authAccountIdSelector(api.getState() as RootStateInterface);
  await axiosWRA.post(
    `http://localhost:5000/storage/${accountId}/mkdir?path=${path}`,
    { name },
  );
});

export const deleteFile = createAsyncThunk<void, string>(
  "storage/delete-file",
  async (path, api) => {
    if (path === "/") {
      return;
    }
    const accountId = authAccountIdSelector(
      api.getState() as RootStateInterface,
    );
    await axiosWRA.delete(
      `http://localhost:5000/storage/${accountId}/delete?path=${path}`,
    );
  },
);

export const fetchStorageInfo = createAsyncThunk<StorageInfoInterface>(
  "storage/fetch-storage-info",
  async (_, api) => {
    const accountId = authAccountIdSelector(
      api.getState() as RootStateInterface,
    );
    const response = await axiosWRA.get(
      `http://localhost:5000/storage/${accountId}`,
    );
    return response.data;
  },
);

export const fetchStorageList = createAsyncThunk<EntityInterface[], string>(
  "storage/fetch-storage-list",
  async (path = "/", api) => {
    const accountId = authAccountIdSelector(
      api.getState() as RootStateInterface,
    );
    const response = await axiosWRA.get(
      `http://localhost:5000/storage/${accountId}/list?path=${path}`,
    );
    return response.data;
  },
);

export const storageSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStorageSelected(state, action: PayloadAction<Nullable<string>>) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStorageInfo.pending, (state) => {
        state.isInfoFetching = true;
      })
      .addCase(fetchStorageInfo.rejected, (state) => {
        state.isInfoFetching = false;
      })
      .addCase(fetchStorageInfo.fulfilled, (state, action) => {
        state.isInfoFetching = false;
        state.info = action.payload;
      });

    builder
      .addCase(fetchStorageList.pending, (state) => {
        state.isListFetching = true;
      })
      .addCase(fetchStorageList.rejected, (state) => {
        state.isListFetching = false;
      })
      .addCase(fetchStorageList.fulfilled, (state, action) => {
        state.isListFetching = false;
        state.list = action.payload;
      });
  },
});

export const { setStorageSelected } = storageSlice.actions;
