import RegistrationForm from "@/components/Forms/RegistrationForm";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/registration")({
  component: () => (
    <Flex style={{ height: "100%" }} align="center" justify="center">
      <RegistrationForm />
    </Flex>
  ),
});

