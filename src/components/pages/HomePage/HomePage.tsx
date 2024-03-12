import { FC } from "react";
import { HomePageProps } from "./types";
import { Flex } from "antd";
import HomePresentation from "./HomePresentation";

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <Flex vertical align="center">
      <HomePresentation />
    </Flex>
  );
};

export default HomePage;
