import Header from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/storage/my")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      window.location.href = "/login";
    }
  },
  component: Header,
});

