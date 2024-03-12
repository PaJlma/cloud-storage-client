import { combineReducers } from "@reduxjs/toolkit";
import { storageService } from "./services/storage.service";
import { accountSlice } from "./slices/account.slice";

const root = combineReducers({
  [accountSlice.reducerPath]: accountSlice.reducer,
  [storageService.reducerPath]: storageService.reducer,
});

export default root;
