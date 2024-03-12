import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers";
import { storageService } from "./reducers/services/storage.service";

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
