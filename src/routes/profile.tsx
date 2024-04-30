import ProfileCard from "@/components/ProfileCard";
import HeaderContainer from "@/containers/HeaderContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: () => (
    <>
      <HeaderContainer />
      <ProfileCard />
    </>
  ),
});

