import { StorageInfoInterface } from "@/types/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateInterface } from "..";
import { axiosWRA } from "@/utils/axios/axiosWRA";

export interface StorageStateInterface {
  isInfoFetching: boolean;
  info: StorageInfoInterface;
}

const initialState: StorageStateInterface = {
  isInfoFetching: false,
  info: {
    totalSize: 0,
    maxSize: 0,
    entitiesCount: 0,
  },
};

export const fetchStorageInfo = createAsyncThunk<StorageInfoInterface>(
  "storage/fetch-storage-info",
  async (_, api) => {
    const { auth } = api.getState() as RootStateInterface;
    const response = await axiosWRA.get(
      `http://localhost:5000/storage/${auth.account._id}`,
    );
    return response.data;
  },
);

export const storageSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
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
  },
});
