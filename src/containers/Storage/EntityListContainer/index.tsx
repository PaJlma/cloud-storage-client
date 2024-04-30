import EntityList from "@/components/Storage/EntityList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootStateInterface } from "@/store";
import {
  fetchStorageList,
  setStorageSelected,
} from "@/store/reducers/storage.slice";
import {
  storageIsListFetchingSelector,
  storageListSelector,
} from "@/store/selectors/storage";
import { useSearch } from "@tanstack/react-router";
import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { EntityListContainerProps } from "./types";

const EntityListContainer: FC<EntityListContainerProps> = ({
  list,
  isFetching,
}) => {
  const { selected } = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();
  const { path } = useSearch({ from: "/storage/my" });

  useEffect(() => {
    dispatch(fetchStorageList(path));
    dispatch(setStorageSelected(null));
  }, [path]);

  return (
    <EntityList
      list={list}
      selected={selected}
      setSelected={(entity) => dispatch(setStorageSelected(entity))}
      path={path}
      isFetching={isFetching}
    />
  );
};

export default connect((state: RootStateInterface) => ({
  list: storageListSelector(state),
  isFetching: storageIsListFetchingSelector(state),
}))(EntityListContainer);
