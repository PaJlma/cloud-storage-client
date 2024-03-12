import LoginScreen from "@/components/screens/LoginScreen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginScreen,
});
