import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from ".";

export const storageBaseSelector = createSelector(
  selectSelf,
  (state) => state.store,
);

export const storageIsInfoFetchingSelector = createSelector(
  storageBaseSelector,
  (state) => state.isInfoFetching,
);

export const storageInfoSelector = createSelector(
  storageBaseSelector,
  (state) => state.info,
);

export const storageTotalSizeSelector = createSelector(
  storageInfoSelector,
  (state) => state.totalSize,
);

export const storageMaxSizeSelector = createSelector(
  storageInfoSelector,
  (state) => state.maxSize,
);

export const storageEntitiesCount = createSelector(
  storageInfoSelector,
  (state) => state.entitiesCount,
);
