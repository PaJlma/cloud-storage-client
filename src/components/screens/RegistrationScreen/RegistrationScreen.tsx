import RegistrationPage from "@/components/pages/RegistrationPage";
import { FC } from "react";
import { RegistrationScreenProps } from "./types";
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import { Helmet } from "react-helmet";

const RegistrationScreen: FC<RegistrationScreenProps> = (props) => {
  return (
    <AuthenticationLayout>
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <RegistrationPage />
    </AuthenticationLayout>
  );
};

export default RegistrationScreen;
