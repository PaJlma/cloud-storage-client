import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateInterface = ReturnType<typeof store.getState>;
