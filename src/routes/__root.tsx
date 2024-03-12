import { accountPreloader } from "@/libs/tanstack-router";
import { accountSlice } from "@/store/reducers/slices/account.slice";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Route = createRootRoute({
  loader: accountPreloader(),
  component: () => {
    const { account } = Route.useLoaderData();
    const dispatch = useDispatch();

    useEffect(() => {
      if (!account) return;
      dispatch(accountSlice.actions.login(account));
    });
    return <Outlet />;
  },
});
