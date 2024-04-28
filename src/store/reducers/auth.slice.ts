import { AccountInterface } from "@/types/account";
import { axiosWRA } from "@/utils/axios/axiosWRA";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  isFetching: boolean;
  account: AccountInterface;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isFetching: false,
  account: {
    _id: "",
    login: "",
    name: "",
    lastName: "",
    color: "",
    createdAt: "",
    email: "",
    password: "",
  },
};

export const fetchAccount = createAsyncThunk<AccountInterface>(
  "auth/fetch-account",
  async () => {
    const response = await axiosWRA.get<AccountInterface>(
      "http://localhost:5000/auth/profile",
    );
    return response.data;
  },
);

export const clearAccount = createAsyncThunk("auth/clear-account", async () => {
  await axiosWRA.post("http://localhost:5000/auth/logout");
  localStorage.removeItem("access");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchAccount.rejected, (state) => {
        state.isFetching = false;
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isAuthenticated = true;
        state.account = action.payload;
      });
    builder.addCase(clearAccount.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.account = initialState.account;
    });
  },
});
