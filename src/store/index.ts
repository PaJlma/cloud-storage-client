import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers";

export const store = configureStore({
  reducer: root,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
