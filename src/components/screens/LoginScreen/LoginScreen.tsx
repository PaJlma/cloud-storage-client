import { FC } from "react";
import { LoginScreenProps } from "./types";
import LoginPage from "@/components/pages/LoginPage";
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import { Helmet } from "react-helmet";

const LoginScreen: FC<LoginScreenProps> = (props) => {
  return (
    <AuthenticationLayout>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <LoginPage />
    </AuthenticationLayout>
  );
};

export default LoginScreen;
