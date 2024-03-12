import RegistrationScreen from "@/components/screens/RegistrationScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/registration")({
  component: RegistrationScreen,
});
