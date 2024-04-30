import ProfileCardContainer from "@/containers/ProfileCardContainer";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/profile")({
  component: () => (
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <ProfileCardContainer />
    </Flex>
  ),
});
