import HeaderContainer from "@/containers/HeaderContainer";
import EntityListContainer from "@/containers/Storage/EntityListContainer";
import InfoListContainer from "@/containers/Storage/InfoListContainer";
import { store } from "@/store";
import { fetchStorageInfo } from "@/store/reducers/storage.slice";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export interface MyStorageSearch {
  path: string;
}

export const Route = createFileRoute("/storage/my")({
  validateSearch: (search: Record<string, unknown>): MyStorageSearch => ({
    path: (search.path as string) ?? "/",
  }),
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      window.location.href = "/login";
      return;
    }
    store.dispatch(fetchStorageInfo());
  },
  component: () => (
    <Flex style={{ height: "100vh" }} vertical>
      <HeaderContainer />
      <Flex gap={20} justify="center" style={{ height: "90%" }}>
        <InfoListContainer />
        <EntityListContainer />
      </Flex>
    </Flex>
  ),
});
