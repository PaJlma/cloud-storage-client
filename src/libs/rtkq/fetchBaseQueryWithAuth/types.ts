import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryArgs } from "node_modules/@reduxjs/toolkit/dist/query/fetchBaseQuery";

export type FetchBaseQueryWithAuth = (
  refreshUrl: string,
  args: FetchBaseQueryArgs,
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
