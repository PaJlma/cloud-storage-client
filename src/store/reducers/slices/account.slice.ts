import { axiosWithAuth } from "@/axios";
import { IAccount } from "@/types/account";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IAccount = {};

export const getProfile = createAsyncThunk<IAccount>(
  "account/getProfile",
  async () => {
    const response = await axiosWithAuth.get<IAccount>(
      "http://localhost:5000/auth/profile",
    );
    return response.data;
  },
);

export const logout = createAsyncThunk<void>("account/logout", async () => {
  await axiosWithAuth.post("http://localhost:5000/auth/logout");
  localStorage.removeItem("access");
});

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (_, action: PayloadAction<IAccount>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (_, action) => action.payload);
    builder.addCase(logout.fulfilled, () => initialState);
  },
});
