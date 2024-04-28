import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth.slice";
import { storageSlice } from "./storage.slice";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [storageSlice.name]: storageSlice.reducer,
});
