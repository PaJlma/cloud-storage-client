import { createApi } from "@reduxjs/toolkit/query/react";
import { IEntity, IStorageInfo } from "@/types/storage";
import { fetchBaseQueryWithAuth } from "@/libs/rtkq";

export const storageService = createApi({
  reducerPath: "storage",
  baseQuery: fetchBaseQueryWithAuth("http://localhost:5000/auth/refresh", {
    baseUrl: "http://localhost:5000/storage",
  }),
  endpoints: (builder) => ({
    getStorageInfo: builder.query<IStorageInfo, string>({
      query: (userId) => `/${userId}`,
    }),
    getStorageList: builder.query<IEntity[], { userId: string; path: string }>({
      query: ({ userId, path }) => `/${userId}?path=${path}`,
    }),
    readFile: builder.query<string, { userId: string; path: string }>({
      query: ({ userId, path }) => `/${userId}/read?path=${path}`,
    }),
  }),
});

export const {
  useGetStorageInfoQuery,
  useGetStorageListQuery,
  useReadFileQuery,
} = storageService;
