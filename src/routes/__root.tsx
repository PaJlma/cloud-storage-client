import { store } from "@/store";
import { fetchAccount } from "@/store/reducers/auth.slice";
import { authIsAuthenticatedSelector } from "@/store/selectors/auth";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export interface RouterContextInterface {
  isAuthenticated: boolean;
}

let tryed = false;

export const Route = createRootRouteWithContext<RouterContextInterface>()({
  beforeLoad: async () => {
    if (!tryed) {
      await store.dispatch(fetchAccount());
      tryed = true;
    }
    const isAuthenticated = authIsAuthenticatedSelector(store.getState());
    return { isAuthenticated };
  },
  component: Outlet,
});
