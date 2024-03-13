import { FC } from "react";
import { HomeScreenProps } from "./types";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePage from "@/components/pages/HomePage";
import { Helmet } from "react-helmet";

const HomeScreen: FC<HomeScreenProps> = (props) => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <HomePage />
    </DefaultLayout>
  );
};

export default HomeScreen;
