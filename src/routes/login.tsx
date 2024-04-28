import LoginForm from "@/components/Forms/LoginForm";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/login")({
  component: () => (
    <Flex style={{ height: "100%" }} align="center" justify="center">
      <LoginForm />
    </Flex>
  ),
});
