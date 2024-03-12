import { FC } from "react";
import { HomeScreenProps } from "./types";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePage from "@/components/pages/HomePage";

const HomeScreen: FC<HomeScreenProps> = (props) => {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
};

export default HomeScreen;
