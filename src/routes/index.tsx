import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/pages";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export const Route = createFileRoute("/")({
  component: () => (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  ),
});
