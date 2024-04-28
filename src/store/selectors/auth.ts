import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from ".";

export const authBaseSelector = createSelector(
  selectSelf,
  (state) => state.auth,
);

export const authIsAuthenticatedSelector = createSelector(
  authBaseSelector,
  (state) => state.isAuthenticated,
);

export const authAccountSelector = createSelector(
  authBaseSelector,
  (state) => state.account,
);

export const accountLoginSelector = createSelector(
  authAccountSelector,
  (state) => state.login,
);

export const accountNameSelector = createSelector(
  authAccountSelector,
  (state) => state.name,
);

export const accountColorSelector = createSelector(
  authAccountSelector,
  (state) => state.color,
);
