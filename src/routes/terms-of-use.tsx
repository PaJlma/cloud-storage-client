import TermsOfUseScreen from "@/components/screens/TermsOfUseScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUseScreen,
});

