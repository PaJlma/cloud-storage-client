import { store } from "@/store";
import { fetchAccount } from "@/store/reducers/auth.slice";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export interface RouterContextInterface {
  isAuthenticated: boolean;
}

export const Route = createRootRouteWithContext<RouterContextInterface>()({
  beforeLoad: async () => {
    await store.dispatch(fetchAccount());
    const { isAuthenticated } = store.getState().auth;
    return { isAuthenticated };
  },
  component: Outlet,
});
