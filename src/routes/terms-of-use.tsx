import TermsOfUse from "@/components/TermsOfUse";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/terms-of-use")({
  component: () => (
    <Flex align="center" justify="center">
      <TermsOfUse />
    </Flex>
  ),
});

