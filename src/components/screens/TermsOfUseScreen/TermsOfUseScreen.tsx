import { FC } from "react";
import { TermsOfUseScreenProps } from "./types";
import TermsOfUsePage from "@/components/pages/TermsOfUsePage";
import { Helmet } from "react-helmet";

const TermsOfUseScreen: FC<TermsOfUseScreenProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Правила обработки данных</title>
      </Helmet>
      <TermsOfUsePage />
    </>
  );
};

export default TermsOfUseScreen;
