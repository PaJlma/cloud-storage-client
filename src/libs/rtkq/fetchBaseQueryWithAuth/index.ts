import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { FetchBaseQueryWithAuth } from "./types";
import { IAccessToken } from "@/types/account";
import axios from "axios";

export const fetchBaseQueryWithAuth: FetchBaseQueryWithAuth = (
  refreshUrl,
  args,
) => {
  const baseQuery = fetchBaseQuery({
    ...args,
    prepareHeaders: (headers) => {
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("access")}`,
      );
    },
  });
  return async (args, api, extraOptions) => {
    let initialResponse = await baseQuery(args, api, extraOptions);
    if (initialResponse.error && initialResponse.error.status === 401) {
      const refreshResponse = await axios.get<IAccessToken>(refreshUrl, {
        withCredentials: true,
      });
      if (refreshResponse.data) {
        localStorage.setItem("access", refreshResponse.data.access);
        initialResponse = await baseQuery(args, api, extraOptions);
      }
    }
    return initialResponse;
  };
};
